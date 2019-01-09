<!-- 自制应用-->
<template>
  <div
    class="blogPage myFriend">
    <!-- <Tips /> -->
    <div
      v-if="!loading"
      class="myFriendContainer">
    </div>
    <!-- <BackgroundImg
      v-if="!loading"
      imgUrl="https://ws1.sinaimg.cn/large/006ES7aSgy1fz0as33dw4j324m2u5npd.jpg" /> -->
    <Loading
      v-if="loading"
      />
  </div>
</template>

<script>
// import BackgroundImg from '@/components/backgroundImg.vue'
import { apiGet } from '@/utils'
import Loading from '@/components/loading'

export default {

  name: 'done-by-my-self',

  data () {
    return {
      loading: true
    }
  },

  components: {
    Loading
  },

  methods: {
  },

  mounted () {
    apiGet('getAllMiniProgram', this.$route.params).then(res => {
      if (res.statusCode === 200) {
      }
    }).then(() => {
      this.loading = false
    })
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
