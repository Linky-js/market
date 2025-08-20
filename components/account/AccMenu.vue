<script setup>
import ModalOut from './ModalOut.vue';
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const getClass = (link) => {
  if (route.path.startsWith('/account')) return ''
  return route.path === link.link ? 'active' : 'not'
}


const isModalOpen = ref(false)
const links = [
  {
    name: 'Доставки',
    link: '/account-delivery'
  },
  {
    name: 'История заказов',
    link: '/account-history'
  },
  {
    name: 'Покупки',
    link: '#'
  },
  {
    name: 'Избранные',
    link: '#'
  },
  {
    name: 'Отзывы',
    link: '#'
  },
  {
    name: 'Возвраты',
    link: '#'
  },
]

defineProps({
  customClass: {
    type: String,
    default: ""
  }
})
</script>
<template>
  <div class="menu">
    <div class="menu__f">
      <div class="menu__f-info">
        <NuxtImg :src="'/img/review-icon.png'" />
        <div class="col">
          <div class="name">Виктория</div>
          <div class="phone">+7 (987) 654-32-10</div>
        </div>
      </div>
      <div class="menu__f-out" @click="isModalOpen = true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 4.49996H8C5.643 4.49996 4.464 4.49996 3.732 5.23196C3 5.96396 3 7.14296 3 9.49996V14.5C3 16.857 3 18.035 3.732 18.768C4.464 19.5 5.643 19.5 8 19.5H9M9 6.47596C9 4.18296 9 3.03596 9.707 2.40896C10.414 1.78196 11.495 1.96996 13.657 2.34696L15.987 2.75396C18.381 3.17096 19.578 3.37996 20.289 4.25796C21 5.13696 21 6.40696 21 8.94796V15.053C21 17.593 21 18.863 20.29 19.742C19.578 20.62 18.38 20.829 15.986 21.247L13.658 21.653C11.496 22.03 10.415 22.218 9.708 21.591C9 20.964 9 19.817 9 17.524V6.47596Z"
            stroke="#FB4711" stroke-width="1.5" />
          <path d="M12 11V13" stroke="#FB4711" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </div>
    </div>
    <div class="menu__list">
      <NuxtLink v-for="link in links" :key="link.name" :to="link.link" :class="['menu__item', customClass, getClass(link)]">
        <div class="menu__item-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.333 1.66699H6.66637V5.95866C5.56023 6.18475 4.53599 6.70624 3.70245 7.46774C2.86892 8.22923 2.25722 9.20229 1.93233 10.2835C1.60745 11.3648 1.58151 12.5139 1.85728 13.6087C2.13305 14.7035 2.70022 15.7031 3.49855 16.5015C4.29688 17.2998 5.29655 17.867 6.39136 18.1427C7.48617 18.4185 8.63523 18.3926 9.71648 18.0677C10.7977 17.7428 11.7708 17.1311 12.5323 16.2976C13.2938 15.464 13.8153 14.4398 14.0414 13.3337H18.333V1.66699ZM14.153 11.667C14.0522 10.1566 13.4067 8.7341 12.3363 7.66371C11.2659 6.59332 9.84343 5.94778 8.33303 5.84699V3.33366H16.6664V11.667H14.153ZM7.91637 7.50033C9.13194 7.50033 10.2977 7.98321 11.1573 8.84275C12.0168 9.70229 12.4997 10.8681 12.4997 12.0837C12.4997 13.2992 12.0168 14.465 11.1573 15.3246C10.2977 16.1841 9.13194 16.667 7.91637 16.667C6.70079 16.667 5.535 16.1841 4.67546 15.3246C3.81592 14.465 3.33303 13.2992 3.33303 12.0837C3.33303 10.8681 3.81592 9.70229 4.67546 8.84275C5.535 7.98321 6.70079 7.50033 7.91637 7.50033Z"
              fill="#232323" />
          </svg>
        </div>
        <div class="menu__item-text">
          {{ link.name }}
        </div>
      </NuxtLink>
    </div>
  </div>
  <ModalOut v-if="isModalOpen" @close="isModalOpen = false" />
</template>
<style lang="sass" scoped>
.menu 
  max-width: 320px
  width: 100%
  flex-shrink: 0
  display: flex
  flex-direction: column
  gap: 12px
  &__f 
    width: 100%
    display: flex
    align-items: center
    justify-content: space-between
    gap: 15px
    padding: 12px 16px
    background: #fff
    border-radius: 12px
    &-out 
      cursor: pointer
    &-info 
      display: flex
      align-items: center
      gap: 8px
      img 
        width: 36px
        height: 36px
        border-radius: 50%
      .col 
        display: flex
        flex-direction: column
      .name 
        font-size: 14px
        line-height: 18px
        letter-spacing: -0.02em
        font-weight: 600
      .phone 
        font-size: 12px
        font-weight: 500
        letter-spacing: -0.02em
        line-height: 16px
        color: #A1A1A1
  &__list 
    display: flex
    flex-direction: column
  &__item 
    display: flex
    align-items: center
    background: #fff
    &:first-child
      border-radius: 12px 12px 0 0
    &:last-child
      border-radius: 0 0 12px 12px
      border-bottom: none
      .menu__item-text
        border-bottom: none
    &.not 
      background: #E9EBF0
    &.router-link-active 
      background: #fff
      .menu__item-text
        border-bottom: none
    &-icon 
      padding: 10px 11px
      display: flex
      align-items: center
      justify-content: center
    &-text 
      font-size: 16px
      font-weight: 500
      line-height: 20px
      letter-spacing: -0.02em
      border-bottom: 1px solid rgba(0, 0, 0, 0.25)
      padding: 10px 12px
      padding-left: 0
      width: 100%
      display: flex
      align-items: center
      justify-content: space-between
      gap: 15px
      &::after
        content: ''
        width: 8px
        height: 16px
        background: url('data:image/svg+xml,<svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.77064 8.47377L2.99931 12.2451L2.05664 11.3024L5.35664 8.00243L2.05664 4.70243L2.99931 3.75977L6.77064 7.5311C6.89562 7.65612 6.96583 7.82566 6.96583 8.00243C6.96583 8.17921 6.89562 8.34875 6.77064 8.47377Z" fill="%23232323"/></svg>')
        background-size: cover
        background-repeat: no-repeat
        flex-shrink: 0
        margin-left: auto
      
</style>