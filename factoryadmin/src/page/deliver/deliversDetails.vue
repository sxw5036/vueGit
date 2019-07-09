<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem to="/delivers">发货管理
				</BreadcrumbItem>
				<BreadcrumbItem>发货详情</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="panel">
			<div class="panel_nav">
				<div class="panel_center">
					<h3 class="head">基本信息</h3>
					<div class="panel_con" style="padding: 0px;">
						<div class="summarize">
							<ul>
								<li style="width: 12.5%;">
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>发货单号</h3>
									<p>{{dataFHmsg.no}}</p>
								</li>

								<li style="width: 12.5%;">
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>发货时间</h3>
									<p>{{dataFHmsg.actualDate}}</p>
								</li>

								<li style="width: 12.5%;">
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>发货人</h3>
									<p>{{dataFHmsg.consignorName}}</p>
								</li>

								<li style="width: 12.5%;">
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>物流单号</h3>
									<p>{{dataFHmsg.logisticsNo}}</p>
								</li>

								<li style="width: 12.5%;">
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>承运人</h3>
									<p>{{dataFHmsg.logisticsName}}</p>
								</li >

								<li style="width: 12.5%;">
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>收货人</h3>
									<p>{{dataFHmsg.consignee}}</p>
								</li>
								<li style="width: 12.5%;">
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>收货电话</h3>
									<p>{{dataFHmsg.consigneeTel}}</p>
								</li>
								<li style="width: 12.5%;">
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>收货人地址</h3>
									<p>{{dataFHmsg.address}}</p>
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
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">发货信息</div>
														

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
																<span class="lable">发货单号：</span>
																<div class="value">
																	<p>{{dataFHmsg.no}}</p>
																</div>
															</li>

															<li>
																<span class="lable">发货时间：</span>
																<div class="value">
																	<p>{{dataFHmsg.actualDate}}</p>
																</div>
															</li>
															<li>
																<span class="lable">发货人：</span>
																<div class="value">
																	<p>{{dataFHmsg.consignorName}}</p>
																</div>
															</li>
															<li>
																<span class="lable">物流单号：</span>
																<div class="value">
																	<p>{{dataFHmsg.logisticsNo}}</p>
																</div>
															</li>

															<li>
																<span class="lable">承运人：</span>
																<div class="value">
																	<p>{{dataFHmsg.logisticsName}}</p>
																</div>
															</li>
															
															

														

															
														</ul>
													</div>
												</div>

												<div class=" tab_item">
													<div class="supplier_msg">
														<ul>
								
															<li>
																<span class="lable">收货人：</span>
																<div class="value">
																	<p>{{dataFHmsg.consignee}}</p>
																</div>
															</li>
															
															<li>
																<span class="lable">收货人电话：</span>
																<div class="value">
																	<p>{{dataFHmsg.consigneeTel}}</p>
																</div>
															</li>
															
															<li>
																<span class="lable">收货人地址：</span>
																<div class="value">
																	<p>{{dataFHmsg.address}}</p>
																</div>
															</li>
															
															<li>
																<span class="lable">备注：</span>
																<div class="value">
																	<p>{{dataFHmsg.notes}}</p>
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
												<router-link :to="{ name: 'dealercompanydetails', query: { id: '50zl1lxk6sxs'}}">查看经销商</router-link>

											</li>
											<li>
												<router-link :to="{ name: 'orderDetails', query: { id: '123456780'}}">查看订单</router-link>

											</li>

											<li>
												<router-link :to="{ name: 'clientdetails', query: { id: '123456780'}}">查看客户</router-link>

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
				dataFHmsg:'',
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
		},

		mounted: function() {
			var orderId=this.$route.query.id
				let that=this
			this.axios({
				methods:'get',
				url:'/api/f/dispatchs?logisticsNo=' +orderId
			}).then(function(res){
				console.log(res.data.data)
				that.dataFHmsg=res.data.data[0]
				
			}).catch(function(res){
				console.log(err)
			})
		}

	}
</script>