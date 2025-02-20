<script setup lang="ts">

import IndexRankCell from '@/components/IndexRankCell.vue'
import { fetchGngGroup, fetchTftUserByGroup, type tftUserInfo } from '@/api/tft/tft.ts'
import { onMounted, type Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

const userList: Ref<Array<tftUserInfo>|null> = ref(null); // Ref 타입 명시
const group: Ref<string> = ref("string"); // Ref 타입 명시


onMounted(()=> {
  initGngGroup()
})

async function initGngGroup() {
  const res = await fetchGngGroup();

  if(res.length !== 0){ // 내가속한 그룹이 있다면 본인 그룹을 가져옴
    group.value = res[0].name
  }
  const resultData = await fetchTftUserByGroup(group.value);
  userList.value = resultData.data
}
</script>

<template>
  <div class="rank-container">
    <h2>{{group}}</h2>
    <P v-if="userList===null">로그인후 확인하셈</P>
    <IndexRankCell
      v-else-if="userList !== null"
      v-for="(user,index) in userList"
      :key="index"
      :rank="index"
      :summoner-icon="user.summoner.profileIconId"
      :game-name="user.summoner.gameName"
      :tag-line="user.summoner.tagLine"
      :summner-level="user.summoner.summonerLevel"
      :tier="user.summoner.entry.RANKED_TFT.tier"/>
    <router-link class="more-button" :to="{name: 'groupList', query:{ page:1, groupName:group} }">더보기</router-link>
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

.more-button {
  margin-top: 1rem;
  background-color: transparent;
  font-size: 1.5rem;
  color: #02FFFF;
  border: none;
  text-align: center;
}
</style>
