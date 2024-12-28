import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/components/MainLayout.vue'
import Home from '@/page/Home/Home.vue'
import LoginPage from '@/page/Login/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { path: '', component: Home},
        { path: 'login', component: LoginPage},
      ]
    }
  ],
})

export default router

