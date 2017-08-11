<template>
  <div class="main-container work">
    <section class="searchIpt">
      <select-input :title="title" :is-show.sync="listShow"></select-input>
      <list v-show="listShow" :items="listData" @changeTitle="titleHandle"></list>
    </section>
  </div>
</template>

<script>
  import SelectInput from '@/views/selects/SelectInput'
  import List from '@/views/selects/List'
  export default {
    data () {
      return {
        listShow: false,
        listData: ['html+css', 'html5+css3', 'javascript', 'jquery', 'es6', 'node.js', 'webpack', 'vue.js'],
        title: ''
      }
    },
    components: {
      SelectInput,
      List
    },
    methods: {
      titleHandle (title) {
        this.title = title
        this.listShow = false
      }
    }
  }
</script>

<style>

</style>
