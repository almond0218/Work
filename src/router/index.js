import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Main from '@/components/Main.vue'

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Main, meta: { requiresAuth: true } },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isAuthenticated) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
