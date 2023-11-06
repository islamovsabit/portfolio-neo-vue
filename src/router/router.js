import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
import EducationView from '../pages/EducaionView.vue'
import PortfolioView from '../pages/PortfolioView.vue'
import ServiceView from '../pages/ServiceView.vue'
import ContactView from '../pages/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/education',
    name: 'EducationView',
    component: EducationView
  },
  {
    path: '/portfolio',
    name: 'PortfolioView',
    component: PortfolioView
  },
  {
    path: '/service',
    name: 'ServiceView',
    component: ServiceView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
