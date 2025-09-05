<script setup>
import Filter from '~/components/catalog/Filter.vue';
import ProductsCatalog from '~/components/catalog/ProductsCatalog.vue';
import HeadWishlist from '~/components/wishlist/HeadWishlist.vue';
import ClearWishlist from '~/components/wishlist/ClearWishlist.vue';
import LikeBlock from '~/components/home/LikeBlock.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { useFavoritesStore } from '@/stores/favorites'

const store = useFavoritesStore()
const products = computed(() => {
  return store.favoritesArray
})

const isMobile = ref(false)
const checkWidth = () => {
  isMobile.value = window.innerWidth <= 768
}
onMounted(() => {
  checkWidth()
  window.addEventListener('resize', checkWidth)
  console.log('products', products.value);
  
})
onUnmounted(() => {
  window.removeEventListener('resize', checkWidth)
})
</script>
<template>
  <div class="catalog">

    <HeadWishlist v-if="products.length > 0" />
    <div v-if="products.length > 0" class="catalog__content">
      <Filter v-if="!isMobile" />
      <ProductsCatalog @updatePage="updatePage" :products="products" />
    </div>
    <!-- Пусто -->
    <HeadWishlist v-if="products.length === 0" />
    <ClearWishlist v-if="products.length === 0" />
  </div>

  <!-- Когда пусто -->
  <!-- <LikeBlock :title="'Может понравиться'" /> -->
</template>
<style lang="sass" scoped>
.catalog 
  padding: 32px 48px
  &__content 
    display: flex
    gap: 24px
@media (max-width: 1440px)
  .catalog 
    padding: 24px
@media (max-width: 768px)
  .catalog 
    padding: 0
    padding-top: 16px
</style>