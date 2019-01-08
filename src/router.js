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

const SingleArticle = () => import('./views/article/innerPage.vue')
/**
 * 404
 */
const NotFound = () => import('./views/404')

Vue.use(Router)

let router = new Router({
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
      component: Layout,
      children: [{
        path: '/index',
        component: Index,
        name: 'index',
        meta: {
          index: 1,
          title: 'D1n910的🏠'
        }
      },
      {
        path: '/article',
        component: Article,
        name: 'article',
        meta: {
          index: 2,
          title: '文章-D1n910的🏠'
        }
      },
      {
        path: '/singleArticle/:id',
        component: SingleArticle,
        name: 'singleArticle',
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
          title: '404-D1n910的🏠'
        }
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
