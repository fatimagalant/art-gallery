import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Featured from "../views/Featured.vue";
import Gallery from "../views/Gallery.vue";
import Artists from "../views/Artists.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/home",
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
    component: () => import("../views/GalleryView.vue"),
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
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/pieces",
    name: "Pieces",
    component: () => import("../views/Pieces.vue"),
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
