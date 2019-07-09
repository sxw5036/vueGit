<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a href="javascript:history.back(-1)">外协管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>外协订单</BreadcrumbItem>
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
									<h3><img src="../../assets/lwxflogo.png"/>拆单编号</h3>
									<p>20190605-02</p>
								</li>

								<li>
									<h3><img src="../../assets/lwxflogo.png"/>订单编号</h3>
									<p>J20190605-06</p>
								</li>

								<li>
									<h3><img src="../../assets/lwxflogo.png"/>状态</h3>
									<p>已完成</p>
								</li>

								<li>
									<h3><img src="../../assets/lwxflogo.png"/>拆单类型</h3>
									<p>门板</p>
								</li>

								<li>
									<h3><img src="../../assets/lwxflogo.png"/>生产方式</h3>
									<p>外协</p>
								</li>

								<li>
									<h3><img src="../../assets/lwxflogo.png"/>是否付款</h3>
									<p>已付款</p>
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
							<h3 class="head">全部信息</h3>
							<div class="panel_con">

								<div class="dealer_tab_nav one">
									<div class="tab_center ">
										<div class=" tab_item">
											<div class="supplier_msg">
												<ul>
													<li>
														<span class="lable">拆单编号：</span>
														<div class="value">
															<p>20190605-02</p>
														</div>
													</li>

													<li>
														<span class="lable">订单编号：</span>
														<div class="value">
															<p>J20190605-06</p>
														</div>
													</li>

													<li>
														<span class="lable">状态：</span>
														<div class="value">
															<p>已完成</p>
														</div>
													</li>

													<li>
														<span class="lable">拆单类型：</span>
														<div class="value">
															<p>门板</p>
														</div>
													</li>

													<li>
														<span class="lable">生产方式：</span>
														<div class="value">
															<p>外协</p>
														</div>
													</li>

													<li>
														<span class="lable">是否付款：</span>
														<div class="value">
															<p>已付款</p>
														</div>
													</li>

													<li>
														<span class="lable">外协金额：</span>
														<div class="value">
															<p>1000</p>
														</div>
													</li>
												</ul>
											</div>
										</div>
										<div class=" tab_item">
											<div class="supplier_msg">
												<ul>
													<li>
														<span class="lable">外协厂家名称：</span>
														<div class="value">
															<p>小菠萝</p>
														</div>
													</li>

													<li>
														<span class="lable">外协厂家开户行：</span>
														<div class="value">
															<p>中国银行</p>
														</div>
													</li>

													<li>
														<span class="lable">外协厂家账户：</span>
														<div class="value">
															<p>4158416213215461321</p>
														</div>
													</li>

													<li>
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
													</li>
													
													<li>
														<span class="lable">创建人：</span>
														<div class="value">
															<p>老板电器</p>
														</div>
													</li>

													<li>
														<span class="lable">创建时间：</span>
														<div class="value">
															<p>019-05-16 00:00:00</p>
														</div>
													</li>

												</ul>
											</div>
										</div>

										<div class=" tab_item">
											<div class="supplier_msg">
												<ul>
													<li>
														<span class="lable">最后登录时间：</span>
														<div class="value">
															<p>2019-06-03 09:41:16</p>
														</div>
													</li>

													<li>
														<span class="lable">创建日期：</span>
														<div class="value">
															<p>2019-06-03 09:41:16</p>
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

				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head">操作</h3>
							<div class="panel_con">

								<div class="but_op">

									<Button type="primary">编辑</Button>
									<Button type="primary">删除</Button>
									<Button type="primary">打印</Button>

								</div>

							</div>
						</div>
					</div>

					<!--<div class="panel_nav" style="margin: 10px 0px;">
						<div class="panel_center">
							<h3 class="head">操作</h3>
							<div class="panel_con">

								<div class="but_op">
									<Button type="primary">编辑</Button>
									<Button type="primary">打印</Button>
									<Button type="primary">打印预览</Button>
								</div>

							</div>
						</div>
					</div>-->
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

			}
		},

		methods: {

		},

		mounted: function() {}

	}
</script>

<style>
	
</style>

