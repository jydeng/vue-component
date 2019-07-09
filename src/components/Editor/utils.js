import CKEDITOR from "CKEDITOR";

export function createFakeImageHTML(editor, src) {
  let node = new CKEDITOR.dom.element("img");
  node.setAttribute("class", "mod_rimage");
  node.setAttribute("data-cke-saved-src", src);
  node.setAttribute("src", CKEDITOR.getUrl("plugins/rimage/icons/rimage.png"));
  return node.$.outerHTML;
}

export function createFakeVideoHTML(editor, src) {
  let node = new CKEDITOR.dom.element("video");
  node.setAttribute("src", src);
  node.setAttribute("controls", "controls");
  node.setAttribute("controlslist", "nodownload");
  node.setAttribute("style", "max-width: 100%; height: auto;");
  let elem = editor.createFakeElement(node, "mod_rvideo", "Video", true);
  elem.setAttribute("src", CKEDITOR.getUrl("plugins/rvideo/icons/rvideo.png"));
  elem.setAttribute("class", "mod_rvideo");
  elem.setAttribute("alt", "视频");
  elem.setAttribute("title", "视频");
  return elem.$.outerHTML;
}

export function translationTags(editor, evt) {
  let reg_img = /<img [^>]*src=['"]([^'"]+)[^>]*>/gi;
  let reg_video = /<video [^>]*src=['"]([^'"]+)[^>]*>/gi;
  // let reg_fillblank = /\[_+\]/gi;
  // let reg_fillblank = /\[填空\]/gi;
  let newHtml = evt.data.dataValue.replace(reg_img, (match, capture) =>
    createFakeImageHTML(editor, capture)
  );
  newHtml = newHtml.replace(reg_video, (match, capture) =>
    createFakeVideoHTML(editor, capture)
  );
  evt.data.dataValue = newHtml;
}

export function getHTMLAttribute(html, tag, attr) {
  let reg = new RegExp(`/<${tag} [^>]*${attr}=['"]([^'"]+)[^>]*>/gi`);
  let result = [];
  html.replace(reg, (match, capture) => {
    result.push(capture);
    return capture;
  });
  return result;
}

export function rimageConfig(config) {
  let defaultConfig = {
    // 选择文件触发
    callback: function(valid, file) {
      return new Promise(resolve => {
        // 此处实现上传文件等操作
        // 针对文件类型与大小的校验内部已实现
        // 只要resolve返回视频地址即可
      });
    },
    // 允许的文件类型  提示 : 真实type
    suffixs: {
      jpg: "image/jpeg",
      png: "image/png",
      bmp: "application/x-bmp",
      gif: "image/gif"
    },
    // 允许的文件大小
    limit: 3 * 1024
  };

  return {
    ...defaultConfig,
    ...config
  };
}

export function rvideoConfig(config) {
  let defaultConfig = {
    // 选择完毕回调
    callback: function(valid, file) {
      return new Promise(resolve => {
        // 此处实现上传文件等操作
        // 针对文件类型与大小的校验内部已实现
        // 只要resolve返回视频地址即可
      });
    },
    // 允许的文件类型
    suffixs: {
      mp4: "video/mp4",
      flv: "video/x-flv,flv-application/octet-stream",
      mov: "video/quicktime",
      rmvb: "audio/x-pn-realaudio",
      wmv: "audio/x-ms-wmv",
      avi: "video/x-msvideo",
      mpg: "video/mpeg",
      mpeg: "audio/mpeg"
    },
    // 允许的文件大小
    limit: 10 * 1024
  };

  return {
    ...defaultConfig,
    ...config
  };
}

export function rlinkConfig(config) {
  let defaultConfig = {
    callback: function() {
      // 点击link按钮回调
      return new Promise(resolve => {
        // 此处实现输入文本与href弹窗
        // 只要resolve文本与href即可
        // resolve("测试的链接", "http://www.baidu.com");
      });
    }
  };

  return {
    ...defaultConfig,
    ...config
  };
}
