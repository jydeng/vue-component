import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Alert from "./components/Alert/alert.js";
import MessageBox from "./components/MessageBox/index.js";
import "mint-ui/lib/style.css";
import { DatetimePicker } from "mint-ui";

Vue.use(MessageBox);
Vue.component(DatetimePicker.name, DatetimePicker);

Vue.config.productionTip = false;
Vue.prototype.$Alert = Alert;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
