import Vue from 'vue';
import App from './app/App.vue';
import vuetify from './plugins/vuetify';
import store from './app/vuex/store';
import '@babel/polyfill';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: (h) => h(App)
}).$mount('#app');
