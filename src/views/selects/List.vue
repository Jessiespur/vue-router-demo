<template>
  <div class="list">
    <ul>
      <li v-for="item in items" @click="clickHandle(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['items'],
    methods: {
      clickHandle (val) {
        this.$emit('changeTitle', val)
      }
    }
  }
</script>

<style>

</style>
