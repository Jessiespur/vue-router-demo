import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let selectModule = {
  state: {
    inpTitle: '',
    list: []
  },
  mutations: {
    changeTit (state, value) {
      state.inpTitle = value
    },
    changeList (state, list) {
      state.list = list
    }
  },
  actions: {
    getListAction ({commit, dispatch}) {
      axios.get('http://www.easy-mock.com/mock/59913b77a1d30433d860ef60/hejuan/demo/list')
        .then((data) => {
          commit('changeList', data.data.data) // 拿到数据后，提交mutation, 改变状态
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

// 取值
// this.$store.state.title 根实例下的状态
// this.$store.state.selectModule.title 子模块下的状态
let store = new Vuex.Store({
  state: {
    count: 100,
    num: [
      {name: 'hh', isDispatch: true},
      {name: 'jj', isDispatch: false},
      {name: 'dd', isDispatch: true},
      {name: 'jj', isDispatch: false}
    ]
  },
  getters: {
    filterCount: (state) => {
      return state.num.filter((val) => val.isDispatch)
    }
  },
  mutations: {
    addIncrement (state, n) {
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
  },
  modules: {
    selectModule
  }
})

export default store
