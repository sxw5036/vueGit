<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">客户管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>客户详情</BreadcrumbItem>
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
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户姓名</h3>
									<p>{{client.name}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户电话</h3>
									<p>{{client.phone}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户小区</h3>
									<p>{{client.community}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户地区</h3>
									<p>{{client.cityAreaName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户地址</h3>
									<p>{{client.address}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>所属经销商</h3>
									<p>{{client.companyName}}</p>
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
						<div class="panel_center ">

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
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">客户信息</div>

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
																	<span class="lable">客户姓名：</span>
																	<div class="value">

																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="client.name"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">客户电话：</span>
																	<div class="value">
																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="client.phone"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">客户性别：</span>
																	<div class="value">
																		<Input v-show="!!redactVisible.tab1" :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="client.sexName"></Input>
																		<RadioGroup  v-show="!redactVisible.tab1" v-model="client.sex">
																			<Radio label="0">男</Radio>
																			<Radio label="1">女</Radio>
																		</RadioGroup>
																	</div>
																</li>

																<li>
																	<span class="lable">客户小区：</span>
																	<div class="value">

																		<Input readonly="readonly" class="borderNone" v-model="client.community"></Input>

																	</div>
																</li>

																<li>
																	<span class="lable">客户地区：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="client.cityAreaName"></Input>

																	</div>
																</li>

																<li>
																	<span class="lable">客户地址：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="client.address"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">所属经销商：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="client.companyName"></Input>
																	</div>
																</li>

																<!--<li>
														<span class="lable">业务经理：</span>
														<div class="value">
															
															<p>{{client.customerManagerName}}</p>
														</div>
													</li>-->

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
									<button class="details_opBut" @click="newOrder">新建订单</button>
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
												<a>客户</a>
											</li>

											<li>
												<a>设计方案</a>
											</li>

											<li>
												<a>经销商</a>
											</li>

											<li>
												<a>生产</a>
											</li>

											<li>
												<a>包装</a>
											</li>

											<li>
												<a>入库</a>
											</li>

											<li>
												<a>发货</a>
											</li>

											<li>
												<a>外协</a>
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
	var echarts = require('echarts')

	import axios from 'axios'

	export default {
		data() {
			return {
				clientId: "",
				client: {},
				tabIndexs: 0,
				redactVisible: {
					tab1: true,
					tab2: true,
					tab3: true,
					tab4: true
				},

			};
		},

		methods: {

			goback: function() {
				this.$emit('openWindow', ('client'), ('客户管理'), ('3'), ('client'), ('client'))

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

			activateRedact: function(index) {

				if(index == 1) {
					this.redactVisible.tab1 = !this.redactVisible.tab1;

				}

			},

			sureRedact: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var client = this.client

				var name = client.name
				var mobile = client.phone
				var sex = client.sex

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('客户姓名不能为空！');
					return false;
				} else if(name.trim().length > 10) {

					this.$Message.error('客户姓名长度不能超过10个！');
					return false;
				} else if(mobile == "" || mobile == null || mobile.trim().length == 0) {

					this.$Message.error('客户电话不能为空！');
					return false;
				} else if(tel.test(mobile) == false || telephone.test(mobile) || phone.test(mobile)) {

					this.$Message.error('客户电话格式不正确！');
					return false;

				}

				var cid = this.clientId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'put',
					url: '/api/f/customers/' + cid,

					data: {
						"name": name,
						"phone": mobile,
						"sex":sex

					}

				}).then(function(res) {
					setTimeout(msg, 100);

					var verify = [{
							"name": "companyId",
							"note": "物流公司"
						},
						{
							"name": "mobile",
							"note": "客户手机号 "
						},
						{
							"name": "name",
							"note": "客户姓名 "
						},
						{
							"name": "address",
							"note": "客户详细地址"
						},
						{
							"name": "community",
							"note": "小区名称 "
						}, {
							"name": "cityAreaId",
							"note": "客户地址"
						}, {
							"name": "sex",
							"note": "性别"
						},
					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					var data = res.data.data

					that.$Message.success("修改成功")
					that.getClient(that.clientId)

					that.activateRedact(1)

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			deleteData: function() {

			},

			newOrder: function() {
				var client = this.client

				var dealerId = client.companyId
				var id = client.id

				this.$emit('openWindow', ('newlyOrder'), ('新建订单'), ('6-1'), ('newlyOrder'), ('newlyOrder'))
				this.$router.push({
					name: 'newlyOrder',
					query: {
						dealerId: dealerId,
						clientId: id

					}
				})
			},

			clientRedact: function() {
				this.$emit('openWindow', ('clientRedact'), ('编辑客户'), ('3-2'), ('clientRedact'), ('clientRedact'))
				this.$router.push({
					name: 'clientRedact',
					query: {
						item: this.client,
					}
				})
			},

			getClient: function() {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/customers/' + this.clientId,

				}).then(function(res) {

					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data

					that.client = data
					that.client.sex=data.sex+''
					
					if(data.sex==0){
						that.client.sexName="男"
					}else if(data.sex==1){
						that.client.sexName="女"
					}

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			}

		},

		mounted: function() {

			if(this.$route.query.pathUrl) {
				this.clientId = this.$route.query.pathUrl
				this.getClient(this.clientId)
			}

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