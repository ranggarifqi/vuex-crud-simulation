import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import LoginModule from './modules/login';
import DrawerModule from './modules/drawer';

export default new Vuex.Store({
  modules: {
    login: LoginModule,
    drawer: DrawerModule
  }
})
