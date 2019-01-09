<!-- 页脚 -->
<template>
    <div
      :class="['welcome', referrer !== '' ? 'welcomeActive' : '']">
      <img src="https://ws1.sinaimg.cn/large/006ES7aSgy1fz0nddf35sj308c08c0u9.jpg" alt="">
      欢迎来自 {{referrer}} 的朋友
      <i @click="referrer = ''" class="iconfont icon-guanbi"></i>
    </div>
</template>

<script>
export default {
  name: 'blog-welcome',

  data () {
    return {
      referrer: ''
    }
  },

  mounted () {
    const noShow = ['http://localhost:8080/']
    const clearRe = ['http://', 'https://', '/']
    let saveReferrer = document.referrer
    if (noShow.indexOf(document.referrer) !== -1) {
      return false
    }
    clearRe.forEach(element => {
      saveReferrer = saveReferrer.replace(element, '')
    })
    setTimeout(() => {
      this.referrer = saveReferrer
    }, 1000)
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.welcome {
  position: fixed;
  right: -300px;
  top: 43px;
  z-index: 999;
  background-color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  overflow: hidden;
  transition: all 0.8s ease;
  .icon-guanbi {
    padding: 0 16px;
  }
  img {
    width: 40px;
  }
}
.welcomeActive {
  right: 0px;
}
@media screen and (max-width: 800px) {
  .welcome {
    top: 90px;
  }
}
</style>
