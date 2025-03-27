import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'




createApp(App)
    .use(router)
    .mount('#app')

