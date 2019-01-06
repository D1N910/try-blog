<template>
  <div
    class="bgImg">
    <img :src="imgUrl" alt="图片来源http://www.polayoutu.com/collections">
  </div>
</template>

<script>
export default {
  name: 'background-img',

  props: {
    imgUrl: {
      type: String,
      default () {
        return 'http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/128/1/thumb.jpg'
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
