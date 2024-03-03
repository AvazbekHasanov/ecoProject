import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/platon/ecoMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: main
    },
    {
      path: '/pages',
      name: 'pages',
      component: import('../views/platon/ecoPages.vue'),
      children:[
        {
          path: 'services',
          name: 'services',
          component: () => import('../views/platon/ecoServises.vue')
        },
        {
          path: 'contacts',
          name: 'contacts',
          component: () => import('../views/platon/contacts.vue')
        }
      ]
    },
    {
      path: '/slider',
      name: 'Slider',
      component: () => import('../views/sliders/swiperSlider.vue')
    },
    {
      path: '/carusel2',
      name: 'carusel2',
      component: () => import('../views/sliders/carusel2.vue')
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('../views/sliders/filterSlider.vue')
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import('../views/platon/platonTable.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/platon/contacts.vue')
    },
    {
      path: '/diagram',
      name: 'Diagram',
      component: () => import('../views/charts/circularDiagram.vue')
    },
    {
      path: '/expert',
      name: 'Expert',
      component: () => import('../views/platon/ecoPages.vue')
    },
    {
      path: '/courses',
      name: 'Expert Courses',
      component: () => import('../views/platon/ecoMainInfo.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/eco_page',
      name: 'EcoPage',
      component: () => import('../views/platon/ecoServises.vue')
    },
  ]
})

export default router
