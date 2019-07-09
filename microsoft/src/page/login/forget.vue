<template>

	<div class="login registerNav">
		<div class="login_close"><a href="javascript:history.back(-1);"><img src="@/assets/img/left_back.png" /></a></div>
		<div class="login_hello">
			<p class="hello">忘记密码？</p>

			<!--手机号登录-->

			<div>
				<div class="login_nav">
					<div class="mobile_tip">+86<span class="mui-icon mui-icon-arrowright"></span></div>
					<input @keyup="loginval" type="text" name="" id="" v-model="loginName" placeholder="请输入手机号" />
				</div>
				<!--<span class="login_tip">未注册的手机号验证后自动创建账户</span>-->

				<button id="login_but" :disabled="logindisabled" class="form_submit" @click="getSecuritycode " style="margin-top: 1.96rem;">发送验证码</button>

			</div>

			<!--手机号登录-->

		</div>
		
		<Alert ref="tipshow"></Alert>
		
	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'
	import alert from '@/components/alert'

	export default {

		name: 'login',

		data() {
			return {
				loginName: "",
				loginPassword: "",
				passwordVisible: false,
				logindisabled: true,
				isAccountType: false

			}
		},
		
		components: {

			Alert: alert

		},

		methods: {

			loginval: function() {
				var val = this.loginName.trim()

				var tel = /^1[3|4|5|7|8][0-9]{9}$/
				if(tel.test(val) == true) {
					this.logindisabled = false
				} else {
					this.logindisabled = true
				}

			},

			//获取验证码

			getSecuritycode: function() {

				var tel = this.loginName.trim()

				if(this.logindisabled == true) {
					mui.toast('请输入正确的手机号格式', {
						duration: 'long',
						type: 'div'
					})
					return false
				} else {
					//
					
					let that=this
					
					that.$refs.tipshow.alertshow(5)

					that.axios({
						method: 'get',
						url: '/users/login/phonenumbers/' + this.loginName,

					}).then(function(res) {
                        that.$refs.tipshow.alerthide()
						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						that.$router.push({
							name: 'forgetcode',
							query: {
								tel: tel
							}
						})
					}).catch(function(err) {
                        that.$refs.tipshow.alerthide()
						that.mui.toast("请求失败请稍后重试" + err, {
							duration: 'long',
							type: 'div'
						})

					})
				
				
               }
			},

		},

		mounted: function() {
			mui.init()
			}
		}
</script>

<style src='@/assets/css/register.css'></style>

<style>
	body {
		background: white;
	}
</style>