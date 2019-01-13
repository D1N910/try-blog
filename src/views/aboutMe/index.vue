<!-- 关于我-->
<template>
  <div
    class="blogPage aboutMe">
    <!-- <Tips /> -->
    <div
      v-if="!loading"
      class="aboutMeContainer">
      <!-- 头像 -->
      <div
        class="avator">
        <div
          class="avatorImg">
          <img src="https://ws1.sinaimg.cn/large/006ES7aSgy1fz1qixts7mj305k05k3yd.jpg" alt="">
        </div>
        <div class="circleWord">
            <svg width="400px" height="300px" viewBox="0 0 400 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path id="textCircle" d="M 20 100 A 80 80 0 0 0 180 100 A 80 80 0 0 0 20 100" fill="none" stroke="#333"></path>
                </defs>
                <text class="textCircle" fill="#d56569">
                    <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#textCircle">正常操作，正常分析</textPath>
                </text>
            </svg>
        </div>
      </div>
      <!-- 核心信息 -->
      <div
        class="mainMsg">
        基本信息：
        <div
          v-for="(item, index) in mainMsgItemList"
          :key="index"
          class="mainMsgItem">
          {{item}}
        </div>
      </div>

      <!-- 联系方式 -->
      <div
        class="mainMsg">
        联系方式
        <div
          class="mainMsgItem">
          <a href="mailto:260002330@qq.com"> 260002330@qq.com(点击就弹出你的电脑的邮件系统哦)</a>
        </div>
      </div>

      <!-- 其他找到我 -->
      <div
        class="mainMsg">
        其他找到我
        <div
          class="mainMsgItem">
          <a href="https://github.com/D1N910" target="_blank">GitHub：D1n910</a>
        </div>
      </div>

      <!-- 其他信息 -->
      <div
        class="mainMsg">
        其他信息
        <div
          v-for="(item, index) in otherInfo"
          :key="index"
          class="mainMsgItem">
          {{item}}
        </div>
      </div>
    </div>
    <BackgroundImg
      v-if="!loading"
      imgUrl="https://ws1.sinaimg.cn/large/006ES7aSgy1fz5alfpbzmj30zk0lmaeg.jpg" />
    <!-- <Loading
      v-if="loading"
      /> -->
  </div>
</template>

<script>
import BackgroundImg from '@/components/backgroundImg.vue'
// import Loading from '@/components/loading'

export default {

  name: 'about-me',

  data () {
    return {
      loading: false,
      mainMsgItemList: [
        '绰号：蛋糕',
        '性别：男',
        '体重：210斤',
        '坐标：广东深圳/广东韶关'
      ],
      otherInfo: [
        '性格差',
        '话痨',
        '话痨',
        '话痨',
        '话痨',
        '听得懂人话',
        '非常想进7710'
      ]
    }
  },

  components: {
    BackgroundImg
    // Loading
  },

  methods: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.aboutMeContainer {
  position: relative;
  z-index: 3;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 16px;
  .mainMsg {
    margin-top: 40px;
    color: #6b2ad9;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    padding: 16px;
    .mainMsgItem {
      border-bottom: 1px dashed #000;
    }
  }
  .avator {
    position: relative;
    text-align: center;
    margin: 36px 0 0 0;
    .avatorImg {
      display:inline-block;
      overflow: hidden;
      border-radius: 100px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
  .circleWord {
    position: absolute;
    width: 400px;
    height: 200px;
    left: calc(50% - 100px);
    top: -100px;
  }
  .textCircle {
      font-size: 20px;
      letter-spacing: 4px;
      font-weight: 500;
  }
  .textCircle2 {
      font-size: 12px;
      letter-spacing: 1px;
  }
}
</style>
