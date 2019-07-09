<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<router-view/>
	</div>
</template>

<script>

	import axios from 'axios'

	var cfg = window.lwxfPreload

	
	axios.defaults.headers['X-SID']=cfg.appcfg['X-SID']
	axios.defaults.headers['X-PHPSESSID']=cfg.appcfg['X-PHPSESSID']
	axios.defaults.headers['X-C-ID']=cfg.preload.currCompanyId
	axios.defaults.headers['X-Requested-With']='XMLHttpRequest'
	axios.defaults.headers['ContentType']='application/json;charset=UTF-8'
	
			

	export default {
		name: 'App',

		methods: {

			axioses: function() {

				var _this = this

				_this.axios({
					method: 'get',
					url: '/api/sys/touch',

				}).then(function(res) {

				}).catch(function(err) {
				

				})

			},

		},
		mounted: function() {

			setInterval(() => {
				this.axioses()

			}, 1500000)

		},

		watch: {
			'$route' (to, from) {
				this.$Spin.hide();

			

				
			}
		}
	}
</script>

<style>
	/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>