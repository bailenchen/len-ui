# Dialog - 对话框

## 示例

<ClientOnly>
  <dialog-demo></dialog-demo>
</ClientOnly>

## 代码

::: details 查看源码

```HTML
<len-dialog width="60%" top="200px" :visible="visible" @click="close">
<ul>
  <li>你好，我是Len-UI</li>
  <li>我还很年轻，期待你的帮助</li>
  <li>感兴趣的话加入到Len-UI的创造中吧</li>
</ul>
<template v-slot:footer>
  <len-button type="primary" @click="visible = false">确定</len-button>
  <len-button @click="visible = false">取消</len-button>
</template>
</len-dialog>

<len-button type="primary" @click="visible = true">Dialog</len-button>
```

```Javascript
data() {
  return {
    visible: false,
  }
},
methods: {
  close(value) {
    this.visible = value
  },
},
```
:::

## API

| 参数名称 | 说明           | 接受类型 | 默认值 |
| -------- | -------------- | -------- | ------ |
| title    | 标题文字       | string   | 提示   |
| width    | dialog 宽度    | string   |        |
| top      | 距离顶部的距离 | string   | 15vh   |
| visible  | 是否显示       | boolean  | false  |
