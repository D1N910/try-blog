import Vue from 'vue'
import Router from 'vue-router'

/**
 * 布局
 */
const Layout = () => import('./views/layout')

/**
 * 首页
 */
const Index = () => import('./views/index')

/**
 * 文章页面
 */
const Article = () => import('./views/article')

/**
 * 404
 */
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
        path: '/article',
        component: Article,
        name: 'article',
        meta: {
          index: 2,
          title: '文章'
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
