<template>
  <div class="main-container data">
    data
  </div>
</template>

<script>
  import axios from 'axios'
  import queryString from 'queryString'

  var HTTP = axios.create({
    baseURL: 'http://www.easy-mock.com/mock/59913b77a1d30433d860ef60/hejuan/demo/',
    timeout: 1000,
    headers: {
      'custome-header': 'miaov',
      'content-type': 'application/x-xxx-form-urlencoded'
    }
//    transformRequest: [(data) => {
//      return queryString.stringify(data)
//    }],
//    transformResponse: [(data) => {
//      return data
//    }]
  })
  export default {
    created () {
      function http1 () {
        return HTTP.get('list')
      }
      function http2 () {
        return HTTP.post('data/dispatch')
      }
      axios.all([http1(), http2()])
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
</script>

<style>

</style>
