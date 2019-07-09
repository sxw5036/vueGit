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
						<Select filterable v-model="establishMsg.companyId" @on-change="getClient(establishMsg.companyId)"
						 placeholder="请选择经销商...">
							<Option v-for="(item,index) in companyData" :value="item.id" :key="index">{{ item.name }}</Option>
						</Select>

						

					</FormItem>

					<FormItem label="经销商电话">
						<Input disabled="disabled" v-model="establishMsg.leaderTel" placeholder="请输入经销商电话..."></Input>
					</FormItem>

					<FormItem label="经销商地址">
						<Input  disabled="disabled" v-model="establishMsg.companyAddress " placeholder="请输入经销商地址..."></Input>
					</FormItem>

					<FormItem label="客户">
						<Select  filterable v-model="establishMsg.client" @on-change="getclientorder(establishMsg.client)" placeholder="请选择客户...">
							<Option v-for="item in clientdata" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>
					</FormItem>
					
					<FormItem label="业务经理">
						
						<Select filterable v-model="establishMsg.customerManager" placeholder="请选择经销商业务经理...">
									<Option v-for="item in dealerMembers" :value="item.userId" :key="item.userId">{{ item.userName}}</Option>
								</Select>
					</FormItem>

					<FormItem label="源订单">

						<Select v-show="manual==false" filterable v-model="establishMsg.customOrderId" @on-change="getclientorderNo(establishMsg.customOrderId)" placeholder="请选择源订单...">
							<Option v-for="item in customOrderdata" :value="item.orderId" :key="item.orderId">{{ item.orderNo }}</Option>
						</Select>

						<Input v-show="manual==true" v-model="establishMsg.aftersaleOrderNo" placeholder="请输入源订单编号"></Input>

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
						<button class="details_opBut linkBlock smallsize" @click="sureAdd" v-show="establishMsg.type=='4'">创建反馈单</button>
						<button class="details_opBut linkBlock smallsize" @click="sureprodAdd" v-show="establishMsg.type=='5'">创建补料单</button>
	
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
					aftersaleOrderNo:'',
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
				dealerMembers:[],
				
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
					
					
					this.establishMsg.files.push(Res[i])
					

				}

			},
			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(fileid, index) {

				this.establishMsg.files.splice(index,1)

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
				
				
				
				
				if(!cid){
					return false;
				}
				
				this.getDealerMembers(cid)
				
				
				
				
				
				that.establishMsg.client = ""
				that.establishMsg.customOrderId = ""
				
				for(var i = 0; i < this.companyData.length; i++) {
					if(cid == this.companyData[i].id) {
						
						this.establishMsg.leaderTel=this.companyData[i].leaderTel;
						this.establishMsg.companyAddress=this.companyData[i].address
					}
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'get',
					url: '/api/f/customers?companyId=' + cid,

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
			
			
			//查询经销商下员工
			
			getDealerMembers:function  (cid) {
				
				let that=this
				
				this.axios({
					method: 'get',
					url: '/api/f/depts/members?companyId=' + cid,

				}).then(function(res) {
					
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					
					
					that.dealerMembers=data


				}).catch(function(err) {

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


             sureAdd: function() {
				var manual = this.manual
				var establishMsg = this.establishMsg

				var companyId = establishMsg.companyId
				var notes = establishMsg.notes
				var type = establishMsg.type
				var customOrderId = establishMsg.customOrderId
				var information = establishMsg.information
				var aftersaleOrderNo = establishMsg.aftersaleOrderNo
				var customerId = establishMsg.client
				var created = establishMsg.created
				var operator = establishMsg.operator
				var createdTime = establishMsg.createdTime
				
				var customerManager=establishMsg.customerManager

				//
				var fileIdsdata = []

				for(var i = 0; i < this.establishMsg.files.length; i++) {
					fileIdsdata.push(this.establishMsg.files[i].fileId)
				}

				var fileIds = fileIdsdata.join(",")

				if(type == "" || type == null) {
					this.$Message.error('售后单类型不能为空！');
					return false;
				} else if(companyId == "" || companyId == null) {
					this.$Message.error('经销商不能为空！');
					return false;
				} else if(manual == true && aftersaleOrderNo.trim().length == 0) {
					this.$Message.error('源订单不能为空！');
					return false;
				}  else if( aftersaleOrderNo.trim().length>50) {
					this.$Message.error('源订单编号长度不能超过50！');
					return false;
				}else if(customerManager==""||customerManager==null) {
					this.$Message.error('经销商业务经理不能为空！');
					return false;
				} else
					/*if(customOrderId==""||customOrderId==null){
					this.$Message.error('源订单不能为空！');
					return false;
				}else*/
					if(notes == "" || notes == null || notes.trim().length == 0) {
						this.$Message.error('问题描述不能为空！');
						return false;
					} else if( notes.trim().length > 200) {
						this.$Message.error('问题描述文字长度不能超过200！');
						return false;
					} else if(information == "" || information == null || information.trim().length == 0) {
					this.$Message.error('建议&意见不能为空！');
					return false;
				} else if(information.trim().length >200) {
					this.$Message.error('建议&意见文字长度不能超过200！');
					return false;
				} else if(operator == "" || operator == null) {
					this.$Message.error('操作人不能为空！');
					return false;
				} else if(created == "" || created == null) {
					this.$Message.error('日期不能为空！');
					return false;
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				/*' + this.pathstatus + pathurl + '*/
				this.axios({
					method: 'post',
					url: '/api/f/aftersales/v2/aftersale',
					data: {
						companyId: companyId,
						notes: notes,
						type: type,
						customOrderId: manual == true || customOrderId == "" ? undefined : customOrderId,
						information: information,
						fileIds: fileIds,
						no: aftersaleOrderNo,
						customerId: customerId == "" ? undefined : customerId,
						operator: operator,
						created: createdTime == "" || createdTime == undefined ? created + ' 00:00:00' : created + ' ' + createdTime,
						/*created:*/

					}

				}).then(function(res) {
					setTimeout(msg, 100);

					var verify = [{
							"name": "companyId",
							"note": "经销商"
						},
						{
							"name": "notes",
							"note": "问题描述 "
						},
						{
							"name": "type",
							"note": "售后类型"
						},
						{
							"name": "customOrderId",
							"note": "源订单 "
						},
						{
							"name": "information",
							"note": "建议"
						},

					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					var data = res.data.data
					that.$Message.success("创建成功")
					that.formeReset()
					
					//that.tableData.push(data)
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},
			
			
			
			sureprodAdd: function() {

				var manual = this.manual

				var establishMsg = this.establishMsg
				var orderProducts = []
				var companyId = establishMsg.companyId
				var notes = establishMsg.notes
				var type = establishMsg.type
				var customOrderId = establishMsg.customOrderId

				var aftersaleOrderNo = establishMsg.aftersaleOrderNo

				var customerId = establishMsg.client
				var charge = establishMsg.charge
				var chargeAmount = establishMsg.chargeAmount
				var freeAmount = establishMsg.freeAmount
				var type = establishMsg.type
				var series = establishMsg.series
				var color = establishMsg.color
				var door = establishMsg.door

				var created = establishMsg.created
				var operator = establishMsg.operator
				var createdTime = establishMsg.createdTime

				//
				var fileIdsdata = []

				for(var i = 0; i < this.establishMsg.files.length; i++) {
					fileIdsdata.push(this.establishMsg.files[i].fileId)
				}

				var fileIds = fileIdsdata.join(",")

				if(type == "" || type == null) {
					this.$Message.error('售后单类型不能为空！');
					return false;
				} else if(companyId == "" || companyId == null) {
					this.$Message.error('经销商不能为空！');
					return false;
				} else if(manual == true && aftersaleOrderNo.trim().length == 0) {
					this.$Message.error('源订单不能为空！');
					return false;
				}
				/*if(customOrderId==""||customOrderId==null){
					this.$Message.error('源订单不能为空！');
					return false;
				}else*/
				/* if(chargeAmount == ""&&this.showchargeAmount==true) {
					this.$Message.error('收费金额不能为空！');
					return false;
				} else if(freeAmount == "" &&this.showfreeAmount==true) {
					this.$Message.error('免费金额不能为空！');
					return false;
				} else*/
				if(operator == "" || operator == null) {
					this.$Message.error('操作人不能为空！');
					return false;
				} else if(created == "" || created == null) {
					this.$Message.error('日期不能为空！');
					return false;
				} else if(this.orderProducts.length == 0) {
					this.$Message.error('补料单产品不能为空！');
					return false;
				} else {

					for(var i = 0; i < this.orderProducts.length; i++) {
						var data = this.orderProducts[i];
						var prodtype = data.type
						var series = data.series
						var color = data.color
						var door = data.door

						if(prodtype == "" || prodtype == null) {

							this.$Message.error('第' + (i + 1) + '个产品类型不能为空');
							return false;
						} else if(series == "" && prodtype == 0) {

							this.$Message.error('第' + (i + 1) + '个产品系列不能为空');
							return false;
						} else if(series == "" && prodtype == 1) {

							this.$Message.error('第' + (i + 1) + '个产品系列不能为空');
							return false;
						} else if(color == "" && prodtype == 0) {

							this.$Message.error('第' + (i + 1) + '个产品颜色不能为空');
							return false;
						} else if(color == "" && prodtype == 1) {
							this.$Message.error('第' + (i + 1) + '个产品颜色不能为空');
							return false;
						} else if(door == "" && prodtype == 0) {
							this.$Message.error('第' + (i + 1) + '个产品门型不能为空');
							return false;
						} else if(door == "" && prodtype == 1) {
							this.$Message.error('第' + (i + 1) + '个产品门型不能为空');
							return false;
						}

						var obj = {
							type: data.type == "" ? undefined : data.type,
							series: data.series == "" ? undefined : data.series,
							color: data.color == "" ? undefined : data.color,
							door: data.door == "" ? undefined : data.door,
						}

						orderProducts.push(obj)

					}
				}

				/*for(var i = 0; i < this.produceOrderDtos.length; i++) {
						var data = this.produceOrderDtos[i];
						var way = data.way;
						var no = data.no;
						var coordinationName = data.coordinationName;
						var coordinationBank = data.coordinationBank;
						var coordinationAccount = data.coordinationAccount
						var amount = data.amount;
						var count = data.count;
						var completionTime = data.completionTime;
						var notes = data.notes;
						var type = data.type;

						if(way == "1") {

							if(type == "" || type == null) {
								this.$Message.error('第' + (i + 1) + '个拆单类型不能为空');
								return false;
							} else if(no == "" || no == null) {
								this.$Message.error('第' + (i + 1) + '个拆单编号不能为空');
								return false;
							} else if(amount == "" || amount == null) {
								this.$Message.error('第' + (i + 1) + '个外协金额不能为空');
								return false;
							} else if(coordinationName == "" || coordinationName == null) {
								this.$Message.error('第' + (i + 1) + '个外协厂家名称不能为空');
								return false;
							} else if(coordinationAccount == "" || coordinationAccount == null) {
								this.$Message.error('第' + (i + 1) + '个外协厂家开账户不能为空');
								return false;
							} else if(coordinationBank == "" || coordinationBank == null) {
								this.$Message.error('第' + (i + 1) + '个外协厂家开户行不能为空');
								return false;
							} else if(count == "" || count == null) {
								this.$Message.error('第' + (i + 1) + '个数量不能为空');
								return false;
							}

						} else {
							if(type == "" || type == null) {
								this.$Message.error('第' + (i + 1) + '个拆单类型不能为空');
								return false;
							} else if(way == "" || way == null) {
								this.$Message.error('第' + (i + 1) + '个生产方式不能为空');
								return false;
							} else if(no == "" || no == null) {
								this.$Message.error('第' + (i + 1) + '个拆单编号不能为空');
								return false;
							} else if(count == "" || count == null) {
								this.$Message.error('第' + (i + 1) + '个数量不能为空');
								return false;
							}

						}

					}
*/

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				/*' + this.pathstatus + pathurl + '*/
				this.axios({
					method: 'post',
					url: '/api/f/aftersales/v2/aftersale',
					data: {
						companyId: companyId,
						notes: notes,
						type: type,
						customOrderId: manual == true ? undefined : customOrderId,
						fileIds: fileIds,
						no: aftersaleOrderNo,
						customerId: customerId,
						charge: charge,
						chargeAmount: chargeAmount,
						orderProducts: orderProducts,
						operator: operator,
						created: createdTime == "" || createdTime == undefined ? created + ' 00:00:00' : created + ' ' + createdTime,

					}

				}).then(function(res) {
					setTimeout(msg, 100);

					var verify = [{
							"name": "companyId",
							"note": "经销商"
						},
						{
							"name": "notes",
							"note": "问题描述 "
						},
						{
							"name": "type",
							"note": "售后类型"
						},
						{
							"name": "customOrderId",
							"note": "源订单 "
						},
						{
							"name": "information",
							"note": "建议"
						},

					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					var data = res.data.data
					that.$Message.success("创建成功")
					setTimeout(msg, 100);
					that.$emit('openWindow', ('aftersalemanage'), ('售后管理'), ('11'), ('aftersalemanage'), ('aftersalemanage'))
					
					//that.tableData.push(data)
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},


			formeReset() {
				this.establishMsg={
					aftersaleOrderNo:'',
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
	
	
		.Drawer_op {
		margin-left: 80px;
	}
	
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
	
	.orserBCmsg {
		display: block;
		padding: 8px;
	}
	
	.orserBCmsg li {
		width: 100%;
		display: inline-block;
		line-height: 20px;
		font-size: 12px;
		margin-bottom: 10px;
	}
	
	.orserBCmsg span {
		display: block;
		float: left;
		width: 65px;
		line-height: 20px;
		text-align: left;
		margin-right: 6px;
	}
	
	.orserBCmsg p {
		float: left;
		width: 139px;
	}
	
	.pushscheme {
		display: block;
	}
	
	.pushscheme textarea {
		display: block;
		width: 100%;
		height: 100px;
		padding: 0px 5px;
		border-radius: 6px;
		border: solid 1px #EEEEEE;
	}
	
	.pushscheme_up {
		display: block;
		line-height: 20px;
		padding: 8px 0px;
		font-size: 14px;
		padding-left: 80px;
	}
	
	.demo-upload-list {
		display: inline-block;
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
		margin-right: 4px;
	}
	
	.demo-upload-list img {
		width: 100%;
		height: 100%;
	}
	
	.demo-upload-list-cover {
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);
	}
	
	.demo-upload-list:hover .demo-upload-list-cover {
		display: block;
	}
	
	.demo-upload-list-cover i {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}
	
	.openOrdetails {
		display: inline-block;
		width: 100%;
	}
	
	.openOrdetails_lf {
		width: 25%;
		float: left;
		height: 500px;
		overflow: auto;
		box-sizing: border-box;
		border: solid 1px #EEEEEE;
	}
	
	.openOrdetails_rt {
		padding-left: 16px;
		width: 75%;
		float: left;
		height: 500px;
		overflow: auto;
	}
	
	.DemandOpen {
		display: block;
		width: 100%;
		height: 600px;
		overflow: auto;
	}
	
	.DemandOpen ul {
		display: block;
	}
	
	.DemandOpen ul li img {
		display: block;
		width: 100%;
	}
	
	.designers_head {
		padding: 8px;
		background: #EEEEEE;
		color: #AAAAAA;
		font-size: 12px;
	}
	
	.designers_head p {
		line-height: 1.5em;
	}
	
	.designers {
		display: block;
	}
	
	.designers_designFile {
		display: block;
		width: 100%;
		max-height: 400px;
		overflow: auto;
	}
	
	.designers_op {
		padding-top: 16px;
		display: block;
		border-top: solid 1px #EEEEEE;
		text-align: right;
	}
	
	.designers_designFile {
		margin-top: 16px;
		border: solid 1px #EEEEEE;
		box-sizing: border-box;
		padding: 5px;
	}
	
	.designers_designFile p {
		text-align: center;
	}
	
	.designers_designFile li {
		margin-bottom: 10px;
	}
	
	.designers_designFile li img {
		display: block;
		width: 100%;
	}
	
	.designers .pl {
		padding-left: 80px;
		padding-bottom: 16px;
	}
	
	.designer_order {
		position: relative;
	}
	
	.designer_order .designer_lay {
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.designer_order .designer_lay ul {
		display: block;
		width: 100px;
	}
	
	.designer_order .designer_lay ul li {
		width: 100px;
		line-height: 30px;
	}
	
	.designer_order .designer_lay ul li a {
		color: #000000;
	}
	
	.designer_order .designer_lay ul li.ac a {
		color: cornflowerblue;
	}
	
	.designer_center {
		padding-left: 100px;
		padding-right: 20px;
		max-height: 600px;
		overflow: auto;
	}
	
	.designer_order h5.lay_Anchor {
		padding-bottom: 10px;
	}
	
	.designer_order .order_msg {
		padding: 10px;
		border: solid 1px whitesmoke;
	}
	
	.designer_order .order_demand {
		border: solid 1px whitesmoke;
		padding: 10px;
	}
	
	.designer_order .order_demand ul {
		display: block;
		width: 100%;
	}
	
	.designer_order .order_demand ul li {
		padding: 10px;
		background: #EEEEEE;
		position: relative;
		margin-bottom: 10px;
	}
	
	.designer_order .order_demand ul li .order_demandMsg {
		position: absolute;
		top: 10px;
		left: 10px;
		width: 200px;
		height: 200px;
		box-sizing: border-box;
		border-right: solid 1px #E8E8E8;
		overflow: hidden;
	}
	
	.designer_order .order_demand ul li .order_demandMsg p {
		line-height: 2em;
	}
	
	.designer_order .order_demand ul li .order_demandCenter {
		padding-right: 10px;
		padding-left: 220px;
		height: 200px;
		overflow: auto;
	}
	
	.designer_order .order_demand ul li .order_demandCenter .designer_img {
		float: left;
		width: 130px;
		height: 130px;
		display: block;
		padding: 10px;
		margin-right: 10px;
		background: white;
		margin-bottom: 10px;
	}
	
	.designer_order .order_demand ul li .order_demandCenter .designer_img h5 {
		display: block;
		width: 110px;
		height: 110px;
		background-position: 50% 50%;
		background-size: cover;
	}
	
	.designer_order .order_project {
		margin-top: 20px;
	}
	
	.des_img img {
		display: block;
		width: 100%;
	}
	
	.order_product ul li.p_item {
		background: whitesmoke;
		padding: 10px;
		margin-bottom: 10px;
		position: relative;
	}
	
	.order_product ul li.p_item .op {
		z-index: 9;
		position: absolute;
		top: 10px;
		right: 10px;
	}
	
	.order_product .p_itemAdd {
		margin-bottom: 10px;
	}
	
	.order_product ul li .item {
		margin-bottom: 10px;
	}
	
	.order_center {
		display: inline-block;
		width: 100%;
	}
	
	.order_center .item {
		width: 50%;
		height: 500px;
		overflow: auto;
		float: left;
		box-sizing: border-box;
	}
	
	.order_center .item .ordermsg li {
		line-height: 30px;
	}
	
	.msg_center .item {
		display: block;
		width: 100%;
		min-height: 20px;
		font-size: 14px;
		position: relative;
		margin-bottom: 10px;
	}
	
	.msg_center .item span.lable {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100px;
	}
	
	.msg_center .item .center {
		padding-left: 80px;
		line-height: 1.5em;
	}
</style>