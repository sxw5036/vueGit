<template>
	<div id="login">
		<div class="login">
			<div class="loginlogo">
				<img src="../assets/loginlogo.png" alt="">
			</div>
			<div class="login_center">
				<div class="login_title">工业4.0管理系统登录</div>
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
			       if(!res==false){
					   	let gopage=res.data.go;
					   	window.location.href=res.data.go;
				   }
				})
				
				
				
				
							
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
		background: url(../assets/loginbg.png) center no-repeat;
	}
    .loginlogo img{
		position: fixed;
		width: 10%;
		padding: 10px;
	}
	.login_center {
		position: fixed;
		top: 55%;
		right: 25%;
		height: 350px;
		margin-top: -200px;
		margin-right: -200px;
		z-index: 2;
		width: 400px;
		border-radius: 10px;
		box-shadow:0 0 30px #eee;
		background: #FFFFFF;
	}
 

	.login_center .login_title {
		display: block;
		text-align: center;
		font-size: 20px;
		color: #262B33;
		/* border-bottom: solid 1px rgb(221, 222, 225); */
		padding: 20px 0px;
		font-weight: 700;
	}


	.login_center ul {
		display: block;
		padding: 30px;
		padding-top: 20px;
		padding-bottom: 0px;

	}

	.login_center ul li {
		display: block;
		width: 100%;
		padding-bottom: 36px;
	}
    .login_center input::-webkit-input-placeholder{
     
         font-size: 14px;
		 font-weight: 700;
	}

	.login_center ul li input {
		display: block;
		background: none;
		border: solid 1.2px #a4a4a4;
		border-radius: 5px;
		width: 100%;
		padding: 0px 10px;
		font-size: 14px;
		outline: none;
		line-height: 36px;
	}


	.login_center ul li .sub {
		background: #1a8afa;
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
