import { createRouter, createWebHistory } from 'vue-router';

import Main from '../router/main';
import Sign from '../router/sign';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [Main, Sign],
});

export default router;
