import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/form",
      name: "form",
      component: () => import("./views/Form.vue")
    },
    {
      path: "/checkbox",
      name: "checkbox",
      component: () => import("./views/CheckBox.vue")
    },
    {
      path: "/radio",
      name: "radio",
      component: () => import("./views/Radio.vue")
    }
  ]
});
