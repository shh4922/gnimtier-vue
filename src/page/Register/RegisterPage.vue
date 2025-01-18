<script setup lang="ts">
import { computed, ref } from 'vue'
import axios from 'axios'
import duplicateNickname from '@/api/auth.ts'

const email = ref("")
const password = ref("")
const password2 = ref("")
const nickname = ref("")
const isEnabledNickname = ref(false)

const isEmpty = computed(() => email.value === "" || password.value === "" || password2.value === "" || nickname.value === "")

function register() {
  console.log(email.value)
  console.log(password.value)
}

async function checkNickname() {
  const res = duplicateNickname()
  if(res) {
    isEnabledNickname.value = true
  }
}

</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <h3>회원가입</h3>
        <p>가입하러 와 주셨군요..ㅠ <br> 갑사합니다..ㅠㅠ</p>
      </div>


      <div class="login-form">
        <input class="email-input" type="email" v-model="email" placeholder="이메일 입력"/>

        <input type="text" v-model="nickname" placeholder="사용하실 닉네임을 입력해주세요."/>
        <button>닉네임 중복체크</button>

        <input type="password" v-model="password" placeholder="비밀번호 입력"/>
        <input type="password" v-model="password2" placeholder="비밀번호 확인"/>
        <button @click="register" v-bind:disabled="isEmpty">가입 드가자잉</button>

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

    .login-header {
      margin-bottom: 5rem;
      text-align: center;
      h3 {
        font-size: 2.5rem;
        color: #ffffff;
        margin-bottom: 1rem;
        font-weight: bold;
      }
      p {
        font-size: 1.4rem;
        font-weight: normal;
        color: lightgray;
      }

    }

    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;


      input,button {
        font-size: 1.2rem;
        border-radius: 0.5rem;
        padding: 1.2rem;
        background-color: #141414;
        color: #fff;
        font-weight: lighter;
        border: 1px solid #ffffff;
        width: 100%;
      }
      .email-input {
        margin-bottom: 1.5rem;
      }

      button {
        margin-top: 10rem;
        font-weight: normal;
        width: 50%;
        background-color: dodgerblue;
      }
      button:disabled {
        background-color: #cccccc;
      }

      a {
        font-size: 1.2rem;
        color: lightgray;
      }
    }
  }
}


</style>
