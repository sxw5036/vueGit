<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">组织管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建部门</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
					<Form :label-width="120">
						<Form :model="objdepartment" :label-width="120">
							<FormItem label="部门名称">
								<Input v-model="objdepartment.name" placeholder="请输入部门名称..."></Input>
							</FormItem>

							<FormItem label="部门描述">
								<Input v-model="objdepartment.describe" placeholder="请输入部门名描述..."></Input>
							</FormItem>

							<FormItem label="部门标识">
								<Input v-model="objdepartment.key" placeholder="请输入部门标识..."></Input>
							</FormItem>

						</Form>

					</Form>

					<div class="iv_form_but center">
						<button class="details_opBut auto linkBlock smallsize" @click="formeReset">重置</button>
						<button class="details_opBut linkBlock smallsize" @click="">确认</button>
						<!--<Button type="primary">确认</Button>-->

					</div>

				</div>

			</div>

			<div>

			</div>
		</div>

		<!--<div class="Quick_navigation">
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
		-->

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				objdepartment: {
					name: ""
				},
				

			};
		},

		methods: {

			goback: function() {
				this.$emit('openWindow', ('organizationList'), ('组织管理'), ('14'), ('organizationList'), ('organizationList'))
			},

			formeReset() {
				this.objdepartment = {

				}
			}

		},

		mounted: function() {

			var that = this

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
	
	.iv_form {
		display: block;
		width: 600px;
		padding: 30px 20px;
		background: #FFFFFF;
		border-radius: 6px;
	}
</style>