<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a  @click="goback">财务管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>编辑收支</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
				
				<Form :label-width="150">

					<FormItem label="款项类型">
						<RadioGroup true-value v-model="accounts.type" @on-change="getfunds(accounts.type)">
							<Radio v-for="(item,index) in fundsdataAll" :label="item.id" :key="item.id">{{item.name}}</Radio>
						</RadioGroup>
					</FormItem>

					<FormItem label="科目">
						<Select style="width: 300px;"  v-model="accounts.funds" placeholder="请选择科目..." @on-change="getsecondfunds(accounts.funds)">
							<Option v-for="(item,index) in fundsdata" :value="item.id" :key="item.id">{{item.name}}</Option>
						</Select>
					</FormItem>

					<FormItem label="二级科目" v-show="secondfundsdata.length!=0">
						<Select style="width: 300px;"  v-model="accounts.secondfunds" @on-change="getthirdlyfunds(accounts.secondfunds)" placeholder="请选择二级科目...">
							<Option v-for="(item,index) in secondfundsdata" :value="item.id" :key="item.id">{{item.name}}</Option>
						</Select>
					</FormItem>

					<FormItem label="三级科目" v-show="thirdlyfundsdata.length!=0">
						<Select style="width: 300px;"  v-model="accounts.thirdlyfunds" placeholder="请选择三级科目..." @on-change="getfourthlyfunds(accounts.thirdlyfunds)">
							<Option v-for="(item,index) in thirdlyfundsdata" :value="item.id" :key="item.id">{{item.name}}</Option>
						</Select>
					</FormItem>

					<FormItem label="支付方式" v-show="accounts.funds=='11'&&accounts.type=='1'">
						<RadioGroup true-value v-model="accounts.ways">
							<Radio v-for="(item,index) in payways" :label="item.code" :key="item.code">{{item.value}}</Radio>
						</RadioGroup>
					</FormItem>

					<FormItem label="选择银行">
						<Select style="width: 300px;" filterable v-model="accounts.bankaccount" placeholder="请选择银行...">
							<Option v-for="(item,index) in bankAccount" :value="item.id" :key="item.id">{{item.name}} {{item.value}}</Option>
						</Select>
					</FormItem>

					<FormItem label="金额">
						<Input style="width: 300px;" v-model="accounts.amount" placeholder="请输入金额..."></Input>
					</FormItem>

					<FormItem label="操作人">

						<Select style="width: 300px;" filterable v-model="accounts.operator" placeholder="请选择操作人...">
							<Option v-for="(item,index) in financeusers" :value="item.id" :key="item.id">{{item.userName}}</Option>
						</Select>
					</FormItem>

					<FormItem label="日期">
						<DatePicker type="date" v-model="accounts.paymentDate" placeholder="请选择日期" style="width: 300px" @on-change="getTime"></DatePicker>
					</FormItem>

					<FormItem label="时间">
						<TimePicker v-model="accounts.paymentTime" format="HH:mm:ss" placeholder="请选择时间" style="width: 300px"></TimePicker>
					</FormItem>

					<FormItem label="备注">
						<Input style="width: 300px;" type="textarea" v-model="accounts.notes" placeholder="请输入备注..."></Input>
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
						<button class="details_opBut linkBlock smallsize">确认</button>
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
				
			uploadpathdata: '/api/f/payment_simples/uploadImages',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},

			};
		},

		methods: {
			
			goback:function  () {
				this.$emit('openWindow', ('financeorder'), ('财务管理'), ('7'), ('financeorder'), ('financeorder'))
//              this.$router.push({
//					name: 'client',
//
//				})
			},
			
			
			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},

			handleRemove: function(index) {
				this.accounts.files.splice(index, 1)
			},

			handleSuccess(res, file) {

				var data = res.data

				for(var i = 0; i < data.length; i++) {
					this.accounts.files.push(data[i])
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
			
			
				//选择科目

			getfunds: function(type) {

				/*accounts: {
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

				},*/
				this.accounts.fund = "";
				this.accounts.funds = "";
				this.accounts.secondfunds = "";
				this.accounts.thirdlyfunds = ""
				this.secondfundsdata = [];
				this.thirdlyfundsdata = [];
				this.accounts.amount = "";
				this.accounts.operator = "";
				this.accounts.paymentDate = "";
				this.accounts.notes = "";
				this.accounts.files = []

				if(type == 1) {
					this.fundsdata = this.fundsdataAll[0].items
				} else if(type == 2) {
					this.fundsdata = this.fundsdataAll[1].items
				}

			},

			getsecondfunds: function(id) {
				this.accounts.fund = "";
				this.accounts.secondfunds = ""
				this.accounts.thirdlyfunds = ""
				this.secondfundsdata = [];
				this.thirdlyfundsdata = [];

				for(var i = 0; i < this.fundsdata.length; i++) {

					if(id == this.fundsdata[i].id) {

						if(!this.fundsdata[i].items) {
							this.accounts.fund = id
							this.secondfundsdata = []
						} else {
							this.secondfundsdata = this.fundsdata[i].items

						}
					}

				}

			},

			getthirdlyfunds: function(id) {
				this.accounts.fund = "";
				this.accounts.thirdlyfunds = ""
				this.thirdlyfundsdata = [];
				for(var i = 0; i < this.secondfundsdata.length; i++) {

					if(id == this.secondfundsdata[i].id) {

						if(!this.secondfundsdata[i].items) {
							this.accounts.fund = id
							this.thirdlyfundsdata = []
						} else {
							this.thirdlyfundsdata = this.secondfundsdata[i].items

						}
					}

				}
			},

			getfourthlyfunds: function(id) {
				this.accounts.fund = "";
				for(var i = 0; i < this.thirdlyfundsdata.length; i++) {

					if(id == this.thirdlyfundsdata[i].id) {

						if(!this.thirdlyfundsdata[i].items) {
							this.accounts.fund = id

						}
					}

				}

			},

			//选择时间

			getTime: function(val) {
				this.accounts.paymentDate = val
			},
			
				getbankAccount: function() {

				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/bankAccounts',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data

					that.bankAccount = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试123！');

				})
			},


	
			formeReset() {
				this.accounts={
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

				}
				
			},

			

		},

		mounted: function() {

			var that = this
			
			this.getbankAccount()
			
			this.axios({
				method: 'get',
				url: '/api/f/payment_simples/funds',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data
				that.fundsdataAll = data
				

			}).catch(function(err) {
				console.log(err)
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
				that.financeusers = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

			this.axios({
				method: 'get',
				url: '/api/f/basecodes/types/payment_simple_ways',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data

				that.payways = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})



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