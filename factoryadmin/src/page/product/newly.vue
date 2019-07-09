<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a  @click="goback">产品管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建产品</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
					<Form  :label-width="120">

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

					<div class="iv_form_but center">
						<button class="details_opBut auto linkBlock smallsize" @click="formeReset">重置</button>
						<button class="details_opBut linkBlock smallsize" @click="sure">确认</button>
						<!--<Button type="primary">确认</Button>-->

					</div>

				</div>

			</div>

			<div>

			</div>
		</div>


	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

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
				
				productColor:[],
				productMaterial:[],
				productCategory:[],
				productSpec:[]


				
			};
		},

		methods: {
			
			goback:function  () {
					this.$emit('openWindow', ('product'), ('产品管理'), ('12'), ('product'), ('product'))
               
			},
			
			
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
			
			//选择分类后请求分类下产品材质和颜色
			SelectCategory: function(val) {
				
				if(!val){
					return false;
				}

				this.productMaterial = []
				this.productColor = []
				this.productSpec = []
				this.objGetData.productMaterialId = ""
				this.objGetData.productColor = ""
				this.objGetData.productSpec = ""
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
			
			
			
			sure: function() {

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
						
						that.$Message.success("添加成功")
						
						that.formeReset()

						
					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						
					})

				}

			},

            getProductClass:function  () {
            	
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
            	
            },



			formeReset() {
				this.objGetData= { //添加信息
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
				
			}

			

		},

		mounted: function() {

			this.getProductClass()

                

			

		},

	}
</script>

<style scoped="scoped">
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
	
</style>