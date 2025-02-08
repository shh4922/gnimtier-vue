<script setup lang="ts">

import IndexRankCell from '@/components/IndexRankCell.vue'
import { fetchGngGroup, fetchTftUserByGroup, type tftUsersResponse } from '@/api/tft/tft.ts'
import { onMounted, type Ref, ref } from 'vue'

const userList: Ref<Array<tftUsersResponse>> = ref([]); // Ref 타입 명시

async function getTftUserByGroup() {
  userList.value = await fetchTftUserByGroup(); // fetchTftUserByGroup()은 API 호출 함수라고 가정
  console.log(userList.value);
}

async function getGroup() {
  const res = await fetchGngGroup(); // fetchTftUserByGroup()은 API 호출 함수라고 가정
  console.log(res);
}

onMounted(()=> {
  getTftUserByGroup()
  getGroup()
})

</script>

<template>
  <div class="rank-container">
    <h2>을지부대 랭킹</h2>
    <IndexRankCell v-for="(user,index) in userList" :key="index" :rank="index" :summoner-icon="user.summoner.profileIconId" :game-name="user.summoner.gameName" :tag-line="user.summoner.tagLine" :summner-level="user.summoner.summonerLevel" :tier="user.summoner.entry.RANKED_TFT.tier"/>
  </div>
</template>

<style scoped>
.rank-container {
  display: flex;
  flex-direction: column;
  border: 1px solid #02FFFF;
  width: 100%;
  border-radius: 1rem;
  padding: 2rem 1rem;
}

h2 {
  font-size: 1.5rem;
  color: #ffffff;
}

</style>
