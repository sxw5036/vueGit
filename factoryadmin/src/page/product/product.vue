<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>产品列表</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="table_nav_iv marTN">
			<div class="operation_box">
				<div class="active">
					<!---->
					<div class="ui_operateLeft" style="line-height: 32px;">

						<ul class="tab">
							<li class="tab_item">
								<div class="lable">产品名称</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.name" placeholder="请输入产品名称..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">产品分类</div>
								<div class="form_nav">
									<Select style="width: 200px;" id="p_lea" v-model="searchObj.categoryId">
										<Option v-for="item in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
									</Select>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">产品型号</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.model" placeholder="请输入产品型号..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">选择状态</div>
								<div class="form_nav">
									<Select style="width: 200px;" class="p_lea" v-model="searchObj.status" id="p_lea">
										<Option value="0" key="0">正常</Option>
										<Option value="1" key="1">淘汰</Option>
										<Option value="2" key="2">禁用</Option>
									</Select>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary" @click="clicksearch" icon="ios-search">搜索</Button>
									<Button type="primary" @click="newData" icon="ios-refresh">重置</Button>
								</div>
							</li>
						</ul>

						<!--<Button shape="circle" icon="ios-search"></Button>-->

					</div>

					<div class="ui_operateRight">
						
						<ul class="tab">
							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<!-- @click="" -->
									<Button type="primary">导入</Button>
									<Button type="primary">导出</Button>
									<Button type="primary" @click="GetModelOpen">新建</Button>
								</div>
							</li>
						</ul>

						<!---->

					</div>
				</div>
			</div>

		

		<!-- 部门信息列表 -->
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
		<!--添加部门模态框 -s -->

		<Drawer title="添加产品" v-model="GetModel" width="500">
			<div style="position: relative; height: 100%; overflow: auto; padding-bottom: 50px;">
				<Form :model="objGetData" :label-width="80">
					<FormItem label="产品名称">
						<Input style="width: 360px;" v-model="objGetData.name" placeholder="请输入产品名称..."></Input>
					</FormItem>

					<FormItem label="产品型号">
						<Input style="width: 360px;" v-model="objGetData.model" placeholder="请输入产品型号..."></Input>
					</FormItem>

					<FormItem label="产品描述">
						<Input style="width: 360px;" type="textarea" v-model="objGetData.notes" placeholder="请输入产品描述..."></Input>
					</FormItem>

					<FormItem label="产品分类">

						<Select v-model="objGetData.productCategoryId" @on-change="SelectCategory(objGetData.productCategoryId)" style="width: 360px;">
							<Option v-for="item in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>

					</FormItem>

					<FormItem label="产品材质">
						<div class="item_product">
							<input type="text" name="" id="" v-model="objGetData.productMaterialId" list="Mate" @blur="getcategorycolor(objGetData.productMaterialId)" placeholder="请输入产品名称..." />
							<datalist id="Mate">			                
			                <option v-for="item in productMaterial" >{{ item }}</option>		
			           </datalist>
						</div>

					</FormItem>

					<FormItem label="产品颜色">

						<div class="item_product">
							<input type="text" name="" id="" value="" list="Color" v-model="objGetData.productColor" placeholder="请输入产品颜色..." @blur="getcategoryspec(objGetData.productColor)" />
							<datalist id="Color">
			                <option v-for="item in productColor">{{item}}</option>			                
			           </datalist>
						</div>
					</FormItem>

					<FormItem label="产品规格">
						<div class="item_product">
							<input type="text" name="" id="" value="" list="Spec" v-model="objGetData.productSpec" placeholder="请输入产品规格..." />
							<datalist id="Spec">
			                <option v-for="item in productSpec" :value="item">{{ item }}</option>
		               
			           </datalist>
						</div>
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

					<FormItem label="产品出厂价">
						<Input style="width: 360px;" v-model="objGetData.factoryPrice" placeholder="请输入产品出厂价..."></Input>
					</FormItem>

					<FormItem label="上下/架">
						<RadioGroup v-model="objGetData.lowerShelf">
							<Radio label="true">下架</Radio>
							<Radio label="false">上架</Radio>

						</RadioGroup>
					</FormItem>

				</Form>
			</div>
			<div class="demo-drawer-footer" style="position: absolute; bottom: 0px; right: 0px; width: 100%;">
				<Button type="primary" @click="GetModelIsok">确认添加</Button>
			</div>

		</Drawer>

		<!--修改部门信息-s-->

		<Drawer v-model="SetModel" title="修改产品信息" width="500">

			<div style="position: relative; height: 100%; overflow: auto;">
				<div style="padding-bottom: 50px;">
					<Form :model="SetGetData" :label-width="80">
						<FormItem label="产品名称">
							<Input v-model="SetGetData.Setname" placeholder="请输入产品名称..."></Input>
						</FormItem>

						<FormItem label="产品型号">
							<Input v-model="SetGetData.model" placeholder="请输入产品型号..."></Input>
						</FormItem>

						<FormItem label="产品描述">
							<Input v-model="SetGetData.Setnotes" type="textarea" placeholder="请输入产品描述..."></Input>
						</FormItem>

						<FormItem label="产品分类">

							<Select v-model="SetGetData.SetproductCategoryId" @on-change="SelectCategory">
								<Option v-for="item in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
							</Select>

						</FormItem>

						<FormItem label="产品材质">
							<div class="item_product">
								<input type="text" name="" id="" v-model="SetGetData.SetproductMaterialId" list="Mate" @blur="getcategorycolors(SetGetData.SetproductMaterialId)" placeholder="请输入产品名称..." />
								<datalist id="Mate">			                
			                <option v-for="item in productMaterial" >{{ item }}</option>		
			           </datalist>
							</div>

						</FormItem>

						<FormItem label="产品颜色">

							<div class="item_product">
								<input type="text" name="" id="" value="" list="Color" v-model="SetGetData.SetproductColor" placeholder="请输入产品颜色..." @blur="getcategoryspecs(SetGetData.SetproductColor)" />
								<datalist id="Color">
			                <option v-for="item in productColor">{{item}}</option>			                
			           </datalist>
							</div>
						</FormItem>

						<FormItem label="产品规格">
							<div class="item_product">
								<input type="text" name="" id="" value="" list="Spec" v-model="SetGetData.SetproductSpec" placeholder="请输入产品规格..." />
								<datalist id="Spec">
			                <option v-for="item in productSpec" :value="item">{{ item }}</option>
		               
			           </datalist>
							</div>
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

						<FormItem label="产品出厂价">
							<Input style="width: 360px;" v-model="SetGetData.factoryPrice" placeholder="请输入产品出厂价..."></Input>
						</FormItem>

						<FormItem label="当前状态">
							<RadioGroup v-model="SetGetData.Setstatus">

								<Radio label="0">正常</Radio>
								<Radio label="1">淘汰</Radio>
								<Radio label="2">禁用</Radio>

							</RadioGroup>
						</FormItem>

						<FormItem label="上下/架">

							<RadioGroup v-model="SetGetData.lowerShelf">
								<Radio label="true">下架</Radio>
								<Radio label="false">上架</Radio>

							</RadioGroup>
						</FormItem>

						<FormItem label="APP封面图">

							<div class="demo-upload-list" v-for="(item,index) in appFpath">
								<template>
									<img :src="item.path">
									<div class="demo-upload-list-cover">
										<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
										<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,0,index)"></Icon>
									</div>
								</template>

							</div>

							<Upload ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" type="drag" :action="appFpathurl" name="multipartFileList" style="display: inline-block;width:58px;">
								<div style="width: 58px;height:58px;line-height: 58px;">
									<Icon type="ios-camera" size="20"></Icon>
								</div>
							</Upload>

						</FormItem>

						<FormItem label="APP主图">
							<div class="demo-upload-list" v-for="(item,index) in appZpath">
								<template>
									<img :src="item.path">
									<div class="demo-upload-list-cover">
										<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
										<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,1,index)"></Icon>
									</div>
								</template>

							</div>

							<Upload ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="appZpathurl" name="multipartFileList" style="display: inline-block;width:58px;">
								<div style="width: 58px;height:58px;line-height: 58px;">
									<Icon type="ios-camera" size="20"></Icon>
								</div>
							</Upload>

						</FormItem>

						<FormItem label="PC封面图">

							<div class="demo-upload-list" v-for="(item,index) in pcFpath">
								<template>
									<img :src="item.path">
									<div class="demo-upload-list-cover">
										<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
										<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,2,index)"></Icon>
									</div>
								</template>

							</div>

							<Upload ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" type="drag" :action="pcFpathurl" name="multipartFileList" style="display: inline-block;width:58px;">
								<div style="width: 58px;height:58px;line-height: 58px;">
									<Icon type="ios-camera" size="20"></Icon>
								</div>
							</Upload>

						</FormItem>

						<FormItem label="PC主图">

							<div class="demo-upload-list" v-for="(item,index) in pcZpath">
								<template>
									<img :src="item.path">
									<div class="demo-upload-list-cover">
										<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
										<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,3,index)"></Icon>
									</div>
								</template>

							</div>

							<Upload ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="pcZpathurl" name="multipartFileList" style="display: inline-block;width:58px;">
								<div style="width: 58px;height:58px;line-height: 58px;">
									<Icon type="ios-camera" size="20"></Icon>
								</div>
							</Upload>

						</FormItem>
					</Form>
				</div>
			</div>

			<div class="demo-drawer-footer" style="position: absolute; bottom: 0px; right: 0px; width: 100%;">
				<Button type="primary" @click="SetModelIsok">确认修改</Button>
			</div>

		</Drawer>

		<Modal title="设计图展示" v-model="visible">
			<div class="show_img">
				<img :src="imgName" style="width: 100%">
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
						title: '产品名称',
						key: 'name',
						fixed: 'left',
						
					},

					{
						title: '产品出厂价',
						key: 'factoryPrice',
						
					},

					//

					/*{
						title: 'APP封面图',
						key: 'appCoverMap',
						width: 200,
						align: 'center',
						render: (h, params) => {
							var path = params.row.appCoverMap

							return h('div', [
								h('Avatar', {
									props: {
										src: path,

									},
									style: {
										margin: '0px auto'
									},

								}),

							]);
						}
					},

					{
						title: 'APP主图',
						key: 'appMasterGraph',
						width: 200,
						align: 'center',
						render: (h, params) => {
							var path = params.row.appMasterGraph

							return h('div', [
								h('Avatar', {
									props: {
										src: path,

									},
									style: {
										margin: '0px auto'
									},

								}),

							]);
						}
					},

					{
						title: 'PC封面图',
						key: 'pcCoverMap',
						width: 200,
						align: 'center',
						render: (h, params) => {
							var path = params.row.appMasterGraph

							return h('div', [
								h('Avatar', {
									props: {
										src: path,

									},
									style: {
										margin: '0px auto'
									},

								}),

							]);
						}
					},

					{
						title: 'PC主图',
						key: 'appMasterGraph',
						width: 200,
						align: 'center',
						render: (h, params) => {
							var path = params.row.appMasterGraph

							return h('div', [
								h('Avatar', {
									props: {
										src: path,

									},
									style: {
										margin: '0px auto'
									},

								}),

							]);
						}
					},*/

					{
						title: '产品描述',
						key: 'notes',
						
						render: (h, params) => {
							return h('div', [
								h('span', {
									style: {
										display: 'inline-block',
										width: '100%',
										overflow: 'hidden',
										textOverflow: 'ellipsis',
										whiteSpace: 'nowrap'
									},
									domProps: {
										title: params.row.notes
									}
								}, params.row.notes)
							]);

						}

					},

					{
						title: '产品上/下架',
						key: 'lowerShelf',
						
						render: (h, params) => {
							var lowerShelf = params.row.lowerShelf

							if(lowerShelf == true) {

								var texts = '下架'
							} else if(lowerShelf == false) {

								var texts = '上架'
							}

							return h('div', texts)
						}
					},

					{
						title: '产品型号',
						key: 'model',
						
					},

					/*{
						title: '产品编号',
						key: 'no',
						width: 200,
					},*/

					{
						title: '当前状态',
						key: 'statusName',

						

					},

					{
						title: '创建人',
						key: 'creatorName',
					
					},

					{
						title: '创建日期',
						key: 'created',
					
					},

