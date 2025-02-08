import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
// app.use(createPinia())
app.use(router)
app.use(pinia)
app.mount('#app')
// js 키
window.Kakao.init(import.meta.env.VITE_KAKAO_JS)
