<template>
  <div>
    <!-- <vpdf
      v-for="i in numPages"
      :key="i"
      :src="src"
      :page="i"
      style="width: 100%"
    ></vpdf> -->
    <img src="/xx10.png" alt="">
  </div>
</template>

<script>
import vpdf from "vue-pdf";

var loadingTask = vpdf.createLoadingTask(
  "/rp/test/downloadResources?fileName=S@公共-万国觉醒万里汇通玩法分析报告-V1.0-20190523.pdf"
);

export default {
  components: {
    vpdf
  },
  data() {
    return {
      src: loadingTask,
      numPages: undefined
    };
  },
  mounted() {
    this.src.then(pdf => {
      this.numPages = pdf.numPages;
    });
  }
};
</script>
