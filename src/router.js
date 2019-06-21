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
    },
    {
      path: "/display",
      name: "display",
      component: () => import("./views/Display.vue")
    },
    {
      path: "/alert",
      name: "alert",
      component: () => import("./views/Alert.vue")
    },
    {
      path: "/table",
      name: "table",
      component: () => import("./views/Table.vue")
    },
    {
      path: "/tableSlot",
      name: "tableSlot",
      component: () => import("./views/Table-slot.vue")
    },
    {
      path: "/heading",
      name: "heading",
      component: () => import("./views/Heading.vue")
    },
    {
      path: "/messageBox",
      name: "messageBox",
      component: () => import("./views/MessageBox.vue")
    },
    {
      path: "/dnd",
      name: "dnd",
      component: () => import("./views/DnD.vue")
    }
  ]
});
