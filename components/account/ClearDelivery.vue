<script setup>

</script>
<template>
  <div class="clear">
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.832 70.8333C20.832 73.0435 21.71 75.1631 23.2728 76.7259C24.8356 78.2887 26.9552 79.1667 29.1654 79.1667C31.3755 79.1667 33.4951 78.2887 35.0579 76.7259C36.6207 75.1631 37.4987 73.0435 37.4987 70.8333C37.4987 68.6232 36.6207 66.5036 35.0579 64.9408C33.4951 63.378 31.3755 62.5 29.1654 62.5C26.9552 62.5 24.8356 63.378 23.2728 64.9408C21.71 66.5036 20.832 68.6232 20.832 70.8333ZM62.4987 70.8333C62.4987 73.0435 63.3767 75.1631 64.9395 76.7259C66.5023 78.2887 68.6219 79.1667 70.832 79.1667C73.0422 79.1667 75.1618 78.2887 76.7246 76.7259C78.2874 75.1631 79.1654 73.0435 79.1654 70.8333C79.1654 68.6232 78.2874 66.5036 76.7246 64.9408C75.1618 63.378 73.0422 62.5 70.832 62.5C68.6219 62.5 66.5023 63.378 64.9395 64.9408C63.3767 66.5036 62.4987 68.6232 62.4987 70.8333Z"
        stroke="#CCCCCC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M20.832 70.833H12.4987V54.1663M8.33203 20.833H54.1654V70.833M37.4987 70.833H62.4987M79.1654 70.833H87.4987V45.833M87.4987 45.833H54.1654M87.4987 45.833L74.9987 24.9997H54.1654M12.4987 37.4997H29.1654"
        stroke="#CCCCCC" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <p>Нет актуальных доставок :(</p>
    <NuxtLink to="/" class="btn">Перейти в каталог</NuxtLink>
  </div>
</template>
<style lang="sass" scoped>
.clear 
  padding: 48px 16px
  text-align: center
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center
  gap: 16px
  background: #fff
  width: 100%
  border-radius: 12px
  p 
    font-size: 20px
    line-height: 25px
    font-weight: 500
  .btn 
    background: var(--color-blue)
    padding: 10px 24px
    border-radius: 100px
    text-align: center
    display: inline-block
    color: #fff
    font-size: 14px
    line-height: 20px
    letter-spacing: -0.02em
    &:hover 
      background: #0073DD
@media (max-width: 768px)
  .clear 
    padding: 24px 0
    margin-bottom: 8px
    p 
      margin-top: 8px
      font-size: 16px
      line-height: 20px
    .btn 
      font-size: 14px

</style>