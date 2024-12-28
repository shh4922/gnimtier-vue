<script setup lang="ts">

import LargeRankContainer from '@/components/LargeRankContainer.vue'
</script>

<template>
  <div class="home-container">
    <LargeRankContainer/>
    <LargeRankContainer/>
    <LargeRankContainer/>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  gap: 1rem;
}
</style>
