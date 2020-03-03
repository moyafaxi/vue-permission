import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const defaultRouter = [
  {
    path: '/',
    redirect: 'index',
    component: () => import('../views/index.vue'),
    children:[      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue')
      }
    ]
  }
]

// 管理员权限路由
export const adminRouter = [
  {
    path: '/',
    redirect: 'index',
    component: () => import('../views/admin.vue'),
    children:[      {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/admin.vue')
      }
    ]
  }
]

// 访客权限路由
export const guestRouter = [
  {
    path: '/',
    redirect: 'index',
    component: () => import('../views/vistor.vue'),
    children:[      {
        path: '/vistor',
        name: 'vistor',
        component: () => import('../views/vistor.vue')
      }
    ]
  }
]


export default new Router({
  routes: defaultRouter
})