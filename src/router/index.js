import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[  //注意这里是数组
    movieRouter,mineRouter,cinemaRouter,
    {
      path:'/*',/*默认打开movie */
      redirect:'/movie'
    }
  ]
})
export default router
