import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: import('./views/Home.vue') },
  { path: '/about', component: import('./views/About.vue') },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
