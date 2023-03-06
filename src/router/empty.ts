import EmptyLayout from '@/components/layout/EmptyLayout.vue';

const myActivity = () => import('../views/settings/Activity.vue');

export default {
  path: '/',
  component: EmptyLayout,
  children: [
    {
      path: 'settings/activity',
      component: myActivity,
    },
  ],
};
