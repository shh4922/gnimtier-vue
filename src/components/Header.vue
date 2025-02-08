<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue'
import { fetchMyInfo } from '@/api/user.ts'
import type { User } from '@/api/tft/model.tft.ts'

// const access = ref(localStorage.getItem('a'))
// const myInfo: Ref<User> = ref(null)
// onMounted(() => {
//   if (access.value) {
//     console.log(access.value)
//     getMyInfo()
//   }
// })

// async function getMyInfo() {
//   myInfo.value = await fetchMyInfo()
// }
</script>

<template>
  <header>
    <router-link to="/">그래서 님 티어가?</router-link>

    <nav>
<!--      <div v-if="access">-->
<!--&lt;!&ndash;        <router-link to="/userInfo" class="btn-login">{{myInfo.nickname}}</router-link>&ndash;&gt;-->
<!--        <router-link to="/login" class="btn-login">로그아웃</router-link>-->
<!--      </div>-->
<!--      v-if="!access"-->
      <router-link to="/login" class="btn-login">로그인</router-link>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1b1b;
  padding: 2rem 5rem;
  border-bottom: 1px solid #ffffff;
  height: 8%;
}

a {
  font-size: 1.6rem;
  color: #ffffff;
}

.btn-login {
  text-align: center;
  padding: 0.5rem 2rem;
  border-radius: 0.7rem;
  font-size: 1rem;
  border: 1px solid #ffffff;
  background: rgba(255, 255, 255, 0.16);
  //margin-right: 100px;
}
/* Frame 661 */
</style>
