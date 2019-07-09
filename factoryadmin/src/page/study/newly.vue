<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">内容管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建内容</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
					<Form :label-width="120">
						<FormItem label="标题名称" id="float_left" style="width:80%">
							<Input v-model="addarticlesname" placeholder="请输入活动名称..."></Input>
						</FormItem>
						<FormItem label="内容类型" id="float_left" style="width:80%">
							<div id="congtentstypes" @click="modaltreeOpen">
								{{changeText}}
							</div>
						</FormItem>

						<FormItem label="是否置顶" id="float_left" style="width:80%">
							<Select v-model="addarticlestop">
								<Option v-for="item in articlestop" :value="item.value" :key="item.value">{{ item.label }}</Option>
							</Select>
						</FormItem>

						<FormItem label="摘要" >
							<Input type="textarea" :rows="4" placeholder="请输入活动摘要"></Input>
						</FormItem>

						<FormItem label="上传封面">
							<div class="pl">

								<div class="demo-upload-list" v-for="(item,index) in uploadList">

									<template>
										<img :src="item.relPath">
										<div class="demo-upload-list-cover">
											<Icon type="ios-eye-outline" @click.native="handleView(item.relPath)"></Icon>

										</div>
									</template>

								</div>
								<Upload ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" type="drag" :action="uploadpathdata" name="multipartFile" style="display: inline-block;width:58px;">
									<div style="width: 58px;height:58px;line-height: 58px;">
										<Icon type="ios-camera" size="20"></Icon>
									</div>
								</Upload>
							</div>
						</FormItem>
						
							<FormItem label="内容" >
							 <editor class="editor" :value="recontent"  :setmsg="editorsetmsg"  @change="changecenters"></editor>
						</FormItem>

						
						
						

						<div>

							<Modal title="图片详情" v-model="visible" style="text-align: center;">
								<img :src="imgName" style="width: 80%;">
								<div slot="footer">
									<Button type="error" size="large" @click="visible=false">关闭</Button>
								</div>
							</Modal>
						</div>

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

		<Modal v-model="modaltree" title="请选择您新建的内容的类型" width="40%">
			<zTree @my-event="getMyevent"></zTree>

			<div slot="footer">
				<Button type="primary" size="small" @click="MyeventOk">确定</Button>
				<Button type="error" size="small" @click="modaltree = false">取消</Button>
			</div>
		</Modal>

	</div>
</template>

<script>
	import axios from 'axios'
	import editor from '@/components/tinymce'
	import zTree from '@/components/zTree'

	export default {
		data() {
			return {

				//tree
				nodesid: "",

				changeText: "",
				nodesname: "",
				nodescode: "",

				modaltree: false,
				codelist: [],
				codelistson: [],
				shows: false,

				//switch
				switch1: false,
				content: '',
				recontent: '',
				editorsetmsg: {
					height: 200,
					images_upload_url: '/api/f/contents/uploadContentImages',
					status: "change"
				},

				activityId_save: '',
				cover_save: '',
				Paramsid: '',
				content_save: '',
				cover_id: '',

				//添加项目
				msg: "项目",
				itemname: '',
				itemdes: '',
				infoArr: [],
				reinfoArr: [],
				articlestop: [{
						value: 0,
						label: '不置顶'
					},
					{
						value: 1,
						label: '置顶'
					}
				],

				articlesObj: [{
						value: "0",
						label: '学习'
					},
					{
						value: "1",
						label: '帮助'
					},
					{
						value: "2",
						label: '新闻'
					}
				],

				articlesStatus: [{
						value: "0",
						label: '草稿'
					},
					{
						value: "1",
						label: '发布'
					},
					{
						value: "2",
						label: '取消发布'
					}
				],

				file: "",
				category: '0',
				uploadpathdata: '',

				uploadpathdata: '/api/f/contents/uploadCover',
				reuploadpathdata: '',
				defaultList: [],
				filecover: [],
				imgName: '',
				reimgName: '',
				visible: false,
				uploadList: [],
				uparry: {
					multipartFileList: []
				},
				reuploadList: [],
				redefaultList: [],
				revisible: false,

				fileuploadList: [],

				data1: [],
				additems: true,

				pageSize: 20,
				pageNum: 0,
				totalpage: 0,
				currents: 1,
				modaladd: false,

				peledels: false,
				peledelss: false,
				remodaladd: false,
				peledelssover: false,
				SetIndexssover: '',
				operation: {},
				SetIndex: "",
				SetIndexs: "",
				SetIndexss: "",
				reSetIndex: "",
				ifsearch: false,
				articlesname: '',
				articlescode: '',
				articlesstatus: '',
				articlesperson: '',
				addarticlesname: '',
				addarticlesperson: '',
				addarticlessummary: '',
				addarticlestop: '',

				readdarticlestop: '',
				readdarticlesname: '',

				readdarticlessummary: '',

			};
		},

		methods: {

			goback: function() {
				this.$emit('openWindow', ('articles'), ('内容管理'), ('13'), ('articles'), ('articles'))

			},
			
			changecenters: function(center) {
				this.recontent = center
			},
			
			//tree
			modaltreeOpen() {	
				this.modaltree = true;
			},
			getMyevent(id,name,code){
				this.nodesname = name;
				this.nodesid=id;
				this.nodescode=code;
				
			},
			MyeventOk(){
				this.changeText = this.nodesname;
				this.modaltree = false;
			},
		//新建是否置顶
           change (status) {
                this.$Message.info('开关状态：' + status);
            },
		    	//是否置顶切换状态
			changedswitch(index) {

				let that = this;
				//打开是true,已经处理1
				if (this.data1[index].top == 1) {
					this.axios({
						method: 'put',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/contents/' + this.data1[index].id,
						data: {
							top: 0,

						}
					}).then(res => {
						console.log(res)
						this.data1[index].top = 0
						that.$Message.success("您设置状态为不置顶");
					})
				} else if (this.data1[index].top == 0) {
					this.axios({
						method: 'put',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/contents/' + this.data1[index].id,
						data: {
							top: 1,
						}
					}).then(res => {
						this.data1[index].top = 1
						that.$Message.success("您设置状态为置顶");
					})
				}
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

			modaltreeOpen() {
				this.modaltree = true;
			},

			formeReset() {
				this.activityId_save = '';
				this.cover_save = '';
				this.addarticlesname = '';
				this.addarticlesperson = '';
				this.addarticlessummary = '';
				this.addarticlescode = '';
				this.changeText = '';
				this.modaladd = true;
				this.uploadList = '';
				this.addarticlestop = '';
			}

		},

		components: {
			'editor': editor,
			'zTree': zTree
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