<template>

	<div class="login registerNav">
		<div class="login_close"></div>
		<div class="login_hello">
			<p class="hello">欢迎登录上海红田</p>

			<!--手机号登录-->

			<div v-show="isAccountType==false">
				<div class="login_nav">
					<div class="mobile_tip">+86<span class="mui-icon mui-icon-arrowright"></span></div>
					<input @keyup="loginval" type="text" name="" id="" v-model="loginName" placeholder="请输入手机号" />
				</div>
				<!--<span class="login_tip">未注册的手机号验证后自动创建账户</span>-->

				<button id="login_but" :class="{disabled:logindisabled==true}" class="form_submit" @click="getSecuritycode " style="margin-top: 1.96rem;">获取验证码</button>

				<div class="change_type" @click="changeLtype">账号密码登录<span class="mui-icon mui-icon-arrowthinright"></span></div>

			</div>

			<!--手机号登录-->

			<!--账号密码登录-->

			<div v-show="isAccountType==true">
				<div class="login_nav">
					<div class="mobile_tip">+86<span class="mui-icon mui-icon-arrowright"></span></div>
					<input @keyup="loginval" type="text" name="" id="" v-model="loginName" placeholder="请输入手机号" />
				</div>

				<div class="login_nav password">
					<div v-show="passwordVisible==false" class="password_tip"><span @click="passwordVisible=!passwordVisible"><img src="@/assets/img/login/conceal.png"/></span></div>
					<div v-show="passwordVisible==true" class="password_tip"><span @click="passwordVisible=!passwordVisible"><img src="@/assets/img/login/visible.png"/></span></div>
					<input v-show="passwordVisible==false" type="password" name="" id="" v-model="loginPassword" placeholder="请输密码" />
					<input v-show="passwordVisible==true" type="text" name="" id="" v-model="loginPassword" placeholder="请输密码" />
				</div>

				<button id="login_but" :class="{disabled:logindisabled==true}" class="form_submit" @click="loginEnter" style="margin-top: 1.96rem;">登录</button>

				<div class="account_change">
					<a @click="changeLtype">手机号登录</a>
					<span @click="forget()">忘记密码</span>
				</div>

			</div>
			<!--账号密码登录-->

			<!--<div class="loginTypeMore">
				<ul>
					<li>
						<router-link to="/weixinauthorize"><span class="mui-icon mui-icon-weixin"></span></router-link>
					</li>
					<li>
						<router-link to="/"><span class="mui-icon mui-icon-qq"></span></router-link>
					</li>
				</ul>
			</div>-->

		</div>

		<!--alert-->
		<Alert ref="tipshow"></Alert>
	</div>

</template>

<script>
	import axios from 'axios'
	import md5 from 'js-md5';
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
			forget(){
				this.$router.push({
					name: 'forget'
					
				})
			},
			loginval: function() {
				var val = this.loginName.trim()

				var tel = /^1[3|4|5|7|8][0-9]{9}$/
				if(tel.test(val) == true) {
					this.logindisabled = false
				} else {
					this.logindisabled = true
				}

			},

			changeLtype: function() {
				this.isAccountType = !this.isAccountType
			},

			//获取验证码

			getSecuritycode: function() {

				var that = this

				var tel = this.loginName.trim()

				if(this.logindisabled == true) {
					mui.toast('请输入正确的手机号格式', {
						duration: 'long',
						type: 'div'
					})
					return false
				} else {

					//
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
							name: 'securitycode',
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

			//登录

			loginEnter: function() {

				var that = this
				if(this.logindisabled == true) {
					mui.toast('请输入正确的手机号格式', {
						duration: 'long',
						type: 'div'
					})
					return false;
				} else if(this.loginPassword.trim().length < 1) {
					mui.toast('请输入密码', {
						duration: 'long',
						type: 'div'
					})
					return false;
				} else {

					that.$refs.tipshow.alertshow(5)

					that.axios({
						method: 'post',
						url: '/users/password/login',
						data: {
							openId: openId,
							loginName: that.loginName,
							password: md5(that.loginPassword)
						}
					}).then(function(res) {
						that.$refs.tipshow.alerthide()
						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						var data = res.data.data
						
						let type=data.type

						//						
						//						 window.location.href="https://erp4.hnlwxf.com?token="+data.token
						
						axios.defaults.headers['X-ATOKEN']=data.token
						
						if(type==0){
							window.location.href = "https://erp4.hnlwxf.com/#/F?token=" + data.token
						}else if(type==1){
							window.location.href = "https://erp4.hnlwxf.com/#/B?token=" + data.token
						}
						
                         
						

					}).catch(function(err) {
						that.$refs.tipshow.alerthide()
						that.mui.toast("请求失败请稍后重试" + err, {
							duration: 'long',
							type: 'div'
						})
					})

				}
			}
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