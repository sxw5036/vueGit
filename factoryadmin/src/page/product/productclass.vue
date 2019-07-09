<template>
	<div>
		<div class="Breadcrumb">

			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>产品分类列表</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="operation_box">
			<div class="active">
				<div class="ui_operateRight">
					<Button type="primary" @click="productModelOpen" v-show="operation.edit==true">添加产品分类</Button>
						
					<!--<Button class="item_PL" type="primary" @click="exportData">生成表格数据</Button>-->
				</div>
			</div>

		</div>

		<!-- 产品分类信息列表 -->
		<div>

			<Table border :loading="loading" :columns="productCategoryHeader" :data="productCategory" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_operate">
					
				</div>

				<!--<div class="ui_page">
					<Page :current="pageIndex" :total="100" :page-size="20" @on-change="pageChange" show-elevator></Page>
				</div>-->

			</div>

		</div>

		<!--添加产品分类模态框 -s -->

		<Drawer v-model="productModel" title="添加产品分类" width="500">

			<Form :model="objproduct" :label-width="100">
				<FormItem label="产品分类名称">
					<Input v-model="objproduct.name" placeholder="请输入产品分类名称..."></Input>
				</FormItem>

				<FormItem label="产品分类描述">
					<Input v-model="objproduct.notes" placeholder="请输入产品分类描述..."></Input>
				</FormItem>

				<FormItem label="产品分类标识">
					<Input v-model="objproduct.Key" placeholder="请输入产品分类唯一标识..."></Input>
				</FormItem>

				<FormItem label="产品分类类型">
					<RadioGroup v-model="objproduct.companyType">
						<Radio label="0">原材料</Radio>
						<Radio label="1">尾料</Radio>
						<Radio label="2">废料</Radio>
						<Radio label="3">退料</Radio>
						<Radio label="4">退货</Radio>
						<Radio label="5">成品</Radio>
					</RadioGroup>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="productModelOk">确认添加</Button>
			</div>

		</Drawer>

		<!--添加产品分类模态框-end-->

		<!--修改分类信息-s-->

		<Drawer v-model="SetproductModel" title="修改产品分类信息" width="500" :mask="Drawermask">

			<Form :model="Setproduct" :label-width="100">
				<FormItem label="产品分类名称">
					<Input v-model="Setproduct.SetproductName" placeholder="请输入产品分类名称..."></Input>
				</FormItem>

				<FormItem label="产品分类描述">
					<Input v-model="Setproduct.SetproductNotes" placeholder="请输入产品分类描述..."></Input>
				</FormItem>

				<!--<FormItem label="产品分类标识">
					<Input v-model="Setproduct.SetproductKey" placeholder="请输入产品分类唯一标识..."></Input>
				</FormItem>
