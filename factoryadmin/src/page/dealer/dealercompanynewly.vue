<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem ><a @click="goback">经销商管理</a></BreadcrumbItem>
				<BreadcrumbItem>新建经销商</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">
		<div class="iv_formbox">
			<div class="iv_form">
				<Form :model="objdealer" :label-width="150">

				<FormItem label="经销商名称">
					<Input v-model="objdealer.companyName" placeholder="请输入经销商店铺名称..."></Input>
				</FormItem>

				<FormItem label="经销商类型">
					<RadioGroup v-model="objdealer.companyType">
						<!--<Radio label="0">生产商/制造商/总店</Radio>-->
						<Radio label="1">直营店</Radio>
						<Radio label="2">店中店</Radio>
						<Radio label="3">专卖店</Radio>
						<Radio label="4">加盟店</Radio>
						<Radio label="5">散单</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="经销商状态">
					<RadioGroup v-model="objdealer.companyStatus">
						<Radio label="0">意向</Radio>
						<!--<Radio label="1">已签约（正常）</Radio>
						<Radio label="2">已退网</Radio>
						<Radio label="3">已倒闭</Radio>
						<Radio label="4">已禁用</Radio>-->
						<Radio label="5">无价值</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="经销商级别">
					<RadioGroup v-model="objdealer.companyGrade">
						<Radio label="0">初级</Radio>
						<Radio label="1">一级</Radio>

					</RadioGroup>
				</FormItem>

				<FormItem label="经销商编号">
					<Input v-model="objdealer.companyNo" placeholder="请输入经销商店铺编号..."></Input>
				</FormItem>

				<FormItem label="经销商负责人">
					<Input v-model="objdealer.founderName" placeholder="请输入店铺创始人姓名..."></Input>
				</FormItem>

				<FormItem label="经销商联系电话">
					<Input v-model="objdealer.leaderTel" placeholder="请输入店铺联系人电话..."></Input>
				</FormItem>

				<FormItem label="经销商大区经理">
					<!--<Input v-model="objdealer.businessManager" ></Input>-->

					<Select filterable v-model="objdealer.businessManager" placeholder="请选择经销商大区经理...">
						<Option v-for="(item,index) in employeedata" :value="item.userId" :key="item.userId">{{item.userName}}</Option>
					</Select>
				</FormItem>

				<FormItem label="经销商地址">

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
					<Input v-model="objdealer.address" placeholder="请输入店铺地址..."></Input>
				</FormItem>

				<FormItem label="签约时间">
					<DatePicker type="date" @on-change="getcontractTime" placeholder="请选择签约时间" :value="objdealer.contract_time"></DatePicker>
				</FormItem>

				<FormItem label="到期时间">
					<DatePicker type="date" @on-change="getcontractExpiredDate" placeholder="请选择到期时间" :value="objdealer.contract_expired_date"></DatePicker>
				</FormItem>

			</Form>

				<div class="iv_form_but center">
					<Button @click="formeReset">重置</Button>
					<Button type="primary" @click="sure">确认</Button>

				</div>

			</div>
		</div>

			<div>

			</div>
		</div>

		<div class="Quick_navigation">
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
		</div>
		
		
		

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				objdealer: { //添加经销商信息

					"companyName": "",
					"companyType": "",
					"companyStatus": "0",
					"companyGrade": "0",
					"companyNo": "",
					"founderName": "",
					"leaderTel": "",
					"address":"",

				},

				employeedata:[],

				provinceData: [], //省份数据
				cityData: [], //城市数据
				cityCache: {},
				districData: [], //省/县数据
				districtCache: {},
				provinceMsg: "", //省份选中数据
				cityMsg: "", //城市选中数据
				districMsg: "", //省/县选中数据

				operation: {}

			};
		},

		methods: {
			
			goback:function  () {
				this.$emit('openWindow', ('dealercompany'), ('经销商管理'), ('2'), ('dealercompany'), ('dealercompany'))
               
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
			
			getcontractTime: function(val) {
				this.objdealer.contract_time = val
				this.Setdealer.contract_time = val
			},

			getcontractExpiredDate: function(val) {
				this.objdealer.contract_expired_date = val
				this.Setdealer.contract_expired_date = val

			},

			//确认提交

			sure: function() {

			
				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var objdealer = this.objdealer

				var companyname = objdealer.companyName
				var companytype = objdealer.companyType
				var companystatus = objdealer.companyStatus
				var companygrade = objdealer.companyGrade
				var companyno = objdealer.companyNo
				var founderName = objdealer.founderName
				var leaderTel = objdealer.leaderTel
				var address = objdealer.address
				var contractTime = objdealer.contract_time
				var contractExpiredDate = objdealer.contract_expired_date
				var businessManager = objdealer.businessManager
				
				companyname=companyname.trim()
				companyno=companyno.trim()
			    founderName=founderName.trim()
			    leaderTel=leaderTel.trim()
				address=address.trim()
				




				if(companyname == "" || companyname == null || companyname.length == 0) {
					this.$Message.error('经销商店铺名称不能为空！');
					return false;
				} else if(companyname.trim().length > 50) {
					this.$Message.error('经销商店铺名称长度不能超过50个字！');
					return false;
				} else if(companytype == "" || companytype == null || companytype.length == 0) {

					this.$Message.error('经销商店铺类型不能为空！');
					return false;
				} else if(companyno.trim().length == 0) {
					this.$Message.error('经销商店铺编号不能为空！');
					return false;
				} else if(companyno.trim().length > 30) {
					this.$Message.error('经销商店铺标识长度不能超过30个字！');
					return false;
				} else  if(founderName == "" || founderName == null || founderName.length == 0) {

					this.$Message.error('经销商负责人不能为空！');
					return false;
				} else if(leaderTel == "" || leaderTel == null || leaderTel.length == 0) {

					this.$Message.error('经销商负责人电话不能为空！');
					return false;
				} else if(tel.test(leaderTel) == false && telephone.test(leaderTel) == false && phone.test(leaderTel) == false) {

					this.$Message.error('经销商联系人电话格式不正确！');
					return false;
				} else if(this.districMsg == "" || this.districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');
					return false;
				} else if(address == "" || address == null || address.length == 0) {

					this.$Message.error('经销商地址不能为空！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this

					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/dealers/companies',

						data: {

							"name": companyname,
							"type": companytype,
							"status": companystatus,
							"grade": companygrade,
							"no": companyno,
							"founderName": founderName,
							"leaderTel": leaderTel,
							"address": address,
							"businessManager": (businessManager == "") ? undefined : businessManager,
							"contractTime": (contractTime == "") ? undefined : contractTime,
							"contractExpiredDate": (contractExpiredDate == "") ? undefined : contractExpiredDate,
							"cityAreaId": this.districMsg

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "经销商店铺名称"
							},
							{
								"name": "type",
								"note": "经销商店铺类型 "
							},
							{
								"name": "status",
								"note": "经销商店铺状态 "
							},
							{
								"name": "grade",
								"note": "经销商店铺级别 "
							},
							{
								"name": "no",
								"note": "经销商店铺编号"
							},
							{
								"name": "address",
								"note": "详细地址"
							},
							{
								"name": "cityAreaId",
								"note": "省市区地址"
							}

						]

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						that.$Message.success("添加成功")
						

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

				}

			},

			formeReset() {
				this.objdealer= { 

					"companyName": "",
					"companyType": "",
					"companyStatus": "0",
					"companyGrade": "0",
					"companyNo": "",
					"founderName": "",
					"leaderTel": ""

				}
		}

		},

		mounted: function() {

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
				url: '/api/f/depts/members',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data

				that.employeedata = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');
				that.loading = false

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
	
	
</style>