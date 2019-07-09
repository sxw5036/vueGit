<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">订单管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>编辑订单</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="iv_formbox">
			<div class="iv_form">
				<Tabs>
					<TabPane label="基本信息" name="name1">
						<Form :label-width="150" style="padding:10px;">

							<FormItem label="经销商">
								<Select style="width: 300px;" disabled="disabled" filterable v-model="newlyobj.companyId" @on-change="getClient(newlyobj.companyId)" placeholder="请选择经销商...">
									<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }}-{{ item.founderName }}</Option>
								</Select>

								<!--<Input disabled="disabled" style="width: 400px;" v-model="newlyobj.companyName" placeholder="请选择经销商..."></Input>
						<Button size="small" style="margin-left: 3px;" @click="getcompanyModel">选择经销商</Button>
						<div v-show="newlyobj.companyName!=''">
							{{newlyobj.companyFince}}
						</div>-->
							</FormItem>

							<FormItem label="客户">
								<Select style="width: 300px;" disabled="disabled" filterable v-model="newlyobj.client" @on-change="getdocumentary(newlyobj.client)" placeholder="请选择客户...">
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
							<!--<FormItem label="下单时间">
						<DatePicker type="date" placeholder="请选择下单时间" style="width: 100%" :value="newlyobj.orderTime" @on-change="handleChange"></DatePicker>
					</FormItem>-->

							<FormItem label="预计交货日期">
								<DatePicker type="date" v-model="newlyobj.estimatedDeliveryDate" @on-change="getestimatedDeliveryDate" style="width: 300px;"></DatePicker>
							</FormItem>

							<FormItem label="">
								<Button type="primary" @click="sure">确认</Button>
							</FormItem>

						</Form>
					</TabPane>

					<TabPane label="订单产品" name="name2">

						<Form :label-width="30" style="padding:10px;">
							<FormItem label="">
								<div class="order_product">

									<div class="p_itemAdd">
										<Button @click="addProduct">新增</Button>
									</div>

									<ul>
										
										<li class="p_item" v-show="pushProduct==true">

											<div class="op">
												<Button shape="circle" icon="ios-checkmark" @click="SureProduct()"></Button>
												<Button shape="circle" icon="ios-trash-outline" @click="offProduct()"></Button>
											</div>

											<FormItem label="">
												
												<p class="p_Ptitle">产品类型</p>
												
												<Select style="width: 300px;" v-model="orderProductObj.type" @on-change="orderProductObj.series='',orderProductObj.color='',orderProductObj.door=''" placeholder="请选择产品类型...">
													<Option v-for="(item, index) in orderType" :value="item.code" :key="item.id">{{item.value}}</Option>
												</Select>
											</FormItem>

											<FormItem label="" v-show="orderProductObj.type==0||orderProductObj.type==1">
												<p>产品系列</p>
												<Select style="width: 300px;" v-model="orderProductObj.series" placeholder="请选择产品系列...">
													<Option v-for="(item, index) in orderSeries" :value="item.code" :key="item.id">{{item.value}}</Option>
												</Select>
											</FormItem>

											<FormItem label="" v-show="orderProductObj.type==0||orderProductObj.type==1">
												<p>产品颜色</p>
												<Input style="width: 300px;" v-model="orderProductObj.color" placeholder="请输入产品颜色..."></Input>
											</FormItem>

											<FormItem label="" v-show="orderProductObj.type==0||orderProductObj.type==1">
												<p>门型</p>
												<Input style="width: 300px;" v-model="orderProductObj.door" placeholder="请输入门型..."></Input>
											</FormItem>

											<FormItem label="">
												<p>产品价格</p>
												<Input style="width: 300px;" v-model="orderProductObj.price" placeholder="请输入产品价格..."></Input>
											</FormItem>

											<FormItem label="">
												<p>备注</p>
												<Input style="width: 300px;" type="textarea" v-model="orderProductObj.notes" placeholder="请输入备注..."></Input>
											</FormItem>
										</li>

										<li class="p_item" v-for="(item,index) in orderProducts">

											<div class="op">
												<Button shape="circle" icon="ios-checkmark" @click="SurePutProduct(index,item.id)"></Button>
												<Button shape="circle" icon="ios-trash-outline" @click="delProduct(index,item.id)"></Button>
											</div>

											<FormItem label="">
												
												<p class="p_Ptitle">产品类型</p>
												
												<Select style="width: 300px;" v-model="item.type" @on-change="item.series='',item.color='',item.door=''" placeholder="请选择产品类型...">
													<Option v-for="(item, index) in orderType" :value="item.code" :key="item.id">{{item.value}}</Option>
												</Select>
											</FormItem>

											<FormItem label="" v-show="item.type==0||item.type==1">
												<p>产品系列</p>
												<Select style="width: 300px;" v-model="item.series" placeholder="请选择产品系列...">
													<Option v-for="(item, index) in orderSeries" :value="item.code" :key="item.id">{{item.value}}</Option>
												</Select>
											</FormItem>

											<FormItem label="" v-show="item.type==0||item.type==1">
												<p>产品颜色</p>
												<Input style="width: 300px;" v-model="item.color" placeholder="请输入产品颜色..."></Input>
											</FormItem>

											<FormItem label="" v-show="item.type==0||item.type==1">
												<p>门型</p>
												<Input style="width: 300px;" v-model="item.door" placeholder="请输入门型..."></Input>
											</FormItem>

											<FormItem label="">
												<p>产品价格</p>
												<Input style="width: 300px;" v-model="item.price" placeholder="请输入产品价格..."></Input>
											</FormItem>

											<FormItem label="">
												<p>备注</p>
												<Input style="width: 300px;" type="textarea" v-model="item.notes" placeholder="请输入备注..."></Input>
											</FormItem>

											<!--<FormItem label="产品类型">
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
									</FormItem>-->

										</li>
									</ul>
								</div>
							</FormItem>
						</Form>

					</TabPane>

				</Tabs>

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

			</div>

			<div>

			</div>
		</div>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				
				pushProduct:false,
				orderProductObj:"",

				orid: "",
				customOrder: "",
				dealerDisabled: false,

				newlyobj: {
					companyId: "",
					companyName: "",
					companyFince: "",
					client: "",
					customerManagerName: "",
					consigneeName: "",
					consigneeTel: '',
					address: "",
					estimatedDeliveryDate: "",
					notes: "",
					type: "",
					orderTime: "",
					isDesign: "0"
				},

				orderProducts: [],
				orderType: [],
				orderSeries: [],

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

			addProduct: function() {
				
				this.pushProduct=!this.pushProduct
				
				this.orderProductObj = {
					"type": "",
					"series": "",
					"color": "",
					"door": "",
					"price": "",
					"notes": "",

				}
				
//				var obj = {
//					type: "",
//					series: "",
//					color: "",
//					door: "",
//					notes: ""
//				}
//
//				this.orderProducts.unshift(obj)
			},
			
			
			offProduct: function() {
				
				this.pushProduct=!this.pushProduct
				
				this.orderProductObj = {
					"type": "",
					"series": "",
					"color": "",
					"door": "",
					"price": "",
					"notes": "",

				}
			},

			delOrderDtos: function(index) {
				this.produceOrderDtos.splice(index, 1)
			},
			
			
			SureProduct:function  () {
					var orderProductObj = this.orderProductObj

				var type = orderProductObj.type
				var series = orderProductObj.series
				var color = orderProductObj.color
				var door = orderProductObj.door
				var notes = orderProductObj.notes
				var price = orderProductObj.price

				var num = /^([0-9])+(.[0-9]{2})?$/

				if(type == "" || type == null) {
					this.$Message.error('产品类型不能为空！');
					return false;
				} else if(series == "" && type == 0) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(series == "" && type == 1) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(color == "" && type == 0) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(color == "" && type == 1) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(door == "" && type == 0) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(door == "" && type == 1) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(price == "" || price == null || price.trim().length == 0) {
					this.$Message.error('订单产品价格不能为空！');
					return false
				} else if(num.test(price) == false) {
					this.$Message.error('订单产品价格只能是数字,且只能是小数点后两位！');
					return false
				} else if(parseInt(price) >= 100000000) {
					this.$Message.error('订单产品价格数量过长！');
					return false
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this

					this.axios({
						method: 'post',
						url: '/api/f/customorders/' + this.orid + '/products',

						data: {
							"type": type,
							"series": (series == "") ? undefined : series,
							"color": (color == "") ? undefined : color,
							"door": (door == "") ? undefined : door,
							"notes": notes,
							"price": price
						}

					}).then(function(res) {

						var verify = [{
								"name": "type",
								"note": "产品类型"
							},
							{
								"name": "series",
								"note": "产品系列 "
							},
							{
								"name": "color",
								"note": "产品颜色"
							},
							{
								"name": "door",
								"note": "门型 "
							},
							{
								"name": "notes",
								"note": "描述"
							},

							{
								"name": "price",
								"note": "产品价格"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data
//						data.uploadFiles = []
//						
						that.$Message.success("添加成功")
//						data.type=data.type+''
//						data.series=data.series+''
//						
//						that.orderProducts.unshift(data)
//						that.pushProduct=!that.pushProduct

                       that.getdate()


					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						
					})

				}
			},
			
			SurePutProduct:function  (index,id) {
				
				
				var orderProductObj = this.orderProducts[index]
				
				console.log(orderProductObj)

				var type = orderProductObj.type
				var series = orderProductObj.series
				var color = orderProductObj.color
				var door = orderProductObj.door
				var notes = orderProductObj.notes
				var price = orderProductObj.price.toString()

				var num = /^([0-9])+(.[0-9]{2})?$/

				if(type == "" || type == null) {
					this.$Message.error('产品类型不能为空！');
					return false;
				} else if(series == "" && type == 0) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(series == "" && type == 1) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(color == "" && type == 0) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(color == "" && type == 1) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(door == "" && type == 0) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(door == "" && type == 1) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(price == "" || price == null || price.trim().length == 0) {
					this.$Message.error('订单产品价格不能为空！');
					return false
				} else if(num.test(price) == false) {
					this.$Message.error('订单产品价格只能是数字,且只能是小数点后两位！');
					return false
				} else if(parseInt(price) >= 100000000) {
					this.$Message.error('订单产品价格数量过长！');
					return false
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this

					this.axios({
						method: 'put',
						url: '/api/f/customorders/' + this.orid + '/products/' + id,

						data: {
							"type": type,
							"series": (series == "") ? undefined : series,
							"color": (color == "") ? undefined : color,
							"door": (door == "") ? undefined : door,
							"notes": notes,
							"price": price
						}

					}).then(function(res) {

						var verify = [{
								"name": "type",
								"note": "产品类型"
							},
							{
								"name": "series",
								"note": "产品系列 "
							},
							{
								"name": "color",
								"note": "产品颜色"
							},
							{
								"name": "door",
								"note": "门型 "
							},
							{
								"name": "notes",
								"note": "描述"
							},

							{
								"name": "price",
								"note": "产品价格"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data
						that.$Message.success("修改成功");
					

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						
					})

				}
				
			},
			
			delProduct:function  (index,pid) {
				
			

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + this.orid + '/products/' + pid,

				}).then(function(res) {

					var verify = [{
							"name": "type",
							"note": "产品类型"
						},
						{
							"name": "series",
							"note": "产品系列 "
						},
						{
							"name": "color",
							"note": "产品颜色"
						},
						{
							"name": "door",
							"note": "门型 "
						},
						{
							"name": "notes",
							"note": "描述"
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						that.pdel = false
						return false
					}
					var data = res.data.data
					that.orderProducts.splice(index, 1)
					that.$Message.success("删除成功")
					

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					
				})
				
			},

			goback: function() {
				this.$emit('openWindow', ('orderlist'), ('订单列表'), ('3-3'), ('orderlist'), ('orderlist'))
			},

			getdeliveryDate: function(val) {
				this.newlyobj.deliveryDate = val
			},

			getestimatedDeliveryDate: function(val) {
				this.newlyobj.estimatedDeliveryDate = val
			},

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

			newClient: function() {

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

				var newlyobj = this.newlyobj
				var address = newlyobj.address
				var type = newlyobj.type
				var acreage = newlyobj.acreage
				var customerTel = newlyobj.customerTel
				var notes = newlyobj.notes
				var deliveryDate = newlyobj.deliveryDate
				var estimatedDeliveryDate = newlyobj.estimatedDeliveryDate

				var consigneeName = newlyobj.consigneeName == undefined ? "" : newlyobj.consigneeName
				var consigneeTel = newlyobj.consigneeTel == undefined ? "" : newlyobj.consigneeTel

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				if(consigneeName == "" || consigneeName == null || consigneeName.trim().length == 0) {
					this.$Message.error('收货人姓名不能为空！');
					return false;
				} else if(consigneeTel.trim().length > 0 && tel.test(consigneeTel) == false && telephone.test(consigneeTel) == false && phone.test(consigneeTel) == false) {
					this.$Message.error('收货人电话格式不正确或为空！');
					return false;
				} else if(this.districMsg == "" || this.districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');
					return false;
				} else if(estimatedDeliveryDate == "" || estimatedDeliveryDate == null) {
					this.$Message.error('预计交货日期不能为空！');
					return false;
				}

				let that = this;

				/*if(!this.estimatedDeliveryDate == "") {
					var y = this.estimatedDeliveryDate.getFullYear();
					var m = this.estimatedDeliveryDate.getMonth() + 1;
					var d = this.estimatedDeliveryDate.getDate();
					this.estimatedDeliveryDates = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d)
				}
				if(!this.deliveryDate == "") {
					var sy = this.deliveryDate.getFullYear()
					var sm = this.deliveryDate.getMonth() + 1
					var sd = this.deliveryDate.getDate();
					this.deliveryDates = sy + "-" + (sm < 10 ? "0" + sm : sm) + "-" + (sd < 10 ? "0" + sd : sd)
				}
*/

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/' + this.orid,
					data: {
						address: address,
						//						acreage: acreage,
						consigneeName: consigneeName,
						consigneeTel: consigneeTel,
						type: type,
						notes: notes,
						/*	deliveryDate: (deliveryDate == "") ? undefined : deliveryDate + ' 00:00:00',*/
						estimatedDeliveryDate: (estimatedDeliveryDate == "") ? undefined : estimatedDeliveryDate,
						"cityAreaId": this.districMsg
					}
				}).then(res => {

					setTimeout(msg, 100);

					if(res != false) {

						that.$Message.success('修改完成');

					}
				})
			},

			getdate: function() {

				var that = this

				var id = this.orid

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'get',
					url: '/api/f/customorders/' + this.orid + '/info',

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.newlyobj = res.data.data.customOrder
					 that.orderProducts=[]
					
					for(var i=0; i<data.orderProducts.length;i++){
						
						var obj=data.orderProducts[i]
						    obj.type=obj.type+'';
						     obj.series=obj.series+'';
						    that.orderProducts.push(obj)
						
						
					}
					
					
					for(var i=0;i<that.orderProducts;i++){
						that.orderProducts[i].type="0000000"
					}
					
					console.log(that.orderProducts)
					
					var data = res.data.data

					that.provinceMsg = data.customOrder.cityId
					that.cityMsg = data.customOrder.provinceId
					that.districMsg = data.customOrder.cityAreaId
					that.getpickprovince(that.provinceMsg)
				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			getOrderType: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/basecodes?type=orderProductType',

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.orderType = data
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			getOrderSeries: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/basecodes?type=orderProductSeries',

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.orderSeries = data

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

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

			this.orid = this.$route.query.pathUrl

			this.getdate()
			this.getOrderType()
			this.getOrderSeries()

		},

	}
