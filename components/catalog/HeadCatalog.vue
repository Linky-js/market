<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

const tags = ['Брюки', 'Верхняя одежда', 'Джемперы', 'Пальто', 'Юбки классические', 'Брюки со стрелками', 'Верхняя одежда', 'Джемперы', 'Пальто', 'Длинные юбки', 'Джинсы', 'Кожанные куртки', 'Шарф в клетку', 'Рубашка утепленная']

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
  <div class="head">
    <div class="bred">
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/">Женщинам</NuxtLink>
      <NuxtLink to="/">Рубашки и блузы</NuxtLink>
    </div>
    <h2>Женские блузы и рубашки</h2>
    <div class="tags" v-if="!isMobile">
      <div class="tags__item" v-for="tag in tags" :key="tag">{{ tag }}</div>
    </div>
    <Swiper v-if="isMobile" class="tags"  :slides-per-view="'auto'" :space-between="6">
      <SwiperSlide class="tags__item" v-for="tag in tags" :key="tag">
        {{ tag }}
      </SwiperSlide>
    </Swiper>

  </div>
</template>
<style lang="sass" scoped>
.head 
  display: flex
  flex-direction: column
  gap: 16px
  margin-bottom: 24px
.bred 
  display: flex
  align-items: center
  gap: 4px
  a 
    color: #999999
    font-size: 12px
    line-height: 16px
    letter-spacing: -0.02em
    &:hover 
      color: var(--color-blue)
    &::after 
      content: '/'
      margin-left: 4px
    &:last-child
      &::after 
        display: none
.tags 
  display: flex
  gap: 6px
  flex-wrap: wrap
  max-width: 1064px
  width: 100%
  &__item 
    font-size: 14px
    line-height: 120%
    letter-spacing: -0.02em
    font-weight: 500
    color: #232323
    padding: 6px 12px
    border-radius: 65px
    background: #E7E9EC
@media (max-width: 768px)
  .tags 
    display: block
    &__item 
      max-width: max-content
  .head 
    gap: 14px
    padding-left: 16px
    padding-right: 16px
    h2 
      font-size: 20px
      line-height: 110% 
  .bread 
    margin-bottom: 2px
</style>