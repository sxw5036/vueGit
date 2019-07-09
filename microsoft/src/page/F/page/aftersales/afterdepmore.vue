<template>
	<div id="afterdepmore" >
		<div style="padding:0.5rem 0.5rem; font-size: 0.8rem;" >
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/aftersale/as_as.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem; ">售后单信息</li>
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0; ">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_type.png">
							<span >售后类型：</span>
						</div>
						<div style="width: 11rem; margin-right: 0; border-bottom: 0.5px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">
							<span v-show="aftersaleApply.type==5">反馈单</span>
							<span v-show="aftersaleApply.type==4">补料单</span>
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_no.png">
							<span >编号：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 0.5px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{aftersaleApply.no}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_time.png">
							<span >创建时间：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 0.5px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{aftersaleApply.created}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_creat.png">
							<span >创建人：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 0.5px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{aftersaleApply.creatorName}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_desc.png">
							<span >问题描述：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 0.5px solid #dcdee2; word-break: break-all; color: #8d8d8d;">
							{{aftersaleApply.notes}}&nbsp
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_option.png">
							<span >处理意见：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 0.5px solid #dcdee2; word-break: break-all;color: #8d8d8d; ">
							{{aftersaleApply.result}}&nbsp
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_option.png">
							<span >附件：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  word-break: break-all; ">
							<ul class="as_fj_tu">
								<li v-for="item in aftersaleApplyFilesList"><img style="width: 100%;" :src="item"></li>
								
							</ul>
						</div>
						<div class="clearfix"></div>
					</li>
				</ul>
			</div>
		</div>
	<!-- 	源订单信息 -->
		<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/aftersale/as_y_me.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem;  ">源订单信息</li>
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_jxs.png">
							<span >经销商：</span>
						</div>
						<div style="width: 11rem; margin-right: 0; border-bottom: 0.5px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdata.dealerName}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_tel.png">
							<span >电话：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 0.5px solid #dcdee2; float: right;padding: 0.8rem 0; color: #bdaf89;">{{orderdata.customerMobile}}&nbsp<span><img style="width:0.6rem ;height: 0.9rem; margin-left: 0.2rem;" src="../../assets/img/aftersale/as_y_tels.png"></span></div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_cus.png">
							<span >客户：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 0.5px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdata.customerName}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_jdy.png">
							<span >接单员：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 0.5px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdata.creatorName}}&nbsp</div>
						<div class="clearfix"></div>
					</li>

				</ul>
			</div>
		</div>	
		
		<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_no.png">
							<span >订单编号：</span>
						</div>
						<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #6699be; text-decoration:underline">{{orderdata.orderNo}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_type.png">
							<span >订单类型：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdata.orderType}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_time.png">
							<span >创建时间：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdata.orderCreated}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_jq_time.png">
							<span >计划交期：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #8d8d8d;">{{orderdata.estimatedDeliveryDate}}&nbsp</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_sy_time.png">
							<span >剩余时间：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #8d8d8d;">{{orderdata.timeRemaining}}&nbsp; 
						<span>
							<img v-show="orderdata.timeRemainingStatus==1" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/1.png">
							<img v-show="orderdata.timeRemainingStatus==0" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/2.png">
							<img v-show="orderdata.timeRemainingStatus==2" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/3.png">
							<img v-show="orderdata.timeRemainingStatus==3" style="width:2rem ;height: 0.83rem;  margin-left: 0.2rem; " src="../../assets/img/order/4.png">
							
						</span>
						</div>
						<div class="clearfix"></div>
					</li>
					
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_sj_time.png">
							<span>实际交期：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderdata.deliveryDate}}&nbsp;</div>
						<div class="clearfix"></div>
					</li>
		
				</ul>
			</div>
		</div>	
		<!-- 财务信息 -->
			<div v-show="aftertype==4" style="padding:0.5rem 0.5rem">
				<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
					<ul class="after_sale_title">
						<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/aftersale/as_cw_tt.png"></li>
						<li style="line-height: 1rem; text-align: center; font-size: 0.8rem; ">财务信息</li>
						<div class="clearfix"></div>
					</ul>
					<ul class="after_sale_content">
						<li>
							<div style="float: left;padding: 0.8rem 0;">
								<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_type.png">
								<span >收费类型：</span>
							</div>
							<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #8d8d8d;">
								<span v-show="aftersaleApply.chargeAmount==1">收费</span>
								<span v-show="aftersaleApply.chargeAmount==0">免费</span>
							</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div style="float: left;padding: 0.8rem 0;">
								<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_cw_yj.png">
								<span >出厂原价：</span>
							</div>
							<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #8d8d8d;">{{orderpay.factoryPrice}}&nbsp;</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div style="float: left;padding: 0.8rem 0;">
								<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_cw_sj.png">
								<span >实际货款：</span>
							</div>
							<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderpay.factoryFinalPrice}}&nbsp;</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div style="float: left;padding: 0.8rem 0;">
								<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_cw_yh.png">
								<span >优惠原因：</span>
							</div>
							<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderpay.discountsNote}}&nbsp;</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div style="float: left;padding: 0.8rem 0;">
								<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_cw_zt.png">
								<span >到帐状态：</span>
							</div>
							<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderpay.financeStatus}}&nbsp;</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div style="float: left;padding: 0.8rem 0;">
								<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_time.png">
								<span >到账时间：</span>
							</div>
							<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderpay.audited}}&nbsp;</div>
							<div class="clearfix"></div>
						</li>
						<li>
							<div style="float: left;padding: 0.8rem 0;">
								<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_creat.png">
								<span >经手人：</span>
							</div>
							<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{orderpay.auditorName}}&nbsp;</div>
							<div class="clearfix"></div>
						</li>
		
					</ul>
				</div>
			</div>
	<!-- 	 物流信息 -->
		  <div v-show="aftertype==4" style="padding:0.5rem 0.5rem font-size: 0.8rem;">
		  	<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
		  		<ul class="after_sale_title">
		  			<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/aftersale/as_as.png"></li>
		  			<li style="line-height: 1rem; text-align: center;   ">物流信息</li>
		  			<div class="clearfix"></div>
		  		</ul>
		  		<ul class="after_sale_content">
		  			<li>
		  				<div style="float: left;padding: 0.8rem 0;">
		  					<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_type.png">
		  					<span >发货单编号：</span>
		  				</div>
		  				<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{dispatch.no}}&nbsp;</div>
		  				<div class="clearfix"></div>
		  			</li>
		  			<li>
		  				<div style="float: left;padding: 0.8rem 0;">
		  					<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_no.png">
		  					<span >发货时间：</span>
		  				</div>
		  				<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{dispatch.actualDate}}&nbsp;</div>
		  				<div class="clearfix"></div>
		  			</li>
		  			<li>
		  				<div style="float: left;padding: 0.8rem 0;">
		  					<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_time.png">
		  					<span >发货人：</span>
		  				</div>
		  				<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{dispatch.delivererName}}&nbsp;</div>
		  				<div class="clearfix"></div>
		  			</li>
		  			<li>
		  				<div style="float: left;padding: 0.8rem 0;">
		  					<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_creat.png">
		  					<span >承运公司：</span>
		  				</div>
		  				<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #8d8d8d;">{{dispatch.logisticsName}}&nbsp;</div>
		  				<div class="clearfix"></div>
		  			</li>
		  			<li>
		  				<div style="float: left; padding: 0.8rem 0;">
		  					<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_desc.png">
		  					<span >物流单号：</span>
		  				</div>
		  				<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 1px solid #dcdee2; word-break: break-all;color: #8d8d8d; ">
		  					{{dispatch.logisticsNo}}&nbsp;
		  				</div>
		  				<div class="clearfix"></div>
		  			</li>
		  			
		  			<li>
		  				<div style="float: left; padding: 0.8rem 0;">
		  					<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_option.png">
		  					<span >附件：</span>
		  				</div>
		  				<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto; border-bottom: 1px solid #dcdee2; word-break: break-all; ">
		  					<ul class="as_fj_tu">
		  						<li v-for="item in dispatch.dispatchBillId"><img style="width: 100%;" :src="item"></li>
		  						
		  					</ul>
		  				</div>
		  				<div class="clearfix"></div>
		  			</li>
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/order_bz.png">
							<span >备注：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 1px solid #dcdee2; word-break: break-all;color: #8d8d8d; ">
							{{dispatch.notes}}&nbsp;
						</div>
						<div class="clearfix"></div>
					</li>
		  		</ul>
		  	</div>
		  </div>
	</div>
