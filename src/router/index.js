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
import Login from '@/views/Login'

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
      component: Home,
      meta: {
        index: 0,
        login: true,
        title: 'home'
      }
    },
    {
      path: '/home',
      component: Home,
      alias: '/index'
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        index: 1,
        title: 'login'
      },
      component: Login
    },
    {
      path: '/about',
      component: About,
      // beforeEnter (to, from, next) {
      //   if (to.meta.login) {
      //     next('/login')
      //   } else {
      //     next()
      //   }
      // },
      children: [
        {
          path: '',
          name: 'About',
          meta: {
            index: 2,
            title: 'about',
            login: true
          },
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
      meta: {
        index: 3,
        title: 'document'
      },
      components: {
        default: Document,
        slider: Slider
      }
    },
    {
      path: '/user/:userTip?/:userId?',
      name: 'User',
      meta: {
        index: 4,
        title: 'user'
      },
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
          return '/'
        } else if (to.path === '/456') {
          return {name: 'About'}
        }
      }
    }
  ]
})
/* 全局钩子函数
router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    // next('/login')
    next()
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    window.document.title = 'vue-demo-' + to.meta.title
  } else {
    window.document.title = 'vue-demo'
  }
})
*/
export default router
