<template>
  <div class="cal main-container pad-25">
    <h1>简易加法计算器</h1>
    <div class="cal-inps">
      <input type="button" value="-" @click="subtraction({n:2})"/>
      <span>{{count}}</span>
      <input type="button" value="+" @click="addAction"/>
      <p v-for="item in filterCount">姓名：{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    computed: {
      abc () {
        return 123
      },
      ...mapGetters(['filterCount']),
      ...mapState(['count'])
    },
    methods: {
      ...mapActions(['addAction']),
      ...mapMutations(['subtraction'])
    }
  }
</script>

<style>

</style>
