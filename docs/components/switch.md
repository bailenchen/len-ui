# Switch - 开关

## 示例

<ClientOnly>
  <switch-demo></switch-demo>
</ClientOnly>

## 代码

::: details 点击查看源码

```HTML
<div class="row">
  <len-switch v-model="active"></len-switch>
</div>

<div class="row">
  <len-switch
    v-model="active"
    active-color="skyblue"
    inactive-color="blue"
  ></len-switch>
</div>
```

```Javascript
data() {
  return {
    active: false,
  }
}
```

:::

## API

| 参数名        | 参数描述           | 参数类型                  | 默认值 |
| ------------- | ------------------ | ------------------------- | ------ |
| v-model       | 绑定值             | boolean / string / number | false  |
| name          | name 属性          | string                    | text   |
| activeColor   | 自定义的激活颜色   | string                    |        |
| inactiveColor | 自定义的不激活颜色 | string                    |        |

### 事件支持

| 事件参数 | 事件描述     |
| -------- | ------------ |
| change   | 内容改变事件 |
