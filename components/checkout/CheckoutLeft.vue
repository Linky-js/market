<script setup>
import ModalAdress from '../account/ModalAdress.vue'
import { ref } from 'vue'
const deliveries = [
  {
    when: 'Завтра',
    imgs: [
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
    ],
  },
  {
    when: '28 августа',
    imgs: [
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
    ],
  },
  {
    when: '25 августа - понедельник',
    imgs: [
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
    ],
  }
]
const deliveryType = ref('Самовывоз')
</script>
<template>
  <div class="column">
    <div class="del">
      <h2>Способ получения</h2>
      <div class="del__switch">
        <input type="radio" name="del" id="del-1" value="Самовывоз" v-model="deliveryType" checked>
        <label for="del-1" class="del__switch-self">Самовывоз</label>
        <input type="radio" name="del" id="del-2" v-model="deliveryType" value="Доставка">
        <label class="del__switch-delivery" for="del-2">Доставка</label>
        <div class="bg"></div>
      </div>
      <div class="del__adress" v-if="deliveryType === 'Самовывоз'">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.9173 9.16667C12.9173 9.54969 12.8419 9.92896 12.6953 10.2828C12.5487 10.6367 12.3339 10.9582 12.063 11.2291C11.7922 11.4999 11.4707 11.7147 11.1168 11.8613C10.7629 12.0079 10.3837 12.0833 10.0007 12.0833C9.61763 12.0833 9.23836 12.0079 8.88449 11.8613C8.53063 11.7147 8.20909 11.4999 7.93826 11.2291C7.66742 10.9582 7.45258 10.6367 7.306 10.2828C7.15943 9.92896 7.08398 9.54969 7.08398 9.16667C7.08398 8.39312 7.39128 7.65125 7.93826 7.10427C8.48524 6.55729 9.2271 6.25 10.0007 6.25C10.7742 6.25 11.5161 6.55729 12.063 7.10427C12.61 7.65125 12.9173 8.39312 12.9173 9.16667Z"
            stroke="#118AFB" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M10.001 1.66699C14.0593 1.66699 17.501 5.02783 17.501 9.10533C17.501 13.247 14.0035 16.1545 10.7735 18.1303C10.5376 18.2631 10.2716 18.3328 10.001 18.3328C9.73036 18.3328 9.46431 18.2631 9.22848 18.1303C6.00348 16.1362 2.50098 13.2628 2.50098 9.10616C2.50098 5.02783 5.94264 1.66699 10.001 1.66699Z"
            stroke="#118AFB" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p> г. Краснодар, ул. имени Академика Лукьяненко, 123</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.8438 6.34375L13.6562 9.15625M2.96875 13.6562V17.0312H6.34375L17.0312 6.34375L13.6562 2.96875L2.96875 13.6562Z"
            stroke="#A1A1A1" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="del__adress" v-else-if="deliveryType === 'Доставка'">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.52637 14.7023C4.52637 15.157 4.70381 15.593 5.01966 15.9145C5.3355 16.236 5.76388 16.4166 6.21056 16.4166C6.65724 16.4166 7.08562 16.236 7.40146 15.9145C7.71731 15.593 7.89475 15.157 7.89475 14.7023C7.89475 14.2477 7.71731 13.8116 7.40146 13.4901C7.08562 13.1686 6.65724 12.988 6.21056 12.988C5.76388 12.988 5.3355 13.1686 5.01966 13.4901C4.70381 13.8116 4.52637 14.2477 4.52637 14.7023ZM12.9473 14.7023C12.9473 15.157 13.1248 15.593 13.4406 15.9145C13.7565 16.236 14.1849 16.4166 14.6315 16.4166C15.0782 16.4166 15.5066 16.236 15.8224 15.9145C16.1383 15.593 16.3157 15.157 16.3157 14.7023C16.3157 14.2477 16.1383 13.8116 15.8224 13.4901C15.5066 13.1686 15.0782 12.988 14.6315 12.988C14.1849 12.988 13.7565 13.1686 13.4406 13.4901C13.1248 13.8116 12.9473 14.2477 12.9473 14.7023Z"
            stroke="#118AFB" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M4.52629 14.7022H2.8421V11.2736M2 4.4165H11.2631V14.7022M7.89468 14.7022H12.9473M16.3156 14.7022H17.9998V9.55933M17.9998 9.55933H11.2631M17.9998 9.55933L15.4735 5.27364H11.2631M2.8421 7.84506H6.21048"
            stroke="#118AFB" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p> г. Краснодар, ул. имени Академика Лукьяненко, 123</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.8438 6.34375L13.6562 9.15625M2.96875 13.6562V17.0312H6.34375L17.0312 6.34375L13.6562 2.96875L2.96875 13.6562Z"
            stroke="#A1A1A1" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="del__another">
        <input type="checkbox" name="another" id="another" value="another">
        <label for="another">Заберёт другой человек</label>
      </div>
    </div>
    <div class="dels">
      <div class="dels__item" v-for="del in deliveries" :key="del.when">
        <h3>{{ del.when }}</h3>
        <div class="dels__item-imgs">
          <img v-for="img in del.imgs" :src="img" alt="">
        </div>
      </div>
    </div>
  </div>
  <!-- <ModalAdress /> -->
