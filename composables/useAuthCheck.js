import { jwtDecode } from 'jwt-decode'
import { useCookie, useFetch } from '#app'

export const useAuthCheck = async () => {
  const accessToken = useCookie('access_token')
  const refreshToken = useCookie('refresh_token')

  const isExpired = (token) => {
    try {
      const { exp } = jwtDecode(token)
      console.log('token', exp); 
      return Date.now() >= exp * 1000
    } catch (e) {
      return true
    }
  }

  if (!accessToken.value ) {
    console.log('Токен истёк');
    
    // access истёк
    if (!refreshToken.value) {
      console.log('Токен истёк2');
      // refresh истёк → это реально логаут
      accessToken.value = null
      refreshToken.value = null
      return false
    }

    // обновление токена
    const { data } = await useFetch('https://api.skynet-cloud.ru/api/auth/refresh', {
      method: 'POST',
      body: {
        refresh_token: refreshToken.value,
      },
    })

    if (data.value?.access_token) {
      const newAccess = useCookie('access_token', { maxAge: 60 * 60 * 1 })
      const newRefresh = useCookie('refresh_token', { maxAge: 60 * 60 * 24 * 1 })

      newAccess.value = data.value.access_token
      newRefresh.value = data.value.refresh_token

      return true
    } else {
      // refresh не сработал → логаут
      console.log('Не удалось обновить токен');
      
      accessToken.value = null
      refreshToken.value = null
      return false
    }
  }

  return true
}
