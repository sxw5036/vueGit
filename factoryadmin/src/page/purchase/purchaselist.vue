<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>采购单</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">
			<div class="active">
				<!---->
				<div class="ui_operateLeft" style="line-height: 32px;">
					<span class="operation_span">采购名称：</span>
					<input style="width: 200px;" class="iv_input"  id="p_lea" v-model="searchObj.name" placeholder="请输入采购单名称..." />
					<span class="operation_span">采购批次：</span>
					<input style="width: 200px;" class="iv_input"  id="p_lea" v-model="searchObj.batch" placeholder="请输入采购单批次..." />
					<span class="operation_span">采购状态：</span>
					<Select  v-model="searchObj.status" style="width:200px">
						<Option value="0">待审批</Option>
						<Option value="1">待采购</Option>
						<Option value="2">采购中</Option>
						<Option value="3">待质检</Option>
						<Option value="4">全部合格</Option>
						<Option value="5">部分合格</Option>
						<Option value="6">全部不合格</Option>
						<Option value="7">全部入库</Option>
						<Option value="8">部分入库</Option>
						<Option value="9">取消</Option>
					</Select>

					<span class="operation_span">是否付款：</span>
					<Select v-model="searchObj.paid" style="width:200px">
						<Option value="true">已付款</Option>
						<Option value="false">未付款</Option>

					</Select>
					<Button icon="ios-search" @click="clicksearch">搜索</Button>
					<!--<Button shape="circle" icon="ios-search" ></Button>-->
				</div>

				<div class="ui_operateRight">
					<Button @click="newData" class="p_lea" shape="circle" icon="ios-refresh"></Button>
					<Button type="primary" @click="GetModelOpen" v-show="operation.edit==true">新增采购单</Button>

				</div>
			</div>

		</div>

		<!-- 部门信息列表 -->
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

		<!--添加部门模态框 -s -->

		<Drawer title="新增采购单" v-model="GetModel" width="500">
			<div style="position: relative; height: 100%; overflow: auto;">
				<Form :model="objGetData" :label-width="80">
					<FormItem label="采购单名称">
						<Input v-model="objGetData.name" placeholder="请输入采购单名称..."></Input>
					</FormItem>

					<FormItem label="采购单描述">
						<Input v-model="objGetData.notes" placeholder="请输入采购单描述..."></Input>
					</FormItem>

					<FormItem label="采购单备注">
						<Input v-model="objGetData.remarks" placeholder="请输入采购单备注..."></Input>
					</FormItem>

					<FormItem label="采购人员">
						<Select v-model="objGetData.buyer">

							<Option v-for="item in purchasecrew" :value="item.userId" :key="item.userId">{{ item.userName}}</Option>
						</Select>
					</FormItem>

					<FormItem label="供应商">

						<Select v-model="objGetData.supplierId" @on-change="getawait">
							<Option v-for="item in supplier" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>

					</FormItem>

					<FormItem label="所属仓库">

						<Select v-model="objGetData.storageId" @on-change="getawait">
							<Option v-for="(item,index) in warehouse" :value="item.id" :key="item.id">{{ item.name }} </Option>
						</Select>

					</FormItem>

					<FormItem label="选择产品">

						<Table height="200" border :columns="awaitHead" :data="awaitdata" ref="table"></Table>

					</FormItem>

					<FormItem label="已选产品">
						<!---->

						<div class="await_nav">
							<ul>
								<li v-for="(item , index) in awaitgetdata">
									<p>
										<span>产品名称：{{item.productName}}</span>
									</p>

									<p>
										<span>产品价格</span>
										<Input v-model="item.price" placeholder="请输入产品价格..."></Input>
									</p>

									<p>
										<span>产品数量</span>
										<Input v-model="item.quantity" placeholder="请输入产品数量..."></Input>
									</p>
									<Button @click="delawait(index)">删除</Button>
								</li>
							</ul>
						</div>

					</FormItem>

					<FormItem label="总钱数">
						<Input v-model="objGetData.totalMoney" placeholder="请输入采购单总钱数..."></Input>
					</FormItem>

				</Form>

			</div>

			<div class="demo-drawer-footer" style="position: absolute; bottom: 0px; right: 0px; width: 100%;">
				<Button type="primary" @click="GetModelIsok">确认添加</Button>
			</div>
		</Drawer>

		<!--供应商新增产品-->

		<!--<Drawer v-model="setsuppliermsgOpen" title="修改经销商信息" width="500">

			<Form :model="setsuppliermsg" :label-width="100">

				<FormItem label="供应商名称">
					<Input v-model="setsuppliermsg.name" placeholder="请输入供应商名称..."></Input>
				</FormItem>

				<FormItem label="供应商状态">
					<RadioGroup v-model="setsuppliermsg.status">
					
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

		</Drawer>-->

		<!--修改供应商信息-->

		<Modal title="采购单详情" v-model="purchasemsgopen" width="1000">

			<div class="modal_center">
				<!--<Steps :current="current">
					<Step :title="currentStep.one" content=""></Step>
					<Step :title="currentStep.two" content=""></Step>
					<Step :title="currentStep.three" content=""></Step>
					<Step :title="currentStep.four" content=""></Step>
				</Steps>-->

				<div class="modal_msg">

					<ul>
						<li>

							<p>采购单批次: {{getpurchasedata.batch}}</p>
							<p>采购单名称: {{getpurchasedata.name}}</p>
							<p>采购单描述: {{getpurchasedata.notes}}</p>
							<p>是否付款:
								<span v-show="getpurchasedata.paid==true"> 已付款</span>
								<span v-show="getpurchasedata.paid==false"> 未付款</span>
							</p>
							<p>采购单状态:
								<span v-show="getpurchasedata.status==0"> 待审批</span>
								<span v-show="getpurchasedata.status==1"> 待采购</span>
								<span v-show="getpurchasedata.status==2"> 采购中</span>
								<span v-show="getpurchasedata.status==3"> 待质检 </span>
								<span v-show="getpurchasedata.status==4"> 全部合格 </span>
								<span v-show="getpurchasedata.status==5"> 部分合格</span>
								<span v-show="getpurchasedata.status==6"> 全部不合格</span>
								<span v-show="getpurchasedata.status==7"> 全部入库</span>
								<span v-show="getpurchasedata.status==8"> 部分入库</span>
								<span v-show="getpurchasedata.status==9"> 取消</span>
							</p>
							<p>仓库名称: {{getpurchasedata.storageName}}</p>
							<p>供应商名称: {{getpurchasedata.supplierName}}</p>
							<p>采购人: {{getpurchasedata.buyerName}}</p>

							<div class="operation_box">
								<div class="active">
									<!---->
									<div class="ui_operateLeft">采购单下产品</div>

								</div>

							</div>

							<!--待审核 待采购 采购中-->
							<div v-show="getpurchasedata.status==0||getpurchasedata.status==1||getpurchasedata.status==2">
								<Table border :columns="getpurchaseHead" :data="getpurchasedata.purchaseProductDtoList" ref="table"></Table>
							</div>
							<!--end-->

							<!--待质检-->
							<div v-show="getpurchasedata.status!=0&&getpurchasedata.status!=1&&getpurchasedata.status!=2">
								<div class="operation_box">
									<div class="active">
										<div class="ui_operateRight">
											<Button type="primary" @click="goWarehouse" v-show="getpurchasedata.status==4||getpurchasedata.status==5||getpurchasedata.status==8">入库</Button>
										</div>
									</div>

								</div>

								<Table border :columns="putpurchaseHead" :data="getpurchasedata.purchaseProductDtoList" ref="table"></Table>
							</div>
							<!--end-->

						</li>

					</ul>

				</div>

			</div>

			<div slot="footer" style="border: none;">

			</div>

		</Modal>

		<!--选择入库产品-->

		<Modal title="采购单详情" v-model="inWarehouse" width="1000" @on-cancel="purchasemsgopen=true,inWarehouse=false">

			<Table border :columns="inWarehouseHead" :data="inWarehouseData" ref="table"></Table>

			<div slot="footer" style="border: none;">
				<Button type="primary" @click="sureINwarehouse">确认选择</Button>
			</div>

		</Modal>

		<!--选择入库产品位置-->

		<Modal title="生成入库单" v-model="Warehouselocation" width="1000" @on-cancel="inWarehouse=true,Warehouselocation=false">

			<div class="operation_box">

				<div class="active">

					<div class="ui_operateLeft">

						<span class="operation_span">编号：</span>
						<input class="iv_input" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5\w]/g,'')" v-model="IsAwObj.no" style="width: 150px;margin-right: 6px;" placeholder="请输入编号..." />

						<!--<span class="operation_span">供应商：</span>
						<Select v-model="IsAwObj.supplierId">
							<Option v-for="item in supplier" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>

						<span class="operation_span">仓库：</span>
						<Select v-model="IsAwObj.storageId" >
							<Option v-for="(item,index) in warehouse" :value="item.id" :key="item.id">{{ item.name }} </Option>
						</Select>-->
					</div>

				</div>

			</div>

			<Table border :columns="arryHead" :data="arrydata" ref="table"></Table>

			<div slot="footer" style="border: none;">
				<Button type="primary" @click="sureINwarehousebill">确认入库</Button>
			</div>

		</Modal>
		
		
		
		 <Modal v-model="popen" width="360">
        <p slot="header" style="color:cornflowerblue;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>操作提示</span>
        </p>
        <div style="text-align:center">
            <p>您正在执行确认采购单开始采购操作</p>
            <p>是否继续执行？</p>
        </div>
        <div slot="footer">
            <Button type="primary" size="large" long  @click="surePur">确认</Button>
        </div>
    </Modal>
    
    
    <Modal v-model="popens" width="360">
        <p slot="header" style="color:cornflowerblue;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>操作提示</span>
        </p>
        <div style="text-align:center">
            <p>您正在执行确认采购单完成采购操作</p>
            <p>是否继续执行？</p>
        </div>
        <div slot="footer">
            <Button type="primary" size="large" long  @click="completePur">确认</Button>
        </div>
    </Modal>
    
    
    

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				current: 0,
				currentStep: {
					"one": "待审批",
					"two": "待采购",
					"three": "待质检",
					"four": "待入库"
				},
				tableHeader: [{
						title: '采购批次',
						key: "batch",
						width: 200,
					},

					{
						title: '采购单名称',
						key: "name",
						width: 200,
					},

					{
						title: '采购单说明',
						key: "notes",
						width: 200,
					},

					{
						title: '是否付款',
						key: 'paid',
						width: 100,
						render: (h, params) => {

							var paid = params.row.paid

							if(paid == true) {
								var texts = "已付款"
							} else if(paid == false) {
								var texts = "未付款"
							}

							return h('div', texts)
						}

					},

					{
						title: '状态',
						width: 100,
						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var texts = "待审批"
							} else if(status == 1) {
								var texts = "待采购"
							} else if(status == 2) {
								var texts = "采购中"
							} else if(status == 3) {
								var texts = "待质检"
							} else if(status == 4) {
								var texts = "全部合格"
							} else if(status == 5) {
								var texts = " 部分合格"
							} else if(status == 6) {
								var texts = "全部不合格"
							} else if(status == 7) {
								var texts = "全部入库"
							} else if(status == 8) {
								var texts = "部分入库"
							} else if(status == 9) {
								var texts = "取消"
							}

							return h('div', texts)
						}

					},

					{
						title: '仓库名称',
						key: 'storageName',
						width: 200,
					},

					{
						title: '创建时间',
						key: 'created',
						width: 200,
					},

					{
						title: '供应商名称',
						key: 'supplierName',
						width: 200,

					},

					{
						title: '采购人',
						key: 'buyerName',
						width: 200,

					},

					{
						title: '创建人',
						key: 'creatorName',
						width: 200,

					},

					{
						title: '操作',
						key: 'action',
						width: 180,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							
							var status = params.row.status
							
							if(status==1){
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

											this.inWarehouseData = []
											this.purchasemsgopen = true
											this.getpurchasedata = this.tableData[params.index]
											var status = this.getpurchasedata.status

											this.SetIndex = params.index

											if(status == 0) {
												this.current = 0
												this.currentStep.one = "待审批"
											} else if(status == 1) {
												this.current = 1
												this.currentStep.two = "待采购"
											} else if(status == 2) {
												this.current = 1
												this.currentStep.two = "采购中"
											} else if(status == 3) {
												this.current = 2
												this.currentStep.three = "待质检"
											} else if(status == 4) {
												this.current = 3
												this.currentStep.three = "全部合格"
											} else if(status == 5) {
												this.current = 3
												this.currentStep.three = "部分合格"
											} else if(status == 6) {
												this.current = 3
												this.currentStep.three = "全部不合格"
											} else if(status == 7) {
												this.current = 3
												this.currentStep.three = "全部入库"
											} else if(status == 8) {
												this.current = 3
												this.currentStep.three = "部分入库"
											} else if(status == 8) {
												this.current = 3
												this.currentStep.three = "取消"
											}

											//获取仓库产品缓存

											this.getwarehouseCache(this.getpurchasedata.storageId)

											this.IsAwObj = {
													"supplierId": "",
													"storageId": "",
													"no": "",
												}

										}
									}
								}, '查看'),
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

                                              this.popen=true
										      this.SetIndex=params.index
										      

										}
									}
								}, '开始采购')
							])
							}else if(status==2){
								
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

											this.inWarehouseData = []
											this.purchasemsgopen = true
											this.getpurchasedata = this.tableData[params.index]
											var status = this.getpurchasedata.status

											this.SetIndex = params.index

											if(status == 0) {
												this.current = 0
												this.currentStep.one = "待审批"
											} else if(status == 1) {
												this.current = 1
												this.currentStep.two = "待采购"
											} else if(status == 2) {
												this.current = 1
												this.currentStep.two = "采购中"
											} else if(status == 3) {
												this.current = 2
												this.currentStep.three = "待质检"
											} else if(status == 4) {
												this.current = 3
												this.currentStep.three = "全部合格"
											} else if(status == 5) {
												this.current = 3
												this.currentStep.three = "部分合格"
											} else if(status == 6) {
												this.current = 3
												this.currentStep.three = "全部不合格"
											} else if(status == 7) {
												this.current = 3
												this.currentStep.three = "全部入库"
											} else if(status == 8) {
												this.current = 3
												this.currentStep.three = "部分入库"
											} else if(status == 8) {
												this.current = 3
												this.currentStep.three = "取消"
											}

											//获取仓库产品缓存

											this.getwarehouseCache(this.getpurchasedata.storageId)

											this.IsAwObj = {
													"supplierId": "",
													"storageId": "",
													"no": "",
												}

										}
									}
								}, '查看'),
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

                                              this.popens=true
										      this.SetIndex=params.index
										      

										}
									}
								}, '完成采购')
							])
								
							}else{
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

											this.inWarehouseData = []
											this.purchasemsgopen = true
											this.getpurchasedata = this.tableData[params.index]
											var status = this.getpurchasedata.status

											this.SetIndex = params.index

											if(status == 0) {
												this.current = 0
												this.currentStep.one = "待审批"
											} else if(status == 1) {
												this.current = 1
												this.currentStep.two = "待采购"
											} else if(status == 2) {
												this.current = 1
												this.currentStep.two = "采购中"
											} else if(status == 3) {
												this.current = 2
												this.currentStep.three = "待质检"
											} else if(status == 4) {
												this.current = 3
												this.currentStep.three = "全部合格"
											} else if(status == 5) {
												this.current = 3
												this.currentStep.three = "部分合格"
											} else if(status == 6) {
												this.current = 3
												this.currentStep.three = "全部不合格"
											} else if(status == 7) {
												this.current = 3
												this.currentStep.three = "全部入库"
											} else if(status == 8) {
												this.current = 3
												this.currentStep.three = "部分入库"
											} else if(status == 8) {
												this.current = 3
												this.currentStep.three = "取消"
											}

											//获取仓库产品缓存

											this.getwarehouseCache(this.getpurchasedata.storageId)

											this.IsAwObj = {
													"supplierId": "",
													"storageId": "",
													"no": "",
												}

										}
									}
								}, '查看')
							])
							}

							
						}
					}
				],

				tableData: [], //表格数据
				GetModel: false, //添加模态框属性
				SetModel: false, //修改模态框属性
				objGetData: { //添加信息
					"name": "",
					"notes": "",
					"purchaseRequestNo": "",
					"buyer": "",
					"storageId": "",
					"supplierId": "",
					"remarks": "",
					"totalMoney": ""

				},

				getpurchaseHead: [{
						title: '产品名称',
						key: 'productName',

					},
					{
						title: '产品价格',
						key: 'price',

					},

					{
						title: '产品数量',
						key: 'quantity',

					},
					{
						title: '产品描述',
						key: 'notes',

					},
				],
				//待质检

				putpurchaseHead: [

					{
						title: '产品名称',
						key: 'productName',

					},
					{
						title: '产品价格',
						key: 'price',

					},

					{
						title: '产品数量',
						key: 'quantity',

					},
					{
						title: '产品状态',
						key: 'status',
						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var texts = "待质检"
							} else if(status == 1) {
								var texts = "不合格"
							} else if(status == 2) {
								var texts = "合格"
							} else if(status == 3) {
								var texts = "已入库"
							} else if(status == 4) {
								var texts = "已退货"
							}

							return h('div', texts)
						}

					},
					{
						title: '质检结果',

						render: (h, params) => {

							var status = params.row.status
							if(status == 0 || status == 1 || status == 2) {

								return h('div', [

									h('Select', {
											props: {
												value: params.row.status

											},

											on: {
												'on-change': (val) => {

													this.putpurchasestatus(val, params.row.id, params.index)

												}
											}
										},

										[

											h('Option', {
												props: {
													value: 1,

												},
											}, '不合格'),

											h('Option', {
												props: {
													value: 2,
												},
											}, '合格'),

										]

									),

								]);

							}
						}
					}

				],

				getpurchasedata: {},

				setsupplier: false,
				setsupplierObj: {
					name: "",
					mobile: "",
				},

				SetIndex: "", //点击编辑按钮时选中的位置
				SetIndexs: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,

				isSearch: false,
				searchObj: {
					"name": "",
					"status": "",
					"paid": "",
					"batch": "",
				},

				productCategory: [], //产品分类

				setsuppliermsgOpen: false,
				setsuppliermsg: {
					"name": "",
					"status": "",
					"grade": ""

				},

				operation: {},
				purchasecrew: [],
				supplier: [],
				warehouse: [],
				warehousecache: {},
				awaitHead: [

					{
						title: '产品名称',
						key: 'productName',

					},
					{
						title: '产品价格',
						key: 'price',

					},
					{
						title: '产品描述',
						key: 'notes',

					},
					
					{
						title: 'ispick',
						key: 'ispick',

					},

					{
						title: '操作',
						key: 'action',
						width: 80,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {
							return h('div', [

								h('Button', {
									props: {
										type: 'primary',
										size: 'small',
										disabled: !this.awaitdata[params.index].ispick
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {

											var obj = this.awaitdata[params.index]
											obj.quantity = "0"
											this.awaitgetdata.push(obj)

											this.awaitdata[params.index].ispick = !this.awaitdata[params.index].ispick

										}
									}
								}, '采用'),

							]);
						}
					}
				],
				awaitdata: [],
				awaitgetdata: [],
				purchasemsgopen: false,
				inWarehouse: false,
				inWarehouseHead: [

					{
						title: '选择',
						width: 80,
						fixed: 'left',
						render: (h, params) => {

							var disabled = params.row.disabled
							var ispick = params.row.ispick

							if(!disabled) {
								return h('div', [

									h('Checkbox', {

										props: {
											value: ispick,
											size: 'small',

										},

										on: {
											'input': (val) => {

												this.pickitem(val, params.index)

											}
										}
									}),
								])
							}

						}

					},

					{
						title: '产品名称',
						key: 'productName',

					},
					{
						title: '产品价格',
						key: 'price',

					},
					{
						title: '产品描述',
						key: 'notes',

					},

					{
						title: '产品描述',
						key: 'ispick',

					},

				],
				inWarehouseData: [],

				Warehouselocation: false,
				arryHead: [

					{
						title: '产品名称',
						key: 'productName',

					},
					{
						title: '产品价格',
						key: 'price',

					},

					{
						title: '产品数量',
						key: 'quantity',

					},
					{
						title: '产品状态',
						key: 'status',
						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var texts = "待质检"
							} else if(status == 1) {
								var texts = "不合格"
							} else if(status == 2) {
								var texts = "合格"
							} else if(status == 3) {
								var texts = "已入库"
							} else if(status == 4) {
								var texts = "已退货"
							}

							return h('div', texts)
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
													this.arrydata[params.index].shelf = val
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
													this.arrydata[params.index].column = val
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
													this.arrydata[params.index].tier = val
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

				],

				arrydata: [],
				AwpickCache: {},
				IsAwObj: {
					"supplierId": "",
					"storageId": "",
					"no": "",
				},
				
				popen:false,
                popens:false,
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
				this.awaitdata = []
				this.awaitgetdata = []
				this.GetModel = true
				this.objGetData = {
					"name": "",
					"notes": "",
					"purchaseRequestNo": "",
					"buyer": "",
					"storageId": "",
					"supplierId": "",
					"remarks": "",
					"totalMoney": ""
				}
			},
			//开始采购
			surePur:function  () {
				
				var id=this.tableData[this.SetIndex].id
				
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
				//                    /
				this.axios({
					method: 'put',
					url: '/api/f/purchases/'+id+'/2',

				}).then(function(res) {

					var verify = []

					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					setTimeout(msg, 100);
					
					that.tableData[that.SetIndex].status=2
                    that.popen=false
				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})
				
			},
			
          //完成采购

