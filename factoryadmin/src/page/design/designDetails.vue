<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem to="/designorder">设计管理
				</BreadcrumbItem>
				<BreadcrumbItem>设计详情</BreadcrumbItem>
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
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>订单编号</h3>
									<p>20190527-03</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户姓名</h3>
									<p>万小丽</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户电话</h3>
									<p>15624562354</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户地址</h3>
									<p>万佳家博园</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>经销商姓名</h3>
									<p>张明洋</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>经销商地址</h3>
									<p>万佳家博园</p>
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
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">设计信息</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}" @click="TabsChange(1)">设计需求</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==2}" @click="TabsChange(2)">设计方案</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==3}" @click="TabsChange(3)">设计财务</div>


													</div><object tabindex="-1" type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object></div>
											</div>
										</div>

									</div>

									<div class="ivu-tabs-content ivu-tabs-content-animated" :style="[minusTabstransform()]">
										<div class="ivu-tabs-tabpane padding">
											<div class="dealer_tab_nav one">
											<div class="tab_center ">
												<div class=" tab_item">
													<div class="supplier_msg">
														<ul>
															<li>
																<span class="lable">订单编号：</span>
																<div class="value">
																	<p>JB201902003</p>
																</div>
															</li>

															<li>
																<span class="lable">客户姓名：</span>
																<div class="value">
																	<p>彭祎博</p>
																</div>
															</li>

															<li>
																<span class="lable">创建时间：</span>
																<div class="value">
																	<p>2019-06-20 10:48</p>
																</div>
															</li>

															<li>
																<span class="lable">设计师：</span>
																<div class="value">
																	<p>王寒哲</p>
																</div>
															</li>

															<li>
																<span class="lable">客户电话：</span>
																<div class="value">
																	<p>15038181021</p>
																</div>
															</li>

															<li>
																<span class="lable">工厂最终报价：</span>
																<div class="value">
																	<p>¥12600.00</p>
																</div>
															</li>

															<li>
																<span class="lable">跟单备注：</span>
																<div class="value">
																	<p> 暂无</p>
																</div>
															</li>
														</ul>
													</div>
												</div>

												<div class=" tab_item">
													<div class="supplier_msg">
														<ul>
															<li>
																<span class="lable">收货人姓名：</span>
																<div class="value">
																	<p>付贝佳</p>
																</div>
															</li>

															<li>
																<span class="lable">收货人电话：</span>
																<div class="value">
																	<p>18211922019</p>
																</div>
															</li>

														</ul>
													</div>
												</div>

											</div>
										</div>
										</div>
										<div class="ivu-tabs-tabpane padding">
											<div class="dealer_tab_nav">
											<Collapse>
												<Panel name="1">
												

													设计需求
													<div slot="content">
														
														<p>我的需求是：样式尽量偏西风现代风的风格</p>
														
													</div>
												</Panel>

											</Collapse>
										</div>
										
										
										<div class="order_table">
											<Table border :columns="orderPhead" :data="orderPdata" ref="table"></Table>
										</div>
										</div>
										
										<div class="ivu-tabs-tabpane padding">
											<Table border :columns="designHead" :data="designData" ref="table"></Table>
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
									<button class="details_opBut">设计审核</button>
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
												<router-link  :to="{ name: 'orderDetails', query: { id: '123456780'}}" >查看订单</router-link>
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
				
				orderPhead:[
				{
						title: '类型',
						key: 'type',
						
						align: 'center',
					    	render: (h, params) => {
					    	const row = params.row;
					    	var text
					    	if (row.type == 0) {
					    		text = '橱柜'
					    	} else if (row.type == 1) {
					    		text = '衣柜'
					    	} else if (row.type == 2) {
					    		text = '成品家具'
					    	}else if (row.type == 3) {
					    		text = '电器'
					    	}else if (row.type == 4) {
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
					    	if (row.series == 0) {
					    		text = '定制实木'
					    	} else if (row.series == 1) {
					    		text = '特供实木'
					    	} else if (row.series == 2) {
					    		text = '美克'
					    	}else if (row.series == 3) {
					    		text = '康奈'
					    	}else if (row.series == 4) {
					    		text = '慧娜'
					    	}else if (row.series == 5) {
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

					},
					

					

					{
						title: '操作',
						align: 'center',
						fixed: 'right',
						width: 120,
						align: 'center',
						render: (h, params) => {

							var designer = params.row.designer

							return h('div', [
								h('Button', {
										props: {
											type: 'info',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
 														this.color= '';
 														this.door= '';
 														this.series= '';
 														this.type= '';
 														this.updateUser= '';
 														this.updateTime= '';
 														this.notes= '';
														this.openOrdetails = false;
														this.DemandOpen = true;
														this.getOrdemand(params.index);
												        this.setindexdep=params.index;
											}
										}
									},
									'需求详情'),
// 									h('Button', {
// 											props: {
// 												type: 'error',
// 												size: 'small'
// 											},
// 											style: {
// 												marginRight: '5px'
// 											},
// 											on: {
// 												click: () => {
// 									
// // 													this.Demandobj = {
// // 														"customOrderDemand": {
// // 															"content": "",
// // 															"created": "",
// // 															"creator": "",
// // 															"customOrderId": "",
// // 															"id": "",
// // 															"name": "",
// // 															"no": "",
// // 														}
// // 													}
// 													// this.openOrdetails = false
// 													this.DemandOpen = true
// 													this.getOrdemand(params.index)
// 									
// 												}
// 											}
// 										},
// 										'取消分配设计师'),

							]);

						}

					}],
				orderPdata:[],

				designHead: [{
						title: '设计编号',
						key: 'no',

					},

					{
						title: '设计名称',
						key: 'name',

					},

					{
						title: '设计说明',
						key: 'notes',

					},

					{
						title: '设计状态',
						key: 'status',

						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {

								var texts = '设计中'
							} else if(status == 1) {

								var texts = '待审核'
							} else if(status == 2) {

								var texts = '设计发布'
							} else if(status == 3) {

								var texts = '待确认'
							} else if(status == 4) {

								var texts = '已完成'
							}

							return h('div', texts)
						}

					},

					{
						title: '修改意见',
						key: 'amendments',

					},

					{
						title: '估价',
						key: 'valuation',

					},

					{
						title: '设计师姓名',
						key: 'designName',

					},

					{
						title: '设计师电话',
						key: 'designMobile',

					},

					{
						title: '操作',
						align: 'center',
						fixed: 'right',
						width: 100,
						render: (h, params) => {

							var status = params.row.status

							if(status == 0 && this.isSub == false) {
								return h('div', [
									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {

												this.getdesignersObj(params.index, 0)

											}
										}
									}, '查看'),

									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.opendesignerscheme = false;
												this.designersIndex = params.index
												this.getdesignersObj(params.index, 1)
											}
										}
									}, '编辑'),

									h('Button', {
										props: {
											type: 'info',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.designersIndex = params.index
												/*this.putdnstatus(params.index)*/
												this.opendesigners = true
												this.opendesignerscheme = false
												this.opendnstatus(params.index)
											}
										}
									}, '提交'),
									h('Poptip', {
										props: {
											confirm: true,
											title: '您确定要删除这条数据吗?',
											transfer: true
										},
										on: {
											'on-ok': () => {
												this.delTabData(params.index)
											}
										}
									}, [
										h('div', [
											h('Button', {
												props: {
													type: 'error',
													size: 'small'
												}
											}, '删除')
										])
									])
								]);
							} else if(status == 0 && this.isSub == true) {
								return h('div', [
									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {

												this.getdesignersObj(params.index, 0)

											}
										}
									}, '查看'),

									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.opendesignerscheme = false;
												this.designersIndex = params.index
												this.getdesignersObj(params.index, 1)
											}
										}
									}, '编辑'),

									h('Poptip', {
										props: {
											confirm: true,
											title: '您确定要删除这条数据吗?',
											transfer: true
										},
										on: {
											'on-ok': () => {
												this.delTabData(params.index)
											}
										}
									}, [
										h('div', [
											h('Button', {
												props: {
													type: 'error',
													size: 'small'
												}
											}, '删除')
										])
									])
								]);
							} else if(status == 1 || status == 2 || status == 3) {
								return h('div', [
									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {

												this.getdesignersObj(params.index, 0)

											}
										}
									}, '查看'),

									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px',
										},
										on: {
											click: () => {

												this.getdesignersOk(params.index)

											}
										}
									}, '确认方案'),

									/*h('Poptip', {
										props: {
											confirm: true,
											title: '您确定要删除这条数据吗?',
											transfer: true
										},
										on: {
											'on-ok': () => {
												this.delTabData(params.index)
											}
										}
									}, [
										h('div', [
											h('Button', {
												props: {
													type: 'error',
													size: 'small'
												}
											}, '删除')
										])
									])*/
								]);
							} else if(status == 4) {
								return h('div', [
									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {

												this.getdesignersObj(params.index, 0)

											}
										}
									}, '查看'),

								]);
							}

						}

					}
				],
				designData: [],
				tabIndexs:0

			};
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
			
			redact:function  () {
				
				
				this.$emit('openWindow', ('designorderRedact'), ('编辑设计'), ('5-2'), ('designorderRedact'), ('designorderRedact'))
			}

		},

		mounted: function() {

		}

	}
</script>