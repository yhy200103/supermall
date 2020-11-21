import Vue from 'vue'
import VueRouter from 'vue-router'
//安装插件
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect:'/home'
  },{
    path:'/cart',
    component:()=>import('views/cart/Cart.vue')
  },{
    path:'/category',
    component:()=>import('views/category/Category.vue')
  },{
    path:'/home',
    component:()=>import('views/home/Home.vue')
  },{
    path:'/profile',
    component:()=>import('views/profile/Profile.vue')
  }
]
//创建路由对象
const router=new VueRouter({
  routes,
  mode:'history'
})
export default router