import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Alert from "./components/Alert/alert.js";

Vue.config.productionTip = false;
Vue.prototype.$Alert = Alert;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
