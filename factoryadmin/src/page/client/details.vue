<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a  @click="goback">客户管理</a>
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
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>客户地址</h3>
									<p>{{client.address}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>所属经销商</h3>
									<p>{{client.companyName}}</p>
								</li>

								<li>
									<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>业务经理</h3>
									<p>{{client.customerManagerName}}</p>
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
							<h3 class="head">全部信息</h3>
							<div class="panel_con">

								<div class="dealer_tab_nav one">
									<div class="tab_center ">
										<div class=" tab_item">
											<div class="supplier_msg">
												<ul>
													<li>
														<span class="lable">客户姓名：</span>
														<div class="value">
															<p>{{client.name}}</p>
														</div>
													</li>

													<li>
														<span class="lable">客户电话：</span>
														<div class="value">
															<p>{{client.phone}}</p>
														</div>
													</li>

													<li>
														<span class="lable">客户小区：</span>
														<div class="value">
															<p>{{client.community}}</p>
														</div>
													</li>

													<li>
														<span class="lable">客户地址：</span>
														<div class="value">
															<p>{{client.address}}</p>
														</div>
													</li>

													<li>
														<span class="lable">所属经销商：</span>
														<div class="value">
															<p>{{client.companyName}}</p>
														</div>
													</li>

													<li>
														<span class="lable">业务经理：</span>
														<div class="value">
															<p>{{client.customerManagerName}}</p>
														</div>
													</li>

													<li>
														<span class="lable">客户地区：</span>
														<div class="value">
															<p>{{client.cityAreaId}}</p>
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

				<div class="panel marBtm">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head">通用操作区</h3>
							<div class="panel_con">
								<div class="but_op">
									<button class="details_opBut" @click="clientRedact">编辑</button>
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

				client: {},

			};
		},

		methods: {
			
			goback:function  () {
				this.$emit('openWindow', ('client'), ('客户管理'), ('3'), ('client'), ('client'))
                
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
			
			
			clientRedact:function  () {
				this.$emit('openWindow', ('clientRedact'), ('编辑客户'), ('3-2'), ('clientRedact'), ('clientRedact'))
				this.$router.push({
					name: 'clientRedact',
					query: {
						item: this.client,
					}
				})
			}

		},

		mounted: function() {
			this.client = this.$route.query.pathUrl

			console.log(this.$route.query.pathUrl)

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