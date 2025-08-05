<script setup>
import { useAuthCheck } from '@/composables/useAuthCheck'
import { useFetchUser } from '@/composables/useFetchUser'
import { ref, onMounted } from 'vue'
const user = ref(null)

const isMobile = ref(false)

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
</script>
<template>
  <Head>
    <Title>Маркетплейс Карена</Title>
    <Meta
      name="description"
      content="Маркетплейс для продажи товаров и услуг в Краснодаре"
    />
  </Head>
  <Header />
  <NuxtPage />
  <Footer v-if="isMobile" />
</template>
