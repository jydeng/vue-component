<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import Emitter from "../../mixins/emitter.js";
import { findComponentsDownward } from "../../utils/assist.js";

export default {
  name: "iRadioGroup",
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number, Boolean]
    }
  },
  data() {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  methods: {
    change(data) {
      this.currentValue = data;
      this.$emit("input", data);
      this.$emit("on-change", data);
      this.dispatch("iFormItem", "on-form-change", data);
    },
    updateModel(update) {
      this.childrens = findComponentsDownward(this, "iRadio");
      if (this.childrens) {
        const { value } = this;
        this.childrens.forEach(child => {
          child.model = value;

          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        });
      }
    }
  },
  watch: {
    value() {
      this.updateModel(true);
    }
  },
  created() {
    this.updateModel(true);
  }
};
</script>
