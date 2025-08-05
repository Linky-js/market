import { useCookie, useFetch } from '#app'

export const useFetchUser = async () => {
  const accessToken = useCookie('access_token')

  const { data, error } = await useFetch('https://api.skynet-cloud.ru/api/auth/my', {
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  })

  if (error.value) {
    console.error("Ошибка получения пользователя", error.value)
    return null
  }

  return data.value
}