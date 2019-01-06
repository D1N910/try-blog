<!-- 页脚 -->
<template>
  <div
    class="nav">
    <router-link
      to="/index">
      <div
        class="leftContainer">
        <!-- D1n910的博客 -->
        <img src="http://ww1.sinaimg.cn/large/006ES7aSgy1fyw7egmfhzj30jg05kweq.jpg" alt="D1n910的博客">
      </div>
    </router-link>
    <nav>
      <router-link
        v-for="(item, index) in navUrl"
        :key="index"
        :to="item.path">
        <div

          :class="['navItem', index === activeIndex ? 'actived' : '']">
          {{item.name}}
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
const defaultRoute = ['index', 'article', 'design', 'notFCanSay', 'doneByMySelf', 'meyFriend', 'aboutMe']

export default {
  name: 'blog-nav',

  data () {
    return {
      activeIndex: 0,
      navUrl: [
        {
          name: '首页',
          path: '/index'
        },
        {
          name: '文章',
          path: '/article'
        },
        {
          name: '设计',
          path: '/design'
        },
        {
          name: '无F可说',
          path: '/notFCanSay'
        },
        {
          name: '自制',
          path: '/doneByMySelf'
        },
        {
          name: '友链',
          path: '/meyFriend'
        },
        {
          name: '关于',
          path: '/aboutMe'
        }
      ]
    }
  },

  components: {
  },

  props: {
    routeName: Object,
    default () {
      return {}
    }
  },

  methods: {
  },

  created () {
    this.activeIndex = defaultRoute.indexOf(this.routeName.name)
  },

  watch: {
    routeName () {
      this.activeIndex = defaultRoute.indexOf(this.routeName.name)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .nav {
    height: 88px;
    font-size: 22px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 999;
    background-color: #fff;
    a {
      text-decoration: none;
    }
    .leftContainer {
      color: #6b2ad9;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100px;
      }
    }
    nav {
      display: flex;
      a {
        text-decoration: none;
      }
      .navItem {
        font-size: 18px;
        padding: 0 16px;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.87);
        &:hover {
          color: #6b2ad9;
        }
      }
      .actived {
        font-weight: 500;
        color: #d56569;
      }
    }
  }
</style>
