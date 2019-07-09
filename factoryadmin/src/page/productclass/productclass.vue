<template>
	<div>
		<div class="Breadcrumb">
			
			<Breadcrumb>
				<BreadcrumbItem to="/admin">Home</BreadcrumbItem>
				<BreadcrumbItem>产品分类列表</BreadcrumbItem>
				
			</Breadcrumb>
		</div>

		<div class="operation_box">

			<Button type="primary" @click="productModelOpen">添加产品分类</Button>
		</div>

		<!-- 产品分类信息列表 -->
		<div>

			<Table border :loading="loading" :columns="productCategoryHeader" :data="productCategory" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_operate">
					<Button type="primary" @click="exportData">下载表格数据</Button>
				</div>

				<!--<div class="ui_page">
					<Page :current="pageIndex" :total="100" :page-size="20" @on-change="pageChange" show-elevator></Page>
				</div>-->

			</div>

		</div>

		<!--添加产品分类模态框 -s -->

		<Drawer v-model="productModel" 
		title="添加产品分类"		
		width="500"
			>

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

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="productModelOk">确认添加</Button>
			</div>

		</Drawer>

		<!--添加产品分类模态框-end-->

		<!--修改分类信息-s-->

		
			 <Drawer
             v-model="SetproductModel" 
             title="修改产品分类信息"
            width="500"
            :mask="Drawermask"
             >

			<Form :model="Setproduct" :label-width="100">
				<FormItem label="产品分类名称">
					<Input v-model="Setproduct.SetproductName" placeholder="请输入产品分类名称..."></Input>
				</FormItem>

				<FormItem label="产品分类描述">
					<Input v-model="Setproduct.SetproductNotes" placeholder="请输入产品分类描述..."></Input>
				</FormItem>

				<FormItem label="产品分类标识">
					<Input v-model="Setproduct.SetproductKey" placeholder="请输入产品分类唯一标识..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetproductIsOk">确认修改</Button>
			</div>

		</Drawer>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				productCategoryHeader: [{
						title: '分类id',
						key: 'id',

					},

					{
						title: '分类名称',
						key: 'name'
					},

					{
						title: '分类描述',
						key: 'notes'
					},

					{
						title: '唯一标识',
						key: 'key'
					},

					{
						title: 'Action',
						key: 'action',
						width: 150,
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
											this.SetproductModel = true
											this.SetproductOpen(params.index)

										}
									}
								}, '编辑'),
								h('Poptip', {
									props: {
										"confirm": true,
										"placement": "left",
										title: '你确定要删除这个内容吗?',

									},

									on: {
										'on-ok': () => {
											/* this.remove() */
											/*this.productCategory.splice(params.index, 1)*/
											
											this.delTabData(params.index)

										}
									}
								}, "删除")
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

				},

				Setproduct: { //修改部门信息
					"SetproductName": "",
					"SetproductNotes": "",
					"SetproductKey": "",

				},
                SetIndex:"",//点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				loading: true,
				tableHeight: 500,
				Drawermask:true

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
					"key":""

				}
			},

			//确认添加产品api		
			productModelOk: function() {

				var objproduct = this.objproduct

				var name = objproduct.name
				var notes = objproduct.notes
				var Key = objproduct.Key

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('产品分类名称不能为空！');
					return false;
				} else if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('产品分类描述不能为空！');
					return false;
				} else if(Key == "" || Key == null || Key.trim().length == 0) {
					this.$Message.error('产品分类标识不能为空！');
					return false;
				} {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/product/category',

						data: {
							"name": name,
							"notes": notes,
						    "key": Key
						}

					}).then(function(res) {
						var data = res.data.data

						if(res.data.error) {
							that.$Message.error(res.data.error.message);
							return false
						}

						that.productCategory.push(data)
						that.$Message.success("添加成功")
						that.objproduct = {
							"name": "",
							"notes": "",
							"key":""

						}

					    setTimeout(msg, 100);

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

					this.productModel = false

				}

			},

			//打开修改产品分类信息模态框

			SetproductOpen: function(index) {
                
                this.SetIndex=index
                
				this.Setproduct.SetproductName = this.productCategory[index].name
				this.Setproduct.SetproductNotes = this.productCategory[index].notes
				this.Setproduct.SetproductKey = this.productCategory[index].key

			},

			//修改产品分类信息api

			SetproductIsOk: function() {

                var Id=this.productCategory[this.SetIndex].id //产品分类对应的id
                

				var Setproduct = this.Setproduct

				var name = Setproduct.SetproductName
				var notes = Setproduct.SetproductNotes
				var Key = Setproduct.SetproductKey

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('产品分类名称不能为空！');
					return false;
				} else if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('产品分类描述不能为空！');
					return false;
				} else  if(Key == "" || Key == null || Key.trim().length == 0) {
					this.$Message.error('产品分类标识不能为空！');
					return false;
				} else {
                    const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/product/category/'+Id,

						data: {
							"name": name,
							"notes": notes,
						    "key": Key
						}

					}).then(function(res) {
						var data = res.data.data

                      

						if(res.data.error) {
							that.$Message.error(res.data.error.message);
							return false
						}

						that.productCategory[that.SetIndex].name=data.name
						that.productCategory[that.SetIndex].notes=data.notes
						that.productCategory[that.SetIndex].key=data.key

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
			
			delTabData:function  (index) {
				
				 const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});
				
				var Id=this.productCategory[index].id //产品分类对应的id
				
				var that = this
					//                    /
					this.axios({
						method: 'delete',
						url: '/api/f/product/category/'+Id,

					}).then(function(res) {

						if(res.data.error) {
							that.$Message.error(res.data.error.message);
							return false
						}
                        that.productCategory.splice(index, 1)
						that.$Message.success("删除成功")
                        setTimeout(msg, 100);
						

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

				
				
			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '产品分类数据'
				});
			},

		},

		mounted: function() {

			this.tableHeight = (document.body.scrollHeight - 420)

			var that = this
			//产品分类数据
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
				that.loading = false

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');
				that.loading = false

			})

		}

	}
</script>

<style>
	.ivu-poptip-confirm .ivu-poptip-body .ivu-icon {
		left: 20px;
	}
	
	.ivu-poptip.ivu-poptip-confirm .ivu-poptip-rel {
		color: white;
		background: red;
		border-radius: 3px;
		height: 24px;
		line-height: 24px;
		padding: 0px 7px;
		top: 2px;
	}
	
	.ivu-poptip.ivu-poptip-confirm .ivu-poptip-rel:hover {
		opacity: 0.8;
	}
	
	.Drawer_op{
		margin-left: 100px;
	}
</style>