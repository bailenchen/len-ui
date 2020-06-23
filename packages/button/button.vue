<template>
  <button
    class="len-button"
    :class="[
      `len-button-${type}`,
      { plain: plain },
      { round: round },
      { circle: circle },
      { disabled: disabled },
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'LenButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
$primary: #409eff;
$success: #67c23a;
$info: #909399;
$warning: #e6a23c;
$danger: #f56c6c;

@mixin primary {
  background-color: $primary;
  border-color: $primary;
  color: #fff;
}

@mixin success {
  background-color: $success;
  border-color: $success;
  color: #fff;
}

@mixin info {
  background-color: $info;
  border-color: $info;
  color: #fff;
}

@mixin warning {
  background-color: $warning;
  border-color: $warning;
  color: #fff;
}

@mixin danger {
  background-color: $danger;
  border-color: $danger;
  color: #fff;
}

// 默认样式
.len-button {
  display: inline-block;
  line-height: 1;
  padding: 12px 20px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: #fff;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  outline: none;
  transition: 0.1s;
  box-sizing: border-box;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-appearance: none; // 去除系统默认appearance的样

  &:focus,
  &:hover {
    color: $primary;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  [class*='len-icon-'] + span {
    margin-left: 5px;
  }
}
// primary 样式
.len-button-primary {
  @include primary;

  &:focus,
  &:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }

  // plain 样式
  &.plain {
    color: $primary;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }

  &.plain {
    &:focus,
    &:hover {
      @include primary;
    }
  }
}

// success 样式
.len-button-success {
  @include success;

  &:focus,
  &:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }

  &.plain {
    color: $success;
    background: #f0f9eb;
    border-color: #c2e7b0;

    &:focus,
    &:hover {
      @include success;
    }
  }
}
// info 样式
.len-button-info {
  @include info;

  &:focus,
  &:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }

  &.plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;

    &:focus,
    &:hover {
      @include info;
    }
  }
}

// warning 样式
.len-button-warning {
  @include warning;

  &:focus,
  &:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }

  &.plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;

    &:focus,
    &:hover {
      @include warning;
    }
  }
}

// danger 样式
.len-button-danger {
  @include danger;

  &:focus,
  &:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }

  &.plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;

    &:focus,
    &:hover {
      @include danger;
    }
  }
}

// 禁用
.disabled {
  &,
  &:focus,
  &:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}

// 圆角
.round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 圆
.circle {
  border-radius: 50%;
  padding: 12px;
}
</style>
