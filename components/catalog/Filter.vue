<script setup>
import { ref } from 'vue'

const isActive = ref(false)

const toggleSort = () => {
  isActive.value = !isActive.value
}
const brends = [
  'Nike',
  'Adidas',
  'Puma',
  'Reebok',
  'Lacoste',
  'New Balance',
  'Asics',
  'Nike2',
  'Adidas2',
  'Puma2',
  'Reebok2',
  'Lacoste2',
  'New Balance2',
  'Asics2',
  'Nike3',
  'Adidas3',
  'Puma3',
  'Reebok3',
  'Lacoste3',
  'New Balance3',
  'Asics3',
]
</script>
<template>
  <div class="column">
    <div class="sort" :class="{ active: isActive }">
      <div class="sort__head" @click="toggleSort">
        Сортировка
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.99966 8.94228L3.59966 4.54228L2.34277 5.79917L7.99966 11.4561L13.6566 5.79917L12.3997 4.54228L7.99966 8.94228Z"
            fill="#232323" />
        </svg>
      </div>
      <div class="sort__list">
        <div class="sort__check">
          <input type="radio" name="sort" id="sort-1">
          <label for="sort-1">По популярности</label>
        </div>
        <div class="sort__check">
          <input type="radio" name="sort" id="sort-2">
          <label for="sort-2">По возрастанию цены</label>
        </div>
        <div class="sort__check">
          <input type="radio" name="sort" id="sort-3">
          <label for="sort-3">По убыванию цены</label>
        </div>
        <div class="sort__check">
          <input type="radio" name="sort" id="sort-4">
          <label for="sort-4">По новинкам</label>
        </div>
        <div class="sort__check">
          <input type="radio" name="sort" id="sort-5">
          <label for="sort-5">По рейтингу</label>
        </div>
        <div class="sort__check">
          <input type="radio" name="sort" id="sort-6">
          <label for="sort-6">По отзывам</label>
        </div>
        <div class="sort__check">
          <input type="radio" name="sort" id="sort-7">
          <label for="sort-7">По скидкам</label>
        </div>
      </div>
    </div>
    <div class="filter">
      <h3>Фильтр</h3>
      <div class="price">
        <div class="title">Цена</div>
        <div class="price__box">
          <input type="number" placeholder="от 100 ₽">
          <input type="number" placeholder="до 1000000 ₽">
        </div>
      </div>
      <div class="del">
        <div class="title">Срок доставки</div>
        <div class="del__box">
          <div class="del__radio">
            <input type="radio" name="del" id="del-1">
            <label for="del-1">Сегодня</label>
          </div>
          <div class="del__radio">
            <input type="radio" name="del" id="del-2">
            <label for="del-2">Завтра</label>
          </div>
          <div class="del__radio">
            <input type="radio" name="del" id="del-3">
            <label for="del-3">до 3 дней</label>
          </div>
          <div class="del__radio">
            <input type="radio" name="del" id="del-4">
            <label for="del-4">до 5 дней</label>
          </div>
        </div>
      </div>
      <div class="brend">
        <div class="brend__head">
          <div class="title">Бренд</div>
          <button>Все</button>
        </div>
        <div class="brend">
          <div class="brend__check" v-for="brend in brends" :key="brend">
            <input type="radio" name="brend" :id="'brend-' + brend">
            <label :for="'brend-' + brend">{{ brend }}</label>
          </div>
        </div>
      </div>
      <div class="orig">
        <label for="orig">Оригинальный товар</label>
        <div class="orig__switch switch">
          <input type="checkbox" name="orig" id="orig">
          <span></span>
        </div>
      </div>
      <div class="rating">
        <label for="rating">
          Рейтинг от 4,5
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.9991 15.8305L14.8033 18.1313C15.5 18.553 16.3525 17.9296 16.1691 17.1413L15.1608 12.8146L18.525 9.89962C19.1391 9.36796 18.8091 8.35962 18.0025 8.29546L13.575 7.91962L11.8425 3.83129C11.5308 3.08879 10.4675 3.08879 10.1558 3.83129L8.42332 7.91046L3.99582 8.28629C3.18915 8.35045 2.85915 9.35879 3.47332 9.89045L6.83748 12.8055L5.82915 17.1321C5.64582 17.9205 6.49832 18.5438 7.19498 18.1221L10.9991 15.8305Z"
              fill="#EEBA00" />
          </svg>
        </label>
        <div class="rating__switch switch">
          <input type="checkbox" name="rating" id="rating">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.column 
  display: flex
  flex-direction: column
  gap: 12px
  max-width: 260px
  width: 100%
.sort 
  background: #fff
  padding: 16px 24px
  border-radius: 12px
  &.active 
    .sort__head 
      margin-bottom: 20px
      svg 
        transform: rotate(180deg)
    .sort__list 
      max-height: 600px
      visibility: visible

  &__head 
    display: flex
    align-items: center
    justify-content: space-between
    font-size: 16px
    line-height: 20px
    font-weight: 600
    letter-spacing: -0.02em
    transition: .3s all
    cursor: pointer
    svg 
      transition: .3s all
  &__list 
    visibility: hidden
    max-height: 0
    overflow: hidden
    transition: .3s all
    display: flex
    flex-direction: column
    gap: 12px
  &__check 
    input 
      position: absolute
      width: 0
      height: 0
      opacity: 0
    input:checked + label 
      &::after 
        border-width: 4.5px
        border-color: var(--color-blue)
    label 
      font-size: 14px
      line-height: 18px
      letter-spacing: -0.02em
      font-weight: 500
      position: relative
      cursor: pointer
      display: flex
      align-items: center
      justify-content: space-between
      &::after
        width: 18px
        height: 18px
        border-radius: 50%
        content: ''
        border: 1.8px solid #A1A1A1
        flex-shrink: 0
        display: inline-block
        transition: .3s all

</style>