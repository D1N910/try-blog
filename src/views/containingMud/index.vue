<!-- 首页 -->
<template>
  <div
    class="blogPage containingMud">
    <!-- <Tips /> -->
    <div
      v-if="!loading"
      class="containingMudContainer">
      <h1>
        <span class="c6b2ad9">燕子衔泥,</span>
        <span class="cd56569">然后筑巢</span>
      </h1>
      <ContainingMudItem
        v-for="item in getSaidsBoth"
        :key="item.id"
        :propData="item"/>
      <div
        v-if="!haveFull"
        @click="get()"
        class="nothing addMore">
        加载更多
      </div>

      <div
        v-if="haveFull"
        class="nothing">
        没有更多
      </div>
    </div>

    <!-- 加载 -->
    <Loading
      v-if="loading"
      />
  </div>
</template>

<script>
import ContainingMudItem from './_components/containingMudItem.vue'
import { apiGet } from '@/utils'
import Loading from '@/components/loading'

export default {

  name: 'containing-mud',

  data () {
    return {
      loading: true,
      getSaidsBoth: [],
      getSaidsBothData: {
        offset: 0,
        limit: 6
      },
      haveFull: false,
      lock: false
    }
  },

  components: {
    ContainingMudItem,
    Loading
    // Tips
  },

  methods: {
    get () {
      if (this.lock) {
        return false
      }
      this.lock = true
      if (this.haveFull) {
        return false
      }
      apiGet('getSaidsBoth', this.getSaidsBothData).then(res => {
        if (res.statusCode === 200) {
          console.log(res)
          const oldLength = parseInt(this.getSaidsBoth.length)
          res.content.forEach(element => {
            const thisData = element.createdAt
            const d = new Date(thisData)
            element.createdAt = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
            element.show = false
          })
          this.getSaidsBoth.push(...res.content)
          for (let i in res.content) {
            i = parseInt(i)
            setTimeout(() => {
              this.getSaidsBoth[parseInt(oldLength + i)].show = true
              this.$set(this.getSaidsBoth, parseInt(oldLength + i), this.getSaidsBoth[parseInt(oldLength + i)])
            }, i * 60)
          }
          this.getSaidsBothData.offset += this.getSaidsBothData.limit
          if (res.content.length < this.getSaidsBothData.limit) {
            this.haveFull = true
          }
        }
      }).then(() => {
        this.loading = false
        this.lock = false
      })
    }
  },

  mounted () {
    this.get()
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .containingMudContainer {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    h1 {
      padding: 16px;
      font-size: 28px;
    }
  }
  .nothing {
    position: relative;
    z-index: 2;
    padding: 10px 0;
    text-align: center;
    font-weight: 400;
    color: #a282d9;
    box-shadow:inset 0 1px rgba(0,0,0,0.05),0 8px 16px rgba(0,0,0,0.05);
    background-color: rgba(255, 255, 255, 0.7);
    margin: 16px 0;
  }
  .addMore {
    color: #a282d9;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: #6b2ad9;
    }
    margin: 16px 0;
  }
</style>
