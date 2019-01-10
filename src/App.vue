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
</style>
