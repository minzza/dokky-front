import { createRouter, createWebHistory } from 'vue-router';

import Main from '../router/main';
import Sign from '../router/sign';
import settings from './settings';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [Main, Sign, settings],
});

export default router;
