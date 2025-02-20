<script setup lang="ts">
// const kakaoLoginLink = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=0ca59946bbb41256d04ce14d7f84b150&redirect_uri=https://api.그님티.kr/dev/v1/gnt/auth/oauth/kakao"


function kakaoLogin() {
  window.Kakao.Auth.authorize({
    // redirectUri: "http://localhost:5173/kakaologin",
    redirectUri: "https://dev.xn--2i0bm6giy8a.kr/kakaologin",
  });
}


</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <h3>로그인하기</h3>
        <p>
          저희 그님티는 유저정보를 함부러 유출시키지 않습니다. <br />
          안심하고 로그인하세요(해주세요 제발)
        </p>
      </div>
      <!--      <router-link to="``"><img src="/public/kakao_login.png" alt="kakao-login-image"></router-link>-->
      <button @click="kakaoLogin">
        <img src="/public/kakao_login.png" alt="kakao-login-image" />
      </button>

      <!-- 이메일 로그인 추가 -->
      <!--      <div class="login-form">-->
      <!--        <input type="email" v-data="email" placeholder="이메일 입력"/>-->
      <!--        <input type="password" v-data="password" placeholder="비밀번호 입력"/>-->
      <!--        <button @click="login" v-bind:disabled="isEmpty">응애 로그인할거얌</button>-->
      <!--        <router-link to="/register">아직도 계정이 없어?? 제발 가입해주세요 ㅠㅠ</router-link>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: red;

  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
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
    button {
      background-color: transparent;
      border: none;

      img {
        cursor: pointer;
      }
    }
    /** 이메일 로그인 폼*/
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      input,
      button {
        font-size: 1.2rem;
        border-radius: 0.5rem;
        padding: 1.2rem;
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
