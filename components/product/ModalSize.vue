<script setup>
import { defineEmits } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Thumbs } from 'swiper/modules'
import 'swiper/css'
const sizes = [
  '/img/size.jpg',
  '/img/size.jpg',
  '/img/size.jpg',
  '/img/size.jpg',
  '/img/size.jpg',
  '/img/size.jpg',
]
const thumbsSwiper = ref(null)


const emit = defineEmits(['close'])

const onBackdropClick = (e) => {
  if (e.target.classList.contains('modal')) {
    emit('close')
  }
}
</script>
<template>
  <div class="modal" @click="onBackdropClick">
    <div class="modal__content">
      <div class="modal__close" @click="emit('close')">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="16" fill="#ECECEC" />
          <path d="M12 12L20 20" stroke="#232323" stroke-width="2" stroke-linecap="round" />
          <path d="M20 12L12 20" stroke="#232323" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      <h2>Таблица размеров</h2>
      <div class="modal__swiper">
        <!-- Левый -->
        <Swiper class="slider-left" direction="vertical" :slides-per-view="'auto'" :space-between="8"
          @swiper="thumbsSwiper = $event" :watch-slides-progress="true" :breakpoints="{
            0: {
              direction: 'horizontal', 
              slidesPerView: 'auto',       
            },
            768: {
              direction: 'vertical',
              slidesPerView: 'auto',
            }
          }">
          <SwiperSlide v-for="(img, i) in sizes" :key="'thumb-' + i">
            <img :src="img" />
          </SwiperSlide>
        </Swiper>

        <!-- Правый (основной) -->
        <Swiper class="slider-right" :slides-per-view="1" :space-between="0" :thumbs="{ swiper: thumbsSwiper }"
          :modules="[Thumbs]">
          <SwiperSlide v-for="(img, i) in sizes" :key="'main-' + i">
            <img :src="img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.modal
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(35, 35, 35, 0.5)
  display: flex
  justify-content: center
  align-items: center
  z-index: 10
  &__content
    max-width: 1000px
    width: 100%
    background: #fff
    border-radius: 12px
    padding: 48px
    position: relative
    h2 
      margin-bottom: 24px
  &__close 
    position: absolute
    right: 12px
    top: 12px
    cursor: pointer
  &__swiper 
    display: flex
.slider-left 
  max-width: 66px
  width: 100%
  max-height: 508px
  .swiper-slide 
    max-height: max-content
    border-radius: 4px
    overflow: hidden
  .swiper-slide-thumb-active 
    border: 2px solid var(--color-blue)
.slider-right 
  .swiper-slide 
    border-radius: 12px
    overflow: hidden
    display: flex
    align-items: center
    justify-content: center
    max-height: 508px
    img 
      height: 100%
      width: auto
@media (max-width: 768px)
  .modal__content 
    border-radius: 0
    height: 100%
    padding: 16px
  .modal__close
    right: 16px
    top: 16px
    svg 
      width: 24px
      height: 24px
  .modal__swiper 
    flex-direction: column-reverse
    justify-content: space-between
    height: 94%
    gap: 20px
  .slider-right 
    max-height: 100%
    max-width: 100%
    .swiper-slide
      max-height: 100%  
      height: 100%
  .slider-left 
    max-height: 100%  
    max-width: 100% 
    .swiper-slide 
      max-width: 66px
      max-height: 78px
</style>