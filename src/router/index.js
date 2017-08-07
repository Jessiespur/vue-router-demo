import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/components/Home'
import About from '@/components/About'
import Document from '@/components/Document'
// import NoFound from '@/components/404'
import User from '@/components/User'
import Study from '@/views/Study'
import Work from '@/views/Work'
import Hobby from '@/views/Hobby'
import Slider from '@/views/Slider'

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savePosition) { // 点击浏览器的前进后退时触发
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      alias: '/index',
      component: Home
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '',
          name: 'About',
          component: Study
        },
        {
          path: '/work',
          name: 'Work',
          component: Work
        },
        {
          path: '/hobby',
          name: 'Hobby',
          component: Hobby
        }
      ]
    },
    {
      path: '/document',
      name: 'Document',
      components: {
        default: Document,
        slider: Slider
      }
    },
    {
      path: '/user/:userTip?/:userId?',
      name: 'User',
      component: User
    },
    {
      path: '*',
      // component: NoFound
      // 重定向
      // redirect: {path: '/home'}
      // redirect: {name: 'About'}
      redirect: (to) => {
        // 目标路由对象，就是访问的路径的路由信息
        if (to.path === '/123') {
          return '/home'
        } else if (to.path === '/456') {
          return {name: 'About'}
        }
      }
    }
  ]
})

export default router
