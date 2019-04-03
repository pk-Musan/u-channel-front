import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import Top from '@/components/Top'
import Board from '@/components/Board'

Vue.use(Element, { locale })
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      components: {
        top: Top
      }
    },
    {
      path: '/:value',
      name: 'top',
      components: {
        top: Top
      }
    },
    {
      path: '/university/:value',
      name: 'university_name',
      components: {
        board: Board
      }
    }
  ]
})
