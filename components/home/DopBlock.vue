<script setup>
import ProductBlock from '../common/ProductBlock.vue';
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
  <div class="wrap">
    <div class="like">
      <div class="products">
        <ProductBlock v-for="product in products" :key="product.title" :title="product.title" :image="product.image"
          :price="product.price" :newprice="product.newprice" :discount="product.discount" :star="product.star"
          :reviews="product.reviews" />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.wrap 
  padding: 0 48px
.like 
  background: #fff
  width: 100%
  border-radius: 12px
  padding: 28px 24px
  h2 
    margin-bottom: 24px
.products 
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(206px, 1fr))
  gap: 24px 12px
</style>