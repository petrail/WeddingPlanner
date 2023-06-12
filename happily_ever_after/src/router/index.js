import { createRouter, createWebHistory } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import App from '../App.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ServiceView from '../views/ServiceView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ShopMainView from '../views/ShopMainView.vue'
import AccountView from '../views/AccountView.vue'
import ShopContactView from '../views/ShopContactView.vue'
import ChatView from '../views/ChatView.vue'
import AdminPageView from '../views/AdminPageView.vue'
import ServicesTableView from '../views/ServicesTableView.vue'
import AddServiceView from '../views/AddServiceView.vue'
import ChangeServiceView from '../views/ChangeServiceView.vue'
import LikedView from '../views/LikedView.vue'
import ReservedView from '../views/ReservedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) router.push('/shopmain')
        else next()
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUsView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) router.push('/shopmain')
        else next()
      }
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) router.push('/shopmain')
        else next()
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) router.push('/shopmain')
        else next()
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) router.push('/shopmain')
        else next()
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) router.push('/shopmain')
        else next()
      }
    },
    {
      path: '/shopmain',
      name: 'shopmain',
      component: ShopMainView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) next()
        else router.push('/')
      }
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) next()
        else router.push('/')
      }
    },
    {
      path: '/liked',
      name: 'liked',
      component: LikedView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) next()
        else router.push('/')
      }
    },
    {
      path: '/reserved',
      name: 'reserved',
      component: ReservedView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) next()
        else router.push('/')
      }
    },
    {
      path: '/shopcontact',
      name: 'shopcontact',
      component: ShopContactView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) next()
        else router.push('/')
      }
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) next()
        else router.push('/')
      }
    },
    {
      path: '/adminPage',
      name: 'adminPage',
      component: AdminPageView,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('isCoord')) router.push('/')
        if (localStorage.getItem('isCoord') === 'false') {
          if (localStorage.getItem('token')) router.push('/shopmain')
          else router.push('/')
        } else next()
      }
    },
    {
      path: '/servicesPage',
      name: 'servicesPage',
      component: ServicesTableView,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('isCoord')) router.push('/')
        if (localStorage.getItem('isCoord') === 'false') {
          if (localStorage.getItem('token')) router.push('/shopmain')
          else router.push('/')
        } else next()
      }
    },
    {
      path: '/addServicePage',
      name: 'addServicePage',
      component: AddServiceView,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('isCoord')) router.push('/')
        if (localStorage.getItem('isCoord') === 'false') {
          if (localStorage.getItem('token')) router.push('/shopmain')
          else router.push('/')
        } else next()
      }
    },
    {
      path: '/changeServicePage/:id',
      name: 'changeServicePage',
      component: ChangeServiceView,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('isCoord')) router.push('/')
        if (localStorage.getItem('isCoord') === 'false') {
          if (localStorage.getItem('token')) router.push('/shopmain')
          else router.push('/')
        } else next()
      }
    }
  ]
})

export default router
