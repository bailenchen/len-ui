# Radio - 单选框

## 示例

<ClientOnly>
  <radio-demo></radio-demo>
</ClientOnly>

## 代码

::: details 点击查看源码

```HTML
<div class="row">
  <len-radio label="1" v-model="gender">男</len-radio>
  <len-radio label="0" v-model="gender">女</len-radio>
</div>

<div class="row">
  <len-radio-group v-model="gender">
    <len-radio label="1">男</len-radio>
    <len-radio label="0">女</len-radio>
  </len-radio-group>
</div>
```

```Javascript
data() {
  return {
    gender: '',
  }
}
```

:::

## API

### Radio

| 参数名称 | 参数描述          | 参数类型                  | 默认值 |
| -------- | ----------------- | ------------------------- | ------ |
| v-model  | 绑定值            | boolean / string / number | false  |
| label    | 单选框的 value 值 | boolean / string / number |        |
| name     | name 属性         | string                    |        |

### Radio-group

| 参数名称 | 参数描述 | 参数类型                  | 默认值 |
| -------- | -------- | ------------------------- | ------ |
| v-model  | 绑定值   | boolean / string / number | false  |
