<script setup>
import BannerBlock from '~/components/home/BannerBlock.vue';
import LikeBlock from '~/components/home/LikeBlock.vue';
import searchHeader from '~/components/ui/searchHeader.vue';

import { ref, onMounted } from "vue";

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
  <BannerBlock class="mt-54" image="/img/banner.jpg"/>
  <searchHeader v-if="isMobile" />
  <LikeBlock :title="'Может понравиться'" />
  <BannerBlock image="/img/banner.jpg"/>
  <LikeBlock />
</template> 