-->
				<FormItem label="产品分类类型">
					<RadioGroup v-model="Setproduct.SetproducType">
						<Radio label="0">原材料</Radio>
						<Radio label="1">尾料</Radio>
						<Radio label="2">废料</Radio>
						<Radio label="3">退料</Radio>
						<Radio label="4">退货</Radio>
						<Radio label="5">成品</Radio>
					</RadioGroup>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetproductIsOk">确认修改</Button>
			</div>

		</Drawer>
		
		<!--删除提示-->
		
		 <Modal v-model="pdel" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>删除提示</span>
        </p>
        <div style="text-align:center">
            <p>您正在执行删除操作</p>
            <p>是否继续执行？</p>
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

				productCategoryHeader: [

					{
						title: '分类名称',
						key: 'name'
					},

					{
						title: '分类描述',
						key: 'notes'
					},

					{
						title: '产品类型',
						key: 'typeName'
					},

					{
						title: '唯一标识',
						key: 'key'
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
											this.SetproductModel = true
											this.SetproductOpen(params.index)

										}
									}
								}, '编辑'),
								
								h('Button', {
									props: {
											type: 'error',
										    size: 'small',
										    disabled: !this.operation.delete
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.pdel=true
											this.SetIndex=params.index

										}
									}
								}, '删除'),
								

							/*	h('Poptip', {
									props: {
										confirm: true,
										title: '您确定要删除这条数据吗?',
										transfer: true,
										disabled: !this.operation.delete
									},
									on: {
										'on-ok': () => {
											this.delTabData(params.index)
										}
									}
								}, [
									h('div', [
										h('Button', {
											props: {
											
											}
										}, '删除')
									])
								])*/

							]);
						}
					}
				],

				productCategory: [], //产品分类数据
				productModel: false, //添加产品分类模态框
				SetproductModel: false, //修改产品分类模态框
				objproduct: { //添加产品分类信息
					"name": "",
					"notes": "",
					"Key": "",
					"companyType": "",

				},

				Setproduct: { //修改部门信息
					"SetproductName": "",
					"SetproductNotes": "",
					"SetproductKey": "",
					"SetproducType": "",

				},
				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				loading: true,
				tableHeight: 500,
				Drawermask: true,
				operation:{},
				pdel:false,

			};
		},

		methods: {

			pageChange: function(index) {
				this.pageIndex = index

			},

			productModelOpen: function() {
				this.productModel = true
				this.objproduct = {
					"name": "",
					"notes": "",
					"key": "",
					"companyType": "",

				}
			},

			//确认添加产品api		
			productModelOk: function() {

				var objproduct = this.objproduct

				var name = objproduct.name
				var notes = objproduct.notes
				var Key = objproduct.Key
				var type = objproduct.companyType

				if( name == null ||name == "" || name.trim().length == 0) {

					this.$Message.error('产品分类名称不能为空！');
					return false;
				} else if( notes == null ||notes == "" || notes.trim().length == 0) {
					this.$Message.error('产品分类描述不能为空！');
					return false;
				} else if( Key == null ||Key == "" || Key.trim().length == 0) {
					this.$Message.error('产品分类标识不能为空！');
					return false;
				} else if( type == null ||type == "" || type.trim().length == 0) {
					this.$Message.error('产品分类类型不能为空！');
					return false;
				} {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					
					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/productcategories',

						data: {
							"name": name,
							"notes": notes,
							"key": Key,
							"type": type
						}

					}).then(function(res) {
						
						var verify = [{
								"name": "name",
								"note": "产品分类名称"
							},
							{
								"name": "notes",
								"note": "产品分类描述 "
							},
							{
								"name": "key",
								"note": "产品分类标识 "
							},
							{
								"name": "type",
								"note": "产品分类类型 "
							},
							
						]
						
						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that,verify) == false) {
							return false
						}

						var data = res.data.data

						var type = data.type

						if(type == 0) {
							data.typeName = "原材料"
						} else if(type == 1) {
							data.typeName = "尾料"
						} else if(type == 2) {
							data.typeName = "废料"
						} else if(type == 3) {
							data.typeName = "退料"
						} else if(type == 4) {
							data.typeName = "退货"
						} else if(type == 5) {
							data.typeName = "成品"
						}

						that.productCategory.push(data)
						that.$Message.success("添加成功")
						that.objproduct = {
							"name": "",
							"notes": "",
							"key": ""

						}

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

					this.productModel = false

				}

			},

			//打开修改产品分类信息模态框

			SetproductOpen: function(index) {

				this.SetIndex = index

				this.Setproduct.SetproductName = this.productCategory[index].name
				this.Setproduct.SetproductNotes = this.productCategory[index].notes
				this.Setproduct.SetproductKey = this.productCategory[index].key
				this.Setproduct.SetproducType = this.productCategory[index].type.toString()

			},

			//修改产品分类信息api

			SetproductIsOk: function() {

				var Id = this.productCategory[this.SetIndex].id //产品分类对应的id

				var Setproduct = this.Setproduct

				var name = Setproduct.SetproductName
				var notes = Setproduct.SetproductNotes
				/*var Key = Setproduct.SetproductKey.trim()*/
				var type = Setproduct.SetproducType

				if( name == null ||name == "" || name.trim().length == 0) {

					this.$Message.error('产品分类名称不能为空！');
					return false;
				} else if( notes == null ||notes == "" || notes.trim().length == 0) {
					this.$Message.error('产品分类描述不能为空！');
					return false;
				} else if( type == null ||type == "" || type.trim().length == 0) {
					this.$Message.error('产品分类类型不能为空！');
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
						url: '/api/f/productcategories/' + Id,

						data: {
							"name": name,
							"notes": notes,
							
							"type": type,
						}

					}).then(function(res) {
						
						var verify = [{
								"name": "name",
								"note": "产品分类名称"
							},
							{
								"name": "notes",
								"note": "产品分类描述 "
							},
							{
								"name": "key",
								"note": "产品分类标识 "
							},
							{
								"name": "type",
								"note": "产品分类类型 "
							},
							
						]
						
						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that,verify) == false) {
							return false
						}
						var data = res.data.data

						that.productCategory[that.SetIndex].name = data.name
						that.productCategory[that.SetIndex].notes = data.notes
						
						that.productCategory[that.SetIndex].type = data.type

						var type = data.type

						if(type == 0) {
							that.productCategory[that.SetIndex].typeName = "原材料"
						} else if(type == 1) {
							that.productCategory[that.SetIndex].typeName = "尾料"
						} else if(type == 2) {
							that.productCategory[that.SetIndex].typeName = "废料"
						} else if(type == 3) {
							that.productCategory[that.SetIndex].typeName = "退料"
						} else if(type == 4) {
							that.productCategory[that.SetIndex].typeName = "退货"
						} else if(type == 5) {
							that.productCategory[that.SetIndex].typeName = "成品"
						}

						that.$Message.success("修改成功")
						setTimeout(msg, 100);

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

					this.SetproductModel = false

				}

			},

			//删除表格数据api

			delTabData: function() {
				
				var index=this.SetIndex

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var Id = this.productCategory[index].id //产品分类对应的id

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-delete"
				//                    /
				this.axios({
					method: 'delete',
					url: '/api/f/productcategories/' + Id,

				}).then(function(res) {
					that.pdel=false
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.productCategory.splice(index, 1)
					that.$Message.success("删除成功")
                    
				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},

			// 导出表格
			exportData: function(type) {
				this.$refs.table.exportCsv({
					filename: '产品分类数据',					
				});
			},

		},

		mounted: function() {
			
			axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.tableHeight = (document.body.clientHeight - 420)

			var that = this
			//产品分类数据
			this.axios({
				method: 'get',
				url: '/api/f/productcategories',

			}).then(function(res) {
				that.loading = false
				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data

				for(var i = 0; i < data.length; i++) {

					var type = data[i].type

					if(type == 0) {
						data[i].typeName = "原材料"
					} else if(type == 1) {
						data[i].typeName = "尾料"
					} else if(type == 2) {
						data[i].typeName = "废料"
					} else if(type == 3) {
						data[i].typeName = "退料"
					} else if(type == 4) {
						data[i].typeName = "退货"
					} else if(type == 5) {
						data[i].typeName = "成品"
					}

				}

				that.productCategory = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');
				that.loading = false

			})

		}

	}
</script>

<style>
	.Drawer_op {
		margin-left: 100px;
	}
</style>