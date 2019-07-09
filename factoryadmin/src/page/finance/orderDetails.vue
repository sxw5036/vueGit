<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem ><a @click="goback">财务管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>财务详情</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="panel">
			<div class="panel_nav">
				<div class="panel_center">
					<h3 class="head">基本信息</h3>
					<div class="panel_con" style="padding: 0px;">
						<div class="summarize">
							<ul>
								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>支付编号</h3>
									<p>{{orderFinance.no}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>支付类型</h3>
									<p>{{orderFinance.typeName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>支付方式</h3>
									<p>{{orderFinance.waysName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>支付款项</h3>
									<p>{{orderFinance.fundsName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>支付标题</h3>
									<p>{{orderFinance.name}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>创建时间</h3>
									<p>{{orderFinance.created}}</p>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</div>
		</div>

		<!---->

		<div style="margin-top: 24px;">
			<Row>
				<Col span="20">

				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<div class="panel_con table">

								<div class="ivu-tabs">
									<div class="ivu-tabs-bar">
										<!---->
										<div tabindex="0" class="ivu-tabs-nav-container">
											<div class="ivu-tabs-nav-wrap" style="position: relative;"><span class="ivu-tabs-nav-prev ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span> <span class="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
												<div class="ivu-tabs-nav-scroll border">
													<div class="ivu-tabs-nav">
														<!--<div class="ivu-tabs-ink-bar ivu-tabs-

ink-bar-animated" style="width: 88px;"  :style="[Tabstransform()]"></div>-->
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">收支详情</div>
														
													</div><object tabindex="-1" type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object></div>
											</div>
										</div>

									</div>

									<div class="ivu-tabs-content ivu-tabs-content-animated" :style="[minusTabstransform()]">
										<div class="ivu-tabs-tabpane padding">
											
											<div class="Tab_head">
												<div class="item right">
													
													
													<Button size="small" class="Tab_print" type="info" icon="ios-albums-outline">打印</Button>

												</div>
											</div>
											
											<div class="dealer_tab_nav one">
											<div class="tab_center ">
															<div class=" tab_item">
																<div class="supplier_msg">
																	<ul>
																		
																		<li>
																			<span class="lable">支付编号：</span>
																			<div class="value">
																				<p>{{orderFinance.no}}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">支付类型：</span>
																			<div class="value">
																				<p>{{orderFinance.typeName}}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">支付方式：</span>
																			<div class="value">
																				<p>{{orderFinance.waysName}}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">支付款项:</span>
																			<div class="value">
																				<p>{{orderFinance.fundsName}}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">支付说明：</span>
																			<div class="value">
																				<p>{{orderFinance.notes}}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">创建人：</span>
																			<div class="value">
																				<Input class="borderNone" v-model="orderFinance.creatorName" readonly="readonly"></Input>
																			</div>
																		</li>

																		<li>
																			<span class="lable">创建时间：</span>
																			<div class="value">
																			
																				<Input class="borderNone" v-model="orderFinance.created" readonly="readonly"></Input>
																			</div>
																		</li>

																		
																	</ul>
																</div>
															</div>
															<div class=" tab_item">
																<div class="supplier_msg">
																	<ul>
																		
																		<li>
																			<span class="lable">付款状态：</span>
																			<div class="value">																																				
																				<Input class="borderNone" v-model="orderFinance.statusName" readonly="readonly"></Input>
																			</div>
																		</li>

																		<li>
																			<span class="lable">订单编号：</span>
																			<div class="value">
																				<p>{{orderFinance.orderNo}}</p>
																			</div>
																		</li>

																		<li v-show="orderFinance.auditorName!=''">
																			<span class="lable">审核人：</span>
																			<div class="value">
																				<p>{{orderFinance.auditorName}}</p>
																			</div>
																		</li>

																		<li v-show="orderFinance.auditorName!=''">
																			<span class="lable">审核时间：</span>
																			<div class="value">
																				<p>{{orderFinance.audited}}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">支付金额：</span>
																			<div class="value">
																				<Input class="borderNone" v-model="orderFinance.amount" readonly="readonly"></Input>
																			</div>
																		</li>

																		<li>
																			<span class="lable">公司：</span>
																			<div class="value">
																				<p>{{orderFinance.companyName}}</p>
																			</div>
																		</li>
																		<li>
																			<span class="lable">收款人：</span>
																			<div class="value">
																				<p>{{orderFinance.holder}}</p>
																			</div>
																		</li>
																		

																	</ul>
																</div>
															</div>

															<div class=" tab_item">
																<div class="supplier_msg">
																	<ul>
																		
																		<li>
																			<span class="lable">收款账号：</span>
																			<div class="value">
																				<p>{{orderFinance.holderAccount}}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">开户行：</span>
																			<div class="value">
																				<p>{{orderFinance.depositBank}}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">支付时间：：</span>
																			<div class="value">
																				<p>{{orderFinance.payTime}}</p>
																			</div>
																		</li>

																		
																	</ul>
																</div>
															</div>
														</div>
										</div>

										</div>
										

									</div>

								</div>

								<!--<Tabs>
									<TabPane label="收支详情" name="name1">
										
									</TabPane>
								

								</Tabs>-->
							</div>
						</div>
					</div>
				</div>

				</Col>

				<Col span="4">
				<div class="panel marBtm">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head">特殊操作区</h3>
							<div class="panel_con">
								
									
									<Poptip
					        confirm
					        title="订单货款一旦审核通过不可修改，是否确认审核通过？"
					        @on-ok="payaudit"
					        width=200
					        >
					     <button v-show="orderFinance.status==0" class="details_opBut" >确认审核</button>
					    </Poptip>
									

								

							</div>
						</div>
					</div>
				</div>

				
				<div class="Quick_navigation">
					<div class="panel">
						<div class="panel_nav">
							<div class="panel_center">
								<h3 class="head">快速导航</h3>
								<div class="panel_con">
									<div class="navigation">
										<ul>
											<li>
												<a @click="delearDetails">查看经销商</a>

											</li>
											<li>
												<a @click="orderDetails">查看订单</a>

											</li>

											<li>
												<router-link :to="{ name: 'outsource', query: { id: '123456780'}}">查看外协</router-link>

											</li>

										</ul>>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				</Col>
			</Row>
		</div>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
                paymentId:"",
				orderFinance:{},
				tabIndexs:0

			};
		},

		methods: {
			
			goback:function  () {
				this.$emit('openWindow', ('financeorder'), ('财务管理'), ('7'), ('financeorder'), ('financeorder'))
//              this.$router.push({
//					name: 'client',
//
//				})
			},
			
			
			TabsChange:function  (index) {				
                    this.tabIndexs=index						
			},
			
			Tabstransform:function  () {
				var index=this.tabIndexs
				 let style = {}
                 style['transform'] = 'translate3D(' + index*100 + '%' + ', 0px,0px)'
                 
                 return style
				
			},
			
			
			minusTabstransform:function  () {
				var index=this.tabIndexs
				 let style = {}
                 style['transform'] = 'translate3D(' + -index*100 + '%' + ', 0px,0px)'
                 
                 return style
				
			},
			
			orderDetails:function  () {
				this.$emit('openWindow', ('orderDetails'), ('订单详情'), ('6-3'), ('orderDetails'), ('orderDetails'),(this.orderFinance.customOrderId))
			},
			
			delearDetails:function  () {
				this.$emit('openWindow', ('dealercompanydetails'), ('经销商详情'), ('2-3'), ('dealercompanydetails'), ('dealercompanydetails'),(this.orderFinance.companyId))
			},
							
			
			payaudit:function  () {
				
				var id = this.paymentId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				

				this.axios({
					method: 'put',
					url: '/api/f/finances/customorders/'+id,
					
					

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.$Message.success("审核成功")
					that.getdata(that.paymentId)
					
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
				
			},
			
			
			//查询订单财务详情
			
			getdata:function  (id) {
				
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this


				this.axios({
					method: 'get',

					url: '/api/f/finances/customorders/'+id,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					
					var data=res.data.data

					that.orderFinance=data

					
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
				
			}

		},

		mounted: function() {
			
			if(this.$route.query.pathUrl) {
				this.paymentId = this.$route.query.pathUrl
				
				this.getdata(this.paymentId)
			}

		}

	}
</script>