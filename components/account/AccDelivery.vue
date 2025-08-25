<script setup>
const deliverys = [
  {
    date: 'Приедет 25 августа',
    price: '3 912',
    status: 'В пути',
    status_pay: 'Оплачен',
    sostav: [
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
      '/img/product.jpg',
    ],
  },
  {
    date: 'Приедет 27 августа',
    price: '23 912',
    status: 'В пути',
    status_pay: 'Не оплачен',
    sostav: [
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
]

</script>
<template>
  
  <div class="delivery">
    <div class="del" v-for="del in deliverys" :key="del">
      <div class="del__head">
        <div class="del__title">
          {{ del.date }}
        </div>
        <div class="del__price" :class="{
          'paid': del.status_pay === 'Оплачен',
          'not-paid': del.status_pay === 'Не оплачен'
        }">
          {{ del.price }} <span>₽</span>
        </div>
      </div>
      <div class="del__status">
        <p>Статус заказа</p>
        <div class="del__status-flex">
          <div class="put">{{ del.status }}</div>
          <div class="pay" :class="{
            'paid': del.status_pay === 'Оплачен',
            'not-paid': del.status_pay === 'Не оплачен'
          }">{{ del.status_pay }}</div>
        </div>
      </div>
      <div class="del__sostav">
        <p>Состав заказа</p>
        <div class="del__sostav-flex">
          <img v-for="img in del.sostav" :key="img" :src="img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
h2 
  display: none
.delivery 
  display: flex
  flex-direction: column
  width: 100%
  gap: 12px
.del 
  padding: 24px
  background: #fff
  border-radius: 12px
  &__head 
    display: flex
    align-items: center
    justify-content: space-between
    gap: 15px
    margin-bottom: 20px
    padding-bottom: 16px
    border-bottom: 1px solid #F2F4F8
  &__title 
    font-size: 20px
    line-height: 25px
    font-weight: 600
  &__price 
    font-size: 16px
    font-weight: 700
    line-height: 20px
    color: #A1A1A1
    span 
      font-size: 12px
      line-height: 16px
    &.paid
      color: #A1A1A1
    &.not-paid 
      color: #E73C3C
  &__status 
    margin-bottom: 24px
    p 
      font-size: 16px
      line-height: 20px
      font-weight: 600
      margin-bottom: 12px
    &-flex 
      display: flex
      align-items: center
      gap: 6px
      .put, .pay
        padding: 6px 15px
        border-radius: 50px
        font-size: 14px
        line-height: 18px
        font-weight: 600
        color: #fff
      .put 
        background: var(--color-blue)
      .pay 
        &.paid 
          background: #33DD58
        &.not-paid 
          background: #A1A1A1
  &__sostav 
    p 
      font-size: 16px
      line-height: 20px
      font-weight: 600
      margin-bottom: 12px
    &-flex 
      display: flex
      flex-wrap: wrap
      gap: 8px
      img 
        width: 88px
        height: 104px
        border-radius: 5px
        object-fit: cover
@media (max-width: 768px)

  .delivery 
    gap: 8px
  .del 
    padding: 20px 16px
    &__head 
      margin-bottom: 16px
    &__status 
      margin-bottom: 16px
      p 
        font-size: 14px
        margin-bottom: 12px
    &__sostav 
      p 
        font-size: 14px
        margin-bottom: 8px
      &-flex 
        gap: 7px
        img 
          width: 66px
          height: 78px
          border-radius: 4px
    &__price 
      font-size: 14px
      span 
        font-size: 10px
</style>