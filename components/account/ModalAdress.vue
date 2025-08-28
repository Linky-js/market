<script setup>

</script>
<template>
  <div class="modal">
    <div class="modal__content">
      <div class="left">
        <div class="left__prev">
          <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.51378 7.99966L8.91378 3.59966L7.65689 2.34277L2 7.99966L7.65689 13.6566L8.91378 12.3997L4.51378 7.99966Z"
              fill="#232323" />
          </svg>
          Назад
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.modal
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 100%
  height: 100%
  background: rgba(35, 35, 35, 0.5)
  display: flex
  align-items: center
  justify-content: center
  z-index: 4
  &__content 
    width: 100%
    height: 100%
    background: #F2F4F8
</style>