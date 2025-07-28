<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const emit = defineEmits(['toggleHarActive'])
const props = defineProps({
  charakteristick: {
    type: Boolean,
    default: false
  }
})

const activeTab = ref(0) // индекс активного таба
const about = {
  about: 'Пылесос Deerma DX700 можно использовать в качестве ручного или обычного полового пылесоса, а благодаря весу всего в 2.2 кг даже долгая уборка не утомляет и не вызывает усталости. в которых от воздуха отделяется пыль, волосы и другие крупные частицы. В такой системе невозможно образование засоров, а значит и сила всасывания со временем не теряется. Идущие в комплекте половая щетка, щетка с круглым носиком и тонкая насадка помогут навести чистоту в любом месте, убирая пыль с пола, поверхности мебели и даже из узких щелей. Всего один пылесос справится с разными задачами - в вертикальном положении он очистит пол, а в ручном - мебель и прочие поверхности. Пылесос Deerma DX700 можно использовать в качестве ручного или обычного полового пылесоса, а благодаря весу всего в 2.2 кг даже долгая уборка не утомляет и не вызывает усталости. в которых от воздуха отделяется пыль, волосы и другие крупные частицы. В такой системе невозможно образование засоров, а значит и сила всасывания со временем не теряется. Идущие в комплекте половая щетка, щетка с круглым носиком и тонкая насадка помогут навести чистоту в любом месте, убирая пыль с пола, поверхности мебели и даже из узких щелей. Всего один пылесос справится с разными задачами - в вертикальном положении он очистит пол, а в ручном - мебель и прочие поверхности.',
  har: [
    {
      title: 'Тип',
      text: 'Пылесос'
    },
    {
      title: 'Бренд',
      text: 'Deerma'
    },
    {
      title: 'Тип',
      text: 'Пылесос'
    },
    {
      title: 'Бренд',
      text: 'Deerma'
    },
    {
      title: 'Тип',
      text: 'Пылесос'
    },
    {
      title: 'Бренд',
      text: 'Deerma'
    },
    {
      title: 'Тип',
      text: 'Пылесос'
    },
    {
      title: 'Бренд',
      text: 'Deerma'
    },
    {
      title: 'Тип',
      text: 'Пылесос'
    },
    {
      title: 'Бренд',
      text: 'Deerma'
    },
    {
      title: 'Тип',
      text: 'Пылесос'
    },
    {
      title: 'Бренд',
      text: 'Deerma'
    },
  ]
}
watch(() => props.charakteristick, (newValue) => {
  if (newValue) {
    console.log('charakteristick',newValue);
    
    activeTab.value = 1
  }
})
const setActiveTab = (index) => {
  if (index === 0) {
   emit('toggleHarActive', false)
  }
  activeTab.value = index
}
const isParagraphActive = ref(false)

const toggleParagraphActive = () => {
  isParagraphActive.value = !isParagraphActive.value
}

const isHarActive = ref(false)

const toggleHarActive = () => {
  isHarActive.value = !isHarActive.value
}
</script>
<template>
  <div class="about">
    <h2>О товаре</h2>
    <div class="about__tabs">
      <div class="about__tabs-item" :class="{ active: activeTab === 0 }" @click="setActiveTab(0)">Описание</div>
      <div class="about__tabs-item" :class="{ active: activeTab === 1 }" @click="setActiveTab(1)">Характеристики</div>
    </div>
    <div class="about__content">
      <div class="about__text" v-show="activeTab === 0">
        <p :class="{ active: isParagraphActive }">{{ about.about }}</p>
        <button @click="toggleParagraphActive" v-if="!isParagraphActive">Показать больше
          <svg :class="{ active: isParagraphActive }" width="17" height="8" viewBox="0 0 17 8" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_392_19179)">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.02623 6.77162L4.2549 3.00028L5.19757 2.05762L8.49757 5.35762L11.7976 2.05762L12.7402 3.00028L8.9689 6.77162C8.84388 6.8966 8.67434 6.96681 8.49757 6.96681C8.32079 6.96681 8.15125 6.8966 8.02623 6.77162Z"
                fill="#A1A1A1" />
            </g>
            <defs>
              <clipPath id="clip0_392_19179">
                <rect width="8" height="16" fill="white" transform="translate(16.5) rotate(90)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div class="about__har" v-show="activeTab === 1">
        <div class="about__har-list" :class="{ active: isHarActive }">
          <div class="about__har-item" v-for="item in about.har" :key="item">
            <span>{{ item.title }}</span>
            <span>{{ item.text }}</span>
          </div>
        </div>
        <button @click="toggleHarActive" v-if="!isHarActive">Показать больше
          <svg :class="{ active: isHarActive }" width="17" height="8" viewBox="0 0 17 8" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_392_19179)">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.02623 6.77162L4.2549 3.00028L5.19757 2.05762L8.49757 5.35762L11.7976 2.05762L12.7402 3.00028L8.9689 6.77162C8.84388 6.8966 8.67434 6.96681 8.49757 6.96681C8.32079 6.96681 8.15125 6.8966 8.02623 6.77162Z"
                fill="#A1A1A1" />
            </g>
            <defs>
              <clipPath id="clip0_392_19179">
                <rect width="8" height="16" fill="white" transform="translate(16.5) rotate(90)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.about 
  padding: 24px
  background: #fff
  border-radius: 12px
  max-width: calc(1000px * 100% / 1296px)
  width: 100%
  margin-top: 48px
  margin-bottom: 24px
  h2 
    font-size: 20px
    font-weight: 600
    letter-spacing: -0.02em
    margin-bottom: 16px
  &__tabs 
    display: flex
    align-items: center
    gap: 5px
    margin-bottom: 16px
    &-item 
      padding: 6px 10px
      background: #ECECEC
      border-radius: 100px
      font-size: 14px
      font-weight: 500
      letter-spacing: -0.02em
      cursor: pointer
      &.active 
        background: var(--color-black)
        color: #fff
  &__text 
    p 
      font-size: 14px
      letter-spacing: -0.02em
      line-height: 120%
      height: 90px
      overflow: hidden
      position: relative
      &.active 
        height: auto
    button 
      display: flex
      align-items: center
      justify-content: center
      gap: 3px
      margin: 12px auto 0
      color: #A1A1A1
      font-size: 12px
      font-weight: 500
      line-height: 100%
      svg 
        &.active 
          transform: rotate(180deg)
  &__har 
    &-list 
      height: 179px
      overflow: hidden
      &.active 
        height: auto
    button 
      display: flex
      align-items: center
      justify-content: center
      gap: 3px
      margin: 12px auto 0
      color: #A1A1A1
      font-size: 12px
      font-weight: 500
      line-height: 100%
      svg 
        &.active 
          transform: rotate(180deg)
    &-item 
      box-shadow: 0px 0.4px 0px 0px rgba(0, 0, 0, 0.25)
      padding: 9px 0
      display: grid
      grid-template-columns: repeat(2, 1fr)
      gap: 15px
      span
        font-size: 14px
        line-height: 100%
        letter-spacing: -0.02em
        font-weight: 500
        &:first-child
          color: rgba(137, 137, 137, 1)
</style>