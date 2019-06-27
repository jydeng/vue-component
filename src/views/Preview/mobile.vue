<template>
  <mobile-preview
    :url="url"
    :width="320"
    :coverWrapStyle="{ display: 'inline-block' }"
  ></mobile-preview>
</template>
<script>
import mobilePreview from "../../components/MobilePreview/MobilePreview";
export default {
  name: "mobile",
  components: {
    mobilePreview
  },
  data() {
    return {
      url: "https://wj.qq.com/s2/3944298/fb68?preview=preview",
      width: 320
    };
  }
};
</script>
