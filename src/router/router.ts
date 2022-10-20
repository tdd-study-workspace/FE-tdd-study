import HomePageVue from '@/pages/HomePage/HomePage.vue';
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

// Route Name 을 먼저 정의해서 사용합니다.
// 이 후 <RouteLink>의 named 라우팅을 할 때, AppRouteName 타입 정의를 통해 오탈자로 인한 에러를 방지합니다.
const AppRouteNames = [
  'home',
  'signup',
  'signin',
  'settings',
  'editor',
  'article',
  'profile',
] as const;
type AppRouteName = typeof AppRouteNames[number];

type AppRouteRecordRaw = Omit<RouteRecordRaw, 'name'> & { name: AppRouteName };

const routes: AppRouteRecordRaw[] = [
  {
    name: 'home',
    path: '/#/',
    component: HomePageVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes as RouteRecordRaw[],
});

export default router;
