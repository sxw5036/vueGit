<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem ><a href="javascript:history.back(-1)">经销商管理</a></BreadcrumbItem>
				<BreadcrumbItem>编辑经销商</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">
			<div class="iv_form">
				<Form :model="Setdealer" :label-width="100">

				<FormItem label="经销商名称">
					<Input v-model="Setdealer.SetcompanyName" placeholder="请输入经销商店铺名称..."></Input>
				</FormItem>

				<FormItem label="经销商类型">
					<RadioGroup v-model="Setdealer.SetcompanyType">
						<!--<Radio label="0">生产商/制造商/总店</Radio>-->
						<Radio label="1">直营店</Radio>
						<Radio label="2">店中店</Radio>
						<Radio label="3">专卖店</Radio>
						<Radio label="4">加盟店</Radio>
						<Radio label="5">散单</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="经销商状态">
					<RadioGroup v-model="Setdealer.SetcompanyStatus">
						<Radio label="0">意向</Radio>
						<Radio label="1">已签约（正常）</Radio>
						<Radio label="2">已退网</Radio>
						<Radio label="3">已倒闭</Radio>
						<Radio label="4">已禁用</Radio>
						<Radio label="5">无价值</Radio>
					</RadioGroup>
				</FormItem>

				

				<FormItem label="经销商级别">
					<RadioGroup v-model="Setdealer.SetcompanyGrade">
						<Radio label="0">初级</Radio>
						<Radio label="1">一级</Radio>

					</RadioGroup>
				</FormItem>

				<FormItem label="经销商编号">
					<Input v-model="Setdealer.SetcompanyNo" placeholder="请输入经销商店铺编号..."></Input>
				</FormItem>

				<FormItem label="经销商联系人">
					<Input v-model="Setdealer.founderName" placeholder="请输入店铺联系人姓名..."></Input>
				</FormItem>

				<FormItem label="经销商联系电话">
					<Input v-model="Setdealer.leaderTel" placeholder="请输入店铺联系人电话..."></Input>
				</FormItem>

				<FormItem label="经销商大区经理">
					<!--<Input v-model="objdealer.businessManager" ></Input>-->

					<Select filterable v-model="Setdealer.businessManager" placeholder="请选择经销商大区经理...">
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
					<Input v-model="Setdealer.address" placeholder="请输入店铺地址..."></Input>
				</FormItem>

				<FormItem label="签约时间">
					<DatePicker type="date" @on-change="getcontractTime" placeholder="请选择签约时间" :value="Setdealer.contract_time"></DatePicker>
				</FormItem>

				<FormItem label="到期时间">
					<DatePicker type="date" @on-change="getcontractExpiredDate" placeholder="请选择到期时间" :value="Setdealer.contract_expired_date"></DatePicker>
				</FormItem>

				<FormItem label="附件">
					<div class="pl">
						<div class="demo-upload-list" v-for="(item,index) in uploadList">
							<template>
								<img :src="item.path">
								<div class="demo-upload-list-cover">
									<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
									<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,index)"></Icon>
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
		
		
		<Modal title="图片详情" v-model="visible">
			<img :src="imgName" style="width: 100%">
			<div slot="footer"></div>
		</Modal>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				
				
	

				Setdealer: { //修改经销商信息
					"SetcompanyName": "",
					"SetcompanyNo": "",
					"SetcompanyType": "",
					"setcompanyStatus": "",
					"SetcompanyGrade": "",
					"SetuserName": "",
					"founderName":"",
					"leaderTel":"",
					"address":"",
					"contract_time":"",
					"contract_expired_date":"",
					"businessManager":"",

				},
				
				setcompanyStatus:false,
				
				uploadList: [],
				defaultList: [],
				uploadpathdata: '',
				uparry: {
					multipartFileList: []
				},
				imgName: "",
				visible: false,

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
			
			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(fileid, index) {

				this.delfile(fileid, index)

			},
			handleSuccess(res, file) {

				var Res = res.data
				/*	this.uploadList = this.$refs.upload.fileList*/
				for(var i = 0; i < Res.length; i++) {

					this.uploadList.push(Res[i])
					/*file.path = Res[i].path
					file.id = Res[i].id*/
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
			
			delfile: function(fileid, index) {

				var id = this.$route.query.id;

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var dsDataCache = this.dsDataCache

				var that = this
				//                    /
				this.axios({
					method: 'delete',
					url: '/api/f/dealers/companies/' + id + '/files/' + fileid,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.uploadList.splice(index, 1)

					that.$Message.success("删除成功")

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},

			
			
			companyDeta: function(id) {

				this.uploadpathdata = '/api/f/dealers/companies/' + id + '/files'
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

			

				//请求经销商详情
				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					/*.companyDetail = data.company
					that.companyDetailfileList = */

					that.Setdealer.SetcompanyNo = data.company.no
					that.Setdealer.SetcompanyName = data.company.name
					that.Setdealer.SetcompanyType = data.company.type.toString()
					that.Setdealer.SetcompanyStatus = data.company.status.toString()
					that.Setdealer.SetcompanyGrade = data.company.grade.toString()
					that.Setdealer.founderName = data.company.founderName
					that.Setdealer.leaderTel = data.company.leaderTel
					that.Setdealer.address = data.company.address
					that.Setdealer.contract_time = data.company.contractExpiredDate
					that.Setdealer.contract_expired_date = data.company.contractExpiredDate
					that.Setdealer.businessManager = data.company.businessManager

					that.provinceMsg = data.company.cityId
					that.cityMsg = data.company.provinceId
					that.districMsg = data.company.cityAreaId

					that.getpickprovince(that.provinceMsg)
					that.uploadList = data.fileList

					if(data.company.status == 0) {
						that.setcompanyStatus = true
					} else {
						that.setcompanyStatus = false
					}

					that.SetdealerModel = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

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

                 var cid = this.$route.query.id
				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var Setdealer = this.Setdealer
				var No = Setdealer.SetcompanyNo
				var companyname = Setdealer.SetcompanyName
				var companytype = Setdealer.SetcompanyType
				var companystatus = Setdealer.SetcompanyStatus
				var companygrade = Setdealer.SetcompanyGrade
				var founderName = Setdealer.founderName
				var leaderTel = Setdealer.leaderTel

				var address = Setdealer.address
				var contractTime = Setdealer.contract_time
				var contractExpiredDate = Setdealer.contract_expired_date
				var businessManager = Setdealer.businessManager
				
				companyname=companyname.trim();
				founderName=founderName.trim()
				No=No.trim();
				leaderTel=leaderTel.trim();
				address=address.trim()
				

				if(companyname == "" || companyname == null || companyname.length == 0) {
					this.$Message.error('经销商店铺名称不能为空！');
					return false;
				} else if(companyname.length > 50) {
					this.$Message.error('经销商店铺名称长度不能超过50个字！');
					return false;
				} else if(No.length > 30) {
					this.$Message.error('经销商店铺标识长度不能超过30个字！');
					return false;
				} else if(founderName == "" || founderName == null || founderName.length == 0) {

					this.$Message.error('经销商联系人不能为空！');
					return false;
				} else if(leaderTel == "" || leaderTel == null || leaderTel.length == 0) {

					this.$Message.error('经销商联系人电话不能为空！');
					return false;
				} else if(tel.test(leaderTel) == false) {

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
						method: 'put',
						url: '/api/f/dealers/companies/' + cid,

						data: {

							"name": companyname,
							"status": companystatus,
							"grade": companygrade,
							"no": No,
							"type": companytype,
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
								"name": "founderName",
								"note": "经销商店铺创始人"
							},

							{
								"name": "leaderTel",
								"note": "经销商店铺联系人联系方式"
							},

							{
								"name": "mobile",
								"note": "手机号"
							},
							{
								"name": "address",
								"note": "地址"
							},

							{
								"name": "businessManager",
								"note": "大区经理"
							},

						]

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						

						that.$Message.success("修改成功")

					

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						
					})

				}

			
			},

			formeReset() {
				this.Setdealer= { //修改经销商信息
					"SetcompanyName": "",
					"SetcompanyNo": "",
					"SetcompanyType": "",
					"SetcompanyStatus": "",
					"SetcompanyGrade": "",
					"SetuserName": "",

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
			
				this.companyDeta(this.$route.query.id)


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
		margin: 0px auto;
		padding: 30px 20px;
		background: #FFFFFF;
		border-radius: 6px;
	}
</style>