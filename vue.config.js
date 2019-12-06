module.exports = {
  runtimeCompiler: true,
  configureWebpack: () => {
    return {
      externals: {
        CKEDITOR: "CKEDITOR"
      },
      devServer: {
        disableHostCheck: true,
        proxy: {
          "/rp/*": {
            target: "http://rp.bigdata.onemt.co",
            secure: false,
            changeOrigin: true
          }
        }
      }
    };
  }
};
