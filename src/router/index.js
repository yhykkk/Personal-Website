import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/login.vue';
import Page1 from '../components/page1.vue';
import Page2 from '../components/page2.vue';
import Page4 from '../components/page4.vue';
import Page5 from '../components/page5.vue';


const routes = [
  { path: '/', component: Login }, 
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/page4', component: Page4 },
  { path: '/page5', component: Page5 },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;