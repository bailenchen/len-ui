import Button from './button/button.vue'

import './assets/fonts/font.scss'

const components = [Button]

const install = function(Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
