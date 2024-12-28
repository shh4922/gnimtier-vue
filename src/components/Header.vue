<script setup lang="ts">

</script>

<template>
  <header>
    <router-link to="/">그래서 님 티어가?</router-link>

    <nav>
      <router-link to="/login" class="btn-login">로그인</router-link>
    </nav>
  </header>
</template>



<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1B1B1B;
  padding: 24px 160px;
  border-bottom: 1px solid #ffffff;
  height: 8%;
}

a {
  font-size: 1.6rem;
  color: #FFFFFF;
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
