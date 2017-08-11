import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 定义一个容器
let store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    addIncrement (state, n) { // addIncrement自定义的事件，组件里如果要用到这个，刚this.$store.commit('addIncrement')
      state.count += n
    },
    subtraction (state, payload) {
      state.count -= payload.n
    }
  },
  actions: {
    addAction (context) { // 包含实例的这个方法
      setTimeout(() => {
        // 改变状态，必须要提交一个mutation
        context.commit('addIncrement', 5)
      }, 1000)
    }
  }
})

export default store
