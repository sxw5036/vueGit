<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>供应商列表</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div>

			<Row>
				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>今日意向供应商数量</h3>
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
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>今日签约供应商数量</h3>
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
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>今日下单供应商数量</h3>
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
											<p>韩火火于09-3-14添加供应商马小跳</p>
											<small class="Time">13：30</small>
										</li>
										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加供应商马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加供应商马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加供应商马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加供应商马小跳</p>
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

		<!--op-->
		<div class="table_nav_iv">
			<div class="operation_box">
				<div class="active">
					<!---->
					<div class="ui_operateLeft" style="line-height: 32px;">

						<ul class="tab">
							<li class="tab_item">
								<div class="lable">公司名称</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" v-model="searchObj.name" placeholder="请输入公司名称..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">联系电话</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.leaderTel" placeholder="请输入联系电话..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary" icon="ios-search" @click="clicksearch">搜索</Button>
									<Button type="primary" @click="newData" class="p_lea" icon="ios-refresh">重置</Button>
								</div>
							</li>

						</ul>

						<!--<span class="operation_span">公司名称：</span>
					<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.name" placeholder="请输入公司名称..." />
					<span class="operation_span">联系电话：</span>
					<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.leaderTel" placeholder="请输入联系电话..." />
<Button icon="ios-search" @click="clicksearch">搜索</Button>
						<Button @click="newData" class="p_lea" shape="circle" icon="ios-refresh"></Button>
					<Button icon="ios-search" @click="clicksearch">搜索</Button>-->
					</div>

					<div class="ui_operateRight">

						<ul class="tab">

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary" @click="GetModelOpen">新建</Button>
									<Button type="primary">导入</Button>
									<Button type="primary">导出</Button>
								</div>
							</li>

						</ul>

					</div>
				</div>

			</div>

			<!--  -->
			<div>

				<Table border :loading="loading" :columns="tableHeader" :data="tableData" ref="table"></Table>
				<Switch v-model="loading"></Switch>
				<div class="ui_tableBottom">

					<div class="ui_operate">

					</div>

					<div class="ui_page">
						<Page :current="pageIndex" :total="pageIndextotal" :page-size="pageSize" @on-change="pageChange" show-total></Page>
					</div>

				</div>

			</div>
		</div>

		<!--添加部门模态框 -s -->

		<Drawer title="添加供应商" v-model="GetModel" width="500">

			<Form :model="objGetData" :label-width="80">
				<FormItem label="供应商名称">
					<Input v-model="objGetData.name" placeholder="请输入供应商名称..."></Input>
				</FormItem>

				<FormItem label="供应商编号">
					<Input v-model="objGetData.no" placeholder="请输入供应商编号.."></Input>
				</FormItem>

				<FormItem label="联系人姓名">
					<Input v-model="objGetData.founderName" placeholder="请输入联系人姓名.."></Input>
				</FormItem>

				<FormItem label="联系人电话">
					<Input v-model="objGetData.leaderTel" placeholder="请输入联系人电话.."></Input>
				</FormItem>

				<FormItem label="供应商级别">
					<RadioGroup v-model="objGetData.grade">
						<Radio label="0">初级</Radio>
						<Radio label="1">一级</Radio>
					</RadioGroup>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="GetModelIsok">确认添加</Button>
			</div>

		</Drawer>

		<!--补全供应商信息-->

		<Drawer title="补全供应商信息" v-model="setsupplier" width="500">

			<Form :model="setsupplierObj" :label-width="100">
				<FormItem label="供应商姓名">
					<Input v-model="setsupplierObj.name" placeholder="请输入供应商姓名..."></Input>
				</FormItem>

				<FormItem label="供应商联系方式">
					<Input v-model="setsupplierObj.mobile" placeholder="请输入供应商联系方式..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="setsupplierIsok">确认</Button>
			</div>

		</Drawer>
		<!--补全供应商信息-->

		<!--经销商下产品-->
		<Modal title="供应商产品" v-model="productShow" width="1000">

			<div class="operation_box">
				<div class="active">
					<!---->
					<div class="ui_operateLeft" style="line-height: 32px;">

					</div>

					<div class="ui_operateRight">

						<Button type="primary" @click="productPush">添加产品</Button>

					</div>
				</div>

			</div>

			<div>
				<!--supplier-->
				<Table border :columns="setsupplierHead" :height="300" :data="setsupplierData" ref="table"></Table>
			</div>

			<div slot="footer" style="border: none;">

			</div>

		</Modal>

		<!--经销商下产品0end-->

		<!--修改产品信息-s-->

		<Drawer v-model="setproductModel" title="修改产品信息" width="500" @on-close="productShow=true">

			<Form :model="setproductObj" :label-width="80">

				<FormItem label="产品描述">
					<Input v-model="setproductObj.notes" placeholder="请输入产品描述..."></Input>
				</FormItem>

				<FormItem label="产品价格">
					<Input v-model="setproductObj.price" placeholder="请输入产品价格..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetModelIsok">确认修改</Button>
			</div>

		</Drawer>

		<Modal title="供应商待选产品" v-model="IsAwarehouse" width="1000" :mask-closable="false" @on-cancel="productShow=true">

			<div class="operation_box">
				<div class="active">

					<div class="ui_operateLeft">

					</div>

					<div class="ui_operateRight">
						<Button type="primary" @click="pickproduct">选择产品</Button>

					</div>

				</div>
			</div>
			<Table border :columns="AwHeader" height="500" :data="AwData" ref="selection"></Table>

			<div class="demo-drawer-footer" style="border: none;">
				<Button type="primary" @click="AwIsok">确认新增供应商产品</Button>
				<!---->
			</div>

		</Modal>

		<!--选择产品-s-->
		<!-- @click=",IsAwarehouse=false"-->

		<Modal title="选择产品" v-model="productModel" width="1200" :mask-closable="false" @on-cancel="productShow=true">
			<div class="operation_box">
				<div class="active">

					<div class="ui_operateLeft">

						<span class="operation_span">产品名称：</span>
						<input class="iv_input" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5\w]/g,'')" style="width: 150px;" v-model="IsAwproduct.name" placeholder="请输入产品名称..." />
						<span class="operation_span">产品分类：</span>
						<Select style="width: 150px;" v-model="IsAwproduct.categoryId">
							<Option v-for="item in productCategory" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>
						<span class="operation_span">产品编号：</span>
						<input class="iv_input" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5\w]/g,'')" style="width: 150px;" v-model="IsAwproduct.no" placeholder="请输入产品编号..." />

						<span class="operation_span">选择状态：</span>
						<Select style="width: 150px;" v-model="IsAwproduct.status">
							<Option value="0" key="0">正常</Option>
							<Option value="1" key="1">淘汰</Option>
							<Option value="2" key="2">禁用</Option>
						</Select>

						<Button icon="ios-search" @click="AWpSearch">搜索</Button>

					</div>

					<div class="ui_operateRight">
						<Button @click="pdNewdata" class="p_lea" shape="circle" icon="ios-refresh"></Button>

					</div>

				</div>
			</div>

			<Table border :columns="productHead" height="500" :data="productData" ref="selection"></Table>

			<div class="ui_tableBottom">

				<div class="ui_page" v-show="tableData.length>0">
					<!---->

					<Page :current="productPageIndex" :total="productPageTotal" :page-size="pageSize" show-elevator @on-change="AwpageChange"></Page>
				</div>

			</div>

			<div class="demo-drawer-footer" style="border: none;">
				<Button @click="Awcome" type="primary">确认选择</Button>

				<!---->
			</div>

		</Modal>

		<!--选择产品-e-->

		<!--供应商新增产品-->

		<!--修改供应商信息-->
		<Drawer v-model="setsuppliermsgOpen" title="修改供应商信息" width="500">

			<Form :model="setsuppliermsg" :label-width="100">

				<FormItem label="供应商名称">
					<Input v-model="setsuppliermsg.name" placeholder="请输入供应商名称..."></Input>
				</FormItem>

				<FormItem label="联系人姓名">
					<Input v-model="setsuppliermsg.founderName" placeholder="请输入联系人姓名.."></Input>
				</FormItem>

				<FormItem label="联系人电话">
					<Input v-model="setsuppliermsg.leaderTel" placeholder="请输入联系人电话.."></Input>
				</FormItem>

				<FormItem label="供应商状态">
					<RadioGroup v-model="setsuppliermsg.status">
						<!--<Radio label="0">意向</Radio>-->
						<Radio label="1">已签约（正常）</Radio>
						<Radio label="2">已退网</Radio>
						<Radio label="3">已倒闭</Radio>
						<Radio label="4">已禁用</Radio>
						<Radio label="5">无价值</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="供应商级别">
					<RadioGroup v-model="setsuppliermsg.grade">
						<Radio label="0">初级</Radio>
						<Radio label="1">一级</Radio>

					</RadioGroup>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetsupplierIsOk">确认修改</Button>
			</div>

		</Drawer>

		<!--修改供应商信息-->

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [{
						title: '编号',
						key: "no",

					},

					{
						title: '公司名称',
						key: "name",

					},

					/*	{
							title: '类型',

							render: (h, params) => {

								var type = params.row.type

								if(type == 0) {

									var texts = '生产商/制造商/总店'
								} else if(type == 1) {

									var texts = '直营店'
								} else if(type == 2) {

									var texts = '店中店'
								} else if(type == 3) {

									var texts = '专卖店'
								} else if(type == 4) {

									var texts = '加盟店'
								} else if(type == 5) {

									var texts = '散单'
								} else if(type == 6) {

									var texts = '供应商'

								}

								return h('div', texts)
							}

						},*/

					{
						title: '状态',

						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var texts = "意向"
							} else if(status == 1) {
								var texts = "已签约（正常）"
							} else if(status == 2) {
								var texts = "已退网"
							} else if(status == 3) {
								var texts = "已倒闭"
							} else if(status == 4) {
								var texts = "已禁用"
							} else if(status == 5) {
								var texts = "无价值"
							}

							return h('div', texts)
						}

					},

					{
						title: '级别',

						render: (h, params) => {

							var grade = params.row.grade

							if(grade == 0) {
								var texts = "初级"
							} else if(grade == 1) {
								var texts = "一级"
							}
							return h('div', texts)
						}

					},

					{
						title: '创建时间',
						key: 'created',

					},

					{
						title: '创建人',
						key: 'creatorName',

					},

					{
						title: '负责人',
						key: 'founderName',

					},

					{
						title: '联系电话',
						key: 'leaderTel',

					},

					{
						title: '操作',
						key: 'action',
						width: 220,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							if(!row.leaderName && row.status == 0) {

								return h('div', [

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {

												this.startdealerModelopen(params.index)

											}
										}
									}, '补全信息'),

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.SetdealerModel = true
												this.setsupplierOpen(params.index)

											}
										}
									}, '产品'),

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												var id = this.tableData[params.index].id

												this.$router.push({
													name: 'supplierdetails',
													query: {
														id: id,

													}
												})
											}
										}
									}, '详情')

									/*	h('Poptip', {
											props: {
												"confirm": true,
												"placement": "left",
												title: '你确定要删除这个内容吗?',

											},

											on: {
												'on-ok': () => {
													
													this.dealerData.splice(params.index, 1)

												}
											}
										}, [
											h('div', [
												h('Button', {
													props: {
														type: 'error',
														size: 'small'
													}
												}, '删除')
											])
										])*/
								]);

							} else if(!row.leaderName && row.status != 0) {
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
												this.setsuppliermsgOpen = true

												this.setsuppliermsg.name = this.tableData[params.index].name
												this.setsuppliermsg.status = this.tableData[params.index].status.toString()
												this.setsuppliermsg.founderName = this.tableData[params.index].founderName.toString()
												this.setsuppliermsg.leaderTel = this.tableData[params.index].leaderTel.toString()
												this.setsuppliermsg.grade = this.tableData[params.index].grade.toString()

												this.SetIndex = params.index

											}
										}
									}, '编辑'),
									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.SetdealerModel = true
												this.setsupplierOpen(params.index)

											}
										}
									}, '产品'),

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												var id = this.tableData[params.index].id

												this.$router.push({
													name: 'supplierdetails',
													query: {
														id: id,

													}
												})
											}
										}
									}, '详情')

									/*h('Poptip', {
										props: {
											"confirm": true,
											"placement": "left",
											title: '你确定要删除这个内容吗?',

										},

										on: {
											'on-ok': () => {
												
												this.dealerData.splice(params.index, 1)

											}
										}
									}, [
										h('div', [
											h('Button', {
												props: {
													type: 'error',
													size: 'small'
												}
											}, '删除')
										])
									])*/
								]);
							} else if(!!row.leaderName && row.status == 0) {
								return h('div', [

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.SetdealerModel = true
												this.setsupplierOpen(params.index)

											}
										}
									}, '产品'),
									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												var id = this.tableData[params.index].id

												this.$router.push({
													name: 'supplierdetails',
													query: {
														id: id,

													}
												})
											}
										}
									}, '详情')

								]);
							} else if(!!row.leaderName && row.status != 0) {
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
												this.setsuppliermsgOpen = true

												this.setsuppliermsg.name = this.tableData[params.index].name
												this.setsuppliermsg.status = this.tableData[params.index].status.toString()
												this.setsuppliermsg.founderName = this.tableData[params.index].founderName.toString()
												this.setsuppliermsg.leaderTel = this.tableData[params.index].leaderTel.toString()
												this.setsuppliermsg.grade = this.tableData[params.index].grade.toString()

												this.SetIndex = params.index

											}
										}
									}, '编辑'),

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												this.SetdealerModel = true
												this.setsupplierOpen(params.index)

											}
										}
									}, '产品'),

									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											disabled: !this.operation.edit
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												var id = this.tableData[params.index].id

												this.$router.push({
													name: 'supplierdetails',
													query: {
														id: id,

													}
												})
											}
										}
									}, '详情')

								]);
							}

						}
					}
				],

				tableData: [], //表格数据
				GetModel: false, //添加模态框属性
				SetModel: false, //修改模态框属性
				objGetData: { //添加信息
					"name": "",
					"no": "",
					"grade": "",
					"founderName": "",
					"leaderTel": ""
				},
				setsupplier: false,
				setsupplierObj: {
					name: "",
					mobile: "",
				},

				productShow: false,

				setsupplierHead: [{
						title: '产品名称',
						key: "productName",

					},

					/*{
						title: '所属供应商',
						key: "companyName",

					},*/

					{
						title: '产品描述',
						key: 'notes',

					},

					{
						title: '产品价格',
						key: 'price',

					},

					{
						title: '创建人',
						key: 'createName',

					},
					{
						title: '联系人姓名',
						key: 'founderName',

					},
					{
						title: '联系人电话',
						key: 'leaderTel',

					},
					{

						title: '创建时间',
						key: 'created',
						width: 180

					},

					{
						title: '操作',
						key: 'action',
						width: 180,

						align: 'center',
						render: (h, params) => {
							const row = params.row;

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
											this.setproductModel = true
											this.productShow = false
											var data = this.setsupplierData[params.index]
											this.SetIndexs = params.index

											this.setproductObj = {
												"notes": data.notes,
												"price": data.price,
											}

										}
									}
								}, '编辑'),
								h('Poptip', {
									props: {
										"confirm": true,

										title: '你确定要删除这个内容吗?',

									},

									on: {
										'on-ok': () => {

											this.deletesetproduct(params.index)

										}
									}
								}, [
									h('div', [
										h('Button', {
											props: {
												type: 'error',
												size: 'small'
											}
										}, '删除')
									])
								])
							]);

						}
					}
				],
				setsupplierData: [], //供应商下产品详情
				setsupplierDataIndex: 1,
				setsupplierDataTotal: 0,
				supplierCache: {},
				setproductModel: false,

				setproductObj: {
					"notes": "",
					"price": "",
				},

				SetGetData: { //修改信息
					"Setname": "",
					"Setnotes": "",
					"SetproductCategoryId": "",
					"SetproductMaterialId": "",
					"SetproductColor": "",
					"SetproductSpec": "",
					"Setno": "",
					"Setunit": "",
					"Setstatus": "",

				},
				SetIndex: "", //点击编辑按钮时选中的位置
				SetIndexs: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

				productModel: false,
				productHead: [{
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
				productData: [], //产品
				productCache: {},
				AwData: [], //数据
				AwDataCache: {},
				Awpickdata: [],
				AwpickCache: {},
				IsAwarehouse: false,
				AwHeader: [

					{
						title: '产品编号',
						key: 'no',

					},
					{
						title: '产品名称',
						key: 'name',

					},
					{
						title: '产品描述',
						key: 'notes',

					},

					{
						title: '供应商产品描述',
						key: 'supplierNotes',
						render: (h, params) => {

							var data = params.row

							return h('div', [

								h('Input', {

									props: {
										value: data.supplierNotes,
										size: 'small'
									},

									on: {
										'input': (val) => {
											//获取输入的数量信息
											/*this.pickNumKD(params.index, val)*/

											this.AwData[params.index].supplierNotes = val

										}
									}
								}),
							])
						}

					},

					{
						title: '产品价格',
						key: 'supplierPrice',
						render: (h, params) => {

							var data = params.row

							return h('div', [

								h('Input', {

									props: {
										value: data.supplierPrice,
										size: 'small'
									},

									on: {
										'input': (val) => {
											//获取输入的数量信息
											this.AwData[params.index].supplierPrice = val

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

											this.$router.push({
												name: 'supplierdetails',
												query: {
													id: this.AwData[params.index].id
												}

											})
										}
									}
								}, '详情'),

								//							return h('div', [
								//
								//								h('Button', {
								//									props: {
								//										type: 'primary',
								//										size: 'small'
								//									},
								//									style: {
								//										marginRight: '5px'
								//									},
								//									on: {
								//										click: () => {
								//
								//											var pid = this.AwData[params.index].id
								//
								//											this.AwData.splice(params.index, 1)
								//
								//											this.AwpickCache = {}
								//											this.AwDataCache = {}
								//
								//											this.Awpickdata = []
								//											for(var n = 0; n < this.AwData.length; n++) {
								//												var productid = this.AwData[n].id
								//												this.AwpickCache[productid] = this.AwData[n]
								//												this.AwDataCache[productid] = this.AwData[n]
								//												/*this.Awpickdata = this.AwData[n]*/
								//
								//												this.Awpickdata.push(this.AwData[n])
								//											}
								//
								//											/*	for(var i = 0; i < this.productData.length; i++) {
								//													var productid = this.productData[i].id
								//
								//													if(pid == productid) {
								//
								//														this.productData[i].ispick = false
								//													}
								//
								//												}*/
								//
								//										}
								//									}
								//								}, '删除'),

							]);
						}
					}
				],
				IsAwproduct: {
					"name": "",
					"categoryId": "",
					"no": "",
					"status": "0",
				},

				AWpisSearch: false,

				productPageIndex: 1,
				productPageTotal: 10,

				isSearch: false,
				searchObj: {
					"name": "",
					"leaderTel": "",

				},

				productCategory: [], //产品分类

				setsuppliermsgOpen: false,
				setsuppliermsg: {
					"name": "",
					"status": "",
					"grade": "",
					"founderName": "",
					"leaderTel": ""

				},

				operation: {}

			};
		},

		methods: {

			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch = true) {
					this.searchData()
				} else {
					this.getDatas()
				}

			},

			GetModelOpen: function() {

				this.$router.push({
					name: 'supplierNew',

				})
				return false;

				this.GetModel = true
				this.objGetData = {
					"name": "",
					"no": "",
					"grade": "",
					"founderName": "",
					"leaderTel": ""
				}
			},

			//添加信息api	
			GetModelIsok: function() {
				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/
				var objGetData = this.objGetData
				var name = objGetData.name
				var no = objGetData.no
				var grade = objGetData.grade
				var founderName = objGetData.founderName
				var leaderTel = objGetData.leaderTel

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('供应商名称不能为空！');
					return false;
				} else
				if(no == "" || no == null || no.trim().length == 0) {

					this.$Message.error('供应商编号不能为空！');
					return false;
				} else if(founderName == "" || founderName == null || founderName.trim().length == 0) {

					this.$Message.error('联系人姓名不能为空！');
					return false;
				} else if(leaderTel == "" || leaderTel == null || leaderTel.trim().length == 0) {

					this.$Message.error('联系人电话不能为空！');
					return false;
				} else if(tel.test(leaderTel) == false && telephone.test(leaderTel) == false && phone.test(leaderTel) == false) {

					this.$Message.error('联系人电话格式不正确！');
					return false;
				} else if(grade == "" || grade == null || grade.trim().length == 0) {

					this.$Message.error('请选择供应商供应商级别！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this

					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/suppliers',

						data: {
							"name": name,
							"no": no,
							"grade": grade,
							"founderName": founderName,
							"leaderTel": leaderTel

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "供应商名称"
							},
							{
								"name": "no",
								"note": "供应商编号 "
							},
							{
								"name": "grade",
								"note": "供应商级别"
							},
						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						data.leader = ""
						data.leaderTel = ""
						that.tableData.unshift(data)
						that.$Message.success("添加成功")

						that.GetModel = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.GetModel = false
					})

				}

			},

			//补全供应商信息

			startdealerModelopen: function(index) {

				this.SetIndex = index
				this.setsupplier = true
				this.setsupplierObj = {
					name: "",
					mobile: "",
				}

			},

			//补全经销商信息api
			setsupplierIsok: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var id = this.tableData[this.SetIndex].id

				var setsupplierobj = this.setsupplierObj
				var name = setsupplierobj.name
				var mobile = setsupplierobj.mobile

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('供应商负责人姓名不能为空！');
					return false;
				} else
				if(mobile == "" || mobile == null || mobile.trim().length == 0) {

					this.$Message.error('供应商负责人联系方式不能为空！');
					return false;
				} else if(tel.test(mobile) == false && telephone.test(mobile) == false && phone.test(mobile) == false) {

					this.$Message.error('联系方式格式不正确！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/suppliers/' + id,

						data: {
							"name": name,
							"mobile": mobile,

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "供应商姓名"
							},
							{
								"name": "mobile",
								"note": "供应商联系方式 "
							},
						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						that.tableData[that.SetIndex].leader = ""
						that.tableData[that.SetIndex].leaderTel = ""
						that.tableData[that.SetIndex].leaderName = name
						that.tableData[that.SetIndex].leaderTel = mobile

						that.$Message.success("补全信息成功")

						that.setsupplier = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.setsupplier = false
					})
				}
			},

			//修改供应商信息

			SetsupplierIsOk: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var cid = this.tableData[this.SetIndex].id

				var setsuppliermsg = this.setsuppliermsg

				var name = setsuppliermsg.name
				var status = setsuppliermsg.status
				var founderName = setsuppliermsg.founderName
				var leaderTel = setsuppliermsg.leaderTel
				var grade = setsuppliermsg.grade

				if(name == "" || name == null || name.trim().length == 0) {
					this.$Message.error('供应商名称不能为空！');
					return false;
				} else if(founderName == "" || founderName == null || founderName.trim().length == 0) {
					this.$Message.error('供应商联系人姓名不能为空！');
					return false;
				} else if(tel.test(leaderTel) == false && telephone.test(leaderTel) == false && phone.test(leaderTel) == false) {
					this.$Message.error('供应商联系电话格式不正确或不能为空！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/dealers/companies/' + cid,

						data: {

							"name": name,
							"status": status,
							"grade": grade,
							"founderName": founderName,
							"leaderTel": leaderTel

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "供应商名称"
							},
							{
								"name": "status",
								"note": "供应商状态 "
							},
							{
								"name": "grade",
								"note": "供应商级别"
							},
						]

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						that.tableData[that.SetIndex].name = data.company.name
						that.tableData[that.SetIndex].status = data.company.status
						that.tableData[that.SetIndex].founderName = data.company.founderName
						that.tableData[that.SetIndex].leaderTel = data.company.leaderTel
						that.tableData[that.SetIndex].grade = data.company.grade

						that.$Message.success("修改成功")

						that.setsuppliermsgOpen = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.setsuppliermsgOpen = false
					})

				}

			},

			//经销商下商品
			setsupplierOpen: function(index) {

				this.Awpickdata = []
				this.AwDataCache = []
				this.AwpickCache = {}

				for(var n = 0; n < this.productData.length; n++) {
					this.productData[n].ispick = false
				}

				this.SetIndex = index
				var id = this.tableData[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
				//                    /
				this.axios({
					method: 'get',
					url: '/api/f/suppliers/' + id + '/products?pageSize=100000',

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.setsupplierData = data

					that.setsupplierDataTotal = res.data.pagination.total

					var suppliercache = {}
					for(var i = 0; i < data.length; i++) {

						suppliercache[data[i].productId] = data[i]
					}

					that.supplierCache = suppliercache

					that.productShow = true

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

				this.pdNewdata()

			},

			//供应商下添加产品

			productPush: function() {
				this.productShow = false
				this.productModel = true

				this.AwData = []
				this.AwDataCache = {}
				this.AwpickCache = {}

				for(var i = 0; i < this.productData.length; i++) {
					this.productData.ispick = false
				}

				this.isAwproduct = {
					"name": "",
					"categoryId": "",
					"no": "",
					"status": "",
				}
			},

			//打开修改部门信息模态框

			//修改信息api

			SetModelIsok: function() {

				var id = this.tableData[this.SetIndex].id
				var pid = this.setsupplierData[this.SetIndexs].id

				var setproductobj = this.setproductObj
				var notes = setproductobj.notes
				var price = setproductobj.price

				if(price == "" || price == null) {
					this.$Message.error('产品价格不能为空！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/suppliers/' + id + '/products/' + pid,

						data: {

							"price": price,
							"notes": notes,

						}

					}).then(function(res) {

						var verify = [{
								"name": "notes",
								"note": "产品描述"
							},
							{
								"name": "price",
								"note": "产品价格 "
							},
						]

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						that.setsupplierData[that.SetIndexs].price = price
						that.setsupplierData[that.SetIndexs].notes = notes

						that.$Message.success("修改成功")
						setTimeout(msg, 100);
						that.setproductModel = false
						that.productShow = true
					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.setproductModel = false
						that.productShow = true

					})

				}

			},

			deletesetproduct: function(index) {

				var id = this.tableData[this.SetIndex].id
				var pid = this.setsupplierData[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-delete"
				//                    /
				this.axios({
					method: 'delete',
					url: '/api/f/suppliers/' + id + '/products/' + pid,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.setsupplierData.splice(index, 1)

					var suppliercache = {}
					for(var i = 0; i < that.setsupplierData.length; i++) {

						suppliercache[that.setsupplierData[i].productId] = that.setsupplierData[i]
					}

					that.supplierCache = suppliercache
					that.$Message.success("删除成功")
					setTimeout(msg, 100);

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},

			//入库产品材料检索

			AWpSearch: function() {
				var Isawproduct = this.IsAwproduct

				var name = Isawproduct.name
				var categoryid = Isawproduct.categoryId
				var no = Isawproduct.no
				var status = Isawproduct.status

				if(name.trim().length == 0 && categoryid == "" && no.length == 0 && status == "") {
					this.$Message.error('检索条件不能为空');

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
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
				//请求产品
				this.axios({
					method: 'get',
					url: '/api/f/products?' + pathurl + 'pageNum=' + this.productPageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data
					var productcache = that.productCache

					for(var i = 0; i < data.length; i++) {
						var id = data[i].id
						productcache[id] = data[i]
						data[i].ispick = false
						data[i].ishave = false

						if(that.AwDataCache[id]) {
							data[i].ispick = true
						}
					}

					that.productData = data
					that.productPageTotal = dataAll.pagination.total
					//that.$Message.success("请求成功")
					that.AWpisSearch = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//待选商品分页
			AwpageChange: function(index) {

				this.productPageIndex = index

				if(this.AWpisSearch == true) {
					this.AWpSearchData()
				} else {
					this.getproducts()
				}

			},

			//刷新产品数据
			pdNewdata: function() {
				this.AWpisSearch = false
				this.IsAwproduct = {
						"name": "",
						"categoryId": "",
						"no": "",
						"status": "0",
					},
					this.productPageIndex = 1

				this.getproducts()

			},

			pickproduct: function() {

				for(let i = 0; i < this.productData.length; i++) {
					this.productData[i].ispick = false
					if(this.AwDataCache[this.productData[i].id]) {
						this.productData[i].ispick = true
					}

				}

				this.productModel = true;
				this.IsAwarehouse = false
			},

			//待选产品单个选择

			comeInselect: function(val, index) {

				var datacache = this.AwpickCache
				var data = this.productData[index]

				if(val) {

					if(!this.supplierCache[data.id]) {

						if(!this.AwpickCache[data.id]) {
							data.supplierNotes = "",
								data.supplierPrice = ""

							this.Awpickdata.push(data)

							this.AwpickCache[data.id] = data
						}

					} else {
						this.$Message.error('该产品已存在供应商的产品中。');
						this.productData[index].ispick = true
						this.productData[index].ispick = false
						this.productData[index].ishave = true
						return false;
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

			},

			//把选择好的入库产品材料生产表单
			Awcome: function() {
				let sltAwdata = this.Awpickdata;

				this.AwData = []
				this.AwDataCache = {}
				if(sltAwdata != null && sltAwdata.length > 0) {
					for(var i = 0; i < sltAwdata.length; i++) {
						this.AwData.push(sltAwdata[i]);
						this.AwDataCache[sltAwdata[i].id] = sltAwdata[i]

					}
				}
				this.productModel = false
				this.IsAwarehouse = true

			},
			/*确认新增供应商下产品*/
			AwIsok: function() {

				var id = this.tableData[this.SetIndex].id

				var arryData = []

				if(this.AwData.length == 0) {
					this.$Message.error('选择产品不能为空！');
					return false;
				} else {
					for(var i = 0; i < this.AwData.length; i++) {

						var awdata = this.AwData[i]
						var price = awdata.supplierPrice
						var notes = awdata.supplierNotes

						if(price == "" || price == "" || price.length == 0) {
							this.$Message.error('第' + (i + 1) + '个供应商产品价格不能为空！');
							return false;
						} else {
							var obj = {
								"productId": awdata.id,
								"price": price,
								"notes": notes

							}

							arryData.push(obj)
						}
					}

				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
				//产品入库
				this.axios({
					method: 'post',
					url: '/api/f/suppliers/' + id + '/products',

					data: arryData

				}).then(function(res) {

					var verify = [{
							"name": "notes",
							"note": "产品描述"
						},
						{
							"name": "price",
							"note": "产品价格 "
						},
					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					that.$Message.success("新增成功。")

					that.IsAwarehouse = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.IsAwarehouse = false

				})

			},
			//检索信息

			clicksearch: function() {
				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var searchobj = this.searchObj
				var name = searchobj.name
				var leadertel = searchobj.leaderTel

				if(name.trim().length == 0 && leadertel.trim().length == 0) {
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

				var name = searchobj.name
				var leadertel = searchobj.leaderTel

				var pathurl = ""

				if(name != "" && name != null && name.length != 0) {
					pathurl += 'companyName=' + name + "&"
				}

				if(leadertel != "" && leadertel != null && leadertel.length != 0) {
					pathurl += 'leaderTel=' + leadertel + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.loading = true

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
				//请求产品
				this.axios({
					method: 'get',
					url: '/api/f/suppliers?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					that.tableData = data
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

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {
						"name": "",
						"leaderTel": "",

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

				this.axios({
					method: 'get',
					url: '/api/f/suppliers?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					that.tableData = data
					that.pageIndextotal = dataAll.pagination.total
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			//请求所有产品
			getproducts: function() {
				//请求产品

				this.AWploading = true

				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/products?status=0&pageNum=' + this.productPageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.productPageTotal = res.data.pagination.total

					var productcache = that.productCache

					/*	for(let i=0;i<this.productData.length;i++){
		this.productData[i].ispick = false
		if(this.AwDataCache[this.productData[i].id]){
			this.productData[i].ispick = true
		}
		
	}*/

					for(var i = 0; i < data.length; i++) {
						var id = data[i].id
						productcache[id] = data[i]
						data[i].ispick = false
						data[i].ishave = false

						if(that.AwDataCache[id]) {
							data[i].ispick = true
						}
					}

					that.productData = data

					that.productCache = productcache

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})
			}

		},

		mounted: function() {

			axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.getDatas()
			this.getproducts()

			var that = this

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

</style>

<style src='./../../assets/css/department.css'></style>