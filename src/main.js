import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/global.less'

Vue.config.productionTip = false

/* Api Config */
let api = '/api/'
if (process.env.NODE_ENV === 'development') {
  api = 'http://localhost:3000/'
  api = 'https://www.d1n910.cn/api/'
}
axios.defaults.baseURL = api

global.BUS = {}
global.BUS.$axios = Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
