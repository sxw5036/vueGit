<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>
					<a @click="goback">生产管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建生产</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
					<Form :model="produce" :label-width="120">

						<FormItem label="所属订单">

							<Select filterable v-model="produce.orderId" @on-change="getProduce(produce.orderId)" placeholder="请选择订单...">
								<Option v-for="item in orderData" :value="item.id" :key="item.id">{{ item.no}}</Option>
							</Select>
						</FormItem>

						<FormItem label="所属产品">
							<Select filterable v-model="produce.produceId" placeholder="请选择订单订单产品...">
								<Option v-for="item in produceData" :value="item.id" :key="item.id">{{item.typeName}} - {{item.seriesName}} - {{item.color}}-￥{{item.price}}</Option>
							</Select>
						</FormItem>
						
						<FormItem label="拆单类型">
					<Select v-model="produce.type" @on-change="putOrderDtostype" placeholder="请选择拆单类型...">
						<Option value="0">柜体 </Option>
						<Option value="1">门板 </Option>
						<Option value="2">五金 </Option>
					</Select>
				</FormItem>
	

				<FormItem label="生产方式" v-show="produce.type==0">
					<RadioGroup true-value v-model="produce.way">
						<Radio label="0">自产</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="生产方式" v-show="produce.type==1">
					<RadioGroup true-value v-model="produce.way" @on-change="putOrderDtosway">
						<Radio label="0">自产</Radio>
						<Radio label="1">外协</Radio>
						<Radio label="2">特供实木</Radio>
					</RadioGroup>
				</FormItem>
						
					<div v-show="produce.way=='1'&&produce.type==1">

					<FormItem label="外协金额">
						<Input v-model="produce.amount" placeholder="请输入外协金额..."></Input>
					</FormItem>

					<FormItem label="外协厂家">
						<Input  v-model="produce.coordinationName" placeholder="请输入外协厂家..."></Input>
					</FormItem>

					<FormItem label="银行账户">
						<Input  v-model="produce.coordinationAccount" placeholder="请输入银行账户..."></Input>
					</FormItem>

					<FormItem label="开户行">
						<Input  v-model="produce.coordinationBank" placeholder="请输入开户行..."></Input>
					</FormItem>
				</div>

				<FormItem label="数量" v-show="produce.type!=2">
					<Input  v-model="produce.count" placeholder="请输入数量..."></Input>
				</FormItem>

				<!--<FormItem label="完成时间">
									
										<DatePicker style="width: 300px;" type="date" placeholder="请选择完成时间" @on-change="getcompletionTime" :value="produce.completionTime"></DatePicker>
									</FormItem>-->

				<FormItem label="说明">
					<Input type="textarea"  v-model="produce.notes" placeholder="请输入说明..."></Input>
				</FormItem>

				<FormItem label="附件" v-show="produce.orderId!=''">
					<div class="pl">
						<div class="demo-upload-list" v-for="(item,index) in produce.files">

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
						<button type="reset" class="details_opBut auto linkBlock smallsize" @click="formeReset">重置</button>
						<button class="details_opBut linkBlock smallsize" @click="sure">确认</button>
						<!--<Button type="primary">确认</Button>-->

					</div>

				</div>

			</div>

			<div>

			</div>
		</div>

		<div class="Quick_navigation">
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

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				produce: {
					
					produceId:"",
					orderId:"",
					files:[]
				},
				orderData:[],
				produceData:[],
				
				uploadpathdata: '',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				}

			};
		},

		methods: {

			goback: function() {
				this.$emit('openWindow', ('productionplan'), ('生产管理'), ('8'), ('productionplan'), ('productionplan'))
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
				var produce = this.produce;
				var orderId=produce.orderId
				var fileId = this.produce.files[index].id			
			

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + orderId + '/files/' + fileId,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.produce.files.splice(index, 1)

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			handleSuccess(res, file) {

				var data = res.data

				for(var i = 0; i < data.length; i++) {
					this.produce.files.push(data[i])
					//					/this.orderProductData[this.setIndexs].uploadFiles.push(data[i])

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


			formeReset() {
				this.produce={};
				this.produce.notes=""
				this.produce.count="";			
				this.produce.files=[]
				
			},

			newDealer: function() {
				this.$emit('openWindow', ('dealercompanynewly'), ('新建经销商'), ('2-1'), ('dealercompanynewly'), ('dealercompanynewly'))
			},
			
			//处理在录入中更换拆单类型,重新录入附属信息
			putOrderDtostype:function  () {
				this.produce.type=='0'||this.produce.type=='1'?this.produce.way='0':this.produce.way='';				
				this.produce.count="";
				this.produce.notes="";
				this.produce.files=[]
			},
//处理在录入中更换生产方式,重新录入附属信息
           putOrderDtosway:function  (val) {
           	this.produce.way=val+""
           	this.produce.count="";
				this.produce.notes="";
				this.produce.files=[]
           },

			
			
			//查询订单下产品

			getProduce: function(id) {
				
				
				if(!id){
					return false;
				}
				
				this.uploadpathdata='/api/f/customorders/'+id+'/4/produceId/files'
			
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
			
		
			
			//确认订单产品生产
			sure:function  () {
				
				
				var that = this
				
				var produce = this.produce;
				
				var orderId=produce.orderId
				var produceId=produce.produceId
				var way = produce.way;
				var no = produce.no;
				var coordinationName = produce.coordinationName;
				var coordinationBank = produce.coordinationBank;
				var coordinationAccount = produce.coordinationAccount
				var amount = produce.amount;
				var count = produce.count+'';
				var completionTime = produce.completionTime;
				var notes = produce.notes;
				var type = produce.type;

				var filesdata = produce.files
				var filesArry = []

				for(var i = 0; i < filesdata.length; i++) {
					filesArry.push(filesdata[i].id)
				}

				if(orderId == "" || type == orderId) {
					this.$Message.error('生产单所属订单不能为空');
					return false;
				} else if(produceId == "" || produceId == null) {
					this.$Message.error('生产单所属订单产品不能为空');
					return false;
				} else if(type == "" || type == null) {
					this.$Message.error('拆单类型不能为空');
					return false;
				} else if(way == "0") {

					if(type == "" || type == null) {
						this.$Message.error('拆单类型不能为空');
						return false;
					} else if(count.length<1&&type!=2) {
						this.$Message.error('数量不能为空');
						return false;
					} else if(parseInt(count)>2147483647) {
						this.$Message.error('数量过大');
						return false;
					}

				} else if(way == "1") {

					if(type == "" || type == null) {
						this.$Message.error('拆单类型不能为空');
						return false;
					} else if(amount == "" || amount == null) {
						this.$Message.error('外协金额不能为空');
						return false;
					} else if(parseInt(amount)>=100000000) {
						this.$Message.error('外协金额长度过长');
						return false;
					} else if(coordinationName == "" || coordinationName == null) {
						this.$Message.error('外协厂家名称不能为空');
						return false;
					} else if(coordinationAccount == "" || coordinationAccount == null) {
						this.$Message.error('外协厂家开账户不能为空');
						return false;
					} else if(coordinationBank == "" || coordinationBank == null) {
						this.$Message.error('外协厂家开户行不能为空');
						return false;
					} else if(count.length<1&&type!=2) {
						this.$Message.error('数量不能为空');
						return false;
					} else if(parseInt(count)>21474836471&&type!=2) {
						this.$Message.error('数量过大');
						return false;
					}

				} else if(way == "2") {
					if(count.length<1&&type!=2) {
						this.$Message.error('个数量不能为空');
						return false;
					} else if(parseInt(count)>21474836471&&type!=2) {
						this.$Message.error('数量过大');
						return false;
					}

				} else{
					if(count.length<1&&type!=2) {
						this.$Message.error('个数量不能为空');
						return false;
					} else if(parseInt(count)>21474836471&&type!=2) {
						this.$Message.error('数量过大');
						return false;
					}
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
						type: (type == "") ? undefined : type,
						way: (way == "") ? undefined : way,
						no: (no == "") ? undefined : no,
						amount: (amount == "") ? undefined : amount,
						coordinationName: (coordinationName == "") ? undefined : coordinationName,
						coordinationBank: (coordinationBank == "") ? undefined : coordinationBank,
						coordinationAccount: (coordinationAccount == "") ? undefined : coordinationAccount,
						count: (count == ""&&type!=2) ? undefined : count,
						count: (count == ""&&type==2) ? "1" : count,
						notes: (notes == "") ? undefined : notes,
						"fileIds": filesArry
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

						{
							"name": "pay",
							"note": "付款状态"
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}
					var data = res.data.data

					that.$Message.success("生产单创建成功")
					that.formeReset()
				

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
				
				})

				
	
				
				
			},

			
			
			
			
			//查询订单可用生产
			getOreder: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/customorders?status=2&status=3&status=4&status=5&status=6&pageNum=1&pageSize=999999999',

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
			
			
			this.getOreder() //查询订单可用生产
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