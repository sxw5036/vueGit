<template>

	<div class="securitycode registerNav">
		<div class="login_close">
			<a href="javascript:history.back(-1);"><img src="../../assets/img/left_back.png" /></a>
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
			<span class="again_code" v-show="codeButShow==true"><a  @click="getcode">获取验证码</a></span>

		</div>

		<Alert ref="tipshow"></Alert>
	</div>

</template>

<script>
	import axios from 'axios'
	import alert from '../../components/alert'

	var nu = null

	export default {

		name: 'authorize',

		data() {
			return {
				securitymobile: "",
				codeArry: [],
				codeButShow: false,
				againTime: 60,
				openId:"",
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
						code.blur()
						this.codlogin()
					}
				}

			},

			changAgainTime: function() {
				this.codeButShow = false
				var againTime = this.againTime

				var that = this
				clearInterval(nu)
				nu = setInterval(() => {
					againTime--

					document.getElementById("time_tip").innerHTML = againTime + '秒回重新获取验证码'

					if(againTime <= 0) {
						clearInterval(nu)
						document.getElementById("time_tip").innerHTML = '60秒回重新获取验证码'
						that.codeButShow = true

					}

				}, 1000)
			},

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
			codlogin: function() {

				var that = this
				var code = document.getElementById("codeVal")
				that.$refs.tipshow.alertshow(5)
				that.axios({
					method: 'post',
					url: '/wxapi/f/users/login',
					data: {
						openId:openId,
						loginName: that.securitymobile,
						smsCode: code.value
					}
				}).then(function(res) {
					that.$refs.tipshow.alerthide()
					
					var data=res.data.data

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					
					window.location.href = "https://erp4.hnlwxf.com?token=" + data.token

				}).catch(function(err) {
					that.$refs.tipshow.alerthide()
					that.mui.toast("请求失败请稍后重试" + err, {
						duration: 'long',
						type: 'div'
					})
				})
			}

		},

		mounted: function() {
			
			//从小程序第一次跳转的主页路径中获取的openId
			this.openId=openId

			this.securitymobile = this.$route.query.tel

			clearInterval(nu)

			this.changAgainTime()

		},

		destroyed: function() {
			clearInterval(nu)
		}
	}
</script>

<style src='./../../assets/css/register.css'></style>

<style>
	body {
		background: RGBA(250, 250, 250, 1);
	}
</style>