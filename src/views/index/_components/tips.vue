<!-- 首页 -->
<template>
  <div
    class="tips">
    图源来自 泼辣修图
  </div>
</template>

<script>
export default {

  name: 'blog-tips',

  data () {
    return {

    }
  },

  components: {
  },

  methods: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .tips {
    position: fixed;
    right: 5px;
    bottom: 90px;
    z-index: 999;
    background-color: #fff;
    opacity: 0.3;
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>
