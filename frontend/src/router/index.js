import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useCookies} from 'vue3-cookies'
const cookies = useCookies()
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter(){
      if(!cookies.get('GrantedAccess')){
        router.push({
          name:'login'
        })
      }
    }
  },
  {
    path:'/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    afterEnter(){
      if(!cookies.delete('GrantUserAccess')){
        router.push({
          name:'home'
        })
      }
      
    }

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path : '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=> import('../views/CartView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: ()=> import('../views/RegisterView.vue')
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
