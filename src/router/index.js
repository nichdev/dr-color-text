/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/rainbow-text',
    name: 'Rainbow Text',
    component: Home,
    meta: {
      title: 'Dragon Raja Color Text'
    },
  },
  {
    path: '/',
    name: 'Premade',
    component: () => import('../views/Premade.vue')
  },
  {
    path: '/saved-text',
    name: 'Saved Text',
    component: () => import('../views/SaveMsg.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
