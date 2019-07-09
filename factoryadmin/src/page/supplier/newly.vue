<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem to="/supplier">供应商管理</BreadcrumbItem>
				<BreadcrumbItem>新建供应商</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">
			<div class="iv_formbox">
			<div class="iv_form">
				<Form :label-width="120">

					<FormItem label="状态">
						<RadioGroup v-model="objGetData.grade">
							<Radio label="0">意向</Radio>
							<Radio label="1">签约</Radio>
						</RadioGroup>
					</FormItem>

					<FormItem label="负责人">
						<Input v-model="objGetData.founderName" placeholder="请输入联系人姓名.."></Input>
					</FormItem>

					<FormItem label="电话">
						<Input v-model="objGetData.leaderTel" placeholder="请输入联系人电话.."></Input>
					</FormItem>

					<FormItem label="地区">

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

					<FormItem label="类型">
						<Select v-model="objGetData.type" placeholder="">
							<Option value="beijing">New York</Option>
							<Option value="shanghai">London</Option>
							<Option value="shenzhen">Sydney</Option>
						</Select>
					</FormItem>

					<FormItem label="备注">
						<Input type="textarea" v-model="objGetData.name" placeholder="请输入供应商名称..."></Input>
					</FormItem>

					<FormItem label="企业名称">
						<Input v-model="objGetData.name" placeholder="请输入供应商名称..."></Input>
					</FormItem>

					<FormItem label="企业地址">
						<Input v-model="objGetData.no" placeholder="请输入供应商编号.."></Input>
					</FormItem>

				</Form>

				<div class="iv_form_but center">
					<Button @click="formeReset">重置</Button>
					<Button type="primary" @click="sure">确认</Button>

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
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				objGetData: { //添加信息
					"name": "",
					"no": "",
					"grade": "",
					"founderName": "",
					"leaderTel": ""
				},

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

			sure: function() {
				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/
				var objGetData = this.objGetData
				var name = objGetData.name
				var no = objGetData.no
				var grade = objGetData.grade
				var founderName = objGetData.founderName
				var leaderTel = objGetData.leaderTel

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('供应商名称不能为空！');
					return false;
				} else
				if(no == "" || no == null || no.trim().length == 0) {

					this.$Message.error('供应商编号不能为空！');
					return false;
				} else if(founderName == "" || founderName == null || founderName.trim().length == 0) {

					this.$Message.error('联系人姓名不能为空！');
					return false;
				} else if(leaderTel == "" || leaderTel == null || leaderTel.trim().length == 0) {

					this.$Message.error('联系人电话不能为空！');
					return false;
				} else if(tel.test(leaderTel) == false && telephone.test(leaderTel) == false && phone.test(leaderTel) == false) {

					this.$Message.error('联系人电话格式不正确！');
					return false;
				} else if(grade == "" || grade == null || grade.trim().length == 0) {

					this.$Message.error('请选择供应商供应商级别！');
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
						url: '/api/f/suppliers',

						data: {
							"name": name,
							"no": no,
							"grade": grade,
							"founderName": founderName,
							"leaderTel": leaderTel

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "供应商名称"
							},
							{
								"name": "no",
								"note": "供应商编号 "
							},
							{
								"name": "grade",
								"note": "供应商级别"
							},
						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						data.leader = ""
						data.leaderTel = ""
						that.tableData.unshift(data)
						that.$Message.success("添加成功")

						that.GetModel = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.GetModel = false
					})

				}

			},

			formeReset() {
				this.objGetData = {
					"name": "",
					"no": "",
					"grade": "",
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