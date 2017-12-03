import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Values from '@/components/Values'
import Game from '@/components/Game'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Values',
      name: 'Values',
      component: Values
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
