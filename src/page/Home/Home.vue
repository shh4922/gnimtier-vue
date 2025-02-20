<script setup lang="ts">
import LargeRankContainer from '@/components/LargeRankContainer.vue'
import { onMounted, ref, type Ref } from 'vue'
import { fetchMyInfo } from '@/api/user.ts'
import type { User } from '@/api/tft/model.tft.ts'
import type { tftUserInfo } from '@/api/tft/tft.ts'
import { getWithToken } from '@/api/http.ts'

// const myInfo: Ref<User|null> = ref(null); // Ref 타입 명시

async function getUserInfo() {
  const res = await getWithToken('users/me')
  return res
}

onMounted(() => {
  getUserInfo()
})

</script>

<template>
  <div class="home-container">
    <LargeRankContainer/>
<!--    <LargeRankContainer/>-->
<!--    <LargeRankContainer/>-->
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 1rem 2rem;
  background-color: #1B1B1B;
}


</style>
