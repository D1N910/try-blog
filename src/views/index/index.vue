<!-- 首页 -->
<template>
  <div
    class="blogPage">
    <!-- <Tips /> -->
    <div
      class="bgImg">
      <img src="http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/128/1/thumb.jpg" alt="图片来源http://www.polayoutu.com/collections">
    </div>
  </div>
</template>

<script>
// import Tips from './_components/tips.vue'

export default {

  name: 'index',

  data () {
    return {

    }
  },

  components: {
    // Tips
  },

  methods: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .bgImg {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
