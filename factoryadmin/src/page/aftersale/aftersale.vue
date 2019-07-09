<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>售后申请管理</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="operation_box">
			<div class="active">
				<!---->
				<div class="ui_operateLeft" style="line-height: 32px;">
					<span class="operation_span">订单编号：</span>
					<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.customOrderNo" placeholder="请输入订单编号..." />

					<!--	<span class="operation_span">时间：</span>
					<DatePicker type="date" placeholder="开始时间" style="width: 200px"></DatePicker>
					-
					<DatePicker type="date" placeholder="结束时间" style="width: 200px"></DatePicker>
-->
					<Button icon="ios-search" @click="clicksearch">搜索</Button>
					<Button @click="newData" class="p_lea" shape="circle" icon="ios-refresh"></Button>
				</div>

				<div class="ui_operateRight">

					<Button type="primary" @click="establish">创建售后申请单</Button>

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

		<Drawer v-model="applyModel" title="处理申请" width="500">

			<Form :model="applyMsg" :label-width="100">

				<FormItem label="售后申请单号">
					<p>{{applyMsg.no}}</p>
				</FormItem>

				<FormItem label="订单编号">
					<p>{{applyMsg.orderNo}}</p>
				</FormItem>
				<FormItem label="售后类型">
					<p v-show="applyMsg.type==4">反馈单</p>
					<p v-show="applyMsg.type==5">补料单</p>

				</FormItem>

				<FormItem label="售后状态">
					<p v-show="applyMsg.status==0">待审核</p>
					<p v-show="applyMsg.status==1">待处理</p>
					<p v-show="applyMsg.status==2">同意售后申请</p>
					<p v-show="applyMsg.status==3">拒绝售后申请</p>
					<p v-show="applyMsg.status==4">已完成</p>

				</FormItem>

				<FormItem label="售后创建人">
					<p>{{applyMsg.creatorName}}</p>
				</FormItem>

				<FormItem label="创建日期">
					<p>{{applyMsg.created}}</p>
				</FormItem>

				<FormItem label="申请说明">
					<p>{{applyMsg.notes}}</p>
				</FormItem>

				<FormItem label="问题描述">
					<p>{{applyMsg.information}}</p>
				</FormItem>

				<FormItem label="是否同意售后">
					<Select style="width: 200px;" v-model="applyMsg.isconsent">
						<Option value="3">不同意售后</Option>
						<Option value="1">同意售后</Option>
					</Select>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="suredispose">确认</Button>
			</div>

		</Drawer>

		<!--创建售后单-s-->

		<Drawer v-model="establishModel" title="创建售后申请单" width="500">
           <div style="position: relative; height: 100%; overflow: auto; padding-bottom: 50px;">
			<Form :label-width="100">

				<FormItem label="售后类型">
					<RadioGroup true-value v-model="establishMsg.type">
						<Radio label="4">反馈单</Radio>
						<Radio label="5">补料单</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="经销商">
					<Input disabled="disabled" v-model="establishMsg.companyName" placeholder="请选择经销商..."></Input>
					<Button size="small" style="margin-left: 3px;"  @click="getcompanyModel">选择经销商</Button>
					<!--<Select style="width: 300px;" filterable v-model="establishMsg.companyId" @on-change="getClient(establishMsg.companyId)" placeholder="请选择经销商...">
						<Option v-for="(item,index) in companyData" :value="item.id" :key="index">{{ item.name }}</Option>
					</Select>-->
				</FormItem>

				<FormItem label="客户">
					<Select style="width: 300px;" filterable v-model="establishMsg.client" @on-change="getclientorder(establishMsg.client)" placeholder="请选择客户...">
						<Option v-for="item in clientdata" :value="item.userId" :key="item.userId">{{ item.customerName }}</Option>
					</Select>
				</FormItem>

				<FormItem label="源订单">
					<Select style="width: 300px;" filterable v-model="establishMsg.customOrderId" @on-change="getclientorderNo(establishMsg.customOrderId)" placeholder="请选择客户...">
						<Option v-for="item in customOrderdata" :value="item.orderId" :key="item.orderId">{{ item.orderNo }}</Option>
					</Select>
				</FormItem>

				<FormItem label="问题描述">
					<Input type="textarea" v-model="establishMsg.note" placeholder="请输入问题描述..."></Input>
				</FormItem>

				<FormItem label="建议&意见">
					<Input type="textarea" v-model="establishMsg.information" placeholder="请输入建议&意见..."></Input>
				</FormItem>

				<FormItem label="附件">
					<div class="pl">

						<div class="demo-upload-list" v-for="(item,index) in establishMsg.files">

							<template>
								<img :src="item.imagePath">
								<div class="demo-upload-list-cover">
									<Icon type="ios-eye-outline" @click.native="handleView(item.imagePath)"></Icon>
									<Icon type="ios-trash-outline" @click.native="handleRemove(index)"></Icon>
								</div>
							</template>

						</div>
						<Upload multiple ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFiles" style="display: inline-block;width:58px;">
							<div style="width: 58px;height:58px;line-height: 58px;">
								<Icon type="ios-camera" size="20"></Icon>
							</div>
						</Upload>
					</div>
				</FormItem>

			</Form>
			</div>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureAdd">确认添加</Button>
			</div>
		</Drawer>

		<Modal title="查看大图" v-model="visible">
			<div class="show_img">
				<img :src="imgName" style="width: 100%">
			</div>

			<div slot="footer" style="border: none;"></div>

		</Modal>

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

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [{
						title: '订单编号',
						key: "orderNo",
						width: 200,
						fixed: "left",
					},

					{
						title: '售后状态 ',
						key: 'type',

						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var text = "待审核"
							} else if(status == 1) {
								var text = "待处理"
							} else if(status == 2) {
								var text = "同意售后申请"
							} else if(status == 3) {
								var text = "拒绝售后申请"
							} else if(status == 4) {
								var text = "已完成"
							}
							return h('div', text)
						}
					},

					{
						title: '售后类型 ',
						key: 'type',

						render: (h, params) => {

							var type = params.row.type

							if(type == 4) {
								var text = "反馈单"
							} else if(type == 5) {
								var text = "补料单"
							}
							return h('div', text)
						}
					},

					{
						title: '经销商',
						key: "companyName",

					},

					{
						title: 'c端客户姓名',
						key: "customerName",

					},

					{
						title: '创建时间',
						key: "created",

					},

					/*
										{
											title: '产品类型',
											key: "productType",
											render: (h, params) => {

												var productType = params.row.productType

												if(productType == 0) {
													var text = "橱柜(J)"
												} else if(productType == 1) {
													var text = "衣柜(B)"
												} else if(productType == 2) {
													var text = "成品家具(J)"
												} else if(productType == 3) {
													var text = "电器(J)"
												} else if(productType == 4) {
													var text = "五金(J)"
												} else if(productType == 5) {
													var text = "样块(Y)"
												}
												return h('div', text)
											}

										},
										{
											title: '产品系列',
											key: "productSeries",
											render: (h, params) => {

												var productSeries = params.row.productSeries

												if(productSeries == 0) {
													var text = "定制实木"
												} else if(productSeries == 1) {
													var text = "特供实木"
												} else if(productSeries == 2) {
													var text = "美克"
												} else if(productSeries == 3) {
													var text = "康奈"
												} else if(productSeries == 4) {
													var text = "惠娜"
												} else if(productSeries == 5) {
													var text = "模压"
												}
												return h('div', text)
											}

										},*/

					{
						title: '操作',
						key: 'action',
						width: 200,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							var status = params.row.status

							if(status != 4) {
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
												this.SetIndex = params.index
												this.geinfo()
											}
										}
									}, '处理'),

								]);

							}

						}

					}

				],

				tableData: [], //表格数据
				applyModel: false,
				applyMsg: {},

				companyData: [],
				clientdata: [],
				customOrderdata: [],

				establishModel: false,
				establishMsg: {
					orderNo: "",
					companyId: "",
					notes: "",
					type: "",
					customOrderId: "",
					information: "",
					files: []
				},

				uploadpathdata: '/api/f/aftersales/v2/aftersaleApplies/addfiles',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},

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

											this.establishMsg.companyName = data.name + '-' + data.leaderName;
											this.establishMsg.companyId = data.id;
											this.getClient(data.id)

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

				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

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

			//创建窗口

			establish: function() {
				this.establishModel = true
				this.establishMsg = {
						companyId: "",
						notes: "",
						type: "",
						customOrderId: "",
						information: "",
						files: []
					},
					this.clientdata = []
				this.customOrderdata = []

			},

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},

			handleRemove: function(index) {
				this.establishMsg.files.splice(index, 1)
			},

			handleSuccess(res, file) {

				var data = res.data

				for(var i = 0; i < data.length; i++) {
					this.establishMsg.files.push(data[i])
				}

			},
			handleFormatError(file) {
				this.$Notice.warning({
					title: '文件格式不正确',
					desc: '' + file.name + '文件格式不正确，请选择jpg,jpeg或png'
				});
			},
			handleMaxSize(file) {
				this.$Notice.warning({
					title: '超过文件大小限制',
					desc: '' + file.name + '文件太大，不超过5M'
				});
			},
			handleBeforeUpload(file) {

				this.file = file
				this.uparry.multipartFileList.push(this.file)

			},

			//根据经销商查询客户
			getClient: function(cid) {
				var that = this
				that.establishMsg.client = ""
				that.establishMsg.customOrderId = ""

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'get',
					url: '/api/f/aftersales/v2/dealers/' + cid + '/customers',

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

			getclientorder: function(obj) {
				this.establishMsg.customOrderId = ""

				for(var i = 0; i < this.clientdata.length; i++) {

					if(obj == this.clientdata[i].userId) {

						this.customOrderdata = this.clientdata[i].customOrderList
					}

				}

			},

			getclientorderNo: function(obj) {

				for(var i = 0; i < this.customOrderdata.length; i++) {

					if(obj == this.customOrderdata[i].orderId) {

						this.establishMsg.orderNo = this.customOrderdata[i].orderNo

					}

				}

			},

			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch = true) {
					this.searchData()
				} else {
					this.getDatas()
				}

			},

			//检索信息

			clicksearch: function() {
				var searchobj = this.searchObj

				var customOrderNo = searchobj.customOrderNo+'';

				if(customOrderNo.trim().length == 0) {
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

				var customOrderNo = searchobj.customOrderNo;

				var pathurl = ""

				if(customOrderNo != "" && customOrderNo != null && customOrderNo.trim().length != 0) {
					pathurl += 'orderNo=' + customOrderNo + "&"
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
					url: '/api/f/aftersales/v2/aftersaleApplies?status=0&' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					that.tableData = data
					that.pageIndextotal = parseInt(dataAll.pagination.total)
					//that.$Message.success("请求成功")
					that.isSearch = true
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			sureAdd: function() {

				var establishMsg = this.establishMsg

				var companyId = establishMsg.companyId
				var note = establishMsg.note
				var type = establishMsg.type
				var customOrderId = establishMsg.customOrderId
				var information = establishMsg.information
				var orderNo = establishMsg.orderNo
				var customerId = establishMsg.client

				//
				var fileIdsdata = []

				for(var i = 0; i < this.establishMsg.files.length; i++) {
					fileIdsdata.push(this.establishMsg.files[i].fileId)
				}

				var fileIds = fileIdsdata.join(",")

				if(type == "" || type == null) {
					this.$Message.error('售后单类型不能为空！');
					return false;
				} else if(companyId == "" || companyId == null) {
					this.$Message.error('经销商不能为空！');
					return false;
				} else
					/*if(customOrderId==""||customOrderId==null){
					this.$Message.error('源订单不能为空！');
					return false;
				}else*/
					if(note == "" || note == null || note.trim().length == 0) {
						this.$Message.error('问题描述不能为空！');
						return false;
					} else if(information == "" || information == null || information.trim().length == 0) {
					this.$Message.error('建议&意见不能为空！');
					return false;
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				/*' + this.pathstatus + pathurl + '*/
				this.axios({
					method: 'post',
					url: '/api/f/aftersales/v2/add',
					data: {
						companyId: companyId,
						notes: note,
						type: type,
						customOrderId: customOrderId,
						information: information,
						fileIds: fileIds,
						no: orderNo,
						customerId: customerId
					}

				}).then(function(res) {
					setTimeout(msg, 100);

					var verify = [{
							"name": "companyId",
							"note": "经销商"
						},
						{
							"name": "notes",
							"note": "问题描述 "
						},
						{
							"name": "type",
							"note": "售后类型"
						},
						{
							"name": "customOrderId",
							"note": "源订单 "
						},
						{
							"name": "information",
							"note": "建议"
						},

					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					var data = res.data.data
					that.$Message.success("创建成功")
					that.establishModel = false
					that.newData()
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {
						"no": "",
						"customerTel": "",
					},
					this.pageIndex = 1
				this.getDatas()

			},

			//售后单详情

			geinfo: function() {

				var id = this.tableData[this.SetIndex].aftersaleId
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/aftersales/v2/aftersaleApplies/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.applyMsg = data.aftersaleApply
					that.applyMsg.isconsent = ""
					that.applyModel = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//确认处理售后申请

			suredispose: function() {
				var id = this.tableData[this.SetIndex].aftersaleId

				var status = this.applyMsg.isconsent

				if(status == "" || status == null) {
					this.$Message.error('请选择是否同意售后');
					return false;
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				/*' + this.pathstatus + '*/
				this.axios({
					method: 'put',
					url: '/api/f/aftersales/v2/aftersaleApplies/' + id + '/status/' + status,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.$Message.success("操作成功")
					//that.tableData[that.SetIndex].status =data.status
					that.tableData.splice(that.SetIndex, 1)
					that.applyModel = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

				/**/

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
					that.companyData = data.companyList;
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

			getDatas: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				/*' + this.pathstatus + '*/
				this.axios({
					method: 'get',
					url: '/api/f/aftersales/v2/aftersaleApplies?status=0&pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data
					for(var i = 0; i < data.length; i++) {
						data[i].ispick = false
					}
					that.tableData = data
					that.pageIndextotal = parseInt(dataAll.pagination.total)

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
			this.Getdealers()

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
	
	p.hover {
		cursor: pointer;
	}
</style>

<style src='./../../assets/css/department.css'></style>