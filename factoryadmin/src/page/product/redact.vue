<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a  @click="goback">产品管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>编辑产品</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
					<Form  :label-width="120">

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

					<div class="iv_form_but center">
						<button class="details_opBut auto linkBlock smallsize" @click="formeReset">重置</button>
						<button class="details_opBut linkBlock smallsize" @click="">确认</button>
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

				SetGetData: { //添加信息
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
				productSpec:[],
				
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

			var that = this

			that.axios({
				method: 'get',

				url: '/api/f/cities?levelType=1'

			}).then(function(res) {

				that.provinceData = res.data.data

			}).catch(function(err) {
				console.log(err)

			})

			this.axios({
				method: 'get',
				url: '/api/f/dealers/companies?status=1&pageNum=1&pageSize=99999',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data
				that.companyData = data.companyList

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

			if(this.$route.query.dealerId) {
				this.dealerDisabled = true
				var dealerId = this.$route.query.dealerId
				this.objmsg.companyId = dealerId

				this.getDealer(dealerId)
			}

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