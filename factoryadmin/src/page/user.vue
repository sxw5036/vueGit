<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>个人信息设置</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<div>
			<div style="background:#eee;padding: 20px">
				<Card :bordered="false">
					
					<p>
						<Form  :label-width="80">							
							<FormItem label="昵称">
								<Input v-model="username" placeholder="请输入昵称..."></Input>
							</FormItem>
							<FormItem label="邮箱">
								<Input v-model="email" placeholder="请输入邮箱..."></Input>
							</FormItem>										
							<FormItem label="性别">
								<RadioGroup v-model="sex">
									<Radio label="0">男</Radio>
									<Radio label="1">女</Radio>
								</RadioGroup>
							</FormItem>
						<!-- 	<FormItem label="角色">
							<Input v-model="role" placeholder="请输入我的角色..."></Input>
							</FormItem>	 -->																			
							<FormItem>
								<Button type="primary" @click="putuserinformation">确认信息</Button>
							</FormItem>						
						</Form>
					</p>
				</Card>
			</div>
		</div>
	</div>
</template>

<script>
	/* import '../assets/js/jurisdiction.js' */
	export default {
		data() {
			return {
				 allrole: [],
				  sex:'0',
					name:'',
					username: '',
          email:'',
					tel:'',
					role:'',
					textarea: '',
				  repairpasswordstatus:'确认发送'
			}
		},
		components: {

		},

		methods: {
     repairpassword(){
			 alert(123)
		 },
		 getuserinformation(){
			 let that=this;
			 this.axios({
			 method: 'get',
			 headers: {
			 	'X-Requested-With': 'XMLHttpRequest',
			 	'ContentType': 'application/json;charset=UTF-8'
			 },
			 url: '/api/f/users/info'
			 }).then(res => {
					 that.username =res.data.data.userName;
					 that.sex=res.data.data.sex+"";
					 that.email=res.data.data.email;
			 })
		 },
		 putuserinformation(){
			 let that=this;
			 this.axios({
			 	method: 'put',
			 	headers: {
			 		'X-Requested-With': 'XMLHttpRequest',
			 		'ContentType': 'application/json;charset=UTF-8'
			 	},
			 	url: '/api/f/users/info',
				data:{
					   sex:that.sex,
						 name:that.username,
						 email:that.email      		
				}
			 }).then(res => {
        
			 })
		 },
		 //获取角色信息
		},
		mounted() {
			this.getuserinformation();
			let argumentObj={name: "1312321"};
			for(let argu in argumentObj){
				console.log(argu)
			}
		},
		created() {}

	}
</script>

<style>

</style>
