import SettingPageLayout from '@/components/layout/SettingPageLayout.vue';

const myProfile = () => import('../views/settings/Profile.vue');
const myAccount = () => import('../views/settings/Account.vue');
const myActivity = () => import('../views/settings/Activity.vue');

export default {
  path: '/',
  component: SettingPageLayout,
  children: [
    {
      path: 'settings/profile',
      component: myProfile,
    },
    {
      path: 'settings/account',
      component: myAccount,
    },
    {
      path: 'settings/activity',
      component: myActivity,
    },
  ],
};
