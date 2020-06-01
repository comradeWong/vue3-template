/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2020/3/18
 * @Time: 9:33
 * @Description:  路由路径配置
 */

export default [
  {
    path: '/',
    name: 'Home',
    component: import(/* webpackChunkName: "login" */ '../../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../../views/About.vue')
  }
]
