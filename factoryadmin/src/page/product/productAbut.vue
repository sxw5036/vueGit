<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>产品属性</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="supplierprod">
			<div class="supplierprod_lay">
				<h3>产品分类</h3>
				<ul>
					<li v-for="(item,index) in tableData" :class="{ac:index==SetIndex}" :key="index" @click="setsupplierOpen(index)">
						{{item.name}}
					</li>
				</ul>

			</div>
			<div class="supplierprod_center">

				<div class="center">
					<ul>
						<li style="width: 100%;">
							<div class="operation_box">
								<div class="active">
									<div class="ui_operateRight">
										<Button type="primary" @click="addspeacModel">新增规格</Button>
									</div>
								</div>
							</div>
							
							<Table border height="240px" :columns="speacHead" :data="productspeac" ref="table"></Table>
						</li>
						<li>
							<div style="padding-right:10px;">
								<div class="operation_box">
								<div class="active">
									<div class="ui_operateRight">
										<Button type="primary" @click="addcolorModel">新增颜色</Button>
									</div>
								</div>
							</div>
								<Table border height="240" :columns="colorHead" :data="productcolor" ref="table"></Table>
							</div>

						</li>
						<li>
							<div style="padding-left: 10px;">
								<div class="operation_box">
								<div class="active">
									<div class="ui_operateRight">
										<Button type="primary" @click="addmaterialModel">新增材质</Button>
									</div>
								</div>
							</div>
								<Table border height="240" :columns="materialHead" :data="productmaterial" ref="table"></Table>
							</div>

						</li>
					</ul>
				</div>

			</div>
		</div>

		<!--产品规格-->
		<!--新增产品规格-->
		<Drawer v-model="addspeac" title="修改产品规格" width="500" @on-close="productShow=true">

			<Form :model="addspeacObj" :label-width="100">
				<FormItem label="产品规格名称">
					<Input v-model="addspeacObj.name" placeholder="请输入产品规格名称..."></Input>
				</FormItem>

				<FormItem label="产品规格描述">
					<Input v-model="addspeacObj.notes" placeholder="请输入产品规格描述..."></Input>
				</FormItem>

				<FormItem label="产品规格分类">

					<Select v-model="addspeacObj.type">
						<Option  value="0" key="0">门板</Option>
						<Option  value="1" key="1">衣柜门</Option>
						<Option  value="2" key="2">拉手</Option>
						<Option  value="3" key="3">办公用品/消耗品</Option>
						<Option  value="4" key="4">其他</Option>
					</Select>

				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="pushspeac">确认添加</Button>
			</div>

		</Drawer>
		
		<Drawer v-model="setspeac" title="修改产品规格信息" width="500" @on-close="productShow=true">

			<Form :model="setspeacObj" :label-width="100">
				<FormItem label="产品规格名称">
					<Input v-model="setspeacObj.name" placeholder="请输入产品规格名称..."></Input>
				</FormItem>

				<FormItem label="产品规格描述">
					<Input v-model="setspeacObj.notes" placeholder="请输入产品规格描述..."></Input>
				</FormItem>
				
				<FormItem label="产品规格分类">

					<Select v-model="setspeacObj.type">
						<Option  value="0" key="0">门板</Option>
						<Option  value="1" key="1">衣柜门</Option>
						<Option  value="2" key="2">拉手</Option>
						<Option  value="3" key="3">办公用品/消耗品</Option>
						<Option  value="4" key="4">其他</Option>
					</Select>

				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="editspeac">确认修改</Button>
			</div>

		</Drawer>

		<Modal v-model="speacdel" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>是否确认删除当前产品规格数据？</p>

			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="speacdelIs">删除</Button>
			</div>
		</Modal>

		<!--产品规格-end-->
		
		
		<!--产品颜色-->
		
		<Drawer v-model="addcolor" title="新增产品颜色" width="500" @on-close="productShow=true">

			<Form :model="addcolorObj" :label-width="100">
				<FormItem label="产品颜色名称">
					<Input v-model="addcolorObj.name" placeholder="请输入产品颜色名称..."></Input>
				</FormItem>

				
				<FormItem label="产品颜色类型">

					<Select v-model="addcolorObj.type">
						<Option  value="0" key="0">门板</Option>
						<Option  value="1" key="1">衣柜门</Option>
						<Option  value="2" key="2">拉手</Option>
						<Option  value="3" key="3">办公用品/消耗品</Option>
						<Option  value="4" key="4">其他</Option>
					</Select>

				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="pushcolor">确认添加</Button>
			</div>

		</Drawer>
		
		<Drawer v-model="setcolor" title="修改产品颜色" width="500" @on-close="productShow=true">

			<Form :model="setcolorObj" :label-width="100">
				<FormItem label="产品颜色名称">
					<Input v-model="setcolorObj.name" placeholder="请输入产品颜色名称..."></Input>
				</FormItem>

				
				<FormItem label="产品颜色类型">

					<Select v-model="setcolorObj.type">
						<Option  value="0" key="0">门板</Option>
						<Option  value="1" key="1">衣柜门</Option>
						<Option  value="2" key="2">拉手</Option>
						<Option  value="3" key="3">办公用品/消耗品</Option>
						<Option  value="4" key="4">其他</Option>
					</Select>

				</FormItem>
				

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="editcolor">确认修改</Button>
			</div>

		</Drawer>

		<Modal v-model="colordel" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>是否确认删除当前产品颜色数据？</p>

			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="colordelIs">删除</Button>
			</div>
		</Modal>

		<!--产品颜色-end-->
		
		<!--产品材质-->
		
		<Drawer v-model="addmaterial" title="新增产品材质" width="500" @on-close="productShow=true">

			<Form :model="addmaterialObj" :label-width="100">
				<FormItem label="产品材质名称">
					<Input v-model="addmaterialObj.name" placeholder="请输入产品材质名称..."></Input>
				</FormItem>

               <FormItem label="产品材质描述">
					<Input v-model="addmaterialObj.notes" placeholder="请输入产品材质描述..."></Input>
				</FormItem>
				
				<FormItem label="产品材质类型">

					<Select v-model="addmaterialObj.type">
						<Option  value="0" key="0">门板</Option>
						<Option  value="1" key="1">衣柜门</Option>
						<Option  value="2" key="2">拉手</Option>
						<Option  value="3" key="3">办公用品/消耗品</Option>
						<Option  value="4" key="4">其他</Option>
					</Select>

				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="pushmaterial">确认添加</Button>
			</div>

		</Drawer>
		
		<Drawer v-model="setmaterial" title="修改产品材质" width="500" @on-close="productShow=true">

			<Form :model="setmaterialObj" :label-width="100">
				<FormItem label="产品颜色名称">
					<Input v-model="setmaterialObj.name" placeholder="请输入产品颜色名称..."></Input>
				</FormItem>

				  <FormItem label="产品材质描述">
					<Input v-model="setmaterialObj.notes" placeholder="请输入产品材质描述..."></Input>
				</FormItem>
				<FormItem label="产品颜色类型">

					<Select v-model="setmaterialObj.type">
						<Option  value="0" key="0">门板</Option>
						<Option  value="1" key="1">衣柜门</Option>
						<Option  value="2" key="2">拉手</Option>
						<Option  value="3" key="3">办公用品/消耗品</Option>
						<Option  value="4" key="4">其他</Option>
					</Select>

				</FormItem>
				

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="editmaterial">确认修改</Button>
			</div>

		</Drawer>

		<Modal v-model="materialdel" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>是否确认删除当前产品材质数据？</p>

			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="materialdelIs">删除</Button>
			</div>
		</Modal>
		
		<!--产品材质end-->

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				objIndex: "",
				setproductModel: false,
				SetIndex: 0,
				tableData: [], //产品分类数据
				productCategory: [], //产品分类				
				productcolor: [], //产品颜色
				colorHead: [{
						title: '产品颜色',
						key: 'name',
						align: 'center'
					},
					{
						title: '产品类型',
						key: 'notes',
						render: (h, params) => {

							var type = params.row.type

							if(type == 0) {
								var texts = "门板"
							} else if(type == 1) {
								var texts = "衣板门"
							} else if(type == 2) {
								var texts = "拉手"
							}else if(type == 3) {
								var texts = "办公用品/消耗品"
							}else if(type == 4) {
								var texts = "其他"
							}

							return h('div', texts)
						}

					},
					{
						title: '所属分类',
						key: 'productCategoryName',
						align: 'center'
					},
					{
						title: '操作',
						align: 'center',
						width: 200,
						fixed: 'right',
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
                                              this.setcolor = true
												this.objIndex = params.index
												
												this.setcolorObj.name = this.productcolor[params.index].name
												this.setcolorObj.type = this.productcolor[params.index].type.toString()
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
											this.objIndex = params.index
											this.colordel=true
										}
									}
								}, '删除'),

							]);
						}
					}
				],
				addcolor:false,
				addcolorObj:{
					name: "",
					notes: "",
					type:""
				},
				setcolor:false,
				setcolorObj:{
					name: "",
					notes: "",
					type:""
				},
				colordel:false,
				
				productspeac: [], //产品规格
				speacHead: [

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
						title: '产品类型',
						key: 'notes',
						render: (h, params) => {

							var type = params.row.type

							if(type == 0) {
								var texts = "门板"
							} else if(type == 1) {
								var texts = "衣板门"
							} else if(type == 2) {
								var texts = "拉手"
							}else if(type == 3) {
								var texts = "办公用品/消耗品"
							}else if(type == 4) {
								var texts = "其他"
							}

							return h('div', texts)
						}

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
										disabled: !this.operation.edit

									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.setspeac = true
											this.objIndex = params.index
											this.setspeacObj.name = this.productspeac[params.index].name
											this.setspeacObj.notes = this.productspeac[params.index].notes
											this.setspeacObj.type = this.productspeac[params.index].type.toString()
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

											this.speacdel = true
											this.objIndex = params.index

										}
									}
								}, '删除'),

							]);
						}
					}
				],
				addspeac:false,
				addspeacObj:{
					name: "",
					notes: "",
					type:""
				},
				setspeac: false,
				setspeacObj: {
					name: "",
					notes: "",
					type:""
				},
				speacdel: false,

				productmaterial: [], //产品材质
				materialHead: [{
						title: '产品材质',
						key: 'name',
						align: 'center'
					},
					{
						title: '所属分类',
						key: 'productCategoryName',
						align: 'center'
					},
					{
						title: '产品类型',
						key: 'notes',
						render: (h, params) => {

							var type = params.row.type

							if(type == 0) {
								var texts = "门板"
							} else if(type == 1) {
								var texts = "衣板门"
							} else if(type == 2) {
								var texts = "拉手"
							}else if(type == 3) {
								var texts = "办公用品/消耗品"
							}else if(type == 4) {
								var texts = "其他"
							}

							return h('div', texts)
						}

					},
					{
						title: '备注',
						key: 'notes',
						align: 'center'
					},
					{
						title: '操作',
						align: 'center',
						width: 200,
						fixed: 'right',
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
											this.setmaterial = true
											this.objIndex = params.index
											this.setmaterialObj.name = this.productmaterial[params.index].name
											this.setmaterialObj.notes = this.productmaterial[params.index].notes
											this.setmaterialObj.type = this.productmaterial[params.index].type.toString()
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
											this.materialdel = true
											this.objIndex = params.index
											
										}
									}
								}, '删除'),
								
								
								
							]);
						}
					}
				],
				addmaterial:false,
				addmaterialObj:{
					name: "",
					notes: "",
					type:""
				},
				setmaterial: false,
				setmaterialObj: {
					name: "",
					type:"",
					notes: ""
				},
				materialdel: false,
				operation: {}

			};
		},

		methods: {

			//分类下信息
			setsupplierOpen: function(index) {
				this.SetIndex = index
				var id = this.tableData[index].id

				//产品材质
				this.getMaterial(id)
				//产品规格
				this.getSpec(id)
				//产品颜色
				this.getColor(id)

			},

			//分类下材质

			getMaterial: function(id) {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/product/category/' + id + '/materials',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.productmaterial = data

					that.loading = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

					that.loading = false

				})
			},
			//分类下规格

			getSpec: function(id) {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/product/category/' + id + '/specs',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.productspeac = data

					that.loading = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

					that.loading = false

				})
			},
			//分类下颜色
			getColor: function(id) {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/product/category/' + id + '/colors',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.productcolor = data

					/*that.$Message.success("请求成功")*/

					that.loading = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

					that.loading = false

				})
			},
			
			addspeacModel:function  () {
				
				this.addspeac=true;
				this.addspeacObj={
					"name": "",
					"notes": "",
					"type":""
				}
			},
			
			//添加产品规格
			
			pushspeac:function  () {
				
				var addspeacObj = this.addspeacObj
				var name = addspeacObj.name
				var notes = addspeacObj.notes
				var type=addspeacObj.type
				var cid = this.tableData[this.SetIndex].id

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('规格名称不能为空！');
					return false;
				} else if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('规格描述不能为空！');
					return false;
				} else if(type == "" || type == null) {

					this.$Message.error('规格类型不能为空！！');
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
						url: '/api/f/product/category/' + cid + '/specs',

						data: {
							"name": name,
							"notes": notes,
							"type":type,
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
							{
								"name": "type",
								"note": "产品类型"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data
						that.productspeac.unshift(data)
						that.$Message.success("添加成功")

						that.addspeac = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.addspeac = false
					})

				}
				
			},

			//修改产品规格

			editspeac: function() {

				var index = this.objIndex

				var id = this.productspeac[index].id
				var cid = this.productspeac[index].productCategoryId
				var setspeacObj = this.setspeacObj
				var name = setspeacObj.name
				var notes = setspeacObj.notes
				var type = setspeacObj.type

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('产品规格名称不能为空！');
					return false;
				} else if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('产品规格描述不能为空！');
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
							"type":type
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
							{
								"name": "type",
								"note": "产品类型"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						that.productspeac[index].name = data.name
						that.productspeac[index].notes = data.notes
						that.productspeac[index].type = data.type
						
						console.log(data)
						that.$Message.success("修改成功")
						that.setspeac = false
					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.setspeac = false

					})

				}
			},

			//删除产品规格
			speacdelIs: function() {

				var index = this.objIndex

				var id = this.productspeac[index].id
				var cid = this.productspeac[index].productCategoryId

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
						return false
					}

					that.productspeac.splice(index, 1)
					that.$Message.success("删除成功")
					that.speacdel = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.speacdel = false

				})

			},
			
			addcolorModel:function  () {
				this.addcolor=true
				this.addcolorObj={
					name: "",
					notes: "",
					type:""
				}
			},
			
			pushcolor:function  () {
				var addcolorObj = this.addcolorObj
				var name = addcolorObj.name
				var notes = addcolorObj.notes
				var type=addcolorObj.type
				var cid = this.tableData[this.SetIndex].id

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('颜色名称不能为空！');
					return false;
				} else if(type == "" || type == null) {

					this.$Message.error('颜色类型不能为空！！');
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
						url: '/api/f/product/category/' + cid + '/colors',

						data: {
							"name": name,
							"notes": notes,
							"type":type,
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
							{
								"name": "type",
								"note": "产品类型"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data
						that.productcolor.push(data)
						that.$Message.success("添加成功")
                        
                        console.log(data)
                        
						that.addcolor = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.addcolor = false
					})

				}
				
			},
			
			//修改颜色
			
			editcolor:function  () {
				
				var index = this.objIndex

				var id = this.productcolor[index].id
				var cid = this.productcolor[index].productCategoryId
				var setcolorObj = this.setcolorObj
				var name = setcolorObj.name
				var type = setcolorObj.type

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('产品规格名称不能为空！');
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
						url: '/api/f/product/category/' + cid + '/colors/' + id,

						data: {

							"name": name,
							"type": type,
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
							{
								"name": "type",
								"note": "产品类型"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						that.productcolor[index].name = data.name
						that.productcolor[index].type = data.type
						that.$Message.success("修改成功")
						that.setcolor = false
					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.setcolor = false

					})

				}
			},
			
			//删除 颜色
			
			colordelIs:function(){
				var index = this.objIndex

				var id = this.productcolor[index].id
				var cid = this.productcolor[index].productCategoryId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/product/category/' + cid + '/colors/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.productcolor.splice(index, 1)
					that.$Message.success("删除成功")
					that.colordel = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.colordel = false

				})
			},
			//材质
			addmaterialModel:function  () {
				this.addmaterial=true
				this.addmaterialObj={
					name: "",
					notes: "",
					type:""
				}
			},
			//新增材质
			pushmaterial:function  () {
				var addmaterialObj = this.addmaterialObj
				var name = addmaterialObj.name
				var notes = addmaterialObj.notes
				var type=addmaterialObj.type
				var cid = this.tableData[this.SetIndex].id

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('材质名称不能为空！');
					return false;
				}else if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('材质描述不能为空！');
					return false;
				} else if(type == "" || type == null) {

					this.$Message.error('材质类型不能为空！！');
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
						url: '/api/f/product/category/' + cid + '/materials',

						data: {
							"name": name,
							"notes": notes,
							"type":type,
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
							{
								"name": "type",
								"note": "产品类型"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data
						that.productmaterial.push(data)
						that.$Message.success("添加成功")                                                                  
						that.addmaterial = false
					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.addmaterial = false
					})

				}
			},
			
			//修改材质
			
			editmaterial:function  () {
				var index = this.objIndex

				var id = this.productmaterial[index].id
				var cid = this.productmaterial[index].productCategoryId
				var setmaterialObj = this.setmaterialObj
				var name = setmaterialObj.name
				var notes = setmaterialObj.notes
				var type = setmaterialObj.type

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('产品规格名称不能为空！');
					return false;
				} else if(notes == "" || notes == null || notes.trim().length == 0) {
					this.$Message.error('产品规格描述不能为空！');
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
						url: '/api/f/product/category/' + cid + '/materials/' + id,

						data: {

							"name": name,
							"notes": notes,
							"type":type,
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
							{
								"name": "type",
								"note": "产品类型"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						that.productmaterial[index].name = data.name
						that.productmaterial[index].notes = data.notes
						that.productmaterial[index].type = data.type
						that.$Message.success("修改成功")
						that.setmaterial = false
					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.setmaterial = false

					})

				}
			},
			
			materialdelIs:function  () {
				var index = this.objIndex

				var id = this.productmaterial[index].id
				var cid = this.productmaterial[index].productCategoryId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/product/category/' + cid + '/materials/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.productmaterial.splice(index, 1)
					that.$Message.success("删除成功")
					that.materialdel = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.materialdel = false

				})
			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '产品信息列表'
				});
			},

			getDatas: function() {

			},

		},

		mounted: function() {

			axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.getDatas()

			var that = this

			//请求产品全部分类信息
			this.axios({
				method: 'get',
				url: '/api/f/product/categorys',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data
				that.productCategory = data
				that.tableData = data

				if(data.length > 0) {
					that.setsupplierOpen(0)
				}

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
	
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
	
	.supplierprod {
		width: 100%;
		position: relative;
		height: 562px;
	}
	
	.supplierprod .supplierprod_lay {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 260px;
		height: 543px;
		overflow-x: auto;
		background: white;
	}
	
	.supplierprod .supplierprod_lay h3 {
		padding: 10px;
	}
	
	.supplierprod .supplierprod_lay ul {
		padding-top: 0px;
	}
	
	.supplierprod .supplierprod_lay li {
		padding: 10px;
		font-size: 14px;
		cursor: pointer;
	}
	
	.supplierprod .supplierprod_lay li.ac {
		color: cornflowerblue;
	}
	
	.supplierprod .supplierprod_center {
		padding-left: 260px;
	}
	
	.center {
		display: block;
		width: 100%;
	}
	
	.center ul {
		display: block;
		width: 100%;
	}
	
	.center ul li {
		float: left;
		width: 50%;
		margin-bottom: 20px;
	}
</style>

<style src='./../../assets/css/department.css'></style>