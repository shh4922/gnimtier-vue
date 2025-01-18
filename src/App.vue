<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MainLayout from '@/components/MainLayout.vue'

</script>

<template>
  <div id="app">
    <Header/>
    <div class="main-container">
<!--      <div class="ads">-->
<!--        광고임-->
<!--      </div>-->
      <main class="content">
        <MainLayout/>
      </main>
<!--      <div class="ads">-->
<!--        광고임-->
<!--      </div>-->
    </div>
    <Footer/>
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  font-size: 10px;
  background-color: #1B1B1B;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1B1B1B;
  margin: 0 auto;
  width: 769px;
}

/* 공통 링크 스타일 */
a {
  text-decoration: none;
}

.main-container {
  flex: 1;
  padding: 2rem;
  width: 100%;
  gap: 1rem; /* 간격 조정 (선택 사항) */
  background-color: #1B1B1B;
  display: flex;
}

.ads {
  width: 200px;
  background-color: #ffffff;
  visibility: hidden;
}

.content {
  flex: 1; /* 남은 공간을 차지하도록 설정 */
  background-color: #2c2c2c; /* Main 영역의 배경색 */
  background-color: #1B1B1B;
}


</style>
