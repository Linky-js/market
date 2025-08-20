import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStore = defineStore('user', () => {
  const user = ref({
    id: false,
    username: 'guest',
    email: '',
    name: '',
    isLogged: false,
  })

  const refreshToken = ref('')
  const accessToken = ref('')
  const apiDomain = ref('https://api.skynet-cloud.ru')
  const categories = ref([])


  const isLoggedIn = computed(() => user.value.isLogged)

  function setUser(data) {
    user.value = {
      ...user.value,
      ...data,
      isLogged: true,
    }
    accessToken.value = data.bearer || ''
  }
  function setCategories(data) {
    categories.value = data
  }
  function getCategories() {
    return categories.value
  }

  function logout() {
    user.value = {
      id: false,
      username: 'guest',
      bearer: '',
      email: '',
      name: '',
      isLogged: false,
    }
    accessToken.value = ''
    refreshToken.value = ''
  }

  return {
    user,
    isLoggedIn,
    refreshToken,
    accessToken,
    apiDomain,
    categories,
    setUser,
    logout,
    setCategories,
    getCategories
  }
})