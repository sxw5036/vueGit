<template>
	
	<div id="myhelp">
		 <div id="pullrefresh" class="mui-content mui-scroll-wrapper">
		<div class="mui-scroll">
		  <div style="padding:0 0.5rem; margin-top: 0.5rem;">
				   <div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0">
					   <div>
						 <!--  <p style="color: #a6875d; font-size: 1rem; line-height: 1.6rem; padding-left: 0.7rem; float: left; width: 30%;">
						   		帮助中心				   
						   </p> -->
						   <div class="mui-content" id="mui-content_input">
						   		<div class="mui-input-row mui-search" id="mui-content_fa">
						   			<input type="search" v-model="search_data" @change="getsearchdatas()" class="mui-input-clear" placeholder="搜索问题" style="text-align: center;border-radius: 10rem; font-size: 0.7rem;padding-left: 0.5rem; " >
						   		</div>						   	
						   </div>
						   <!-- 	<input type="text" style=" height: 1.6rem; font-size:0.7rem; color: #636363; text-align: center; margin-left: 10%;  width: 52%; float: left; border-radius: 50rem; background-color: #efefef; border: none; " value="搜索问题">		 -->	   
						  <div class="clearfix"></div>
					   </div>
					  <ul class="mui-table-view" >
							<li class="mui-table-view-cell"  v-show="myhelplist.length==0" v-for="item in myhelplist"  @click="changePath(item.id)">
								<a class="mui-navigate-right">
									<div style="padding:0.5rem 0;">
											
											<p style="font-size: 0.8rem;color: black;  line-height: 1rem;color:#636363; ">{{item.name}}</p>		
											
									</div>
								</a>
							</li>
								
								
						</ul>
				   </div>
				   
		</div>
		
     </div>
	 </div>
			
	</div>
	
</template>

<script>
	import mui from '../../assets/js/mui.js'
	export default {
		name: 'myhelp',

		data() {

			return {
                pageSize: 10,
                pageNum: 0,
                totalpage: 0,
                currents: 1,
				myhelplist:[],
				search_data:'',
				
				
			}

		},

	
		methods: {
			/**
			 * 下拉刷新具体业务实现
			 */
			pulldownRefresh: function() {
			this.currents=1;
			mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
			this.getmyhelpdatas()
			},
			pullupRefresh: function() {
				 this.currents++;
				let that = this;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/helps?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
				}).then(res => {
					   that.mui('#pullrefresh').pullRefresh().endPullupToRefresh((that.currents > that.totalpage));
					   console.log(res)
				      that.myhelplist=res.data.data.ContentsDto;
					  that.pageSize = res.data.pagination.pageSize;
					  that.pageNum = res.data.pagination.pageNum;
					  that.totalpage = res.data.pagination.pages;
							  
				 })	 
			},

			changePath:function  (myhelpId) {
				
				this.$router.push({ name: 'helpDetails', query: { myhelpId:myhelpId }})
				
			},
			
				getmyhelpdatas(){			
				   let that = this;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/helps?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
				}).then(res => {
					  that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
					   console.log(res)
				      that.myhelplist=res.data.data.ContentsDto;
					  that.pageSize = res.data.pagination.pageSize;
					  that.pageNum = res.data.pagination.pageNum;
					  that.totalpage = res.data.pagination.pages;
			  
				 })
			},
			getsearchdatas(){			
				   let that = this;
				   that.pageSize = "";
				   that.pageNum="";
				   that.totalpage="";
				   that.currents= 1;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/helps?'+(that.search_data == '' ? '' : '&name=' + that.search_data)+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
				}).then(res => {
					    that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
					   console.log(res)
				      that.myhelplist=res.data.data
					
					  that.pageSize = res.data.pagination.pageSize;
					  that.pageNum = res.data.pagination.pageNum;
					  that.totalpage = res.data.pagination.pages;
			  
				 })
			},
			 
		},
		 computed : {
                        

				    },

		mounted: function() {
		          　this.getmyhelpdatas();
				  var that = this
				  mui.init({
				  	pullRefresh: {
				  		container: '#pullrefresh',
				  		down: {
				  			style:'circle',
				  			callback: that.pulldownRefresh
				  		},
				  		up: {
				  			contentrefresh: '正在加载...',
				  			callback: that.pullupRefresh
				  		}
				  	}
				  })
				  mui("#pullrefresh").on('tap', 'li', function (event) {
				          this.click();
				      });

		},
		created: function() {
			
			for(var i = mui.hooks.inits.length - 1, item; i >= 0; i--) {
		
				item = mui.hooks.inits[i];
				if(item.name == "pullrefresh") {
					item.repeat = true;
				}
			}
		
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
			
			padding: 0 0.5rem;
		
			background-color: transparent;
		}
		#mui-content_fa{
			background-color: transparent;
			
		}
		.mui-content{
			padding: none;
		}
		
</style>