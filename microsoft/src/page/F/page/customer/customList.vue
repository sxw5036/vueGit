<template>
	
	<div id="customList">
       <div id="pullrefresh" class="mui-content mui-scroll-wrapper">
       <div class="mui-scroll">
	   <div style="background-color: white; padding: 0.5rem 0.5rem 1rem 0.5rem;">
		    <div class="mui-content" id="mui-content_input">
		   		<div class="mui-input-row mui-search" id="mui-content_fa">
		   			 <input  type="search" v-model="search_input"  @change="searchdata()" class="mui-input-clear" placeholder="搜索问题" style="text-align: center;border-radius: 10rem; background-color: #efefef; font-size: 0.7rem; height: 1.8rem; line-height: 1.8rem;" >
		   		</div>						   	
		   </div>
		   <div>
			  <ul class="custom_select">
				   <li>
					   <div id="xzdq111" style="width:100%; position: relative; padding-top: 0.1rem;">
						   <input   :readonly="onlyread" style="width: 100%; text-align: center; height: 1.4rem; margin-top: 0.2rem ;  font-size: 0.625rem;  border: none; outline: none; " @change="searchdata()"  v-model="searchObj.cityIdName" @click="addsiteshow=!addsiteshow" placeholder="选择地区">
						   <span style="position:absolute;top:0.25rem; left:90%; width: 0.4rem; height: 0.4rem;"><img style="width: 100%;" src="../../assets/img/custom/jiantou.png"/></span>
					    </div>
				   </li>
				   <li  style="text-align: center;">
					   <div style="width:100%; position: relative; ">
					       <select class="mui-btn mui-btn-block" style="color: #000000;font-size: 0.625rem; padding: 0; margin-top: 0.55rem; margin-left: 1.4rem;" v-model="search_dealer"  @change="getvaluedealer($event)">
						        <option disabled value="">经销商</option>
						   	    <option :value="coupon.companyId" :key='index' v-for="(coupon,index) in dealerList" >{{coupon.companyName}}</option>
						   </select>
					        <span style="position:absolute;top:-0.3rem; left:78%; width: 0.4rem; height: 0.4rem;"><img style="width: 100%;" src="../../assets/img/custom/jiantou.png"/></span>       
					   
					   </div>
				   </li>
				   <li  style="text-align: center;">
					   <div style="width:100%; position: relative; ">
					       <select class="mui-btn mui-btn-block"  style="color: #000000;font-size: 0.625rem; margin-left: 0.6rem; padding: 0;margin-top: 0.55rem;" v-model="search_type"  @change="getcustom($event)">
						     <option disabled value="">客户类型</option>
						   	 <option :value="coupon.value" :key='index' v-for="(coupon,index) in couponList2" >{{coupon.name}}</option>
						   </select>
					       <span style="position:absolute;top:-0.3rem; left:65%; width: 0.4rem; height: 0.4rem;"><img style="width: 100%;" src="../../assets/img/custom/jiantou.png"/></span>     
					   </div>
				   </li>
				   <div class="clearfix"></div>
			  </ul>
		   </div>
	   </div>
	   
	    <div style=" margin-top: 0.5rem;">
			   <div v-show="customLists.length==0">
				   <div >
					     
				   </div>
				   
			   </div>
	   		   <div v-show="customLists.length>0">
					  <ul class="mui-table-view" style="background-color: white; border-radius:0.25rem;padding:0.5rem ">
							<li class="mui-table-view-cell"  :key='index' v-for="(item,index) in customLists" @click="changePath(item.customerId)">
								<a class="mui-navigate-right">
									<div>
										<div style="float: left; width: 15%; border-right:1px solid #e0e0e0; height: 2.5rem; line-height: 2.5rem; margin-top: 0.8rem;">
											<img style="width: 50%; margin-left: 10%; margin-top: 0.3rem;" src="../../assets/img/custom/custom_kh.png">
										</div>
										<div style="float: left; width: 84%;">
											<ul >
												<li style=" font-size: 0.7rem;  color: #636363FF;">【{{item.companyType}}】{{item.companyName}}</li>
												<li  style=" margin: 0.5rem 0.5rem;">
													<p style="font-size: 0.9rem;color: #bbae87; float: left; ">{{item.customerName}}</p>
													<p style="font-size: 0.8rem;float: right; margin-right: 0.5rem; color: black;">{{item.customerMobile}}</p>
													<div class="clearfix"></div>
												</li>
												<li style="font-size: 0.6rem; margin-left: 0.5rem; color:rgba(99,99,99,0.5); "><p style=" width: 11rem; white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{item.customerMergerName}}</p></li>
											</ul>
										</div>
										<div class="clearfix"></div>
									</div>
								</a>
							</li>

						</ul>
				  
	   		   </div>
	   		   
	   </div>
	</div>
	</div>
	<Address :show="addsiteshow" @sure='surreAddress' @cancel="addsiteshow=!addsiteshow"></Address>
	</div>
	
</template>

