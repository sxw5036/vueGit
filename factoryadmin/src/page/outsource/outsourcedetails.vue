<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem to="/outsource">外协管理</BreadcrumbItem>
				<BreadcrumbItem>外协订单</BreadcrumbItem>
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
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>拆单编号</h3>
									<p>20190605-02</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>订单编号</h3>
									<p>J20190605-06</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>状态</h3>
									<p>已完成</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>拆单类型</h3>
									<p>门板</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>生产方式</h3>
									<p>外协</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>是否付款</h3>
									<p>已付款</p>
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
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">外协信息</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}" @click="TabsChange(1)">外协产品</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==2}" @click="TabsChange(2)">外协财务</div>

													</div><object tabindex="-1" type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object></div>
											</div>
										</div>

									</div>

									<div class="ivu-tabs-content ivu-tabs-content-animated" :style="[minusTabstransform()]">
										<div class="ivu-tabs-tabpane padding">

											<div class="dealer_tab_nav">
												<div class="tab_center ">
													<div class=" tab_item">
														<div class="supplier_msg">
															<ul>
																<li>
																	<span class="lable">拆单编号：</span>
																	<div class="value">
																		<p>20190605-02</p>
																	</div>
																</li>

																<li>
																	<span class="lable">订单编号：</span>
																	<div class="value">
																		<p>J20190605-06</p>
																	</div>
																</li>

																<li>
																	<span class="lable">状态：</span>
																	<div class="value">
																		<p>已完成</p>
																	</div>
																</li>

																<li>
																	<span class="lable">拆单类型：</span>
																	<div class="value">
																		<p>门板</p>
																	</div>
																</li>

																<li>
																	<span class="lable">生产方式：</span>
																	<div class="value">
																		<p>外协</p>
																	</div>
																</li>

																<li>
																	<span class="lable">是否付款：</span>
																	<div class="value">
																		<p>已付款</p>
																	</div>
																</li>

																<li>
																	<span class="lable">外协金额：</span>
																	<div class="value">
																		<p>1000</p>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div class=" tab_item">
														<div class="supplier_msg">
															<ul>
																<li>
																	<span class="lable">外协厂家名称：</span>
																	<div class="value">
																		<p>小菠萝</p>
																	</div>
																</li>

																<li>
																	<span class="lable">外协厂家开户行：</span>
																	<div class="value">
																		<p>中国银行</p>
																	</div>
																</li>

																<li>
																	<span class="lable">外协厂家账户：</span>
																	<div class="value">
																		<p>4158416213215461321</p>
																	</div>
																</li>

																<li>
																	<span class="lable">完成时间：</span>
																	<div class="value">
																		<p>2019-05-16 00:00:00</p>
																	</div>
																</li>

																<li>
																	<span class="lable">修改人：</span>
																	<div class="value">
																		<p>老板电器</p>
																	</div>
																</li>

																<li>
																	<span class="lable">修改时间：</span>
																	<div class="value">
																		<p>019-05-16 00:00:00</p>
																	</div>
																</li>

																<li>
																	<span class="lable">创建人：</span>
																	<div class="value">
																		<p>老板电器</p>
																	</div>
																</li>

															</ul>
														</div>
													</div>

													<div class=" tab_item">
														<div class="supplier_msg">
															<ul>

																<li>
																	<span class="lable">创建时间：</span>
																	<div class="value">
																		<p>019-05-16 00:00:00</p>
																	</div>
																</li>

																<li>
																	<span class="lable">创建日期：</span>
																	<div class="value">
																		<p>2019-06-03 09:41:16</p>
																	</div>
																</li>

															</ul>
														</div>

													</div>
												</div>

											</div>

										</div>
										<div class="ivu-tabs-tabpane padding">
											<div class="order_table">
												<Table border :columns="outsourcePhead" :data="outsourcePdata" ref="table"></Table>
											</div>

										</div>
										<div class="ivu-tabs-tabpane padding">
											<div class="dealer_tab_nav">
												<Collapse>
													<Panel name="1">

														支付编号：13243564678
														<div slot="content">

															<div class="tab_center ">
																<div class=" tab_item">
																	<div class="supplier_msg">
																		<ul>
																			<li>
																				<span class="lable">支付类型：</span>
																				<div class="value">
																					<p>退款</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">支付方式：</span>
																				<div class="value">
																					<p>现金</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">支付款项:</span>
																				<div class="value">
																					<p>预付款</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">支付说明：</span>
																				<div class="value">
																					<p>我真好看，我真好看，我真好看。</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">创建人：</span>
																				<div class="value">
																					<p>韩火火</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">创建时间：</span>
																				<div class="value">
																					<p>2018-12-06 12:03</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">付款状态：</span>
																				<div class="value">
																					<p>未付款</p>
																				</div>
																			</li>
																		</ul>
																	</div>
																</div>
																<div class=" tab_item">
																	<div class="supplier_msg">
																		<ul>

																			<li>
																				<span class="lable">订单id：</span>
																				<div class="value">
																					<p>13835446325</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">审核人：：</span>
																				<div class="value">
																					<p>马小跳</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">审核时间：</span>
																				<div class="value">
																					<p>2019-5-23 13:24</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">支付金额：</span>
																				<div class="value">
																					<p>1,000,000.00</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">公司id：</span>
																				<div class="value">
																					<p>25367585645</p>
																				</div>
																			</li>
																			<li>
																				<span class="lable">收款人：</span>
																				<div class="value">
																					<p>马小跳</p>
																				</div>
																			</li>
																			<li>
																				<span class="lable">收款账号：</span>
																				<div class="value">
																					<p>15243546576879584</p>
																				</div>
																			</li>

																		</ul>
																	</div>
																</div>

																<div class=" tab_item">
																	<div class="supplier_msg">
																		<ul>

																			<li>
																				<span class="lable">开户行：</span>
																				<div class="value">
																					<p>中国银行</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">支付时间：：</span>
																				<div class="value">
																					<p>2019-3-23 13:12</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">支付编号：</span>
																				<div class="value">
																					<p>213243564678</p>
																				</div>
																			</li>

																		</ul>
																	</div>
																</div>
															</div>
														</div>
													</Panel>

												</Collapse>
											</div>
										</div>

									</div>

								</div>

								<!--<Tabs>
									<TabPane label="外协信息" name="name1">
									

									
									</TabPane>
									<TabPane label="外协产品" name="2">

										
									</TabPane>

									<TabPane label="外协财务" name="name3">

										

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
								<div class="but_op">

									<button class="details_opBut">财务审核</button>
								</div>

							</div>
						</div>
					</div>
				</div>

				<div class="panel marBtm">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head">通用操作区</h3>
							<div class="panel_con">
								<div class="but_op">
									<button class="details_opBut">编辑</button>
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
												<router-link :to="{ name: 'orderDetails', query: { id: '123456780'}}">查看订单</router-link>

											</li>
											<li>

												<router-link :to="{ name: 'supplierdetails', query: { id: '50zl1lxk6sxs'}}">查看供应商</router-link>
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

				outsourcePhead: [{
						title: '类型',
						key: 'type',

						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '橱柜'
							} else if(row.type == 1) {
								text = '衣柜'
							} else if(row.type == 2) {
								text = '成品家具'
							} else if(row.type == 3) {
								text = '电器'
							} else if(row.type == 4) {
								text = '五金'
							}
							return h('div', text);
						}
					},
					{
						title: '产品颜色',
						key: 'color',
						align: 'center',

					},

					{
						title: '门型',
						key: 'door',

						align: 'center',

					},
					{
						title: '系列',
						key: 'series',

						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.series == 0) {
								text = '定制实木'
							} else if(row.series == 1) {
								text = '特供实木'
							} else if(row.series == 2) {
								text = '美克'
							} else if(row.series == 3) {
								text = '康奈'
							} else if(row.series == 4) {
								text = '慧娜'
							} else if(row.series == 5) {
								text = '模压'
							}
							return h('div', text);
						}
					},

					{
						title: '修改人',
						key: 'updateUserName',

						align: 'center',

					},

					{
						title: '修改时间',
						key: 'updateTime',

						align: 'center',

					},

					{
						title: '备注',
						key: 'notes',

						align: 'center',

					}
				],
				outsourcePdata: [],
				tabIndexs:0

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

		},

		mounted: function() {}

	}
</script>

<style>

</style>