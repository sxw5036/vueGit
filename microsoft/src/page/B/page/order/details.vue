<template>

	<div class="order_details">
		<div class="board_nav" >
				<div class="header" style="font-size: 0.75rem; line-height: 0.8rem;">
					<img class="left_icon" src="../../assets/img/dingdan.png" />订单信息</span>
				</div>

				<div class="board_content" style="padding: 0px;">

					<div class="order_details_list">
						<ul>
							<li>
								<div class="lable">订单编号：</div>
								<div class="cen"><p>{{orderdes.orderNo}}</p></div>
							</li>
							
							<li>
								<div class="lable">订单类型：</div>
								<div class="cen"><p>{{orderdes.orderType}}</p></div>
							</li>
							
							<li>
								<div class="lable">创建时间：</div>
								<div class="cen"><p>{{orderdes.orderCreated}}</p></div>
							</li>
							
							<li>
								<div class="lable">要求交期：</div>
								<div class="cen"><p>{{orderdes.estimatedDeliveryDate}}</p></div>
							</li>
							
							<li>
								<div class="lable">剩余时间：</div>
								<div class="cen" ><p style="position: relative;">{{orderdes.timeRemaining}}
							<span style="position: absolute; top:-0.25rem;">
								<!--<img v-show="orderdes.timeRemainingStatus==1" style="width:2rem ;height: 0.83rem; margin-top: 0.2rem; margin-left: 0.2rem; " src="../../assets/img/order/1.png">
								<img v-show="orderdes.timeRemainingStatus==0" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/2.png">
								<img v-show="orderdes.timeRemainingStatus==2" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/3.png">
								<img v-show="orderdes.timeRemainingStatus==3" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/4.png">-->
								
							</span></p></div>
							</li>
							
							<li>
								<div class="lable">实际交期：</div>
								<div class="cen"><p>{{orderdes.deliveryDate}}&nbsp;</p></div>
							</li>
							</ul>
							<ul class="dealer">
							<li>
								<div class="lable">经销商：</div>
								<div class="cen"><p>{{orderdes.dealerName}}</p></div>
							</li>
							
							<li>
								<div class="lable">联系电话：</div>
								<div class="cen"><p>{{orderdes.leaderMobile}}</p></div>
							</li>
							
							<li>
								<div class="lable">客户：</div>
								<div class="cen"><p>{{orderdes.customerName}}&nbsp;</p></div>
							</li>
							
							<li>
								<div class="lable">接单员：</div>
								<div class="cen"><p>{{orderdes.creatorName}}</p></div>
							</li>

						</ul>
					</div>

				</div>
			</div>
			<!--财务信息-->
			<div class="order_details_dealerfince">
				<div class="board_nav" >
				<div class="header" style="font-size: 0.75rem; line-height: 0.8rem;">
					<img class="left_icon" src="../../assets/img/dingdan.png" />财务信息</span>
				</div>

				<div class="board_content" style="padding: 0px;">

					<div class="order_details_list">
						<ul>
							<li>
								<div class="lable">出厂原价：</div>
								<div class="cen"><p>￥{{orderdes.factoryPrice}}&nbsp;</p></div>
							</li>
							
							<li>
								<div class="lable">实际到货价：</div>
								<div class="cen"><p>￥{{orderdes.factoryFinalPrice}}</p></div>
							</li>
							
							<li>
								<div class="lable">优惠原因：</div>
								<div class="cen"><p>{{orderdes.discountsNote}}&nbsp;</p></div>
							</li>
							
							<li>
								<div class="lable">到账时间：</div>
								<div class="cen"><p>{{orderdes.audited}}&nbsp;</p></div>
							</li>
							
							<li>
								<div class="lable">经手人：</div>
								<div class="cen"><p>{{orderdes.auditorName}}&nbsp;</p></div>
							</li>
							

						</ul>
					</div>

				</div>
			</div>
			</div>
			
			<!--订单状态-->
			<div class="order_status">
				<div class="status_icon">
					<div class="icon_list"  :class="{ac:orderdata.status>=0}"  @click="changeShow(0)">
						<span class="icon_nav" :class="{hover:showTime==0&&orderdata.status>=0}">
							
							<img class="icon block" src="../../assets/img/order/order_cpAc.png"/>
							<p>产品</p>
						</span>
					</div>
					
					<div class="icon_list" :class="{ac:orderdata.status>=1}"  @click="changeShow(1)">
						<span class="icon_nav" :class="{hover:showTime==1&&orderdata.status>=1}">
						
							<img class="icon block" src="../../assets/img/order/order_desiAc.png"/>
							<p>设计</p>
						</span>
					</div>
					
					<div class="icon_list" :class="{ac:orderdata.status>=2}"   @click="changeShow(2)">
						<span class="icon_nav" :class="{hover:showTime==2&&orderdata.status>=2}">						
							<img class="icon block" src="../../assets/img/order/order_scAc.png"/>
							<p>生产</p>
						</span>
					</div>
					
					<div class="icon_list" :class="{ac:orderdata.status>=3}"  @click="changeShow(3)">
						<span class="icon_nav" :class="{hover:showTime==13&&orderdata.status>=3}">
							
							<img class="icon block" src="../../assets/img/order/order_rkAc.png"/>
							<p>入库</p>
						</span>
					</div>
					
					<div class="icon_list" :class="{ac:orderdata.status>=4}"  @click="changeShow(4)">
						<span class="icon_nav" :class="{hover:showTime==4&&orderdata.status>=4}">
							
							<img class="icon block" src="../../assets/img/order/order_fhAc.png"/>
							<p>发货</p>
						</span>
					</div>
				</div>
				
				<!--订单状态详情-->
				<div class="board_nav status_msg">
				
				<div class="board_content" style="padding: 0px;">

                   <!--产品-s-->
					<div class="order_details_list" v-show='showTime==0' >
						<ul style="border: none;"  v-for="item in orderProduct">
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/order_lx.png"/>产品类型：</div>
								<div class="cen">
									<p v-show="item.type==0">橱柜(J)</p>
									<p v-show="item.type==1">衣柜(B)</p>
									<p v-show="item.type==2">成品家具(J)</p>
									<p v-show="item.type==3">电器(J)</p>
									<p v-show="item.type==4">五金(J)</p>
									<p v-show="item.type==5">样块(Y)</p>
								</div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/order_xl.png"/>产品系列：</div>
								<div class="cen">
									<p v-show="item.series==0">定制实木</p>
									<p v-show="item.series==1">特供实木</p>
									<p v-show="item.series==2">美克</p>
									<p v-show="item.series==3">康奈</p>
									<p v-show="item.series==4">慧娜</p>
									<p v-show="item.series==5">模压</p>
								</div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/order_color.png"/>产品颜色：</div>
								<div class="cen"><p>{{item.color}}</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/order_mx.png"/>门型：</div>
								<div class="cen"><p>{{item.door}}</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/order_bz.png"/>附件：</div>
								<div class="cen">
									<div class="demo-upload-list" v-for="items in item.uploadFiles">
								    <img src="item">
							        </div>
								</div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/order_fj.png"/>备注：</div>
								<div class="cen"><p>---</p></div>
							</li>
							

						</ul>
					</div>
					
					<!--产品-end-->
					<!--设计-s-->
					
					<div class="order_details_list" v-show='showTime==1' >
						<ul style="border: none;" v-for="item in orderDesign">
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/design_1.png"/>设计单号：</div>
								<div class="cen"><p>{{item.no}}</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/design_2.png"/>设计师：</div>
								<div class="cen"><p>{{item.designName}}</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/design_3.png"/>设计时间：</div>
								<div class="cen"><p>{{item.endTime}}</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/design_4.png"/>设计金额：</div>
								<div class="cen"><p>{{item.valuation}}</p></div>
							</li>
							
							
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/design_5.png"/>财务审核状态：</div>
								<div class="cen">
									<p v-show="item.series==0">设计中</p>
									<p v-show="item.series==1">待审核</p>
									<p v-show="item.series==2">待发布</p>
									<p v-show="item.series==3">待确认</p>
									<p v-show="item.series==4">已确认</p>
								</div>
							</li>
							

						</ul>
					</div>
					
					<!--设计-end-->
					
					
					<!--生产-s-->
					
					<div class="order_details_list" v-show='showTime==2' >
						<ul style="border: none;" v-for="item in orderProduce">
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/design_3.png"/>下车间时间：</div>
								<div class="cen"><p>{{item.documentaryTime}}&nbsp;</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/shengchan_2.png"/>跟单人：</div>
								<div class="cen"><p>{{item.merchandiserName}}&nbsp;</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/shengchan_1.png"/>跟单配注：</div>
								<div class="cen"><p>{{item.documentaryNotes}}&nbsp;</p></div>
							</li>
							
							
							

						</ul>
					</div>
					
					<!--生产-end-->
					
					
					<!--入库-s-->
					
					<div class="order_details_list" v-show='showTime==3' >
						<ul style="border: none;" v-for="item in orderFinishStock">
							
							
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/design_3.png"/>下车间时间：</div>
								<div class="cen"><p>{{item.created}}</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/shengchan_2.png"/>跟单人：</div>
								<div class="cen"><p>{{item.creatorName}}</p></div>
							</li>
							
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/ruku_bg.png"/>入库包裹：</div>
								<div class="cen"><p>{{item.finishedStockItemDtos.length}}</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/shengchan_1.png"/>跟单配注：</div>
								<div class="cen"><p>{{item.notes}}</p></div>
							</li>
							
							
							

						</ul>
					</div>
					
					<!--入库-end-->
					
					
					<!--发货-->
					
					<div class="order_details_list" v-show='showTime==4' >
						<ul v-for="item in orderDispatchBill">
							
							
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/fahuo_pm.png"/>品名：</div>
								<div class="cen">
									<p v-show="items.productType==0">柜体</p>
									<p v-show="items.productType==1">门板-自产</p>
									<p v-show="items.productType==2">门板-外协</p>
									<p v-show="items.productType==3">特供实木</p>
									<p v-show="items.productType==4">五金</p>* {{items.finishedItemNum}}包裹
								</div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/shengchan_2.png"/>发货人：</div>
								<div class="cen"><p>{{item.delivererName}}&nbsp;</p></div>
							</li>
							
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/design_3.png"/>发货时间：</div>
								<div class="cen"><p>{{item.actualDate}}&nbsp;</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/fahuo_gs.png"/>物流公司：</div>
								<div class="cen"><p>{{item.logisticsName}}&nbsp;</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/fahuo_dh.png"/>物流单号：</div>
								<div class="cen"><p>{{item.logistics_no}}&nbsp;</p></div>
							</li>
							
							<li>
								<div class="lable"><img class="icon" src="../../assets/img/order/shengchan_1.png"/>发货备注：</div>
								<div class="cen"><p>{{item.notes}}&nbsp;</p></div>
							</li>
							
							
							

						</ul>
						
					
					</div>
					
					<!--发货-end-->

				</div>
			</div>
				
				<!---->
				
				
			</div>
			
	</div>

