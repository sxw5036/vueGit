<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a  @click="goback">售后管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建售后</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox">

				<div class="iv_form">
			    <Form  :label-width="120">


					<FormItem label="售后类型">
						<RadioGroup true-value v-model="establishMsg.type">
							<Radio label="4">反馈单</Radio>
							<Radio label="5">补料单</Radio>
						</RadioGroup>
					</FormItem>

					<FormItem label="经销商">
						<Select style="width: 300px;" filterable v-model="establishMsg.companyId" @on-change="getClient(establishMsg.companyId)"
						 placeholder="请选择经销商...">
							<Option v-for="(item,index) in companyData" :value="item.id" :key="index">{{ item.name }}</Option>
						</Select>

						

					</FormItem>

					<FormItem label="经销商电话">
						<Input style="width: 300px;" disabled="disabled" v-model="establishMsg.leaderTel" placeholder="请输入经销商电话..."></Input>
					</FormItem>

					<FormItem label="经销商地址">
						<Input style="width: 300px;" disabled="disabled" v-model="establishMsg.companyAddress " placeholder="请输入经销商地址..."></Input>
					</FormItem>

					<FormItem label="客户">
						<Select style="width: 300px;" filterable v-model="establishMsg.client" @on-change="getclientorder(establishMsg.client)" placeholder="请选择客户...">
							<Option v-for="item in clientdata" :value="item.userId" :key="item.userId">{{ item.customerName }}</Option>
						</Select>
					</FormItem>

					<FormItem label="源订单">

						<Select style="width: 260px;" v-show="manual==false" filterable v-model="establishMsg.customOrderId" @on-change="getclientorderNo(establishMsg.customOrderId)" placeholder="请选择源订单...">
							<Option v-for="item in customOrderdata" :value="item.orderId" :key="item.orderId">{{ item.orderNo }}</Option>
						</Select>

						<Input v-show="manual==true" style="width: 260px;" v-model="establishMsg.aftersaleOrderNo" placeholder="请输入源订单编号"></Input>

						<Button v-show="manual==false" size="small" type="primary" @click="manual=!manual">手动</Button>
						<Button v-show="manual==true" size="small" type="primary" @click="manual=!manual">筛选</Button>
					</FormItem>

					<div v-show="establishMsg.type=='4'">
						<FormItem label="反馈单编号">
							<Input v-model="'H'+establishMsg.aftersaleOrderNo" disabled="disabled" placeholder=""></Input>
						</FormItem>

						<FormItem label="问题描述">
							<Input type="textarea" v-model="establishMsg.notes" placeholder="请输入问题描述..."></Input>
						</FormItem>

						<FormItem label="建议&意见">
							<Input type="textarea" v-model="establishMsg.information" placeholder="请输入建议&意见..."></Input>
						</FormItem>
					</div>

					<div v-show="establishMsg.type=='5'">
						<FormItem label="补料单编号">
							<Input v-model="'H'+establishMsg.aftersaleOrderNo" disabled="disabled" placeholder=""></Input>
						</FormItem>

						<FormItem label="费用类型">
							<div>
								<Checkbox @on-change="changechargeAmount" :value="showchargeAmount">收费</Checkbox>
								<Input v-show="showchargeAmount==true" style="width: 200px;" v-model="establishMsg.chargeAmount" placeholder="请输入收费金额 单位元"></Input>
							</div>
							<div>
								<Checkbox @on-change="changefreeAmount" :value="showfreeAmount">免费</Checkbox>
								<Input v-show="showfreeAmount==true" style="width: 200px;" v-model="establishMsg.freeAmount" placeholder="请输入免费金额 单位元"></Input>
							</div>
						</FormItem>

						<!--<FormItem label="收费金额">
							<Input v-model="establishMsg.chargeAmount" placeholder="请输入费用金额 单位元"></Input>
						</FormItem>

						<FormItem label="免费金额">
							<Input v-model="establishMsg.freeAmount" placeholder="请输入免费金额 单位元"></Input>
						</FormItem>-->

						<FormItem label="补料产品">

							<div class="order_product">

								<div class="p_itemAdd">
									<Button @click="addProduct">新增</Button>
								</div>

								<ul>
									<li class="p_item" v-for="(item,index) in orderProducts">

										<div class="op" @click="delProduct(index)">
											<Button shape="circle" icon="ios-trash-outline"></Button>
										</div>
										<FormItem label="产品类型">
											<Select style="width: 300px;" v-model="item.type" @on-change="puttype(index)" placeholder="请选择产品类型...">
												<Option value="0">橱柜(J)</Option>
												<Option value="1">衣柜(B)</Option>
												<Option value="2">成品家具(J)</Option>
												<Option value="3">电器(J)</Option>
												<Option value="4">五金(J)</Option>
												<Option value="5">样块(Y)</Option>
											</Select>
										</FormItem>

										<FormItem label="产品系列" v-show="item.type==0||item.type==1">
											<Select style="width: 300px;" v-model="item.series" placeholder="请选择产品系列...">
												<Option value="0">定制实木 </Option>
												<!--<Option value="1">特供实木</Option>-->
												<Option value="2">美克</Option>
												<Option value="3">康奈</Option>
												<Option value="4">慧娜</Option>
												<Option value="5">模压</Option>
											</Select>
										</FormItem>

										<FormItem label="产品颜色" v-show="item.type==0||item.type==1">
											<Input style="width: 300px;" v-model="item.color" placeholder="请输入产品颜色..."></Input>
										</FormItem>

										<FormItem label="门型" v-show="item.type==0||item.type==1">
											<Input style="width: 300px;" v-model="item.door" placeholder="请输入门型..."></Input>
										</FormItem>
									</li>
								</ul>

							</div>
						</FormItem>
						<!--<FormItem label="原因">
						<Input type="textarea" v-model="establishMsg.note" placeholder="请输入原因..."></Input>
					</FormItem>-->

						<FormItem label="备注">
							<Input type="textarea" v-model="establishMsg.notes" placeholder="请输入备注..."></Input>
						</FormItem>

					</div>

					<FormItem label="附件">
						<div class="pl">

							<div class="demo-upload-list" v-for="(item,index) in establishMsg.files">

								<template>
									<img :src="item.imagePath">
									<div class="demo-upload-list-cover">
										<Icon type="ios-eye-outline" @click.native="handleView(item.imagePath)"></Icon>
										<Icon type="ios-trash-outline" @click.native="handleRemove(index)"></Icon>
									</div>
								</template>

							</div>
							<Upload multiple ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFiles" style="display: inline-block;width:58px;">
								<div style="width: 58px;height:58px;line-height: 58px;">
									<Icon type="ios-camera" size="20"></Icon>
								</div>
							</Upload>
						</div>
					</FormItem>

					<FormItem label="操作人">

						<Select style="width: 300px;" filterable v-model="establishMsg.operator" placeholder="请选择操作人...">
							<Option v-for="(item,index) in operatorData" :value="item.id" :key="item.id">{{item.userName}}</Option>
						</Select>
					</FormItem>

					<FormItem label="日期">
						<DatePicker type="date" v-model="establishMsg.created" placeholder="请选择日期" style="width: 300px" @on-change="getTime"></DatePicker>
					</FormItem>

					<FormItem label="时间">
						<TimePicker v-model="establishMsg.createdTime" format="HH:mm:ss" placeholder="请选择时间" style="width: 300px"></TimePicker>
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
				
				establishModel: false,
				showchargeAmount: false,
				showfreeAmount: false,
				manual: false,

				establishMsg: {
					orderNo: "",
					companyId: "",
					notes: "",
					type: "4",
					customOrderId: "",
					information: "",
					files: []
				},
				
				customOrderdata:[],
				companyData:[],
				operatorData:[],
				clientdata:[],
				
				uploadpathdata: '/api/f/aftersales/v2/aftersaleApplies/addfiles',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},
				
				orderProducts:[],


			};
		},

		methods: {
			
			goback:function  () {
				this.$emit('openWindow', ('aftersalemanage'), ('售后管理'), ('10'), ('aftersalemanage'), ('aftersalemanage'))
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
			
			
			
			
			//根据经销商查询客户
			getClient: function(cid) {
				var that = this
				that.establishMsg.client = ""
				that.establishMsg.customOrderId = ""

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'get',
					url: '/api/f/aftersales/v2/dealers/' + cid + '/customers',

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.clientdata = data

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})
			},
			
			getclientorder: function(obj) {
				this.establishMsg.customOrderId = ""

				for(var i = 0; i < this.clientdata.length; i++) {

					if(obj == this.clientdata[i].userId) {

						this.customOrderdata = this.clientdata[i].customOrderList
					}

				}

			},

			getclientorderNo: function(obj) {

				for(var i = 0; i < this.customOrderdata.length; i++) {

					if(obj == this.customOrderdata[i].orderId) {

						this.establishMsg.aftersaleOrderNo = this.customOrderdata[i].orderNo

					}

				}

			},
			
			changechargeAmount: function(val) {

				if(val == true) {
					this.showchargeAmount = true;
					this.establishMsg.chargeAmount = "0"
				} else {
					this.showchargeAmount = false;
					this.establishMsg.chargeAmount = ""
				}

			},

			changefreeAmount: function(val) {
				if(val == true) {
					this.showfreeAmount = true;
					this.establishMsg.freeAmount = "0"
				} else {
					this.showfreeAmount = false;
					this.establishMsg.freeAmount = ""
				}

			},
			
			
			//追加订单产品输入条目
			addProduct: function() {
				var obj = {
					type: "",
					series: "",
					color: "",
					door: "",

				}

				this.orderProducts.unshift(obj)
			},

			delProduct: function(index) {
				this.orderProducts.splice(index, 1)
			},
			
			
			getTime: function(val) {
				this.establishMsg.created = val
			},





			

		

			formeReset() {
				this.establishMsg={
					orderNo: "",
					companyId: "",
					notes: "",
					type: "4",
					customOrderId: "",
					information: "",
					files: []
				}
				
			},

			

		},

		mounted: function() {

			var that = this;
			
			this.axios({
				method: 'get',
				url: '/api/f/dealers/companies?status=1&pageNum=1&pageSize=20000',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data
				that.companyData = data.companyList

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

			this.axios({
				method: 'get',
				url: '/api/f/depts/members',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var orderDatacache = {}
				var data = res.data.data
				that.operatorData = data
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