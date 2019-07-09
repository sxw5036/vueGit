<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a  @click="goback">成品管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建包裹</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
					<Form :label-width="120">

						<FormItem label="所属订单">
							
							<Input style="width: 200px;" v-model="parcelObj.orderNo" placeholder="请输入所属订单..."></Input>
							
							<!--<Select  filterable v-model="objmsg.orderId" placeholder="请选择所属订单...">
								<Option v-for="item in orderData" :value="item.id" :key="item.id">{{ item.name }}-{{ item.founderName }}</Option>
							</Select>-->

						</FormItem>
						
						<FormItem label="包裹编号">
						<input style="width: 200px;" disabled="disabled" class="iv_input" id="p_lea" v-model="parcelObj.no" placeholder="请输入包裹编号..." /> *包裹编号自动生成
					</FormItem>

					<FormItem label="包裹类型">
						<Select v-model="parcelObj.type" style="width:200px;">
							<Option value="0">柜体</Option>
							<Option value="1">门板-自产</Option>
							<Option value="2">门板-外协</Option>
							<Option value="3">特供实木</Option>
							<Option value="4">五金</Option>

						</Select>
					</FormItem>

					<FormItem label="包裹数量">
						<input style="width: 200px;" class="iv_input" id="p_lea" v-model="parcelObj.count" placeholder="请输入包裹数量..." />
						<Button type="primary" size="small" style="margin-left: 3px;" >生成编号</Button><!--@click="getpackNos"-->
					</FormItem>

					<FormItem label="包裹位置">
						<input style="width: 300px;" class="iv_input" id="p_lea" v-model="parcelObj.location" placeholder="请输入包裹位置..." />
					</FormItem>

					<FormItem label="包裹说明">
						<Input type="textarea" style="width: 300px;" id="p_lea" v-model="parcelObj.notes" placeholder="请输入包裹说明..." /></Input>
					</FormItem>

					<FormItem label="操作人">
						<Select style="width: 300px;" filterable v-model="parcelObj.operator">
							<Option v-for="(item,index) in employee" :value="item.userId" :key="item.userId">{{item.userName}}</Option>
						</Select>
					</FormItem>

					<FormItem label="打包日期">
						<DatePicker style="width: 300px;" type="date" @on-change="getoperated" placeholder="请选择打包时间" :value="parcelObj.operated"></DatePicker>
					</FormItem>

					<FormItem label="打包时间">
						<TimePicker v-model="parcelObj.operatedTime" format="HH:mm:ss" placeholder="请选择时间" style="width: 300px"></TimePicker>
					</FormItem>

					<FormItem label="附件">
						<div class="pl">

							<div class="demo-upload-list" v-for="(item,index) in parcelObj.files">

								<template>
									<img :src="item.path">
									<div class="demo-upload-list-cover">
										<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
										<Icon type="ios-trash-outline" @click.native="handleRemove(index)"></Icon>
									</div>
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
						<button type="reset" class="details_opBut auto linkBlock smallsize" @click="formeReset">重置</button>
						<button class="details_opBut linkBlock smallsize" @click="">确认</button>
						<!--<Button type="primary">确认</Button>-->

					</div>

				</div>

			</div>

			<div>

			</div>
		</div>

		<!--<div class="Quick_navigation">
			<div class="panel">
				<div class="panel_nav">
					<div class="panel_center">
						<h3 class="head">快速导航</h3>
						<div class="panel_con">
							<div class="navigation">
								<ul>
									<li>
										<a>客户</a>
									</li>

									<li>
										<a>设计方案</a>
									</li>

									<li>
										<a>经销商</a>
									</li>

									<li>
										<a>生产</a>
									</li>

									<li>
										<a>包装</a>
									</li>

									<li>
										<a>入库</a>
									</li>

									<li>
										<a>发货</a>
									</li>

									<li>
										<a>外协</a>
									</li>

								</ul>>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>-->

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				parcelObj: {
					no: "",
					parceArry: [],
					files: [],
					type: "",
					notes: "",
					location: ""
				},
				
				
				employee:[],
				uploadpathdata: '/api/f/payment_simples/uploadImages',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},


				

			};
		},

		methods: {
			
			goback:function  () {
				this.$emit('openWindow', ('finishedstock'), ('产品管理'), ('9'), ('finishedstock'), ('finishedstock'))
//              this.$router.push({
//					name: 'client',
//
//				})
			},
			
			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},

			handleRemove: function(index) {

				var data = this.tableData[this.SetIndex]
				var fid = this.parcelObj.files[index].id
				var id = data.id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/storages/4ujh7687hips/finisheds/' + id + '/packages/itemId/files/' + fid,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.parcelObj.files.splice(index, 1)
					/*that.tableData[that.SetIndex].fileList.splice(index,1)*/

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			handleSuccess(res, file) {

				var data = res.data

				for(var i = 0; i < data.length; i++) {
					this.parcelObj.files.push(data[i])
				}

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

			
			getoperated: function(val) {
				this.parcelObj.operated = val
			},


		

			formeReset() {
				this.parcelObj= {
					no: "",
					parceArry: [],
					files: [],
					type: "",
					notes: "",
					location: ""
				}
			},

			newDealer: function() {
				this.$emit('openWindow', ('dealercompanynewly'), ('新建经销商'), ('2-1'), ('dealercompanynewly'), ('dealercompanynewly'))
			},

		},

		mounted: function() {

			var that = this
			
			this.axios({
				method: 'get',
				url: '/api/f/depts/members',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var orderDatacache = {}
				var data = res.data.data
				that.employee = data
			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

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