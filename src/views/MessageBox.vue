<template>
  <div>
    <h3>通知框组件</h3>
    <button @click="handleOpen1">输入</button>
    <button @click="handleOpen2">确认</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen1() {
      this.$msgBox
        .showMsgBox({
          title: "添加分类",
          content: "请填写分类名称",
          isShowInput: true
        })
        .then(async () => {})
        .catch(() => {
          // ...
        });
    },
    handleOpen2() {
      this.$msgBox
        .showMsgBox({
          title: "提示",
          content: "确认吗"
        })
        .then(async () => {})
        .catch(() => {
          // ...
        });
    }
  }
};
</script>
