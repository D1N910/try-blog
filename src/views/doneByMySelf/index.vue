<!-- 自制应用-->
<template>
  <div
    class="blogPage doneByMySelf">
    <!-- <Tips /> -->
    <div
      class="doneByMySelfContainer">
      <!-- 标题 -->
      <h1>
        <span class="c6b2ad9">自己来</span>
        <span class="cd56569">一发,</span>
        <span class="c6b2ad9">一步</span><span class="cd56569">一迭代</span>
        <span class="tips">——头发不要了</span>
      </h1>
      <div
        class="programContainer">
        <div class="programContainerTitle miniprogramTitle">
          <i class="iconfont icon-weixinxiaochengxu"></i> 微信小程序
        </div>
        <div
          class="programItemContainer">
          <div
            v-for="item in getAllMiniProgram"
            :key="item.id"
            :class="['programItem', 'miniprogram', item.active ? 'programItemActive' : '']">
            <div
              class="programItemImg programItemShowImg">
              <i @click="changeActive(item)" class="iconfont icon-erweima"></i>
              <div
                class="pgmsg">
                <div
                  class="title">
                  {{item.name}}
                </div>
                <div>
                  <i class="iconfont icon-yonghu">用户量：{{item.visitTotal}}</i>
                </div>
              </div>
              <img :src="item.show_img" alt="">
            </div>
            <div
              class="programItemImg codeImg">
              <i @click="changeActive(item)" class="iconfont icon-guanbi"></i>
              <img :src="item.img" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <BackgroundImg
      imgUrl="https://ws1.sinaimg.cn/large/006ES7aSgy1fz0as33dw4j324m2u5npd.jpg" />
  </div>
</template>

<script>
import BackgroundImg from '@/components/backgroundImg.vue'
import { apiGet } from '@/utils'

export default {

  name: 'done-by-my-self',

  data () {
    return {
      getAllMiniProgram: []
    }
  },

  components: {
    BackgroundImg
  },

  methods: {
    changeActive (item) {
      item.active = !item.active
      const index = this.getAllMiniProgram.indexOf(item)
      this.$set(this.getAllMiniProgram, index, item)
    }
  },

  mounted () {
    apiGet('getAllMiniProgram', this.$route.params).then(res => {
      if (res.statusCode === 200) {
        this.getAllMiniProgram = res.content
        this.getAllMiniProgram.forEach(element => {
          element.active = false
        })
      }
    }).then(() => {
      this.loading = false
    })
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .doneByMySelfContainer {
    position: relative;
    z-index: 2;
    padding: 16px 0;
    max-width: 800px;
    margin: 0 auto;
    h1 {
      padding: 0 16px;
      font-size: 22px;
    }
    .tips {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.3);
      padding-left: 16px;
    }
    .programContainer {
      padding: 10px 0 12px 0;
      .programContainerTitle {
        font-size: 18px;
        font-weight: 500;
        text-indent: 36px;
      }
      .miniprogramTitle {
        color: #1aad19;
        margin-bottom: 8px;
      }
      .programItemContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .programItem {
          width: 300px;
          height: 300px;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 24px;
          position: relative;
          box-shadow:inset 0 1px rgba(0,0,0,0.05),0 8px 16px rgba(0,0,0,0.05);
          .icon-erweima, .icon-guanbi {
            position: absolute;
            cursor: pointer;
            right: 8px;
            top: 8px;
            font-size: 18px;
            z-index: 5;
            color: #1aad19;
          }
          .programItemImg {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 2;
            transition: all 1s;
            backface-visibility: hidden;
            .pgmsg {
              position: absolute;
              color: #d56569;
              display: flex;
              padding: 4px 0;
              bottom: 0;
              text-indent: 16px;
              width: 100%;
              background: rgba(255, 255, 255, 0.6);
              font-weight: 500;
              .title {
                color: #6b2ad9;
              }
            }
          }
          .programItemShowImg {
            transform: rotateY(0deg);
          }
          .codeImg {
            transform: rotateY(-180deg);
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .programItemActive{
          .programItemShowImg {
            transform: rotateY(180deg);
          }
          .codeImg {
            transform: rotateY(0deg);
          }
        }
      }
    }
  }
</style>
