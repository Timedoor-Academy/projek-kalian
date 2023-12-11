// import './assets/main.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import {
//     createApp
// } from 'vue'
// import App from './App.vue'
// import {
//     createRouter,
//     createWebHistory
// } from 'vue-router'
// import {
//     routes
// } from './routes'
// const router = createRouter({
//     history: createWebHistory(),
//     routes,
//     scrollBehavior(to, from, savedPosition) {
//         return {
//             top: 0
//         }
//     }
// })
// createApp(App).use(router)
// createApp(App).mount('#app')
// import 'bootstrap/dist/js/bootstrap.js'

import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

import { store } from './components/store/index.js';

const app = createApp(App);

// Gunakan store VueX
app.use(store);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Gunakan router Vue
app.use(router);

// Pasang aplikasi ke elemen dengan id "app"
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
