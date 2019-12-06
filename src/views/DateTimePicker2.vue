<template>
  <div>
    <mt-datetime-picker
      ref="picker"
      type="date"
      v-model="date"
      cancelText="✗"
      confirmText="✓"
    ></mt-datetime-picker>
    <button @click="openPicker">打开</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: "2019-10-18 15:30:00"
    };
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    }
  }
};
</script>
<style>
.mint-datetime-confirm,
.mint-datetime-cancel {
  font-weight: bold;
  font-size: 20px;
  color: #2cbfbe;
}
</style>
