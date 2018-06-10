import Vue from 'vue'
import Router from 'vue-router'
import AdminTemplate from './AdminTemplate.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: AdminTemplate,
      children: [
        {
          path: '',
          component: Home
        }
      ]
    }
  ]
})
