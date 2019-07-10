<template>
  <div class="inlineEditor" contenteditable="true" ref="editor"></div>
</template>
<script>
import CKEDITOR from "CKEDITOR";
import {
  translationTags,
  getHTMLAttribute,
  rimageConfig,
  rvideoConfig,
  rlinkConfig
} from "./utils";
export default {
  name: "iEditor",
  props: {
    // 标题
    title: {
      type: String,
      default: "富文本编辑器beta版."
    },
    // 工具栏配置
    toolbar: {
      type: Array,
      default: function() {
        return ["Bold", "RImage", "RVideo", "RLink", "FillBlank"];
      }
    },
    // v-model 绑定
    value: {
      type: String
    },
    // rimage 上传图片相关配置
    rimage: {
      type: Object,
      default: function() {
        return {};
      }
    },
    // rvideo 上传视频相关配置
    rvideo: {
      type: Object,
      default: function() {
        return {};
      }
    },
    // rlink 超链接相关配置
    rlink: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      // 缓存实例
      editor: null,
      // v-model 绑定
      currentValue: this.value
    };
  },
  computed: {
    // 生成配置项
    editorConfig() {
      let config = {
        language: "zh-cn",
        title: this.title,
        extraPlugins: "rimage,rvideo,rlink,fillblank",
        toolbar: [this.toolbar],
        allowedContent: [
          "h1 h2 h3 p blockquote strong em;",
          "a(mod_rlink)[!href];",
          "img(mod_rimage,mod_rvideo)[!src,alt,width,height,data-cke-saved-src,title];",
          "video[src,poster,controls,autoplay,width,height,loop]{max-width,height};"
        ],
        removePlugins: "link"
      };
      if (~this.toolbar.indexOf("RImage")) {
        config["rimage"] = rimageConfig(this.rimage);
      }

      if (~this.toolbar.indexOf("RVideo")) {
        config["rvideo"] = rvideoConfig(this.rvideo);
      }

      if (~this.toolbar.indexOf("RLink")) {
        config["rlink"] = rlinkConfig(this.rlink);
      }
      return config;
    }
  },
  watch: {
    // v-model 绑定
    value: {
      handler: function(val) {
        // v-model 绑定
        this.currentValue = val;
        // 同步到编辑器
        this.editor.setData(this.currentValue);
      }
    }
  },
  methods: {
    init() {
      // 关闭自动初始化
      CKEDITOR.disableAutoInline = true;
      // 初始化编辑器
      this.editor = CKEDITOR.inline(this.$refs["editor"], this.editorConfig);
      // 监听编辑器change事件，并传递
      this.editor.on("blur", evt => {
        this.$emit("input", evt.editor.getData());
      });

      // 增加判断，能省则省
      if (~this.toolbar.indexOf("RImage") || this.toolbar.indexOf("RVideo")) {
        // 监听编辑器setData事件，转换标签
        this.editor.on("setData", evt => {
          translationTags(this.editor, evt);
        });
      }

      // 增加判断，能省则省
      if (
        ~this.toolbar.indexOf("RImage") ||
        this.toolbar.indexOf("RVideo") ||
        this.toolbar.indexOf("RLink")
      ) {
        // 监听编辑器doubleclick事件，做对应交互
        this.editor.on("doubleclick", evt => {
          switch (evt.data.element.$.className) {
            case "mod_rvideo":
              this.$emit("dbl_video", {
                url: getHTMLAttribute(
                  decodeURIComponent(evt.data.element.$.dataset.ckeRealelement),
                  "video",
                  "src"
                ).pop()
              });
              break;
            case "mod_rimage":
              this.$emit("dbl_image", {
                url: evt.data.element.$.dataset.ckeSavedSrc
              });
              break;
            case "mod_rlink":
              this.$emit("dbl_link", {
                href: evt.data.element.$.href,
                html: evt.data.element.$.innerHTML
              });
              break;
          }
        });
      }
    },
    destroy() {
      if (this.editor !== null) {
        this.editor.destroy();
      }
    }
  },
  mounted() {
    this.init();
    setTimeout(() => {
      // v-model 绑定
      this.currentValue = this.value;
      // 同步到编辑器
      this.editor.setData(this.currentValue);
    }, 1000);
  },
  beforeDestroy() {
    this.destroy();
  }
};
</script>
<style>
.inlineEditor {
  border: 1px solid #666;
  padding: 2px 5px;
  margin: 0;
  line-height: 25px;
}
.inlineEditor p {
  margin: 0;
}
</style>
