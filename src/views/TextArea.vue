<template>
  <div>
    <iTextArea v-model="arr"></iTextArea>
  </div>
</template>
<script>
import iTextArea from "../components/TextArea/TextArea";
export default {
  components: {
    iTextArea
  },
  data() {
    return {
      arr: []
    };
  }
};
</script>

