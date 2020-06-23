<template>
  <div class="len-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'LenCollapse',
  props: {
    activeItem: Number,
  },

  data() {
    return {
      eventBus: new Vue(),
    }
  },
  mounted() {
    this.eventBus.$on('close', () => {
      for (let i = 0, len = this.$children.length; i < len; i++) {
        this.$children[i].$refs.item.classList.remove('active')
      }
    })
  },

  provide() {
    return {
      active: this.activeItem,
      eventBus: this.eventBus,
    }
  },
}
</script>

<style scoped>
.len-collapse {
  font-size: 14px;
}
</style>
