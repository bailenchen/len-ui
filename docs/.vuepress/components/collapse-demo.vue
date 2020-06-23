<template>
  <div class="container">
    <len-collapse :activeItem="active">
      <len-collapse-item header="一致性 Consistency" name="1">
        <div class="item-content">
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；<br />
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
        </div>
      </len-collapse-item>
      <len-collapse-item header="反馈 Feedback" name="2">
        <div>
          控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；<br />
          页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
        </div>
      </len-collapse-item>
      <len-collapse-item header="效率 Efficiency" name="3">
        <p>
          简化流程：设计简洁直观的操作流程；<br />
          清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；<br />
          帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。<br />
        </p>
      </len-collapse-item>
      <len-collapse-item header="可控 Controllability" name="4">
        <p>
          用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；<br />
          结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。<br />
        </p>
      </len-collapse-item>
    </len-collapse>
  </div>
</template>

<script>
import LenCollapse from '../../../packages/collapse/collapse'
import LenCollapseItem from '../../../packages/collapse/collapse-item'

export default {
  name: 'collapse-demo',
  data() {
    return {
      active: 3,
    }
  },

  components: { LenCollapse, LenCollapseItem },
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}
</style>
