<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link :to="{path:'/#abc'}" exact tag="li" activeClass="own-active" event="mouseover">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
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
    <router-view name="slider" class="slider"></router-view>
    <router-view class="style-common center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: '/'
    }
  }
}
</script>

<style>

</style>
