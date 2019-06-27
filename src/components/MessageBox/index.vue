<template>
  <div class="message-box" v-show="isShowMessageBox">
    <div class="mask" @click="cancel"></div>
    <div class="message-content">
      <svg class="icon" aria-hidden="true" @click="cancel">
        <use xlink:href="#icon-delete"></use>
      </svg>
      <h3 class="title">{{ title }}</h3>
      <p class="content">{{ content }}</p>
      <div>
        <input
          type="text"
          v-model="inputValue"
          v-if="isShowInput"
          ref="input"
        />
      </div>
      <div class="btn-group">
        <button class="btn-default" @click="cancel" v-show="isShowCancelBtn">
          {{ cancelBtnText }}
        </button>
        <button
          class="btn-primary btn-confirm"
          @click="confirm"
          v-show="isShowConfimrBtn"
        >
          {{ confirmBtnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题"
    },
    content: {
      type: String,
      default: "这是弹框内容"
    },
    isShowInput: {
      type: Boolean,
      default: false
    },
    inputValue: {
      type: String,
      default: ""
    },
    isShowCancelBtn: {
      type: Boolean,
      default: true
    },
    isShowConfimrBtn: {
      type: Boolean,
      default: true
    },
    cancelBtnText: {
      type: String,
      default: "取消"
    },
    confirmBtnText: {
      type: String,
      default: "确定"
    }
  },
  data() {
    return {
      isShowMessageBox: false,
      resolve: "",
      reject: "",
      promise: "" // 保存promise对象
    };
  },
  methods: {
    // 确定,将promise断定为resolve状态
    confirm: function() {
      this.isShowMessageBox = false;
      if (this.isShowInput) {
        this.resolve(this.inputValue);
      } else {
        this.resolve("confirm");
      }
      this.remove();
    },
    // 取消,将promise断定为reject状态
    cancel: function() {
      this.isShowMessageBox = false;
      this.reject("cancel");
      this.remove();
    },
    // 弹出messageBox,并创建promise对象
    showMsgBox: function() {
      this.isShowMessageBox = true;
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      // 返回promise对象
      return this.promise;
    },
    remove: function() {
      setTimeout(() => {
        this.destroy();
      }, 300);
    },
    destroy: function() {
      this.$destroy();
      document.body.removeChild(this.$el);
    }
  }
};
</script>
<style scoped>
.message-box {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
