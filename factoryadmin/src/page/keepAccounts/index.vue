<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>财务记账</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div>
			<Row>
				<Col span="4">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head "><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>今日收入总额</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">54</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>
				
				<Col span="4">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon two-child"><img src="../../assets/img/order/list-02.png"/></div>今日支出总额</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">31</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>
				
				
				<Col span="4">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>今日收入笔数</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">12</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>
				
				
				<Col span="4">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>今日支出笔数</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">32</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>

				<Col span="8">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center border">
							<h3 class="head">数据变动信息列表</h3>
							<div class="panel_con">
								<div class="head-statement-4">
									<ul>
										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加客户马小跳</p>
											<small class="Time">13：30</small>
										</li>
										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加客户马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加客户马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加客户马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加客户商马小跳</p>
											<small class="Time">13：30</small>
										</li>
									</ul>

								</div>
							</div>

						</div>
					</div>
				</div>
				</Col>
			</Row>
		</div>
		<div class="table_nav_iv">
			<div class="operation_box">
				<div class="active">
					<!---->
					<div class="ui_operateLeft" style="line-height: 32px;">

						<ul class="tab">
							<li class="tab_item">
								<div class="lable">选择支付款项</div>
								<div class="form_nav">
									<Select style="width: 200px;" class="p_lea" v-model="searchObj.funds" id="p_lea">
										<Option value="32" key="32">设计金</Option>
										<Option value="31" key="31">货款</Option>

									</Select>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary" icon="ios-search" @click="clicksearch">搜索</Button>
									<Button type="primary" @click="newData" class="p_lea" icon="ios-refresh">重置</Button>
								</div>
							</li>
						</ul>

					</div>

					<div class="ui_operateRight">
						<ul class="tab">
							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary" class="p_lea">导入</Button>
									<Button type="primary" class="p_lea">导出</Button>
									<Button type="primary" class="p_lea" @click="newOpen">新建记账</Button>
									

								</div>
							</li>

						</ul>
					</div>
				</div>

			</div>

			<div>

				<Table border :loading="loading" :columns="tableHeader" :data="tableData" ref="table"></Table>
				<Switch v-model="loading"></Switch>
				<div class="ui_tableBottom">

					<div class="ui_operate">

					</div>

					<div class="ui_page">
						<Page :current="pageIndex" :total="pageIndextotal" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
					</div>

				</div>

			</div>
		</div>

		<!--<Drawer v-model="SetModel" title="设计费" width="500">

			<Form :model="SetGetData" :label-width="80">
				<FormItem label="设计费">
					<Input v-model="SetGetData.designfee" placeholder="请输入设计费..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="setIsok">确认审核</Button>
			</div>

		</Drawer>

		<Modal v-model="auditOpen" width="500">
			<p slot="header" style="color:cornflowerblue;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>设计费支付审核</span>
			</p>
			<div style="line-height: 30px;">
				<p>订单编号：{{orderAuditObj.orderNo}}</p>
				<p>经销商：{{orderAuditObj.companyName}}</p>
				<p>c端客户：{{orderAuditObj.customName}}</p>
				<p>创建人：{{orderAuditObj.creatorName}}</p>
				<p>创建时间：{{orderAuditObj.created}}</p>
				<p>经销商余款：{{orderAuditObj.balance}}</p>
				<p>支付金额：{{orderAuditObj.amount}}</p>
			</div>
			<div slot="footer">
				<Button v-show="auditDis==true" type="primary" @click="payaudit">确认审核</Button>
				<p v-show="auditDis==false" style="color: red;">扣款金额大于经销商余额</p>
			</div>
		</Modal>

		<Modal v-model="auditOpenHK" width="500">
			<p slot="header" style="color:cornflowerblue;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>货款支付审核</span>
			</p>
			<div style="line-height: 30px;">
				<p>订单编号：{{orderAuditObj.orderNo}}</p>
				<p>经销商：{{orderAuditObj.companyName}}</p>
				<p>c端客户：{{orderAuditObj.customName}}</p>
				<p>创建人：{{orderAuditObj.creatorName}}</p>
				<p>创建时间：{{orderAuditObj.created}}</p>
				<p>经销商余款：{{orderAuditObj.balance}}</p>
				<p>支付金额：{{orderAuditObj.amount}}</p>

			</div>
			<div slot="footer">
				<Button v-show="auditDis==true" type="primary" @click="payauditHK">确认审核</Button>
				<p v-show="auditDis==false" style="color: red;">扣款金额大于经销商余额</p>
			</div>
		</Modal>-->

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [
				
				{
						title: '付款人',
						key: 'companyName',
						
						fixed: 'left',
					},
					
					{
						title: '支付说明',
						key: 'notes',
						

					},
					
					
//					{
//						title: '付款时间',
//						key: 'payTime',
//						width: 200,
//					},
//
//					{
//						title: '标题',
//						key: 'name',
//						width: 200,
//
//					},
//
//					
//
//					{
//						title: '支付编号',
//						key: 'no',
//						width: 200,
//
//					},

					{
						title: '付款金额',
						key: 'amount',
						
						render: (h, params) => {
							var amount = params.row.amount;

							amount = (amount.toString().indexOf('.') == -1) ? amount + ".00" : amount

							return h('div', {
								style: {
									textAlign: 'rihght'
								},

							}, amount)
						}

					},

					


					{
						title: '支付类型',
						key: 'typeName',
						
						
					},

					{
						title: '支付方式',
						key: 'waysName',
						

					},

					{
						title: '支付款项',
						key: 'fundsName',
						

					
					},

					{
						title: '收款人',
						key: 'holder',
						

					},

					
					{
						title: '创建人',
						key: 'creator',
						
					},
					
					{
						title: '创建时间',
						key: 'created',
						
					},

					{
						title: '操作',
						key: 'action',
						width: 120,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							return h('div', [
								h('Button', {
									props: {
										type: 'info',
										size: 'small',
										
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {

										this.$emit('openWindow', ('keepAccountsDetails'), ('记账详情'), ('16-3'), ('keepAccountsDetails'), ('keepAccountsDetails'),(this.tableData[params.index].paymentId))
										}
									}
								}, '详情'),

							]);

						}

					}
				],

				tableData: [], //表格数据
				SetModel: false,
				SetGetData: {
					"designfee": ""
				},
				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

				isSearch: false,
				searchObj: {
					"funds": "",

				},

				auditOpen: false,
				auditOpenHK: false,
				orderAuditObj: {
					balance: "",
					amount: "",
				},

				auditDis: true,

				operation: {}

			};
		},

		methods: {
			
			newOpen:function  () {
				this.$emit('openWindow', ('keepAccountsNewly'), ('新建记账'), ('16-1'), ('keepAccountsNewly'), ('keepAccountsNewly'))
			},
			

			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch == true) {
					this.searchData()
				} else {
					this.getDatas()
				}

			},

			hqdel: function(index, funds) {

				var orderId = this.tableData[index].customOrderId
				this.orderAuditObj.amount = this.tableData[index].amount
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/customorders/' + orderId + '/amount',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					if(funds == 32) {
						that.auditOpen = true
					} else if(funds == 31) {
						that.auditOpenHK = true
					}

					//console.log(res.data.data)		
					var data = res.data.data

					var balance = data.dealerAccount.balance
					var amount = that.tableData[index].amount
					if(amount > balance) {
						that.auditDis = false
					} else {
						that.auditDis = true
					}

					that.orderAuditObj.balance = (balance.toString().indexOf('.') == -1) ? balance + ".00" : balance
					that.tableData[index].amount = (amount.toString().indexOf('.') == -1) ? amount + ".00" : amount

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			setIsok: function() {

				var id = this.tableData[this.SetIndex].id

				var getdata = this.SetGetData
				var designfee = getdata.designfee

				if(designfee == "" || designfee == null || designfee.trim().length == 0) {
					this.$Message.error('设计费不能为空！');
					return false;
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
				this.axios({
					method: 'put',
					url: '/api/f/customorders/' + id + '/3',

					data: {
						designFee: designfee
					}

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.tableData[that.SetIndex].status = 3;
					that.tableData.splice(that.SetIndex, 1);
					that.SetModel = false;
					that.$Message.success("审核成功")
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			payaudit: function() {

				var index = this.SetIndex
				/*var that = this
				that.tableData.splice(index, 1)*/

				var id = this.tableData[index].customOrderId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

				this.axios({
					method: 'put',

					url: 'api/f/customorders/' + id + '/finance',

					data: {
						status: 4
					}

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.tableData[index].status = 1;

					that.$Message.success("审核成功")
					that.auditOpen = false
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			payauditHK: function() {

				var index = this.SetIndex
				/*var that = this
				that.tableData.splice(index, 1)*/

				var id = this.tableData[index].customOrderId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

				this.axios({
					method: 'put',
					url: 'api/f/customorders/' + id + '/finance',

					data: {
						status: 10
					}

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.newData();

					that.$Message.success("审核成功")
					that.auditOpenHK = false
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//检索信息

			clicksearch: function() {
				var searchobj = this.searchObj

				var funds = searchobj.funds

				if(funds == "") {
					this.newData();

					return false;
				} else {
					this.pageIndex = 1
					this.searchData()
				}

			},

			//调用检索api接口
			searchData: function() {

				var searchobj = this.searchObj

				var funds = searchobj.funds

				var pathurl = ""

				if(funds != "" && funds != null && funds.length != 0) {
					pathurl += 'funds=' + funds + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.loading = true

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
				//请求产品
				this.axios({
					method: 'get',
					url: '/api/f/finances/customorders?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					that.tableData = data
					that.pageIndextotal = dataAll.pagination.total
					//that.$Message.success("请求成功")
					that.isSearch = true
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {
						"funds": "",
					},
					this.pageIndex = 1
				this.getDatas()

			},

			// 导出表格
//			exportData: function(type) {
//
//				this.$refs.table.exportCsv({
//					filename: '产品信息列表'
//				});
//			},

			getDatas: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/companyFinances/companies/payments?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					that.tableData = data
					that.pageIndextotal = dataAll.pagination.total

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			}

		},

		mounted: function() {
			axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.getDatas()

		}

	}
</script>

<style>
	.Drawer_op {
		margin-left: 80px;
	}
	
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
</style>

<style src='./../../assets/css/department.css'></style>