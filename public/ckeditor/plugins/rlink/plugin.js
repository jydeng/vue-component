CKEDITOR.plugins.add("rlink", {
  icons: "rlink",
  init: function(editor) {
    editor.addCommand("rlink", {
      // 点击按钮执行函数
      exec: function(editor) {
        let config = editor.config.rlink;
        let isFunction = typeof config.callback === "function";
        if (isFunction) {
          config.callback()
            .then(function(txt, url) {
              let node = new CKEDITOR.dom.element("a");
              node.setAttribute("class", "mod_rlink");
              node.setAttribute("href", url);
              node.appendText(txt);
              editor.insertElement(node);
            })
            .catch(() => {});
        }
      }
    });

    // 添加CSS
    let css = `.cke_button__rlink_icon{background: url(${CKEDITOR.getUrl(
      "plugins/icons.png"
    )}) no-repeat 0 -456px !important;}`;
    CKEDITOR.addCss(css);

    // 添加按钮
    editor.ui.addButton("Rlink", {
      label: "超链接",
      command: "rlink",
      toolbar: "insert"
    });
  }
});
