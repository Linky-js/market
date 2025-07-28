<script setup>
import { defineProps } from 'vue';
import ProductBlock from '../common/ProductBlock.vue';

import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: null,
  }
})

const products = [
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    image: '/img/product.jpg',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    newprice: '4 999',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    price: '6 769',
    discount: '10%',
    star: '4.7',
    reviews: '11',
    image: '/img/product.jpg'
  },
]
</script>

<template>
  <div class="like">
    <h2 v-if="props.title">{{ props.title }}</h2>
    <div class="products">
      <Swiper class="slider" :slides-per-view="'auto'" :space-between="12">
        <SwiperSlide v-for="product in products" :key="product.title">
          <ProductBlock :title="product.title" :image="product.image" :price="product.price"
            :newprice="product.newprice" :discount="product.discount" :star="product.star" :reviews="product.reviews" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.like 
  background: #fff
  width: 100%
  border-radius: 12px
  padding: 28px 24px
  h2 
    margin-bottom: 24px
.swiper-slide 
  max-width: 206px
  width: 100%
</style>