import {
  createRouter,
  createWebHistory
} from 'vue-router'

import aboutus from '../views/aboutus.vue'
import calculator from '../views/calculator.vue'
import home from '../views/home.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: home,

  },
  {
    path: '/calculator',
    name: 'calculator',
    component: calculator
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: aboutus
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router