import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'


const guard = function (to, from, next) {
  if(localStorage.getItem('token')){
    next()
  }else{
    next({path:'/login'})
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter:(to, from, next) => {
      guard(to, from, next)
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
