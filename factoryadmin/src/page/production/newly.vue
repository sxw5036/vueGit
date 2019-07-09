<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a  @click="goback">生产管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建生产</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
					<Form :model="objmsg" :label-width="120">

						<FormItem label="所属订单">
							
							<Input v-model="objmsg.orderNo" placeholder="请输入所属订单..."></Input>
							
							<!--<Select  filterable v-model="objmsg.orderId" placeholder="请选择所属订单...">
								<Option v-for="item in orderData" :value="item.id" :key="item.id">{{ item.name }}-{{ item.founderName }}</Option>
							</Select>-->

						</FormItem>
						
						<FormItem label="选择类型">
							
							<!--<Input v-model="objmsg.orderNo" placeholder="..."></Input>-->
							
							<Select  placeholder="请选择类型...">
								<Option value="0" >柜体</Option>
								<Option value="1" >门板</Option>
							</Select>

						</FormItem>

						
						<FormItem label="生产时间">
							<DatePicker type="date" placeholder="请选择计划生产时间" style="width: 100%"></DatePicker>
						</FormItem>

						<FormItem label="完成时间">
							<DatePicker type="date" placeholder="计划完成时间" style="width: 100%"></DatePicker>
						</FormItem>

					</Form>

					<div class="iv_form_but center">
						<button type="reset" class="details_opBut auto linkBlock smallsize" @click="formeReset">重置</button>
						<button class="details_opBut linkBlock smallsize" @click="">确认</button>
						<!--<Button type="primary">确认</Button>-->

					</div>

				</div>

			</div>

			<div>

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

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				objmsg: {
					name: "",
					sex:'0',
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				},

				

			};
		},

		methods: {
			
			goback:function  () {
				this.$emit('openWindow', ('productionplan'), ('生产管理'), ('8'), ('productionplan'), ('productionplan'))
//              this.$router.push({
//					name: 'client',
//
//				})
			},

		

			formeReset() {
				this.objmsg = {
					name: "",
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				}
				this.provinceMsg = "";
				this.cityMsg = "";
				this.districMsg = ""
			},

			newDealer: function() {
				this.$emit('openWindow', ('dealercompanynewly'), ('新建经销商'), ('2-1'), ('dealercompanynewly'), ('dealercompanynewly'))
			},

		},

		mounted: function() {

			var that = this
}
			

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
	
	.iv_form {
		display: block;
		width: 600px;
		padding: 30px 20px;
		background: #FFFFFF;
		border-radius: 6px;
	}
</style>