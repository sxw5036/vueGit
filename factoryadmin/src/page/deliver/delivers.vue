<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>发货管理</BreadcrumbItem>
			</Breadcrumb>
			
			</div>
			<div>
			<Row>
				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>今日计划发货</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">32</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>
				
				
				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>今日发货完成</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">32</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>
				
				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>今日发货笔数</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">32</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>

				<Col span="9">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center border">
							<h3 class="head">数据变动信息列表</h3>
							<div class="panel_con">
								<div class="head-statement-4">
									<ul>
										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加客户马小跳</p>
											<small class="Time">13：30</small>
										</li>
										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加客户马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加客户马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加客户马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加客户商马小跳</p>
											<small class="Time">13：30</small>
										</li>
									</ul>

								</div>
							</div>

						</div>
					</div>
				</div>
				</Col>
			</Row>
		</div>
		
		
		<!---->
		
		<div class="table_nav_iv">
			<div class="operation_box">
				<div class="active">
					<!---->
					<div class="ui_operateLeft" style="line-height: 32px;">

						<ul class="tab">
							<li class="tab_item">
								<div class="lable">订单编号</div>
								<div class="form_nav">
									<Input v-model="ordernumber" placeholder="请输入订单编号..." style="width: 200px;"></Input>
								</div>
							</li>

							
							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button icon="ios-search" @click="serchorder">搜索</Button>
								    <Button  @click="newData"   type="primary" >重置</Button>
								</div>
							</li>
							
							

						</ul>
						
					</div>

					<div class="ui_operateRight">
						
						<!---->
						
						
						<ul class="tab">
							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button    type="primary" >导入</Button>
									<Button    type="primary" >导出</Button>
									<Button    type="primary"  @click="newOpen">新建发货</Button>
								   <!-- <Button type="primary" @click="openScanWindow">扫码发货</Button>-->
								</div>
							</li>

							

						</ul>

					</div>
				</div>

			</div>

			<div>

				<Table :columns="columns1" :data="data1" border @on-select="pickselect" @on-select-all="pickselectAll" @on-select-all-cancel="cancelselectAll" @on-select-cancel="cancelselect" ref="selection"></Table>
				
				<div class="ui_tableBottom">

					<div class="ui_operate">

					</div>

					<div class="ui_page">
						<Page :total="totalpage" :page-size="pageSize" show-total @on-change="changepage" :current="currents" show-elevator/>
					</div>

				</div>

			</div>
		</div>
		
		<!---->
		
		
			
	
		<Drawer v-model="modelde" title="生成发货单" width="500" @on-close="modelde=false,scanWindow=true">
			<!---->
			
			
			<Form :label-width="80">
				
				<FormItem label="包裹编号">
					<span v-for="(item,index) in scanArry">{{item.barcode}},</span>
				</FormItem>
				
				<FormItem label="收货人">
					<Input v-model="delivername" placeholder="请输入客户姓名..." style="width:80%;"></Input>
				</FormItem>
				<FormItem label="收货人电话">
					<Input v-model="delivertel" placeholder="请输入客户姓名..." style="width:80%;"></Input>
				</FormItem>
				<FormItem label="收货地址">
					<Input v-model="deliveraddress" placeholder="请输入发货地址..." style="width:80%; "></Input>
				</FormItem>

				<FormItem label="物流公司">
					<Select v-model="delivercom" style="width:80%;" placeholder="请选择物流公司...">
						<Option v-for="item in delivercompany" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>
				<FormItem label="物流单号">
					<Input v-model="delivernum" placeholder="请输入物流单编号..." style="width: 80%;"></Input>
				</FormItem>
				<FormItem label="备注">
					<Input type="textarea" :rows="2" v-model="delivernotes" placeholder="请输入相关备注..." style="width: 80%; "></Input>
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
			<div class="demo-drawer-footer">
				<!--<Button type="error" @click="modelde = false">关闭</Button>-->
				<Button type="primary" @click="setdeliver">确认</Button>
			</div>

			<!-- <div style="padding-left: 5%;">  收货人：<Input  v-model="delivername"  placeholder="请输入客户姓名..." style="width:82%;margin: 10px;"></Input></div>
			<div>收货人电话：<Input  v-model="delivertel"  placeholder="请输入客户电话..." style="width:78%; margin: 5px;"></Input></div>
			<div style="padding-left: 2.3%;">收货地址：<Input  v-model="deliveraddress" placeholder="请输入发货地址..." style="width:80%; margin: 10px;"></Input></div>
			<div style="padding-left: 2.3%;">物流公司：<Select v-model="delivercom" style="width:80%; margin:5px;" placeholder="请选择物流公司...">
						<Option v-for="item in delivercompany" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select></div>
			<div style="padding-left: 2.3%;">物流单号：<Input  v-model="delivernum" placeholder="请输入物流单编号..." style="width: 80%; margin:10px;"></Input></div>
			<div style="padding-left: 7%;">备注：<Input   type="textarea"  :rows="2" v-model="delivernotes"  placeholder="请输入相关备注..." style="width: 84%; margin:10px;"></Input></div> -->
			<!-- 	<div style="padding-left: 2.3%; margin-top: 10px;">上传附件：
			    <div style="margin-top:10px; padding:2% 13%; ">
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
			    		<img :src="imgName"  style="width: 80%;">
			    			  <div slot="footer">
			    				<Button type="error" size="large"  @click="visible=false">关闭</Button>
			    				</div>
			    	</Modal>
			    </div>
			</div>
			
			<div class="demo-drawer-footer">
				<Button type="error" @click="modelde = false">关闭</Button>
				<Button type="primary" @click="setdeliver">确认</Button>
			</div> -->
		</Drawer>

		<Modal v-model="scanWindow" title="扫码发货" width="800px" >

			<div class="scanWindow">
				<div class="scanWindow_input">
					<!--<Input id="scanInput" v-model="scanObj" readonly="readonly" placeholder="请扫码"></Input>-->
					<Input v-show="scanMotion==true" style="width: 400px;" type="text" id="scanInput_z" v-model="scanObj" search placeholder="请扫码" @on-search="barcodeChange"></Input>
					<Input v-show="scanMotion==false" style="width: 400px;" type="text" id="scanInput_d" v-model="scanObj" placeholder="请输入包裹编号" @on-enter="barcodeEnter(scanObj)" /></Input>
					<Button v-show="scanMotion==true" size="small" type="primary" @click="changeMotion(!scanMotion)">手动</Button>
					<Button v-show="scanMotion==false" size="small" type="primary" @click="changeMotion(!scanMotion)">扫码</Button>
				</div>

				<div class="scanWindow_table" v-show="scanArry.length>0">
					<Table :columns="scanTableHead" :data="scanArry" border></Table>
				</div>

			</div>

			<div slot="footer">
				<Button type="primary" @click="orderdetail">生成发货单</Button>
			</div>
		</Modal>

	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {

				scanWindow: false,
				scanMotion: true,
				scanAutofocus: false,
				scanObj: "",
				scanTableHead: [{
						title: '包裹编号',
						key: 'barcode',
						align: 'center',

					},
					{
						title: '所属订单',
						key: 'orderNo',
						align: 'center',

					},

					{
						title: '经销商姓名',
						key: 'dealerName',
						align: 'center',

						ellipsis: true,
					},
					{
						title: '经销商电话',
						key: 'dealerTel',
						align: 'center',

						ellipsis: true,

					},

					{
						title: '包裹类型',

						align: 'center',

						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '柜体'
							} else if(row.type == 1) {
								text = '门板-自产'
							} else if(row.type == 2) {
								text = '门板-外协'
							} else if(row.type == 3) {
								text = '特供实木'
							} else if(row.type == 4) {
								text = '五金'
							} else if(row.type == 5) {
								text = '样板'
							}

							return h('div', text);
						}
					},

					{
						title: '操作',
						width: 100,
						align: 'center',
						fixed: 'right',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small',
										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px',

									},
									on: {
										click: () => {

											/*	var barcode = this.scanArry[params.index].barcode*/
											var data = this.data1
											this.data1 = []

											this.scanArry.splice(params.index, 1)

											for(var i = 0; i < data.length; i++) {

												this.data1.push(data[i])
												this.data1[i]._checked = false

												var barcode = data[i].barcode;

												for(var n = 0; n < this.scanArry.length; n++) {

													if(barcode == this.scanArry[n].barcode) {
														this.data1[i]._checked = true

													}

												}

											}

											this.getbarcodeChecked()

										}
									}
								}, '删除'),
							])

						}

					},
				],
				scanArry: [],
				barcodeCache: {}, //全部包裹编号缓存
				barcodeChecked: {}, //选中的包裹
				awaitcancel: {}, //
				a: [],
				ordernumber: '',
				ordertime: '',

				choseid: [],
				chosetype: [],
				delivercom: '',
				delivernum: '',
				deliveraddress: '',
				delivername: '',
				delivertel: '',
				delivernotes: '',
				delivercompany: [],
				//分页

				pageSize: 20,
				pageNum: 0,
				totalpage: 0,
				currents: 1,
				ifsearch: false,
				//上传附件数据
				uploadList: [],
				uploadpathdata: '/api/f/dispatchs/dispatchId/files',
				visible: false,
				defaultList: [],
				imgName: '',
				uparry: {
					multipartFileList: [],
					fileIds: [],

				},
				//弹窗

				modelde: false,
				Modelpack: false,
				//权限
				operation: {},
				//数据 

				addressdeliver: '',
				namedeliver: '',
				telphonedeliver: '',
				helps: false,
				data1: [],
				columns1: [{
						title: '选择',
						type: 'selection',
						width: 80,
						align: 'center'
					},
					{
						title: '包裹编号',
						key: 'barcode',
						align: 'center',
					
						// 						render: (h, params) => {
						// 							var barcode = params.row.barcode
						// 							return h('div', {
						// 									style: {
						// 										color: 'blue',
						// 										textDecoration: 'underline',
						// 										cursor: 'pointer'
						// 						
						// 									},
						// 						
						// 									on: {
						// 										click: () => {
						// 											this.Modelpack = true;
						// 											var data = this.data1[params.index]
						// 											this.packMsg = data
						// 											
						// 						
						// 										}
						// 									},
						// 								},
						// 								barcode)
						// 						}
					},
					{
						title: '所属订单',
						key: 'orderNo',
						align: 'center',
						
					},

					{
						title: '经销商姓名',
						key: 'dealerName',
						align: 'center',
						
						ellipsis: true,
					},
					{
						title: '经销商电话',
						key: 'dealerTel',
						align: 'center',
						
						ellipsis: true,

					},

					{
						title: '包裹类型',
						key: 'typeName',
						align: 'center',
						
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '柜体'
							} else if(row.type == 1) {
								text = '门板-自产'
							} else if(row.type == 2) {
								text = '门板-外协'
							} else if(row.type == 3) {
								text = '特供实木'
							} else if(row.type == 4) {
								text = '五金'
							} else if(row.type == 5) {
								text = '样板'
							}
							this.data1[params.index].typeName = text;
							return h('div', text);
						}
					},
					{
						title: '订单收货人',
						key: 'consigneeName',
						align: 'center',
						
						ellipsis: true,
					},
					{
						title: '收货人电话',
						key: 'consigneeTel',
						align: 'center',
						
						ellipsis: true,
					},
					
					{
						title: '操作',
						key: 'action',
						width: 120,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							return h('div', [
							h('Button', {
									props: {
										type: 'primary',
										size: 'small',
										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () =>

											this.$router.push({
												name: 'deliversDetails',
												query: {
													id: this.data1[params.index].id
												}
											})								
									}
								}, '详情'),

							])
						
						}
					}

