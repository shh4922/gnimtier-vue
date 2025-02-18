<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchTokenWithKakaoCode } from '@/api/auth.ts'
import { useUserInfoStore } from '@/store/useUserInfoStore.ts'
const route = useRoute()
const router = useRouter()
const userStore = useUserInfoStore()
onMounted(() => {
  getKakaoToken()
})

async function getKakaoToken() {
  const code = route.query.code as string
  console.log("code ", code)
  if(!code) return

  const res = await fetchTokenWithKakaoCode(code)
  localStorage.removeItem("a")
  localStorage.removeItem("r")
  localStorage.setItem('a', res.access_token)
  localStorage.setItem('r', res.refresh_token)

  router.push("/")
}
</script>

<template>
  <h1>카카오 로그인임</h1>
</template>

<style scoped></style>
