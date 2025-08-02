<script setup>
import { ref, onMounted } from "vue";
const user = useCookie('user');

const isMobile = ref(false)

const checkWidth = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  console.log(user.value);
  checkWidth()
  window.addEventListener('resize', checkWidth)
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
