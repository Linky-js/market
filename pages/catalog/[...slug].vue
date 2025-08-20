<script setup>
import HeadCatalog from '~/components/catalog/HeadCatalog.vue';
import Filter from '~/components/catalog/Filter.vue';
import ProductsCatalog from '~/components/catalog/ProductsCatalog.vue';
import searchHeader from '~/components/ui/searchHeader.vue';
import { ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const page = ref(Number(route.query.page) || 1);

const { data: response, refresh } = await useAsyncData(
  `products-${route.params.slug[0]}-page-${page.value}`, // ключ как строка
  () =>
    $fetch(
      `https://api.skynet-cloud.ru/api/catalog/products/by-category/slug/${route.params.slug[0]}?page=${page.value}&page_size=60`
    )
);

const products = ref(response.value?.items || []);

const updatePage = async (newPage) => {
  page.value++;

  // router.replace({
  //   query: { ...route.query, page: page.value }
  // });

  const res = await $fetch(
    `https://api.skynet-cloud.ru/api/catalog/products/by-category/slug/${route.params.slug[0]}?page=${page.value}&page_size=60`
  );

  products.value = [...products.value, ...res.items];
};

watch(
  () => route.query.page,
  (newPage) => {
    if (newPage && Number(newPage) !== page.value) {
      updatePage(Number(newPage));
    }
  }
);
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
    <searchHeader v-if="isMobile" :class="{ 'box-mb-20': isMobile }" />
    <HeadCatalog />
    <div class="catalog__content">
      <Filter v-if="!isMobile"/>
      <ProductsCatalog @updatePage="updatePage" :products="products" />
    </div>
  </div>
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