//					{
//						title: '单位',
//						key: 'unitName',
//
//						width: 100,
//
//					},
//
//					{
//						title: '产品分类',
//						key: 'categoryName',
//						width: 150,
//					},
//
//					{
//						title: '产品材质',
//						key: 'productMaterial',
//						width: 150,
//					},
//
//					{
//						title: '产品颜色',
//						key: 'productColor',
//						width: 150,
//					},
//
//					{
//						title: '产品规格',
//						key: 'productSpec',
//						width: 150,
//					},
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
											
											this.$emit('openWindow', ('productDetails'), ('新建产品'), ('12-3'), ('productDetails'), ('productDetails'),(this.tableData[params.index].id))

//											this.$router.push({
//												name: '',
//												query: {
//													id: 
//												}
//											})
										}
									}
								}, '详情'),
							])

						}
					}

//					{
//						title: '操作',
//						key: 'action',
//						width: 150,
//						fixed: 'right',
//						align: 'center',
//						render: (h, params) => {
//							return h('div', [
//								h('Button', {
//									props: {
//										type: 'primary',
//										size: 'small',
//										disabled: !this.operation.edit
//									},
//									style: {
//										marginRight: '5px'
//									},
//									on: {
//										click: () => {
//											this.SetModel = true
//											this.SetModelOpen(params.index)
//
//										}
//									}
//								}, '编辑'),
//
//							]);
//						}
//					}
				],

				tableData: [], //表格数据
				GetModel: false, //添加模态框属性
				SetModel: false, //修改模态框属性
				objGetData: { //添加信息
					"name": "",
					"notes": "",
					"productCategoryId": "",
					"productMaterialId": "",
					"productColor": "",
					"productSpec": "",
					"no": "",
					"unit": "",
					"lowerShelf": "true",
					"model": "",
					"factoryPrice": "0"

				},

				SetGetData: { //修改信息
					"Setname": "",
					"Setnotes": "",
					"SetproductCategoryId": "",
					"SetproductMaterialId": "",
					"SetproductColor": "",
					"SetproductSpec": "",
					"Setno": "",
					"Setunit": "",
					"Setstatus": "",
					"lowerShelf": "",
					"model": "",
					"factoryPrice": ""

				},
				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

				productCategory: [], //产品分类
				productMaterial: [], //产品材质
				productSpec: [], //产品规格
				productColor: [], //产品颜色
				isSearch: false,
				searchObj: {
					"name": "",
					"categoryId": "",
					"model": "",
					"status": "0",

				},
				isOpen: 0,
				pushmaterialObj: {
					name: "",
					notes: "",
					type: ""
				},
				operation: {},
				imgType: "0",
				appFpath: [],
				appZpath: [],
				pcFpath: [],
				pcZpath: [],
				uparry: {
					multipartFileList: []
				},
				uploadpathdata: "",
				appFpathurl: "",
				appZpathurl: "",
				pcFpathurl: "",
				pcZpathurl: "",
				defaultList: [],
				prId: "",
				cid: "",
				imgName: "",
				visible: false,

			};
		},

		methods: {

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(fileid, status, index) {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var pid = this.tableData[this.SetIndex].id

				var that = this
				//请求产品
				this.axios({
					method: 'delete',
					url: '/api/f/products/' + pid + '/files/' + fileid,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					if(status == 0) {
						that.appFpath.splice(index, 1)
					} else if(status == 1) {
						that.appZpath.splice(index, 1)
					} else if(status == 2) {
						that.pcFpath.splice(index, 1)
					} else if(status == 3) {
						that.pcZpath.splice(index, 1)
					}

					that.$Message.success("删除成功")
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

				/*	this.delfile(fileid, status, index)*/

			},
			handleSuccess(res, file) {

				var Res = res.data
				var index = this.SetIndex

				for(var i = 0; i < Res.length; i++) {
					var type = Res[i].type

					if(type == 0) {
						this.appFpath = Res

					} else if(type == 1) {
						for(var n = 0; n < Res.length; n++) {
							this.appZpath.push(Res[n])
						}
					} else if(type == 2) {
						this.pcFpath = Res

					} else if(type == 3) {

						for(var n = 0; n < Res.length; n++) {
							this.pcZpath.push(Res[n])
						}
					}

				}

				/*	var dsDataCache = this.dsDataCache
					var obj = {
						path: Res[0].path

					}*/

				/*	dsDataCache[this.dsData[this.designersIndex].id].designFile.push(obj)
					this.dsDataCache = dsDataCache*/

				/*this.uploadList = this.$refs.upload.fileList*/
				file.path = Res.appCoverMap
				file.id = Res.id

			},
			handleFormatError(file) {
				this.$Notice.warning({
					title: '文件格式不正确',
					desc: '' + file.name + '文件格式不正确，请选择jpg,jpeg或png'
				});
			},
			handleMaxSize(file) {
				this.$Notice.warning({
					title: '超过文件大小限制',
					desc: '' + file.name + '文件太大，不超过5M'
				});
			},
			handleBeforeUpload(file) {

				this.file = file
				this.uparry.multipartFileList.push(this.file)

			},

			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch == true) {
					this.searchData()
				} else {
					this.getDatas()
				}

			},

			queryChange: function(data) {
				console.log('123')
			},

			GetModelOpen: function() {
				
					this.$emit('openWindow', ('productNewly'), ('新建产品'), ('12-1'), ('productNewly'), ('productNewly'))
				
				return false

				this.productMaterial = []
				this.productColor = []
				this.productSpec = []
				this.GetModel = true
				this.isOpen = 0
				this.objGetData = {
					"name": "",
					"notes": "",
					"productCategoryId": "",
					"productMaterialId": "",
					"productColor": "",
					"productSpec": "",
					"no": "",
					"unit": "",
					"lowerShelf": "true",
					"model": "",
					"factoryPrice": "0"
				}
			},

			//选择分类后请求分类下产品材质和颜色
			SelectCategory: function(val) {

				this.productMaterial = []
				this.productColor = []
				this.productSpec = []
				this.objGetData.productMaterialId = ""
				this.objGetData.productColor = ""
				this.objGetData.productSpec = ""
				this.SetGetData.SetproductMaterialId = ""
				this.SetGetData.SetproductColor = ""
				this.SetGetData.SetproductSpec = ""
				this.getcategorycategory(val)
				/*this.getcategorycolor(val)
				this.getcategoryspec(val)*/

			},

			getcategorycategory: function(val) {

				var that = this
				//请求材质信息
				this.axios({
					method: 'get',
					url: '/api/f/products/product_material?productCategory=' + val,

				}).then(function(res) {
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.productMaterial = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})
			},

			getcategorycolor: function(name) {

				var that = this

				var cid = this.objGetData.productCategoryId

				//请求颜色
				this.axios({
					method: 'get',
					url: '/api/f/products/product_color?productCategory=' + cid + '&productMaterial=' + name,

				}).then(function(res) {
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.productColor = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},
			//请求规格信息
			getcategoryspec: function(name) {
				var that = this
				var cid = this.objGetData.productCategoryId
				var Mname = this.objGetData.productMaterialId
				this.axios({
					method: 'get',
					url: '/api/f/products/product_spec?productCategory=' + cid + '&productMaterial=' + Mname + '&productColor=' + name,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data

					that.productSpec = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			/**/

			getcategorycategorys: function(val) {

				var that = this
				//请求材质信息
				this.axios({
					method: 'get',
					url: '/api/f/products/product_material?productCategory=' + val,

				}).then(function(res) {
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.productMaterial = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})
			},

			getcategorycolors: function() {

				var that = this

				var cid = this.SetGetData.SetproductCategoryId
				var Mname = this.SetGetData.SetproductMaterialId

				//请求颜色
				this.axios({
					method: 'get',
					url: '/api/f/products/product_color?productCategory=' + cid + '&productMaterial=' + Mname,

				}).then(function(res) {
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.productColor = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},
			//请求规格信息
			getcategoryspecs: function() {
				var that = this
				var cid = this.SetGetData.SetproductCategoryId
				var Mname = this.SetGetData.SetproductMaterialId
				var Cname = this.SetGetData.SetproductColor
				this.axios({
					method: 'get',
					url: '/api/f/products/product_spec?productCategory=' + cid + '&productMaterial=' + Mname + '&productColor=' + Cname,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data

					that.productSpec = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//新增产品材质
			pushMaterial: function() {

				var cid = this.objGetData.productCategoryId
				var material = this.pushmaterialObj

				var name = material.name
				var notes = material.notes
				var type = material.type

				if(cid == "" || cid == null) {
					this.$Message.error('请先选择产品分类！');
					return false;
				} else if(name == "" || name == null || name.trim().length == 0) {
					this.$Message.error('新增产品规格不能为空！');
					return false;
				}

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
						"name": material,
						"notes": notes,
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
					that.productmaterial.push(data)
					that.$Message.success("添加成功")
					that.addmaterial = false
				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.addmaterial = false
				})

				this.isOpen = 0
				this.newproduct.material = ""
				console.log(material)

			},

			//添加信息api	
			GetModelIsok: function() {

				var objGetData = this.objGetData
				var name = objGetData.name
				var notes = objGetData.notes
				var productCategory = objGetData.productCategoryId
				var productMaterial = objGetData.productMaterialId
				var productColor = objGetData.productColor
				var productspec = objGetData.productSpec
				var lowerShelf = objGetData.lowerShelf

				var unit = objGetData.unit
				var model = objGetData.model
				var factoryPrice = objGetData.factoryPrice

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('产品名称不能为空！');
					return false;
				} else if(model == "" || model == null || model.trim().length == 0) {

					this.$Message.error('产品型号不能为空！');
					return false;
				} else if(productCategory == "" || productCategory == null || productCategory.trim().length == 0) {

					this.$Message.error('产品分类不能为空！！');
					return false;
				} else if(unit == "" || unit == null) {

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
						url: '/api/f/products',

						data: {
							"name": name,
							"notes": notes,
							"productCategoryId": productCategory,
							"productMaterial": productMaterial,
							"productColor": productColor,
							"productSpec": productspec,

							"unit": unit,
							"lowerShelf": lowerShelf,
							"model": model,
							"factoryPrice": factoryPrice

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "产品名称"
							},
							{
								"name": "notes",
								"note": "产品描述 "
							},
							{
								"name": "productCategoryId",
								"note": "产品分类 "
							},
							{
								"name": "productSpecId",
								"note": "产品规格 "
							},
							{
								"name": "no",
								"note": "产品标识"
							},
							{
								"name": "unit",
								"note": "产品单位"
							},
							{
								"name": "model",
								"note": "产品型号"
							},
						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data
						var status = data.status

						if(status == 0) {

							data.statusName = '正常'
						} else if(status == 1) {

							data.statusName = '淘汰'
						} else if(status == 2) {

							data.statusName = '禁用'
						}

						var unit = data.unit
						if(unit == 0) {

							data.unitName = '个'
						} else if(unit == 1) {

							data.unitName = '张'
						} else if(unit == 2) {

							data.unitName = '米'
						} else if(unit == 3) {

							data.unitName = '平方米'
						} else if(unit == 4) {

							data.unitName = '包'
						}

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

				this.prId = this.tableData[index].id
				this.appFpathurl = '/api/f/products/' + this.prId + '/files/0'
				this.appZpathurl = '/api/f/products/' + this.prId + '/files/1'
				this.pcFpathurl = '/api/f/products/' + this.prId + '/files/2'
				this.pcZpathurl = '/api/f/products/' + this.prId + '/files/3'
				this.SetIndex = index
				this.productMaterial = []
				this.productColor = []
				this.productSpec = []

				var val = this.tableData[index].productCategoryId

				this.SetGetData.Setname = this.tableData[index].name
				this.SetGetData.Setnotes = this.tableData[index].notes
				this.SetGetData.SetproductCategoryId = val
				this.SetGetData.SetproductMaterialId = this.tableData[index].productMaterial
				this.SetGetData.SetproductColor = this.tableData[index].productColor
				this.SetGetData.SetproductSpec = this.tableData[index].productSpec

				this.SetGetData.Setunit = this.tableData[index].unit.toString()
				this.SetGetData.Setstatus = this.tableData[index].status.toString()
				this.SetGetData.model = this.tableData[index].model
				this.SetGetData.lowerShelf = this.tableData[index].lowerShelf.toString()
				this.SetGetData.factoryPrice = this.tableData[index].factoryPrice.toString()

				/*var objMaterial = {
					id: this.tableData[index].productMaterialId,
					name: this.tableData[index].materialName
				}

				var objColor = {
					id: this.tableData[index].productColor,
					name: this.tableData[index].colorName
				}

				var objSpec = {
					id: this.tableData[index].productSpecId,
					name: this.tableData[index].specName
				}*/

				/*this.productMaterial.push(objMaterial)
				this.productColor.push(objColor)
				this.productSpec.push(objSpec)*/

				//请求分类下 颜色，板材 ，规格信息
				this.getproductmsg(this.prId)
				this.getcategorycategorys(val)
				this.getcategorycolors(this.SetGetData.SetproductMaterialId)
				this.getcategoryspecs(this.SetGetData.SetproductColor)

			},

			getproductmsg: function(prId) {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/products/' + prId + '/info',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.appFpath = data.appCoverMap
					that.appZpath = data.appMasterGraph
					that.pcFpath = data.pcCoverMap
					that.pcZpath = data.pcMasterGraph

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

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
				var productSpec = setGetData.SetproductSpec
				var model = setGetData.model
				var unit = setGetData.Setunit
				var status = setGetData.Setstatus
				var factoryPrice = setGetData.factoryPrice
				var lowerShelf = setGetData.lowerShelf

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('产品名称不能为空！');
					return false;
				} else if(model == "" || model == null || model.trim().length == 0) {

					this.$Message.error('产品型号不能为空！');
					return false;
				} else if(productCategory == "" || productCategory == null || productCategory.trim().length == 0) {

					this.$Message.error('产品分类不能为空！！');
					return false;
				} else if(unit == "" || unit == null) {

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
						url: '/api/f/products/' + id,

						data: {

							"name": name,
							"notes": notes,
							"productCategoryId": productCategory,
							"productMaterial": productMaterial,
							"productColor": productColor,
							"productSpec": productSpec,
							"model": model,
							"unit": unit,
							"status": status,
							"factoryPrice": factoryPrice,
							"lowerShelf": lowerShelf

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "产品名称"
							},
							{
								"name": "notes",
								"note": "产品描述 "
							},
							{
								"name": "productCategoryId",
								"note": "产品分类 "
							},
							{
								"name": "productSpecId",
								"note": "产品规格 "
							},
							{
								"name": "no",
								"note": "产品标识"
							},
							{
								"name": "unit",
								"note": "产品单位"
							},
							{
								"name": "model",
								"note": "产品型号"
							},
						]

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						/*if(res.data.code&&res.data.code=="20000") {								
							that.$Message.error(JSON.stringify(res.data.error));
							return false
						}else if(res.data.code&&res.data.code!="200") {						
							that.$Message.error(res.data.error.error);
							return false
						} */

						var data = res.data.data

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
						that.tableData[that.SetIndex].productMaterial = data.productMaterial
						that.tableData[that.SetIndex].productSpec = data.productSpec
						that.tableData[that.SetIndex].resultCode = data.resultCode
						that.tableData[that.SetIndex].unit = data.unit
						that.tableData[that.SetIndex].status = data.status
						that.tableData[that.SetIndex].specName = data.specName
						that.tableData[that.SetIndex].model = data.model
						that.tableData[that.SetIndex].factoryPrice = data.factoryPrice
						that.tableData[that.SetIndex].lowerShelf = data.lowerShelf

						var status = data.status

						if(status == 0) {

							that.tableData[that.SetIndex].statusName = '正常'
						} else if(status == 1) {

							that.tableData[that.SetIndex].statusName = '淘汰'
						} else if(status == 2) {

							that.tableData[that.SetIndex].statusName = '禁用'
						}

						var unit = data.unit
						if(unit == 0) {

							that.tableData[that.SetIndex].unitName = '个'
						} else if(unit == 1) {

							that.tableData[that.SetIndex].unitName = '张'
						} else if(unit == 2) {

							that.tableData[that.SetIndex].unitName = '米'
						} else if(unit == 3) {

							that.tableData[that.SetIndex].unitName = '平方米'
						} else if(unit == 4) {

							that.tableData[that.SetIndex].unitName = '包'
						}

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

			//检索信息

			clicksearch: function() {
				var searchobj = this.searchObj

				var name = searchobj.name
				var categoryid = searchobj.categoryId
				var model = searchobj.model
				var status = searchobj.status

				if(name.trim().length == 0 && categoryid == "" && model.trim().length == 0 && status == null) {
					this.newData()

					return false;
				} else {
					this.pageIndex = 1
					this.searchData()
				}

			},

			//调用检索api接口
			searchData: function() {

				var searchobj = this.searchObj

				var name = searchobj.name
				var categoryid = searchobj.categoryId
				var model = searchobj.model
				var status = searchobj.status

				var pathurl = ""

				if(name != "" && name != null && name.length != 0) {
					pathurl += 'name=' + name + "&"
				}

				if(categoryid != "" && categoryid != null && categoryid.length != 0) {
					pathurl += 'categoryId=' + categoryid + "&"
				}
				if(model != "" && model != null && model.length != 0) {
					pathurl += 'model=' + model + "&"
				}

				if(status != "" && status != null && status.length != 0) {
					pathurl += 'status=' + status + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.loading = true

				var that = this
				//请求产品
				this.axios({
					method: 'get',
					url: '/api/f/products?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					for(var i = 0; i < data.length; i++) {
						var status = data[i].status

						if(status == 0) {

							data[i].statusName = '正常'
						} else if(status == 1) {

							data[i].statusName = '淘汰'
						} else if(status == 2) {

							data[i].statusName = '禁用'
						}

						var unit = data[i].unit
						if(unit == 0) {

							data[i].unitName = '个'
						} else if(unit == 1) {

							data[i].unitName = '张'
						} else if(unit == 2) {

							data[i].unitName = '米'
						} else if(unit == 3) {

							data[i].unitName = '平方米'
						} else if(unit == 4) {

							data[i].unitName = '包'
						}

					}

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
						"name": "",
						"categoryId": "",
						"model": "",
						"status": "0",

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
				//请求产品
				this.axios({
					method: 'get',
					url: '/api/f/products?status=0&pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					for(var i = 0; i < data.length; i++) {
						var status = data[i].status

						if(status == 0) {

							data[i].statusName = '正常'
						} else if(status == 1) {

							data[i].statusName = '淘汰'
						} else if(status == 2) {

							data[i].statusName = '禁用'
						}

						var unit = data[i].unit
						if(unit == 0) {

							data[i].unitName = '个'
						} else if(unit == 1) {

							data[i].unitName = '张'
						} else if(unit == 2) {

							data[i].unitName = '米'
						} else if(unit == 3) {

							data[i].unitName = '平方米'
						} else if(unit == 4) {

							data[i].unitName = '包'
						}

					}

					that.tableData = data
					that.pageIndextotal = dataAll.pagination.total
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

			this.getDatas()

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
	
	.push {
		cursor: pointer;
	}
	
	.pushInput {
		width: 360px;
	}
	
	.pushInput .pIitem {
		margin-top: 10px;
	}
	
	.item_product input {
		display: block;
		padding-left: 5px;
		width: 353px;
		height: 30px;
		line-height: 30px;
		box-sizing: border-box;
		border: solid 1px #c5c8ce;
		border-radius: 3px;
		background: white;
	}
	
	.item_product input::-webkit-input-placeholder {
		color: #c5c8ce;
	}
	
	.item_product datalist {
		border: solid 1px #c5c8ce;
	}
	
	.page_img {
		display: block;
		width: 100px;
		padding: 10px;
		border: solid 1px #EEEEEE;
		margin-bottom: 10px;
	}
	
	.page_img img {
		display: block;
		width: 100%;
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
	
	.show_img img {
		display: block;
		width: 100%;
	}
</style>

<style src='./../../assets/css/department.css'></style>