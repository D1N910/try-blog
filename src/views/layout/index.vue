<!-- 页面 layout -->
<template>
  <div
    class="layout">
    <!-- 导航 -->
    <BlogNav
      :routeName="$route"/>
    <!-- 欢迎 -->
    <Welcome />
    <div
      class="layout-content">

      <transition
        appear
        :name="transitionName">

        <keep-alive
          :include="pageCache">

          <router-view
          ></router-view>

        </keep-alive>

      </transition>

    </div>

    <!-- 页脚 -->
    <BlogFooter />
  </div>
</template>

<script>
import BlogNav from './_components/nav'
import BlogFooter from './_components/footer'

import Welcome from './_components/welcome'

export default {
  name: 'layout',

  data () {
    return {
      pageCache: ['index'],
      transitionName: ''
    }
  },

  components: {
    BlogNav,
    BlogFooter,
    Welcome
  },

  methods: {
  },

  created () {
    this.pageCache.push(this.$route.name)
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .layout {
    position: relative;
  }
  .layout-content{
    width: 100%;
    min-height: calc(100vh - 132px);
  }
</style>
