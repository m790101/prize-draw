import { createRouter, createWebHistory } from 'vue-router'
// import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: () => import('../views/Home.vue')
    component: () => import('../views/Restaurant.vue')
  },
  // Example of lazy loading a component
  // {
  //   path: '/restaurant',
  //   name: 'Restaurant',
  //   component: () => import('../views/Restaurant.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router