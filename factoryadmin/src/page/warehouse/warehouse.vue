<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>仓库列表</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">
			
			<div class="active">
				<div class="ui_operateRight">
					<Button @click="storagesOpen" type="primary"  v-show="operation.edit==true">添加仓库</Button>
				</div>
			</div>

		</div>

		<!-- 仓库列表 -->
		<div>
<!--:height="tableHeight"-->
			<Table border :loading="loading"  :columns="tableHeader" :data="tableData" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_operate">
					<!--<Button type="primary" @click="exportData">下载表格数据</Button>-->
				</div>

				<div class="ui_page">
					<!--<Page :current="pageIndex" :total="pageTotal" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>-->
				</div>

			</div>

		</div>

		<!--添加仓库-->
		<Drawer v-model="isStoragesShow" title="添加仓库信息" width="500">

			<Form :model="objStorages" :label-width="100">
				<FormItem label="仓库名称">
					<Input v-model="objStorages.Name" placeholder="请输入仓库名称..."></Input>
				</FormItem>

				<FormItem label="仓库描述">
					<Input v-model="objStorages.Notes" placeholder="请输入仓库描述..."></Input>
				</FormItem>

				<FormItem label="仓库产品分类">

					<Select v-model="objStorages.ProductCategory" @on-change="SelectCategory">
						<Option v-for="(item,index) in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

				</FormItem>

				<FormItem label="仓库负责人">

					<Select  v-model="objStorages.Storekeeper">
						<Option v-for="(item,index) in memberData" :value="item.userId" :key="item.userId">{{ item.userName }}</Option>
					</Select>

				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="psuhStorages">确认添加</Button>
			</div>

		</Drawer>

		<!--添加仓库-end-->

		<!--修改仓库-->
		<Drawer v-model="setStoragesShow" title="修改仓库信息" width="500">

			<Form :model="Setstorages" :label-width="100">
				<FormItem label="仓库名称">
					<Input v-model="Setstorages.Name" placeholder="请输入仓库名称..."></Input>
				</FormItem>

				<FormItem label="仓库描述">
					<Input v-model="Setstorages.Notes" placeholder="请输入仓库描述..."></Input>
				</FormItem>

				<FormItem label="仓库产品分类">

					<Select v-model="Setstorages.ProductCategory" @on-change="SetCategory" disabled="disabled">
						<Option v-for="(item,index) in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

				</FormItem>

				<FormItem label="仓库负责人">

					<Select v-model="Setstorages.Storekeeper">
						<Option v-for="item in memberData" :value="item.userId" :key="item.index">{{ item.userName }}</Option>
					</Select>

				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="setStorages">确认修改</Button>
			</div>

		</Drawer>

		<!--修改仓库-end-->
		<Modal v-model="peledel" width="360" >
	        <p slot="header" style="color:red;text-align:center;">
	            <Icon type="md-alert"></Icon>
	            <span>删除仓库信息</span>
	        </p>
	        <div style="text-align:center">
	            <p>您正在执行删除仓库的操作</p>
	            <p>确定要删除吗?</p>
	        </div>
	        <div slot="footer">
	            <Button type="error" size="large" long  @click="delStorages">删除</Button>
	        </div>
        </Modal>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [{
						title: '仓库名称',
						key: 'name',

					},

					{
						title: '仓库描述',
						key: 'notes'
					},

					{
						title: '仓库分类',
						key: 'categoryName'
					},

					{
						title: '管理员',
						key: 'storekeeperName'
					},

					{
						title: '唯一标识',
						key: 'key'
					},

					{
						title: '创建人',
						key: 'creatorName'
					},
					{
						title: '创建时间',
						key: 'created'
					},

					{
						title: '操作',
						key: 'action',
						width: 150,
						align: 'center',
						render: (h, params) => {
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
											this.setStoragesShow = true
											this.setStoragesOpen(params.index)

										}
									}
								}, '编辑'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small',
										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.peledel = true;
										    this.setIndex = params.index

										}
									}
								}, '删除')
