<!-- 加载中 -->
<template>
  <div
    class="loading cake">
      <img src="https://ws1.sinaimg.cn/large/006ES7aSgy1fyzg4ztvnkj30f90gsq7x.jpg"  alt="这里是loading图片"/>
      加载中吖
  </div>
</template>

<script>
export default {

  name: 'loading-container',

  data () {
    return {
      articleList: [],
      getListData: {
        offset: 0,
        limit: 3
      },
      haveFull: false,
      lock: false
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .loading {
    text-align: center;
    height: 300px;
    width: 300px;
    margin: 0 auto;
    text-align: center;
    flex-direction: column;
    display: flex;
    align-items: center;
    img {
      width: 100px;
    }
  }
  .cake{animation:move 3s 0s infinite;-webkit-animation:move 3s 0s infinite;transform-origin:bottom;-webkit-transform-origin:bottom;}

  @keyframes move
  {
      0%, 65%{
        -webkit-transform:rotate(0deg);
        transform:rotate(0deg);
      }
      70% {
        -webkit-transform:rotate(6deg);
        transform:rotate(6deg);
      }
      75% {
        -webkit-transform:rotate(-6deg);
        transform:rotate(-6deg);
      }
      80% {
        -webkit-transform:rotate(6deg);
        transform:rotate(6deg);
      }
      85% {
        -webkit-transform:rotate(-6deg);
        transform:rotate(-6deg);
      }
      90% {
        -webkit-transform:rotate(6deg);
        transform:rotate(6deg);
      }
      95% {
        -webkit-transform:rotate(-6deg);
        transform:rotate(-6deg);
      }
      100% {
        -webkit-transform:rotate(0deg);
        transform:rotate(0deg);
      }
  }

  @-webkit-keyframes move
  {
      0%, 65%{
        -webkit-transform:rotate(0deg);
        transform:rotate(0deg);
      }
      70% {
        -webkit-transform:rotate(6deg);
        transform:rotate(6deg);
      }
      75% {
        -webkit-transform:rotate(-6deg);
        transform:rotate(-6deg);
      }
      80% {
        -webkit-transform:rotate(6deg);
        transform:rotate(6deg);
      }
      85% {
        -webkit-transform:rotate(-6deg);
        transform:rotate(-6deg);
      }
      90% {
        -webkit-transform:rotate(6deg);
        transform:rotate(6deg);
      }
      95% {
        -webkit-transform:rotate(-6deg);
        transform:rotate(-6deg);
      }
      100% {
        -webkit-transform:rotate(0deg);
        transform:rotate(0deg);
      }
  }
</style>
