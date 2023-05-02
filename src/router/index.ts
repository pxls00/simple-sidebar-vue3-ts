import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import carriersRoutes from '@/router/carriers'

import setPageSeo from '@/helpers/set-page-seo'
import getRoutePath from '@/helpers/routes'

// import HomePage from '@/pages/logistics.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: getRoutePath('logistics'),
  },
  {
    path: getRoutePath('logistics'),
    name: 'Logistics',
    meta: {
      layout: 'default'
    }
    // component: HomePage
  },
  ...carriersRoutes,
  {
    path: getRoutePath('logistics'),
    name: 'Logistics',
    
    meta: {
      layout: 'default',
      title: 'Главная',
      meta: [
        {
          name: 'description',
          content: 'Онлайн магазин, где вы сможете найти ...'
        }
      ]
    },
    component: () => import('@/pages/logistics.vue')
  },
  {
    path: getRoutePath('signOut'),
    name: 'sign-out',
    redirect: getRoutePath('logistics'),
  },
  {
    path: getRoutePath('settings'),
    name: 'settings',
    redirect: getRoutePath('logistics'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  setPageSeo({
    title: to.meta.title as string || to.name as string || '',
    meta: (to.meta.meta as HTMLMetaElement[]).length ? to.meta.meta as HTMLMetaElement[] : null
  })
})

export default router
