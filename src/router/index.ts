import { createRouter, createWebHistory } from 'vue-router'
import { ROUTE_NAMES } from '@/constants/ROUTE_NAMES'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTE_NAMES.Blocks,
      component: () => import('@/views/BlocksView.vue')
    },
    {
      path: '/login',
      name: ROUTE_NAMES.Login,
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/blocks/:seqno',
      name: ROUTE_NAMES.BlockDetail,
      component: () => import('@/views/BlockDetailView.vue')
    },
    {
      path: '/transactions',
      name: ROUTE_NAMES.Transactions,
      component: () => import('@/views/TransactionsView.vue')
    }
  ]
})

router.beforeEach((to) => {
  if (!localStorage.getItem('token') && to.name !== ROUTE_NAMES.Login) {
    return { name: ROUTE_NAMES.Login }
  }
})

export default router