//					{
//						title: '地址',
//						key: 'address',
//						align: 'left',
//						width: 200,
//
//						render: (h, params) => {
//
//							const row = params.row;
//							var text
//
//							text = (params.row.cityName + params.row.address).substr(3, 1000)
//
//							return h('div', [
//								h('span', {
//									style: {
//										display: 'inline-block',
//										width: '100%',
//										overflow: 'hidden',
//										textOverflow: 'ellipsis',
//										whiteSpace: 'nowrap'
//									},
//									domProps: {
//										title: text
//									}
//								}, text)
//							]);
//							return('div', [
//								h('span', {
//									attrs: {
//										title: this.address
//									},
//									on: {
//										mouseenter: () => {
//											//实现点击用户姓名然后显示其电话号码等功能，原来是通过动态路由，现在直接写在model里面
//											let currenIndex = params.index;
//											var obj = this.data1[currenIndex];
//											let mouseId = obj.address;
//											this.address = mouseId;
//										}
//									}
//								}, params.row.address)
//
//							])
//
//						}
//					},
//					{
//						title: '发货计划备注',
//						key: 'planNote',
//						align: 'center',
//						width: 200,
//
//					},

				],
			}

		},
		methods: {
			
			newOpen:function  () {
				this.$emit('openWindow', ('deliversNewly'), ('新建发货'), ('10-1'), ('deliversNewly'), ('deliversNewly'))
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

			//选择

			pickselect: function(selection, row) {
				this.awaitcancel[this.currents] = selection
				this.scanArry.push(row);
				this.getbarcodeChecked()

			},

			pickselectAll: function(selection) {

				this.awaitcancel[this.currents] = selection
				var data = selection

				for(var i = 0; i < data.length; i++) {

					var barcode = data[i].barcode;

					if(!this.barcodeChecked[barcode] == true) {

						this.scanArry.push(data[i])
					}

				}

				this.getbarcodeChecked()

			},

			cancelselectAll: function(selection, row) {

				var data = this.awaitcancel[this.currents]

				for(var i = 0; i < data.length; i++) {

					var barcode = data[i].barcode;

					for(var n = 0; n < this.scanArry.length; n++) {

						if(barcode == this.scanArry[n].barcode) {
							this.scanArry.splice(n, 1)
						}

					}

				}

				this.getbarcodeChecked()

			},

			cancelselect: function(selection, row) {

				var data = row

				for(var i = 0; i < this.scanArry.length; i++) {
					if(data.barcode == this.scanArry[i].barcode) {
						this.scanArry.splice(i, 1)

					}
				}

				this.getbarcodeChecked()

			},

			//

			openScanWindow: function() {
				this.scanWindow = true;
				this.scanMotion = true;
				this.scanAutofocus = true,
					this.scanObj = ""
			},

			cancelScanWindow: function() {
				var data = this.data1
				this.data1 = []
				this.scanArry = [];
				this.barcodeChecked = {};
				this.awaitcancel = {}
				for(var i = 0; i < data.length; i++) {

					this.data1.push(data[i])
					this.data1[i]._checked = false
				}
			},

			//改变录入包裹模式
			changeMotion: function(val) {

				if(val == false) {

				} else if(val == true) {
					this.scanAutofocus = true;

				}

				this.scanMotion = val;
				this.scanObj = "";
			},

			//扫码模式下包裹信息更改
			barcodeChange: function() {

				var valArry = this.scanObj.split(',')				
				this.scanObj = this.scanObj + ','				
				var val = valArry[valArry.length-1]

				var barcodeCache = this.barcodeCache
				var barcodeChecked = this.barcodeChecked

				if(!barcodeCache[val]) {

					this.$Message.error('该包裹编号不存在于待发货列表中！');
					return false;
				} else if(!!barcodeChecked[val]) {

					this.$Message.error('该包裹已录入！');
					return false;
				} else {
					var data = this.data1
					this.data1 = []

					for(var i = 0; i < data.length; i++) {
						this.data1.push(data[i])
						if(val == data[i].barcode) {
							this.data1[i]._checked = true

						}
						
						if(!!this.barcodeChecked[data[i].barcode]) {
							this.data1[i]._checked = true

						}

					}
					this.scanArry.push(barcodeCache[val])
					this.getbarcodeChecked()

				}

			},

			barcodeKeydown: function(event) {

				/*if(event.keyCode==""){
					
				}*/
				console.log(event.keyCode)

			},

			//手动模式下包裹信息更改
			barcodeEnter: function(val) {

				var barcodeCache = this.barcodeCache
				var barcodeChecked = this.barcodeChecked

				if(!barcodeCache[val]) {

					this.$Message.error('该包裹编号不存在于待发货列表中！');
					return false;
				} else if(!!barcodeChecked[val]) {

					this.$Message.error('该包裹已录入！');
					return false;
				} else {
					var data = this.data1
					this.data1 = []

					for(var i = 0; i < data.length; i++) {
						this.data1.push(data[i])
						if(val == data[i].barcode) {
							this.data1[i]._checked = true

						}
						
							if(!!this.barcodeChecked[data[i].barcode]) {
							this.data1[i]._checked = true

						}

					}

					this.scanArry.push(barcodeCache[val])
					this.getbarcodeChecked()

				}

			},

			//已选包裹缓存

			getbarcodeChecked: function() {

				var data = this.scanArry
				var barcodeChecked = {}
				for(var i = 0; i < data.length; i++) {
					barcodeChecked[data[i].barcode] = data[i]
				}

				this.barcodeChecked = barcodeChecked
			},

			delfile: function(fileid, index) {
				var that = this
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				this.axios({
					method: 'delete',
					url: '/api/f/dispatchs/files/fileid'

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.uploadList.splice(index, 1)

					that.$Message.success("删除成功")

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},
			exportData: function() {
				this.$refs.selection.exportCsv({
					filename: '发货单',
					columns: this.columns1.filter((col, index) => 0 < index),
					data: this.data1

				});
			},
			getExportAllData() {

				if(this.helps == true) {

					window.location.href = '/api/f/storages/4ujh7687hips/finisheds/dispatch?' + that.ordernumber;
					// url: '/api/f/storages/4ujh7687hips/finisheds/dispatch?'+ that.ordernumber
				} else {
					// url: '/api/f/storages/4ujh7687hips/finisheds/dispatch',
					window.location.href = '/api/f/storages/4ujh7687hips/finisheds/dispatch';

				}

			},
			datacollect(selection) {
				this.choseid = [];

				if(selection.length > 0) {
					for(var i = 0; i < selection.length; i++) {
						var obj = {
							finishedStockItemId: selection[i].id,
							type: selection[i].type,
						};
						this.choseid.push(obj);

						this.addressdeliver = (selection[0].cityName + selection[0].address).substr(3, 1000);
						this.namedeliver = selection[0].consigneeName;
						this.telphonedeliver = selection[0].consigneeTel;

					}
				} else {
					this.addressdeliver = '';
					this.namedeliver = '';
					this.telphonedeliver = '';
				}
			},

			setdeliver() {
var  that = this;

				if(this.scanArry.length<1){
					this.$Message.success("请选择发货的包裹");
					return false;
				} else if(this.delivername == "" || this.delivername == null) {
					this.$Message.success("请输入客户名称");
					return false;
				} else if(this.delivertel == "" || this.delivertel == null || this.delivertel.trim().length == 0) {
					this.$Message.success("请输入客户电话");
					return false;
				} else if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.delivertel))) {
					this.$Message.success("请输入正确的电话号码");
					return false;
				} else if(this.deliveraddress == "" || this.deliveraddress == null) {
					this.$Message.success("请输入收货地址");
					return false;
				} else if(this.delivercom == "" || this.delivercom == null) {
					this.$Message.success("请输入发货物流公司");
					return false;
				} else if(this.delivernum == "" || this.delivernum == null) {
					this.$Message.success("请输入物流单号");
					return false;
				}
				var fids = []

				for(var i = 0; i < this.uploadList.length; i++) {
					fids.push(this.uploadList[i].id)
				}
				
				var scanArry=[];
				
				for(var t=0; t<that.scanArry.length;t++){
					
					var obj={
						finishedStockItemId:that.scanArry[t].id,
						type:that.scanArry[t].type
					}
					
					scanArry.push(obj)
				}

   
				
				this.axios({
					method: 'post',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/dispatchs',
					data: {
						dispatchBillItemDtoList: scanArry,
						address: that.deliveraddress,
						consigneeTel: that.delivertel,
						consignee: that.delivername,
						logisticsNo: that.delivernum,
						logisticsCompanyId: that.delivercom,
						notes: that.delivernotes,
						fileIds: fids
					}
				}).then(res => {

					if(res != false) {
						that.getordersdatas();
						that.$Message.success("发货单生成成功");
						that.cancelScanWindow()
						that.modelde = false;

					}

				})
			},

			//刷新数据

			newData: function() {
				this.scanArry = [];
				this.barcodeChecked = {};
				this.awaitcancel = {}
				this.ordernumber = ""
				this.currents = 1
				this.getordersdatas()

			},

			serchorder() {
				this.ifsearch = true;
				this.currents = 1;
				this.helps = true;
				this.getsearchordersdatas();
			},
			changepage(index) {
				if(this.ifsearch == true) {
					let that = this;
					this.currents = index;

					this.getsearchordersdatas();
				} else {
					this.ordernum = ""
					this.customtel = ""
					this.orderstatus = ""
					this.currents = index;
					this.getordersdatas();
				}
			},

			wuliucompany() {
				let that = this;
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
						this.deliveraddress = this.addressdeliver;
						this.delivername = this.namedeliver;
						this.delivertel = this.telphonedeliver;
					}
				})

			},
			orderdetail() {
				
				if(this.scanArry.length<1){
					this.$Message.error("没有要发货的包裹");
					return false;
				}
				
				this.scanWindow=false;
				this.modelde = true;
				this.delivercom = '',
					this.delivernum = '',
					this.delivernotes = '',
					this.deliveraddress = '',
					this.delivername = '',
					this.delivertel = '',
					this.uploadList = [],
					this.wuliucompany()
			},
			getsearchordersdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},

					url: '/api/f/storages/4ujh7687hips/finisheds?ship=1&delivery=false' + (that.ordertime == '' ? '' : '&delivered=' + that.ordertime) + (that.ordernumber == '' ? '' : '&orderNo=' + that.ordernumber) + '&pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {

					if(res != false) {
						that.data1 = res.data.data;
						that.pageSize = res.data.pagination.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total;
					}
				})

			},
			getordersdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					// 
					url: '/api/f/storages/4ujh7687hips/finisheds?ship=1&delivery=false' + '&pageNum=' + that.currents + '&pageSize='+ that.pageSize
				}).then(res => {

					if(res != false) {

						var data = res.data.data;
						that.pageSize = res.data.pagination.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total;

						that.data1 = []

						for(var i = 0; i < data.length; i++) {

							data[i].typeName = ""

							that.data1.push(data[i])

							if(!!that.barcodeChecked[data[i].barcode] == true) {

								that.data1[i]._checked = true
							}

						}

					}
				})

			},

		},
		mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
			this.getordersdatas();

			//获取全部待发货包裹
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
			})

		}
	}
</script>

<style>
	.demo-drawer-footer {
		border-top: none;
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
	
	.scanWindow_table {
		margin-top: 32px;
	}
</style>