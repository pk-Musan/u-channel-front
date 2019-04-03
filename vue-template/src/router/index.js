import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import Top from '@/components/Top'
import Board from '@/components/Board'
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
        board: Board
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
