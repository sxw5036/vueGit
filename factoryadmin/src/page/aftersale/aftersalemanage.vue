<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>售后单管理</BreadcrumbItem>

			</Breadcrumb>
		</div>
		
		
		<div>
			<Row>
				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>新增售后数量</h3>
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
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>今日计划完成售后单</h3>
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
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>今日已完成售后单</h3>
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
						<div class="panel_center border">
							<h3 class="head">数据变动信息列表<span class="right_icon">更多<Icon type="ios-arrow-forward" /></span></h3>
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
		
<div class="table_nav_iv">
		<div class="operation_box">
			<div class="active">
				<!---->
				<div class="ui_operateLeft" style="line-height: 32px;">
					
					<ul class="tab">
							<li class="tab_item">
								<div class="lable">订单编号</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.customOrderNo" placeholder="请输入订单编号..." />
								</div>
							</li>

					
							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary"  icon="ios-search" @click="clicksearch">搜索</Button>
									<Button type="primary"  @click="newData" icon="ios-refresh">重置</Button>
								</div>
							</li>


						</ul>
					
					
				</div>

				<div class="ui_operateRight">
					
					
					<ul class="tab">
							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
								  <Button type="primary" >导入</Button>
								  <Button type="primary" >导出</Button>
								  <Button type="primary" @click="newOpen" >新建</Button>
								</div>
							</li>
					</ul>
					

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
	</div>

		<Drawer v-model="applyModel" title="处理反馈单" width="500">

			<Form :model="applyMsg" :label-width="100">

				<FormItem label="售后申请单号">
					<p>{{applyMsg.orderNo}}</p>
				</FormItem>

				<FormItem label="售后类型">
					<p v-show="applyMsg.type==4">反馈单</p>
					<p v-show="applyMsg.type==5">补料单</p>

				</FormItem>

				<FormItem label="售后状态">
					<p v-show="applyMsg.status==0">待审核</p>
					<p v-show="applyMsg.status==1">待处理</p>
					<p v-show="applyMsg.status==2">同意售后申请</p>
					<p v-show="applyMsg.status==3">拒绝售后申请</p>
					<p v-show="applyMsg.status==4">已完成</p>

				</FormItem>

				<FormItem label="售后创建人">
					<p>{{applyMsg.creatorName}}</p>
				</FormItem>

				<FormItem label="创建日期">
					<p>{{applyMsg.created}}</p>
				</FormItem>

				<FormItem label="申请说明">
					<p>{{applyMsg.notes}}</p>
				</FormItem>

				<FormItem label="问题描述">
					<p>{{applyMsg.information}}</p>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="surefeedback">确认</Button>
			</div>

		</Drawer>

		<Drawer v-model="dispose" title="处理补料单" width="500">

			<Form :label-width="100">

				<Form :model="applyMsg" :label-width="100">

					<FormItem label="售后申请单号">
						<p>{{applyMsg.orderNo}}</p>
					</FormItem>

					<FormItem label="售后类型">
						<p v-show="applyMsg.type==4">反馈单</p>
						<p v-show="applyMsg.type==5">补料单</p>

					</FormItem>

					<FormItem label="售后状态">
						<p v-show="applyMsg.status==0">待审核</p>
						<p v-show="applyMsg.status==1">待处理</p>
						<p v-show="applyMsg.status==2">同意售后申请</p>
						<p v-show="applyMsg.status==3">拒绝售后申请</p>
						<p v-show="applyMsg.status==4">已完成</p>

					</FormItem>

					<FormItem label="售后创建人">
						<p>{{applyMsg.creatorName}}</p>
					</FormItem>

					<FormItem label="创建日期">
						<p>{{applyMsg.created}}</p>
					</FormItem>

					<FormItem label="申请说明">
						<p>{{applyMsg.notes}}</p>
					</FormItem>

					<FormItem label="问题描述">
						<p>{{applyMsg.information}}</p>
					</FormItem>

					<FormItem label="是否收费">

						<Select style="width: 200px;" v-model="disposeMsg.way" @on-change="disposeMsg.chargeAmount=''">
							<Option value="false">否</Option>
							<Option value="true">是</Option>
						</Select>
					</FormItem>

					<FormItem label="缴费金额" v-show="disposeMsg.way=='true'">
						<Input style="width: 300px;" v-model="disposeMsg.chargeAmount" placeholder="请输入缴费金额..."></Input>
					</FormItem>

				</Form>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="suredispose">确认</Button>
			</div>

		</Drawer>

		<!--创建售后单-s-->

		<Drawer v-model="establishModel" title="创建售后单" width="500">

			<div style="position: relative; height: 100%; overflow: auto; padding-bottom: 50px;">

				<Form :label-width="100">

					<FormItem label="售后类型">
						<RadioGroup true-value v-model="establishMsg.type">
							<Radio label="4">反馈单</Radio>
							<Radio label="5">补料单</Radio>
						</RadioGroup>
					</FormItem>

					<FormItem label="经销商">
						<!--<Select style="width: 300px;" filterable v-model="establishMsg.companyId" @on-change="getClient(establishMsg.companyId)"
						 placeholder="请选择经销商...">
							<Option v-for="(item,index) in companyData" :value="item.id" :key="index">{{ item.name }}</Option>
						</Select>-->

						<Input disabled="disabled" v-model="establishMsg.companyName" placeholder="请选择经销商..."></Input>
						<Button size="small" style="margin-left: 3px;" @click="getcompanyModel">选择经销商</Button>

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
			</div>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureAdd" v-show="establishMsg.type=='4'">创建反馈单</Button>
				<Button type="primary" @click="sureprodAdd" v-show="establishMsg.type=='5'">创建补料单</Button>
			</div>
		</Drawer>

		<Modal title="查看大图" v-model="visible">
			<div class="show_img">
				<img :src="imgName" style="width: 100%">
			</div>

			<div slot="footer" style="border: none;"></div>

		</Modal>

		<Modal v-model="depmodel" title="售后详情" width="800">
			<div class="msg_center">
				
				<div class="item">
					<span class="lable">售后编号:</span>
					<div class="center">{{aftersMsg.no}}</div>
				</div>
				
				<div class="item">
					<span class="lable">所属订单:</span>
					<div class="center">{{aftersMsg.orderNo}}</div>
				</div>

				<div class="item">
					<span class="lable">售后状态:</span>
					<div class="center">
						<span v-show="aftersMsg.status==0">待处理</span>
						<span v-show="aftersMsg.status==1">待执行</span>
						<span v-show="aftersMsg.status==2">拒绝售后申请</span>
						<span v-show="aftersMsg.status==3">已完成</span>
					</div>
				</div>

				<div class="item">
					<span class="lable">售后类型:</span>
					<div class="center">
						<span v-show="aftersMsg.type==4">反馈单</span>
						<span v-show="aftersMsg.type==5">补料单</span>
					</div>
				</div>

				<div class="item">
					<span class="lable">经销商:</span>
					<div class="center">{{aftersMsg.companyName}}</div>
				</div>

				<div class="item">
					<span class="lable">客户姓名:</span>
					<div class="center">{{aftersMsg.customerName}}</div>
				</div>

				<div class="item">
					<span class="lable">创建时间:</span>
					<div class="center">{{aftersMsg.created}}</div>
				</div>

				<div class="item" v-show="aftersMsg.type==4">
					<span class="lable">问题描述:</span>
					<div class="center">{{aftersMsg.notes}}</div>
				</div>

				<div class="item" v-show="aftersMsg.type==4">
					<span class="lable">处理结果:</span>
					<div class="center">{{aftersMsg.information}}</div>
				</div>

				<div class="item">
					<span class="lable">附件:</span>
					<div class="center">
						<div class="demo-upload-list" v-for="(item,index) in dispatchBillList">

							<template>
								<img :src="item.imagePath">
								<div class="demo-upload-list-cover">
									<Icon type="ios-eye-outline" @click.native="handleView(item.imagePath)"></Icon>

								</div>
							</template>

						</div>
					</div>
				</div>

				<div class="item" v-show="aftersMsg.type==5">
					<span class="lable">补料产品:</span>
					<div class="center">
						<Table border :columns="aftersalePhead" :data="aftersaleProduct" ref="table"></Table>
					</div>
				</div>

			</div>

			<!--<Form :label-width="100">
				<FormItem label="订单编号:">
					{{this.setorderNo}}
				</FormItem>
				<FormItem label="售后状态:">
					<span v-show="this.setstatus==0">待处理</span>
					<span v-show="this.setstatus==1">待执行</span>
					<span v-show="this.setstatus==2">拒绝售后申请</span>
					<span v-show="this.setstatus==3">已完成</span>

				</FormItem>
				<FormItem label=":">
					<span v-show="this.settype==4"></span>
					<span v-show="this.settype==5"></span>

				</FormItem>
				<FormItem label="公司名称:">
					{{this.setcompanyName}}
				</FormItem>
				<FormItem label="C端客户姓名:">
					{{this.set}}
				</FormItem>
				<FormItem label="产品类型:">
					<span v-show="setproductType==0">橱柜(J)</span>
					<span v-show="setproductType==1">衣柜(B)</span>
					<span v-show="setproductType==2">成品家具(J)</span>
					<span v-show="setproductType==3">电器(J)</span>
					<span v-show="setproductType==4">五金(J)</span>
					<span v-show="setproductType==5">样块(Y)</span>

				</FormItem>
				<FormItem label="产品系列:">
					<span v-show="setproductSeries==0">定制实木</span>
					<span v-show="setproductSeries==1">特供实木</span>
					<span v-show="setproductSeries==2">成品家具(J)</span>
					<span v-show="setproductSeries==3">康奈</span>
					<span v-show="setproductSeries==4">惠娜</span>
					<span v-show="setproductSeries==5">模压</span>
				</FormItem>
				<FormItem label="创建时间:">
					{{this.setcreated}}
				</FormItem>


			</Form>
			<div class="demo-drawer-footer">
				<Button type="error" @click="depmodel = false">关闭</Button>
			</div>
