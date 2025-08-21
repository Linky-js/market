<script setup>
import { ref, computed } from 'vue'
const isActive = ref(false)

const toggleFilter = () => {
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
  'Nike4',
  'Adidas34',
  'Puma4',
  'Reebok4',
  'Lacoste4',
  'New Balance4',
  'Asics4',
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
function resetFilter() {
  // 🔹 закрываем фильтр
  isActive.value = false
  expanded.value = false

  // 🔹 сбрасываем поиск
  search.value = ''

  // 🔹 сбрасываем выбранные бренды
  selected.value = []

  // 🔹 сброс radio и checkbox без v-model
  const inputs = document.querySelectorAll('.filter input[type="checkbox"], .filter input[type="radio"]')
  inputs.forEach(input => {
    input.checked = false
  })
}
</script>
<template>
  <div class="filter__icon" @click="toggleFilter">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.0002 5.25H8.25024M10.5002 12.75H3.75024" stroke="#232323" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
      <path
        d="M12.7502 15C13.9929 15 15.0002 13.9926 15.0002 12.75C15.0002 11.5074 13.9929 10.5 12.7502 10.5C11.5076 10.5 10.5002 11.5074 10.5002 12.75C10.5002 13.9926 11.5076 15 12.7502 15Z"
        stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M5.24976 7.5C6.4924 7.5 7.49976 6.49264 7.49976 5.25C7.49976 4.00736 6.4924 3 5.24976 3C4.00712 3 2.99976 4.00736 2.99976 5.25C2.99976 6.49264 4.00712 7.5 5.24976 7.5Z"
        stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="filter__bg" :class="{ active: isActive }" @click="toggleFilter"></div>
  <div class="filter" :class="{ active: isActive, expanded: expanded }">
    <h3 v-if="!expanded">Фильтр</h3>
    <div class="filter__exit" v-if="!expanded" @click="toggleFilter">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M5.05416 6.75435C5.39329 6.41522 5.94313 6.41522 6.28227 6.75435L11.3998 11.8719L16.5173 6.75436C16.8565 6.41523 17.4063 6.41523 17.7455 6.75436C18.0846 7.0935 18.0846 7.64334 17.7455 7.98247L12.6279 13.1L17.745 18.217C18.0841 18.5562 18.0841 19.106 17.745 19.4451C17.4058 19.7843 16.856 19.7843 16.5168 19.4451L11.3998 14.3281L6.28277 19.4452C5.94363 19.7843 5.39379 19.7843 5.05466 19.4452C4.71552 19.106 4.71552 18.5562 5.05466 18.217L10.1717 13.1L5.05416 7.98246C4.71502 7.64333 4.71502 7.09348 5.05416 6.75435Z"
          fill="#232323" />
      </svg>
    </div>
    <div class="price" v-if="!expanded">
      <div class="title">Цена</div>
      <div class="price__box">
        <input type="number" placeholder="от 100 ₽">
        <input type="number" placeholder="до 1000000 ₽">
      </div>
    </div>
    <div class="del" v-if="!expanded">
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
        <div class="title">{{ expanded ? 'Бренды' : 'Бренд' }}</div>
        <button class="brend__head-btn" @click="toggleExpand">{{ expanded ? 'Назад' : 'Все' }}
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.97261 10.0002L2.43511 5.46267L3.73127 4.1665L9.56494 10.0002L3.73127 15.8338L2.43511 14.5377L6.97261 10.0002Z"
              fill="#999999" />
          </svg>
        </button>
        <button class="brend__all" v-if="expanded" @click="toggleSelectAll">
          {{ allSelected ? 'Снять все' : 'Выбрать все' }}
        </button>
      </div>
      <div class="search" v-if="expanded">
        <input type="search" v-model="search" name="search-brend" id="search-brend" placeholder="Поиск по списку">
        <p>123 товара</p>
      </div>
      <div class="brend__title2 title" v-if="expanded">Все бренды</div>
      <div class="brend__list">
        <div class="brend__check" v-for="(brend, i) in visibleBrends" :key="brend">
          <input type="checkbox" name="brend" :id="'brend-' + brend" v-model="selected" :value="brend">
          <label :for="'brend-' + brend">{{ brend }}</label>
        </div>
        <p v-if="visibleBrends.length === 0">Ничего не найдено</p>
      </div>
    </div>
    <label for="orig" class="orig" v-if="!expanded">
      <div class="title">Оригинальный товар</div>
      <div class="orig__switch switch">
        <input type="checkbox" name="orig" id="orig">
        <span></span>
      </div>
    </label>
    <label for="rating" class="rating" v-if="!expanded">
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
    <div class="filter__btns">
      <div class="btn" @click="toggleFilter">Показать</div>
      <div class="btn" @click="resetFilter">Сбросить</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.filter 
  padding: 20px 16px
  background: #fff
  border-radius: 12px
  position: fixed
  display: flex
  flex-direction: column
  bottom: -100%
  left: 0
  width: 100%
  z-index: 9
  transition: .3s all
  &.expanded 
    background: #F2F4F8
    padding: 0
    height: 100%
    border-radius: 0
    .filter__btns 
      position: fixed
      bottom: 0
      width: 100%
      left: 0
      padding: 20px 16px
      background: #fff
      margin-top: 0
      box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1)
    .brend 
      border-top: none
      margin-bottom: 0
    .brend__list 
      padding: 16px
      background: #fff
      border-radius: 12px 12px 0 0
      display: flex
      flex-direction: column
      flex-wrap: nowrap
      gap: 16px
      overflow-y: auto
      height: calc(100vh - 244px)
      &::-webkit-scrollbar 
        width: 6px
      &::-webkit-scrollbar-track 
        background: #fff     
      &::-webkit-scrollbar-thumb 
        background-color: #E7E9EC
        border-radius: 20px 
        border: none
    .brend__check 
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
        background: none
        padding: 0
        &:before 
          width: 20px
          height: 20px
          display: inline-block
          content: ''
          border-radius: 4px
          border: 2px solid #A1A1A1
          flex-shrink: 0
      input:checked + label
        background: none
        color: var(--color-black)
      input:checked + label:before
        background: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_289_468)"><rect width="20" height="20" rx="4" fill="%23118AFB"/><path d="M5.3335 9.99935L9.3335 13.3327L14.6668 6.66602" stroke="white" stroke-width="2"/></g><defs><clipPath id="clip0_289_468"><rect width="20" height="20" rx="4" fill="white"/></clipPath></defs></svg>')
        background-size: cover
        background-repeat: no-repeat
        border: none
    .brend__head 
      padding: 18px 16px
      margin-bottom: 0
      &-btn 
        order: 0
        flex-direction: row-reverse
        font-weight: 600
        color: var(--color-black)
        svg 
          transform: rotate(180deg)
          path 
            fill: var(--color-black)
      .title 
        order: 1
    .brend__all 
      order: 2
    .brend__title2 
      margin-bottom: 16px
      padding-left: 16px
      padding-right: 16px
  &__btns 
    display: flex
    align-items: center
    gap: 6px
    margin-top: 46px
    .btn 
      padding: 10px
      color: #fff
      font-size: 14px
      line-height: 20px
      font-weight: 600
      border-radius: 100px
      width: 100%
      background: var(--color-blue)
      transition: .3s all
      display: inline-block
      text-align: center
      &:hover 
        background: #0073DD
      &:last-child
        background: none
        border: 1px solid var(--color-black)
        color: var(--color-black)
  &__exit 
    position: absolute
    top: 20px
    right: 16px
  &.active 
    bottom: 0
  &__bg
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 8
    background: rgba(35, 35, 35, 1)
    opacity: 0
    transition: .3s all
    visibility: hidden
    &.active 
      opacity: 1
      visibility: visible
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
      font-size: 14px
      line-height: 20px
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
    &-btn 
      color: #A1A1A1
      cursor: pointer
      font-weight: 500
      font-size: 14px
      line-height: 120% 
      letter-spacing: -0.02em
      display: flex
      align-items: center
      gap: 2px
      &:hover 
        color: var(--color-blue)
  &__list 
    display: flex
    flex-wrap: wrap
    gap: 6px
  &__check
    input 
      position: absolute
      width: 0
      height: 0
      opacity: 0
    label 
      display: inline-block
      padding: 6px 12px
      font-size: 14px
      line-height: 20px
      letter-spacing: -0.02em
      font-weight: 500
      background: #E7E9EC
      border-radius: 65px
      cursor: pointer
    input:checked + label
      background: var(--color-blue)
      color: #fff
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
  
.search 
  position: relative
  margin: 0 16px 16px
  p 
    position: absolute
    right: 12px
    top: 50%
    transform: translateY(-50%)
    font-size: 14px
    line-height: 20px
    font-weight: 500
    color: #999
  input 
    width: 100%
    padding: 12px
    background: #E7E9EC
    font-size: 16px
    line-height: 20px
    font-weight: 500
    border: 1px solid #DDE0E5
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