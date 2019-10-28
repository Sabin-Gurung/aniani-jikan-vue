import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './App.vue'
import AnimeLanding from './components/AnimeLanding.vue'
import Home from './components/Home.vue'
import DiscoverLanding from './components/DiscoverLanding.vue';
import FavoritesLanding from './components/FavoritesLanding.vue';
import SearchResultsLanding from './components/SearchResultsLanding.vue';

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
    path: '/discover',
    component: DiscoverLanding
  },
  {
    path: '/search',
    component: SearchResultsLanding
  },
  {
    path: '/favorites',
    component: FavoritesLanding
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
  router
}).$mount('#app')
