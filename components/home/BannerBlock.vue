<script setup>
import { ref, onMounted } from "vue";

const loading = ref(true);

onMounted(() => {
  // Имитируем загрузку
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
const props = defineProps({
  image: String
})
</script>

<template>
  <div class="banner">
    <div v-if="loading" class="block bg-gray-200 animate-pulse" ></div>
    <NuxtImg v-else :src="props.image" format="webp"/>
  </div>
</template>

<style lang="sass" scoped>
.banner 
  padding: 24px 48px
  .block
    height: 320px
    width: 100%
    border-radius: 8px
  img
    width: 100%
    height: 320px
    object-fit: cover
    border-radius: 8px
</style>