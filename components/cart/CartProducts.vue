<script setup>
const products = [
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне',
    img: '/img/product.jpg',
    company: 'ИП Иванян',
    price: '3 912',
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне 2',
    img: '/img/product.jpg',
    company: 'ИП Иванян',
    price: '3 912',
    oldprice: '6 769',
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне 3',
    img: '/img/product.jpg',
    company: 'ИП Иванян',
    price: '3 912',
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне 4',
    img: '/img/product.jpg',
    company: 'ИП Иванян',
    price: '3 912',
    oldprice: '6 769',
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне 5',
    img: '/img/product.jpg',
    company: 'ИП Иванян',
    price: '3 912',
    oldprice: '6 769',
  },
  {
    title: 'Виртуальные очки VR Shinecon SC-G13 с пультом ДУ/ 3D устройство для просмотра фильмов и игр на телефоне 6',
    img: '/img/product.jpg',
    company: 'ИП Иванян',
    price: '3 912',
  },

]
</script>

<template>
  <div class="cart">
    <div class="cart__head">
      <h2>Корзина</h2>
      <p>12 товаров</p>
      <button>Выбрать</button>
    </div>
    <div class="cart__list">
      <div class="cart__item" v-for="product in products" :key="product.title">
        <img :src="product.img" alt="">
        <div class="cart__item-text">
          <div class="title">{{ product.title }}</div>
          <div class="company">{{ product.company }}</div>
          <div class="icons">
            <div class="like">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.5597 6.00208L11.75 6.2256L11.9403 6.00208C12.9844 4.77598 14.5857 4 16.25 4C19.1919 4 21.5 6.30807 21.5 9.25C21.5 11.0579 20.6892 12.7179 19.2127 14.523C17.7334 16.3316 15.6117 18.2556 13.0317 20.5951L11.7494 21.7625L10.4676 20.6045L10.4418 20.5811C7.87361 18.2472 5.76166 16.328 4.28732 14.5243C2.81081 12.7179 2 11.0579 2 9.25C2 6.30807 4.30807 4 7.25 4C8.9143 4 10.5156 4.77598 11.5597 6.00208ZM16.25 5.5C14.6744 5.5 13.1337 6.47124 12.5223 7.86H10.9866C10.3666 6.47201 8.8265 5.5 7.25 5.5C5.11193 5.5 3.5 7.11193 3.5 9.25C3.5 10.7873 4.33481 12.2806 5.72506 13.9051C7.11684 15.5313 9.10401 17.332 11.4776 19.4812L11.75 19.7536L12.0224 19.4812C14.396 17.332 16.3832 15.5313 17.7749 13.9051C19.1652 12.2806 20 10.7873 20 9.25C20 7.11193 18.3881 5.5 16.25 5.5Z"
                  fill="#C9C9D1" />
              </svg>
            </div>
            <div class="remove">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16"
                  stroke="#C9C9D1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="cart__item-right">
          <div class="cart__item-right-top">
            <div class="price" v-if="!product.oldprice">{{ product.price }} <span>₽</span></div>
            <div class="newprice" v-if="product.oldprice">
              <div>{{ product.price }} <span>₽</span></div>
              <div>{{ product.oldprice }} <span>₽</span></div>
            </div>
            <div class="choose">
              <input type="checkbox" :name="product.title" :id="product.title" checked>
              <label :for="product.title"></label>
            </div>
          </div>
          <div class="number">
            <div class="number__mark">
              <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 0V2H0.5V0H9.5Z" fill="#656565" />
              </svg>
            </div>
            <div class="number__text">1</div>
            <div class="number__mark">
              <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.99254 7.99982V0H6.00018V7.99982H3.99254ZM1.00018 4.96138L0.981445 2.99982H9V4.99982L1.00018 4.96138Z"
                  fill="#656565" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.cart 
  background: #fff
  padding: 28px 24px 24px
  border-radius: 12px
  width: 100%
  &__head 
    display: flex
    align-items: center
    gap: 24px
    width: 100%
    p 
      font-weight: 500
      font-size: 16px
      line-height: 120%
      color: #999
      letter-spacing: -0.02em
    button 
      margin-left: auto
      font-weight: 600
      font-size: 16px
      line-height: 120%
      letter-spacing: -0.02em
      color: var(--color-blue)
      &:hover 
        text-decoration: underline
  &__list 
    display: flex
    flex-direction: column
    gap: 24px
  &__item 
    padding-top: 24px
    border-top: 1px solid #F2F4F8
    display: flex
    gap: 24px
    width: 100%
    &:first-child
      border-top: none
    img 
      width: 99px
      height: 117px
      border-radius: 5px
      object-fit: cover
    &-text 
      display: flex
      flex-direction: column
      gap: 12px
      max-width: 480px
      width: 100%
    .title 
      font-size: 14px
      font-weight: 500
      line-height: 120%
      letter-spacing: -0.02em
    .company 
      font-size: 12px
      font-weight: 500
      line-height: 100%
      letter-spacing: -0.02em
      color: #A1A1A1
    .icons 
      display: flex
      align-items: center
      gap: 16px
      margin-top: auto
    &-right 
      margin-left: auto
      flex-shrink: 0
      display: flex
      flex-direction: column
      gap: 10px
      max-width: 114px
      width: 100%
      flex-shrink: 0
      &-top 
        display: flex
        align-items: flex-start
        justify-content: space-between
        gap: 15px
    .price 
      font-size: 18px
      line-height: 100%
      font-weight: 700
      span 
        font-size: 14px
        font-weight: 600
    .newprice
      display: flex
      flex-direction: column
      gap: 2px
      div
        &:first-child
          font-size: 18px
          line-height: 100%
          font-weight: 700
          color: #FB4711
          span 
            font-size: 14px
            font-weight: 600
        &:last-child
          font-size: 14px
          line-height: 100%
          font-weight: 500
          color: #a1a1a1
          position: relative
          width: max-content
          &:after 
            content: ''
            width: 100%
            height: 1px
            display: inline-block
            position: absolute
            left: 0
            top: 50%
            background: #a1a1a1
          span 
            font-size: 10px
            font-weight: 400
    .number 
      display: flex
      align-items: center
      justify-content: space-between
      width: 100%
      margin-top: auto
      &__text 
        font-size: 14px
        line-height: 18px
        font-weight: 500
        letter-spacing: -0.02em
      &__mark 
        width: 34px
        height: 34px
        display: flex
        align-items: center
        justify-content: center
        cursor: pointer
        background: #EFEFEF
        border: 1px solid #EFEFEF
        cursor: pointer
        border-radius: 6px
        transition: .3s all
        path 
          transition: .3s all
        &:hover 
          background: var(--color-blue)
          border: 1px solid var(--color-blue)
          path 
            fill: #fff
    .choose 
      input 
        width: 0
        height: 0
        position: absolute
        opacity: 0
      input:checked + label:before 
        border-width: 4px
        border-color: var(--color-blue)
      label 
        cursor: pointer
        &:before 
          transition: .3s all
          width: 20px
          height: 20px
          content: ''
          display: inline-block
          border-radius: 50%
          border: 2px solid #A1A1A1

</style>