/*								h('Poptip', {
									props: {
										"confirm": true,
										"placement": "left",
										title: '你确定要删除这个内容吗?',
										disabled: !this.operation.delete

									},

									on: {
										'on-ok': () => {
											
											this.delStorages(params.index)

										}
									}
								}, [
									h('div', [
										h('Button', {
											props: {
												type: 'error',
												size: 'small'
											}
										}, '删除')
									])
								])*/
							]);
						}
					}
				],

				tableData: [], //数据

				objStorages: {
					Name: "",
					ProductCategory: "",
					Key: "",
					Notes: "",
					Storekeeper: "",
				}, //添加仓库信息

				Setstorages: {
					Name: "",
					ProductCategory: "",
					Key: "",
					Notes: "",
					Storekeeper: "",
				},

				isStoragesShow: false, //是否开启添加仓库
				setStoragesShow: false, //是否开启修改仓库
				setIndex: "",
				pageIndex: 1, //分页页数
				pageTotal: 0,
				pageSize: 10,
				loading: true,
				tableHeight: "", //表格高度
				productCategory: [], //产品分类信息
				memberData: [], //该厂家下全员工
				operation:{},
				peledel:false,

			};
		},

		methods: {

			//修改分页

			pageChange: function(index) {

				this.pageIndex = index

			},

			//打开添加成功弹出框

			storagesOpen: function() {
				this.isStoragesShow = true
				this.objStorages = {
					Name: "",
					ProductCategory: "",
					Key: "",
					Notes: "",
					Storekeeper: "",
				}
			},

			//添加仓库选择分类获取key
			SelectCategory: function(val) {

				for(var i = 0; i < this.productCategory.length; i++) {

					if(val == this.productCategory[i].id) {
						this.objStorages.Key = this.productCategory[i].key
					}

				}

			},

			//确认添加仓库
			psuhStorages: function() {

				var objstorages = this.objStorages

				var name = objstorages.Name
				/*	var nameLenght= encodeURIComponent(name).replace(/%[A-Z0-9]{2}/g,"0").length*/

				var notes = objstorages.Notes
				var productCategory = objstorages.ProductCategory
				var storekeeper = objstorages.Storekeeper
				var Key = objstorages.Key

				if(name == "" || name == null || name.trim().length == 0) {
					this.$Message.error('仓库名称不能为空！');
					return false;
				} else if(name.trim().length > 8) {
					this.$Message.error('仓库名称长度不能超过8位！');
					return false;
				} else if(productCategory == "" || productCategory == null || productCategory.trim().length == 0) {
					this.$Message.error('仓库分类不能为空！');
					return false;
				} else if(storekeeper == "" || storekeeper == null || storekeeper.trim().length == 0) {
					this.$Message.error('仓库负责人不能为空！');
					return false;
				} else {

					

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/storages',

						data: {
							"name": name,
							"notes": notes,
							"productCategoryId": productCategory,
							"key": Key,
							"storekeeper": storekeeper,

						}

					}).then(function(res) {
						
							var verify = [{
								"name": "name",
								"note": "仓库名称"
							},
							{
								"name": "notes",
								"note": "仓库描述 "
							},
							{
								"name": "productCategoryId",
								"note": "仓库分类 "
							},
							{
								"name": "storekeeper",
								"note": "仓库负责人 "
							},
	
						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that,verify) == false) {
							return false
						}
						var data = res.data.data

						that.tableData.unshift(data)
						that.$Message.success("添加成功")

						that.isStoragesShow = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.isStoragesShow = false
					})

				}

			},

			//开启修改仓库

			setStoragesOpen: function(index) {

				this.setIndex = index

				this.Setstorages.Name = this.tableData[index].name
				this.Setstorages.Notes = this.tableData[index].notes
				this.Setstorages.Storekeeper = this.tableData[index].storekeeper
				this.Setstorages.ProductCategory = this.tableData[index].productCategoryId
				this.Setstorages.Key = this.tableData[index].key

			},

			SetCategory: function(val) {

				for(var i = 0; i < this.productCategory.length; i++) {

					if(val == this.productCategory[i].id) {
						this.Setstorages.Key = this.productCategory[i].key
					}

				}

			},

			//确认修改仓库信息

			setStorages: function() {

				var setstorages = this.Setstorages

				var id = this.tableData[this.setIndex].id

				var name = setstorages.Name
				var notes = setstorages.Notes
				var productCategory = setstorages.ProductCategory
				var storekeeper = setstorages.Storekeeper
				var Key = setstorages.Key

				if(name == "" || name == null || name.trim().length == 0) {
					this.$Message.error('仓库名称不能为空！');
					return false;
				} else if(name.trim().length > 8) {
					this.$Message.error('仓库名称长度不能超过8位！');
					return false;
				} else if(productCategory == "" || productCategory == null || productCategory.trim().length == 0) {
					this.$Message.error('仓库分类不能为空！');
					return false;
				} else if(storekeeper == "" || storekeeper == null || storekeeper.trim().length == 0) {
					this.$Message.error('仓库负责人不能为空！');
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
						url: '/api/f/storages/' + id,

						data: {
							"name": name,
							"notes": notes,
							"productCategoryId": productCategory,
							"key": Key,
							"storekeeper": storekeeper,

						}

					}).then(function(res) {
						
							var verify = [{
								"name": "name",
								"note": "仓库名称"
							},
							{
								"name": "notes",
								"note": "仓库描述 "
							},
							{
								"name": "productCategoryId",
								"note": "仓库分类 "
							},
							{
								"name": "storekeeper",
								"note": "仓库负责人 "
							},
	
						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that,verify) == false) {
							return false
						}
						var data = res.data.data
						that.tableData[that.setIndex].id = data.id
						that.tableData[that.setIndex].name = data.name
						that.tableData[that.setIndex].notes = data.notes
						that.tableData[that.setIndex].categoryName = data.categoryName
						that.tableData[that.setIndex].storekeeperName = data.storekeeperName
						that.tableData[that.setIndex].key = data.key
						that.tableData[that.setIndex].creatorName = data.creatorName
						that.tableData[that.setIndex].created = data.created
						that.tableData[that.setIndex].productCategoryId = data.productCategoryId
						that.tableData[that.setIndex].storekeeper = data.storekeeper
						that.tableData[that.setIndex].creator = data.creator

						that.$Message.success("修改成功")

						that.setStoragesShow = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.setStoragesShow = false
					})

				}

			},

			//删除仓库

			delStorages: function() {
                  var index =this.setIndex
				var id = this.tableData[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-delete"
			
				this.axios({
					method: 'delete',
					url: '/api/f/storages/' + id,

				}).then(function(res) {
                    that.peledel =false
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
                     that.tableData.splice(index,1)
					that.$Message.success("删除成功")
                        
				}).catch(function(err) {
                    that.peledel =false
					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '仓库第' + this.pageIndex + '页数据'
				});
			},

			gatData: function() {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				//请求产品
				this.axios({
					method: 'get',
					url: '/api/f/storages?pageNum=' + this.pageIndex + '&pageSize=10000' ,

				}).then(function(res) {

					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					for(var i = 0; i < data.length; i++) {

					}

					that.tableData = data
					that.pageTotal = dataAll.pagination.total
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})

			}

		},

		mounted: function() {
			
			
			axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)
			
			
			var scH=document.body.scrollHeight||document.documentElement.scrollHeight
			this.tableHeight = ( scH - 350)
			
			
			
			this.gatData()

			var that = this
			//请求全部分类信息
			this.axios({
				method: 'get',
				url: '/api/f/productcategories',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data
				that.productCategory = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

			this.axios({
				method: 'get',
				url: '/api/f/depts/members?status=0&pageNum=1&pageSize=20000',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data
				that.memberData = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

		}

	}
</script>
