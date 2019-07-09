<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>组织管理</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="table_nav_iv">
			<div class="operation_box">
				<div class="active">
					<!---->
					<div class="ui_operateLeft" style="line-height: 32px;">

						<ul class="tab">
							<li class="tab_item">
								<div class="lable">员工姓名</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.userName" placeholder="请输入员工姓名.." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">编号</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.no" placeholder="请输入员工姓名.." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">手机号</div>
								<div class="form_nav">

									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.mobile" placeholder="请输入员工手机号..." />

								</div>
							</li>

							<li class="tab_item">
								<div class="lable">状态</div>
								<div class="form_nav">
									<Select v-model="searchObj.status" style="width: 200px;">
										<Option v-for="item in emstatus" :value="item.label" :key="item.label">{{ item.value }}</Option>
									</Select>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button icon="ios-search" type="primary" @click="clicksearch">搜索</Button>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button icon="ios-refresh" @click="newData" type="primary">重置</Button>
								</div>
							</li>

						</ul>

					</div>

					<div class="ui_operateRight">

						<!---->

						<ul class="tab">
							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary" class="p_lea">导入</Button>
									<Button type="primary" class="p_lea">导出</Button>
									<Button type="primary"  class="p_lea" @click="NewlyDepartment">新建部门</Button>
									<Button type="primary" @click="NewOpne" class="p_lea">新建员工</Button>
								</div>
							</li>

						</ul>

					</div>
				</div>

			</div>

			<div>

				<Table border :loading="loading" :columns="tableHeader" :data="tableData" ref="table"></Table>
				<Switch v-model="loading"></Switch>
				<div class="ui_tableBottom">

					<div class="ui_operate">

					</div>

					<div class="ui_page">
						<Page :current="pageIndex" :total="pageIndextotal" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
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

				tableHeader: [{
						title: '昵称',
						key: 'userName',
						align: 'center',
						fixed: 'left',
						width: 150,
					},
					{
						title: '角色',
						key: 'roleName',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '编号',
						key: 'no',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '电话',
						key: 'mobile',
						align: 'center',
						ellipsis: true,
					},

					{
						title: '性别',
						key: 'sex',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var color
							var text
							if(row.sex == 0) {
								color = 'blue';
								text = '男'
							} else if(row.sex == 1) {
								color = 'red';
								text = '女'

							}
							return h('Tag', {
								props: {
									type: 'border',
									color: color
								}
							}, text);
						}
					},

					{
						title: '生日',
						key: 'birthday',
						align: 'center',
						ellipsis: true,
						render: (h, params) => {
							return('div', [
								h('span', {
									attrs: {
										title: this.birthday
									},
									on: {
										mouseenter: () => {
											//实现点击用户姓名然后显示其电话号码等功能，原来是通过动态路由，现在直接写在model里面
											let currenIndex = params.index;
											var obj = this.data1[currenIndex];
											let mouseId = obj.birthday;
											this.birthday = mouseId;
										}
									}
								}, params.row.birthday)

							])
						}
					},

					{
						title: '邮箱',
						key: 'email',
						align: 'center',
						ellipsis: true,
						render: (h, params) => {
							return('div', [
								h('span', {
									attrs: {
										title: this.email
									},
									on: {
										mouseenter: () => {
											//实现点击用户姓名然后显示其电话号码等功能，原来是通过动态路由，现在直接写在model里面
											let currenIndex = params.index;
											var obj = this.data1[currenIndex];
											let mouseId = obj.email;
											this.email = mouseId;
										}
									}
								}, params.row.email)

							])
						}
					},

					{
						title: '状态',
						key: 'status',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var color
							var text
							if(row.status == 0) {
								color = 'green';
								text = '正常'
							} else if(row.status == 1) {
								color = 'red';
								text = '禁用'

							} else if(row.status == 2) {
								color = 'blue';
								text = '离职'
							}
							return h('Tag', {
								props: {
									type: 'border',
									color: color
								}
							}, text);
						}
					},

					{
						title: '创建时间',
						key: 'created',
						align: 'center',
						ellipsis: true,
						
					},
					{
						title: '操作',
						key: 'action',
						width: 120,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							return h('div', [

								h('Button', {
									props: {
										type: 'primary',
										size: 'small',
										//										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											
											
											this.$emit('openWindow', ('organizationDetails'), ('员工详情'), ('14-3'), ('organizationDetails'), ('organizationDetails'),(this.tableData[params.index].id))

//											this.$router.push({
//												name: 'organizationDetails',
//												query: {
//													id: this.tableData[params.index].id
//												}
//											})
										}
									}
								}, '详情'),
							])

						}
					}

				],

				tableData: [], //表格数据
				companyData: [],
				SetModel: false,
				putModel: false,
				objmsg: {
					name: "",
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				},

				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

				isSearch: false,
				searchObj: {
					"userName": "",
					"no": "",
					"mobile": "",
					"status": ""

				},

				emstatus: [{
						value: '全部',
						label: '-1'
					},
					{
						value: '正常',
						label: '0'
					},
					{
						value: '禁用',
						label: '1'
					},
					{
						value: '离职',
						label: '2'
					}
				],

			};
		},

		methods: {
			
			NewOpne:function  () {
				this.$emit('openWindow', ('organizationNewly'), ('新建组织'), ('14-1'), ('organizationNewly'), ('organizationNewly'))
			},
			
NewlyDepartment:function  () {
				this.$emit('openWindow', ('NewlyDepartment'), ('新建部门'), ('14-4'), ('NewlyDepartment'), ('NewlyDepartment'))
			},
			
			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch == true) {
					this.searchData()
				} else {
					this.getDatas()
				}

			},

			//检索信息

			clicksearch: function() {

		
					
				var searchobj = this.searchObj
				var userName = searchobj.userName
				var no = searchobj.no
				var mobile = searchobj.mobile
				var status = searchobj.status

				if(userName.trim().length == 0 &&no.trim().length == 0 &&mobile.trim().length == 0 &&status.trim().length == 0 ) {
					this.newData();

					return false;
				} else {
					this.pageIndex = 1
					this.searchData()
				}

			},

			//调用检索api接口
			searchData: function() {

				var searchobj = this.searchObj
				var userName = searchobj.userName
				var no = searchobj.no
				var mobile = searchobj.mobile
				var status = searchobj.status

				var pathurl = ""

				if(userName != "" && userName != null && userName.trim().length != 0) {
					pathurl += 'name=' + userName + "&"
				}

				if(no != "" && no != null && no.trim().length != 0) {
					pathurl += 'no=' + no + "&"
				}
				
				if(mobile != "" && mobile != null && mobile.trim().length != 0) {
					pathurl += 'mobile=' + mobile + "&"
				}
				
				if(status != "" && status != null && status.trim().length != 0) {
					pathurl += 'status=' + status + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.loading = true

				var that = this
				

				this.axios({
					method: 'get',
					url: '/api/f/depts/members?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					that.tableData = data
					that.pageIndextotal = dataAll.pagination.total
					
					that.isSearch = true
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {
						"userName": "",
					"no": "",
					"mobile": "",
					"status": ""
					},
					this.pageIndex = 1
				this.getDatas()

			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '产品信息列表'
				});
			},

			getDatas: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
				this.axios({
					method: 'get',
					url: '/api/f/depts/members?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					that.tableData = data
					that.pageIndextotal = dataAll.pagination.total

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

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

			changedistric: function(id) {

				if(!id == true) {
					this.districMsgcache = ""

					return false;
				}
				this.districMsgcache = id

			},

		},

		mounted: function() {

			var cfg = window.lwxfPreload

			if(cfg == "" || cfg == null) {
				return false;
			}

//			var useroperations = cfg.preload.userMenu.userOperations
//			var keydata = this.$route.query.key
//			var operation = this.operation
//
//			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.getDatas()
		}

	}
</script>

<style>
	.Drawer_op {
		margin-left: 80px;
	}
	
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
</style>

<style src='./../../assets/css/department.css'></style>