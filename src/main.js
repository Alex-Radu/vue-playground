import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    components: {
      default: Home,
    },
  },
  {
    path: '/home',
    components: {
      default: Home,
    },
  },
  {
    path: '/about',
    components: {
      default: About,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
