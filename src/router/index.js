import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
// import Layout from '@/views/Layout'
import Login from '@/components/Login'
import Calculator from '@/views/functions/Calculator'
import Data from '@/views/backends/Data'
// import Document from '@/views/backends/Document'
// import Work from '@/views/backends/Work'
// import Project from '@/views/backends/Project'
let Work = (resolve) => {
  return import('@/views/backends/Work')
}// import没法让两个组件加载到同个js文件里

let Layout = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/Layout'))
  })
}

let Document = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/backends/Document'))
  }, 'aa')
}

// let Work = (resolve) => {
//   return require.ensure([], () => {
//     resolve(require('@/views/backends/Work'))
//   }, 'aa')
// }
let Project = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/views/backends/Project'))
  })
}

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/project',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Management',
          meta: {
            login: true
          },
          component: Project
        },
        {
          path: '/work',
          component: Work,
          meta: {
            login: true
          }
        },
        {
          path: '/document',
          component: Document
        },
        {
          path: '/calculator',
          component: Calculator
        },
        {
          path: '/data',
          component: Data
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((item) => item.meta.login)) {
    let loginInfo = router.app.$local.fetch('$userName')
    if (loginInfo.login) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.path.slice(1)}
      })
    }
  } else {
    next()
  }
})
export default router
