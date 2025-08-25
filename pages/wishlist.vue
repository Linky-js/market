<script setup>
import Filter from '~/components/catalog/Filter.vue';
import ProductsCatalog from '~/components/catalog/ProductsCatalog.vue';
import HeadWishlist from '~/components/wishlist/HeadWishlist.vue';
import ClearWishlist from '~/components/wishlist/ClearWishlist.vue';
import LikeBlock from '~/components/home/LikeBlock.vue';
import { ref, onMounted, onUnmounted } from 'vue';

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
  <div class="catalog">

    <HeadWishlist />
    <div class="catalog__content">
      <Filter v-if="!isMobile" />
      <ProductsCatalog @updatePage="updatePage" :products="products" />
    </div>

    <!-- Пусто -->
    <!-- <HeadWishlist />
    <ClearWishlist /> -->
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