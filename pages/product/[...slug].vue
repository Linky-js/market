<script setup>
import BreadBlock from '~/components/product/BreadBlock.vue';
import ProductSlide from '~/components/product/ProductSlide.vue';
import ProductDesk from '~/components/product/ProductDesk.vue';
import ProductRight from '~/components/product/ProductRight.vue';
import ProductAbout from '~/components/product/ProductAbout.vue';
import SliderProducts from '~/components/product/SliderProducts.vue';
import ProductReviews from '~/components/product/ProductReviews.vue';
import LikeBlock from '~/components/home/LikeBlock.vue';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const charakteristick = ref(false)
const goCharakteristick = (event) => {
  charakteristick.value = event
}

const { data: productResponse } = await useAsyncData(
  `product-${route.params.slug[0]}`,
  () =>
    $fetch(
      `https://api.skynet-cloud.ru/api/catalog/cards/by-slug/${route.params.slug[0]}`
    )
);
onMounted(() => {
  console.log('Товар:', productResponse.value);
})


</script>
<template>
  <div class="product">
    <BreadBlock />
    <div class="product__top">
      <div class="product__top-left">
        <ProductSlide :images="productResponse?.images" />
        <ProductDesk @toggleHarActive="goCharakteristick($event)" :product="productResponse" />
      </div>
      <ProductRight :product="productResponse" />
    </div>
    <ProductAbout @toggleHarActive="goCharakteristick($event)" :product="productResponse"
      :charakteristick="charakteristick" />
    <SliderProducts :title="'Похожие товары'" />
    <ProductReviews />
  </div>

  <LikeBlock :title="'Может понравиться'" />
</template>
<style lang="sass" scoped>
.product 
  padding: 36px 48px
  &__top 
    display: flex
    gap: 24px
    &-left 
      display: flex
      gap: 24px
      width: 100%
      max-width: calc(100% - 344px)
@media (max-width: 1440px)
  .product 
    padding: 36px 24px
@media (max-width: 1200px)
  .product__top 
    flex-wrap: wrap
    &-left 
      max-width: 100%
@media (max-width: 768px)
  .product 
    padding: 0 0 8px
    &__top 
      gap: 0
      &-left 
        display: contents
</style>