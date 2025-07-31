<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['toggleHarActive'])
const desk = {
  title: 'Пылесос Xiaomi DEERMA DX700 Белый',
  star: '4.7',
  reviews: '126 отзывов',
  colors: [
    {
      title: 'Белый',
      image: '/img/product.jpg'
    },
    {
      title: 'Черный',
      image: '/img/product.jpg'
    },
    {
      title: 'Фиолетовый',
      image: '/img/product.jpg'
    },
    {
      title: 'Красный',
      image: '/img/product.jpg'
    },
  ],
  sizes: [
    '48 / XL',
    '50 / XL',
    '52 / XL',
    '54 / XL',
    '54 / XL',
    '54 / XL',
    '54 / XL',
  ],
  har: [
    {
      title: 'Артикул',
      text: '6244567',
    },
    {
      title: 'Производитель',
      text: 'Xiaomi',
    },
    {
      title: 'Страна',
      text: 'Китай',
    },
    {
      title: 'Страна',
      text: 'Китай',
    },
    {
      title: 'Сезон',
      text: 'Любой',
    }
  ]
}
const activeColorIndex = ref(0)
const setActiveColor = (index) => {
  activeColorIndex.value = index
}
const activeSizeIndex = ref(0)

const setActiveSize = (index) => {
  activeSizeIndex.value = index
}
</script>
<template>
  <div class="desk">
    <div class="desk__top">
      <div class="title">{{ desk.title }}</div>
      <div class="icons">
        <NuxtLink to="/">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11.4697 1.71967C11.7626 1.42678 12.2374 1.42678 12.5303 1.71967L16.2803 5.46967C16.5732 5.76256 16.5732 6.23744 16.2803 6.53033C15.9874 6.82322 15.5126 6.82322 15.2197 6.53033L12.75 4.06066V15.0469C12.75 15.4611 12.4142 15.7969 12 15.7969C11.5858 15.7969 11.25 15.4611 11.25 15.0469V4.06066L8.78033 6.53033C8.48744 6.82322 8.01256 6.82322 7.71967 6.53033C7.42678 6.23744 7.42678 5.76256 7.71967 5.46967L11.4697 1.71967ZM6.375 9.75C6.07663 9.75 5.79048 9.86853 5.5795 10.0795C5.36853 10.2905 5.25 10.5766 5.25 10.875V19.875C5.25 20.1734 5.36853 20.4595 5.5795 20.6705C5.79048 20.8815 6.07663 21 6.375 21H17.625C17.9234 21 18.2095 20.8815 18.4205 20.6705C18.6315 20.4595 18.75 20.1734 18.75 19.875V10.875C18.75 10.5766 18.6315 10.2905 18.4205 10.0795C18.2095 9.86853 17.9234 9.75 17.625 9.75H15.75C15.3358 9.75 15 9.41421 15 9C15 8.58579 15.3358 8.25 15.75 8.25H17.625C18.3212 8.25 18.9889 8.52656 19.4812 9.01884C19.9734 9.51113 20.25 10.1788 20.25 10.875V19.875C20.25 20.5712 19.9734 21.2389 19.4812 21.7312C18.9889 22.2234 18.3212 22.5 17.625 22.5H6.375C5.67881 22.5 5.01113 22.2234 4.51884 21.7312C4.02656 21.2389 3.75 20.5712 3.75 19.875V10.875C3.75 10.1788 4.02656 9.51113 4.51884 9.01884C5.01113 8.52656 5.67881 8.25 6.375 8.25H8.25C8.66421 8.25 9 8.58579 9 9C9 9.41421 8.66421 9.75 8.25 9.75H6.375Z"
              fill="#5F5F5F" />
          </svg>
        </NuxtLink>
        <button to="/" class="like">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.5 4C19.0523 4 21 5.94772 21 8.5C21 10.3141 20.0157 11.9822 18.5947 13.6426C17.1667 15.3111 15.1409 17.1444 12.7842 19.2783L12.707 19.3574L12 20.0645L11.293 19.3574L11.2148 19.2783C8.85839 17.1446 6.83315 15.311 5.40527 13.6426C3.98429 11.9822 3 10.3141 3 8.5C3 5.94772 4.94772 4 7.5 4C9.1852 4 10.8424 4.93355 11.6914 6.36035H12.3164C13.1599 4.93169 14.8178 4 16.5 4Z"
              stroke="#C9C9D1" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
    <div class="desk__rev">
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.50014 12.2327L11.4397 14.0106C11.9781 14.3364 12.6368 13.8548 12.4951 13.2456L11.716 9.90225L14.3156 7.64975C14.7901 7.23892 14.5351 6.45975 13.9118 6.41017L10.4906 6.11975L9.15181 2.96059C8.91098 2.38684 8.08931 2.38684 7.84848 2.96059L6.50973 6.11267L3.08848 6.40309C2.46514 6.45267 2.21014 7.23184 2.68473 7.64267L5.28431 9.89517L4.50514 13.2385C4.36348 13.8477 5.02223 14.3293 5.56056 14.0035L8.50014 12.2327Z"
          fill="#EEBA00" />
      </svg>
      {{ desk.star }}
      <span>({{ desk.reviews }})</span>
    </div>
    <div class="desk__colors">
      <div class="images">
        <img v-for="(color, index) in desk.colors" :key="'img-' + index" :src="color.image" :alt="color.title"
          :class="{ active: activeColorIndex === index }" @click="setActiveColor(index)" />
      </div>
      <div class="text">
        <p v-for="(color, index) in desk.colors" :key="'text-' + index" :class="{ active: activeColorIndex === index }">
          Модификация: <span>{{ color.title }}</span>
        </p>
      </div>
    </div>
    <div class="desk__sizes">
      <div class="desk__sizes-top">
        <div class="title">Размер</div>
        <button>Таблица размеров</button>
      </div>
      <Swiper class="desk__sizes-wrap" :slides-per-view="'auto'" :space-between="8">
        <SwiperSlide class="size" v-for="(size, index) in desk.sizes" :key="size"
          :class="{ active: activeSizeIndex === index }" @click="setActiveSize(index)">
          {{ size }}
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="desk__har">
      <div class="title">Характеристики</div>
      <div class="har" v-for="har in desk.har" :key="har">
        <span>{{ har.title }}</span>
        <span>{{ har.text }}</span>
      </div>
      <button @click="emit('toggleHarActive', true)">Показать больше
        <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_388_14526)">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8.02623 6.77162L4.2549 3.00028L5.19757 2.05762L8.49757 5.35762L11.7976 2.05762L12.7402 3.00028L8.9689 6.77162C8.84388 6.8966 8.67434 6.96681 8.49757 6.96681C8.32079 6.96681 8.15125 6.8966 8.02623 6.77162Z"
              fill="#A1A1A1" />
          </g>
          <defs>
            <clipPath id="clip0_388_14526">
              <rect width="8" height="16" fill="white" transform="translate(16.5) rotate(90)" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.desk 
  padding: 24px
  background: #fff
  border-radius: 12px
  width: 100%
  max-width: calc(382px * 100% / 1296px)
  height: 100%
  .title 
    font-weight: bold
    font-size: 20px
    line-height: 120%
  &__top 
    display: flex
    align-items: flex-start
    gap: 24px
    margin-bottom: 8px
  .icons 
    display: flex
    gap: 8px
    align-items: center
    .like 
      svg 
        width: 24px
        height: auto
        path 
          stroke: #5F5F5F
  &__rev 
    display: flex
    align-items: center
    gap: 3px
    font-size: 14px
    font-weight: 500
    line-height: 110%
    margin-bottom: 24px
    span 
      color: #A1A1A1
  &__colors 
    margin-bottom: 24px
    .images 
      display: flex
      gap: 6px
      align-items: center
      flex-wrap: wrap
      margin-bottom: 10px
      img 
        width: 51px
        height: 58px
        object-fit: cover
        border-radius: 8px
        border: 1px solid #E2E2E2
        cursor: pointer
        transition: .3s all
        &.active 
          transform: scale(1.02)
          border-color: #118AFB
    .text 
      position: relative
      p 
        font-size: 12px      
        line-height: 100%
        color: #898989
        font-weight: 500
        display: none
        span 
          color: #232323
        &.active 
          display: block
  &__sizes 
    margin-bottom: 24px
    .title 
      font-weight: 600
      font-size: 18px
      line-height: 100%
      letter-spacing: -0.02em
    button 
      font-size: 12px
      font-weight: 500
      line-height: 100%
      color: var(--color-blue)
      &:hover 
        text-decoration: underline
    &-top 
      display: flex
      align-items: center
      justify-content: space-between
      margin-bottom: 12px
      gap: 15px
    &-wrap 
      display: flex
    .size 
      width: max-content
      flex-shrink: 0
      text-align: center
      padding: 8px 16px
      border: 1px solid #fff
      cursor: pointer
      background: #EEF3F8
      border-radius: 6px
      font-size: 14px
      font-weight: 500
      color: #232323
      &.active 
        border-color: #118AFB
  &__har 
    .title 
      margin-bottom: 8px
      font-size: 18px
      line-height: 100%
      letter-spacing: -0.02em
      font-weight: 600
      color: #232323
    .har 
      display: flex
      align-items: center
      justify-content: space-between
      gap: 15px
      padding: 9px 0
      box-shadow: 0px 0.4px 0px 0px rgba(0, 0, 0, 0.25)
      span 
        color: #232323
        font-size: 14px
        font-weight: 500
        line-height: 100%
      span:first-child 
        color: #898989
    button 
      width: 100%
      margin-top: 12px
      color: #A1A1A1
      display: flex
      align-items: center
      justify-content: center
      gap: 3px
      font-size: 12px
      font-weight: 500
      line-height: 100%
      text-align: center
@media (max-width: 1200px)
  .desk 
    max-width: calc(40% - 12px)
@media (max-width: 768px)
  .desk 
    max-width: 100%
    order: 3
    padding: 16px 16px 36px
    &__top, &__rev, &__har
      display: none
    &__colors 
      .images 
        margin-bottom: 15px
</style>