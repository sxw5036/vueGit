<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/admin">Home</BreadcrumbItem>
				<BreadcrumbItem>产品规格列表</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">

			<Button type="primary" @click="GetModelOpen">添加产品</Button>
		</div>

		<!-- 部门信息列表 -->
		<div>

			<Table border :loading="loading" :columns="tableHeader" :data="tableData" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_operate">
					<Button type="primary" @click="exportData">下载表格数据</Button>
				</div>

				<div class="ui_page">
					<Page :current="pageIndex" :total="pageIndextotal" :page-size="30" @on-change="pageChange" show-elevator></Page>
				</div>

			</div>

		</div>

		<!--添加部门模态框 -s -->

		<Drawer title="添加产品" v-model="GetModel" width="500">

			<Form :model="objGetData" :label-width="80">
				<FormItem label="产品名称">
					<Input v-model="objGetData.name" placeholder="请输入产品名称..."></Input>
				</FormItem>

				<FormItem label="产品描述">
					<Input v-model="objGetData.notes" placeholder="请输入产品描述..."></Input>
				</FormItem>

				<FormItem label="产品分类">

					<Select v-model="objGetData.productCategoryId" @on-change="SelectCategory">
						<Option v-for="item in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

				</FormItem>

				<FormItem label="产品材质">

					<Select v-model="objGetData.productMaterialId">
						<Option v-for="item in productMaterial" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>

				<FormItem label="产品颜色">

					<Select v-model="objGetData.productColor">
						<Option v-for="item in productColor" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>

				<FormItem label="产品标识">
					<Input v-model="objGetData.no" placeholder="请输入产品标识..."></Input>
				</FormItem>

				<FormItem label="计量单位">
					<RadioGroup v-model="objGetData.unit">
						<Radio label="0">个</Radio>
						<Radio label="1">张</Radio>
						<Radio label="2">米</Radio>
						<Radio label="3">平方米</Radio>
						<Radio label="4">包</Radio>
					</RadioGroup>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="GetModelIsok">确认添加</Button>
			</div>

		</Drawer>

		<!--修改部门信息-s-->

		<Drawer v-model="SetModel" title="修改规格信息" width="500">

			<Form :model="SetGetData" :label-width="80">
				<FormItem label="产品名称">
					<Input v-model="SetGetData.Setname" placeholder="请输入产品名称..."></Input>
				</FormItem>

				<FormItem label="产品描述">
					<Input v-model="SetGetData.Setnotes" placeholder="请输入产品描述..."></Input>
				</FormItem>

				<FormItem label="产品分类">

					<Select v-model="SetGetData.SetproductCategoryId" @on-change="SelectCategory">
						<Option v-for="item in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

				</FormItem>

				<FormItem label="产品材质">

					<Select v-model="SetGetData.SetproductMaterialId">
						<Option v-for="item in productMaterial" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>

				<FormItem label="产品颜色">

					<Select v-model="SetGetData.SetproductColor">
						<Option v-for="item in productColor" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>

				<FormItem label="产品标识">
					<Input v-model="SetGetData.Setno" placeholder="请输入产品标识..."></Input>
				</FormItem>

				<FormItem label="计量单位">
					<RadioGroup v-model="SetGetData.Setunit">
						<Radio label="0">个</Radio>
						<Radio label="1">张</Radio>
						<Radio label="2">米</Radio>
						<Radio label="3">平方米</Radio>
						<Radio label="4">包</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="当前状态">
					<RadioGroup v-model="SetGetData.Setstatus">

						<Radio label="0">正常</Radio>
						<Radio label="1">禁用</Radio>
						<Radio label="2">淘汰</Radio>

					</RadioGroup>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetModelIsok">确认修改</Button>
			</div>

		</Drawer>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [{
						title: '产品名称',
						key: 'name',
						fixed: 'left',
						width: 200,
					},

					{
						title: '产品ID',
						key: 'id',
						width: 150,
					},

					{
						title: '产品描述',
						key: 'notes',
						width: 300,
					},

					{
						title: '产品编号',
						key: 'no',
						width: 200,
					},

					{
						title: '当前状态',
						key: 'status',
						align: 'center',
						width: 100,
						render: (h, params) => {

							const row = params.row;
							var color
							var text
							if(row.status == 0) {
								color = 'orange';
								text = '正常'
							} else if(row.status == 1) {
								color = 'orange';
								text = '淘汰'
							} else if(row.status == 2) {
								color = 'orange';
								text = '禁用'
							}
							return h('div', {

							}, text);

						}
					},

					{
						title: '创建人',
						key: 'creator',
						width: 200,
					},

					{
						title: '创建日期',
						key: 'created',
						width: 200,
					},

					{
						title: '单位',
						key: 'unit',
						align: 'center',
						width: 100,
						render: (h, params) => {

							const row = params.row;
							var color
							var text
							if(row.unit == 0) {
								color = 'orange';
								text = '个'
							} else if(row.unit == 1) {
								color = 'orange';
								text = '张'
							} else if(row.unit == 2) {
								color = 'orange';
								text = '米'
							} else if(row.unit == 3) {
								color = 'orange';
								text = '平方米'
							} else if(row.unit == 3) {
								color = 'orange';
								text = '包'
							}
							return h('div', {

							}, text);

						}
					},

					{
						title: '产品分类',
						key: 'categoryName',
						width: 150,
					},

					{
						title: '产品材质',
						key: 'materialName',
						width: 150,
					},

					{
						title: '产品颜色',
						key: 'colorName',
						width: 150,
					},

					{
						title: '操作',
						key: 'action',
						width: 150,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
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

							]);
						}
					}
				],

				tableData: [{
					"resultCode": "200",
					"id": "aaaaa",
					"name": "007",
					"notes": "前所未有",
					"productCategoryId": "4gd6378euww0",
					"productMaterialId": "4gnu295y7oxs",
					"productColor": "4gn98964fqio",
					"no": "2222",
					"status": 0,
					"creator": "aaa",
					"created": "2018-12-04 15:10:13",
					"unit": 1,
					"materialName": "红松木",
					"colorName": "青色",
					"categoryName": "磨砂板"
				}], //表格数据
				GetModel: false, //添加模态框属性
				SetModel: false, //修改模态框属性
				objGetData: { //添加信息
					"name": "",
					"notes": "",
					"productCategoryId": "",
					"productMaterialId": "",
					"productColor": "",
					"no": "",
					"unit": "",

				},

				SetGetData: { //修改信息
					"Setname": "",
					"Setnotes": "",
					"SetproductCategoryId": "",
					"SetproductMaterialId": "",
					"SetproductColor": "",
					"Setno": "",
					"Setunit": "",
					"Setstatus": "",

				},
				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageIndextotal: 100,
				loading: true,

				productCategory: [], //产品分类
				productMaterial: [], //产品材质
				productColor: [] //产品颜色

			};
		},

		methods: {

			pageChange: function(index) {
				this.pageIndex = index
				this.getDatas()
			},

			GetModelOpen: function() {
				this.GetModel = true
				this.objGetData = {
					"name": "",
					"notes": "",
					"productCategoryId": "",
					"productMaterialId": "",
					"productColor": "",
					"no": "",
					"unit": "",
				}
			},

			//选择分类后请求分类下产品材质和颜色
			SelectCategory: function(val) {

				this.productMaterial = []
				this.productColor = []
				this.objGetData.productMaterialId = ""
				this.objGetData.productColor = ""
				this.SetGetData.SetproductMaterialId = ""
				this.SetGetData.SetproductColor = ""
				this.getcategorycategory(val)
				this.getcategorycolor(val)

			},

			getcategorycategory: function(val) {
				var that = this
				//请求材质信息
				this.axios({
					method: 'get',
					url: '/api/f/product/category/' + val + '/material',

				}).then(function(res) {

					var data = res.data.data

					if(res.data.error) {
						that.$Message.error(res.data.error.message);
						return false
					}
					that.productMaterial = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})
			},

			getcategorycolor: function(val) {
				var that = this
				//请求颜色信息信息
				this.axios({
					method: 'get',
					url: '/api/f/product/category/' + val + '/color',

				}).then(function(res) {

					var data = res.data.data

					if(res.data.error) {
						that.$Message.error(res.data.error.message);
						return false
					}
					that.productColor = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//添加信息api	
			GetModelIsok: function() {

				var objGetData = this.objGetData
				var name = objGetData.name
				var notes = objGetData.notes
				var productCategory = objGetData.productCategoryId
				var productMaterial = objGetData.productMaterialId
				var productColor = objGetData.productColor
				var no = objGetData.no
				var unit = objGetData.unit

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('产品名称不能为空！');
					return false;
				} else if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('产品描述不能为空！');
					return false;
				} else if(productCategory == "" || productCategory == null || productCategory.trim().length == 0) {

					this.$Message.error('产品分类不能为空！！');
					return false;
				} else if(no == "" || no == null || no.trim().length == 0) {

					this.$Message.error('产品标识不能为空！');
					return false;
				} else if(unit == "" || unit == null || unit.trim().length == 0) {

					this.$Message.error('产品单位不能为空！');
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
						url: '/api/f/product',

						data: {
							"name": name,
							"notes": notes,
							"productCategoryId": productCategory,
							"productMaterialId": productMaterial,
							"productColor": productColor,
							"no": no,
							"unit": unit,

						}

					}).then(function(res) {
						var data = res.data.data

						if(res.data.error) {
							that.$Message.error(res.data.error.message);
							return false
						}

						that.tableData.unshift(data)
						that.$Message.success("添加成功")
						setTimeout(msg, 100);
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
                this.productMaterial = []
				this.productColor = []
				
				var val = this.tableData[index].productCategoryId
				this.getcategorycategory(val)
				this.getcategorycolor(val)
				this.SetGetData.Setname = this.tableData[index].name
				this.SetGetData.Setnotes = this.tableData[index].notes
				this.SetGetData.SetproductCategoryId = val
				this.SetGetData.SetproductMaterialId = this.tableData[index].productMaterialId
				this.SetGetData.SetproductColor = this.tableData[index].productColor
				this.SetGetData.Setno = this.tableData[index].no
				this.SetGetData.Setunit = this.tableData[index].unit.toString()
				this.SetGetData.Setstatus = this.tableData[index].status.toString()

				var objMaterial = {
					id: this.tableData[index].productMaterialId,
					name: this.tableData[index].materialName
				}

				var objColor = {
					id: this.tableData[index].productColor,
					name: this.tableData[index].colorName
				}

				this.productMaterial.push(objMaterial)
				this.productColor.push(objColor)

				

			},

			//修改信息api

			SetModelIsok: function() {

				var id = this.tableData[this.SetIndex].id

				var setGetData = this.SetGetData
				var name = setGetData.Setname
				var notes = setGetData.Setnotes
				var productCategory = setGetData.SetproductCategoryId
				var productMaterial = setGetData.SetproductMaterialId
				var productColor = setGetData.SetproductColor
				var no = setGetData.Setno
				var unit = setGetData.Setunit
				var status = setGetData.Setstatus

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('产品名称不能为空！');
					return false;
				} else if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('产品描述不能为空！');
					return false;
				} else if(productCategory == "" || productCategory == null || productCategory.trim().length == 0) {

					this.$Message.error('产品分类不能为空！！');
					return false;
				} else if(no == "" || no == null || no.trim().length == 0) {

					this.$Message.error('产品标识不能为空！');
					return false;
				} else if(unit == "" || unit == null || unit.trim().length == 0) {

					this.$Message.error('产品单位不能为空！');
					return false;
				} else if(status == "" || status == null || status.trim().length == 0) {

					this.$Message.error('产品状态不能为空！');
					return false;
				} else {
					/*

					*/

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/product/' + id,

						data: {

							"name": name,
							"notes": notes,
							"productCategoryId": productCategory,
							"productMaterialId": productMaterial,
							"productColor": productColor,
							"no": no,
							"unit": unit,
							"status": status

						}

					}).then(function(res) {
						var data = res.data.data

						console.log(data)

						if(res.data.error) {
							that.$Message.error(res.data.error.message);
							return false
						}

						that.tableData[that.SetIndex].categoryName = data.categoryName
						that.tableData[that.SetIndex].colorName = data.colorName
						that.tableData[that.SetIndex].created = data.created
						that.tableData[that.SetIndex].creator = data.creator
						that.tableData[that.SetIndex].id = data.id
						that.tableData[that.SetIndex].materialName = data.materialName
						that.tableData[that.SetIndex].name = data.name
						that.tableData[that.SetIndex].no = data.no
						that.tableData[that.SetIndex].notes = data.notes
						that.tableData[that.SetIndex].productCategoryId = data.productCategoryId
						that.tableData[that.SetIndex].productColor = data.productColor
						that.tableData[that.SetIndex].productMaterialId = data.productMaterialId
						that.tableData[that.SetIndex].resultCode = data.resultCode
						that.tableData[that.SetIndex].unit = data.unit
						that.tableData[that.SetIndex].status = data.status

						that.$Message.success("修改成功")
						setTimeout(msg, 100);
						that.SetModel = false
					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.SetModel = false

					})

				}

			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '产品规格列表'
				});
			},

			getDatas: function() {

				var that = this
				//请求产品
				this.axios({
					method: 'get',
					url: '/api/f/product?pageNum=' + this.pageIndex + '&pageSize=30',

				}).then(function(res) {
					var dataAll = res.data
					var data = res.data.data

					if(res.data.error) {
						that.$Message.error(res.data.error.message);
						return false
					}
					that.tableData = data
					that.pageIndextotal = dataAll.pagination.total
					that.loading = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			}

		},

		mounted: function() {

			this.getDatas()

			var that = this
			//请求全部分类信息
			this.axios({
				method: 'get',
				url: '/api/f/product/category',

			}).then(function(res) {

				var data = res.data.data

				if(res.data.error) {
					that.$Message.error(res.data.error.message);
					return false
				}
				that.productCategory = data

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