
<script setup>

</script>
<template>
  <div class="head">
    <p>Оформление заказа</p>
    <NuxtLink to="/cart">В корзину</NuxtLink>
  </div>
</template>
<style lang="sass" scoped>
.head 
  padding: 8px 24px
  margin-bottom: 12px
  max-width: calc(100% - 456px)
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  gap: 15px
  p 
    font-size: 16px
    font-weight: 600
    line-height: 20px
    letter-spacing: -0.02em
  a 
    font-size: 14px
    line-height: 18px
    letter-spacing: -0.02em
    color: var(--color-blue)
    &:hover 
      text-decoration: underline
@media (max-width: 991px)
  .head 
    max-width: 100%
@media (max-width: 768px)
  .head 
    padding: 16px 16px 8px
</style>