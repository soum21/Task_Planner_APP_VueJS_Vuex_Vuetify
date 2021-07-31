import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../modules/home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:board/:id',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../modules/taskDetails')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
