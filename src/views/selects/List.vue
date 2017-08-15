<template>
  <div class="list">
    <ul>
      <li v-for="item in list" @click="changeTit(item.title)">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    computed: {
      list () {
        return this.$store.state.selectModule.list
      }
    },
    methods: {
      ...mapMutations(['changeTit'])
    },
    created () {
      this.$store.dispatch('getListAction')
    }
  }
</script>

<style>

</style>
