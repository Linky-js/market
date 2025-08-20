<script setup>
import { ref, onMounted, watch } from "vue";
import { useStore } from "@/stores/index";
import searchHeader from "../ui/searchHeader.vue";
const store = useStore();

watch(
  () => store.categories,
  (newValue) => {
    categories.value = newValue;
    console.log("categories", categories.value);
  }
);
const categories = ref([]);
const activeIndex = ref(0); // выбранная категория
const isActive = ref(false)
const props = defineProps({
  open: { type: Boolean, default: false },
});

const emit = defineEmits(["close"]);

const closeMenu = () => {
  emit("close");
};

const isMobile = ref(false)
const checkWidth = () => {
  isMobile.value = window.innerWidth <= 768
}
onMounted(() => {
  checkWidth()
  window.addEventListener('resize', checkWidth)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkWidth)
})
</script>
<template>
  <div v-if="categories.length > 0" class="menu" :class="{ open: open }">
    <div class="menu__search" v-if="isMobile">
      <searchHeader />
    </div>
    <h2 v-if="isMobile">Каталог товаров</h2>
    <div class="menu__box">
      <div class="menu__left">
        <div class="menu__item" v-for="(cat, index) in categories" :class="{ active: activeIndex === index }"
          @click="activeIndex = index; isActive = true" :key="index">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.3333 1.66699H6.66667V5.95866C5.56053 6.18475 4.53629 6.70624 3.70275 7.46774C2.86922 8.22923 2.25752 9.20229 1.93263 10.2835C1.60775 11.3648 1.58181 12.5139 1.85758 13.6087C2.13335 14.7035 2.70052 15.7031 3.49885 16.5015C4.29718 17.2998 5.29685 17.867 6.39166 18.1427C7.48647 18.4185 8.63553 18.3926 9.71678 18.0677C10.798 17.7428 11.7711 17.1311 12.5326 16.2976C13.2941 15.464 13.8156 14.4398 14.0417 13.3337H18.3333V1.66699ZM14.1533 11.667C14.0525 10.1566 13.407 8.7341 12.3366 7.66371C11.2662 6.59332 9.84374 5.94778 8.33333 5.84699V3.33366H16.6667V11.667H14.1533ZM7.91667 7.50033C9.13224 7.50033 10.298 7.98321 11.1576 8.84275C12.0171 9.70229 12.5 10.8681 12.5 12.0837C12.5 13.2992 12.0171 14.465 11.1576 15.3246C10.298 16.1841 9.13224 16.667 7.91667 16.667C6.70109 16.667 5.5353 16.1841 4.67576 15.3246C3.81622 14.465 3.33333 13.2992 3.33333 12.0837C3.33333 10.8681 3.81622 9.70229 4.67576 8.84275C5.5353 7.98321 6.70109 7.50033 7.91667 7.50033Z"
              fill="#118AFB" />
          </svg>
          {{ cat.name }}
          <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M6.77134 8.47377L3.00001 12.2451L2.05734 11.3024L5.35734 8.00243L2.05734 4.70243L3.00001 3.75977L6.77134 7.5311C6.89632 7.65612 6.96653 7.82566 6.96653 8.00243C6.96653 8.17921 6.89632 8.34875 6.77134 8.47377Z"
              fill="#232323" />
          </svg>
        </div>
      </div>
      <div class="menu__right" :class="{ active: isActive }">
        <button v-if="isMobile" class="menu__prev" @click="isActive = false">
          <svg width="8" height="11"
            viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.13388 5.2503L7.21763 1.16655L6.05108 -2.29498e-07L0.800781 5.2503L6.05108 10.5006L7.21763 9.33405L3.13388 5.2503Z"
              fill="#232323" />
          </svg>
          Назад</button>
        <NuxtLink class="menu__title" @click="closeMenu" :to="'/catalog/' + categories[activeIndex].slug">{{
          categories[activeIndex].name }}</NuxtLink>
        <div class="menu__list">
          <div class="menu__list-item" v-for="(sub, i) in categories[activeIndex].children" :key="i">
            <NuxtLink class="menu__list-title" @click="closeMenu" :to="'/catalog/' + sub.slug">{{ sub.name }}</NuxtLink>
            <ul>
              <li v-for="(item, j) in sub.children" :key="j">
                <NuxtLink @click="closeMenu" :to="'/catalog/' + item.slug">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.menu
  height: 100%
  top: 0
  left: 0
  position: fixed
  padding-top: 146px
  width: 100%
  padding-left: 48px
  padding-right: 48px
  background: #F2F4F8
  display: flex
  align-items: flex-start
  gap: 24px
  z-index: 4
  opacity: 0
  visibility: hidden
  transition: .3s all
  &::-webkit-scrollbar
    width: 6px
  &::-webkit-scrollbar-track
    background: #fff
  &::-webkit-scrollbar-thumb
    background-color: #E7E9EC
    border-radius: 20px
    border: none
  &.open
    opacity: 1
    visibility: visible
  &__box 
    display: contents
  &__left
    max-width: calc(358px * 100% / 1296px)
    width: 100%
    display: flex
    flex-direction: column
    gap: 4px
  &__item
    display: flex
    align-items: center
    background: #E9EBF0
    padding: 10px 12px
    border-radius: 8px
    gap: 11px
    font-weight: 500
    font-size: 16px
    line-height: 100%
    letter-spacing: -0.02em
    cursor: pointer
    transition: .3s all
    svg 
      flex-shrink: 0
    &.active
      background: #fff
    svg:last-child
      margin-left: auto
  &__right
    max-width: calc(962px * 100% / 1296px)
    width: 100%
    padding: 28px 32px
    background: #fff
    border-radius: 8px
    overflow-y: auto
    height: 100%
    max-height: 628px
    &::-webkit-scrollbar
      width: 6px
    &::-webkit-scrollbar-track
      background: #fff
    &::-webkit-scrollbar-thumb
      background-color: #E7E9EC
      border-radius: 20px
      border: none
  &__title
    font-size: 24px
    line-height: 30px
    font-weight: 600
    margin-bottom: 32px
    display: inline-block
    &:hover 
      color: var(--color-blue)
  &__list
    gap: 24px 64px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    &-title
      display: inline-block
      font-size: 14px
      line-height: 18px
      font-weight: 600
      margin-bottom: 10px
      &:hover 
        color: var(--color-blue)
    &-item
      ul
        display: flex
        flex-direction: column
        gap: 6px
        li
          line-height: 110%
          font-size: 12px
          font-weight: 500
        button
          display: flex
          align-items: center
          justify-content: center
          gap: 2px
          color: #999999
        a

          color: #999999
          transition: .3s all
          &:hover
            color: var(--color-blue)
