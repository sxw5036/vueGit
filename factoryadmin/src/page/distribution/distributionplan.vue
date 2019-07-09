<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>配送计划</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">
			<div class="active">
				<!---->
				<div class="ui_operateLeft" style="line-height: 32px;">
					<span class="operation_span">订单编号：</span>
					<input class="iv_input" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5\w]/g,'')" style="width: 200px;" v-model="searchObj.orderNo" placeholder="请输入订单编号..." />
					<span class="operation_span">入库方式：</span>
					<Select v-model="searchObj.way" style="width: 200px;">
						<Option value="0" key="0">系统自动入库</Option>
						<Option value="1" key="1">人工手动入库</Option>

					</Select>
					<span class="operation_span">选择状态：</span>
					<Select v-model="searchObj.status" style="width: 200px;">
						<Option value="0" key="0">待配送</Option>
						<Option value="1" key="1">部分配送</Option>
						<Option value="2" key="2">全部配送</Option>
					</Select>

					<Button icon="ios-search" @click="clicksearch">搜索</Button>
				</div>

				<div class="ui_operateRight">
					<Button @click="newData" class="p_lea" shape="circle" icon="ios-refresh"></Button>
					<!--<Button type="primary" @click="GetModelOpen">添加成品库订单</Button>-->

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

		<!---->
		<Modal title="成品库单详情" v-model="finishedDetails" width="1000">

			<div class="operation_box">

				<div class="active">
					<div class="ui_operateRight">
						<!--<Button shape="circle" @click="" icon="ios-add" style="font-size: 20px;"></Button>-->
						<Button type="info" @click="Afinisheditemopen"  v-show="packages>finishedLen">新建条目</Button>
						<Button type="primary" @click="distributionOpen">创建配送计划</Button>

					</div>
				</div>

			</div>

			<Table border height="300" :columns="finishedHead" :data="finishedData" ref="table"></Table>

			<div slot="footer" style="border: none;"></div>
		</Modal>
		<!---->
		<!--添加模态框 -s -->

		<Modal title="添加成品库订单" v-model="GetModel" width="1000">

			<div class="aw_order">

				<ul>
					<li class="item">
						<Form :model="objGetData" :label-width="80">
							<!--<FormItem label="仓库主键">
								<Input style="width: 300px;" v-model="objGetData.storageId" placeholder="请输入产品名称..."></Input>
							</FormItem>-->

							<FormItem label="选择订单">
								<Select id="p_lea" v-model="objGetData.orderId" @on-change="setirderid(objGetData.orderId)">
									<Option v-for="(item,index) in orderData" :value="item.id" :key="item.id">{{ item.customerName }} {{item.salesmanTel}}</Option>
								</Select>

							</FormItem>

							<!--<FormItem label="订单">
								<Input id="p_lea" v-model="objGetData.orderId" placeholder="请输入订单..."></Input>
							</FormItem>
