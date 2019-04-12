/*
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    }
  ]
})
*/
import Vue from 'vue'
import Router from 'vue-router'
// import Bootstrap from 'bootstrap-vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

import Top from '@/components/Top'
import Board from '@/components/Board'
import Message from '@/components/Message'
import Region from '@/components/Region'
import Prefecture from '@/components/Prefecture'
import University from '@/components/University'

Vue.use(Element, { locale })
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      components: {
        top: Top
      }
    },
    {
      path: '/region',
      name: 'region',
      components: {
        top: Top,
        search: Region
      }
    },
    {
      path: '/prefecture',
      name: 'prefecture',
      components: {
        top: Top,
        search: Prefecture
      }
    },
    {
      path: '/:filter/:name/',
      name: 'universities',
      components: {
        top: Top,
        search: University
      }
    },
    {
      path: '/university/:name',
      name: 'university',
      components: {
        top: Top,
        board: Board,
        message: Message
      }
    },
    {
      path: '*',
      components: {
        top: Top
      }
    }
  ]
})
