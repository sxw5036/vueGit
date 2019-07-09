<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>成品库</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<!---->
		<div>
			<Row>
				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>今日包装数</h3>
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
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>今日包裹订单数</h3>
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
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>今日入库数量</h3>
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

		<!---->
		<div class="table_nav_iv">
			<div class="operation_box">
				<div class="active">
					<!---->
					<div class="ui_operateLeft" style="line-height: 32px;">
						<ul class="tab">

							<li class="tab_item">
								<div class="lable">包裹编号</div>
								<div class="form_nav">
									<input class="iv_input" style="width: 200px;" v-model="searchObj.barcode" placeholder="请输入包裹编号..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">订单编号</div>
								<div class="form_nav">
									<input class="iv_input" style="width: 200px;" v-model="searchObj.orderNo" placeholder="请输入订单编号..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">配送计划</div>
								<div class="form_nav">
									<Select v-model="searchObj.ship" style="width: 200px;">
										<Option value="0" key="0">未创建</Option>
										<Option value="1" key="1">已创建</Option>

									</Select>
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

						<!--<span class="operation_span">选择状态：</span>
					<Select v-model="searchObj.status" style="width: 200px;">
						<Option value="0" key="0">待配送</Option>
						<Option value="1" key="1">部分配送</Option>
						<Option value="2" key="2">全部配送</Option>
					</Select>-->
						<!--<span class="operation_span">入库方式：</span>
					<Select v-model="searchObj.way" style="width: 200px;">
						<Option value="0" key="0">系统自动入库</Option>
						<Option value="1" key="1">人工手动入库</Option>

					</Select>-->

					</div>

					<div class="ui_operateRight">

						<ul class="tab">
							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary">导入</Button>
									<Button type="primary">导出</Button>
									<Button type="primary" @click="newOPen">新建</Button>
								</div>
							</li>
						</ul>

						<!--<Button type="primary" @click="GetModelOpen" v-show="operation.edit==true" :disabled="!operation.edit">添加成品库订单</Button>-->
						<!--<Button type="primary" @click="adddistribution" v-show="operation.edit==true" :disabled="!operation.edit">创建配送计划</Button>-->

					</div>
				</div>

			</div>

			<div>

				<Table border :loading="loading" :columns="tableHeader" :data="tableData" @on-select="pickselect" @on-select-all="pickselectAll" @on-select-all-cancel="cancelselectAll" @on-select-cancel="cancelselect" ></Table>
				<Switch v-model="loading"></Switch>
				<div class="ui_tableBottom">

					<div class="ui_operate">

					</div>

					<div class="ui_page">
						<Page :current="pageIndex" :total="pageIndextotal" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
					</div>

				</div>

			</div>
		</div>
		<!---->
		<Modal title="成品库单详情" v-model="finishedDetails" width="1000">

			<div class="operation_box">

				<div class="active">
					<div class="ui_operateRight">

						<!--<Button shape="circle" @click="" icon="ios-add" style="font-size: 20px;"></Button>-->
						<Button type="info" @click="Afinisheditemopen" v-show="packages>finishedLen">新建条目</Button>
						<Button type="primary" @click="distributionOpen">创建配送计划</Button>

					</div>
				</div>

			</div>

			<Table border height="300" :columns="finishedHead" :data="finishedData" ref="table"></Table>

			<div slot="footer" style="border: none;"></div>
		</Modal>
		<!---->
		<!--添加模态框 -s -->

		<Modal title="添加成品库订单" v-model="GetModel" width="1000">

			<div class="aw_order">

				<ul>
					<li class="item">
						<Form :model="objGetData" :label-width="80">
							<!--<FormItem label="仓库主键">
								<Input style="width: 300px;" v-model="objGetData.storageId" placeholder="请输入产品名称..."></Input>
							</FormItem>-->

							<FormItem label="选择订单">
								<Select id="p_lea" v-model="objGetData.orderId" @on-change="setirderid(objGetData.orderId)">
									<Option v-for="(item,index) in orderData" :value="item.id" :key="item.id">{{ item.customerName }} {{item.customerTel}}</Option>
								</Select>

							</FormItem>

							<!--<FormItem label="订单">
								<Input id="p_lea" v-model="objGetData.orderId" placeholder="请输入订单..."></Input>
							</FormItem>
