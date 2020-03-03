import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局路由守卫
router.beforeEach(async(to, from, next) => {
  if (store.getters.addRouters.length > 0) {
    next()
  } else {
    let isAdmin = 2
    await store.dispatch('generateRoutes',isAdmin)
    router.addRoutes(store.getters.addRouters)
    next(to.path)
  }
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
