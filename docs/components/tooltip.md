# Tooltip - 提示框

## 示例

<ClientOnly>
  <tooltip-demo></tooltip-demo>
</ClientOnly>

## 代码

:::details 点击查看代码

```HTML
<LenTooltip content="提示文字" placement="left">
  <LenButton>左 - left</LenButton>
</LenTooltip>
<LenTooltip content="提示文字" placement="top">
  <LenButton>上 - top</LenButton>
</LenTooltip>
<LenTooltip content="提示文字" placement="bottom">
  <LenButton>下 - bottom</LenButton>
</LenTooltip>
<LenTooltip content="提示文字" placement="right">
  <LenButton>右 - right</LenButton>
</LenTooltip>
```
:::

## API

| 参数        | 说明             |
| ----------- | ---------------- |
| `content`   | 提示框的内容     |
| `placement` | 提示框出现的方位 |
