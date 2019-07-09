<template>
	
	<div id="repassword">
	    <div style="padding:0.5rem 0.5rem">
	   	<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
	   		<ul class="after_sale_title">
	   			<li style="width: 1.1rem; height: 1.1rem;"><img style="width: 100%;" src="../../assets/img/myplace/myplace_settings.png"></li>
	   			<li style="line-height: 1rem; text-align: center; font-size: 1rem; ">修改密码</li>
	   			<div class="clearfix"></div>
	   		</ul>
	   		<div style="padding: 0.5rem;">
	   				<p style="width: 25%; margin-right: 4%; float: left; line-height: 2.2rem;text-align: right;font-size:0.7rem;">旧密码：</p>
	   				<input v-model="oldpassword" type="text" style="border: 1px solid #b1b1b1; height: 2.2rem; box-sizing: border-box; width: 70%; float: left; ">
	   				<div class="clearfix"></div>
	   			</div>
	   			
	   			<div style="padding: 0.5rem; margin-top: -0.5rem;">
	   				<p style="width: 25%; margin-right: 4%; float: left; line-height: 2.2rem;text-align: right;font-size:0.7rem;">新密码：</p>
	   				<input v-model="newpassword" type="text" style="border: 1px solid #b1b1b1; height: 2.2rem; box-sizing: border-box; width: 70%; float: left; ">
	   				<div class="clearfix"></div>
	   			</div>
				<div style="padding: 0.5rem; margin-top: -0.5rem;">
					<p style="width: 25%; margin-right: 4%; float: left; line-height: 2.2rem;text-align: right;font-size:0.7rem;">确认密码：</p>
					<input  v-model="surenewpassword" type="text" style="border: 1px solid #b1b1b1; height: 2.2rem; box-sizing: border-box; width: 70%; float: left; ">
					<div class="clearfix"></div>
				</div>
	   			
	   	</div>
	   </div>
	   
	   <div @click="changepassword"  class="sure_to">确认</div>
	
			
	</div>
	
</template>

<script>
	
	export default {
		name: 'repassword',

		data() {

			return {
                 surenewpassword:'',
				 oldpassword:'',
				 newpassword:'',
				
				
			}

		},

	
		methods: {
			   //修改密码
				changepassword(){
				   let that = this;
				   this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/mobile',
						data:{
						oldPassword:that.oldpassword,
						newPassword:that.newpassword,
						confirmPassword:that.surenewpassword,
						
						
					   }
				}).then(res => {
					  
					   console.log(res)
				     
			  
				 }).catch(function(err) {
				     console.log(err)
			
			     })
			},
			 
		},
		 computed : {
                        

				    },

		mounted: function() {
		          　

		}
		

	}
	
</script>

<style scoped="scoped">
	 ul li {
            margin: 0;
            padding: 0;
            list-style: none;
        }
     
		.clearfix{
			clear: both;
		}
	
		.mui-table-view-cell.mui-active{
			background-color: #0062CC;
		}
		.mui-table-view-cell{
			padding: 0.5rem;
			margin-left: 0.5rem;
			margin-right: 0.5rem;
			border-bottom: 1px solid #e0e0e0;

		}
		.mui-table-view-cell:after{
			height: 0px;
		}
		.mui_ul_li li{
			width: 48%;
			margin-top: 0.3rem;
			color: #a4a4a4;
		}
		.mui-table-view:before{
			height: 0px;
		}
		.mui-table-view:after{
			height: 0px;
		}
		
		
		.after_sale_title li {
			float: left;
			margin-left: 0.5rem;
			margin-bottom: 0.5rem;
			
		}
		.repassword{
			position: relative;
		}
		.sure_to{
			position: fixed;
			bottom: 0;
			width: 100%;
			margin-top: 1rem;
			text-align: center;
			line-height: 2rem;
			height: 2rem;
			color: white;
			font-size: 0.7rem;
			background-image:url(../../assets/img/dealer/dearer_but_bgs.png);
			background-size: 100% 100%;
			background-repeat:no-repeat;
		}
		
		
		
</style>