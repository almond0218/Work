import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueCookie from 'vue-cookie'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import createPersistedState from "vuex-persistedstate";
import axios from 'axios'

import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueCookie)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
