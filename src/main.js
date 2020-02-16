import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.less'
import 'console.img'

// 尝试引入toast失败
// import Toast from '@/plugins/toast'
// Vue.use(Toast)

Vue.config.productionTip = false

/* Api Config */
let api = '/api/'
if (process.env.NODE_ENV === 'development') {
  api = 'http://localhost:3000/'
  api = 'https://www.d1n910.com/api/'
}
axios.defaults.baseURL = api

global.BUS = {}
global.BUS.$axios = Vue.prototype.$axios = axios

console.img('https://i.loli.net/2018/03/27/5ab9c69c922b0.gif')

console.log('博客启动成功💐')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
