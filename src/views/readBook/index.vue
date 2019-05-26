<!-- 书籍-->
<template>
  <div
    class="blogPage myFriend">
    <!-- <Tips /> -->
    <div
      v-if="!loading"
      class="normalContainer">
      <header class="hero">
        <span class="c6b2ad9">书</span>
        <span class="cd56569">籍</span>
      </header>
      <div
        class="normalContainerTitle">
        <span class="c6b2ad9">好好学习，</span>
        <span class="cd56569">然后白衣渡江。</span>
      </div>
      <div
        class="bookCardContainer">
        <div
          v-for="(item, index) in articleList"
          :key="index"
          class="bookCard">
          <!-- 时间 -->
          <div
            class="readTime">
            {{ item.readingTime }}
          </div>

          <!-- 封面 -->
          <img
            class="bookImg"
            :src="item.imgUrl"
            alt="">

          <!-- 书名 -->
          <div
            class="bookTitle">
            {{ item.name }}
          </div>

          <!-- 作者 -->
          <div
            class="author">
            {{ item.author }}
          </div>

          <!-- 进度 -->
          <div
            class="progressBar">
            <div
              class="progressBarText">
              {{item.percentage}}%
            </div>
            <div
              :style="'width: ' + item.percentage + '%;'"
              class="haveRead">
            </div>
          </div>

          <!-- 一句话 -->
          <div
            class="oneSaid">
            {{ item.oneSaid }}
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="!haveFull"
      @click="get()"
      class="nothing addMore">
      加载更多
    </div>

    <div
      v-if="haveFull"
      class="nothing">
      没有更多
    </div>

    <BackgroundImg
      v-if="!loading"
      imgUrl="https://wx2.sinaimg.cn/mw690/a4dfdaf4gy1g0j04mbfjjj20sg0zk45i.jpg" />
    <Loading
      v-if="loading"
      />
  </div>
</template>

<script>
import BackgroundImg from '@/components/backgroundImg.vue'
import Loading from '@/components/loading'
import { apiGet } from '@/utils'

export default {

  name: 'done-by-my-self',

  components: {
    BackgroundImg, Loading
  },

  data () {
    return {
      loading: false,
      articleList: [],
      getListData: {
        offset: 0,
        limit: 6
      },
      haveFull: false,
      lock: false
    }
  },

  methods: {
    get () {
      if (this.lock) {
        return false
      }
      this.lock = true
      if (this.haveFull) {
        return false
      }
      apiGet('readBook', this.getListData).then(res => {
        if (res.statusCode === 200) {
          const oldLength = parseInt(this.articleList.length)
          res.content.forEach(element => {
            const thisData = element.date
            const d = new Date(thisData)
            element.date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
          })
          this.articleList.push(...res.content)
          for (let i in res.content) {
            i = parseInt(i)
            setTimeout(() => {
              this.articleList[parseInt(oldLength + i)].show = true
              this.$set(this.articleList, parseInt(oldLength + i), this.articleList[parseInt(oldLength + i)])
            }, i * 100)
          }
          this.getListData.offset += this.getListData.limit
          if (res.content.length < this.getListData.limit) {
            this.haveFull = true
          }
        }
      }).then(() => {
        this.lock = false
      })
    }
  },

  mounted () {
    this.get()
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .author {
    font-size: 12px;
    color: rgba(0,0,0,0.6);
    text-align: center;
  }
  .bookCardContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .oneSaid {
      background-color: #6b2ad9;
      color: rgba(255,255,255,0.8);
      padding: 6px;
      margin-top: 8px;
      font-size: 12px;
    }
    .bookCard {
      background-color: rgba(255,255,255,0.5);
      border-radius: 10px;
      padding: 8px 16px;
      margin: 16px 32px;
      width: 116px;
      .bookImg {
        width: 100px;
        display: block;
        margin: 0 auto;
      }
      .readTime {
        text-align: center;
        font-size: 14px;
        opacity: 0.5;
      }
      .bookTitle {
        text-align: center;
        color: #6b2ad9;
      }
      .haveRead {
        height: 100%;
        background-color: #d56569;
      }
      .progressBar {
        width: 100%;
        height: 20px;
        background-color: rgba(0,0,0,0.2);
        position: relative;
        .progressBarText {
          position: absolute;
          width: 100%;
          text-align: center;
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .normalContainerTitle {
      text-indent: 16px;
    }
    .bookCardContainer {
      justify-content: center;
      .bookCard {
        width: 35%;
        margin: 0 4px;
        .bookTitle {
          font-size: 18px;
        }
        .bookImg {
          width: 100%;
          max-width: 200px;
        }
      }
    }
  }
</style>
