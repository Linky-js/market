<script setup>
import { ref, onMounted } from "vue";
import buttonCart from "../ui/buttonCart.vue";

const loading = ref(true);

onMounted(() => {
  // Имитируем загрузку
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
const product = defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  newprice: String,
  discount: String,
  star: String,
  reviews: String
})
</script>
<template>
  <div v-if="loading" class="block bg-gray-200 animate-pulse"></div>
  <div v-else class="product">
    <NuxtLink :to="product.link" class="img">
      <NuxtImg :src="product.image" format="webp" />
      <div v-if="product.discount" class="sale">{{ product.discount }} </div>
      <button class="like">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5 4C19.0523 4 21 5.94772 21 8.5C21 10.3141 20.0157 11.9822 18.5947 13.6426C17.1667 15.3111 15.1409 17.1444 12.7842 19.2783L12.707 19.3574L12 20.0645L11.293 19.3574L11.2148 19.2783C8.85839 17.1446 6.83315 15.311 5.40527 13.6426C3.98429 11.9822 3 10.3141 3 8.5C3 5.94772 4.94772 4 7.5 4C9.1852 4 10.8424 4.93355 11.6914 6.36035H12.3164C13.1599 4.93169 14.8178 4 16.5 4Z"
            stroke="#C9C9D1" stroke-width="2" />
        </svg>
      </button>
    </NuxtLink>
    <div v-if="!product.newprice" class="price">{{ product.price }} <span>₽</span></div>
    <div v-if="product.newprice" class="newprice">
      <div>{{ product.newprice }} <span>₽</span></div>
      <div>{{ product.price }} <span>₽</span></div>
    </div>
    <NuxtLink :to="product.link" class="title">
      {{ product.title }}
    </NuxtLink>
    <div class="flex items-center gap-1">
      <div class="star">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.99956 11.5135L10.7662 13.1868C11.2729 13.4935 11.8929 13.0402 11.7596 12.4668L11.0262 9.32017L13.4729 7.20017C13.9196 6.8135 13.6796 6.08017 13.0929 6.0335L9.87289 5.76017L8.61289 2.78684C8.38623 2.24684 7.61289 2.24684 7.38623 2.78684L6.12623 5.7535L2.90623 6.02684C2.31956 6.0735 2.07956 6.80684 2.52623 7.1935L4.97289 9.3135L4.23956 12.4602C4.10623 13.0335 4.72623 13.4868 5.23289 13.1802L7.99956 11.5135Z"
            fill="#EEBA00" />
        </svg>
        {{ product.star }}
      </div>
      <div class="reviews">({{ product.reviews }})</div>
    </div>
    <buttonCart />
  </div>
</template>

<style lang="sass" scoped>
.block 
  height: 300px
  border-radius: 15px
.product 
  position: relative
  width: 100%
.img 
  position: relative
  width: 100%
  margin-bottom: 12px
  display: block
  img 
    width: 100%
    height: 243px
    object-fit: cover
    border-radius: 8px
    transition: .3s all
    &:hover 
      opacity: .7
.like 
  position: absolute
  top: 6px
  right: 6px
  &.active 
    path 
      fill: var(--color-blue)
      stroke: var(--color-blue)
  svg 
    width: 24px
    height: auto
    path
      transition: .3s all
    
.sale 
  font-weight: bold
  color: #fff
  padding: 2px 6px
  display: inline-block
  position: absolute
  font-size: 11px
  line-height: 1
  background: #FB4711
  border-radius: 4px
  bottom: -4px
  left: 0
.price 
  font-weight: 700 
  font-size: 20px
  line-height: 1
  span 
    font-weight: 600
    font-size: 15px
    line-height: 1
.newprice 
  display: flex
  align-items: center
  gap: 8px
  div:nth-child(1)
    font-weight: 700 
    font-size: 20px
    line-height: 1
    color: #FB4711
    span 
      font-weight: 600
      font-size: 15px
      line-height: 1
  div:nth-child(2)
    position: relative
    font-weight: 500
    font-size: 16px
    line-height: 1
    color: #A1A1A1
    &:after 
      content: ''
      width: 100%
      top: 50%
      left: 0
      height: 1px
      position: absolute
      background: #A1A1A1
    span 
      font-size: 12px
      font-weight: 400
.title 
  font-weight: 500
  font-size: 16px
  line-height: 20px
  letter-spacing: -2%
  margin-bottom: 7px
  margin-top: 7px
  overflow: hidden
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  transition: .3s all
  &:hover 
    color: var(--color-blue)
.star 
  display: flex
  gap: 3px
  align-items: center
  font-size: 14px
  line-height: 120%
.reviews 
  color: #A1A1A1
  font-size: 14px
  line-height: 18px
.flex 
  margin-bottom: 12px
</style>