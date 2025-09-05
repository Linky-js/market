import { jwtDecode } from 'jwt-decode'
import { useCookie, useFetch } from '#app'
import { useFavoritesStore } from '@/stores/favorites'

export const useAuthCheck = async () => {
  const accessToken = useCookie('access_token')
  const refreshToken = useCookie('refresh_token')
  const sessionId = useCookie('session_id', {
    maxAge: 60 * 60 * 24 * 30 // 30 дней
  })

  const favoritesStore = useFavoritesStore()

  const isExpired = (token) => {
    try {
      const { exp } = jwtDecode(token)
      return Date.now() >= exp * 1000
    } catch (e) {
      return true
    }
  }

  // --- Проверка / обновление токенов ---
  if (!accessToken.value) {
    if (refreshToken.value) {
      console.log('Обновляем токен')

      const { data } = await useFetch('https://api.skynet-cloud.ru/api/auth/refresh_token', {
        method: 'POST',
        body: {
          refresh_token: refreshToken.value,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${refreshToken.value}`,
        },
      })
      console.log('data', data.value);
      
      if (data.value?.access_token) {
        const newAccess = useCookie('access_token', { maxAge: 60 * 60 * 1 })
        const newRefresh = useCookie('refresh_token', { maxAge: 60 * 60 * 24 * 1 })

        newAccess.value = data.value.access_token
        newRefresh.value = data.value.refresh_token
      } else {
        console.log('Refresh не сработал, чистим токены')
        accessToken.value = null
        refreshToken.value = null
      }
    } else {
      console.log('Нет токенов, работаем как гость')
      accessToken.value = null
      refreshToken.value = null
    }
  }

  // --- Загружаем избранное ---
  try {
    const apiDomain = 'https://api.skynet-cloud.ru'
    const url = `${apiDomain}/api/favorites/list`

    let res

    if (accessToken.value) {
      res = await $fetch(url + '?page=1&page_size=200', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken.value}`
        }
      })
    } else {
      // Гость
      if (!sessionId.value) {
        sessionId.value = crypto.randomUUID()
      }

      res = await $fetch(url + '?page=1&page_size=200', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'X-Session-ID': sessionId.value
        }
      })
      console.log('Гость:', res);
      
    }

    favoritesStore.setFavorites(res?.items || {})
    return false
  } catch (e) {
    console.error('Ошибка загрузки избранного:', e)
    favoritesStore.setFavorites({})
  }

  return true
}
