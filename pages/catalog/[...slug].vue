<script setup>
import HeadCatalog from '~/components/catalog/HeadCatalog.vue';
import Filter from '~/components/catalog/Filter.vue';
import ProductsCatalog from '~/components/catalog/ProductsCatalog.vue';
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
</script>

<template>
  <div class="catalog">
    <HeadCatalog />
    <div class="catalog__content">
      <Filter />
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
</style>