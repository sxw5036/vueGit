<template>
	
	<div id="recount">
	   <div style="padding:0.5rem 0.5rem">
	   	<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
	   		<ul class="after_sale_title">
	   			<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/myplace/myplace_setting.png"></li>
	   			<li style="line-height: 1rem; text-align: center; font-size: 0.8rem;  ">绑定账号</li>
	   			<div class="clearfix"></div>
	   		</ul>
	   		<div style="padding: 0.5rem;">
				<p style="width: 30%; margin-right: 4%; float: left; line-height: 2.2rem; font-size:0.7rem; text-align: right;">当前账号：</p>
				<input v-model="oldnum" type="text" style="border: 1px solid #b1b1b1; height: 2.2rem; font-size: 0.8rem; box-sizing: border-box; width: 65%; float: left;" placeholder="请输入当前账号">
				<div class="clearfix"></div>
			</div>
			<div style="padding: 0.5rem; margin-top: -0.5rem;">
				<p style="width: 30%; margin-right: 4%; float: left; line-height: 2.2rem; text-align: right;">验证码：</p>
				<div type="text" style="border: 1px solid #b1b1b1;border-radius: 0.25rem; height: 2.2rem; box-sizing: border-box; width: 65%; float: left; ">
					<input v-model="telcode" type="text" style="border:0; outline: none; height: 2.1rem;  font-size: 0.8rem; line-height: 2.1rem;  width: 60%; float: left; " placeholder="请输入验证码">
					<p @click="getcodesdatas" style="width: 39%; border-left: 1px solid #b1b1b1 ; float: right; font-size: 0.7rem; padding-left: 0.4rem; line-height: 1.4rem; margin-top: 0.4rem; color: black;">
							获取验证码
					</p>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div style="padding: 0.5rem; margin-top: -0.5rem;">
				<p style="width: 30%; margin-right: 4%; float: left;font-size:0.7rem; line-height: 2.2rem;text-align: right;">新手机号：</p>
				<input v-model="newnum" type="text" style="border: 1px solid #b1b1b1; height: 2.2rem;  font-size: 0.8rem; box-sizing: border-box; width: 65%; float: left; " placeholder="请输入新的手机号">
				<div class="clearfix"></div>
			</div>
			<div style="padding: 0.5rem; margin-top: -0.5rem;">
				<p style="width: 30%; margin-right: 4%; float: left;font-size:0.7rem; line-height: 2.2rem;text-align: right;">确认号码：</p>
				<input v-model="newnumsure" type="text" style="border: 1px solid #b1b1b1; height: 2.2rem;  font-size: 0.8rem; box-sizing: border-box; width: 65%; float: left; " placeholder="请确认新的手机号">
				<div class="clearfix"></div>
			</div>
	   	</div>
	   </div>
	
	   
	   <div @click="sure_to"  class="sure_to">确认</div>
	
			
	</div>
	
</template>

<script>
	
	export default {
		name: 'recount',

		data() {

			return {
                 oldnum:'',
				 telcode:'',
				 newnum:'',
				 newnumsure:'',
				
			}

		},

	
		methods: {
			
                //获取验证码
				getcodesdatas(){			
				   let that = this;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/users/login/phonenumbers/'+ that.oldnum,
				}).then(res => {
					  
					   console.log(res)
				     
			  
				 }).catch(function(err) {
				     console.log(err)

			     })
			},
			   //提交手机号
				sure_to(){			
				   let that = this;
				   this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/mobile',
					data:{
						oldMobile:that.oldnum,
						smsCode:that.telcode,
						newMobile:that.newnum,
						twoNewMobile:that.newnumsure,
						
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
		#recount{
			position: relative;
		}
		.sure_to{
			position: fixed;
			bottom: 0;
			width: 100%;
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