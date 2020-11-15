import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/root/front"),
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
    ],
  },

  {
    path: "/front/pages",
    component: () => import("../components/root/front"),
    children: [
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
      {
        path: "/front/pages/about",
        name: "front-pages-about",
        component: () => import("../views/front/pages/About.vue"),
      },
      {
        path: "/front/pages/price",
        name: "front-pages-price",
        component: () => import("../views/front/pages/Price.vue"),
      },
      {
        path: "/front/pages/contact",
        name: "front-pages-contact",
        component: () => import("../views/front/pages/Contact.vue"),
      },
    ],
  },

  {
    path: "/dashboard/pages",
    component: () => import("../components/root/dashboard"),
    children: [
      {
        path: "/dashboard/pages/dashboards/dashboard",
        name: "dashboard-pages-dashboards-dashboard",
        component: () =>
          import("../views/dashboard/pages/dashboards/Dashboard.vue"),
      },
      {
        path: "/dashboard/pages/examples/profile",
        name: "dashboard-pages-examples-profile",
        component: () =>
          import("../views/dashboard/pages/examples/Profile.vue"),
      },
      {
        path: "/dashboard/pages/examples/sign-in",
        name: "dashboard-pages-examples-sign-in",
        component: () =>
          import("../views/dashboard/pages/examples/Sign-in.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
