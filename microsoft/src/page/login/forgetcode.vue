<template>

	<div class="securitycode registerNav">
		<div class="login_close">
			<a href="javascript:history.back(-1);"><img src="@/assets/img/left_back.png" /></a>
		</div>

		<div class="securitycode_nav">
			<div class="tip">
				<h3>输入验证码</h3>
				<p>验证码已发送至+86 {{securitymobile}}</p>
			</div>

			<div class="securitycode_val">
				<input id="codeVal" class="operation" @focus="setFocus" @click="setFocus" @keyup="setCode" type="text" value="" name="" />

				<ul class="code">
					<li v-for="item in codeArry">{{item}}</li>
				</ul>

				<ul class="style">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>

			<p id="time_tip" v-show="codeButShow==false">60秒回重新获取验证码</p>
			<button id="login_but" :disabled="suredisabled" @click="sureCode" class="form_submit" style="margin-top: 1.96rem;">确认</button>

			<span class="again_code" v-show="codeButShow==true"><a  @click="changAgainTime">获取验证码</a></span>
		</div>
		
		<Alert ref="tipshow"></Alert>
		
	</div>

</template>

<script>
	import axios from 'axios'
	import alert from '@/components/alert'
	import mui from '@/assets/js/mui.js'
	var fnu = null
	export default {

		name: 'authorize',

		data() {
			return {
				securitymobile: "",
				codeArry: [],
				codeButShow: false,
				suredisabled: true
			}
		},
		
		components: {

			Alert: alert

		},

		methods: {

			setFocus: function(e) {

				var code = document.getElementById("codeVal")
				code.focus()
				var len = code.value.trim().length

				code.selectionStart = code.selectionEnd = len;

			},

			setCode: function() {
				var code = document.getElementById("codeVal");
				var codeval = code.value.trim()

				this.codeArry = []

				if(codeval.length > 0) {
					for(var i = 0; i < codeval.length; i++) {
						this.codeArry.push(codeval.substr(i, 1))
					}

					if(codeval.length >= 4) {
						this.suredisabled = false
						code.blur()
					}
				}

			},

			changAgainTime: function() {
				this.codeButShow = false
				var againTime = 60

				var that = this
				clearInterval(fnu)
				fnu = setInterval(() => {
					againTime--

					document.getElementById("time_tip").innerHTML = againTime + '秒回重新获取验证码'

					if(againTime == 0) {
						clearInterval(fnu)
						document.getElementById("time_tip").innerHTML = '60秒回重新获取验证码'
						that.codeButShow = true

					}

				}, 1000)
			},
			//获取验证码
			
			getcode: function() {
				var that = this

				that.$refs.tipshow.alertshow(5)

				that.axios({
					method: 'get',
					url: '/users/login/phonenumbers/' + this.securitymobile,

				}).then(function(res) {
					that.$refs.tipshow.alerthide()
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.mui.toast("发送成功", {
						duration: 'long',
						type: 'div'
					})
                    clearInterval(fnu)
					that.changAgainTime()
				}).catch(function(err) {
					that.$refs.tipshow.alerthide()
					that.mui.toast("请求失败请稍后重试" + err, {
						duration: 'long',
						type: 'div'
					})

				})
			},
			
			
			//验证码登录
			sureCode: function() {

				var that = this
				var code = document.getElementById("codeVal")
				that.$refs.tipshow.alertshow(5)
				that.axios({
					method: 'post',
					url: '/wxapi/f/users/login',
					data: {
						loginName: that.securitymobile,
						smsCode: code.value
					}
				}).then(function(res) {
					that.$refs.tipshow.alerthide()

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					
					that.$router.push({
							name: 'changepassword',
							query: {
								tel: that.securitymobile
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


//			sureCode: function() {
//				this.$router.push({
//					name: 'changepassword',
//					query: {
//						tel: this.securitymobile
//					}
//				})
//			}

		},

		mounted: function() {

			this.securitymobile = this.$route.query.tel
			clearInterval(fnu)
			this.changAgainTime()

		},
		
		destroyed: function() {
			clearInterval(fnu)
		}
	}
</script>

<style src='@/assets/css/register.css'></style>

<style>
	body {
		background: RGBA(250, 250, 250, 1);
	}
</style>