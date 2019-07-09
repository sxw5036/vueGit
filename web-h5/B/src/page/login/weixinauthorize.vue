<template>

	<div class="authorize registerNav" >
		<div class="authorize_nav">

			<div class="authorize_iconNav">
				<div class="jiaohuan"></div>
				<div class="icon weixin"></div>
				<div class="icon app"></div>
			</div>

			<p class="authorize_tip">允许掌上关键小程序获取您的基本信息</p>
			<button class="form_submit" @click="">授权微信用户信息</button>
		</div>
	</div>

</template>

<script>
	import axios from 'axios'


	export default {

		name: 'authorize',

		data() {
			return {

			}
		},

		methods: {

		},

		mounted: function() {
		
		}
	}
</script>

<style src='./../../assets/css/register.css'></style>

<style>
	body {
		background: RGBA(250, 250, 250, 1);
	}
</style>