</template>
<style lang="sass" scoped>
.column 
  display: flex
  flex-direction: column
  gap: 12px
  width: 100%
.del__another 
  margin-top: 16px
  input 
    position: absolute
    width: 0
    height: 0
    opacity: 0
  input:checked + label 
    color: var(--color-black)
    &::before 
      border-width: 5px
      border-color: var(--color-blue)
  label 
    font-size: 14px
    line-height: 18px
    letter-spacing: -0.02em
    font-weight: 500
    color: #A1A1A1
    position: relative
    cursor: pointer
    display: flex
    align-items: center
    gap: 8px
    transition: .3s all
    &::before
      width: 20px
      height: 20px
      border-radius: 50%
      content: ''
      border: 2px solid #A1A1A1
      flex-shrink: 0
      display: inline-block
      transition: .3s all
.del
  padding: 28px 24px
  background: #fff
  border-radius: 12px
  width: 100%
  h2 
    font-size: 20px
    line-height: 25px
    font-weight: 600
    margin-bottom: 24px 
  &__switch 
    position: relative
    max-width: 408px
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
      &:checked + .del__switch-delivery ~ .bg 
        transform: translateX(100%)
    label 
      width: 100%
      text-align: center
      z-index: 2
      position: relative
      color: #118AFB
      transition: .3s all
      cursor: pointer
      font-size: 14px
      line-height: 110%
      letter-spacing: -0.02em
.del__adress 
  display: flex
  align-items: center
  gap: 12px
  margin-top: 16px
  p 
    font-size: 16px
    line-height: 20px
    letter-spacing: -0.02em
    font-weight: 600
    max-width: 408px
    width: 100%
.dels
  display: flex
  flex-direction: column
  gap: 24px
  background: #fff
  border-radius: 12px
  padding: 28px 24px
  &__item 
    h3  
      margin-bottom: 12px
      font-size: 20px
      line-height: 25px
      letter-spacing: -0.02em
      font-weight: 600
    &-imgs
      display: grid
      grid-template-columns: repeat(auto-fill, minmax(88px, 1fr))
      gap: 6px
      img 
        width: 100%
        height: 104px
        border-radius: 6px
        object-fit: cover
@media (max-width: 768px)
  .column 
    gap: 6px
  .del 
    padding: 20px 16px
    &__switch 
      max-width: 368px
    &__adress 
      margin-top: 16px
  .dels 
    padding: 20px 16px
    &__item
      &-imgs 
        grid-template-columns: repeat(auto-fill, minmax(66px, 1fr))
        img 
          height: 78px


</style>