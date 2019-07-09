// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.axios = axios
import VueResource from 'vue-resource'
import iView from 'iview'
import 'iview/dist/styles/iview.css' 
import'@/assets/css/swiper.min.css'
import '@/assets/css/ui.css'
import '@/assets/css/common.css'
import '@/assets/js/jurisdiction.js'
import $ from "jquery"

Vue.use(VueResource);
Vue.use(iView);

let _ = require("lodash");

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
	  
  },
  mounted(){
axios.interceptors.response.use(
	 response => {
	 let dataCode = response.data.code;
	 if(dataCode === '200' || dataCode === '20000'){
		 return response;
	 }else{
	 	 this.$Message.error(response.data.error);
	 return false
	 }
	
	 },
	 error => {
	 return Promise.reject(error.response)   // 返回接口返回的错误信息
	 });
  }
})
