<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">财务记账</a>
				</BreadcrumbItem>
				<BreadcrumbItem>财务记账详情</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="panel">
			<div class="panel_nav">
				<div class="panel_center">
					<h3 class="head">基本信息<span class="right_icon">
						<Poptip
					        confirm
					        title="外协删除后所有数据不可恢复，您确认要删除吗？"
					        @on-ok="deleteData"
					        >
					      <Button size="small" type="error" icon="ios-trash-outline">删除</Button>
					    </Poptip>
						</span></h3>
					<div class="panel_con" style="padding: 0px;">
						<div class="summarize">
							<ul>
								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>经销商</h3>
									<p>{{payment.companyName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>支付类型</h3>
									<p>{{payment.typeName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>支付方式</h3>
									<p>{{payment.wayName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>支付款项</h3>
									<p>{{payment.fundsName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>收款人</h3>
									<p>{{payment.holder}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>创建时间</h3>
									<p>{{payment.created}}</p>
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
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">记账详情</div>

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
																	<span class="lable">经销商：</span>
																	<div class="value">
																		<p>{{payment.companyName}}</p>
																	</div>
																</li>

																<li>
																	<span class="lable">支付类型：</span>
																	<div class="value">

																		<Input  readonly="readonly" class="borderNone" v-model="payment.typeName"></Input>

																		
																	</div>
																</li>

																<li>
																	<span class="lable">支付方式：</span>
																	<div class="value">
																		
																		<Input v-show="!!redactVisible.tab1" readonly="readonly" class="borderNone" v-model="payment.wayName"></Input>
																		<RadioGroup v-model="payment.way">
																			<Radio v-show="!redactVisible.tab1" v-for="(item,index) in ways" :label="item.id" :key="item.id">{{item.name}}</Radio>
																		</RadioGroup>
																	</div>
																</li>

																<li>
																	<span class="lable">支付款项:</span>
																	<div class="value">
																		<p v-show="!!redactVisible.tab1">{{payment.fundsName}}</p>
																		<Select v-show="!redactVisible.tab1" class="p_lea" v-model="payment.funds">
																			<Option v-for="(item,index) in financeFunds" :value="item.id" :key="item.id">{{item.name}}</Option>
																		</Select>
																	</div>
																</li>

																<li>
																	<span class="lable">支付金额：</span>
																	<div class="value">
																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="payment.amount"></Input>
																	</div>
																</li>

															</ul>
														</div>
													</div>
													<div class=" tab_item">
														<div class="supplier_msg">
															<ul>

																

																<li>
																	<span class="lable">支付备注：</span>
																	<div class="value">
																		
																		<Input type="textarea" v-model="payment.notes" :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" placeholder="请输入备注..."></Input>
																	
																	</div>
																</li>

																<li>
																	<span class="lable">收款人：</span>
																	<div class="value">
																		<p>{{payment.holder}}</p>
																	</div>
																</li>
																
																<li>
																	<span class="lable">创建时间：</span>
																	<div class="value">

																		<Input class="borderNone" v-model="payment.created" readonly="readonly"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">附件：</span>
																	<div class="value">
																		<div class="pl">

																			<div class="demo-upload-list" v-for="(item,index) in payment.fileList">

																				<template>
																					<img :src="item">
																					<div class="demo-upload-list-cover">
																						<Icon type="ios-eye-outline"></Icon>

																					</div>
																				</template>

																			</div>

																			<!--<Upload v-show="!redactVisible.tab1" multiple ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFileList" style="display: inline-block;width:58px;">
																				<div style="width: 58px;height:58px;line-height: 58px;">
																					<Icon type="ios-camera" size="20"></Icon>
																				</div>
																			</Upload>-->

																		</div>
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

								<!--<Tabs>
									<TabPane label="收支详情" name="name1">
										
									</TabPane>
								

								</Tabs>-->
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
												<router-link :to="{ name: 'dealercompanydetails', query: { id: '50zl1lxk6sxs'}}">查看经销商</router-link>

											</li>
											<li>
												<router-link :to="{ name: 'orderDetails', query: { id: '123456780'}}">查看订单</router-link>

											</li>

											<li>
												<router-link :to="{ name: 'outsource', query: { id: '123456780'}}">查看外协</router-link>

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
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				paymentId: "",
				payment: {
					fileList: []
				},

				fundsdata: [],
				secondfundsdata: [],
				thirdlyfundsdata: [],
				fundsdataAll: [],
				financeusers: [],
				bankAccount: [],
				payways: [],
				financeFunds:[],
				ways:[],
				
				uploadpathdata: '/api/f/companyFinances/uploadImages',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},

				redactVisible: {
					tab1: true,
					tab2: true,
					tab3: true,
					tab4: true
				},
				tabIndexs: 0

			};
		},

		methods: {

			goback: function() {
				this.$emit('openWindow', ('keepAccounts'), ('财务记账'), ('16'), ('keepAccounts'), ('keepAccounts'))
				//              this.$router.push({
				//					name: 'client',
				//
				//				})
			},
			
			
			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(index) {
				this.payment.fileList.splice(index, 1)

			},
			handleSuccess(res, file) {

				var Res = res.data

				for(var i = 0; i < Res.length; i++) {
					this.payment.fileList.push(Res[i].imgRelPath)
				}

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

			//获取支付科目

			getfunds: function() {

				var type = this.payment.type

				if(type == 1) {
					this.financeFunds = this.financeFundsAll.fundsIn
				} else if(type == 2) {
					this.financeFunds = this.financeFundsAll.fundsOut
				}

			},

			getpaytime: function(val) {
				this.payment.paytime = val
			},

			sureRedact: function() {
				
					var payment = this.payment
				var amount = payment.amount
				var way = payment.way+''
				var funds = payment.funds
				
				

				
				 if(way == "" || way == null) {
					this.$Message.error('请选择支付类型！');
					return false;
				} else if(funds == "" || funds == null) {
					this.$Message.error('请选择科目！');
					return false;
				}else if(amount == "" || amount == null || amount.trim().length == 0) {
					this.$Message.error('请输入金额信息！');
					return false;
				} 
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'post',
					url: '/api/f/companyFinances/edit',
					data: {
						paymentId:this.paymentId,
						amount: amount,						
						funds: funds,						
						notes: notes,						
						way: way
					}

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
						that.$Message.success("修改成功")
						that.activateRedact(1)
						that.getdata(that.paymentId)
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
				

			},
			
			deleteData:function  () {
				
			},

			//查询财务记账详情

			getdata: function(id) {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'get',

					url: '/api/f/companyFinances/' + this.paymentId,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.payment = data
					that.payment.type=that.payment.type+''
					that.getfunds(1)
					
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//查询检索时所用科目接口

			Getfunds: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/payment_simples/funds',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.fundsdata = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
			

				})

			},
			//查询财务人员信息
			Getfinusers: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/payment_simples/users',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.financeusers = data
				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//查询创建经销商财务所用科目

			GetcompanyFinances: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/companyFinances/funds',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.financeFundsAll = data

					//that.searchfundsdata = data["fundsIn"].concat(data["fundsOut"])

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//查询创建经销商财务所用支付方式

			Getways: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/companyFinances/ways',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.ways = data.ways

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试');
					

				})

			},

		},

		mounted: function() {

			if(this.$route.query.pathUrl) {
				this.paymentId = this.$route.query.pathUrl

				this.getdata(this.paymentId)
				this.Getfinusers()
				this.GetcompanyFinances()
				this.Getways()
			}

		}

	}
</script>