// import { createRouter, createWebHistory } from "vue-router";
// const routes = [
//   {
//     path: "/home",
//     name: "Home",
//     component: () => import("../views/Home.vue"),
//   },
//   // {
//   //   path: "/featured",
//   //   name: "Featured",
//   //   component: () => import("../views/Featured.vue"),
//   // },
//   // {
//   //   path: "/artists",
//   //   name: "Artists",
//   //   component: () => import("../views/Artists.vue"),
//   // },
//   // {
//   //   path: "/gallery",
//   //   name: "Gallery",
//   //   component: () => import("../views/GalleryView.vue"),
//   // },
//   {
//     path: "/contact",
//     name: "Contact",
//     component: () => import("../views/Contact.vue"),
//   },
//   {
//     path: "/about",
//     name: "About",
//     component: () => import("../views/About.vue"),
//   },
//   // {
//   //   path: "/ViewArt/:id",
//   //   name: "ViewArt",
//   //   component: () => import("../views/ViewArt.vue"),
//   //   props: true,
//   // },
// ];
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });
// export default router;
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/artists",
    name: "Artists",
    component: () => import("../views/Artists.vue"),
  },
  {
    path: "/featured",
    name: "Featured",
    component: () => import("../views/Featured.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/Gallery.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
