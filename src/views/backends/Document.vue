<template>
  <div class="main-container document">
    <ul class="main-menu">
      <li>
        <router-link :to="{path: '#base'}">基础</router-link>
        <ul class="nav-dropdown">
          <li>
            <router-link :to="{path: '#start'}">开始</router-link>
          </li>
          <li>
            <router-link :to="{path: '#dongtai'}">动态路由</router-link>
          </li>
          <li>
            <router-link :to="{path: '#qiantaoluyou'}">嵌套路由</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link :to="{path: '#jinjie'}">进阶</router-link>
        <ul class="nav-dropdown">
          <li>
            <router-link :to="{path: '#daohanggouzi'}">导航钩子</router-link>
          </li>
          <li>
            <router-link :to="{path: '#yuanxinxi'}">路由元信息</router-link>
          </li>
          <li>
            <router-link :to="{path: '#biancheng'}">编程式路由</router-link>
          </li>
        </ul>
      </li>
    </ul>
    <doc-view class="doc-right"></doc-view>
  </div>
</template>

<script>
  import TWEEN from 'tween.js'
  import DocView from '@/views/backends/DocView'

  export default {
    components: {
      DocView
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.animate(to)
      })
    },
    beforeRouteUpdate (to, from, next) {
      this.animate(to)
      next()
    },
    methods: {
      animate (to) {
        function animateFn (time) {
          requestAnimationFrame(animateFn)
          TWEEN.update(time)
        }
        if (to.hash) {
          var el = document.getElementById(to.hash.slice(1)) // 右侧对应ID内容
          var doc = document.getElementById('docContent') // 需滚动的内容区域
          if (el) {
            animateFn()
            new TWEEN.Tween({
              number: doc.scrollTop
            })
              .to({
                number: el.offsetTop
              }, 500)
              .easing(TWEEN.Easing.Quadratic.Out)
              .onUpdate(function () {
                doc.scrollTop = this.number.toFixed() // 将这个数变成整数
                console.log(this.number.toFixed(0))
                console.log(el.offsetTop)
                console.log(doc.scrollTop)
              })
              .start()
          }
        }
      }
    }
  }
</script>

<style>

</style>
