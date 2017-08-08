<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link :to="{path:'/'}" exact tag="li" activeClass="own-active" event="mouseover">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <!--<router-link :to="{path:'/login'}" tag="li" activeClass="own-active" event="mouseover">-->
          <!--<i class="fa fa-user"></i>-->
          <!--<span>login</span>-->
        <!--</router-link>-->
        <router-link :to="{path:'/about'}" tag="li" activeClass="own-active" event="mouseover">
          <i class="fa fa-user"></i>
          <span>about</span>
        </router-link>
        <router-link :to="{path:'/document'}" tag="li" activeClass="own-active" event="mouseover">
          <i class="fa fa-file"></i>
          <span>document</span>
        </router-link>
        <router-link :to="{path:'/user'}" tag="li" activeClass="own-active" event="mouseover">
          <i class="fa fa-file"></i>
          <span>user</span>
        </router-link>
      </ul>
    </div>

    <input type="button" value="后退" @click="backHandle" />
    <input type="button" value="前进" @click="forwardHandle" />
    <input type="button" value="控制前进后退" @click="goHandle" />
    <input type="button" value="跳转到指定链接push" @click="goUrl" />
    <input type="button" value="跳转到指定链接replace" @click="goReplace" />

    <!--<router-view name="slider" class="slider"></router-view>-->
    <transition :name="tranName" mode="out-in">
      <router-view class="style-common center"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      tranName: ''
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.tranName = 'right'
      } else {
        this.tranName = 'left'
      }
    }
  },
  methods: {
    backHandle () {
      this.$router.back()
    },
    forwardHandle () {
      this.$router.forward()
    },
    goHandle () {
      this.$router.go(0)
    },
    goUrl () {
      this.$router.push({path: '/document'})
    },
    goReplace () {
      this.$router.replace({path: '/document'})
    }
  }
}
</script>

<style>
  .v-enter {
    opacity: 0;
  }
  .v-enter-to{
    opacity: 1;
  }
  .v-enter-active{
    transition: 2s;
  }
  .v-leave{
    opacity: 1;
  }
  .v-leave-to{
    opacity: 0;
  }
  .v-leave-active{
    transition: 1s;
  }
  .left-enter{
    transform: translateX(100%);
  }
  .left-enter-active{
    transition: 2s;
  }
  .left-leave-to{
    transform: translateX(-100%);
  }
  .left-leave-active{
    transition: 1s;
  }

  .right-enter{
    transform: translateX(-100%);
  }
  .right-enter-active{
    transition: 2s;
  }
  .right-leave-to{
    transform: translateX(100%);
  }
  .right-leave-active{
    transition: 1s;
  }
</style>
