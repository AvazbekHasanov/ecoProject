import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/platon/ecoMain.vue'
import ecoPages from '../views/platon/ecoPages.vue'
import ecoServices from '../views/platon/ecoServises.vue'
import contacts from '../views/platon/contacts.vue'
import Login from '../views/Login.vue'

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
      component: ecoPages,
      children:[
        {
          path: 'services',
          name: 'services',
          component: ecoServices
        },
        {
          path: 'contacts',
          name: 'contacts',
          component: contacts
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})

export default router
