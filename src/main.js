import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/basic.css';
import './assets/fonts/iconfont.css';
import App from './App.vue'
import router from './router/index';
import store from './store/index'
import $axios from './http/axios'
import {getCookie} from "./utils";

Vue.config.productionTip = false;
Vue.prototype.$axios = $axios;

Vue.use(ElementUI, {size: 'small', zIndex: 3000});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin)) {  // 判断该路由是否需要登录权限
        if (getCookie('token')) {
            next();
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next();
    }

})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
