<script setup>
import BannerBlock from '~/components/home/BannerBlock.vue';
import LikeBlock from '~/components/home/LikeBlock.vue';
</script>
<template>
  <BannerBlock image="/img/banner.jpg"/>
  <LikeBlock :title="'Может понравиться'" />
  <BannerBlock image="/img/banner.jpg"/>
  <LikeBlock />
</template> 