-->
							<FormItem label="描述">
								<Input id="p_lea" v-model="objGetData.notes" placeholder="请输入描述..."></Input>
							</FormItem>

							<FormItem label="订单编号">
								<Input id="p_lea" disabled="disabled" v-model="objGetData.orderNo" placeholder="请输入订单编号..."></Input>
							</FormItem>

							<FormItem label="标记">
								<Input id="p_lea" v-model="objGetData.flag" placeholder="请输入标记..."></Input>
							</FormItem>

						</Form>
					</li>

					<li class="item af_center">

						<div class="item" v-for="(item,index) in objGetData.finishedStockItemDtos">
							<Form :model="objGetData" :label-width="120">
								<FormItem label="包装编号/条形码">
									<Input style="width: 300px;" v-model="item.barcode" placeholder="请输入条目包装编号/条形码..."></Input>
								</FormItem>

								<FormItem label="条目描述">
									<Input style="width: 300px;" v-model="item.notes" placeholder="请输入条目描述..."></Input>

								</FormItem>

								<FormItem label="条目类型">
									<Select v-model="item.type" id="p_lea">
										<Option value="0" key="0">衣柜</Option>
										<Option value="1" key="1">橱柜</Option>
										<Option value="2" key="2">门板</Option>
										<Option value="3" key="3">五金（含五金配件、厨具、烟机灶具、礼品等）</Option>
									</Select>
								</FormItem>

								<FormItem label="条目位置">
									<Input style="width: 300px;" v-model="item.location" placeholder="请输入条目位置..."></Input>
								</FormItem>
							</Form>

							<div class="delBut">

								<Button shape="circle" @click="delitem(index)" icon="ios-close" style="font-size: 20px;"></Button>
							</div>

						</div>

						<div class="butappned">
							<Button shape="circle" @click="additem" icon="ios-add" style="font-size: 20px;"></Button>
						</div>

					</li>

				</ul>

			</div>

			<div slot="footer">
				<Button type="primary" @click="GetModelIsok">确认添加</Button>
			</div>

		</Modal>

		<!--修改信息-s-->

		<Drawer v-model="SetModel" title="修改成品库单信息" width="500">

			<Form :model="SetGetData" :label-width="100">

				<FormItem label="成品库单描述">
					<Input v-model="SetGetData.Setnotes" placeholder="请输入成品库单描述..."></Input>
				</FormItem>

				<FormItem label="成品库单标记">
					<Input v-model="SetGetData.Setflag" placeholder="请输入成品库单标记..."></Input>
				</FormItem>
			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetModelIsok">确认修改</Button>
			</div>

		</Drawer>

		<!--修改成品库单下条目-->

		<Drawer v-model="SetFs" title="修改成品库单条目信息" width="500" @on-close='SetFscancel'>

			<Form :model="SetFsData" :label-width="100">

				<FormItem label="条目描述">
					<Input v-model="SetFsData.Setnotes" placeholder="请输入条目描述..."></Input>
				</FormItem>

				<FormItem label="条目位置">
					<Input v-model="SetFsData.Setlocation" placeholder="请输入条目位置..."></Input>
				</FormItem>
			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetFsbut">确认修改条目</Button>
			</div>

		</Drawer>

		<!--新增成品库单下条目-->
		<!-- @on-close='SetFscancel'-->
		<Drawer v-model="Afinishedshow" title="新增成品库单条目信息" width="500">

			<Form :model="Afinisheditem" :label-width="120">

				<FormItem label="包装编号/条形码">
					<Input v-model="Afinisheditem.barcode" placeholder="请输入条目包装编号/条形码..."></Input>
				</FormItem>

				<FormItem label="条目描述">
					<Input v-model="Afinisheditem.notes" placeholder="请输入条目描述..."></Input>

				</FormItem>

				<FormItem label="条目类型">
					<Select v-model="Afinisheditem.type">
						<Option value="0" key="0">衣柜</Option>
						<Option value="1" key="1">橱柜</Option>
						<Option value="2" key="2">门板</Option>
						<Option value="3" key="3">五金（含五金配件、厨具、烟机灶具、礼品等）</Option>
					</Select>
				</FormItem>

				<FormItem label="条目位置">
					<Input v-model="Afinisheditem.location" placeholder="请输入条目位置..."></Input>
				</FormItem>
			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="Afinished">确认添加条目</Button>
			</div>

		</Drawer>

		<!--创建配送计划-->

		<Modal title="创建配送计划" v-model="distributionModel" width="1000">
			<!--@on-cancel="cancelDistribution"-->

			<div class="aw_order">

				<ul>
					<li class="item" style="height: 500px;">
						<Form :model="objDistribution" :label-width="100">

							<FormItem label="选择订单">
								<Select id="p_lea" disabled="disabled" v-model="objDistribution.orderId" @on-change="distributionid">
									<Option v-for="(item,index) in orderDataAll" :value="item.id" :key="item.id">{{ item.customerName }} {{item.salesmanTel}}</Option>
								</Select>

							</FormItem>

							<FormItem label="订单编号">
								<Input id="p_lea" disabled="disabled" v-model="objDistribution.orderNo" placeholder="请输入订单编号..."></Input>
							</FormItem>

							<FormItem label="计划发货日期">
								<DatePicker type="date" format="yyyy-MM-dd" @on-change="planDate" placeholder="计划发货日期" v-model="objDistribution.plandate" id="p_lea"></DatePicker>
							</FormItem>

							<FormItem label="选择收货人">
								<RadioGroup @click="objDistribution" @on-change="consigneeType" v-model="objDistribution.consigneeType">
									<Radio label="0">经销商</Radio>
									<Radio label="1">客户</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="收货人">
								<Input id="p_lea" v-model="objDistribution.consignee" placeholder="请输入收货人.."></Input>
							</FormItem>

							<FormItem label="收货人电话">
								<Input id="p_lea" v-model="objDistribution.consigneeTel" placeholder="请输入收货人电话.."></Input>
							</FormItem>
							<!---->
							<FormItem label="收货人地址">
								<Input id="p_lea" v-model="objDistribution.address" placeholder="请输入收货人地址.."></Input>
							</FormItem>

							<!--	<FormItem label="标记">
								<Input id="p_lea" v-model="objDistribution.flag" placeholder="请输入标记..."></Input>
							</FormItem>-->

						</Form>
					</li>

					<li class="item af_center" style="height: 500px;">

						<Table border height="500" :columns="distributionHead" :data="distributionNd" ref="table"></Table>

					</li>

				</ul>

			</div>

			<div slot="footer">
				<Button type="primary" @click="pushDistribution">确认创建</Button>
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

					},

					{
						title: '描述',
						key: 'notes',
						width: 200
					},

					{
						title: '标记',
						key: 'flag',

					},

					{
						title: '包装总数',
						key: 'packages',
						width: 100
					},

					{
						title: '当前状态',

						align: 'center',

						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var texts = "待配送"
							} else if(status == 1) {
								var texts = "部分配送"
							} else if(status == 2) {
								var texts = "全部配送"
							}

							return h('div', texts)
						}

					},

					{
						title: '创键人',
						key: 'creatorName',

					},

					{
						title: '创建日期',
						key: 'created',

					},

					{
						title: '预计发货日期',
						key: 'estimatedDeliveryDate',

					},

					{
						title: '入库方式',
						key: 'way',

						render: (h, params) => {

							var way = params.row.way

							if(way == 0) {
								var texts = "系统自动入库"
							} else if(way == 1) {
								var texts = "人工手动入库"
							}

							return h('div', texts)
						}

					},

					{
						title: '操作',
						key: 'action',
						align: 'center',
						render: (h, params) => {
							return h('div', [

								h('Button', {
									props: {
										type: 'info',
										size: 'small',
										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.SetIndex = params.index

											this.finishedData = []

											this.finishedDetails = true
											var data = this.tableData[params.index].finishedStockItemDtos
											for(var i = 0; i < data.length; i++) {
												if(data[i].shipped == true && data[i].in == false) {
													data[i].ispick = true
													data[i].disabled = true
												} else if(data[i].shipped == true && data[i].in == true) {
													data[i].ispick = true
													data[i].disabled = true
												} else if(data[i].shipped == false && data[i].in == false) {
													data[i].ispick = false
													data[i].disabled = true
												} else if(data[i].shipped == false && data[i].in == true) {
													data[i].ispick = false
													data[i].disabled = false
												}

											}
											this.finishedData = data
											this.packages = this.tableData[params.index].packages
											this.finishedLen = data.length

											/*this.distributionOpen()*/
										}
									}
								}, '创建配送计划'),

							])

						}
					}
				],

				tableData: [], //表格数据
				GetModel: false, //添加模态框属性
				SetModel: false, //修改模态框属性
				objGetData: { //添加信息
					"storageId": "4hygnwnuysqo",
					"notes": "",
					"orderIndex": "",
					"orderId": "",
					"orderNo": "",
					"flag": "",
					"finishedStockItemDtos": [{
							"barcode": "",
							"type": "",
							"notes": "",
							"location": ""
						}

					]

				},

				SetGetData: { //修改信息
					"Setnotes": "",
					"Setflag": "",

				},

				SetFs: false,
				SetFsData: { //修改信息
					"Setnotes": "",
					"Setlocation": "",

				},

				Afinishedshow: false,
				Afinisheditem: {
					"barcode": "",
					"type": "",
					"notes": "",
					"location": ""
				},

				SetIndex: "", //点击编辑按钮时选中的位置
				SetIndexs: "",
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: false,

				orderData: [], //订单
				orderDataAll: [],
				orderDataCache: {}, //订单缓存
				logisticsData: [], //物流公司
				isSearch: false,
				searchObj: {
					"way": "",
					"orderNo": "",
					"status": "",

				},

				finishedDetails: false,
				finishedHead: [{
						title: '包装编号',
						key: 'barcode',
						fixed: 'left',
						width: 200,

					},

					{
						title: '描述',
						key: 'notes',
						width: 200
					},
					{
						title: '位置',
						key: 'location',
						width: 200
					},

					{
						title: '类型',
						key: 'type',
						width: 100,

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

					{
						title: '是否已创建配送计划',
						align: 'center',
						key: 'shipped',
						width: 100,

						render: (h, params) => {

							var shipped = params.row.shipped

							if(shipped == false) {
								var texts = "否"
							} else if(shipped == true) {
								var texts = "是"
							}
							return h('div', texts)
						}

					},

					{
						title: '是否已入库',
						align: 'center',
						key: 'in',
						width: 150,

						render: (h, params) => {

							var ins = params.row.in

							if(ins == false) {
								var texts = "否"
							} else if(ins == true) {
								var texts = "是"
							}
							return h('div', texts)
						}

					},

					{
						title: '入库时间',
						key: 'operated',
						width: 200,

					},
					{
						title: '发货时间',
						key: 'delivered',
						width: 200,
					},

					/*{
						title: '发货人',
						key: 'deliverer',
						width: 200,
					},*/
					{
						title: '出库人',
						key: 'delivererName',
						width: 200,
					},
					{
						title: '入库人',
						key: 'operatorName',
						width: 200,
					},

					{
						title: '创建人',
						key: 'creatorName',
						width: 200,
					},

					{
						title: '操作',
						key: 'action',
						fixed: 'right',
						width: 200,
						align: 'center',
						render: (h, params) => {

							var ins = params.row.in

							if(ins == false) {
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

												this.SetIndexs = params.index

												this.SetFs = true
												this.finishedDetails = false
												var data = this.finishedData[params.index]

												this.SetFsData.Setnotes = data.notes
												this.SetFsData.Setlocation = data.location

											}
										}
									}, '编辑'),

									h('Poptip', {
										props: {
											confirm: true,
											title: '您确定要删除这条数据吗?',
											transfer: true,
											disabled: !this.operation.delete
										},
										on: {
											'on-ok': () => {

												this.SetIndexs = params.index
												this.delFinishedItem(params.index)
											}
										}
									}, [
										h('div', [
											h('Button', {
												props: {
													type: 'error',
													size: 'small'
												}
											}, '删除')
										])
									]),

									h('Poptip', {
										props: {
											confirm: true,
											title: '确认入库?',
											transfer: true
										},
										on: {
											'on-ok': () => {

												this.SetIndexs = params.index
												this.Inwarehouse(params.index)

											}
										}
									}, [
										h('div', [
											h('Button', {
												props: {
													type: 'info',
													size: 'small',

												},

												style: {
													marginLeft: '5px'
												},
											}, '入库')
										])
									]),

								])
							} else if(ins == true) {

								return h('div', [
									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {

												this.SetIndexs = params.index

												this.SetFs = true
												this.finishedDetails = false
												var data = this.finishedData[params.index]

												this.SetFsData.Setnotes = data.notes
												this.SetFsData.Setlocation = data.location

											}
										}
									}, '编辑'),

									h('Poptip', {
										props: {
											confirm: true,
											title: '您确定要删除这条数据吗?',
											transfer: true
										},
										on: {
											'on-ok': () => {

												this.SetIndexs = params.index
												this.delFinishedItem(params.index)
											}
										}
									}, [
										h('div', [
											h('Button', {
												props: {
													type: 'error',
													size: 'small'
												}
											}, '删除')
										])
									]),

								])

							}

						}
					}

				],
				finishedData: [],

				//配送计划
				distributionModel: false,
				distributionNd: [],
				distributionHead: [

					{
						title: '选择',
						width: 60,
						fixed: 'left',
						render: (h, params) => {

							var disabled = params.row.disabled
							var ispick = params.row.ispick

							if(!disabled) {
								return h('div', [

									h('Checkbox', {

										props: {
											value: ispick,
											size: 'small',

										},

										on: {
											'input': (val) => {

												this.pickitem(val, params.index)

											}
										}
									}),
								])
							}

						}

					}, {
						title: '包装编号',
						key: 'barcode',
						fixed: 'left',
						width: 200,

					},

					{
						title: '描述',
						key: 'notes',
						width: 200
					},
					{
						title: '位置',
						key: 'location',
						width: 200
					},

					{
						title: '类型',
						key: 'type',
						width: 100,

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

					{
						title: '是否已创建配送计划',
						align: 'center',
						key: 'shipped',
						width: 100,

						render: (h, params) => {

							var shipped = params.row.shipped

							if(shipped == false) {
								var texts = "否"
							} else if(shipped == true) {
								var texts = "是"
							}
							return h('div', texts)
						}

					},

					{
						title: '是否已入库',
						align: 'center',
						key: 'in',
						width: 150,

						render: (h, params) => {

							var ins = params.row.in

							if(ins == false) {
								var texts = "否"
							} else if(ins == true) {
								var texts = "是"
							}
							return h('div', texts)
						}

					},

					{
						title: '入库时间',
						key: 'operated',
						width: 200,

					},

					{
						title: '入库人',
						key: 'operatorName',
						width: 200,
					},

					{
						title: '创建人',
						key: 'creatorName',
						width: 200,
					},
				],

				objDistribution: { //添加信息
					"orderId": "",
					"orderIndex": "",
					/*"orderNo": "",
					"no": "",*/
					"finishedStockId": "",
					"planDate": "",
					"plandate": "",

					/*"actualDate": "",*/
					"consigneeType": "0",
					"consignee": "",
					"consigneeTel": "",
					"address": "",
					/*"logisticsCompanyId": "",
					"logisticsNo": "",*/
					"flag": "",
					"dispatchBillItemDtoList": []

				},
				
				packages: 0,
				finishedLen: 0,
				
				operation:{}

			};
		},

		methods: {

			pageChange: function(index) {
				this.pageIndex = index
				/*this.getDatas()*/
				if(this.isSearch = true) {
					this.searchData()
				} else {
					this.getDatas()
				}

			},

			GetModelOpen: function() {
				this.GetModel = true
				this.objGetData = {
					"storageId": "4hygnwnuysqo",
					"notes": "",
					"orderId": "",
					"orderNo": "",
					"flag": "",
					"finishedStockItemDtos": [{
							"barcode": "",
							"type": "",
							"notes": "",
							"location": ""
						}

					]
				}
			},

			//选择订单编号和订单id

			setirderid: function(orid) {

				console.log(orid)
				console.log(this.orderData)

				for(var i = 0; i < this.orderData.length; i++) {

					if(orid == this.orderData[i].id) {
						this.objGetData.orderNo = this.orderData[i].no
					}

				}

				/*this.objGetData.orderId = this.orderData[val].id
				 */
			},

			//添加信息api	
			GetModelIsok: function() {

				var objgetdata = this.objGetData

				var orderid = objgetdata.orderId
				var orderNo = objgetdata.orderNo

				if(orderid == "" || orderid == null) {

					this.$Message.error('订单不能为空！');
					return false;
				} else if(orderNo == "" || orderNo == null) {
					this.$Message.error('订单编号不能为空！');
					return false;
				} else {
					var arryData = this.objGetData.finishedStockItemDtos
					for(var i = 0; i < arryData.length; i++) {
						var arrydata = arryData[i]
						var barcode = arrydata.barcode
						var type = arrydata.type
						var locations = arrydata.location

						console.log(arrydata)

						if(barcode == "" || barcode == null || barcode.trim().length == 0) {
							this.$Message.error('第' + (i + 1) + '个条目编号/条形码不能为空！');
							return false;
						} else if(type == "" || type == null) {
							this.$Message.error('第' + (i + 1) + '个条目类型不能为空！');
							return false;
						} else if(locations == "" || locations == null || locations.trim().length == 0) {
							this.$Message.error('第' + (i + 1) + '个条目位置不能为空！');
							return false;
						}

					}

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					
					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
					
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/storages/finisheds',

						data: objgetdata

					}).then(function(res) {
						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						that.$Message.success("添加成功")

						that.getDatas()

						that.GetModel = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.GetModel = false
					})

				}

			},

			//打开修改部门信息模态框

			SetModelOpen: function(index) {

				this.SetIndex = index
				var data = this.tableData[index]
				this.SetGetData.Setnotes = data.notes
				this.SetGetData.Setflag = data.flag

			},

			//修改信息api

			SetModelIsok: function() {

				var id = this.tableData[this.SetIndex].id
				var setGetData = this.SetGetData

				var notes = setGetData.Setnotes
				var flag = setGetData.Setflag

				if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('成品库单描述不能为空！');
					return false;
				} else if(flag == "" || flag == null || flag.trim().length == 0) {

					this.$Message.error('成品库单标记不能为空！！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					
					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/storages/finisheds/' + id,

						data: {
							"notes": notes,
							"flag": flag,
						}

					}).then(function(res) {
						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						var data = res.data.data
						that.tableData[that.SetIndex].notes = data.notes
						that.tableData[that.SetIndex].flag = data.flag
						that.$Message.success("修改成功")
						setTimeout(msg, 100);
						that.SetModel = false
					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.SetModel = false

					})

				}

			},

			//删除单个成品库单
			delTabData: function(index) {

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
					url: '/api/f/storages/finisheds/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.tableData.splice(index, 1)
					
					that.$Message.success("删除成功")

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//修改条目信息

			SetFsbut: function() {
				var id = this.tableData[this.SetIndex].id
				
				var storageId = this.tableData[this.SetIndex].storageId
				var itemid = this.tableData[this.SetIndex].finishedStockItemDtos[this.SetIndexs].id

				var setfsdata = this.SetFsData

				var notes = setfsdata.Setnotes
				var locations = setfsdata.Setlocation

				if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('成品库单条目描述不能为空！');
					return false;
				} else if(locations == "" || locations == null || locations.trim().length == 0) {

					this.$Message.error('成品库单条目位置不能为空！！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					
					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
					
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/storages/finisheds/'+storageId+'/' + id + '/items/' + itemid,

						data: {
							"notes": notes,
							"location": locations,
						}

					}).then(function(res) {
						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						var data = res.data.data
						that.tableData[that.SetIndex].finishedStockItemDtos[that.SetIndexs].notes = data.notes
						that.tableData[that.SetIndex].finishedStockItemDtos[that.SetIndexs].location = data.location

						that.finishedData[that.SetIndexs].notes = data.notes
						that.finishedData[that.SetIndexs].location = data.location

						that.$Message.success("修改成功")
						setTimeout(msg, 100);
						that.SetFs = false
						that.finishedDetails = true
					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

				}
			},

			SetFscancel: function() {
				this.SetFs = false
				this.finishedDetails = true

			},

			//删除单个成品库单条目信息

			delFinishedItem: function(index) {

				var id = this.tableData[this.SetIndex].id
                var storageId = this.tableData[this.SetIndex].storageId
				var itemid = this.tableData[this.SetIndex].finishedStockItemDtos[this.SetIndexs].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-delete"
				this.axios({
					method: 'delete',
					url: '/api/f/storages/finisheds/'+storageId+'/' + id + '/items/' + itemid,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.tableData[that.SetIndex].finishedStockItemDtos.splice(index, 1)
					/*that.finishedData.splice(index, 1)*/
					that.finishedLen--
					that.$Message.success("删除成功")

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			additem: function() {

				var obj = {
					"barcode": "",
					"type": "",
					"notes": "",
					"location": ""
				}

				this.objGetData.finishedStockItemDtos.push(obj)

			},

			delitem: function(index) {

				if(this.objGetData.finishedStockItemDtos.length == 1) {
					this.$Message.error('条目最少要有一个');
				} else {
					this.objGetData.finishedStockItemDtos.splice(index, 1)
				}

			},

			//打卡添加成品库单下条目添加窗口

			Afinisheditemopen: function() {
				this.Afinishedshow = true
				this.finishedDetails = false

				this.Afinisheditem = {
					"barcode": "",
					"type": "",
					"notes": "",
					"location": ""
				}

			},

			//确认新增成品库条目

			Afinished: function() {

				var id = this.tableData[this.SetIndex].id
              
              var storageId=this.tableData[this.SetIndex].storageId
				var afdata = this.Afinisheditem
				var barcode = afdata.barcode
				var type = afdata.type
				var notes = afdata.notes
				var locations = afdata.location

				if(barcode == "" || barcode == null || barcode.trim().length == 0) {
					this.$Message.error('新增条目包装编号/条形码不能为空');
					return false;
				} else if(type == "" || type == null) {
					this.$Message.error('新增条目类型能为空');
					return false;
				} else {
					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					
					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

					this.axios({
						method: 'post',
						url: '/api/f/storages/finisheds/'+storageId+'/' + id,

						data: {
							"barcode": barcode,
							"type": type,
							"notes": notes,
							"location": locations

						}

					}).then(function(res) {

						var verify = [{
								"name": "barcode",
								"note": "包装编号/条形码"
							},
							{
								"name": "type",
								"note": "包装编号/条形码"
							},
							{
								"name": "notes",
								"note": "条目描述 "
							},
							{
								"name": "location",
								"note": "条目位置"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data
						var status = data.status

						data.disabled = true

						that.tableData[that.SetIndex].finishedStockItemDtos.unshift(data)
						/*that.finishedData.unshift(data)*/
						that.finishedLen++
						that.$Message.success("添加成功")

						that.Afinishedshow = false
						that.finishedDetails = true

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.Afinishedshow = false
						that.finishedDetails = true
					})

				}

			},

			//产品库单下单个条目入库

			Inwarehouse: function(index) {
				var id = this.tableData[this.SetIndex].id

				var warehouseId = this.tableData[this.SetIndex].storageId

				var itemid = this.tableData[this.SetIndex].finishedStockItemDtos[this.SetIndexs].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
				//                    /
				this.axios({
					method: 'put',
					url: '/api/f/storages/finisheds/' + warehouseId + '/' + id + '/warehousing/' + itemid,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.tableData[that.SetIndex].finishedStockItemDtos[that.SetIndexs].in = data.in
					that.tableData[that.SetIndex].finishedStockItemDtos[that.SetIndexs].operated = data.operated

					that.finishedData[that.SetIndexs].in = data.in
					that.finishedData[that.SetIndexs].operated = data.operated
					that.finishedData[that.SetIndexs].disabled = false

					that.$Message.success("入库成功")
					setTimeout(msg, 100);
					that.SetFs = false
					that.finishedDetails = true
				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},

			//检索信息

			clicksearch: function() {
				var searchobj = this.searchObj

				var no = searchobj.orderNo
				var way = searchobj.way
				var status = searchobj.status

				if(no.trim().length == 0 && way == "" && status == "") {
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

				var No = searchobj.orderNo
				var way = searchobj.way
				var status = searchobj.status

				var pathurl = ""

				if(No != "" && No != null && No.length != 0) {
					pathurl += 'orderNo=' + No + "&"
				}

				if(way != "" && way != null && way.length != 0) {
					pathurl += 'way=' + way + "&"
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

				this.axios({
					method: 'get',
					url: '/api/f/storages/all/finisheds?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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

			//配送计划\

			//打开配送计划弹框

			distributionOpen: function() {

				this.distributionNd = []

				this.objDistribution = { //添加信息
					"orderId": "",
					"orderIndex": "",
					/*"orderNo": "",
					"no": "",*/
					"finishedStockId": "",
					"planDate": "",

					/*"actualDate": "",*/
					"consigneeType": "0",
					"consignee": "",
					"consigneeTel": "",
					"address": "",
					/*"logisticsCompanyId": "",
					"logisticsNo": "",*/
					"flag": "",
					"dispatchBillItemDtoList": []

				}

				this.objDistribution.orderId = this.tableData[this.SetIndex].orderId
				this.objDistribution.orderNo = this.tableData[this.SetIndex].orderNo

				var orderdatacache = this.orderDataCache[this.objDistribution.orderId]

				var fdata = this.finishedData
				var shipped = 0
				for(var i = 0; i < fdata.length; i++) {

					if(fdata[i].shipped == false) {
						shipped++
					}

				}

				if(shipped == 0) {
					this.$Message.success('已全部创建配送计划！');
					return false;
				}

				/*
				console.log(this.objDistribution.orderId)
				
				
				*/

				this.objDistribution.consignee = orderdatacache.dealerName
				this.objDistribution.consigneeTel = orderdatacache.dealerTel
				this.objDistribution.address = orderdatacache.dealerAddress

				this.objDistribution.finishedStockId = this.tableData[this.SetIndex].id

				this.distributionModel = true
				this.finishedDetails = false

				this.distributionNd = fdata
			},

			//取消配送计划弹框

			cancelDistribution: function() {
				this.distributionModel = false
				this.finishedDetails = true
			},

			//选择配送订单并绑定订单编号

			distributionid: function(val) {
				this.objDistribution.orderId = this.orderData[val].id
				this.objDistribution.orderNo = this.orderData[val].no
				this.objDistribution.consignee = this.orderData[val].customerName
				this.objDistribution.consigneeTel = this.orderData[val].salesmanTel

			},

			consigneeType: function() {

				var type = this.objDistribution.consigneeType
				var orderdatacache = this.orderDataCache[this.objDistribution.orderId]
				if(type == 0) {
					this.objDistribution.consignee = orderdatacache.dealerName
					this.objDistribution.consigneeTel = orderdatacache.dealerTel
					this.objDistribution.address = orderdatacache.dealerAddress
				} else if(type == 1) {
					this.objDistribution.consignee = orderdatacache.customerName
					this.objDistribution.consigneeTel = orderdatacache.customerTel
					this.objDistribution.address = orderdatacache.address
				}

			},

			// 配送计划选择配送成品库单下条目

			pickitem: function(val, index) {

				var arrydata = this.objDistribution.dispatchBillItemDtoList
				var pickdata = this.distributionNd[index]
				if(val == true) {

					var id = pickdata.id

					var obj = {
						finishedStockItemId: pickdata.id,
						status: 0,
					}

					arrydata.push(obj)
					/**/

				} else {

					var id = pickdata.id

					for(var i = 0; i < arrydata.length; i++) {

						if(id == arrydata[i].finishedStockItemId) {
							arrydata.splice(i, 1)
						}

					}

				}

				this.objDistribution.dispatchBillItemDtoList = arrydata

			},

			//选择配送单预计配送时间

			planDate: function(val) {
				this.objDistribution.plandate = val
			},

			//确认创建配送单

			pushDistribution: function() {

				var objdistribution = this.objDistribution

				var orderid = objdistribution.orderId

				var consignee = objdistribution.consignee
				var consigneetel = objdistribution.consigneeTel
				var address = objdistribution.address
				var plandate = objdistribution.plandate

				var dispatchBillItemDtolist = objdistribution.dispatchBillItemDtoList

				if(orderid == "" || orderid == null) {
					this.$Message.error('请选择订单！');
					return false;
				} else if(consignee == "" || consignee == null || consignee.trim().length == 0) {
					this.$Message.error('请输入收货人姓名！');
					return false;
				} else if(consigneetel == "" || consigneetel == null || consigneetel.trim().length == 0) {
					this.$Message.error('请输入收货人电话！');
					return false;
				} else if(address == "" || address == null || address.trim().length == 0) {
					this.$Message.error('请输入收货人地址！');
					return false;
				} else if(plandate == "" || plandate == null) {
					this.$Message.error('请输入预计发货日期！');
					return false;
				} else if(dispatchBillItemDtolist == null || dispatchBillItemDtolist.length == 0) {
					this.$Message.error('请选择配送成品！');
					return false;
				} else {

					objdistribution.planDate = plandate + " 00:00:00"

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});
					var that = this
					
					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
					//请求配送单
					this.axios({
						method: 'post',
						url: 'api/f/dispatchs',
						data: objdistribution,

					}).then(function(res) {
						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						var data = res.data.data
						that.$Message.success("请求成功，配送单已进入到配送单管理")

						that.newData()

						that.distributionModel = false

					}).catch(function(err) {
						setTimeout(msg, 100);
						that.$Message.error('出错了，请稍后重试！');

					})
				}

			},

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {
						"way": "",
						"orderNo": "",
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

                axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

				this.axios({
					method: 'get',
					url: '/api/f/storages/all/finisheds?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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

			var that = this

			//查询成品库所用订单

			this.axios({
				method: 'get',
				url: '/api/f/customorders/finishedorders',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var orderDatacache = {}
				var data = res.data.data

				for(var i = 0; i < data.length; i++) {

					orderDatacache[data[i].id] = data[i]
				}

				that.orderData = data
				/*that.orderDataCache = orderDatacache*/

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

			//查询成品库所用订单

			this.axios({
				method: 'get',
				url: '/api/f/customorders/finishedorders/all',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var orderDatacache = {}
				var data = res.data.data

				for(var i = 0; i < data.length; i++) {

					orderDatacache[data[i].id] = data[i]
				}

				that.orderDataAll = data
				that.orderDataCache = orderDatacache

				
			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})
		}

	}
</script>

<style>
	.Drawer_op {
		margin-left: 80px;
	}
	
	#p_lea {
		width: 300px;
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