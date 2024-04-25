import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

import explore from './views/explore.vue';
import landing from './views/landing.vue';
import search from './views/search.vue';

const routes = [
    {path:'/explore', component: explore},
    {path:'/search', component: search},
    {path:'/', component: landing},
    {path:'/home', component: landing}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
