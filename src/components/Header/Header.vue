<script setup lang="ts">

</script>

<template>
  <header>
    <router-link class="logo" to="/">퓰리처 맵</router-link>

    <nav>
      <router-link to="/loginPage">로그인</router-link>
      <router-link to="/board">게시판이동임ㅋㅋ</router-link>
    </nav>
  </header>
</template>


<style scoped lang="scss">
header {
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  nav {
    display: flex;
    align-items: center;
    display: flex;
    gap: 1rem;
  }
}
</style>
