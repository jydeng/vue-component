<template>
  <div class="wrap">
    <iEditor
      v-model="txt"
      :rimage="rimage"
      :rvideo="rvideo"
      :rlink="rlink"
    ></iEditor>
    <iEditor
      v-model="txt"
      :rimage="rimage"
      :rvideo="rvideo"
      :rlink="rlink"
    ></iEditor>
    <iEditor
      v-model="txt"
      :rimage="rimage"
      :rvideo="rvideo"
      :rlink="rlink"
    ></iEditor>
    <iEditor
      v-model="txt"
      :rimage="rimage"
      :rvideo="rvideo"
      :rlink="rlink"
      @dbl_rimage="dbl_rvideo"
    ></iEditor>
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
        "<p>Initial value.<img class='mod_rimage' src='http://localhost:3000/upload-files/album/4c26d33489f19.jpg' /><a class='mod_rlink' href='xx'>xxx</a></p>",
      rimage: {
        callback: function(...all) {
          console.log(all);
        }
      },
      rvideo: {
        callback: function(...all) {
          console.log(all);
        }
      },
      rlink: {
        callback: function(...all) {
          console.log(all);
        }
      }
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
