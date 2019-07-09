<template>
	
	<div id="mycenter">
		<header  class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
					
					<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">个人信息</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">
			
		</div>
	    <div style="padding:0 0.5rem; margin-top: 0.5rem;">
	   		   <div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0">
	   			  <ul class="mui-table-view">
	   					<li class="mui-table-view-cell">
	   						<a class="mui-navigate-right">
	   							<div style="margin-bottom: 0.2rem; ">
									<img style="float: left; width: 1rem; height: 1rem; margin-top: 0.65rem; " src="../../assets/img/myplace/myplace_tx_s.png">
									<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.7rem; ">头像</p>
									<img style="float: right; margin-right: 1.5rem; width: 2.5rem; height: 2.5rem; border-radius: 50%; "  :src="data.avatar">
									<div class="clearfix"></div>
	   							</div>
	   						</a>
	   					</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;" @click="sexchanges(data.sex)">
									<img style="float: left; width: 1rem; height: 1rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_xb.png">
									<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">性别</p>
									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{data.sexValue}}</p>
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								<div style="margin-bottom: 0.2rem;padding: 0.3rem 0;" @click="birthday(birthdayAA)">
									<img style="float: left; width: 1rem; height: 1rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_nl.png">
									<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">生日</p>
									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{birthdayAA}}</p>
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;" @click="education(data.education)">
									<img style="float: left; width: 1rem; height: 1rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_xl.png">
									<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">学历</p>
									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{data.educationValue}}</p>
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								<div style="margin-bottom: 0.2rem;padding: 0.3rem 0;" @click="identiy(data.identityNumber)">
									<img style="float: left; width: 1rem; height: 0.8rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_sfz.png">
									<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">身份证</p>
									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{data.identityNumber}}</p>
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">
									<img style="float: left; width: 0.7rem; height: 1rem; margin-top: 0.25rem; margin-left: 0.2rem; " src="../../assets/img/myplace/myplace_sj.png">
									<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">手机</p>
									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{data.mobile}}</p>
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
	   				</ul>
	   		   </div>  
	   </div>
	   
	    <div style="padding:0 0.5rem; margin-top: 0.5rem;">
	   		   <div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0">
	   			  <ul class="mui-table-view">
	   						<li class="mui-table-view-cell">
	   							<a class="mui-navigate-right">
	   								<div style="margin-bottom: 0.2rem; padding:0 0 0.3rem 0;">
	   									<img style="float: left; width: 1rem; height: 1rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_bm.png">
	   									<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">部门</p>
	   									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;"><span v-for="(item,index)  in dept" :key="index" >&nbsp;{{item.name}}</span> </p>
	   									<div class="clearfix"></div>
	   								</div>
	   							</a>
	   						</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">
										<img style="float: left; width: 0.7rem; height: 1rem; margin-top: 0.25rem; margin-left: 0.2rem; " src="../../assets/img/myplace/myplace_gw.png">
										<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">岗位</p>
										<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{data.roleName}}</p>
										<div class="clearfix"></div>
									</div>
								</a>
							</li>
	   						<li class="mui-table-view-cell">
	   							<a class="mui-navigate-right">
	   								<div style="margin-bottom: 0.2rem;padding: 0.3rem 0;">
	   									<img style="float: left; width: 1rem; height: 1rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_time.png">
	   									<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">入职时间</p>
	   									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{data.entryTime}}</p>
	   									<div class="clearfix"></div>
	   								</div>
	   							</a>
	   						</li>
	   						<li class="mui-table-view-cell">
	   							<a class="mui-navigate-right">
	   								<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">
	   									<img style="float: left; width: 1rem; height: 1rem; margin-top: 0.4rem; " src="../../assets/img/myplace/myplace_zt.png">
	   									<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">状态</p>
	   									<p style=" float: right; margin-right: 1.5rem;font-size: 0.8rem; line-height: 1rem; margin-top: 0.3rem;">{{data.statusName}}</p>
	   									<div class="clearfix"></div>
	   								</div>
	   							</a>
	   						</li>
	   				</ul>
	   		   </div>  
	   </div>
			
	</div>
	
</template>

<script>
	import mui from '@/assets/js/mui.js'
	import axios from 'axios';
	
	export default {
		name: 'mycenter',

		data() {

			return {
                 data:[],
				 depts:[],
				 dept:[],
				 birthdayAA:''
				
				
			}

		},

	
		methods: {
			birthday(birthdayAA){
				this.$router.push({ name: 'Bbirthday', query: { birthday:birthdayAA}})
			 },
			 education(education){
				this.$router.push({ name: 'Beducation', query: { education:education }})
			 },
			  sexchanges(sex){
				   this.$router.push({ name: 'Bsexchanges', query: { sex:sex }})
			   },
			   identiy(identityNumber){
				   this.$router.push({ name: 'Bchanges', query: { identityNumber:identityNumber }})
			   }
			 
		},
		 computed : {
                        

				    },

		mounted: function() {
		        var that=this
				that.axios({
					method: 'get',
					
					url: '/wxapi/b/dealers/info'
				
				}).then(function(res) {
					console.log(res)
					that.data=res.data.data;
					that.birthdayAA		=res.data.data.birthday.substring(0,10)
				    that.depts=res.data.data.depts
					
					for (var i=0 ;i<2 ;i++) {
						that.dept.push( that.depts[i])
					}
					
				
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
			background-image: url(../../assets/img/myplace/address_bg.png);
			background-size: 100% 100%;
			padding: 0.2rem 0.5rem;
		}
		.myplace_message{
			position: absolute; 
			top: 4rem;
			left: 2rem;
		}
		
		
</style>