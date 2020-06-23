<template>
  <div class="wrap">
    <div class="row">
      <len-button @click="handleClick">默认按钮</len-button>
      <len-button type="primary">主要按钮</len-button>
      <len-button type="success">成功按钮</len-button>
      <len-button type="info">信息按钮</len-button>
      <len-button type="warning">警告按钮</len-button>
      <len-button type="danger">危险按钮</len-button>
    </div>

    <div class="row">
      <len-button plain>朴素按钮</len-button>
      <len-button plain type="primary">主要按钮</len-button>
      <len-button plain type="success">成功按钮</len-button>
      <len-button plain type="info">信息按钮</len-button>
      <len-button plain type="warning">警告按钮</len-button>
      <len-button plain type="danger">危险按钮</len-button>
    </div>

    <div class="row">
      <len-button @click="handleClick" disabled>禁用按钮</len-button>
      <len-button disabled type="primary">主要按钮</len-button>
      <len-button disabled type="success">成功按钮</len-button>
      <len-button disabled type="info">信息按钮</len-button>
      <len-button disabled type="warning">警告按钮</len-button>
      <len-button disabled type="danger">危险按钮</len-button>
    </div>

    <div class="row">
      <len-button round>圆角按钮</len-button>
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
  </div>
</template>

<script>
import LenButton from '../../../packages/button/button'
import '../../../packages/assets/fonts/font.scss'

export default {
  name: 'button-demo',
  data() {
    return {}
  },
  methods: {
    handleClick() {
      console.log(111)
    },
  },
  components: {
    LenButton,
  },
}
</script>

<style scoped>
.wrap {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}

.row {
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
