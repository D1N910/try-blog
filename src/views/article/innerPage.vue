<!-- 博客文章 -->
<template>
  <div
    class="blogPage Article">
    <div
      v-if="!loading"
      class="pageContainer">
      <div
        class="headContainer">
        <div
          class="titleContainer">
          <h1
            class="title">
            {{articile.pageTitle}}
          </h1>
          <div
            class="info">
            <div class="infoTime">{{articile.date}}</div>
            <div class="infoWatch">{{articile.watch}}阅读</div>
          </div>
        </div>
      </div>
      <div
        class="articleHolder unable-reprint"
        v-html="articile.pageContent"></div>
    </div>

    <Loading
      v-if="loading"
      />
  </div>
</template>

<script>
import { apiGet } from '@/utils'
import Loading from '@/components/loading'

let marked = require('marked')
let hljs = require('highlight.js')

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value
    } else {
      return hljs.highlightAuto(code).value
    }
  }
})

const defaultArticle = {
  pageContent: ''
}
export default {

  name: 'blog-article-inner-page',

  data () {
    return {
      articile: { ...defaultArticle },
      loading: true
    }
  },

  components: {
    Loading
  },

  computed: {
  },

  methods: {
  },

  mounted () {
    apiGet('singleArtile', this.$route.params).then(res => {
      if (res.statusCode === 200) {
        const thisData = res.content.date
        const d = new Date(thisData)
        document.title = `${res.content.pageTitle}-文章-D1n910的家🏠`
        res.content.date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        this.articile = res.content
        this.articile.pageContent = marked(this.articile.pageContent || '', {
          sanitize: true
        })
      }
    }).then(() => {
      this.loading = false
    })
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .Article {
    background-color: #fff;
    .pageContainer {
      width: 660px;
      overflow-x: initial;
      position: relative;
      max-width: 860px;
      margin: 0 auto;
      margin-top: 30px;
      background-color: #fff;
    }
    .headContainer {
      max-width: 660px;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 30px;
    }
    .titleContainer {
      margin-top: 0;
      text-align: left;
      line-height: 1.4;
      .title {
        font-size: 28px;
        color: #222;
        margin-bottom: 14px;
        font-weight: 700;
        line-height: 1.4;
      }
      .info {
        color: #9b9b9b;
        font-size: 12px;
        font-weight: 400;
        display: flex;
        .infoTime {
          margin: 0 8px 0 0;
        }
      }
    }
    .articleHolder {
      font-size: 16px;
      line-height: 1.8;
      color: #222;
      padding-bottom: 50px;
    }
    @media screen and (max-width: 800px) {
      .pageContainer {
        width: calc(100% - 32px);
        padding: 0 16px;
      }
    }
  }
</style>
