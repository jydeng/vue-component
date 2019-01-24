<template>
  <label>
    <span>
      <input
        type="radio"
        :value="label"
        :checked="currentValue"
        @change="change"
      >
    </span>
    <slot></slot>
  </label>
</template>
<script>
import Emitter from "../../mixins/emitter.js";
import { findComponentUpward } from "../../utils/assist.js";

export default {
  name: "iRadio",
  mixins: [Emitter],
  props: {
    label: {
      type: [Number, String, Boolean]
    },
    value: {
      type: [String, Number, Boolean]
    }
  },
  data() {
    return {
      currentValue: this.value,
      model: "",
      group: false,
      parent: null
    };
  },
  methods: {
    change() {
      if (this.group) {
        this.parent.change(this.label);
      } else {
        this.$emit("input", this.label);
        this.dispatch("iFormItem", "on-form-change", this.label);
      }
    },
    updateModel() {
      this.currentValue = this.value === this.label;
    }
  },
  watch: {
    value() {
      this.updateModel();
    }
  },
  mounted() {
    this.parent = findComponentUpward(this, "iRadioGroup");

    if (this.parent) {
      this.group = true;
    }

    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
    }
  }
};
</script>
