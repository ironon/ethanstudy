import StudyVue from '@/components/Study.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/study',
      name: 'study',
      component: StudyVue
    }
  ]
})

export default router
