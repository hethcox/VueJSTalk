import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import HomeComponents from '@/components/HomeComponents';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/components',
        name: 'HomeComponents',
        component: HomeComponents
    }
  ]
})
