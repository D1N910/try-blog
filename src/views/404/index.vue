<!-- 404页面 -->
<template>
  <div
    class="blogPage notFound">
    <div
      class="title">
      404 NOT FOUND
    </div>
    <img
      class="notFound-img"
      :src="notFound" alt="">
    <div
      class="slogan">
      这里可能曾有很多东西，不过现在荒芜一物
    </div>

    <a class="c6b2ad9 comeBack" @click="comeBack">返回</a>
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
    comeBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .notFound {
    text-align: center;
    .title {
      font-size: 24px;
      padding: 42px 0;
      font-weight: 500;
    }
    .slogan {
      color: rgba(0, 0, 0, 0.5);
      padding: 16px 0;
    }
    .comeBack {
      cursor: pointer;
      font-weight: 500;
    }
  }
  .notFound-img {
    width: 200px;
  }
</style>
