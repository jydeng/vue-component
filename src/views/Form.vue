<template>
  <div>
    <h3>具有数据校验功能的表单组件——Form</h3>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item prop="agree" label="同意">
        <i-checkbox v-model="formValidate.agree" true-value="1" false-value></i-checkbox>
      </i-form-item>
      <i-form-item label="兴趣">
        <i-checkbox-group v-model="formValidate.fun">
          <i-checkbox label="option1">选项 1</i-checkbox>
          <i-checkbox label="option2">选项 2</i-checkbox>
          <i-checkbox label="option3">选项 3</i-checkbox>
          <i-checkbox label="option4">选项 4</i-checkbox>
        </i-checkbox-group>
      </i-form-item>
      <i-form-item label="单选" prop="picked">
        <i-radio-group v-model="formValidate.picked">
          <i-radio label="A">A</i-radio>
          <i-radio label="B">B</i-radio>
          <i-radio label="C">C</i-radio>
        </i-radio-group>
      </i-form-item>
    </i-form>
    <div>
      <button @click="handleSubmit">提交</button>
      <button @click="handleReset">重置</button>
    </div>
  </div>
</template>
<script>
import iForm from "../components/Form/Form";
import iFormItem from "../components/Form/FormItem";
import iInput from "../components/Input/Input";
import iCheckbox from "../components/CheckBox/CheckBox";
import iCheckboxGroup from "../components/CheckBox/CheckBoxGroup";
import iRadio from "../components/Radio/Radio";
import iRadioGroup from "../components/Radio/RadioGroup";

export default {
  components: {
    iForm,
    iFormItem,
    iInput,
    iCheckbox,
    iCheckboxGroup,
    iRadio,
    iRadioGroup
  },
  data() {
    return {
      formValidate: {
        name: "Roy",
        mail: "jydeng@live.cn",
        agree: "1",
        fun: [],
        picked: "A"
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" }
        ],
        agree: [
          { required: true, message: "请勾选用户协议", trigger: "change" }
        ],
        picked: [{ required: true, message: "请选择", trigger: "change" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert("提交成功");
        } else {
          window.alert("表单校验失败");
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
