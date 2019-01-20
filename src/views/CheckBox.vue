<template>
  <div>
    <h3>CheckBox&CheckBoxGroup组件</h3>
    <iCheckbox v-model="checked">单个测试</iCheckbox>
    {{checked}}
    <iCheckboxGroup>
      选项组测试
      <iCheckbox label="A" v-model="checkedlist">A</iCheckbox>
      <iCheckbox label="B" v-model="checkedlist">B</iCheckbox>
      <iCheckbox label="C" v-model="checkedlist">C</iCheckbox>
    </iCheckboxGroup>
    {{checkedlist}}
  </div>
</template>
<script>
import iCheckbox from "../components/CheckBox/CheckBox.vue";
import iCheckboxGroup from "../components/CheckBox/CheckBoxGroup";
export default {
  components: { iCheckbox, iCheckboxGroup },
  data() {
    return {
      checked: false,
      checkedlist: ["A"]
    };
  }
};
</script>
