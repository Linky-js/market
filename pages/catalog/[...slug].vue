<script setup>
import HeadCatalog from '~/components/catalog/HeadCatalog.vue';
import Filter from '~/components/catalog/Filter.vue';
import ProductsCatalog from '~/components/catalog/ProductsCatalog.vue';
import { ref, onMounted, watchEffect  } from 'vue';


const { data: response, error } = await useAsyncData('products', () =>
  $fetch('https://api.skynet-cloud.ru/api/catalog/products_with_images/1')
)

const products = ref([])


watchEffect(() => {
  if (response.value?.items) {
    products.value = response.value.items
    console.log('Загруженные продукты:', products.value)
  }

  if (error.value) {
    console.error('Ошибка при загрузке продуктов:', error.value)
  }
})
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