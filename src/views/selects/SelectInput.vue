<template>
  <div class="select-input clearfix">
    <input type="text" @click="showListHandle" :value="inpTitle"/><i class="fa fa-search"></i>
    <span class="go-search">GO</span>
  </div>
</template>

<script>
  export default {
    props: ['isShow'],
    computed: {
      initShow () {
        return this.isShow
      },
      inpTitle () {
        return this.$store.state.selectModule.inpTitle
      }
    },
    methods: {
      showListHandle () {
        this.$emit('update:isShow', !this.initShow) // update不是自定义的，是vue内部去定义的，用update去拿到自定义的key值（isShow）就可以了，改变为true值
      }
    }
  }
</script>

<style>

</style>
