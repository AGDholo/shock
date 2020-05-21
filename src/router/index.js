import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/front/pages/index",
    name: "front-pages-index",
    component: () => import("../views/front/pages/Index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
