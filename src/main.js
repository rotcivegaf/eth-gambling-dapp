import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
})
  .$mount('#app');
