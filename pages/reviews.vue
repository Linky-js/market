<script setup>
import ProductReviews from '~/components/product/ProductReviews.vue';
</script>
<template>
  <div class="reviews">
    <div class="link">
      <NuxtLink to="/">
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.51378 7.99966L8.91378 3.59966L7.65689 2.34277L2 7.99966L7.65689 13.6566L8.91378 12.3997L4.51378 7.99966Z"
            fill="#232323" />
        </svg>
        Страница товара
      </NuxtLink>
    </div>
    <ProductReviews class="reviews-page" />
  </div>
</template>
<style lang="sass" scoped>
.link 
  padding-left: 16px
  margin-bottom: 18px
  a 
    display: flex
    align-items: center
    gap: 4px
    font-size: 16px
    letter-spacing: -0.02em
    line-height: 20px
    font-weight: 600
    color: var(--color-black)
    &:hover 
      color: var(--color-blue)
.reviews 
  padding: 36px 48px
@media (max-width: 1440px)
  .reviews 
    padding: 24px
@media (max-width: 768px)
  .reviews 
    padding: 0
  .link 
    margin-top: 16px
    a 
      font-size: 14px
      line-height: 20px
  

</style>