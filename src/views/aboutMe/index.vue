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
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABtCAYAAACr+O9WAAAGhklEQVR4nO2dX4gVVRzHfzc3yB4UbZddRVaDFJXUMrO/bws9VOSDGIS0RpqBpJj10Cb1kJgFS4RBD6VRQUVJQRFCgQ9B0B8kKkxjfYhiyV2urhRRPbS7Pezv6517PDN35s45Z87v7u/z8mVmzp05zJ3PnXPmzpypjZ04Qh3CV5y3WpZ9zXlboLp45YqqK6AUp6vqCmSwnXNfzvLLM5bdxPlTznW9xHk0Z/mgqGkCicG0tzgXGPPXcfY72MaVnKtzln+Wc5Mx/yLnttI1KoGaJpCQpi3kfIZzDudgwDrkpd9Ikz84JzkPcE54q1ECNU0gIUzD0bqfc2eAbfpmtzF9NedBzt98blxNE4gP067nXMy5hXOHh23FAn49IMExzt85T7ncmJomkJrDa484d+Eo2+hqxYL5lhO/Nk7OdWqaQFyc0+Zyfsa50sE6OwX82mDfrOf8p8xK1TSBuDDtNKeLa4SdygpO7Ktry6xMTRNIO6ah949/ipe5qUozfQPFunWR/wMPOZZx/sCJf9L/bmdliiCKmHYD5zDnWsd1IaKGYac3P9DW5yI3DmDffcL5JOf3eT6spgmkiGnojw34qEi7hgF8Tphx2JdzM0sZqGkCyWPaUs77fVZkloN9i38Ffs0qrKYJJMs03Ef4FOfDnutCRESrhu7NVe7MoU891yQoeznncb7AedZWWE0TSJZp6DsEMUwhosa+/o/zUVshNU0gNtNwP+K/IStiUtuwlYiIpk++Y50GOAdmnePSrmNG3JfDvsd3MZlcqKYJxGbam5ybQ1QAFpgGXZruWW5dnreV2bTO6emm6VqtZi0XgYGPcOKu7AeTC9U0gdhM6+YsdD3MG3VrV+UyVn/4HhHZLcE8mAXjTPNAmoF5cWAq9n23baGaJhCbaX8Gr0VkpBmYF5jqwDjrd6GmCSRp2h7OG6uoSBronwGzFVmEtHPb5Rs1zmkolzbfH/gu8N0cJlLTRJK8l/885zVVVMS8atHKKNPAIuePS31D05R2W40p/T+H/b0LnN1EappIkue0cc5KTDOPStMkk5HBsabpvoE+63o6hPHkhJomkBjGEcnENKpVuVLGpbUSW5UPjJomkOhMQ8sur2EmSePaPr+1Mq4iw4glU9MEkjRtMrVUxKx4e+YcZpo5MjhWvkVpGledYXi+bZRITRNJFzWeM7uuyoqUpT5RJyKinoU9LcvmvgYJchrm4UoIwC/iIiI1TSRdZB/zNzhlW43tYBrnan2+UdMEEl0/rQqkXa+M7ksr0qBIMj51bibPn3Nep9jQn0eBdFHjRQMY6DmOW+cKcvsTlrHCjoevRwjUNIF0UWMAkh8511RUFyf0zhf5Q9EKPPpUJ1LTRJJsPc5JLRUQtALNwdKLtiZrG7aKa8pnMMK5hkhNE0k0/TRY0TdwFxERfXT3503LZ0P/KwdTRGqaSKIxzeRo/ZuqqxAtappAkqb1VlYLC0t7brHOf/X4zDnvnpsPWJfPBtQ0gSRNe47zMc6s1zVGwy5uZaLVCTqoj0Zk3Kqvpgkkadphzjs4KzHN7K/tMvpreT/fIWAowfeTM9U0gdj6afMs85RqwAuGml4braYJxGYaHuPFS2yi/IMqrR/XIWDf/2VbqKYJxGbaQ5z4R2uPpYzil9c599kWqmkCsZmGR56uClkRpQnse+vjZ2qaQLL+Txs2yugA1P55g3M4q5CaJpAs0zA6Jq7+Yxi7vZaySjleNlJfW9Jp5LlHBN/6B5xRmzY6fqF1IWZJbyUjStnAvs00DKhpAilyNxauh53g9PLyu5C0sjKAidiXhV5WrqYJpIhpeMnofZwYysLpC13xwPzQjv085wuXq48FPKGEfamvTO502rnDGEcFnhz9hbOf08mBcOjIQev8EAZ6OJdNceJx1XVpBfOgpgmk5vAVG99xriy7Qhtpr9MCJ999Mfe6Kuif/cy5nrNQa9FETROIC9MAzmnHODe6WrFgcDfVFk7LEAzFUdME4vL5NBxF2zkXc+Ioyz4pdQb42cKvDe4QdmIYUNME4uNJ0FNGouWEvspOD9usmtc40bl0apaJmiaQEM9c46gb4sQVFYxbsjtAHVzzCifulsJjqROWss5R0wQScnQDHIWPG/Pncy7gvNOYrpKLnF8a05Xeda2mCSSGcUS2GdPPc25q8TmMFr2qjW2e4Ww1dvvHnE+3sQ1vqGkCcXntMTQ44EY5F+X4DAbYWsI5lVYwZtQ0gfwPhpVsSnkdRRcAAAAASUVORK5CYII=" alt=""/>
        </div>
        <div class="circleWord">
            <svg width="400px" height="300px" viewBox="0 0 400 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path id="textCircle" d="M 20 100 A 80 80 0 0 0 180 100 A 80 80 0 0 0 20 100" fill="none" stroke="#333"></path>
                </defs>
                <text class="textCircle" fill="#d56569">
                    <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#textCircle">正常操作分析，友好待人</textPath>
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
          class="mainMsgItem"
          v-html="item"
        />
      </div>

      <!-- 联系方式 -->
      <div
        class="mainMsg">
        联系方式
        <div
          class="mainMsgItem"
        >
          <a href="mailto:260002330@qq.com" target="_blank">260002330@qq.com(点击就弹出你的电脑的邮件系统哦)</a>
        </div>
      </div>

      <!-- 其他找到我 -->
      <div
        class="mainMsg">
        在其他可能看到我的地方（挖掘我的黑历史吧）
        <div
          class="mainMsgItem">
          <a href="https://github.com/D1N910" target="_blank">GitHub：D1n910</a>
        </div>
        <div
          class="mainMsgItem">
          <a href="https://space.bilibili.com/12324653" target="_blank">Bilibili: D1n910</a>
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
      imgUrl="http://img.netbian.com/file/2020/0210/b3be458e28848ead9ef38d96e1f29d20.jpg" />
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
        '昵称：蛋糕 / D1n910',
        '性别：男',
        '体重：<del>210</del> 197斤',
        '坐标：广东深圳/<del>广东韶关</del>'
      ],
      otherInfo: [
        '努力做一个友善的人',
        '听得懂人话',
        '喜欢做菜'
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
  // 头像
  .avator {
    position: relative;
    text-align: center;
    padding: 36px 0 36px 0;
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
  .mainMsg {
    color: #6b2ad9;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    padding: 16px;
    .mainMsgItem {
      border-bottom: 1px dashed #000;
    }
    margin-bottom: 16px;
  }
  .circleWord {
    position: absolute;
    width: 400px;
    height: 200px;
    left: calc(50% - 100px);
    top: -70px;
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
  a {
    color: #6b2ad9;
    &::before {
      content: '👉'
    }
    &::after {
      content: '👈'
    }
  }
}
</style>
