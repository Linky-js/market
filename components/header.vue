<script setup>
import { ref, onMounted } from "vue";
import searchHeader from "./ui/searchHeader.vue";
import IconHeader from "./ui/iconHeader.vue";
import CatalogMenu from "./common/CatalogMenu.vue";

const loading = ref(true);

onMounted(() => {
  // Имитируем загрузку
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
// Состояние открытия меню
const isMenuOpen = ref(false)

// Переключение меню
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.classList.toggle('o-hidden', isMenuOpen.value)
}
</script>

<template>
  <header>
    <!-- Загрузка -->
    <div v-if="loading" class="flex items-center gap-4 w-full">

      <div class="w-20 h-10 bg-gray-200 rounded animate-pulse"></div>

      <div class="flex-1 h-10 bg-gray-200 rounded animate-pulse"></div>

      <div class="flex gap-3">
        <div v-for="i in 3" :key="i" class="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    </div>

    <div v-else class="flex items-center gap-4 w-full">

      <div class="header__logo">
        Logo
      </div>
      <div class="header__search">
        <div class="burger" :class="{ active: isMenuOpen }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <searchHeader />
      </div>
      <div class="flex items-center gap-4">
        <IconHeader :name="'shop'" :link="'/'" />
        <IconHeader :name="'whishlist'" :link="'/whishlist'" />
        <IconHeader :name="'user'" :link="'/user'" />
      </div>
    </div>
  </header>

  <CatalogMenu :open="isMenuOpen" @close="toggleMenu" />
</template>

<style scoped lang="sass">
header 
  background: #fff
  padding: 25px 48px
  position: relative
  z-index: 5
.header__search 
  width: 100%
  border-radius: 8px
  border: 2px solid var(--color-blue)
  padding-left: 16px
  display: flex
  align-items: center
.burger
  display: flex
  flex-direction: column
  gap: 5px
  cursor: pointer
  width: 20px
  height: 20px
  justify-content: center
  align-items: center
  span
    width: 20px
    height: 2px
    background: var(--color-black)
    transition: all 0.3s ease

  &.active
    span:nth-child(1)
      transform: rotate(45deg) translate(5px, 5px)
    span:nth-child(2)
      opacity: 0
    span:nth-child(3)
      transform: rotate(-45deg) translate(5px, -5px)
.header__logo 
  max-width: 146px
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  padding: 10px
  background: #EDEDED
  border-radius: 8px
  font-size: 24px
  line-height: 100%
  letter-spacing: -0.02em
  color: #898989
  font-weight: 800
  font-style: italic
</style>