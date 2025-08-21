<script setup>
import { ref } from 'vue'

const isActive = ref(false)
const selectedSort = ref('По популярности')

const toggleSort = () => {
  isActive.value = !isActive.value
}

const applySort = () => {
  const checked = document.querySelector('input[name="sort"]:checked')
  if (checked) {

    const label = document.querySelector(`label[for="${checked.id}"]`)
    if (label) {
      selectedSort.value = label.textContent
    }
  }
  isActive.value = false
}
</script>
<template>
  <div class="sort" :class="{ active: isActive }">
    <div class="sort__head" @click="toggleSort">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3.75H15" stroke="#232323" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 9H12" stroke="#232323" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 14.25H9" stroke="#232323" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div class="sort__head-title">
        {{ selectedSort }}
      </div>
    </div>
    <div class="sort__bg" @click="toggleSort"></div>
    <div class="sort__list">
      <div class="sort__list-title">
        Сортировка
      </div>
      <div class="sort__exit" @click="toggleSort">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5.05416 6.75435C5.39329 6.41522 5.94313 6.41522 6.28227 6.75435L11.3998 11.8719L16.5173 6.75436C16.8565 6.41523 17.4063 6.41523 17.7455 6.75436C18.0846 7.0935 18.0846 7.64334 17.7455 7.98247L12.6279 13.1L17.745 18.217C18.0841 18.5562 18.0841 19.106 17.745 19.4451C17.4058 19.7843 16.856 19.7843 16.5168 19.4451L11.3998 14.3281L6.28277 19.4452C5.94363 19.7843 5.39379 19.7843 5.05466 19.4452C4.71552 19.106 4.71552 18.5562 5.05466 18.217L10.1717 13.1L5.05416 7.98246C4.71502 7.64333 4.71502 7.09348 5.05416 6.75435Z"
            fill="#232323" />
        </svg>
      </div>
      <div class="sort__check">
        <input type="radio" name="sort" id="sort-1" checked>
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
      <div class="sort__btn" @click="applySort">Применить</div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.sort 
  &.active 
    .sort__head 
      path 
        stroke: #0073DD
    .sort__list 
      visibility: visible
      opacity: 1
      bottom: 0
    .sort__bg
      opacity: 1
      visibility: visible
  &__btn 
    margin-top: 22px
    padding: 12px
    color: #fff
    font-size: 16px
    line-height: 22px
    font-weight: 600
    border-radius: 100px
    width: 100%
    background: var(--color-blue)
    transition: .3s all
    display: inline-block
    text-align: center
    &:hover 
      background: #0073DD
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
  &__head 
    display: flex
    align-items: center
    gap: 6px
    &-title
      font-size: 14px
      line-height: 18px
      font-weight: 600
  &__exit 
    position: absolute
    right: 16px
    top: 20px
    cursor: pointer
  &__list 
    visibility: hidden
    overflow: hidden
    transition: .3s all
    display: flex
    flex-direction: column
    gap: 10px
    position: fixed
    bottom: -100%
    left: 0
    width: 100%
    z-index: 9
    background: #fff
    border-radius: 12px 12px 0 0  
    padding: 20px 16px
    &-title 
      font-size: 20px
      line-height: 25px
      font-weight: 600
      margin-bottom: 14px
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