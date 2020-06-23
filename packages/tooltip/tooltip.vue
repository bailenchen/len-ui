<template>
  <div
    @mouseenter="handleToggle"
    @mouseleave="handleToggle"
    class="giao-container"
  >
    <slot />
    <div :class="['len-tooltip', placement]" v-show="isVisible">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'LenTooltip',
  props: {
    placement: {
      type: String,
      default: 'top',
    },
    content: String,
  },
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    handleToggle() {
      this.isVisible = !this.isVisible
    },
  },
}
</script>

<style lang="scss" scoped>
$margin: calc(100% + 10px);
@mixin horizontal-alignment {
  left: 50%;
  transform: translateX(-50%);
}

@mixin vertical-aliment {
  top: 50%;
  transform: translateY(-50%);
}

.giao-container {
  display: inline-block;
  position: relative;
}

.len-tooltip {
  padding: 5px 10px;
  background: #303030;
  color: white;
  position: absolute;
  white-space: nowrap;
  z-index: 10;
  border-radius: 4px;

  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    border: 6px solid transparent;
  }

  &.top {
    bottom: $margin;
    @include horizontal-alignment;

    &::before {
      border-top-color: #303030;
      top: 100%;
      @include horizontal-alignment;
    }
  }

  &.bottom {
    top: $margin;
    @include horizontal-alignment;

    &::before {
      border-bottom-color: #303030;
      bottom: 100%;
      @include horizontal-alignment;
    }
  }

  &.left {
    right: $margin;
    @include vertical-aliment;

    &::before {
      border-left-color: #303030;
      left: 100%;
      @include vertical-aliment;
    }
  }

  &.right {
    left: $margin;
    @include vertical-aliment;

    &::before {
      right: 100%;
      border-right-color: #303030;
      @include vertical-aliment;
    }
  }
}
</style>
