<template>
  <div class="wrap" :style="wrapStyle">
    <iframe
      :src="url"
      :style="iframeStyle"
      frameborder="0"
      allowfullscreen
      sandbox="allow-scripts allow-top-navigation allow-forms allow-same-origin"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "mobilePreview",
  props: {
    // iframe地址
    url: {
      type: String,
      required: true
    },
    // 指定宽度
    width: {
      type: Number,
      default: 388
    },
    // 覆盖外层样式
    coverWrapStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    // 覆盖iframe样式
    coverIframeStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      defaultStyle: {
        wrap: {
          height: 790,
          width: 388,
          margin: 50,
          backgroundSize: 388,
          ...this.coverWrapStyle
        },
        iframe: {
          height: 570,
          width: 320,
          top: 89,
          left: 19,
          ...this.coverIframeStyle
        }
      }
    };
  },
  computed: {
    ratio() {
      return (this.width / this.defaultStyle.wrap.width).toFixed(4);
    },
    wrapStyle() {
      return this.calcNewStyle(this.defaultStyle.wrap, this.ratio);
    },
    iframeStyle() {
      return this.calcNewStyle(this.defaultStyle.iframe, this.ratio);
    }
  },
  methods: {
    /**
     * 计算新样式，处理缩放问题
     */
    calcNewStyle(defaultStyle, ratio) {
      let newStyle = {};
      for (const key in defaultStyle) {
        if (defaultStyle.hasOwnProperty(key)) {
          let value = defaultStyle[key];
          if (typeof value === "number") {
            value = Math.round(defaultStyle[key] * ratio) + "px";
          }
          newStyle[key] = value;
        }
      }
      return newStyle;
    }
  }
};
</script>
<style scoped>
.wrap {
  position: relative;
  background: url(./assets/bg_preview_mobile.png);
}
.wrap iframe {
  position: absolute;
  border: 0;
}
</style>
