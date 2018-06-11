import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification';

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Vuelidate);
Vue.use(Notifications);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
