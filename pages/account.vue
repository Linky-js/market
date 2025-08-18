<script setup>
import AccInfo from '~/components/account/AccInfo.vue';
import AccMenu from '~/components/account/AccMenu.vue';
</script>
<template>
  <div class="account">
    <AccMenu />
    <AccInfo />
  </div>
</template>

<style lang="sass" scoped>
.account 
  display: flex
  align-items: flex-start
  gap: 24px
  padding: 48px
</style>