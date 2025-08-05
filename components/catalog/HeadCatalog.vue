<script setup>
const tags = ['Брюки', 'Верхняя одежда', 'Джемперы', 'Пальто', 'Юбки классические', 'Брюки со стрелками', 'Верхняя одежда', 'Джемперы', 'Пальто', 'Длинные юбки', 'Джинсы', 'Кожанные куртки', 'Шарф в клетку', 'Рубашка утепленная']
</script>
<template>
  <div class="head">
    <div class="bred">
      <NuxtLink to="/">Главная</NuxtLink>
      <NuxtLink to="/">Женщинам</NuxtLink>
      <NuxtLink to="/">Рубашки и блузы</NuxtLink>
    </div>
    <h2>Женские блузы и рубашки</h2>
    <div class="tags">
      <div class="tags__item" v-for="tag in tags" :key="tag">{{ tag }}</div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.head 
  display: flex
  flex-direction: column
  gap: 16px
  margin-bottom: 24px
.bred 
  display: flex
  align-items: center
  gap: 4px
  a 
    color: #999999
    font-size: 12px
    line-height: 16px
    letter-spacing: -0.02em
    &:hover 
      color: var(--color-blue)
    &::after 
      content: '/'
      margin-left: 4px
    &:last-child
      &::after 
        display: none
.tags 
  display: flex
  gap: 6px
  flex-wrap: wrap
  max-width: 1064px
  width: 100%
  &__item 
    font-size: 14px
    line-height: 120%
    letter-spacing: -0.02em
    font-weight: 500
    color: #232323
    padding: 6px 12px
    border-radius: 65px
    background: #E7E9EC
</style>