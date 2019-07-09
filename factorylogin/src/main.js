// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import flogin from './flogin'
import router from './router'
import axios from 'axios'
Vue.prototype.axios = axios
import VueResource from 'vue-resource'
import iView from 'iview'
import 'iview/dist/styles/iview.css' 
import '@/assets/css/ui.css'
import '@/assets/css/common.css'
Vue.use(VueResource);
Vue.use(iView);


new Vue({
  el: '#flogin',
  router,
  components: { flogin },
  template: '<flogin/>',
  methods: {
	  
  },
  mounted(){
	 axios.interceptors.response.use(
	 response => {
		 console.log(response)
	 if (response.data.code && response.data.code == "20000") {		
	 	this.$Message.error(JSON.stringify(response.data.error));
		return false;
	 }else if(response.data.code && response.data.code != "200"){
	 	this.$Message.error(response.data.error);
		return false
	 }else{
		 return response;
	 }
	 },
	 error => {
	 return Promise.reject(error.response)   // 返回接口返回的错误信息
	 }); 
  }
})
