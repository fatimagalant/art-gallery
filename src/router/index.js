import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
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
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/GalleryView.vue"),
  },
  {
    path: "/artworkdetails",
    name: "Artwork Details",
    component: () => import("../views/ArtworkDetails.vue"),
  },
  {
    path: "/pieces/:id",
    name: "Piece",
    component: () => import("../views/Piece.vue"),
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
