<!-- 画廊 -->
<template>
  <div
    v-show="galleryShow"
    class="gallery">
    <img :src="galleryImgSrc" alt="">
    <div
      @click="$emit('closeGallery')"
      class="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'blog-gallery',

  props: {
    galleryImgSrc: {
      type: String,
      default () {
        return ''
      }
    },

    galleryShow: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .gallery {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    img {
      max-width:calc(100% - 30px);
      position: absolute;
      left: 0px;
      right: 0;
      top: 0;
      bottom: 0;
      margin:  auto;
      z-index: 2;
      max-height: 100vh;
      overflow: auto;
    }
    .mask {
      position: absolute;
      left: 0px;
      top: 0;
      width: 100%;
      height: 100vh;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
</style>
