<script setup>
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
  <div class="clear">
    <div class="clear__top">
      <h2>Корзина</h2>
      <p v-if="isMobile">0 товаров</p>
    </div>
    <div class="clear__content">
      <p>У вас нет товаров :(</p>
      <NuxtLink to="/" class="btn">Перейти в каталог</NuxtLink>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.clear
  h2 
    margin-bottom: 20px
    text-align: center
  &__content 
    height: 272px
    border-radius: 12px
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    gap: 16px
    border-radius: 12px
    background: #fff
    transition: .3s all
    p 
      font-size: 20px
      line-height: 120%
      letter-spacing: -0.02em
      text-align: center
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
    background: #fff
    border-radius: 12px
    padding: 20px 16px 90px
    &__content 
      background: none
      height: auto
      border-radius: 0
      p 
        font-size: 16px
        line-height: 120%
      .btn 
        font-size: 14px
        line-height: 120%
    &__top 
      display: flex
      align-items: center
      gap: 12px
      margin-bottom: 60px
      h2 
        margin-bottom: 0
      p 
        font-size: 16px
        line-height: 22px
        letter-spacing: -0.02em
        color: #999
</style>