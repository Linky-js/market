
<script  setup>
import SliderProducts from '~/components/product/SliderProducts.vue';
import CartProducts from '~/components/cart/CartProducts.vue';
import CartRight from '~/components/cart/CartRight.vue';
</script>
<template>
  <div class="basket">
    <div class="basket__top">
      <CartProducts />
      <CartRight />
    </div>
    <SliderProducts :title="'Последние просмотренные'" />
    <SliderProducts :title="'Избранное'" />
    <SliderProducts :title="'Может понравиться'" />
    <SliderProducts :title="'Вы это заказывали'" />
  </div>
</template>
<style lang="sass" scoped>
.basket 
  display: flex
  flex-direction: column
  gap: 24px
  padding: 48px
  &__top 
    display: flex
    gap: 24px
    align-items: flex-start
</style>