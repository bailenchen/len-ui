<template>
  <div>
    <div class="container">
      <len-tab :active="user" @tab-change="onTabChange">
        <len-tab-panel label="选项1" value="user">内容111</len-tab-panel>
        <len-tab-panel label="选项2" value="role">内容222</len-tab-panel>
        <len-tab-panel label="选项3" value="config">内容333 </len-tab-panel>
      </len-tab>
    </div>
  </div>
</template>

<script>
import LenTab from '../../../packages/tab/tab'
import LenTabPanel from '../../../packages/tab/tab-panel'

export default {
  name: 'tab-demo',
  components: { LenTab, LenTabPanel },
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
}
</script>

<style scoped>
.container {
  max-width: 800px;
  height: 10vh;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}
</style>
