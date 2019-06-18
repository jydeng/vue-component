import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Alert from "./components/Alert/alert.js";
import MessageBox from "./components/MessageBox/index.js";

Vue.use(MessageBox);
Vue.config.productionTip = false;
Vue.prototype.$Alert = Alert;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
