<template>
  <div class="len-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LenRadioGroup',
  provide() {
    return {
      RadioGroup: this,
    }
  },
  props: {
    value: null,
  },
}
</script>

<style lang="scss" scoped></style>
