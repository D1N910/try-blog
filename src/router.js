import Vue from 'vue'
import Router from 'vue-router'

/**
 * 布局
 */
const Layout = () => import('./views/layout')

/**
 * 首页
 */
// const Index = () => import('./views/index')

/**
 * 文章页面
 */
// const Article = () => import('./views/article')

// const SingleArticle = () => import('./views/article/innerPage.vue')

/**
 * 自制
 */
// const DoneByMySelf = () => import('./views/doneByMySelf')

/**
 * 书籍
 */
// const ReadBook = () => import('./views/readBook')

/**
 * 404
 */
const NotFound = () => import('./views/404')

/**
 * 我的链接
 */
// const MyFriend = () => import('./views/myFriend')

/**
 * 衔泥
 */
const ContainingMud = () => import('./views/containingMud')

/**
 * 关于我
 */
const AboutMe = () => import('./views/aboutMe')

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
      redirect: '/containingMud'
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/containingMud',
          component: ContainingMud,
          name: 'containingMud',
          meta: {
            index: 3,
            title: '衔泥-D1n910的家🏠'
          }
        },
        {
          path: '/aboutMe',
          component: AboutMe,
          name: 'aboutMe',
          meta: {
            index: 3,
            title: '关于我-D1n910的家🏠'
          }
        },
        // {
        //   path: '/index',
        //   component: Index,
        //   name: 'index',
        //   meta: {
        //     index: 1,
        //     title: 'D1n910的家🏠'
        //   }
        // },
        // {
        //   path: '/article',
        //   component: Article,
        //   name: 'article',
        //   meta: {
        //     index: 2,
        //     title: '文章-D1n910的家🏠'
        //   }
        // },
        // {
        //   path: '/singleArticle/:id',
        //   component: SingleArticle,
        //   name: 'singleArticle',
        //   meta: {
        //     index: 2,
        //     title: '文章'
        //   }
        // },
        // {
        //   path: '/doneByMySelf',
        //   component: DoneByMySelf,
        //   name: 'doneByMySelf',
        //   meta: {
        //     index: 3,
        //     title: '自制-D1n910的家🏠'
        //   }
        // },
        // {
        //   path: '/readBook',
        //   component: ReadBook,
        //   name: 'readBook',
        //   meta: {
        //     index: 3,
        //     title: '书籍-D1n910的家🏠'
        //   }
        // },
        // {
        //   path: '/myFriend',
        //   component: MyFriend,
        //   name: 'myFriend',
        //   meta: {
        //     index: 3,
        //     title: '友链-D1n910的家🏠'
        //   }
        // },
        {
          path: '/404',
          component: NotFound,
          name: '404',
          meta: {
            index: 1,
            title: '404-D1n910的家🏠'
          }
        }
      ]
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
