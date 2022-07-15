import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
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
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/GalleryView.vue"),
  },
  {
    path: "/gallery/:cat",
    name: "GalleryCategory",
    component: () => import("../views/GalleryView.vue"),
  },
  {
    path: "/gallery/:id",
    name: "artworkDetails",
    component: () => import("../views/ArtworkDetails.vue"),
    props: true,
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
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/AdminView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
