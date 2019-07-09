<template>
	<div id="bClientDetails">
			<div class="Details_top">
				<p style="padding-left: 0.6rem;"  ><img style="vertical-align: top; width: 0.9rem; height:1 rem; " src="../../assets/img/bclient/dingdan.png" /><span style="display: inline-block; margin-left: 0.3rem; color: #000000; font-size: 0.7rem; font-weight: 500; ">最近订单</span><span @click="getOrders" style="display: inline-block; color: rgba(99,99,99,0.8); font-size: 0.6rem; margin-left: 9rem; margin-right: 0.5rem;">更多订单</span><span>></span>  </p>
				<p style="color: #000000; padding-left: 1.8rem;">订单<span style="color: #33A8FF; text-decoration：underline; width: 5rem ; display: inline-block;	">{{data.orderId}}</span>,<span style="width: 2rem; display: inline-block;">{{data.orderProductType}}</span><span style="color: #000000; ">贷款<span style="color: red;">¥</span><span style="width: 3rem; display: inline-block;">{{data.orderAmount}}</span>&nbsp;元</span> </p>
				
			</div>
			<div class="Details_center">
				<div class="top_div1" style="margin-bottom: 0.5rem;">
					<img style="width: 1.3rem; height: 1rem; margin-left: 0.4rem; margin-top: 0.8rem; vertical-align: top;" src="../../assets/img/bclient/khxx.png" />
					<span style="display: inline-block; margin-top: 0.8rem;">客户信息</span>
					<img v-if="this.readOnlyTrueOrFalse==true" style="width: 0.75rem; height:0.75rem; margin-top: 0.825rem; margin-left: 10.25rem;" src="../../../F/assets/img/supplier/xiugai.png"
					 @click="read1()" />
					<img v-else style="width: 0.75rem; height:0.75rem; margin-top: 0.825rem; margin-left: 10.25rem;" src="../../../F/assets/img/supplier/duihao.png"
					 @click="read()" />
				</div>
				<ul>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/xingming.png" style="width:0.85rem  ; height: 0.9rem;" /> </span><span class="xiahuaxian"> <span>姓名</span> <span class="content"><input  id="xingming" :value="data.customerName" type="text" :readonly="readOnlyTrueOrFalse" />   </span> </span>
					</li>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/zjdh.png" style ="width:0.85rem  ; height: 0.8rem;" /> </span><span class="xiahuaxian"> <span>电话</span> <span class="content" style="padding-bottom: 0.05rem;"><input id="telphone" :value="data.customerMobile" type="text" :readonly="readOnlyTrueOrFalse" /></span></span>
					</li>
					<li  v-show="this.readOnlyTrueOrFalse==true" >
						<span class="simg"><img src="../../assets/img/bclient/xingbie.png" style ="width:0.95rem  ; height: 1.3rem; padding-left: 0.1rem; padding-top: 0.3rem;  " /> </span><span class="xiahuaxian" > <span>性别</span> <span class="content"><input id="sex" :value="data.sex" type="text" :readonly="readOnlyTrueOrFalse" /></span>  </span>
					</li>
					<li  v-show="this.readOnlyTrueOrFalse==false" >
						<span class="simg"><img src="../../assets/img/bclient/xingbie.png" style ="width:0.95rem  ; height: 1.3rem; padding-left: 0.1rem; padding-top: 0.3rem;  " /> </span><span class="xiahuaxian" > <span>性别</span> <span class="content">
						<select class="select" v-model="ways" style="padding-left: 0;" >
							<option disabled="" value="" >请选择性别</option>
							<option :value="item.value" v-for="(item,index) in payways" :key="index">{{item.name}}</option>
						</select>
						</span>  </span>
					</li>
					<li style="position: relative;"  v-show="this.readOnlyTrueOrFalse== true">
						<span class="simg" style="position: absolute; top: 20%; display: inline-block;"><img src="../../assets/img/bclient/diqu.png" style ="width:0.85rem  ; height: 0.9rem;  " /> </span><span style="display: inline-block; width: 1.5rem;"></span><span class="xiahuaxian" style="height: auto;"> <span style="position: absolute; top: 10%; padding-left: 0.1rem;">地区</span> <span class="content" style="margin-left: 4.3rem;"><input id="dizhi" :value="data.customerMergerName" type="text" :readonly="readOnlyTrueOrFalse" /></span> </span>
					</li>
					<li style="position: relative;"  v-show="this.readOnlyTrueOrFalse== false" @click="addsiteshow =! addsiteshow">
						<span class="simg" style="position: absolute; top: 20%; display: inline-block;"><img src="../../assets/img/bclient/diqu.png" style ="width:0.85rem  ; height: 0.9rem;  " /> </span><span style="display: inline-block; width: 1.5rem;"></span><span class="xiahuaxian" style="height: auto;"> <span style="position: absolute; top: 10%; padding-left: 0.1rem;">地区</span> <span class="content" style="margin-left: 4.3rem;"><input id="dizhi" :value="data.customerMergerName" type="text" :readonly="readOnlyTrueOrFalse" /></span> </span>
					</li>
					
					<li>
						<span class="simg"><img src="../../assets/img/bclient/dizhi.png" style ="width:0.8rem  ; height: 0.9rem;" /> </span><span class="xiahuaxian"> <span>地址</span> <span class="content"><input id="dizhi" :value="data.customerAddress" type="text" :readonly="readOnlyTrueOrFalse" /></span> </span>
					</li>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/fangzi.png" style ="width:0.8rem  ; height: 0.9rem;" /> </span><span class="xiahuaxian"> <span>小区</span> <span class="content"><input id="xiaoqu" :value="data.community" type="text" :readonly="readOnlyTrueOrFalse" /></span> </span>
					</li>
					<li>
						<span class="beizhuzong"  ><img src="../../assets/img/bclient/xiugai.png" style ="width:0.75rem  ; height: 1rem;" /> <span class="beizhu">备注</span> </span ><textarea style="color: #636363; padding-top: 0.5rem;" id="beizhu" :readonly="readOnlyTrueOrFalse" :value="data.remarks"></textarea> 
					</li>
				</ul>
			</div>
			<div class="Details_bottom">
				<ul>
					<li>
						<span><img src="../../assets/img/bclient/dianpu.png" style="width: 0.85rem; height: 0.9rem;" /> </span><span class="bottom_xiahuaxian"><span>店铺名称</span> <span class="shopname">{{data.companyName}}</span> </span>
					</li>
					<li>
						<span><img src="../../assets/img/bclient/xingming.png" style="width: 0.85rem; height: 0.9rem;" /> </span><span class="bottom_xiahuaxian"><span>业务经理</span> <span class="contentyewujingli">{{data.saleMan}}</span></span>
					</li>
					<li>
						<span><img src="../../assets/img/bclient/zjdh.png" style="width: 0.85rem; height: 0.8rem;" /> </span><span class="bottom_xiahuaxian"><span>电话</span> <span class="shoptel">{{data.saleManMobile}}</span> </span>
					</li>
				</ul>
			</div>
			
			<Address   :show="addsiteshow" @sure='surreAddress' @cancel="addsiteshow=!addsiteshow"></Address>	
		</div>
	</template>
	
	<script >
		import address from '@/components/address'
		import mui from '@/assets/js/mui.js'
		export default {
			name: 'bClientDetails',
		
			data() {
		
				return {
					data:{
						customerMergerName:''
					},
					addsiteObj: {},
					searchObj: {
						startTime: "",
						endTime: "",
						cityId: "",
						cityIdName: "",
						condation: "",
						dealerId: "",
						mergerShortName: ''
					
					},
					addsiteshow: false,
					ways:'',
					payways:[
						{
							name:'男',
							value:'0'
						},
						{
							name:'女',
							value:'1'
						}
					],
					readOnlyTrueOrFalse: true
					
		
				}
		
			},
			components:{
			Address:address
		},
		
			methods: {
					surreAddress: function(obj) {
					this.addsiteObj = obj;
					this.searchObj.cityId = obj.id;
					this.searchObj.cityIdName = obj.name
					this.searchObj.mergerShortName = obj.mergerShortName
					 this.data.areaName= obj.mergerShortName
					this.addsiteshow = !this.addsiteshow
				},
				
				getOrders:function  () {
					
					this.$router.push({
					name: 'Borderlist',
					query: {
						delearId: 0
					}
				})
					
				},
				read1(){
					this.readOnlyTrueOrFalse = !this.readOnlyTrueOrFalse
					if (this.readOnlyTrueOrFalse == true) {
						this.mui.toast("您现在可以修改供应商信息", {
							duration: 'long',
							type: 'div'
						})
						
					}
					// if( this.disabledTrueOrFalse == "disabled"){
					// 	this.disabledTrueOrFalse = null
					// }
				},
				read() {
					// var that=this
					// var pdleixingID=this.ways
					// if( pdleixingID== ''){
					// 	pdleixingID=this.leixingId
					// }
					// if (that.searchObj.cityId =='' ||that.searchObj.cityId ==null) {
					// 	that.searchObj.cityId=that.areaIds
					// }
					// if( this.disabledTrueOrFalse ==null ||this.disabledTrueOrFalse==''){
					// 	 this.disabledTrueOrFalse = "disabled"
					// }
				
					this.readOnlyTrueOrFalse = !this.readOnlyTrueOrFalse
					
					if (this.readOnlyTrueOrFalse == true) {
						
						var that=this
						var xingming1 = document.getElementById("xingming").value
						var telphone1 = document.getElementById("telphone").value
						var sex1 = document.getElementById("sex").value
						var dizhi1 = document.getElementById("dizhi").value
						var xiaoqu1 = document.getElementById("xiaoqu").value
						var beizhu1 = document.getElementById("beizhu").value
						console.log("daoleme ?")
						console.log(this.searchObj.cityId)
						var customerId=this.$route.query.id
					
						this.axios({
							method: 'put',
							data: {
								
								
								
								name: xingming1,
								mobile: telphone1,
								// sex: this.ways,
								address: dizhi1,
								community: xiaoqu1,
								remarks: beizhu1,
							cityAreaId: this.searchObj.cityId,
							
							
				
							},
							url: '/wxapi/b/companyCustomers/' + customerId,
				
				
						}).then(function(res) {
							console.log(res)
							that.mui.toast("修改供应商信息成功", {
								duration: 'long',
								type: 'div'
							})
				
						}).catch(function(err) {
							console.log(err)
						})
				
					
						that.axios({
							method: 'get',
				
							url: '/wxapi/b/companyCustomers/' + customerId
				
						}).then(function(res) {
							console.log("修改之后查询")
							console.log(res)
							that.data = res.data.data;
				
						}).catch(function(err) {
							console.log(err)
				
						})
						
						
						
				
					
					}
				}
		
			},
			mounted: function() {
				var customerId=this.$route.query.id
							
							var that = this
							this.axios({
								method: 'get',
				
								url: '/wxapi/b/companyCustomers/'+ customerId
				
							}).then(function(res) {
								that.data = res.data.data;
				
							
				// 
				// 				for (var i = 0; i < 2; i++) {
				// 					that.dept.push(that.depts[i])
				// 				}
				
								console.log(res.data)
								
							}).catch(function(err) {
								console.log(err)
				
							})
		
			}
			/**/
		
		}
	</script>
	
	<style scoped="scoped">
		#bClientDetails{
			position: absolute;
			width: 100%;
			height: 100%;
		}
		
		/* 上部开始 */
		.Details_top{
			padding-top: 0.8rem;
			width: 17.75rem;
			height: 4rem;
			border-radius: 0.25rem;
			background: white;
			margin: 0.5rem 0.5rem 0rem 0.5rem;
		}
		
		/* 上部结束 */
		/* 中部开始 */
		
		.Details_center{
			
			width: 17.75rem;
			height: auto;
			background-color: white;
			border-radius: 0.25rem;
			margin: 0.75rem 0.5rem 0  0.5rem;
		}
		.Details_center>ul>li{
			/* padding-top: 0.2rem; */
			height: auto;
			
		}
		
		
		.Details_center>ul>li:last-child{
			position: relative;
			height: auto;
		}
		.Details_center>ul>li textarea{
			color: rgba(99,99,99,0.5);
			margin:0rem 0rem 0.5rem 6.9rem ;
			padding: 0rem 0.5rem 0rem 0rem;
			width: 10.5rem;
			height: 3rem;
			border: none;
			font-size: 0.65rem;
		}
		.Details_center>ul>li>.beizhuzong{
			position: absolute;
			top:0.5rem ;
			display: inline-block;
			margin-left: 0.8rem;
		}
		.Details_center>ul>li .beizhu{
			font-size: 0.65rem;
			margin-left: 0.7rem;
			vertical-align: top;
		}
		.Details_center>ul>li .simg{
			
			margin-left: 0.75rem;
		}
		.Details_center>ul>li .xiahuaxian{
			width: 15rem;
			display: inline-block;
			margin-left: 0.925rem;
		
			border-bottom: 1px solid rgba(99,99,99,0.2);
		}
		.Details_center>ul>li .xiahuaxian>span{
			margin-top: 0.2rem;
		
			font-size: 0.65rem;
			padding-bottom: 0.8rem;
		}
		.content{
			width: 8.2rem;
			height: 2rem;
			display: inline-block;
			margin-left: 2.825rem;
			color: rgba(99,99,99,1);
			margin-bottom: 0.1rem;
		}
		.content input{
			border: none;
			margin: 0;
			padding: 0;
			font-size: 0.65rem;
			
		}
		
		
		/* 中部结束 */
		/* 下部开始 */
		.Details_bottom{
			padding-top:0.5rem ;
			height: 6.65rem;
			width: 17.75rem;
			border-radius: 0.25rem;
			background-color: white;
			margin: 0.75rem 0.5rem 0 0.5rem;
		}
		.Details_bottom>ul>li{
			
			padding-top: 0.2rem;
			height: 2rem;
		}
		.contentyewujingli{
			display: inline-block;
			margin-left: 1.7rem ;
		}
		.Details_bottom>ul>li>span{
			margin-left: 0.825rem;
		}
		.Details_bottom>ul>li>span>span{
			font-size:0.65rem ;
		}
		.bottom_xiahuaxian{
			width:15rem ;
			display: inline-block;
			padding-bottom: 0.5rem;
			border-bottom: 1px solid rgba(99,99,99,0.2);
		}
		.shopname{
			margin-left: 1.7rem;
			font-size: 0.625rem;
		}
		.shoptel{
			margin-left: 2.95rem;
			color: rgba(99,99,99,1);
		}
		.Details_bottom>ul>li:last-child .bottom_xiahuaxian{
			border: none;
		}
		/* 下部结束 */
		
	</style>
	