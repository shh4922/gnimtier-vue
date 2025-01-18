<script setup lang="ts">

import LargeRankContainer from '@/components/LargeRankContainer.vue'
import { onMounted, ref } from 'vue'
import { fetchUserList, type User } from '@/api/user.ts'

const userList = ref<User[]>([])

async function getUserList() {
  const res = await fetchUserList()
  userList.value = res
}

onMounted(()=> {
  getUserList()
})

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
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 1rem 2rem;
  background-color: #1B1B1B;
}


</style>
