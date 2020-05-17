import Vue from 'vue'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'

import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {},
    isAuthenticated: false,
    token: {
      access: '',
      refresh: '',
    },
  },
  plugins: [createPersistedState({
    key: 'a1m0nd.kr',
    storage: {
      getItem: key => VueCookie.get(key),
      setItem: (key, value) =>
        VueCookie.set(key, value),
      removeItem: key => VueCookie.delete(key)
    }
  })],
  mutations: {
    setUser (state, val) {
      state.user = val
    },
    setIsAuthenticated (state, val) {
      state.isAuthenticated = val
    },
    setTokens (state, val) {
      state.token = val
    }
  },
  actions: {
    refreshToken (context, data) {
      axios.post('/api/token/refresh/', data)
        .then((response) => {
          context.dispatch('setTokens', response.data)
          context.commit('setIsAuthenticated', true)
        })
        .catch((error) => {
          if (error.response.status === 401) {
            context.commit('setIsAuthenticated', false)
            if (!router.currentRoute.path.startsWith('/login')) {
              router.replace('/login')
            }
          }
        })
    },
    getUser (context) {
      axios.get('/account/user/')
        .then((response) => {
          context.commit('setUser', response.data)
        })
    },
    register (context, data) {
      axios.post('/account/register/', data)
        .then(() => {
          router.push('/login')
        })
    },
    login (context, data) {
      axios.post('/api/token/', data)
        .then((response) => {
          context.dispatch('setTokens', response.data)
          context.commit('setIsAuthenticated', true)
          router.push('/')
        })
    },
    logout (context, data) {
      context.commit('setIsAuthenticated', false)
      context.commit('setTokens', {
        access: '',
        refresh: '',
      })
    },
    setTokens (context, data) {
      context.commit('setTokens', data)
      axios.defaults.headers.common['Authorization'] = `Bearer ${context.state.accessToken}`
    },
    startWork () {

    },
    endWork () {

    },
  }
})

// axios.defaults.baseURL = 'https://wc8c0forfd.execute-api.ap-northeast-2.amazonaws.com/prod'
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.accessToken}`

export default store
