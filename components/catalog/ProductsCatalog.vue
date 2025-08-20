<script setup>
import ProductBlock from '../common/ProductBlock.vue';
import { defineProps, watch, ref, onMounted, nextTick, defineEmits } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const emit = defineEmits(['updatePage']);
const props = defineProps({
  products: {
    type: Array,
    required: false,
    default: () => []
  }
});

const products = ref([]);
const loadMoreTrigger = ref(null);

watch(
  () => props.products,
  (newValue) => {
    if (newValue) {
      products.value = newValue;
    }
  },
  { immediate: true }
);

onMounted(() => {
  nextTick(() => {
    if (loadMoreTrigger.value) {
      useIntersectionObserver(
        loadMoreTrigger,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            emit('updatePage');
          }
        },
        { threshold: 0.5 }
      );
    }
  });
});

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
  <div class="like">
    <div class="filter" v-if="isMobile">
      <div class="filter__sort">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3.75H15" stroke="#232323" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3 9H12" stroke="#232323" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M3 14.25H9" stroke="#232323" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p>По популярности</p>
      </div>
      <div class="filter__filter">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0002 5.25H8.25024M10.5002 12.75H3.75024" stroke="#232323" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M12.7502 15C13.9929 15 15.0002 13.9926 15.0002 12.75C15.0002 11.5074 13.9929 10.5 12.7502 10.5C11.5076 10.5 10.5002 11.5074 10.5002 12.75C10.5002 13.9926 11.5076 15 12.7502 15Z"
            stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M5.24976 7.5C6.4924 7.5 7.49976 6.49264 7.49976 5.25C7.49976 4.00736 6.4924 3 5.24976 3C4.00712 3 2.99976 4.00736 2.99976 5.25C2.99976 6.49264 4.00712 7.5 5.24976 7.5Z"
            stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="products">
      <ProductBlock v-for="product in props.products" :key="product.title" :product="product" />
      <div ref="loadMoreTrigger" class="load-more-trigger"></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.load-more-trigger 
  height: 1px
.like 
  background: #fff
  width: 100%
  border-radius: 12px
  padding: 28px 24px
.products 
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(206px, 1fr))
  gap: 24px 12px
.filter 
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 16px
  &__sort 
    display: flex
    align-items: center
    gap: 6px
    p
      font-size: 14px
      line-height: 18px
      font-weight: 600
@media (max-width: 768px)
  .like 
    padding: 16px 16px 36px
  .products 
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr))
    gap: 36px 6px
</style>