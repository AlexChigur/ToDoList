import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Default from '@/layouts/default'
import baseFooter from '@/components/Base/BaseFooter/BaseFooter'

export default new VueRouter({
  routes:[
    {
      path:'/default/:id',
      name:'default',
      component: Default
    },

    {
      path: '/baseFooter',
      name: 'baseFooter',
      component: baseFooter
    }
  ]
})