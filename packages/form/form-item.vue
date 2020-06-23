<template>
  <div class="len-form-item">
    <label class="len-form-item__label" :style="{ width: this.Form.labelWidth }">
      {{ label }}
    </label>
    <div class="len-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LenFormItem',
  props: {
    label: String,
  },
  inject: ['Form'],
}
</script>

<style lang="scss" scoped>
.len-form-item {
  margin-bottom: 25px;
  .len-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606226;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .len-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
