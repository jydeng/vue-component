<template>
  <div class="home">
    <h3>Vue-Component</h3>
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Vue组件化开发试验田，开发新组件&尝试组件用法，不定期更新</p>
    <input type="text" v-model.lazy="txt" />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      txt: ""
    };
  },
  watch: {
    txt() {}
  }
};
</script>
