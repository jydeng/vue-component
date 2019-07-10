<template>
  <div class="wrap">
    <iEditor v-model="txt" @dbl_video="dbl_rvideo"></iEditor>
  </div>
</template>
<script>
import iEditor from "../../components/Editor/Editor";
export default {
  components: {
    iEditor
  },
  data() {
    return {
      txt:
        '<p>Initial value.<img  src="http://localhost:3000/upload-files/album/f558133e89bc9.jpg" /><video src="http://localhost:3000/upload-files/album/5a4c31c66e5e8.mp4" controls="controls" controlslist="nodownload" style="max-width: 100%; height: auto;">&nbsp;</video>&nbsp;</p>'
    };
  },
  methods: {
    dbl_rvideo(payload) {
      console.log(payload);
    }
  }
};
</script>
<style scoped>
.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  margin: 0 auto;
  text-align: left;
}
</style>
