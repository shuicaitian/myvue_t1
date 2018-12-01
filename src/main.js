// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
//import echarts from 'echarts'
import iView from 'iview'; // 导入iview组件库
import 'iview/dist/styles/iview.css'; // 导入iview样式
import axios from 'axios';
import VueAxios from 'vue-axios';
//import qs from 'qs';

Vue.use(VueAxios, axios);
Vue.use(iView);
Vue.config.productionTip = false;

//vue.prototype.$qs=qs;//

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
