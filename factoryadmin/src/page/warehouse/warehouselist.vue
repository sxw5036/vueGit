<template>

	<div>

		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>仓库库存管理列表</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<!--{{warehouseId}}-->
		<div class="operation_box">
			<!---->

			<!--<Col span="12">
				<Select v-model="warehouseId" @on-change="getDatas(warehouseId)" style="width:200px">
					<Option v-for="item in warehouseData" :value="item.id" :key="item.id">{{ item.name }}</Option>
				</Select>
				</Col>-->

			<div class="active">

				<div class="ui_operateLeft">
				<!--<span class="operation_span">选择仓库：</span>	
					<Select v-model="warehouseId" @on-change="changewid(warehouseId)" style="width:200px">
					<Option v-for="item in warehouseData" :value="item.id" :key="item.id">{{ item.name }}</Option>
				</Select>-->
					<span class="operation_span">产品名称：</span>

					<input style="width: 200px;"  class="iv_input"  id="p_lea" v-model="searchText" placeholder="请输入产品名称..." />
					<Button icon="ios-search" @click="clicksearch">搜索</Button>
				</div>

				<div class="ui_operateRight">

					<Button @click="newData" style="margin-right: 8px;" shape="circle" icon="ios-refresh"></Button>
					<Button type="info" style="margin-right: 8px;" v-show="warehouseId!=''&&operation.edit==true" @click="IsAwopen">材料入库</Button>
					<Button type="info" @click="leaveOpen" v-show="warehouseId!=''&&operation.edit==true">材料出库</Button>
				</div>
			</div>

		</div>

		<div>

			<Table border :loading="loading" :columns="tableHeader" :data="tableData" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_operate">

				</div>
				<!--@on-change="pageChange"-->
				<div class="ui_page" v-show="tableData.length>0">
					<Page :current="pageIndex" :total="pageTotal" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
				</div>

			</div>

		</div>

		<Modal title="库存入库" v-model="IsAwarehouse" width="1000" :mask-closable="false">
			<div class="operation_box">

				<div class="active">

					<div class="ui_operateLeft">

						<span class="operation_span">编号：</span>
						<input class="iv_input" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5\w]/g,'')" v-model="IsAwObj.no" style="width: 150px;margin-right: 6px;" placeholder="请输入编号..." />

						<span class="operation_span">备注：</span>
						<input class="iv_input" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5\w]/g,'')" v-model="IsAwObj.notes" style="width: 200px;margin-right: 6px;" placeholder="请输入备注信息..." />

						<span class="operation_span">入库类型：</span>
						<Select v-model="IsAwObj.type" style="width: 150px;">
							<Option value="1" key="1">采购入库</Option>
							<Option value="2" key="2">盘盈入库</Option>
							<Option value="3" key="3">订单入库</Option>
							<Option value="4" key="4">手动入库</Option>
						</Select>
					</div>

					<div class="ui_operateRight">

						<Button style="margin-bottom: 10px;" type="primary" @click="GetModelOpen">添加入库材料</Button>
					</div>

				</div>

			</div>

			<Table border :columns="AwHeader" height="500" :data="AwData" ref="selection"></Table>

			<div class="demo-drawer-footer" style="border: none;">
				<Button type="primary" @click="AwIsok">确认入库</Button>
			</div>

		</Modal>

		<Modal title="材料入库" v-model="GetModel" width="1200" :mask-closable="false" @on-cancel="getClose">
			<div class="operation_box">
				<div class="active">

					<div class="ui_operateLeft">

						<span class="operation_span">产品名称：</span>
						<Input style="width: 150px;" v-model="IsAwproduct.name" placeholder="请输入产品名称..." />
						<span class="operation_span">产品分类：</span>
						<Select style="width: 150px;" v-model="IsAwproduct.categoryId">
							<Option v-for="item in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>
						<span class="operation_span">产品编号：</span>
						<Input style="width: 150px;" v-model="IsAwproduct.no" placeholder="请输入产品编号..." />

						<span class="operation_span">选择状态：</span>
						<Select style="width: 150px;" v-model="IsAwproduct.status">
							<Option value="0" key="0">正常</Option>
							<Option value="1" key="1">淘汰</Option>
							<Option value="2" key="2">禁用</Option>
						</Select>

						<Button icon="ios-search" @click="AWpSearch">搜索</Button>

					</div>

					<div class="ui_operateRight">
						<Button @click="AwNewdata" class="p_lea" shape="circle" icon="ios-refresh"></Button>

					</div>

				</div>
			</div>

			<Table border :loading="AWploading" :columns="PdHeader" height="500" :data="productData" ref="selection"></Table>

			<div class="ui_tableBottom">
				<!--@on-change="pageChange"-->
				<div class="ui_page" v-show="tableData.length>0">
					<Page :current="AwpageIndex" :total="AwpageTotal" :page-size="pageSize" @on-change="AwpageChange" show-elevator></Page>
				</div>

			</div>

			<div class="demo-drawer-footer" style="border: none;">
				<Button type="primary" @click="Awcome">确认选择</Button>
			</div>

		</Modal>

		<!--添加仓库列表-end-->

		<!--修改产品库存信息-->
		<Drawer title="修改产品库存信息" v-model="SetModel" width="500">

			<Form :model="SetGetData" :label-width="100">

				<FormItem label="入库价">
					<Input v-model="SetGetData.Setprice" placeholder="请输入产品入库价..."></Input>
				</FormItem>

				<FormItem label="数量">
					<Input v-model="SetGetData.Setquantity" placeholder="请输入产品数量..."></Input>
				</FormItem>

				<FormItem label="所在货架">
					<Select v-model="SetGetData.Setshelf" style="width:200px">
						<Option value="A">A</Option>
						<Option value="B">B</Option>
						<Option value="C">C</Option>
						<Option value="D">D</Option>
						<Option value="E">E</Option>
						<Option value="F">F</Option>
						<Option value="G">G</Option>
					</Select>

				</FormItem>

				<FormItem label="所在货架列位">
					<Select v-model="SetGetData.Setcolumn" style="width:200px">
						<Option value="1">1</Option>
						<Option value="2">2</Option>
						<Option value="3">3</Option>
						<Option value="4">4</Option>
						<Option value="5">5</Option>
						<Option value="6">6</Option>
						<Option value="7">7</Option>
					</Select>
				</FormItem>

				<FormItem label="所在货架层高">
					<Select v-model="SetGetData.Settier" style="width:200px">
						<Option value="1">第一层</Option>
						<Option value="2">第二层</Option>
						<Option value="3">第三层</Option>

					</Select>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="setIsok">确认修改</Button>
			</div>

		</Drawer>

		<!--修改产品库存信息-->

		<Modal title="库存出库" v-model="leaveModel" width="900" :mask-closable="false">

			<div class="operation_box">

				<div class="active" style="width: 100%;">

					<div class="ui_operateLeft">

						<span class="operation_span">编号：</span>
						<Input v-model="IsleaveAwObj.no" style="width: 150px;margin-right: 6px;" placeholder="请输入编号..." />

						<span class="operation_span">备注：</span>
						<Input v-model="IsleaveAwObj.notes" style="width: 200px;margin-right: 6px;" placeholder="请输入备注信息..." />

					</div>
					<div class="ui_operateRight" style="float: right;">

						<Button style="margin-bottom: 10px;" type="primary" @click="leavePickOpen">选择出库材料</Button>

					</div>

				</div>

			</div>

			<Table border :columns="leaveHeader" height="500" :data="leaveData" ref="selection"></Table>

			<!--	<Form :model="leaveData" :label-width="100">

				<FormItem label="出库产品名称">
					{{leaveData.name}}
				</FormItem>

				<FormItem label="出库数量">
					<Input v-model="leaveData.num" :placeholder="leaveData.quantityName"></Input>
				</FormItem>

				

			</Form>-->

			<div class="demo-drawer-footer" style="border: none;">
				<Button type="primary" @click="leaveIsok">确认出库</Button>
			</div>

		</Modal>

		<Modal title="选择库存出库材料" v-model="leavePick" width="800" :mask-closable="false" @on-cancel="leavePickcancel">

			<div class="operation_box">
				<!---->

				<!--<Col span="12">
				<Select v-model="warehouseId" @on-change="getDatas(warehouseId)" style="width:200px">
					<Option v-for="item in warehouseData" :value="item.id" :key="item.id">{{ item.name }}</Option>
				</Select>
				</Col>-->

				<div class="active">

					<div class="ui_operateLeft">
						<input class="iv_input" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5\w]/g,'')" v-model="searchPickText" placeholder="请输入检索条件..." />

					</div>

					<div class="ui_operateRight">
						<Button  icon="ios-search" @click="clickPicksearch">搜索</Button>
						<Button @click="newpickData" style="margin-right: 8px;" shape="circle" icon="ios-refresh"></Button>

					</div>
				</div>

			</div>

			<!--@on-select-all="pickselectAll" @on-selection-change="pickselect"-->

			<Table border :columns="leavePickHeader" :data="leavePickTable" height="500" ref="selection"></Table>
			<div class="ui_tableBottom">

				<div class="ui_operate">

				</div>
				<!--@on-change="pageChange"-->
				<div class="ui_page" v-show="tableData.length>0">
					<Page :current="pickpageIndex" :total="pickpageTotal" :page-size="pageSize" @on-change="pickpageChange" show-elevator></Page>
				</div>

			</div>

			<div class="demo-drawer-footer" style="border: none;">
				<Button type="primary" @click="leavepickIsok">确认选择</Button>
			</div>
		</Modal>

		<Modal v-model="peledel" width="360">
			<p slot="header" style="color:red;text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>删除库存产品信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除库存产品操作</p>
				<p>确定要删除吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="delData">删除</Button>
			</div>
		</Modal>

		<Modal v-model="pdel" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>是否确认删除当前数据？</p>

			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="delData">删除</Button>
			</div>
		</Modal>

	</div>

