<template>
  <div>
    <h3>动态渲染 .vue 文件的组件—— Display</h3>
    <div>
      <h4>代码区</h4>
      <textarea cols="50" rows="10" v-model="code"></textarea>
    </div>
    <div>
      <h4>渲染的结果</h4>
      <i-display :code="code"></i-display>
    </div>
  </div>
</template>
<script>
import iDisplay from "../components/Display/Display";
import defaultCode from "./default-code.js";

export default {
  components: { iDisplay },
  data() {
    return {
      code: defaultCode
    };
  }
};
</script>
