import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueGtag from 'vue-gtag'
import '@/assets/stylesheets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: {
    id: 'G-QTEGC6WNB7'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
