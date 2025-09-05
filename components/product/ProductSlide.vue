<script setup>
import { ref, onMounted, onUnmounted, nextTick, defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'


const props = defineProps({
  images: {
    type: Array,
    required: false,
    default: () => []
  }
})


const thumbsSwiperMain = ref(null)

const showModal = ref(false)
const currentSlide = ref(0)
const modalSwiper = ref(null)
const thumbsSwiperModal = ref(null)

const openModalAt = (index) => {
  currentSlide.value = index
  showModal.value = true
  nextTick(() => {
    modalSwiper.value?.slideTo(index, 0)
    thumbsSwiperModal.value?.slideTo(index, 0)
  })
}

const closeModal = () => {
  showModal.value = false
  modalSwiper.value = null
  thumbsSwiperModal.value = null
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
    <Swiper v-if="!isMobile && props.images.length > 1" class="slider-left" direction="vertical" :slides-per-view="'auto'" :space-between="8"
      @swiper="thumbsSwiperMain = $event" :watch-slides-progress="true">
      <SwiperSlide v-for="(img, i) in props.images" :key="'thumb-' + i">
        <img :src="img" />
      </SwiperSlide>
    </Swiper>
    <Swiper v-if="props.images.length > 0" class="slider-right" :slides-per-view="1" :space-between="0" :modules="[Pagination, Thumbs]"
      :thumbs="{ swiper: thumbsSwiperMain }" :pagination="{
        el: '.sl-pag', bulletClass: 'sl-pag-bullet',
        bulletActiveClass: 'sl-pag-bullet-active', clickable: true
      }">
      <SwiperSlide v-for="(img, i) in images" :key="'main-' + i" @click="openModalAt(i)">
        <img :src="img" />
      </SwiperSlide>
      <div class="sl-pag"></div>
    </Swiper>
    <div v-else class="def-img">
      <img :src="'https://saldovka.com/wp-content/uploads/2015/06/41i5587c510d477a.jpeg'" />
    </div>
  </div>
  <!-- Модальное окно -->
  <div class="modal" v-if="showModal" @click.self="closeModal">
    <div class="modal__content">
      <div class="modal__close" @click="closeModal">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="16" fill="#ECECEC" />
          <path d="M12 12L20 20" stroke="#232323" stroke-width="2" stroke-linecap="round" />
          <path d="M20 12L12 20" stroke="#232323" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      <div class="modal__swiper">
        <Swiper v-if="images.length > 1" class="modal__slider-left" direction="vertical" :initial-slide="currentSlide" :slides-per-view="'auto'"
          :space-between="8" @swiper="thumbsSwiperModal = $event" :watch-slides-progress="true" :breakpoints="{
            0: {
              direction: 'horizontal',
              slidesPerView: 'auto',
            },
            768: {
              direction: 'vertical',
              slidesPerView: 'auto',
            }
          }">
          <SwiperSlide v-for="(img, i) in images" :key="'thumb-modal-' + i">
            <img :src="img" />
          </SwiperSlide>
        </Swiper>

        <Swiper class="modal__slider-right" :initial-slide="currentSlide" :slides-per-view="1" :space-between="0"
          :thumbs="{ swiper: thumbsSwiperModal }" :modules="[Thumbs, Navigation]" :navigation="{
            nextEl: '.modal-arrow-next',
            prevEl: '.modal-arrow-prev',
          }">
          <SwiperSlide v-for="(img, i) in images" :key="'main-modal-' + i">
            <img :src="img" />
          </SwiperSlide>
          <div class="modal__arrows" v-if="images.length > 1">
            <div class="modal-arrow modal-arrow-prev">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.357843 7.77766L7.27181 14L9 12.4447L2.95012 7L9 1.55531L7.27181 0L0.357843 6.22234C0.128716 6.42861 0 6.70834 0 7C0 7.29166 0.128716 7.57139 0.357843 7.77766Z"
                  fill="#232323" />
              </svg>
            </div>
            <div class="modal-arrow modal-arrow-next">
              <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.64216 7.77766L1.72819 14L0 12.4447L6.04988 7L0 1.55531L1.72819 0L8.64216 6.22234C8.87128 6.42861 9 6.70834 9 7C9 7.29166 8.87128 7.57139 8.64216 7.77766Z"
                  fill="#232323" />
              </svg>
            </div>
          </div>
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
  &__arrows 
    position: absolute
    z-index: 5
    top: 50%
    width: 100%
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 12px
    transform: translateY(-50%)
  &-arrow 
    width: 48px
    height: 48px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 50%
    background: #E8EAED
    cursor: pointer
    transition: .3s all
    path 
      transition: .3s all
    &:hover 
      background: var(--color-blue)
      path 
        fill: #fff
  &__content
    max-width: 1440px
    max-height: 900px
    width: 100%
    background: #fff
    border-radius: 12px
    position: relative
    h2 
      margin-bottom: 24px
  &__close 
    position: absolute
    right: 12px
    top: 12px
    z-index: 2
    cursor: pointer
  &__swiper 
    display: flex
.modal__slider-left 
  padding: 12px
  width: 100%
  height: 100%
  max-height: 900px
  overflow: hidden
  max-width: 90px
  .swiper-slide 
    border-radius: 4px
    overflow: hidden
    width: 66px
    height: 78px
    cursor: pointer
    img 
      width: 100%
      height: 100%
      object-fit: cover
  .swiper-slide-thumb-active 
    border: 2px solid var(--color-blue)
.modal__slider-right 
  padding: 72px 0
  height: 100%
  width: 100%
  .swiper-slide 
    width: 100%
    height: 100%
    border-radius: 12px
    overflow: hidden
    display: flex
    align-items: center
    justify-content: center
    img 
      height: 100%
      width: 100%
      max-width: 100%
      max-height: 758px
      object-fit: contain
.def-img 
  max-width: 100%
  width: 100%
  height: 100%
  background: #fff
  border-radius: 12px
  img 
    width: 100%
    height: 100%
    object-fit: contain
.slider 
  display: flex
  justify-content: flex-start
  gap: 8px
  height: 592px
  width: 100%
  max-width: 59.4%
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
    background: #fff
    border-radius: 12px
    img 
      border-radius: 8px
      width: 100%
      height: 100%
      object-fit: contain
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
@media (max-width: 1600px)
  .modal__content
    max-height: 100vh
  .modal__slider-left
    max-height: 100vh
  .modal__slider-right 
    max-height: 100vh
    .swiper-slide 
      img 
        max-height: calc(100vh - 144px)
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
  .modal__arrows 
    display: none
  .modal__content 
    background: var(--color-black)
    border-radius: 0
    height: 100vh
  .modal__swiper 
    flex-direction: column-reverse
    height: 100%
  .modal__slider-right
    max-width: 100%
  .modal__slider-left 
    max-width: 100%
    padding: 0
    max-height: max-content
    padding: 16px
    margin-top: auto
  .modal__close 
    right: 16px
    top: 16px
    svg 
      width: 24px
      height: 24px
      rect 
        fill: #474747
      path 
        stroke: #fff
</style>
