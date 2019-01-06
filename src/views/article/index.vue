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
        v-for="(item, index) in 0"
        :key="index">
        <div class="list-item prose">
            <h3>
              <a href="/google-congress-hearing">#76 国会又在问硅谷巨头蠢问题了！但也许没我们想象得那么蠢？</a>
            </h3>
            <h6>
              <span>
                  <i class="fas fa-podcast"></i> Episode &nbsp;|&nbsp;
                <i class="far fa-calendar-alt"></i> December 21st, 2018
                &nbsp;|&nbsp;
                <i class="far fa-clock"></i> 49 mins 49 secs
              </span>
            </h6>
              <h6>
                <span>
                  <i class="fas fa-tag"></i> culture, politics, tech
                </span>
              </h6>

          </div>
      </li>
    </ul>

    <!-- 背景图 -->
    <BackgroundImg
      imgUrl="http://ppe.oss-cn-shenzhen.aliyuncs.com/collections/129/9/thumb.jpg"/>

  </div>
</template>

<script>
import BackgroundImg from '@/components/backgroundImg.vue'

export default {

  name: 'blog-article',

  data () {
    return {
    }
  },

  components: {
    BackgroundImg
  },

  methods: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .hero {
    position: relative;
    z-index: 2;
    color: #000;
    text-shadow: 0 0.0625em 0.5em rgba(255, 255, 255,0.25);
    height: 300px;
    text-align: center;
    line-height: 300px;
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
  }
</style>
