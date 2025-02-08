<script setup lang="ts">
import { Tier } from '../data/Tier.ts'

const props = defineProps(['rank', 'summonerIcon', 'gameName', 'tagLine', 'summnerLevel', 'tier']) // 부모Component에서 받은값
</script>

<template>
  <div class="rank-cell-container">
    <p class="rank p-bold">{{ props.rank }}</p>
    <img
      :src="`https://ddragon.leagueoflegends.com/cdn/15.1.1/img/profileicon/${props.summonerIcon}.png`"
      alt=""
    />

    <div class="riot-info">
      <p class="p-bold">{{ props.gameName }}</p>
      <p>#{{ props.tagLine }}</p>
    </div>
    <div class="user-info">
      <!--      <p class="p-bold">개쩌는 그님티 닉네임임</p>-->
      <p class="p-bold">{{Tier[props.tier]}}</p>
      <p>백골부대</p>
    </div>
    <p class="level">Lv. {{ props.summnerLevel }}</p>
  </div>
</template>

<style scoped>
.rank-cell-container:hover {
  background-color: #1e4747;
  border: 1px solid #02ffff;
}

.rank-cell-container {
  display: flex;
  align-items: center;
  height: 5rem;
  border: 1px solid transparent;
  border-radius: 1rem;
  gap: 1rem;
  padding: 0.5rem;

  p {
    font-weight: lighter;
  }
  .p-bold {
    font-weight: bold;
  }

  .rank {
    width: 7%;
    text-align: center;
    color: #ffffff;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: contain;
  }

  .riot-info {
    width: 30%;
    color: #ffffff;
  }

  .user-info {
    width: 40%;
    color: #ffffff;
  }

  .level {
    width: 20%;
    color: #ffffff;
  }
}
</style>
