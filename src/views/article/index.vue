<!-- 博客文章 -->
<template>
  <div
    class="blogPage Article">
    <header class="hero">
      <span class="c6b2ad9">文</span>
      <span class="cd56569">章</span>
    </header>
    <ul
      class="list header">
      <li
        v-for="item in articleList"
        :key="item.id">
        <div :class="['lisItem', item.show ? 'lisItemShow' : '']">
          <!-- 文章标题 -->
              <h3>
                <router-link :to="`singleArticle/${item.id}`">
                  {{item.title}}
                </router-link>
              </h3>
            <!-- 其他信息 -->
            <h6>
              <span>
                <i class="blogPodcast"></i> {{item.anthor}} &nbsp;|&nbsp;
                <i class="blogCalendarAlt"></i> {{item.date}}
                &nbsp;|&nbsp;
                <i class="far fa-clock"></i> {{item.datetime}}
              </span>
            </h6>
            <!-- 标签 -->
            <h6>
              <span>
                <i class="blogTag"></i> {{item.type}}
              </span>
            </h6>

          </div>
      </li>
    </ul>

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
    <!-- 背景图 -->
    <BackgroundImg
      imgUrl="https://ww1.sinaimg.cn/large/006ES7aSgy1fyz75ek2mtj30qo0zkn7s.jpg"/>

  </div>
</template>

<script>
import BackgroundImg from '@/components/backgroundImg.vue'
import { apiGet } from '@/utils'

export default {

  name: 'blog-article',

  data () {
    return {
      articleList: [],
      getListData: {
        offset: 0,
        limit: 3
      },
      haveFull: false,
      lock: false
    }
  },

  components: {
    BackgroundImg
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
      apiGet('articleList', this.getListData).then(res => {
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
              console.log(this.articleList)
              console.log(parseInt(oldLength + i))
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
  .hero {
    position: relative;
    z-index: 2;
    color: #000;
    text-shadow: 0 0.0625em 0.5em rgba(255, 255, 255,0.25);
    height: 200px;
    text-align: center;
    line-height: 200px;
    font-size: 72px;
    font-weight: 500;
  }
  .list {
    position: relative;
    z-index: 2;
    background-color: #fff;
    li:nth-child(2n){
      background-color: #f7f7f7;
    }
    .lisItem {
      padding: 32px 16px 24px;
      margin: 0 auto;
      max-width: 1056px;
      opacity: 0;
      height: 0;
      overflow: hidden;
      transition: all 0.15s ease;
      h3 {
        margin: 0 0 16px;
        a {
          color: #a282d9;
          &:hover {
            color: #6b2ad9;
          }
        }
      }
      h6 {
        color: #808080;
        font-weight: 600;
        line-height: 2;
        margin: 2px 0 0;
      }
    }
    .lisItemShow {
      height: 92px;
      opacity: 1;
    }
  }
  .nothing {
    position: relative;
    z-index: 2;
    padding: 10px 0;
    text-align: center;
    font-weight: 400;
    color: #fff;
    box-shadow:inset 0 1px rgba(0,0,0,0.05),0 8px 16px rgba(0,0,0,0.05);
  }
  .addMore {
    color: #a282d9;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: #6b2ad9;
    }
  }
</style>
