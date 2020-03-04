# vue-permission

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

## 介绍

通过router.addRoutes实现异步路由动态加载的demo

## 具体实现

1. 创建vue实例的时候将vue-router挂载，开始只挂在通用页面路由
2. 通过接口获取角色之后匹配对应路由表
3. 通过router.addRoutes动态添加用户角色可访问的路由
4. 使用vuex管理路由数据
