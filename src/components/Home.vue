<template>
  <div>
    <router-link to="/login" v-if="!isLogin" class="login-btn" tag="div"><a>登录</a></router-link>
    <div class="head-img" v-if="isLogin"><img src="../assets/head.jpg"></div>
    <div class="home-container">
      <h1>一起学习Vue-router</h1>
     <div class="btns">
       <router-link to="/project" class="btn" tag="div"><a>我的项目</a></router-link>
       <router-link to="/document" class="btn" tag="div"><a>我的文档</a></router-link>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isLogin: ''
      }
    },
    created () {
      // 拿到登录信息
      let loginInfo = this.$local.fetch('$userName')
      this.isLogin = loginInfo.login
    }
  }
</script>
<style>

</style>
