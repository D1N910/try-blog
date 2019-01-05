import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('./views/layout')
const Index = () => import('./views/index')
const NotFound = () => import('./views/404')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/',
      name: 'index',
      component: Layout,
      children: [{
        path: '/index',
        component: Index,
        name: 'index',
        meta: {
          index: 1,
          title: '首页'
        }
      },
      {
        path: '/404',
        component: NotFound,
        name: '404',
        meta: {
          index: 1,
          title: '首页'
        }
      }]
    }
  ]
})
