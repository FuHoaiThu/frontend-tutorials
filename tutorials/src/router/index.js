import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Forms from '../views/FormsView.vue'
import { ROUTER_NAMES } from './routerConstant'
import PageHeaders from '@/views/PageHeaders.vue'
import LandingPages from '@/views/LandingPages.vue'
import Cards from '@/views/Cards.vue'

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
    {
      path: '/landing-page',
      name: ROUTER_NAMES.LANDING_PAGES,
      component: LandingPages,
    },
    {
      path: '/cards',
      name: ROUTER_NAMES.CARDS,
      component: Cards,
    },
  ],
})

export default router
