<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">订单管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>订单详情</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="order_details">

			<div class="panel">
				<div class="panel_nav">
					<div class="panel_center">
						<h3 class="head">基本信息</h3>
						<div class="panel_con" style="padding: 0px;">
							<div class="summarize">
								<ul>
									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>订单编号</h3>
										<p>{{customOrder.no}}</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>订单类型</h3>
										<p>生产中</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>经销商</h3>
										<p>{{customOrder.dealerName}}</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>经销商电话</h3>
										<p>{{customOrder.dealerTel}}</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户姓名</h3>
										<p>{{customOrder.customerName}}</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户电话</h3>
										<p>{{customOrder.customerTel}}</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>收货地址</h3>
										<p>{{customOrder.address}}</p>
									</li>

								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>

			<!---->

			<div style="margin: 10px 0px;">
				<div>
					<Row>
						<Col span="20">

						<div class="panel">
							<div class="panel_nav">
								<div class="panel_center">
									<h3 class="head">订单流程</h3>
									<div class="panel_con" style="padding: 10px 28px;">
										<div class="order_flowPath">
											<div class="order_flowPathNav">
												<div class="schedule_sign" style="left: 25%;">
													<img src="../../assets/img/order/orderSchedule.png" />
												</div>
												<div class="order_schedule" style="width: 25%;"></div>

												<ul>
													<li>下单
														<p>采购员二号</p>
														<span>2019-02-06 12:44:03</span>
													</li>
													<li style="left: 12.5%;">设计
														<p>设计师二号</p>
													</li>

													<li style="left: 37.5%;">报价</li>
													<li style="left: 50%;">支付</li>
													<li style="left: 62.5%;">生产</li>
													<li style="left: 75%;">包装</li>
													<li style="left: 87.5%;">入库</li>
													<li style="right: 0%;">发货</li>
												</ul>
											</div>

										</div>
									</div>
								</div>
							</div>
						</div>

						</Col>
						<Col span="4">
						<div class="panel">
							<div class="panel_nav">
								<div class="panel_center">
									<div class="head">特殊操作区</div>
									<div class="panel_con">
										<div class="but_op">
											<button class="details_opBut">货款审核</button>
											<button class="details_opBut">新建生产单</button>
											<button class="details_opBut">新建配货单</button>
											<button class="details_opBut">新建外协单</button>
										</div>

									</div>
								</div>
							</div>
						</div>
						</Col>
					</Row>
				</div>
			</div>

			<!---->
			<div>
				<div>
					<Row>
						<Col span="20">

						<div class="panel">
							<div class="panel_nav">
								<div class="panel_center">

									<div class="panel_con table">

										<div  class="ivu-tabs">
											<div class="ivu-tabs-bar">
												<!---->
												<div tabindex="0" class="ivu-tabs-nav-container">
													<div class="ivu-tabs-nav-wrap" style="position: relative;"><span class="ivu-tabs-nav-prev ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span> <span class="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
														<div class="ivu-tabs-nav-scroll border">
															<div class="ivu-tabs-nav">
																<!--<div class="ivu-tabs-ink-bar ivu-tabs-ink-bar-animated" style="width: 88px;"  :style="[Tabstransform()]"></div>-->
																<div class="ivu-tabs-tab"  :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}"  @click="TabsChange(0)">订单基本信息
																	<!---->
																	<!---->
																</div>
																<div class="ivu-tabs-tab"   :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}"   @click="TabsChange(1)">订单设计需求
																	<!---->
																	<!---->
																</div>
																
																<div class="ivu-tabs-tab"   :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==2}"   @click="TabsChange(2)">订单产品信息

																</div>
																
																<div class="ivu-tabs-tab"   :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==3}"   @click="TabsChange(3)">订单报价信息
																	

															</div>
														</div><object tabindex="-1" type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object></div>
												</div>
											</div>
										</div>
											<div class="ivu-tabs-content ivu-tabs-content-animated" :style="[minusTabstransform()]" >
												<div class="ivu-tabs-tabpane padding">
													<div class="dealer_tab_nav one">
													<div class="tab_center ">
														<div class=" tab_item">
															<div class="supplier_msg">
																<ul>
																	<li>
																		<span class="lable">订单编号：</span>
																		<div class="value">
																			<p>{{customOrder.no}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">订单类型 ：</span>
																		<div class="value">
																			<p>{{customOrder.type}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">订单状态：</span>
																		<div class="value">
																			<p>{{customOrder.status}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">下单经销商：</span>
																		<div class="value">
																			<p>{{customOrder.dealerName}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">经销商电话：</span>
																		<div class="value">
																			<p>{{customOrder.dealerTel }}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">客户姓名：</span>
																		<div class="value">
																			<p>{{customOrder.customerName }}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">客户电话：</span>
																		<div class="value">
																			<p>{{customOrder.customerTel}}</p>
																		</div>
																	</li>
																</ul>
															</div>
														</div>

														<div class=" tab_item">
															<div class="supplier_msg">
																<ul>
																	<li>
																		<span class="lable">收货地址：</span>
																		<div class="value">
																			<p>{{customOrder.address}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">总金额：</span>
																		<div class="value">
																			<p>{{customOrder.factoryFinalPrice}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">订单备注：</span>
																		<div class="value">
																			<p>{{customOrder.notes}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">是否需设计：</span>
																		<div class="value">
																			<p>{{customOrder.isDesign}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">设计风格：</span>
																		<div class="value">
																			<p>{{customOrder.designStyle}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">经销商地址：</span>
																		<div class="value">
																			<p>{{customOrder.dealerAddress}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">创建时间：</span>
																		<div class="value">
																			<p>{{customOrder.created}}</p>
																		</div>
																	</li>

																</ul>
															</div>
														</div>

														<div class=" tab_item">
															<div class="supplier_msg">
																<ul>
																	<li>
																		<span class="lable">创建人：</span>
																		<div class="value">
																			<p>{{customOrder.creatorName}}</p>
																		</div>
																	</li>

																</ul>
															</div>
														</div>

													</div>
												</div>
												</div>
												<div  class="ivu-tabs-tabpane padding" >
													<!--<div class="dealer_tab_nav ">
													<div class="tab_center ">
														<div class=" tab_item">

															<div class="card maR">
																<div class="card_head">需求详情</div>
																<div class="card_item">
																	<div class="card_title">
																		20198=124j212
																	</div>
																	<div class="card_content">

																		

																		<div class="supplier_msg">
																			<ul>
																				<li>
																					<span class="lable">需求名称：</span>
																					<div class="value">
																						<p>柜体颜色需求</p>
																					</div>
																				</li>

																				<li>
																					<span class="lable">需求内容：</span>
																					<div class="value">
																						<p>柜体颜色需求</p>
																					</div>
																				</li>

																				<li>
																					<span class="lable">需求内容：</span>
																					<div class="value">
																						<p>柜体颜色需求</p>
																					</div>
																				</li>

																				<li>

																					<span class="lable"></span>
																					<div class="value">
																						<div class="upload-list">
																							<img src="" alt="">
																							<div class="upload-list-cover">
																								<Icon type="ios-eye-outline"></Icon>
																							</div>
																						</div>
																					</div>

																				</li>

																			</ul>
																		</div>

																	
																	</div>
																</div>
															</div>

														</div>

														<div class=" tab_item">
															<Card :bordered="false">
																<p slot="title">设计信息</p>
																<p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
															</Card>
														</div>

													</div>
												</div>-->
												</div>
												
												<div  class="ivu-tabs-tabpane padding" >
													<Table border :columns="orderProductHead" :data="orderProductData"></Table>
												</div>
												
												<div  class="ivu-tabs-tabpane padding" >
												   报价信息
												</div>
											</div>
										</div>

										
									
								</div>
							</div>
						</div>
</div>
						</Col>
						<Col span="4">
						<div class="panel marBtm">
							<div class="panel_nav">
								<div class="panel_center">

									<div class="head">通用操作</span>
									</div>

									<div class="panel_con">
										<div class="but_op">
											<button class="details_opBut" @click="redact">编辑</button>
											<button class="details_opBut">删除</button>
											<button class="details_opBut">打印</button>
										</div>

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
														<router-link :to="{ name: 'clientdetails', query: { id: '123456780'}}">查看客户</router-link>
													</li>

													<li>
														<router-link :to="{ name: 'dealercompanydetails', query: { id: '50zl1lxk6sxs'}}">查看经销商</router-link>
													</li>

													<li>

														<router-link :to="{ name: 'designDetails', query: { id: '50zl1lxk6sxs'}}">设计方案</router-link>
													</li>

													<li>

														<router-link :to="{ name: 'productionDetails', query: { id: '50zl1lxk6sxs'}}">查看生产</router-link>
													</li>

													<li>

														<router-link :to="{ name: 'finishedDetails', query: { id: '50zl1lxk6sxs'}}">查看包装</router-link>
													</li>

													<li>

														<router-link :to="{ name: 'finishedDetails', query: { id: '50zl1lxk6sxs'}}">查看入库</router-link>
													</li>

													<li>

														<router-link :to="{ name: 'deliversDetails', query: { id: '50zl1lxk6sxs'}}">查看发货</router-link>
													</li>

													<li>

														<router-link :to="{ name: 'outsourcedetails', query: { id: '50zl1lxk6sxs'}}">查看外协</router-link>
													</li>

												</ul>
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

		</div>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				tabIndexs:0,
				orid: "",
				customOrder: {},

				orderProductHead: [{
						title: '产品类型',
						key: 'type',

						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '橱柜(J)'
							} else if(row.type == 1) {
								text = '衣柜(B)'
							} else if(row.type == 2) {
								text = '成品家具(J)'
							} else if(row.type == 3) {
								text = '电器(J)'
							} else if(row.type == 4) {
								text = '五金(J)'
							} else if(row.type == 5) {
								text = '样块(Y)'
							}
							return h('div', text);
						}
					},
					{
						title: '产品系列',
						key: 'series ',

						render: (h, params) => {

							var series = params.row.series
							var text
							if(series == 0) {
								text = '定制实木 '
							} else if(series == 1) {
								text = '特供实木'
							} else if(series == 2) {
								text = '美克 '
							} else if(series == 3) {
								text = '康奈'
							} else if(series == 4) {
								text = '慧娜 '
							} else if(series == 5) {
								text = '模压  '
							}
							return h('div', text);
						}
					},

					{
						title: '产品价格',
						key: 'price',

						render: (h, params) => {
							var price = params.row.price + '';

							if(price == "undefined") {
								price = "0.00"

							} else if(price == 0) {
								price = "0.00"
							} else {
								price = (price.indexOf('.') == -1) ? price + ".00" : price
							}

							this.orderProductData[params.index].price = price

							return h('div', {
								style: {
									textAlign: 'rihght',
									width: '100%'
								},

							}, price)
						}
					},

					{
						title: '门型',
						key: 'door',
						width: 200,

					},
					{
						title: '颜色',
						key: 'color',

					},
					{
						title: '备注',
						key: 'notes',

					},

					{
						title: '创建人',
						key: 'creatorName',

					},

					{
						title: '创建时间',
						key: 'created',

					},

				],
				orderProductData: [],
				orderDesign: [],
			}
		},

		methods: {
			
			
			
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

			goback: function() {
				this.$emit('openWindow', ('orderlist'), ('订单列表'), ('3-3'), ('orderlist'), ('orderlist'))
			},

			redact: function() {
				//				this.$router.push({
				//					name: '',
				//
				//				})

				this.$emit('openWindow', ('redactOrder'), ('编辑订单'), ('6-2'), ('redactOrder'), ('redactOrder'), (this.orid))
			},

			getdate: function() {

				var that = this

				var id = this.orid

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'get',
					url: '/api/f/customorders/' + id + '/info',

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.customOrder = data.customOrder
					that.orderProductData = data.orderProducts //订单产品
					that.orderDesign = data.orderDesign //订单设计
					that.orderDemand = data.orderDemand //订单需求

					console.log(data)

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})

			}

		},

		mounted: function() {
			this.orid = this.$route.query.pathUrl

			this.getdate()

		},

	}
</script>

<style scoped="scoped">
	.navigation {
		display: block;
		width: 100%;
		font-size: 0px;
	}
	
	.navigation ul {
		display: inline-block;
		width: 100%;
	}
	
	.navigation ul li {
		width: 33%;
		text-align: center;
		float: left;
		font-size: 14px;
		margin-bottom: 10px;
		color: #1890FF;
	}
	
	.navigation ul li a {
		color: #1890FF;
		text-decoration: underline;
	}
	
	.order_flowPath {
		padding-bottom: 90px;
	}
	
	.order_flowPath .order_flowPathNav {
		position: relative;
		display: block;
		width: 100%;
		background: #EDEFF4;
		height: 10px;
		border-radius: 10px;
		margin-top: 40px;
	}
	
	.order_flowPath .order_flowPathNav .order_schedule {
		position: absolute;
		top: 0px;
		left: 0px;
		height: 10px;
		background: #1890FF;
		border-radius: 10px;
	}
	
	.order_flowPath .order_flowPathNav .schedule_sign {
		position: absolute;
		left: 0px;
		top: -30px;
		width: 20px;
	}
	
	.order_flowPath .order_flowPathNav .schedule_sign img {
		display: block;
		width: 100%;
	}
	
	.order_flowPath ul {
		display: inline-block;
		width: 100%;
	}
	
	.order_flowPath ul li {
		position: absolute;
		margin-left: -15px;
		font-size: 12px;
		font-weight: 600;
	}
	
	.order_flowPath ul li p {
		height: 20px;
		font-size: 10px;
		font-weight: 100;
		color: #636363;
		margin-top: 10px;
	}
	
	.order_flowPath ul li span {
		display: block;
		height: 20px;
		font-size: 10px;
		color: #636363;
		font-weight: 100;
	}
	
	.order_flowPath ul li:first-child {
		margin-left: 0px;
	}
	
	.but_op button {
		display: block;
		margin: 0px auto;
		margin-bottom: 10px;
	}
	
	.summarize ul li {
		display: block;
		width: 14.25%;
	}
</style>