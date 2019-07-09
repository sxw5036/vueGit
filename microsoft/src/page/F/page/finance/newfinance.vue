<template>

	<div id="bodynav_bar" class="newfinance">

		<header v-show="financeType==2" class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">

			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">新建支出</h1>
		</header>

		<header v-show="financeType==1" class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">新建收入</h1>
		</header>

		<!--支出-->

		<div class="ik_form_nav">

			<div class="form_item">
				<div class="lable">金额:</div>
				<div class="center">
					<input class="input" type="text" name="" id="" v-model="accounts.amount" />
				</div>
			</div>

			<div class="form_item" v-show="fundsdata.length!=0">
				<div class="lable">科目:</div>
				<div class="center">
					<select class="select" v-model="accounts.funds" @change="getsecondfunds(accounts.funds)">
						<option  :key="index" :value="item.id" v-for="(item,index) in fundsdata">{{item.name}}</option>
					</select>
				</div>
			</div>

			<div class="form_item" v-show="secondfundsdata.length!=0">
				<div class="lable">二级科目:</div>
				<div class="center">
					<select class="select" v-model="accounts.secondfunds" @change="getthirdlyfunds(accounts.secondfunds)">
						<option  :key="index" :value="item.id" v-for="(item,index) in secondfundsdata">{{item.name}}</option>
					</select>
				</div>
			</div>

			<div class="form_item" v-show="thirdlyfundsdata.length!=0">
				<div class="lable">三级科目:</div>
				<div class="center">
					<select class="select" v-model="accounts.thirdlyfunds" @change="getfourthlyfunds(accounts.thirdlyfunds)">
						<option :key='index' :value="item.id" v-for="(item,index) in thirdlyfundsdata">{{item.name}}</option>
					</select>
				</div>
			</div>

			<div class="form_item">
				<div class="lable">支付时间:</div>
				<div class="center">
					<input class="input" type="date" name="" id="zfsj" style="margin: 0; padding: 0.5rem 0.5rem 0.5rem 0.7rem;" v-model="accounts.paymentDate" />
				</div>
			</div>
			<!--payways-->

			<div class="form_item" v-show="accounts.funds=='11'&&accounts.type=='0'">
				<div class="lable">支付方式:</div>
				<div class="center">
					<select class="select" v-model="accounts.ways">
						<option :key='index' :value="item.code" v-for="(item,index) in payways">{{item.value}}</option>
					</select>
				</div>
			</div>

			<div class="form_item">
				<div class="lable">备注:</div>
				<div class="center">
					<textarea name="" rows="" cols="" v-model="accounts.notes"></textarea>
				</div>
			</div>

			<div class="form_item">
				<div class="lable">附件:</div>
				<div class="center">
					<div :key='index' class="demo-upload-list" v-for="(item,index) in accounts.files">
						<img :src="item">
						<span @click="cancelUp(index)" class="mui-icon mui-icon-closeempty cancel"></span>
					</div>

					<div class="demo-upload-list flie_bg">
						<input @change="upimg" multiple="multiple" class="file_but" type="file" name="" id="" value="" />

					</div>
				</div>
			</div>

			<div class="form_item">
				<div class="operation">
					<span style="margin-right: 1.5rem;">经手人：<small style="font-size: 0.7rem;">{{datainfo.userName}}</small></span>
				<!-- 	<span >创建时间：<small style="font-size: 0.7rem;">19-6-10 12:00:00</small></span> -->
				</div>
			</div>

		</div>

		<!--新建支出-->
		<button @click="sure" style="margin-top: 0.5rem; background:linear-gradient(90deg,rgba(187,175,137,1) 0%,rgba(127,116,91,1) 100%);box-shadow:0 0.175rem 0.35rem 0.05rem rgba(128,117,92,0.41);border-radius:0.25rem;" class="form_submit">确认</button>

	</div>

	<!--		<header class="mui-bar mui-bar-nav mui-bar-transparent" data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
	<h1 class="mui-title">标题</h1>
</header>-->

