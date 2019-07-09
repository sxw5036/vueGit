<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">设计管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>设计详情</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="panel">
			<div class="panel_nav">
				<div class="panel_center">
					<h3 class="head">基本信息<span class="right_icon">
						<Poptip
					        confirm
					        title="设计单删除后所有数据不可恢复，您确认要删除吗？"
					        @on-ok="deleteData"
					        >
					      <Button size="small" type="error" icon="ios-trash-outline">删除</Button>
					    </Poptip>
						</span></h3>
					<div class="panel_con" style="padding: 0px;">
						<div class="summarize">
							<ul>
								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>订单编号</h3>
									<p>{{customOrder.no}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户姓名</h3>
									<p>{{customOrder.creatorName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户电话</h3>
									<p>{{customOrder.customerTel}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户地址</h3>
									<p>{{customOrder.customerAddress}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>经销商姓名</h3>
									<p>{{customOrder.dealerName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>经销商地址</h3>
									<p>{{customOrder.dealerAddress}}</p>
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

											<div class="Tab_head">
												<div class="item right">
													<Button size="small" v-show="redactVisible.tab1" @click="activateRedact(1)" type="primary" icon="md-create">编辑</Button>
													<Button size="small" v-show="!redactVisible.tab1" @click="sureRedactBasic" type="success" icon="md-checkmark">完成</Button>
													<Button size="small" v-show="!redactVisible.tab1" @click="closeRedact(1)" type="warning" icon="md-close">取消</Button>
													<Button size="small" type="info" icon="ios-albums-outline">打印</Button>

												</div>
											</div>

											<div class="dealer_tab_nav one">
												<div class="tab_center ">
													<div class=" tab_item">

														<div class="supplier_msg">

															<ul>
																<li>
																	<span class="lable">订单编号：</span>
																	<div class="value">

																		<Input class="borderNone" v-model="customOrder.no" readonly="readonly"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">设计名称：</span>
																	<div class="value">
																		<Input :readonly="redactVisible.tab1" @on-change="vIpnt" :class="{borderNone:redactVisible.tab1==true}" v-model="orderDesign.name"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">设计估价：</span>
																	<div class="value">
																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="orderDesign.valuation"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">设计备注：</span>
																	<div class="value">
																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="orderDesign.notes"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">设计师：</span>
																	<div class="value">

																		<Input v-show="redactVisible.tab1" readonly="readonly" class="borderNone" v-model="orderDesign.designName"></Input>

																		<Select v-show="!redactVisible.tab1" @on-change="getdesignMobile(rderDesign.designer)" filterable v-model="orderDesign.designer" placeholder="请选择要设计的设计师...">
																			<Option v-for="item in members" :value="item.userId" :key="item.id">{{ item.userName}}</Option>
																		</Select>

																	</div>
																</li>

																<li>
																	<span class="lable">设计师电话：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderDesign.designMobile"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">设计状态：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderDesign.status"></Input>
																	</div>
																</li>

																<li>

																	<span class="lable">创建时间：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderDesign.created"></Input>
																	</div>
																</li>

															</ul>
														</div>
													</div>

													<!--<div class=" tab_item">
														<div class="supplier_msg">
															<ul>
																<li>
																	<span class="lable">设计图：</span>
																	<div class="value">
																		<div class="pl">
																			<div class="demo-upload-list" v-for="(item,index) in uploadList">
																				<template v-if="item.status === 'finished'">
																					<img :src="item.path">
																					<div class="demo-upload-list-cover">
																						<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
																						<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,index)"></Icon>
																					</div>
																				</template>
																				<template v-else>
																					<Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
																				</template>
																			</div>
																			<Upload v-show="!redactVisible.tab1" multiple ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFileList" style="display: inline-block;width:58px;">
																				<div style="width: 58px;height:58px;line-height: 58px;">
																					<Icon type="ios-camera" size="20"></Icon>
																				</div>
																			</Upload>
																		</div>
																	</div>
																</li>

															</ul>
														</div>
													</div>-->

												</div>
											</div>
										</div>
										<div class="ivu-tabs-tabpane padding">
												<div class="Collapse_item" v-for="(item , index) in orderDemand">
												
												<Collapse>
													<Panel name="1">

														需求编号：{{item.no}}
														<div slot="content">
															
                                                              <div class="dealer_tab_nav">
															<div class="tab_center ">
																<div class=" tab_item">
																	<div class="supplier_msg">
																		<ul>
																			<li>
																				<span class="lable">需求编号：</span>
																				<div class="value">
																					<p>{{item.no}}</p>
																				</div>
																			</li>
																			
																			<li>
																				<span class="lable">需求名称：</span>
																				<div class="value">
																					<p>{{item.name}}</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">需求内容：</span>
																				<div class="value">
																					<p>{{item.content}}</p>
																				</div>
																			</li>

																			
																		</ul>
																	</div>
																</div>
																
																
																<div class=" tab_item">
																	<div class="supplier_msg">
																		<ul>
																			

																			<li>
																				<span class="lable">产品型号:</span>
																				<div class="value">
																					<p>{{item.productModel}}</p>
																				</div>
																			</li>
																			
																			<li>
																				<span class="lable">产品系列:</span>
																				<div class="value">
																					<p>{{item.productSeries}}</p>
																				</div>
																			</li>

																			
																			<li>
																				<span class="lable">创建人：</span>
																				<div class="value">
																					<p>{{item.creatorName}}</p>
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
																					<p>{{item.created}}</p>
																				</div>
																			</li>

																			<li>
																				<span class="lable">附件：</span>
																				<div class="value">
																				  <div class="pl">
																			<div class="demo-upload-list" v-for="(item,index) in item.customOrderFiles">
																				<template >
																					<img :src="item.fullPath">
																					<div class="demo-upload-list-cover">
																						<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
																						
																					</div>
																				</template>
																				
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
													</Panel>

												</Collapse>
												
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
				customOrderId: '',
				designId: '',
				orderDesign: {},
				customOrder: {},
				DemandHead: [{
						title: '编号',
						key: 'no',

					},
					{
						title: '创建时间',
						key: 'created',

					},
					{
						title: '内容',
						key: 'content',

					}],
				orderDemand: [],

				uploadpathdata: '',
				defaultList: [],
				imgName: '',
				visible: false,
				uploadList: [],
				uparry: {
					multipartFileList: []
				},

				oldMsg: {},
				redactVisible: {
					tab1: true,
					tab2: true,
					tab3: true,
					tab4: true
				},
				members: [], //员工数据

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

			goback: function() {
				this.$emit('openWindow', ('designorder'), ('设计管理'), ('5'), ('designorder'), ('designorder'))

			},

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

				this.$emit('openWindow', ('designorderRedact'), ('编辑设计'), ('5-2'), ('designorderRedact'), ('designorderRedact'))
			},

			//up

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(fileid, index) {

				this.delfile(fileid, index)

			},
			handleSuccess(res, file) {

				var Res = res.data
				this.uploadList = this.$refs.upload.fileList
				for(var i = 0; i < Res.length; i++) {
					file.path = Res[i].path
					file.id = Res[i].id
				}

				var dsDataCache = this.dsDataCache
				var obj = {
					path: Res[0].path

				}

				/*	dsDataCache[this.dsData[this.designersIndex].id].designFile.push(obj)
					this.dsDataCache = dsDataCache*/

			},
			handleFormatError(file) {
				this.$Notice.warning({
					title: '文件格式不正确',
					desc: '' + file.name + '文件格式不正确，请选择jpg,jpeg或png'
				});
			},
			handleMaxSize(file) {
				this.$Notice.warning({
					title: '超过文件大小限制',
					desc: '' + file.name + '文件太大，不超过5M'
				});
			},
			handleBeforeUpload(file) {

				this.file = file
				this.uparry.multipartFileList.push(this.file)

			},

			//触发编辑

			activateRedact: function(index) {

				if(index == 1) {
					this.redactVisible.tab1 = !this.redactVisible.tab1;
					let data = "";
					data = this.orderDesign
					this.oldMsg[index] = data
				}

			},

			sureRedactBasic: function() {

				let that = this

				var orderDesign = this.orderDesign

				var name = orderDesign.name;
				var notes = orderDesign.notes;
				var valuation = orderDesign.valuation + '';
				var designer = orderDesign.designer;
				var designMobile = orderDesign.designMobile;

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var num = /^([0-9])+(.[0-9]{2})?$/

				name = name.trim()
				notes = notes.trim()
				valuation = valuation.trim()
				designMobile = designMobile.trim()

				if(name == "" || name == null || name.length < 1) {

					this.$Message.error('设计单名称不能为空！');
					return false;
				} else if(valuation.length < 1) {
					this.$Message.error('设计估价不能为空！');
					return false;
				} else if(num.test(valuation) == false) {
					this.$Message.error('设计估价只能是数字,且只能是小数点后两位！');
					return false;
				} else if(designer == "" || designer == null) {

					this.$Message.error('设计师不能为空！');
					return false;
				} else if(designMobile == "" || designMobile == null || designMobile.length == 0) {

					this.$Message.error('设计师电话不能为空！');
					return false;
				} else if(tel.test(designMobile) == false || telephone.test(designMobile) || phone.test(designMobile)) {

					this.$Message.error('设计师电话格式不正确！');
					return false;

				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios({
					method: 'put',
					url: '/api/f/customorders/' + this.customOrderId + '/designs/' + this.designId,
					data: {
						name: name,
						notes: notes,
						designer: designer,
						valuation: valuation

					}

				}).then(function(res) {
					setTimeout(msg, 100);

					var verify = [{
							"name": "name",
							"note": "设计名称"
						},
						{
							"name": "notes",
							"note": "设计描述 "
						},
						{
							"name": "valuation",
							"note": "设计估价 "
						},
						{
							"name": "designer",
							"note": "设计师 "
						},
					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					var data = res.data.data
					that.$Message.success("修改成功")
					that.redactVisible.tab1 = !that.redactVisible.tab1;

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//删除设计数据
			deleteData: function() {

				let that = this

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + this.customOrderId + '/designs/' + this.designId,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.$Message.success("删除成功")
					setTimeout(function() {

						that.goback()

					}, 2000);

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			getdesignMobile: function(did) {

				//				

				for(var i = 0; i < this.members; i++) {

					if(did == this.members[i].userId) {

						this.getdesignMobile = this.members[i].mobile
					}

				}

			},

			vIpnt: function() {
				console.log(this.oldMsg)
			},

			closeRedact: function(index) {

				console.log(this.oldMsg)

				if(index == 1) {
					this.redactVisible.tab1 = !this.redactVisible.tab1
					this.orderDesign = this.oldMsg[index]

				}

			},

			//查询设计单详情

			getDesign: function() {

				let that = this
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios({
					method: 'get',
					url: '/api/f/customorders/' + this.customOrderId + '/designs/' + this.designId,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.uploadList = data.designFile
					that.orderDesign = data.orderDesignDto

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//查询订单详情
			getOrder: function() {

				var that = this

				var id = this.customOrderId

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
					that.orderPdata = data.orderProducts //订单产品
					that.orderDesign = data.orderDesign //订单设计
					that.orderDemand = data.orderDemand //订单需求

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//查询全部员工
			getMembers: function() {
				let that = this

				this.axios({
					method: 'get',
					url: '/api/f/depts/members/?pageNum=1&pageSize=999999',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.members = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})
			},

		},

		mounted: function() {

			if(this.$route.query.pathUrl) {

				let pathArry = this.$route.query.pathUrl.split(',')

				this.customOrderId = pathArry[0]
				this.designId = pathArry[1]
				this.getOrder()
				this.getDesign()
				this.getMembers()

			}

		}

	}
</script>