</template>

<script>
	export default {
		name: 'afterdepmore',

		data() {

			return {
               aftersaleId:'',
               aftersaleApply:{},
               aftersaleApplyFilesList:[],
               aftertype:'',
			   orderdata:{},
			   dispatch:{},
			   orderpay:{},
			}

		},


		methods: {
             getafterdep(){			
             	   let that = this;
             	   this.axios({
             		method: 'get',
             		headers: {
             			'X-Requested-With': 'XMLHttpRequest',
             			'ContentType': 'application/json;charset=UTF-8'
             		},
             		url: '/wxapi/f/aftersales/' + that.aftersaleId,
             	}).then(res => {
             	       console.log(res)
             	       that.aftersaleApply=res.data.data.aftersaleApply;
					   that.aftertype=res.data.data.aftersaleApply.type;
             		   that.aftersaleApplyFilesList=res.data.data.aftersaleApply.aftersaleApplyFilesList;
					   that.orderdata=res.data.data.customOrder;
					   that.orderpay=res.data.data.aftersalePayInfo;
					   that.dispatch=res.data.data.dispatchBillList;
					   

                       
             		   // console.log(that.customdes)
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
            this.aftersaleId = this.$route.query.aftersaleId
			this.getafterdep();

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
	.after_sale_content li{
		width: 100%;
		font-size: 0.8rem;
		
	}
	.as_fj_tu li{
		width: 4.5rem; height: 4.5rem;
		padding: 0.2rem;
		float: left;
	}
	..as_fj_tu li img{
		width: 100%;
	}
</style>
