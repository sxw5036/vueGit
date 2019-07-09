<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>版本管理</BreadcrumbItem>
			</Breadcrumb>
			<Row>
				<Col span="20" style="margin-bottom: 20px;margin-top: 20px;">
				<div>
					系统名称：<Input v-model="namesearch" placeholder="请输入系统名称..." style="width: 16%;margin:0 5px;"></Input>
					平台类型：
					<Select v-model="sysTypesearch" style="width:10%;margin:0 5px;" placeholder="请选择平台类型...">
						<Option v-for="item in upgradesysType" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
					<Button icon="ios-search" @click="getsearchdatas">搜索</Button>
				</div>
				</Col>
				<Col span="4" style="margin-bottom: 20px;margin-top: 20px;text-align: right;">
				<Button type="primary" @click="setupdate">新建版本</Button>
				</Col>
			</Row>
			<div style="padding-bottom: 30px; margin-bottom: 30px;">
				<Table :columns="columns1" :data="data1" border></Table>
			</div>
			 <!-- <div class="fenye">
				 <p style="color: red; font-size: 12px; height: 40px; line-height:40px; width: 360px; text-align: center; border: 1px solid #dcdee2;">更新说明列，鼠标放上可以查看更新说明详情</p>
			</div> -->
		</div>
		<Drawer v-model="model" title="新建版本" width=500px;>
			<div>

				<Form :label-width="100" style="margin-top:10px;">
					<FormItem label="系统名称">
						<Input v-model="addname" style="width: 90%; " placeholder="请输入系统名称..."></Input>
					</FormItem>
					<FormItem label="系统类别">
						<Select v-model="addsysType" style="width: 90%;" placeholder="请选择系统类别...">
							<Option v-for="item in upgradesysType" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="内部版本号">
						<Input v-model="addversionNo" style="width: 90%;" placeholder="请输入内部版本号..."></Input>
					</FormItem>
					<FormItem label="展示版本号">
						<Input v-model="addversion" style="width: 90%;" placeholder="请输入展示版本号..."></Input>
					</FormItem>
					<FormItem label="更新平台">
						<Select v-model="addplatform" style="width: 90%;" placeholder="请选择更新平台...">
							<Option v-for="item in upgradeplatform" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="是否有效">
						<Select v-model="addupdateState" style="width: 90%;" placeholder="请选择是否有效...">
							<Option v-for="item in upgradeupdateState" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="文件大小">
						<Input v-model="addfileSize" style="width: 90%;" placeholder="请输入文件大小..."></Input>
					</FormItem>
					<FormItem label="更新说明">
						<Input v-model="adddescription" style="width: 90%;" type="textarea" :rows="3" placeholder="请输入更新说明..."></Input>
					</FormItem>
				</Form>
			</div>
			  <div class="demo-drawer-footer">
				<Button type="error" size="large" @click="model = false">关闭</Button>
				<Button type="primary" size="large" @click="upgradeaddok">确认</Button>
			</div>
		</Drawer>

		<Drawer v-model="remodel" title="编辑版本详情" width=500px;>
			<div>
				<Form :label-width="100" style="margin-top:10px;">
					<FormItem label="系统名称">
						<Input v-model="readdname" style="width: 90%; " placeholder="请输入系统名称..."></Input>
					</FormItem>
					<FormItem label="系统类别">
						<Select v-model="readdsysType" style="width: 90%;" placeholder="请选择系统类别...">
							<Option v-for="item in upgradesysType" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="内部版本号">
						<Input v-model="readdversionNo" style="width: 90%;" placeholder="请输入内部版本号..."></Input>
					</FormItem>
					<FormItem label="展示版本号">
						<Input v-model="readdversion" style="width: 90%;" placeholder="请输入展示版本号..."></Input>
					</FormItem>
					<FormItem label="更新平台">
						<Select v-model="readdplatform" style="width: 90%;" placeholder="请选择更新平台...">
							<Option v-for="item in upgradeplatform" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="是否有效">
						<Select v-model="readdupdateState" style="width: 90%;" placeholder="请选择是否有效...">
							<Option v-for="item in upgradeupdateState" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="文件大小">
						<Input v-model="readdfileSize" style="width: 90%;" placeholder="请输入文件大小..."></Input>
					</FormItem>
					<FormItem label="更新说明">
						<Input v-model="readddescription" style="width: 90%;" type="textarea" :rows="3" placeholder="请输入更新说明..."></Input>
					</FormItem>
					<FormItem label="上传apk">
						<Upload :action="uploadpathdata" :on-success="handleSuccess" :data="uparry" :before-upload="handleBeforeUpload" name="multipartFile">
						          <Button  icon="ios-cloud-upload-outline">上传apk文件</Button>
						</Upload>
						
						<div v-show="this.filespath != null">文件地址:<span style="margin-left: 10px;">{{this.filespath}}</span ><a :href="this.filespath" style="margin-left: 10px;" download="apk">下载apk</a></div>
					</FormItem>
				</Form>
				
				 
			</div>
			  <div class="demo-drawer-footer">
				<Button type="error" size="large" @click="remodel = false">关闭</Button>
				<Button type="primary" size="large" @click="repairupgrade">确认</Button>
			</div>
		</Drawer>
		<!-- <Modal v-model="remodels" title="版本详情" width=40%;>
			<div>
				<Form :label-width="100" style="margin-top:10px;">
					<FormItem label="字典名称">
						<Input style="width: 90%; " placeholder="请输入字典名称..."></Input>
					</FormItem>
					<FormItem label="字典类型">
						<Input style="width: 90%;" placeholder="请输入字典类型..."></Input>
					</FormItem>
					<FormItem label="字典码">
						<Input style="width: 90%;" placeholder="请输入字典码..."></Input>
					</FormItem>
					<FormItem label="字典值">
						<Input style="width: 90%;" placeholder="请输入字典值..."></Input>
					</FormItem>
					<FormItem label="排序">
						<Input style="width: 90%;" placeholder="请输入排序的数值..."></Input>
					</FormItem>
					<FormItem label="备注">
						<Input style="width: 90%;" type="textarea" :rows="3" placeholder="请输入备注..."></Input>
					</FormItem>
				</Form>
			</div>
			<div slot="footer">
				<Button type="error" size="large" @click="remodels = false">关闭</Button>

			</div>
		</Modal> -->
		<Modal v-model="modelde" title="删除版本" width="360">
			<p slot="header" style="color:red; text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>删除版本信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除版本信息操作</p>
				<p>确定要删除吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="updatedelete">确定</Button>
			</div>
		</Modal>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {

				//搜索
				ordersNo: '',
				ordersdeliveNo: '',
				ifsearch: false,
				//包裹信息

				//弹窗
				remodel: false,
				remodels: false,
				model: false,
				modelde: false,
				reSetIndex: '',
				SetIndexssover: '',
				index_dep: '',
				//权限
				operation: {},
				//添加数据
				addname: '', //系统名称
				addversionNo: '', //内部版本号
				addversion: '', //展示版本号
				addsysType: '', //系统类型		
				addplatform: '', //更新平台
				addfileSize: '', //文件大小
				adddescription: '', //更新说明
				addupdateState: '', //是否有效

				//修改数据
				readdname: '', //系统名称
				readdversionNo: '', //内部版本号
				readdversion: '', //展示版本号
				readdsysType: '', //系统类型		
				readdplatform: '', //更新平台
				readdfileSize: '', //文件大小
				readddescription: '', //更新说明
				readdupdateState: '', //是否有效
                reid:'',
				//数据 
				uparry: {
					multipartFileList: []
				},
				uploadpathdata:'',
				uploadList: [],
				loadingStatus:false,
				filespath:'',
				namesearch: '',
				sysTypesearch: '',
				upgradeplatform: [{
						value: "0",
						label: 'ios'
					},
					{
						value: "1",
						label: 'android'
					},
					{
						value: "2",
						label: 'pc端'
					},

				],
				upgradeupdateState: [{
						value: "0",
						label: '无效'
					},
					{
						value: "1",
						label: '有效'
					},

				],
				upgradesysType: [{
						value: "0",
						label: '工业4.0整合版'
					},
					{
						value: "1",
						label: '工业4.0F端'
					},
					{
						value: "2",
						label: '工业4.0B端'
					},
					{
						value: "3",
						label: '工业4.0C端'
					}
				],
				data1: [],
				columns1: [{
						title: '内部版本号',
						key: 'versionNo',
						align: 'center',
						width: 200,
					},

					{
						title: '展示版本号',
						key: 'version',
						align: 'center',
						width: 200,
					},
					{
						title: '系统名称',
						key: 'name',
						align: 'center',
						width: 200,
					},
					{
						title: '系统类型',
						key: 'sysType',
						align: 'center',
						width: 200,
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.sysType == 0) {
								text = '工业4.0整合版'
							} else if (row.sysType == 1) {
								text = '工业4.0F端'
							} else if (row.sysType == 2) {
								text = '工业4.0B端'
							} else if (row.sysType == 2) {
								text = '工业4.0C端'
							}
							return h('div', text);
						}
					},

					{
						title: '更新平台',
						key: 'platform',
						align: 'center',
						width: 160,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.platform == 0) {
								text = 'ios'
							} else if (row.platform == 1) {
								text = 'android'
							} else if (row.platform == 2) {
								text = 'pc端'
							}
							return h('div', text);
						}
					},
					{
						title: '是否有效',
						key: 'updateState',
						align: 'center',
						width: 160,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.updateState == 0) {
								text = '无效'
							} else if (row.updateState == 1) {
								text = '有效'
							}
							return h('div', text);
						}
					},
					{
						title: '文件大小',
						key: 'fileSize',
						align: 'center',
						width: 160,
						ellipsis: true,
					},

					{
						title: '创建人',
						key: 'createUser',
						align: 'center',
						width: 160,
						ellipsis: true,
					},
					{
						title: '创建时间',
						key: 'createTime',
						align: 'center',
						width: 180,
						ellipsis: true,
					},
					{
						title: '修改人',
						key: 'createUser',
						align: 'center',
						width: 180,
						ellipsis: true,
					},
					{
						title: '修改时间',
						key: 'createTime',
						align: 'center',
						width: 180,
						ellipsis: true,
					},
					{
						title: '更新说明',
						key: 'description',
						align: 'center',
						width: 300,
						render: (h, params) => {
							const row = params.row;
							var text											
							text = params.row.description
							
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
										title: text
									}
								}, text)
							]);
							return('div', [
							h('span', {
									attrs: {
										title: this.description
									},
									on: {
										mouseenter: () => {
											//实现点击用户姓名然后显示其电话号码等功能，原来是通过动态路由，现在直接写在model里面
											let currenIndex = params.index;
											var obj = this.data1[currenIndex];
											let mouseId = obj.description;
											this.description = mouseId;
										}
									}
								}, params.row.description)
													
							])
						
						}
						
					},
					


					{
						title: '操作',
						width: 200,
						align: 'center',
						fixed: 'right',
						render: (h, params) => {
							return h('div', [
// 								h('Button', {
// 									props: {
// 										type: 'info',
// 									},
// 									style: {
// 										marginRight: '5px'
// 									},
// 									on: {
// 										click: () => {
// 											this.index_dep = params.index;
// 											this.seeeupgrade();
// 
// 
// 										}
// 									}
// 								}, '详情'),
								h('Button', {
									props: {
										type: 'primary',
                                         size: 'small',

									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.paireupgrade(params.index)
											this.reSetIndex = params.index;
                                            this.uploadpathdata = '/api/f/versions/' + this.data1[params.index].versionId + '/files';
											
										}
									}
								}, '编辑'),
								h('Button', {
									props: {
										type: 'error',
                                        size: 'small',

									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.SetIndexssover = params.index
											this.modelde = true;
										}
									}
								}, '删除'),

							]);
						}
					}
				],
			}

		},
		methods: {
			loaddown(){
				
			},
			handleSuccess(res, file) {
			   console.log(res)
	           this.filespath = res.data.path;
               this.uploadList=[];
			   this.uploadList.push(this.filespath);
			   console.log(this.filespath)
				  
					
			},
			handleBeforeUpload(file) {
				this.file = file
				this.uparry.multipartFileList.push(this.file)
			},
			repairupgrade() {
				if (this.readdname == "" || this.readdname == null) {
					this.$Message.info('请完善系统名称信息');
					return false;
				} else if (this.readdversionNo == "" || this.readdversionNo == null) {
					this.$Message.info('请完善内部版本号信息');
					return false;
				} else if (this.readdversion == "" || this.readdversion == null) {
					this.$Message.info('请完善展示版本号信息');
					return false;
				} else if (this.readdsysType == "" || this.readdsysType == null) {
					this.$Message.info('请选择系统类型信息');
					return false;
				} else if (this.readdplatform == "" || this.readdplatform == null) {
					this.$Message.info('请选择更新平台信息');
					return false;
				} else if (this.readdupdateState == "" || this.readdupdateState == null) {
					this.$Message.info('请选择是否有效');
					return false;
				}

				var reSetIndex = this.reSetIndex

				let that = this;
				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/versions/' + that.data1[reSetIndex].versionId,

					data: {
						name: that.readdname,
						versionNo: that.readdversionNo,
						version: that.readdversion,
						platform: that.readdplatform,
						description: that.readddescription,
						fileSize: that.readdfileSize,
						sysType: that.readdsysType,
						updateState: that.readdupdateState
					}
				}).then(res => {
					console.log(res);
					if (res != false) {
						    
						    that.data1[reSetIndex].name = res.data.data.name,
							that.data1[reSetIndex].versionNo = res.data.data.versionNo,
							that.data1[reSetIndex].version = res.data.data.version,
							that.data1[reSetIndex].platform = res.data.data.platform,
							that.data1[reSetIndex].description = res.data.data.description,
							that.data1[reSetIndex].fileSize = res.data.data.fileSize,
							that.data1[reSetIndex].sysType = res.data.data.sysType,
							that.data1[reSetIndex].updateState = res.data.data.fileSize,
							that.remodel = false;
						that.$Message.info('修改成功');

					}


				})

			},

			paireupgrade(index) {
				this.remodel = true;
				var index = index;
				this.filespath=[],
				this.reid=this.data1[index].id;
				this.readdname = this.data1[index].name;
				this.readdversionNo = this.data1[index].versionNo;
				this.readdversion = this.data1[index].version;
				this.readdsysType = this.data1[index].sysType + "";
				this.readdplatform = this.data1[index].platform + "";
				this.readdfileSize = this.data1[index].fileSize;
				this.readddescription = this.data1[index].description;
				this.readdupdateState = this.data1[index].updateState + "";
                this.filespath=this.data1[index].url;
				console.log(this.filespath)

			},
			seeeupgrade() {
				this.remodels = true;
				var index = this.index_dep;
				// 					this.rebasecodename=this.data1[index].name;
				// 					this.rebasecodetype=this.data1[index].type;
				// 					this.rebasecodecode=this.data1[index].code;
				// 					this.rebasecodevalue=this.data1[index].value;
				// 					this.rebasecodenum=this.data1[index].orderNum;
				// 					this.rebasecoderemark=this.data1[index].remark;


			},
			updatedelete() {
				var index = this.SetIndexssover;
				let that = this;
				this.axios({
					method: 'delete',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/versions/' + that.data1[index].versionId
				}).then(res => {
					that.data1.splice(index, 1);
					that.$Message.success("版本删除成功");
					that.modelde = false;

				})
			},
			setupdate() {
				this.model = true;
			},


			upgradeaddok() {

				if (this.addname == "" || this.addname == null) {
					this.$Message.info('请完善系统名称信息');
					return false;
				} else if (this.addversionNo == "" || this.addversionNo == null) {
					this.$Message.info('请完善内部版本号信息');
					return false;
				} else if (this.addversion == "" || this.addversion == null) {
					this.$Message.info('请完善展示版本号信息');
					return false;
				} else if (this.addsysType == "" || this.addsysType == null) {
					this.$Message.info('请选择系统类型信息');
					return false;
				} else if (this.addplatform == "" || this.addplatform == null) {
					this.$Message.info('请选择更新平台信息');
					return false;
				} else if (this.addupdateState == "" || this.addupdateState == null) {
					this.$Message.info('请选择是否有效');
					return false;
				}
				let that = this;
				this.axios({
					method: 'post',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/versions',
					data: {
						name: that.addname,
						versionNo: that.addversionNo,
						version: that.addversion,
						platform: that.addplatform,
						description: that.adddescription,
						fileSize: that.addfileSize,
						sysType: that.addsysType,
						updateState: that.addupdateState
					}
				}).then(res => {
					console.log(res)
					if (res != false) {
						that.$Message.info('添加版本成功');
						this.getupdatedatas();
						that.model = false;
					}

				})
			},


			getsearchdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},

					url: '/api/f/versions?' + (that.namesearch == '' ? '' : '&name=' + that.namesearch) + (that.sysTypesearch == '' ?
						'' : '&sysType=' + that.sysTypesearch)
				}).then(res => {
					if (res != false) {
						that.data1 = res.data.data;
					}
				})

			},
			getupdatedatas() {

				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/versions'
				}).then(res => {
					console.log(res)
					if (res != false) {
						that.data1 = res.data.data;


					}
				})

			},
		},
		mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
			this.getupdatedatas();
		}
	}
</script>

<style scoped="scoped">
	.fenye {
		margin-top: -30px;
		float: left;
		margin-right: 20px;
	}
	 .demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }
</style>
