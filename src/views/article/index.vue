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
        v-for="(item, index) in articleList"
        :key="index">
        <div :class="['lisItem', item.show ? 'lisItemShow' : '']">
          <!-- 文章标题 -->
            <h3>
              {{item.title}}
            </h3>
            <!-- 其他信息 -->
            <h6>
              <span>
                <i class="blogPodcast"></i> Episode &nbsp;|&nbsp;
                <i class="blogCalendarAlt"></i> December 21st, 2018
                &nbsp;|&nbsp;
                <i class="far fa-clock"></i> 49 mins 49 secs
              </span>
            </h6>
            <!-- 标签 -->
            <h6>
              <span>
                <i class="blogTag"></i> 前端
              </span>
            </h6>

          </div>
      </li>
    </ul>

    <div
      class="nothing">
      没有更多
    </div>
    <!-- 背景图 -->
    <BackgroundImg
      imgUrl="http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/129/9/thumb.jpg"/>

  </div>
</template>

<script>
import BackgroundImg from '@/components/backgroundImg.vue'
import { apiGet } from '@/utils'

export default {

  name: 'blog-article',

  data () {
    return {
      articleList: []
    }
  },

  components: {
    BackgroundImg
  },

  methods: {
  },

  mounted () {
    apiGet('articleList').then(res => {
      if (res.statusCode === 200) {
        this.articleList = res.content
        for (let i in this.articleList) {
          setTimeout(() => {
            this.articleList[i].show = true
            this.$set(this.articleList, i, this.articleList[i])
          }, i * 100)
        }
      }
    })
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
      transition: all 0.3s ease;
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
</style>