</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'

	export default {

		name: 'newfinance',

		data() {
			return {
				userIds:'',
				datainfo:'',
				financeType: 0,
				fundsdata: [],
				secondfundsdata: [],
				thirdlyfundsdata: [],
				fundsdataAll: [],
				payways: [],
				imgData: {
					accept: 'image/gif, image/jpeg, image/png, image/jpg',
				},
				accounts: {
					type: "",
					fund: "",
					funds: "",
					ways: "",
					secondfunds: "",
					thirdlyfunds: "",
					amount: "",
					operator: "",
					paymentDate: "",
					notes: "",
					files: [],
                   
				},
				finance_imgid:'',
			}
		},

		methods: {
			getfunds: function(type) {

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

				for(var i = 0; i < this.fundsdataAll.length; i++) {
					if(type == this.fundsdataAll[i].id) {
						this.fundsdata = this.fundsdataAll[i].items
					}
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

			upimg: function(e) {

				var that = this

				if(e.target.files.length == 0) {

					return false
				}

				var imgfiles = e.target.files
				var imgdata = e.target.files
				var formData = new FormData();
				for(var i = 0; i < imgdata.length; i++) {

					var imgsize = imgdata[i].size
					var imgstyle = imgdata[i].type
					if(this.imgData.accept.indexOf(imgstyle) == -1) {

						that.mui.toast("请选择正确的图片格式", {
							duration: 'long',
							type: 'div'
						})

						return false;
					} else if(imgsize > 5242880) {

						that.mui.toast("图片大小不能超过5M", {
							duration: 'long',
							type: 'div'
						})

						return false;
					} else {

						var datimg = imgdata[i]
						formData.append('multipartFileList', datimg); // 多选文件数据

					}

				}

				var that = this

				that.axios({
					method: 'post',
                     
					url: '/wxapi/f/paymentSimples/uploadImages',

					data: formData

				}).then(function(res) {
					var igdatas = res.data.data.listUrls

					for(var i = 0; i < igdatas.length; i++) {
						that.accounts.files.push(igdatas[i])
					}
					var imgsids="";
					var imgsid=res.data.data.listIds;
					for(var i = 0; i < imgsid.length; i++) {
						
						imgsids=imgsids+" "+imgsid[i]
					}
					that.finance_imgid=imgsids;
					console.log(that.finance_imgid)

				}).catch(function(err) {
					console.log(err)

					that.mui.toast("图片上传失败请稍后重试" + err, {
						duration: 'long',
						type: 'div'
					})

				})

			},

			/*清除图片*/

			cancelUp: function(index) {

				this.accounts.files.splice(index, 1)
			},

			//确认添加

			sure: function() {
				var accounts = this.accounts
				var type = accounts.type
				var funds = accounts.funds
				var secondfunds = accounts.secondfunds
				var amount = accounts.amount.trim()
				var operator = accounts.operator
				var paymentDate = accounts.paymentDate
				var paymentTime = accounts.paymentTime
				var notes = accounts.notes.trim()
				var files = accounts.files
				var ways = accounts.ways
				var bank = accounts.bankaccount

				var fund = accounts.fund

				var filesdata = []
				var fileIds = ""
				for(var i = 0; i < files.length; i++) {
					filesdata.push(files[i].fileId)
				}

				fileIds = filesdata.join(",")

				if(type == "" || type == null) {

					this.mui.toast("类型不能为空", {
						duration: 'long',
						type: 'div'
					})
					return false;
				}
				/*else if(bank == "" || bank == null) {
					this.$Message.error('请选择银行账户！');
					return false;
				}*/
				else if(amount == "" || amount == null || amount.trim().length == 0) {

					this.mui.toast("金额不能为空", {
						duration: 'long',
						type: 'div'
					})

					return false;
				} else if(fund == "" || fund == null || fund == undefined) {

					this.mui.toast("科目不能为空", {
						duration: 'long',
						type: 'div'
					})
					return false;
				} else if(ways == "" && accounts.funds == 11 && accounts.type == 0) {

					this.mui.toast("支付方式不能为空", {
						duration: 'long',
						type: 'div'
					})
					return false;
				} else
					/*if(operator == "" || operator == null) {
					this.$Message.error('操作人不能为空！');
					return false;
				} else if(operator == "" || operator == null) {
					this.$Message.error('操作人不能为空！');
					return false;
				} else*/
					if(paymentDate == "" || paymentDate == null) {

						this.mui.toast("支付时间不能为空", {
							duration: 'long',
							type: 'div'
						})
						return false;
					}

				var that = this

				this.axios({
					method: 'post',
					url: '/wxapi/f/paymentSimples',
					data: {
						type: type,
						funds: (fund == "" || fund == undefined) ? undefined : fund,
						amount: amount,
						operator: operator,
						paymentDate: paymentTime == "" || paymentTime == undefined ? paymentDate + ' 00:00:00' : paymentDate + ' ' + paymentTime,
						note: notes,
						fileIds: that.finance_imgid,
						ways: ways,
						bank: (bank == "" || bank == undefined) ? undefined : bank,
						operator:that.userIds
					}

				}).then(function(res) {
					console.log("111111")
					console.log(res)
					var verify = [{
							"name": "type",
							"note": "支付类型"
						},
						{
							"name": "funds",
							"note": "科目 "
						},
						{
							"name": "amount",
							"note": "金额 "
						},
						{
							"name": "operator",
							"note": "操作人"
						},
						{
							"name": "paymentDate",
							"note": "时间"
						},
						{
							"name": "notes",
							"note": "备注 "
						}, {
							"name": "fileIds",
							"note": "附件"
						},

						{
							"name": "bank",
							"note": "银行账户 "
						}, {
							"name": "ways",
							"note": "支付方式"
						},

					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					that.mui.toast("录入成功", {
						duration: 'long',
						type: 'div'
					})

					setTimeout(function() {

						that.$router.push({
							name: 'Ffinancelist',

						})

					}, 2000);

				}).catch(function(err) {
					that.mui.toast("请求失败请稍后重试" + err, {
						duration: 'long',
						type: 'div'
					})
				})
			}

		},

		mounted: function() {
			mui.init()
			this.financeType = this.$route.query.type

			this.accounts.type = this.$route.query.type

			let that = this

			this.axios({
				method: 'get',

				url: '/api/f/payment_simples/funds',

			}).then(function(res) {

				var data = res.data

				that.fundsdataAll = data.data
				that.getfunds(that.accounts.type)
			}).catch(function(err) {
				console.log(err)

				that.mui.toast("请求失败请稍后重试" + err, {
					duration: 'long',
					type: 'div'
				})

			})

			this.axios({
				method: 'get',
				url: '/api/f/basecodes/types/payment_simple_ways',

			}).then(function(res) {

				var data = res.data.data

				that.payways = data

			}).catch(function(err) {

				that.mui.toast("请求失败请稍后重试" + err, {
					duration: 'long',
					type: 'div'
				})

			})
			that.axios({
				method: 'get',
				url: '/wxapi/f/branchs/userInfo'
			
			}).then(function(res) {
			
				 that.datainfo = res.data.data
				 that.userIds=res.data.data.userId
				console.log(that.datainfo)

			
			}).catch(function(err) {
			
				
			})
		}
	}
</script>

<style scoped="scoped" src='./../../assets/css/financelist.css'></style>

<style>
	input[type="date"]::-webkit-datetime-edit-fields-wrapper { 
	        background-color: rgba(250,250,250,0); 
	      } 
	     
	input[type=date]::-webkit-inner-spin-button { visibility: hidden; }
	input[type=date]::-webkit-clear-button {visibility: hidden;}
	input[type=date]::-webkit-calendar-picker-indicator  {
		color: rgba(255,255,255,0);
		background-color:  rgba(255,255,255,0);
		
	} 
	#zfsj{
		background: url(../../assets/img/supplier/xjt.png) 10.2rem center no-repeat;
	}

</style>