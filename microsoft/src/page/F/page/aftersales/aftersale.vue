<template>
	
	<div id="aftersale">
		<div id="pullrefresh" class="mui-content mui-scroll-wrapper">
		<div class="mui-scroll">
	    <div>
	  		   <div class="after_bg">
	  			   <div style="padding: 0.5rem 0.5rem;">
	  				    <div style="width:42%;  float: left; color: #FFFFFF; margin-top: 0.4rem; ">
	  						<div style="width: 14%; float: left; "><img style="width: 100%; margin-left: 0;" src="../../assets/img/aftersale/tongji_tu.png" /></div>
	  						<div  style="width: 60%; float: left;  font-size: 0.9rem; margin-top: 0.1rem; margin-left: 0.6rem;">今日统计</div>
	  						<div class="clearfix"></div>
	  				   </div> 
	  				    <div style="width:50%;  float: right; " class="click" @click="shouhou">
	  						<div  style="width: 90%; float: left; color: white; font-size: 0.7rem; margin-top: 0.4rem;  text-align: right; color:rgba(255,255,255,0.6);">更多统计</div>
	  						<div style="width: 0.3rem; float: right; margin-top: 0.4rem; "><img style="width: 100%;" src="../../assets/img/aftersale/left_arrow.png" /></div>
	  						<div class="clearfix"></div>
	  				   </div> 
	  				   <div class="clearfix"></div>
	  		   	   </div> 
	  				 <div> 
	  					<ul style="padding: 0.5rem 0;">
	  						<li style="width: 32%;  border-right: 0.05rem solid rgba(182,188,206,0.5); box-sizing: border-box;float: left;">
	  							<p style="font-size:1rem; text-align: center; color: white; margin-top: 0.9rem;" >{{totalAftersale}}</p>
	  							<p style=" text-align: center;margin-bottom: 0.8rem;font-size: 0.6rem; color: white;color:rgba(255,255,255,0.5);">合计</p>
	  						</li>
	  						<li style="width: 32%;  border-right: 0.05rem solid rgba(182,188,206,0.5); box-sizing: border-box;float: left;color: white;">
	  							<p style="font-size:1rem; text-align: center; color: white; margin-top: 0.9rem;" >{{fankuidan}}</p>
	  							<p style=" text-align: center;margin-bottom: 0.8rem; font-size: 0.6rem; color: white;color:rgba(255,255,255,0.5);">反馈单</p>
	  						</li>
	  						<li style="width: 32%;   box-sizing: border-box;float: left;">
	  							<p style="font-size:1rem; text-align: center;color: white;  margin-top: 0.9rem;" >{{buliaodan}}</p>
	  							<p style=" text-align: center;margin-bottom: 0.8rem; font-size: 0.6rem; color: white;color:rgba(255,255,255,0.5);">补货单</p>
	  						</li>
	  						<div class="clearfix"></div>
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
						<div style="position: relative;">
							<p v-show="startTime.length<=0" style="position:absolute ; top: 30%; ;  margin-left: 2.3rem;">开始时间</p>
						
							<span style="position:absolute;top:30%; left: 40%;"><img style="width: 0.5rem;" src="../../assets/img/dealer/left_ar.png"/></span>
							 <input v-model="startTime"   style="width: 48%; margin-right: 4%; float: left; margin-top: 0.5rem ; background: none; " type="date" name="" id="starttime"  />
							 	<p v-show="endTime.length<=0" style="position:absolute ; top: 30%; ;  margin-left: 10.8rem;">结束时间</p>
					
							  <span style="position:absolute;top:30%; right: 7%;"><img style="width: 0.5rem;" src="../../assets/img/dealer/left_ar.png"/></span>
							 <input v-model="endTime"  style="width: 48%; float: left; margin-top: 0.5rem;" type="date" name="" id="endtime"  />
							  
							 <div class="clearfix"></div>
						 </div>
					   <div style="margin-bottom: 0.5rem; margin-top: 0.5rem;">
					  						  <div style="float: left; width: 48%; margin-right: 4%; color:#a4a4a4;  height: 2rem; border-radius: 0.25rem;  position: relative;">
					  						     <input :readonly="onlyread" style="width: 100%; border: 1px solid #dcdee2; box-sizing: border-box; text-align: left; padding-left: 2.2rem;"  v-model="searchObj.cityIdName"  @click="addsiteshow=!addsiteshow" placeholder="选择地区">
					  							 <span style="position:absolute;top:0.4rem;left:83%;"><img style="width: 0.5rem;" src="../../assets/img/dealer/left_ar.png"/></span>
					  						  </div>
					  						  <div style="float: left;width: 48%; color:#a4a4a4; height: 2rem; border-radius: 0.25rem;border: 1px solid #dcdee2; box-sizing: border-box; position: relative;">
					  						      <select v-model="companyId"  style="width: 100%;  font-size: 0.85rem; height: 1.85rem;  margin: 0; padding: 0 0 0 2.2rem; border: 0;  " @change="getdealer($event)">
					  						      						        <option disabled value="">经销商</option>
					  						      						   	    <option :value="coupon.companyId" :key='index'  v-for="(coupon,index) in dealerList" >{{coupon.companyName}}</option>
					  						      </select>
					  							  <span style="position:absolute;top:0.35rem;left:80%;"><img style="width: 0.5rem;" src="../../assets/img/dealer/left_ar.png"/></span>
					  						   </div>
					  						   <div class="clearfix"></div>
					  </div>
				   </div>
				     <div @click="getsearchdatas" style="margin-top: 0.5rem;" class="check_more">查询</div>
	   		   </div>
	   </div>
	   
	   <div style="padding: 0 0.5rem;">
		    <div v-show="aftersalelist.length==0">
		   				   <div >
		   					     
		   				   </div>
		   				   
		   </div>
		   <div  v-show="aftersalelist.length>0" style="background-color: white; border-radius:0.25rem; padding:0.5rem ">
			  <ul class="mui-table-view">
					<li class="mui-table-view-cell" :key='index' v-for="(item,index) in aftersalelist"  @click="changePath(item.aftersaleId)">
						<a class="mui-navigate-right">
							<div>
								<div style="color: #bdb08a; font-size: 1rem;  margin:0 0 0.4rem 0;">
									<span v-show="item.type==5">反馈单</span>
									<span v-show="item.type==4">补料单</span>
								</div>
								<ul class="mui_ul_li" >
									<li style=" float: left;">经销商：<p style="  color: black;font-size: 0.7rem; display: inline-block;">{{item.companyName}}</p></li>
									<li style=" float: right;padding-left: 0.5rem; ">终端客户：<span style=" color: black;font-size: 0.7rem; ">{{item.customerName}}</span></li>
									<li style=" float: left;font-size: 0.6rem;margin-bottom: 0.3rem; color: #a4a4a4;">订单编号：<span style="color: #5B92B9FF; text-decoration:underline">{{item.orderNo}}</span></li>
									<li style=" float: right; margin-bottom: 0.3rem;font-size: 0.6rem; padding-left: 0.5rem;"><span>{{item.created.substring(0,10)}}</span></li>
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
	import mui from '@/assets/js/mui.js'
	export default {
		name: 'aftersale',

		data() {
			
			return {
				 addsiteshow: false,
				searchObj: {
					startTime: "",
					endTime: "",
					cityId:"",
					cityIdName:"",
					condation:"",
					dealerId:""
				
				},
				onlyread:true,
		         pageSize: 10,
		         pageNum: 0,
		         totalpage: 0,
		         currents: 1,
				 buliaodan:'',
				 fankuidan:'',
				 totalAftersale:'',
                 aftersalelist:[],
				 dealerList:[],
				 
				 startTime: "",
				 endTime: "",
				 condation:"",
				 companyId:"",
				
			}
		
		},
		components: {
		
			Address: address
		
		},
			
		methods: {
			getdealer(event){
				this.companyId = event.target.value;
			},
			//三级联动
			surreAddress: function(obj) {
				console.log(obj)
				this.addsiteObj = obj;
				this.searchObj.cityId=obj.id;
				this.searchObj.cityIdName=obj.name
				this.addsiteshow = !this.addsiteshow
			},
			shouhou:function  () {
				
				this.$router.push({ name: 'Fshouhou'});
				
			},
		    
			 changePath:function  (aftersaleId) {
			 	
			 	this.$router.push({ name: 'Fafterdepmore', query: { aftersaleId:aftersaleId }})
			 	
			 },
			 	/**
			  * 下拉刷新具体业务实现
			  */
			 pulldownRefresh: function() {
			 this.currents=1;
			 mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
			 this.getaftersaledatas()
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
			  		url: '/wxapi/f/aftersales/aftersaleApplies?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
			  	}).then(res => {
			  		   that.mui('#pullrefresh').pullRefresh().endPullupToRefresh((that.currents > that.totalpage)); 
			  		   console.log(res)
			  	       
			  	        that.buliaodan=res.data.data.buliaodan;
			  			 that.fankuidan=res.data.data.fankuidan;
			  			 that.totalAftersale=res.data.data.totalAftersale;
			  			 var data=res.data.data.dataList
			  	         for (var i=0;i<data.length;i++){
			  	          that.aftersalelist.push(data[i]);
			  	          } 
			  		 
			  		  that.pageSize = res.data.pagination.pageSize;
			  		  that.pageNum = res.data.pagination.pageNum;
			  		  that.totalpage = res.data.pagination.pages;
			  		  
			    
			  	 })
			  },
				//加载得到售后列表
				getaftersaledatas(){			
				   let that = this;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/aftersales/aftersaleApplies?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
				}).then(res => {
					    mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
					    console.log(res)
				       
				        that.buliaodan=res.data.data.buliaodan;
						 that.fankuidan=res.data.data.fankuidan;
						 that.totalAftersale=res.data.data.totalAftersale;
						 that.aftersalelist=[];
						 var data=res.data.data.dataList;
				         for (var i=0;i<data.length;i++){
				          that.aftersalelist.push(data[i]);
				          } 
					 
					  that.pageSize = res.data.pagination.pageSize;
					  that.pageNum = res.data.pagination.pageNum;
					  that.totalpage = res.data.pagination.pages;
					  
			  
				 })
			},
			
			//加载得到售后列表
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
					url: '/wxapi/f/aftersales/aftersaleApplies?'+(that.condation == '' ? '' : '&condation=' + that.condation)+(that.startTime == '' ? '' : '&startTime=' + that.startTime) + (that.endTime == '' ? '' : '&endTime=' + that.endTime)+ (that.companyId == '' ? '' : '&dealerId=' + that.companyId)+ (that.searchObj.cityId == '' ? '' : '&cityId=' + that.searchObj.cityId)+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
				}).then(res => {
					    // mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
						console.log(res)
				        that.buliaodan=res.data.data.buliaodan;
						 that.fankuidan=res.data.data.fankuidan;
						 that.totalAftersale=res.data.data.totalAftersale;
						 that.aftersalelist=[];
						 var data=res.data.data.dataList;
				         for (var i=0;i<data.length;i++){
				          that.aftersalelist.push(data[i]);
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
					   
					   that.dealerList=res.data.data
					   
				      
			  
				 })
			},
		},
		mounted: function() {
            document.getElementById("starttime").value="2019-01-01";
			document.getElementById("endtime").value="2019-01-01"


		         this.getaftersaledatas();
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
						  mui("#pullrefresh").on('tap', '.click', function (event) {
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
	input[type=date]::-webkit-inner-spin-button { visibility: hidden; }
	input[type=date]::-webkit-clear-button {visibility: hidden;}
	input[type=date]::-webkit-calendar-picker-indicator  {
		color: rgba(255,255,255,0);
		background-color:  rgba(255,255,255,0);
		
	}
	input[type=date]::-webkit-datetime-edit-fields-wrapper {
	     /* placeholder颜色  */
	     color: rgba(255,255,255,0);
	    
	 }
	 input::-webkit-input-placeholder {
	      /* placeholder颜色  */
	   color: #A4A4A4;
	  }
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
		      background-image: url(../../assets/img/aftersale/af_bg.png);
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
			font-size: 0.8rem;
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
		.mui-content{
			padding: 0;
		}
</style>