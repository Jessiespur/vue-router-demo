<template>
  <div class="header">
    <div class="logo"><img src="../assets/logo.png"></div>
    <ul>
      <router-link to="/project" tag="li"><a><i class="fa fa-home"></i>我的项目</a></router-link>
      <router-link to="/work" tag="li"><a><i class="fa fa-code"></i>工作台</a></router-link>
      <router-link to="/document" tag="li"><a><i class="fa fa-book"></i>文档</a></router-link>
      <router-link to="/calculator" tag="li"><a><i class="fa fa-calculator"></i>计算器</a></router-link>
      <router-link to="/data" tag="li"><a><i class="fa fa-database"></i>数据</a></router-link>
    </ul>
    <div class="person" @click = "displayOut">
      <img src="../assets/head.jpg">
      <span  v-if="isLogin">{{userName}}</span>
    </div>
    <div class="login-out" v-if="isDisplay" @click="toIndex">
      退出
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myheader',
    data () {
      return {
        isDisplay: false,
        userName: '',
        isLogin: false
      }
    },
    created () {
      let loginInfo = this.$local.fetch('$userName')
      if (loginInfo.login) {
        this.isLogin = true
        this.userName = loginInfo.userName
      }
    },
    methods: {
      displayOut () {
        this.isDisplay = !this.isDisplay
      },
      toIndex () {
        this.$local.save('$userName', null)
        this.isDisplay = false
        this.$router.push('/login')
      }
    }
  }
</script>

<style>

</style>
