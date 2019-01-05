<!-- 页面 layout -->
<template>
  <div
    class="layout">
    <BlogNav
      :routeName="$route"/>
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
  </div>
</template>

<script>
import BlogNav from './_components/nav'

export default {
  name: 'layout',

  data () {
    return {
      pageCache: ['index'],
      transitionName: ''
    }
  },

  components: {
    BlogNav
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
  }
</style>
