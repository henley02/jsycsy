import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component(resolve) {
        require(['home/pages/index/index.vue'], resolve);
      }
    },
    {
      path: '*',
      name: '404 ',
      redirect: 'index'
    }
  ]
});
