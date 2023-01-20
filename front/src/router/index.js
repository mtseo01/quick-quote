import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/users/login',
    name: 'login',
    component: () => import('@/views/user/LoginPage.vue'),
  },
  {
    path: '/users/signup',
    name: 'signup',
    component: () => import('@/views/user/SignupPage.vue'),
  },
  {
    path: '/users/mypage',
    name: 'mypage',
    component: () => import('@/views/user/UserPage.vue'),
  },
  {
    path: '/users/:id',
    name: 'editUser',
    component: () => import('@/views/user/EditUser.vue'),
  },
  {
    path: '/quotations',
    name: 'quotations',
    component: () => import('@/views/QuotationPage.vue'),
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/client/ClientPage.vue'),
  },
  {
    path: '/clients/:id',
    name: 'editClient',
    component: () => import('@/views/client/EditClient.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/PreviewPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
