import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import LoginModule from './modules/login';
import DrawerModule from './modules/drawer';
import NotifyModule from './modules/notify';

export default new Vuex.Store({
  modules: {
    login: LoginModule,
    drawer: DrawerModule,
    notify: NotifyModule,
  }
})
