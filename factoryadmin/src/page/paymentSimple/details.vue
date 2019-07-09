<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem to="/paymentSimple">日常账管理
				</BreadcrumbItem>
				<BreadcrumbItem>日常账详情</BreadcrumbItem>
			</Breadcrumb>
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
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">收支详情</div>
														
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
																			<span class="lable">支付类型：</span>
																			<div class="value">
																				<p>{{ paymentSimple.typeName }}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">支付方式：</span>
																			<div class="value">
																				<p>{{ paymentSimple.waysName }}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">支付款项:</span>
																			<div class="value">
																				<p>{{ paymentSimple.fundsName }}</p>
																			</div>
																		</li>

																	

																		<li>
																			<span class="lable">操作人：</span>
																			<div class="value">
																				<p>{{ paymentSimple.operatorName }}</p>
																			</div>
																		</li>

																		
																	</ul>
																</div>
															</div>
															<div class=" tab_item">
																<div class="supplier_msg">
																	<ul>


																		<li>
																			<span class="lable">金额：</span>
																			<div class="value">
																				<p>{{ paymentSimple.amount }}</p>
																			</div>
																		</li>

																		<li>
																			<span class="lable">银行：</span>
																			<div class="value">
																				<p>{{ paymentSimple.bankName }}</p>
																			</div>
																		</li>
																		<li>
																			<span class="lable">创建时间：</span>
																			<div class="value">
																				<p>{{ paymentSimple.created }}</p>
																			</div>
																		</li>

																	</ul>
																</div>
															</div>

															<div class=" tab_item">
																<div class="supplier_msg">
																	<ul>


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
																			<li>
																			<span class="lable">支付说明：</span>
																			<div class="value">
																				<p>{{ paymentSimple.note }}</p>
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

				<div class="panel marBtm">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head">通用操作区</h3>
							<div class="panel_con">
								<div class="but_op">
									<Poptip
									    confirm
									    title="日常账删除后所有数据不可恢复，您确认要删除吗？"
									    @on-ok="deleteData"
									    >
										<button  class="details_opBut" >删除</button>	
									</Poptip>
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
				paymentSimple: [],
				paymentSimpleId:"",
				tabIndexs: 0,
			};
		},

		methods: {
			
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
			getdata: function() {
				var that = this
				this.paymentSimpleId = this.$route.query.pathUrl
				var id = this.paymentSimpleId
			
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
			
				this.axios({
					method: 'get',
					url: '/api/f/payment_simples/' + id + '',
			
				}).then(function(res) {
					setTimeout(msg, 100);
			
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.paymentSimple =res.data.data
			
				}).catch(function(err) {
					setTimeout(msg, 100);
					console.log(err);
					that.$Message.error('出错了，请稍后重试！');
			
				})
			
			},
			deleteData: function() {
				
				var that = this
				
				this.paymentSimpleId = this.$route.query.pathUrl
				var id = this.paymentSimpleId
				
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios({
					method: 'DELETE',
					url: '/api/f/payment_simples/' + id + '',
			
				}).then(function(res) {
					that.$Message.success("删除成功")
					setTimeout(msg, 100);
					that.$emit('openWindow', ('paymentSimple'), ('日常账管理'), ('8'), ('paymentSimple'), ('paymentSimple'))
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
			
				})
			
			}

		},

		mounted: function() {
			this.getdata();
			
		
		}

	}
</script>
