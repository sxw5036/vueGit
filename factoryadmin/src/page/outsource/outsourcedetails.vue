<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a @click="goback">外协管理</a></BreadcrumbItem>
				<BreadcrumbItem>外协订单</BreadcrumbItem>
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
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>拆单编号</h3>
									<p>{{outsource.no}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>订单编号</h3>
									<p>{{outsource.customOrderNo}}</p>
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
											
											<div class="Tab_head">
												<div class="item right">
													<Button size="small" class="Tab_redact" v-show="redactVisible.tab1" @click="activateRedact(1)"  type="primary" icon="md-create">编辑</Button>
													<Button size="small" class="Tab_success" v-show="!redactVisible.tab1" @click="sureRedact" type="success" icon="md-checkmark">完成</Button>
													<!--<Button size="small" class="Tab_close" v-show="!redactVisible.tab1" @click="" type="warning" icon="md-close">取消</Button>-->
													<Button size="small" class="Tab_print" type="info" icon="ios-albums-outline">打印</Button>

												</div>
											</div>


											<div class="dealer_tab_nav">
												<div class="tab_center ">
													<div class=" tab_item">
														<div class="supplier_msg">
															<ul>
																<li>
																	<span class="lable">拆单编号：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="outsource.no"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">订单编号：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="outsource.customOrderNo"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">状态：</span>
																	<div class="value">
																		<p>{{outsource.stateName}}</p>
																	</div>
																</li>

																<li>
																	<span class="lable">拆单类型：</span>
																	<div class="value">
																		<p>{{outsource.typeName}}</p>
																	</div>
																</li>

																<li>
																	<span class="lable">生产方式：</span>
																	<div class="value">
																		<p>{{outsource.wayName}}</p>
																	</div>
																</li>

																<li>
																	<span class="lable">是否付款：</span>
																	<div class="value">
																		<p>{{outsource.payName}}</p>
																	</div>
																</li>

																<li>
																	<span class="lable">外协金额：</span>
																	<div class="value">
																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="outsource.amount"></Input>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div class=" tab_item">
														<div class="supplier_msg">
															<ul>
																
																<li>
																	<span class="lable">外协数量：</span>
																	<div class="value">
																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="outsource.count"></Input>
																	</div>
																</li>
																<li>
																	<span class="lable">外协厂家名称：</span>
																	<div class="value">
																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="outsource.coordinationName"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">外协厂家开户行：</span>
																	<div class="value">
																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="outsource.coordinationBank"></Input>
																	</div>
																</li>

																<li>
																	<span class="lable">外协厂家账户：</span>
																	<div class="value">
																		<Input :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="outsource.coordinationAccount"></Input>
																	</div>
																</li>
																
																
																<li>
																	<span class="lable">创建人：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="outsource.creatorName"></Input>
																	</div>
																</li>
																
																<li>
																	<span class="lable">创建时间：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="outsource.created"></Input>
																	</div>
																</li>

																<!--<li>
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
																</li>-->

																

															</ul>
														</div>
													</div>
													
													
														<div class=" tab_item">
														<div class="supplier_msg">
															<ul>
																
																<li>
																	<span class="lable">外协备注：</span>
																	<div class="value">
																		<Input type="textarea"  :readonly="redactVisible.tab1" :class="{borderNone:redactVisible.tab1==true}" v-model="outsource.notes"></Input>
																	</div>
																</li>
																
																
																<li>
																	<span class="lable">附件：</span>
																	<div class="value">
																		<div class="pl">
																			<div class="demo-upload-list" v-for="(item,index) in outsource.uploadFiles">
																				<template >
																					<img :src="item.path">
																					<div class="demo-upload-list-cover">
																						<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
																						<Icon  v-show="!redactVisible.tab1" type="ios-trash-outline" @click.native="handleRemove(item.id,index)"></Icon>
																					</div>
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
																
																<li  v-show="orderProductDto.type==0||orderProductDto.type==1">
																	<span class="lable">产品系列：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderProductDto.seriesName"></Input>
																	</div>
																</li>
																
																
																
																<li  v-show="orderProductDto.type==0||orderProductDto.type==1">
																	<span class="lable">产品颜色：</span>
																	<div class="value">
																		<Input readonly="readonly" class="borderNone" v-model="orderProductDto.color"></Input>
																	</div>
																</li>
																
																<li  v-show="orderProductDto.type==0||orderProductDto.type==1">
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
                 
                customOrderId:'',
				outsourceId: "",
				outsource:{
					
					uploadFiles:[]
				},
				orderProductDto:{},
				
				redactVisible: {
					tab1: true,
					tab2: true,
					tab3: true,
					tab4: true
				},
				
				
				uploadpathdata: '',
				defaultList: [],
				imgName: '',
				visible: false,
				uploadList: [],
				uparry: {
					multipartFileList: []
				},

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
				tabIndexs: 0

			}
		},

		methods: {
			
			goback: function() {
				this.$emit('openWindow', ('outsource'), ('外协管理'), ('4'), ('outsource'), ('outsource'))
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
			
			
			
			//up

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(fileId, index) {
				
				
				
				var id = this.customOrderId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this							

				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + id + '/files/' + fileId,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.outsource.uploadFiles.splice(index, 1)
					
					that.$Message.success("删除图片成功")

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},
			handleSuccess(res, file) {

				var data = res.data

				for(var i = 0; i < data.length; i++) {
					this.outsource.uploadFiles.push(data[i])
				

				}
				
				this.$Message.success("上传图片成功")

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
					
				}

			},
			
			
			sureRedact:function  () {
				
				var outsource=this.outsource
				

			
				var amount = outsource.amount+'';
				var coordinationName = outsource.coordinationName;
				var coordinationAccount = outsource.coordinationAccount;
				var coordinationBank = outsource.coordinationBank;				
				var count = outsource.count+'';
				var notes = outsource.notes;

				amount = amount.trim();
				coordinationName = coordinationName.trim();
				coordinationAccount = coordinationAccount.trim();
				coordinationBank = coordinationBank.trim();
				count = count.trim()
				notes = notes.trim()
				
			    var fileIds=[]			   
			    var files=outsource.uploadFiles
			    
			    for(var i=0; i<files.length ;i++){
			    	fileIds.push(files[i].id)
			    }
			   
			 
				
				
				var amountVerify = /^([0-9])+(.[0-9]{2})?$/
				
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'put',
					url: '/api/f/customorders/'+this.customOrderId+'/produces/'+this.outsourceId,

					data: {
							
						amount: (amount == "") ? undefined : amount,
						coordinationName: (coordinationName == "") ? undefined : coordinationName,
						coordinationBank: (coordinationBank == "") ? undefined : coordinationBank,
						coordinationAccount: (coordinationAccount == "") ? undefined : coordinationAccount,
						count: (count == "") ? undefined : count,
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

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}
					var data = res.data.data

					that.$Message.success("修改成功")
					that.redactVisible.tab1=!that.redactVisible.tab1

					

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					
				})
				
				
			},
			
			//查询外协详情
			getOutsource:function  () {
				let that = this


				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios({
					method: 'get',
					url: '/api/f/customorders/'+this.customOrderId+'/produces/'+this.outsourceId,
					

				}).then(function(res) {
					setTimeout(msg, 100);					

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					
					that.outsource=data
					that.orderProductDto=data.orderProductDto
					

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})
			},
			
			
			//删除外协数据
			deleteData:function  () {
				
				
				let that = this


				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios({
					method: 'delete',
					url: '/api/f/customorders/'+this.customOrderId+'/produces/'+this.outsourceId,
					

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

		},

		mounted: function() {

			if(this.$route.query.pathUrl) {
				
				let pathArry = this.$route.query.pathUrl.split(',')
				this.customOrderId = pathArry[0]
				this.outsourceId = pathArry[1]
				this.uploadpathdata = '/api/f/customorders/'+this.customOrderId+'/4/'+this.outsourceId+'/files' //附件上传路径
				this.getOutsource()

			}

		}

	}
</script>

<style>

</style>