@media (max-width: 1440px)
  .menu 
    padding-top: 120px
    padding-left: 24px
    padding-right: 24px
    padding-bottom: 24px
    height: 100%
    overflow-y: auto
    &__right 
      max-height: 100%
@media (max-width: 1200px)
  .menu__list 
    grid-template-columns: repeat(2, 1fr)
  .menu__item
    font-size: 14px
@media (max-width: 768px)
  .menu 
    padding-top: 0
    z-index: 5
    display: flex
    flex-direction: column
    padding-left: 0
    padding-right: 0
    padding-bottom: 50px
    gap: 0
    top: -100%
    &.open 
      top: 0
    h2 
      font-size: 24px
      line-height: 100%
      margin-bottom: 20px
      padding-left: 16px
      padding-right: 16px
  .menu__search 
    max-width: 100%
    width: 100%
    padding-bottom: 6px
    padding-top: 6px
    background: #fff
    margin-bottom: 20px
  .menu__box 
    display: block
    width: 100%
    padding-left: 16px
    padding-right: 16px
  .menu__left 
    max-width: 100%
    width: 100%
    gap: 0
    overflow: hidden
    border-radius: 12px
  .menu__right 
    position: absolute
    top: 0
    left: -100%
    opacity: 0
    visibility: hidden
    max-width: 100%
    width: 100%
    transition: .3s all
    padding: 16px
    padding-bottom: 70px
    &.active 
      left: 0
      opacity: 1
      visibility: visible    
  .menu__list 
    display: flex
    flex-direction: column
    gap: 15px
  .menu__item 
    background: #fff
    position: relative
    border-radius: 0
    &::after
      width: calc(100% - 40px)
      height: 0.5px
      content: ''
      position: absolute
      bottom: 0
      right: 0
      background: rgba(0, 0, 0, 0.25)
    &:last-child
      &::after 
        display: none
    &.active 
      background: #fff
  .menu__prev 
    display: flex
    align-items: center
    gap: 5px
    font-size: 14px
    line-height: 18px
    font-weight: 600
    margin-bottom: 20px
  .menu__title 
    margin-bottom: 15px
    font-size: 20px
    line-height: 120%
  .menu__list-item ul li
    font-size: 14px
</style>