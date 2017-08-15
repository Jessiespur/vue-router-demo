import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/app'
import utils from '@/lib/utils'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(utils)
Vue.use(VueAxios, Axios)

new Vue({
  el: '#app',
  router, // router: router的简写，因为key和值是一样的  所以可省略
  store,
  template: '<App/>',
  components: {
    App
  }
})
