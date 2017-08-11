<template>
  <div class="cal main-container pad-25">
    <h1>简易加法计算器</h1>
    <div class="cal-inps">
      <input type="button" value="-" @click="subHandle"/>
      <span>{{num}}</span>
      <input type="button" value="+" @click="addHandle"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      num () {
        return this.$store.state.count
      }
    },
    methods: {
      addHandle () {
        // 改变状态，提交mutation的自定义事件addIncrement
//        this.$store.commit('addIncrement', 5)
        this.$store.dispatch('addAction')
      },
      subHandle () {
        this.$store.commit({
          type: 'subtraction',
          n: 2
        })
      }
    }
  }
</script>

<style>

</style>
