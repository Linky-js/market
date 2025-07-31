<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const images = [
  '/img/product-big.jpg',
  '/img/product.jpg',
  '/img/product-big.jpg',
  '/img/product.jpg',
  '/img/product-big.jpg',
  '/img/product.jpg',
  '/img/product-big.jpg',
  '/img/product.jpg',
]

const mainSwiperInstance = ref(null)

const onMainSwiperInit = (swiper) => {
  mainSwiperInstance.value = swiper
}

const handleThumbClick = (index) => {
  if (mainSwiperInstance.value) {
    mainSwiperInstance.value.slideTo(index)
  }
}

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
  <div class="slider">
    <Swiper v-if="!isMobile" class="slider-left" direction="vertical" :slides-per-view="5" :space-between="8">
      <SwiperSlide v-for="(img, i) in images" :key="'thumb-' + i" @click="handleThumbClick(i)">
        <img :src="img" />
      </SwiperSlide>
    </Swiper>

    <Swiper class="slider-right" @swiper="onMainSwiperInit" :slides-per-view="1" :space-between="0"
      :modules="[Pagination]" :pagination="{
        el: '.sl-pag', bulletClass: 'sl-pag-bullet',
        bulletActiveClass: 'sl-pag-bullet-active',  clickable: true
      }">
      <SwiperSlide v-for="(img, i) in images" :key="'main-' + i">
        <img :src="img" />
      </SwiperSlide>
      <div class="sl-pag"></div>
    </Swiper>
  </div>
</template>

<style lang="sass" scoped>
.slider 
  display: flex
  justify-content: flex-start
  gap: 8px
  height: 592px
  max-width: calc(594px * 100% / 1296px)
  &-left 
    width: 66px
    flex-shrink: 0
    .swiper-slide 
      width: 100%
      max-height: 78px
    img 
      width: 100%
      height: 100%
      object-fit: cover
      cursor: pointer
      border-radius: 8px
  &-right 
    max-width: 100%
    width: 100%
    img 
      border-radius: 8px
      width: 100%
      height: 100%
      object-fit: cover
.sl-pag
  display: none
  position: absolute
  bottom: -1px
  padding-top: 5px
  padding-bottom: 3px
  border-top-left-radius: 12px
  border-top-right-radius: 12px
  left: 0
  width: 100%
  background: #fff
  z-index: 2
  height: 11px
  &-bullet
    width: 5px
    height: 5px
    background: #D7D7D7
    opacity: 1
    display: inline-block
    border-radius: 50%

@media (max-width: 1200px)
  .slider 
    max-width: calc(60% - 12px)
@media (max-width: 768px)
  .slider 
    max-width: 100%
  .sl-pag 
    display: flex
    align-items: center
    justify-content: center
    gap: 4px
  .slider
    height: 444px
    order: 1
    &-right 
      img 
        border-radius: 0
</style>
