<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

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
</script>


<template>
  <div class="slider">
    <Swiper class="slider-left" direction="vertical" :slides-per-view="5" :space-between="8">
      <SwiperSlide v-for="(img, i) in images" :key="'thumb-' + i" @click="handleThumbClick(i)">
        <img :src="img" />
      </SwiperSlide>
    </Swiper>

    <Swiper class="slider-right"  @swiper="onMainSwiperInit">
      <SwiperSlide v-for="(img, i) in images" :key="'main-' + i">
        <img :src="img" />
      </SwiperSlide>
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
</style>
