<template>
  <div id="app">
    <div class="wrap">
      <div class="row">
        <len-button @click="fn">默认按钮</len-button>
        <len-button type="primary">主要按钮</len-button>
        <len-button type="success">成功按钮</len-button>
        <len-button type="info">信息按钮</len-button>
        <len-button type="warning">警告按钮</len-button>
        <len-button type="danger">危险按钮</len-button>
      </div>

      <div class="row">
        <len-button>默认按钮</len-button>
        <len-button plain type="primary">主要按钮</len-button>
        <len-button plain type="success">成功按钮</len-button>
        <len-button plain type="info">信息按钮</len-button>
        <len-button plain type="warning">警告按钮</len-button>
        <len-button plain type="danger">危险按钮</len-button>
      </div>

      <div class="row">
        <len-button>默认按钮</len-button>
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

      <div class="row">
        <len-button @click="fn" disabled>默认按钮</len-button>
        <len-button disabled type="primary">主要按钮</len-button>
        <len-button disabled type="success">成功按钮</len-button>
        <len-button disabled type="info">信息按钮</len-button>
        <len-button disabled type="warning">警告按钮</len-button>
        <len-button disabled type="danger">危险按钮</len-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn(e) {
      console.log(e)
      console.log('Hello Len-UI')
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
.row {
  margin-bottom: 20px;
  .len-button {
    margin-right: 20px;
  }
}
</style>
