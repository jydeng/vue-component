<template>
  <div style="height: 150px">
    <h3>动态渲染 .vue 文件的组件—— Display</h3>

    <i-display :code="code"></i-display>
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