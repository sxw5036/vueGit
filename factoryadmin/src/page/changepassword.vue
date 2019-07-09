<style>
	.steps{
		padding-top: 10px;
		width: 80%;
		height: 100px;
		margin: 0 auto;
	}
	.tipx{
		margin-bottom: 20px;
		font-size: 14px;
	}	
</style>
<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>修改密码设置</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<div class="steps">
			<Steps :current="current">
				<Step title="身份验证"></Step>
				<Step title="设置新密码"></Step>
				<Step title="完成"></Step>
			</Steps>
		</div>
		<div style="width: 80%;margin: 0 auto;">
			<div class="tipx" v-if="current==0">请输入您绑定的密保手机号：</div>
			<div class="tipx" v-if="current==1">请输入收到的验证码以及你的新密码</div>
			<div class="tipx" v-if="current==2">您已经完成密码的修改</div>
			<Form>							
				<FormItem v-if="current==0">
					<Input style="width: 300px;" v-model="phonenum" placeholder="请输入手机号码..." ></Input>
				</FormItem>
				<FormItem v-if="current==1">
					<Input style="width: 300px;" v-model="phonenum" placeholder="请输入手机号码..." disabled></Input>
				</FormItem>
				<FormItem v-if="current==1">
					<Input style="width: 300px;" v-model="authcode" placeholder="请输入您收到的验证码..." ></Input>
				</FormItem>
				<FormItem v-if="current==1">
					<Input style="width: 300px;" v-model="newpassword" placeholder="请输入您修改的密码..."></Input>
				</FormItem>
				<Button type="primary" @click="getauthcode" v-if="current==0">获取验证码</Button>
				<Button type="primary" @click="setpassword" v-if="current==1">确认修改信息</Button>
			</Form>
		</div>
	</div>
  
</template>
<script>
	import md5 from 'js-md5';
    export default {
      data () {
    return {
        current: 0,
				phonenum:'',
				authcode:'',
				newpassword:''
            }
        },
        methods: {
            next () {           
                    this.current += 1;
            },
		 //获取手机验证码
		getauthcode(){
			let that=this;
			if(that.phonenum==""||that.phonenum==null||!(/^1(3|4|5|7|8)\d{9}$/.test(that.phonenum))){
			   that.$Message.error("输入的手机格式有误");             
			}else{
				this.axios({
				method:'get',
				headers:{
				'X-Requested-With': 'XMLHttpRequest',
				'ContentType': 'application/json;charset=UTF-8'
				},
				url:'/api/sms/phonenumbers/'+that.phonenum
				}).then(res=>{
					if (!res==false) {
						that.next();
					} 				
				})
			}
			
		},
		 //设置密码
		 setpassword(){
		 	let that=this;
		 	this.axios({
		 	method:'put',
		 	headers:{
		 	'X-Requested-With': 'XMLHttpRequest',
		 	'ContentType': 'application/json;charset=UTF-8'
		 	},
		 	url:'/api/f/users/password',
			data:{
				 newpassword:md5(that.newpassword),
				 smsCode:that.authcode,
				 mobile:that.phonenum
			}
		 }).then(res=>{
		 	if (!res==false) {
		 		that.next();
		 	}		 	
		 })
		 }
		
        }
    }
</script>