// composables/useAuthCheck.js
import { jwtDecode } from 'jwt-decode'
import { useCookie, useFetch } from '#app'

export const useAuthCheck = async () => {
  const accessToken = useCookie('access_token')
  const refreshToken = useCookie('refresh_token')

  const isExpired = (token) => {
    try {
      const { exp } = jwtDecode(token)
      return Date.now() >= exp * 1000
    } catch (e) {
      return true
    }
  }

  if (!accessToken.value || isExpired(accessToken.value)) {
    // access истёк
    if (!refreshToken.value || isExpired(refreshToken.value)) {
      // refresh истёк
      accessToken.value = null
      refreshToken.value = null
      return false
    }

    // обновление токена
    const { data, error } = await useFetch('https://api.skynet-cloud.ru/api/auth/refresh', {
      method: 'POST',
      body: {
        refresh_token: refreshToken.value,
      },
    })

    if (data.value?.access_token) {
      accessToken.value = data.value.access_token
      refreshToken.value = data.value.refresh_token
      return true
    } else {
      // refresh не сработал
      accessToken.value = null
      refreshToken.value = null
      return false
    }
  }

  return true
}
