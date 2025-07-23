<script setup>
import BreadBlock from '~/components/product/BreadBlock.vue';
import ProductSlide from '~/components/product/ProductSlide.vue';
import ProductDesk from '~/components/product/ProductDesk.vue';
import ProductRight from '~/components/product/ProductRight.vue';
import ProductAbout from '~/components/product/ProductAbout.vue';
</script>
<template>
  <div class="product">
    <BreadBlock />
    <div class="product__top">
      <ProductSlide />
      <ProductDesk />
      <ProductRight />
    </div>
    <ProductAbout />
  </div>
</template>
<style lang="sass" scoped>
.product 
  padding: 36px 48px
  &__top 
    display: flex
    gap: 24px
    align-items: flex-start
</style>