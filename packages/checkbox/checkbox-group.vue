<template>
  <div class="len-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LenCheckboxGroup',
  props: {
    value: {
      type: Array,
    },
  },
  provide() {
    return {
      CheckboxGroup: this,
    }
  },
}
</script>

<style lang="scss" scoped></style>
