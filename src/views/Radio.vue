<template>
  <div>
    <h3>单选框组件——Radio</h3>
    单独使用：
    <i-radio v-model="picked" label="One">One</i-radio>
    <i-radio v-model="picked" label="Two">Two</i-radio>
    选中：{{ picked }}
    <div>
      <i-radio-group v-model="mu">
        组：
        <i-radio label="A">A</i-radio>
        <i-radio label="B">B</i-radio>
        <i-radio label="C">C</i-radio>
        选中：{{ mu }}
      </i-radio-group>
    </div>
  </div>
</template>
<script>
import iRadio from "../components/Radio/Radio";
import iRadioGroup from "../components/Radio/RadioGroup";
export default {
  components: { iRadio, iRadioGroup },
  data() {
    return {
      picked: "One",
      mu: "A"
    };
  }
};
</script>
