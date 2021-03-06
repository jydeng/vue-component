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
    },
    {
      path: "/preview",
      component: () => import("./views/Preview"),
      children: [
        {
          path: "/",
          redirect: "mobile"
        },
        {
          path: "pc",
          component: () => import("./views/Preview/pc.vue")
        },
        {
          path: "mobile",
          component: () => import("./views/Preview/mobile.vue")
        }
      ]
    },
    {
      path: "/ckeditor",
      name: "ckeditor",
      component: () => import("./views/CKEditor")
    },
    {
      path: "/textarea",
      name: "textarea",
      component: () => import("./views/TextArea")
    },
    {
      path: "/datetimepicker",
      name: "datetimepicker",
      component: () => import("./views/DateTimePicker")
    },
    {
      path: "/datetimepicker2",
      name: "datetimepicker2",
      component: () => import("./views/DateTimePicker2")
    },
    {
      path: "/pdf",
      name: "pdf",
      component: () => import("./views/Pdf")
    }
  ]
});
