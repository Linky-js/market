
<script  setup>
import SliderProducts from '~/components/product/SliderProducts.vue';
import CartProducts from '~/components/cart/CartProducts.vue';
import CartRight from '~/components/cart/CartRight.vue';
// import ClearCart from '~/components/cart/ClearCart.vue';
import CartAdress from '~/components/cart/CartAdress.vue';

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
  <CartAdress v-if="isMobile"/>
  <div class="basket">
    <!-- Скрывать basket__top если корзина пуста -->
    <div class="basket__top"> 
      <CartProducts />
      <CartRight />
    </div>
    <!-- <ClearCart /> -->
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
@media (max-width: 1440px)
  .basket 
    padding: 24px
@media (max-width: 768px)
  .basket 
    padding: 8px 0
    gap: 8px
</style>