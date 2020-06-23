<template>
  <div class="wrap">
    <div class="row">
      <len-checkbox v-model="active">代码</len-checkbox>
    </div>

    <div class="row">
      <len-checkbox-group v-model="items">
        <len-checkbox label="选项一"></len-checkbox>
        <len-checkbox label="选项二"></len-checkbox>
        <len-checkbox label="选项三"></len-checkbox>
      </len-checkbox-group>
    </div>
  </div>
</template>

<script>
import LenCheckbox from '../../../packages/checkbox/checkbox'
import LenCheckboxGroup from '../../../packages/checkbox/checkbox-group'
import '../../../packages/assets/fonts/font.scss'

export default {
  name: 'radio-demo',
  data() {
    return {
      active: false,
      items: ['选项一', '选项二', '选项三'],
    }
  },
  components: {
    LenCheckbox,
    LenCheckboxGroup,
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
