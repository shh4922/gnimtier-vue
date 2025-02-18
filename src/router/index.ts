import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/components/MainLayout.vue'
import Home from '@/page/Home/Home.vue'
import LoginPage from '@/page/Login/LoginPage.vue'
import KakaoLogin from '@/page/Login/KakaoLogin.vue'
import UserInfo from '@/page/UserInfo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', component: Home},
        { path: 'login', component: LoginPage},
        // { path: 'register', component: RegisterPage},
        { path: 'kakaologin', component: KakaoLogin},
        {
          path: 'userInfo',
          name: 'userInfo',
          component: UserInfo
        },
      ]
    }
  ],
})

export default router

