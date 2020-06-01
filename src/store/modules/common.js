/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/11/22
 * @Time: 10:09
 * @Description:  $
 */
const state = {
  token: '123123',
  network: true, // 断网状态 true 为在线 false 为断网
  isSidebarCollapse: false // 侧边栏是否折叠
}
const getters = {
  get_token(state) {
    return state.token
  }
}
const mutations = {
  set_token(state, token) {
    state.token = token
  },
  set_network(state, network) {
    state.token = network
  },
  set_sidebar_collapse(state, isCollapse) {
    state.isSidebarCollapse = isCollapse
  }
}
const actions = {
  set_token(context, token) {
    context.commit('set_token', token)
  },
  set_network({ commit }, network) {
    commit('set_network', network)
  },
  set_sidebar_collapse({ commit }, isCollapse) {
    commit('set_sidebar_collapse', isCollapse)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
