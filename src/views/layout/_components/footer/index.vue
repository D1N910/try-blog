<!-- 页脚 -->
<template>
  <footer
    class="footer">
      <div>
        Copyright © 2015-{{new Date().getFullYear()}} D1N910 蛋糕
      </div>
      <div>
        <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action">粤ICP备17002625号</a>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'blog-footer',

  data () {
    return {
    }
  },

  components: {
  },

  methods: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.footer {
  text-align: center;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
  z-index: 3;
  font-size: 14px;
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
