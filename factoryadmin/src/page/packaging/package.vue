<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>包裹管理</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">
			<div class="active">
				<!---->
				<div class="ui_operateLeft" style="line-height: 32px;">
					<span class="operation_span">订单编号：</span>
					<input style="width: 200px;" class="iv_input"  id="p_lea" v-model="searchObj.condition" placeholder="请输入用户名或电话..." />

					<span class="operation_span">状态：</span>
					<Select style="width: 200px;" id="p_lea" v-model="searchObj.companyId">
						<Option value="0">待打包</Option>
					</Select>

					<Button icon="ios-search" @click="clicksearch">搜索</Button>
				</div>

				<div class="ui_operateRight">
					<Button @click="newData" class="p_lea" shape="circle" icon="ios-refresh"></Button>
					<!--<Button type="primary" @click="SetModel=true" class="p_lea" v-show="operation.edit==true">添加客户</Button>-->
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
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [{
						title: '订单编号',
						key: 'orderNo',
						width: 200,
						fixed: 'left',
					},

					{
						title: '包裹编号',
						key: 'packageNo',
						width: 200,

					},

					{
						title: '包装规则',
						key: 'rule',
						
					},
					
					{
						title: '物料数量',
						key: 'materialQuantity',
					
					},

					{
						title: '创建人',
						key: 'creator',
						
					},
					{
						title: '创建人姓名',
						key: 'creatorName',
						
					},

					{
						title: '创建时间',
						key: 'created',
						
					},

					{
						title: '修改人',
						key: 'amend',
						

					},
					{
						title: '修改数时间',
						key: 'amendTime',
						

					},

					{
						title: '操作',

						width: 150,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small',

									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {

											this.SetIndex = params.index;

										}
									}
								}, '修改'),

							]);

						}

					}
				],

				tableData: [{
					orderNo: "2019",
					packageNo: "Qsm-11",
					rule : "橱柜",
					materialQuantity : "1",
					creator: "admin",
					created : "2019-4-11 12:00:00",
					amend  : "",
					amendTime: "",
					

				}], //表格数据

				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

				isSearch: false,
				searchObj: {
					"companyId": "",
					"condition": "",

				},				
				operation: {},
				order_operation: {},

			};
		},

		methods: {

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

				/*""companyId": "",
					"condition": "",*/
				var searchobj = this.searchObj
				var condition = searchobj.condition
				var companyId = searchobj.companyId

				if(condition.trim().length == 0 && companyId == "") {
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
				var condition = searchobj.condition
				var companyId = searchobj.companyId

				var pathurl = ""

				if(condition != "" && condition != null && condition.trim().length != 0) {
					pathurl += 'condition=' + condition + "&"
				}

				if(companyId != "" && companyId != null && companyId.trim().length != 0) {
					pathurl += 'companyId=' + companyId + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.loading = true

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

				this.axios({
					method: 'get',
					url: '/api/f/customers?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					that.tableData = data
					that.pageIndextotal = dataAll.pagination.total
					//that.$Message.success("请求成功")
					that.isSearch = true
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			//选择柜体
			
			pickcabinet:function  (val,index) {
				
				var arry=this.cabinet
				var cdata=this.BomArry.cabinet[index]
				
				if(val == true) {

					arry.push(cdata)
					/**/

				} else {

					var id = cdata.id

					for(var i = 0; i < arry.length; i++) {

						if(id == arry[i].id) {
							arry.splice(i, 1)
						}

					}

				}

				this.cabinet = arry

			},


            //开启包裹窗口
            
            getparcel:function  () {
            	
            	if(this.cabinet.length==0){
            		this.$Message.error('所选打包部件为空！');
					return false;
            	}
            	
            	this.parcelObj.no=""
            	this.parcelObj.parceArry=this.cabinet
            	this.addparcel=true
            	
            },


			newObjmsg: function() {
				this.objmsg = {
					name: "",
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				}
			},

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {
						"companyId": "",
						"condition": "",
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
					url: '/api/f/customers?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					//that.tableData = data
					/*that.pageIndextotal = dataAll.pagination.total*/

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

						that.pickdistrict(that.cityData[0].id, 0)

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.cityData = cityshow
					this.pickdistrict(this.cityData[0].id, 0)

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

			}

		},

		mounted: function() {

			var cfg = window.lwxfPreload

			if(cfg == "" || cfg == null) {
				return false;
			}

			var useroperations = cfg.preload.userMenu.userOperations
			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			/*	var keyss = useroperations["ordermng_order"].split(',')
				for(var i = 0; i < keyss.length; i++) {
					this.order_operation[keyss[i]] = true
				}
*/

			this.getDatas()

			axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

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
	
	.emsg_center {
		display: block;
		width: 100%;
		height: 500px;
		position: relative;
	}
	
	.emsg_center .emsg_Mu {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100px;
		height: 100%;
		box-sizing: border-box;
		border-right: solid 1px #EEEEEE;
	}
	
	.emsg_center .emsg_Mu ul {
		display: block;
	}
	
	.emsg_center .emsg_Mu ul li {
		display: block;
		line-height: 30px;
		cursor: pointer;
	}
	
	.emsg_center .emsg_Mu ul li:hover {
		color: #777;
	}
	
	.emsg_center .emsg_Mu ul li.ac {
		color: cornflowerblue;
	}
	
	.emsg_center .emsg_itemNav {
		display: block;
		padding-left: 120px;
		height: 500px;
		overflow: auto;
	}
</style>

<style src='./../../assets/css/department.css'></style>