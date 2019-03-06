import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/basic.css';
import './assets/fonts/iconfont.css';
import App from './App.vue'
import router from './router/index';

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
