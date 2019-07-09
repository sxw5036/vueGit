<template>
	
	<div id="orderlist">
		<div id="pullrefresh" class="mui-content mui-scroll-wrapper">
		<div class="mui-scroll">
	     <div>
	  		   <div class="after_bg">
	  			   <div style="padding: 0.5rem 0.5rem;">
	  				    <div style="width:42%;  float: left; color: #FFFFFF; margin-top: 0.4rem; ">
	  						<div style="width: 14%; float: left; "><img style="width: 100%; margin-left: 0;" src="../../assets/img/aftersale/tongji_tu.png" /></div>
	  						<div  style="width: 40%; float: left;  font-size: 0.9rem; margin-top: 0.1rem; margin-left: 0.6rem;" >统计</div>
	  						<div class="clearfix"></div>
	  				   </div> 
	  				    <div style="width:50%;  float: right; " class="change_order_re"  @click="change_order_re">
	  						<div  style="width: 90%; float: left; color: white; font-size: 0.7rem; margin-top: 0.4rem;  text-align: right; color:rgba(255,255,255,0.6);">更多统计</div>
	  						<div style="width: 5%; float: right; margin-top: 0.5rem; "><img style="width: 100%;" src="../../assets/img/aftersale/left_arrow.png" /></div>
	  						<div class="clearfix"></div>
	  				   </div> 
	  				   <div class="clearfix"></div>
	  		   	   </div> 
	  				 <div>
	  					<ul class="order_titi" >
	  						<li v-for="item in countNum">
	  							<p>{{item.value}}</p>
	  							<div >{{item.name}}</div>
	  						</li>
	  					
	  					</ul>
	  					 
	  				 </div>
	  		   </div>
	  </div>
	   <div style="padding: 0.5rem;">
	   		   <div class="after_js">
	   			   <div class="aftersale_js">
					    <div style="width:8%; float: left;"><img style="width: 100%;" src="../../assets/img/aftersale/af_js.png" /></div> 
					    <div style="width: 40%; float: left; margin-left: 0.4rem; font-size: 0.9rem; margin-top: 0.2rem;">检索</div>
					   <div class="clearfix"></div>
				   </div>
				   <div class="after_inputs">
					
						<div class="mui-input-row">
							<input v-model="condation" type="text" class="mui-input-clear" placeholder="手机号/客户姓名/订单编号">
						</div>
						<div style="position: relative;">							  <span style="position:absolute;top:30%; left: 40%;"><img style="width: 0.5rem;" src="../../assets/img/dealer/left_ar.png"/></span>
							 <input v-model="startTime"   style="width: 48%; margin-right: 4%; float: left; margin-top: 0.5rem;" type="date" name="" id="" value="开始时间" />
							 							  <span style="position:absolute;top:30%; right: 7%;"><img style="width: 0.5rem;" src="../../assets/img/dealer/left_ar.png"/></span>
							 <input v-model="endTime"  style="width: 48%; float: left; margin-top: 0.5rem;" type="date" name="" id=""  value="结束时间" />
							 <div class="clearfix"></div>
					     </div>
						 <div style="margin-bottom: 0.5rem; margin-top: 0.5rem;">
						 						  <div style="float: left; width: 48%; margin-right: 4%;   height: 2rem; border-radius: 0.25rem;  position: relative;">
						 						     <input :readonly="readonly" style="width: 100%; border: 1px solid #dcdee2; box-sizing: border-box; color:#a4a4a4;"  v-model="searchObj.cityIdName"  @click="addsiteshow=!addsiteshow" placeholder="选择地区">
						 							 <span style="position:absolute;top:0.4rem;right: 11%;"><img style="width: 0.5rem; " src="../../assets/img/dealer/left_ar.png"/></span>
						 						  </div>
						 						  <div style="float: left;width: 48%;color:#a4a4a4;  height: 2rem; line-height: 2rem; padding: 0; border-radius: 0.25rem; border: 1px solid #dcdee2; box-sizing: border-box; position: relative;">
						 						      <select v-model="companyId"  style="width: 100%;  font-size: 0.9rem; height: 1rem; padding: 0; padding-left: 2rem; border: 0; margin: 0;">
						 						      						        <option disabled value="" >经销商</option>
						 						      						   	    <option :key='index' v-for="(coupon,index) in dealerList"  >{{coupon.companyName}}</option>
						 						      </select>
						 							  <span style="position:absolute;top:-0.1rem;right: 13%;"><img style="width: 0.5rem; "  src="../../assets/img/dealer/left_ar.png"/></span>
						 						   </div>
						 						   <div class="clearfix"></div>
						 </div>
					   </div>
					   <div  class="check_more" style="margin-top: 0.5rem;" @click="getsearchorderdatas">查询</div>
				   </div>
				     
	   		  
	   </div>
	   <div style="padding:0.5rem;">
		   <div v-show="orderLists.length==0">
		   				   <div >
		   					     
		   				   </div>
		   				   
		   </div>
		   <div v-show="orderLists.length>0" style="background-color: white; border-radius:0.25rem; padding:0.5rem 0">
			  <ul class="mui-table-view">
					<li class="mui-table-view-cell"  :key='index' v-for="(item,index) in orderLists" @click="changePath(item.orderId)">
						<a class="mui-navigate-right">
							<div>
								<div style="color: #bdb08a; font-size: 1rem;margin:0 0 0.4rem 0;">{{item.statusName}}&nbsp</div>
								<ul class="mui_ul_li">
									<li style=" float: left;">经销商：<span style="font-size: 0.7rem;  color: black;">{{item.dealerName}}&nbsp;</span></li>
									<li style=" float: right;">终端客户：<span style="font-size: 0.7rem; color: black;">{{item.customerName}}&nbsp;</span></li>
									<li style=" float: left;font-size: 0.6rem;margin-bottom: 0.3rem;">订单编号：<span style="color: #5B92B9FF; text-decoration:underline">{{item.orderNo}}&nbsp;</span></li>
									<li style=" float: right; margin-bottom: 0.3rem;font-size: 0.6rem;"><span>{{item.orderCreated}}&nbsp;</span></li>
									<div class="clearfix"></div>
								</ul>
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
	import address from '@/components/address'
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'
	export default {
		name: 'orderlist',

		data() {

			return {
				readonly:true,
				//三级联动
				addsiteshow: false,
				addsiteObj: {},
				searchObj: {
					startTime: "",
					endTime: "",
					cityId:"",
					cityIdName:"",
					condation:"",
					dealerId:""
				
				},
				
                 pageSize: 10,
                 pageNum: 0,
                 totalpage: 0,
                 currents: 1,
				 orderLists:[],
				 countNum:[],
				 dealerList:[],
				 
				 startTime: "",
				 endTime: "",
				 condation:"",
				 companyId:"",
				 pathurl:'',
				 customerId:'',
				 dealerId:'',
				
			}

		},
      
	
		methods: {
			 
			    //三级联动
			    surreAddress: function(obj) {
			    	console.log(obj)
			    	this.addsiteObj = obj;
			    	this.searchObj.cityId=obj.id;
			    	this.searchObj.cityIdName=obj.name
			    	this.addsiteshow = !this.addsiteshow
			    },
				change_order_re:function  () {    	
			    	this.$router.push({ name: 'Forderreport'});
			    },
			    changePath:function  (orderId) {    	
			    	this.$router.push({ name: 'Forderdep', query: { orderId:orderId}})
			    },
			    /**
			     * 下拉刷新具体业务实现
			     */
			    pulldownRefresh: function() {
			    this.currents=1;
			    mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
			    this.getorderdatas()
			    },
				/**
				 * 上拉加载具体业务实现
				 */
				
				pullupRefresh: function() {
				
				  this.currents++;
				  let that = this;
				    this.axios({
				 	method: 'get',
				 	headers: {
				 		'X-Requested-With': 'XMLHttpRequest',
				 		'ContentType': 'application/json;charset=UTF-8'
				 	},
				 	url: '/wxapi/f/branchs/orders?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
				 }).then(res => {
					 
					       that.mui('#pullrefresh').pullRefresh().endPullupToRefresh((that.currents > that.totalpage)); 
				           console.log(res)
				           var data=res.data.data.CustomOrderlist;
				           for (var i=0;i<data.length;i++){
				             that.orderLists.push(data[i]);
				          } 
				          var countdata=res.data.data.count;		        
				        that.countNum=countdata
				          that.pageSize = res.data.pagination.pageSize;
				          that.pageNum = res.data.pagination.pageNum;
				          that.totalpage = res.data.pagination.pages;
				  })
				 
				
				},
					
					
				getsearchorderdatas(){	
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
						
						url: '/wxapi/f/branchs/orders?'+(that.condation == '' ? '' : '&condation=' + that.condation)+(that.startTime == '' ? '' : '&startTime=' + that.startTime) + (that.endTime == '' ? '' : '&endTime=' + that.endTime)+ (that.companyId == '' ? '' : '&dealerId=' + that.companyId)+ (that.searchObj.cityId == '' ? '' : '&cityId=' + that.searchObj.cityId)+'&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
					}).then(res => {
						   // that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
						  
					       var data=res.data.data.CustomOrderlist;
						   that.orderLists=[];
					       for (var i=0;i<data.length;i++){
					         that.orderLists.push(data[i]);
					      } 
					
						  var countdata=res.data.data.count;				
						  that.countNum=countdata;
						  that.pageSize = res.data.pagination.pageSize;
						  that.pageNum = res.data.pagination.pageNum;
						  that.totalpage = res.data.pagination.pages;
				  
					 })
				},	
				getorderdatas(){		
					let that = this;
					var url=""
					if(that.dealerId!=undefined){
						url='/wxapi/f/branchs/orders?'+'&dealerId=' + that.dealerId + '&pageNum=' + that.currents + '&pageSize=' + that.pageSize;
					}
					else if(that.customerId!=undefined){
						url='/wxapi/f/branchs/orders?'+ '&customerId=' + that.customerId + '&pageNum=' + that.currents + '&pageSize=' + that.pageSize;
						
					 }else if(that.pathurl!=undefined){
						url='/wxapi/f/branchs/orders?'+ that.pathurl + '&pageNum=' + that.currents + '&pageSize=' + that.pageSize;
						
					 }else if(that.customerId==undefined && that.dealerId==undefined&& that.pathurl==undefined){
						   url='/wxapi/f/branchs/orders?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize;
						}
					
				   
				      this.axios({
				   	method: 'get',
				   	headers: {
				   		'X-Requested-With': 'XMLHttpRequest',
				   		'ContentType': 'application/json;charset=UTF-8'
				   	},
				   	url: url,
				   }).then(res => {
				   	   that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
				   	   console.log(res)
				          var data=res.data.data.CustomOrderlist;
				   	   that.orderLists=[];
				          for (var i=0;i<data.length;i++){
				            that.orderLists.push(data[i]);
				         } 
				   
				   	  var countdata=res.data.data.count;				
				   	  that.countNum=countdata;
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
					   
					   that.dealerList=res.data.data
					   
				      
			  
				 })
			},
		},
		  components: {
		
			Address: address
		
		},
		mounted: function() {
                    this.pathurl=this.$route.query.url;
			        this.dealerId=this.$route.query.dealerId;
					this.customerId=this.$route.query.customerId;
					console.log(this.pathurl)
					this.getorderdatas();         
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
							mui("#pullrefresh").on('tap', '.check_more', function (event) {
						        this.click();
						    });
							mui("#pullrefresh").on('tap', '.change_order_re', function (event) {
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
			.after_bg{
			width: 100%;
			height: auto;
		      background-image: url(../../assets/img/aftersale/order_bg.png);
			  background-size: 100% 100%;
			  border-radius: 0.25rem;
			  padding: 0.5rem 0.5rem;
			  height: 9rem;
			  margin-bottom: -1rem;
			  margin-top: -0.5rem;
		}
		.after_js{
			background-color: white;
			border-radius: 0.25rem;
			padding: 0.5rem 0.5rem;
		}
		.after_inputs{
			margin-top: 0.5rem;
		}
		.after_inputs input{
			border-radius: 0.25rem; height: 2rem; text-align: center; color: #a4a4a4;
		}
		.mui-table-view-cell.mui-active{
			background-color: #0062CC;
		}
		.mui-table-view-cell{
			padding: 0.5rem;
			margin-left: 0.4rem;
			
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
		.check_more{
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
		.order_titi{
			padding: 0.5rem 0;
		}
		.order_titi li{
			width: 32%; 
			border-right: 0.05rem solid rgba(182,188,206,0.5);
			box-sizing: border-box;
			display: inline-block;
		}
		.order_titi li:last-child{
		    border-right: none;		
		}
		.order_titi li p{
			font-size:1rem; text-align: center; color: white; margin-top: 0.9rem;
		}
		.order_titi li div{
			text-align: center;margin-bottom: 0.8rem; font-size: 0.6rem;color:rgba(255,255,255,0.5);
		}
		.intent_p{
			width: 100%;
			height: 100%;
			font-size: 0.8rem;
			padding: 0.6rem;
			text-align: center;
			
		}
		.intent_icon{
			display: block;
			position:absolute;
			top:0.8rem;
			left:80%;
		}
		.mui-content{
			padding: 0;
		}
</style>