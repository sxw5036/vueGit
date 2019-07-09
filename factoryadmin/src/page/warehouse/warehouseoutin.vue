<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>出入库单据列表</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<!-- 仓库列表 -->
		<div>
			<div class="operation_box">
			<div class="active">

				<div class="ui_operateLeft">
			<!--	<span class="operation_span">选择仓库：</span>	
					<Select v-model="warehouseId" @on-change="changewid(warehouseId)" style="width:200px">
					<Option v-for="item in warehouseData" :value="item.id" :key="item.id">{{ item.name }}</Option>
				</Select>-->
					
				</div>

				<div class="ui_operateRight">

					
				</div>
			</div>
			</div>
			<!--:height="tableHeight"-->
			<Table border :loading="loading" :columns="tableHeader" :data="tableData" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_operate">
				
				</div>

				<div class="ui_page">
					<Page :current="pageIndex" :total="pageTotal" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
				</div>

			</div>

		</div>

		<Modal title="入库单审核" v-model="openPut" width="1000">
			<Table border height="300" :columns="storagePutInItemListH" :data="storagePutInItemList" ref="table"></Table>

			<div class="demo-drawer-footer" style="border: none;">
				<Button type="primary" @click="Awisok">确认入库审核</Button>
			</div>
		</Modal>

		<Modal title="出库单审核" v-model="openOut" width="800">
			<Table border height="300" :columns="storageOutInItemListH" :data="storageOutInItemList" ref="table"></Table>

			<div class="demo-drawer-footer" style="border: none;">
				<Button type="primary" @click="Awisok">确认出库</Button>
			</div>
		</Modal>

		<Modal title="入库单详情" v-model="openPutDetails" width="800">
			<Table border height="300" :columns="storagePutInItemListDetailsH" :data="storagePutInItemList" ref="table"></Table>

			<div slot="footer" style="border: none;">

			</div>
		</Modal>

		<Modal title="出库单详情" v-model="openOutDetails" width="800">
			<Table border height="300" :columns="storageOutInItemListDetailsH" :data="storageOutInItemList" ref="table"></Table>

			<div slot="footer" style="border: none;">

			</div>
		</Modal>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableDataCach: {}, //全部库存信息缓存
				warehouseId:"",

				tableHeader: [{
						title: '编号',
						key: 'no'
					},

					{
						title: '备注',
						key: 'notes'
					},

					{
						title: '所属仓库',
						key: 'storageName'
					},

					{
						title: '单据类型',
						key: 'typeName'
					},

					/*{
						title: '流向',
						key: 'flowName'
					},*/

					{
						title: '创建人姓名',
						key: 'creatorName'
					},
					{
						title: '创建时间',
						key: 'created'
					},

					{
						title: '库存状态',
						key: 'statusName'
					},

					{
						title: '操作',
						key: 'action',
						width: 150,
						align: 'center',
						render: (h, params) => {

							var data = params.row

							if(data.status == 0) {
								return h('div', [
									h('Button', {
										props: {
											type: 'error',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {

												this.openWarehouse(params.index)

											}
										}
									}, '审核'),

									h('Poptip', {
										props: {
											confirm: true,
											title: '您确定要取消吗?',
											transfer: true
										},
										on: {
											'on-ok': () => {
												this.delWarehouse(params.index)
											}
										}
									}, [
										h('div', [
											h('Button', {
												props: {
													type: 'error',
													size: 'small'
												}
											}, '取消')
										])
									])

								]);
							} else {
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

												this.openWarehouse(params.index)

											}
										}
									}, '详情'),

								]);
							}

						}
					}
				],

				tableData: [], //数据
				/*入库单*/
				openPut: false,
				storagePutInItemListH: [{
						title: '产品名称',
						key: 'productName'
					},

					{
						title: '所属仓库',
						key: 'storageName'
					},

					{
						title: '入库价格',
						key: 'price'
					},

					{
						title: '数量',
						key: 'quantity'
					},

					/*{
						title: '所在货架',
						render: (h, params) => {

							var data = params.row

							return h('div', data.shelf + '-' + data.column + '-' + data.tier)
						}

					},*/

					{
						title: '所在货架',
						key: 'shelf',
						render: (h, params) => {

							var data = params.row

							return h('div', [

								h('Select', {

										props: {
											value: data.shelf,

										},

										on: {
											'on-change': (val) => {
												this.storagePutInItemList[params.index].shelf = val
											}
										}
									}, [
										h('Option', {
											props: {
												value: 'A'
											}
										}, 'A'),

										h('Option', {
											props: {
												value: 'B'
											}
										}, 'B'),

										h('Option', {
											props: {
												value: 'C'
											}
										}, 'C'),

										h('Option', {
											props: {
												value: 'D'
											}
										}, 'D'),

										h('Option', {
											props: {
												value: 'E'
											}
										}, 'E'),

										h('Option', {
											props: {
												value: 'F'
											}
										}, 'F'),

										h('Option', {
											props: {
												value: 'G'
											}
										}, 'G'),
									]

								),
							])

						}

					},

					{
						title: '所在货架列数',
						key: 'column',
						render: (h, params) => {

							var data = params.row

							return h('div', [

								h('Select', {

										props: {
											value: data.column.toString(),

										},

										on: {
											'on-change': (val) => {
												this.storagePutInItemList[params.index].column = val
											}
										}
									}, [
										h('Option', {
											props: {
												value: '1'
											}
										}, '1'),

										h('Option', {
											props: {
												value: '2'
											}
										}, '2'),

										h('Option', {
											props: {
												value: '3'
											}
										}, '3'),

										h('Option', {
											props: {
												value: '4'
											}
										}, '4'),

										h('Option', {
											props: {
												value: '5'
											}
										}, '5'),

										h('Option', {
											props: {
												value: '6'
											}
										}, '6'),

										h('Option', {
											props: {
												value: '7'
											}
										}, '7'),
									]

								),
							])

						}

					},

					{
						title: '所在货架层高',
						key: 'tier',
						render: (h, params) => {

							var data = params.row

							return h('div', [

								h('Select', {

										props: {
											value: data.tier.toString(),

										},

										on: {
											'on-change': (val) => {
												this.storagePutInItemList[params.index].tier = val
											}
										}
									}, [
										h('Option', {
											props: {
												value: '1'
											}
										}, '第一层'),

										h('Option', {
											props: {
												value: '2'
											}
										}, '第二层'),

										h('Option', {
											props: {
												value: '3'
											}
										}, '第三层'),

									]

								),
							])

						}

					},
				],
				storagePutInItemList: [],

				/*出库库单*/

				openOut: false,
				storageOutInItemListH: [{
						title: '产品名称',
						key: 'productName'
					},

					{
						title: '所属仓库',
						key: 'storageName'
					},

					{
						title: '入库价格',
						key: 'price'
					},

					{
						title: '数量',
						key: 'quantity'
					},

					{
						title: '所在货架',
						render: (h, params) => {

							var data = params.row

							return h('div', data.shelf + '-' + data.column + '-' + data.tier)
						}

					},
				],
				storageOutInItemList: [],
				isStatus: false,
				setIndex: "",
				pageIndex: 1, //分页页数
				pageTotal: 0,
				pageSize: 10,
				loading: true,
				Outputloading: true,
				tableHeight: "", //表格高度

				openPutDetails: false,

				storagePutInItemListDetailsH: [{ //入库详情
						title: '产品名称',
						key: 'productName'
					},

					{
						title: '所属仓库',
						key: 'storageName'
					},

					{
						title: '入库价格',
						key: 'price'
					},

					{
						title: '数量',
						key: 'quantity'
					},

					{
						title: '所在货架',
						render: (h, params) => {

							var data = params.row

							return h('div', data.shelf + '-' + data.column + '-' + data.tier)
						}

					},
				],

				openOutDetails: false,

				storageOutInItemListDetailsH: [{ //出库单详情
						title: '产品名称',
						key: 'productName'
					},

					{
						title: '所属仓库',
						key: 'storageName'
					},

					{
						title: '入库价格',
						key: 'price'
					},

					{
						title: '数量',
						key: 'quantity'
					},

					{
						title: '所在货架',
						render: (h, params) => {

							var data = params.row

							return h('div', data.shelf + '-' + data.column + '-' + data.tier)
						}

					},
				],
			
				warehouseData:[],
				operation:{}
			};
		},

		methods: {
			
			changewid:function(id){
					this.pageIndex = 1
					this.warehouseId=id
				
					this.gatData()
					
				},

			openWarehouse: function(index) {

				this.setIndex = index

				var data = this.tableData[index]
				var storageid = data.storageId

				var storageOutputInItemlist = data.storageOutputInItemList
				for(var i = 0; i < storageOutputInItemlist.length; i++) {

					storageOutputInItemlist[i].storageName = data.storageName

				}

				var flow = data.flow

				var status = data.status

				if(flow == 0 && status == 0) {
					this.openPut = true
					this.storagePutInItemList = storageOutputInItemlist
				} else if(flow == 0 && status == 1) {
					this.openPutDetails = true
					this.storagePutInItemList = storageOutputInItemlist
				} else if(flow == 1 && status == 0) {
					this.openOut = true
					this.storageOutInItemList = storageOutputInItemlist
				} else if(flow == 1 && status == 1) {
					this.openOutDetails = true
					this.storageOutInItemList = storageOutputInItemlist
				} else if(flow == 0 && status == 2) {
					this.openPutDetails = true
					this.storagePutInItemList = storageOutputInItemlist
				} else if(flow == 1 && status == 2) {
					this.openOutDetails = true
					this.storageOutInItemList = storageOutputInItemlist
				}

			},

			//取消入库

			delWarehouse: function(index) {
				var id = this.tableData[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				
					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
				//请求产品
				this.axios({
					method: 'put',
					url: '/api/f/storages/'+this.warehouseId+'/outputins/' + id + '/cancel',

				}).then(function(res) {

					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					var status = data

					that.tableData[index].status = status

					if(status == 0) {
						that.tableData[index].statusName = "待确定"
					} else if(status == 1) {
						that.tableData[index].statusName = "已确定"
					} else if(status == 2) {
						that.tableData[index].statusName = "已取消"
					}

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//确认入库审核

			Awisok: function() {

				var id = this.tableData[this.setIndex].id

				var storagePutInItemlist = this.storagePutInItemList

				var ware = {}

				for(var i = 0; i < storagePutInItemlist.length; i++) {

					var Putdata = storagePutInItemlist[i]
					//shelf column tier
					if(Putdata.shelf == "" || Putdata.shelf == null) {
						this.$Message.error('第' + (i + 1) + '条数据所在货架不能为空！');
						return false;

					} else if(Putdata.column == "" || Putdata.column == null) {
						this.$Message.error('第' + (i + 1) + '条数据所在列不能为空！');
						return false;

					} else if(Putdata.tier == "" || Putdata.tier == null) {
						this.$Message.error('第' + (i + 1) + '条数据所在层不能为空！');
						return false;

					} else {

						var pid = Putdata.productId

						var obj = {
							shelf: Putdata.shelf,
							column: Putdata.column,
							tier: Putdata.tier
						}

						ware[pid] = obj

					}

				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var obj = {
					"stockMap": ware
				}
				

				var that = this
				
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

				this.axios({
					method: 'put',
					url: '/api/f/storages/'+this.warehouseId+'/outputins/' + id,

					data: ware

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data

					if(data == 0) {
						that.tableData[that.setIndex].statusName = "待确定"
					} else if(data == 1) {
						that.tableData[that.setIndex].statusName = "已确定"
					} else if(data == 2) {
						that.tableData[that.setIndex].statusName = "已取消"
					}

					that.tableData[that.setIndex].status = data
					that.$Message.success("操作成功")
					that.openPut = false
					that.openOut = false
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.openPut = false
					that.openOut = false
				})

			},

			//修改分页

			pageChange: function(index) {

				this.pageIndex = index
				this.gatData()

			},

			//打开添加成功弹出框

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '仓库第' + this.pageIndex + '页数据'
				});
			},

			gatData: function() {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				//请求产品
				this.axios({
					method: 'get',
					url: '/api/f/storages/'+this.warehouseId+'/outputins?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {

					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					for(var i = 0; i < data.length; i++) {
						var flow = data[i].flow

						if(flow == 0) {
							data[i].flowName = "入库"
						} else if(flow == 1) {
							data[i].flowName = "出库"
						}

						var type = data[i].type

						if(type == 0) {
							data[i].typeName = "出库"
						} else if(type == 1) {
							data[i].typeName = "采购入库"
						} else if(type == 2) {
							data[i].typeName = "盘盈入库"
						} else if(type == 3) {
							data[i].typeName = "订单入库"
						} else if(type == 4) {
							data[i].typeName = "手动入库"
						}

						var status = data[i].status

						if(status == 0) {
							data[i].statusName = "待确定"
						} else if(status == 1) {
							data[i].statusName = "已确定"
						} else if(status == 2) {
							data[i].statusName = "已取消"
						}

					}

					that.tableData = data
					that.pageTotal = dataAll.pagination.total
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})

			},

			pathchange: function() {
				this.warehouseId = this.$route.query.pathdata
				this.gatData()
			}

		},

		mounted: function() {
			
			axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.pathchange()

			var that = this

			var scH = document.body.scrollHeight || document.documentElement.scrollHeight
			this.tableHeight = (scH - 350)

			//请求库存信息
			this.axios({
				method: 'get',
				url: '/api/f/storages/products',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data
				var dataCache = []
				for(var i = 0; i < data.length; i++) {

					if(!dataCache[data[i].productId]) {
						dataCache[data[i].productId] = []
						dataCache[data[i].productId].push(data[i])
					} else {
						dataCache[data[i].productId].push(data[i])
					}

				}

				that.tableDataCach = dataCache

				that.loading = false

				console.log(data, that.tableDataCach)

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

				that.loading = false

			})

			//请求全部分类信息
			this.axios({
				method: 'get',
				url: '/api/f/productcategories',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data
				that.productCategory = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

			this.axios({
				method: 'get',
				url: '/api/f/depts/members',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data
				that.memberData = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})
			
			this.axios({
						method: 'get',
						url: '/api/f/storages'

					}).then(function(res) {

						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						var data = res.data.data
						/*var warehousecache = that.warehouseCache
						for(var i = 0; i < data.length; i++) {
							var id = data[i].id

							warehousecache[id] = data[i]
						}

						that.warehouseCache = warehousecache*/

						that.warehouseData = data

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');

					})


		},
		watch: {
			$route: "pathchange"
		}

	}
</script>