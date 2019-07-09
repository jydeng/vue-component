module.exports = {
  runtimeCompiler: true,
  configureWebpack: () => {
    return {
      externals: {
        CKEDITOR: "CKEDITOR"
      }
    };
  }
};
