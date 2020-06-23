<template>
  <div id="app">
    <div class="wrap">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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
