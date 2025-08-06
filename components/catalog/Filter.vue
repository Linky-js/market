<script setup>
import { ref, computed } from 'vue'

const isActive = ref(false)

const toggleSort = () => {
  isActive.value = !isActive.value
}

const expanded = ref(false)
const search = ref('')
const selected = ref([]) 

const brends = ref([
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
])
// Фильтруем по введенному поисковому запросу
const filteredBrends = computed(() => {
  const q = search.value.toLowerCase().trim()
  if (!q) return brends.value
  return brends.value.filter(b => b.toLowerCase().includes(q))
})

// 📌 Показываем либо 6, либо все найденные бренды
const visibleBrends = computed(() => {
  return expanded.value ? filteredBrends.value : filteredBrends.value.slice(0, 6)
})

// ✅ Проверяем, выбраны ли все видимые бренды
const allSelected = computed(() => {
  const visible = visibleBrends.value
  return visible.every(b => selected.value.includes(b)) && visible.length > 0
})

// 🔄 Разворачиваем/сворачиваем список
function toggleExpand() {
  expanded.value = !expanded.value
  if (!expanded.value) search.value = '' // сбрасываем поиск при сворачивании
}

// ✅ Выбираем/снимаем все видимые бренды
function toggleSelectAll() {
  const visible = visibleBrends.value
  if (allSelected.value) {
    selected.value = selected.value.filter(b => !visible.includes(b))
  } else {
    selected.value = Array.from(new Set([...selected.value, ...visible]))
  }
}
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
          <button @click="toggleExpand">{{ expanded ? 'Скрыть' : 'Все' }}</button>
        </div>
        <div class="brend__column">
          <div class="search" v-if="expanded">
            <input type="search" v-model="search" name="search-brend" id="search-brend" placeholder="Поиск по списку">
            <button type="submit" @click.prevent>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.3333 11.3333L14 14M2 7.33333C2 8.74782 2.5619 10.1044 3.5621 11.1046C4.56229 12.1048 5.91885 12.6667 7.33333 12.6667C8.74782 12.6667 10.1044 12.1048 11.1046 11.1046C12.1048 10.1044 12.6667 8.74782 12.6667 7.33333C12.6667 5.91885 12.1048 4.56229 11.1046 3.5621C10.1044 2.5619 8.74782 2 7.33333 2C5.91885 2 4.56229 2.5619 3.5621 3.5621C2.5619 4.56229 2 5.91885 2 7.33333Z"
                  stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <button class="brend__all" v-if="expanded" @click="toggleSelectAll">
            {{ allSelected ? 'Снять все' : 'Выбрать все' }}
          </button>
          <div class="brend__list">
            <div class="brend__check" v-for="(brend, i) in visibleBrends" :key="brend" >
              <input type="checkbox" name="brend" :id="'brend-' + brend" v-model="selected" :value="brend">
              <label :for="'brend-' + brend">{{ brend }}</label>
            </div>
            <p v-if="visibleBrends.length === 0">Ничего не найдено</p>
          </div>
        </div>
      </div>
      <label for="orig" class="orig">
        <div class="title">Оригинальный товар</div>
        <div class="orig__switch switch">
          <input type="checkbox" name="orig" id="orig">
          <span></span>
        </div>
      </label>
      <label for="rating" class="rating">
        <div class="title">
          Рейтинг от 4,5
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.9991 15.8305L14.8033 18.1313C15.5 18.553 16.3525 17.9296 16.1691 17.1413L15.1608 12.8146L18.525 9.89962C19.1391 9.36796 18.8091 8.35962 18.0025 8.29546L13.575 7.91962L11.8425 3.83129C11.5308 3.08879 10.4675 3.08879 10.1558 3.83129L8.42332 7.91046L3.99582 8.28629C3.18915 8.35045 2.85915 9.35879 3.47332 9.89045L6.83748 12.8055L5.82915 17.1321C5.64582 17.9205 6.49832 18.5438 7.19498 18.1221L10.9991 15.8305Z"
              fill="#EEBA00" />
          </svg>
        </div>
        <div class="rating__switch switch">
          <input type="checkbox" name="rating" id="rating">
          <span></span>
        </div>
      </label>
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
.filter 
  padding: 20px 24px
  background: #fff
  border-radius: 12px
  h3 
    font-size: 18px
    font-weight: 600
    line-height: 22px
    letter-spacing: -0.02em
    margin-bottom: 24px
.title 
  font-size: 14px
  line-height: 18px
  letter-spacing: -0.02em
  font-weight: 600
  margin-bottom: 12px
