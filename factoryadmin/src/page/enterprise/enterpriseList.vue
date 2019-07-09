<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>企业管理</BreadcrumbItem>

			</Breadcrumb>
		</div>  

		<div class="operation_box">
			<div class="active">
				<!---->
				<div class="ui_operateLeft" style="line-height: 32px;">
					<span class="operation_span">企业名称：</span>
					<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.name" placeholder="请输入企业名称..." />
					

					<!--	<span class="operation_span">时间：</span>
					<DatePicker type="date" placeholder="开始时间" style="width: 200px"></DatePicker>
					-
					<DatePicker type="date" placeholder="结束时间" style="width: 200px"></DatePicker>-->

					<Button icon="ios-search" @click="clicksearch">搜索</Button>
					<Button @click="newData" class="p_lea" shape="circle" icon="ios-refresh"></Button>
				</div>

				<div class="ui_operateRight">
					
<router-link :to="{name:'newlyenterprise'}"  ><Button type="primary">新建企业</Button></router-link>
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
						title: '企业名称',
						key: "name",
					
						
					},

					{
						title: '负责人姓名',
						key: "leaderName",
						

					},
					
					{
						title: '负责人电话',
						key: "tel",
						

					},

					{
						title: '状态',
						key: 'state',
						

						render: (h, params) => {

							var state = params.row.state

							if(state == 1) {
								var text = "试用 "
							} else if(state == 2) {
								var text = "正常 "
							} else if(state == 3) {
								var text = "停用"
							}
							return h('div', text)
						}

					},
					
					{
						title: '状态',
						key: 'state',
						

						render: (h, params) => {

							var type = params.row.type

							if(type == 1) {
								var text = "免费用户 "
							} else if(type == 2) {
								var text = "付费用户 "
							} 
							
							return h('div', text)
						}

					},

				

				],

				tableData: [], //表格数据

				
				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

				isSearch: false,
				searchObj: {
					
					"name": "",

				},

				operation: {}

			};
		},

		methods: {

		

			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch = true) {
					this.searchData()
				} else {
					this.getDatas()
				}

			},

			//检索信息

			clicksearch: function() {
				var searchobj = this.searchObj

				var name = searchobj.name+''
                var name=name.trim();

				if(name.length == 0) {
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

				var name = searchobj.name+''
				var name=name.trim();
		

				var pathurl = ""

				if(name.length != 0) {
					pathurl += 'name=' + name + "&"
				}

				
				/*if(status != "" && status != null) {
					pathurl += 'status=' + status + "&"
				}
*/
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.loading = true

				var that = this
			
				this.axios({
					method: 'get',
					url: '/api/f/branch?' + pathurl + '&pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {
						"name":""
					},
					this.pageIndex = 1
				this.getDatas()

			},


			getDatas: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				
				this.axios({
					method: 'get',
					url: '/api/f/branch?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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

			pathchange: function() {

				var keydata = this.$route.query.key
				var operation = this.operation
				Isjurisdiction.user_jurisdiction(keydata, operation)

			

				this.getDatas()

			},

		},

		mounted: function() {

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.getDatas()

		},

		watch: {
			$route: "pathchange"
		}

	}
</script>

<style scoped="scoped">
	.Drawer_op {
		margin-left: 80px;
	}
	
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
	
	.orserBCmsg {
		display: block;
		padding: 8px;
	}
	
	.orserBCmsg li {
		width: 100%;
		display: inline-block;
		line-height: 20px;
		font-size: 12px;
		margin-bottom: 10px;
	}
	
	.orserBCmsg span {
		display: block;
		float: left;
		width: 65px;
		line-height: 20px;
		text-align: left;
		margin-right: 6px;
	}
	
	.orserBCmsg p {
		float: left;
		width: 139px;
	}
	
	.pushscheme {
		display: block;
	}
	
	.pushscheme textarea {
		display: block;
		width: 100%;
		height: 100px;
		padding: 0px 5px;
		border-radius: 6px;
		border: solid 1px #EEEEEE;
	}
	
	.pushscheme_up {
		display: block;
		line-height: 20px;
		padding: 8px 0px;
		font-size: 14px;
		padding-left: 80px;
	}
	
	.demo-upload-list {
		display: inline-block;
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
		margin-right: 4px;
	}
	
	.demo-upload-list img {
		width: 100%;
		height: 100%;
	}
	
	.demo-upload-list-cover {
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);
	}
	
	.demo-upload-list:hover .demo-upload-list-cover {
		display: block;
	}
	
	.demo-upload-list-cover i {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}
	
	.openOrdetails {
		display: inline-block;
		width: 100%;
	}
	
	.openOrdetails_lf {
		width: 25%;
		float: left;
		height: 500px;
		overflow: auto;
		box-sizing: border-box;
		border: solid 1px #EEEEEE;
	}
	
	.openOrdetails_rt {
		padding-left: 16px;
		width: 75%;
		float: left;
		height: 500px;
		overflow: auto;
	}
	
	.DemandOpen {
		display: block;
		width: 100%;
		height: 600px;
		overflow: auto;
	}
	
	.DemandOpen ul {
		display: block;
	}
	
	.DemandOpen ul li img {
		display: block;
		width: 100%;
	}
	
	.designers_head {
		padding: 8px;
		background: #EEEEEE;
		color: #AAAAAA;
		font-size: 12px;
	}
	
	.designers_head p {
		line-height: 1.5em;
	}
	
	.designers {
		display: block;
	}
	
	.designers_designFile {
		display: block;
		width: 100%;
		max-height: 400px;
		overflow: auto;
	}
	
	.designers_op {
		padding-top: 16px;
		display: block;
		border-top: solid 1px #EEEEEE;
		text-align: right;
	}
	
	.designers_designFile {
		margin-top: 16px;
		border: solid 1px #EEEEEE;
		box-sizing: border-box;
		padding: 5px;
	}
	
	.designers_designFile p {
		text-align: center;
	}
	
	.designers_designFile li {
		margin-bottom: 10px;
	}
	
	.designers_designFile li img {
		display: block;
		width: 100%;
	}
	
	.designers .pl {
		padding-left: 80px;
		padding-bottom: 16px;
	}
	
	.designer_order {
		position: relative;
	}
	
	.designer_order .designer_lay {
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.designer_order .designer_lay ul {
		display: block;
		width: 100px;
	}
	
	.designer_order .designer_lay ul li {
		width: 100px;
		line-height: 30px;
	}
	
	.designer_order .designer_lay ul li a {
		color: #000000;
	}
	
	.designer_order .designer_lay ul li.ac a {
		color: cornflowerblue;
	}
	
	.designer_center {
		padding-left: 100px;
		padding-right: 20px;
		max-height: 600px;
		overflow: auto;
	}
	
	.designer_order h5.lay_Anchor {
		padding-bottom: 10px;
	}
	
	.designer_order .order_msg {
		padding: 10px;
		border: solid 1px whitesmoke;
	}
	
	.designer_order .order_demand {
		border: solid 1px whitesmoke;
		padding: 10px;
	}
	
	.designer_order .order_demand ul {
		display: block;
		width: 100%;
	}
	
	.designer_order .order_demand ul li {
		padding: 10px;
		background: #EEEEEE;
		position: relative;
		margin-bottom: 10px;
	}
	
	.designer_order .order_demand ul li .order_demandMsg {
		position: absolute;
		top: 10px;
		left: 10px;
		width: 200px;
		height: 200px;
		box-sizing: border-box;
		border-right: solid 1px #E8E8E8;
		overflow: hidden;
	}
	
	.designer_order .order_demand ul li .order_demandMsg p {
		line-height: 2em;
	}
	
	.designer_order .order_demand ul li .order_demandCenter {
		padding-right: 10px;
		padding-left: 220px;
		height: 200px;
		overflow: auto;
	}
	
	.designer_order .order_demand ul li .order_demandCenter .designer_img {
		float: left;
		width: 130px;
		height: 130px;
		display: block;
		padding: 10px;
		margin-right: 10px;
		background: white;
		margin-bottom: 10px;
	}
	
	.designer_order .order_demand ul li .order_demandCenter .designer_img h5 {
		display: block;
		width: 110px;
		height: 110px;
		background-position: 50% 50%;
		background-size: cover;
	}
	
	.designer_order .order_project {
		margin-top: 20px;
	}
	
	.des_img img {
		display: block;
		width: 100%;
	}
</style>

<style src='./../../assets/css/department.css'></style>