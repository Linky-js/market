<script setup>

</script>
<template>
  <div class="head">
    <NuxtLink to="/account">
      <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.51378 7.99966L8.91378 3.59966L7.65689 2.34277L2 7.99966L7.65689 13.6566L8.91378 12.3997L4.51378 7.99966Z"
          fill="#232323" />
      </svg>
      Личный кабинет
    </NuxtLink>
    <h2>Избранное</h2>
    <div class="search">
      <input type="text" placeholder="Искать в избранном">
      <p>123 товара</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.head 
  display: flex
  align-items: center
  justify-content: space-between
  gap: 15px
  margin-bottom: 24px
  padding-left: 16px
  padding-right: 24px
  a 
    display: flex
    align-items: center
    gap: 4px
    font-size: 16px
    line-height: 20px
    font-weight: 600
    color: #232323
    max-width: 320px
    width: 100%
  .search 
    max-width: 320px
    width: 100%
    position: relative
    input 
      width: 100%
      background: #E7E9EC
      border: 1px solid #DDE0E5
      border-radius: 12px
      padding: 12px 16px
      font-size: 16px
      line-height: 24px
      font-weight: 500
      color: var(--color-black)
      transition: .3s all
      &:placeholder
        color: #999
      &:focus 
        background: #fff
        border-color: var(--color-blue)
        box-shadow: none
        outline: none
    p 
      font-size: 14px
      line-height: 20px
      color: #999
      font-weight: 500
      position: absolute
      right: 16px
      top: 50%
      transform: translateY(-50%)
@media (max-width: 1440px)
  .head 
    padding: 0
@media (max-width: 768px)
  .head 
    display: flex
    flex-direction: column
    gap: 16px
    padding: 16px
    margin-bottom: 4px
    h2 
      font-size: 18px
      line-height: 22px
      text-align: center
    a 
      display: none
    .search 
      max-width: 100%
      input 
        padding: 12px
      p 
        right: 12px
</style>