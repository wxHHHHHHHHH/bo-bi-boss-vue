import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './assets/font/font.css'
import ElementUI from 'element-ui'
import'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


import VueCookies from "vue-cookies";
Vue.use(VueCookies);

import * as request from './utils/request'
Vue.prototype.$http = request;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
