<template>
  <div class="container" id="layout">
    <header-nav></header-nav>
    <div class="breadcrumb">
      <router-link to="/">首页</router-link>/
      <span :style="{color: '#97a8be'}">{{flag}}</span>
    </div>
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import headerNav from '@/components/Header'

  let flags = {
    project: '我的项目',
    work: '工作台',
    document: '文档'
  }
  export default {
    data () {
      return {
        flag: ''
      }
    },
    watch: {
      $route () {
        this.flag = flags[this.$route.path.slice(1)]
      }
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.flag = flags[to.path.slice(1)]
      })
    },
    components: {
      headerNav
    }
  }
</script>

<style>

</style>
