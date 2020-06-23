<template>
  <div
    class="len-switch"
    @click="handleChange"
    :class="{ 'is-checked': this.value }"
  >
    <input class="len-switch__input" type="checkbox" ref="input" :name="name" />
    <span class="len-switch__core" ref="core">
      <span class="len-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LenSwitch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    activeColor: {
      type: String,
      default: '',
    },
    inactiveColor: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.$refs.input.checked = this.value
    this.setBackgroundColor()
  },
  methods: {
    async handleChange() {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.$refs.input.checked = this.value
    },
    setBackgroundColor() {
      if (this.activeColor || this.inactiveColor) {
        let newColor = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = newColor
        this.$refs.core.style.backgroundColor = newColor
      }
    },
  },
  watch: {
    value() {
      this.setBackgroundColor()
    },
  },
}
</script>

<style lang="scss">
.len-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .len-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .len-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .len-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.len-switch.is-checked {
  .len-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .len-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
