<script setup>
import { useAuthCheck } from '@/composables/useAuthCheck'
import { useFetchUser } from '@/composables/useFetchUser'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const user = ref(null)
const isMobile = ref(false)
const route = useRoute()

const checkWidth = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(async () => {
  console.log(user.value);
  checkWidth()
  window.addEventListener('resize', checkWidth)
  const isValid = await useAuthCheck()
  if (isValid) {
    user.value = await useFetchUser()
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', checkWidth)
})
const showHeader = computed(() => {
  return !isMobile.value || route.path === '/'
})
</script>
<template>
  <Head>
    <Title>Маркетплейс Карена</Title>
    <Meta
      name="description"
      content="Маркетплейс для продажи товаров и услуг в Краснодаре"
    />
  </Head>
  <Header v-if="showHeader" />
  <NuxtPage />
  <Footer v-if="isMobile" />
</template>
