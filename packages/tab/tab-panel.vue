<template>
  <div class="tab-panel" v-show="visible">
    <slot>默认内容</slot>
  </div>
</template>

<script>
export default {
  name: 'LenTabPanel',
  props: {
    label: String,
    value: String,
  },
  data() {
    return {
      visible: false,
    }
  },
}
</script>

<style scoped>
.len-tab-panel {
  padding: 16px 0;
  font-size: 14px;
}
</style>
