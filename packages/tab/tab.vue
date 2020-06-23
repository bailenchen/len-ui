<template>
  <div class="len-tab">
    <div
      :style="{
        borderBottom: noBar ? 'none' : '2px solid #ddd',
        lineHeight: height,
      }"
      class="len-tab-header"
    >
      <span
        :class="['len-tab-item', { active: activeIndex === index }]"
        :style="{ width: spanWidth }"
        v-for="(tab, index) in tabs"
        :key="index"
        @click.stop="handleTagChange(index)"
        ref="header"
        >{{ tab }}</span
      >

      <span class="line" ref="line" v-if="!noBar"></span>
    </div>
    <div class="tab-content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LenTab',
  props: {
    active: String,
    noBar: Boolean,
    height: Number,
    onlyHeader: Boolean,
  },
  data() {
    return {
      tabs: [],
      activeIndex: 0,
      childrenLength: 0,
    }
  },
  computed: {
    spanWidth() {
      return (1 / this.childrenLength) * 100 + '%'
    },
  },
  methods: {
    init(activeName) {
      this.$children.forEach((v, index) => {
        this.tabs.push(v.label)
        if (activeName === v.value) {
          v.visible = true

          this.activeIndex = index
        } else {
          v.visible = false
        }
      })
    },

    loadLine(index) {
      this.$refs.line.style.width = `${this.$refs.header[index].offsetWidth}px`
      this.$refs.line.style.transform = `translateX(${this.$refs.header[index].offsetLeft}px)`
    },

    handleTagChange(index) {
      this.$children[this.activeIndex].visible = false
      let ele = this.$children[index]
      ele.visible = true
      this.activeIndex = index
      if (!this.noBar) {
        this.loadLine(index)
      }

      this.$emit('tab-change', ele.value)
    },
  },

  mounted() {
    this.init(this.active)
    if (!this.noBar) {
      setTimeout(() => {
        this.loadLine(0)
      }, 0)
    }
    if (this.onlyHeader) {
      this.$refs.content.remove()
    }
    this.childrenLength = this.$children.length
  },
}
</script>

<style lang="scss" scoped>
$primary: #409eff;

.len-tab-header {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #303030;
  font-weight: 500;
  position: relative;

  span {
    text-align: center;
  }

  .line {
    position: absolute;
    height: 2px;
    bottom: 0;
    background: $primary;
    transform: translateX(0);
    transition: all 0.3s;
    margin-bottom: -2px;
  }
}

.len-tab-item {
  cursor: pointer;

  &:hover {
    color: $primary;
  }

  &.active {
    color: $primary;
  }
}
</style>
