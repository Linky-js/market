<script setup>
import buttonCart from '../ui/buttonCart.vue';
const right = {
  price: '5 864',
  newprice: '5 864',
  oldprice: '7 864',
  discount: '-38%',
  delivery: '3 августа',
  deliveryPrice: '99',
  punkt: '5 августа',
  company: 'Konchinata',
  star: '4.7',
}
</script>
<template>
  <div class="right">
    <div class="wrap-price">
      <div v-if="!right.newprice" class="price">
        {{ right.price }} <span>₽</span>
      </div>
      <div v-if="right.newprice" class="newprice">
        <div class="newprice__price">
          <div>{{ right.newprice }} <span>₽</span></div>
          <div>{{ right.oldprice }} <span>₽</span></div>
        </div>
        <div class="sale">{{ right.discount }}</div>
      </div>
    </div>
    <buttonCart class="btn-product" />
    <div class="del">
      <div class="del__item">
        <div class="del__item-text">
          Доставка <span>{{ right.delivery }}</span>
        </div>
        <div class="del__item-price">
          {{ right.deliveryPrice }} <span>₽</span>
        </div>
      </div>
      <div class="del__item">
        <div class="del__item-text">
          В пунтке выдачи <span>{{ right.punkt }}</span>
        </div>
        <div class="del__item-price">
          0 <span>₽</span>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="com">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.375 12.375H13.5V15.75H4.5V12.375H5.625V13.5H12.375V12.375ZM15.6892 9.69975C15.7241 9.837 15.75 9.97762 15.75 10.125C15.75 10.3466 15.7064 10.566 15.6215 10.7708C15.5367 10.9755 15.4124 11.1615 15.2557 11.3182C15.099 11.4749 14.913 11.5992 14.7083 11.684C14.5035 11.7689 14.2841 11.8125 14.0625 11.8125C13.8409 11.8125 13.6215 11.7689 13.4167 11.684C13.212 11.5992 13.026 11.4749 12.8693 11.3182C12.7126 11.1615 12.5883 10.9755 12.5035 10.7708C12.4186 10.566 12.375 10.3466 12.375 10.125C12.375 10.5726 12.1972 11.0018 11.8807 11.3182C11.5643 11.6347 11.1351 11.8125 10.6875 11.8125C10.2399 11.8125 9.81072 11.6347 9.49426 11.3182C9.17779 11.0018 9 10.5726 9 10.125C9 10.5726 8.82221 11.0018 8.50574 11.3182C8.18928 11.6347 7.76005 11.8125 7.3125 11.8125C6.86495 11.8125 6.43572 11.6347 6.11926 11.3182C5.80279 11.0018 5.625 10.5726 5.625 10.125C5.625 10.3466 5.58135 10.566 5.49655 10.7708C5.41174 10.9755 5.28744 11.1615 5.13074 11.3182C4.97404 11.4749 4.78802 11.5992 4.58328 11.684C4.37854 11.7689 4.15911 11.8125 3.9375 11.8125C3.71589 11.8125 3.49646 11.7689 3.29172 11.684C3.08698 11.5992 2.90096 11.4749 2.74426 11.3182C2.58756 11.1615 2.46326 10.9755 2.37845 10.7708C2.29365 10.566 2.25 10.3466 2.25 10.125C2.25 9.97762 2.27475 9.837 2.30962 9.69975L3.375 2.25H14.625L15.6892 9.69975Z"
            fill="#8A8A8A" />
        </svg>
        {{ right.company }}
      </div>
      <div class="star">
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.50014 12.7327L11.4397 14.5106C11.9781 14.8364 12.6368 14.3548 12.4951 13.7456L11.716 10.4023L14.3156 8.14975C14.7901 7.73892 14.5351 6.95975 13.9118 6.91017L10.4906 6.61975L9.15181 3.46059C8.91098 2.88684 8.08931 2.88684 7.84848 3.46059L6.50973 6.61267L3.08848 6.90309C2.46514 6.95267 2.21014 7.73184 2.68473 8.14267L5.28431 10.3952L4.50514 13.7385C4.36348 14.3477 5.02223 14.8293 5.56056 14.5035L8.50014 12.7327Z"
            fill="#EEBA00" />
        </svg>
        {{ right.star }}
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.right 
  max-width: calc(320px * 100% / 1296px)
  width: 100%
  background: #fff
  padding: 24px
  border-radius: 12px
.wrap-price 
  background: #F2F4F8
  width: 100%
  padding: 12px 16px
  border-radius: 100px
  margin-bottom: 12px
.btn-product 
  max-width: 100%
  margin-bottom: 16px
  
.price 
  font-weight: 600
  font-size: 22px
  line-height: 100%
  letter-spacing: -0.02em
  color: #232323
  span 
    font-size: 16px
.newprice 
  display: flex
  align-items: center
  justify-content: space-between
  gap: 15px
  .sale 
    padding: 4px 10px
    border-radius: 100px
    color: #fff
    background: #FB4711
    font-size: 13px
    letter-spacing: -0.02em
    font-weight: 500
    line-height: 100%
  &__price 
    display: flex
    gap: 11px
    align-items: center
    div:first-child
      font-weight: 600
      font-size: 22px
      line-height: 100%
      letter-spacing: -0.02em
      color: #FF3B00
      span 
        font-size: 10px
    div:nth-child(2)
      font-size: 18px
      font-weight: 500
      letter-spacing: -0.02em
      line-height: 100%
      color: #A1A1A1
      span 
        font-size: 10px

.del 
  display: flex
  flex-direction: column
  gap: 6px
  margin-bottom: 16px
  &__item 
    display: flex
    align-items: center
    justify-content: space-between
    gap: 15px
    &-text 
      font-size: 14px
      line-height: 100%
      letter-spacing: -0.02em
      span 
        color: #838383
    &-price 
      font-size: 14px
      font-weight: 600
      span 
        font-size: 10px
.bot 
  display: flex
  align-items: center
  gap: 8px
.com 
  padding: 4px 6px
  border-radius: 4px
  background: #ECECEC
  display: flex
  align-items: center
  justify-content: center
  gap: 4px
  font-size: 12px
  font-weight: 500
  line-height: 100%
.star 
  display: flex
  align-items: center
  gap: 3px
  font-size: 14px
  letter-spacing: -0.02em
  font-weight: 500
</style>