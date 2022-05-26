import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/accounts/Login.vue'
import Signup from '../views/accounts/Signup.vue'
import HomeView from '../views/HomeView'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
   
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
