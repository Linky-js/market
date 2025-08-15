<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const isMobile = ref(false)

const checkWidth = () => {
  isMobile.value = window.innerWidth <= 768
}



const atBottom = ref(false)

const checkScroll = () => {
  const windowHeight = window.innerHeight
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight

  atBottom.value = windowHeight + scrollTop >= docHeight
}

onMounted(() => {
  checkWidth()
  window.addEventListener('resize', checkWidth)
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkWidth)
  window.removeEventListener('scroll', checkScroll)
})
</script>
<template>
  <div class="column">
    <div class="pay">
      <h2>Способ оплаты</h2>
      <div class="pay__switch">
        <input type="radio" name="pay" id="pay-1">
        <label for="pay-1">При получении</label>
        <input type="radio" name="pay" id="pay-2" checked>
        <label for="pay-2" class="pay__switch-cash">Сразу</label>
        <div class="bg"></div>
      </div>
      <Swiper class="pay__cart" :slides-per-view="'auto'" :space-between="6">
        <SwiperSlide>
          <input type="radio" name="cart" id="cart-1">
          <label for="cart-1">
            <NuxtImg :src="'/img/cart-1.png'" />
          </label>
        </SwiperSlide>
        <SwiperSlide>
          <input type="radio" name="cart" id="cart-2">
          <label for="cart-2">
            <NuxtImg :src="'/img/cart-2.png'" />
          </label>
        </SwiperSlide>
        <SwiperSlide>
          <input type="radio" name="cart" id="cart-3">
          <label for="cart-3">
            <NuxtImg :src="'/img/cart-3.png'" />
          </label>
        </SwiperSlide>
        <SwiperSlide>
          <input type="radio" name="cart" id="cart-4">
          <label for="cart-4">
            <NuxtImg :src="'/img/cart-4.png'" />
          </label>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="box">
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
      <NuxtLink v-if="!isMobile" to="/" class="btn">Оформить заказ</NuxtLink>
    </div>
    <div v-if="isMobile" :class="{ 'mob': true, 'at-bottom': atBottom }">
      <div class="mob__left">
        <div class="mob__price">
          <div>23 912 <span>₽</span></div>
          <div>36 769 <span>₽</span></div>
        </div>
        <div class="mob__col">12 товаров</div>
      </div>
      <NuxtLink to="/" class="btn">Оформить заказ</NuxtLink>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.column 
  max-width: 432px
  width: 100%
  flex-shrink: 0
  display: flex
  flex-direction: column
  gap: 12px
.pay 
  padding: 24px
  background: #fff
  border-radius: 12px
  display: flex
  flex-direction: column
  gap: 24px
  h2 
    font-size: 20px
    line-height: 25px
  &__cart 
    margin-left: 0
    .swiper-slide 
      max-width: max-content
    img 
      width: 104px
      height: 62px
      border-radius: 8px
    input 
      position: absolute
      width: 0
      height: 0
      opacity: 0
      visibility: visible
      &:checked + label 
        border-color: var(--color-blue)
    label 
      padding: 2px
      border-radius: 8px
      border: 1px solid transparent
      display: inline-block
  &__switch 
    position: relative
    width: 100%
    display: flex
    align-items: center
    height: 40px
    border-radius: 100px
    background: rgba(17, 138, 251, 0.15)
    .bg 
      width: 50%
      height: 100%
      content: ''
      position: absolute
      top: 0
      left: 0
      border-radius: 100px
      background: #118AFB
      transition: .3s all
    input 
      position: absolute
      width: 0
      height: 0
      opacity: 0
      visibility: visible
      &:checked + label
        color: #fff
      &:checked + .pay__switch-cash ~ .bg 
        transform: translateX(100%)
    label 
      width: 100%
      text-align: center
      z-index: 2
      position: relative
      color: #118AFB
      transition: .3s all
      cursor: pointer
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
  &.at-bottom 
    .mob__left
      opacity: 0
      visibility: hidden
      position: absolute
      left: 0
    .btn 
      max-width: 100%

  .btn 
    font-size: 14px
    line-height: 20px
    padding: 10px 40px
    max-width: max-content
    transition: .3s all
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
  .column
    max-width: 100%
  .box 
    max-width: 100% 
@media (max-width: 768px)
  .column 
    gap: 8px
  .pay 
    padding: 20px 16px
  .right 
    padding: 20px 16px
</style>