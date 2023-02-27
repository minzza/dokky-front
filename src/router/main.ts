import AppLayout from '../components/layout/AppLayout.vue';

const main = () => import('../views/Main.vue');
const questions = () => import('../views/Questions.vue');
const knowledge = () => import('../views/Knowledge.vue');
const community = () => import('../views/Community.vue');
const events = () => import('../views/Events.vue');
const jobs = () => import('../views/Jobs.vue');
const notice = () => import('../views/Notice.vue');
const newBoard = () => import('../views/board/New.vue');
const boardDetail = () => import('../views/board/Detail.vue');

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
    {
      path: 'questions/new',
      component: newBoard,
      props: { title : '기술 궁금증 해결하기' },
    },
    {
      path: 'knowledge/new',
      component: newBoard,
      props: { title : '정보는 나눌 수록 늘어나는 것' },
    },
    {
      path: 'community/new',
      component: newBoard,
      props: { title : '함께 할 때 더 즐거운 순간' },
    },
    {
      path: 'events/new',
      component: newBoard,
      props: { title : '더 즐거운 정보가 가득한' },
    },
    {
      path: 'questions/create',
      component: newBoard,
      props: { title : '회사 등록' },
    },
    {
      path: 'notice/info',
      component: newBoard,
      props: { title : '공지사항' },
    },
    {
      path: 'userts/:id/activity',
      component: boardDetail,
    },
  ],
};