</script>

<style scoped="scoped">
	.upload-list {
		display: inline-block;
		width: 90px;
		height: 90px;
		text-align: center;
		line-height: 90px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
		margin-right: 4px;
	}
	
	.upload-list img {
		width: 100%;
		height: 100%;
	}
	
	.upload-list-cover {
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);
	}
	
	.upload-list:hover .upload-list-cover {
		display: block;
	}
	
	.upload-list-cover i {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}
	
	.order_product ul li.p_item {
		background: whitesmoke;
		padding: 10px;
		margin-bottom: 10px;
		position: relative;
	}
	
	.order_product ul li.p_item .op {
		z-index: 9;
		position: absolute;
		top: 10px;
		right: 10px;
	}
	
	.order_product .p_itemAdd {
		margin-bottom: 10px;
	}
	
	.order_product ul li .item {
		margin-bottom: 10px;
	}
	
	.order_center {
		display: inline-block;
		width: 100%;
	}
	
	.order_center .item {
		width: 50%;
		height: 500px;
		overflow: auto;
		float: left;
		box-sizing: border-box;
	}
	
	.order_center .item .ordermsg li {
		line-height: 30px;
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
	
	.border_none {
		border: 0px;
	}
	
	.item_head {
		display: inline-block;
		padding-left: 18px;
	}
	
	.item_head span {
		display: ;
		float: left;
		line-height: 30px;
		margin-bottom: 6px;
		margin-right: 20px;
		font-size: 14px;
		cursor: pointer;
	}
	
	.item_head span.active {
		color: #0B61A4;
		border-bottom: solid 2px #0B61A4;
	}
	
	.item_center {
		display: none;
	}
	
	.item_center.active {
		display: block;
		padding-left: 18px;
	}
	
	.order_head_statistics {
		height: 158px;
		font-size: 0px;
	}
	
	.order_head_statistics ul {
		width: 100%;
		display: inline-block;
	}
	
	.order_head_statistics ul li {
		float: left;
		width: 16.66%;
		text-align: center;
		padding-top: 20px;
	}
	
	.order_head_statistics ul li h3 {
		font-size: 55px;
		font-weight: 100;
		color: cornflowerblue;
	}
	
	.order_head_statistics ul li p {
		font-size: 14px;
		color: #000000;
	}
	
	.p_Ptitle{
		
	}
</style>