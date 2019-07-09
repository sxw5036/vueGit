<template>
	
	<div id="myabout">
	   <header  class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
	   			
	   			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
	   	<h1 class="mui-title">版权信息</h1>
	   </header>
	   <div style="width: 100%; height: 2.1rem;">
	   	
	   </div>
	   
	    <div style=" margin-top: 0.5rem;">
	   		   <div style="background-color: white; padding-top: 3.5rem; ">
				   <div class="myabout_log">
				   		  <div style="width: 3.1rem; height: 3.1rem; margin: auto;"><img style="width: 100%; height: 100%;" src="../../assets/img/myplace/myplace_gy.png"></div>
						  <div style="color: #636363; letter-spacing: 0.1rem; margin-top: 0.5rem; text-align: center;">版本号 10.1.1</div>
						   
			       </div>
				
				 <div style="margin-top: 1rem;">   
						  <ul class="mui-table-view">
												
												<li class="mui-table-view-cell">
													<a class="mui-navigate-right">
														<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">   			 									
															<p style=" font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">版本说明</p>
														</div>
													</a>
												</li>
												<li class="mui-table-view-cell">
													<a class="mui-navigate-right">
														<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">   			 									
															<p style=" font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">去评分</p>
														</div>
													</a>
												</li>
												<li class="mui-table-view-cell">
													<a class="mui-navigate-right">
														<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">   			 									
															<p style=" font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">版本信息</p>
														</div>
													</a>
												</li>
												<li class="mui-table-view-cell">
													<a class="mui-navigate-right">
														<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">   			 									
															<p style=" font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">服务协议</p>
														</div>
													</a>
												</li>
												
						 </ul>
				 </div>
	   		   </div>  
	   </div>
			
	</div>
	
</template>

<script>
	
	export default {
		name: 'myabout',

		data() {

			return {
                 
				
				
			}

		},

	
		methods: {
			
			 
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
		.myabout_log{
			
		}
		
</style>