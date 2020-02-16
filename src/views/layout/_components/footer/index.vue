<!-- 页脚 -->
<template>
  <footer
    class="footer">
      <div>
        Copyright © 2015-{{new Date().getFullYear()}} D1N910 蛋糕
      </div>
      <div>
        <a href="http://beian.miit.gov.cn" target="_blank">粤ICP备20008011号</a>
      </div>
      <div>
        友情链接:
        <a
          v-for="(item, index) in myFriend"
          :key="`friend_${index}`"
          :href="item.url"
          target="_blank"
        >
          {{ item.title }}✨
        </a>
      </div>
  </footer>
</template>

<script>
import { apiGet } from '@/utils'

export default {
  name: 'blog-footer',

  data () {
    return {
      myFriend: []
    }
  },

  mounted () {
    apiGet('getLinks', { type: 'friend' }).then(res => {
      if (res.statusCode === 200) {
        res.content.forEach(element => {
          element.show = false
        })
        this.myFriend = res.content
      }
    }).then(() => {
      this.loading = false
    })
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.footer {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
  z-index: 3;
  font-size: 14px;
  padding: 16px 0;
  a {
    text-decoration: none;
    color: #6b2ad9;
    font-weight: 500;
  }
  a:hover {
    color: #d56569;
  }

}
</style>
