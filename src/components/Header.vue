<script setup lang="ts">

import { computed, onMounted, ref } from 'vue'
import { fetchMyInfo } from '@/api/user.ts'
import { useRouter } from 'vue-router'
import { useUserInfoStore } from '@/store/useUserInfoStore.ts'

const router = useRouter()
const userStore = useUserInfoStore();

const access = ref(localStorage.getItem('a'))
const myInfo = computed(() => userStore.getUserInfo);

onMounted(() => {
  if (access.value) {
    getMyInfo()
  }
})

async function getMyInfo() {
  const res = await fetchMyInfo()
  if(!res) { return }
  userStore.setUserInfo(res)
  console.log("state에 저장된 userInfo",userStore.userInfo)
}

function moveToMyPage() {
  router.push({ name: 'userInfo' })
}

function logout() {
  localStorage.removeItem('a')
  localStorage.removeItem('r')
  userStore.setUserInfo(null)
}
</script>

<template>
  <header>
    <router-link to="/">그래서 님 티어가?</router-link>

    <nav>
      <div v-if="myInfo" class="user-status">
        <img @click="moveToMyPage"  :src="myInfo.profileImageUrl" alt="프로필 이미지" class="profileImage">
        <button class="btn-login" @click="logout">로그아웃</button>
      </div>
      <router-link v-if="!myInfo" to="/login" class="btn-login">로그인</router-link>
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
}

.user-status {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  .profileImage {
    width: 50px;
    height: 50px;

    border-radius: 50%;
    object-fit: cover;
  }
}

</style>
