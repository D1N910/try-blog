<template>
  <a target="_blank" :href="propUrl">
    <div
      class="cardItem">
      <!-- 信息 -->
      <!-- 头像 --><img class="avactor" :src="propImgUrl" alt="">
      <div
        class="msg">
        <!-- 标题 -->
        <div
          class="title">
          {{propTitle}}
        </div>
        <!-- 个人介绍 -->
        <div
          class="produce">
          {{propProduce}}
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'card-item',

  props: {
    propImgUrl: {
      type: String,
      default () {
        return ''
      }
    },

    propTitle: {
      type: String,
      default () {
        return ''
      }
    },
    propUrl: {
      type: String,
      default () {
        return ''
      }
    },
    propProduce: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.cardItem {
  break-inside: avoid;
  box-sizing: border-box;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 10px;
  padding: 20px;
  box-shadow:inset 0 1px rgba(0,0,0,0),0 8px 16px rgba(0,0,0,0);
  transition: all 0.5s;
  &:hover {
    box-shadow:inset 0 1px rgba(0,0,0,0.10),0 8px 16px rgba(0,0,0,0.10);
  }
  img {
    background-color: #fff;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border:2px solid #fff;
  }
  .title {
    font-weight: 500;
    color: #6b2ad9;
    padding: 0 0 8px 0;
  }
  .produce {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    text-align: left;
    padding: 0 8px;
  }
}
</style>
