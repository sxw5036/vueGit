<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>经销商账户管理</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">

			<div class="active">

				<div class="ui_operateLeft">
					<span class="operation_span">用户姓名：</span>
					<input style="width: 200px;" class="iv_input"  id="p_lea" v-model="searchObj.name" placeholder="请输入用户姓名..." />
					<span class="operation_span">手机号：</span>
					<!--<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.mobile" placeholder="请输入用户手机号..." />
					<span class="operation_span">编号：</span>-->
					<input style="width: 200px;" class="iv_input"  id="p_lea" v-model="searchObj.mobile" placeholder="请输入手机号..." />
					<span class="operation_span">类型：</span>
					<Select style="width: 200px;" id="p_lea" v-model="searchObj.status">
						<Option value="0" key="0">正常</Option>
						<Option value="1" key="1">禁用</Option>
						<Option value="2" key="2">离职</Option>

					</Select>

					<Button icon="ios-search" @click="clicksearch">搜索</Button>
				</div>

				<div class="ui_operateRight">
					<Button @click="newData" shape="circle" icon="ios-refresh"></Button>

					<!--<Button class="item_PL" type="primary" @click="exportData">生成表格数据</Button>-->
				</div>
			</div>

		</div>

		<!-- 经销商列表 -->
		<div class="department_center">

			<Table border :loading="loading" :columns="dealerHeader" :data="dealerData" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_page">
					<Page :current="pageIndex" :total="pageTotal" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
				</div>

			</div>

		</div>

		<!--启用经销商弹框-end-->

		<!--修改经销商信息-s-->

		<Drawer v-model="SetdealerModel" title="修改经销商信息" width="500">

			<Form :model="Setdealer" :label-width="100">

				<FormItem label="用户姓名">
					<Input v-model="Setdealer.name" placeholder="请输入用户姓名..."></Input>
				</FormItem>

				<FormItem label="用户性别">
					<RadioGroup v-model="Setdealer.sex">
						<Radio label="0">男</Radio>
						<Radio label="1">女</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="用户邮箱">
					<Input v-model="Setdealer.email" placeholder="请输入用户邮箱..."></Input>
				</FormItem>

				<FormItem label="用户生日">
					<!--format="yyyy/MM/dd"-->
					<DatePicker :value="Setdealer.birthday" @on-change="getbirthday" type="date" placeholder="请输入用户生日" style="width: 100%"></DatePicker>

				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetdealerIsOk">确认修改</Button>
			</div>

		</Drawer>

		<Modal title="更多操作" v-model="moreOp" width="300px">
			<div class="moreOp">
				<ul>
					<li>
						<ButtonGroup size="small">
							<Button type="primary" @click="moreOp=false,changenumber=true,Newmobile=dealerData[SetIndex].mobile">修改手机号</Button>
						</ButtonGroup>
					</li>
					<li>

						<ButtonGroup size="small">
							<Button type="primary" @click="moreOp=false,changepassword=true,newPassword=''">修改密码</Button>
						</ButtonGroup>

					</li>
				</ul>
			</div>
			<div slot="footer"></div>
		</Modal>

		<Drawer v-model="changenumber" title="修改用户手机号" width="500">

			<Form :label-width="100">

				<FormItem label="用户新手机号">
					<Input v-model="Newmobile" placeholder="请输入新的用户手机号..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="changeName">确认修改</Button>
			</div>

		</Drawer>

		<Drawer v-model="changepassword" title="修改用户密码" width="500">

			<Form :label-width="100">

				<FormItem label="用户新密码">
					<Input v-model="newPassword" placeholder="请输入新的用户密码..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="changePassword">确认修改</Button>
			</div>

		</Drawer>

	</div>
</template>

