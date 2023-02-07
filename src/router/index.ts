import { createRouter, createWebHistory } from 'vue-router';

import MainRouter from '../router/main';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [MainRouter],
});

export default router;
