<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>日常账管理</BreadcrumbItem>
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
									<p class="statistics" style="font-size:18px;">0.00</p>
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
								<div class="lable">选择类型</div>
								<div class="form_nav">
									<Select style="width: 200px;" class="p_lea" v-model="searchObj.funds" id="p_lea">
										<Option value="32" key="1">收入</Option>
										<Option value="31" key="2">支出</Option>

									</Select>
								</div>
							</li>
							<li class="tab_item">
								<div class="lable">选择科目</div>
								<div class="form_nav">
									<Select style="width: 200px;" class="p_lea" v-model="searchObj.funds" id="p_lea">
										<Option v-for="(item,index) in fundsdata" :value="item.id" :key="item.id">{{item.name}}</Option>
									</Select>
								</div>
							</li>
							<li class="tab_item">
								<div class="lable">选择银行</div>
								<div class="form_nav">
									<Select style="width: 200px;" class="p_lea" v-model="searchObj.funds" id="p_lea">
										<Option v-for="(item,index) in bankAccount" :value="item.id" :key="item.id">{{item.name}} {{item.value}}</Option>
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
									<Button type="primary" class="p_lea" @click="newOpen">新建收支</Button>
									

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
						title: '科目名称',
						key: 'fundsName',
						
					},
					{
						title: '类型',
						key: 'typeName',
						fixed: 'left',
						
					},
					{
						title: '支付方式',
						key: 'waysName',
						
					},
					{
						title: '银行名称',
						key: 'bankName',
						
					},
					{
						title: '支付日期',
						key: 'paymentDate',
						
					},
					{
						title: '操作人',
						key: 'operatorName',
						
					},
					

					/*{
						title: '标题',
						key: 'name',
						width: 200,
					},*/

					{
						title: '金额',
						key: 'amount',
						

						render: (h, params) => {
							var amount = params.row.amount;

							amount = (amount.toString().indexOf('.') == -1) ? amount + ".00" : amount

							return h('div', {
								style: {
									textAlign: 'right',
									width: '100%'
								},

							}, amount)
						}
					},

//					{
//						title: '收款人',
//						key: 'holder',
//						width: 200,
//					},
//
//					{
//						title: '支付时间',
//						key: 'payTime',
//
//						width: 300,
//
//					},
//
//					{
//						title: '收款账号',
//						key: 'holderAccount',
//						width: 200,
//					},
//
//					/* {
//						title: '支付人',
//						key: 'payeeName',
//						width: 200,
//					},*/
//
//					{
//						title: '支付编号',
//						key: 'no',
//
//						width: 300,
//
//					},
//
//					{
//						title: '描述',
//						key: 'notes',
//						width: 200,
//					},
//
//					{
//						title: '创建人',
//						key: 'creatorName',
//						width: 200,
//					},
//
//					{
//						title: '创建日期',
//						key: 'created',
//						width: 200,
//					},
					
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
										type: 'primary',
										size: 'small',
//										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
									
											this.$emit('openWindow', ('paymentSimpleDetails'), ('日常账详情'), ('8-3'), ('paymentSimpleDetails'), ('paymentSimpleDetails'),(this.tableData[params.index].id))
										}
									}
								}, '详情'),
							])

						}
					}
//					{
//						title: '操作',
//						key: 'action',
//						width: 100,
//						fixed: 'right',
//						align: 'center',
//						render: (h, params) => {
//
//							var status = params.row.status
//
//							if(status == 0) {
//								return h('div', [
//									h('Button', {
//										props: {
//											type: 'primary',
//											size: 'small',
//											disabled: !this.operation.edit
//										},
//										style: {
//											display: (this.operation.edit == true) ? "link-block" : "none"
//										},
//										on: {
//											click: () => {
//												this.SetIndex = params.index
//
//												var funds = this.tableData[params.index].funds
//
//												this.orderAuditObj = this.tableData[params.index]
//
//												this.hqdel(params.index, funds)
//
//											}
//										}
//									}, '审核'),
//
//								]);
//							}
//
//						}
//					}
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
				bankAccount: [],
				fundsdata: [],
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
				this.$emit('openWindow', ('paymentSimpleNewly'), ('新建日常账收支'), ('3-1'), ('paymentSimpleNewly'), ('paymentSimpleNewly'))
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

					url: '/api/f/payment_simples',

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

			//检索信息

			clicksearch: function() {
				var searchobj = this.searchObj
				var funds = searchobj.funds
				var type = searchobj.type
				var bank = searchobj.bank
				if(funds == "" && type=="" && bank=="") {
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
				var type = searchobj.type
				var bank = searchobj.bank
				var pathurl = ""

				if(funds != "" && funds != null && funds.length != 0) {
					pathurl += 'funds=' + funds + '&type='+type+'&bank='+bank
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
					url: '/api/f/api/f/payment_simples?type='+type+'&pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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
			getbankAccount: function() {
			
				var that = this
			
				this.axios({
					method: 'get',
					url: '/api/f/bankAccounts',
			
				}).then(function(res) {
			
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
			
					that.bankAccount = data
			
				}).catch(function(err) {
			
					that.$Message.error('出错了，请稍后重试123！');
			
				})
			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '产品信息列表'
				});
			},

			getDatas: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/payment_simples?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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
			this.getbankAccount();
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