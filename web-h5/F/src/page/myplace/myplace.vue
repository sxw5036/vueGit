<template>
	
	<div id="myplace">
	   <div class="myplace_bg">
	   		<img class="myplace_bg_b" src="../../assets/img/myplace/myplace_bg.png">
			<div class="myplace_adress">{{mypace.cityName}} </div>
			<div class="myplace_message">
				<div style="float: left;"><img  style="width: 3rem; height: 3rem; border-radius: 50%;" :src="mypace.avatar"></div>
				<div style=" float: left; margin-top: 0.4rem; margin-left: 1rem;">
					<p style="color: #b8ac85; font-size: 1rem; ">{{mypace.dealerName}}</p>
					<p style="color: white; font-size: 0.7rem;">{{mypace.name}}</p>
				</div>
			</div>
	   </div>
	   
	    <div style="padding:0 0.5rem; margin-top: 0.5rem;">
	   		   <div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0">
	   			  <ul class="mui-table-view">
	   					<li class="mui-table-view-cell" @click="person_message">
	   						<a class="mui-navigate-right">
	   							<div style="padding:0.5rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.6rem;  " src="../../assets/img/myplace/myplace_gr.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem;">个人信息</p>		
									<div class="clearfix"></div>
	   							</div>
	   						</a>
	   					</li>
						<li class="mui-table-view-cell" @click="person_security">
							<a class="mui-navigate-right">
								<div style="padding:0.5rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.8rem;  " src="../../assets/img/myplace/address_su.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; ">账号安全</p>		
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell"  @click="person_myhelp">
							<a class="mui-navigate-right">
								<div style="padding:0.5rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.8rem;  " src="../../assets/img/myplace/myplace_bz.png">
									<p style=" float: left;font-size: 0.8rem;color: black; margin-left: 0.5rem; line-height: 0.8rem; ">使用帮助</p>		
									<div class="clearfix"></div>
								</div>
							</a>
						</li>
						<li class="mui-table-view-cell"  @click="person_myabout">
							<a class="mui-navigate-right">
								<div style="padding:0.5rem 0;">
									<img style="float: left; width: 0.8rem; height: 0.8rem;  " src="../../assets/img/myplace/myplace_bb.png">
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
	
	import floor from '../../components/bottom.vue'
	
	export default {
		name: 'myplace',

		data() {

			return {
                 
				mypace:{},
				
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
				
				this.$router.push({ name: 'myabout'})
				
			},
			person_myhelp:function  () {
				
				this.$router.push({ name: 'myhelp'})
				
			},
			person_security:function  () {
				
				this.$router.push({ name: 'security'})
				
			},
			person_message:function  () {
				
				this.$router.push({ name: 'mycenter'})
				
			},
			
			 //加载得到供应商列表
			 	getmyplacedatas(){			
			 	   let that = this;
			 	   this.axios({
			 		method: 'get',
			 		headers: {
			 			'X-Requested-With': 'XMLHttpRequest',
			 			'ContentType': 'application/json;charset=UTF-8'
			 		},
			 		url: '/wxapi/f/branchs'
			 	}).then(res => {
			 		   // mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
			 		   console.log(res)
			           that.mypace=res.data.data
			 		//    that.dealerLists=[];
			 	 //       for (var i=0;i<data.length;i++){
			 	 //         that.dealerLists.push(data[i]);
			 	 //      } 
			 		//  
			 		//   var countdata=res.data.data.count;
			 		// 
			 		
			   
			 	 })
			 },
		},
		 computed : {
                        

				    },

		mounted: function() {
		          　this.getmyplacedatas();

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
			background-image: url(../../assets/img/myplace/address_bg.png);
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
			background-image:url(../../assets/img/dealer/dearer_but_bgs.png);
			background-size: 96% 100%;
			background-repeat:no-repeat;
			margin-left: 2%;
			
			
		}
		#myplace{
			margin-bottom: 50px;
		}
		
</style>