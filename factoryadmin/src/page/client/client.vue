<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>客户管理</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div>
			<Row>
				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>本月新增客户</h3>
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
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>本周新增客户</h3>
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
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>今日新增客户</h3>
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
							<h3 class="head">数据变动信息列表<span class="right_icon">更多<Icon type="ios-arrow-forward" /></span></h3>
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
								<div class="lable">用户名或联系方式</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.condition" placeholder="请输入用户名或电话..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">选择公司</div>
								<div class="form_nav">
									<Select filterable style="width: 200px;" id="p_lea" v-model="searchObj.companyId">
										<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }} - {{ item.leaderName}}</Option>
									</Select>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button icon="ios-search" type="primary" @click="clicksearch">搜索</Button>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button icon="ios-refresh" @click="newData" type="primary">重置</Button>
								</div>
							</li>

						</ul>

					</div>

					<div class="ui_operateRight">

						<!---->

						<ul class="tab">
							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary" @click="openaddModel" class="p_lea">新建客户</Button>
								</div>
							</li>

						</ul>

					</div>
				</div>

			</div>

			<div>

				<Table :loading="loading" :columns="tableHeader" :data="tableData" ref="table"></Table>
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


		<!--修改信息-->

		<Drawer v-model="putModel" title="修改客户信息" width="500" @on-close="newObjmsg">

			<Form :model="objmsg" :label-width="100">

				<FormItem label="用户名">
					<Input v-model="objmsg.name" placeholder="请输入客户用户名..."></Input>
				</FormItem>

				<FormItem label="客户性别">
					<RadioGroup v-model="objmsg.sex">
						<Radio label="0">男</Radio>
						<Radio label="1">女</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="联系方式">
					<Input v-model="objmsg.mobile" placeholder="请输入客户联系方式..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureputclient">确认修改</Button>
			</div>

		</Drawer>

		<!--新建订单-->

		<Drawer v-model="Neworder" title="新建订单" width="500">

			<Form :model="NeworderObj" :label-width="100">

				<FormItem label="客户名">
					<Input disabled="disabled" v-model="NeworderObj.name" placeholder="请输入客户用户名..."></Input>
				</FormItem>

				<FormItem label="联系方式">
					<Input disabled="disabled" v-model="NeworderObj.mobile" placeholder="请输入客户联系方式..."></Input>
				</FormItem>

				<FormItem label="客户地址">
					<Input disabled="disabled" v-model="NeworderObj.address" placeholder="请输入详细地址.."></Input>
				</FormItem>

				<!--	<FormItem label="房屋面积">
					<Input v-model="NeworderObj.acreage" placeholder="请输入房屋面积..."></Input>
				</FormItem>-->

				<FormItem label="收货人姓名">
					<Input v-model="NeworderObj.consigneeName" placeholder="请输入收货人姓名.."></Input>
				</FormItem>

				<FormItem label="收货人电话">
					<Input v-model="NeworderObj.consigneeTel" placeholder="请输入收货人电话..."></Input>
				</FormItem>

				<FormItem label="收货地址">

					<Select style="width:120px;" v-model="provinceMsg" @on-change="pickprovince(provinceMsg)">
						<Option v-for="item in provinceData" :value="item.id" :key="item.name">{{ item.name }}</Option>
					</Select>

					<Select style="width:120px;" v-model="cityMsg" @on-change="pickdistrict(cityMsg)">
						<Option v-for="item in cityData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

					<Select style="width:120px;" v-model="districMsg" @on-change="changedistric(districMsg)">
						<Option v-for="(item,index) in districData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

				</FormItem>

				<FormItem label="详细地址">
					<Input v-model="NeworderObj.orderlocation" placeholder="请输入收货人详细地址..."></Input>
				</FormItem>

				<FormItem label="订单类型">
					<RadioGroup v-model="NeworderObj.type">
						<Radio label="0">正常订单</Radio>
						<Radio label="1">增补订单</Radio>
						<Radio label="2">返货订单</Radio>
						<Radio label="3">打样订单</Radio>
						<Radio label="4">样板订单</Radio>
						<Radio label="5">展厅订单</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="下单时间">
					<DatePicker type="date" placeholder="请选择下单时间" style="width: 100%" :value="NeworderObj.orderTime" @on-change="handleChange"></DatePicker>
				</FormItem>

				<FormItem label="是否设计">
					<RadioGroup true-value v-model="NeworderObj.isDesign">
						<Radio label="0">不需要</Radio>
						<Radio label="1">需要</Radio>
					</RadioGroup>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="pushorder">确认添加</Button>
			</div>

		</Drawer>

		<!--经销商选择-->
		<Modal v-model="companyModel" title="选择经销商" width="50%">

			<div class="operation_box">

				<div class="active">

					<div class="ui_operateLeft">
						<span class="operation_span">名称：</span>
						<input style="width: 100px;" class="iv_input" id="p_lea" v-model="companysearchObj.name" placeholder="请输入店铺名称..." />
						<span class="operation_span">手机号：</span>
						<input style="width: 100px;" class="iv_input" id="p_lea" v-model="companysearchObj.mobile" placeholder="请输入经销商手机号..." />
						<!--<span class="operation_span">编号：</span>
						<input style="width: 100px;" class="iv_input" id="p_lea" v-model="companysearchObj.no" placeholder="请输入经销商店铺编号..." />-->
						<span class="operation_span">类型：</span>
						<Select style="width: 100px;" id="p_lea" v-model="companysearchObj.type">
							<Option value="0" key="0">生产商/制造商/总店</Option>
							<Option value="1" key="1">直营店</Option>
							<Option value="2" key="2">店中店</Option>
							<Option value="3" key="3">专卖店</Option>
							<Option value="4" key="4">加盟店</Option>
							<Option value="5" key="5">散单</Option>

						</Select>

						<Button icon="ios-search" @click="companysearch">搜索</Button>
					</div>

					<div class="ui_operateRight">
						<Button @click="newcompanydata" shape="circle" icon="ios-refresh"></Button>

						<!--<Button class="item_PL" type="primary" @click="exportData">生成表格数据</Button>-->
					</div>
				</div>

			</div>

			<!-- 经销商列表 -->
			<div class="department_center">

				<Table border :columns="companyHead" :data="companyData" ref="table"></Table>

				<div class="ui_tableBottom">

					<div class="ui_page">
						<Page :current="companypageIndex" :total="companypageTotal  " :page-size="companypageSize" @on-change="companypageChange" show-elevator></Page>
					</div>

				</div>

			</div>

			<div slot="footer"></div>

		</Modal>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [

					{
						title: '客户名称',
						key: 'name',
					

					},
					
					
					{
						title: '客户电话',
						key: 'phone',

					},
					
					
					{
						title: '客户小区',
						key: 'community',

					},
					
					
					
					
					{
						title: '详细地址',
						
						key: 'address',

					},
					
					{
						title: '所属经销商',
						key: 'companyName',

					
					},
					
					
					{
						title: '业务经理',
						key: 'customerManagerName',

						
					},
					
					
					{
						title: '客户地区',
						key: 'cityAreaName',

						
					},


					{
						title: '操作',
						key: 'action',
						width: 120,
						
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
											
											this.$emit('openWindow', ('clientdetails'), ('客户详情'), ('3-3'), ('clientdetails'), ('clientdetails'),(this.tableData[params.index].id))

//											this.$router.push({
//												name: 'clientdetails',
//												query: {
//													item: 
//												}
//											})
										}
									}
								}, '详情'),
							])

						}
					}

					//					{
					//						title: '粉丝数量',
					//						key: 'followers',
					//						width: 200,
					//					},
					//
					//					{
					//						title: '最后登录时间',
					//						key: 'lastLogin',
					//						width: 200,
					//					},
					//
					//					{
					//						title: '创建日期',
					//						key: 'created',
					//						width: 200,
					//					},

					//					{
					//						title: '操作',
					//						key: 'action',
					//						width: 120,
					//						fixed: 'right',
					//						align: 'center',
					//						render: (h, params) => {
					//
					//							return h('div', [
					//								h('Button', {
					//									props: {
					//										type: 'primary',
					//										size: 'small',
					//										disabled: !this.operation.edit
					//									},
					//									style: {
					//										marginRight: '5px'
					//									},
					//									on: {
					//										click: () => {
					//
					//											this.Neworder = true;
					//											this.NeworderObj = {
					//													"customerId": "",
					//													"companyId": "",
					//													"cityAreaId": "",
					//													"acreage": "",
					//													"salesman": "",
					//													"name": "",
					//													"mobile": "",
					//													"address": "",
					//													"type": "",
					//													"isDesign": "0",
					//													"orderTime": ""
					//												},
					//												this.SetIndex = params.index;
					//											var data = this.tableData[params.index];
					//
					//											this.NeworderObj.customerId = data.id;
					//											this.NeworderObj.companyId = data.companyId;
					//											this.NeworderObj.cityAreaId = data.cityAreaId
					//											this.NeworderObj.salesman = data.customerManager
					//											this.NeworderObj.name = data.name;
					//											this.NeworderObj.mobile = data.mobile;
					//											this.NeworderObj.address = data.cityAreaName;
					//
					//										}
					//									}
					//								}, '新建订单'),
					//
					//								h('Button', {
					//									props: {
					//										type: 'primary',
					//										size: 'small',
					//										disabled: !this.operation.edit
					//									},
					//									style: {
					//										marginRight: '5px'
					//									},
					//									on: {
					//										click: () => {
					//
					//											this.putModel = true;
					//											this.SetIndex = params.index;
					//											var data = this.tableData[params.index]
					//											this.objmsg.name = data.name
					//											this.objmsg.mobile = data.mobile;
					//											this.objmsg.sex = data.sex.toString();
					//
					//										}
					//									}
					//								}, '编辑'),
					//								

					//								h('Button', {
					//									props: {
					//										type: 'primary',
					//										size: 'small',
					//										disabled: !this.operation.edit
					//									},
					//									style: {
					//										marginRight: '5px'
					//									},
					//									on: {
					//										click: () =>
					//
					//											this.$router.push({
					//												name: 'clientdetails',
					//												query: {
					//													item: this.tableData[params.index]
					//												}
					//											})

					//											this.putModel = true;
					//											this.SetIndex = params.index;
					//											var data = this.tableData[params.index]
					//											this.objmsg.name = data.name
					//											this.objmsg.mobile = data.mobile;
					//											this.objmsg.sex = data.sex.toString();

					//}
					//									}
					//								}, '详情'),
					//
					//							]);
					//
					//						}
					//
					//					}
				],

				tableData: [], //表格数据
				companyData: [],
				SetModel: false,
				putModel: false,
				objmsg: {
					name: "",
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				},

				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

				isSearch: false,
				searchObj: {
					"companyId": "",
					"condition": "",

				},

				Neworder: false,

				NeworderObj: {
					"customerId": "",
					"companyId": "",
					"cityAreaId": "",
					"acreage": "",
					"salesman": "",
					"name": "",
					"mobile": "",
					"address": "",
					"type": "",
				},

				//
				companyModel: false,
				companyHead: [

					{
						title: '公司名称',
						key: "name",

					},

					{
						title: '类型',
						key: 'type',

						render: (h, params) => {

							var type = params.row.type

							if(type == 0) {
								var text = "生产商/制造商/总店"
							} else if(type == 1) {
								var text = "直营店"
							} else if(type == 2) {
								var text = "店中店"
							} else if(type == 3) {
								var text = "专卖店"
							} else if(type == 4) {
								var text = "加盟店"
							} else if(type == 5) {
								var text = "散单"
							}

							return h('div', text)
						}

					},

					{
						title: '状态',
						key: 'status',

						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var text = "意向"
							} else if(status == 1) {
								var text = "已签约（正常）"
							} else if(status == 2) {
								var text = "已退网"
							} else if(status == 3) {
								var text = "已倒闭"
							} else if(status == 4) {
								var text = "已禁用"
							} else if(status == 5) {
								var text = "无价值"
							} else if(status == 6) {
								var text = "待财务审核"
							} else if(status == 7) {
								var text = "待启用"
							}
							return h('div', text)
						}
					},

					{
						title: '创始人姓名',
						key: 'founderName',

					},

					{
						title: '店铺联系人',
						key: 'leaderName',

					},

					{
						title: '店铺联系人电话',
						key: 'leaderTel',

					},

					{
						title: '操作',
						width: 100,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							return h('div', [
								h('Button', {
									props: {
										size: 'small',

									},
									style: {
										marginRight: '5px'

									},
									on: {
										click: () => {
											var data = this.companyData[params.index];

											this.objmsg.companyName = data.name + '-' + data.leaderName;
											this.objmsg.companyId = data.id;
											this.companyModel = false

										}
									}
								}, "选择"),
							]);

						}

					},

				],
				companyData: [],
				companypageIndex: 1, //分页页数
				companypageTotal: 0, //数据总数
				companypageSize: 10,
				companysearchObj: { //检索对象
					"name": "",
					"mobile": "",
					"no": "",
					"type": "",
				},
				iscompanySearch: false,

				provinceData: [], //省份数据
				cityData: [], //城市数据
				cityCache: {},
				districData: [], //省/县数据
				districtCache: {},
				provinceMsg: "", //省份选中数据
				cityMsg: "", //城市选中数据
				districMsg: "", //省/县选中数据
				districMsgcache: "",
				operation: {},
				order_operation: {},

			};
		},

		methods: {

			handleChange(data) {
				this.NeworderObj.orderTime = data + ' 00:00:00';
			},

			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch == true) {
					this.searchData()
				} else {
					this.getDatas()
				}

			},

			//检索信息

			clicksearch: function() {

				/*""companyId": "",
					"condition": "",*/
				var searchobj = this.searchObj
				var condition = searchobj.condition
				var companyId = searchobj.companyId

				if(condition.trim().length == 0 && companyId == "") {
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
				var condition = searchobj.condition
				var companyId = searchobj.companyId

				var pathurl = ""

				if(condition != "" && condition != null && condition.trim().length != 0) {
					pathurl += 'condition=' + condition + "&"
				}

				if(companyId != "" && companyId != null && companyId.trim().length != 0) {
					pathurl += 'companyId=' + companyId + "&"
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
					url: '/api/f/customers?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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

			openaddModel: function() {
				
				
				this.$emit('openWindow', ('clientnewly'), ('新建客户'), ('3-1'), ('clientnewly'), ('clientnewly'))
//              this.$router.push({
//					name: 'clientnewly',
//
//				})
			

				return false

				this.objmsg = {
					name: "",
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				}

				this.SetModel = true;
				this.provinceMsg = "";
				this.cityMsg = "";
				this.districMsg = ""
			},

			
			sureputclient: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var objmsg = this.objmsg

				var name = objmsg.name
				var mobile = objmsg.mobile
				var sex = objmsg.sex

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('客户姓名不能为空！');
					return false;
				} else if(name.trim().length > 10) {

					this.$Message.error('客户姓名长度不能超过10个！');
					return false;
				} else if(mobile == "" || mobile == null || mobile.trim().length == 0) {

					this.$Message.error('客户电话不能为空！');
					return false;
				} else if(tel.test(mobile) == false || telephone.test(mobile) || phone.test(mobile)) {

					this.$Message.error('客户电话格式不正确！');
					return false;

				}

				var cid = this.tableData[this.SetIndex].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

				this.axios({
					method: 'put',
					url: '/api/f/customers/' + cid,

					data: {
						"name": name,
						"mobile": mobile,
						"sex": sex
					}

				}).then(function(res) {
					setTimeout(msg, 100);

					var verify = [{
							"name": "companyId",
							"note": "物流公司"
						},
						{
							"name": "mobile",
							"note": "客户手机号 "
						},
						{
							"name": "name",
							"note": "客户姓名 "
						},
						{
							"name": "address",
							"note": "客户详细地址"
						},
						{
							"name": "community",
							"note": "小区名称 "
						}, {
							"name": "cityAreaId",
							"note": "客户地址"
						}, {
							"name": "sex",
							"note": "性别"
						},
					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					var data = res.data.data

					that.tableData[that.SetIndex].name = name
					that.tableData[that.SetIndex].sex = sex
					that.tableData[that.SetIndex].mobile = mobile

					that.putModel = false
					that.$Message.success("修改成功")

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			pushorder: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var Neworderobj = this.NeworderObj

				var customerId = Neworderobj.customerId;
				var companyId = Neworderobj.companyId;
				var cityAreaId = Neworderobj.cityAreaId
				var address = Neworderobj.address
				var acreage = Neworderobj.acreage
				var salesman = Neworderobj.salesman
				var type = Neworderobj.type
				var customerTel = Neworderobj.mobile
				var isDesign = Neworderobj.isDesign

				var consigneeName = Neworderobj.consigneeName
				var consigneeTel = Neworderobj.consigneeTel
				var orderlocation = Neworderobj.orderlocation
				var orderTime = Neworderobj.orderTime

				if(consigneeName == "" || consigneeName == null || consigneeName.trim().length == 0) {
					this.$Message.info('请输入收货人姓名');
					return false;
				} else if(consigneeTel == "" || consigneeTel == null || consigneeTel.trim().length == 0) {
					this.$Message.info('请输入收货人电话');
					return false;
				} else if(tel.test(consigneeTel) == false && telephone.test(consigneeTel) == false && phone.test(consigneeTel) == false) {
					this.$Message.info('收货人联系方式格式不正确');
					return false;
				} else if(this.districMsg == "" || this.districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');
					return false;
				} else if(orderlocation == "" || orderlocation == null || orderlocation.trim().length == 0) {

					this.$Message.error('详细收货地址不能为空！');
					return false;
				} else if(type == "" || type == null) {

					this.$Message.error('请选择订单类型！');
					return false;
				} else if(orderTime == "" || orderTime == null) {
					this.$Message.info('请选择下单时间');
					return false;
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				/**/
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

				this.axios({
					method: 'post',
					url: '/api/f/customorders',

					data: {
						customOrder: {
							"customerId": customerId,
							"companyId": companyId,
							/*"cityAreaId": cityAreaId,*/
							"address": orderlocation,
							/*"acreage": acreage,*/
							"salesman": salesman,
							"type": type,
							"isDesign": isDesign,
							"consigneeName": consigneeName,
							"customerTel": customerTel,
							"orderTime": orderTime,
							"cityAreaId": this.districMsg,
						}
					}

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.NeworderObj = {
							"customerId": "",
							"companyId": "",
							"cityAreaId": "",
							"acreage": "",
							"salesman": "",
							"name": "",
							"mobile": "",
							"address": "",
							"type": "",
							"orderTime": "",
						},
						that.$Message.success("添加成功")
					that.Neworder = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			newObjmsg: function() {
				this.objmsg = {
					name: "",
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				}
			},

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {
						"companyId": "",
						"condition": "",
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
					url: '/api/f/customers?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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
			},

			/*选择市*/

			pickprovince: function(id) {
				/*_this.city=res.data.data*/
				this.cityMsg = ""
				this.districMsgcache = ""

				this.cityData = []
				this.districData = []
				/*this.cityid = 0
				this.districtid = 0*/

				var that = this
				var citycache = this.cityCache
				var cityshow;
				cityshow = citycache[id]

				if(!cityshow) {
					that.axios({
						method: 'get',
						url: '/api/f/cities?parentId=' + id + ''

					}).then(function(res) {

						cityshow = res.data.data

						that.cityCache[id] = cityshow
						that.cityData = that.cityCache[id]

						//that.pickdistrict(that.cityData[0].id, 0)

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.cityData = cityshow
					//this.pickdistrict(this.cityData[0].id, 0)

				}

			},

			/*选择区*/

			pickdistrict: function(id, index) {
				this.districMsg = ""
				this.districMsgcache = ""
				this.districData = []

				/*	this.districtid = 0
					this.cityid = index*/
				var that = this

				var districtcache = this.districtCache
				var districtshow;

				districtshow = districtcache[id]

				if(!districtshow) {
					that.axios({
						method: 'get',

						//url: '//api/addresses/1234567890000'
						url: '/api/f/cities?parentId=' + id + ''

					}).then(function(res) {

						districtshow = res.data.data
						districtcache[id] = districtshow
						that.districData = districtshow

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.districData = districtshow

				}

			},

			changedistric: function(id) {

				if(!id == true) {
					this.districMsgcache = ""

					return false;
				}
				this.districMsgcache = id

			},

			//获取可用经销商

			Getdealers: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies?status=1&pageNum=' + this.companypageIndex + '&pageSize=' + this.companypageSize,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.companyData = data.companyList

					that.companypageTotal = res.data.pagination.total
				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！22');

				})

			},

			getcompanyModel: function() {
				this.companyModel = true;
				this.newcompanydata()
			},

			//刷新经销商数据
			newcompanydata: function() {
				this.iscompanySearch == false
				this.companysearchObj = {

						name: "",
						mobile: "",
						no: "",
						type: "",

					},
					this.companypageIndex = 1
				this.Getdealers()
			},

			//检索经销商数据
			companysearch: function() {
				var searchobj = this.companysearchObj
				var name = searchobj.name
				var mobile = searchobj.mobile
				var no = searchobj.no
				var type = searchobj.type

				if(name.trim().length == 0 && mobile.trim().length == 0 && no.length == 0 && !type == true) {
					this.Getdealers();
					return false;
				} else {
					this.companypageIndex = 1
					this.searchcompanyData()
				}

			},

			//检索数据		
			searchcompanyData: function() {
				var searchobj = this.companysearchObj

				var name = searchobj.name
				var mobile = searchobj.mobile
				var No = searchobj.no
				var type = searchobj.type

				var pathurl = ""

				if(name != "" && name != null && name.trim().length != 0) {
					pathurl += 'name=' + name + "&"
				}

				if(mobile != "" && mobile != null && mobile.trim().length != 0) {
					pathurl += 'mobile=' + mobile + "&"
				}

				if(No != "" && No != null && No.trim().length != 0) {
					pathurl += 'no=' + No + "&"
				}

				if(type != "" && type != null) {
					pathurl += 'type=' + type + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				//请求经销商列表
				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies?status=1&' + pathurl + 'pageNum=' + this.companypageIndex + '&pageSize=' + this.companypageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.companypageTotal = res.data.pagination.total
					var data = res.data.data.companyList

					that.companyData = data
					that.iscompanySearch = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			companypageChange: function(index) {
				this.companypageIndex = index

				if(this.iscompanySearch == true) {
					this.searchcompanyData()

				} else {
					this.Getdealers()

				}
			},

		},

		mounted: function() {

			var cfg = window.lwxfPreload

			if(cfg == "" || cfg == null) {
				return false;
			}

			var useroperations = cfg.preload.userMenu.userOperations
			var keydata = this.$route.query.key
			var operation = this.operation

			Isjurisdiction.user_jurisdiction(keydata, operation)

			/*var keyss = useroperations["ordermng_order"].split(',')
			
			console.log(useroperations["ordermng_order"])
			
			for(var i = 0; i < keyss.length; i++) {
				this.order_operation[keyss[i]] = true
			}
*/
			this.getDatas()

			var that = this

			/*	that.axios({
				method: 'get',

				
				url: '/api/f/cityareas'

			}).then(function(res) {

				

				var data = res.data.data
				var cityData = []

				for(var i = 0; i < data.length; i++) {

					if(data[i].levelType == 1) {

						data[i].child = []

						cityData[data[i].id] = data[i]
					}

				}

				console.log(cityData)

			}).catch(function(err) {
				console.log(err)

			})
*/

			

			/*this.pickdistrict(110100, 0)
			this.pickprovince(110000, 0)*/

			this.axios({
				method: 'get',
				url: '/api/f/dealers/companies?status=1&pageNum=1&pageSize=20000',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data
				that.companyData = data.companyList

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
		width: 200px;
		margin-right: 10px;
	}
</style>

<style src='./../../assets/css/department.css'></style>