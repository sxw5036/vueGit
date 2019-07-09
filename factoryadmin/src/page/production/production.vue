<template>
	<div class="contain">
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>生产管理</BreadcrumbItem>
			</Breadcrumb>

		</div>

		<div>
			<Row>
				<Col span="4">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head "><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>今日太生产数量</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">54</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>
				
				<Col span="4">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon two-child"><img src="../../assets/img/order/list-02.png"/></div>今日完成生产数量</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">31</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>
				
				
				<Col span="4">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>今日临产生产单数量</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">12</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>
				
				
				<Col span="4">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>今日超期生产单数量</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">32</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>

				

				<Col span="8">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
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
								<div class="lable">生产单编号</div>
								<div class="form_nav">
									<Input  v-model="ordernum" placeholder="请输入生产单编号..." style="width: 200px;"></Input>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary" @click="serchorder" icon="ios-search">搜索</Button>
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
									<Button type="primary" >导入</Button>
									<Button type="primary">导出</Button>
									<Button type="primary"  @click="newOpen">新建</Button>
								</div>
							</li>

						</ul>

					</div>
				</div>

			</div>

			<div>

				<Table :columns="columns1" :data="data1" border></Table>
				<div class="ui_tableBottom">

					<div class="ui_operate">

					</div>

					<div class="ui_page">
						<Page :total="totalpage" :page-size="pageSize" show-total @on-change="changepage" :current="currents" show-elevator/>
					</div>

				</div>

			</div>

		</div>

		<!-- 修改状态 -->
		<Modal v-model="changestatus" title="修改订单的状态" @on-ok="ok" @on-cancel="cancel">
			<Select v-model="changeorderstatus" style="width:200px" disabled="disabled">
				<Option v-for="item in orderstatusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
		</Modal>
		<!-- 修改状态 -->
		<!-- 需求详情 -->
		<Modal v-model="demandstatus" title="需求详情" @on-ok="desginok" @on-cancel="desgincancel" width=50%;>
			<Row span="24">
				<Col span="8">
				<span>需求单编号: {{ customOrderDemands.no}}</span>
				</Col>
				<Col span="8">
				<span>需求内容: {{ customOrderDemands.content }}</span>
				</Col>
				<Col span="8">
				<span>需求名: {{ customOrderDemands.name }}</span>
				</Col>
			</Row>
			<br>
			<Row span="24">
				<Col span="8">
				<span>创建人: {{ customOrderDemands.creatorName}}</span>
				</Col>
				<Col span="8">
				<span>创建时间: {{ customOrderDemands.created }}</span>
				</Col>
				<Col span="8">
				<span style="visibility: hidden;">1</span>
				</Col>
			</Row>
			<div class="upload-list" v-for="item in demandfilearr">
				<img :src="item.path" alt="">
			</div>
			<div slot="footer">
				<Button type="error" size="large" @click="demandstatus = false">关闭</Button>
			</div>
		</Modal>
		<!-- 需求详情 -->
		<!-- 设计详情 -->
		<Modal v-model="designstatus" title="设计详情" width=60%;>
			<Row span="24">
				<Col span="8">
				<span>设计单编号: {{ orderDesignDtos.no}}</span>
				</Col>
				<Col span="8">
				<span>设计备注: {{ orderDesignDtos.notes }}</span>
				</Col>
				<Col span="8">
				<span>设计名称: {{ orderDesignDtos.name }}</span>
				</Col>
			</Row>
			<br>
			<Row span="24">
				<Col span="8">
				<span>设计师: {{ orderDesignDtos.designName}}</span>
				</Col>
				<Col span="8">
				<span>创建时间: {{ orderDesignDtos.created }}</span>
				</Col>
				<Col span="8">
				<span>设计师电话: {{ orderDesignDtos.designMobile}}</span>
				</Col>
			</Row>
			<br>
			<Row span="24">
				<Col span="8">
				<span>估价: {{ orderDesignDtos.valuation}}</span>
				</Col>
				<Col span="8">
				<span>设计状态: {{ orderDesignDtos.status }}</span>
				</Col>
				<Col span="8">
				<span style="visibility: hidden;">1</span>
				</Col>
			</Row>
			<br>
			<div class="upload-list" v-for="item in designFilearr">
				<img :src="item.path" alt="">
			</div>
			<div slot="footer">
				<Button type="error" size="large" @click="designstatus = false">关闭</Button>
			</div>
		</Modal>
		<!-- 设计详情 -->
		<!-- 订单详情 -->
		<Modal v-model="orderdetail" title="生产单详情" width=50%;>
			<div style="padding: 10px;">
				<Row>
					<Col span="24" style="padding: 1%;">
					<Card dis-hover>

						<Form>
							<FormItem>
								<Row span="24">
									<Col span="8">
									<span>生产单编号:{{ this.no }} </span>
									</Col>
									<Col span="8">
									<span>经销商:{{ this.dealerName }}</span>
									</Col>
									<Col span="8">
									<span>客户名称:{{ this.customerName }}</span>
									</Col>

								</Row>
							</FormItem>

							<FormItem>
								<Row span="24">
									<Col span="8">
									<span>跟单员:{{ this.merchandiserName }} </span>
									</Col>
									<Col span="8">
									<span v-show="this.state==0">生产单状态：未开始</span>
									<span v-show="this.state==1">生产单状态：进行中</span>
									<span v-show="this.state==2">生产单状态：已完成</span>
									</Col>
									<Col span="8">
									<span>订单编号:{{ this.deliveryorderNo }}</span>
									</Col>

								</Row>
							</FormItem>
							<FormItem>
								<Row span="24">

									<Col span="8">
									<span>计划生产时间:{{ this.plannedTime }}</span>
									</Col>
									<Col span="8">
									<span>生效时间:{{ this.payTime }}</span>
									</Col>
									<Col span="8">
									<span>计划交付时间:{{ this.estimatedDeliveryDate }} </span>

									</Col>
								</Row>
							</FormItem>

						</Form>

					</Card>
					</Col>

				</Row>
				<!--  <div v-for="(item,index) in productuploadFiles" > 
                                  <img :src="item.path" >
                   </div> -->

			</div>
			<div slot="footer">
				<Button type="error" size="large" @click="orderdetail = false">关闭</Button>
			</div>
		</Modal>
		<!-- 订单详情 -->
		<!-- 放大图片 -->
		<Modal title="图片详情" v-model="visible" style="text-align: center;">
			<img :src="bigimg" v-if="visible" style="width: 80%;">
		</Modal>
		<!-- 放大图片 -->
		<Modal title="创建计划" v-model="buildmodel" width=60%;>
			<div>
				<Row span="24" style="padding:10px;">
					<Col span="24">
					<div style=" margin-left: 20px; margin-bottom: 20px;">
						计划生产时间：
						<DatePicker type="date" v-model="plansTime" placeholder="请选择计划生产时间" style="width: 25%; margin-right: 10px;" :value="plansTime" @on-change="handleChanges"></DatePicker>
						生产线安排：
						<Select v-model="orderproducts" style="width: 25%; margin: 5px;">
							<Option v-for="item in orderproductOption" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</div>

					</Col>
					<Col span="24">
					<Table :columns="columns8" :data="data8" border ref="selection" @on-selection-change="datacollect"></Table>
					</Col>

				</Row>

			</div>

			<div class="demo-drawer-footer">
				<Button type="error" @click="buildmodel = false">关闭</Button>
				<Button type="primary" @click="setproduce">确认</Button>
			</div>
		</Modal>

	</div>
