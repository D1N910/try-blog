<!-- 页脚 -->
<template>
  <div
    class="nav">
    <div
      class="leftContainer">
      D1n910的博客
    </div>
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
const defaultRoute = ['index', 'page', 'notFCanSay', 'doneByMySelf', 'aboutMe']

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
          path: '/page'
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
          name: '关于我',
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
    console.log(this.activeIndex)
    console.log(this.routeName)
  },

  watch: {
    routeName () {
      console.log(this.routeName.name)
      this.activeIndex = defaultRoute.indexOf(this.routeName.name)
      console.log(this.activeIndex)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .nav {
    height: 44px;
    font-size: 22px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
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
          font-weight: 500;
          color: #d56569;
        }
      }
      .actived {
        font-weight: 500;
        color: #d56569;
      }
    }
  }
</style>
