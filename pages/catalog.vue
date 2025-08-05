<script setup>
import HeadCatalog from '~/components/catalog/HeadCatalog.vue';
import Filter from '~/components/catalog/Filter.vue';
import ProductsCatalog from '~/components/catalog/ProductsCatalog.vue';
</script>
<template>
  <div class="catalog">
    <HeadCatalog />
    <div class="catalog__content">
      <Filter />
      <ProductsCatalog />
    </div>
  </div>
</template>
<style lang="sass" scoped>
.catalog 
  padding: 32px 48px
  &__content 
    display: flex
    gap: 24px
</style>