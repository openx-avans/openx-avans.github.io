import { createRouter, createWebHashHistory } from 'vue-router';
import AdminView from '@/views/AdminView.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/admin',
      component: AdminView,
    },
  ],
});
