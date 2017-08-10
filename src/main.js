import Vue from 'vue'
import App from './App'
import router from '@/router'
import '@/assets/css/app'
import utils from '@/lib/utils'

Vue.config.productionTip = false

Vue.use(utils)

new Vue({
  el: '#app',
  router, // router: router的简写，因为key和值是一样的  所以可省略
  template: '<App/>',
  components: {
    App
  }
})
