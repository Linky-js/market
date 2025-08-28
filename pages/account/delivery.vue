<script setup>
import AccDelivery from '~/components/account/AccDelivery.vue';
import AccMenu from '~/components/account/AccMenu.vue';
import ClearDelivery from '~/components/account/ClearDelivery.vue';

const isMobile = ref(false)

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
</script>
<template>
  <div class="account">
    <AccMenu customClass="not" v-if="!isMobile"/>
    <h2 v-if="isMobile">Доставки</h2>
    <!-- <ClearDelivery /> -->
    <AccDelivery />
  </div>
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
    flex-direction: column
    gap: 8px
  h2 
    text-align: center
    display: block
    padding-top: 16px
    padding-bottom: 8px
    width: 100%
</style>