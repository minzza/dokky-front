import AppLayout from '../components/layout/AppLayout.vue';

const main = () => import('../views/MainPage.vue');

export default {
  path: '/',
  component: AppLayout,
  children: [
    {
      path: '/',
      component: main,
    },
  ],
};
