<template>
	<div id="login">
		<div class="login">
			<div class="login_center">
				<div class="login_title">用户登录</div>
				<ul>
					<li>
						<input v-on:keydown="logindown" v-model="loginName" type="text" value="" placeholder="请输入用户名">
					</li>

					<li>
						<input v-on:keydown="logindown" v-model="loginPassword" type="password" value="" placeholder="请输入密码">
					</li>

					<li>
						<button class="sub" @click="login">登录</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import md5 from 'js-md5';
	export default {
		name: 'login',
		data() {
			return {
				loginName: "",
				loginPassword: ""
			}
		},
		methods:{
			login(){
				let that = this
				if (that.loginName == "" || that.loginName == null || that.loginName.trim().length == 0) {
					that.$Message.info('用户名不能为空');
					return false
				} else if (that.loginPassword == "" || that.loginPassword == null || that.loginPassword.trim().length == 0) {
					that.$Message.info('密码不能为空');
					return false
				}
				
				
				const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});
				
			    that.axios({
					method:'post',
					headers:{
					'X-Requested-With': 'XMLHttpRequest',
					'ContentType': 'application/json;charset=UTF-8'
					},
					url:'/api/f/users/login',
					data:{
						loginName: that.loginName,
			            password: md5(that.loginPassword)
						}
				}).then(function(res){
					if (res.data.error) {
						alert('账号密码错误');		
						
					} else{
						let gopage=res.data.go;
						if (gopage=='/fadmin') {
							that.$router.push({
								name: 'mall'
							}
						)	
					}
					}					
				}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						
					})
				
				setTimeout(msg, 100);
				
				
							
			},
			logindown(e){
				if (e.keyCode == 13) {
					this.login();
				}
			}
		},
		mounted: function() {
			this.$Spin.hide();
		}
	}
</script>

<style scoped="scoped">
	.login {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 1;
		background: wheat;
		/*background-image:url(../assets/loginback.jpg);*/
		background: wheat;
	}

	.login_center {
		position: fixed;
		top: 50%;
		right: 15%;
		height: 300px;
		margin-top: -150px;
		margin-right: -150px;
		background: white;
		z-index: 2;
		width: 300px;
		border-radius: 10px;
	}


	.login_center .login_title {
		display: block;
		text-align: center;
		font-size: 16px;
		color: #000000;
		border-bottom: solid 1px rgb(221, 222, 225);
		padding: 12px 0px;
	}


	.login_center ul {
		display: block;

		padding: 26px;
		padding-bottom: 0px;

	}

	.login_center ul li {
		display: block;
		width: 100%;
		padding-bottom: 26px;
	}

	.login_center ul li input {
		display: block;
		background: none;
		border: solid 1px rgb(221, 222, 225);
		border-radius: 5px;
		width: 100%;
		padding: 0px 10px;
		font-size: 14px;
		outline: none;
		line-height: 36px;
	}


	.login_center ul li .sub {
		background: cornflowerblue;
		display: block;
		border: none;
		outline: none;
		width: 100%;
		padding: 6px 0px;
		color: white;
		font-size: 14px;
		margin: 0px auto;
		border-radius: 5px;
		cursor: pointer;
	}

	.login_center ul li .sub:hover {
		opacity: 0.9;
		fill-opacity: 90;
	}
</style>
