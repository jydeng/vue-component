<template>
  <div>
    <i-heading :level="level"
      >render函数渲染的一段文本，可以方便的改变级别</i-heading
    >
    <button @click="up">up!</button>&emsp; <button @click="down">down!</button>
  </div>
</template>

<script>
import iHeading from "../components/Heading/Heading";
export default {
  components: {
    iHeading
  },
  data() {
    return {
      level: 1
    };
  },
  methods: {
    up() {
      if (this.level > 1) {
        this.level -= 1;
      }
    },
    down() {
      if (this.level < 6) {
        this.level += 1;
      }
    }
  }
};
</script>
