<script setup>
import AccDelivery from '~/components/account/AccDelivery.vue';
import AccMenu from '~/components/account/AccMenu.vue';
</script>
<template>
  <div class="account">
    <AccMenu customClass="not"/>
    <AccDelivery />
  </div>
</template>



<style lang="sass" scoped>
.account 
  display: flex
  align-items: flex-start
  gap: 24px
  padding: 48px
</style>