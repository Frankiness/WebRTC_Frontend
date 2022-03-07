import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "IntroductionPage",
    component: () => import("../views/IntroductionPage.vue"),
  },
  {
    path: "/roomPage",
    name: "roomPage",
    component: () => import("../views/RoomPage.vue"),
  },
  {
    path: "/introductionPage",
    name: "introductionPage",
    component: () => import("../views/IntroductionPage.vue"),
  },
  {
    path: "/joinRoomPage",
    name: "join",
    component: () => import("../views/JoinRoomPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
