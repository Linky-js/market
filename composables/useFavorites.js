import { useCookie } from '#app'
import { useStore } from '@/stores/index'

export const useFavorites = () => {
  const apiDomain = 'https://api.skynet-cloud.ru'

  // Добавить/убрать из избранного
  const toggleFavorite = async (productId) => {
    try {
      const store = useStore() // 👉 вызывать здесь, а не наверху
      const user = store.user
      const accessToken = useCookie('access_token')
      const sessionId = useCookie('session_id', {
        maxAge: 60 * 60 * 24 * 30 // 30 дней
      })

      const url = `${apiDomain}/api/favorites/toggle/${productId}`

      console.log("user", user);
      
      if (accessToken.value) {
        return await $fetch(url + '?product_id=' + productId + '&user_id=' + user.id, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken.value}`
          }
        })
      }

      // Если не авторизован 
      if (!sessionId.value) {
        sessionId.value = crypto.randomUUID()
      }

      return await $fetch(url + '?session_id=' + sessionId.value, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Session-ID': sessionId.value
        }
      })
    } catch (err) {
      console.error('Ошибка при добавлении в избранное:', err)
      throw err
    }
  }

  // Проверка, есть ли товар в избранном
  const checkFavorites = async (productIds) => {
    try {
      const accessToken = useCookie('access_token')
      const sessionId = useCookie('session_id', {
        maxAge: 60 * 60 * 24 * 30
      })

      const url = `${apiDomain}/api/favorites/check`

      if (accessToken.value) {
        return await $fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken.value}`
          },
          body: {
            product_ids: Array.isArray(productIds) ? productIds : [productIds]
          }
        })
      }

      // Гостевой пользователь
      if (!sessionId.value) {
        sessionId.value = crypto.randomUUID()
      }

      return await $fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Session-ID': sessionId.value
        },
        body: {
          product_ids: Array.isArray(productIds) ? productIds : [productIds],
          session_id: sessionId.value
        }
      })
    } catch (err) {
      console.error('Ошибка при проверке избранного:', err)
      throw err
    }
  }

  return {
    toggleFavorite,
    checkFavorites
  }
}
