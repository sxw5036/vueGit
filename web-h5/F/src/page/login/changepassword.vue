<template>

	<div class="securitycode registerNav" >
		<div class="login_close"><a href="javascript:history.back(-1);"><img src="../../assets/img/left_back.png" /></a></div>

		<div class="securitycode_nav" style="padding-right: 2rem;">
			<div class="tip">
				<h3>重置密码</h3>
				<p>+86 {{securitymobile}}</p>
			</div>

			<div class="changePassword">
				<ul>
					<li>
						<input type="password" name="" @keyup="contrastVal" v-model="newpassword" id=""  placeholder="请输入新的密码" />
					</li>
					
					<li>
						<input type="password" name=""  @keyup="contrastVal" v-model="surenewpassword" id=""  placeholder="请再次输入新的密码"  />
					</li>
				</ul>
				<p class="tip">6-16位密码、数字或字母</p>
			</div>

			
			<button id="login_but" :disabled="suredisabled" class="form_submit" @click="sureChangePwd" style="margin-top: 1.96rem;">确认</button>
			
			<Alert ref="tipshow"></Alert>
		
			
		</div>
	</div>

</template>


<script>
	import axios from 'axios'
   import mui from '../../assets/js/mui.js'
   import alert from '../../components/alert'
   import md5 from 'js-md5';

	export default {

		name: 'authorize',

		data() {
			return {
				securitymobile: "",
				suredisabled:true,
				newpassword:"",
				surenewpassword:"",
			}
		},
		
		components: {

			Alert: alert

		},

		methods: {
              contrastVal:function(){
              	
              	var newpassword=this.newpassword.trim()
              	var surenewpassword=this.surenewpassword.trim()           	          	
              	
              	if(surenewpassword.length>0&&newpassword.length>0){
              		
              		this.suredisabled=false
              	}else{
              		this.suredisabled=true
              	
              	}
              	
              	
              },
              
              
              sureChangePwd:function  () {
              	
              	var that=this
              	
              	
              	var newpassword=this.newpassword.trim()
              	var surenewpassword=this.surenewpassword.trim()    
              	
              
              	
              	if(newpassword.length<6||newpassword.length>16){
              		that.mui.toast("请输入6-16位新密码", {
						duration: 'long',
						type: 'div'
					})
              		
              		return false;
              	}else if(surenewpassword.length<1){
              		that.mui.toast("请再次输入新密码" , {
						duration: 'long',
						type: 'div'
					})
              			return false;
              	}else if(surenewpassword!==newpassword){
              		that.mui.toast("两次密码输入不一致" , {
						duration: 'long',
						type: 'div'
					})
              			return false;
              	
              }else{
              	
              	
              	that.$refs.tipshow.alertshow(5)
              	that.axios({
					method: 'put',
					url: '/wxapi/f/branchs/forgetpassword',
					data: {
						mobile: that.securitymobile,
						newPassword:md5(newpassword),
						affirmPassword:md5(surenewpassword)
					}
				}).then(function(res) {
					that.$refs.tipshow.alerthide()

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					
					that.mui.toast("密码修改成功请重新登录", {
						duration: 'long',
						type: 'div'
					})
					
					
					setTimeout(() => {
					
					     that.$router.push({
							name: 'login',
							
						})
					
				     }, 2000)
					

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

			this.securitymobile = this.$route.query.tel

		}
	}
</script>

<style src='./../../assets/css/register.css'></style>

<style>
	body {
		background: RGBA(250, 250, 250, 1);
	}
	
	.again_code{
		display: block;
		width: 100%;
		text-align: center;
		font-size: 0.65rem;
		color: rgba(91, 146, 185, 1);
		margin-top: 1.6rem;
	}
	
	.again_code a{
		color: rgba(91, 146, 185, 1);
	}
</style>