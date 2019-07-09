<template>
	<div id="orderdep" class="font_size_order">

		<!--订单信息 -->
		<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/aftersale/dingdan.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem; ">订单信息</li>
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_jxs.png">
							<span>经销商：</span>
						</div>
						<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdes.dealerName}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.5rem;height: 0.8rem; margin-left: 0.6rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_tel.png">
							<span>电话：</span>
						</div>
						<a :href="'tel:' + orderdes.leaderMobile"><div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #bdaf89;">{{orderdes.leaderMobile}}&nbsp;
							<span><img style="width:0.6rem ;height: 0.9rem; margin-left: 0.2rem;" src="../../assets/img/aftersale/as_y_tels.png"></span></div></a>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_cus.png">
							<span>客户：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdes.customerName}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li style="border-bottom: 1px dashed #dcdee2;">
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_jdy.png">
							<span>接单员：</span>
						</div>
						<div style="width: 11rem;   float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdes.creatorName}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_no.png">
							<span>订单编号：</span>
						</div>
						<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #6699be; text-decoration:underline">
							{{orderdes.orderNo}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_type.png">
							<span>订单类型：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdes.orderType}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_time.png">
							<span>创建时间：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdes.orderCreated}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_jq_time.png">
							<span>计划交期：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #8d8d8d;">{{orderdes.estimatedDeliveryDate}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_sy_time.png">
							<span>剩余时间：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #8d8d8d;">{{orderdes.timeRemaining}}&nbsp;
							<span>
								<img v-show="orderdes.timeRemainingStatus==1" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/1.png">
								<img v-show="orderdes.timeRemainingStatus==0" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/2.png">
								<img v-show="orderdes.timeRemainingStatus==2" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/3.png">
								<img v-show="orderdes.timeRemainingStatus==3" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/4.png">
								
							</span>
						</div>
						<div class="clearfix"></div>
					</li>

					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_sj_time.png">
							<span>实际交期：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdes.deliveryDate}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>

				</ul>
			</div>
		</div>


		<!-- 财务信息 -->
		<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1.1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/aftersale/as_cw_tt.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem; ">财务信息</li>
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">

					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_cw_yj.png">
							<span>出厂原价：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #8d8d8d;">{{orderdes.factoryPrice}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_cw_sj.png">
							<span>实际货款：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdes.factoryFinalPrice}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_cw_yh.png">
							<span>优惠原因：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 1px solid #dcdee2; word-break: break-all;">{{orderdes.discountsNote}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_cw_zt.png">
							<span>到帐状态：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdes.financeStatus}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_time.png">
							<span>到账时间：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdes.audited}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_creat.png">
							<span>经手人：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdes.auditorName}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>

				</ul>
			</div>
		</div>
		<!--订单状态 -->
		<div id="newDealers">
			<ul class="tab-tilte">
				<li @click="changeone">
					<div :class="{opacity:cur==0}">
					    <span v-show="this.orderdes.orderStatus<  0" ><img src="../../assets/img/order/order_cp1.png"></span>	
						<span v-show="this.orderdes.orderStatus>=0" ><img src="../../assets/img/order/order_cp1.png"></span>	
					</div>
					<p :class="{active:cur==0}">产品<div class="border_bottom" ></div></p>
				</li>
				
				<li @click="changetwo">
					<div :class="{opacity:cur==1}">
						  <span v-show="this.orderdes.orderStatus  <=  5" ><img src="../../assets/img/order/order_desi1.png"></span>	
						<span v-show="this.orderdes.orderStatus>5" ><img src="../../assets/img/order/order_desi.png"></span>
						
					</div>
					<p :class="{active:cur==1}">设计 <div :class="{border_bottom:orderdes.orderStatus>6}" ></div></p>
				</li>
				<li @click="changethree">
					<div :class="{opacity:cur==2}">
						  <span v-show="this.orderdes.orderStatus  <=  11" ><img src="../../assets/img/order/order_sc1.png"></span>	
						<span v-show="this.orderdes.orderStatus>11" ><img src="../../assets/img/order/order_sc.png"></span>
						
					</div>
					<p :class="{active:cur==2}"  >生产<div :class="{border_bottom:orderdes.orderStatus>11}" ></div></p>
				</li>
				<li @click="changefour">
					<div :class="{opacity:cur==3}">
						  <span v-show="this.orderdes.orderStatus  <=  13" ><img src="../../assets/img/order/order_rk1.png"></span>	
						<span v-show="this.orderdes.orderStatus>13" ><img src="../../assets/img/order/order_rk.png"></span>
						
					</div>
					<p :class="{active:cur==3}">入库<div :class="{border_bottom:orderdes.orderStatus>13}" ></div></p>
				</li>
				<li @click="changefive">
					<div :class="{opacity:cur==4}">
						 <span v-show="this.orderdes.orderStatus  <=  13" ><img src="../../assets/img/order/order_fh1.png"></span>	
						<span v-show="this.orderdes.orderStatus>13" ><img src="../../assets/img/order/order_fh.png"></span>
						
						
					</div>
					<p :class="{active:cur==4}">发货<div :class="{border_bottom:orderdes.orderStatus>15}" ></div></p>
				</li>

				<div class="clearfix"></div>

			</ul>
			<keep-alive>
				<div class="tab-content">
					<div class="content_show" v-show="cur==0">
						<div class="content_show_son">
							<ul class="after_sale_content" v-for="item in orderProduct">
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/aftersale/as_as_type.png">
										<span>类型：</span>
									</div>
									<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">
										<span v-show="item.type==0">橱柜(J)</span>
										<span v-show="item.type==1">衣柜(B)</span>
										<span v-show="item.type==2">成品家具(J)</span>
										<span v-show="item.type==3">电器(J)</span>
										<span v-show="item.type==4">五金(J)</span>
										<span v-show="item.type==5">样块(Y)</span>
									</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/order_xl.png">
										<span>系列：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">
										<span v-show="item.series==0">定制实木</span>
										<span v-show="item.series==1">特供实木</span>
										<span v-show="item.series==2">美克</span>
										<span v-show="item.series==3">康奈</span>
										<span v-show="item.series==4">慧娜</span>
										<span v-show="item.series==5">模压</span>
									</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/order_color.png">
										<span>颜色：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.color}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/order_mx.png">
										<span>门型：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.door}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left; padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/aftersale/order_bz.png">
										<span>备注：</span>
									</div>
									<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 1px solid #dcdee2; word-break: break-all;color: #8d8d8d; ">
										{{item.notes}}&nbsp;
									</div>
									<div class="clearfix"></div>
								</li>

								<li>
									<div style="float: left; padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/aftersale/as_as_fj.png">
										<span>附件：</span>
									</div>
									<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  word-break: break-all; ">
										<ul class="as_fj_tu">
											<li v-for="items in item.uploadFiles"><img style="width: 100%;" :src="item"></li>
											
										</ul>
									</div>
									<div class="clearfix"></div>
								</li>

							</ul>


						</div>
					</div>
					<div class="content_show" v-show="cur==1">
						<div class="content_show_son">
							<ul class="after_sale_content" v-for="item in orderDesign">
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/design_1.png">
										<span>设计单号：</span>
									</div>
									<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">
										{{item.no}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/design_2.png">
										<span>设计师：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.designName}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.7rem;height: 0.7rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/order/design_3.png">
										<span>设计时间：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.endTime}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/design_4.png">
										<span>设计金额：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.valuation}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/design_5.png">
										<span>财务审核状态：</span>
									</div>
									<div style="width: 10rem;   float: right;padding: 0.8rem 0;color: #8d8d8d;">
										<span v-show="item.series==0">设计中</span>
										<span v-show="item.series==1">待审核</span>
										<span v-show="item.series==2">待发布</span>
										<span v-show="item.series==3">待确认</span>
										<span v-show="item.series==4">已确认</span>
										
									</div>
									<div class="clearfix"></div>
								</li>

							</ul>
						</div>
					</div>
					<div class="content_show" v-show="cur==2">
						<div class="content_show_son">
							<ul class="after_sale_content" v-for="item in orderProduce">
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.7rem;height: 0.7rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/order/design_3.png">
										<span>下车间时间：</span>
									</div>
									<div style="width: 11rem; margin-right: 0; font-size: 0.6rem; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">
										{{item.documentaryTime}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/shengchan_2.png">
										<span>跟单人：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.merchandiserName}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/shengchan_1.png">
										<span>跟单备注：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.documentaryNotes}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>


							</ul>

						</div>
					</div>
					<div class="content_show" v-show="cur==3">
						<div class="content_show_son">
							<ul class="after_sale_content" v-for="item in orderFinishStock">
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.7rem;height: 0.7rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/order/design_3.png">
										<span >入库时间：</span>
									</div>
									<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">
										{{item.created}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/shengchan_2.png">
										<span>入库人：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.creatorName}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/ruku_bg.png">
										<span>入库包裹：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.finishedStockItemDtos.length}}</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/shengchan_1.png">
										<span>入库备注：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.notes}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>


							</ul>

						</div>
					</div>
					<div class="content_show" v-show="cur==4">
						<div class="content_show_son">
							<ul class="after_sale_content" v-for="item in orderDispatchBill">
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.7rem;height: 0.7rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/order/fahuo_pm.png">
										<span>品名：</span>
									</div>
									<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 1px solid #dcdee2; word-break: break-all;">
										<ul>
											<li v-for="items in item.typeNameList">
												<span v-show="items.productType==0">柜体</span>
												<span v-show="items.productType==1">门板-自产</span>
												<span v-show="items.productType==2">门板-外协</span>
												<span v-show="items.productType==3">特供实木</span>
												<span v-show="items.productType==4">五金</span>* {{items.finishedItemNum}}包裹</li>
										</ul>
									</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/shengchan_2.png">
										<span>发货人：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.delivererName}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.7rem;height: 0.7rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/order/design_3.png">
										<span>发货时间：</span>
									</div>
									<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.actualDate}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>

								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/fahuo_gs.png">
										<span>物流公司：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.logisticsName}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/fahuo_dh.png">
										<span>物流单号：</span>
									</div>
									<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.logistics_no}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>
								<li style=" border-bottom: 1px dashed #dcdee2;">
									<div style="float: left;padding: 0.8rem 0;">
										<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;"
										 src="../../assets/img/order/shengchan_1.png">
										<span>发货备注：</span>
									</div>
									<div style="width: 11rem;  float: right;padding: 0.8rem 0;color: #8d8d8d;">{{item.notes}}&nbsp;</div>
									<div class="clearfix"></div>
								</li>


							</ul>
							

						</div>
					</div>
				</div>
			</keep-alive>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'orderdep',

		data() {

			return {
				cur: 0, //默认选中第一个tab
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
            changeone(){
					this.cur=0;	
			},
			 changetwo(){
				 if(this.orderdes.orderStatus>5){
				 	this.cur=1;
				 }else{
				 	return false;
				 }
				
			},
			 changethree(){
				 if(this.orderdes.orderStatus>11){
				 	this.cur=2;
				 }else{
				 	return false;
				 }
				
			},
			 changefour(){
				  if(this.orderdes.orderStatus>13){
				 	this.cur=3;
				 }else{
				 	return false;
				 }
				
			},
			 changefive(){
				  if(this.orderdes.orderStatus>14){
				 	this.cur=4;
				 }else{
				 	return false;
				 }
				
			},
            
              	getorderdep(){			
              	   let that = this;
              	   this.axios({
              		method: 'get',
              		headers: {
              			'X-Requested-With': 'XMLHttpRequest',
              			'ContentType': 'application/json;charset=UTF-8'
              		},
              		url: '/wxapi/f/branchs/orders/' + that.orderId,
              	}).then(res => {
              	       console.log(res)
              	       that.orderdes=res.data.data;
					   that.orderDispatchBill=res.data.data.orderDispatchBill;
					   that.orderFinishStock=res.data.data.orderFinishStock;
                       that.orderProduce=res.data.data.orderProduce;
                       that.orderProduct=res.data.data.orderProduct;
					   that.orderDesign=res.data.data.orderDesign;
              		   
              		  //  that.customLists=[];
              	   //     for (var i=0;i<data.length;i++){
              			 //  
              	   //       that.customLists.push(data[i]);
              	   //    } 
              		  // console.log(that.customLists)
              	   
              	   
              	   
              	  
              	   
              	 })
              },
		},
		mounted: function() {
                this.orderId = this.$route.query.orderId
                 this.getorderdep()
		}


	}
