<template>
  <div id="app">
    <div class="wrap">
      <len-tooltip content="提示文字" placement="left">
        <len-button>左 - left</len-button>
      </len-tooltip>
      <len-tooltip content="提示文字" placement="top">
        <len-button>上 - top</len-button>
      </len-tooltip>
      <len-tooltip content="提示文字" placement="bottom">
        <len-button>下 - bottom</len-button>
      </len-tooltip>
      <len-tooltip content="提示文字" placement="right">
        <len-button>右 - right</len-button>
      </len-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 750px;
  border: 2px solid #eee;
  border-radius: 12px;
  padding: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
</style>