-->
							<FormItem label="描述">
								<Input id="p_lea" v-model="objGetData.notes" placeholder="请输入描述..."></Input>
							</FormItem>

							<FormItem label="订单编号">
								<Input id="p_lea" disabled="disabled" v-model="objGetData.orderNo" placeholder="请输入订单编号..."></Input>
							</FormItem>

							<FormItem label="标记">
								<Input id="p_lea" v-model="objGetData.flag" placeholder="请输入标记..."></Input>
							</FormItem>

							<FormItem label="包数">
								<Input id="p_lea" v-model="objGetData.packages" placeholder="请输入包数..."></Input>
							</FormItem>

						</Form>
					</li>

					<li class="item af_center">

						<div :key="index" class="item" v-for="(item,index) in objGetData.finishedStockItemDtos">
							<Form :model="objGetData" :label-width="120">
								<FormItem label="包装编号/条形码">
									<Input style="width: 300px;" v-model="item.barcode" placeholder="请输入条目包装编号/条形码..."></Input>
								</FormItem>

								<FormItem label="条目描述">
									<Input style="width: 300px;" v-model="item.notes" placeholder="请输入条目描述..."></Input>

								</FormItem>

								<FormItem label="条目类型">
									<Select v-model="item.type" id="p_lea">
										<Option value="0" key="0">衣柜</Option>
										<Option value="1" key="1">橱柜</Option>
										<Option value="2" key="2">门板</Option>
										<Option value="3" key="3">五金（含五金配件、厨具、烟机灶具、礼品等）</Option>
									</Select>
								</FormItem>

								<FormItem label="条目位置">
									<Input style="width: 300px;" v-model="item.location" placeholder="请输入条目位置..."></Input>
								</FormItem>
							</Form>

							<div class="delBut">

								<Button shape="circle" @click="delitem(index)" icon="ios-close" style="font-size: 20px;"></Button>
							</div>

						</div>

						<div class="butappned">
							<Button shape="circle" @click="additem" icon="ios-add" style="font-size: 20px;"></Button>
						</div>

					</li>

				</ul>

			</div>

			<div slot="footer">
				<Button type="primary" @click="GetModelIsok">确认添加</Button>
			</div>

		</Modal>

		<!--修改信息-s-->

		<Drawer v-model="SetModel" title="修改成品库单信息" width="500">

			<Form :model="SetGetData" :label-width="100">

				<FormItem label="成品库单描述">
					<Input v-model="SetGetData.Setnotes" placeholder="请输入成品库单描述..."></Input>
				</FormItem>

				<FormItem label="成品库单标记">
					<Input v-model="SetGetData.Setflag" placeholder="请输入成品库单标记..."></Input>
				</FormItem>
			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetModelIsok">确认修改</Button>
			</div>

		</Drawer>

		<!--修改成品库单下条目-->

		<Drawer v-model="SetFs" title="修改成品库单条目信息" width="500" @on-close='SetFscancel'>

			<Form :model="SetFsData" :label-width="100">

				<FormItem label="条目描述">
					<Input v-model="SetFsData.Setnotes" placeholder="请输入条目描述..."></Input>
				</FormItem>

				<FormItem label="条目位置">
					<Input v-model="SetFsData.Setlocation" placeholder="请输入条目位置..."></Input>
				</FormItem>
			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetFsbut">确认修改条目</Button>
			</div>

		</Drawer>

		<!--新增成品库单下条目-->
		<!-- @on-close='SetFscancel'-->
		<Drawer v-model="Afinishedshow" title="新增成品库单条目信息" width="500">

			<Form :model="Afinisheditem" :label-width="120">

				<FormItem label="包装编号/条形码">
					<Input v-model="Afinisheditem.barcode" placeholder="请输入条目包装编号/条形码..."></Input>
				</FormItem>

				<FormItem label="条目描述">
					<Input v-model="Afinisheditem.notes" placeholder="请输入条目描述..."></Input>

				</FormItem>

				<FormItem label="条目类型">
					<Select v-model="Afinisheditem.type">
						<Option value="0" key="0">衣柜</Option>
						<Option value="1" key="1">橱柜</Option>
						<Option value="2" key="2">门板</Option>
						<Option value="3" key="3">五金（含五金配件、厨具、烟机灶具、礼品等）</Option>
					</Select>
				</FormItem>

				<FormItem label="条目位置">
					<Input v-model="Afinisheditem.location" placeholder="请输入条目位置..."></Input>
				</FormItem>
			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="Afinished">确认添加条目</Button>
			</div>

		</Drawer>

		<!--创建配送计划-->

		<Modal title="创建配送计划" v-model="distributionModel" width="1000" @on-cancel="cancelDistribution">

			<div class="aw_order">

				<ul>
					<li class="item" style="height: 500px;">
						<Form :model="objDistribution" :label-width="100">

							<FormItem label="选择订单">
								<Select id="p_lea" disabled="disabled" v-model="objDistribution.orderId" @on-change="distributionid">
									<Option v-for="(item,index) in orderDataAll" :value="item.id" :key="item.id">{{ item.customerName }} {{item.salesmanTel}}</Option>
								</Select>

							</FormItem>

							<FormItem label="订单编号">
								<Input id="p_lea" disabled="disabled" v-model="objDistribution.orderNo" placeholder="请输入订单编号..."></Input>
							</FormItem>

							<FormItem label="计划发货日期">
								<DatePicker type="date" format="yyyy-MM-dd" @on-change="planDate" placeholder="计划发货日期" v-model="objDistribution.plandate" id="p_lea"></DatePicker>
							</FormItem>

							<FormItem label="选择收货人">
								<RadioGroup @click="objDistribution" @on-change="consigneeType" v-model="objDistribution.consigneeType">
									<Radio label="0">经销商</Radio>
									<Radio label="1">客户</Radio>
								</RadioGroup>
							</FormItem>

							<FormItem label="收货人">
								<Input id="p_lea" v-model="objDistribution.consignee" placeholder="请输入收货人.."></Input>
							</FormItem>

							<FormItem label="收货人电话">
								<Input id="p_lea" v-model="objDistribution.consigneeTel" placeholder="请输入收货人电话.."></Input>
							</FormItem>
							<!---->
							<FormItem label="收货人地址">
								<Input id="p_lea" v-model="objDistribution.address" placeholder="请输入收货人地址.."></Input>
							</FormItem>

							<!--	<FormItem label="标记">
								<Input id="p_lea" v-model="objDistribution.flag" placeholder="请输入标记..."></Input>
							</FormItem>-->

						</Form>
					</li>

					<li class="item af_center" style="height: 500px;">

						<Table border height="500" :columns="distributionHead" :data="distributionNd" ref="table"></Table>

					</li>

				</ul>

			</div>

			<div slot="footer">
				<Button type="primary" @click="pushDistribution">确认创建</Button>
			</div>

		</Modal>

		<!--确认入库-s-->

		<Modal v-model="sureinmodel" title="确认包裹入库" width="800">

			<div>

				<Form :label-width="100">

					<FormItem label="订单编号">
						<p>{{packMsg.orderNo}}</p>
					</FormItem>

					<FormItem label="包裹编号">
						<p>{{packMsg.barcode}}</p>
					</FormItem>
					<FormItem label="包裹类型">

						<p v-show="packMsg.type==0">柜体</p>
						<p v-show="packMsg.type==1">门板-自产</p>
						<p v-show="packMsg.type==2">门板-外协</p>
						<p v-show="packMsg.type==3">特供实木</p>
						<p v-show="packMsg.type==4">五金</p>
					</FormItem>

					<FormItem label="是否入库">
						<p v-show="packMsg.in==false">否</p>
						<p v-show="packMsg.in==true">是</p>
					</FormItem>

					<FormItem label="配送计划">
						<p v-show="packMsg.shipped==false">未创建</p>
						<p v-show="packMsg.shipped==true">已创建</p>
					</FormItem>

					<FormItem label="包裹位置">
						<p>{{packMsg.location}}</p>
					</FormItem>

					<FormItem label="入库人">
						<Select style="width: 300px;" filterable v-model="packMsg.operator">
							<Option v-for="(item,index) in employee" :value="item.userId" :key="item.userId">{{item.userName}}</Option>
						</Select>
					</FormItem>

					<FormItem label="入库时间">
						<DatePicker style="width: 300px;" type="date" @on-change="getoperated" placeholder="请选择入库时间" :value="packMsg.operated"></DatePicker>
					</FormItem>

					<FormItem label="入库备注">
						<Input type="textarea" v-model="packMsg.warehousingNotes" placeholder="请输入入库备注.."></Input>
					</FormItem>

					<FormItem label="附件">
						<div class="pl">

							<div class="demo-upload-list" :key='index' v-for="(item,index) in packfiles">

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

			<div slot="footer">
				<Button type="primary" @click="surein" class="p_lea" style="margin-top: 10px;">确认</Button>
			</div>

		</Modal>

		<!--确认入库-end-->

		<!--创建配送计划-s-->

		<Modal v-model="distribution" title="确认创建配送计划" width="800">

			<div>
				<div class="distributionNots">
					<Input v-model="distributionNots" type="textarea" placeholder="请输入配送备注..." />
				</div>
				<Table border height="300" :columns="pickselectHead" :data="pickselectdata" ref="table"></Table>

			</div>

			<div slot="footer">

				<Button type="primary" style="float: left; margin-top: 10px;" @click="exportData"><Icon type="ios-download-outline"></Icon>导出数据</Button>

				<Button type="primary" @click="suredistribution" class="p_lea" style="margin-top: 10px;">确认创建</Button>
			</div>

		</Modal>

		<!--创建配送计划-end-->

		<!--包裹详情-s-->
		<Modal v-model="packModel" title="包裹详情" width="500">

			<div style="height: 500px; overflow: auto;">
				<Form :label-width="100">
					<FormItem label="包裹编号">
						<p>{{packMsg.barcode}}</p>
					</FormItem>

					<FormItem label="所属订单">
						<p>{{packMsg.orderNo}}</p>
					</FormItem>

					<FormItem label="包装产品">
						<p v-show="packMsg.type==0">柜体</p>
						<p v-show="packMsg.type==1">门板-自产</p>
						<p v-show="packMsg.type==2">门板-外协</p>
						<p v-show="packMsg.type==3">特供实木</p>
						<p v-show="packMsg.type==4">五金</p>
					</FormItem>

					<FormItem label="是否入库">
						<p v-show="packMsg.in==false">否</p>
						<p v-show="packMsg.in==true">是</p>
					</FormItem>

					<FormItem label="入库人">
						{{packMsg.operatorName}}
					</FormItem>

					<FormItem label="入库时间">
						{{packMsg.operated}}
					</FormItem>

					<FormItem label="配送计划">
						<p v-show="packMsg.shipped==false">未创建</p>
						<p v-show="packMsg.shipped==true">已创建</p>
					</FormItem>

					<FormItem label="包裹描述">
						{{packMsg.notes}}
					</FormItem>

					<FormItem label="包裹位置 ">
						{{packMsg.location}}
					</FormItem>

					<FormItem label="发货人 ">
						{{packMsg.deliverer}}
					</FormItem>

					<FormItem label="发货时间 ">
						{{packMsg.delivered}}
					</FormItem>

					<FormItem label="创键人 ">
						{{packMsg.creatorName}}
					</FormItem>

					<FormItem label="创建日期 ">
						{{packMsg.created}}
					</FormItem>

					<FormItem label="附件">
						<div class="pl">

							<div class="demo-upload-list" v-for="(item,index) in packfiles">

								<template>
									<img :src="item.path">
									<div class="demo-upload-list-cover">
										<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
									</div>
								</template>

							</div>

						</div>
					</FormItem>

				</Form>

			</div>

			<div slot="footer"></div>

		</Modal>

		<!--包裹详情-end-->

		<!--发货单详情-->

		<Modal v-model="deliver" title="发货单详情" width="500">
			<div style="height: 500px; overflow: auto;">
				<Form :label-width="100">
					<!--<FormItem label="所属订单">
						<p>{{deliverMsg.no}}</p>
					</FormItem>-->

					<FormItem label="发货单" >
						<p>{{deliverMsg.no}}</p>
					</FormItem>

					<FormItem label="物流编号">
						<p>{{deliverMsg.logisticsNo}}</p>
					</FormItem>

					<FormItem label="物流名称">
						<p>{{deliverMsg.logisticsName}}</p>
					</FormItem>

					<FormItem label="物流状态">
						<p v-show="deliverMsg.status==0">待取件</p>
						<p v-show="deliverMsg.status==1">运输中</p>
						<p v-show="deliverMsg.status==2">待收货</p>
						<p v-show="deliverMsg.status==3">已收货</p>
					</FormItem>

					<FormItem label="发货人">
						<p>{{deliverMsg.consignorName}}</p>
					</FormItem>

					<FormItem label="收货人">
						<p>{{deliverMsg.consignee}}</p>
					</FormItem>

					<FormItem label="收货电话">
						<p>{{deliverMsg.consigneeTel}}</p>
					</FormItem>
					<FormItem label="收货地址">
						<p>{{deliverMsg.address}}</p>
					</FormItem>

					<!--<FormItem label="经销商">
						<p>{{deliverMsg.dealerName}}</p>
					</FormItem>

					<FormItem label="经销商联系方式">
						<p>{{deliverMsg.dealerTel}}</p>
					</FormItem>

					<FormItem label="c端客户">
						<p>{{deliverMsg.orderConsigneeName}}</p>
					</FormItem>

					<FormItem label="客户联系方式">
						<p>{{deliverMsg.orderConsigneeTel}}</p>
					</FormItem>
