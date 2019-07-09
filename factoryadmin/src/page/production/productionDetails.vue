<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">生产管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>生产详情</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="panel">
			<div class="panel_nav">
				<div class="panel_center">
					<h3 class="head">基本信息<span class="right_icon">
						<Poptip
					        confirm
					        title="生产单删除后所有数据不可恢复，您确认要删除吗？"
					        @on-ok="deleteData"
					        >
					      <Button size="small" type="error" icon="ios-trash-outline">删除</Button>
					    </Poptip>
						</span></h3>
					<div class="panel_con" style="padding: 0px;">
						<div class="summarize">
							<ul>
								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>生产单编号</h3>
									<p>{{produces.no}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>订单编号</h3>
									<p>{{produces.customOrderNo}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>类型</h3>
									<p>{{produces.typeName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>经销商</h3>
									<p>{{produces.typeName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户</h3>
									<p>{{produces.typeName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>状态</h3>
									<p>{{produces.typeName}}</p>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</div>
		</div>

		<div style="margin: 20px 0px;">
			<div>
				<Row>
					<Col span="20">

					<div class="panel">
						<div class="panel_nav">
							<div class="panel_center">
								<h3 class="head">生产单流程</h3>
								<div class="panel_con" style="padding: 10px 28px;">
									<div class="produce_flowPath">
										<div class="produce_flowPathNav">

											<div class="schedule_sign">
												<img src="../../assets/img/order/orderSchedule.png" />
											</div>
											<div v-for="(item,index ) in produceFlowDtos" :style="{'left':item.y+'%'}" class="schedule_sign" v-show="item.created!=''">
												<img src="../../assets/img/order/orderSchedule.png" />
											</div>

											<!--:style="[orderStatuswidth()]"-->
											<div class="order_schedule"></div>

											<ul>

												<li>下单
													<p>{{produces.creatorName}}</p>
													<span class="created">{{produces.created}}</span>
												</li>

												<li v-for="(item,index ) in produceFlowDtos" :style="{'left':item.y+'%'}">

													<div class="ivu-poptip ivu-poptip-confirm" style="position: relative; ">
														<div class="ivu-poptip-rel">

															<span @click="producesVerify(item,index)">{{item.type}}</span>
															<p>{{item.name}}</p>
															<span class="created">{{item.created}}</span>
															<span class="created">{{item.notes}}</span>
															

														</div>
														<div class="ivu-poptip-popper" v-show="item.visible" style="display: block; position: absolute; will-change: top, left; top: -210px; left: -120px;" x-placement="top">
															<div class="ivu-poptip-content">
																<div class="ivu-poptip-arrow"></div>
																<div class="ivu-poptip-inner">
																	<div class="ivu-poptip-body" style="width: 260px">
																		
																		<div class="ivu-poptip-body-message processesNotes" style="padding-left: 0px;">
																			<p class="title">您确认该流程已完成？</p>
																		<Input   type="textarea"  v-model="processesNotes" placeholder="请输入备注..."></Input>
																		
																		</div>
																		
																		

																	</div>
																	<div class="ivu-poptip-footer"><button type="button" class="ivu-btn ivu-btn-text ivu-btn-small"><span  @click="item.visible=!item.visible">取消</span></button> <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-small" @click="producesState(item,index)"> <span>确定</span></button></div>
																</div>

															</div>
														</div>
													</div>

													<!--<Poptip confirm title="您确认该流程已完成？" @on-ok="producesState(item,index)">
														
													</Poptip>-->

												</li>

											</ul>
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
									<div>

										<Poptip confirm title="您确认批准该生产单进入到生产环节吗？" @on-ok="surepermit">
											<button class="details_opBut">生产审核</button>
										</Poptip>

										<div class="ivu-poptip ivu-poptip-confirm" style="position: relative; " v-show="produces.state==0">
											<div class="ivu-poptip-rel"><button class="details_opBut" @click="produceTimeShow=!produceTimeShow">生产计划</button></div>
											<div class="ivu-poptip-popper" v-show="produceTimeShow" style="display: block; position: absolute; will-change: top, left; bottom: -350px; left: -80px;" x-placement="bottom">
												<div class="ivu-poptip-content">
													<div class="ivu-poptip-arrow"></div>
													<div class="ivu-poptip-inner">
														<div class="ivu-poptip-body" style="width: 260px">

															<Calendar type="date" @on-change="calendarChange" style="width: 200px"></Calendar>

														</div>
														<div class="ivu-poptip-footer"><button type="button" class="ivu-btn ivu-btn-text ivu-btn-small"> <span  @click="produceTimeShow=!produceTimeShow">取消</span></button> <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-small" @click="surePlans"> <span>确定</span></button></div>
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
				</Row>
			</div>
		</div>

		<!---->

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
											<div class="ivu-tabs-nav-wrap" style="position: relative;"><span class="ivu-tabsnav-prev ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span> <span class="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
												<div class="ivu-tabs-nav-scroll border">
													<div class="ivu-tabs-nav">
														<!--<div class="ivu-tabs-ink-bar ivu-tabs-

ink-bar-animated" style="width: 88px;"  :style="[Tabstransform()]"></div>-->
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">生产信息</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}" @click="TabsChange(1)">生产产品信息</div>

													</div><object tabindex="-1" type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object></div>
											</div>
										</div>

									</div>

									<div class="ivu-tabs-content ivu-tabs-content-animated" :style="[minusTabstransform()]">
										<div class="ivu-tabs-tabpane padding">

											<div class="Tab_head">
												<div class="item right">
													<Button size="small" class="Tab_redact" v-show="redactVisible.tab1" @click="activateRedact(1)" type="primary" icon="md-create">编辑</Button>
													<Button size="small" class="Tab_success" v-show="!redactVisible.tab1" @click="sureRedact" type="success" icon="md-checkmark">完成</Button>
													<!--<Button size="small" class="Tab_close" v-show="!redactVisible.tab1" @click="" type="warning" icon="md-close">取消</Button>-->
													<Button size="small" class="Tab_print" type="info" icon="ios-albums-outline">打印</Button>

												</div>
											</div>

											<div class="dealer_tab_nav one">
												<div class="tab_center ">
													<div class=" tab_item">
														<div class="supplier_msg">
															<ul>
																<li>
																	<span class="lable">生产单编号：</span>
																	<div class="value">
																		<p>{{produces.no}}</p>
																	</div>
																</li>

																<li>
																	<span class="lable">订单编号：</span>
																	<div class="value">
																		<p>{{produces.customOrderNo}}</p>
																	</div>
																</li>

																<li>
																	<span class="lable">是否付款：</span>
																	<div class="value">
																		<p>{{produces.payName}}</p>
																	</div>
																</li>

																<li>
																	<span class="lable">状态：</span>
																	<div class="value">
																		<p>{{produces.stateName}}</p>
																	</div>
																</li>

																<li>
																	<span class="lable">类型：</span>
																	<div class="value">

																		<Input readonly="readonly" class="borderNone" v-model="produces.typeName"></Input>

																	</div>
																</li>

																<li>
																	<span class="lable">生产方式：</span>
																	<div class="value">

																		<Input readonly="readonly" class="borderNone" v-model="produces.wayName"></Input>

																	</div>
																</li>

																<li v-show="produces.way==1&&produces.type==1">
																	<span class="lable">外协金额：</span>
																	<div class="value">

																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="produces.amount" placeholder="请输入外协金额..."></Input>
																	</div>
																</li>

																<li v-show="produces.way==1&&produces.type==1">
																	<span class="lable">外协厂家：</span>
																	<div class="value">

																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="produces.coordinationName" placeholder="请输入外协厂家..."></Input>
																	</div>
																</li>

																<li v-show="produces.way==1&&produces.type==1">
																	<span class="lable">银行账户：</span>
																	<div class="value">

																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="produces.coordinationAccount" placeholder="请输入银行账户..."></Input>
																	</div>
																</li>

																<li v-show="produces.way==1&&produces.type==1">
																	<span class="lable">开户行：</span>
																	<div class="value">

																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="produces.coordinationBank" placeholder="请输入开户行..."></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">数量：</span>
																	<div class="value">

																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="produces.count" placeholder="请输入数量..."></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">备注：</span>
																	<div class="value">

																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" type="textarea" v-model="produces.notes" placeholder="请输入备注..."></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">附件：</span>
																	<div class="value">
																		<div class="pl">
																			<div class="demo-upload-list" v-for="(item,index) in produces.uploadFiles">

																				<template>
																					<img :src="item.path">
																					<div class="demo-upload-list-cover">
																						<Icon type="ios-eye-outline" @click.native="handleView(item.imgRelPath)"></Icon>

																					</div>
																				</template>

																			</div>

																		</div>
																	</div>
																</li>

															</ul>
														</div>
													</div>

													<div class=" tab_item">
														<div class="supplier_msg">
															<ul>

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
																	<span class="lable">跟单员：</span>
																	<div class="value">
																		<p>小红</p>
																	</div>
																</li>

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

																<li>
																	<span class="lable">创建人：</span>
																	<div class="value">
																		<p>{{produces.creatorName}}</p>
																	</div>
																</li>

																<li>
																	<span class="lable">创建人时间：</span>
																	<div class="value">
																		<p>{{produces.created}}</p>
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
												<div class="tab_center ">
													<div class=" tab_item">
														<div class="supplier_msg">
															<ul>
																<li>
																	<span class="lable">产品类型：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderProductDto.typeName"></Input>
																	</div>
																</li>

																<li v-show="orderProductDto.type==0||orderProductDto.type==1">
																	<span class="lable">产品系列：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderProductDto.seriesName"></Input>
																	</div>
																</li>

																<li v-show="orderProductDto.type==0||orderProductDto.type==1">
																	<span class="lable">产品颜色：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderProductDto.color"></Input>
																	</div>
																</li>

																<li v-show="orderProductDto.type==0||orderProductDto.type==1">
																	<span class="lable">门型：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderProductDto.door"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">产品价格：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderProductDto.price"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">备注</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderProductDto.notes"></Input>
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
												<router-link :to="{ name: 'dealercompanydetails', query: { id: '50zl1lxk6sxs'}}">查看经销商</router-link>
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
	import Calendar from 'iview/src/components/calendar'

	export default {
		data() {
			return {
				customOrderId: '',
				produceId: '',
				produces: {},
				orderProductDto: {},
				bomHead: [],
				bomHeadData: [],
				produceFlowDtos: [ //生产单流程

					{
						type: "备料",
						name: "",
						y: '14.3',
						created: '',
						visible:false
					},

					{
						type: "下料",
						y: '28.6',
						name: "",
						created: '',
						visible:false
					},

					{
						type: "封边",
						y: '42.9',
						name: "",
						created: '',
						visible:false

					},

					{
						type: "打孔",
						y: '57.2',
						name: "",
						created: '',
						visible:false
					},

					{
						type: "清洗",
						y: '71.5',
						name: "",
						created: '',
						visible:false
					},

					{
						type: "试组",
						y: '85.8',
						name: "",
						created: '',
						visible:false
					},

					{
						type: "包装",
						y: '99',
						name: "",
						created: '',
						visible:false
					}

				],

				processesNotes: '', //流程备注
		

				produceTime: '',
				produceTimeShow: false,

				tabIndexs: 0,

				redactVisible: {
					tab1: true,
					tab2: true,
					tab3: true,
					tab4: true
				}

			};
		},

		components: {
			Calendar: Calendar
		},

		methods: {

			goback: function() {
				this.$emit('openWindow', ('productionplan'), ('生产管理'), ('9'), ('productionplan'), ('productionplan'))
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

			orderStatus: function() {

				let style = {}
				style['left'] = this.produces.status * 14.3 + '%'

				return style

			},

			orderStatuswidth: function() {

				let style = {}
				style['width'] = this.produces.status * 14.3 + '%'

				return style

			},

			//触发编辑

			activateRedact: function(index) {

				if(index == 1) {
					this.redactVisible.tab1 = !this.redactVisible.tab1;

				}

			},

			sureRedact: function() {

				var that = this

				var produce = this.produces;

				var way = produce.way + '';
				var no = produce.no;
				var coordinationName = produce.coordinationName;
				var coordinationBank = produce.coordinationBank;
				var coordinationAccount = produce.coordinationAccount
				var amount = produce.amount;
				var count = produce.count + '';
				var completionTime = produce.completionTime;
				var notes = produce.notes;
				var type = produce.type + '';

				if(type == "" || type == null) {
					this.$Message.error('拆单类型不能为空');
					return false;
				} else if(way == "0") {

					if(type == "" || type == null) {
						this.$Message.error('拆单类型不能为空');
						return false;
					} else if(count.length < 1 && type != 2) {
						this.$Message.error('数量不能为空');
						return false;
					} else if(parseInt(count) > 2147483647) {
						this.$Message.error('数量过大');
						return false;
					}

				} else if(way == "1") {

					if(type == "" || type == null) {
						this.$Message.error('拆单类型不能为空');
						return false;
					} else if(amount == "" || amount == null) {
						this.$Message.error('外协金额不能为空');
						return false;
					} else if(parseInt(amount) >= 100000000) {
						this.$Message.error('外协金额长度过长');
						return false;
					} else if(coordinationName == "" || coordinationName == null) {
						this.$Message.error('外协厂家名称不能为空');
						return false;
					} else if(coordinationAccount == "" || coordinationAccount == null) {
						this.$Message.error('外协厂家开账户不能为空');
						return false;
					} else if(coordinationBank == "" || coordinationBank == null) {
						this.$Message.error('外协厂家开户行不能为空');
						return false;
					} else if(count.length < 1 && type != 2) {
						this.$Message.error('数量不能为空');
						return false;
					} else if(parseInt(count) > 21474836471 && type != 2) {
						this.$Message.error('数量过大');
						return false;
					}

				} else if(way == "2") {
					if(count.length < 1 && type != 2) {
						this.$Message.error('个数量不能为空');
						return false;
					} else if(parseInt(count) > 21474836471 && type != 2) {
						this.$Message.error('数量过大');
						return false;
					}

				} else {
					if(count.length < 1 && type != 2) {
						this.$Message.error('个数量不能为空');
						return false;
					} else if(parseInt(count) > 21474836471 && type != 2) {
						this.$Message.error('数量过大');
						return false;
					}
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'put',
					url: '/api/f/customorders/' + this.customOrderId + '/produces/' + this.produceId,

					data: {
						type: (type == "") ? undefined : type,
						way: (way == "") ? undefined : way,

						amount: (amount == "") ? undefined : amount,
						coordinationName: (coordinationName == "") ? undefined : coordinationName,
						coordinationBank: (coordinationBank == "") ? undefined : coordinationBank,
						coordinationAccount: (coordinationAccount == "") ? undefined : coordinationAccount,
						count: (count == "" && type != 2) ? undefined : count,
						count: (count == "" && type == 2) ? "1" : count,
						notes: (notes == "") ? undefined : notes,

					}

				}).then(function(res) {

					var verify = [

						{
							"name": "way",
							"note": "拆单类型"
						}, {
							"name": "type",
							"note": "生产方式"
						},
						{
							"name": "no",
							"note": "拆单编号 "
						},
						{
							"name": "coordinationName",
							"note": "外协厂家"
						},
						{
							"name": "coordinationBank",
							"note": "银行账户"
						},

						{
							"name": "coordinationAccount",
							"note": "开户行"
						},
						{
							"name": "count",
							"note": "数量"
						},
						{
							"name": "notes",
							"note": "描述"
						},

						{
							"name": "pay",
							"note": "付款状态"
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}
					var data = res.data.data

					that.$Message.success("生产单修改成功")
					that.activateRedact(1)

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},

			//删除生产单

			deleteData: function() {

				let that = this

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + this.customOrderId + '/produces/' + this.produceId,

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

			//生产流程
			
			producesVerify:function  (item, index) {
				
				
				
				
				if(this.produces.state == 0) {
					this.$Message.error('生产单未通过审核或者未开始排产');
					return false;
				}
				if(item.created != '' && item.name != '') {
					this.$Message.error('生产状态已完成,不能重复修改');
					return false; 
				}else{
					
					for(var i=0;i<this.produceFlowDtos.length;i++){
						this.produceFlowDtos[i].visible=false
					}
					
					this.produceFlowDtos[index].visible=!this.produceFlowDtos[index].visible
				}
				
			},

			producesState: function(item, index) {

				if(this.produces.state == 0) {
					this.$Message.error('生产单未通过审核或者未开始排产');
					return false;
				}
				if(item.created != '' && item.name != '') {

					return false;
				} else {
					let that = this

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});
					this.axios({
						method: 'post',
						url: '/api/f/customorders/produces/processes/' + this.produceId,

						data: {
							node: index,
							notes: this.processesNotes

						}

					}).then(function(res) {
						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						that.$Message.success("状态变更成功")
						that.processesNotes=""
						that.produceFlowDtos[index].visible=!that.produceFlowDtos[index].visible
						that.getproduce()

					}).catch(function(err) {
						setTimeout(msg, 100);

						that.$Message.error('出错了，请稍后重试！');

					})
				}

			},

			//=批准生产单开始生产

			surepermit: function() {
				let that = this

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios({
					method: 'put',
					url: '/api/f/customorders/' + this.customOrderId + '/produce/' + this.produceId + '/permit',

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.$Message.success("生产单批准成功")
					that.getproduce()

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})
			},

			surePlans: function() {

				var produceTime = this.produceTime

				if(produceTime == "" || produceTime == null) {
					this.$Message.error('安排生产时间不能为空');
					return false;
				}

				var idArry = []
				idArry.push(this.produceId)

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'put',
					url: '/api/f/customorders/produces/plans',

					data: {
						ids: idArry,
						planTime: produceTime
					}

				}).then(function(res) {

					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data

					that.$Message.success("生产单生产计划安排成功")
					that.produceTimeShow = !that.produceTimeShow
					that.getproduce()

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			calendarChange: function(date) {
				this.produceTime = date
			},

			getproduce: function() {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/customorders/' + this.customOrderId + '/produces/' + this.produceId,

				}).then(function(res) {

					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data

					that.produces = data
					that.orderProductDto = data.orderProductDto
					var produceFlowDtos = data.produceFlowDtos

					for(var i = 0; i < produceFlowDtos.length; i++) {

						var node = produceFlowDtos[i].node

						that.produceFlowDtos[node].name = produceFlowDtos[i].operatorName
						that.produceFlowDtos[node].created = produceFlowDtos[i].operationTime
						that.produceFlowDtos[node].notes = produceFlowDtos[i].notes
						
					}

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			}

		},

		mounted: function() {

			if(this.$route.query.pathUrl) {
				var pathUrlArry = this.$route.query.pathUrl.split(',')
				this.customOrderId = pathUrlArry[0]
				this.produceId = pathUrlArry[1]
				this.getproduce()

			}

		}

	}
</script>

<style scoped="scoped" type="text/css">
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
	
	.produce_flowPath {
		padding-bottom: 90px;
	}
	
	.produce_flowPath .produce_flowPathNav {
		position: relative;
		display: block;
		width: 100%;
		background: #EDEFF4;
		height: 10px;
		border-radius: 10px;
		margin-top: 40px;
	}
	
	.produce_flowPath .produce_flowPathNav .order_schedule {
		position: absolute;
		top: 0px;
		left: 0px;
		height: 10px;
		background: #1890FF;
		border-radius: 10px;
	}
	
	.produce_flowPath .produce_flowPathNav .schedule_sign {
		position: absolute;
		left: 0px;
		top: -30px;
		width: 20px;
	}
	
	.produce_flowPath .produce_flowPathNav .schedule_sign img {
		display: block;
		width: 100%;
	}
	
	.produce_flowPath ul {
		display: inline-block;
		width: 100%;
	}
	
	.produce_flowPath ul li {
		position: absolute;
		margin-left: -15px;
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
	}
	
	.produce_flowPath ul li p {
		height: 20px;
		font-size: 10px;
		font-weight: 100;
		color: #636363;
		margin-top: 10px;
	}
	
	.produce_flowPath ul li span.created {
		display: block;
		height: 20px;
		font-size: 10px;
		color: #636363;
		font-weight: 100;
	}
	
	.produce_flowPath ul li:first-child {
		margin-left: 0px;
	}
	
	.processesNotes p.title{
		margin-bottom: 16px;
	}
</style>