<template>

	<div class="login registerNav">
		<div class="login_close"><img src="../../assets/img/close.png" /></div>
		<div class="login_hello">
			<p class="hello">欢迎登录上海红田</p>

			<!--手机号登录-->

			<div v-show="isAccountType==false">
				<div class="login_nav">
					<div class="mobile_tip">+86<span class="mui-icon mui-icon-arrowright"></span></div>
					<input @keyup="loginval" type="text" name="" id="" v-model="loginMobile" placeholder="请输入手机号" />
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
					<input @keyup="loginval" type="text" name="" id="" v-model="loginMobile" placeholder="请输入手机号" />
				</div>
				
				
				<div class="login_nav password">
					<div v-show="passwordVisible==false" class="password_tip"><span @click="passwordVisible=!passwordVisible" ><img src="../../assets/img/login/conceal.png"/></span></div>
					<div v-show="passwordVisible==true"  class="password_tip"><span @click="passwordVisible=!passwordVisible" ><img src="../../assets/img/login/visible.png"/></span></div>
					<input v-show="passwordVisible==false" type="password" name="" id="" v-model="loginPassword" placeholder="请输密码" />
					<input v-show="passwordVisible==true" type="text" name="" id="" v-model="loginPassword" placeholder="请输密码" />
				</div>
				

				<button id="login_but" :class="{disabled:logindisabled==true}" class="form_submit" @click="loginEnter" style="margin-top: 1.96rem;">登录</button>

				<div class="account_change"><a @click="changeLtype">手机号登录</a><router-link to="/forget"><span>忘记密码</span></router-link></div>

			</div> 
			<!--账号密码登录-->
			
			
			<div class="loginTypeMore">
					<ul>
						<li><router-link to="/weixinauthorize"><span class="mui-icon mui-icon-weixin"></span></router-link></li>
						<li><router-link to="/"><span class="mui-icon mui-icon-qq"></span></router-link></li>
					</ul>
				</div>

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
				loginPassword:"",
				passwordVisible:false,
				logindisabled: true,
				isAccountType:false
				
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
			
			changeLtype:function(){
				this.isAccountType=!this.isAccountType
			},


            //获取验证码
            
            getSecuritycode:function(){
            	
            	var tel=this.loginMobile.trim()
            	
            	if(this.logindisabled == true) {
					mui.toast('请输入正确的手机号格式', {
						duration: 'long',
						type: 'div'
					})
					return false
				}else{
					this.$router.push({
						name: 'securitycode',query: {tel:tel}
					})
				}
            },

            //登录

			loginEnter: function() {

				if(this.logindisabled == true) {
					mui.toast('请输入正确的手机号格式', {
						duration: 'long',
						type: 'div'
					})
					return false;
				}

			}
		},

		mounted: function() {
		mui.init()
		}
	}
</script>

<style src='./../../assets/css/register.css'></style>

<style >

body{
	background: white;
}

</style>