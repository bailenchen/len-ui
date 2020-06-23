<template>
  <div class="container">
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
</template>

<script>
import LenDialog from '../../../packages/dialog/dialog'
import LenButton from '../../../packages/button/button'

export default {
  name: 'dialog-demo',

  components: { LenDialog, LenButton },
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
