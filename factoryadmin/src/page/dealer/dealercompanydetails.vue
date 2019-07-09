<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem to="/dealercompany">经销商管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>经销商详情</BreadcrumbItem>
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
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>名称</h3>
									<div class="value">
										<p>{{companyDetail.name}}</p>
									</div>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>创始人</h3>
									<div class="value">
										<p>{{companyDetail.founderName}}</p>
									</div>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>联系人电话</h3>
									<div class="value">
										<p>{{companyDetail.leaderTel}}</p>
									</div>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>状态</h3>
									<p v-show="companyDetail.status==0">意向</p>
									<p v-show="companyDetail.status==1">已签约（正常）</p>
									<p v-show="companyDetail.status==2">已退网</p>
									<p v-show="companyDetail.status==3">已倒闭</p>
									<p v-show="companyDetail.status==4">已禁用</p>
									<p v-show="companyDetail.status==5">无价值</p>
									<p v-show="companyDetail.status==6">待财务审核</p>
									<p v-show="companyDetail.status==7">待启用</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>类型</h3>
									<p v-show="companyDetail.type==0">生产商/制造商/总店</p>
									<p v-show="companyDetail.type==1">直营店</p>
									<p v-show="companyDetail.type==2">店中店</p>
									<p v-show="companyDetail.type==3">专卖店</p>
									<p v-show="companyDetail.type==4">加盟店</p>
									<p v-show="companyDetail.type==5">散单</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>地区</h3>
									<p>{{companyDetail.address}}</p>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</div>
		</div>

		<!---->

		<div style="margin-top: 20px;">
			<Row>
				<Col span="19">

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
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">经销商信息</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}" @click="TabsChange(1)">店铺信息</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==2}" @click="TabsChange(2)">账号信息</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==3}" @click="TabsChange(3)">财务信息</div>
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
																		<span class="lable">名称：</span>
																		<div class="value">
																			<p>{{companyDetail.name}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">类型：</span>
																		<div class="value">
																			<p v-show="companyDetail.type==0">生产商/制造商/总店</p>
																			<p v-show="companyDetail.type==1">直营店</p>
																			<p v-show="companyDetail.type==2">店中店</p>
																			<p v-show="companyDetail.type==3">专卖店</p>
																			<p v-show="companyDetail.type==4">加盟店</p>
																			<p v-show="companyDetail.type==5">散单</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">状态：</span>
																		<div class="value">
																			<p v-show="companyDetail.status==0">意向</p>
																			<p v-show="companyDetail.status==1">已签约（正常）</p>
																			<p v-show="companyDetail.status==2">已退网</p>
																			<p v-show="companyDetail.status==3">已倒闭</p>
																			<p v-show="companyDetail.status==4">已禁用</p>
																			<p v-show="companyDetail.status==5">无价值</p>
																			<p v-show="companyDetail.status==6">待财务审核</p>
																			<p v-show="companyDetail.status==7">待启用</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">创始人：</span>
																		<div class="value">
																			<p>{{companyDetail.founderName}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">联系人：</span>
																		<div class="value">
																			<p>{{companyDetail.leaderName}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">联系人电话：</span>
																		<div class="value">
																			<p>{{companyDetail.leaderTel}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">地址：</span>
																		<div class="value">
																			<p>{{companyDetail.address}}</p>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
														<div class=" tab_item">
															<div class="supplier_msg">
																<ul>
																	<li>
																		<span class="lable">名片：</span>
																		<div class="value">
																			<div class="demo-upload-list" v-for="(item , index) in companyDetailfileList" @click="handleView(item.path)">
																				<template>
																					<img :src="item.path">
																					<div class="demo-upload-list-cover">
																						<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>

																					</div>
																				</template>

																			</div>
																		</div>
																	</li>

																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="ivu-tabs-tabpane padding">
												<div class="dealer_tab_nav two">
													<div class="tab_center ">
														<div class=" tab_item">
															<div class="supplier_msg">
																<ul>
																	<li>
																		<span class="lable">公司名称：</span>
																		<div class="value">
																			<p>{{companyDetail.name}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">详细地址：</span>
																		<div class="value">
																			<p>{{companyDetail.address}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">创建时间：</span>
																		<div class="value">
																			<p>{{companyDetail.created}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">创建人：</span>
																		<div class="value">
																			<p>{{companyDetail.creatorName}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">状态：</span>
																		<div class="value">
																			<p v-show="companyDetail.status==0">意向</p>
																			<p v-show="companyDetail.status==1">已签约（正常）</p>
																			<p v-show="companyDetail.status==2">已退网</p>
																			<p v-show="companyDetail.status==3">已倒闭</p>
																			<p v-show="companyDetail.status==4">已禁用</p>
																			<p v-show="companyDetail.status==5">无价值</p>
																			<p v-show="companyDetail.status==6">待财务审核</p>
																			<p v-show="companyDetail.status==7">待启用</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">粉丝数量：：</span>
																		<div class="value">
																			<p>{{companyDetail.followers}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">负责人：</span>
																		<div class="value">
																			<p>{{companyDetail.leaderName}}</p>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
														<div class=" tab_item">
															<div class="supplier_msg">
																<ul>
																	<li>
																		<span class="lable">负责人电话：</span>
																		<div class="value">
																			<p>{{companyDetail.leaderTel}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">业务经理：</span>
																		<div class="value">
																			<p>{{companyDetail.businessManagerName}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">开户行：</span>
																		<div class="value">
																			<p>{{companyDetail.depositBank}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">银行账号：</span>
																		<div class="value">
																			<p>{{companyDetail.bankAccount}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">开户人：</span>
																		<div class="value">
																			<p>{{companyDetail.bankAccountHolder}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">店铺面积：</span>
																		<div class="value">
																			<p>{{companyDetail.shopArea}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">签约时间：</span>
																		<div class="value">
																			<p>{{companyDetail.contractTime}}</p>
																		</div>
																	</li>
																</ul>
															</div>
														</div>

														<div class=" tab_item">
															<div class="supplier_msg">
																<ul>
																	<li>
																		<span class="lable">合同有效日期：</span>
																		<div class="value">
																			<p>{{companyDetail.contractExpiredDate}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">店铺封面：</span>
																		<div class="value">
																			<div class="demo-upload-list" v-for="(item , index) in companyDetailfileList" @click="handleView(item.path)">
																				<template>
																					<img :src="item.path">
																					<div class="demo-upload-list-cover">
																						<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>

																					</div>
																				</template>

																			</div>
																		</div>
																	</li>

																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="ivu-tabs-tabpane padding">
												<div class="dealer_tab_nav three">
													<div class="tab_center ">
														<div class=" tab_item">
															<div class="supplier_msg">
																<ul>
																	<li>
																		<span class="lable">姓名：</span>
																		<div class="value">
																			<p>{{dealer.userName}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">性别：</span>
																		<div class="value">
																			<p v-show="dealer.sex==0">男</p>
																			<p v-show="dealer.sex==1">女</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">生日：</span>
																		<div class="value">
																			<p>{{dealer.birthday}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">状态：</span>
																		<div class="value">
																			<p v-show="dealer.status==0">正常</p>
																			<p v-show="dealer.status==1">禁用(删除)</p>
																			<p v-show="dealer.status==2">离职</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">创建时间：</span>
																		<div class="value">
																			<p>{{dealer.created}}</p>
																		</div>
																	</li>

																</ul>
															</div>
														</div>
														<div class=" tab_item">
															<div class="supplier_msg">
																<ul>

																	<li>
																		<span class="lable">登录名：</span>
																		<div class="value">
																			<p>{{dealer.loginName}}</p>
																		</div>
																	</li>

																	<li>
																		<span class="lable">账号类型：</span>
																		<div class="value">
																			<p>经销商</p>
																		</div>
																	</li>

																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="ivu-tabs-tabpane padding">
												<div class="dealer_tab_nav four">
													<Collapse>
														<Panel>

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

				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head">特殊操作区</h3>
							<div class="panel_con">

								<div class="but_op">
									<!---->
									<button :disabled="!operation.edit" class="details_opBut" @click="newlyorder">新建订单</button>
								</div>

							</div>
						</div>
					</div>

					<div class="panel_nav" style="margin: 10px 0px;">
						<div class="panel_center">
							<h3 class="head">通用操作区</h3>
							<div class="panel_con">

								<div class="but_op">
									<button class="details_opBut" @click="redact" :disabled:="!operation.edit" v-show="companyDetail.status==0||companyDetail.status==1||companyDetail.status==7">编辑</button>

									<button class="details_opBut" type="primary" :disabled="!operation.edit" v-show="companyDetail.status==7">启用</button>
									<button class="details_opBut" type="primary">打印</button>

								</div>

							</div>
						</div>
					</div>
				</div>
				</Col>
			</Row>
		</div>

		<Modal title="图片详情" v-model="visible">
			<img :src="imgName" style="width: 100%">
			<div slot="footer"></div>
		</Modal>

	</div>

</template>

<script>
	var echarts = require('echarts')

	import axios from 'axios'

	export default {
		data() {
			return {

				tabIndexs: 0,

				companyDetail: {
					name: ""
				},
				companyDetailfileList: [],

				dealer: {
					userName: "",
					sex: "",
					birthday: "",
					status: "",
					created: "",
					loginName: ""
				},

				companyDetail: {

				},
				employeedata: [],

				imgName: "",
				visible: false,

				operation: {
					add: false,
					info: false,
					delete: false,
					update: false,
					view: false
				}

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

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			////请求经销商详情

			companyDeta: function(id) {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.companyDetail = data.company
					that.companyDetailfileList = data.fileList

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			dealers: function(id) {

				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/dealers/' + id,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					if(data.length != 0) {
						that.dealer = data[0]
					}

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})
			},

			companyFinances: function(id) {

				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/companyFinances/companies/payments?companyId=' + id,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					console.log(data)

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})
			},

			newlyorder: function() {
				this.$router.push({
					name: 'newlyOrder',
					query: {

						dealerId: this.$route.query.id,
					}
				})
			},

			redact: function() {
				this.$router.push({
					name: 'dealercompanyredact',
					query: {
						id: this.$route.query.id,
						key: this.$route.query.key
					}
				})
			},

		},

		mounted: function() {

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.companyDeta(this.$route.query.pathUrl)
			this.dealers(this.$route.query.pathUrl)
			this.companyFinances(this.$route.query.pathUrl)

		}

	}
</script>

<style>
	.demo-upload-list {
		display: inline-block;
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
		margin-right: 4px;
	}
	
	.demo-upload-list img {
		width: 100%;
		height: 100%;
	}
	
	.demo-upload-list-cover {
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);
	}
	
	.demo-upload-list:hover .demo-upload-list-cover {
		display: block;
	}
	
	.demo-upload-list-cover i {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}
</style>

<style src='./../../assets/css/department.css'></style>