<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem ><a  @click="goback">外协管理</a></BreadcrumbItem>
				<BreadcrumbItem>新建外协</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">
			
		<div class="iv_formbox">
			
			<div class="iv_form">
				<Form :label-width="150">
				
				<FormItem label="所属订单">
						<Input style="width: 300px;" v-model="outsource.id" placeholder="请输入外协所属订单..."></Input>
					</FormItem>
				
				<FormItem label="外协金额">
						<Input style="width: 300px;" v-model="outsource.amount" placeholder="请输入外协金额..."></Input>
					</FormItem>

					<FormItem label="外协厂家">
						<Input style="width: 300px;" v-model="outsource.coordinationName" placeholder="请输入外协厂家..."></Input>
					</FormItem>

					<FormItem label="银行账户">
						<Input style="width: 300px;" v-model="outsource.coordinationAccount" placeholder="请输入银行账户..."></Input>
					</FormItem>

					<FormItem label="开户行">
						<Input style="width: 300px;" v-model="outsource.coordinationBank" placeholder="请输入开户行..."></Input>
					</FormItem>
			
				<FormItem label="数量">
					<Input style="width: 300px;" v-model="outsource.count" placeholder="请输入数量..."></Input>
				</FormItem>

				<!--<FormItem label="完成时间">
									
										<DatePicker style="width: 300px;" type="date" placeholder="请选择完成时间" @on-change="getcompletionTime" :value="outsource.completionTime"></DatePicker>
									</FormItem>-->

				<FormItem label="说明">
					<Input type="textarea" style="width: 300px;" v-model="outsource.notes" placeholder="请输入说明..."></Input>
				</FormItem>

			</Form>

				<div class="iv_form_but center">
					<button class="details_opBut auto linkBlock smallsize" @click="formeReset" >重置</button>	
					<button class="details_opBut linkBlock smallsize"  @click="">确认</button>
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

				outsource: {
					id : "",
					mobile: "",
					 coordinationName: "",
					coordinationAccount: "",
					count: "",
					"notes":"",
				},
				
				companyData:[],

				provinceData: [], //省份数据
				cityData: [], //城市数据
				cityCache: {},
				districData: [], //省/县数据
				districtCache: {},
				provinceMsg: "", //省份选中数据
				cityMsg: "", //城市选中数据
				districMsg: "", //省/县选中数据

				operation: {}

			};
		},

		methods: {
			
			goback:function  () {
				this.$emit('openWindow', ('outsource'), ('外协管理'), ('4'), ('outsource'), ('outsource'))
			},

			formeReset() {
				this.outsource= {
					id : "",
					mobile: "",
					 coordinationName: "",
					coordinationAccount: "",
					count: "",
					"notes":"",
				}
			}

		},

		mounted: function() {

			var that = this

//			this.axios({
//				method: 'get',
//				url: '/api/f/dealers/companies?state=1&pageNum=1&pageSize=99999',
//
//			}).then(function(res) {
//
//				if(Isjurisdiction.isright(res, that) == false) {
//					return false
//				}
//
//				var data = res.data.data
//				that.companyData = data.companyList
//
//			}).catch(function(err) {
//
//				that.$Message.error('出错了，请稍后重试！');
//
//			})

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