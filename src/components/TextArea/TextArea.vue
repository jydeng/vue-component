<template>
  <div>
    <textarea
      ref="textarea"
      cols="30"
      :rows="limit"
      :value="currentValue"
      @input="input"
      :readonly="!valid"
    ></textarea>
    <div :class="{ novalid: !valid }">
      可输入{{ validInput.length }}/{{ limit }}行
    </div>
  </div>
</template>
<script>
export default {
  name: "iTextArea",
  props: {
    limit: {
      type: Number,
      default: 10
    },
    value: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    validInput() {
      return this.currentValue.trim().split("\n");
    },
    valid() {
      return this.validInput.length <= this.limit;
    }
  },
  data() {
    return {
      currentValue: ""
    };
  },
  watch: {
    value: {
      handler: function(val) {
        this.currentValue = val.join("\n");
      }
    }
  },
  methods: {
    input() {
      if (this.$refs.textarea.value.trim().split("\n").length <= this.limit) {
        this.$emit("input", this.$refs.textarea.value.trim().split("\n"));
      } else {
        this.currentValue = this.$refs.textarea.value
          .trim()
          .split("\n")
          .slice(0, 9)
          .join("\n");
      }
    }
  },
  mounted() {
    this.currentValue = this.value.join("\n");
  }
};
</script>
<style scoped>
.novalid {
  color: red;
}
</style>
