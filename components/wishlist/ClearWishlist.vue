<script setup>

</script>
<template>
  <div class="clear">
    <p>В избранном нет товаров</p>
    <NuxtLink to="/" class="btn">Перейти в каталог</NuxtLink>
  </div>
</template>
<style lang="sass" scoped>
.clear 
  padding: 96px 16px
  text-align: center
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center
  gap: 16px
  background: #fff
  width: 100%
  border-radius: 12px
  p 
    font-size: 20px
    line-height: 25px
    font-weight: 500
  .btn 
    background: var(--color-blue)
    padding: 10px 24px
    border-radius: 100px
    text-align: center
    display: inline-block
    color: #fff
    font-size: 16px
    line-height: 20px
    letter-spacing: -0.02em
    &:hover 
      background: #0073DD
@media (max-width: 768px)
  .clear 
    margin-bottom: 8px
    padding: 0
    height: 100vh
    max-height: 588px
    p 
      font-size: 16px
      line-height: 20px
    .btn 
      font-size: 14px
</style>