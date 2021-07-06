import Vue from 'vue'
import App from './App.vue';
import './assets/css/reset.css';
import './assets/css/base.css';
import './assets/css/general.css';
import './assets/css/header.css';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
