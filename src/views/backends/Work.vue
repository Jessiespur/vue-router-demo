<template>
  <div class="main-container work">
    <section class="searchIpt">
      <select-input :title="title" :is-show.sync="listShow"></select-input>
      <list v-show="listShow"></list>
    </section>
  </div>
</template>

<script>
  import SelectInput from '@/views/selects/SelectInput'
  import List from '@/views/selects/List'
  export default {
    data () {
      return {
        listShow: false
      }
    },
    computed: {
      title () {
        return this.$store.state.inpTitle
      }
    },
    components: {
      SelectInput,
      List
    }
  }
</script>

<style>

</style>
