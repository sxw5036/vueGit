<template>
	
	<div id="recount">
		<header  class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
					
					<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">绑定账号</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">
			
		</div>
	   <div style="padding:0.5rem 0.5rem">
	   	<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
	   		<ul class="after_sale_title">
	   			<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/myplace/myplace_setting.png"></li>
	   			<li style="line-height: 1rem; text-align: center; font-size: 1rem;  font-weight: 600;">绑定账号</li>
	   			<div class="clearfix"></div>
	   		</ul>
	   		<div style="padding: 0.5rem;">
				<p style="width: 25%; margin-right: 4%; float: left; line-height: 2.2rem; font-size:0.7rem; text-align: right;">当前账号：</p>
				<input type="text" style="border: 1px solid #b1b1b1; height: 2.2rem; box-sizing: border-box; width: 70%; float: left; " readonly="readonly" :value="data1.mobile">
				<div class="clearfix"></div>
			</div>
			<div style="padding: 0.5rem; margin-top: -0.5rem;">
				<p style="width: 25%; margin-right: 4%; float: left; line-height: 2.2rem; text-align: right;">验证码：</p>
				<div type="text" style="border: 1px solid #b1b1b1;border-radius: 0.25rem; height: 2.2rem; box-sizing: border-box; width: 70%; float: left; ">
					<input type="text"  v-model="oldCode" style="border:0; outline: none; height: 2.1rem; line-height: 2.1rem;  width: 60%; float: left;">
					<p @click="clickCode()" style="width: 39%; border-left: 1px solid #b1b1b1 ; float: right; font-size: 0.7rem; padding-left: 0.4rem; line-height: 1.4rem; margin-top: 0.4rem; color: black;">
							获取验证码
					</p>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
			<div style="padding: 0.4rem; margin-top: -0.4rem;">
				<p style="width: 25%; margin-right: 4%; float: left;font-size:0.7rem; line-height: 2.2rem;text-align: right;">新绑定手机：</p>
				<input  v-model="newMobile" type="text" style="border: 1px solid #b1b1b1; height: 2.2rem; box-sizing: border-box; width: 70%; float: left; ">
				<div class="clearfix"></div>
			</div>
			<div style="padding: 0.4rem; margin-top: -0.4rem;">
				<p style="width: 25%; margin-right: 4%; float: left; line-height: 2.2rem; text-align: right;">确认手机号：</p>
				<div type="text" style="border: 1px solid #b1b1b1;border-radius: 0.25rem; height: 2.2rem; box-sizing: border-box; width: 70%; float: left; ">
					<input type="text"  v-model="twoNewMobile" style="border:0; outline: none; height: 2.1rem; line-height: 2.1rem;  width: 60%; float: left;">
					
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
			
	   	</div>
	   </div>
	   <div  class="sure_to"  @click="submitZH()">确认</div>
	
			
	</div>
	
</template>

<script>
	
     import alert from '@/components/alert'
	export default {
		name: 'recount',

		data() {

			return {
				data1:[],
                 oldMobile:"",
                 newMobile: "",
                 oldCode: "",
                 twoNewMobile : ""
				
				
			}

		},
		
	
		methods: {
			submitZH(){
				if(this.newMobile == this.twoNewMobile){
					
						var that=this
					      this.axios({
					      	method: 'put',
					      	data: {
					      		oldMobile: this.oldMobile,
					      		newMobile: this.newMobile,
					      		oldCode:this.oldCode ,
					      		newCode : this.newCode
					      		
					      	},
					      	url: '/wxapi/b/dealers/mobile'
					      }).then(function(res) {
					      	console.log(res)
							var verify = [{
							  "name": "oldMobile",
							  "note": "旧号码"
							 },
							 {
							  "name": "newMobile",
							  "note": "新号码"
							 },
							 {
							  "name": "oldCode",
							  "note": "旧验证码 "
							 },
							{
							  "name": "twoNewMobile",
							  "note": "二次输入手机号"
							 }
							]
							
							if(Isjurisdiction.isright(res, that, verify) == false) {
							    return false
								console.log(false)
							}
					      }).catch(function(err) {
					      	console.log(err)
					      })
				}else{
					alert("请确认两次输入是否一致")
				}
				
			},
			clickCode(){
				  var that=this
				this.axios({
					method: 'get',
					
					url: '/api/sms/phonenumbers/'+this.oldMobile
				
				}).then(function(res) {
					//that.data=res.data.data;
					console.log(res)
				
				}).catch(function(err) {
					console.log(err)
				
				})
			},
			clickCode1(){
				  var that=this
				this.axios({
					method: 'get',
					
					url: '/api/sms/phonenumbers/'+this.newMobile
				
				}).then(function(res) {
					//that.data=res.data.data;
					console.log(res)
				
				}).catch(function(err) {
					console.log(err)
				
				})
			}
			 
		},
		 computed : {
                        

				    },

		mounted: function() {
				var that = this
			that.axios({
				method: 'get',
			
				url: '/wxapi/b/dealers/loginUserInfo'
			}).then(function(res) {
				that.data1=res.data.data
				console.log(res.data)
			}).catch(function(err) {
				console.log(err)
			})
			
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
			bottom: 1rem;
			width: 17.75rem;
			margin-left: 0.5rem;
			text-align: center;
			line-height: 2rem;
			height: 2rem;
			color: white;
			font-size: 0.7rem;
			background:linear-gradient(90deg,rgba(187,175,137,1) 0%,rgba(127,116,91,1) 100%);
			box-shadow:0 0.175rem 0.5rem  0.05rem rgba(128,117,92,0.41);
			border-radius:0.25rem;
		}
		
		
		
</style>