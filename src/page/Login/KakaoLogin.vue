<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { fetchTokenWithKakaoCode } from '@/api/auth.ts'
const route = useRoute()
const router = useRouter()

onMounted(() => {
  getKakaoToken()
})

async function getKakaoToken() {
  const code = route.query.code as string
  console.log("code ", code)
  if(!code) return

  const res = await fetchTokenWithKakaoCode(code)
  console.log(res)
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
