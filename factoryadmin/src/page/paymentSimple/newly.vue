<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a  @click="goback">日常账管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建日常账</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
				
				<Form :label-width="150">

					<FormItem label="款项类型">
						<RadioGroup true-value v-model="paymentSimple.type" @on-change="getfunds(paymentSimple.type)">
							<Radio v-for="(item,index) in fundsdataAll" :label="item.id" :key="item.id">{{item.name}}</Radio>
						</RadioGroup>
					</FormItem>

					<FormItem label="科目">
						<Select style="width: 300px;"  v-model="paymentSimple.funds" placeholder="请选择科目..." @on-change="getsecondfunds(paymentSimple.funds)">
							<Option v-for="(item,index) in fundsdata" :value="item.id" :key="item.id">{{item.name}}</Option>
						</Select>
					</FormItem>

					<FormItem label="二级科目" v-show="secondfundsdata.length!=0">
						<Select style="width: 300px;"  v-model="paymentSimple.secondfunds" @on-change="getthirdlyfunds(paymentSimple.secondfunds)" placeholder="请选择二级科目...">
							<Option v-for="(item,index) in secondfundsdata" :value="item.id" :key="item.id">{{item.name}}</Option>
						</Select>
					</FormItem>

					<FormItem label="三级科目" v-show="thirdlyfundsdata.length!=0">
						<Select style="width: 300px;"  v-model="paymentSimple.thirdlyfunds" placeholder="请选择三级科目..." @on-change="getfourthlyfunds(paymentSimple.thirdlyfunds)">
							<Option v-for="(item,index) in thirdlyfundsdata" :value="item.id" :key="item.id">{{item.name}}</Option>
						</Select>
					</FormItem>

					<FormItem label="支付方式" v-show="paymentSimple.funds=='11'&&paymentSimple.type=='1'">
						<RadioGroup true-value v-model="paymentSimple.ways">
							<Radio v-for="(item,index) in payways" :label="item.code" :key="item.code">{{item.value}}</Radio>
						</RadioGroup>
					</FormItem>

					<FormItem label="选择银行">
						<Select style="width: 300px;" filterable v-model="paymentSimple.bank" placeholder="请选择银行...">
							<Option v-for="(item,index) in bankAccount" :value="item.id" :key="item.id">{{item.name}} {{item.value}}</Option>
						</Select>
					</FormItem>

					<FormItem label="金额">
						<Input style="width: 300px;" v-model="paymentSimple.amount" placeholder="请输入金额..."></Input>
					</FormItem>

					<FormItem label="操作人">

						<Select style="width: 300px;" filterable v-model="paymentSimple.operator" placeholder="请选择操作人...">
							<Option v-for="(item,index) in financeusers" :value="item.id" :key="item.id">{{item.userName}}</Option>
						</Select>
					</FormItem>

					<FormItem label="日期">
						<DatePicker type="date" v-model="paymentSimple.paymentDate" placeholder="请选择日期" style="width: 300px" @on-change="getTime"></DatePicker>
					</FormItem>

					<FormItem label="时间">
						<TimePicker v-model="paymentSimple.paymentTime" format="HH:mm:ss" placeholder="请选择时间" style="width: 300px"></TimePicker>
					</FormItem>

					<FormItem label="备注">
						<Input style="width: 300px;" type="textarea" v-model="paymentSimple.notes" placeholder="请输入备注..."></Input>
					</FormItem>

					<FormItem label="附件">
						<div class="pl">

							<div class="demo-upload-list" v-for="(item,index) in paymentSimple.files">

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
						<button class="details_opBut linkBlock smallsize" @click="sure"> 确认</button>
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


			paymentSimple: {
					type: "",
					fund: "",
					funds: "",
					secondfunds: "",
					thirdlyfunds: "",
					amount: "",
					bank:"",
					operator: "",
					paymentDate: "",
					paymentTime:"",
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
				this.paymentSimple.files.splice(index, 1)
			},

			handleSuccess(res, file) {

				var data = res.data

				for(var i = 0; i < data.length; i++) {
					this.paymentSimple.files.push(data[i])
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
				this.paymentSimple.fund = "";
				this.paymentSimple.funds = "";
				this.paymentSimple.secondfunds = "";
				this.paymentSimple.thirdlyfunds = ""
				this.secondfundsdata = [];
				this.thirdlyfundsdata = [];
				this.paymentSimple.amount = "";
				this.paymentSimple.operator = "";
				this.paymentSimple.paymentDate = "";
				this.paymentSimple.notes = "";
				this.paymentSimple.files = []

				if(type == 1) {
					this.fundsdata = this.fundsdataAll[0].items
				} else if(type == 2) {
					this.fundsdata = this.fundsdataAll[1].items
				}

			},

			getsecondfunds: function(id) {
				this.paymentSimple.fund = "";
				this.paymentSimple.secondfunds = ""
				this.paymentSimple.thirdlyfunds = ""
				this.secondfundsdata = [];
				this.thirdlyfundsdata = [];

				for(var i = 0; i < this.fundsdata.length; i++) {

					if(id == this.fundsdata[i].id) {

						if(!this.fundsdata[i].items) {
							this.paymentSimple.fund = id
							this.secondfundsdata = []
						} else {
							this.secondfundsdata = this.fundsdata[i].items

						}
					}

				}

			},

			getthirdlyfunds: function(id) {
				this.paymentSimple.fund = "";
				this.paymentSimple.thirdlyfunds = ""
				this.thirdlyfundsdata = [];
				for(var i = 0; i < this.secondfundsdata.length; i++) {

					if(id == this.secondfundsdata[i].id) {

						if(!this.secondfundsdata[i].items) {
							this.paymentSimple.fund = id
							this.thirdlyfundsdata = []
						} else {
							this.thirdlyfundsdata = this.secondfundsdata[i].items

						}
					}

				}
			},

			getfourthlyfunds: function(id) {
				this.paymentSimple.fund = "";
				for(var i = 0; i < this.thirdlyfundsdata.length; i++) {

					if(id == this.thirdlyfundsdata[i].id) {

						if(!this.thirdlyfundsdata[i].items) {
							this.paymentSimple.fund = id

						}
					}

				}

			},

			//选择时间

			getTime: function(val) {
				this.paymentSimple.paymentDate = val
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
			
			sure: function() {
				var objPaymentSimple = this.paymentSimple
			
				var funds = objPaymentSimple.funds
				var amount = objPaymentSimple.amount
				var paymentDate = objPaymentSimple.paymentDate
				var paymentTime = objPaymentSimple.paymentTime
				var bank = objPaymentSimple.bank
				var note = objPaymentSimple.note
				var operator = objPaymentSimple.operator
				var type = objPaymentSimple.type
				var ways = objPaymentSimple.ways
				var fileIds = "";
				//console.log(objPaymentSimple.files);
				if(objPaymentSimple.files!=null && objPaymentSimple.files.length>0){
					for(var i =0 ;i<objPaymentSimple.files.length;i++)
					{
						if(i!=objPaymentSimple.length-1){
							fileIds+=objPaymentSimple.files[i].toString()+",";
						}else{
							fileIds+=objPaymentSimple.files[i].toString();
						}
						
					}
				}
				
				if(funds == "" || funds == null || funds.length == 0) {
					this.$Message.error('科目不能为空！');
					return false;
				} else if(amount == "" || funds == null || funds.length == 0) {
					this.$Message.error('金额不能为空');
					return false;
				} else if(paymentDate == "" || paymentDate == null || paymentDate.length == 0) {
					this.$Message.error('付款日期不能为空');
					return false;
				} 
				
				var that = this
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
				//                    /
				this.axios({
					method: 'post',
					url: '/api/f/payment_simples',
					data: {
						"amount": amount,
						"funds": funds,
						"paymentDate": paymentDate+" "+paymentTime,
						"bank": bank,
						"note": note,
						"operator": operator,
						"type": type,
						"ways": ways,
						"fileIds":fileIds
					}
				
				}).then(function(res) {
					
					// if(Isjurisdiction.isright(res, that, verify) == false) {
					// 	return false
					// }
					var data = res.data.data
					that.$Message.success("添加成功")
					setTimeout(msg, 100);
					that.$emit('openWindow', ('paymentSimple'), ('日常账管理'), ('8'), ('paymentSimple'), ('paymentSimple'))
				}).catch(function(err) {
					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
				})	
			},
			formeReset() {
				this.paymentSimple={
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