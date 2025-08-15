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
  <div v-if="!isMobile" class="box">
    <div class="right">
      <div class="right__head">
        <h2>Ваш заказ</h2>
        <p>12 товаров</p>
      </div>
      <div class="right__table">
        <div class="right__item">
          <p>товары</p>
          <p class="price">36 769 <span>₽</span></p>
        </div>
        <div class="right__item">
          <p>скидка</p>
          <p class="price red">- 12 857 <span>₽</span></p>
        </div>
        <div class="right__item">
          <p>стоимость доставки</p>
          <p class="price green">Бесплатно</p>
        </div>
      </div>
      <div class="right__result">
        <h2>Итого</h2>
        <p>23 912 <span>₽</span></p>
      </div>
    </div>
    <NuxtLink to="/" class="btn">Оформить заказ</NuxtLink>
  </div>
  <div v-else class="mob">
    <div class="mob__left">
      <div class="mob__price">
        <div>23 912 <span>₽</span></div>
        <div>36 769 <span>₽</span></div>
      </div>
      <div class="mob__col">12 товаров</div>
    </div>
    <NuxtLink to="/" class="btn">Оформить заказ</NuxtLink>
  </div>
</template>
<style lang="sass" scoped>
.box 
  max-width: 432px
  width: 100%
  flex-shrink: 0
  display: flex
  flex-direction: column
  gap: 24px
.right 
  padding: 24px
  background: #fff
  border-radius: 12px
  &__head 
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 16px
    p 
      color: #a1a1a1
      font-weight: 500
      font-size: 16px
      line-height: 100%
      letter-spacing: -0.02em
  &__table 
    padding-top: 16px
    padding-bottom: 16px
    border-top: 1px solid #F2F4F8
    border-bottom: 1px solid #F2F4F8
    display: flex
    flex-direction: column
    gap: 12px
  &__item 
    display: flex
    align-items: center
    justify-content: space-between
    p 
      font-weight: 500
      font-size: 16px
      line-height: 20px
      letter-spacing: -0.02em
    .price 
      font-size: 16px
      line-height: 20px
      letter-spacing: -0.02em
      font-weight: 600
      span 
        font-size: 12px
      &.red 
        color: #FB4711
      &.green 
        color: #33DD58
  &__result 
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 16px
    p 
      font-size: 20px
      line-height: 25px
      letter-spacing: -0.02em
      font-weight: 600
      span 
        font-size: 16px
        line-height: 100%
.btn 
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 16px
  text-align: center
  background: var(--color-blue)
  color: #fff
  border-radius: 100px
  font-size: 18px
  line-height: 20px
  letter-spacing: -0.02em
  font-weight: 600
  transition: .3s all
  &:hover 
    background: #0073DD
.mob 
  position: fixed
  bottom: 56px
  box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.25)
  z-index: 2
  width: 100%
  background: #fff
  border-radius: 12px 12px 0 0
  padding: 10px 16px
  display: flex
  align-items: center
  justify-content: space-between
  .btn 
    font-size: 14px
    line-height: 20px
    padding: 10px 40px
    max-width: max-content
  &__col 
    color: #838383
    font-size: 9px
    line-height: 120%
  &__price 
    display: flex
    align-items: center
    gap: 7px
    margin-bottom: 2px
    div
      &:first-child 
        font-size: 18px
        line-height: 100%
        color: #FB4711
        font-weight: 700
        span 
          font-size: 14px
          font-weight: 600
      &:last-child 
        font-size: 14px
        line-height: 100%
        color: #A1A1A1
        font-weight: 500
        span 
          font-size: 10px
          line-height: 100%

@media (max-width: 991px)
  .box 
    max-width: 300px
</style>