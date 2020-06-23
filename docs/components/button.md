# Button - 按钮

## 示例

<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>

## 代码

::: details 点击查看源码

```HTML
<div class="row">
  <len-button @click="handleClick">默认按钮</len-button>
  <len-button type="primary">主要按钮</len-button>
  <len-button type="success">成功按钮</len-button>
  <len-button type="info">信息按钮</len-button>
  <len-button type="warning">警告按钮</len-button>
  <len-button type="danger">危险按钮</len-button>
</div>

<div class="row">
  <len-button plain>朴素按钮</len-button>
  <len-button plain type="primary">主要按钮</len-button>
  <len-button plain type="success">成功按钮</len-button>
  <len-button plain type="info">信息按钮</len-button>
  <len-button plain type="warning">警告按钮</len-button>
  <len-button plain type="danger">危险按钮</len-button>
</div>

<div class="row">
  <len-button @click="handleClick" disabled>禁用按钮</len-button>
  <len-button disabled type="primary">主要按钮</len-button>
  <len-button disabled type="success">成功按钮</len-button>
  <len-button disabled type="info">信息按钮</len-button>
  <len-button disabled type="warning">警告按钮</len-button>
  <len-button disabled type="danger">危险按钮</len-button>
</div>

<div class="row">
  <len-button round>圆角按钮</len-button>
  <len-button round type="primary">主要按钮</len-button>
  <len-button round type="success">成功按钮</len-button>
  <len-button round type="info">信息按钮</len-button>
  <len-button round type="warning">警告按钮</len-button>
  <len-button round type="danger">危险按钮</len-button>
</div>

<div class="row">
  <len-button icon="len-icon-search" circle></len-button>
  <len-button icon="len-icon-edit" circle type="primary"></len-button>
  <len-button icon="len-icon-check" circle type="success"></len-button>
  <len-button icon="len-icon-message" circle type="info"></len-button>
  <len-button icon="len-icon-star-off" circle type="warning"></len-button>
  <len-button icon="len-icon-delete" circle type="danger"></len-button>
</div>
```

:::

## API

| 参数名称 | 参数描述       | 参数类型 | 默认值  |
| -------- | -------------- | -------- | ------- |
| type     | primary        | string   | default |
| plain    | 是否是朴素按钮 | boolean  | false   |
| round    | 是否是圆角按钮 | boolean  | false   |
| circle   | 是否是圆形按钮 | boolean  | false   |
| disabled | 是否是禁用按钮 | boolean  | false   |
| icon     | 图标类名       | string   |         |
