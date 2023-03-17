import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';
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
    meta: { unrequireAuth: true },
  },
  {
    path: '/users/signup',
    name: 'signup',
    component: () => import('@/views/user/SignupPage.vue'),
    meta: { unrequireAuth: true },
  },
  {
    path: '/users/mypage',
    name: 'mypage',
    component: () => import('@/views/user/UserPage.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/users/:id',
    name: 'edit-user',
    component: () => import('@/views/user/EditUserPage.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/users/password/:id',
    name: 'editPassword',
    component: () => import('@/views/user/EditPasswordPage.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/users/delete/:id',
    name: 'deleteUser',
    component: () => import('@/views/user/DeleteUser.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/quotations',
    name: 'quotations',
    component: () => import('@/views/quotation/QuotationPage.vue'),
  },
  {
    path: '/quotations/:id',
    name: 'update-quotations',
    component: () => import('@/views/quotation/EditQuotationPage.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/quotations/list',
    name: 'quotations-list',
    component: () => import('@/views/quotation/QuotationListPage.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/client/ClientPage.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/clients/create',
    name: 'create-client',
    component: () => import('@/views/client/CreateClient.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/clients/:id',
    name: 'editClient',
    component: () => import('@/views/client/EditClient.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/product/ProductListPage.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/products/create',
    name: 'createProduct',
    component: () => import('@/views/product/CreateProductPage.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/products/edit/:id',
    name: 'editProduct',
    component: () => import('@/views/product/EditProductPage.vue'),
    meta: { requireAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.getters.isLogin) {
    console.log(from.fullPath);
    if (confirm('로그인 필요합니다. 로그인 하시겠습니까?')) {
      next({ name: 'login' });
    } else {
      next({ name: 'main' });
    }
  } else if (to.meta.unrequireAuth && store.getters.isLogin) {
    alert('접근할 수 없습니다.');
    next({ name: 'main' });
  }
  next();
});

export default router;
