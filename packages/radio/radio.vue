<template>
  <label class="len-radio" :class="{ 'is-checked': label === model }">
    <span class="len-radio__input">
      <span class="len-radio__inner"></span>
      <input
        class="len-radio__original"
        type="radio"
        :name="name"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="len-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'LenRadio',
  inject: {
    RadioGroup: {
      default: '',
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    value: null,
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set(val) {
        this.isGroup
          ? this.RadioGroup.$emit('input', val)
          : this.$emit('input', val)
      },
    },
    isGroup() {
      return !!this.RadioGroup
    },
  },
}
</script>

<style lang="scss">
.len-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .len-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .len-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .len-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .len-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.len-radio.is-checked {
  .len-radio__input {
    .len-radio__inner {
      font-size: 14px;
      padding-left: 10px;
    }
  }
}

// 选中样式
.len-radio.is-checked {
  .len-radio__input {
    .len-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .len-radio__label {
    color: #409eff;
  }
}
</style>
