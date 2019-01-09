<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    if (document.getElementById('loading')) {
      document.getElementById('loading').remove()
    }
  }
}
</script>

<style lang="less">
  .blogPage {
    min-height: calc(100vh - 132px);
    background-color: #ededed;
  }
  .c6b2ad9 {
    color: #6b2ad9;
  }
  .cd56569 {
    color: #d56569;
  }
  .b6b2ad9 {
    background-color: #6b2ad9;
  }
  .bd56569 {
    background-color: #d56569;
  }
  @media screen and (max-width: 800px) {
    .blogPage {
      padding-top: 88px;
    }
  }
</style>
