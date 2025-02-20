<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchTokenWithKakaoCode } from '@/api/auth.ts'
import { useUserInfoStore } from '@/store/useUserInfoStore.ts'
import { fetchMyInfo } from '@/api/user.ts'
const route = useRoute()
const router = useRouter()
const userStore = useUserInfoStore()

onMounted(() => {
  kakaoLoginWithCode()
})

/**
 * 카카오로그인 하면 리디렉션url 로 code를 줌.
 * 해당 코드를 서버에 주면 프론트한테 토큰줌.
 */
async function kakaoLoginWithCode() {
  const code = route.query.code as string
  if(!code) return

  const res = await fetchTokenWithKakaoCode(code)
  localStorage.removeItem("a")
  localStorage.removeItem("r")
  localStorage.setItem('a', res.access_token)
  localStorage.setItem('r', res.refresh_token)

  const myInfo = await fetchMyInfo()
  if(!res) { return }
  userStore.setUserInfo(myInfo)
  router.push("/")
}


</script>

<template>
  <h1>카카오 로그인임</h1>
</template>

<style scoped></style>
