<script setup>

</script>

<template>
  <div class="box">
    <input type="text" placeholder="Искать на Флипе" class="flex-1 outline-none text-sm text-gray-700 searchInput" />
    <button>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 17L21 21M3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11Z"
          stroke="#999999" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</template>
<style scoped lang="sass">
.box 
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  padding: 12px 16px
  border-radius: 6px
.searchInput 
  overflow: hidden
  color: #232323
  text-overflow: ellipsis
  font-size: 16px
  font-weight: 500
  line-height: 24px
  letter-spacing: -0.32px
.searchInput::placeholder 
  color: #939393
</style>