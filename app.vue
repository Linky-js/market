<script setup>
import { onMounted } from "vue";
const user = useCookie('user');

onMounted(() => {
  console.log(user.value);
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
</template>
