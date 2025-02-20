import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/components/MainLayout.vue'
import Home from '@/page/Home/Home.vue'
import LoginPage from '@/page/Login/LoginPage.vue'
import KakaoLogin from '@/page/Login/KakaoLogin.vue'
import UserInfo from '@/page/UserInfo.vue'
import GroupList from '@/page/GroupList.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', component: Home},
        { path: 'login', component: LoginPage},
        { path: 'kakaologin', component: KakaoLogin},
        {
          path: 'userInfo',
          name: 'userInfo',
          component: UserInfo
        },
        {
          path: 'groupList',
          name: 'groupList',
          component: GroupList
        }
      ]
    }
  ],
})

export default router

