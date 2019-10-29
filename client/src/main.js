import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import store from "./stores/mainStore";
import App from './App.vue'
import AnimeLanding from './components/AnimeLanding.vue'
import Home from './components/Home.vue'

const routes = [
  {
    path: '/anime/:id',
    component: AnimeLanding
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