.price 
  margin-bottom: 24px
  &__box 
    display: flex
    gap: 6px
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button 
      -webkit-appearance: none
      margin: 0
    input 
      width: 100%
      background: #F2F4F8
      border-radius: 12px
      padding: 8px 12px
      font-size: 12px
      font-weight: 500
      border: 1px solid #F2F4F8
      &:placeholder
        color: #999999
      &:focus 
        box-shadow: none
        outline: none
        border-color: var(--color-blue)
.del 
  padding-top: 12px
  border-top: 1px solid #F2F4F8
  margin-bottom: 24px
  &__box 
    display: flex
    flex-wrap: wrap
    gap: 6px
  &__radio 
    input 
      position: absolute
      width: 0
      height: 0
      opacity: 0
    label 
      padding: 6px 12px
      font-size: 12px
      line-height: 16px
      letter-spacing: -0.02em
      font-weight: 500
      background: #E7E9EC
      border-radius: 65px
      cursor: pointer
    input:checked + label
      background: var(--color-blue)
      color: #fff
.brend 
  padding-top: 12px
  border-top: 1px solid #F2F4F8
  margin-bottom: 24px
  &__head 
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 12px
    .title 
      margin-bottom: 0
    button 
      color: #A1A1A1
      cursor: pointer
      font-weight: 500
      font-size: 12px
      line-height: 120% 
      letter-spacing: -0.02em
      &:hover 
        color: var(--color-blue)
  &__column 
    display: flex
    flex-direction: column
    gap: 12px
  &__list 
    display: flex
    flex-direction: column
    gap: 12px
    overflow-y: auto
    max-height: 204px
    &::-webkit-scrollbar 
      width: 6px
    &::-webkit-scrollbar-track 
      background: #fff     
    &::-webkit-scrollbar-thumb 
      background-color: #E7E9EC
      border-radius: 20px 
      border: none
    p 
      font-size: 14px
      line-height: 20px
      font-weight: 500
      letter-spacing: -0.02em
  &__all 
    font-size: 14px
    line-height: 18px
    font-weight: 500
    letter-spacing: -0.02em
    color: var(--color-blue)
    text-align: left
    &:hover 
      text-decoration: underline
  &__check 
    input 
      position: absolute
      width: 0
      height: 0
      opacity: 0
    label 
      font-size: 14px
      font-weight: 500
      line-height: 18px
      letter-spacing: -0.02em
      display: flex
      align-items: center
      gap: 8px
      cursor: pointer
      &:before 
        width: 20px
        height: 20px
        display: inline-block
        content: ''
        border-radius: 4px
        border: 2px solid #A1A1A1
        flex-shrink: 0
    input:checked + label:before
      background: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_289_468)"><rect width="20" height="20" rx="4" fill="%23118AFB"/><path d="M5.3335 9.99935L9.3335 13.3327L14.6668 6.66602" stroke="white" stroke-width="2"/></g><defs><clipPath id="clip0_289_468"><rect width="20" height="20" rx="4" fill="white"/></clipPath></defs></svg>')
      background-size: cover
      background-repeat: no-repeat
      border: none
.search 
  position: relative
  button 
    position: absolute
    right: 12px
    top: 50%
    transform: translateY(-50%)
  input 
    width: 100%
    padding: 8px 12px
    background: #F2F4F8
    font-size: 12px
    line-height: 16px
    letter-spacing: -0.02em
    font-weight: 500
    border: 1px solid #F2F4F8
    border-radius: 12px
    &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration 
      display: none
    &:placeholder
      color: #999999
    &:focus 
      box-shadow: none
      outline: none
      border-color: var(--color-blue)
.orig 
  margin-bottom: 12px
.rating, .orig
  display: flex
  padding-top: 12px
  border-top: 1px solid #F2F4F8
  display: flex
  align-items: center
  justify-content: space-between
  cursor: pointer
  .title 
    margin-bottom: 0
    display: flex
    align-items: center
    gap: 2px
.switch 
  width: 44px
  height: 22px
  position: relative
  display: inline-block
  input 
    opacity: 0
    width: 0
    height: 0
  span 
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #A1A1A1
    transition: .3s all
    border-radius: 30px
    &:before 
      position: absolute
      content: ''
      width: 16px
      height: 16px
      left: 3px
      bottom: 3px
      background: #fff
      border-radius: 50%
      transition: .3s all
  input:checked + span 
    background: var(--color-blue)
    &:before 
      transform: translateX(22px)
</style>