import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
Vue.use(Router)
export default new Router({
	routes: [
		//总后台	
	{
		path: '/',
		name: 'login',
		component: login,
		meta: {
			title: "登录"
		}	
		}
	]
})
