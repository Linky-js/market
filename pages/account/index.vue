<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AccInfo from '~/components/account/AccInfo.vue';
import AccMenu from '~/components/account/AccMenu.vue';
import SliderProducts from '~/components/product/SliderProducts.vue';

const isMobile = ref(false)
const currentView = ref('menu')

const checkWidth = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkWidth()
  window.addEventListener('resize', checkWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkWidth)
})

const showInfo = () => { currentView.value = 'info' }
const showMenu = () => { currentView.value = 'menu' }
</script>
<template>
  <div class="account">
    <template v-if="isMobile">
      <AccMenu v-if="currentView === 'menu'" @open-info="showInfo" />
      <AccInfo v-else @back="showMenu" />
    </template>

    <template v-else>
      <AccMenu />
      <AccInfo />
    </template>
  </div>
  <SliderProducts v-if="isMobile && currentView === 'menu'" :title="'Может понравиться'" />
</template>

<style lang="sass" scoped>
.account 
  display: flex
  align-items: flex-start
  gap: 24px
  padding: 48px
@media (max-width: 1440px)
  .account 
    padding: 24px
@media (max-width: 768px)
  .account
    padding: 0
    margin-bottom: 8px
</style>