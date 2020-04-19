import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import iziToast from 'izitoast'
import Modal from './components/others/modal'

Vue.config.productionTip = false
export const EventBus = new Vue();

Vue.component('modal', Modal)
// Vue.prototype.$router = router
Vue.prototype.$axios = axios
Vue.prototype.$iziToast = iziToast 
// Vue.prototype.$eventBus = EventBus
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
