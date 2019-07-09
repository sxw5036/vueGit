<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem to="/orderlist">订单管理</BreadcrumbItem>
				<BreadcrumbItem>新建订单</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="iv_formbox">
			<div class="iv_form">

				<!--<Row style="padding:10px;">
					<Col span="24">
					<Form>
						<FormItem>
							<div style="text-align: right;">
								<Input v-model="condition" placeholder="请输入客户名称..." style="width: 30%;" />
								<Button icon="ios-search" @click="serchdatas">搜索</Button>
							</div>

							<div style="margin-top: 20px;">
								<Table :columns="customes" :data="customesdata" height="180" border></Table>
							</div>
						</FormItem>
					</Form>
					</Col>
				</Row>-->
				<Form :label-width="150" style="padding:10px;">

					<FormItem label="经销商">
						<Select style="width: 300px;" :disabled="dealerDisabled==true" filterable v-model="newlyobj.companyId" @on-change="getClient(newlyobj.companyId)" placeholder="请选择经销商...">
							<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }}-{{ item.founderName }}</Option>
						</Select>
						
						<span style="display: inline-block; cursor: pointer;">没找到想要的经销商，点击<b style="color: cornflowerblue;" @click="newDealer">这里</b></span>

						<!--<Input disabled="disabled" style="width: 400px;" v-model="newlyobj.companyName" placeholder="请选择经销商..."></Input>
						<Button size="small" style="margin-left: 3px;" @click="getcompanyModel">选择经销商</Button>
						<div v-show="newlyobj.companyName!=''">
							{{newlyobj.companyFince}}
						</div>-->
					</FormItem>

					<FormItem label="客户">
						<Select style="width: 300px;" :disabled="clientDisabled==true" filterable v-model="newlyobj.client" @on-change="getdocumentary(newlyobj.client)" placeholder="请选择客户...">
							<Option v-for="item in clientdata" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>

						<span style="display: inline-block; cursor: pointer;">没找到想要的客户，点击<b style="color: cornflowerblue;" @click="newClient">这里</b></span>

					</FormItem>

					<FormItem label="客户手机号">
						<Input disabled="disabled" v-model="newlyobj.customerTel" placeholder="请输入客户电话..."></Input>
					</FormItem>

					<FormItem label="业务经理">
						<Input disabled="disabled" v-model="newlyobj.customerManagerName" placeholder="请输入业务经理..."></Input>
					</FormItem>

					<FormItem label="收货人姓名">
						<Input v-model="newlyobj.consigneeName" placeholder="请输入收货人姓名..."></Input>
					</FormItem>

					<FormItem label="收货人电话">
						<Input v-model="newlyobj.consigneeTel" placeholder="请输入收货人电话..."></Input>
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

					<FormItem label="详细收货地址">
						<Input v-model="newlyobj.address" placeholder="请输入收货地址..."></Input>
					</FormItem>
					<!--<FormItem label="房屋面积">
						<Input v-model="orderarea" placeholder="请输入房屋面积..."></Input>
					</FormItem>-->
					<FormItem label="备注">
						<Input v-model="newlyobj.notes" placeholder="请输入备注信息..."></Input>
					</FormItem>

					<FormItem label="订单类型">
						<Select v-model="newlyobj.type">
							<Option v-for="item in ordertypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="下单时间">
						<DatePicker type="date" placeholder="请选择下单时间" style="width: 100%" :value="newlyobj.orderTime" @on-change="handleChange"></DatePicker>
					</FormItem>
					<FormItem label="是否设计">
						<RadioGroup true-value v-model="newlyobj.isDesign">
							<Radio label="0">不需要</Radio>
							<Radio label="1">需要</Radio>
						</RadioGroup>
					</FormItem>

					<FormItem label="">
						<Button type="primary" @click="sure">确认</Button>
					</FormItem>
					<!--<FormItem label="订单设计费" v-show="orderisDesign==0">
						<Input v-model="orderdesignFee" placeholder="请输入订单设计费..."></Input>
					</FormItem>
					<FormItem label="订单货款">
						<Input v-model="orderfactoryPrice" placeholder="请输入订单货款..."></Input>
					</FormItem>
