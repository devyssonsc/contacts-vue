import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useAuthStore } from '@/stores/auth.store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    console.log(auth.isAuthenticated)
    return { name: 'Auth' }
  }

  if(to.name === 'Auth' && auth.isAuthenticated) {
    console.log(auth.isAuthenticated)
    return { name: 'ContactList' }
  }
})

export default router
