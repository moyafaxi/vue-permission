import Vuex from 'vuex'
import Vue from 'vue'
import {adminRouter, guestRouter} from '../router'

Vue.use(Vuex)

function getAsyncRouter (role) {
  if (role === 1) {
    return adminRouter
  } else {
    return guestRouter
  }
}

const store = new Vuex.Store({
  state: {
    permission: 1,
    addRouters: []
  },

  mutations: {
    setRole (state, role) {
      state.permission = role
    },
    setRouters (state, routers) {
      state.addRouters = routers
    }
  },

  actions: {
    generateRoutes ({commit}, role) {
      return new Promise(resove => {
        let accessedRouters = getAsyncRouter(role)
        commit('setRouters', accessedRouters)
        resove()
      })
    }
  },
  getters: {
    permission: state => {
      return state.permission
    },
    addRouters: state => {
      return state.addRouters
    }
  }
})

export default store