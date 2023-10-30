import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Education from '../pages/Educaion.vue'
import Portfolio from '../pages/Portfolio.vue'
import Service from '../pages/Service.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router
