<!-- 404页面 -->
<template>
  <div
    class="blogPage 404NotFound">
    <img
      class="notFound-img"
      :src="notFound" alt="">
    <div>
      这里可能曾经有很多东西，不过现在荒芜一物
    </div>
  </div>
</template>

<script>
export default {

  name: 'index',

  data () {
    return {
      notFound: require('@/assets/404/notFound.svg')
    }
  },

  components: {
  },

  methods: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .notFound-img {
    width: 200px;
  }
</style>
