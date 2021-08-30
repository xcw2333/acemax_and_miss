import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 用户登陆页开始
import user_lodin from '../components/user_lodin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'user_lodin',
    component: user_lodin,
  },
  {
    path: '/home/:id',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to,from,next)=>{
//   console.log(to)
//   next()
// })
export default router
