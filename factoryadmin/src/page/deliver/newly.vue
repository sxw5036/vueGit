<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a  @click="goback">发货管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建发货</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
			    <Form  :label-width="120">

						
				<FormItem label="包裹编号">
					<Input v-model="deliver.no" placeholder="请输入发货包裹编号" style="width:80%; "></Input>
				</FormItem>
				
				<FormItem label="收货人">
					<Input v-model="deliver.name" placeholder="请输入客户姓名..." style="width:80%;"></Input>
				</FormItem>
				<FormItem label="收货人电话">
					<Input v-model="deliver.tel" placeholder="请输入客户电话..." style="width:80%;"></Input>
				</FormItem>
				<FormItem label="收货地址">
					<Input v-model="deliver.address" placeholder="请输入发货地址..." style="width:80%; "></Input>
				</FormItem>

				<FormItem label="物流公司">
					<Select v-model="deliver.com" style="width:80%;" placeholder="请选择物流公司...">
						<Option v-for="item in delivercompany" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>
				<FormItem label="物流单号">
					<Input v-model="deliver.num" placeholder="请输入物流单编号..." style="width: 80%;"></Input>
				</FormItem>
				<FormItem label="备注">
					<Input type="textarea" :rows="2" v-model="deliver.notes" placeholder="请输入相关备注..." style="width: 80%; "></Input>
				</FormItem>
				<FormItem label="上传附件">

					<div style="margin-top:10px; padding:2% 0; ">
						<div class="pl">
							<div class="demo-upload-list" v-for="(item,index) in uploadList">
								<template>
									<img :src="item.path">
									<div class="demo-upload-list-cover">
										<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
										<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,index)"></Icon>
									</div>
								</template>

							</div>
							<Upload multiple ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFileList" style="display: inline-block;width:58px;">
								<div style="width: 58px;height:58px;line-height: 58px;">
									<Icon type="ios-camera" size="20"></Icon>
								</div>
							</Upload>
						</div>
						<Modal title="图片详情" v-model="visible" style="text-align: center;">
							<img :src="imgName" style="width: 80%;">
							<div slot="footer">
								<Button type="error" size="large" @click="visible=false">关闭</Button>
							</div>
						</Modal>
					</div>

				</FormItem>

					</Form>

					<div class="iv_form_but center">
						<button type="reset" class="details_opBut auto linkBlock smallsize" @click="formeReset">重置</button>
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

				deliver: {
					
				},
				delivercompany:[],
				uploadList:[],
				barcodeCache:[],
				
				uploadList: [],
				uploadpathdata: '/api/f/dispatchs/dispatchId/files',
				visible: false,
				defaultList: [],
				imgName: '',
				uparry: {
					multipartFileList: [],
					fileIds: [],

				},

				

			};
		},

		methods: {
			
			goback:function  () {
				this.$emit('openWindow', ('delivers'), ('发货管理'), ('08'), ('delivers'), ('delivers'))
//              this.$router.push({
//					name: 'client',
//
//				})
			},
			
			
			handleSuccess(res, file) {
				var Res = res.data
				for(var i = 0; i < Res.length; i++) {
					this.uploadList.push(Res[i])

				}

			},
			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(fileid, index) {

				this.delfile(fileid, index)

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
				this.deliver = {}
				
			},

			

		},

		mounted: function() {

			var that = this;
			
			this.axios({
				method: 'get',
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'ContentType': 'application/json;charset=UTF-8'
				},

				url: '/api/f/storages/4ujh7687hips/finisheds?ship=1&delivery=false' + '&pageNum=1&pageSize=10000'
			}).then(res => {

				if(res != false) {
					var data = res.data.data

					var dataCache = {}

					for(var i = 0; i < data.length; i++) {

						dataCache[data[i].barcode] = data[i]

					}

					that.barcodeCache = dataCache

				}
			}),
			
			this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},

					url: '/app/f/logistics'
				}).then(res => {

					if(res != false) {
						that.delivercompany = res.data.data;
					
					}
				})
}
			

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