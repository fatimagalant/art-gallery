import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/featured",
    name: "Featured",
    component: () => import("../views/Featured.vue"),
  },
  {
    path: "/artists",
    name: "Artists",
    component: () => import("../views/Artists.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/Gallery.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/ViewArt/:id",
    name: "ViewArt",
    component: () => import("../views/ViewArt.vue"),
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/pieces",
    name: "Pieces",
    component: () => import("../views/Marketplace.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
