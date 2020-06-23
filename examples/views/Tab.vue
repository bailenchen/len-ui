<template>
  <div id="app">
    <div class="wrap">
      <len-tab :active="user" @tab-change="onTabChange">
        <len-tab-panel label="选项1" value="user">内容111</len-tab-panel>
        <len-tab-panel label="选项2" value="role">内容222</len-tab-panel>
        <len-tab-panel label="选项3" value="config">内容333 </len-tab-panel>
      </len-tab>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data() {
    return {
      user: 'user',
    }
  },
  methods: {
    onTabChange(index) {
      console.log('len-tab changes: ', index)
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 750px;
  margin: 0 auto;
  border: 2px solid #eee;
  border-radius: 12px;
  padding: 12px;
}
</style>
