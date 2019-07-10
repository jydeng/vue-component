CKEDITOR.plugins.add("rimage", {
  icons: "rimage",
  init: function(editor) {
    editor.addCommand("rimage", {
      // 点击按钮执行函数
      exec: function(editor) {
        // 校验文件函数
        function _valid(file) {
          let suffixs = editor.config.rimage.suffixs;
          let limit = editor.config.rimage.limit;
          let valid_limit = limit >= file.size / 1024;
          let valid_suffix = ~Object.values(suffixs).indexOf(file.type);
          let result = {
            success: false,
            message: []
          };

          if (!valid_limit) {
            result.success = false;
            result.message.push(`仅能使用 ${limit}KB 以下的图片.`);
          }

          if (!valid_suffix) {
            result.success = false;
            result.message.push(
              `仅能使用以下类型 ${Object.keys(suffixs).join(",")} 的图片.`
            );
          }

          return result;
        }

        let config = editor.config.rimage;
        let a = document.createElement("input");
        a.setAttribute("type", "file");
        a.click();
        a.onchange = function() {
          let file = this.files[0];
          let valid = _valid(file);
          let isFunction = typeof config.callback === "function";
          if (isFunction)
            config
              .callback(valid, file)
              .then(function(url) {
                let node = new CKEDITOR.dom.element("img");
                node.setAttribute("class", "mod_rimage");
                node.setAttribute("data-cke-saved-src", url);
                node.setAttribute("src",CKEDITOR.getUrl("plugins/rimage/icons/rimage.png"));
                editor.insertElement(node);
              })
              .catch(function() {});
        };
      }
    });

    // 添加CSS
    let css = `img.mod_rimage{vertical-align:-2px;}`;
    CKEDITOR.addCss(css);
    // 添加按钮
    editor.ui.addButton("RImage", {
      label: "图像",
      command: "rimage",
      toolbar: "insert"
    });
  }
});
