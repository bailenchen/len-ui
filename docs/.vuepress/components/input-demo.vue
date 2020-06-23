<template>
  <div class="wrap">
    <div class="row">
      <len-input
        placeholder="请输入账号"
        v-model="username"
        clearable
      ></len-input>
    </div>

    <div class="row">
      <len-input
        text="password"
        placeholder="请输入密码"
        v-model="password"
        clearable
        show-password
      ></len-input>
    </div>
  </div>
</template>

<script>
import LenInput from '../../../packages/input/input'
import '../../../packages/assets/fonts/font.scss'

export default {
  name: 'radio-demo',
  data() {
    return {
      visible: false,
      username: 'admin',
      password: '123456'
    }
  },
  components: {
    LenInput,
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