</script>


<style>
	ul li {

		margin: 0;
		padding: 0;
		list-style: none;
	}

	

	.clearfix {
		clear: both;
	}

	.after_sale_title li {
		float: left;
		margin-left: 0.5rem;
		margin-bottom: 0.5rem;

	}

	.after_sale_content li {
		width: 100%;

	}

	.as_fj_tu li {
		width: 4.5rem;
		height: 4.5rem;
		padding: 0.2rem;
		float: left;
	}

	.as_fj_tu li img {
		width: 100%;
	}

	.tab-tilte {
		width: 100%;
		margin-top: 0.05rem;
	}

	.tab-tilte li {
		float: left;
		width: 20%;
		margin-top: 0.3rem;
		text-align: center;
		cursor: pointer;
		color: rgba(99, 99, 99, 0.5);


	}

	.tab-tilte li img {
		width: 1.2rem;
		height: 1.2rem;
		display: block;
		margin: auto;
		margin-bottom: 0.2rem;
	}

	.opacity {
	/* 	filter: alpha(opacity=50);

		-moz-opacity: 0.5;

		-khtml-opacity: 0.5;

		opacity: 0.5; */
	}

	.tab-tilte li p {
		width: 2rem;
		margin: auto;
		padding-bottom: 0.2rem;
		font-size: 0.7rem;
	}
     .border_bottom{
		height: 2px;
		width: 1.2rem; 
		background-color:#dccf61;
		margin: auto;
	 }
	/* 点击对应的标题添加对应的背景颜色 */
	.tab-tilte .active {
		/* border-bottom: 0.1rem solid #bcaf88; */
		box-sizing: border-box;
		color: black;

	}

	.tab-content {
		margin-top: 0.5rem;
	}

	.tab-content .content_show {
		width: 100%;
	}

	.content_show_son {
		margin: 0.5rem;
		border-radius: 0.25rem;
		background-color: white;

	}

	.clearfix {
		clear: both;
	}
	.font_size_order{
		font-size: 0.8rem;
	}
</style>
