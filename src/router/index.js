import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import beforeEach from './guards/beforeEach'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(beforeEach) // 路由前置守卫
export default router