-->
					<!--<FormItem label="订单产品">
						<div class="order_product">

							<div class="p_itemAdd">
								<Button @click="addProduct">新增</Button>
							</div>

							<ul>
								<li class="p_item" v-for="(item,index) in orderProducts">

									<div class="op">
										<Button shape="circle" icon="ios-trash-outline" @click="delProduct(index)"></Button>
									</div>

									<FormItem label="产品类型">
										<Select style="width: 300px;" v-model="item.type" placeholder="请选择产品类型...">
											<Option value="0">橱柜(J)</Option>
											<Option value="1">衣柜(B)</Option>
											<Option value="2">成品家具(J)</Option>
											<Option value="3">电器(J)</Option>
											<Option value="4">五金(J)</Option>
											<Option value="5">样块(Y)</Option>
										</Select>
									</FormItem>

									<FormItem label="产品系列">
										<Select style="width: 300px;" v-model="item.series" placeholder="请选择产品系列...">
											<Option value="0">定制实木 </Option>
											<Option value="1">特供实木</Option>
											<Option value="2">美克</Option>
											<Option value="3">康奈</Option>
											<Option value="4">慧娜</Option>
											<Option value="5">模压</Option>
										</Select>
									</FormItem>

									<FormItem label="产品颜色">
										<Input style="width: 300px;" v-model="item.color" placeholder="请输入产品颜色..."></Input>
									</FormItem>

									<FormItem label="门型">
										<Input style="width: 300px;" v-model="item.door" placeholder="请输入门型..."></Input>
									</FormItem>

									<FormItem label="备注">
										<Input style="width: 300px;" type="textarea" v-model="item.notes" placeholder="请输入备注..."></Input>
									</FormItem>

								</li>
							</ul>
						</div>
					</FormItem>-->

					<!--<FormItem label="生产拆单">
						<div class="order_product">

							<div class="p_itemAdd">
								<Button @click="addOrderDtos">新增</Button>
							</div>

							<ul>
								<li class="p_item" v-for="(item,index) in produceOrderDtos">

									<div class="op">
										<Button shape="circle" icon="ios-trash-outline" @click="delOrderDtos(index)"></Button>
									</div>

									<FormItem label="拆单类型">
										<Select style="width: 300px;" v-model="item.type " placeholder="请选择产品系列...">
											<Option value="0">柜体 </Option>
											<Option value="1">门板 </Option>
											<Option value="2">五金 </Option>

										</Select>
									</FormItem>

									<FormItem label="生产方式" v-show="item.type!=1">
										<RadioGroup true-value v-model="item.way">
											<Radio label="0">自产</Radio>
											<Radio label="2">特供实木</Radio>
										</RadioGroup>
									</FormItem>

									<FormItem label="生产方式" v-show="item.type==1">
										<RadioGroup true-value v-model="item.way">
											<Radio label="0">自产</Radio>
											<Radio label="1">外协</Radio>
											<Radio label="2">特供实木</Radio>
										</RadioGroup>
									</FormItem>

									<FormItem label="拆单编号">
										<Input style="width: 300px;" v-model="item.no" placeholder="请输入拆单编号..."></Input>
									</FormItem>

									<div v-show="item.way==1&&item.type==1">

										<FormItem label="外协金额">
											<Input style="width: 300px;" v-model="item.amount" placeholder="请输入外协金额..."></Input>
										</FormItem>

										<FormItem label="外协厂家">
											<Input style="width: 300px;" v-model="item.coordinationName" placeholder="请输入外协厂家..."></Input>
										</FormItem>

										<FormItem label="银行账户">
											<Input style="width: 300px;" v-model="item.coordinationAccount" placeholder="请输入银行账户..."></Input>
										</FormItem>

										<FormItem label="开户行">
											<Input style="width: 300px;" v-model="item.coordinationBank" placeholder="请输入开户行..."></Input>
										</FormItem>
									</div>

									<FormItem label="数量">
										<Input style="width: 300px;" v-model="item.count" placeholder="请输入数量..."></Input>
									</FormItem>


									<FormItem label="说明">
										<Input type="textarea" style="width: 300px;" v-model="item.notes" placeholder="请输入说明..."></Input>
									</FormItem>

								</li>
							</ul>
						</div>
					</FormItem>-->
				</Form>

			</div>

			<div>

			</div>
		</div>

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

		<!--经销商选择-->

		<!--新增客户-s-->
		<Drawer v-model="newClientModel" title="添加客户" width="500" @on-close="newClientModel=false,orderadd=true">

			<Form :model="objmsg" :label-width="120">

				<FormItem label="用户名">
					<Input v-model="objmsg.name" placeholder="请输入客户用户名..."></Input>
				</FormItem>

				<FormItem label="联系方式">
					<Input v-model="objmsg.mobile" placeholder="请输入客户联系方式..."></Input>
				</FormItem>

				<FormItem label="客户地址">
					<Select style="width:120px;" v-model="objmsg.provinceMsg" @on-change="pickprovince(objmsg.provinceMsg)">
						<Option v-for="item in provinceData" :value="item.id" :key="item.name">{{ item.name }}</Option>
					</Select>

					<Select style="width:120px;" v-model="objmsg.cityMsg" @on-change="pickdistrict(objmsg.cityMsg)">
						<Option v-for="item in cityData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

					<Select style="width:120px;" v-model="objmsg.districMsg" @on-change="changedistric(objmsg.districMsg)">
						<Option v-for="(item,index) in districData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

				</FormItem>

				<FormItem label="详细地址">
					<Input v-model="objmsg.address" placeholder="请输入详细地址..."></Input>
				</FormItem>

				<FormItem label="小区名称">
					<Input v-model="objmsg.community" placeholder="请输入小区名称..."></Input>
				</FormItem>

				<!--<FormItem label="公司名称">
					<Select id="p_lea" v-model="objmsg.companyId">
						<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>-->

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="pushclient">确认添加</Button>
			</div>

		</Drawer>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				dealerDisabled: false,
				clientDisabled:false,

				newlyobj: {
					companyId: "",
					companyName: "",
					companyFince: "",
					client: "",
					customerManagerName: "",
					consigneeName: "",
					consigneeTel: '',
					address: "",

					notes: "",
					type: "",
					orderTime: "",
					isDesign: "0"
				},

				provinceData: [], //省份数据
				cityData: [], //城市数据
				cityCache: {},
				districData: [], //省/县数据
				districtCache: {},
				provinceMsg: "", //省份选中数据
				cityMsg: "", //城市选中数据
				districMsg: "", //省/县选中数据

				ordertypeList: [{
						value: 0,
						label: '正常订单'
					},
					{
						value: 1,
						label: '补产订单'
					},
					{
						value: 2,
						label: '返货单'
					},
					{
						value: 3,
						label: '打样订单'
					},
					{
						value: 4,
						label: '样板订单'
					},
					{
						value: 5,
						label: '展厅订单'
					},
					{
						value: 6,
						label: '补发订单'
					}
				],

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
											this.newlyobj.companyName = data.name + '-' + data.leaderName
											this.newlyobj.companyFince = '自由金:' + data.balance + ' 保证金:' + data.depositBalance + ' 设计金:' + data.designBalance;
											this.newlyobj.consigneeName = data.leaderName;
											this.newlyobj.consigneeTel = data.leaderTel;
											//											this.newlyobj.location = data.address
											this.newlyobj.address = data.address
											this.newlyobj.companyId = data.id
											this.getClient(data.id)

											this.provinceMsg = data.cityId
											this.cityMsg = data.provinceId
											this.districMsg = data.cityAreaId

											this.getpickprovince(this.provinceMsg)

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

				clientdata: [],
				newClientModel: false,
				objmsg: {
					name: "",
					mobile: "",
					address: "",
					community: "",
					companyId: "",
					provinceMsg: "",
					districMsg: "",
					cityMsg: ""
				},

				operation: {}

			};
		},

		methods: {

			handleChange(data) {
				this.newlyobj.orderTime = data;
			},

			//查询可用经销商
			getdealerdata: function() {

				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies?status=1&pageNum=' + this.companypageIndex + '&pageSize=' + this.companypageSize,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.companypageTotal = res.data.pagination.total
					var data = res.data.data
					that.companyData = data.companyList

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//
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
				this.getdealerdata()
			},

			//检索经销商数据
			companysearch: function() {
				var searchobj = this.companysearchObj
				var name = searchobj.name
				var mobile = searchobj.mobile
				var no = searchobj.no
				var type = searchobj.type

				if(name.trim().length == 0 && mobile.trim().length == 0 && no.length == 0 && !type == true) {
					this.getdealerdata();
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
					this.getdealerdata()

				}
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

			//选择经销商时查询市级数据

			getpickprovince: function(id) {

				this.cityData = []
				this.districData = []
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

						that.getpickdistrict(that.cityMsg)

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.cityData = cityshow
					this.getpickdistrict(that.cityMsg)

				}
			},

			//选择经销商时查询县级数据

			getpickdistrict: function(id) {
				/*	this.districMsg = ""
					this.districMsgcache = ""*/
				this.districData = []

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

			getDealer: function(id) {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data.data

					var data = dataAll.company;
					that.newlyobj.companyName = data.name + '-' + data.leaderName
					//					that.newlyobj.companyFince = '自由金:' + data.balance + ' 保证金:' + data.depositBalance + ' 设计金:' + data.designBalance;
					that.newlyobj.consigneeName = data.leaderName;
					that.newlyobj.consigneeTel = data.leaderTel;
					//											this.newlyobj.location = data.address
					that.newlyobj.address = data.address
					that.newlyobj.companyId = data.id

					that.provinceMsg = data.cityId
					that.cityMsg = data.provinceId
					that.districMsg = data.cityAreaId

					that.getpickprovince(that.provinceMsg)

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//根据经销商查询客户
			getClient: function(cid) {
				var that = this
				that.orderclient = ""
				that.orderdocumentary = ""
				that.ordertel = ""

				for(var i = 0; i < this.companyData.length; i++) {
					if(cid == this.companyData[i].id) {
						/*this.newlyobj.consigneeName = data.leaderName;
											this.newlyobj.consigneeTel = data.leaderTel;
//											this.newlyobj.location = data.address
											this.newlyobj.address = data.address*/
						this.newlyobj.consigneeName = this.companyData[i].leaderName;
						this.newlyobj.consigneeTel = this.companyData[i].leaderTel;
						this.newlyobj.address = this.companyData[i].address
					}
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'get',
					url: '/api/f/customers?companyId=' + cid,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.clientdata = data
					that.companyModel = false

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//选择客户

			getdocumentary: function(cid) {

				for(var i = 0; i < this.clientdata.length; i++) {
					if(cid == this.clientdata[i].id) {

						this.newlyobj.customerTel = this.clientdata[i].mobile
						this.newlyobj.customerManagerName = this.clientdata[i].customerManagerName
					}
				}

			},

			newDealer: function() {
				this.$emit('openWindow', ('dealercompanynewly'), ('新建经销商'), ('2-1'), ('dealercompanynewly'), ('dealercompanynewly'))
			},

			newClient: function() {

				this.$emit('openWindow', ('clientnewly'), ('新建客户'), ('3-1'), ('clientnewly'), ('clientnewly'))

				return true

				var companyId = this.newlyobj.companyId

				if(companyId == "" || companyId == null) {
					this.$Message.error('请选择经销商');
					return false;
				}

				this.newClientModel = true;
				this.orderadd = false,
					this.objmsg = {
						name: "",
						mobile: "",
						address: "",
						community: "",
						companyId: "",
					}

				this.provinceMsg = "";
				this.cityMsg = "";
				this.districMsg = "";
				this.cityData = [];
				this.districData = []
			},

			pushclient: function() {
				var companyId = this.newlyobj.companyId
				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var objmsg = this.objmsg

				var name = objmsg.name
				var mobile = objmsg.mobile
				var address = objmsg.address
				var community = objmsg.community

				var districMsg = objmsg.districMsg

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

				} else if(districMsg == "" || districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');
					return false;
				} else if(address == "" || address == null || address.trim().length == 0) {

					this.$Message.error('客户详细地址不能为空！');
					return false;
				}
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'post',
					url: '/api/f/customers',

					data: {
						"companyId": companyId,
						"mobile": mobile,
						"name": name,
						"address": address,
						"community": community,
						"cityAreaId": districMsg,

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
						},
					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					var data = res.data.data

					that.clientdata.push(data)
					that.ordertel = data.mobile
					that.orderclient = data.id

					that.newClientModel = false;
					that.orderadd = true,

						that.$Message.success("添加成功")
					that.objmsg = {
						name: "",
						mobile: "",
						address: "",
						community: "",
						companyId: "",
					}

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			sure: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var newlyobj = this.newlyobj

				var companyId = newlyobj.companyId
				var client = newlyobj.client
				var customerTel = newlyobj.customerTel
				var customerManagerName = newlyobj.customerManagerName
				var consigneeName = newlyobj.consigneeName.trim()
				var consigneeTel = newlyobj.consigneeTel.trim()
				var address = newlyobj.address.trim()
				var notes = newlyobj.notes
				var type = newlyobj.type
				var orderTime = newlyobj.orderTime
				var isDesign = newlyobj.isDesign

				console.log(newlyobj)

				if(companyId == "" || companyId == null) {
					this.$Message.info('请选择经销商');
					return false;
				} else if(consigneeName.length < 1) {
					this.$Message.info('请输入收货人姓名');
					return false;
				} else if(consigneeTel.length < 0) {
					this.$Message.info('请输入收货人电话');
					return false;
				} else if(tel.test(consigneeTel) == false && telephone.test(consigneeTel) == false && phone.test(consigneeTel) == false) {
					this.$Message.info('收货人联系方式格式不正确');
					return false;
				} else if(this.districMsg == "" || this.districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');

					return false;
				} else if(address == "" || address == null || address.length < 0) {

					this.$Message.error('请输入详细收货地址！');
					return false;
				} else if(type === "") {
					this.$Message.info('请选择订单类型');
					return false;
				} else if(orderTime == "" || orderTime == null) {
					this.$Message.info('请输入下单时间');
					return false;
				} else {
					var newDate = new Date()

					var year = newDate.getFullYear();
					var month = newDate.getMonth() < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
					var day = newDate.getDate() < 10 ? +(newDate.getDate() + 15) : (newDate.getDate() + 15);

					var time = year + '-' + month + '-' + day + ' 00:00:00'

					let that = this;

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/customorders',
						data: {
							customOrder: {
								customerId: (client == "") ? undefined : client,
								companyId: companyId,
								address: address,
								notes: notes,
								consigneeTel: consigneeTel,
								consigneeName: consigneeName,

								type: type,
								customerTel: customerTel,
								isDesign: isDesign,
								orderTime: orderTime,
								estimatedDeliveryDate: time,
								"cityAreaId": this.districMsg

							},

						}
					}).then(res => {

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						that.$Message.info('订单添加成功');

					}).catch(function(err) {
						setTimeout(msg, 100);
						that.$Message.info('订单添加成功');

					})
				}

			},

			//是否为跳转
			isSkip: function() {

				if(this.$route.query.dealerId) {
					this.dealerDisabled = true
					var dealerId = this.$route.query.dealerId

					this.getClient(dealerId)
					this.getDealer(dealerId)
				}
				
				if(this.$route.query.clientId) {
					this.clientDisabled = true
					this.newlyobj.client=this.$route.query.clientId

					
				}

			}

		},

		mounted: function() {
			this.getdealerdata()

			var that = this

			that.axios({
				method: 'get',

				url: '/api/f/cities?levelType=1'

			}).then(function(res) {

				that.provinceData = res.data.data

			}).catch(function(err) {
				console.log(err)

			})

			this.axios({
				method: 'get',
				url: '/api/f/dealers/companies?status=1&pageNum=1&pageSize=99999',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data
				that.companyData = data.companyList

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})
			//是否从其他页面跳转过来
			this.isSkip()

		},

	}
</script>

<style scoped="scoped">

</style>