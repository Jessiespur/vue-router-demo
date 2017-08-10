<template>
  <div class="container login">
    <div class="login-content">
      <h2>登录</h2>
      <form class="login-form" @submit.prevent="sendLogin" autocomplete="off">
        <input type="text" placeholder="请输入账号" ref="userInput"/>
        <input type="password" placeholder="请输入密码"/>
        <input type="submit" value="登录"/>
      </form>
      <router-link to="/" tag="span">首页>></router-link>
    </div>
    <img src="../assets/login-bg.png" draggable="false">
  </div>
</template>

<script>
  export default {
    methods: {
      sendLogin () {
        let userName = this.$refs.userInput.value
        this.$local.save('$userName', {
          login: true,
          userName: userName
        })
        let path = this.$route.query.redirect
        if (!path) {
          path = 'project'
        }
        this.$router.push({
          path: '/' + path
        })
      }
    }
  }
</script>

<style>

</style>
