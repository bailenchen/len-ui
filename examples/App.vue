<template>
  <div id="app">
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
  </div>
</template>

<script>
export default {
  name: 'App',
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
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 750px;
  margin: 0 auto;
  border: 2px solid #eee;
  border-radius: 12px;
  padding: 12px;
}
.row {
  margin-bottom: 20px;
  .len-button {
    margin-right: 20px;
  }
}
</style>
