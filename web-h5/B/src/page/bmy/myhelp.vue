<template>
	
	<div id="myhelp">
		<header  class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
					
					<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">使用帮助</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">
			
		</div>
		
		  <div style="padding:0 0.5rem; margin-top: 0.5rem;">
				   <div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0">
					   <div>
						  
						   <div class="mui-content" id="mui-content_input">
						   		<div class="mui-input-row mui-search" id="mui-content_fa">
						   			<input type="search" class="mui-input-clear" placeholder="搜索问题" style="text-align: center;border-radius: 10rem; font-size: 0.7rem; " >
						   		</div>						   	
						   </div>
						   <!-- 	<input type="text" style=" height: 1.6rem; font-size:0.7rem; color: #636363; text-align: center; margin-left: 10%;  width: 52%; float: left; border-radius: 50rem; background-color: #efefef; border: none; " value="搜索问题">		 -->	   
						  <div class="clearfix"></div>
					   </div>
					  <ul class="mui-table-view">
							<li class="mui-table-view-cell" v-for="(item,index) in data " :key="index">
									<router-link :to="{name:'helpDetails',query:{id:item.id,name:item.name}}">
								<a class="mui-navigate-right">
									<div style="padding:0.5rem 0;">
											
											<p style="font-size: 0.8rem;color: black;  line-height: 1rem;color:#636363; ">{{item.name}}</p>		
											
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
		name: 'myhelp',

		data() {

			return {
                 
				data:[]
				
			}

		},

	
		methods: {
			
			 
		},
		 computed : {
                        

				    },

		mounted: function() {
		          　
				  var that=this
				this.axios({
					method: 'get',
					
					url: '/wxapi/b/dealers/helps'
				
				}).then(function(res) {
					that.data=res.data.data;
					console.log(res.data.data)
				
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
		.myhelp_wt{
			margin-top: 2rem;
		}
		.myhelp_wt li{
			width: 25%;
			float: left;
			
		}
		.myhelp_wt li img{
			display: block;
			margin: 0 auto;
			width: 2.5rem;
			height: 2.5rem;
			
		}
		.myhelp_wt li p{
			font-size: 0.8rem;
			width: 100%;
			text-align: center;
			line-height: 1.2rem;
			color: black;
			margin-top: 0.5rem;
			letter-spacing: 0.05rem;
		}
		#mui-content_input{
			width: 16rem; 
			margin-left: 5%;
			float: left;
			background-color: transparent;
		}
		#mui-content_fa{
			background-color: transparent;
		}
		
		
</style>