completePur:function  () {
				
				var id=this.tableData[this.SetIndex].id
				
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
				//                    /
				this.axios({
					method: 'put',
					url: '/api/f/purchases/'+id+'/3',

				}).then(function(res) {

					var verify = []

					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					setTimeout(msg, 100);
					
					that.tableData[that.SetIndex].status=3
                    that.popens=false
				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})
				
			},
			
			//查询仓库及供应商下产品
			getawait: function(val) {

				if(!this.warehousecache[val] == true) {
					if( this.objGetData.storageId==""|| this.objGetData.storageId==null){
					
					  return false;	
					}else{
						var productCategoryId = this.warehousecache[this.objGetData.storageId].productCategoryId
					}
				} else {
					
					if( this.objGetData.storageId!=""|| this.objGetData.storageId!=null){
					
					  var productCategoryId = this.warehousecache[val].productCategoryId
					}
					
					
				}

				var objgetdata = this.objGetData

				var supplierId = objgetdata.supplierId
				var storageId = objgetdata.storageId

				if(supplierId == "" || supplierId == null) {

					this.$Message.error('请选择供应商！');
					return false;
				} else if(storageId == "" || storageId == null) {

					this.$Message.error('请选择仓库！');
					return false;
				} else {
					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this

					//                    /
					this.axios({
						method: 'get',
						url: '/api/f/suppliers/' + supplierId + '/products?categoryId=' + productCategoryId,

					}).then(function(res) {

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}
						that.awaitdata = []

						var data = res.data.data
						for(var i = 0; i < data.length; i++) {
							var obj = data[i]
							obj.ispick = true

							that.awaitdata.push(obj)
						}

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

				}

			},

			//添加信息api	
			GetModelIsok: function() {

				/*name": "",
									"notes": "",
									"purchaseRequestNo": "",
									"buyer": "",
									"storageId": "",
									"supplierId": "",
									"remarks":"",
									"totalMoney":""*/
				var awaitgetdata = this.awaitgetdata
				var objGetData = this.objGetData
				var name = objGetData.name
				var notes = objGetData.notes
				var buyer = objGetData.buyer
				var storageId = objGetData.storageId
				var supplierId = objGetData.supplierId
				var remarks = objGetData.remarks
				var totalMoney = objGetData.totalMoney

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('采购单名称不能为空！');
					return false;
				} else
				if(notes == "" || notes == null || notes.trim().length == 0) {

					this.$Message.error('采购单描述不能为空！');
					return false;
				} else if(buyer == "" || buyer == null) {

					this.$Message.error('采购员不能为空！');
					return false;
				} else if(storageId == "" || storageId == null) {

					this.$Message.error('请选择仓库！');
					return false;
				} else
				if(supplierId == "" || supplierId == null) {

					this.$Message.error('请选择供应商！');
					return false;
				} else if(remarks == "" || remarks == null || remarks.trim().length == 0) {

					this.$Message.error('备注不能为空！');
					return false;
				} else if(totalMoney == "" || totalMoney == null || totalMoney.trim().length == 0) {

					this.$Message.error('总金额不能为空！');
					return false;
				} else if(awaitgetdata.length == 0) {
					this.$Message.error('采购单下产品不能为空！');
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
						url: '/api/f/purchases',

						data: {
							"name": name,
							"buyer": buyer,
							"supplierId": supplierId,
							"notes": notes,
							"totalMoney": totalMoney,
							"remarks": remarks,
							"storageId": storageId,
							"purchaseProductDtoList": awaitgetdata,

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "采购单名称"
							},
							{
								"name": "buyer",
								"note": "采购人 "
							},
							{
								"name": "supplierId",
								"note": "供应商"
							},
							{
								"name": "supplierId",
								"note": "采购单描述"
							},

							{
								"name": "totalMoney",
								"note": "采购单总金额"
							},

							{
								"name": "remarks",
								"note": "采购单备注"
							},

							{
								"name": "storageId",
								"note": "仓库"
							},
							{
								"name": "purchaseProductDtoList",
								"note": "采购单下产品"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

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

			putpurchasestatus: function(val, pid, index) {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var id = this.tableData[this.SetIndex].id

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
				//                    /
				this.axios({
					method: 'put',
					url: '/api/f/purchases/' + id + '/products/' + pid + '/' + val,

				}).then(function(res) {

					var verify = []

					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					that.getpurchasedata.purchaseProductDtoList[index].status = val
					var datalist = that.getpurchasedata.purchaseProductDtoList

					var isqualified = 0;

					if(val == 1 || val == 4) {

						for(var i = 0; i < datalist.length; i++) {

							if(datalist[i].status == 1 || datalist[i].status == 4) {
								isqualified++
							}

						}

						if(isqualified == datalist.length) {
							that.getpurchasedata.status = 6
							that.tableData[that.SetIndex].status = 6
							that.pushwarehouse(id, 6)
						} else {
							that.getpurchasedata.status = 5
							that.tableData[that.SetIndex].status = 5
							that.pushwarehouse(id, 5)
						}

					} else if(val == 2 || val == 3) {
						for(var i = 0; i < datalist.length; i++) {

							if(datalist[i].status == 2 || datalist[i].status == 3) {
								isqualified++
							}

						}

						if(isqualified == datalist.length) {
							that.getpurchasedata.status = 4
							that.tableData[that.SetIndex].status = 4
							that.pushwarehouse(id, 4)
						} else {
							that.getpurchasedata.status = 5
							that.tableData[that.SetIndex].status = 5
							that.pushwarehouse(id, 5)
						}

					}

					/*
                    
                    var isZero=0
                    
                   
                    */
					/* if(isZero==0){
					
					 }*/

					that.$Message.success("修改成功")
					setTimeout(msg, 100);

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},

			pushwarehouse: function(id, val) {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
				//                    /
				this.axios({
					method: 'put',
					url: '/api/f/purchases/' + id + '/' + val,

				}).then(function(res) {

					var verify = []

					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					setTimeout(msg, 100);

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},

			goWarehouse: function() {
				this.inWarehouse = true;
				this.purchasemsgopen = false;
				this.inWarehouseData = [];
				this.arrydata=[];
				var datalist = this.getpurchasedata.purchaseProductDtoList

				for(var i = 0; i < datalist.length; i++) {

					if(datalist[i].status == 2) {
						var obj = datalist[i]
						obj.ispick = false
						this.inWarehouseData.push(obj)
					}

				}

			},

			//选择合格采购产品

			pickitem: function(val, index) {

				var arrydata = this.arrydata
				var pickdata = this.inWarehouseData[index]
				var datacache = this.AwpickCache

				if(val == true) {

					if(!datacache[pickdata.productId]) {

						this.arrydata.push(pickdata)

					} else {

						var datac = datacache[pickdata.productId]

						pickdata.shelf = datac.shelf.toString()
						pickdata.column = datac.column.toString()
						pickdata.tier = datac.tier.toString()
						pickdata.ishave = true

						this.arrydata.push(pickdata)

					}

				} else {

					var id = pickdata.id

					for(var i = 0; i < arrydata.length; i++) {

						if(id == arrydata[i].id) {
							arrydata.splice(i, 1)
						}

					}

				}

				this.arrydata = arrydata
			},

			//确认入库

			sureINwarehouse: function() {

				if(this.arrydata.length == 0) {
					return false;
				}

				this.Warehouselocation = true

			},

			sureINwarehousebill: function() {

				var id = this.tableData[this.SetIndex].id

				var supplierId = this.getpurchasedata.supplierId
				var no = this.IsAwObj.no
				var storageId = this.getpurchasedata.storageId
				var num = /^\d+(\.\d+)?$/
				var nu = /^[0-9]*$/;

				if(no == "" || no == null || no.trim().length == 0) {
					this.$Message.error('入库编号不能为空！');
					return false;
				} else {
					var warehousedata = []
					var purchaseProductIds = []
					for(var i = 0; i < this.arrydata.length; i++) {

						var awdata = this.arrydata[i]
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
								productId: awdata.supplierProductId,
								quantity: quantity,
								price: price,
								shelf: awdata.shelf,
								column: awdata.column,
								tier: awdata.tier,
							}

							warehousedata.push(obj)
							purchaseProductIds.push(awdata.id)
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
						url: '/api/f/purchases/' + id + '/outputins',

						data: {
							no: no,
							storageId: storageId,
							supplierId: supplierId,
							storageOutputInItemList: warehousedata,
							purchaseProductIds: purchaseProductIds
						}

					}).then(function(res) {
						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						var data = res.data.data

						that.$Message.success("提交入库成功，已进入到出入库管理进行审核。")
						console.log(data)
						that.tableData[that.SetIndex] = data
						that.inWarehouse = false
						that.Warehouselocation = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.IsAwarehouse = false

					})

				}
			},

			//

			getwarehouseCache: function(wid) {

				var that = this

				this.axios({
					method: 'get',
					url: "/api/f/storages/" + wid + "/stocks",

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.AwpickCache = {}
					var data = res.data.data
					var awpickcache = that.AwpickCache
					for(var i = 0; i < data.length; i++) {
						awpickcache[data[i].productId] = data[i]
					}

					that.AwpickCache = awpickcache

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			clicksearch: function() {

				var searchobj = this.searchObj
				var name = searchobj.name
				var status = searchobj.status
				var paid = searchobj.paid
				var batch = searchobj.batch

				if(name.trim().length == 0 && batch.trim().length == 0 && status == "" && paid == "") {
					this.newData();

					return false;
				} else {
					this.pageIndex = 1
					this.searchData()
				}

			},
			
			delawait:function  (index) {
							
					var pid=this.awaitgetdata[index].productId

					for (var i=0; i<this.awaitdata.length;i++) {
						
						if (pid==this.awaitdata[i].productId) {

							this.awaitdata[i].ispick=true
						}
						
					}
					
					
					this.awaitgetdata.splice(index,1)
	                				
				
			},
			

			//调用检索api接口
			searchData: function() {

				var searchobj = this.searchObj

				var name = searchobj.name
				var status = searchobj.status
				var paid = searchobj.paid
				var batch = searchobj.batch

				var pathurl = ""

				if(name != "" && name != null && name.length != 0) {
					pathurl += 'name=' + name + "&"
				}

				if(status != "" && status != null) {
					pathurl += 'status=' + status + "&"
				}

				if(paid != "" && paid != null) {
					pathurl += 'paid=' + paid + "&"
				}

				if(batch != "" && batch != null) {
					pathurl += 'batch=' + batch + "&"
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
					url: '/api/f/purchases?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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
						"status": "",
						"paid": "",
						"batch": "",

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
					url: '/api/f/purchases?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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
			/*	getproducts: function() {

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
			}*/

		},

		mounted: function() {

			axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.getDatas()

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

			//查询所有供应商

			this.axios({
				method: 'get',
				url: '/api/f/suppliers?pageNum=1&pageSize=10000',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data

				that.supplier = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

			//查询仓库

			this.axios({
				method: 'get',
				url: '/api/f/storages?pageNum=1&pageSize=10000',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data

				that.warehouse = data

				for(var i = 0; i < data.length; i++) {

					that.warehousecache[data[i].id] = data[i]

				}

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})

			//所有员工

			this.axios({
				method: 'get',
				url: '/api/f/depts/members?pageNum=1&pageSize=10000',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data

				that.purchasecrew = data

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
	
	.item_product input {
		display: block;
		padding-left: 5px;
		width: 100%;
		height: 30px;
		line-height: 30px;
		box-sizing: border-box;
		border: solid 1px #c5c8ce;
		border-radius: 3px;
		background: white;
	}
	
	.item_product input::-webkit-input-placeholder {
		color: #c5c8ce;
	}
	
	.item_product datalist {
		border: solid 1px #c5c8ce;
	}
	
	.await_nav {
		display: block
	}
	
	.await_nav ul {
		display: block
	}
	
	.await_nav ul li {
		padding: 10px;
		background: whitesmoke;
		margin-bottom: 10px
	}
	
	.await_nav ul li p {
		margin-bottom: 10px
	}
	
	.modal_msg {
		width: 100%;
		margin-top: 20px;
	}
	
	.modal_msg ul {
		width: 100%;
	}
	
	.modal_msg ul li {
		padding: 10px;
		background: whitesmoke;
	}
	
	.modal_msg ul li p {
		font-size: 14px;
		margin-bottom: 8px;
	}
</style>

<style src='./../../assets/css/department.css'></style>