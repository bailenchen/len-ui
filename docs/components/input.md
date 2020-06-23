# Input - 输入框

## 示例

<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>

## 代码

::: details 点击查看源码

```HTML
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
```

```Javascript
data() {
  return {
    visible: false,
    username: 'admin',
    password: '123456'
  }
}
```

:::

## API

| 参数名        | 参数描述                   | 参数类型 | 默认值 |
| ------------- | -------------------------- | -------- | ------ |
| placeholder   | 占位符                     | string   |        |
| type          | 文本框类型(text、password) | string   | text   |
| disabled      | 禁用                       | boolean  | false  |
| clearable     | 是否显示清空按钮           | boolean  | false  |
| show-password | 是否显示密码切换按钮       | boolean  | false  |
| name          | name 属性                  | string   |        |

### 事件支持

| 事件参数 | 事件描述     |
| -------- | ------------ |
| blur     | 失去焦点事件 |
| change   | 内容改变事件 |
| focus    | 获得焦点事件 |
