<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>产品规格</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">

			<Row>
				<Col span="12">
				<Select v-model="productCategoryId" @on-change="getDatas(productCategoryId)" style="width:200px">
					<Option v-for="item in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
				</Select>
				</Col>
				<Col span="12" style="text-align: right;">
				<Button type="primary" @click="GetModelOpen" v-show="operation.view==true">添加产品规格</Button>
				<!--<Button class="item_PL" type="primary" @click="exportData">生成表格数据</Button>-->
				</Col>
			</Row>

		</div>

		<!-- 信息列表 -->
		<div>

			<Table border :loading="loading" :columns="tableHeader" :data="tableData" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_operate">

				</div>

				<!--<div class="ui_page">
					<Page :current="pageIndex" :total="pageIndextotal" :page-size="30" @on-change="pageChange" show-elevator></Page>
				</div>-->

			</div>

		</div>

		<!--添加模态框 -s -->

		<Drawer title="添加规格产品" v-model="GetModel" width="500">

			<Form :model="objGetData" :label-width="100">
				<FormItem label="产品规格名称">
					<Input v-model="objGetData.name" placeholder="请输入产品规格名称..."></Input>
				</FormItem>

				<FormItem label="产品规格描述">
					<Input v-model="objGetData.notes" placeholder="请输入产品规格描述..."></Input>
				</FormItem>

				<FormItem label="产品分类">

					<Select v-model="objGetData.productCategoryId" @on-change="SelectCategory">
						<Option v-for="item in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="GetModelIsok">确认添加</Button>
			</div>

		</Drawer>

		<!--修改部门信息-s-->

		<Drawer v-model="SetModel" title="修改产品规格信息" width="500">

			<Form :model="SetGetData" :label-width="100">
				<FormItem label="产品规格名称">
					<Input v-model="SetGetData.Setname" placeholder="请输入产品规格名称..."></Input>
				</FormItem>

				<FormItem label="产品规格描述">
					<Input v-model="SetGetData.Setnotes" placeholder="请输入产品规格描述..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetModelIsok">确认修改</Button>
			</div>
			
		

		</Drawer>
		
		<Modal v-model="peledel" width="360" >
	        <p slot="header" style="color:red;text-align:center;">
	            <Icon type="md-alert"></Icon>
	            <span>删除仓库信息</span>
	        </p>
	        <div style="text-align:center">
	            <p>您正在执行删除产品规格的操作</p>
	            <p>确定要删除吗?</p>
	        </div>
	        <div slot="footer">
	            <Button type="error" size="large" long  @click="delTabData">删除</Button>
	        </div>
        </Modal>

	</div>
	
	
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [

					/*	{
							title: '产品规格ID',
							key: 'id',

						},*/

					{
						title: '产品规格名称',
						key: 'name',

					},

					{
						title: '产品规格描述',
						key: 'notes',

					},

					{
						title: '所属分类',
						key: 'productCategoryName',

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
										disabled: !this.operation.view
										
										
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.SetModel = true
											this.SetModelOpen(params.index)

										}
									}
								}, '编辑'),
								
								h('Button', {
									props: {
										type: 'error',
  									    size: 'small',
										disabled: !this.operation.view
										
										
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.peledel = true
											this.setIndex = params.index

										}
									}
								}, '删除'),

