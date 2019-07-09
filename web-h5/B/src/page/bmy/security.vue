<template>
	
	<div id="security">
		<header  class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
					
					<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">账号安全</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">
			
		</div>
	   	    <div style="padding:0 0.5rem; margin-top: 0.5rem;">
	   		   <div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0">
	   			  <ul class="mui-table-view">
	   						<li class="mui-table-view-cell">
									<router-link :to="{name:'recount'}">
	   							<a class="mui-navigate-right">
	   								<div style="margin-bottom: 0.2rem; padding:0 0 0.3rem 0;">
	   									<img style="float: left; width: 1rem; height: 1rem; margin-top: 0.4rem; " src="../../assets/img/myplace/address_bd.png">
	   									<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">绑定账号</p>
	   									<div class="clearfix"></div>
	   								</div>
	   							</a>
								</router-link>
	   						</li>
	   							<li class="mui-table-view-cell">
									<router-link :to="{name:'repassword'}">
	   								<a class="mui-navigate-right">
	   									<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">
	   										<img style="float: left; width: 0.9rem; height: 1rem; margin-top: 0.25rem; margin-left: 0.2rem; " src="../../assets/img/myplace/myplace_aq.png">
	   										<p style=" float: left;font-size: 0.9rem;color: black; margin-left: 0.5rem; line-height: 1rem; margin-top: 0.3rem; ">修改密码</p>
	   										<div class="clearfix"></div>
	   									</div>
	   								</a>
									</router-link>
	   							</li>

	   				</ul>
	   		   </div>  
	   </div>
	
	   
	  
	
			
	</div>
	
</template>

<script>
	
	export default {
		name: 'security',

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