<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem to="/productionplan">生产管理
				</BreadcrumbItem>
				<BreadcrumbItem>生产详情</BreadcrumbItem>
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
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>生产单编号</h3>
									<p>20190527-03</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>订单编号</h3>
									<p>J20190527</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>类型</h3>
									<p>柜体</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>经销商</h3>
									<p>万佳家博园</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户</h3>
									<p>张明洋</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>状态</h3>
									<p>已开始</p>
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
											<div class="ivu-tabs-nav-wrap" style="position: relative;"><span class="ivu-tabsnav-prev ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span> <span class="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
												<div class="ivu-tabs-nav-scroll border">
													<div class="ivu-tabs-nav">
														<!--<div class="ivu-tabs-ink-bar ivu-tabs-

ink-bar-animated" style="width: 88px;"  :style="[Tabstransform()]"></div>-->
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">生产信息</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}" @click="TabsChange(1)">生产产品信息</div>
															<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==2}" @click="TabsChange(2)">生产BOM信息</div>
														

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
																<span class="lable">生产单编号：</span>
																<div class="value">
																	<p>20190527-03</p>
																</div>
															</li>

															<li>
																<span class="lable">订单编号：</span>
																<div class="value">
																	<p>J20190527</p>
																</div>
															</li>

															<li>
																<span class="lable">类型：</span>
																<div class="value">
																	<p>柜体</p>
																</div>
															</li>

															<li>
																<span class="lable">经销商：</span>
																<div class="value">
																	<p>万佳家博园</p>
																</div>
															</li>

															<li>
																<span class="lable">客户：</span>
																<div class="value">
																	<p>张明洋</p>
																</div>
															</li>

															<li>
																<span class="lable">状态：</span>
																<div class="value">
																	<p>已开始</p>
																</div>
															</li>

															<li>
																<span class="lable">跟单员：</span>
																<div class="value">
																	<p>小红</p>
																</div>
															</li>
														</ul>
													</div>
												</div>

												<div class=" tab_item">
													<div class="supplier_msg">
														<ul>
															<li>
																<span class="lable">计划交付时间：</span>
																<div class="value">
																	<p>2019-12-11</p>
																</div>
															</li>

															<li>
																<span class="lable">计划生产时间：</span>
																<div class="value">
																	<p>2019-11-27</p>
																</div>
															</li>
															
															
															<li>
																<span class="lable">生效时间：</span>
																<div class="value">
																	<p>2019-12-11</p>
																</div>
															</li>

															

														</ul>
													</div>
												</div>

											</div>
										</div>
										</div>
										<div class="ivu-tabs-tabpane padding">
											<Table border :columns="orderPhead" :data="orderPdata" ref="table"></Table>
										</div>
										
										<div class="ivu-tabs-tabpane padding">
											<Table border :columns="orderPhead" :data="orderPdata" ref="table"></Table>

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
									<button class="details_opBut">生产审核</button>
									<button class="details_opBut">生产计划</button>
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
												<router-link  :to="{ name: 'orderDetails', query: { id: '123456780'}}" >查看订单</router-link>
												
											</li>
											
											<li><router-link  :to="{ name: 'dealercompanydetails', query: { id: '50zl1lxk6sxs'}}" >查看经销商</router-link></li>

											

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

				bomHead: [],
				bomHeadData: [],
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

		},

		mounted: function() {

		}

	}
</script>