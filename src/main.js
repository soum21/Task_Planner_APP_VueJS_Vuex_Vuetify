import Vue from 'vue';
import App from './app/App.vue';
import vuetify from './app/plugins/vuetify';
import store from './app/vuex/store';
import '@babel/polyfill';
import router from './app/router';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App)
}).$mount('#app');
