import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ServiceView from '../views/ServiceView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ShopMainView from '../views/ShopMainView.vue'
import AccountView from '../views/AccountView.vue'
import CartView from '../views/CartView.vue'
import ShopContactView from '../views/ShopContactView.vue'
import ChatView from '../views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUsView
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/shopmain',
      name: 'shopmain',
      component: ShopMainView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/shopcontact',
      name: 'shopcontact',
      component: ShopContactView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView
    },
  ]
})

export default router
