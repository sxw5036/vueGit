<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a @click="goback">售后管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>售后单详情</BreadcrumbItem>
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
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>售后单编号</h3>
									<p>{{ aftersale.no }}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>售后状态</h3>
									<p>{{ aftersale.statusName }}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>售后类型</h3>
									<p>{{ aftersale.typeName }}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>经销商名称</h3>
									<p>{{ aftersale.companyName }}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>c端客户姓名</h3>
									<p>{{ aftersale.customerName }}</p>
								</li>

								<li>
									<h3><img src="../../assets/lwxflogo.png"/>创建时间</h3>
									<p>{{ aftersale.created }}</p>
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
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">售后信息</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}" @click="TabsChange(1)">售后处理信息</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==2}" @click="TabsChange(2)">售后财务信息</div>

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
																	<p>{{ aftersale.orderNo }}</p>
																</div>
															</li>

															<li>
																<span class="lable">售后状态：</span>
																<div class="value">
																	<p>{{ aftersale.statusName }}</p>
																</div>
															</li>

															<li>
																<span class="lable">售后类型：</span>
																<div class="value">
																	<p>{{ aftersale.typeName }}</p>
																</div>
															</li>

															<li>
																<span class="lable">公司名称：</span>
																<div class="value">
																	<p>{{ aftersale.companyName }}</p>
																</div>
															</li>
															<li>
																<span class="lable">c端客户姓名：</span>
																<div class="value">
																	<p>{{ aftersale.customerName }}</p>
																</div>
															</li>
															<li>
																<span class="lable">创建时间：</span>
																<div class="value">
																	<p>{{ aftersale.created }}</p>
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
											  		<Panel v-for = "product in aftersaleProducts" name="1">
														<span v-if="product.type==0">
											  			产品名称:橱柜
														</span>
														<span v-if="product.type==1">
														产品名称:衣柜
														</span>
														<span v-if="product.type==2">
														产品名称:成品家具
														</span>
														<span v-if="product.type==3">
														产品名称:电器
														</span>
														<span v-if="product.type==4">
														产品名称:五金
														</span>
														<span v-if="product.type==5">
														产品名称:样块
														</span>
											  			<div slot="content">
											  				<div class="tab_center ">
											  					<div class=" tab_item">
											  						<div class="supplier_msg">
											  							<ul>
											  								<li>
											  									<span class="lable">系列：</span>
											  									<div class="value">
											  										<p>{{product.type}}</p>
											  									</div>
											  								</li>
											  
											  								<li>
											  									<span class="lable">颜色：</span>
											  									<div class="value">
											  										<p>{{product.color}}</p>
											  									</div>
											  								</li>
											  
											  								<li>
											  									<span class="lable">门型:</span>
											  									<div class="value">
											  										<p>{{product.door}}</p>
											  									</div>
											  								</li>
											  							</ul>
											  						</div>
											  					</div>
											  					<div class=" tab_item">
											  						<div class="supplier_msg">
											  							<ul>
											  
											  									<li>
											  									<span class="lable">备注：</span>
											  									<div class="value">
											  										<p>{{product.notes}}</p>
											  									</div>
											  								</li>
											  																			  
											  								<li>
											  									<span class="lable">价格：</span>
											  									<div class="value">
											  										<p>{{product.price}}</p>
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
												<router-link  :to="{ name: 'dealercompanydetails', query: { id: '50zl1lxk6sxs'}}" >查看经销商</router-link>
											</li>
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
				aftersale: [],
				aftersaleId:"",
				aftersaleProducts:[],
				aftersalePayment:[],
				tabIndexs: 0,
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
			
			goback:function  () {
				this.$emit('openWindow', ('client'), ('售后管理'), ('11'), ('client'), ('client'))
			},
			getdata: function() {
				var that = this
				this.aftersaleId = this.$route.query.pathUrl
				var id = this.aftersaleId
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios({
					method: 'get',
					url: '/api/f/aftersales/v2/aftersaleApplies/' + id + '',
				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.aftersale =res.data.data.aftersaleApply
					that.aftersaleProducts = res.data.data.aftersaleProduct
					that.aftersalePayment = res.data.data.payment
					console.log(that.aftersalePayment)
				}).catch(function(err) {
					setTimeout(msg, 100);
					console.log(err);
					that.$Message.error('出错了，请稍后重试！');
			
				})
			}
		},
	

		mounted: function() {
			this.getdata();
		}

	}
</script>