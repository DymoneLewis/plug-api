import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import axios from 'axios';
import VueAxios from 'vue-axios';
import SlideVerify from 'vue-monoplasty-slide-verify';
import '../theme/index.css';
import ApiList from '@/page/ApiList';
import ApiDetail from '@/page/ApiDetail';
import MyWorkbench from '@/page/MyWorkbench';
// import Document from '@/page/Document';
import Login from '@/page/Login';
import Home from '@/page/Home';
import App from './App';

// Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(SlideVerify);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'SignIn', component: Login },
    { path: '/signin', name: 'SignUp', component: Login },
    { path: '/apiList', name: 'ApiList', component: ApiList },
    { path: '/apiDetail', name: 'ApiDetail', component: ApiDetail },
    { path: '/myWorkbench', name: 'MyWorkbench', component: MyWorkbench },
    // { path: '/documents', name: 'Documents', component: Document },
    { path: '/apiDetail', name: 'ApiDetail', component: ApiDetail },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
