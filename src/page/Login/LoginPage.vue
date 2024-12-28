<script setup lang="ts">
import { ref } from 'vue'

const email = ref("")
const password = ref("")

function login() {
  console.log(email.value)
  console.log(password.value)
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h3>로그인하기</h3>
      <div class="login-form">
        <input type="email" v-model="email" placeholder="이메일 입력"/>
        <input type="password" v-model="password" placeholder="비밀번호 입력"/>
        <button @click="login">응애 로그인할거얌</button>
        <p>가입하러가기</p>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
.login-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  .login-box {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
    border: 1px solid #ffffff;
    border-radius: 1rem;
    gap: 1rem;
    margin: 0 auto;
    padding: 1rem;

    h3 {
      font-size: 2rem;
      margin-bottom: 10rem;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      input,button {
        font-size: 1.4rem;
        border-radius: 0.5rem;
        padding: 1rem;
        background-color: #141414;
        color: #fff;
        font-weight: lighter;
        border: 1px solid #ffffff;
        width: 100%;
      }

      button {
        margin-top: 10rem;
        font-weight: normal;
        width: 50%;

      }
    }
  }
}


</style>
