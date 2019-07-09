<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem to="/product">产品管理
				</BreadcrumbItem>
				<BreadcrumbItem>产品详情</BreadcrumbItem>
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
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>产品名称</h3>
									<p>俄罗斯桦木</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>产品型号</h3>
									<p>jd-130</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>产品分类</h3>
									<p>门板</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>产品材质</h3>
									<p>实木</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>产品规格</h3>
									<p>100*100cm</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>是否上下架</h3>
									<p>下架</p>
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
							<div class="panel_con">

								<div class="ivu-tabs">
									<div class="ivu-tabs-bar">
										<!---->
										<div tabindex="0" class="ivu-tabs-nav-container">
											<div class="ivu-tabs-nav-wrap" style="position: relative;"><span class="ivu-tabs-nav-prev ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span> <span class="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
												<div class="ivu-tabs-nav-scroll border">
													<div class="ivu-tabs-nav">
														<!--<div class="ivu-tabs-ink-bar ivu-tabs-

ink-bar-animated" style="width: 88px;"  :style="[Tabstransform()]"></div>-->
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">产品信息</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}" @click="TabsChange(1)">产品报价信息</div>

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
																<span class="lable">产品名称：</span>
																<div class="value">
																	<p>JB201902003</p>
																</div>
															</li>
															
															<li>
																<span class="lable">产品型号：</span>
																<div class="value">
																	<p>jd-130</p>
																</div>
															</li>

															<li>
																<span class="lable">产品分类：</span>
																<div class="value">
																	<p>门板</p>
																</div>
															</li>

															<li>
																<span class="lable">产品材质：</span>
																<div class="value">
																	<p>实木</p>
																</div>
															</li>

														

															

															<li>
																<span class="lable">产品颜色：</span>
																<div class="value">
																	<p>正常黑</p>
																</div>
															</li>

															<li>
																<span class="lable">产品规格：</span>
																<div class="value">
																	<p>100*100cm</p>
																</div>
															</li>
															
																<li>
																<span class="lable">产品描述：</span>
																<div class="value">
																	<p>来源于俄罗斯极地桦木</p>
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
																	<p>admin</p>
																</div>
															</li>
															
															<li>
																<span class="lable">创建时间：</span>
																<div class="value">
																	<p>2019-05-21</p>
																</div>
															</li>

															

														</ul>
													</div>
												</div>

											</div>
										</div>

										</div>
										<div class="ivu-tabs-tabpane padding">
											
											<div class="dealer_tab_nav one">
											<div class="tab_center ">
												<div class=" tab_item">
													<div class="supplier_msg">
														<ul>
															<li>
																<span class="lable">产品出厂价：</span>
																<div class="value">
																	<p>1000</p>
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
									<button class="details_opBut">产品推荐</button>

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

								</div>

							</div>
						</div>
					</div>
				</div>
				<!--<div class="Quick_navigation">
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
				</div>-->
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

				orderPhead: [{
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
												this.color = '';
												this.door = '';
												this.series = '';
												this.type = '';
												this.updateUser = '';
												this.updateTime = '';
												this.notes = '';
												this.openOrdetails = false;
												this.DemandOpen = true;
												this.getOrdemand(params.index);
												this.setindexdep = params.index;
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

					}
				],
				orderPdata: [],

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
				tabIndexs: 0

			};
		},

		methods: {

			TabsChange: function(index) {
				this.tabIndexs = index
			},

			Tabstransform: function() {
				var index = this.tabIndexs
				let style = {}
				style['transform'] = 'translate3D(' + index * 100 + '%' + ', 0px,0px)'

				return style

			},

			minusTabstransform: function() {
				var index = this.tabIndexs
				let style = {}
				style['transform'] = 'translate3D(' + -index * 100 + '%' + ', 0px,0px)'

				return style

			},

			redact: function() {
				this.$emit('openWindow', ('productRedact'), ('编辑产品'), ('12-2'), ('productRedact'), ('productRedact'))
			}

		},

		mounted: function() {

		}

	}
</script>