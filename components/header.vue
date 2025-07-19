<script setup>
import { ref, onMounted } from "vue";
import searchHeader from "./ui/searchHeader.vue";
import IconHeader from "./ui/iconHeader.vue";

const loading = ref(true);

onMounted(() => {
  // Имитируем загрузку
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
</script>

<template>
  <header class="flex items-center p-4 border-b">
    <!-- Загрузка -->
    <div v-if="loading" class="flex items-center gap-4 w-full">
      
      <div class="w-20 h-10 bg-gray-200 rounded animate-pulse"></div>

      <div class="flex-1 h-10 bg-gray-200 rounded animate-pulse"></div>

      
      <div class="flex gap-3">
        <div
          v-for="i in 3"
          :key="i"
          class="w-6 h-6 bg-gray-200 rounded-full animate-pulse"
        ></div>
      </div>
    </div>

    <div v-else class="flex items-center gap-4 w-full">
      
      <div
        class="w-20 h-10 bg-gray-100 flex items-center justify-center text-gray-400 font-bold italic"
      >
        Logo
      </div>
      <searchHeader />
      <div class="flex items-center gap-4">
        <IconHeader :name="'shop'" :link="'/'" />
        <IconHeader :name="'whishlist'" :link="'/whishlist'" />
        <IconHeader :name="'user'" :link="'/user'" />
      </div>
    </div>
  </header>
</template>