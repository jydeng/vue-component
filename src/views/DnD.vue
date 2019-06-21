<template>
  <div>
    <!-- 调用组件  -->
    <draggable element="ul" v-model="list">
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </draggable>
    <!-- 输出list数据 -->
    {{ list }}
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
        { id: 3, name: "c" },
        { id: 4, name: "d" },
        { id: 5, name: "e" },
        { id: 6, name: "f" }
      ]
    };
  }
};
</script>
<style scoped>
ul li {
  list-style: none;
  padding: 5px 0;
  margin: 5px 0;
  border: 1px solid #ddd;
}
</style>
