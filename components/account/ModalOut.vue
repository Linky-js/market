<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

// закрываем по клику на фон
const onBackdropClick = (e) => {
  if (e.target.classList.contains('modal')) {
    emit('close')
  }
}
</script>
<template>
  <div class="modal" id="modal-out" @click="onBackdropClick">
    <div class="modal__content">
      <p>Вы уверены, что хотите выйти из аккаунта?</p>
      <div class="btn no">Выйти :(</div>
      <div class="btn yes" @click="emit('close')">Остаться :)</div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.modal 
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: rgba(35, 35, 35, 0.5)
  display: flex
  justify-content: center
  align-items: center
  z-index: 10
  &__content 
    max-width: 326px
    width: 100%
    background: #fff
    border-radius: 12px
    padding: 32px
    display: flex
    flex-direction: column
    gap: 8px
    p 
      text-align: center
      font-size: 20px
      line-height: 25px
      margin-bottom: 24px
    .btn 
      display: flex
      align-items: center
      justify-content: center
      padding: 10px
      width: 100%
      border-radius: 100px
      font-size: 16px
      line-height: 20px
      cursor: pointer
      transition: .3s all
      font-weight: 600
      &.no 
        background: #E7E9EC
        &:hover 
          background: #FB4711
          color: #fff
      &.yes 
        background: var(--color-blue)
        color: #fff
        &:hover 
          background: #0073DD
@media (max-width: 768px)
  .modal__content 
    padding: 31px
    p 
      font-size: 16px
      margin-bottom: 16px
    .btn 
      font-size: 14px
      line-height: 20px
</style>