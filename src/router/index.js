import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import SuccessPage from '../views/SuccessPage.vue'

const routes = [
  {
    path: '/',
    name: "home",
    component: Home
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router