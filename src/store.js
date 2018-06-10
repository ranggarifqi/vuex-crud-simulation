import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import DrawerModule from './modules/drawer';

export default new Vuex.Store({
  modules: {
    drawer: DrawerModule
  }
  // state: {
  //   drawer: true,
  // },
  // mutations: {
  //   toggleDrawer: (state, payload) => {
  //     state.drawer = payload;
  //   }
  // },
  // actions: {
  //
  // }
})
