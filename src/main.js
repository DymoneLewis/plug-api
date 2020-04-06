import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import '../theme/index.css';
import ApiList from '@/page/ApiList';
import ApiDetail from '@/page/ApiDetail';
import MyWorkbench from '@/page/MyWorkbench';
import Document from '@/page/Document';
import SignIn from '@/page/SignIn';
import Login from '@/page/Login';
import Home from '@/page/Home';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signin', name: 'Signin', component: SignIn },
    { path: '/apiList', name: 'ApiList', component: ApiList },
    { path: '/apiDetail', name: 'ApiDetail', component: ApiDetail },
    { path: '/myWorkbench', name: 'MyWorkbench', component: MyWorkbench },
    { path: '/documents', name: 'Documents', component: Document },
    { path: '/apiDetail', name: 'ApiDetail', component: ApiDetail },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
