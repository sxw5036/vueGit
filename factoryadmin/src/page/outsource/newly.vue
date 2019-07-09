<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">外协管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建外协</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
					<Form :label-width="150">

						<FormItem label="所属订单">
							<Select filterable v-model="outsource.orderId" @on-change="getProduce(outsource.orderId)" placeholder="请选择订单...">
								<Option v-for="item in orderData" :value="item.id" :key="item.id">{{ item.no}}</Option>
							</Select>
						</FormItem>

						<FormItem label="所属产品">
							<Select filterable  @on-change="ResetMsg" v-model="outsource.produceId" placeholder="请选择订单订单产品...">
								<Option v-for="item in produceData" :value="item.id" :key="item.id">{{item.typeName}} - {{item.seriesName}} - {{item.color}}-￥{{item.price}}</Option>
							</Select>
						</FormItem>

						<FormItem label="外协金额">
							<Input v-model="outsource.amount" placeholder="请输入外协金额..."></Input>
						</FormItem>

						<FormItem label="外协厂家">
							<Input v-model="outsource.coordinationName" placeholder="请输入外协厂家..."></Input>
						</FormItem>

						<FormItem label="银行账户">
							<Input v-model="outsource.coordinationAccount" placeholder="请输入银行账户..."></Input>
						</FormItem>

						<FormItem label="开户行">
							<Input v-model="outsource.coordinationBank" placeholder="请输入开户行..."></Input>
						</FormItem>

						<FormItem label="数量">
							<Input v-model="outsource.count" placeholder="请输入数量..."></Input>
						</FormItem>

						<!--<FormItem label="完成时间">
									
										<DatePicker style="width: 300px;" type="date" placeholder="请选择完成时间" @on-change="getcompletionTime" :value="outsource.completionTime"></DatePicker>
									</FormItem>-->

						<FormItem label="说明">
							<Input type="textarea" v-model="outsource.notes" placeholder="请输入说明..."></Input>
						</FormItem>
						
						<FormItem label="附件" v-show="outsource.orderId!=''">
					<div class="pl">
						<div class="demo-upload-list" v-for="(item,index) in outsource.files">

							<template>
								<img :src="item.path">
								<div class="demo-upload-list-cover">
									<!--<Icon type="ios-eye-outline" @click.native="handleView(item.imgRelPath)"></Icon>-->
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
		</div>
		-->

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				outsource: {
					orderId: "",
					produceId: "",
					amount: "",
					coordinationName: "",
					coordinationAccount: "",
					coordinationBank: "",
					count: "",
					notes: "",
					files:[]
				},
				
				uploadpathdata: '',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},

				orderData: [],
				produceData: [],
				companyData: [],

				
				operation: {}

			};
		},

		methods: {

			goback: function() {
				this.$emit('openWindow', ('outsource'), ('外协管理'), ('4'), ('outsource'), ('outsource'))
			},

			formeReset() {
				this.outsource = {
					orderId: "",
					produceId: "",
					amount: "",
					coordinationName: "",
					coordinationAccount: "",
					coordinationBank: "",
					count: "",
					notes: "",
					files:[]
				}
			},
			
			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},

			handleRemove: function(index) {
				var fileId = this.outsource.files[index].id
				var id = this.outsource.orderId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + id + '/files/' + fileId,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.outsource.files.splice(index, 1)
					
					that.$Message.success("删除图片成功")

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			handleSuccess(res, file) {

				var data = res.data

				for(var i = 0; i < data.length; i++) {
					this.outsource.files.push(data[i])
				

				}
				
				this.$Message.success("上传图片成功")

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

			//查询订单产品

			getProduce: function(id) {
				
				
				if(!id){
					return false;
				}
				
				
				
				this.uploadpathdata = '/api/f/customorders/' + id + '/4/produceId/files'
				this.outsource = {
					orderId:id,
					produceId: "",
					amount: "",
					coordinationName: "",
					coordinationAccount: "",
					coordinationBank: "",
					count: "",
					notes: "",
					files:[]
				}
				
				var that = this

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'get',
					url: '/api/f/customorders/' + id + '/info',

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.produceData = data.orderProducts //订单产品

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})
			},
			
			ResetMsg:function  () {
				
				this.outsource.amount="";
				this.outsource.coordinationName="";
				this.outsource.coordinationAccount="";
				this.outsource.coordinationBank="";
				this.outsource.count="";
				this.outsource.notes="";
				this.outsource.files=[];
				
			
			},

			//确认创建外协

			sure: function() {

				/*orderId: "",
					produceId: "",
					amount: "",
					coordinationName: "",
					coordinationAccount: "",
					coordinationBank: "",
					count: "",
					notes: "",*/

				var outsource = this.outsource;

				var orderId = outsource.orderId;
				var produceId = outsource.produceId;
				var amount = outsource.amount;
				var coordinationName = outsource.coordinationName;
				var coordinationAccount = outsource.coordinationAccount;
				var coordinationBank = outsource.coordinationBank;				
				var count = outsource.count;
				var notes = outsource.notes;

				amount = amount.trim();
				coordinationName = coordinationName.trim();
				coordinationAccount = coordinationAccount.trim();
				coordinationBank = coordinationBank.trim();
				count = count.trim()
				notes = notes.trim()
				
			    var fileIds=[]			   
			    var files=outsource.files
			    
			    for(var i=0; i<files.length ;i++){
			    	fileIds.push(files[i].id)
			    }
			   
			 
				
				
				var amountVerify = /^([0-9])+(.[0-9]{2})?$/

				if(orderId == "" || orderId == null) {
					this.$Message.error('请选择订单！');
					return false;
				} else if(produceId == "" || produceId == null) {
					this.$Message.error('请选择订单产品！');
					return false;
				} 
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'post',
					url: '/api/f/customorders/'+orderId+'/produces/'+produceId,

					data: {
						type: 1,
						way: 1,					
						amount: (amount == "") ? undefined : amount,
						coordinationName: (coordinationName == "") ? undefined : coordinationName,
						coordinationBank: (coordinationBank == "") ? undefined : coordinationBank,
						coordinationAccount: (coordinationAccount == "") ? undefined : coordinationAccount,
						count: (count == "") ? undefined : count,
						notes: (notes == "") ? undefined : notes,
						fileIds:fileIds
					}

				}).then(function(res) {

					var verify = [

						{
							"name": "way",
							"note": "拆单类型"
						}, {
							"name": "type",
							"note": "生产方式"
						},
						{
							"name": "no",
							"note": "拆单编号 "
						},
						{
							"name": "coordinationName",
							"note": "外协厂家"
						},
						{
							"name": "coordinationBank",
							"note": "银行账户"
						},

						{
							"name": "coordinationAccount",
							"note": "开户行"
						},
						{
							"name": "count",
							"note": "数量"
						},
						{
							"name": "notes",
							"note": "描述"
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}
					var data = res.data.data

					that.$Message.success("创建成功")
					that.formeReset()

					

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					
				})

			},

			//查询订单
			getOreder: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/customorders?pageNum=1&pageSize=999999999',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.orderData = data

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})
			},

		},

		mounted: function() {

			var that = this

			this.getOreder()

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