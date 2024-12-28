<script setup lang="ts">

import IndexRankCell from '@/components/IndexRankCell.vue'
</script>

<template>
  <div class="rank-container">
    <h2>을지부대 랭킹</h2>
    <IndexRankCell/>
    <IndexRankCell/>
    <IndexRankCell/>
    <IndexRankCell/>
  </div>
</template>

<style scoped>
.rank-container {
  display: flex;
  flex-direction: column;
  border: 1px solid #02FFFF;
  width: 40%;
  border-radius: 1rem;
  padding: 2rem 1rem;
}

h2 {
  font-size: 1.5rem;
  color: #ffffff;
}

</style>
