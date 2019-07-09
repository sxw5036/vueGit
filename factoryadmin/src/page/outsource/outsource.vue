<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>外协订单</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div>
			<Row>
				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>新增外协数量</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">32</p>
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
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>超期外协数量</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">32</p>
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
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>完成完成数量</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">32</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>

				<Col span="9">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center border">
							<h3 class="head">数据变动信息列表</h3>
							<div class="panel_con">
								<div class="head-statement-4">
									<ul>
										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加外协</p>
											<small class="Time">13：30</small>
										</li>
										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加外协</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加外协</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加外协</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加外协</p>
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
						<!--<span class="operation_span">订单编号：</span>
					<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.customOrderNo" placeholder="请输入订单编号..." />
					<span class="operation_span">拆单编号：</span>
					<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.no" placeholder="请输入拆单编号..." />

					<span class="operation_span">是否付款：</span>
					<Select v-model="searchObj.pay" style="width:200px;margin:0 5px;">
						<Option value="0">未付款</Option>
						<Option value="1">已付款</Option>
					</Select>

					<span class="operation_span">外协状态：</span>
					<Select v-model="searchObj.status" style="width:200px;margin:0 5px;">
						<Option value="0">未开始</Option>
						<Option value="1">生产中</Option>
						<Option value="2">已完成</Option>
					</Select>

				
					<Button icon="ios-search" @click="clicksearch">搜索</Button>
					<Button @click="newData" class="p_lea" shape="circle" icon="ios-refresh"></Button>-->

						<ul class="tab">
							<li class="tab_item">
								<div class="lable">订单编号</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.customOrderNo" placeholder="请输入订单编号..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">拆单编号</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.no" placeholder="请输入拆单编号..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">是否付款</div>
								<div class="form_nav">
									<Select v-model="searchObj.pay" style="width:200px;margin:0 5px;">
										<Option value="0">未付款</Option>
										<Option value="1">已付款</Option>
									</Select>

								</div>
							</li>

							<li class="tab_item">
								<div class="lable">外协状态</div>
								<div class="form_nav">
									<Select v-model="searchObj.status" style="width:200px;margin:0 5px;">
										<Option value="0">未开始</Option>
										<Option value="1">生产中</Option>
										<Option value="2">已完成</Option>
									</Select>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button icon="ios-search" type="primary" @click="clicksearch">搜索</Button>
									<Button icon="ios-refresh" @click="newData" type="primary">重置</Button>
								</div>

					</li>

					</ul>
				</div>

				<div class="ui_operateRight">

					<ul class="tab">
						<li class="tab_item">
							<div class="lable"></div>
							<div class="form_nav">
								<!--<Button type="primary" @click="batchbegin">批量开始</Button>-->
								<Button type="primary" >导入</Button>
								<Button type="primary" >导出</Button>
								<Button type="primary" @click="newly">新建外协</Button>
							</div>
						</li>

					</ul>

				</div>
			</div>

		</div>

		<div>

			<Table border :loading="loading" :columns="tableHeader" @on-select="pickselect" @on-select-all="pickselectAll" @on-select-all-cancel="cancelselectAll" @on-select-cancel="cancelselect" :data="tableData" ref="table"></Table>
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

	<!--外协详情-s-->

	<Drawer v-model="outsourceModel" title="外协详情" width="500">

		<Form :model="outsourceMsg" :label-width="100">

			<FormItem label="订单编号">
				<p>{{outsourceMsg.customOrderNo}}</p>
			</FormItem>

			<FormItem label="拆单编号">
				<p>{{outsourceMsg.no}}</p>
			</FormItem>

			<FormItem label="外协状态">
				<p v-show="outsourceMsg.state==0">未开始</p>
				<p v-show="outsourceMsg.state==1">生产中</p>
				<p v-show="outsourceMsg.state==2">已完成</p>
			</FormItem>

			<FormItem label="生产方式">
				<p v-show="outsourceMsg.way==0">自产</p>
				<p v-show="outsourceMsg.way==1">外协</p>
				<p v-show="outsourceMsg.way==2">特供实木</p>
			</FormItem>

			<FormItem label="拆单类型">
				<p v-show="outsourceMsg.type==0">柜体</p>
				<p v-show="outsourceMsg.type==1">门板</p>
				<p v-show="outsourceMsg.type==2">五金</p>
			</FormItem>

			<FormItem label="是否付款">
				<p v-show="outsourceMsg.pay==false">否</p>
				<p v-show="outsourceMsg.pay==true">是</p>
			</FormItem>

			<FormItem label="外协金额">
				<p>{{outsourceMsg. amount}}</p>
			</FormItem>

			<FormItem label="外协厂家名称">
				<p>{{outsourceMsg. coordinationName}}</p>
			</FormItem>

			<FormItem label="外协厂家账户">
				<p>{{outsourceMsg.coordinationAccount}}</p>
			</FormItem>

			<FormItem label="外协厂家开户行">
				<p>{{outsourceMsg.coordinationBank}}</p>
			</FormItem>

			<FormItem label="附件">
				<div class="pl">
					<div class="demo-upload-list" v-for="(item,index) in outsourceMsg.uploadFiles">

						<template>
							<img :src="item.path">
							<div class="demo-upload-list-cover">
								<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>

							</div>
						</template>

					</div>

				</div>
			</FormItem>

		</Form>

	</Drawer>

	<!--外协详情-e-->
	<!--开始生产确认-->
	<Modal v-model="beginproduction" width="360">
		<p slot="header" style="color:cornflowerblue;text-align:center">
			<Icon type="ios-information-circle"></Icon>
			<span>操作提示</span>
		</p>
		<div style="text-align:center">

			<p>正在批量执行{{pickselectdata.length}}个外协订单开始生产操作？</p>
			<p>是否继续</p>

		</div>
		<div slot="footer">
			<Button type="primary" size="large" long @click="surebegin">确认</Button>
		</div>
	</Modal>

	<!--开始生产确认-end-->

	<!--确认生产完成-->
	<Modal v-model="accomplishproduction" width="360">
		<p slot="header" style="color:cornflowerblue;text-align:center">
			<Icon type="ios-information-circle"></Icon>
			<span>操作提示</span>
		</p>
		<div style="text-align:center">

			<p>正在执行确认外协订单完成生产操作？</p>
			<p>是否继续</p>

		</div>
		<div slot="footer">
			<Button type="primary" size="large" long @click="sureends">确认</Button>
		</div>
	</Modal>

	<!--确认生产完成-end-->

	<Modal title="查看大图" v-model="visible">
		<div class="show_img">
			<img :src="imgName" style="width: 100%">
		</div>

		<div slot="footer" style="border: none;"></div>

	</Modal>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [

					/*{width: 60,
						render: (h, params) => {

							var data = params.row

							return h('div', [

								h('Checkbox', {

									props: {
										value: false,
										size: 'small',

									},

									style: {
										marginRight: '5px',
										display: (data.state == 0&&data.pay==true) ? "block" : "none"
									},

									on: {
										'input': (val) => {

											this.pickselect(val, params.index)

										}
									}
								}),
							])
						},

						
					},*/

					{
						type: 'selection',
						width: 60,
						align: 'center',
						fixed: "left",

					}, {
						title: '拆单编号',
						key: "no",
						width: 200,

					},

					{
						title: '订单编号',
						key: "customOrderNo",
						width: 200,

					},

					{
						title: '状态',
						key: 'state',
						width: 200,

						render: (h, params) => {

							var state = params.row.state

							if(state == 0) {
								var text = "未开始"
							} else if(state == 1) {
								var text = "生产中"
							} else if(state == 2) {
								var text = "已完成"
							}
							return h('div', text)
						}

					},

					{
						title: '拆单类型 ',
						key: 'type',
						width: 200,
						render: (h, params) => {

							var type = params.row.type

							if(type == 0) {
								var text = "柜体"
							} else if(type == 1) {
								var text = "门板"
							} else if(type == 2) {
								var text = "五金"
							}
							return h('div', text)
						}
					},

					{
						title: '生产方式 ',
						key: 'way ',
						width: 200,
						render: (h, params) => {

							var way = params.row.way

							if(way == 0) {
								var text = "自产"
							} else if(way == 1) {
								var text = "外协"
							} else if(way == 2) {
								var text = "特供实木"
							}
							return h('div', text)
						}
					},

					{
						title: '是否付款 ',
						key: 'pay',
						width: 200,
						render: (h, params) => {

							var pay = params.row.pay

							if(pay == false) {
								var text = "未付款"
							} else if(pay == true) {
								var text = "已付款"
							}
							return h('div', text)
						}
					},

					{
						title: '外协金额',
						key: 'amount',
						width: 150,
						render: (h, params) => {
							var amount = params.row.amount + '';

							amount = (amount.indexOf('.') == -1) ? amount + ".00" : amount

							return h('div', {
								style: {
									textAlign: 'right',
									width: '100%'
								},

							}, amount)
						}
					},

					{
						title: '外协厂家名称',
						key: 'coordinationName',
						width: 150,
					},

					{
						title: '外协厂家开户行',
						key: 'coordinationBank',
						width: 150,
					},
					{
						title: '外协厂家账户',
						key: 'coordinationAccount',
						width: 150,
					},

					{
						title: '完成时间',
						key: 'completionTime',
						width: 150,
					},

					{
						title: '修改人',
						key: 'updateUser',
						width: 150,
					},

					{
						title: '修改时间',
						key: 'updateUserName',
						width: 150,
					},

					{
						title: '创建人',
						key: 'creatorName',
						width: 150,
					},

					{
						title: '创建时间',
						key: 'created',
						width: 150,
					},

					{
						title: '操作',
						key: 'action',
						width: 120,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							var state = params.row.state
							var pay = params.row.pay

							
								return h('div', [

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											//disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px',
											//display: (this.operation.edit == true) ? "link-block" : "none"
										},
										on: {
											click: () => {
												this.$emit('openWindow', ('outsourcedetails'), ('外协详情'), ('4-3'), ('outsourcedetails'), ('outsourcedetails'),(this.tableData[params.index].id))
											}
										}
									}, '详情'),

								]);
						
							/*else if(state == 0 && pay == 0) {
								return h('div', [

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											//disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px',
											//display: (this.operation.edit == true) ? "link-block" : "none"
										},
										on: {
											click: () => {
												this.outsourceModel = true;
												this.outsourceMsg = this.tableData[params.index]

											}
										}
									}, '详情'),

								]);
							}
							else if(state == 1) {
								return h('div', [

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											//disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px',
											//display: (this.operation.edit == true) ? "link-block" : "none"
										},
										on: {
											click: () => {

												//												this.outsourceModel = true;
												//												this.outsourceMsg = this.tableData[params.index]
												this.$router.push({
													name: 'outsourcedetails',
													query: {
														id: this.tableData[params.index].id
													}
												})
											}
										}
									}, '详情'),

									h('Button', {
										props: {
											type: 'primary',
											size: 'small',
											//disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px',
											//display: (this.operation.edit == true) ? "link-block" : "none"
										},
										on: {
											click: () => {
												this.SetIndex = params.index
												this.accomplishproduction = true
											}
										}
									}, '已完成'),

								]);
							} else if(state == 2) {
								return h('div', [

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											//disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px',
											//display: (this.operation.edit == true) ? "link-block" : "none"
										},
										on: {
											click: () => {
												
												this.$emit('openWindow', ('outsourcedetails'), ('外协详情'), ('4-3'), ('outsourcedetails'), ('outsourcedetails'),(this.tableData[params.index].id))

												//												this.outsourceModel = true;
												//												this.outsourceMsg = this.tableData[params.index]
//												this.$router.push({
//													name: '',
//													query: {
//														id: this.tableData[params.index].id
//													}
//												})
											}
										}
									}, '详情'),

								]);
							}*/

						}

					}

				],

				tableData: [], //表格数据

				outsourceModel: false,
				outsourceMsg: {},
				accomplishproduction: false,
				beginproduction: false,
				pickselectdata: [],
				pickselectdataCache: {},
				awaitcancel: {},

				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

				imgName: '',
				visible: false,

				isSearch: false,
				searchObj: {
					"customOrderNo": "",
					"status": "",
					"no": "",
					"pay": "",

				},

				operation: {}

			};
		},

		methods: {

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},

			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch == true) {
					this.searchData()
				} else {
					this.getDatas()
				}

			},
			
			newly:function  () {
				this.$emit('openWindow', ('outsourceNewly'), ('新建外协'), ('4-'), ('outsourceNewly'), ('outsourceNewly'))
			},

			//检索信息

			clicksearch: function() {
				var searchobj = this.searchObj

				var no = searchobj.no;
				var customOrderNo = searchobj.customOrderNo;
				var pay = searchobj.pay;
				var status = searchobj.status

				if(no.trim().length == 0 && customOrderNo.trim().length == 0 && pay == "" && status == "") {
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

				var no = searchobj.no;
				var customOrderNo = searchobj.customOrderNo;
				var pay = searchobj.pay;
				var status = searchobj.status

				var pathurl = ""

				if(no != "" && no != null && no.trim().length != 0) {
					pathurl += 'no=' + no + "&"
				}

				if(customOrderNo != "" && customOrderNo != null && customOrderNo.trim().length != 0) {
					pathurl += 'orderNo=' + customOrderNo + "&"
				}

				if(status != "" && status != null) {
					pathurl += 'state=' + status + "&"
				}
				if(pay != "" && pay != null) {
					pathurl += 'pay=' + pay + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.loading = true

				var that = this
				/*' + this.pathstatus + pathurl + '*/
				this.axios({
					method: 'get',
					url: '/api/f/customorders/produces/plans?way=1&' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					that.pickselectdata = [];
					that.tableData = []

					var pickselectdataCache = {}
					for(var n = 0; n < that.pickselectdata.length; n++) {

						var row = that.pickselectdata[i]

						pickselectdataCache[row.id] = data

					}

					for(var i = 0; i < data.length; i++) {

						that.tableData.push(data[i])
						that.tableData[i]._disabled = true

						if(data[i].state == 0 && data[i].pay == true) {
							that.tableData[i]._disabled = false
						}

					}

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
				this.pickselectdata = []
				this.isSearch = false
				this.searchObj = {
						"customOrderNo": "",
						"status": "",
						"no": "",
						"pay": "",
					},
					this.pageIndex = 1
				this.getDatas()

			},

			//选择

			pickselect: function(selection, row) {
				this.awaitcancel[this.pageIndex] = selection
				this.pickselectdata.push(row);
				this.getpickselectdataCache()

			},

			pickselectAll: function(selection) {

				this.awaitcancel[this.pageIndex] = selection
				var data = selection

				for(var i = 0; i < data.length; i++) {

					var id = data[i].id;

					if(!this.pickselectdataCache[id] == true) {

						this.pickselectdata.push(data[i])
					}

				}

				this.getpickselectdataCache()

			},

			cancelselectAll: function(selection, row) {

				var data = this.awaitcancel[this.pageIndex]

				for(var i = 0; i < data.length; i++) {

					var id = data[i].id;

					for(var n = 0; n < this.pickselectdata.length; n++) {

						if(id == this.pickselectdata[n].id) {
							this.pickselectdata.splice(n, 1)
						}

					}

				}

				this.getpickselectdataCache()

			},

			cancelselect: function(selection, row) {

				var data = row

				for(var i = 0; i < this.pickselectdata.length; i++) {
					if(data.id == this.pickselectdata[i].id) {
						this.pickselectdata.splice(i, 1)

					}
				}

				this.getpickselectdataCache()

			},

			getpickselectdataCache: function() {

				this.pickselectdataCache = {};
				var pickselectdatacache = this.pickselectdataCache;

				for(var i = 0; i < this.pickselectdata.length; i++) {
					pickselectdatacache[this.pickselectdata[i].id] = this.pickselectdata[i]
				}

				this.pickselectdataCache = pickselectdatacache

			},

			batchbegin: function() {
				var pickselectdata = this.pickselectdata
				var newpickselectdata = []

				/*for(var i = 0; i < pickselectdata.length; i++) {
					if(pickselectdata[i].state == 0&&pickselectdata[i].pay==true) {
						newpickselectdata.push(pickselectdata[i].id)
					}
				}
*/
				if(pickselectdata.length == 0) {
					this.$Message.error('批量生产数量不能为空！');
					return false;
				}

				/*this.pickselectdata = [];*/
				/*this.pickselectdata = newpickselectdata*/
				this.beginproduction = true
			},

			surebegin: function() {
				var pickselectdata = this.pickselectdata
				var newpickselectdata = []

				for(var i = 0; i < pickselectdata.length; i++) {
					if(pickselectdata[i].state == 0 && pickselectdata[i].pay == true) {
						newpickselectdata.push(pickselectdata[i].id)
					}
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				/*' + this.pathstatus + '*/
				this.axios({
					method: 'put',
					url: '/api/f/customorders/produces/starts',
					data: newpickselectdata

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.$Message.success("操作成功")
					that.beginproduction = false
					that.tableData = []
					that.pickselectdata = []
					that.getDatas()
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

					that.beginproduction = false

				})
			},

			sureends: function() {

				var id = this.tableData[this.SetIndex].id
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'put',
					url: '/api/f/customorders/produces/coordinations/' + id + '/ends',

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.$Message.success("操作成功")
					that.tableData[that.SetIndex].state = 2
					that.accomplishproduction = false
					that.newData()

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

					that.accomplishproduction = false

				})
			},

			getDatas: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				/*' + this.pathstatus + '*/
				this.axios({
					method: 'get',
					url: '/api/f/customorders/produces/plans?way=1&pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data
					that.pickselectdata = [];
					that.tableData = []

					var pickselectdataCache = {}
					for(var n = 0; n < that.pickselectdata.length; n++) {

						var row = that.pickselectdata[i]

						pickselectdataCache[row.id] = data

					}

					for(var i = 0; i < data.length; i++) {

						that.tableData.push(data[i])
						that.tableData[i]._disabled = true

						if(data[i].state == 0 && data[i].pay == true) {
							that.tableData[i]._disabled = false
						}

						if(!!that.pickselectdataCache[data[i].id] == true) {

							that.tableData[i]._checked = true
						}

					}

					that.pageIndextotal = dataAll.pagination.total

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			pathchange: function() {

				var keydata = this.$route.query.key
				var operation = this.operation
				Isjurisdiction.user_jurisdiction(keydata, operation)

				this.getDatas()

			},

		},

		mounted: function() {

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.getDatas()

		},

		watch: {
			$route: "pathchange"
		}

	}
</script>

<style scoped="scoped">
	.Drawer_op {
		margin-left: 80px;
	}
	
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
	
	.orserBCmsg {
		display: block;
		padding: 8px;
	}
	
	.orserBCmsg li {
		width: 100%;
		display: inline-block;
		line-height: 20px;
		font-size: 12px;
		margin-bottom: 10px;
	}
	
	.orserBCmsg span {
		display: block;
		float: left;
		width: 65px;
		line-height: 20px;
		text-align: left;
		margin-right: 6px;
	}
	
	.orserBCmsg p {
		float: left;
		width: 139px;
	}
	
	.pushscheme {
		display: block;
	}
	
	.pushscheme textarea {
		display: block;
		width: 100%;
		height: 100px;
		padding: 0px 5px;
		border-radius: 6px;
		border: solid 1px #EEEEEE;
	}
	
	.pushscheme_up {
		display: block;
		line-height: 20px;
		padding: 8px 0px;
		font-size: 14px;
		padding-left: 80px;
	}
	
	.demo-upload-list {
		display: inline-block;
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
		margin-right: 4px;
	}
	
	.demo-upload-list img {
		width: 100%;
		height: 100%;
	}
	
	.demo-upload-list-cover {
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);
	}
	
	.demo-upload-list:hover .demo-upload-list-cover {
		display: block;
	}
	
	.demo-upload-list-cover i {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}
	
	.openOrdetails {
		display: inline-block;
		width: 100%;
	}
	
	.openOrdetails_lf {
		width: 25%;
		float: left;
		height: 500px;
		overflow: auto;
		box-sizing: border-box;
		border: solid 1px #EEEEEE;
	}
	
	.openOrdetails_rt {
		padding-left: 16px;
		width: 75%;
		float: left;
		height: 500px;
		overflow: auto;
	}
	
	.DemandOpen {
		display: block;
		width: 100%;
		height: 600px;
		overflow: auto;
	}
	
	.DemandOpen ul {
		display: block;
	}
	
	.DemandOpen ul li img {
		display: block;
		width: 100%;
	}
	
	.designers_head {
		padding: 8px;
		background: #EEEEEE;
		color: #AAAAAA;
		font-size: 12px;
	}
	
	.designers_head p {
		line-height: 1.5em;
	}
	
	.designers {
		display: block;
	}
	
	.designers_designFile {
		display: block;
		width: 100%;
		max-height: 400px;
		overflow: auto;
	}
	
	.designers_op {
		padding-top: 16px;
		display: block;
		border-top: solid 1px #EEEEEE;
		text-align: right;
	}
	
	.designers_designFile {
		margin-top: 16px;
		border: solid 1px #EEEEEE;
		box-sizing: border-box;
		padding: 5px;
	}
	
	.designers_designFile p {
		text-align: center;
	}
	
	.designers_designFile li {
		margin-bottom: 10px;
	}
	
	.designers_designFile li img {
		display: block;
		width: 100%;
	}
	
	.designers .pl {
		padding-left: 80px;
		padding-bottom: 16px;
	}
	
	.designer_order {
		position: relative;
	}
	
	.designer_order .designer_lay {
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.designer_order .designer_lay ul {
		display: block;
		width: 100px;
	}
	
	.designer_order .designer_lay ul li {
		width: 100px;
		line-height: 30px;
	}
	
	.designer_order .designer_lay ul li a {
		color: #000000;
	}
	
	.designer_order .designer_lay ul li.ac a {
		color: cornflowerblue;
	}
	
	.designer_center {
		padding-left: 100px;
		padding-right: 20px;
		max-height: 600px;
		overflow: auto;
	}
	
	.designer_order h5.lay_Anchor {
		padding-bottom: 10px;
	}
	
	.designer_order .order_msg {
		padding: 10px;
		border: solid 1px whitesmoke;
	}
	
	.designer_order .order_demand {
		border: solid 1px whitesmoke;
		padding: 10px;
	}
	
	.designer_order .order_demand ul {
		display: block;
		width: 100%;
	}
	
	.designer_order .order_demand ul li {
		padding: 10px;
		background: #EEEEEE;
		position: relative;
		margin-bottom: 10px;
	}
	
	.designer_order .order_demand ul li .order_demandMsg {
		position: absolute;
		top: 10px;
		left: 10px;
		width: 200px;
		height: 200px;
		box-sizing: border-box;
		border-right: solid 1px #E8E8E8;
		overflow: hidden;
	}
	
	.designer_order .order_demand ul li .order_demandMsg p {
		line-height: 2em;
	}
	
	.designer_order .order_demand ul li .order_demandCenter {
		padding-right: 10px;
		padding-left: 220px;
		height: 200px;
		overflow: auto;
	}
	
	.designer_order .order_demand ul li .order_demandCenter .designer_img {
		float: left;
		width: 130px;
		height: 130px;
		display: block;
		padding: 10px;
		margin-right: 10px;
		background: white;
		margin-bottom: 10px;
	}
	
	.designer_order .order_demand ul li .order_demandCenter .designer_img h5 {
		display: block;
		width: 110px;
		height: 110px;
		background-position: 50% 50%;
		background-size: cover;
	}
	
	.designer_order .order_project {
		margin-top: 20px;
	}
	
	.des_img img {
		display: block;
		width: 100%;
	}
	
	.demo-upload-list {
		display: inline-block;
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
		margin-right: 4px;
	}
	
	.demo-upload-list img {
		width: 100%;
		height: 100%;
	}
	
	.demo-upload-list-cover {
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);
	}
	
	.demo-upload-list:hover .demo-upload-list-cover {
		display: block;
	}
	
	.demo-upload-list-cover i {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}
</style>

<style src='./../../assets/css/department.css'></style>