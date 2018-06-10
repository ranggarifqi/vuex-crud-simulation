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
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('access_token');
        if(token){
          return next('/');
        }

        return next();
      },
      component: Login
    },
    {
      path: '/',
      component: AdminTemplate,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('access_token');
        if(!token){
          return next('/login');
        }

        return next();
      },
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
      ]
    }
  ]
})
