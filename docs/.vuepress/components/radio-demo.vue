<template>
  <div class="wrap">
    <div class="row">
      <len-radio label="1" v-model="gender">男</len-radio>
      <len-radio label="0" v-model="gender">女</len-radio>
    </div>

    <div class="row">
      <len-radio-group v-model="gender">
        <len-radio label="1">男</len-radio>
        <len-radio label="0">女</len-radio>
      </len-radio-group>
    </div>
  </div>
</template>

<script>
import LenRadio from '../../../packages/radio/radio'
import LenRadioGroup from '../../../packages/radio/radio-group'
import '../../../packages/assets/fonts/font.scss'

export default {
  name: 'radio-demo',
  data() {
    return {
      gender: '',
    }
  },
  components: {
    LenRadio,
    LenRadioGroup
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
</style>
