<template>
  <div class="main-container data">
    <p>数据：{{reqData}}</p>
    <br>
    <p>
      <input type="button" @click="cancelLoad" value="取消加载数据" style="padding: 10px 20px; font-size: 20px"/>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'
  import queryString from 'queryString'
  var CancelToken = axios.CancelToken
  var source = CancelToken.source()

  var HTTP = axios.create({
    baseURL: 'http://www.easy-mock.com/mock/59913b77a1d30433d860ef60/hejuan/demo/',
    timeout: 1000,
    headers: {
      'custome-header': 'miaov',
      'content-type': 'application/x-xxx-form-urlencoded'
    },
    cancelToken: source.token
  })
// 拦截请求
//  HTTP.interceptors.request.use((config) => {
//    return config
//  }, (err) => {
//    return Promise.reject(err)
//  })
//// 拦截响应
//  HTTP.interceptors.response.use((response) => {
//    return response
//  }, (err) => {
//    return Promise.reject(err)
//  })

  export default {
    data () {
      return {
        reqData: ''
      }
    },
    created () {
      this.$http.get('http://www.easy-mock.com/mock/59913b77a1d30433d860ef60/hejuan/demo/list')
        .then((res) => {
          this.reqData = res.data
        })
        .catch((err) => {
          console.log(err)
        })
//      function http1 () {
//        return HTTP.get('list')
//      }
//      function http2 () {
//        return HTTP.post('data/dispatch')
//      }
//      axios.all([http1(), http2()])
//        .then(axios.spread((res1, res2) => {
//          this.reqData = res1.data
//          console.log(res1.data)
//        }))
//        .catch((err) => {
//          if (axios.isCancel(err)) {
//            console.log(err.message)
//          } else {
//            console.log(err)
//          }
//        })
    },
    methods: {
      cancelLoad () {
        source.cancel('操作被用户取消了')
      }
    }
  }
</script>

<style>

</style>