-->
		</Modal>

		<!--经销商选择-->
		<Modal v-model="companyModel" title="选择经销商" width="50%">

			<div class="operation_box">

				<div class="active">

					<div class="ui_operateLeft">
						<span class="operation_span">名称：</span>
						<input style="width: 100px;" class="iv_input" id="p_lea" v-model="companysearchObj.name" placeholder="请输入店铺名称..." />
						<span class="operation_span">手机号：</span>
						<input style="width: 100px;" class="iv_input" id="p_lea" v-model="companysearchObj.mobile" placeholder="请输入经销商手机号..." />
						<!--<span class="operation_span">编号：</span>
						<input style="width: 100px;" class="iv_input" id="p_lea" v-model="companysearchObj.no" placeholder="请输入经销商店铺编号..." />-->
						<span class="operation_span">类型：</span>
						<Select style="width: 100px;" id="p_lea" v-model="companysearchObj.type">
							<Option value="0" key="0">生产商/制造商/总店</Option>
							<Option value="1" key="1">直营店</Option>
							<Option value="2" key="2">店中店</Option>
							<Option value="3" key="3">专卖店</Option>
							<Option value="4" key="4">加盟店</Option>
							<Option value="5" key="5">散单</Option>

						</Select>

						<Button icon="ios-search" @click="companysearch">搜索</Button>
					</div>

					<div class="ui_operateRight">
						<Button @click="newcompanydata" shape="circle" icon="ios-refresh"></Button>

						<!--<Button class="item_PL" type="primary" @click="exportData">生成表格数据</Button>-->
					</div>
				</div>

			</div>

			<!-- 经销商列表 -->
			<div class="department_center">

				<Table border :columns="companyHead" :data="companyData" ref="table"></Table>

				<div class="ui_tableBottom">

					<div class="ui_page">
						<Page :current="companypageIndex" :total="companypageTotal  " :page-size="companypageSize" @on-change="companypageChange" show-elevator></Page>
					</div>

				</div>

			</div>

			<div slot="footer"></div>

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
						key: "orderNo",
						width: 200,
						fixed: "left",
					},

					{
						title: '售后状态 ',
						key: "status",
						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var text = "待处理"
							} else if(status == 1) {
								var text = "待执行"
							} else if(status == 2) {
								var text = "拒绝售后申请"
							} else if(status == 3) {
								var text = "已完成"
							}
							return h('div', text)
						}
					},

					{
						title: '售后类型 ',
						key: 'type',

						render: (h, params) => {

							var type = params.row.type

							if(type == 4) {
								var text = "反馈单"
							} else if(type == 5) {
								var text = "补料单"
							}
							return h('div', text)
						}
					},

					{
						title: '公司名称',
						key: "companyName",

					},

					{
						title: 'c端客户姓名',
						key: "customerName",

					},

					/*		{
								title: '产品类型',
								key: "productType",
								render: (h, params) => {

									var productType = params.row.productType

									if(productType == 0) {
										var text = "橱柜(J)"
									} else if(productType == 1) {
										var text = "衣柜(B)"
									} else if(productType == 2) {
										var text = "成品家具(J)"
									} else if(productType == 3) {
										var text = "电器(J)"
									} else if(productType == 4) {
										var text = "五金(J)"
									} else if(productType == 5) {
										var text = "样块(Y)"
									}
									return h('div', text)
								}

							},
							{
								title: '产品系列',
								key: "productSeries",
								render: (h, params) => {

									var productSeries = params.row.productSeries

									if(productSeries == 0) {
										var text = "定制实木"
									} else if(productSeries == 1) {
										var text = "特供实木"
									} else if(productSeries == 2) {
										var text = "美克"
									} else if(productSeries == 3) {
										var text = "康奈"
									} else if(productSeries == 4) {
										var text = "惠娜"
									} else if(productSeries == 5) {
										var text = "模压"
									}
									return h('div', text)
								}

							},*/
					{
						title: '创建时间',
						key: "created",

					},
					{
						title: '操作',
						key: 'action',
						width: 160,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {
							return h('div', [

								h('Button', {
									props: {
										type: 'info',
										size: 'small',
										//disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px',
										//display: (this.operation.edit == true) ? "link-block" : "none"
									},
									on: {
										click: () => {
											
											
											this.$router.push({
												name: 'aftersaleDetails',
												query: {
													id: this.tableData[params.index].id
												}
											})
											
//											this.reSetIndex = params.index
//
//											this.disposeMsg.way = ""
//											this.disposeMsg.chargeAmount = ""
//											/**/
//											this.getdepdatas(params.index)
										}
									}
								}, '详情'),

							]);
						}
						// 						render: (h, params) => {
						// 
						// 							var type = params.row.type
						// 							var status = params.row.status
						// 
						// 							if (type == 4 && status == 0) {
						// 
						// 								return h('div', [
						// 
						// 									h('Button', {
						// 										props: {
						// 											type: 'primary',
						// 											size: 'small',
						// 											//disabled: !this.operation.edit
						// 										},
						// 										style: {
						// 											marginRight: '5px',
						// 											//display: (this.operation.edit == true) ? "link-block" : "none"
						// 										},
						// 										on: {
						// 											click: () => {
						// 
						// 												this.SetIndex = params.index
						// 												this.geinfo()
						// 
						// 											}
						// 										}
						// 									}, '确认'),
						// 
						// 								]);}else if (type == 4 && status == 1) {
						// 								
						// 									return h('div', [
						// 								
						// 										h('Button', {
						// 											props: {
						// 												type: 'primary',
						// 												size: 'small',
						// 												//disabled: !this.operation.edit
						// 											},
						// 											style: {
						// 												marginRight: '5px',
						// 												//display: (this.operation.edit == true) ? "link-block" : "none"
						// 											},
						// 											on: {
						// 												click: () => {
						// 								
						// 													this.SetIndex = params.index
						// 													this.geinfo()
						// 								
						// 												}
						// 											}
						// 										}, '确认'),
						// 								
						// 									]);
						// 								}
						// 							 else if (type == 5 && status == 0) {
						// 								return h('div', [
						// 
						// 									h('Button', {
						// 										props: {
						// 											type: 'primary',
						// 											size: 'small',
						// 											//disabled: !this.operation.edit
						// 										},
						// 										style: {
						// 											marginRight: '5px',
						// 											//display: (this.operation.edit == true) ? "link-block" : "none"
						// 										},
						// 										on: {
						// 											click: () => {
						// 												this.SetIndex = params.index
						// 												this.disposeMsg.way = ""
						// 												this.disposeMsg.chargeAmount = ""
						// 												this.geinfos()
						// 											}
						// 										}
						// 									}, '处理'),
						// 
						// 								]);
						// 							} else if (type == 4 && status == 3 || type == 5 && status == 3) {
						// 								return h('div', [
						// 
						// 									h('Button', {
						// 										props: {
						// 											type: 'info',
						// 											size: 'small',
						// 											//disabled: !this.operation.edit
						// 										},
						// 										style: {
						// 											marginRight: '5px',
						// 											//display: (this.operation.edit == true) ? "link-block" : "none"
						// 										},
						// 										on: {
						// 											click: () => {
						// 												this.reSetIndex = params.index
						// 												
						// 												this.disposeMsg.way = ""
						// 												this.disposeMsg.chargeAmount = ""
						// 												this.depmodel=true
						// 												this.getdepdatas()
						// 											}
						// 										}
						// 									}, '详情'),
						// 
						// 								]);
						// 							}
						// 
						// 						}

					}

				],

				tableData: [], //表格数据
				applyModel: false,
				applyMsg: {},
				dispose: false,
				disposeMsg: {
					way: "",
				},

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

				orderProducts: [],

				operatorData: [],

				orderProductObj: {},

				companyData: [],
				clientdata: [],
				customOrderdata: [],

				feedback: {},
				repair: {},

				uploadpathdata: '/api/f/aftersales/v2/aftersaleApplies/addfiles',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},

				SetIndex: "", //点击编辑按钮时选中的位置
				reSetIndex: '',
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				loading: true,
				isSearch: false,
				searchObj: {
					"customOrderNo": "",
					"status": "",
					"no": "",
					"pay": "",

				},

				operation: {},

				//售后详情
				depmodel: false,
				aftersMsg: {},
				dispatchBillList: [],
				aftersalePhead: [{
						title: '产品类型',
						key: 'type',
						width: 200,

						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '橱柜(J)'
							} else if(row.type == 1) {
								text = '衣柜(B)'
							} else if(row.type == 2) {
								text = '成品家具(J)'
							} else if(row.type == 3) {
								text = '电器(J)'
							} else if(row.type == 4) {
								text = '五金(J)'
							} else if(row.type == 5) {
								text = '样块(Y)'
							}
							return h('div', text);
						}
					},
					{
						title: '产品系列',
						key: 'series ',
						width: 200,
						render: (h, params) => {

							var series = params.row.series
							var text
							if(series == 0) {
								text = '定制实木 '
							} else if(series == 1) {
								text = '特供实木'
							} else if(series == 2) {
								text = '美克 '
							} else if(series == 3) {
								text = '康奈'
							} else if(series == 4) {
								text = '慧娜 '
							} else if(series == 5) {
								text = '模压  '
							}
							return h('div', text);
						}
					},

					{
						title: '门型',
						key: 'door',
						width: 200,

					},
					{
						title: '颜色',
						key: 'color',
						width: 150,

					},
				],
				aftersaleProduct: [],

				//
				companyModel: false,
				companyHead: [

					{
						title: '公司名称',
						key: "name",

					},

					{
						title: '类型',
						key: 'type',

						render: (h, params) => {

							var type = params.row.type

							if(type == 0) {
								var text = "生产商/制造商/总店"
							} else if(type == 1) {
								var text = "直营店"
							} else if(type == 2) {
								var text = "店中店"
							} else if(type == 3) {
								var text = "专卖店"
							} else if(type == 4) {
								var text = "加盟店"
							} else if(type == 5) {
								var text = "散单"
							}

							return h('div', text)
						}

					},

					{
						title: '状态',
						key: 'status',

						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {
								var text = "意向"
							} else if(status == 1) {
								var text = "已签约（正常）"
							} else if(status == 2) {
								var text = "已退网"
							} else if(status == 3) {
								var text = "已倒闭"
							} else if(status == 4) {
								var text = "已禁用"
							} else if(status == 5) {
								var text = "无价值"
							} else if(status == 6) {
								var text = "待财务审核"
							} else if(status == 7) {
								var text = "待启用"
							}
							return h('div', text)
						}
					},

					{
						title: '创始人姓名',
						key: 'founderName',

					},

					{
						title: '店铺联系人',
						key: 'leaderName',

					},

					{
						title: '店铺联系人电话',
						key: 'leaderTel',

					},

					{
						title: '操作',
						width: 100,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							return h('div', [
								h('Button', {
									props: {
										size: 'small',

									},
									style: {
										marginRight: '5px'

									},
									on: {
										click: () => {
											var data = this.companyData[params.index];
											this.establishMsg.companyName = data.name + '-' + data.leaderName;
											this.establishMsg.companyAddress= data.address
											this.establishMsg.leaderTel= data.leaderTel										
											this.establishMsg.companyId = data.id;
											this.getClient(data.id)
											this.companyModel = false

										}
									}
								}, "选择"),
							]);

						}

					},

				],
				companyData: [],
				companypageIndex: 1, //分页页数
				companypageTotal: 0, //数据总数
				companypageSize: 10,
				companysearchObj: { //检索对象
					"name": "",
					"mobile": "",
					"no": "",
					"type": "",
				},
				iscompanySearch: false,

			};
		},

		methods: {
			
			newOpen:function  () {
				this.$emit('openWindow', ('aftersalemanageNewly'), ('新建售后'), ('11-1'), ('aftersalemanageNewly'), ('aftersalemanageNewly'))
			},
			
			getdepdatas(index) {

				var id = this.tableData[index].aftersaleId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/aftersales/v2/aftersaleApplies/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.depmodel = true
					that.aftersMsg = data.aftersaleApply
					that.dispatchBillList = data.dispatchBillList
					that.aftersaleProduct = data.aftersaleProduct
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

				/*var index = this.reSetIndex;
				this.setorderNo = this.tableData[index].orderNo;
				this.setstatus = this.tableData[index].status;
				this.settype = this.tableData[index].type;
				this.setcompanyName = this.tableData[index].companyName;
				this.setcustomerName = this.tableData[index].customerName;
				this.setcreated = this.tableData[index].created;
				this.setproductType = this.tableData[index].productType;
				this.setproductSeries = this.tableData[index].productSeries;*/

			},

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},

			handleRemove: function(index) {
				this.establishMsg.files.splice(index, 1)
			},

			handleSuccess(res, file) {

				var data = res.data

				for(var i = 0; i < data.length; i++) {
					this.establishMsg.files.push(data[i])
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
				var searchobj = this.searchObj

				var customOrderNo = searchobj.customOrderNo + '';

				if(customOrderNo.trim().length == 0) {
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

				var customOrderNo = searchobj.customOrderNo;

				var pathurl = ""

				if(customOrderNo != "" && customOrderNo != null && customOrderNo.trim().length != 0) {
					pathurl += 'orderNo=' + customOrderNo + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.loading = true

				var that = this
				/*' + this.pathstatus + pathurl + '*/
				this.axios({
					method: 'get',
					url: '/api/f/aftersales/v2/aftersaleApplies?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data

					that.tableData = data
					that.pageIndextotal = parseInt(dataAll.pagination.total)

					//that.$Message.success("请求成功")
					that.isSearch = true
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			puttype: function(index) {
				this.orderProducts[index].series = "";
				this.orderProducts[index].color = "";
				this.orderProducts[index].door = ""

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
					that.newData()
					that.establishModel = false
					//that.tableData.push(data)
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
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
					that.newData()
					that.establishModel = false
					//that.tableData.push(data)
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {
						"no": "",
						"customerTel": "",
					},
					this.pageIndex = 1
				this.getDatas()

			},

			//售后单详情

			geinfo: function() {

				var id = this.tableData[this.SetIndex].aftersaleId
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/app/f/aftersales/v2/aftersaleApplies/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.applyMsg = data.aftersaleApply
					that.applyMsg.isconsent = ""
					that.applyModel = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			geinfos: function() {

				var id = this.tableData[this.SetIndex].aftersaleId
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/aftersales/v2/aftersaleApplies/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.applyMsg = data.aftersaleApply
					that.dispose = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//确认反馈单

			surefeedback: function() {
				var id = this.tableData[this.SetIndex].aftersaleId
				var type = this.tableData[this.SetIndex].type

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				/*' + this.pathstatus + '*/
				this.axios({
					method: 'put',
					url: '/api/f/aftersales/v2//handle',

					data: {
						id: id,
						type: type
					}

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.$Message.success("操作成功")
					that.tableData[that.SetIndex].status = data.status
					that.applyModel = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			//确认处理售后申请

			suredispose: function() {

				var id = this.tableData[this.SetIndex].aftersaleId
				var type = this.tableData[this.SetIndex].type
				var way = this.disposeMsg.way
				if(way == "" || way == null) {
					this.$Message.error('请选择是否需要收费！');
					return false;
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				/*' + this.pathstatus + '*/
				this.axios({
					method: 'put',
					url: '/api/f/aftersales/v2//handle',

					data: {
						id: id,
						type: type,
						is_charge: (way == "") ? undefined : way
					}

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.$Message.success("操作成功")

					that.dispose = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

				///

			},

			establish: function() {
				this.establishModel = true
				this.showfreeAmount = false;
				this.showchargeAmount = false;
				this.manual = false;
				this.establishMsg = {
						companyId: "",
						notes: "",
						type: "4",
						customOrderId: "",
						information: "",
						files: [],
						aftersaleOrderNo: "",
						charge: "",
						chargeAmount: "",
						freeAmount: "",

						series: "",
						color: "",
						door: "",

					},
					this.orderProducts = []
				this.clientdata = []
				this.customOrderdata = []

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

			getDatas: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
				/*' + this.pathstatus + '*/
				this.axios({
					method: 'get',
					/*status=1&status=2&status=3&status=4&*/
					url: '/api/f/aftersales/v2/aftersaleApplies?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data
					for(var i = 0; i < data.length; i++) {
						data[i].ispick = false
					}
					that.tableData = data
					that.pageIndextotal = parseInt(dataAll.pagination.total)

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			pathchange: function() {

				var keydata = this.$route.query.key
				var operation = this.operation
				Isjurisdiction.user_jurisdiction(keydata, operation)

				this.getDatas()

			},

			//获取可用经销商

			Getdealers: function() {
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies?status=1&pageNum=' + this.companypageIndex + '&pageSize=' + this.companypageSize,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					var data = res.data.data
					that.companyData = data.companyList

					that.companypageTotal = res.data.pagination.total

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！22');

				})

			},

			getcompanyModel: function() {
				this.companyModel = true;
				this.newcompanydata()
			},

			//刷新经销商数据
			newcompanydata: function() {
				this.iscompanySearch == false
				this.companysearchObj = {

						name: "",
						mobile: "",
						no: "",
						type: "",

					},
					this.companypageIndex = 1
				this.Getdealers()
			},

			//检索经销商数据
			companysearch: function() {
				var searchobj = this.companysearchObj
				var name = searchobj.name
				var mobile = searchobj.mobile
				var no = searchobj.no
				var type = searchobj.type

				if(name.trim().length == 0 && mobile.trim().length == 0 && no.length == 0 && !type == true) {
					this.Getdealers();
					return false;
				} else {
					this.companypageIndex = 1
					this.searchcompanyData()
				}

			},

			//检索数据		
			searchcompanyData: function() {
				var searchobj = this.companysearchObj

				var name = searchobj.name
				var mobile = searchobj.mobile
				var No = searchobj.no
				var type = searchobj.type

				var pathurl = ""

				if(name != "" && name != null && name.trim().length != 0) {
					pathurl += 'name=' + name + "&"
				}

				if(mobile != "" && mobile != null && mobile.trim().length != 0) {
					pathurl += 'mobile=' + mobile + "&"
				}

				if(No != "" && No != null && No.trim().length != 0) {
					pathurl += 'no=' + No + "&"
				}

				if(type != "" && type != null) {
					pathurl += 'type=' + type + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				//请求经销商列表
				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies?status=1&' + pathurl + 'pageNum=' + this.companypageIndex + '&pageSize=' + this.companypageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.companypageTotal = res.data.pagination.total
					var data = res.data.data.companyList

					that.companyData = data
					that.iscompanySearch = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			companypageChange: function(index) {
				this.companypageIndex = index

				if(this.iscompanySearch == true) {
					this.searchcompanyData()

				} else {
					this.Getdealers()

				}
			},

		},

		mounted: function() {

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.getDatas()

			var that = this

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

		},

		watch: {
			$route: "pathchange"
		}

	}
</script>

<style scoped="scoped">
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

<style src='./../../assets/css/department.css'></style>