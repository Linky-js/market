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
</script>

<template>
    <div class="like">
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
  h2 
    margin-bottom: 24px
.products 
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(206px, 1fr))
  gap: 24px 12px
  
@media (max-width: 768px)
  .like 
    padding: 20px 16px 36px
    h2 
      margin-bottom: 16px
  .products 
    grid-template-columns: repeat(2, 1fr)
    gap: 36px 6px
</style>