import AppLayout from '../components/layout/AppLayout.vue';

const main = () => import('../views/Main.vue');
const questions = () => import('../views/Questions.vue');
const knowledge = () => import('../views/Knowledge.vue');
const community = () => import('../views/Community.vue');
const events = () => import('../views/Events.vue');
const jobs = () => import('../views/Jobs.vue');
const notice = () => import('../views/Notice.vue');

export default {
  path: '/',
  component: AppLayout,
  children: [
    {
      path: '/',
      component: main,
    },
    {
      path: 'questions',
      component: questions,
    },
    {
      path: 'knowledge',
      component: knowledge,
    },
    {
      path: 'community',
      component: community,
    },
    {
      path: 'events',
      component: events,
    },
    { path: 'jobs', component: jobs },
    {
      path: 'notice',
      component: notice,
    },
  ],
};
