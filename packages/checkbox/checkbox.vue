<template>
  <label class="len-checkbox" :class="{ 'is-checked': isChecked }">
    <span class="len-checkbox__input">
      <span class="len-checkbox__inner"></span>
      <input
        type="checkbox"
        class="len-checkbox__original"
        :name="name"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="len-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'LenCheckbox',
  inject: {
    CheckboxGroup: {
      default: '',
    },
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set(val) {
        this.isGroup
          ? this.CheckboxGroup.$emit('input', val)
          : this.$emit('input', val)
      },
    },
    isGroup() {
      return !!this.CheckboxGroup
    },
    isChecked() {
      return this.isGroup ? this.model.includes(this.label) : this.model
    },
  },
}
</script>

<style lang="scss">
.len-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .len-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .len-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .len-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .len-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

// 选中样式
.len-checkbox.is-checked {
  .len-checkbox__input {
    .len-checkbox__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .len-checkbox__label {
    color: #409eff;
  }
}
</style>
