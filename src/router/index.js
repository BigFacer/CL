import Vue from 'vue'
import Router from 'vue-router'
import ZhuanQu from '@/views/zhuanqu/zhuanqu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ZhuanQu',
      component: ZhuanQu
    }
  ]
})
