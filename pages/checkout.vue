<script setup>
import CheckoutHead from '~/components/checkout/CheckoutHead.vue';
import CheckoutLeft from '~/components/checkout/CheckoutLeft.vue';
import CheckoutRight from '~/components/checkout/CheckoutRight.vue';
</script>

<template>
  <div class="checkout">
    <CheckoutHead />
    <div class="checkout__content">
      <CheckoutLeft />
      <CheckoutRight />
    </div>
  </div>
</template>
<style lang="sass" scoped>
.checkout 
  padding: 24px 48px
.checkout__content 
  display: flex
  gap: 24px
@media (max-width: 1440px)
  .checkout 
    padding: 24px
@media (max-width: 991px)
  .checkout__content 
    flex-direction: column
@media (max-width: 768px)
  .checkout 
    padding: 0
    &__content 
      gap: 8px
</style>