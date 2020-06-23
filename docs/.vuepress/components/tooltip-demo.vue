<template>
  <div class="container">
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
  </div>
</template>

<script>
import LenTooltip from '../../../packages/tooltip/tooltip'
import LenButton from '../../../packages/button/button'

export default {
  name: 'tooltips-demo',
  components: { LenTooltip, LenButton },
}
</script>
<style scoped>
.container {
  max-width: 400px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
