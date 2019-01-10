<!-- 自制应用-->
<template>
  <div
    class="blogPage myFriend">
    <!-- <Tips /> -->
    <div
      v-if="!loading"
      class="myFriendContainer">
      <div
        class="myFriendContainerTitle">
        都是我的大哥, 我只是个小老弟
      </div>
      <div
        class="myFriendList">
        <CardItem
          v-for="(item, index) in myFriend"
          :key="index"
          :propShow="item.show"
          :propImgUrl="item.imgUrl"
          :propUrl="item.url"
          :propTitle="item.title"
          :propProduce="item.produce"/>
      </div>
      <div
        class="myFriendContainerTitle">
        我喜欢去的地方，一起康康（震声
      </div>
     <div
        class="myFriendList">
        <CardItem
          v-for="(item, index) in myLikeLink"
          :key="index"
          :propShow="item.show"
          :propImgUrl="item.imgUrl"
          :propUrl="item.url"
          :propTitle="item.title"
          :propProduce="item.produce"/>
      </div>
    </div>

    <BackgroundImg
      v-if="!loading"
      imgUrl="https://ws1.sinaimg.cn/large/006ES7aSgy1fz1lcewpzuj30u00jy761.jpg" />
    <Loading
      v-if="loading"
      />
  </div>
</template>

<script>
import BackgroundImg from '@/components/backgroundImg.vue'
import { apiGet } from '@/utils'
import Loading from '@/components/loading'
import CardItem from './_components/cardItem'

export default {

  name: 'done-by-my-self',

  data () {
    return {
      loading: true,
      myFriend: [
      ],
      myLikeLink: [
      ]
    }
  },

  components: {
    Loading,
    CardItem,
    BackgroundImg
  },

  methods: {
  },

  mounted () {
    apiGet('getLinks', { type: 'friend' }).then(res => {
      if (res.statusCode === 200) {
        res.content.forEach(element => {
          element.show = false
        })
        this.myFriend = res.content
        for (let i in this.myFriend) {
          i = parseInt(i)
          setTimeout(() => {
            this.myFriend[i].show = true
            this.$set(this.myFriend, parseInt(i), this.myFriend[parseInt(i)])
          }, i * 100)
        }
      }
    }).then(() => {
      this.loading = false
    })
    apiGet('getLinks', { type: 'likeWeb' }).then(res => {
      if (res.statusCode === 200) {
        res.content.forEach(element => {
          element.show = false
        })
        this.myLikeLink = res.content
        for (let i in this.myLikeLink) {
          i = parseInt(i)
          setTimeout(() => {
            this.myLikeLink[i].show = true
            this.$set(this.myLikeLink, parseInt(i), this.myLikeLink[parseInt(i)])
          }, i * 100)
        }
      }
    }).then(() => {
      this.loading = false
    })
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .myFriendContainer {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    .myFriendContainerTitle {
      padding: 16px 0;
      font-weight: bold;
      font-size: 22px;
      color: #d3b9ff;
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    }
    .myFriendList {
      column-count: 4;
      column-gap: 0;
      padding-bottom: 32px;
      transition: all 0.5s;
    }
  }
  @media screen and (max-width: 800px) {
    .myFriendContainer {
      .myFriendContainerTitle {
        font-size: 18px;
        text-indent: 32px;
      }
      .myFriendList {
        column-count: 2;
        column-gap: 0;
      }
    }
  }
  @media screen and (max-width: 400px) {
    .myFriendContainer {
      .myFriendList {
        column-count: 1;
        column-gap: 0;
      }
    }
  }
</style>
