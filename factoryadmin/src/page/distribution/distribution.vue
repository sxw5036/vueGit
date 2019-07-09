<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>配送管理</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">
			<div class="active">
				<!---->
				<div class="ui_operateLeft" style="line-height: 32px;">
					<span class="operation_span">订单编号：</span>
					<input style="width: 200px;" class="iv_input" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5\w]/g,'')" id="p_lea" v-model="searchObj.orderNo" placeholder="请输入订单编号..." />

					<span class="operation_span">物流编号：</span>
					<input style="width: 200px;" class="iv_input" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5\w]/g,'')" id="p_lea" v-model="searchObj.logisticsNo" placeholder="请输入物流编号..." />

					<span class="operation_span">选择状态：</span>
					<Select style="width: 200px;" class="p_lea" v-model="searchObj.status" id="p_lea">
						<Option value="0" key="0">待取件</Option>
						<Option value="1" key="1">运输中</Option>
						<Option value="2" key="2">待取货</Option>
						<Option value="3" key="3">已取货</Option>
					</Select>

					<Button icon="ios-search" @click="clicksearch">搜索</Button>
				</div>

				<div class="ui_operateRight">
					<Button @click="newData" class="p_lea" shape="circle" icon="ios-refresh"></Button>
					<!--	<Button type="primary" @click="GetModelOpen">新增配送单</Button>-->

				</div>
			</div>

		</div>

		<!-- 部门信息列表 -->
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

		<!--添加配送信息 -s -->

		<!--配送单下条目详情-s-->
		<Modal title="配送单详情" v-model="dispatchShow" width="1000">

			<div class="aw_order">

				<ul>
					<li class="item">
						<Form :model="distributionObj" :label-width="100">

							<FormItem label="订单编号：">
								{{distributionObj.orderNo}}
							</FormItem>

							<FormItem label="发货单号：">
								{{distributionObj.no}}
							</FormItem>
							<FormItem label="状态：">
								{{distributionObj.statusName}}
							</FormItem>

							<FormItem label="收货人：">
								{{distributionObj.consignee}}
							</FormItem>

							<FormItem label="收货人电话：">
								{{distributionObj.consigneeTel}}
							</FormItem>

							<FormItem label="收货人地址：">
								{{distributionObj.address}}
							</FormItem>

							<FormItem label="物流公司：">
								{{distributionObj.logisticsName}}
							</FormItem>

							<FormItem label="物流单号：">
								{{distributionObj.logisticsNo}}
							</FormItem>

						</Form>
					</li>

					<li class="item af_center">

						<Table border height="300" :columns="dispatchBillItemDtoListH" :data="distributionObj.dispatchBillItemDtoList" ref="table"></Table>

					</li>

				</ul>

			</div>

			<div slot="footer" style="border: none;"></div>
		</Modal>

		<!--配送单下条目详情-e-->

		<!--修改部门信息-s-->

		<Drawer v-model="SetModel" title="确认发货" width="500">

			<Form :model="SetGetData" :label-width="80">

				<FormItem label="物流公司：">
					<Select id="p_lea" v-model="SetGetData.logisticsCompanyId">
						<Option v-for="item in logisticsData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>

				<FormItem label="物流单号：">
					<Input id="p_lea" v-model="SetGetData.logisticsNo" placeholder="请输入物流单号..." />
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetModelIsok">确认发货</Button>
			</div>

		</Drawer>
		<Modal v-model="peledel" width="360">
			<p slot="header" style="color:red;text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>删除配送信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除配送信息操作</p>
				<p>确定要删除吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="delTabData">删除</Button>
			</div>
		</Modal>

		<!--删除弹出框-->

		<Modal v-model="pdel" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>是否确认删除当前数据？</p>

			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="delTabData">删除</Button>
			</div>
		</Modal>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [{
						title: '订单编号',
						key: 'orderNo',
						fixed: 'left',
						width: 200,
					},

					{
						title: '发货单编号',
						key: 'no',
						width: 200,
					},

					{
						title: '收货人姓名',
						key: 'consignee',
						width: 200,
					},

					{
						title: '收货人电话',
						key: 'consigneeTel',
						align: 'center',
						width: 200,

					},

					{
						title: '收货人地址',
						key: 'address',
						width: 200,
					},

					{
						title: '物流公司',
						key: 'logisticsName',
						width: 200,
					},

					{
						title: '物流单号',
						key: 'logisticsNo',

						width: 200,

					},

					{
						title: '发货人',
						key: 'consignorName',
						width: 150,
					},

					{
						title: '状态',
						key: 'status',
						width: 150,

						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var texts = "待取件"
							} else if(status == 1) {
								var texts = "运输中"
							} else if(status == 2) {
								var texts = "待取货"
							} else if(status == 3) {
								var texts = "已收货"
							}
							return h('div', texts)
						}
					},

					{
						title: '创建人',
						key: 'consignorName',
						width: 150,
					},

					{
						title: '创建时间',
						key: 'created',
						width: 160,
					},

					{
						title: '操作',
						key: 'action',
						width: 180,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								
								
								return h('div', [
								h('Button', {
											props: {
												type: 'primary',
												size: 'small',
												disabled: !this.operation.edit
											},
											style: {
												marginRight: '5px'
											},
											on: {
												click: () => {

													this.SetModelOpen(params.index)

												}
											}
										}, '发货'),

										h('Button', {
											props: {
												type: 'info',
												size: 'small',
												disabled: !this.operation.view
											},
											style: {
												marginRight: '5px'
											},
											on: {
												click: () => {
													this.dispatchShow = true
													this.distributionOpen(params.index)

												}
											}
										}, '详情'), 
										h('Button', {
											props: {
												type: 'error',
												size: 'small',
												disabled: !this.operation.delete
											},
											style: {
												marginRight: '5px'
											},
											on: {
												click: () => {
													this.peledel = true
														this.SetIndex = params.index

												}
											}
										}, '删除')

									]);
						
								}
								else {
									return h('div', [

										h('Button', {
											props: {
												type: 'info',
												size: 'small',
												disabled: !this.operation.view
											},
											style: {
												marginRight: '5px'
											},
											on: {
												click: () => {
													this.dispatchShow = true
													this.distributionOpen(params.index)

												}
											}
										}, '详情'), 
										h('Button', {
											props: {
												type: 'error',
												size: 'small',
												disabled: !this.operation.delete
											},
											style: {
												marginRight: '5px'
											},
											on: {
												click: () => {
													this.peledel = true;
													this.setIndex = params.index

												}
											}
										}, '删除')

									]);
								}

							}
						}
					],

					tableData: [{
						"resultCode": "200",
						"id": "aaaaa",
						"name": "007",
						"notes": "前所未有",
						"productCategoryId": "4gd6378euww0",
						"productMaterialId": "4gnu295y7oxs",
						"productColor": "4gn98964fqio",
						"no": "2222",
						"status": 0,
						"creator": "aaa",
						"created": "2018-12-04 15:10:13",
						"unit": 1,
						"materialName": "红松木",
						"colorName": "青色",
						"categoryName": "磨砂板"
					}], //表格数据
					GetModel: false, //添加模态框属性
					SetModel: false, //修改模态框属性
					objGetData: { //添加信息
						"orderId": "",
						"orderNo": "",
						"no": "",
						"finishedStockId": "",
						"planDate": "",
						"actualDate": "",
						"consignee": "",
						"consigneeTel": "",
						"address": "",
						"logisticsCompanyId": "",
						"logisticsNo": "",
						"flag": "",
						"dispatchBillItemDtoList": [{
							"finishedStockItemId": "",
							"status": ""
						}]

					},

					SetGetData: { //修改信息
						"logisticsCompanyId": "",
						"logisticsNo": "",

					},

					dispatchShow: false,
					distributionObj: {},
					dispatchBillItemDtoListH: [{
							title: '包装/二维码编号',
							key: 'barcode',

						},

						{
							title: '状态',
							key: 'status',

							render: (h, params) => {

								var status = params.row.status

								if(status == 0) {
									var texts = "到货"
								} else if(status == 1) {
									var texts = "缺失"
								} else if(status == 2) {
									var texts = "损坏"
								}
								return h('div', texts)
							}
						},

						{
							title: '类型',
							key: 'type',

							render: (h, params) => {

								var type = params.row.type

								if(type == 0) {
									var texts = "衣柜"
								} else if(type == 1) {
									var texts = "橱柜"
								} else if(type == 2) {
									var texts = "门板"
								} else if(type == 3) {
									var texts = "五金"
								}
								return h('div', texts)
							}
						},
					],

					SetIndex: "", //点击编辑按钮时选中的位置
					peledel: false,
					pageIndex: 1, //分页页数
					pageSize: 10,
					pageIndextotal: 0,
					loading: true,
					logisticsData: [], //订单
					logisticsCache: {},
					isSearch: false,
					searchObj: {
						"orderNo": "",
						"logisticsNo": "",
						"status": "",
					},
					pdel: false,
					operation: {},

				};
			},

			methods: {

					pageChange: function(index) {
						this.pageIndex = index

						if(this.isSearch = true) {
							this.searchData()
						} else {
							this.getDatas()
						}

					},

					//打开补全配送单窗口

					SetModelOpen: function(index) {

						this.SetGetData = { //修改信息
							"logisticsCompanyId": "",
							"logisticsNo": "",

						}

						var that = this

						axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
						this.SetIndex = index
						var orid = this.tableData[index].orderId

						if(!this.logisticsCache[orid]) {
							this.axios({
								method: 'get',
								url: '/api/f/company/logistics/' + orid,

							}).then(function(res) {

								if(Isjurisdiction.isright(res, that) == false) {
									return false
								}
								var data = res.data.data
								that.logisticsCache[orid] = data
								that.logisticsData = data.logisticsCompanyList
								that.SetGetData.logisticsCompanyId = data.default

							}).catch(function(err) {

								that.$Message.error('出错了，请稍后重试！');

							})
						} else {
							var data = this.logisticsCache[orid]
							this.logisticsData = data.logisticsCompanyList
							this.SetGetData.logisticsCompanyId = data.default
						}

						//查询f端所用物流公司

						this.SetModel = true
					},

					//补全配送单信息api

					SetModelIsok: function() {

						var id = this.tableData[this.SetIndex].id

						var setGetData = this.SetGetData

						var logisticsCompanyid = setGetData.logisticsCompanyId
						var logisticsno = setGetData.logisticsNo

						if(logisticsno == "" || logisticsno == null || logisticsno.trim().length == 0) {
							this.$Message.error('物流编号不能为空！');
							return false;
						} else {
							/*

							*/

							const msg = this.$Message.loading({
								content: 'Loading...',
								duration: 0
							});

							var that = this

							axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
							//                    /
							this.axios({
								method: 'put',
								url: '/api/f/dispatchs/' + id + '/deliver',

								data: {

									"logisticsCompanyId": logisticsCompanyid,
									"logisticsNo": logisticsno

								}

							}).then(function(res) {

								var verify = [{
										"name": "logisticsCompanyId",
										"note": "物流公司"
									},
									{
										"name": "logisticsNo",
										"note": "物流单号 "
									},
								]

								setTimeout(msg, 100);

								if(Isjurisdiction.isright(res, that, verify) == false) {
									return false
								}

								var data = res.data.data

								that.tableData[that.SetIndex].status = data.status
								that.tableData[that.SetIndex].actualDate = data.actualDate
								that.tableData[that.SetIndex].logisticsNo = data.logisticsNo

								var logisticsObj = that.logisticsCache[data.orderId]
								var logisticsCompanyList = logisticsObj.logisticsCompanyList

								for(var i = 0; i < logisticsCompanyList.length; i++) {

									var logisticsdata = logisticsCompanyList[i]

									if(logisticsObj.default == logisticsdata.id) {
										that.tableData[that.SetIndex].logisticsName = logisticsdata.name
									}

								}

								that.$Message.success("发货成功")
								setTimeout(msg, 100);
								that.SetModel = false
							}).catch(function(err) {

								that.$Message.error('出错了，请稍后重试！');
								setTimeout(msg, 100);
								that.SetModel = false

							})

						}

					},
					//删除配送单
					delTabData: function() {

						var index = this.SetIndex

						var index = this.setIndex;
						var id = this.tableData[index].id

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						var that = this

						axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-delete"
						//请求产品
						this.axios({
							method: 'delete',
							url: '/api/f/dispatchs/' + id,

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								that.peledel = false;
								return false
							}

							that.tableData.splice(index, 1)
							that.pdel = false
							that.$Message.success("删除成功")
							that.peledel = false;

						}).catch(function(err) {
							setTimeout(msg, 100);
							that.$Message.error('出错了，请稍后重试！');

						})
					},

					//检索信息

					clicksearch: function() {
						var searchobj = this.searchObj

						var orderNo = searchobj.orderNo
						var logisticsNo = searchobj.logisticsNo
						var status = searchobj.status

						if(orderNo == "" && logisticsNo == "" && status == "") {
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

						var orderNo = searchobj.orderNo
						var logisticsNo = searchobj.logisticsNo
						var status = searchobj.status

						var pathurl = ""

						if(orderNo != "" && orderNo != null && orderNo.length != 0) {
							pathurl += 'orderNo=' + orderNo + "&"
						}

						if(logisticsNo != "" && logisticsNo != null && logisticsNo.length != 0) {
							pathurl += 'logisticsNo=' + logisticsNo + "&"
						}

						if(status != "" && status != null && status.length != 0) {
							pathurl += 'status=' + status + "&"
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
							url: '/api/f/dispatchs?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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

					//打开配送单

					distributionOpen: function(index) {

						var data = this.tableData[index]
						var status = data.status

						if(status == 0) {
							data.statusName = "待取件"
						} else if(status == 1) {
							data.statusName = "运输中"
						} else if(status == 2) {
							data.statusName = "待取货"
						} else if(status == 3) {
							data.statusName = "已收货"
						}

						this.distributionObj = data

					},

					//刷新数据

					newData: function() {
						this.isSearch = false
						this.searchObj = {
								"name": "",
								"categoryId": "",
								"no": "",
								"status": "",

							},
							this.pageIndex = 1
						this.getDatas()

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
						//请求配送单
						this.axios({
							method: 'get',
							url: '/api/f/dispatchs?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var dataAll = res.data
							var data = res.data.data

							that.tableData = data
							that.pageIndextotal = dataAll.pagination.total
							that.loading = false

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
	
	.aw_order {
		display: block;
		width: 100%;
		overflow: auto;
	}
	
	.aw_order ul {
		width: 100%;
		display: inline-block;
	}
	
	.aw_order ul li.item {
		float: left;
		width: 50%;
		height: 300px;
		overflow: auto;
		box-sizing: border-box;
		border-right: solid 1px whitesmoke;
	}
	
	.aw_order ul li.af_center {
		border-right: none;
		padding-left: 16px;
	}
	
	.aw_order ul li.af_center .butappned {
		bottom: 0px;
		left: 0px;
		padding-left: 16px;
		padding-bottom: 16px;
	}
	
	.aw_order ul li.af_center .item {
		display: block;
		padding: 16px;
		background: #EEEEEE;
		margin-bottom: 16px;
		position: relative;
	}
	
	.aw_order ul li.af_center .item .delBut {
		position: absolute;
		padding-left: 16px;
		left: 0px;
		bottom: 16px;
	}
</style>

<style src='./../../assets/css/department.css'></style>