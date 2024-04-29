import { createApp, defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

import explore from './views/explore.vue';
import landing from './views/landing.vue';
import login from './views/login.vue';
import signup from './views/signup.vue';
import createPost from './views/createPost.vue'
import posts from './views/posts.vue'
import profile from './views/profile.vue'
import contact from './views/contact.vue'
import Loggedin from './components/InBetweens/loggedin.vue';
import itemnotfound from "./components/InBetweens/itemnf.vue";

const routes = [
    {path:'/explore', component: explore, name : 'explore'},
    {path:'/explore/:login', component: explore},
    {path:'/', component: landing, name : "home"},
    {path:'/home', component: landing, name : "home"},
    {path:'/login', component: login, name : "login"},
    {path:'/signup', component: signup, name : "signup"},
    {path:'/CreatePost', component: createPost, name : "createpost"},
    {path:'/posts/:id', component: posts, name : "search"},
    {path:'/profile/:username/:id', component: profile, name : "profile"},
    {path:'/contact', component: contact, name : "contact"},
    {path:'/search/itemnotfound', component: itemnotfound},
    // {path:'/temporary', component: Loggedin}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