</template>

<script>
	import returndata from '@/assets/js/returndata.js'
	export default {
		data() {
			return {
				productuploadFiles: [],
				orderstatue: '',
				customname: '',
				plans_time: '',
				choseid: [],
				//拿到生产单数据
				no: '',
				type: '',
				plannedTime: '',
				dealerName: '',
				customerName: '',
				state: '',
				merchandiserName: '',
				payTime: '',
				estimatedDeliveryDate: '',
				deliveryorderNo: '',
				//创建计划
				ordercreat: '',
				ordercreated: [{
						value: 0,
						label: '创建'
					},
					{
						value: 1,
						label: '未创建'
					},

				],
				orderstatuslist: [{
						value: 0,
						label: '未开始'
					}, {
						value: 1,
						label: '生产中'
					},
					{
						value: 2,
						label: '已完成'
					}
				],
				buildmodel: false,
				plansTime: '',
				orderproducts: '',
				orderproductOption: [{
						value: 0,
						label: '温县工厂一号生产线'
					},
					{
						value: 1,
						label: '温县工厂二号生产线'
					},
					{
						value: 2,
						label: '哈尔滨工厂一号生产线'
					}
				],

				//
				bigimg: '',
				visible: false,
				operation: {},
				orderdatas: '',
				formPropertyMapping: {

				},
				//设计详情的数据
				ifsearch: false,
				demandstatus: false,
				designstatus: false,
				//订单详情数据
				orderdata: "",
				orderdetail: false,
				data3: [],
				data4: [],
				columns3: [{
						title: '编号',
						key: 'no',
						align: 'center',
					},
					{
						title: '创建时间',
						key: 'created',
						align: 'center',
					},
					{
						title: '内容',
						key: 'content',
						align: 'center',
					},
					{
						title: '操作',
						key: 'action',
						align: 'center',
						width: 120,
						fixed: 'right',
						render: (h, params) => {
							return h('div', [

								h('Button', {
									props: {
										type: 'info',
										size: 'small',
//										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.demanddetaill(params.index)
										}
									}
								}, '需求详情')
							]);
						}
					}
				],
				columns4: [{
						title: '编号',
						key: 'no',
						align: 'center',
					},
					{
						title: '设计名称',
						key: 'designName',
						align: 'center',
					},
					{
						title: '设计电话',
						key: 'designMobile',
						align: 'center',
					},
					{
						title: '创建时间',
						key: 'created',
						align: 'center',
					},
					{
						title: '结束时间',
						key: 'endTime',
						align: 'center',
					},
					{
						title: '设计单状态',
						key: 'status',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.status == 0) {
								text = '设计中'
							} else if(row.status == 1) {
								text = '待审核'
							} else if(row.status == 2) {
								text = '待发布'
							} else if(row.status == 3) {
								text = '待确认'
							} else if(row.status == 4) {
								text = '已确认'
							}
							return h('Tag', {
								props: {
									type: 'border',
								}
							}, text);
						}
					},
					{
						title: '操作',
						key: 'action',
						align: 'center',
						width: 120,
						fixed: 'right',
						render: (h, params) => {
							return h('div', [

								h('Button', {
									props: {
										type: 'info',
										size: 'small',
										disabled: !this.operation.view
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.designdetails(params.index)
										}
									}
								}, '设计详情')
							]);
						}
					}
				],
				//订单详情数据
				changeorderstatus: '',
				changestatus: false,
				orderstatusList: [{
						value: 0,
						label: '待处理'
					},
					{
						value: 1,
						label: '设计费待评估'
					},
					{
						value: 2,
						label: '设计费待确认'
					},
					{
						value: 3,
						label: '设计费待审核'
					},
					{
						value: 4,
						label: '待设计'
					},
					{
						value: 5,
						label: '设计中'
					}, {
						value: 6,
						label: '设计待确认'
					}, {
						value: 7,
						label: '出厂价待确认'
					}, {
						value: 8,
						label: '经销商待确认出厂价'
					}, {
						value: 9,
						label: '货款支付审核'
					}, {
						value: 10,
						label: '待生产'
					}, {
						value: 11,
						label: '生产中'
					}, {
						value: 12,
						label: '待入库'
					}, {
						value: 13,
						label: '待出库'
					}, {
						value: 14,
						label: '待配送'
					}, {
						value: 15,
						label: '配送中'
					}, {
						value: 16,
						label: '已完成'
					}
				],
				totalpage: 10,
				pageSize: 20,
				orderstatus: '',
				customtel: '',
				ordernum: '',
				data8: [],
				columns8: [{
						type: 'selection',
						width: 60,
						align: 'center'
					},
					{
						title: '生产单编号',
						key: 'no',
						align: 'center',
						width: 220,
					},
					{
						title: '订单编号',
						key: 'customOrderNo',
						align: 'center',
						width: 220,
					},

					{
						title: '类型',
						key: 'type',
						align: 'center',
						width: 180,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '柜体'
							} else if(row.type == 1) {
								text = '门板'
							} else if(row.type == 2) {
								text = '五金'
							}
							return h('div', text);
						}
					},
					{
						title: '经销商',
						key: 'dealerName',
						align: 'center',
						width: 180,
						ellipsis: true,
					},
					{
						title: '客户',
						key: 'customerName',
						align: 'center',
						width: 180,
						ellipsis: true,

					},

					{
						title: '状态',
						key: 'state',
						align: 'center',
						width: 220,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.state == 0) {
								text = '未开始'
							} else if(row.state == 1) {
								text = '生产中'
							} else if(row.state == 2) {
								text = '已完成'
							}
							return h('div', text);
						}
					},
					{
						title: '跟单员',
						key: 'merchandiserName',
						align: 'center',
						width: 200,
						ellipsis: true,

					},
					{
						title: '计划交付时间',
						key: 'estimatedDeliveryDate',
						align: 'center',
						width: 200,
						ellipsis: true,
						render: (h, params) => {

							const row = params.row;
							var text;

							text = row.estimatedDeliveryDate.substr(0, 10)

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

						}
					},
					{
						title: '计划生产时间',
						key: 'plannedTime',
						align: 'center',
						width: 200,
						ellipsis: true,
						render: (h, params) => {

							const row = params.row;
							var text;

							text = row.plannedTime.substr(0, 10)

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

						}
					},
					{
						title: '生效时间',
						key: 'payTime',
						align: 'center',
						width: 200,
						ellipsis: true,
					},

				],
				columns1: [{
						title: '生产单编号',
						key: 'no',
						align: 'center',
						fixed: 'left',
						width: 220,
					},
					{
						title: '订单编号',
						key: 'customOrderNo',
						align: 'center',
						width: 220,
					},
					{
						title: '类型',
						key: 'type',
						align: 'center',
						width: 180,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '柜体'
							} else if(row.type == 1) {
								text = '门板'
							} else if(row.type == 2) {
								text = '五金'
							}
							return h('div', text);
						}
					},
					{
						title: '经销商',
						key: 'dealerName',
						align: 'center',
						width: 180,
						ellipsis: true,
					},
					{
						title: '客户',
						key: 'customerName',
						align: 'center',
						width: 180,
						ellipsis: true,

					},

					{
						title: '状态',
						key: 'state',
						align: 'center',
						width: 220,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.state == 0) {
								text = '未开始'
							} else if(row.state == 1) {
								text = '生产中'
							} else if(row.state == 2) {
								text = '已完成'
							}
							return h('div', text);
						}
					},
					{
						title: '跟单员',
						key: 'merchandiserName',
						align: 'center',
						width: 200,
						ellipsis: true,
					},
					{
						title: '计划交付时间',
						key: 'estimatedDeliveryDate',
						align: 'center',
						width: 200,
						ellipsis: true,
						render: (h, params) => {

							const row = params.row;
							var text;

							text = row.estimatedDeliveryDate.substr(0, 10)

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

						}
					},
					{
						title: '计划生产时间',
						key: 'plannedTime',
						align: 'center',
						width: 200,
						ellipsis: true,
						render: (h, params) => {

							const row = params.row;
							var text;

							text = row.plannedTime.substr(0, 10)

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

						}
					},
					{
						title: '生效时间',
						key: 'payTime',
						align: 'center',
						width: 200,
						ellipsis: true,
					},

					{
						title: '操作',
						width: 140,
						align: 'center',
						fixed: 'right',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small',
//										disabled: !this.operation.view
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.$router.push({
												name: 'productionDetails',
												query: {
													id: this.data1[params.index].id
												}
											})
//											this.orderdetails(params.index)
										}
									}
								}, '详情')
							]);
						}
					}
				],
				data1: [],
				nono: '',
				Tel: '',
				orderstatus: '',
				currents: 1,
				pageNum: '',
				changestatusindex: '',
				useid: '',
				customOrderDemands: '',
				demandfilearr: [],
				orderDesignDtos: '',
				designFilearr: [],
				ProgressEvent: [],
			};
		},
		methods: {
			
			
			newOpen:function  () {
				this.$emit('openWindow', ('productionNewly'), ('新建生产'), ('8-1'), ('productionNewly'), ('productionNewly'))
			},
			
			datacollect(selection) {
				this.choseid = [];
				if(selection.length > 0) {

					for(var i = 0; i < selection.length; i++) {
						this.choseid.push(selection[i].id)

					}
				}
			},
			setproduce() {
				if(this.choseid.length < 1) {
					this.$Message.success("请选择安排生产的订单");
					return false;
				} else if(this.plansTime == "" || this.plansTime == null) {
					this.$Message.success("请选择计划生产时间");
					return false;
				}
				let that = this;

				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/produces/plans',
					data: {
						ids: that.choseid,
						planTime: that.plansTime,
					}
				}).then(res => {

					if(res != false) {
						this.$Message.success("安排生产成功");
						that.getorderdatas();
						that.buildmodel = false

					}

				})
			},
			handleChanges(val) {
				this.plansTime = val;
			},
			buildplans() {
				this.buildmodel = true;
				this.plansTime = "",
					this.orderproducts = "",
					this.getorderplansdatas();
			},
			// 查看大图
			bigphoto(index) {
				this.visible = true;
				this.bigimg = this.orderdatas[index].path;
			},
			//设计详情
			designdetails(index) {
				this.designstatus = true;
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/' + that.useid + '/designs/' + that.data4[index].id
				}).then(res => {
					if(res != false) {
						if(res.data.data.orderDesignDto.status == 0) {
							res.data.data.orderDesignDto.status = "设计中"
						} else if(res.data.data.orderDesignDto.status == 1) {
							res.data.data.orderDesignDto.status = "待审核"
						} else if(res.data.data.orderDesignDto.status == 2) {
							res.data.data.status = "待发布"
						} else if(res.data.data.orderDesignDto.status == 3) {
							res.data.data.orderDesignDto.status = "待确认"
						} else if(res.data.data.orderDesignDto.status == 4) {
							res.data.data.orderDesignDto.status = "已确认"
						}
						that.orderDesignDtos = res.data.data.orderDesignDto
						that.designFilearr = res.data.data.designFile
					}
				})
			},
			demanddetaill(index) {
				this.demandstatus = true;
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/' + that.useid + '/demands/' + that.data3[index].id
				}).then(res => {
					if(res != false) {
						that.customOrderDemands = res.data.data.customOrderDemand
						that.demandfilearr = res.data.data.demandFile
					}
				})
			},
			//设计详情
			desgincancel() {

			},
			desginok() {

			},
			orderdetailcancel() {

			},
			orderdetailok() {

			},
			//获取订单详情数据
			orderdetails(index) {
				this.useid = this.data1[index].id;
				this.no = this.data1[index].no;
				this.type = this.data1[index].type;
				this.plannedTime = this.data1[index].plannedTime.substr(0, 10);
				this.dealerName = this.data1[index].dealerName;
				this.customerName = this.data1[index].customerName;
				this.state = this.data1[index].state;
				this.merchandiserName = this.data1[index].merchandiserName;
				this.payTime = this.data1[index].payTime;
				this.estimatedDeliveryDate = this.data1[index].estimatedDeliveryDate.substr(0, 10);
				this.deliveryorderNo = this.data1[index].customOrderNo;
				this.productuploadFiles = this.data1[index].uploadFiles;
				console.log(this.productuploadFiles)
				this.orderdetail = true
			},
			//获取订单详情数据
			changestatu(index) {
				this.changestatus = true;
				this.changestatusindex = index;
				this.changeorderstatus = this.data1[index].status + 1
			},
			ok() {
				this.repairorderstatus();
			},
			cancel() {

			},
			changepage(index) {
				if(this.ifsearch == true) {
					let that = this;
					this.currents = index;
					this.getsearchorderdatas();
				} else {
					this.ordernum = ""
					this.customtel = ""
					this.orderstatus = ""
					this.currents = index;
					this.getorderdatas();
				}
			},
			//搜索订单
			serchorder() {
				this.ifsearch = true;
				this.currents = 1;
				this.getsearchorderdatas();
			},
			//加载数据
			getsearchorderdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/produces/plans?way=0&type=0&type=1' + (that.orderstatue == '' ? '' : '&state=' + that.orderstatue) + (that.ordernum == '' ? '' : '&no=' + that.ordernum) + (that.customname == '' ? '' : '&customName=' + that.customname) +
						'&pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {

					if(res != false) {
						that.data1 = res.data.data;

						that.pageSize = res.data.pagination.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total;

					}
				})
			},
			//加载数据
			getorderdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/produces/plans?way=0&type=0&type=1&state=0&state=1&state=2' +
						'&pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {
					console.log(res)
					if(res != false) {

						that.data1 = res.data.data;

						that.pageSize = res.data.pagination.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total;

					}
				})
			},
			//加载数据
			getorderplansdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/produces/plans?way=0&type=0&type=1&state=0&plannedTime=1'

				}).then(res => {

					if(res != false) {
						that.data8 = res.data.data;

					}
				})
			},
			//修改订单的状态
			repairorderstatus() {
				let that = this;
				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/' + that.data1[that.changestatusindex].id + '/manufactureplan',
					data: {
						status: 11
					}
				}).then(res => {
					if(res != false) {
						that.getorderdatas();
					}
				})
			}
		},
		mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
			console.log(this.operation)
			this.getorderdatas();

		}
	}
</script>

<style>
	.fenye_produce_plan {
		margin-top: 50px;
		float: right;
		margin-right: 20px;
	}
	
	.upload-list {
		display: inline-block;
		width: 90px;
		height: 90px;
		text-align: center;
		line-height: 90px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
		margin-right: 4px;
	}
	
	.upload-list img {
		width: 100%;
		height: 100%;
	}
</style>