<template>
  <div class="wrap">
    <div class="row">
      <len-switch v-model="active"></len-switch>
    </div>

    <div class="row">
      <len-switch
        v-model="active"
        active-color="skyblue"
        inactive-color="blue"
      ></len-switch>
    </div>
  </div>
</template>

<script>
import LenSwitch from '../../../packages/switch/switch'
import '../../../packages/assets/fonts/font.scss'

export default {
  name: 'radio-demo',
  data() {
    return {
      active: false,
    }
  },
  components: {
    LenSwitch,
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
