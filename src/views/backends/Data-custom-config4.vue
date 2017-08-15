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
    },
    transformRequest: [(data) => {
      return queryString.stringify(data)
//      return data
    }],
    transformResponse: [(data) => {
      return data
    }],
    validateStatus: (status) => {
      return status < 400
    }
  })
  export default {
    created () {
//      HTTP.get('list')
//        .then((res) => {
//          console.log(res)
//        })
//        .catch((err) => {
//          console.log(err)
//        })
      HTTP.post('data/dispatch', {
        abc: 'hh',
        aa: 'jj'
      })
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
