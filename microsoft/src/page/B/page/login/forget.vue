<template>

	<div class="login registerNav">
		<div class="login_close"><a href="javascript:history.back(-1);"><img src="../../assets/img/left_back.png" /></a></div>
		<div class="login_hello">
			<p class="hello">忘记密码？</p>

			<!--手机号登录-->

			<div>
				<div class="login_nav">
					<div class="mobile_tip">+86<span class="mui-icon mui-icon-arrowright"></span></div>
					<input @keyup="loginval" type="text" name="" id="" v-model="loginMobile" placeholder="请输入手机号" />
				</div>
				<!--<span class="login_tip">未注册的手机号验证后自动创建账户</span>-->

				<button id="login_but" :disabled="logindisabled" class="form_submit" @click="getSecuritycode " style="margin-top: 1.96rem;">发送验证码</button>

			</div>

			<!--手机号登录-->

		</div>
	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '../../assets/js/mui.js'

	export default {

		name: 'login',

		data() {
			return {
				loginMobile: "",
				loginPassword: "",
				passwordVisible: false,
				logindisabled: true,
				isAccountType: false

			}
		},

		methods: {

			loginval: function() {
				var val = this.loginMobile.trim()

				var tel = /^1[3|4|5|7|8][0-9]{9}$/
				if(tel.test(val) == true) {
					this.logindisabled = false
				} else {
					this.logindisabled = true
				}

			},

			//获取验证码

			getSecuritycode: function() {

				var tel = this.loginMobile.trim()

				if(this.logindisabled == true) {
					mui.toast('请输入正确的手机号格式', {
						duration: 'long',
						type: 'div'
					})
					return false
				} else {
					this.$router.push({
						name: 'forgetcode',
						query: {
							tel: tel
						}
					})
				}
			},

		},

		mounted: function() {
			mui.init()
			}
		}
</script>

<style src='./../../assets/css/register.css'></style>

<style>
	body {
		background: white;
	}
</style>