import * as Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/index.scss'
Vue.createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