<script>
	import axios from 'axios'
	import address from '@/components/address'
	import mui from '@/assets/js/mui.js'

	
	export default {
		name: 'customList',

		data() {

			return {
				search_input:'',
				search_dealer:'',
				search_type:'',
				
				
				onlyread: true,
				addsiteshow: false,
				searchObj: {
					startTime: "",
					endTime: "",
					cityId:"",
					cityIdName:"",
					condation:"",
					dealerId:""
				
				},
			
				
						  dealerList:[],
												  couponList2:[   
													 {          
														 value: "1",
														 name: '潜在客户'
												
													},{
												          value: "2",
														  name: '执行客户'
														},{
														 value: "3",
														name: '正常客户'
												
																		　　　　}],
						　　　　couponSelected: '',
						       customLists:[],
							  pageSize: 10,
							  pageNum: 0,
							  totalpage: 0,
							  currents: 1,
				             
				
			}

		},
           components: {
          
          	Address: address
          
          },
	
		methods: {
			getcustom(event){
				this.search_type = event.target.value;
				this.searchdata();
			},
			getvaluedealer(event){
				this.search_dealer = event.target.value;
				this.searchdata();
			},
			//三级联动
			surreAddress: function(obj) {
				this.addsiteObj = obj;
				this.searchObj.cityId=obj.id;
				this.searchObj.cityIdName=obj.name
				this.addsiteshow = !this.addsiteshow
				this.searchdata();
			},
			
			changePath:function  (customerId) {
				
				this.$router.push({ name: 'FcustomDep', query: { customerId:customerId }})
				
			},
			
			
			/**
			 * 下拉刷新具体业务实现
			 */
			pulldownRefresh: function() {
			this.currents=1;
			mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
			this.getcustomdatas()
			},
			
			/**
			 * 上拉加载具体业务实现
			 */
			
			pullupRefresh: function() {
			
			 this.currents++;
			 
			 console.log(this.currents,this.totalpage)
			 
			  let that = this;
			    this.axios({
			 	method: 'get',
			 	headers: {
			 		'X-Requested-With': 'XMLHttpRequest',
			 		'ContentType': 'application/json;charset=UTF-8'
			 	},
			 	url: '/wxapi/f/branchs/customers?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
			 }).then(res => {
				 
				    that.mui('#pullrefresh').pullRefresh().endPullupToRefresh((that.currents > that.totalpage)); 
			        var data=res.data.data.result;
			        for (var i=0;i<data.length;i++){
			          that.customLists.push(data[i]);
			       } 
			 	  that.pageSize = res.data.pagination.pageSize;
			 	  that.pageNum = res.data.pagination.pageNum;
			 	  that.totalpage = res.data.pagination.pages;
			   
			  })
			 
			
			},
			searchdata(){
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
					url: '/wxapi/f/branchs/customers?'+(that.searchObj.cityId == '' ? '' : '&cityId=' + that.searchObj.cityId)+ (that.search_type == '' ? '' : '&type=' + that.search_type)+ (that.search_input == '' ? '' : '&condation=' + that.search_input) + (that.search_dealer == '' ? '' : '&dealerId=' + that.search_dealer)+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
				}).then(res => {
					  that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
					  console.log(res)
				       var data=res.data.data.result;
					   that.customLists=[];
				       for (var i=0;i<data.length;i++){
						  
				         that.customLists.push(data[i]);
				      } 
					  that.pageSize = res.data.pagination.pageSize;
					  that.pageNum = res.data.pagination.pageNum;
					  that.totalpage = res.data.pagination.pages;
				  
				 })
				},
			
			//加载得到客户列表
				getcustomdatas(){			
				   let that = this;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/customers?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
				}).then(res => {
					   that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
					   console.log(res)
				       var data=res.data.data.result;
					   that.customLists=[];
				       for (var i=0;i<data.length;i++){
						  
				         that.customLists.push(data[i]);
				      } 
					  that.pageSize = res.data.pagination.pageSize;
					  that.pageNum = res.data.pagination.pageNum;
					  that.totalpage = res.data.pagination.pages;
  
				 })
			},
			//加载得到经销商列表
				getdealerdatas(){			
				   let that = this;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/dealers/addCustomer'
				}).then(res => {
					   console.log(res)
					   that.dealerList=res.data.data			  
				 })
			},
			
			
			 
		},
		 computed : {
                        

				    },

		mounted: function() {

                    this.getcustomdatas();
					this.getdealerdatas();
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
	#xzdq111>input::-webkit-input-placeholder {
	      /* placeholder颜色  */
	      color: black;
	     
	  }
	 ul li {

            margin: 0;
            padding: 0;
            list-style: none;
        }
     
		.clearfix{
			clear: both;
		}
		.after_sale_title li {
			float: left;
			margin-left: 0.5rem;
			margin-bottom: 0.5rem;
			
		}
		.closer_order{
			margin: 0.5rem 0;
		}
		.closer_order li{
			float: left;
			width: 48%;
		}
		.production{
			border-radius: 10rem;
			height: 2rem;
			background-color: #efefef;
			text-align: center;
			color: #636363;
			font-size: 0.6rem;
		}
		.custom_select li{
			float: left;
			width: 33.33%;
			text-align: center;
			margin-bottom: -1rem;
			margin-top: -0.5rem;
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
		#mui-content_input{
			background-color: transparent;
			padding: 0;
		
		}
		#mui-content_fa{
			background-color: transparent;
		}
		.mui-content{
			padding: 0;
		}
</style>