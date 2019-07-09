<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<router-view></router-view>
	</div>
</template>

<script>
	import axios from 'axios'

	var urlval = window.location.href
	var token = "";
	if(urlval.indexOf("?") != -1 && urlval.indexOf("token=") != -1) {

		token = urlval.split("token=")[1];
        axios.defaults.headers['X-ATOKEN'] = token
	}



	export default {
		name: 'App'
	}
</script>

<style src='./assets/css/style.css'></style>

<style>
	body,
	html {
		overflow: auto;
	}
	/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>