</template>

<script>
	

	
	export default {
		name: 'orderdetails',

		data() {

			return {
               orderdata:{
               	status:2
               },
               
               showTime:0,
			   orderId:'',
			   
			   orderdes:{},
			   orderDispatchBill:[],
			   orderFinishStock:[],
			   orderProduce:[],
			   orderProduct:[],
			   orderDesign:[],
			   
			}

		},

		methods: {
			
			changeShow:function  (index) {
				
				if(index<=this.orderdata.status){
					this.showTime=index
				}
				
			},
			 //加载得到客户列表
				getdetailsdatas(){			
				   let that = this;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/b/orders/'+ that.orderId,
				}).then(res => {
								     console.log(res)
					   // that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
				       that.orderdes=res.data.data;
			           that.orderDispatchBill=res.data.data.orderDispatchBill;
			           that.orderFinishStock=res.data.data.orderFinishStock;
			           that.orderProduce=res.data.data.orderProduce;
			           that.orderProduct=res.data.data.orderProduct;
			           that.orderDesign=res.data.data.orderDesign;
					
				 })
			},

		},
		mounted: function() {
             this.showTime=this.orderdata.status
			 this.orderId=this.$route.query.orderId
			 this.getdetailsdatas();
		}

	}
</script>

<style scoped="scoped" src='../../assets/css/order.css'></style>