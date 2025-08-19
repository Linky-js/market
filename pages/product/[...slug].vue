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
      `https://api.skynet-cloud.ru/api/catalog/products/full-details/slug/${route.params.slug[0]}`
    )
);

const groupProducts = ref([]);
if (productResponse.value?.is_group) {
  const { data: groupResponse } = await useAsyncData(
    `group-${productResponse.value.id}`, 
    () =>
      $fetch(
        `https://api.skynet-cloud.ru/api/catalog/groups/${productResponse.value.id}`
      )
  );
  groupProducts.value = groupResponse.value || [];
}
onMounted(() => {
  console.log('Товар:', productResponse.value);
  if (groupProducts.value.length) {
    console.log('Групповой товар:', groupProducts.value);
  }
})

</script>
<template>
  <div class="product">
    <BreadBlock />
    <div class="product__top">
      <ProductSlide />
      <ProductDesk @toggleHarActive="goCharakteristick($event)" />
      <ProductRight />
    </div>
    <ProductAbout @toggleHarActive="goCharakteristick($event)" :charakteristick="charakteristick" />
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
    align-items: flex-start
@media (max-width: 1440px)
  .product 
    padding: 36px 24px
@media (max-width: 1200px)
  .product__top 
    flex-wrap: wrap
@media (max-width: 768px)
  .product 
    padding: 0 0 8px
    &__top 
      gap: 0
</style>