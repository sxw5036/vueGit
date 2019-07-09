<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">设计管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>编辑设计</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
					<Form :label-width="120">
						<Form :model="pushschemeObj" :label-width="80">

							<FormItem label="订单编号">
								<Input v-model="pushschemeObj.orderNo" placeholder="请输入所设计订单编号..."></Input>
							</FormItem>

							<FormItem label="设计名称">
								<Input v-model="pushschemeObj.name" placeholder="请输入设计名称..."></Input>
							</FormItem>

							<FormItem label="设计估价">
								<Input v-model="pushschemeObj.valuation" placeholder="请输入设计估价..."></Input>
							</FormItem>

							<FormItem label="设计描述">
								<textarea name="" v-model="pushschemeObj.notes" rows="" cols="" placeholder="请输入设计描述..."></textarea>
							</FormItem>

							<FormItem label="设计图">
								<div class="pl">
									<div class="demo-upload-list" v-for="(item,index) in uploadList">
										<template v-if="item.status === 'finished'">
											<img :src="item.path">
											<div class="demo-upload-list-cover">
												<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
												<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,index)"></Icon>
											</div>
										</template>
										<template v-else>
											<Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
										</template>
									</div>
									<Upload multiple ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFileList" style="display: inline-block;width:58px;">
										<div style="width: 58px;height:58px;line-height: 58px;">
											<Icon type="ios-camera" size="20"></Icon>
										</div>
									</Upload>
								</div>
							</FormItem>

						</Form>

					</Form>

					<div class="iv_form_but center">
						<button class="details_opBut auto linkBlock smallsize">重置</button>
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

				pushschemeObj: {
					orderNo: "",
					name: "",
					notes: "",
					valuation: "0",
				},

				uploadpathdata: '',
				defaultList: [],
				imgName: '',
				visible: false,
				uploadList: [],
				uparry: {
					multipartFileList: []
				},

			};
		},

		methods: {

			goback: function() {
				this.$emit('openWindow', ('designorder'), ('设计管理'), ('5'), ('designorder'), ('designorder'))

			},

			//up

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(fileid, index) {

				this.delfile(fileid, index)

			},
			handleSuccess(res, file) {

				var Res = res.data
				this.uploadList = this.$refs.upload.fileList
				for(var i = 0; i < Res.length; i++) {
					file.path = Res[i].path
					file.id = Res[i].id
				}

				var dsDataCache = this.dsDataCache
				var obj = {
					path: Res[0].path

				}

				/*	dsDataCache[this.dsData[this.designersIndex].id].designFile.push(obj)
					this.dsDataCache = dsDataCache*/

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

			formeReset() {
				this.pushschemeObj = {
					orderNo: "",
					name: "",
					notes: "",
					valuation: "0",
				},

				this.uploadList = []
			}

		},

		mounted: function() {
			
		},

	}
</script>

<style scoped="scoped">
	.Quick_navigation {
		width: 300px;
		position: fixed;
		z-index: 9;
		bottom: 70px;
		right: 20px;
	}
	
	.navigation {
		display: block;
		width: 100%;
		font-size: 0px;
	}
	
	.navigation ul {
		display: inline-block;
		width: 100%;
	}
	
	.navigation ul li {
		width: 33%;
		text-align: center;
		float: left;
		font-size: 14px;
		margin-bottom: 10px;
		color: #1890FF;
	}
	
	.navigation ul li a {
		color: #1890FF;
		text-decoration: underline;
	}
	
	.iv_form {
		display: block;
		width: 600px;
		padding: 30px 20px;
		background: #FFFFFF;
		border-radius: 6px;
	}
</style>