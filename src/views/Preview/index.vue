<template>
  <div>
    <h3>
      <router-link to="pc">PC</router-link> &
      <router-link to="mobile">Mobile</router-link> 上的效果预览
    </h3>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "preview"
};
</script>
