import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/sample/Home.vue'
import Work from '../views/sample/Work.vue'
import Service from '../views/sample/Service.vue'
import MatterRoutes from './matter-routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  { ...MatterRoutes }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // ハッシュがある時にはその地点へとスクロールする
    return to.hash ? { selector: to.hash, offset: { x: 0, y: 64 } } : { x: 0, y: 0 }
  }
})

export default router