<script>
	import axios from 'axios'
	import md5 from 'js-md5';
	export default {
		data() {
			return {

				dealerHeader: [
					/*{
											title: '编号',
											key: "no",
											width: 200,
											

										},*/

					{
						title: '登录名',
						key: "loginName",
						width: 200,
						fixed: "left",

					},
					
					{
						title: '用户姓名',
						key: 'userName',
						width: 200,
					},
					
					{
						title: '角色名称',
						key: 'roleName',
						width: 150,
					},

					{
						title: '状态',
						key: 'status',
						width: 200,

						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var text = "正常"
							} else if(status == 1) {
								var text = "禁用（删除）"
							} else if(status == 2) {
								var text = "离职"
							}
							return h('div', text)
						}

					},

					

					{
						title: '用户性别',
						key: 'sex',
						width: 150,

						render: (h, params) => {

							var sex = params.row.sex

							if(sex == 0) {
								var text = "男"
							} else if(sex == 1) {
								var text = "女"
							}
							return h('div', text)
						}

					},

					{
						title: '用户电话',
						key: 'mobile',
						width: 150,
					},
					
					{
						title: '用户邮箱',
						key: 'email',
						width: 150,
					},
					
					/*{
						title: '用户地址',
						key: 'address',
						width: 150,
					},*/

					{
						title: '用户生日',
						key: 'birthday',
						width: 150,
					},
					
					
					
					{
						title: '创建日期',
						key: 'created',
						width: 200,
					},

					

					{
						title: '操作',
						key: 'action',
						width: 150,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var status = params.row.status

							if(status != 2) {
								return h('div', [
									h('Button', {
										props: {
											type: 'primary',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {

												this.SetdealerModel = true
												var data = this.dealerData[params.index]
												this.Setdealer.name = data.userName
												this.Setdealer.sex = data.sex.toString()
												this.Setdealer.email = data.email
												this.Setdealer.birthday = data.birthday
												this.SetIndex = params.index

											}
										}
									}, '编辑'),

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
												this.moreOp = true
											}
										}
									}, '更多'),

								]);
							}

						}
					}
				],

				dealerData: [], //经销商数据
				dealerModel: false, //添加经销商模态框
				startdealerModel: false, //打开启用经销商列表
				SetdealerModel: false, //修改经销商信息模态框
				mapDrawer: false, //地图模态框
				objdealer: { //添加经销商信息

					"companyName": "",
					"companyType": "",
					"companyStatus": "0",
					"companyGrade": "0",
					"companyNo": "",

				},

				startdealer: { //启用经销商补全信息
					"companyName": "",
					"startName": "",
					"startMobile": "",

				},

				Setdealer: { //修改经销商信息

				},
				SetIndex: '', //选择数据的位置
				pageIndex: 1, //分页页数
				pageTotal: 0, //数据总数
				pageSize: 10, //单页数据量
				loading: true,
				tableHeight: 500,
				provinceData: [], //省份数据
				cityData: [], //城市数据
				districData: [], //省/县数据
				provinceMsg: [], //省份选中数据
				cityMsg: [], //城市选中数据
				districMsg: [], //省/县选中数据
				sitelatlng: {
					lng: "",
					lat: "",
				},
				mapIshow: false, //是否第一次展开地图

				searchObj: { //检索对象
					"name": "",
					"mobile": "",
					"no": "",
					"status": "",

				},

				isSearch: false,
				moreOp: false,
				changenumber: false,
				Newmobile: "",
				changepassword: false,
				newPassword: "",

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
						status:"",

					},

					this.pageIndex = 1
				this.Getdata()

			},

			//检索信息
			clicksearch: function() {
				var searchobj = this.searchObj

				var name = searchobj.name
				var mobile = searchobj.mobile
				var no = searchobj.no
				var status = (searchobj.status==undefined?"":searchobj.status)

				if(name.trim().length == 0 && mobile.trim().length == 0 && no.length == 0 && !status == true) {
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
				var mobile = searchobj.mobile
				var No = searchobj.no
				var status = (searchobj.status==undefined?"":searchobj.status)
				
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
				
				if(status!=""||status!=null) {
					pathurl += 'status=' + status + "&"
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
					url: '/api/f/dealers?'+pathurl+'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.pageTotal = res.data.pagination.total
					var data = res.data.data
					that.dealerData = data
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

			dealerModelOpen: function() {
				this.dealerModel = true
				this.objdealer = {

					"companyName": "",
					"companyType": "",
					"companyStatus": "0",
					"companyGrade": "0",
					"companyNo": "",
				}
			},

			//选择生日

			getbirthday: function(val) {

				this.Setdealer.birthday = val

			},

			SetdealerIsOk: function() {

				var cid = this.dealerData[this.SetIndex].id
				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/
				var emali = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$/;

				var Setdealer = this.Setdealer
				var name = Setdealer.name
				var sex = Setdealer.sex
				var emailVal = Setdealer.email
				var birthday = Setdealer.birthday

				if(name == "" || name == null || name.trim().length == 0) {
					this.$Message.error('用户姓名不能为空！');
					return false;
				} else if(emali.test(emailVal) == false && emailVal.trim().length != 0) {
					this.$Message.error('邮箱格式不正确！');
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
						url: '/api/f/dealers/' + cid,

						data: {

							"name": name,
							"sex": sex,
							"email": (emailVal == "") ? undefined : emailVal,
							"birthday": birthday,

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "用户名称"
							},
							{
								"name": "sex",
								"note": "用户性别 "
							},
							{
								"name": "email",
								"note": "用户邮箱"
							},
							{
								"name": "birthday",
								"note": "用户生日 "
							},

						]

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						/*that.dealerData[that.SetIndex].name = data.name
						that.dealerData[that.SetIndex].sex = data.sex
						that.dealerData[that.SetIndex].email = data.email
						that.dealerData[that.SetIndex].birthday = data.birthday*/
						
						that.newData()

						that.$Message.success("修改成功")

						that.SetdealerModel = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.SetdealerModel = false
					})

				}

			},

			//修改用户名称
			changeName: function() {

				var index = this.SetIndex
				var cid = this.dealerData[index].id

				var Newmobile = this.Newmobile

				if(Newmobile == "" || Newmobile == null || Newmobile.trim().length == 0) {
					this.$Message.error('用户手机号不能为空！');
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
						url: '/api/f/dealers/' + cid + '/account/number',

						data: {
							mobile: Newmobile
						},

						//							/

					}).then(function(res) {

						var verify = [{
							"name": "mobile",
							"note": "手机号",
						}, ]

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						that.dealerData[index].mobile = data.mobile

						that.$Message.success("修改成功")

						that.changenumber = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.changenumber = false
					})

				}

			},

			//修改用户密码
			changePassword: function() {
				var index = this.SetIndex
				var cid = this.dealerData[index].id

				var newPassword = this.newPassword

				if(newPassword == "" || newPassword == null || newPassword.trim().length == 0) {
					this.$Message.error('密码不能为空！');
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
						url: '/api/f/dealers/' + cid + '/account/password',

						data: {
							newPassword: md5(newPassword)
						},

					}).then(function(res) {

						var verify = [{
							"name": "newPassword",
							"note": "用户密码"
						}, ]

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						that.$Message.success("修改成功")

						that.changepassword = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.changepassword = false
					})

				}
			},

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
					url: '/api/f/dealers?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.pageTotal = res.data.pagination.total
					var data = res.data.data
					console.log(data)
					that.dealerData = data
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试23！');
					that.loading = false

				})
			}

		},

		mounted: function() {

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.tableHeight = (document.body.clientHeight - 350)

			this.Getdata()

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
	
	.moreOp {
		display: block;
		width: 100%;
	}
	
	.moreOp ul {
		display: inline-block;
		width: 100%;
	}
	
	.moreOp ul li {
		float: left;
		width: 50%;
		text-align: center;
	}
</style>

<style src='./../../assets/css/department.css'></style>