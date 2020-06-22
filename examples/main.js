import Vue from 'vue'
import App from './App.vue'
import LenUI from '../packages'

Vue.config.productionTip = false

Vue.use(LenUI)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
