import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld2'
import sccx from '@/components/sccx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'HelloWorld',
      //component: HelloWorld
      name:'sccx',
      component:sccx
    }
  ]
})
