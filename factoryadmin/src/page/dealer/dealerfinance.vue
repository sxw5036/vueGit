<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>经销商财务管理</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">

			<div class="active">

				<div class="ui_operateLeft">
					<span class="operation_span">名称：</span>
					<input style="width: 200px;" class="iv_input"  id="p_lea" v-model="searchObj.name" placeholder="请输入店铺名称..." />

					<span class="operation_span">科目：</span>
					<Select style="width: 200px;" class="p_lea" v-model="searchObj.funds" id="p_lea">
						<Option v-for="(item,index) in fundsdata" :value="item.id" :key="item.id">{{item.name}}</Option>
					</Select>

					<Button icon="ios-search" @click="clicksearch">搜索</Button>
					<Button @click="newData" shape="circle" icon="ios-refresh"></Button>
				</div>

				<div class="ui_operateRight">
					<Button type="primary" @click="openModel">创建财务</Button>

				</div>
			</div>

		</div>

		<!-- 经销商列表 -->
		<div class="department_center">

			<Table border :loading="loading" :columns="dealerHeader" :data="tableData" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_page">
					<Page :current="pageIndex" :total="pageTotal" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
				</div>

			</div>

		</div>

		<!--经销商公司详情-->
		<Modal v-model="companyDetailOpen" title="经销商公司信息" width="860">
			<div class="company_account">

				<ul>
					<li>
						<p><span>公司编号</span>{{companyDetail.no}}</p>
					</li>

					<li>
						<p><span>公司名称</span>{{companyDetail.name}}</p>
					</li>

					<li>
						<p><span>银行开户行</span>{{companyDetail.depositBank}}</p>
					</li>

					<li>
						<p><span>银行开户账号</span>{{companyDetail.bankAccount}}</p>
					</li>

					<li>
						<p><span>银行开户人</span>{{companyDetail.bankAccountHolder}}</p>
					</li>
				</ul>

			</div>

			<div class="company_capital">

				<div class="capital_item">
					<div class="nav">
						<div class="capital_Money">
							<p>11000</p>
							<div class="more_op">
								<Button type="primary" @click="pushincome">创建收入</Button>
								<Button type="primary" @click="pushexpenditure">创建支出</Button>
							</div>
						</div>
					</div>
				</div>

				<div class="capital_item">
					<div class="nav">
						<Table border height="300px" :columns="capitalHeader" :data="capitalData" ref="table"></Table>
					</div>
				</div>

			</div>
			<div slot="footer"></div>
		</Modal>

		<!--创建经销商财务-->

		<Drawer v-model="dealerFinancnce" title="创建收入" width="500">
			<Form :label-width="100">

				<FormItem label="经销商">
					<Select filterable v-model="financeMsg.dealerId" placeholder="请选择经销商...">
						<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>

				<FormItem label="转入/支出">
					<RadioGroup v-model="financeMsg.type" @on-change="getfunds">
						<Radio label="1">转入</Radio>
						<Radio label="2">支出</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="支付方式">

					<RadioGroup v-model="financeMsg.way">
						<Radio v-for="(item,index) in ways" :label="item.id" :key="item.id">{{item.name}}</Radio>

					</RadioGroup>
				</FormItem>

				<FormItem label="科目">

					<Select class="p_lea" v-model="financeMsg.funds">
						<Option v-for="(item,index) in financeFunds" :value="item.id" :key="item.id">{{item.name}}</Option>
					</Select>

				</FormItem>

				<FormItem label="支付日期">
					<DatePicker style="width: 100%;" type="date" @on-change="getpaytime" placeholder="请选择支付日期" :value="financeMsg.paytime"></DatePicker>
				</FormItem>
				
				<FormItem label="支付时间">
						<TimePicker v-model="parcelObj.payoperatedTime" format="HH:mm:ss" placeholder="请选择时间" style="width: 300px"></TimePicker>
				</FormItem>
				

				<FormItem label="金额">
					<Input v-model="financeMsg.amount" placeholder="请输入金额..."></Input>
				</FormItem>

				<FormItem label="记账人">
					<Select filterable v-model="financeMsg.holder" placeholder="请选择操作人...">
						<Option v-for="(item,index) in financeusers" :value="item.id" :key="item.id">{{item.name}}</Option>
					</Select>
				</FormItem>

				<FormItem label="备注">
					<Input v-model="financeMsg.notes" placeholder="请输入备注..."></Input>
				</FormItem>

				<FormItem label="附件">
					<div class="pl">

						<div class="demo-upload-list" v-for="(item,index) in financeMsg.files">

							<template>
								<img :src="item.imgFullPath">
								<div class="demo-upload-list-cover">
									<Icon type="ios-eye-outline" @click.native="handleView(item.imgFullPath)"></Icon>
									<Icon type="ios-trash-outline" @click.native="handleRemove(index)"></Icon>
								</div>
							</template>

						</div>
						<Upload multiple ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFileList" style="display: inline-block;width:58px;">
							<div style="width: 58px;height:58px;line-height: 58px;">
								<Icon type="ios-camera" size="20"></Icon>
							</div>
						</Upload>
					</div>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureAddfinance">确认</Button>
			</div>

		</Drawer>


            <!--经销商财务详情-->
            
            
            <Drawer v-model="dealerFinancnceModel" title="创建收入" width="500">
			<Form :label-width="100">

				<FormItem label="经销商">
				<p>{{dealerfinanceMsg.companyName}}</p>
				</FormItem>

				<FormItem label="转入/支出">
					<p>{{dealerfinanceMsg.typeName}}</p>
				</FormItem>

				<FormItem label="支付方式">

				{{dealerfinanceMsg.way}}
				</FormItem>

				<FormItem label="科目">

					{{dealerfinanceMsg.fundsName}}
				</FormItem>

				<FormItem label="支付时间">
					{{dealerfinanceMsg.created}}
		        </FormItem>

				<FormItem label="金额">
					{{dealerfinanceMsg.amount}}
				</FormItem>


				<FormItem label="备注">
					{{dealerfinanceMsg.notes}}
				</FormItem>

				<FormItem label="附件">
					<div class="pl">

						<div class="demo-upload-list" v-for="(item,index) in dealerfinanceMsg.fileList">

							<template>
								<img :src="item.imgFullPath">
								<div class="demo-upload-list-cover">
									<Icon type="ios-eye-outline" @click.native="handleView(item.imgFullPath)"></Icon>
									
								</div>
							</template>

						</div>
						
					</div>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureAddfinance">确认</Button>
			</div>

		</Drawer>


		<!--创建收支-->

		<!--<Drawer v-model="incomeModel" title="创建收入" width="500">
			
		

			<Form :label-width="100">
				
					<FormItem label="经销商">
						<Select style="width: 300px;" filterable v-model="dealerId"  placeholder="请选择经销商...">
							<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>
					</FormItem>
				
				<FormItem label="支付方式">
					<RadioGroup v-model="payType">
						<Radio label="0">银行转账</Radio>
						<Radio label="1">现金</Radio>
					</RadioGroup>
				</FormItem>

				<div v-show="payType==0">
					
					<FormItem label="支付时间">
						<DatePicker type="date" @on-change="getpaytime" placeholder="请选择支付时间" :value="incomeBank.paytime"></DatePicker>					
					</FormItem>
					
					<FormItem label="金额">
						<Input v-model="incomeBank.amount" placeholder="请输入金额..."></Input>
					</FormItem>

					<FormItem label="开户银行">
						<Input v-model="incomeBank.depositBank" placeholder="请输入开户银行..."></Input>
					</FormItem>

					<FormItem label="开户姓名">
						<Input v-model="incomeBank.bankAccountHolder" placeholder="请输入开户姓名..."></Input>
					</FormItem>

					<FormItem label="银行账号">
						<Input v-model="incomeBank.bankAccount" placeholder="请输入银行账号..."></Input>
					</FormItem>

					<FormItem label="充值项目">
						<Input v-model="incomeBank.founderName" placeholder="请输入充值项目..."></Input>
					</FormItem>
				</div>

				<div v-show="payType==1">
					
					<FormItem label="支付时间">
						<DatePicker type="date" @on-change="getpaytime" placeholder="请选择支付时间" :value="incomeCash.paytime"></DatePicker>					
					</FormItem>
					
					<FormItem label="金额">
						<Input v-model="incomeCash.amount" placeholder="请输入金额..."></Input>
					</FormItem>

					<FormItem label="开户银行">
						<Input v-model="incomeCash.depositBank" placeholder="请输入开户银行..."></Input>
					</FormItem>

					<FormItem label="充值项目">
						<Input v-model="incomeCash.founderName" placeholder="请输入充值项目..."></Input>
					</FormItem>

				</div>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="suerpushincome">确认</Button>
			</div>

		</Drawer>-->

		<!--创建收支-->

		<!--	<Drawer v-model="expenditureModel" title="创建支出" width="500">
			
			

			<Form :label-width="100">
				
				<FormItem label="经销商">
						<Select style="width: 300px;" filterable v-model="dealerId"  placeholder="请选择经销商...">
							<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>
					</FormItem>
				
				<FormItem label="支付方式">
					<RadioGroup v-model="payType">
						<Radio label="0">银行转账</Radio>
						<Radio label="1">现金</Radio>
					</RadioGroup>
				</FormItem>

				<div v-show="payType==0">
					
					<FormItem label="支付时间">
						<DatePicker type="date" @on-change="getpaytime" placeholder="请选择支付时间" :value="expenditureBank.paytime"></DatePicker>					
					</FormItem>					
					
					<FormItem label="金额">
						<Input v-model="expenditureBank.amount" placeholder="请输入金额..."></Input>
					</FormItem>

					<FormItem label="开户银行">
						<Input v-model="expenditureBank.depositBank" placeholder="请输入开户银行..."></Input>
					</FormItem>

					<FormItem label="开户姓名">
						<Input v-model="expenditureBank.bankAccountHolder" placeholder="请输入开户姓名..."></Input>
					</FormItem>

					<FormItem label="银行账号">
						<Input v-model="expenditureBank.bankAccount" placeholder="请输入银行账号..."></Input>
					</FormItem>

					<FormItem label="充值项目">
						<Input v-model="expenditureBank.founderName" placeholder="请输入充值项目..."></Input>
					</FormItem>
				</div>

				<div v-show="payType==1">
					
					<FormItem label="支付时间">
						<DatePicker type="date" @on-change="getpaytime" placeholder="请选择支付时间" :value="expenditureCash.paytime"></DatePicker>					
					</FormItem>

					<FormItem label="金额">
						<Input v-model="expenditureCash.amount" placeholder="请输入金额..."></Input>
					</FormItem>

					<FormItem label="开户银行">
						<Input v-model="expenditureCash.depositBank" placeholder="请输入开户银行..."></Input>
					</FormItem>

					<FormItem label="充值项目">
						<Input v-model="expenditureCash.founderName" placeholder="请输入充值项目..."></Input>
					</FormItem>

				</div>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="suerpushexpenditure">确认</Button>
			</div>

		</Drawer>-->

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

				dealerHeader: [{
						title: '店铺名称',
						key: "companyName",
						width: 200,
						fixed: "left",

					},

					{
						title: '类型',
						key: 'typeName',

					},

					{
						title: '科目',
						key: 'fundsName',

					},

					{
						title: '金额',
						key: 'amount',

					},

					{
						title: '创建时间',
						key: 'created',

					},

					{
						title: '操作',
						key: 'action',
						width: 180,
						fixed: 'right',
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
											/*this.companyDetail = this.tableData[params.index]*/

											this.getcompanyDetail()
										}
									}
								}, '详情'),

							])

						}
					}
				],

				tableData: [], //经销商数据
				companyData: [],
				fundsdata: [],
				//经销商公司财务变更记录
				companyDetailOpen: false,
				companyDetail: {},
				capitalHeader: [{
						title: '日期',
						key: 'time',

					},

					{
						title: '类型',
						key: 'type',

					},

					{
						title: '金额',
						key: 'type',

					},

					{
						title: '经手人',
						key: 'type',

					},

					{
						title: '操作',
						fixed: 'right'
					},
				],
				capitalData: [],
				financeusers: [], //财务人员信息
				dealerFinancnce: false,
				financeMsg: {
					amount: "",
					dealerId: "",
					type: "",
					funds: "",
					paytime: "",
					holder: "",
					notes: "",
					files: []
				},
				financeFundsAll: [],
				financeFunds: [],
				ways: [], //所有支付方式				
				dealerFinancnceModel:false,
				dealerfinanceMsg:{},

				payType: "0", //支付方式
				dealerId: "",
				incomeModel: false,
				incomeBank: {},
				incomeCash: {},

				expenditureModel: false,
				expenditureBank: {},
				expenditureCash: {},

				/**/
				uploadList: [],
				defaultList: [],
				uploadpathdata: '/api/f/companyFinances/uploadImages',
				uparry: {
					multipartFileList: []
				},
				imgName: "",
				visible: false,
				SetIndex: '', //选择数据的位置
				pageIndex: 1, //分页页数
				pageTotal: 0, //数据总数
				pageSize: 10, //单页数据量
				loading: true,
				tableHeight: 500,
				searchObj: { //检索对象
					"name": "",
					"mobile": "",
					"no": "",
					"type": "",
					"funds": ""

				},
				isSearch: false,
				joinOpen: false,
				join: {},
				isbegin: false,
				operation: {
					add: false,
					info: false,
					delete: false,
					update: false,
					view: false
				}

			};
		},

		methods: {

			//up

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(index) {
				this.financeMsg.files.splice(index, 1)

			},
			handleSuccess(res, file) {

				var Res = res.data

				for(var i = 0; i < Res.length; i++) {
					this.financeMsg.files.push(Res[i])
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

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '经销商列表'
				});
			},

			//刷新数据
			newData: function() {
				this.isSearch = false
				this.searchObj = {

						name: "",
						mobile: "",
						no: "",
						type: "",
						funds: ""

					},

					this.pageIndex = 1
				this.Getdata()

			},

			//检索信息
			clicksearch: function() {
				var searchobj = this.searchObj

				var name = searchobj.name
				var funds = searchobj.funds
				/*		var no = searchobj.no
				var type = searchobj.type
*/
				if(name.trim().length == 0 && funds.length == 0) {
					this.newData();

					return false;
				} else {
					this.pageIndex = 1
					this.searchData()
				}

			},

			//检索接口
			searchData: function() {

				var searchobj = this.searchObj

				var name = searchobj.name
				var funds = searchobj.funds

				var pathurl = ""

				if(name != "" && name != null && name.trim().length != 0) {
					pathurl += 'companyName=' + name + "&"
				}

				if(funds != "" && funds != null) {
					pathurl += 'funds=' + funds + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
				//请求经销商列表
				this.axios({
					method: 'get',
					url: '/api/f/companyFinances/companies/payments?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.pageTotal = res.data.pagination.total
					var data = res.data.data.companyList

					that.tableData = data
					that.isSearch = true
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch == true) {
					this.searchData()
				} else {
					this.Getdata()
				}

			},

			//

			pushincome: function() {
				this.payType = "0"
				this.companyDetailOpen = false;
				this.incomeModel = true;
				this.incomeBank = {}
				this.incomeCash = {}
			},

			pushexpenditure: function() {
				this.payType = "0"
				this.companyDetailOpen = false;
				this.expenditureModel = true;
				this.expenditureBank = {}
				this.expenditureCash = {}
			},

			//获取支付科目

			getfunds: function() {

				var type = this.financeMsg.type

				if(type == 1) {
					this.financeFunds = this.financeFundsAll.fundsIn
				} else if(type == 2) {
					this.financeFunds = this.financeFundsAll.fundsOut
				}

			},

			getpaytime: function(val) {
				this.financeMsg.paytime = val
			},

			openModel: function() {
				this.dealerFinancnce = true
				this.financeMsg = {
					amount: "",
					dealerId: "",
					type: "",
					funds: "",
					paytime: "",
					holder: "",
					notes: "",
					way: "",
					files: []
				}
			},

			//新建经销商收支信息
			sureAddfinance: function() {

				var financeMsg = this.financeMsg
				var amount = financeMsg.amount
				var companyId = financeMsg.dealerId
				var holder = financeMsg.holder
				var notes = financeMsg.notes
				var pay_time = financeMsg.paytime
				var payoperatedTime=financeMsg.payoperatedTime
				var funds = financeMsg.funds
				var type = financeMsg.type
				var way = financeMsg.way.toString()
				var filesdata = financeMsg.files
				var files = []
				var filesIds = ""

				for(var i = 0; i < filesdata.length; i++) {
					files.push(filesdata[i].fileId)
				}
				filesIds = files.join(',')

				if(companyId == "" || companyId == null) {
					this.$Message.error('请选择经销商！');
					return false;
				} else if(type == "" || type == null) {
					this.$Message.error('请选择类型！');
					return false;
				} else if(way == "" || way == null) {
					this.$Message.error('请选择支付类型！');
					return false;
				} else if(funds == "" || funds == null) {
					this.$Message.error('请选择科目！');
					return false;
				} else if(pay_time == "" || pay_time == null) {
					this.$Message.error('请选择支付时间！');
					return false;
				} else if(amount == "" || amount == null || amount.trim().length == 0) {
					this.$Message.error('请输入金额信息！');
					return false;
				} else if(holder == "" || holder == null) {
					this.$Message.error('请选择经办人！');
					return false;
				}
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'post',
					url: '/api/f/companyFinances/add',
					data: {
						amount: amount,
						companyId: companyId,
						fileIds: filesIds,
						funds: funds,
						holder: holder,
						notes: notes,
						pay_time:payoperatedTime==""||payoperatedTime==undefined?pay_time+' 00:00:00':pay_time+' '+payoperatedTime,				
						type: type,
						way: way

					}

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.tableData.unshift(data)
					that.$Message.success("添加成功")
					that.dealerFinancnce = false
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//查看经销商财务信息

			getcompanyDetail: function() {
				var id = this.tableData[this.SetIndex].paymentId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/companyFinances/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.dealerfinanceMsg = data
					that.dealerFinancnceModel = true
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//获取支付时间

			/*
			suerpushincome: function() {

				var payType = this.payType
				var banck = this.incomeBank
				var cash = this.incomeCash

				if(payType == "0") {
					var paytime = banck.paytime
					var amount = banck.amount

					if(paytime == "" || paytime == null) {
						this.$Message.error('请选择支付时间！');
						return false;
					} else if(amount == "" || amount == null || amount.trim().length == 0) {
						this.$Message.error('请输入金额！');
						return false;
					}

				} else if(payType == 1) {
					var paytime = cash.paytime
					var amount = cash.amount

					if(paytime == "" || paytime == null) {
						this.$Message.error('请选择支付时间！');
						return false;
					} else if(amount == "" || amount == null || amount.trim().length == 0) {
						this.$Message.error('请输入金额！');
						return false;
					}
				}

			},

			suerpushexpenditure: function() {
				var payType = this.payType
				var banck = this.expenditureBank
				var cash = this.expenditureCash

				if(payType == "0") {
					var paytime = banck.paytime
					var amount = banck.amount

					if(paytime == "" || paytime == null) {
						this.$Message.error('请选择支付时间！');
						return false;
					} else if(amount == "" || amount == null || amount.trim().length == 0) {
						this.$Message.error('请输入金额！');
						return false;
					}

				} else if(payType == 1) {
					var paytime = cash.paytime
					var amount = cash.amount

					if(paytime == "" || paytime == null) {
						this.$Message.error('请选择支付时间！');
						return false;
					} else if(amount == "" || amount == null || amount.trim().length == 0) {
						this.$Message.error('请输入金额！');
						return false;
					}
				}
			},*/

			Getdata: function() {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

				//请求经销商列表
				this.axios({
					method: 'get',
					url: '/api/f/companyFinances/companies/payments?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.pageTotal = res.data.pagination.total
					var data = res.data.data

					that.tableData = data
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			}

		},

		mounted: function() {

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.tableHeight = (document.body.clientHeight - 350)

			this.Getdata();

			var that = this

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

			this.axios({
				method: 'get',
				url: '/api/f/payment_simples/funds',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data
				that.fundsdata = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试!');

			})

			this.axios({
				method: 'get',
				url: '/api/f/payment_simples/users',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data
				that.financeusers = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

			this.axios({
				method: 'get',
				url: '/api/f/companyFinances/funds',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data
				that.financeFundsAll = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试');

			})

			this.axios({
				method: 'get',
				url: '/api/f/companyFinances/ways',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data
				that.ways = res.data.ways

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
	
	.latlng span:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	
	.DrawerMap_tip {
		line-height: 36px;
	}
	
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
	
	.companyDetail p {
		display: block;
		line-height: 32px;
		height: 32px;
		padding: 0px 5px;
		border-radius: 6px;
		border: solid 1px #dcdee2;
		box-sizing: border-box;
	}
	
	.companyfiles {
		display: inline-block;
		padding-top: 5px;
		width: 100%;
	}
	
	.companyfiles .companyfiles_file {
		width: 120px;
		height: 120px;
		float: left;
		display: block;
		margin-right: 15px;
	}
	
	.companyfiles .companyfiles_file h5 {
		display: block;
		width: 120px;
		height: 120px;
		background-position: 50% 50%;
		background-size: cover;
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
	
	.company_account {
		padding: 10px;
		background: #EEEEEE;
	}
	
	.company_account ul li {
		font-size: 14px;
		line-height: 30px;
	}
	
	.company_account ul li span {
		display: inline-block;
		width: 100px;
	}
	
	.company_capital {
		display: inline-block;
		width: 100%;
		margin-top: 16px;
	}
	
	.company_capital .capital_item {
		width: 50%;
		float: left;
		background: #EEEEEE;
	}
	
	.capital_item .nav {
		padding: 16px;
		height: 332px;
	}
	
	.capital_item .capital_Money p {
		display: block;
		text-align: center;
		font-size: 30px;
		color: orangered;
		font-weight: bold;
		padding-top: 100px;
		height: 300px;
	}
	
	.capital_item .capital_Money {
		position: relative;
	}
	
	.capital_Money .more_op {
		position: absolute;
		bottom: 0px;
		left: 0px;
	}
	
	.payTypeMu {
		display: inline-block;
		width: 100%;
	}
	
	.payTypeMu ul {
		display: block;
		width: 100%;
	}
	
	.payTypeMu ul li {
		width: 50%;
		text-align: center;
		font-size: 14px;
		float: left;
		font-weight: bold;
	}
</style>

<style src='./../../assets/css/department.css'></style>