</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				searchText: "", //检索条件
				tableHeader: [

					{
						title: '产品名称',
						key: 'productName',

					},

					{
						title: '所属仓库',
						key: 'storageName',

					},

					{
						title: '入库价格',
						key: 'price',

					},

					{
						title: '库存数量',
						key: 'quantity',

					},

					{
						title: '预出库数量',
						key: 'preOutput',

					},

					{
						title: '入库时间',
						key: 'operateTime',

					},

					{
						title: '入库人姓名',
						key: 'operatorName',

					},

					{
						title: '所在货架',
						render: (h, params) => {

							var data = params.row

							return h('div', data.shelf + '-' + data.column + '-' + data.tier)
						}

					},

					/*{
						title: '所在货架列数',
						key: 'column',

					},

					{
						title: '所在货架层高',
						key: 'tier',

					},*/

					{
						title: '操作',
						key: 'action',
						width: 180,

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
											click: () => {
												this.SetModel = true
												this.SetModelOpen(params.index)

											}
										}

									}, '编辑'),
									
									h('Button', {
										props: {
											type: 'error',
												size: 'small',
												disabled: !this.operation.delete
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.pdel = true
													this.setIndex = params.index
											}
										}

									}, '删除'),

									]);
							}
						}
					],

					objGetData: { //添加信息
						"productId": "",
						"price": "",
						"quantity": "",

						"shelf": "",
						"column": "",
						"tier": "",

					},

					SetGetData: { //修改信息
						"SetproductId": "",
						"Setprice": "",
						"Setquantity": "",

						"Setshelf": "",
						"Setcolumn": "",
						"Settier": "",

					},

					leaveHeader: [

						{
							title: '产品名称',
							key: 'productName',

						},

						{
							title: '所属仓库',
							key: 'storageName',

						},

						{
							title: '入库价格',
							key: 'price',

						},

						{
							title: '库存数量',
							key: 'quantity',

						},

						{
							title: '所在货架',
							key: 'shelf',

						},

						{
							title: '所在货架列数',
							key: 'column',

						},

						{
							title: '所在货架层高',
							key: 'tier',

						},

						{
							title: '出库数量',
							key: 'pickNum',
							render: (h, params) => {

								var data = params.row

								return h('div', [

									h('Input', {

										props: {
											value: data.pickNum,
											size: 'small'
										},

										on: {
											'input': (val) => {
												//获取输入的数量信息
												this.pickNumKD(params.index, val)

											}
										}
									}),
								])
							}

						},

						{
							title: '操作',
							key: 'action',
							width: 80,

							align: 'center',
							render: (h, params) => {
								return h('div', [

									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												var pid = this.leaveData[params.index].productId

												this.leaveData.splice(params.index, 1)

												/* this.leaveData[params.index].ispick=false*/
												this.pickselectCache = {}
												this.leaveDataCache = {}
												this.leavePickData = []
												for(var n = 0; n < this.leaveData.length; n++) {
													var productid = this.leaveData[n].productId
													var id = this.leaveData[n].id
													this.pickselectCache[productid] = this.leaveData[n]
													this.leaveDataCache[id] = this.leaveData[n]
													this.leavePickData.push(this.leaveData[n])

												}

											}
										}
									}, '删除'),

								]);
							}
						}

					],

					leavePickHeader: [

						{
							title: '选择',
							width: 60,
							render: (h, params) => {

								var data = params.row

								return h('div', [

									h('Checkbox', {

										props: {
											value: data.ispick,
											size: 'small'
										},

										on: {
											'input': (val) => {

												this.pickselect(val, params.index)

											}
										}
									}),
								])
							}

						},

						{
							title: '产品名称',
							key: 'productName',

						},

						{
							title: '所属仓库',
							key: 'storageName',

						},

						{
							title: '入库价格',
							key: 'price',

						},

						{
							title: '库存数量',
							key: 'quantity',

						},

						{
							title: '所在货架',
							key: 'shelf',

						},

						{
							title: '所在货架列数',
							key: 'column',

						},

						{
							title: '所在货架层高',
							key: 'tier',

						},

					],

					/*	leaveData:{
							"name":"",
							"num":"",
							"quantity":"",
							"quantityName":"quantityName",
						},*/

					leaveData: [],
					leaveDataCache: {},
					leavePickData: [],
					leavePickTable: [],
					pickselectCache: {},
					GetModel: false, //弹框开启或关闭	
					ishave: false,
					SetModel: false,
					leaveModel: false,
					leavePick: false,

					IsAwarehouse: false, //入库列表
					AwData: [], //入库数据
					AwDataCache: {},
					Awpickdata: [],
					AwpickCache: {},
					IsAwObj: {
						"notes": "",
						"type": "",
					},

					IsAwproduct: {
						"name": "",
						"categoryId": "",
						"no": "",
						"status": "0",
					},

					IsleaveAwObj: {
						"no": "",
						"notes": "",
					},
					productCategory: [], //全部产品分类
					AwpageIndex: 1,
					AwpageTotal: 0,
					AWploading: false,
					AWpisSearch: false,
					peledel: false,
					AwHeader: [

						{
							title: '产品名称',
							key: 'name',

						},
						{
							title: '产品描述',
							key: 'notes',

						},

						{
							title: '所属仓库',
							key: 'storageName',

						},

						{
							title: '入库价格',
							key: 'price',
							render: (h, params) => {

								var data = params.row

								return h('div', [

									h('Input', {

										props: {
											value: data.price,
											size: 'small'
										},

										on: {
											'input': (val) => {
												this.AwData[params.index].price = val
											}
										}
									}),
								])
							}

						},

						{
							title: '入库数量',
							key: 'quantity',
							render: (h, params) => {

								var data = params.row

								return h('div', [

									h('Input', {

										props: {
											value: data.quantity,
											size: 'small'
										},

										on: {
											'input': (val) => {
												this.AwData[params.index].quantity = val
											}
										}
									}),
								])
							}

						},

						{
							title: '所在货架',
							key: 'shelf',
							render: (h, params) => {

								var data = params.row

								if(!data.ishave) {
									return h('div', [

										h('Select', {

												props: {
													value: data.shelf,

												},

												on: {
													'on-change': (val) => {
														this.AwData[params.index].shelf = val
													}
												}
											}, [
												h('Option', {
													props: {
														value: 'A'
													}
												}, 'A'),

												h('Option', {
													props: {
														value: 'B'
													}
												}, 'B'),

												h('Option', {
													props: {
														value: 'C'
													}
												}, 'C'),

												h('Option', {
													props: {
														value: 'D'
													}
												}, 'D'),

												h('Option', {
													props: {
														value: 'E'
													}
												}, 'E'),

												h('Option', {
													props: {
														value: 'F'
													}
												}, 'F'),

												h('Option', {
													props: {
														value: 'G'
													}
												}, 'G'),
											]

										),
									])
								} else {

									var data = params.row

									return h('div', [

										h('Input', {

											props: {
												value: data.shelf,
												size: 'small',
												disabled: 'disabled',
											},

										}),
									])

								}

							}

						},

						{
							title: '所在货架列数',
							key: 'column',
							render: (h, params) => {

								var data = params.row

								if(!data.ishave) {
									return h('div', [

										h('Select', {

												props: {
													value: data.column,

												},

												on: {
													'on-change': (val) => {
														this.AwData[params.index].column = val
													}
												}
											}, [
												h('Option', {
													props: {
														value: '1'
													}
												}, '1'),

												h('Option', {
													props: {
														value: '2'
													}
												}, '2'),

												h('Option', {
													props: {
														value: '3'
													}
												}, '3'),

												h('Option', {
													props: {
														value: '4'
													}
												}, '4'),

												h('Option', {
													props: {
														value: '5'
													}
												}, '5'),

												h('Option', {
													props: {
														value: '6'
													}
												}, '6'),

												h('Option', {
													props: {
														value: '7'
													}
												}, '7'),
											]

										),
									])
								} else {

									var data = params.row

									return h('div', [

										h('Input', {

											props: {
												value: data.column,
												size: 'small',
												disabled: 'disabled',
											},

										}),
									])

								}

							}

						},

						{
							title: '所在货架层高',
							key: 'tier',
							render: (h, params) => {

								var data = params.row

								if(!data.ishave) {
									return h('div', [

										h('Select', {

												props: {
													value: data.tier,

												},

												on: {
													'on-change': (val) => {
														this.AwData[params.index].tier = val
													}
												}
											}, [
												h('Option', {
													props: {
														value: '1'
													}
												}, '第一层'),

												h('Option', {
													props: {
														value: '2'
													}
												}, '第二层'),

												h('Option', {
													props: {
														value: '3'
													}
												}, '第三层'),

											]

										),
									])
								} else {

									var data = params.row

									return h('div', [

										h('Input', {

											props: {
												value: data.tier,
												size: 'small',
												disabled: 'disabled',
											},

										}),
									])

								}

							}

						},

						{
							title: '操作',
							key: 'action',
							width: 80,

							align: 'center',
							render: (h, params) => {
								return h('div', [

									h('Button', {
										props: {
											type: 'primary',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {

												var pid = this.AwData[params.index].id

												this.AwData.splice(params.index, 1)

												this.AwpickCache = {}
												this.AwDataCache = {}
												this.Awpickdata = []
												for(var n = 0; n < this.AwData.length; n++) {
													var productid = this.AwData[n].id
													this.AwpickCache[productid] = this.AwData[n]
													this.AwDataCache[productid] = this.AwData[n]
													this.Awpickdata.push(this.AwData[n])
												}

												/*for(var i = 0; i < this.productData.length; i++) {
													var productid = this.productData[i].id

													if(pid == productid) {

														this.productData[i].ispick = false
													}

												}*/

											}
										}
									}, '删除'),

								]);
							}
						}

					],

					//入库材料表格
					PdHeader: [{
							title: '',
							width: 60,
							align: 'center',
							fixed: 'left',
							render: (h, params) => {

								var data = params.row

								return h('div', [

									h('Checkbox', {

										props: {
											value: data.ispick,
											size: 'small'
										},

										on: {
											'input': (val) => {

												this.comeInselect(val, params.index)

											}
										}
									}),
								])
							}

						},

						{
							title: '产品名称',
							key: 'name',
							width: 160,
							fixed: 'left',
						},

						{
							title: '产品描述',
							key: 'notes',
							width: 200,
						},

						{
							title: '产品状态',
							key: 'notes',
							width: 100,
							render: (h, params) => {

								var status = params.row.status

								if(status == 0) {
									var texts = "正常"
								} else if(status == 1) {
									var texts = "淘汰"
								} else if(status == 2) {
									var texts = "禁用"
								}
								return h('div', texts)
							}
						},

						{
							title: '产品编号',
							key: 'no',
							width: 200,
						},

						{
							title: '产品分类',
							key: 'categoryName',
							width: 150,
						},

						{
							title: '产品材质',
							key: 'materialName',
							width: 150,
						},

						{
							title: '产品颜色',
							key: 'colorName',
							width: 150,
						},

						{
							title: '产品规格',
							key: 'specName',
							width: 150,
						},

					],

					tableData: [], //数据信息
					tableDataCache: {}, //数据缓存数据
					productData: [], //产品信息
					productCache: {}, //产品缓存
					warehouseId: "",
					warehouseName: "",
					warehouseData: [],
					warehouseCache: {},
					setIndex: "",
					pageIndex: 1, //分页页数
					pageTotal: 0,
					pageSize: 10,

					pickpageTotal: 0,
					pickpageIndex: 1,
					pickisSearch: false,
					loading: false,
					isSearch: false,
					pdel: false,
					searchPickText: "", //选择出库材料时的检索信息
					operation: {}

				};
			},

			methods: {
				
				changewid:function(id){
					this.pageIndex = 1
					this.warehouseId=id
					this.searchText=""
					this.getDatas(id)
					
				},

					//检索信息

					clicksearch: function() {
						var val = this.searchText

						if(val == "" || val == null || val.trim().length == 0) {
							this.newData();
							return false;
						} else {
							this.pageIndex = 1
							this.searchData()
						}

					},

					searchData: function() {

						var that = this

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						var that = this
						//请求库存信息
						this.axios({
							method: 'get',
							url: '/api/f/storages/' + this.warehouseId + '/stocks?productName=' + this.searchText + '&pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

						}).then(function(res) {
							setTimeout(msg, 100);
							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var data = res.data.data
							var dataCache = []

							that.tableDataCach = dataCache

							that.tableData = data
							that.pageTotal = res.data.pagination.total
							//that.$Message.success("请求成功")

							that.isSearch = true //当前数据获取方式为检索获取
							that.loading = false

						}).catch(function(err) {

							that.$Message.error('出错了，请稍后重试！');
							setTimeout(msg, 100);
							that.loading = false

						})
					},

					GetModelOpen: function() {

						this.IsAwarehouse = false
						this.GetModel = true
						this.ishave = false
						this.objGetData = {
							"productId": "",
							"price": "",
							"quantity": "",

							"shelf": "",
							"column": "",
							"tier": "",
						}

						for(let i = 0; i < this.productData.length; i++) {
							this.productData[i].ispick = false
							if(this.AwDataCache[this.productData[i].id]) {
								this.productData[i].ispick = true
							}

						}

					},

					getDatas: function(warehouseid) {

						this.pageIndex = 1

						this.getdata(warehouseid)

					},

					getIshave: function(id) {

						if(this.tableDataCach[id]) {

							this.ishave = true
							var datac = this.tableDataCach[id]

							this.objGetData.shelf = datac.shelf.toString()
							this.objGetData.column = datac.column.toString()
							this.objGetData.tier = datac.tier.toString()

						} else {
							this.ishave = false;
							this.objGetData.shelf = ""
							this.objGetData.column = ""
							this.objGetData.tier = ""

						}

					},

					//获取要修改的信息

					SetModelOpen: function(index) {

						this.setIndex = index
						var data = this.tableData[index]

						this.SetGetData.SetproductId = data.productId
						this.SetGetData.Setprice = data.price
						this.SetGetData.Setquantity = data.quantity

						this.SetGetData.Setshelf = data.shelf
						this.SetGetData.Setcolumn = data.column.toString()
						this.SetGetData.Settier = data.tier.toString()

					},

					//确认修改信息
					setIsok: function() {

						var id = this.tableData[this.setIndex].id
						var num = /^\d+(\.\d+)?$/
						var nu = /^[0-9]*$/
						var setobjdata = this.SetGetData

						var productid = setobjdata.SetproductId
						var price = setobjdata.Setprice
						var quantity = setobjdata.Setquantity

						var shelf = setobjdata.Setshelf
						var column = setobjdata.Setcolumn
						var tier = setobjdata.Settier

						if(price == "" || price == null || price.length == 0) {
							this.$Message.error('产品入库价不能为空！');
							return false;
						} else if(num.test(price) == false) {
							this.$Message.error('产品入库价请输入数字！');
							return false;
						} else if(quantity == "" || quantity == null || quantity.length == 0) {
							this.$Message.error('产品数量不能为空！');
							return false;
						} else if(nu.test(quantity) == false) {
							this.$Message.error('产品数量只能输入数字！');
							return false;
						} else if(shelf == "" || shelf == null) {
							this.$Message.error('请选择产品入库货架位置！');
							return false;
						} else if(column == "" || column == null) {
							this.$Message.error('请选择产品入库货架列位！');
							return false;
						} else if(tier == "" || tier == null) {
							this.$Message.error('请选择产品入库货架层数！');
							return false;
						} else {

							const msg = this.$Message.loading({
								content: 'Loading...',
								duration: 0
							});

							var that = this

							axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

							//修改库存
							this.axios({
								method: 'put',
								url: '/api/f/storages/' + this.warehouseId + '/stocks/' + id,

								data: {

									"price": price,
									"quantity": quantity,

									"shelf": shelf,
									"column": column,
									"tier": tier,

								}

							}).then(function(res) {

								var verify = [{
										"name": "price",
										"note": "产品入库价"
									},
									{
										"name": "quantity",
										"note": "产品数量 "
									},
									{
										"name": "shelf",
										"note": "产品入库货架位置 "
									},
									{
										"name": "column",
										"note": "产品入库货架列位 "
									},
									{
										"name": "tier",
										"note": "产品入库货架层数 "
									}
								]

								setTimeout(msg, 100);
								if(Isjurisdiction.isright(res, that, verify) == false) {
									return false
								}
								var data = res.data.data

								that.tableData[that.setIndex].price = data.price
								that.tableData[that.setIndex].quantity = data.quantity

								that.tableData[that.setIndex].typeName = data.typeName
								that.tableData[that.setIndex].shelf = data.shelf
								that.tableData[that.setIndex].column = data.column
								that.tableData[that.setIndex].tier = data.tier

								that.tableDataCach[data.productId] = data

								that.$Message.success("修改成功")

								that.SetModel = false

							}).catch(function(err) {

								that.$Message.error('出错了，请稍后重试！');
								setTimeout(msg, 100);
								that.SetModel = false

							})

						}

					},

					//删除仓库信息

					delData: function() {

						var index = this.setIndex
						var index = this.setIndex
						var id = this.tableData[index].id
						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						var that = this

						axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-delete"

						//修改库存
						this.axios({
							method: 'delete',
							url: '/api/f/storages/' + this.warehouseId + '/stocks/' + id,

						}).then(function(res) {
							setTimeout(msg, 100);
							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							that.tableData.splice(index, 1)

							that.$Message.success("删除成功")
							that.getdataAll(that.warehouseId)

							that.pdel = false
							that.peledel = false

						}).catch(function(err) {

							that.$Message.error('出错了，请稍后重试！');
							setTimeout(msg, 100);
							that.SetModel = false

						})

					},

					//打开选择仓库产品
					leavePickOpen: function() {

						for(let i = 0; i < this.leavePickTable.length; i++) {
							this.leavePickTable[i].ispick = false

							if(this.leaveDataCache[this.leavePickTable[i].id]) {
								this.leavePickTable[i].ispick = true
							}

						}

						this.leaveModel = false
						this.leavePick = true

					},

					leavePickcancel: function() {
						this.leaveModel = true
						this.leavePick = false
					},

					//出库单个表格选择

					pickselect: function(val, index) {

						var datacache = this.pickselectCache
						var data = this.leavePickTable[index]

						if(val == true) {

							if(!datacache[data.productId]) {
								data.pickNum = "1"
								this.leavePickData.push(data)
								datacache[data.productId] = data
								this.pickselectCache = datacache

							}

							this.leavePickTable[index].ispick = true

						} else {

							for(var i = 0; i < this.leavePickData.length; i++) {
								if(data.productId == this.leavePickData[i].productId) {
									this.leavePickData.splice(i, 1)
									this.pickselectCache = {}
									for(var n = 0; n < this.leavePickData.length; n++) {
										var productid = this.leavePickData[n].productId
										this.pickselectCache[productid] = this.leavePickData[n]
									}
								}
							}

							this.leavePickTable[index].ispick = false
						}

						/*this.leavePickData = selectval*/
					},

					/*入库单模块*/

					//查询要入库的材料产品

					getproducts: function() {
						//请求产品

						this.AWploading = true

						var that = this

						this.axios({
							method: 'get',
							url: '/api/f/products?status=0&pageNum=' + this.AwpageIndex + '&pageSize=' + this.pageSize,

						}).then(function(res) {

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var data = res.data.data

							that.AwpageTotal = res.data.pagination.total

							var productcache = that.productCache

							for(var i = 0; i < data.length; i++) {
								var id = data[i].id
								productcache[id] = data[i]
								data[i].ispick = false

								if(that.AwDataCache[id]) {
									data[i].ispick = true
								}
							}

							that.productData = data

							that.productCache = productcache

							that.AWploading = false

						}).catch(function(err) {

							that.$Message.error('出错了，请稍后重试！');
							that.AWploading = false

						})
					},

					IsAwopen: function() {

						this.AwData = [];
						this.AwDataCache = [];
						this.Awpickdata = [];
						this.AwpickCache = {}
						this.IsAwarehouse = true;

						for(var i = 0; i < this.productData.length; i++) {

							this.productData[i].ispick = false

						}

						this.IsAwObj = {
							"no": '',
							"notes": "",
							"type": "",
						};

						this.AwNewdata()

					},

					getClose: function() {

						this.IsAwarehouse = true;
						this.GetModel = false
					},

					//确认添加库存
					getIsok: function() {

						var num = /^\d+(\.\d+)?$/
						var nu = /^[0-9]*$/;
						var objdata = this.objGetData;
						var productid = objdata.productId;
						var price = objdata.price;
						var quantity = objdata.quantity;

						var shelf = objdata.shelf;
						var column = objdata.column;
						var tier = objdata.tier

						if(productid == "" || productid == null || productid.trim().length == 0) {
							this.$Message.error('产品不能为空！');
							return false;
						} else if(price == "" || price == null || price.trim().length == 0) {
							this.$Message.error('产品入库价不能为空！');
							return false;
						} else if(num.test(price) == false) {
							this.$Message.error('产品入库价格式不正确！');
							return false;
						} else if(quantity == "" || quantity == null || quantity.trim().length == 0) {
							this.$Message.error('产品数量不能为空！');
							return false;
						} else if(nu.test(quantity) == false) {
							this.$Message.error('产品数量只能输入数字！');
							return false;
						} else if(shelf == "" || shelf == null) {
							this.$Message.error('请选择产品入库货架位置！');
							return false;
						} else if(column == "" || column == null) {
							this.$Message.error('请选择产品入库货架列位！');
							return false;
						} else if(tier == "" || tier == null) {
							this.$Message.error('请选择产品入库货架层数！');
							return false;
						} else {

							var that = this

							var data = objdata;

							data.productName = that.productCache[productid].name
							data.storageName = that.warehouseCache[that.warehouseId].name

							if(that.AwData.length == 0) {
								that.AwData.push(data)
							} else {
								for(var i = 0; i < that.AwData.length; i++) {
									if(data.productId == that.AwData[i].productId) {
										that.AwData[i].price = data.price
										that.AwData[i].quantity = data.quantity

										that.AwData[i].typeName = data.typeName
										that.AwData[i].shelf = data.shelf
										that.AwData[i].column = data.column
										that.AwData[i].tier = data.tier

									} else {
										that.AwData.push(data)
									}

								}
							}

							that.$Message.success("添加成功")
							that.tableDataCach[data.productId] = data
							that.GetModel = false
							that.IsAwarehouse = true

						}

					},

					//入库库单个表格选择

					comeInselect: function(val, index) {

						var datacache = this.AwpickCache
						var data = this.productData[index]

						if(val) {

							if(!datacache[data.id]) {

								if(!this.tableDataCach[data.id]) {

									data.productName = this.productCache[data.id].name;
									data.storageName = this.warehouseCache[this.warehouseId].name
									data.quantity = "1"
									data.shelf = ""
									data.column = ""
									data.tier = ""
									data.price = ""
									data.ispick = false
									data.ishave = false
									this.Awpickdata.push(data)
									datacache[data.id] = data
									this.AwpickCache = datacache

								} else {

									var datac = this.tableDataCach[data.id]
									data.productName = this.productCache[data.id].name;
									data.storageName = this.warehouseCache[this.warehouseId].name
									data.quantity = "1"
									data.shelf = datac.shelf.toString()
									data.column = datac.column.toString()
									data.tier = datac.tier.toString()
									data.price = datac.price
									data.ispick = true
									data.ishave = true
									this.Awpickdata.push(data)
									datacache[data.id] = data
									this.AwpickCache = datacache

								}
								/*
								 * 
								 *

								data.productName = this.productCache[data.id].name;
								data.storageName = this.warehouseCache[this.warehouseId].name
						
								*/

							}

							this.productData[index].ispick = true

						} else {

							for(var i = 0; i < this.Awpickdata.length; i++) {

								if(data.id == this.Awpickdata[i].id) {
									this.Awpickdata.splice(i, 1)
									this.AwpickCache = {}
									for(var n = 0; n < this.Awpickdata.length; n++) {
										var id = this.Awpickdata[n].id
										this.AwpickCache[id] = this.Awpickdata[n]
									}
								}
							}

							this.productData[index].ispick = false

						}

						/*this.leavePickData = selectval*/

						console.log(this.Awpickdata)
					},

					//入库产品材料检索

					AWpSearch: function() {
						var Isawproduct = this.IsAwproduct

						var name = Isawproduct.name
						var categoryid = Isawproduct.categoryId
						var no = Isawproduct.no
						var status = Isawproduct.status

						if(name.trim().length == 0 && categoryid == "" && no.trim().length == 0 && status == null) {
							this.AwNewdata();

							return false;
						} else {
							this.pageIndex = 1
							this.AWpSearchData()
						}

					},

					//调用入库产品材料检索api接口
					AWpSearchData: function() {

						var Isawproduct = this.IsAwproduct

						var name = Isawproduct.name
						var categoryid = Isawproduct.categoryId
						var No = Isawproduct.no
						var status = Isawproduct.status

						var pathurl = ""

						if(name != "" && name != null && name.length != 0) {
							pathurl += 'name=' + name + "&"
						}

						if(categoryid != "" && categoryid != null && categoryid.length != 0) {
							pathurl += 'categoryId=' + categoryid + "&"
						}
						if(No != "" && No != null && No.length != 0) {
							pathurl += 'no=' + No + "&"
						}

						if(status != "" && status != null && status.length != 0) {
							pathurl += 'status=' + status + "&"
						}

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						var that = this
						//请求产品
						this.axios({
							method: 'get',
							url: '/api/f/products?' + pathurl + 'pageNum=' + this.AwpageIndex + '&pageSize=' + this.pageSize,

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var dataAll = res.data
							var data = res.data.data

							for(var i = 0; i < data.length; i++) {
								var id = data[i].id
								if(that.AwDataCache[id]) {
									data[i].ispick = true
								}
							}

							/*
												for(var i = 0; i < data.length; i++) {
													var status = data[i].status

													if(status == 0) {

														data[i].statusName = '正常'
													} else if(status == 1) {

														data[i].statusName = '淘汰'
													} else if(status == 2) {

														data[i].statusName = '禁用'
													}

													var unit = data[i].unit
													if(unit == 0) {

														data[i].unitName = '个'
													} else if(unit == 1) {

														data[i].unitName = '张'
													} else if(unit == 2) {

														data[i].unitName = '米'
													} else if(unit == 3) {

														data[i].unitName = '平方米'
													} else if(unit == 4) {

														data[i].unitName = '包'
													}

												}*/

							that.productData = data
							that.AwpageTotal = dataAll.pagination.total
							//that.$Message.success("请求成功")
							that.AWpisSearch = true

						}).catch(function(err) {
							setTimeout(msg, 100);
							that.$Message.error('出错了，请稍后重试！');

						})
					},

					//入库待选商品分页
					AwpageChange: function(index) {

						this.AwpageIndex = index

						if(this.AWpisSearch == true) {
							this.AWpSearchData()
						} else {
							this.getproducts()
						}

					},

					//把选择好的入库产品材料生产表单
					Awcome: function() {

						let sltAwdata = this.Awpickdata;

						this.AwData = []
						this.AwDataCache = []
						if(sltAwdata != null && sltAwdata.length > 0) {
							for(var i = 0; i < sltAwdata.length; i++) {
								this.AwData.push(sltAwdata[i]);
								this.AwDataCache[sltAwdata[i].id] = sltAwdata[i]
							}
						}
						this.GetModel = false
						this.IsAwarehouse = true

					},

					//确认入库

					AwIsok: function() {

						var type = this.IsAwObj.type
						var no = this.IsAwObj.no
						var notes = this.IsAwObj.notes
						var num = /^\d+(\.\d+)?$/
						var nu = /^[0-9]*$/;

						if(no == "" || no == null || no.trim().length == 0) {
							this.$Message.error('入库编号不能为空！');
							return false;
						} else if(type == "" || type == null) {
							this.$Message.error('材料入库类型不能为空！');
							return false;
						} else if(this.AwData.length == 0) {
							this.$Message.error('材料入库不能为空！');
							return false;
						} else {
							var warehousedata = []
							for(var i = 0; i < this.AwData.length; i++) {

								var awdata = this.AwData[i]
								var price = awdata.price

								var quantity = awdata.quantity
								if(price == "" || price == "" || price.length == 0) {
									this.$Message.error('第' + (i + 1) + '个材料入库价格不能为空！');
									return false;
								} else if(num.test(price) == false) {
									this.$Message.error('第' + (i + 1) + '个材料入库价格格式不正确！');
									return false;
								} else if(quantity == "" || quantity == "" || quantity.length == 0) {
									this.$Message.error('第' + (i + 1) + '个材料入库数量不能为空！');
									return false;
								} else if(nu.test(quantity) == false) {
									this.$Message.error('第' + (i + 1) + '个材料入库数量格式不正确！');
									return false;
								} else if(awdata.shelf == "" || awdata.shelf == null) {
									this.$Message.error('请选择第' + (i + 1) + '个材料入库货架！');

									return false;
								} else if(awdata.column == "" || awdata.column == null) {
									this.$Message.error('请选择第' + (i + 1) + '个材料入库列数！');
									return false;
								} else if(awdata.tier == "" || awdata.tier == null) {
									this.$Message.error('请选择第' + (i + 1) + '个材料入库层数！');
									return false;
								} else {
									var obj = {
										productId: awdata.id,
										quantity: quantity,
										price: price,
										shelf: awdata.shelf,
										column: awdata.column,
										tier: awdata.tier,
									}

									warehousedata.push(obj)
								}

							}

							const msg = this.$Message.loading({
								content: 'Loading...',
								duration: 0
							});

							var that = this
							//产品入库
							this.axios({
								method: 'post',
								url: '/api/f/storages/outputins/' + this.warehouseId + '/in',

								data: {
									no: no,
									notes: notes,
									type: type,
									storageOutputInItemList: warehousedata,
								}

							}).then(function(res) {
								setTimeout(msg, 100);
								if(Isjurisdiction.isright(res, that) == false) {
									return false
								}

								that.$Message.success("提交入库成功，已进入到出入库管理进行审核。")

								that.IsAwarehouse = false

							}).catch(function(err) {

								that.$Message.error('出错了，请稍后重试！');
								setTimeout(msg, 100);
								that.IsAwarehouse = false

							})

						}

					},

					//刷新选择入库产品材料数据

					AwNewdata: function() {
						this.AwpageIndex = 1;
						this.IsAwproduct = {
							"name": "",
							"categoryId": "",
							"no": "",
							"status": "0",
						};
						this.getproducts()
					},

					/*入库单-end*/
					pickselectAll: function(selectval) {
						this.leavePickData = selectval
					},

					//确认选择出库产品

					leavepickIsok: function() {

						let sltAwdata = this.leavePickData;
						this.leaveData = []
						this.leaveDataCache = {}
						if(sltAwdata != null && sltAwdata.length > 0) {
							for(var i = 0; i < sltAwdata.length; i++) {
								this.leaveData.push(sltAwdata[i]);
								this.leaveDataCache[sltAwdata[i].id] = sltAwdata[i]
							}
						}

						this.leaveModel = true
						this.leavePick = false

					},
					//打开出库单
					leaveOpen: function() {

						this.searchPickText = "" //出库检索为空

						this.IsleaveAwObj = {
								"no": "",
								"notes": "",
							},

							this.leaveModel = true
						this.leaveData = []
						this.leaveDataCache = {}
						this.leavePickData = []
						this.pickselectCache = {}
						this.$refs.selection.selectAll(false);

						this.getdataPick(this.warehouseId)

						/*	this.leaveData={
								"name":"",
								"num":"",
								"quantity":"",
								"quantityName":"quantityName",
							},*/

						/*this.setIndex = index
						var data = this.tableData[index]*/
						/*this.leaveData.name=data.productName
						this.leaveData.quantity=data.quantity
						this.leaveData.quantityName="最大出库量为"+data.quantity*/

					},

					pickNumKD: function(index, val) {

						var nu = /^[0-9]*$/

						if(nu.test(val) == false) {
							this.$Message.error('第' + (index + 1) + '个材料仓库数量请输入数字！');
							return false;
						} else if(val.trim() > this.leaveData[index].quantity) {
							this.$Message.error('出库数量不得大于库存！');
							return false;
						} else if(val == "" || val == null || val.trim().length == 0) {
							//
							this.$Message.error('出库数量不能为空！');

						}

						this.leaveData[index].pickNum = val.trim()
					},

					//确认出库

					leaveIsok: function() {

						var leavedata = this.leaveData
						var isleaveawobj = this.IsleaveAwObj

						var no = isleaveawobj.no
						var notes = isleaveawobj.notes

						if(no == "" || no == null || no.trim().length == 0) {
							this.$Message.error('请选择出库单编号不能为空！');
							return false;
						} else if(leavedata.length == 0) {
							this.$Message.error('请选择出库材料！');
							return false;
						} else {

							var warehousedata = []
							for(var i = 0; i < this.leaveData.length; i++) {
								var pickNumVal = this.leaveData[i].pickNum.trim()
								if(pickNumVal == "" || pickNumVal == null || pickNumVal.length == 0) {
									this.$Message.error('第' + (i + 1) + '个材料出库数量不能为空！');
									return false;
								} else {
									var obj = {
										productId: this.leaveData[i].productId,
										price: this.leaveData[i].price,
										quantity: pickNumVal,
									}

									warehousedata.push(obj)
								}

							}

							const msg = this.$Message.loading({
								content: 'Loading...',
								duration: 0
							});

							var that = this
							//产品出库
							this.axios({
								method: 'post',
								url: '/api/f/storages/outputins/' + this.warehouseId + '/out',

								data: {
									"no": no,
									"type": "0",
									"notes": notes,
									"storageOutputInItemList": warehousedata

								}

							}).then(function(res) {
								setTimeout(msg, 100);
								if(Isjurisdiction.isright(res, that) == false) {
									return false
								}

								var data = res.data.data
								console.log(data)
								that.pageIndex = 1
								that.getdata(that.warehouseId)

								that.$Message.success("提交出库成功，已进入到出入库管理进行审核。")

								that.leaveModel = false

							}).catch(function(err) {

								that.$Message.error('出错了，请稍后重试！');
								setTimeout(msg, 100);
								that.leaveModel = false

							})

						}

						/*var id = this.tableData[this.setIndex].id
						var quantity = this.tableData[this.setIndex].quantity
						var leaveNum = this.leaveData.num.trim()
						var nu = /^[0-9]*$/

						if(leaveNum == "" || leaveNum == null || leaveNum.length == 0) {
							this.$Message.error('产品出库数量不能为空！');
							return false;
						} else if(nu.test(leaveNum) == false) {
							this.$Message.error('产品出库数量只能输入数字！');
							return false;
						} else if(leaveNum > quantity) {
							this.$Message.error('出库数量不能大于库存数量！');
							return false;
						} else {
							const msg = this.$Message.loading({
								content: 'Loading...',
								duration: 0
							});

							var that = this
							//产品出库
							this.axios({
								method: 'put',
								url: '/api/f/storage/' + this.warehouseId + '/stocks/' + id + '/' + leaveNum,

							}).then(function(res) {
								setTimeout(msg, 100);
								if(Isjurisdiction.isright(res, that) == false) {
									return false
								}

								console.log(res)

								var data = res.data.data

								that.tableData[that.setIndex].quantity = data.quantity

								that.$Message.success("出库成功")

								that.leaveModel = false

							}).catch(function(err) {

								that.$Message.error('出错了，请稍后重试！');
								setTimeout(msg, 100);
								that.leaveModel = false

							})

						}*/

					},

					//获取库存信息
					getdata: function(id) {

						var that = this

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						var that = this
						//请求库存信息
						this.axios({
							method: 'get',
							url: '/api/f/storages/' + id + '/stocks?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

						}).then(function(res) {

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var data = res.data.data
							/*var dataCache = []
					for(var i = 0; i < data.length; i++) {

						dataCache[data[i].productId] = data[i]

					}

					that.tableDataCach = dataCache
*/
							that.tableData = data
							that.pageTotal = res.data.pagination.total

							setTimeout(msg, 100);
							that.loading = false

						}).catch(function(err) {

							that.$Message.error('出错了，请稍后重试！');
							setTimeout(msg, 100);
							that.loading = false

						})
					},

					//获取全部仓库数据
					getdataAll: function(id) {

						var that = this
						//请求库存信息
						this.axios({
							method: 'get',
							url: '/api/f/storages/' + id + '/stocks?pageNum=' + this.pageIndex + '&pageSize=10000',

						}).then(function(res) {

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var data = res.data.data
							var dataCache = []
							for(var i = 0; i < data.length; i++) {

								dataCache[data[i].productId] = data[i]

							}

							that.tableDataCach = dataCache

							that.loading = false

						}).catch(function(err) {

							that.$Message.error('出错了，请稍后重试！');

							that.loading = false

						})
					},

					//获取选择出库仓库数据
					getdataPick: function(id) {

						var that = this

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						var that = this
						//请求库存信息
						this.axios({
							method: 'get',

							url: '/api/f/storages/' + id + '/stocks?pageNum=' + this.pickpageIndex + '&pageSize=' + this.pageSize,

						}).then(function(res) {

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var data = res.data.data

							for(var i = 0; i < data.length; i++) {

								var id = data[i].id
								data[i].ispick = false
								if(that.leaveDataCache[id]) {
									data[i].ispick = true
								}

							}
							//
							that.pickpageTotal = res.data.pagination.total
							that.leavePickTable = data

							setTimeout(msg, 100);
							that.loading = false

						}).catch(function(err) {

							that.$Message.error('出错了，请稍后重试！');
							setTimeout(msg, 100);
							that.loading = false

						})
					},

					//验证输入检索选择出库材料信息
					clickPicksearch: function() {
						var val = this.searchPickText

						if(val == "" || val == null || val.trim().length == 0) {
							this.$Message.error('检索条件不能为空');
							return false;
						} else {
							/* this.leavePickTable=this.leavePickTableCache
							 this.leavePickTable = this.search(this.leavePickTable, {name: val});
							*/

							this.searchPickData() //api
						}
					},

					//本地检索
					search: function(data, argumentObj) {
						/*    let res = data;
						    let dataClone = data;
						    for (let argu in argumentObj) {
						        if (argumentObj[argu].length > 0) {
						            res = dataClone.filter(d => {
						                return d[argu].indexOf(argumentObj[argu]) > -1;
						            });
						            dataClone = res;
						        }
						    }
						    return res;*/
					},

					//检索出库材料信息接口

					searchPickData: function() {
						var that = this

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						var that = this
						//请求库存信息
						this.axios({
							method: 'get',
							url: '/api/f/storages/' + this.warehouseId + '/stocks?productName=' + this.searchPickText + '&pageNum=' + this.pickpageIndex + '&pageSize=' + this.pageSize,

						}).then(function(res) {

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var data = res.data.data

							for(var i = 0; i < data.length; i++) {
								var id = data[i].id

								data[i].ispick = false
								if(that.leaveDataCache[id]) {
									data[i].ispick = true
								}
							}

							that.pickpageTotal = res.data.pagination.total
							that.leavePickTable = data

							//that.$Message.success("请求成功")
							setTimeout(msg, 100);
							that.pickisSearch = false
							that.loading = false

						}).catch(function(err) {

							that.$Message.error('出错了，请稍后重试！');
							setTimeout(msg, 100);
							that.loading = false

						})
					},

					pageChange: function(index) {
						//当打开选择出库材料窗口时 调用分页时清空已选择材料的数据
						/* this.leaveData = []
						this.$refs.selection.selectAll(false);*/
						//

						this.pageIndex = index
						//判断分页是否以检索的方式请求
						if(this.isSearch == true) {
							this.searchData()
						} else {
							this.getdata(this.warehouseId)
						}

					},

					pickpageChange: function(index) {
						this.pickpageIndex = index

						if(this.pickisSearch == true) {
							this.searchPickData()
						} else {
							this.getdataPick(this.warehouseId)

						}
					},

					pathchange: function() {

						axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

						var keydata = this.$route.query.key
						var operation = this.operation
						Isjurisdiction.user_jurisdiction(keydata, operation)

						this.warehouseId = this.$route.query.pathdata

						this.getdata(this.warehouseId)
						this.getdataPick(this.warehouseId)
						this.getdataAll(this.warehouseId)

						this.getproducts()
					},

					//刷新数据

					newData: function() {
						this.isSearch = false
						this.searchText = ""
						this.pageIndex = 1
						this.getdata(this.warehouseId)

					},

					//刷新选择出库材料数据
					newpickData: function() {
						this.pickisSearch = false
						this.searchPickText = ""
						this.pickpageIndex = 1
						this.getdataPick(this.warehouseId)

					}

					//刷新

				},

				mounted: function() {

					var that = this
					this.pathchange()

					//请求仓库
					this.axios({
						method: 'get',
						url: '/api/f/storages'

					}).then(function(res) {

						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						var data = res.data.data
						var warehousecache = that.warehouseCache
						for(var i = 0; i < data.length; i++) {
							var id = data[i].id

							warehousecache[id] = data[i]
						}

						that.warehouseCache = warehousecache

						that.warehouseData = data

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');

					})

					//请求产品全部分类信息
					this.axios({
						method: 'get',
						url: '/api/f/productcategories',

					}).then(function(res) {

						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}
						var data = res.data.data
						that.productCategory = data

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');

					})

				},

				watch: {
					$route: "pathchange"
				}

		}
</script>

<style>
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
</style>