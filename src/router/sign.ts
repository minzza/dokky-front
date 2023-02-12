import SignLayout from '@/components/layout/SignLayout.vue';
const signup = () => import('../views/Signup.vue');
const signin = () => import('../views/Signin.vue');
const forgot = () => import('../views/Forgot.vue');

export default {
  path: '/',
  component: SignLayout,
  children: [
    {
      path: 'signup',
      component: signup,
    },
    {
      path: 'signin',
      component: signin,
    },
    {
      path: 'forgot',
      component: forgot,
    },
  ],
};
