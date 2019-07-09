// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.axios = axios
/*import VueVideoPlayer from 'vue-video-player'*/

// require videojs style
/*import 'video.js/dist/video-js.css'*/
// import 'vue-video-player/src/custom-theme.css'
/*import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
*/
/*import iView from 'iview'
import 'iview/dist/styles/iview.css' 
Vue.use(iView);*/
import './assets/fonts/font.css'
import './assets/css/mui.css'
import './assets/js/jurisdiction.js'
//import './assets/css/mui.picker.min.css' 

import mui from './assets/js/mui.js'
Vue.prototype.mui = mui

router.beforeEach((to, form, next) => {
	if(to.meta.title){
	
		document.title=to.meta.title
	}
	
	next()
})



axios.get('./../static/config.json').then((res) => {
	// 基础地址	

	Vue.prototype.BASE_URL = res.data.BASE_URL;
	axios.defaults.baseURL = res.data.BASE_URL

	new Vue({
		el: '#app',
		router,
		components: {
			App
		},
		template: '<App/>'
	})

})
/*Vue.use(VueVideoPlayer,  {
  options: global default options,
  events: global videojs events
} )*/
/* eslint-disable no-new */