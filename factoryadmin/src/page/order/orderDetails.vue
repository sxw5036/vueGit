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
										<p>{{customOrder.typeName}}</p>
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

												<div class="schedule_sign" :style="[orderStatus()]">
													<img src="../../assets/img/order/orderSchedule.png" />
												</div>
												<div class="order_schedule" :style="[orderStatuswidth()]"></div>

												<ul>
													<li>下单
														<p>采购员二号</p>
														<span>2019-02-06 12:44:03</span>
													</li>
													<li style="left: 14.3%;">设计
														<p>设计师二号</p>
													</li>

													<li style="left:28.6%;">报价</li>
													<li style="left: 42.9%;">支付</li>
													<li style="left: 57.2%;">生产</li>
													<li style="left: 71.5%;">包装</li>
													<li style="left: 85.8%;">入库</li>
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

										<div class="ivu-tabs">
											<div class="ivu-tabs-bar">
												<!---->
												<div tabindex="0" class="ivu-tabs-nav-container">
													<div class="ivu-tabs-nav-wrap" style="position: relative;"><span class="ivu-tabs-nav-prev ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span> <span class="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
														<div class="ivu-tabs-nav-scroll border">
															<div class="ivu-tabs-nav">
																<!--<div class="ivu-tabs-ink-bar ivu-tabs-ink-bar-animated" style="width: 88px;"  :style="[Tabstransform()]"></div>-->
																<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">订单基本信息
																	<!---->
																	<!---->
																</div>
																<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}" @click="TabsChange(1)">订单设计需求
																	<!---->
																	<!---->
																</div>

																<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==2}" @click="TabsChange(2)">订单产品信息

																</div>

																<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==3}" @click="TabsChange(3)">订单报价信息

																</div>
															</div><object tabindex="-1" type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object></div>
													</div>
												</div>
											</div>
											<div class="ivu-tabs-content ivu-tabs-content-animated" :style="[minusTabstransform()]">
												<div class="ivu-tabs-tabpane padding">

													<div class="Tab_head">
														<div class="item right">
															<Button size="small" v-show="redactVisible.tab1" @click="activateRedact(1)" type="primary" icon="md-create">编辑</Button>
															<Button size="small" v-show="!redactVisible.tab1" @click="sureRedact" type="success" icon="md-checkmark">完成</Button>
															<!--	<Button size="small" v-show="!redactVisible.tab1" @click="closeRedact(1)" type="warning" icon="md-close">取消</Button>-->
															<Button size="small" class="Tab_print" type="info" icon="ios-albums-outline">打印</Button>

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
																				<p>
																					<!--<Input :readonly="redactVisible.tab1" class="borderNone" v-model="customOrder.no" placeholder="请输入订单编号..." style="width: 150px;margin:0 5px;"></Input>-->

																					<Input class="borderNone" v-model="customOrder.no" readonly="readonly"></Input>
																				</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">订单类型 ：</span>
																			<div class="value">

																				<Input v-show="!!redactVisible.tab1" class="borderNone" v-model="customOrder.typeName" readonly="readonly"></Input>

																				<Select v-show="!redactVisible.tab1" v-model="customOrder.type">
																					<Option v-for="item in ordertypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
																				</Select>
																			</div>
																		</li>

																		<li>
																			<span class="lable">订单状态：</span>
																			<div class="value">
																				<Input class="borderNone" v-model="customOrder.orderStatus" readonly="readonly"></Input>
																			</div>
																		</li>

																		<li>
																			<span class="lable">下单经销商：</span>
																			<div class="value">
																				<Input class="borderNone" v-model="customOrder.dealerName" readonly="readonly"></Input>

																			</div>
																		</li>

																		<li>
																			<span class="lable">经销商电话：</span>
																			<div class="value">
																				<Input class="borderNone" v-model="customOrder.dealerTel" readonly="readonly"></Input>

																			</div>
																		</li>

																		<li>
																			<span class="lable">经销商地址：</span>
																			<div class="value">
																				<Input class="borderNone" v-model="customOrder.dealerAddress" readonly="readonly"></Input>
																			</div>
																		</li>

																		<li>
																			<span class="lable">客户姓名：</span>
																			<div class="value">

																				<Input class="borderNone" v-model="customOrder.customerName" readonly="readonly"></Input>
																			</div>
																		</li>

																	</ul>
																</div>
															</div>

															<div class=" tab_item">
																<div class="supplier_msg">
																	<ul>

																		<li>
																			<span class="lable">客户电话：</span>
																			<div class="value">
																				<Input class="borderNone" v-model="customOrder.customerTel" readonly="readonly"></Input>
																			</div>
																		</li>

																		<li>
																			<span class="lable">收货人姓名：</span>
																			<div class="value">
																				<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="customOrder.consigneeName"></Input>
																			</div>
																		</li>

																		<li>
																			<span class="lable">收货人电话：</span>
																			<div class="value">
																				<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="customOrder.consigneeTel"></Input>
																			</div>
																		</li>

																		<li>

																			<span class="lable">收货地区：</span>

																			<div class="value">

																				<Input v-show="!!redactVisible.tab1" class="borderNone" v-model="customOrder.cityName" readonly="readonly"></Input>

																				<div v-show="!redactVisible.tab1">

																					<Select style="width:100px;" v-model="provinceMsg" @on-change="pickprovince(provinceMsg)">
																						<Option v-for="item in provinceData" :value="item.id" :key="item.name">{{ item.name }}</Option>
																					</Select>

																					<Select style="width:100px;" v-model="cityMsg" @on-change="pickdistrict(cityMsg)">
																						<Option v-for="item in cityData" :value="item.id" :key="item.id">{{ item.name }}</Option>
																					</Select>

																					<Select style="width:100px;" v-model="districMsg" @on-change="changedistric(districMsg)">
																						<Option v-for="(item,index) in districData" :value="item.id" :key="item.id">{{ item.name }}</Option>
																					</Select>

																				</div>

																			</div>

																		</li>

																		<li>
																			<span class="lable">收货地址：</span>
																			<div class="value">
																				<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="customOrder.address"></Input>
																			</div>
																		</li>

																		<li>
																			<span class="lable">总金额：</span>
																			<div class="value">
																				<Input class="borderNone" v-model="customOrder.factoryFinalPrice" readonly="readonly"></Input>
																			</div>
																		</li>

																		<li>
																			<span class="lable">是否设计：</span>
																			<div class="value">

																				<Input class="borderNone" v-model="customOrder.designName" readonly="readonly"></Input>

																			</div>
																		</li>

																		<!--<li>
																			<span class="lable">订单备注：</span>
																			<div class="value">
																				<p>{{customOrder.notes}}</p>
																				<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="customOrder.notes"></Input>
																			</div>

																		</li>-->

																	</ul>
																</div>
															</div>

															<div class=" tab_item">
																<div class="supplier_msg">
																	<ul>

																		<li>
																			<span class="lable">设计风格：</span>
																			<div class="value">

																				<Input class="borderNone" v-model="customOrder.designStyle" readonly="readonly"></Input>
																			</div>
																		</li>

																		<li>
																			<span class="lable">预计交货时间：</span>
																			<div class="value">
																				<Input class="borderNone" v-show="!!redactVisible.tab1" v-model="customOrder.estimatedDeliveryDate" readonly="readonly"></Input>

																				<DatePicker v-show="!redactVisible.tab1" type="date" v-model="customOrder.estimatedDeliveryDate" @on-change="getestimatedDeliveryDate" style="width: 300px;"></DatePicker>
																			</div>
																		</li>

																		<li>
																			<span class="lable">创建时间：</span>
																			<div class="value">
																				<Input class="borderNone" v-model="customOrder.created" readonly="readonly"></Input>
																			</div>
																		</li>
																		<li>
																			<span class="lable">创建人：</span>
																			<div class="value">
																				<Input class="borderNone" v-model="customOrder.creatorName" readonly="readonly"></Input>
																			</div>
																		</li>

																	</ul>
																</div>
															</div>

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
																										<template>
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

												<div class="ivu-tabs-tabpane padding">

													<div class="Tab_head">
														<div class="item right">

															<Button size="small" v-show="!pushProduct" @click="offProduct" type="primary" icon="md-checkmark">添加产品</Button>
															<Button size="small" v-show="pushProduct" @click="SureProduct" type="success" icon="md-checkmark">完成</Button>
															<Button size="small" @click="offProduct" type="warning" icon="md-close">取消</Button>

														</div>
													</div>

													<div class="ivu-collapse Collapse_item" v-show="pushProduct">
														<div class="ivu-collapse-item ivu-collapse-item-active">
															<div class="ivu-collapse-header">新建产品
															</div>
															<div class="ivu-collapse-content">
																<div class="ivu-collapse-content-box">
																	<div class="Tab_head">
																		<div class="item right">

																		</div>
																	</div>

																	<div class="dealer_tab_nav">
																		<div class="tab_center ">
																			<div class=" tab_item">
																				<div class="supplier_msg">
																					<ul>
																						<li>
																							<span class="lable">产品类型：</span>
																							<div class="value">

																								<Select v-model="orderProductObj.type" @on-change="orderProductObj.series='',orderProductObj.color='',orderProductObj.door=''" placeholder="请选择产品类型...">
																									<Option v-for="(item, index) in orderType" :value="item.code" :key="item.id">{{item.value}}</Option>
																								</Select>
																							</div>
																						</li>

																						<li v-show="orderProductObj.type==0||orderProductObj.type==1">
																							<span class="lable">产品系列：</span>
																							<div class="value">

																								<Select v-model="orderProductObj.series" placeholder="请选择产品系列...">
																									<Option v-for="(item, index) in orderSeries" :value="item.code" :key="item.id">{{item.value}}</Option>
																								</Select>
																							</div>
																						</li>

																						<li v-show="orderProductObj.type==0||orderProductObj.type==1">
																							<span class="lable">产品门型:</span>
																							<div class="value">
																								<Input v-model="orderProductObj.door" placeholder="请输入门型..."></Input>
																							</div>

																						</li>

																						<li v-show="orderProductObj.type==0||orderProductObj.type==1">
																							<span class="lable">产品颜色:</span>
																							<div class="value">
																								<Input v-model="orderProductObj.color" placeholder="请输入产品颜色..."></Input>
																							</div>
																						</li>

																					</ul>
																				</div>
																			</div>

																			<div class=" tab_item">
																				<div class="supplier_msg">
																					<ul>

																						<li>
																							<span class="lable">产品价格：</span>
																							<div class="value">

																								<Input v-model="orderProductObj.price" placeholder="请输入产品价格..."></Input>
																							</div>
																						</li>

																						<li>
																							<span class="lable">产品备注：</span>
																							<div class="value">

																								<Input type="textarea" v-model="orderProductObj.notes" placeholder="请输入备注..."></Input>
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

													<div class="Collapse_item" v-for="(item , index) in orderProductData" :key="index">

														<Collapse>
															<Panel name="1">

																{{item.typeName}} - {{item.seriesName}}
																<div slot="content">

																	<div class="Tab_head">
																		<div class="item right">
																			<Button size="small" v-show="item.readonly" @click="activateOrderProduct(index)" type="primary" icon="md-create">编辑</Button>
																			<Button size="small" v-show="!item.readonly" @click="sureOrderProduct(index,item.id)" type="success" icon="md-checkmark">完成</Button>
																			<Poptip confirm title="订单产品删除后所有数据不可恢复，您确认要删除吗？" @on-ok="delProduct(index,item.id)">
																				<Button size="small" type="error" icon="ios-trash-outline">删除</Button>
																			</Poptip>
																			<!--	<Button size="small" v-show="!redactVisible.tab1" @click="closeRedact(1)" type="warning" icon="md-close">取消</Button>-->
																			<Button size="small" class="Tab_print" type="info" icon="ios-albums-outline">打印</Button>

																		</div>
																	</div>

																	<div class="dealer_tab_nav">
																		<div class="tab_center ">
																			<div class=" tab_item">
																				<div class="supplier_msg">
																					<ul>
																						<li>
																							<span class="lable">产品类型：</span>
																							<div class="value">

																								<Input v-show="item.readonly" readonly="readonly" class="borderNone" v-model="item.typeName"></Input>

																								<Select v-show="!item.readonly" style="width: 300px;" v-model="item.type" @on-change="item.series='',item.color='',item.door=''" placeholder="请选择产品类型...">
																									<Option v-for="(item, index) in orderType" :value="item.code" :key="item.id">{{item.value}}</Option>
																								</Select>
																							</div>
																						</li>

																						<li v-show="item.type==0||item.type==1">
																							<span class="lable">产品系列：</span>
																							<div class="value">

																								<Input v-show="item.readonly" readonly="readonly" class="borderNone" v-model="item.seriesName"></Input>

																								<Select v-show="!item.readonly" style="width: 300px;" v-model="item.series" placeholder="请选择产品系列...">
																									<Option v-for="(item, index) in orderSeries" :value="item.code" :key="item.id">{{item.value}}</Option>
																								</Select>
																							</div>
																						</li>

																						<li v-show="item.type==0||item.type==1">
																							<span class="lable">产品门型:</span>
																							<div class="value">
																								<Input :readonly="item.readonly" :class="{borderNone:item.readonly==true}" v-model="item.door"></Input>
																							</div>

																						</li>

																						<li v-show="item.type==0||item.type==1">
																							<span class="lable">产品颜色:</span>
																							<div class="value">
																								<Input :readonly="item.readonly" :class="{borderNone:item.readonly==true}" v-model="item.color"></Input>
																							</div>
																						</li>

																					</ul>
																				</div>
																			</div>

																			<div class=" tab_item">
																				<div class="supplier_msg">
																					<ul>

																						<li>
																							<span class="lable">产品价格：</span>
																							<div class="value">

																								<Input :readonly="item.readonly" :class="{borderNone:item.readonly==true}" v-model="item.price"></Input>
																							</div>
																						</li>

																						<li>
																							<span class="lable">产品备注：</span>
																							<div class="value">

																								<Input :readonly="item.readonly" :class="{borderNone:item.readonly==true}" v-model="item.notes"></Input>
																							</div>
																						</li>

																						<li>
																							<span class="lable">创建人：</span>
																							<div class="value">
																								<p>{{item.creatorName}}</p>
																							</div>
																						</li>

																						<li>
																							<span class="lable">创建时间：</span>
																							<div class="value">
																								<p>{{item.created}}</p>
																							</div>
																						</li>

																					</ul>
																				</div>
																			</div>

																			<div class=" tab_item">
																				<div class="supplier_msg">
																					<ul>

																						<li>
																							<span class="lable">附件：</span>
																							<div class="value">
																								<div class="pl">
																									<div class="demo-upload-list" v-for="(item,index) in item.uploadFiles">
																										<template>
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

													<div class="Tab_head">
														<div class="item right">
															<Button size="small" v-show="customOrder.status==0&&redactVisible.tab4||customOrder.status==1&&redactVisible.tab4" @click="activateRedact(4)" type="primary" icon="md-create">编辑</Button>
															<Button size="small" v-show="!redactVisible.tab4" @click="RedactsureOffer" type="success" icon="md-checkmark">完成</Button>
															<Button size="small" class="Tab_print" type="info" icon="ios-albums-outline">打印</Button>

														</div>
													</div>

													<div class="print_table">
														<table cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
															<colgroup>
																<col width="5%">
																<col width="15%">
																<col width="15%">
																<col width="10%">
																<col width="10%">
																<col width="5%">
																<col width="12.5%">
																<col width="17.5%">

															</colgroup>

															<thead>
																<tr>
																	<th>

																		<span class="">序号</span>

																	</th>
																	<th>

																		<span class="">产品部件</span>

																	</th>
																	<th>

																		<span class="">规格</span>

																	</th>

																	<th class="">

																		<span class="">单价</span>

																	</th>

																	<th class="">

																		<span class="">单位</span>

																	</th>

																	<th class="">

																		<span class="">数量</span>

																	</th>

																	<th class="">

																		<span class="">小记</span>

																	</th>

																	<th class="">

																		<span class="">备注</span>

																	</th>
																	<!---->
																</tr>
															</thead>

															<tbody>
																<tr v-for="(item , index) in offer.offerItems">
																	<td>

																		<span>{{index+1}}<b class="icon_leftOp" v-show="!redactVisible.tab4" @click="deloffer(index)">[-]</b><b class="icon_leftOp" v-show="!redactVisible.tab4" @click="pushoffer(index)">[+]</b></span>

																	</td>

																	<td>

																		<span>{{item.type}}</span>

																	</td>

																	<td>

																		<span v-show="redactVisible.tab4">{{item.standard}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="item.standard"></Input>

																	</td>

																	<td>

																		<span v-show="redactVisible.tab4">{{item.price}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="item.price"></Input>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">{{item.unit}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="item.unit"></Input>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">{{item.quantity}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="item.quantity"></Input>

																	</td>

																	<td>

																		<span v-show="redactVisible.tab4">{{item.subtotal}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="item.subtotal"></Input>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">{{item.notes}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="item.notes"></Input>
																	</td>

																</tr>

																<tr>

																	<td>
																		<span>货款</span>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">￥ {{offer.price}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="offer.price"></Input>

																	</td>

																	<td>
																		<span>优惠货款</span>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">￥ {{offer.discountPrice}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="offer.discountPrice"></Input>

																	</td>

																	<td>
																		<span>设计费</span>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">￥ {{offer.designFee}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="offer.designFee"></Input>

																	</td>

																	<td>
																		<span>优惠设计费</span>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">￥ {{offer.discountDesignFee}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="offer.discountDesignFee"></Input>

																	</td>

																</tr>

																<tr>

																	<td>
																		<span>实收货款</span>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">￥ {{offer.receiptsPrice}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="offer.receiptsPrice"></Input>

																	</td>

																	<td>
																		<span>实收设计费</span>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">￥ {{offer.receiptsDesignFee}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="offer.receiptsDesignFee"></Input>

																	</td>

																	<td>
																		<span>报价人</span>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">{{offer.quoter}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="offer.quoter"></Input>

																	</td>

																	<td>
																		<span>审核人</span>

																	</td>

																	<td>
																		<span v-show="redactVisible.tab4">{{offer.auditor}}</span>
																		<Input v-show="!redactVisible.tab4" class="borderNone" v-model="offer.auditor"></Input>

																	</td>

																</tr>

															</tbody>
														</table>
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
						<!--<div class="panel marBtm">
							<div class="panel_nav">
								<div class="panel_center">

									<div class="head">通用操作</span>
									</div>

									<div class="panel_con">
										<div class="but_op">
											<button class="details_opBut" @click="redact">编辑</button>
											
										</div>

									</div>
								</div>
							</div>
						</div>-->

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
				redactVisible: {
					tab1: true,
					tab2: true,
					tab3: true,
					tab4: true
				},
				tabIndexs: 0,
				orid: "",
				customOrder: {
					status: 0
				},

				orderProductData: [],
				orderDesign: [],

				offer: {
					auditor: '',
					designFee: '0',
					discountDesignFee: '0',
					discountPrice: '0',
					offerItems: [{
							"type": '地柜',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						}, {
							"type": '吊柜',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '高柜',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '门板',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '拉手',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '调拉',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '碗拉',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '见光板',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '横版',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '抽屉',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '踢脚板',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '工艺柜',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						},
						{
							"type": '网格门',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						}, {
							"type": '顶线',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						}, {
							"type": '灯线',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						}, {
							"type": '罗马柱',
							"standard": "",
							"price": '',
							"unit": "",
							"quantity": "",
							"subtotal": "",
							"notes": "",
						}
					],
					price: '0',
					quoter: '',
					receiptsDesignFee: '0',
					receiptsPrice: '0'
				},

				pushProduct: false,
				orderProductObj: {
					"type": "",
					"series": "",
					"color": "",
					"door": "",
					"price": "",
					"notes": "",
				},

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

					}
				],

				orderDemand: [],

				ordertypeList: [{
						value: 0,
						label: '正常订单'
					},
					{
						value: 1,
						label: '补产订单'
					},
					{
						value: 2,
						label: '返货单'
					},
					{
						value: 3,
						label: '打样订单'
					},
					{
						value: 4,
						label: '样板订单'
					},
					{
						value: 5,
						label: '展厅订单'
					},
					{
						value: 6,
						label: '补发订单'
					}
				],

				orderType: [],
				orderSeries: [],

				provinceData: [], //省份数据
				cityData: [], //城市数据
				cityCache: {},
				districData: [], //省/县数据
				districtCache: {},
				provinceMsg: "", //省份选中数据
				cityMsg: "", //城市选中数据
				districMsg: "", //省/县选中数据
				districMsgcache: "",
				sitelatlng: {
					lng: "",
					lat: "",
				},

			}
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

			goback: function() {
				this.$emit('openWindow', ('orderlist'), ('订单列表'), ('6'), ('orderlist'), ('orderlist'))
			},

			redact: function() {
				//				this.$router.push({
				//					name: '',
				//
				//				})

				this.$emit('openWindow', ('redactOrder'), ('编辑订单'), ('6-2'), ('redactOrder'), ('redactOrder'), (this.orid))
			},

			//触发编辑

			activateRedact: function(index) {

				if(index == 1) {
					this.redactVisible.tab1 = !this.redactVisible.tab1;

				}

				if(index == 4) {
					this.redactVisible.tab4 = !this.redactVisible.tab4;

				}

			},

			RedactsureOffer: function() {

				var offer = this.offer
				var auditor = offer.auditor
				var quoter = offer.quoter
				var designFee = offer.designFee
				var discountDesignFee = offer.discountDesignFee
				var discountPrice = offer.discountPrice
				var price = offer.price
				var receiptsDesignFee = offer.receiptsDesignFee
				var receiptsPrice = offer.receiptsPrice

				auditor = auditor.trim()

				quoter = quoter.trim()

				designFee = designFee.trim()

				discountDesignFee = discountDesignFee.trim()

				discountPrice = discountPrice.trim()

				price = price.trim()

				receiptsDesignFee = receiptsDesignFee.trim()

				receiptsPrice = receiptsPrice.trim()

				var num = /^([0-9])+(.[0-9]{2})?$/

				if(price.length > 0 && num.test(price) == false) {
					this.$Message.error('户款价格只能是数字,且只能是小数点后两位！');
					return false;
				} else if(discountPrice.length > 0 && num.test(discountPrice) == false) {
					this.$Message.error('优惠货款价格只能是数字,且只能是小数点后两位！');
					return false;
				} else if(designFee.length > 0 && num.test(designFee) == false) {
					this.$Message.error('设计费价格只能是数字,且只能是小数点后两位！');
					return false;
				} else if(discountDesignFee.length > 0 && num.test(discountDesignFee) == false) {
					this.$Message.error('优惠设计费价格只能是数字,且只能是小数点后两位！');
					return false;
				} else if(receiptsPrice.length > 0 && num.test(receiptsPrice) == false) {
					this.$Message.error('实收货款价格只能是数字,且只能是小数点后两位！');
					return false;
				} else if(receiptsDesignFee.length > 0 && num.test(receiptsDesignFee) == false) {
					this.$Message.error('实收设计费价格只能是数字,且只能是小数点后两位！');
					return false;
				}

				var offerItems = offer.offerItems
				var offerItemsArry = []

				for(var i = 0; i < offerItems.length; i++) {

					var obj = {
						name: '',
						num: '',
						remarks: '',
						spec: '',
						subtotal: '',
						unit: '',
						unitPrice: ''
					}

					obj.name = offerItems[i].type
					obj.name = offerItems[i].type
					obj.num = offerItems[i].quantity
					obj.remarks = offerItems[i].notes
					obj.spec = offerItems[i].standard
					obj.subtotal = offerItems[i].subtotal
					obj.unit = offerItems[i].unit
					obj.unitPrice = offerItems[i].price

					offerItemsArry.push(obj)
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'post',
					url: '/api/f/offer/' + this.orid + '/offer',

					data: {

						auditor: auditor,
						quoter: quoter,
						designFee: designFee,
						discountDesignFee: discountDesignFee,
						discountPrice: discountPrice,
						price: price,
						receiptsDesignFee: receiptsDesignFee,
						receiptsPrice: receiptsPrice,
						offerItems: offerItemsArry,
						orderId: this.orid

					}

				}).then(function(res) {

					var verify = [{
							"name": "auditor",
							"note": "审核人"
						},
						{
							"name": "quoter",
							"note": "报价人 "
						},
						{
							"name": "designFee",
							"note": "设计费"
						},
						{
							"name": "discountDesignFee",
							"note": "优惠设计费 "
						},
						{
							"name": "discountPrice",
							"note": "优惠货款"
						},

						{
							"name": "price",
							"note": "货款"
						},

						{
							"name": "receiptsDesignFee",
							"note": "实收设计费"
						},

						{
							"name": "receiptsPrice",
							"note": "实收货款"
						},

						{
							"name": "offerItems",
							"note": "报价条目"
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						that.pdel = false
						return false
					}
					var data = res.data.data

					that.$Message.success("提交成功")
					that.activateRedact(4)
					that.getdate()

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},

			getestimatedDeliveryDate: function(val) {
				this.customOrder.estimatedDeliveryDate = val.indexOf(" 00:00:00") != -1 ? val : val + " 00:00:00"
			},

			orderStatus: function() {

				let style = {}
				style['left'] = this.customOrder.status * 14.3 + '%'

				return style

			},

			orderStatuswidth: function() {

				let style = {}
				style['width'] = this.customOrder.status * 14.3 + '%'

				return style

			},

			/*选择市*/

			pickprovince: function(id) {
				/*_this.city=res.data.data*/
				this.cityMsg = ""
				this.districMsgcache = ""

				this.cityData = []
				this.districData = []
				/*this.cityid = 0
				this.districtid = 0*/

				var that = this
				var citycache = this.cityCache
				var cityshow;
				cityshow = citycache[id]

				if(!cityshow) {
					that.axios({
						method: 'get',
						url: '/api/f/cities?parentId=' + id + ''

					}).then(function(res) {

						cityshow = res.data.data

						that.cityCache[id] = cityshow
						that.cityData = that.cityCache[id]

						//that.pickdistrict(that.cityData[0].id, 0)

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.cityData = cityshow
					//this.pickdistrict(this.cityData[0].id, 0)

				}

			},

			/*选择区*/

			pickdistrict: function(id, index) {
				this.districMsg = ""
				this.districMsgcache = ""
				this.districData = []

				/*	this.districtid = 0
					this.cityid = index*/
				var that = this

				var districtcache = this.districtCache
				var districtshow;

				districtshow = districtcache[id]

				if(!districtshow) {
					that.axios({
						method: 'get',

						//url: '//api/addresses/1234567890000'
						url: '/api/f/cities?parentId=' + id + ''

					}).then(function(res) {

						districtshow = res.data.data
						districtcache[id] = districtshow
						that.districData = districtshow

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.districData = districtshow

				}

			},

			getpickprovince: function(id) {

				this.cityData = []
				this.districData = []
				var that = this
				var citycache = this.cityCache
				var cityshow;
				cityshow = citycache[id]

				if(!cityshow) {
					that.axios({
						method: 'get',
						url: '/api/f/cities?parentId=' + id + ''

					}).then(function(res) {

						cityshow = res.data.data

						that.cityCache[id] = cityshow
						that.cityData = that.cityCache[id]

						that.getpickdistrict(that.cityMsg)

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.cityData = cityshow
					this.getpickdistrict(that.cityMsg)

				}
			},

			//选择经销商时查询县级数据

			getpickdistrict: function(id) {
				/*	this.districMsg = ""
					this.districMsgcache = ""*/
				this.districData = []

				var that = this

				var districtcache = this.districtCache
				var districtshow;

				districtshow = districtcache[id]

				if(!districtshow) {
					that.axios({
						method: 'get',

						//url: '//api/addresses/1234567890000'
						url: '/api/f/cities?parentId=' + id + ''

					}).then(function(res) {

						districtshow = res.data.data
						districtcache[id] = districtshow
						that.districData = districtshow

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.districData = districtshow

				}

			},

			changedistric: function(id) {

				if(!id == true) {
					this.districMsgcache = ""

					return false;
				}
				this.districMsgcache = id

			},

			//确认修改

			sureRedact: function() {

				var customOrder = this.customOrder

				var type = customOrder.type;
				var consigneeName = customOrder.consigneeName;
				var consigneeTel = customOrder.consigneeTel + '';
				var address = customOrder.address;
				var notes = customOrder.notes + '';
				var estimatedDeliveryDate = customOrder.estimatedDeliveryDate;

				consigneeName = consigneeName.trim()
				consigneeTel = consigneeTel.trim()
				address = address.trim()
				notes = notes.trim()

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				if(consigneeName == "" || consigneeName == null || consigneeName.length < 1) {
					this.$Message.error('收货人姓名不能为空！');
					return false;
				} else if(consigneeTel.length > 0 && tel.test(consigneeTel) == false && telephone.test(consigneeTel) == false && phone.test(consigneeTel) == false) {
					this.$Message.error('收货人电话格式不正确或为空！');
					return false;
				} else if(this.districMsg == "" || this.districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');
					return false;
				} else if(estimatedDeliveryDate == "" || estimatedDeliveryDate == null) {
					this.$Message.error('预计交货日期不能为空！');
					return false;
				}

				let that = this;

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/' + that.orid,
					data: {
						address: address,
						consigneeName: consigneeName,
						consigneeTel: consigneeTel,
						type: type,
						notes: notes,
						/*	deliveryDate: (deliveryDate == "") ? undefined : deliveryDate + ' 00:00:00',*/
						estimatedDeliveryDate: (estimatedDeliveryDate == "") ? undefined : estimatedDeliveryDate,
						cityAreaId: this.districMsg
					}
				}).then(function(res) {
					setTimeout(msg, 100);

					var verify = [{
							"name": "address",
							"note": "详细收货订单"
						},
						{
							"name": "consigneeName",
							"note": "收货人姓名 "
						},

						{
							"name": "consigneeTel",
							"note": "收货人电话 "
						},
						{
							"name": "type",
							"note": "订单类型 "
						},
						{
							"name": "notes",
							"note": "订单描述"
						},

						{
							"name": "estimatedDeliveryDate",
							"note": "预计交货日期"
						},

						{
							"name": "cityAreaId",
							"note": "收货地区"
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

			/*订单产品模块*/

			//新增订单

			//新增产品
			SureProduct: function() {
				var orderProductObj = this.orderProductObj

				var type = orderProductObj.type
				var series = orderProductObj.series
				var color = orderProductObj.color
				var door = orderProductObj.door
				var notes = orderProductObj.notes
				var price = orderProductObj.price

				var num = /^([0-9])+(.[0-9]{2})?$/

				if(type == "" || type == null) {
					this.$Message.error('产品类型不能为空！');
					return false;
				} else if(series == "" && type == 0) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(series == "" && type == 1) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(color == "" && type == 0) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(color == "" && type == 1) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(door == "" && type == 0) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(door == "" && type == 1) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(price == "" || price == null || price.trim().length == 0) {
					this.$Message.error('订单产品价格不能为空！');
					return false
				} else if(num.test(price) == false) {
					this.$Message.error('订单产品价格只能是数字,且只能是小数点后两位！');
					return false
				} else if(parseInt(price) >= 100000000) {
					this.$Message.error('订单产品价格数量过长！');
					return false
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this

					this.axios({
						method: 'post',
						url: '/api/f/customorders/' + this.orid + '/products',

						data: {
							"type": type,
							"series": (series == "") ? undefined : series,
							"color": (color == "") ? undefined : color,
							"door": (door == "") ? undefined : door,
							"notes": notes,
							"price": price
						}

					}).then(function(res) {

						var verify = [{
								"name": "type",
								"note": "产品类型"
							},
							{
								"name": "series",
								"note": "产品系列 "
							},
							{
								"name": "color",
								"note": "产品颜色"
							},
							{
								"name": "door",
								"note": "门型 "
							},
							{
								"name": "notes",
								"note": "描述"
							},

							{
								"name": "price",
								"note": "产品价格"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data

						data.type = data.type + ''
						data.series = data.series + ''

						that.$Message.success("添加成功");
						that.getdate()
						that.offProduct()

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

				}
			},

			offProduct: function() {

				this.pushProduct = !this.pushProduct

				this.orderProductObj = {
					"type": "",
					"series": "",
					"color": "",
					"door": "",
					"price": "",
					"notes": "",

				}
			},
			//激活订单产品修改

			activateOrderProduct: function(index) {

				this.orderProductData[index].readonly = !this.orderProductData[index].readonly

			},

			sureOrderProduct: function(index, id) {

				var orderProductObj = this.orderProductData[index]

				var type = orderProductObj.type
				var series = orderProductObj.series
				var color = orderProductObj.color
				var door = orderProductObj.door
				var notes = orderProductObj.notes
				var price = orderProductObj.price.toString()

				var num = /^([0-9])+(.[0-9]{2})?$/

				if(type == "" || type == null) {
					this.$Message.error('产品类型不能为空！');
					return false;
				} else if(series == "" && type == 0) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(series == "" && type == 1) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(color == "" && type == 0) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(color == "" && type == 1) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(door == "" && type == 0) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(door == "" && type == 1) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(price == "" || price == null || price.trim().length == 0) {
					this.$Message.error('订单产品价格不能为空！');
					return false
				} else if(num.test(price) == false) {
					this.$Message.error('订单产品价格只能是数字,且只能是小数点后两位！');
					return false
				} else if(parseInt(price) >= 100000000) {
					this.$Message.error('订单产品价格数量过长！');
					return false
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this

					this.axios({
						method: 'put',
						url: '/api/f/customorders/' + this.orid + '/products/' + id,

						data: {
							"type": type,
							"series": (series == "") ? undefined : series,
							"color": (color == "") ? undefined : color,
							"door": (door == "") ? undefined : door,
							"notes": notes,
							"price": price
						}

					}).then(function(res) {

						var verify = [{
								"name": "type",
								"note": "产品类型"
							},
							{
								"name": "series",
								"note": "产品系列 "
							},
							{
								"name": "color",
								"note": "产品颜色"
							},
							{
								"name": "door",
								"note": "门型 "
							},
							{
								"name": "notes",
								"note": "描述"
							},

							{
								"name": "price",
								"note": "产品价格"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data
						that.$Message.success("修改成功");
						that.getdate()

						that.activateOrderProduct(index)

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

				}

			},

			delProduct: function(index, pid) {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + this.orid + '/products/' + pid,

				}).then(function(res) {

					var verify = [{
							"name": "type",
							"note": "产品类型"
						},
						{
							"name": "series",
							"note": "产品系列 "
						},
						{
							"name": "color",
							"note": "产品颜色"
						},
						{
							"name": "door",
							"note": "门型 "
						},
						{
							"name": "notes",
							"note": "描述"
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						that.pdel = false
						return false
					}
					var data = res.data.data
					//					that.orderProductData.splice(index, 1)
					that.$Message.success("删除成功")
					that.getdate()

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

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

					that.provinceMsg = that.customOrder.cityId
					that.cityMsg = that.customOrder.provinceId
					that.districMsg = that.customOrder.cityAreaId

					that.getpickprovince(that.customOrder.cityId)

					that.orderProductData = [] //订单产品
					that.orderDesign = data.orderDesign //订单设计
					that.orderDemand = data.orderDemand //订单需求
					
					for(let i = 0; i < data.orderProducts.length; i++) {

						var obj = data.orderProducts[i]
						obj.readonly = "";
						obj.readonly = true;
						obj.series = obj.series + '';
						obj.type = obj.type + ''

						that.orderProductData.push(obj)
					}
					
					//报价信息
					var offerItems = data.offerItems
					var orderOffer = data.orderOffer
					
					orderOffer.auditor==undefined?that.offer.auditor="":that.offer.auditor=orderOffer.auditor
					
					orderOffer.designFee==undefined?that.offer.designFee=0:that.offer.designFee=orderOffer.designFee
					
					orderOffer.discountDesignFee==undefined?that.offer.discountDesignFee=0:that.offer.discountDesignFee=orderOffer.discountDesignFee
					
					orderOffer.discountPrice==undefined?that.offer.discountPrice=0:that.offer.discountPrice=orderOffer.discountPrice
					
					orderOffer.quoter==undefined?that.offer.quoter="":that.offer.quoter=orderOffer.quoter
					
					orderOffer.receiptsDesignFee==undefined?that.offer.receiptsDesignFee=0:that.offer.receiptsDesignFee=orderOffer.receiptsDesignFee
					
					orderOffer.receiptsPrice==undefined?that.offer.receiptsPrice=0:that.offer.receiptsPrice=orderOffer.receiptsPrice
					
					orderOffer.price==undefined?that.offer.price=0:that.offer.price=orderOffer.price
					
					

					if(offerItems.length > 0) {

						for(var i = 0; i < offerItems.length; i++) {

							that.offer.offerItems[i].type = offerItems[i].name
							that.offer.offerItems[i].quantity = offerItems[i].num
							that.offer.offerItems[i].notes = offerItems[i].remarks
							that.offer.offerItems[i].standard = offerItems[i].spec
							that.offer.offerItems[i].subtotal = offerItems[i].subtotal
							that.offer.offerItems[i].unit = offerItems[i].unit
							that.offer.offerItems[i].price = offerItems[i].unitPrice

						}

					}


				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			getOrderType: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/basecodes?type=orderProductType',

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.orderType = data
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//报价模块

			pushoffer: function(index) {

				var obj = {
					"type": '',
					"standard": "",
					"price": '',
					"unit": "",
					"quantity": "",
					"subtotal": "",
					"notes": "",
				}

				obj.type = this.offer[index].type

				this.offer.splice(index, -1, obj)

			},

			deloffer: function(index) {

				var offerArry = this.offer

				var type = offerArry[index].type;
				let len = 0;

				for(var i = 0; i < offerArry.length; i++) {

					if(type === offerArry[i].type) {
						len++
					}

				}

				if(len > 1) {
					this.offer.splice(index, 1)
				} else {
					this.$Message.info('该产品部件已是最后一件，不可删除');
				}

			},

			//确认提交报价
			sureOffer: function() {

				var id = this.orid

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'put',
					url: 'api/f/customorders/' + id + '/orderevaluation',

					data: {
						"status": '1'
					}

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data

					that.$Message.success("订单报价货款提交成功")
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//

			getOrderSeries: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/basecodes?type=orderProductSeries',

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.orderSeries = data

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			}

		},

		mounted: function() {

			if(this.$route.query.pathUrl) {
				this.orid = this.$route.query.pathUrl
				this.getdate()
			}

			this.getOrderType()
			this.getOrderSeries()

			var that = this

			that.axios({
				method: 'get',

				url: '/api/f/cities?levelType=1'

			}).then(function(res) {

				that.provinceData = res.data.data

			}).catch(function(err) {
				console.log(err)

			})

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