-->
				</Form>

			</div>

			<div slot="footer"></div>

		</Modal>

		<!--发货单xq-e-->

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
				currents: 1,
				employee: [],

				tableHeader: [


					{
						type: 'selection',
						width: 60,
						align: "center",
						render: (h, params) => {

							var data = params.row

							return h('div', [

								h('Checkbox', {

									props: {
										value: data.ispick,
										size: 'small',

									},

									style: {
										marginRight: '5px',
										display: (data.shipped == false && data.in == true) ? "block" : "none"
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
						title: '包装编号/条形码',
						key: 'barcode',
						
						render: (h, params) => {
							var barcode = params.row.barcode
							return h('div', {
									style: {
										color: 'blue',
										textDecoration: 'underline',
										cursor: 'pointer'

									},

									on: {
										click: () => {
											this.packModel = true;
											var data = this.tableData[params.index]
											this.packMsg = data
											this.packfiles = data.fileList

										}
									},
								},
								barcode)
						}

					},

					{
						title: '所属订单',
						key: 'orderNo',
						

					},

					{
						title: '包装产品',
						key: 'type',
						
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
						title: '是否入库',
						key: 'in',
						
						render: (h, params) => {

							var In = params.row.in

							if(In == false) {
								var texts = "未入库"

								return h('div', texts)

							} else {
								var texts = "已入库"
								return h('div', [
									h('Div', {

										style: {
											color: 'green',
										},

									}, texts),
								])
							}

						}

					},
					{
						title: '入库人',
						key: 'operatorName',
						
						render: (h, params) => {

							var operatorName = params.row.operatorName
							var texts = operatorName == "" ? '-' : operatorName
							return h('div', texts)
						}
					},

					{
						title: '入库时间',
						key: 'operated',
						
						render: (h, params) => {

							var operated = params.row.operated
							var texts = operated == "" ? '-' : operated
							return h('div', texts)
						}
					},

					{
						title: "是否创建配送计划",
						key: 'shipped',
						
						render: (h, params) => {

							var shipped = params.row.shipped

							if(shipped == false) {
								var texts = "未创建"
								return h('div', texts)
							} else {

								var texts = "已创建"
								return h('div', [
									h('Div', {

										style: {
											color: 'green',
										},

									}, texts),
								])
							}

						}

					},

					{
						title: '操作',
						key: 'action',
						fixed: 'right',
						width:120,
						align: 'center',
						render: (h, params) => {
							return h('div', [
									h('Button', {
										props: {
											type: 'primary',
											size: 'small',
											
										},
										style: {
											marginRight: '5px',
											
										},
										on: {
											click: () => {
												console.log(this.tableData[params.index].id)
												this.$router.push({
												name: 'finishedDetails',
												query: {
													id: this.tableData[params.index].barcode
												}
											})
//												this.SetModel = true
//												this.SetModelOpen(params.index)

											}
											
										}
									}, '详情'),
								])

							}
						}

						//					{
						//						title: '描述',
						//						key: 'notes',
						//						width: 200
						//					},
						//
						//					{
						//						title: '包裹位置',
						//						key: 'location',
						//						width: 120,
						//						render: (h, params) => {
						//
						//							var locations = params.row.location
						//							var texts = locations == "" ? '-' : locations
						//							return h('div', texts)
						//						}
						//					},

						/*{
							title: '当前状态',
							align: 'center',
							width: 100,

							render: (h, params) => {

								var status = params.row.status

								if(status == 0) {
									var texts = "待配送"
								} else if(status == 1) {
									var texts = "部分配送"
								} else if(status == 2) {
									var texts = "全部配送"
								}

								return h('div', texts)
							}

						},

						{
							title: '发货人',
							width: 100,
							render: (h, params) => {

								var delivererName = params.row.delivererName
								var texts = delivererName == "" ? '-' : delivererName
								return h('div', texts)
							}

						},

						{
							title: '发货时间',
							key: 'delivered',
							width: 180,
							render: (h, params) => {
								var delivered = params.row.delivered
								var texts = delivered == "" ? '-' : delivered
								return h('div', texts)
							}

						},

						{
							title: '发货单号',
							key: 'delivererNo',
							width: 180,
							render: (h, params) => {
								var delivererNo = params.row.delivererNo
								var texts = delivererNo == "" ? '-' : delivererNo
								return h('div', {
									style: {
										color: 'blue',
										textDecoration: 'underline',
										cursor: 'pointer'

									},

									on: {
										click: () => {

											var dispatchId = this.tableData[params.index].dispatchId

											if(delivererNo == "" || delivererNo == null) {
												this.$Message.error('该包裹未发货！');
												return false;
											} else {
												this.getdeliverMsg(dispatchId)
											}

											//dispatchId
											

										}
									},
								}, texts)
							}

						},

						{
							title: '创键人',
							key: 'creatorName',
							width: 100

						},

						{
							title: '创建日期',
							key: 'created',

							width: 180

						},*/

						/*{
							title: '操作',
							width: 100,
							align: 'center',
							fixed: 'right',
							render: (h, params) => {

								var In = params.row.in

								if(In == false) {
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
													this.SetIndex = params.index;

													var data = this.tableData[params.index];
													this.packMsg = data;
													this.packfiles = data.fileList;
													this.uploadpathdata = '/api/f/storages/' + this.warehouseId + '/finisheds/' + data.orderId + '/packages/' + data.id + '/files'

													this.sureinmodel = true

												}
											}
										}, '入库'),
									])
								}

							}

						},*/

						/*{
							title: '操作',
							key: 'action',
							align: 'center',
							render: (h, params) => {

								var status = params.row.status

								if(status == 0) {
									return h('div', [
										h('Button', {
											props: {
												type: 'primary',
												size: 'small',
												disabled: !this.operation.edit
											},
											style: {
												marginRight: '5px',
												display: (this.operation.edit == true) ? "link-block" : "none"
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
												type: 'primary',
												size: 'small',
												disabled: !this.operation.view
											},
											style: {
												marginRight: '5px',
												display: (this.operation.view == true) ? "link-block" : "none"
											},
											on: {
												click: () => {

													this.SetIndex = params.index

													this.finishedData = []

													this.finishedDetails = true
													this.packages = this.tableData[params.index].packages
													var data = this.tableData[params.index].finishedStockItemDtos
													for(var i = 0; i < data.length; i++) {
														if(data[i].shipped == true && data[i].in == false) {
															data[i].ispick = true
															data[i].disabled = true
														} else if(data[i].shipped == true && data[i].in == true) {
															data[i].ispick = true
															data[i].disabled = true
														} else if(data[i].shipped == false && data[i].in == false) {
															data[i].ispick = false
															data[i].disabled = true
														} else if(data[i].shipped == false && data[i].in == true) {
															data[i].ispick = false
															data[i].disabled = false
														}

													}
													this.finishedData = data
													this.finishedLen = data.length

												}
											}
										}, '详情'),

										h('Poptip', {
											props: {
												confirm: true,
												title: '您确定要删除这条数据吗?',
												transfer: true,
												disabled: !this.operation.delete
											},

											style: {
												display: (this.operation.delete == true) ? "link-block" : "none"
											},
											on: {
												'on-ok': () => {
													this.delTabData(params.index)
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

									])
								} else {
									return h('div', [
										h('Button', {
											props: {
												type: 'primary',
												size: 'small',
												disabled: !this.operation.edit
											},
											style: {
												marginRight: '5px',
												display: (this.operation.edit == true) ? "link-block" : "none"
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
												type: 'primary',
												size: 'small',
												disabled: !this.operation.view
											},
											style: {
												marginRight: '5px',
												display: (this.operation.view == true) ? "link-block" : "none"
											},
											on: {
												click: () => {
													this.SetIndex = params.index

													this.finishedData = []

													this.finishedDetails = true
													var data = this.tableData[params.index].finishedStockItemDtos
													this.packages = this.tableData[params.index].packages
													for(var i = 0; i < data.length; i++) {
														if(data[i].shipped == true && data[i].in == false) {
															data[i].ispick = true
															data[i].disabled = true
														} else if(data[i].shipped == true && data[i].in == true) {
															data[i].ispick = true
															data[i].disabled = true
														} else if(data[i].shipped == false && data[i].in == false) {
															data[i].ispick = false
															data[i].disabled = true
														} else if(data[i].shipped == false && data[i].in == true) {
															data[i].ispick = false
															data[i].disabled = false
														}

													}
													this.finishedData = data
													this.finishedLen = data.length
												}
											}
										}, '详情'),

									])
								}

							}
						}*/
					],

					tableData: [], //表格数据
					GetModel: false, //添加模态框属性
					SetModel: false, //修改模态框属性
					objGetData: { //添加信息
						"storageId": "4hygnwnuysqo",
						"notes": "",
						"orderIndex": "",
						"orderId": "",
						"orderNo": "",
						"flag": "",
						"packages": "",
						"finishedStockItemDtos": [{
								"barcode": "",
								"type": "",
								"notes": "",
								"location": ""
							}

						]

					},

					SetGetData: { //修改信息
						"Setnotes": "",
						"Setflag": "",

					},

					SetFs: false,
					SetFsData: { //修改信息
						"Setnotes": "",
						"Setlocation": "",

					},

					Afinishedshow: false,
					Afinisheditem: {
						"barcode": "",
						"type": "",
						"notes": "",
						"location": ""
					},

					//包裹入库

					sureinmodel: false,
					packMsg: {
						files: []
					},

					packfiles: [],

					SetIndex: "", //点击编辑按钮时选中的位置
					SetIndexs: "",
					pageIndex: 1, //分页页数
					pageSize: 10,
					pageIndextotal: 0,
					loading: false,

					orderData: [], //订单
					orderDataAll: [],
					orderDataCache: {}, //订单缓存
					logisticsData: [], //物流公司
					isSearch: false,
					searchObj: {
						"way": "",
						"orderNo": "",
						"status": "",
						"barcode": "",
						"ship": "",
						"in": "",

					},

					finishedDetails: false,
					finishedHead: [
						{
							title: '包装编号',
							key: 'barcode',
							fixed: 'left',
							width: 200,

						},

						{
							title: '描述',
							key: 'notes',
							width: 200
						},
						{
							title: '位置',
							key: 'location',
							width: 200
						},

						{
							title: '类型',
							key: 'type',
							width: 100,

							render: (h, params) => {

								var type = params.row.type

								if(type == 0) {
									var texts = "衣柜"
								} else if(type == 1) {
									var texts = "橱柜"
								} else if(type == 2) {
									var texts = "门板"
								} else if(type == 3) {
									var texts = "五金"
								}

								return h('div', texts)
							}

						},

						{
							title: '是否已创建配送计划',
							align: 'center',
							key: 'shipped',
							width: 100,

							render: (h, params) => {

								var shipped = params.row.shipped

								if(shipped == false) {
									var texts = "否"
								} else if(shipped == true) {
									var texts = "是"
								}
								return h('div', texts)
							}

						},

						{
							title: '是否已入库',
							align: 'center',
							key: 'in',
							width: 150,

							render: (h, params) => {

								var ins = params.row.in

								if(ins == false) {
									var texts = "未入库"
									return h('div', texts)

								} else if(ins == true) {
									var texts = "已入库"
									return h('div', [
										h('Div', {

											style: {
												color: 'red',
											},

										}, texts),
									])

								}

							}

						},

						{
							title: '入库时间',
							key: 'operated',
							width: 200,

						},
						{
							title: '发货时间',
							key: 'delivered',
							width: 200,
						},

						/*{
							title: '发货人',
							key: 'deliverer',
							width: 200,
						},*/
						{
							title: '出库人',
							key: 'delivererName',
							width: 200,
						},
						{
							title: '入库人',
							key: 'operatorName',
							width: 200,
						},

						{
							title: '创建人',
							key: 'creatorName',
							width: 200,
						},

						{
							title: '创建时间',
							key: 'created',

						},

						{
							title: '操作',
							key: 'action',
							fixed: 'right',
							width: 200,
							align: 'center',
							render: (h, params) => {

								var ins = params.row.in

								if(ins == false) {
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

													this.SetIndexs = params.index

													this.SetFs = true
													this.finishedDetails = false
													var data = this.finishedData[params.index]

													this.SetFsData.Setnotes = data.notes
													this.SetFsData.Setlocation = data.location

												}
											}
										}, '编辑'),

										h('Poptip', {
											props: {
												confirm: true,
												title: '您确定要删除这条数据吗?',
												transfer: true
											},
											on: {
												'on-ok': () => {

													this.SetIndexs = params.index
													this.delFinishedItem(params.index)
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
										]),

										h('Poptip', {
											props: {
												confirm: true,
												title: '确认入库?',
												transfer: true
											},
											on: {
												'on-ok': () => {

													this.SetIndexs = params.index
													this.Inwarehouse(params.index)

												}
											}
										}, [
											h('div', [
												h('Button', {
													props: {
														type: 'info',
														size: 'small',

													},

													style: {
														marginLeft: '5px'
													},
												}, '入库')
											])
										]),

									])
								} else if(ins == true) {

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

													this.SetIndexs = params.index

													this.SetFs = true
													this.finishedDetails = false
													var data = this.finishedData[params.index]

													this.SetFsData.Setnotes = data.notes
													this.SetFsData.Setlocation = data.location

												}
											}
										}, '编辑'),

										h('Poptip', {
											props: {
												confirm: true,
												title: '您确定要删除这条数据吗?',
												transfer: true
											},
											on: {
												'on-ok': () => {

													this.SetIndexs = params.index
													this.delFinishedItem(params.index)
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
										]),

									])

								}

							}
						}

					],
					finishedData: [],

					//配送计划
					distributionModel: false,
					distributionNd: [],
					distributionHead: [

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

						}, {
							title: '包装编号',
							key: 'barcode',
							fixed: 'left',
							width: 200,

						},

						{
							title: '描述',
							key: 'notes',
							width: 200
						},
						{
							title: '位置',
							key: 'location',
							width: 200
						},

						{
							title: '类型',
							key: 'type',
							width: 100,

							render: (h, params) => {

								var type = params.row.type

								if(type == 0) {
									var texts = "衣柜"
								} else if(type == 1) {
									var texts = "橱柜"
								} else if(type == 2) {
									var texts = "门板"
								} else if(type == 3) {
									var texts = "五金"
								}

								return h('div', texts)
							}

						},

						{
							title: '是否已创建配送计划',
							align: 'center',
							key: 'shipped',
							width: 100,

							render: (h, params) => {

								var shipped = params.row.shipped

								if(shipped == false) {
									var texts = "否"
								} else if(shipped == true) {
									var texts = "是"
								}
								return h('div', texts)
							}

						},

						{
							title: '是否已入库',
							align: 'center',
							key: 'in',
							width: 150,

							render: (h, params) => {

								var ins = params.row.in

								if(ins == false) {
									var texts = "否"
								} else if(ins == true) {
									var texts = "是"
								}
								return h('div', texts)
							}

						},

						{
							title: '入库时间',
							key: 'operated',
							width: 200,

						},

						{
							title: '入库人',
							key: 'operatorName',
							width: 200,
						},

						{
							title: '创建人',
							key: 'creatorName',
							width: 200,
						},
					],

					objDistribution: { //添加信息
						"orderId": "",
						"orderIndex": "",
						/*"orderNo": "",
						"no": "",*/
						"finishedStockId": "",
						"planDate": "",
						"plandate": "",

						/*"actualDate": "",*/
						"consigneeType": "0",
						"consignee": "",
						"consigneeTel": "",
						"address": "",
						/*"logisticsCompanyId": "",
						"logisticsNo": "",*/
						"flag": "",
						"dispatchBillItemDtoList": []

					},

					//选择数据
					pickselectHead: [
					{
							title: '包装编号/条形码',
							key: 'barcode',
							width: 160,

						},

						{
							title: '订单编号',
							key: 'orderNo',
							width: 160,

						},

						{
							title: '包装类型',
							key: 'type',
							width: 100,
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
							title: '描述',
							key: 'notes',
							width: 200
						},

						{
							title: '包裹位置',
							key: 'location',
							width: 120
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
												this.SetIndex = params.index
												/*this.packMsg = this.tableData[]
												this.sureinmodel=true*/

												var that = this

												/*var id = this.pickselectdata[params.index].id*/
												var data = that.tableData
												that.tableData = []
												this.pickselectdata.splice(params.index, 1);

												for(var i = 0; i < data.length; i++) {
													that.tableData.push(data[i])
													this.tableData[i]._checked = false
													var id = data[i].id;

													for(var n = 0; n < this.pickselectdata.length; n++) {

														if(id == this.pickselectdata[n].id) {
															this.tableData[i]._checked = true

														}

													}

												}

												this.getpickselectdataCache();

											}
										}
									}, '删除'),
								])

							}

						},
					],

					pickselectdata: [],
					pickselectdataCache: {},
					awaitcancel: {},
					distributionNots: "",
					packModel: false,
					packMsg: {},

					deliver: false,
					deliverMsg: {},

					distribution: false,

					packages: 0,
					finishedLen: 0,

					uploadpathdata: '',
					defaultList: [],
					imgName: '',
					visible: false,
					uparry: {
						multipartFileList: []
					},
					particularsModel: false,
					particulars: {},

					warehouseId: "",
					operation: {}

				};
			},

			methods: {
		
				
			
				newOPen: function() {
				
				
				this.$emit('openWindow', ('finishedstockNewly'), ('新建包装'), ('9-1'), ('finishedstockNewly'), ('finishedstockNewly'))
				},

					handleView(path) {
						this.imgName = path;
						this.visible = true;
					},

					handleRemove: function(index) {

						var fid = this.packfiles[index].id

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});
						var that = this

						this.axios({
							method: 'delete',
							url: this.uploadpathdata + '/' + fid,

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							that.packfiles.splice(index, 1)
							/*that.tableData[that.SetIndex].fileList.splice(index,1)*/

						}).catch(function(err) {
							setTimeout(msg, 100);
							that.$Message.error('出错了，请稍后重试！');

						})

					},

					handleSuccess(res, file) {

						var data = res.data

						for(var i = 0; i < data.length; i++) {
							this.packfiles.push(data[i])
							/*this.tableData[this.SetIndex].fileList.push(data[i])*/
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

					//选择

					pickselect: function(selection, row) {
						this.awaitcancel[this.pageIndex] = selection
						this.pickselectdata.push(row);
						this.getpickselectdataCache()

					},

					pickselectAll: function(selection) {

						this.awaitcancel[this.pageIndex] = selection
						var data = selection

						for(var i = 0; i < data.length; i++) {

							var id = data[i].id;

							if(!this.pickselectdataCache[id] == true) {

								this.pickselectdata.push(data[i])
							}

						}

						this.getpickselectdataCache()

					},

					cancelselectAll: function(selection, row) {

						var data = this.awaitcancel[this.pageIndex]

						for(var i = 0; i < data.length; i++) {

							var id = data[i].id;

							for(var n = 0; n < this.pickselectdata.length; n++) {

								if(id == this.pickselectdata[n].id) {
									this.pickselectdata.splice(n, 1)
								}

							}

						}

						this.getpickselectdataCache()

					},

					cancelselect: function(selection, row) {

						var data = row

						for(var i = 0; i < this.pickselectdata.length; i++) {
							if(data.id == this.pickselectdata[i].id) {
								this.pickselectdata.splice(i, 1)

							}
						}

						this.getpickselectdataCache()

					},

					getpickselectdataCache: function() {

						this.pickselectdataCache = {};
						var pickselectdatacache = this.pickselectdataCache;

						for(var i = 0; i < this.pickselectdata.length; i++) {
							pickselectdatacache[this.pickselectdata[i].id] = this.pickselectdata[i]
						}

						this.pickselectdataCache = pickselectdatacache

					},

					/*pickselect: function(val, index) {

						var data = this.tableData[index]

						if(val == true) {

							this.pickselectdata.push(data)
							this.tableData[index].ispick = true
						} else {

							

							this.tableData[index].ispick = false

						}

					},*/

					adddistribution: function() {
						var pickselectdata = this.pickselectdata

						if(pickselectdata.length == 0) {
							this.$Message.error('所选包裹不能为空！');
							return false;
						}
						this.distributionNots = "";
						this.distribution = true

					},

					pageChange: function(index) {
						this.pageIndex = index
						/*this.getDatas()*/
						if(this.isSearch = true) {
							this.searchData()
						} else {
							this.getDatas()
						}

					},

					GetModelOpen: function() {
						this.GetModel = true
						this.objGetData = {
							"storageId": "4hygnwnuysqo",
							"notes": "",
							"orderId": "",
							"orderNo": "",
							"flag": "",
							"finishedStockItemDtos": [{
									"barcode": "",
									"type": "",
									"notes": "",
									"location": ""
								}

							]
						}
					},

					//选择订单编号和订单id

					setirderid: function(orid) {

						console.log(orid)
						console.log(this.orderData)

						for(var i = 0; i < this.orderData.length; i++) {

							if(orid == this.orderData[i].id) {
								this.objGetData.orderNo = this.orderData[i].no
							}

						}

						/*this.objGetData.orderId = this.orderData[val].id
						 */
					},

					//添加信息api	
					GetModelIsok: function() {

						var Num = /^[0-9]*$/

						var objgetdata = this.objGetData

						var orderid = objgetdata.orderId
						var orderNo = objgetdata.orderNo
						var packages = objgetdata.packages

						if(orderid == "" || orderid == null) {

							this.$Message.error('订单不能为空！');
							return false;
						} else if(orderNo == "" || orderNo == null) {
							this.$Message.error('订单编号不能为空！');
							return false;
						} else if(packages == "" || packages == null || packages.trim().length == 0) {
							this.$Message.error('订单包数不能为空！');
							return false;
						} else if(Num.test(packages) == false) {
							this.$Message.error('订单包数只能输入数字！');
							return false;
						} else if(this.objGetData.finishedStockItemDtos.length > packages) {
							this.$Message.error('条目数不能超过订单数！');
							return false;
						} else {
							var arryData = this.objGetData.finishedStockItemDtos
							for(var i = 0; i < arryData.length; i++) {
								var arrydata = arryData[i]
								var barcode = arrydata.barcode
								var type = arrydata.type
								var locations = arrydata.location

								if(barcode == "" || barcode == null || barcode.trim().length == 0) {
									this.$Message.error('第' + (i + 1) + '个条目编号/条形码不能为空！');
									return false;
								} else if(type == "" || type == null) {
									this.$Message.error('第' + (i + 1) + '个条目类型不能为空！');
									return false;
								} else if(locations == "" || locations == null || locations.trim().length == 0) {
									this.$Message.error('第' + (i + 1) + '个条目位置不能为空！');
									return false;
								}

							}

							const msg = this.$Message.loading({
								content: 'Loading...',
								duration: 0
							});

							var that = this

							axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"
							//                    /
							this.axios({
								method: 'post',
								url: '/api/f/storages/' + this.warehouseId + '/finisheds/',

								data: objgetdata

							}).then(function(res) {

								var verify = [{
										"name": "orderId",
										"note": "订单"
									},
									{
										"name": "orderNo",
										"note": "订单编号 "
									},
									{
										"name": "packages",
										"note": "订单包数"
									},

									{
										"name": "location",
										"note": "条目位置"
									},
								]

								setTimeout(msg, 100);
								if(Isjurisdiction.isright(res, that, verify) == false) {
									return false
								}

								that.$Message.success("添加成功")

								that.getDatas()

								that.GetModel = false

							}).catch(function(err) {

								that.$Message.error('出错了，请稍后重试！');
								setTimeout(msg, 100);
								that.GetModel = false
							})

						}

					},

					//打开修改部门信息模态框

					SetModelOpen: function(index) {

						this.SetIndex = index
						var data = this.tableData[index]
						this.SetGetData.Setnotes = data.notes
						this.SetGetData.Setflag = data.flag

					},

					//修改信息api

					SetModelIsok: function() {

						var id = this.tableData[this.SetIndex].id
						var setGetData = this.SetGetData

						var notes = setGetData.Setnotes
						var flag = setGetData.Setflag

						if(notes == "" || notes == null || notes.trim().length == 0) {
							this.$Message.error('成品库单描述不能为空！');
							return false;
						} else if(flag == "" || flag == null || flag.trim().length == 0) {

							this.$Message.error('成品库单标记不能为空！！');
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
								url: '/api/f/storages/' + this.warehouseId + '/finisheds/' + id,

								data: {
									"notes": notes,
									"flag": flag,
								}

							}).then(function(res) {

								var verify = [{
										"name": "notes",
										"note": "成品库单描述"
									},
									{
										"name": "flag",
										"note": "成品库单标记"
									},
								]

								setTimeout(msg, 100);

								if(Isjurisdiction.isright(res, that, verify) == false) {
									return false
								}

								var data = res.data.data
								that.tableData[that.SetIndex].notes = data.notes
								that.tableData[that.SetIndex].flag = data.flag
								that.$Message.success("修改成功")
								setTimeout(msg, 100);
								that.SetModel = false
							}).catch(function(err) {

								that.$Message.error('出错了，请稍后重试！');
								setTimeout(msg, 100);
								that.SetModel = false

							})

						}

					},

					//删除单个成品库单
					delTabData: function(index) {

						var id = this.tableData[index].id

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						var that = this

						axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-delete"
						//请求产品
						this.axios({
							method: 'delete',
							url: '/api/f/storages/' + this.warehouseId + '/finisheds/' + id

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							that.tableData.splice(index, 1)
							that.$Message.success("删除成功")

						}).catch(function(err) {
							setTimeout(msg, 100);
							that.$Message.error('出错了，请稍后重试！');

						})
					},

					//修改条目信息

					SetFsbut: function() {
						var id = this.tableData[this.SetIndex].id
						var itemid = this.tableData[this.SetIndex].finishedStockItemDtos[this.SetIndexs].id

						var setfsdata = this.SetFsData

						var notes = setfsdata.Setnotes
						var locations = setfsdata.Setlocation

						if(notes == "" || notes == null || notes.trim().length == 0) {
							this.$Message.error('成品库单条目描述不能为空！');
							return false;
						} else if(locations == "" || locations == null || locations.trim().length == 0) {

							this.$Message.error('成品库单条目位置不能为空！！');
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
								url: '/api/f/storages/50sv0c7rjjeo/finisheds/' + id + '/items/' + itemid,

								data: {
									"notes": notes,
									"location": locations,
								}

							}).then(function(res) {

								var verify = [{
										"name": "notes",
										"note": "成品库单描述"
									},
									{
										"name": "location",
										"note": "条目位置"
									},

								]

								setTimeout(msg, 100);

								if(Isjurisdiction.isright(res, that, verify) == false) {
									return false
								}

								var data = res.data.data
								that.tableData[that.SetIndex].finishedStockItemDtos[that.SetIndexs].notes = data.notes
								that.tableData[that.SetIndex].finishedStockItemDtos[that.SetIndexs].location = data.location

								that.finishedData[that.SetIndexs].notes = data.notes
								that.finishedData[that.SetIndexs].location = data.location

								that.$Message.success("修改成功")
								setTimeout(msg, 100);
								that.SetFs = false
								that.finishedDetails = true
							}).catch(function(err) {

								that.$Message.error('出错了，请稍后重试！');
								setTimeout(msg, 100);

							})

						}
					},

					SetFscancel: function() {
						this.SetFs = false
						this.finishedDetails = true

					},

					//删除单个成品库单条目信息

					delFinishedItem: function(index) {

						var id = this.tableData[this.SetIndex].id

						var itemid = this.tableData[this.SetIndex].finishedStockItemDtos[this.SetIndexs].id

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						var that = this

						axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-delete"

						//请求产品
						this.axios({
							method: 'delete',
							url: '/api/f/storages/50sv0c7rjjeo/finisheds/' + id + '/items/' + itemid

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							that.tableData[that.SetIndex].finishedStockItemDtos.splice(index, 1)

							that.finishedLen--
								/*that.finishedData.splice(index, 1)*/
								that.$Message.success("删除成功")

						}).catch(function(err) {
							setTimeout(msg, 100);
							that.$Message.error('出错了，请稍后重试！');

						})
					},

					additem: function() {

						var obj = {
							"barcode": "",
							"type": "",
							"notes": "",
							"location": ""
						}

						this.objGetData.finishedStockItemDtos.push(obj)

					},

					delitem: function(index) {

						if(this.objGetData.finishedStockItemDtos.length == 1) {
							this.$Message.error('条目最少要有一个');
						} else {
							this.objGetData.finishedStockItemDtos.splice(index, 1)
						}

					},

					//打卡添加成品库单下条目添加窗口

					Afinisheditemopen: function() {
						this.Afinishedshow = true
						this.finishedDetails = false

						this.Afinisheditem = {
							"barcode": "",
							"type": "",
							"notes": "",
							"location": ""
						}

					},

					//确认新增成品库条目

					Afinished: function() {

						var id = this.tableData[this.SetIndex].id

						var afdata = this.Afinisheditem
						var barcode = afdata.barcode
						var type = afdata.type
						var notes = afdata.notes
						var locations = afdata.location

						if(barcode == "" || barcode == null || barcode.trim().length == 0) {
							this.$Message.error('新增条目包装编号/条形码不能为空');
							return false;
						} else if(type == "" || type == null) {
							this.$Message.error('新增条目类型能为空');
							return false;
						} else {
							const msg = this.$Message.loading({
								content: 'Loading...',
								duration: 0
							});

							var that = this

							axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

							this.axios({
								method: 'post',
								url: '/api/f/storages/' + this.warehouseId + '/finisheds/' + id,

								data: {
									"barcode": barcode,
									"type": type,
									"notes": notes,
									"location": locations

								}

							}).then(function(res) {
								setTimeout(msg, 100);
								if(Isjurisdiction.isright(res, that) == false) {
									return false
								}
								var data = res.data.data
								var status = data.status

								data.disabled = true

								that.tableData[that.SetIndex].finishedStockItemDtos.unshift(data)
								that.finishedLen++
									/*that.finishedData.unshift(data)*/
									that.$Message.success("添加成功")

								that.Afinishedshow = false
								that.finishedDetails = true

							}).catch(function(err) {

								that.$Message.error('出错了，请稍后重试！');
								setTimeout(msg, 100);
								that.Afinishedshow = false
								that.finishedDetails = true
							})

						}

					},

					//产品库单下单个条目入库

					Inwarehouse: function(index) {
						var id = this.tableData[this.SetIndex].id
						var itemid = this.tableData[this.SetIndex].finishedStockItemDtos[this.SetIndexs].id

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						var that = this

						axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

						//                    /
						this.axios({
							method: 'put',
							url: '/api/f/storages/' + this.warehouseId + '/finisheds/' + id + '/warehousing/' + itemid

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var data = res.data.data

							that.tableData[that.SetIndex].finishedStockItemDtos[that.SetIndexs].in = data.in
							that.tableData[that.SetIndex].finishedStockItemDtos[that.SetIndexs].operated = data.operated

							that.finishedData[that.SetIndexs].in = data.in
							that.finishedData[that.SetIndexs].operated = data.operated
							that.finishedData[that.SetIndexs].disabled = false

							that.$Message.success("入库成功")
							setTimeout(msg, 100);
							that.SetFs = false
							that.finishedDetails = true
						}).catch(function(err) {

							that.$Message.error('出错了，请稍后重试！');
							setTimeout(msg, 100);

						})

					},

					//检索信息

					clicksearch: function() {
						var searchobj = this.searchObj

						var no = searchobj.orderNo
						var way = searchobj.way
						var status = searchobj.status
						var barcode = searchobj.barcode
						var In = searchobj.in
						var ship = searchobj.ship

						if(no.trim().length == 0 && barcode.trim().length == 0 && In == "" && In == "" && ship == "" && ship == "") {
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

						var No = searchobj.orderNo
						var way = searchobj.way
						var status = searchobj.status
						var barcode = searchobj.barcode
						var In = searchobj.in
						var ship = searchobj.ship

						var pathurl = ""

						if(No != "" && No != null && No.trim().length != 0) {
							pathurl += 'orderNo=' + No + "&"
						}

						if(barcode != "" && barcode != null && barcode.trim().length != 0) {
							pathurl += 'barcode=' + barcode + "&"
						}

						// if(In != "" && In != null) {
						// 	pathurl += 'in=' + In + "&"
						// }

						if(ship != "" && ship != null) {
							pathurl += 'ship=' + ship + "&"
						}

						/*	if(way != "" && way != null && way.length != 0) {
								pathurl += 'way=' + way + "&"
							}

							if(status != "" && status != null && status.length != 0) {
								pathurl += 'status=' + status + "&"
							}*/

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});

						this.loading = true

						var that = this
						axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
						this.axios({
							method: 'get',
							url: '/api/f/storages/finisheds?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var dataAll = res.data
							var data = res.data.data

							that.tableData = data

							for(var i = 0; i < data.length; i++) {

								that.tableData[i]._disabled = true

								if(data[i].shipped == false && data[i].in == true) {
									that.tableData[i]._disabled = false
								}

								if(!!that.pickselectdataCache[data[i].id] == true) {

									that.tableData[i]._checked = true
								}

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

					//配送计划\

					//打开配送计划弹框

					distributionOpen: function() {

						this.distributionNd = []

						this.objDistribution = { //添加信息
							"orderId": "",
							"orderIndex": "",
							/*"orderNo": "",
							"no": "",*/
							"finishedStockId": "",
							"planDate": "",

							/*"actualDate": "",*/
							"consigneeType": "0",
							"consignee": "",
							"consigneeTel": "",
							"address": "",
							/*"logisticsCompanyId": "",
							"logisticsNo": "",*/
							"flag": "",
							"dispatchBillItemDtoList": []

						}

						this.objDistribution.orderId = this.tableData[this.SetIndex].orderId
						this.objDistribution.orderNo = this.tableData[this.SetIndex].orderNo

						var orderdatacache = this.orderDataCache[this.objDistribution.orderId]

						var fdata = this.finishedData
						var shipped = 0
						for(var i = 0; i < fdata.length; i++) {

							if(fdata[i].shipped == false) {
								shipped++
							}

						}

						if(shipped == 0) {
							this.$Message.success('已全部创建配送计划！');
							return false;
						}

						this.objDistribution.consignee = orderdatacache.dealerName
						this.objDistribution.consigneeTel = orderdatacache.dealerTel
						this.objDistribution.address = orderdatacache.dealerAddress

						this.objDistribution.finishedStockId = this.tableData[this.SetIndex].id

						this.distributionModel = true
						this.finishedDetails = false

						/*var fdata = this.finishedData*/

						/*for(var i = 0; i < fdata.length; i++) {

				

							
						}*/
						this.distributionNd = fdata
					},

					//取消配送计划弹框

					cancelDistribution: function() {
						this.distributionModel = false
						this.finishedDetails = true
					},

					//选择配送订单并绑定订单编号

					distributionid: function(val) {
						this.objDistribution.orderId = this.orderData[val].id
						this.objDistribution.orderNo = this.orderData[val].no
						this.objDistribution.consignee = this.orderData[val].customerName
						this.objDistribution.consigneeTel = this.orderData[val].salesmanTel

					},

					consigneeType: function() {

						var type = this.objDistribution.consigneeType
						var orderdatacache = this.orderDataCache[this.objDistribution.orderId]
						if(type == 0) {
							this.objDistribution.consignee = orderdatacache.dealerName
							this.objDistribution.consigneeTel = orderdatacache.dealerTel
							this.objDistribution.address = orderdatacache.dealerAddress
						} else if(type == 1) {
							this.objDistribution.consignee = orderdatacache.customerName
							this.objDistribution.consigneeTel = orderdatacache.customerTel
							this.objDistribution.address = orderdatacache.address
						}

					},

					// 配送计划选择配送成品库单下条目

					pickitem: function(val, index) {

						var arrydata = this.objDistribution.dispatchBillItemDtoList
						var pickdata = this.distributionNd[index]
						if(val == true) {

							var id = pickdata.id

							var obj = {
								finishedStockItemId: pickdata.id,
								status: 0,
							}

							arrydata.push(obj)
							/**/

						} else {

							var id = pickdata.id

							for(var i = 0; i < arrydata.length; i++) {

								if(id == arrydata[i].finishedStockItemId) {
									arrydata.splice(i, 1)
								}

							}

						}

						this.objDistribution.dispatchBillItemDtoList = arrydata

					},

					//选择配送单预计配送时间

					planDate: function(val) {
						this.objDistribution.plandate = val
					},

					//确认创建配送单

					pushDistribution: function() {

						var objdistribution = this.objDistribution

						var orderid = objdistribution.orderId

						var consignee = objdistribution.consignee
						var consigneetel = objdistribution.consigneeTel
						var address = objdistribution.address
						var plandate = objdistribution.plandate

						var dispatchBillItemDtolist = objdistribution.dispatchBillItemDtoList

						if(orderid == "" || orderid == null) {
							this.$Message.error('请选择订单！');
							return false;
						} else if(consignee == "" || consignee == null || consignee.trim().length == 0) {
							this.$Message.error('请输入收货人姓名！');
							return false;
						} else if(consigneetel == "" || consigneetel == null || consigneetel.trim().length == 0) {
							this.$Message.error('请输入收货人电话！');
							return false;
						} else if(address == "" || address == null || address.trim().length == 0) {
							this.$Message.error('请输入收货人地址！');
							return false;
						} else if(plandate == "" || plandate == null) {
							this.$Message.error('请输入预计发货日期！');
							return false;
						} else if(dispatchBillItemDtolist == null || dispatchBillItemDtolist.length == 0) {
							this.$Message.error('请选择配送成品！');
							return false;
						} else {

							objdistribution.planDate = plandate + " 00:00:00"

							const msg = this.$Message.loading({
								content: 'Loading...',
								duration: 0
							});
							var that = this

							axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

							//请求配送单
							this.axios({
								method: 'post',
								url: 'api/f/dispatchs',
								data: objdistribution,

							}).then(function(res) {
								setTimeout(msg, 100);

								if(Isjurisdiction.isright(res, that) == false) {
									return false
								}

								var data = res.data.data
								that.$Message.success("请求成功，配送单已进入到配送单管理")

								that.newData()

								that.distributionModel = false

							}).catch(function(err) {
								setTimeout(msg, 100);
								that.$Message.error('出错了，请稍后重试！');

							})
						}

					},

					//确认包裹入库

					surein: function() {
						var index = this.SetIndex;

						var StockId = this.warehouseId
						var fid = this.tableData[index].finishedStockId
						var itemid = this.tableData[index].id

						var packMsg = this.packMsg
						var operator = packMsg.operator
						var operated = packMsg.operated
						var warehousingNotes = packMsg.warehousingNotes

						if(operator == "" || operator == null) {
							this.$Message.error('入库人不能为空！');
							return false;
						} else if(operated == "" || operated == null) {
							this.$Message.error('入库时间不能为空！');
							return false;
						}

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});
						var that = this

						this.axios({
							method: 'put',
							url: '/api/f/storages/' + StockId + '/finisheds/' + fid + '/warehousing/' + itemid,

							data: {
								operated: (operated == "") ? undefined : operated + " 00:00:00",
								operator: (operator == "") ? undefined : operator,
								warehousingNotes: (warehousingNotes == "") ? undefined : warehousingNotes
							}

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var data = res.data.data
							that.$Message.success("入库完成")
							that.tableData[index].in = data.in

							var tableData = that.tableData;
							that.tableData = [];
							for(var i = 0; i < tableData.length; i++) {

								that.tableData.push(tableData[i])
								that.tableData[i]._disabled = true

								if(tableData[i].shipped == false && tableData[i].in == true) {
									that.tableData[i]._disabled = false
								}

							}

							that.sureinmodel = false

						}).catch(function(err) {
							setTimeout(msg, 100);
							that.$Message.error('出错了，请稍后重试！');

							that.sureinmodel = false

						})

					},

					//创建配送计划
					suredistribution: function() {

						/*console.log()*/

						var pickselectdata = this.pickselectdata
						var ids = []

						if(pickselectdata.length == 0) {
							this.$Message.error('所选包裹不能为空！');
							return false;
						}

						for(var i = 0; i < pickselectdata.length; i++) {

							var obj = {
								finishedStockItemId: pickselectdata[i].id
							}

							ids.push(obj)
						}

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});
						var that = this

						this.axios({
							method: 'post',
							url: '/api/f/storages/' + this.warehouseId + '/finisheds/dispatchplan',
							data: {
								"dispatchBillPlanItems": ids,
								"note": this.distributionNots
							}

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}
							that.pickselectdata = [];
							var data = res.data.data
							that.$Message.success("配送计划创建完成")
							that.getDatas()
							that.distribution = false

						}).catch(function(err) {
							setTimeout(msg, 100);
							that.$Message.error('出错了，请稍后重试！');
							that.distribution = false

						})

					},

					//查询发货单

					getdeliverMsg: function(id) {

						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});
						var that = this

						this.axios({
							method: 'get',
							url: '/api/f/dispatchs?id=' + id,

						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var data = res.data.data
							that.deliver = true
							that.deliverMsg = data[0]

						}).catch(function(err) {
							setTimeout(msg, 100);
							that.$Message.error('出错了，请稍后重试！');

						})

					},

					//刷新数据

					newData: function() {

						this.pickselectdata = [];
						this.pickselectdataCache = {};

						this.isSearch = false
						this.searchObj = {
								"way": "",
								"orderNo": "",
								"status": "",
								"barcode": "",
								"ship": "",
								"in": "",

							},
							this.pageIndex = 1
						this.getDatas()

					},

					getoperated: function(val) {
						this.packMsg.operated = val
					},

					// 导出表格
					exportData: function(type) {

						var idsArry = [];
						var ids = "";
						for(var i = 0; i < this.pickselectdata.length; i++) {
							idsArry.push(this.pickselectdata[i].id)
						}
						ids = idsArry.join(",")

						window.location.href = '/api/f/storages/' + this.warehouseId + '/finisheds/dispatchplan?ids=' + ids

					},

					getDatas: function() {
						const msg = this.$Message.loading({
							content: 'Loading...',
							duration: 0
						});
						var that = this

						this.axios({
							// method: 'get',
							// url: '/api/f/storages/' + this.warehouseId + '/finisheds?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize
							method: 'get',
							url: '/api/f/storages/finisheds?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize
							
						}).then(function(res) {
							setTimeout(msg, 100);

							if(Isjurisdiction.isright(res, that) == false) {
								return false
							}

							var dataAll = res.data;
							var data = res.data.data;
							that.pickselectdata = [];
							that.tableData = []

							var pickselectdataCache = {}
							for(var n = 0; n < that.pickselectdata.length; n++) {

								var row = that.pickselectdata[i]

								pickselectdataCache[row.id] = data

							}

							for(var i = 0; i < data.length; i++) {

								data[i].ispick = false
								that.tableData.push(data[i])
								that.tableData[i]._disabled = true

								if(data[i].shipped == false && data[i].in == true) {
									that.tableData[i]._disabled = false
								}

								if(!!that.pickselectdataCache[data[i].id] == true) {

									that.tableData[i]._checked = true
								}

							}

							that.pageIndextotal = dataAll.pagination.total
							that.loading = false

						}).catch(function(err) {
							setTimeout(msg, 100);
							that.$Message.error('出错了，请稍后重试！');
							that.loading = false

						})
					},

					pathchange: function() {
						axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

						var keydata = this.$route.query.key
						var operation = this.operation
						Isjurisdiction.user_jurisdiction(keydata, operation)

						this.warehouseId = this.$route.query.pathdata

						this.getDatas()
					}

				},

				mounted: function() {
				
					this.pathchange()

					var that = this

					//查询成品库所用订单

// 					this.axios({
// 						method: 'get',
// 						url: '/api/f/customorders/finishedorders'
// 
// 					}).then(function(res) {
// 										
// 						
// 						if(Isjurisdiction.isright(res, that) == false) {
// 							return false
// 						}
// 
// 						var orderDatacache = {}
// 						var data = res.data.data
// 
// 						for(var i = 0; i < data.length; i++) {
// 
// 							orderDatacache[data[i].id] = data[i]
// 						}
// 
// 						that.orderData = data
// 						that.orderDataCache = orderDatacache
// 
// 					}).catch(function(err) {
// 
// 						that.$Message.error('出错了，请稍后重试！');
// 
// 					})
// 
// 					this.axios({
// 						method: 'get',
// 						url: '/api/f/customorders/finishedorders/all'
// 
// 					}).then(function(res) {
// 
// 						if(Isjurisdiction.isright(res, that) == false) {
// 							return false
// 						}
// 
// 						var orderDatacache = {}
// 						var data = res.data.data
// 
// 						for(var i = 0; i < data.length; i++) {
// 
// 							orderDatacache[data[i].id] = data[i]
// 						}
// 
// 						that.orderDataAll = data
// 						that.orderDataCache = orderDatacache
// 
// 					}).catch(function(err) {
// 
// 						that.$Message.error('出错了，请稍后重试！');
// 
// 					})
// 
					this.axios({
						method: 'get',
						url: '/api/f/depts/members'

					}).then(function(res) {
						console.log("哈哈哈哈")
						console.log(res)
						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						var orderDatacache = {}
						var data = res.data.data
						that.employee = data
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
	.Drawer_op {
		margin-left: 80px;
	}
	
	#p_lea {
		width: 300px;
		margin-right: 10px;
	}
	
	.aw_order {
		display: block;
		width: 100%;
		overflow: auto;
	}
	
	.aw_order ul {
		width: 100%;
		display: inline-block;
	}
	
	.aw_order ul li.item {
		float: left;
		width: 50%;
		height: 300px;
		overflow: auto;
		box-sizing: border-box;
		border-right: solid 1px whitesmoke;
	}
	
	.aw_order ul li.af_center {
		border-right: none;
		padding-left: 16px;
	}
	
	.aw_order ul li.af_center .butappned {
		bottom: 0px;
		left: 0px;
		padding-left: 16px;
		padding-bottom: 16px;
	}
	
	.aw_order ul li.af_center .item {
		display: block;
		padding: 16px;
		background: #EEEEEE;
		margin-bottom: 16px;
		position: relative;
	}
	
	.aw_order ul li.af_center .item .delBut {
		position: absolute;
		padding-left: 16px;
		left: 0px;
		bottom: 16px;
	}
	
	.distributionNots {
		margin-bottom: 20px;
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