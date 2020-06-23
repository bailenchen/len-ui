# Checkbox - 多选框

## 示例

<ClientOnly>
  <checkbox-demo></checkbox-demo>
</ClientOnly>

## 代码

::: details 点击查看源码

```HTML
<div class="row">
  <len-checkbox v-model="active">代码</len-checkbox>
</div>

<div class="row">
  <len-checkbox-group v-model="items">
    <len-checkbox label="选项一"></len-checkbox>
    <len-checkbox label="选项二"></len-checkbox>
    <len-checkbox label="选项三"></len-checkbox>
  </len-checkbox-group>
</div>
```

```Javascript
data() {
  return {
    active: false,
    items: ['选项一', '选项二', '选项三'],
  }
},
```

:::

## API

### Checkbox
| 参数名称 | 参数描述          | 参数类型                  | 默认值 |
| -------- | ----------------- | ------------------------- | ------ |
| v-model  | 绑定值            | boolean / string / number | false  |
| label    | 单选框的 value 值 | boolean / string / number |        |
| name     | name 属性         | string                    |        |

### Checkbox-group
| 参数名称 | 参数描述          | 参数类型                  | 默认值 |
| -------- | ----------------- | ------------------------- | ------ |
| v-model  | 绑定值            | boolean / string / number | false  |