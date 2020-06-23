# Tab - 选项卡

## 示例

### 默认样式

<ClientOnly>
  <tab-demo></tab-demo>
</ClientOnly>

::: details 点击查看源码

```HTML
<len-tab :active="user" @tab-change="onTabChange">
  <len-tab-panel label="选项1" value="user">内容111</len-tab-panel>
  <len-tab-panel label="选项2" value="role">内容222</len-tab-panel>
  <len-tab-panel label="选项3" value="config">内容333 </len-tab-panel>
</len-tab>
```

```Javascript
methods: {
  onTabChange(index) {
    console.log('tab changes: ', index)
  },
},
data() {
  return {
    user: 'user',
  }
},
```

:::

### 没有状态条

<ClientOnly>
  <tab-demo-1></tab-demo-1>
</ClientOnly>

::: details 点击查看源码

```HTML
<len-tab :active="user" @tab-change="onTabChange" no-bar>
  <len-tab-panel label="选项1" value="user">内容111</len-tab-panel>
  <len-tab-panel label="选项2" value="role">内容222</len-tab-panel>
  <len-tab-panel label="选项3" value="config">内容333 </len-tab-panel>
</len-tab>
```

```Javascript
methods: {
  onTabChange(index) {
    console.log('tab changes: ', index)
  },
},
data() {
  return {
    user: 'user',
  }
},
```

:::

### 不展示 Tab 内容

<ClientOnly>
  <tab-demo-2></tab-demo-2>
</ClientOnly>

::: details 点击查看源码

```HTML
<len-tab :active="user" @tab-change="onTabChange" only-header>
  <len-tab-panel label="选项1" value="user">内容111</len-tab-panel>
  <len-tab-panel label="选项2" value="role">内容222</len-tab-panel>
  <len-tab-panel label="选项3" value="config">内容333 </len-tab-panel>
</len-tab>
```

```Javascript
methods: {
  onTabChange(index) {
    console.log('tab changes: ', index)
  },
},
data() {
  return {
    user: 'user',
  }
},
```

:::

## API

### Tab

| 参数                          | 说明                                                           | 接受类型           |
| ----------------------------- | -------------------------------------------------------------- | ------------------ |
| `@tab-change`                 | 接受一个回调函数, 在 tab 切换时调用, 第一个参数为 tab 的索引值 | function(e: string | number) |
| `active`                      | 选定默认激活的 tab                                             | string             | number |
| `height`                      | 定义 Tab Header 的高度, 使用 line-height 属性定义              | number             |
| `noBar` or `no-bar`           | 不显示状态条                                                   |                    |
| `onlyHeader` or `only-header` | 不显示 Tab Content                                             |                    |

### `Tab-panel`

| 参数    | 说明                         | 接受类型 |
| ------- | ---------------------------- | -------- |
| `label` | 确定 tab header 所展示的文字 | string   |
| `value` | 标签，供父组件使用           | string   |
