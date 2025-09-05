<script setup>
import ProductBlock from '../common/ProductBlock.vue';
import MobFilterSort from './MobFilterSort.vue';
import MobFilterFilter from './MobFilterFilter.vue';
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
      <MobFilterSort />
      <MobFilterFilter />
    </div>
    <div class="products">
      <ProductBlock v-for="product in props.products" :key="product.title" :product="product.product" />
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
    
@media (max-width: 768px)
  .like 
    padding: 16px 16px 36px
  .products 
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr))
    gap: 36px 6px
</style>