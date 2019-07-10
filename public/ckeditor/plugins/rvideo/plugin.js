CKEDITOR.plugins.add("rvideo", {
  icons: "rvideo",
  init: function(editor) {
    editor.addCommand("rvideo", {
      // 点击按钮执行函数
      exec: function(editor) {
        // 校验文件函数
        function _valid(file) {
          let suffixs = editor.config.rvideo.suffixs;
          let limit = editor.config.rvideo.limit;
          let valid_limit = limit >= file.size / 1024;
          let valid_suffix = ~Object.values(suffixs).indexOf(file.type);
          let result = {
            success: false,
            message: []
          };

          if (!valid_limit) {
            result.success = false;
            result.message.push(`仅能使用 ${limit}KB 以下的视频.`);
          }

          if (!valid_suffix) {
            result.success = false;
            result.message.push(
              `仅能使用以下类型 ${Object.keys(suffixs).join(",")} 的视频.`
            );
          }

          return result;
        }

        let config = editor.config.rvideo;
        let a = document.createElement("input");
        a.setAttribute("type", "file");
        a.click();
        a.onchange = function() {
          let file = this.files[0];
          let valid = _valid(file);
          let isFunction = typeof config.callback === "function";
          if (isFunction) {
            config
              .callback(valid, file)
              .then(function(url) {
                let node = new CKEDITOR.dom.element("video");
                node.setAttribute("preload", "none");
                node.setAttribute("controls", "controls");
                node.setAttribute("controlslist", "nodownload");
                node.setAttribute("style", "max-width: 100%; height: auto;");
                node.setAttribute("src", url);
                let elem = editor.createFakeElement(
                  node,
                  "mod_rvideo",
                  "Video",
                  true
                );
                elem.setAttribute(
                  "src",
                  CKEDITOR.getUrl("plugins/rvideo/icons/rvideo.png")
                );
                elem.setAttribute("class", "mod_rvideo");
                elem.setAttribute("alt", "视频");
                elem.setAttribute("title", "视频");
                editor.insertElement(elem);
              })
              .catch(() => {});
          }
        };
      }
    });

    // 添加CSS
    let css = `img.mod_rvideo{vertical-align:-1px;}`;
    CKEDITOR.addCss(css);
    // 添加按钮
    editor.ui.addButton("RVideo", {
      label: "视频",
      command: "rvideo",
      toolbar: "insert"
    });
  }
});
