import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Forms from '../views/FormsView.vue'
import { ROUTER_NAMES } from './routerConstant'
import PageHeaders from '@/views/PageHeaders.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTER_NAMES.HOME,
      component: HomeView,
    },
    {
      path: '/forms',
      name: ROUTER_NAMES.FORMS,
      component: Forms,
    },
    {
      path: '/page-header',
      name: ROUTER_NAMES.PAGE_HEADERS,
      component: PageHeaders,
    },
  ],
})

export default router
