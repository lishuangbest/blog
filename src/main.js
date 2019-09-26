import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import './css/cssImport'

Vue.config.productionTip = false

let startApp = function () {
  axios.get('/static/config.json').then((res) => {
    Vue.prototype.BASE_URL = res.BASE_URL
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
}

startApp()
