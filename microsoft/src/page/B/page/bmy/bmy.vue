<template>
	<!-- <div id="bmy bodynav">
		<div class="bmytop">
			<div class="dizhi">{{data.cityName}}</div>
			<div class="xinxi">
				<img :src="data.avatar" style="width: 3rem; height: 3rem; border-radius: 50%;" />
				<div>
					<p class="p1">{{data.dealerName}}</p>
					<p class="p2">{{data.name}}</p>
				</div>
			</div>
		</div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<router-link :to="{name:'Bmycenter'}">
					<a class="mui-navigate-right"><span class="spimg"><img src="../../assets/img/bClient/shenfen.png" style="width: 0.775rem; height: 0.75rem;" /></span><span class="grxx">个人信息</span></a>
				</router-link>
			</li>
			<li class="mui-table-view-cell" >
				<router-link :to="{name:'Bsecurity'}">
					<a class="mui-navigate-right"><span class="spimg"><img src="../../assets/img/bClient/anquan.png" style="width: 0.775rem; height: 0.75rem;" /></span><span class="grxx">账号安全</span></a>
				</router-link>
			</li>
			<li class="mui-table-view-cell">
				<router-link :to="{name:'Bmyhelp'}">
					<a class="mui-navigate-right"><span class="spimg"><img src="../../assets/img/bClient/bangzhu.png" style="width: 0.775rem; height: 0.75rem;" /></span><span class="grxx">使用帮助</span></a>
				</router-link>
			</li>
			<li class="mui-table-view-cell">
				<router-link :to="{name:'Bmyabout'}">
					<a  class="mui-navigate-right"><span class="spimg"><img src="../../assets/img/bClient/banquan.png" style="width: 0.75rem; height: 0.75rem;" /></span><span class="grxx">版权信息</span></a>
				</router-link>
			</li>
		</ul>
		<div class="btn">
			<button>退出登录</button>
		</div>

         <floors :btmuacindex="2"></floors>

	</div> -->
	
	<div id="myplace" style="position: absolute; width: 100%;height: auto;">
	   <div class="myplace_bg">
	   		<img class="myplace_bg_b" src="../../../F/assets/img/myplace/myplace_bg.png">
			<div class="myplace_adress">{{data.cityName}} </div>
			<div class="myplace_message">
				<div style="float: left;"><img  style="width: 3rem; height: 3rem; border-radius: 50%;" :src="data.avatar"></div>
				<div style=" float: left; margin-top: 0.4rem; margin-left: 1rem;">
					<p style="color: #b8ac85; font-size: 1rem; ">{{data.dealerName}}</p>
					<p style="color: white; font-size: 0.7rem;">{{data.name}}</p>
				</div>
			</div>
	   </div>
	   
	    <div style="padding:0 0.5rem; margin-top: 0.5rem;">
	   		   <div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0">
	   			  <ul class="mui-table-view">
	   					<li class="mui-table-view-cell" @click="person_message()">
	   						<a class="mui-navigate-right">
	   							<div style="padding:0.5rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.6rem;  " src="../../../F/assets/img/myplace/myplace_gr.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem;">个人信息</p>		
									<div class="clearfix"></div>
	   							</div>
	   						</a>
	   					</li>
						<li class="mui-table-view-cell" @click="person_security()">
							<a class="mui-navigate-right">
								<div style="padding:0.5rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.8rem;  " src="../../../F/assets/img/myplace/address_su.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; ">账号安全</p>		
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell"  @click="person_myhelp()">
							<a class="mui-navigate-right">
								<div style="padding:0.5rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.8rem;  " src="../../../F/assets/img/myplace/myplace_bz.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; ">使用帮助</p>		
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell"  @click="person_myabout()">
							<a class="mui-navigate-right">
								<div style="padding:0.5rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.8rem;  " src="../../../F/assets/img/myplace/myplace_bb.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; ">版本信息</p>		
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						
	   					
	   				</ul>
	   		   </div>
	   		   
	   </div>
			<div  @click="login"  class="quit_out">退出登录</div>
			<floors :btmuacindex="3"></floors>
	</div>
</template>

