import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import SignIn from '@/components/SignIn.vue'

const router = createRouter({
  history: createWebHistory('/Nike-Clone/'), 
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/signin', name: 'SignIn', component: SignIn }
  ]
})

export default router
