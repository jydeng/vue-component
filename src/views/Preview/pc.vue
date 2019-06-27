<template>
  <div style="margin-top: 10px;">
    <iframe
      :height="height"
      :width="width"
      :src="url"
      frameborder="0"
      allowfullscreen
      sandbox="allow-scripts allow-top-navigation allow-forms allow-same-origin"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "pc",
  data() {
    return {
      height: window.innerHeight - 100,
      width: window.innerWidth,
      url: "https://wj.qq.com/s2/3944298/fb68?preview=preview"
    };
  }
};
</script>
