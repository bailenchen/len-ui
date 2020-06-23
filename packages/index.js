import Button from './button/button.vue'
import Radio from './radio/radio.vue'
import RadioGroup from './radio/radio-group.vue'
import Checkbox from './checkbox/checkbox.vue'
import CheckboxGroup from './checkbox/checkbox-group.vue'
import Input from './input/input.vue'
import Switch from './switch/switch.vue'
import Form from './form/form.vue'
import FormItem from './form/form-item.vue'
import Tab from './tab/tab.vue'
import TabPanel from './tab/tab-panel.vue'
import Tooltip from './tooltip/tooltip.vue'

import './assets/fonts/font.scss'

const components = [
  Button,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Input,
  Switch,
  Form,
  FormItem,
  Tab,
  TabPanel,
  Tooltip,
]

const install = function(Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
