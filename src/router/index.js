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
      props: {
        label: '首页'
      },
      component(resolve) {
        require(['pages/index/index.vue'], resolve);
      }
    },
    {
      path: '/temTrain',
      name: 'temTrain',
      props: {
        label: '茶道培训'
      },
      component(resolve) {
        require(['pages/tem-train/tem-train.vue'], resolve);
      },
      redirect: 'temTrain/popularClass',
      children: [
        {
          path: 'popularClass',
          name: 'popularClass',
          props: {
            label: '人气班'
          },
          component(resolve) {
            require(['pages/tem-train/children/popular-class/popular-class.vue'], resolve);
          }
        },
        {
          path: 'boutiqueClass',
          name: 'boutiqueClass',
          props: {
            label: '精品班'
          },
          component(resolve) {
            require(['pages/tem-train/children/boutique-class/boutique-class.vue'], resolve);
          }
        }
      ]
    },
    {
      path: '*',
      name: '404 ',
      redirect: 'index'
    }
  ]
});
