import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);



// 路由配置
const Routers = [
    {
        path: '/index',
        meta: {
            title: '首页',
            requireLogin: true
        },
        component: (resolve) => require(['../pages/index.vue'], resolve)
    },
    {
        path: '/login',
        meta: {
            title: 'login',
            requireLogin: true
        },
        component: (resolve) => require(['../pages/login.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/login'
    }
];
const RouterConfig = {
    // 使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: Routers
};

const router = new VueRouter(RouterConfig);


export default router;
