import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login/Login.vue'
import Main from '@/components/Main/Main'
import User from '@/components/User/User'
import CompanyProfile from '@/components/CompanyProfile/CompanyProfile.vue'
import Staff from '@/components/Staff/Staff.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: 'Login',
    component: Login
  },
  {
    path: "/main",
    name: 'Main',
    component: Main,
    meta: { requiresAuth: true }
  },
  {
    path: "/user",
    name: 'User',
    component: User,
    meta: { requiresAuth: true }
  },
  {
    path: "/CompanyProfile",
    name: 'CompanyProfile',
    component: CompanyProfile,
    meta: { requiresAuth: true }
  },
  {
    path: "/Staff",
    name: 'Staff',
    component: Staff,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 需要登录的页面
    if (!store.getters.isLoggedIn && !Vue.$cookies.isKey('user')) {
      // 未登录，重定向到登录页面
      next('/');
    } else {
      next(); // 已登录，继续访问
    }
  } else {
    next(); // 公共页面，不需要验证登录状态
  }
});
export default router
