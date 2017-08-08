<template>
  <div>
    关于我{{this.test}}
    <hr>
    <ul class="nav">
      <router-link :to="{name:'About'}" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link :to="{name:'Work'}" tag="li">
        <a>work</a>
      </router-link>
      <router-link :to="{name:'Hobby'}" tag="li">
        <a>hobby</a>
      </router-link>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        test: '改变前'
      }
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.test = '改变了'
      })
//      if (to.meta.login) {
//        next('/login')
//      } else {
//        next()
//      }
    },
    beforeRouteUpdate (to, from, next) {
      next()
    },
    beforeRouteLeave (to, from, next) {
      next()
    }
  }
</script>

<style>

</style>
