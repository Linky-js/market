<script setup>
import { ref, onMounted } from 'vue'

const router = useRouter()
const isMobile = ref(false)

const checkWidth = () => {
  isMobile.value = window.innerWidth <= 768
}

const goBack = () => {
  router.back()
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
  <div class="box">
    <a @click="goBack" class="bred">
      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0.286001 4.52819L4.05733 0.756854L5 1.69952L1.7 4.99952L5 8.29952L4.05733 9.24219L0.286001 5.47085C0.16102 5.34584 0.0908097 5.1763 0.0908097 4.99952C0.0908097 4.82274 0.16102 4.65321 0.286001 4.52819Z"
          fill="#232323" />
      </svg>
      Назад
    </a>
    <a @click="goBack" v-if="isMobile" to="/" class="like">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.05 4C14.484 4 12.981 4.70627 12 5.82234C11.019 4.70627 9.516 4 7.95 4C5.178 4 3 6.11008 3 8.79564C3 12.0916 6.06 14.7771 10.695 18.8578L12 20L13.305 18.849C17.94 14.7771 21 12.0916 21 8.79564C21 6.11008 18.822 4 16.05 4ZM12.09 17.5586L12 17.6458L11.91 17.5586C7.626 13.8005 4.8 11.3155 4.8 8.79564C4.8 7.05177 6.15 5.74387 7.95 5.74387C9.336 5.74387 10.686 6.60708 11.163 7.80164H12.846C13.314 6.60708 14.664 5.74387 16.05 5.74387C17.85 5.74387 19.2 7.05177 19.2 8.79564C19.2 11.3155 16.374 13.8005 12.09 17.5586Z"
          fill="#5F5F5F" />
      </svg>
    </a>
  </div>
</template>
<style lang="sass" scoped>
.bred 
  background: #E7E9EC
  border-radius: 6px
  display: flex
  align-items: center
  gap: 7px
  padding: 5px 9px
  width: max-content
  margin-bottom: 12px
  font-size: 12px
  line-height: 100%
  color: #717171
  letter-spacing: -0.02em
@media (max-width: 768px)
  .box
    padding: 10px
    background: #fff
    display: flex
    align-items: center
    justify-content: space-between
  .bred 
    margin-bottom: 0
</style>