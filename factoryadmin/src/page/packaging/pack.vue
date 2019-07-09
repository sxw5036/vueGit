<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>打包管理</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">
			<div class="active">
				<!---->
				<div class="ui_operateLeft" style="line-height: 32px;">
					<span class="operation_span">订单编号：</span>
					<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.no" placeholder="请输入订单编号..." />

					<Button icon="ios-search" @click="clicksearch">搜索</Button>
				</div>

				<div class="ui_operateRight">
					<Button @click="newData" class="p_lea" shape="circle" icon="ios-refresh"></Button>
					<!--<Button type="primary" @click="SetModel=true" class="p_lea" v-show="operation.edit==true">添加客户</Button>-->
				</div>
			</div>

		</div>

		<div>

			<Table border :loading="loading" :columns="tableHeader" :data="tableData" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_operate">

				</div>

				<div class="ui_page">
					<Page :current="pageIndex" :total="pageIndextotal" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
				</div>

			</div>

		</div>

		<!--bom单-->

		<Modal v-model="BomModel" title="产品部件信息" width="800">

			<div class="emsg_center">
				<div class="emsg_Mu">
					<ul>
						<li @click="EmuIndex=0" :class="{ac:EmuIndex==0}">柜体</li>
						<li @click="EmuIndex=1" :class="{ac:EmuIndex==1}">门板</li>
						<li @click="EmuIndex=2" :class="{ac:EmuIndex==2}">五金</li>

					</ul>
				</div>

				<div class="emsg_itemNav">
					<div v-show="EmuIndex==0">
						<Table border height="445" :columns="cabinetHead" :data="BomArry.cabinet" ref="table"></Table>
						<div class="operation_box">
							<div class="active">

								<div class="ui_operateRight">
									<Button type="primary" @click="getparcel" class="p_lea" style="margin-top: 10px;" v-show="operation.edit==true">创建包裹</Button>
								</div>
							</div>

						</div>
					</div>

					<div v-show="EmuIndex==1">
						<Table border height="455" :columns="doorHead" :data="BomArry.door" ref="table"></Table>
					</div>

					<div v-show="EmuIndex==2">
						<Table border height="455" :columns="hardwareHead" :data="BomArry.hardware" ref="table"></Table>
					</div>

				</div>
			</div>

			<div slot="footer"></div>

		</Modal>

		<!--bom单-->

		<!--创建包裹-->

		<Drawer v-model="addparcel" title="创建包裹" width="500">

			<!---->

			<div style="position: relative; height: 100%; overflow: auto; padding-bottom: 50px;">
				<Form :label-width="100">

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
						<Button type="primary" size="small" style="margin-left: 3px;" @click="getpackNos">生成编号</Button>
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

			</div>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="surepack" class="p_lea" style="margin-top: 10px;">确认</Button>
			</div>

		</Drawer>

		<!--创建包裹-end-->

		<!--复查打包信息-->
		<Modal v-model="reviewModel" title="确认打包完成" width="800">

			<div>

				<Form :label-width="100">

					<FormItem label="提示:">
						<div class="pack_warning">
							<p>您确认本订单已经生产完毕，打包结束了吗？打包完成结束后将不能创建包裹。</p>
						</div>
					</FormItem>

					<FormItem label="订单编号">
						<p>{{packMsg.no}}</p>
					</FormItem>
					<!--<FormItem label="订单类型">

						<p v-show="packMsg.type==0">柜体</p>
						<p v-show="packMsg.type==1">门板</p>
						<p v-show="packMsg.type==2">五金</p>
					</FormItem>

					<FormItem label="订单状态">
						<p v-show="packMsg.status==0">待处理</p>
						<p v-show="packMsg.status==1">设计费待评估</p>
						<p v-show="packMsg.status==2">设计费待确认</p>
						<p v-show="packMsg.status==3">设计费待审核 </p>
						<p v-show="packMsg.status==4">待设计</p>
						<p v-show="packMsg.status==5">设计中</p>
						<p v-show="packMsg.status==6">设计待确认</p>
						<p v-show="packMsg.status==7">出厂价待确认</p>
						<p v-show="packMsg.status==8">经销商待确认出厂价</p>
						<p v-show="packMsg.status==9">货款支付审核</p>
						<p v-show="packMsg.status==10">待生产 </p>
						<p v-show="packMsg.status==11">生产中</p>
						<p v-show="packMsg.status==12">待入库</p>
						<p v-show="packMsg.status==13">待出库</p>
						<p v-show="packMsg.status==14">待配送</p>
						<p v-show="packMsg.status==15">配送中</p>
						<p v-show="packMsg.status==16">已完成</p>
					</FormItem>

					<FormItem label="订单说明">
						<p>{{packMsg.notes}}</p>
					</FormItem>-->

					<FormItem label="订单包裹">
						<Table border :columns="reviewpackHaed" :data="orderpack" ref="table"></Table>
					</FormItem>

				</Form>

			</div>

			<div slot="footer">
				<Button type="primary" @click="sureaccomplish" class="p_lea" style="margin-top: 10px;">确认</Button>
			</div>

		</Modal>

		<!--订单下包裹-s-->
		<Modal title="订单下包裹" v-model="orderpackModel" width="800px">

			<Table border :columns="orderpackHaed" :data="orderpack" @on-selection-change="selectionchange" ref="table"></Table>

			<div slot="footer">
				<Button type="primary" @click="clickPrint">批量打印</Button>
			</div>
		</Modal>

		<!--订单下包裹-end-->

		<Modal title="查看大图" v-model="visible">
			<div class="show_img">
				<img :src="imgName" style="width: 100%">
			</div>

			<div slot="footer" style="border: none;"></div>

		</Modal>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [{
						title: '订单编号',
						key: 'no',
						width: 200,
						fixed: 'left',
					},

					{
						title: '订单类型',
						key: 'type ',
						width: 200,
						render: (h, params) => {

							var type = params.row.type

							if(type == 0) {
								var text = "正常订单"
							} else if(type == 1) {
								var text = "补产订单"
							} else if(type == 2) {
								var text = "返货单"
							} else if(type == 3) {
								var text = "打样订单"
							} else if(type == 4) {
								var text = "样板订单"
							} else if(type == 5) {
								var text = "展示厅订单"
							} else if(type == 6) {
								var text = "补发订单"
							}
							return h('div', text)
						}

					},

					{
						title: '订单状态',
						width: 150,
						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var text = "待处理"
							} else if(status == 1) {
								var text = "设计费评估"
							} else if(status == 2) {
								var text = "设计费待确认"
							} else if(status == 3) {
								var text = "设计费待审核"
							} else if(status == 4) {
								var text = "待设计"
							} else if(status == 5) {
								var text = "设计中"
							} else if(status == 6) {
								var text = "设计待确认"
							} else if(status == 7) {
								var text = "出厂价待确认"
							} else if(status == 8) {
								var text = "经销商待确认出厂价"
							} else if(status == 9) {
								var text = "货款支付审核"
							} else if(status == 10) {
								var text = "待生产"
							} else if(status == 11) {
								var text = "生产中"
							} else if(status == 12) {
								var text = "待入库"
							} else if(status == 13) {
								var text = "待出库"
							} else if(status == 14) {
								var text = "待配送"
							} else if(status == 15) {
								var text = "配送中"
							} else if(status == 16) {
								var text = "已完成"
							}
							return h('Tag', {
								props: {
									type: 'border',
								}
							}, text)
						}
					},

					{
						title: '包裹数量',
						key: 'counts',
						width: 260,
						render: (h, params) => {

							var counts = params.row.counts

							var existCabinet = params.row.existCabinet;
							var existDoor = params.row.existDoor;
							var existHardware = params.row.existHardware;

							var cabinetCount = params.row.cabinetCount;
							var doorCount = params.row.doorCount;
							var hardwareCount = params.row.hardwareCount;

							return h('div', [
								h('Button', {
									props: {

										size: 'small',

									},
									style: {
										marginRight: '5px',
										display: existCabinet > 0 ? "line-block" : "none"
									},
									on: {
										click: () => {

											this.SetIndex = params.index;
											this.orderpack = []
											this.getorderpack(params.index, [0]);
										}
									}
								}, '柜体-' + cabinetCount),
								h('Button', {
									props: {

										size: 'small',

									},
									style: {
										marginRight: '5px',
										display: existDoor > 0 ? "line-block" : "none"
									},
									on: {
										click: () => {

											this.SetIndex = params.index;
											this.orderpack = []
											this.getorderpack(params.index, [1, 2, 3]);

										}
									}
								}, '门板-' + doorCount),

								h('Button', {
									props: {

										size: 'small',

									},
									style: {
										marginRight: '5px',
										display: existHardware > 0 ? "line-block" : "none"
									},
									on: {
										click: () => {

											this.SetIndex = params.index;
											this.orderpack = []
											this.getorderpack(params.index, [4]);

										}
									}
								}, '五金-' + hardwareCount + ''),

							]);

							/*return h('div', {

								style: {

									color: 'blue',
									color: 'blue',
									textDecoration: 'underline',
									cursor: 'pointer'
								},
								on: {
									click: () => {
										

									}
								}
							}, counts);*/

						}
					},

					{
						title: '经销商名称',
						key: 'dealerName',
						width: 160,
					},

					{
						title: '经销商电话',
						key: 'dealerTel',
						width: 200,
					},

					{
						title: '下单人',
						key: 'creatorName',
						width: 200,
					},

					{
						title: '下单时间',
						key: 'created',
						width: 200,
					},

					{
						title: '财务审核时间',
						key: 'payTime',
						width: 200,
					},

					{
						title: '要求交期',
						key: 'estimatedDeliveryDate',
						width: 200,
					},

					{
						title: '订单备注',
						key: 'notes',
						width: 200,

						render: (h, params) => {
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
										title: params.row.notes
									}
								}, params.row.notes)
							]);

						}
					},

					/*{
						title: '设计师姓名',
						key: 'designerName',
						width: 200,
					},*/

					/*{
						title: '设计费',
						key: 'designFee',
						width:100,
						render: (h, params) => {
							var designFee = params.row.designFee;

							designFee = (designFee.toString().indexOf('.') == -1) ? designFee + ".00" : designFee

							return h('div', {
								style: {
									textAlign: 'right',
									
								},

							}, designFee)
						}

					},
*/
					/*{
						title: '跟单员',
						key: 'merchandiserName',
						width: 200,

					},

					{
						title: '跟单备注',
						key: 'documentaryNotes',
						width: 200,

					},*/

					/*{
						title: '终端客户',
						key: 'customerName',
						width: 200,
					},

					{
						title: '收货地址',
						key: 'address',
						width: 200,
					},

					{
						title: '收货人',
						key: 'consigneeName',
						width: 200,
					},
					{
						title: '收货电话',
						key: 'consigneeTel',
						width: 200,
					},*/
					/*{
						title: '安装地址',
						key: 'installAddress',
						width: 200,
					},*/
					{
						title: '操作',

						width: 200,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							var counts = params.row.counts

							if(counts == 0) {
								return h('div', [
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

												this.SetIndex = params.index;

												this.getpackNo()

											}
										}
									}, '创建包裹'),
								]);
							} else {
								return h('div', [
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

												this.SetIndex = params.index;

												this.getpackNo()

											}
										}
									}, '创建包裹'),
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

												this.SetIndex = params.index;
												this.packMsg = this.tableData[params.index];
												this.reviewpack(params.index);

											}
										}
									}, '打包完成'),

								]);
							}

						}

					}
				],

				tableData: [], //表格数据
				packMsg: {},

				orderpackModel: false,
				orderpackHaed: [

					{
						type: 'selection',
						width: 60,
						align: 'center'
					},

					{
						title: '包装编号/条形码',
						key: 'barcode',
						width: 200,

					},

					{
						title: '包装类型',
						key: 'typeName',
						width: 150,
						render: (h, params) => {

							var type = params.row.type

							if(type == 0) {
								var texts = "A柜体"
							} else if(type == 1) {
								var texts = "BZ门板-自产"
							} else if(type == 2) {
								var texts = "BW门板-外协"
							} else if(type == 3) {
								var texts = "BT特供实木"
							} else if(type == 4) {
								var texts = "C五金"
							}

							this.orderpack[params.index].typeName = texts

							return h('div', texts)
						}

					},

					{
						title: '是否入库',
						key: 'in',
						width: 180,

						render: (h, params) => {
							var In = params.row.in

							if(In == false) {
								var texts = "未入库"
							} else if(In == true) {
								var texts = "已入库"
							}

							return h('div', texts)
						}
					},

					{
						title: '所属订单',
						key: 'orderNo',
						width: 200,
					},

					{
						title: '备注',
						key: 'notes',
						width: 150,

					},

					{
						title: '打包人',
						key: 'creatorName',
						width: 150,

					},

					{
						title: '打包时间',
						key: 'created',
						width: 180,

					},

				],

				reviewpackHaed: [

					{
						title: '包装编号/条形码',
						key: 'barcode',
						width: 200,
						fixed: 'left'
					},

					{
						title: '包装类型',
						key: 'type',
						width: 150,
						render: (h, params) => {

							var type = params.row.type

							if(type == 0) {
								var texts = "柜体"
							} else if(type == 1) {
								var texts = "门板-自产"
							} else if(type == 2) {
								var texts = "门板-外协"
							} else if(type == 3) {
								var texts = "特供实木"
							} else if(type == 4) {
								var texts = "五金"
							}

							return h('div', texts)
						}

					},

					{
						title: '所属订单',
						key: 'orderNo',
						width: 200,
					},

					{
						title: '备注',
						key: 'notes',
						width: 150,

					},

					{
						title: '打包人',
						key: 'creatorName',
						width: 150,

					},

					{
						title: '打包时间',
						key: 'created',
						width: 180,

					},

				],

				orderpack: [],
				printdata: [],

				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

				isSearch: false,
				searchObj: {
					"no": "",

				},

				BomModel: false,
				EmuIndex: 0,

				BomArry: {
					cabinet: [],

					door: [],
					hardware: []
				},

				cabinetHead: [{
						title: '选择',
						width: 60,
						fixed: 'left',
						render: (h, params) => {

							//var disabled = params.row.disabled
							var ispick = params.row.ispick

							return h('div', [

								h('Checkbox', {

									props: {
										value: ispick,
										size: 'small',

									},

									on: {
										'input': (val) => {

											this.pickcabinet(val, params.index)

										}
									}
								}),
							])

						}

					},

					{
						title: '产品部件',
						key: 'productUnit',
						width: 160,

					}, {
						title: '序号',
						key: 'index',
						width: 160,

					},
					{
						title: '名称',
						key: 'name',
						width: 160,

					},

					{
						title: '是否需要生产',
						key: 'isproduction',
						width: 160,

					},

					{
						title: '材质',
						key: 'texture',
						width: 160,

					},

					{
						title: '数量',
						key: 'quantity',
						width: 160,

					},

					{
						title: '尺寸',
						key: 'size',
						width: 160,

					},

					{
						title: '整件尺寸',
						key: 'wholeSize',
						width: 160,

					},

					{
						title: '代码',
						key: 'code',
						width: 160,

					},
					{
						title: '单位',
						key: 'unit',
						width: 160,

					},
					{
						title: '工艺',
						key: 'craft',
						width: 160,

					},

					{
						title: '包装规则',
						key: 'rule',
						width: 160,

					},

					{
						title: '部件状态',
						key: 'state',
						width: 160,

					},

					{
						title: '物料表类型',
						key: 'type',
						width: 160,

					},

					{
						title: '获取方式',
						key: 'source',
						width: 160,

					},

					{
						title: '物料数量',
						key: 'materialQuantity',
						width: 160,

					},

					{
						title: '拆单人',
						key: 'pullName',
						width: 160,
					},

					{
						title: '拆单时间',
						key: 'pullTime',
						width: 160,
					},

					{
						title: '审核人',
						key: 'audit',
						width: 160,
					},

					{
						title: '审核时间',
						key: 'auditTime',
						width: 200,

					},

				],
				doorHead: [{
						title: '选择',
						width: 60,
						fixed: 'left',
						render: (h, params) => {

							//var disabled = params.row.disabled
							var ispick = params.row.ispick

							return h('div', [

								h('Checkbox', {

									props: {
										value: ispick,
										size: 'small',

									},

									on: {
										'input': (val) => {

											/*this.pickitem(val, params.index)*/

										}
									}
								}),
							])

						}

					},

					{
						title: '产品部件',
						key: 'productUnit',
						width: 160,

					}, {
						title: '序号',
						key: 'index',
						width: 160,

					},
					{
						title: '名称',
						key: 'name',
						width: 160,

					},

					{
						title: '是否需要生产',
						key: 'isproduction',
						width: 160,

					},

					{
						title: '材质',
						key: 'texture',
						width: 160,

					},

					{
						title: '数量',
						key: 'quantity',
						width: 160,

					},

					{
						title: '尺寸',
						key: 'size',
						width: 160,

					},

					{
						title: '整件尺寸',
						key: 'wholeSize',
						width: 160,

					},

					{
						title: '代码',
						key: 'code',
						width: 160,

					},
					{
						title: '单位',
						key: 'unit',
						width: 160,

					},
					{
						title: '工艺',
						key: 'craft',
						width: 160,

					},

					{
						title: '包装规则',
						key: 'rule',
						width: 160,

					},

					{
						title: '部件状态',
						key: 'state',
						width: 160,

					},

					{
						title: '物料表类型',
						key: 'type',
						width: 160,

					},

					{
						title: '获取方式',
						key: 'source',
						width: 160,

					},

					{
						title: '物料数量',
						key: 'materialQuantity',
						width: 160,

					},

					{
						title: '拆单人',
						key: 'pullName',
						width: 160,
					},

					{
						title: '拆单时间',
						key: 'pullTime',
						width: 160,
					},

					{
						title: '审核人',
						key: 'audit',
						width: 160,
					},

					{
						title: '审核时间',
						key: 'auditTime',
						width: 200,

					},
				],
				hardwareHead: [{
						title: '选择',
						width: 60,
						fixed: 'left',
						render: (h, params) => {

							//var disabled = params.row.disabled
							var ispick = params.row.ispick

							return h('div', [

								h('Checkbox', {

									props: {
										value: ispick,
										size: 'small',

									},

									on: {
										'input': (val) => {

											/*this.pickitem(val, params.index)*/

										}
									}
								}),
							])

						}

					},

					{
						title: '序号',
						key: 'index',
						width: 160,

					},
					{
						title: '名称',
						key: 'name',
						width: 160,

					},

					{
						title: '是否需要生产',
						key: 'isproduction',
						width: 160,

					},

					{
						title: '材质',
						key: 'texture',
						width: 160,

					},

					{
						title: '数量',
						key: 'quantity',
						width: 160,

					},

					{
						title: '尺寸',
						key: 'size',
						width: 160,

					},

					{
						title: '整件尺寸',
						key: 'wholeSize',
						width: 160,

					},

					{
						title: '代码',
						key: 'code',
						width: 160,

					},
					{
						title: '单位',
						key: 'unit',
						width: 160,

					},
					{
						title: '工艺',
						key: 'craft',
						width: 160,

					},

					{
						title: '包装规则',
						key: 'rule',
						width: 160,

					},

					{
						title: '部件状态',
						key: 'state',
						width: 160,

					},

					{
						title: '物料表类型',
						key: 'type',
						width: 160,

					},

					{
						title: '获取方式',
						key: 'source',
						width: 160,

					},

					{
						title: '物料数量',
						key: 'materialQuantity',
						width: 160,

					},

					{
						title: '拆单人',
						key: 'pullName',
						width: 160,
					},

					{
						title: '拆单时间',
						key: 'pullTime',
						width: 160,
					},

					{
						title: '审核人',
						key: 'audit',
						width: 160,
					},

					{
						title: '审核时间',
						key: 'auditTime',
						width: 200,

					},
				],

				cabinet: [],
				hardware: [],
				door: [],

				//创建包裹

				addparcel: false,
				parcelObj: {
					no: "",
					parceArry: [],
					files: [],
					type: "",
					notes: "",
					location: ""
				},

				parceHead: [

					{
						title: '产品部件',
						key: 'productUnit',
						width: 160,

					}, {
						title: '序号',
						key: 'index',
						width: 160,

					},
					{
						title: '名称',
						key: 'name',
						width: 160,

					},

					{
						title: '是否需要生产',
						key: 'isproduction',
						width: 160,

					},

					{
						title: '材质',
						key: 'texture',
						width: 160,

					},

					{
						title: '数量',
						key: 'quantity',
						width: 160,

					},

					{
						title: '尺寸',
						key: 'size',
						width: 160,

					},

					{
						title: '整件尺寸',
						key: 'wholeSize',
						width: 160,

					},

					{
						title: '代码',
						key: 'code',
						width: 160,

					},
					{
						title: '单位',
						key: 'unit',
						width: 160,

					},
					{
						title: '工艺',
						key: 'craft',
						width: 160,

					},

					{
						title: '包装规则',
						key: 'rule',
						width: 160,

					},

					{
						title: '部件状态',
						key: 'state',
						width: 160,

					},

					{
						title: '物料表类型',
						key: 'type',
						width: 160,

					},

					{
						title: '获取方式',
						key: 'source',
						width: 160,

					},

					{
						title: '物料数量',
						key: 'materialQuantity',
						width: 160,

					},

					{
						title: '拆单人',
						key: 'pullName',
						width: 160,
					},

					{
						title: '拆单时间',
						key: 'pullTime',
						width: 160,
					},

					{
						title: '审核人',
						key: 'audit',
						width: 160,
					},

					{
						title: '审核时间',
						key: 'auditTime',
						width: 200,

					},
				],

				reviewModel: false,
				employee: [],

				uploadpathdata: '/api/f/payment_simples/uploadImages',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},

				operation: {},
				order_operation: {},

			};
		},

		methods: {

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

			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch == true) {
					this.searchData()
				} else {
					this.getDatas()
				}

			},

			//检索信息

			clicksearch: function() {

				/*""companyId": "",
					"condition": "",*/
				var searchobj = this.searchObj
				var no = searchobj.no

				if(no.trim().length == 0) {
					this.newData();

					return false;
				} else {
					this.pageIndex = 1
					this.searchData()
				}

			},

			//调用检索api接口
			searchData: function() {

				var searchobj = this.searchObj
				var no = searchobj.no

				var pathurl = ""

				if(no != "" && no != null && no.trim().length != 0) {
					pathurl += 'orderNo=' + no + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.loading = true

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

				this.axios({
					method: 'get',
					url: '/api/f/customorders/packs?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data
					   that.tableData=[]
					
					for(var i=0; i<data.length;i++){
						that.tableData.push(data[i])
					}

					
					that.pageIndextotal = dataAll.pagination.total
					//that.$Message.success("请求成功")
					that.isSearch = true
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			//获取包裹编号
			getpackNo: function() {

				this.addparcel = true;
				
				this.parcelObj = {
						no: "",
						parceArry: [],
						files: [],
						type: "",
						notes: "",
						location: ""
					};
				
				return false;

				//获取订单编号 暂时舍弃
				var id = this.tableData[this.SetIndex].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/customorders/' + id + '/no',

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.uploadpathdata = '/api/f/storages/4ujh7687hips/finisheds/' + id + '/packages/itemId/files'

					that.addparcel = true;
					that.parcelObj = {
						no: "",
						parceArry: [],
						files: [],
						type: "",
						notes: "",
						location: ""
					};

					that.parcelObj.no = data

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//获取多个订单编号
			getpackNos: function() {

				var count = this.parcelObj.count
				var type = this.parcelObj.type
				var num = /^[0-9]*$/

				if(type == "" || type == null) {
					this.$Message.error('请选择包裹类型！');
					return false;
				} else if(count == "" || count == null || count.trim().length == 0) {
					this.$Message.error('包裹数量不能为空！');
					return false;
				} else if(num.test(count) == false) {
					this.$Message.error('请输入数字！');
					return false;
				} else if(count <= 0) {
					this.$Message.error('包裹数量不能为0或为负数！');
					return false;
				}

				var id = this.tableData[this.SetIndex].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/customorders/' + id + '/no?count=' + count + '&type=' + type

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.parcelObj.no = data.join(",")

				})

			},

			getoperated: function(val) {
				this.parcelObj.operated = val
			},

			//确认打包
			surepack: function() {

				var id = this.tableData[this.SetIndex].id

				var parcelobj = this.parcelObj
				var no = parcelobj.no
				var type = parcelobj.type
				var notes = parcelobj.notes
				var operator = parcelobj.operator
				var operated = parcelobj.operated
				var operatedTime = parcelobj.operatedTime
				var files = parcelobj.files
				var ids = []

				for(var i = 0; i < files.length; i++) {
					ids.push(files[i].id)
				}

				var location = parcelobj.location

				if(no == "" || no == null || no.trim().length == 0) {
					this.$Message.error('包裹编号不能为空！');
					return false;
				} else if(type == "" || type == null) {
					this.$Message.error('包裹类型不能为空！');
					return false;
				} else if(operator == "" || operator == null) {
					this.$Message.error('操作人不能为空！');
					return false;
				} else if(operated == "" || operated == null) {
					this.$Message.error('打包时间不能为空！');
					return false;
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var noArry = no.split(',')

				var packArry = []
				for(let n = 0; n < noArry.length; n++) {

					var obj = {
						barcode: noArry[n],
						type: type,
						location: location,
						notes: notes,
						fileIds: ids,
						creator: operator,
						created: operatedTime == "" || operatedTime == undefined ? operated + ' 00:00:00' : operated + ' ' + operatedTime,
					}

					packArry.push(obj)

				}

				var that = this

				this.axios({
					method: 'post',
					url: '/api/f/customorders/' + id,
					data: packArry

				}).then(function(res) {

					var verify = [

						{
							"name": "no",
							"note": "包裹编号"
						}, {
							"name": "type",
							"note": "包装类型"
						},
						{
							"name": "location",
							"note": "包装位置 "
						},
						{
							"name": "notes",
							"note": "包装描述"
						}

					]

					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.$Message.success("创建包裹成功")

					/*var nu=parseInt(that.tableData[that.SetIndex].counts)*/
                    that.clicksearch()
					that.addparcel = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

					that.addparcel = false

				})
			},

			//选择包裹

			selectionchange: function(val) {
				this.printdata = val

			},

			clickPrint: function() {

				var that = this

				var printdata = this.printdata

				if(printdata.length == 0) {
					this.$Message.error('打印包裹不能为空！');
					return false;
				}

				var str = []

				for(var i = 0; i < printdata.length; i++) {

					var obj = {
						"barcode": printdata[i].barcode,
						"typeName": printdata[i].typeName + "-(共" + this.orderpack.length + "件)",
						/*"delivered": printdata[i].planCreated,*/
						"dealerName": printdata[i].dealerName,
						"dealerTel": printdata[i].dealerTel,
						"customerName": printdata[i].customerName,
						"customerTel": printdata[i].customerTel,
						"orderNo": printdata[i].orderNo,
						"notes": printdata[i].notes,
						"address": printdata[i].cityName + printdata[i].address,
						"dealerAddress":printdata[i].dealerAddress

					}

					str.push(obj)
				}

				window.open('http://erp.htjjsc.com/print.html?' + encodeURI(JSON.stringify(str)))
				/*var len = printdata.length;
				var labIndex = 0;
				var set = null



				this.print(labIndex)

				set = setInterval(function() {
					

					if (labIndex >= len -1 ) {
						clearInterval(set)
					}else{
						labIndex++
						that.print(labIndex)
					}

					

				}, 6000)
           	*/

			},

			/*  onprint:function  (i) {
           	var labelObj = new Object();
				labelObj = this.printdata[i];

                 console.log(labelObj)
           },
           */
			//tsc打印

			print: function(i) {

				var labelObj = new Object();
				labelObj = this.printdata[i];

				var TSCObj;
				TSCObj = new ActiveXObject("TSCActiveX.TSCLIB"); //引入插件
				//TSCObj.ActiveXabout();//打印机信息  
				TSCObj.ActiveXopenport("TSC TTP-244 Pro"); //打印机端口
				//TSCObj.ActiveXsetup("标签宽度","标签高度","打印速度","打印浓度（0-15）","感应器类别字串型，0 表示使用垂直間距感測器(gap sensor)， 1 表示使用黑標感測器(black mark senso)","Gap/Black mark垂直间距(mm)","Gap/Black mark偏移距离(mm)");
				TSCObj.ActiveXsetup("80", "60", "5", "8", "0", "2", "0"); //设置初始参数
				//TSCObj.ActiveXformfeed(); // 多出一张纸
				//TSCObj.ActiveXnobackfeed(); // 去掉打印机回送，加快速度
				TSCObj.ActiveXclearbuffer();
				/*ActiveXwindowsfont 可以输出汉字，但是必须是系统中存在的字体。 
				  ActiveXwindowsfont(a,b,c,d,e,f,g,h)  
				    说明：使用Windows TTF字体打印文字。  
				    参数：  
				    a：整数类型，文字X方向起始点，以点表示。   
				    b：整数类型，文字Y方向起始点，以点表示。  
				    c：整数类型，字体高度，以点表示。  
				    d：整数类型，旋转角度，逆时针方向旋转。0-旋转0°，90-旋转90°，180-旋转180°，270-旋转270°。  
				    e：整数类型，字体外形。0：标签；1：斜体；2：粗体；3：粗斜体。  
				    f：整数类型，下划线，0：无下划线；1：加下划线。  
				    g：字符串类型，字体名称。如：Arial，Times new Roman。  
				    h：字符串类型，打印文字内容.
				*/
				TSCObj.ActiveXwindowsfont(36, 36, 40, 0, 0, 0, "arial", "包裹"); //打印文本
				TSCObj.ActiveXwindowsfont(36, 66, 40, 0, 0, 0, "arial", "编号"); //打印文

				TSCObj.ActiveXwindowsfont(500, 36, 40, 0, 0, 0, "arial", "品"); //打印文本
				TSCObj.ActiveXwindowsfont(500, 66, 40, 0, 0, 0, "arial", "名"); //打印文
				TSCObj.ActiveXwindowsfont(540, 50, 40, 0, 0, 0, "arial", labelObj.typeName);
				TSCObj.ActiveXwindowsfont(36, 126, 30, 0, 0, 0, "arial", "入库时间:" + labelObj.delivered + "");
				TSCObj.ActiveXwindowsfont(36, 156, 30, 0, 0, 0, "arial", "经销商:" + labelObj.dealerName + "");
				TSCObj.ActiveXwindowsfont(36, 186, 30, 0, 0, 0, "arial", "客户:" + labelObj.customerName + "");
				TSCObj.ActiveXwindowsfont(36, 216, 30, 0, 0, 0, "arial", "所属订单:" + labelObj.orderNo + "");
				TSCObj.ActiveXwindowsfont(36, 246, 30, 0, 0, 0, "arial", "备注:" + labelObj.notes + "");
				TSCObj.ActiveXwindowsfont(36, 406, 30, 0, 0, 0, "arial", "乐造4.0 家居行业移动ERP管理系统 0371-88880863");

				//var cmd = 'QRCODE 条码X方向起始点,条码Y方向起始点,纠错级别,二维码高度,A(A和M),旋转角度,M2（分为类型1和类型2）,S1 (s1-s8,默认s7),\"你好\"';  

				TSCObj.ActiveXbarcode("130", "36", "128", "50", "1", "0", "2", "2", labelObj.barcode);

				/* 	var command = "QRCODE 175,6,Q,2,A,0,M1,S7,\"\u7f16\u7801\"";
					TSCObj.ActiveXsendcommand(command); */
				TSCObj.ActiveXprintlabel("1", "1");
				TSCObj.ActiveXcloseport(); //关闭端口
			},

			//确认打包完成

			sureaccomplish: function() {
				var id = this.tableData[this.SetIndex].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'put',
					url: '/api/f/customorders/' + id + '/packed',

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.$Message.success("打包完成")
					that.tableData.splice(that.SetIndex, 1)
					that.reviewModel = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

					that.reviewModel = false

				})
			},

			//选择柜体

			pickcabinet: function(val, index) {

				var arry = this.cabinet
				var cdata = this.BomArry.cabinet[index]

				if(val == true) {

					arry.push(cdata)
					/**/

				} else {

					var id = cdata.id

					for(var i = 0; i < arry.length; i++) {

						if(id == arry[i].id) {
							arry.splice(i, 1)
						}

					}

				}

				this.cabinet = arry

			},

			//开启包裹窗口

			getparcel: function() {

				if(this.cabinet.length == 0) {
					this.$Message.error('所选打包部件为空！');
					return false;
				}

				this.parcelObj.no = ""
				this.parcelObj.parceArry = this.cabinet
				this.addparcel = true

			},

			//获取订单下包裹
			getorderpack: function(index, type) {

				var typearry = ""
				for(var i = 0; i < type.length; i++) {

					typearry += '&type=' + type[i]

				}

				this.printdata = [];

				var no = this.tableData[this.SetIndex].no
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/storages/4ujh7687hips/finisheds?orderNo=' + no + typearry,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.orderpack = []

					for(var i = 0; i < data.length; i++) {

						that.orderpack.push(data[i])

						if(data[i].in == false) {
							that.orderpack[i]._disabled = true
						}
					}

					that.orderpack = data
					that.orderpackModel = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			reviewpack: function() {
				var no = this.tableData[this.SetIndex].no
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/storages/4ujh7687hips/finisheds?orderNo=' + no,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data;
					that.orderpack = []

					for(var i = 0; i < data.length; i++) {

						that.orderpack.push(data[i])

						if(data[i].in == false) {
							that.orderpack[i]._disabled = true
						}
					}

					that.reviewModel = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			newObjmsg: function() {
				this.objmsg = {
					name: "",
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				}
			},

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {
						"no": "",

					},
					this.pageIndex = 1
				this.getDatas()

			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '产品信息列表'
				});
			},

			getDatas: function() {
				

				
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
				this.axios({
					method: 'get',
					url: '/api/f/customorders/packs?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data
					
					that.tableData=[]

					for(var i = 0; i < data.length; i++) {

						that.tableData.push(data[i])
					}

					that.pageIndextotal = dataAll.pagination.total

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			/*选择市*/

			pickprovince: function(id) {
				/*_this.city=res.data.data*/
				this.cityMsg = ""
				this.districMsgcache = ""

				this.cityData = []
				this.districData = []
				/*this.cityid = 0
				this.districtid = 0*/

				var that = this
				var citycache = this.cityCache
				var cityshow;
				cityshow = citycache[id]

				if(!cityshow) {
					that.axios({
						method: 'get',
						url: '/api/f/cities?parentId=' + id + ''

					}).then(function(res) {

						cityshow = res.data.data

						that.cityCache[id] = cityshow
						that.cityData = that.cityCache[id]

						that.pickdistrict(that.cityData[0].id, 0)

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.cityData = cityshow
					this.pickdistrict(this.cityData[0].id, 0)

				}

			},

			/*选择区*/

			pickdistrict: function(id, index) {
				this.districMsg = ""
				this.districMsgcache = ""
				this.districData = []

				/*	this.districtid = 0
					this.cityid = index*/
				var that = this

				var districtcache = this.districtCache
				var districtshow;

				districtshow = districtcache[id]

				if(!districtshow) {
					that.axios({
						method: 'get',

						//url: '//api/addresses/1234567890000'
						url: '/api/f/cities?parentId=' + id + ''

					}).then(function(res) {

						districtshow = res.data.data
						districtcache[id] = districtshow
						that.districData = districtshow

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.districData = districtshow

				}

			},

			changedistric: function(id) {

				if(!id == true) {
					this.districMsgcache = ""

					return false;
				}
				this.districMsgcache = id

			},

		},

		mounted: function() {

			var cfg = window.lwxfPreload

			if(cfg == "" || cfg == null) {
				return false;
			}

			var useroperations = cfg.preload.userMenu.userOperations
			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			/*	var keyss = useroperations["ordermng_order"].split(',')
				for(var i = 0; i < keyss.length; i++) {
					this.order_operation[keyss[i]] = true
				}
*/

			this.getDatas()

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

			axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

		}

	}
</script>

<style>
	.Drawer_op {
		margin-left: 80px;
	}
	
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
	
	.emsg_center {
		display: block;
		width: 100%;
		height: 500px;
		position: relative;
	}
	
	.emsg_center .emsg_Mu {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100px;
		height: 100%;
		box-sizing: border-box;
		border-right: solid 1px #EEEEEE;
	}
	
	.emsg_center .emsg_Mu ul {
		display: block;
	}
	
	.emsg_center .emsg_Mu ul li {
		display: block;
		line-height: 30px;
		cursor: pointer;
	}
	
	.emsg_center .emsg_Mu ul li:hover {
		color: #777;
	}
	
	.emsg_center .emsg_Mu ul li.ac {
		color: cornflowerblue;
	}
	
	.emsg_center .emsg_itemNav {
		display: block;
		padding-left: 120px;
		height: 500px;
		overflow: auto;
	}
	
	.pack_warning {
		color: red;
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
</style>

<style src='./../../assets/css/department.css'></style>