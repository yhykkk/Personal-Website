import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/login.vue';
import Home from '../components/home.vue';

const routes = [
  { path: '/', component: Login }, 
  { path: '/home', component: Home } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;