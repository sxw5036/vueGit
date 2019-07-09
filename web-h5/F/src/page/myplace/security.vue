<template>
	
	<div id="security">
	   	    <div style="padding:0 0.5rem; margin-top: 0.5rem;">
	   		   <div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0">
	   			  <ul class="mui-table-view">
	   						<li class="mui-table-view-cell"  @click="person_recount">
	   							<a class="mui-navigate-right">
	   								<div style="margin-bottom: 0.2rem; padding:0 0 0.3rem 0;">
	   									<img style="float: left; width: 0.8rem; height: 0.8rem; margin-top: 0.4rem; " src="../../assets/img/myplace/address_bd.png">
	   									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">绑定账号</p>
	   									<div class="clearfix"></div>
	   								</div>
	   							</a>
	   						</li>
	   							<li class="mui-table-view-cell" @click="person_repassword">
	   								<a class="mui-navigate-right">
	   									<div style="margin-bottom: 0.2rem; padding: 0.3rem 0;">
	   										<img style="float: left; width: 0.6rem; height: 0.8rem; margin-top: 0.25rem; margin-left: 0.2rem; " src="../../assets/img/myplace/myplace_aq.png">
	   										<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; margin-top: 0.3rem; ">修改密码</p>
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
	
	export default {
		name: 'security',

		data() {

			return {
                 
				
				
			}

		},

	
		methods: {
			person_recount:function  () {
				
				this.$router.push({ name: 'recount'})
				
			},
			person_repassword:function  () {
				
				this.$router.push({ name: 'repassword'})
				
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