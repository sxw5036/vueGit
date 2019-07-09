<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>供应商管理</BreadcrumbItem>
				<BreadcrumbItem>供应商详情</BreadcrumbItem>

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
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>编号</h3>
										<p>AC-130</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>公司名称</h3>
										<p>河南省某建材商</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>状态</h3>
										<p>意向</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>级别</h3>
										<p>一级</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>负责人</h3>
										<p>小杜</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>联系电话</h3>
										<p>18336636326</p>
									</li>

									<li>
										<h3><div class="icon"><img src="../../assets/lwxflogo.png"/></div>创建时间</h3>
										<p>2019-01-02 12:00:05</p>
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
						<Col span="6">

						<div class="panel">
							<div class="panel_nav" >
								<div class="panel_center" style="height: 505px; ">
									<h3 class="head">供应商信息</h3>
									<div class="panel_con">
										<div class="supplier_msg">
											<ul>
												<li>
													<span class="lable">编号：</span>
													<div class="value">
														<p>AC-130</p>
													</div>
												</li>

												<li>
													<span class="lable">公司名称：</span>
													<div class="value">
														<p>河南省某建材商</p>
													</div>
												</li>

												<li>
													<span class="lable">状态：</span>
													<div class="value">
														<p>意向</p>
													</div>
												</li>

												<li>
													<span class="lable">级别：</span>
													<div class="value">
														<p>一级</p>
													</div>
												</li>

												<li>
													<span class="lable">负责人：</span>
													<div class="value">
														<p>小杜</p>
													</div>
												</li>

												<li>
													<span class="lable">联系电话：</span>
													<div class="value">
														<p>18336636326</p>
													</div>
												</li>

												<li>
													<span class="lable">创建时间：</span>
													<div class="value">
														<p>2019-01-02 12:00:05</p>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>

						</Col>
						<Col span="13">
						<div class="panel">
							<div class="panel_nav">
								<div class="panel_center">
									<h3 class="head">供应商产品服务信息</h3>
									<div class="panel_con">
										<div class="">

											<Table height="393px" ref="currentRowTable" :columns="orderProductHead" :data="orderProductData" ></Table>

											<div class="fenye" style="margin: 0px auto; text-align: center;" >
												<Page style="display: inline-block;"  :current="pageIndex" :total="pageIndextotal" :page-size="pageSize" @on-change="pageChange" show-total></Page>
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
											<Button type="primary">审核</Button>
											<Button type="primary">创建产品</Button>

										</div>

									</div>
								</div>
							</div>

							<div class="panel_nav" style="margin: 10px 0px;">
								<div class="panel_center">
									<h3 class="head">通用操作区</h3>
									<div class="panel_con">

										<div class="but_op">
											<Button type="primary">编辑</Button>
											<Button type="primary">打印</Button>
											<Button type="primary">打印预览</Button>
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

				//订单产品
				orderProductHead: [{
						title: '产品类型',
						key: 'type',
						
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '橱柜(J)'
							} else if(row.type == 1) {
								text = '衣柜(B)'
							} else if(row.type == 2) {
								text = '成品家具(J)'
							} else if(row.type == 3) {
								text = '电器(J)'
							} else if(row.type == 4) {
								text = '五金(J)'
							} else if(row.type == 5) {
								text = '样块(Y)'
							}
							return h('div', text);
						}
					},
					{
						title: '产品系列',
						key: 'series ',
						
						render: (h, params) => {

							var series = params.row.series
							var text
							if(series == 0) {
								text = '定制实木 '
							} else if(series == 1) {
								text = '特供实木'
							} else if(series == 2) {
								text = '美克 '
							} else if(series == 3) {
								text = '康奈'
							} else if(series == 4) {
								text = '慧娜 '
							} else if(series == 5) {
								text = '模压  '
							}
							return h('div', text);
						}
					},

					{
						title: '产品价格',
						key: 'price',
						
						render: (h, params) => {
							var price = params.row.price + '';

							if(price == "undefined") {
								price = "0.00"

							} else if(price == 0) {
								price = "0.00"
							} else {
								price = (price.indexOf('.') == -1) ? price + ".00" : price
							}

							this.orderProductData[params.index].price = price

							return h('div', {
								style: {
									textAlign: 'rihght',
									width: '100%'
								},

							}, price)
						}
					},

					{
						title: '门型',
						key: 'door',
						

					},
					{
						title: '颜色',
						key: 'color',
						

					},
					{
						title: '备注',
						key: 'notes',
						
					},

					/*{
						title: '修改人',
						key: 'updateUserName',
						width: 150,
					},

					{
						title: '修改时间',
						key: 'updateTime',
						width: 200,
					},*/

					{
						title: '创建人',
						key: 'creatorName',
						
					},

					{
						title: '创建时间',
						key: 'created',
						
					},

				],
				orderProductData: [],

				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,

				operation: {}

			};
		},

		methods: {
			pageChange: function() {

			}

		},

		mounted: function() {

		},

	}
</script>

<style scoped="scoped">
	.Quick_navigation {
		width: 300px;
		position: fixed;
		z-index: 9;
		bottom: 70px;
		right: 20px;
	}
	
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
	
	
	.summarize ul li {
		width: 14.285%;
		float: left;
		box-sizing: border-box;
		border-right: solid 1px #E9E9E9;
		padding: 30px;
	}
	
	
	
	.order_flowPath {
		padding-bottom: 60px;
	}
	
	.order_flowPath .order_flowPathNav {
		position: relative;
		display: block;
		width: 100%;
		background: #EDEFF4;
		height: 10px;
		border-radius: 10px;
		margin-top: 50px;
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
		top: -50px;
		width: 50px;
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
		bottom: -35px;
		margin-left: -15px;
	}
	
	.order_flowPath ul li:first-child {
		margin-left: 0px;
	}
	
	.but_op button {
		display: block;
		margin: 0px auto;
		margin-bottom: 10px;
	}
	

</style>