<script>
	import axios from 'axios';
	import floor from '@/components/B_bottom.vue'

	export default {
		name: 'bmy',

		data() {

			return {
				data: []
				

			}

		},
		
		
		components: {

			
			floors: floor,

		},

		
		methods: {
			login:function  () {
				
				this.$router.push({ name: 'login'})
				
			},
			person_myabout:function  () {
				
				this.$router.push({ name: 'Bmyabout'})
				
			},
			person_myhelp:function  () {
				
				this.$router.push({ name: 'Bmyhelp'})
				
			},
			person_security:function  () {
				
				this.$router.push({ name: 'Bsecurity'})
				
			},
			person_message:function  () {
				
				this.$router.push({ name: 'Bmycenter'})
				
			}

		},
		mounted: function() {
			var that = this
			that.axios({
				method: 'get',

				url: '/wxapi/b/dealers'

			}).then(function(res) {
				that.data = res.data.data;
				// console.log(res.data.data)

			}).catch(function(err) {
				console.log(err)

			})

		}
		/**/

	}
</script>

<style scoped="scoped">
	.mui-table-view:after {
		height: 0
	}
	
	.mui-table-view:before {
		height: 0
	}
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
				border-bottom: 1px solid #e8eaec;
	
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
			.mui-btn{
				position: relative;
			}
			.myplace_bg{
				padding: 0.5rem;
				position: relative;
			}
			.myplace_bg_b {
				width: 100%;
			} 
			.myplace_adress{
				position: absolute; 
				top: 1.5rem;
				right: 1rem;
				color: white;
				border-radius: 50rem;
				background-image: url(../../../F/assets/img/myplace/address_bg.png);
				background-size: 100% 100%;
				padding: 0.2rem 0.5rem;
			}
			.myplace_message{
				position: absolute; 
				top: 4rem;
				left: 2rem;
			}
			.quit_out{
				width: 100%;
				margin-top: 2rem;
				text-align: center;
				line-height: 2rem;
				height: 2rem;
				color: white;
				font-size: 0.7rem;
				background-image:url(../../../F/assets/img/dealer/dearer_but_bgs.png);
				background-size: 96% 100%;
				background-repeat:no-repeat;
				margin-left: 2%;
				
				
			}
			#myplace{
				margin-bottom: 50px;
			}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* 
	.bmytop {
		position: relative;
		margin: 0.5rem;
		width: 17.75rem;
		height: 9.025rem;
		background: linear-gradient(0deg, rgba(46, 46, 46, 1) 0%, rgba(54, 54, 54, 1) 100%);
		border-radius: 0.25rem;
	}
	
	.dizhi {
		position: absolute;
		top: 0.675rem;
		right: 0.425rem;
		background: rgba(159, 142, 92, 1);
		border-radius: 0.625rem;
		text-align: center;
		width: 3.825rem;
		height: 1.25rem;
		color: rgba(255, 255, 255, 0.5);
		line-height: 1.25rem;
		font-size: 0.625rem;
	}
	
	.xinxi {
		margin-left: 1.15rem;
		padding-top: 3.225rem;
	}
	
	.xinxi>img {
		float: left;
	}
	
	.xinxi>div {
		margin-left: 1.45rem;
		float: left;
	}
	
	.xinxi .p1 {
		font-family: PingFang-SC-Bold;
		font-size: 0.85rem;
		color: rgba(184, 172, 133, 1);
		font-weight: bold;
	}
	
	.xinxi .p2 {
		font-size: 0.725rem;
		color: rgba(255, 255, 255, 0.5);
	}
	
	#bmy>ul {
		margin: 0.5rem;
		border: none;
		border-radius: 0.25rem;
		width: 17.75rem;
		height: 12.5rem;
	}
	
	.spimg {
		display: inline-block;
		margin-right: 0.6rem;
		padding-top: 0.1rem;
	}
	
	.grxx {
		vertical-align: top;
		color: black;
	}
	
	#bmy>ul>li {
		color: black;
		padding-top: 0.75rem;
		padding-left: 1rem;
		height: 3.125rem;
		font-size: 0.8rem;
	}
	
	.btn {
		padding-top: 1.3rem;
		width: 17.75rem;
		height: 3.3rem;
		margin: 0 auto;
	}
	
	.btn button {
		width: 17.75rem;
		height: 2rem;
		background: linear-gradient(90deg, rgba(188, 175, 136, 1) 0%, rgba(126, 116, 90, 1) 100%);
		box-shadow: 0rem 0.175rem 0.35rem 0.05rem rgba(159, 125, 79, 0.22);
		border-radius: 0.25rem;
		color: white;
		font-size: 0.775rem;
	} */
</style>