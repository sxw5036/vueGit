<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a  @click="goback">客户管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建客户</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
					<Form :model="objmsg" :label-width="120">

						<FormItem label="经销商">
							<Select :disabled="dealerDisabled==true" filterable v-model="objmsg.companyId" placeholder="请选择经销商...">
								<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }}-{{ item.founderName }}</Option>
							</Select>

							<span style="display: inline-block; cursor: pointer;">没找到想要的经销商，点击<b style="color: cornflowerblue;" @click="newDealer">这里</b></span>

						</FormItem>

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

						<FormItem label="客户地址">
							<Select style="width:144px;" v-model="provinceMsg" @on-change="pickprovince(provinceMsg)">
								<Option v-for="item in provinceData" :value="item.id" :key="item.name">{{ item.name }}</Option>
							</Select>

							<Select style="width:144px;" v-model="cityMsg" @on-change="pickdistrict(cityMsg)">
								<Option v-for="item in cityData" :value="item.id" :key="item.id">{{ item.name }}</Option>
							</Select>

							<Select style="width:144px;" v-model="districMsg" @on-change="changedistric(districMsg)">
								<Option v-for="(item,index) in districData" :value="item.id" :key="item.id">{{ item.name }}</Option>
							</Select>

						</FormItem>

						<FormItem label="详细地址">
							<Input v-model="objmsg.address" placeholder="请输入详细地址..."></Input>
						</FormItem>

						<FormItem label="小区名称">
							<Input v-model="objmsg.community" placeholder="请输入小区名称..."></Input>
						</FormItem>

					</Form>

					<div class="iv_form_but center">
						<button class="details_opBut auto linkBlock smallsize">重置</button>
						<button class="details_opBut linkBlock smallsize" @click="pushclient">确认</button>
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

				objmsg: {
					name: "",
					sex:'0',
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				},

				dealerDisabled: false,

				companyData: [],

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
				this.$emit('openWindow', ('client'), ('客户管理'), ('3'), ('client'), ('client'))
               
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

			//确认提交

			pushclient: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var objmsg = this.objmsg

				var name = objmsg.name
				var mobile = objmsg.mobile
				var address = objmsg.address
				var community = objmsg.community
				var companyId = objmsg.companyId
				var sex=objmsg.sex

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

				} else if(this.districMsgcache == "" || this.districMsgcache == null) {

					this.$Message.error('请选择正确的省市区/县！');
					return false;
				} else if(address == "" || address == null || address.trim().length == 0) {

					this.$Message.error('客户详细地址不能为空！');
					return false;
				} else if(companyId == "" || companyId == null || companyId.trim().length == 0) {

					this.$Message.error('所属公司不能为空！');
					return false;
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

				this.axios({
					method: 'post',
					url: '/api/f/customers',

					data: {
						"companyId": companyId,
						"phone": mobile,
						"name": name,
						"sex":sex,
						"address": address,
						"community": community,
						"cityAreaId": this.districMsg,

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
						},{
							"name": "sex",
							"note": "客户性别"
						},
					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					var data = res.data.data

					that.$Message.success("添加成功")
					that.objmsg = {
						name: "",
						mobile: "",
						address: "",
						community: "",
						companyId: "",
					}

					that.provinceMsg = "";
					that.cityMsg = "";
					that.districMsg = ""

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			formeReset() {
				this.objmsg = {
					name: "",
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				}
				this.provinceMsg = "";
				this.cityMsg = "";
				this.districMsg = ""
			},

			newDealer: function() {
				this.$emit('openWindow', ('dealercompanynewly'), ('新建经销商'), ('2-1'), ('dealercompanynewly'), ('dealercompanynewly'))
			},

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

			if(this.$route.query.dealerId) {
				this.dealerDisabled = true
				var dealerId = this.$route.query.dealerId
				this.objmsg.companyId = dealerId

				this.getDealer(dealerId)
			}

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