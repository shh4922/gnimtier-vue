<script setup lang="ts">
import { computed, ref} from 'vue'
import {debounce} from 'lodash'

const email = ref("")
const password = ref("")
const password2 = ref("")
const nickname = ref("")

const isEmpty = computed(() => email.value === "" || password.value === "" || password2.value === "" || nickname.value === "")
const isSamePassword = computed(() => password.value === password2.value)

const isUsedEmail = ref<boolean|null>(null)
const isUsedNicname = ref<boolean|null>(null)


function register() {
}

// 이메일 중복 체크 (debounce 적용)
const checkEmail = debounce(async (emailToCheck: string) => {
  console.log(`Checking email: ${emailToCheck}`)
  isUsedEmail.value = false
}, 1500)

const checkNickName = debounce(async (emailToCheck: string) => {
  console.log(`Checking email: ${emailToCheck}`)
  isUsedNicname.value = false
}, 1500)



</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <h3>회원가입</h3>
        <p>가입하러 와 주셨군요..ㅠ <br> 갑사합니다..ㅠㅠ</p>
      </div>


      <div class="login-form">
        <input class="email-input" type="email" v-model="email" placeholder="이메일 입력" @input="checkEmail"/>
        <p v-if="isUsedEmail !== null && !isUsedEmail">사용가능한 이메일입니다!</p>
        <p v-if="isUsedEmail">사용중인 이메일입니다!</p>
        <input type="text" v-model="nickname" placeholder="사용하실 닉네임을 입력해주세요." @input="checkNickName"/>
        <p v-if="isUsedNicname!==null && !isUsedNicname">사용가능한 닉네임 입니다!</p>
        <p v-if="isUsedNicname">이미 사용중인 닉네임 입니다.</p>
        <input type="password" v-model="password" placeholder="비밀번호 입력"/>
        <input type="password" v-model="password2" placeholder="비밀번호 확인"/>
        <p v-if="isSamePassword !== null && isSamePassword">비밀번호 확인이 완료되었습니다.</p>
      </div>
      <button @click="register" v-bind:disabled="isEmpty">가입</button>
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
    align-items: center;
    width: 90%;
    border: 1px solid #ffffff;
    border-radius: 1rem;
    gap: 1rem;
    margin: 0 auto;
    padding: 1rem 2rem  ;

    .login-header {
      margin-bottom: 5rem;
      text-align: center;
      width: 100%;
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
      align-items: start;
      gap: 1.5rem;
      width: 100%;

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





      a {
        font-size: 1.2rem;
        color: lightgray;
      }
    }

    button {
      font-weight: normal;
      width: 50%;
      background-color: dodgerblue;
      height: 40px;
      border-radius: 1rem;
      border: none;
    }
    button:disabled {
      background-color: #cccccc;
    }
  }
}


</style>