//								h('Poptip', {
//									props: {
//										"confirm": true,
//										"placement": "left",
//										title: '你确定要删除这个内容吗?',
//
//									},
//
//									on: {
//										'on-ok': () => {
//											/* this.remove() */
//											/*this.productCategory.splice(params.index, 1)*/
//
//											this.delTabData(params.index)
//
//										}
//									}
//								}, [
//									h('div', [
//										h('Button', {
//											props: {
//												type: 'error',
//												size: 'small',
//												disabled: !this.operation.delete
//											}
//										}, '删除')
//									])
//								])

							]);
						}
					}
				],

				tableData: [], //表格数据
				GetModel: false, //添加模态框属性
				SetModel: false, //修改模态框属性
				objGetData: { //添加信息
					"name": "",
					"notes": "",
					"productCategoryId": "",

				},

				SetGetData: { //修改信息
					"Setname": "",
					"Setnotes": "",
					"SetproductCategoryId": "",

				},
				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数

				loading: false,

				productCategory: [], //产品分类
				productMaterial: [], //产品材质
				productColor: [], //产品颜色

				productCategoryId: "", //分类id
				peledel:false,
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

			/*pageChange: function(index) {
				this.pageIndex = index
				this.getDatas()
			},
*/
			GetModelOpen: function() {
				this.GetModel = true
				this.objGetData = {
					"name": "",
					"notes": "",
					"productCategoryId": "",

				}
			},

			//选择分类后请求分类下产品材质和颜色
			SelectCategory: function() {

			},

			//添加信息api	
			GetModelIsok: function() {

				var objGetData = this.objGetData
				var name = objGetData.name
				var notes = objGetData.notes
				var productCategory = objGetData.productCategoryId

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('规格名称不能为空！');
					return false;
				} else if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('规格描述不能为空！');
					return false;
				} else if(productCategory == "" || productCategory == null || productCategory.trim().length == 0) {

					this.$Message.error('规格分类不能为空！！');
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
						url: '/api/f/product/category/' + productCategory + '/specs',

						data: {
							"name": name,
							"notes": notes,
							"productCategoryId": productCategory,

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "规格名称"
							},
							{
								"name": "notes",
								"note": "规格描述 "
							},
							{
								"name": "productCategoryId",
								"note": "规格分类id"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data
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

			//打开修改部门信息模态框

			SetModelOpen: function(index) {

				this.SetIndex = index
				this.SetGetData.Setname = this.tableData[index].name
				this.SetGetData.Setnotes = this.tableData[index].notes

			},

			//修改信息api

			SetModelIsok: function() {

				var id = this.tableData[this.SetIndex].id
				var cid = this.tableData[this.SetIndex].productCategoryId
				var setGetData = this.SetGetData
				var name = setGetData.Setname
				var notes = setGetData.Setnotes

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('产品名称不能为空！');
					return false;
				} else if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('产品描述不能为空！');
					return false;
				} else {
					/*

					*/

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this

					this.axios({
						method: 'put',
						url: '/api/f/product/category/' + cid + '/specs/' + id,

						data: {

							"name": name,
							"notes": notes,
						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "规格名称"
							},
							{
								"name": "notes",
								"note": "规格描述 "
							},
							{
								"name": "productCategoryId",
								"note": "规格分类id"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						that.tableData[that.SetIndex].name = data.name
						that.tableData[that.SetIndex].notes = data.notes

						that.$Message.success("修改成功")

						that.SetModel = false
					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.SetModel = false

					})

				}

			},

			//	删除数据

			delTabData: function() {
                var index =this.setIndex    
				var id = this.tableData[index].id
				var cid = this.tableData[index].productCategoryId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/product/category/' + cid + '/specs/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						that.peledel =false
						return false
					}
					/*	if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					*/

					/*	console.log(res)
											var data = res.data.data*/

					that.tableData.splice(index, 1)
					that.$Message.success("删除成功")
                     that.peledel =false
					that.SetModel = false
				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.SetModel = false

				})

			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '产品规格列表'
				});
			},

			getDatas: function(id) {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				//请求产品
				this.axios({
					method: 'get',
					url: '/api/f/product/category/' + id + '/specs',

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.tableData = data

					/*that.$Message.success("请求成功")*/

					that.loading = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.loading = false

				})
			},

			

		},

		mounted: function() {


            var keydata = this.$route.query.key
            var operation=this.operation
			Isjurisdiction.user_jurisdiction(keydata,operation)
			

			/*	this.getDatas()*/

			var that = this
			//请求全部分类信息
			this.axios({
				method: 'get',
				url: '/api/f/product/categorys',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data
				that.productCategory = data
				that.productCategoryId = data[0].id
				that.getDatas(that.productCategoryId)

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

		}

	}
</script>

<style>
	.Drawer_op {
		margin-left: 80px;
	}
</style>

<style src='./../../assets/css/department.css'></style>