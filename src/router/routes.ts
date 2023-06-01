//  对外暴露配置路由的常量路由
export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", // 命令路由
  },
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    name: "layout",
  },
  {
    path: "/404",
    component: () => import("@/views/404/404.vue"),
    name: "404",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
];
