<template>
  <div class="wrap">
    <len-form :model="model" label-width="80px">
      <len-form-item label="用户名">
        <len-input
          placeholder="请输入用户名"
          v-model="model.username"
          clearable
        ></len-input>
      </len-form-item>
      <len-form-item label="密码">
        <len-input
          type="password"
          placeholder="请输入密码"
          v-model="model.password"
          show-password
        ></len-input>
      </len-form-item>
      <len-form-item label="性别">
        <len-radio-group v-model="model.gender">
          <len-radio label="1">男</len-radio>
          <len-radio label="0">女</len-radio>
        </len-radio-group>
      </len-form-item>
      <len-form-item>
        <len-checkbox-group v-model="model.items">
          <len-checkbox label="选项一"></len-checkbox>
          <len-checkbox label="选项二"></len-checkbox>
          <len-checkbox label="选项三"></len-checkbox>
        </len-checkbox-group>
      </len-form-item>
      <len-form-item label="开关">
        <len-switch v-model="model.active"></len-switch>
      </len-form-item>
    </len-form>
  </div>
</template>

<script>
import LenForm from '../../../packages/form/form'
import LenFormItem from '../../../packages/form/form-item'
import LenInput from '../../../packages/input/input'
import LenRadio from '../../../packages/radio/radio'
import LenRadioGroup from '../../../packages/radio/radio-group'
import LenCheckbox from '../../../packages/checkbox/checkbox'
import LenCheckboxGroup from '../../../packages/checkbox/checkbox-group'
import LenSwitch from '../../../packages/switch/switch'
import '../../../packages/assets/fonts/font.scss'

export default {
  name: 'radio-demo',
  data() {
    return {
      model: {
        username: 'admin',
        password: '123456',
        gender: '1',
        items: ['选项一', '选项二', '选项三'],
      },
    }
  },
  components: {
    LenForm,
    LenFormItem,
    LenInput,
    LenRadio,
    LenRadioGroup,
    LenCheckbox,
    LenCheckboxGroup,
    LenSwitch,
  },
}
</script>

<style scoped>
.wrap {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}
</style>
