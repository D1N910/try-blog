<template>
  <div
    :class="['bgImg', bgImgFilter ? 'bgImgFilter' : '']">
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
        return 'https://ws1.sinaimg.cn/large/006ES7aSgy1fyz78nng15j30zk0jkdma.jpg'
      }
    },
    bgImgFilter: {
      type: Boolean,
      default () {
        return false
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
  .bgImgFilter {
    filter: blur(13px);
  }
</style>
