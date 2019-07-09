CKEDITOR.plugins.add("fillblank", {
  icons: "fillblank",
  init: function(editor) {
    editor.addCommand("insertFillBlank", {
      // 点击按钮执行的函数
      exec: function(editor) {
        editor.insertText("[填空]");
      }
    });
    // 添加按钮
    editor.ui.addButton("FillBlank", {
      label: "增加填空",
      command: "insertFillBlank",
      toolbar: "insert"
    });
  }
});