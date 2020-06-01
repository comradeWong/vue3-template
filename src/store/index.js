import {} from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import persistedState from 'vuex-persistedstate' // vuex数据持久化工具
import common from './modules/common'

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    common
  },
  strict: debug,
  plugins: debug
    ? [createLogger(), persistedState({ storage: window.sessionStorage })]
    : [persistedState({ storage: window.sessionStorage })]
})
