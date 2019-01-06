<!-- 首页 -->
<template>
  <div
    class="blogPage">
    <!-- <Tips /> -->
    <BackgroundImg />
  </div>
</template>

<script>
// import Tips from './_components/tips.vue'
import BackgroundImg from '@/components/backgroundImg.vue'

export default {

  name: 'index',

  data () {
    return {

    }
  },

  components: {
    BackgroundImg
    // Tips
  },

  methods: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
