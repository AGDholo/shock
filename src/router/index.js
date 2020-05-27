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
  {
    path: "/front/pages/index-2",
    name: "front-pages-index-2",
    component: () => import("../views/front/pages/Index-2.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
