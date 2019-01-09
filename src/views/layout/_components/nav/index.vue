<!-- 头部 -->
<template>
  <div>
    <div
      class="nav">
      <router-link
        to="/index">
        <div
          class="leftContainer">
          <!-- D1n910的博客 -->
          <img src="https://ww1.sinaimg.cn/large/006ES7aSgy1fyw7egmfhzj30jg05kweq.jpg" alt="D1n910的博客">
        </div>
      </router-link>
      <nav
        class="navTypeOne">
        <router-link
          v-for="(item, index) in navUrl"
          :key="index"
          :to="item.path">
          <div
            :class="['navItem', index === activeIndex ? 'actived' : '']">
            <i :class="['iconfont', item.icon]"></i> {{item.name}}
          </div>
        </router-link>
      </nav>
      <div
        v-if="mobileMenuShow"
        @click="mobileMenuShow = false"
        class="navTypeTwo">
        <i class="iconfont icon-caidan"></i>
      </div>
      <div
        v-if="!mobileMenuShow"
        @click="mobileMenuShow = true"
        class="navTypeTwo">
        <i class="iconfont icon-guanbi"></i>
      </div>
    </div>
    <div
      @touchmove="jump"
      @click="mobileMenuShow = true"
      :class="['navMobile', !mobileMenuShow ? 'navMobileShow' : '']">
      <div
        class="navMobileList">
        <router-link
          v-for="(item, index) in navUrl"
          :key="index"
          :to="item.path">
          <div
            :class="['navItem', index === activeIndex ? 'actived' : '']">
            <i :class="['iconfont', item.icon]"></i> {{item.name}}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const defaultRoute = ['index', 'article', 'doneByMySelf', 'meyFriend', 'aboutMe']

export default {
  name: 'blog-nav',

  data () {
    return {
      mobileMenuShow: true,
      activeIndex: 0,
      navUrl: [
        {
          name: '首页',
          path: '/index',
          icon: 'icon-dn'
        },
        {
          name: '文章',
          path: '/article',
          icon: 'icon-wenzhangzixunzhejiaoxinwendongtaitiezixianxing'
        },
        // {
        //   name: '设计',
        //   path: '/design'
        // },
        // {
        //   name: '无F可说',
        //   path: '/notFCanSay'
        // },
        {
          name: '自制',
          path: '/doneByMySelf',
          icon: 'icon-chengxu'
        },
        {
          name: '友链',
          path: '/meyFriend',
          icon: 'icon-cloud-link'
        },
        {
          name: '关于',
          path: '/aboutMe',
          icon: 'icon-guanyu'
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
    jump (event) {
      event.preventDefault()
    }
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
    height: 42px;
    font-size: 22px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 999;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
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
    .navTypeTwo {
      display: none;
    }
  }
  @media screen and (max-width: 800px) {
    .nav {
      height: 88px;
      position: fixed;
      width: calc(100% - 60px);
      .navTypeOne {
        display: none;
      }
      .navTypeTwo {
        display: block;
        .icon-caidan {
          font-size: 24px;
          color: #6b2ad9;
        }
        .icon-guanbi {
          font-size: 24px;
          color: #d56569;
        }
      }
    }
  }
  .navMobile {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.3);
    left: 0px;
    top: -100vh;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    .navMobileList {
      width: 300px;
      margin: 0 auto;
      height: 0;
      overflow: hidden;
      background-color: #fff;
      box-shadow:0px 4px 20px #9E9E9E;
      border-radius: 20px;
      transition: all 0.45s ease;
      a {
        text-decoration: none;
      }
      .navItem {
        text-align: center;
        font-size: 18px;
        padding: 16px;
        color: rgba(0, 0, 0, 0.87);
      }
      .actived {
        font-weight: 500;
        color: #d56569;
      }
    }
  }
  .navMobileShow {
    top: 0;
    display: flex;
    opacity: 1;
    .navMobileList {
      height: 285px;
    }
  }
</style>
