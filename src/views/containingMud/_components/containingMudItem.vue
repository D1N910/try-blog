<!-- 说说 子内容 -->
<template>
  <div
    :class="['cardItem', propData.show ? 'cardItemShow' : '']">
    <div
      v-html="mudContent"
      class="content">
    </div>
    <div
      class="createdAt">
      <i class="iconfont icon-qizuibashe"></i>{{propData.createdAt}}
    </div>
  </div>
</template>

<script>
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

export default {
  name: 'containing-mud-item',

  data () {
    return {
      propShow: false
    }
  },

  computed: {
    mudContent () {
      return marked(this.propData.content || '', {
        sanitize: true
      })
    }
  },

  props: {
    propData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.cardItem {
  background-color: #fff;
  border: 1px solid #e3e8ec;
  border-radius: 12px;
  margin-top: 8px;
  border-radius: 4px;
  padding: 16px 16px 32px 16px;
  transition: all 0.3s;
  opacity: 0.3;
  transform: translateY(40px);
  position: relative;
  .createdAt {
    position: absolute;
    right: 8px;
    bottom: 8px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
  }
}
.cardItemShow {
  opacity: 1;
  transform: translateY(0);
}
</style>
