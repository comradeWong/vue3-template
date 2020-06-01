/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2020/3/18
 * @Time: 9:48
 * @Description:  全局路由前置守卫
 */
export default (to, from, next) => {
  // if (to.path == '/login' || to.path == '/register') {
  //   next()
  // } else {
  //   alert('您还没有登录，请先登录')
  //   next('/login')
  // }
  next()
}
