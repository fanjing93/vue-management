import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/basic.css';
import App from './App.vue'
import router from './router/index';
import axios from 'axios';
import QS from 'qs';

import {getCookie, delCookie} from './utils/index.js';

Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

router.beforeEach((to, from, next) => {
    if(to.path === '/login') {
        delCookie('token');
    }
    if(to.meta.requireLogin){
        let token = getCookie('token');
        if(!token && to.path !== '/login') {
            next({ path: '/login' });
        } else {
            next()
        }
    }else{
        next();
    }
    window.document.title = to.meta.title;
});


new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
