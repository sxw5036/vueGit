<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">财务记账</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建记账</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">

					<Form :label-width="150">

						<FormItem label="经销商">

							<Select v-model="accounts.companyId" placeholder="请选择经销商...">
								<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }}-{{ item.founderName }}</Option>
							</Select>

						</FormItem>

						<FormItem label="转入/支出">
							<RadioGroup v-model="accounts.type" @on-change="getfunds">
								<Radio label="1">转入</Radio>
								<Radio label="2">支出</Radio>
							</RadioGroup>
						</FormItem>

						<FormItem label="支付方式">

							<RadioGroup v-model="accounts.way">
								<Radio v-for="(item,index) in ways" :label="item.id" :key="item.id">{{item.name}}</Radio>

							</RadioGroup>
						</FormItem>

						<FormItem label="科目">

							<Select class="p_lea" v-model="accounts.funds">
								<Option v-for="(item,index) in financeFunds" :value="item.id" :key="item.id">{{item.name}}</Option>
							</Select>

						</FormItem>

						<FormItem label="支付日期">
							<DatePicker style="width: 100%;" type="date" @on-change="getpaytime" placeholder="请选择支付日期" :value="accounts.paytime"></DatePicker>
						</FormItem>

						<FormItem label="支付时间">
							<TimePicker v-model="accounts.payoperatedTime" format="HH:mm:ss" placeholder="请选择时间" style="width: 100%"></TimePicker>
						</FormItem>

						<FormItem label="金额">
							<Input v-model="accounts.amount" placeholder="请输入金额..."></Input>
						</FormItem>

						<FormItem label="记账人">
							<Select filterable v-model="accounts.holder" placeholder="请选择记账人...">
								<Option v-for="(item,index) in financeusers" :value="item.id" :key="item.id">{{item.name}}</Option>
							</Select>
						</FormItem>

						<FormItem label="备注">
							<Input type="textarea" v-model="accounts.notes" placeholder="请输入备注..."></Input>
						</FormItem>

						<FormItem label="附件">
							<div class="pl">

								<div class="demo-upload-list" v-for="(item,index) in accounts.files">

									<template>
										<img :src="item.imgRelPath">
										<div class="demo-upload-list-cover">
											<Icon type="ios-eye-outline" @click.native="handleView(item.imgRelPath)"></Icon>
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

					<div class="iv_form_but center">
						<button class="details_opBut auto linkBlock smallsize" @click="formeReset">重置</button>
						<button class="details_opBut linkBlock smallsize" @click="sure">确认</button>
						<!--<Button type="primary">确认</Button>-->

					</div>

				</div>

			</div>

			<div>

			</div>
		</div>

		<!--<div class="Quick_navigation">
			<div class="panel">
				<div class="panel_nav">
					<div class="panel_center">
						<h3 class="head">快速导航</h3>
						<div class="panel_con">
							<div class="navigation">
								<ul>
									<li>
										<a>客户</a>
									</li>

									<li>
										<a>设计方案</a>
									</li>

									<li>
										<a>经销商</a>
									</li>

									<li>
										<a>生产</a>
									</li>

									<li>
										<a>包装</a>
									</li>

									<li>
										<a>入库</a>
									</li>

									<li>
										<a>发货</a>
									</li>

									<li>
										<a>外协</a>
									</li>

								</ul>>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>-->

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				fundsdata: [],
				secondfundsdata: [],
				thirdlyfundsdata: [],
				fundsdataAll: [],
				financeusers: [],
				bankAccount: [],
				payways: [],

				accounts: {
					type: "",
					fund: "",
					funds: "",
					secondfunds: "",
					thirdlyfunds: "",
					amount: "",
					operator: "",
					paymentDate: "",
					notes: "",
					files: [],

				}, //款项
				companyData: [],
				financeFundsAll: [],
				financeFunds: [],
				ways: [], //所有支付方式				
				dealerFinancnceModel: false,
				dealeraccounts: {},

			   uploadpathdata: '/api/f/companyFinances/uploadImages',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},

			};
		},

		methods: {

			goback: function() {
				this.$emit('openWindow', ('keepAccounts'), ('财务记账'), ('16'), ('keepAccounts'), ('keepAccounts'))
				//              this.$router.push({
				//					name: 'client',
				//
				//				})
			},

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(index) {
				this.accounts.files.splice(index, 1)

			},
			handleSuccess(res, file) {

				var Res = res.data

				for(var i = 0; i < Res.length; i++) {
					this.accounts.files.push(Res[i])
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
			
			
			
			//获取支付科目

			getfunds: function() {

				var type = this.accounts.type

				if(type == 1) {
					this.financeFunds = this.financeFundsAll.fundsIn
				} else if(type == 2) {
					this.financeFunds = this.financeFundsAll.fundsOut
				}

			},

			getpaytime: function(val) {
				this.accounts.paytime = val
			},
			

			//获取可用经销商

			Getdealers: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies?status=1&pageNum=1&pageSize=999999999',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.companyData = data.companyList

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！22');

				})

			},

			//查询检索时所用科目接口

			Getfunds: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/payment_simples/funds',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.fundsdata = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},
			//查询财务人员信息
			Getfinusers: function() {
				var that = this

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

			},

			//查询创建经销商财务所用科目

			GetcompanyFinances: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/companyFinances/funds',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.financeFundsAll = data

					//that.searchfundsdata = data["fundsIn"].concat(data["fundsOut"])

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//查询创建经销商财务所用支付方式

			Getways: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/companyFinances/ways',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.ways = data.ways
				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！66');

				})

			},

			formeReset() {
				this.accounts = {
					companyId:"",
					type: "",
					fund: "",					
					holder:"",					
					amount: "",				
					way:'',
					notes: "",
					paytime:'',
					payoperatedTime:'',
					files: [],

				}

			},
			
			
			sure:function  () {
				
				
				var accounts = this.accounts
				var amount = accounts.amount
				var companyId = accounts.companyId
				var holder = accounts.holder
				var notes = accounts.notes
				var pay_time = accounts.paytime
				var payoperatedTime=accounts.payoperatedTime
				var funds = accounts.funds
				var type = accounts.type
				var way = accounts.way+''
				var filesdata = accounts.files
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
					this.$Message.error('请选择收支类型！');
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
						that.$Message.success("创建账目成功")
						that.formeReset()
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

				
			}

		},

		mounted: function() {

			var that = this
			this.Getdealers()
			//this.Getfunds()
			this.Getfinusers()
			this.GetcompanyFinances()
			this.Getways()

		},

	}
</script>

<style scoped="scoped">
	.Quick_navigation {
		width: 300px;
		position: fixed;
		z-index: 9;
		bottom: 70px;
		right: 20px;
	}
	
	.navigation {
		display: block;
		width: 100%;
		font-size: 0px;
	}
	
	.navigation ul {
		display: inline-block;
		width: 100%;
	}
	
	.navigation ul li {
		width: 33%;
		text-align: center;
		float: left;
		font-size: 14px;
		margin-bottom: 10px;
		color: #1890FF;
	}
	
	.navigation ul li a {
		color: #1890FF;
		text-decoration: underline;
	}
	
	.iv_form {
		display: block;
		width: 600px;
		padding: 30px 20px;
		background: #FFFFFF;
		border-radius: 6px;
	}
</style>