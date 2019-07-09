<template>
	<div class="contain">
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>订单列表</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<div>
			<Row>
				<Col span="4">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head "><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>新增订单数</h3>
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
							<h3 class="head"><div class="left_icon two-child"><img src="../../assets/img/order/list-02.png"/></div>待付款订单数</h3>
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
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>延期订单数</h3>
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
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>完成订单数</h3>
							<div class="panel_con">

								<div class="order_head_statistics">
									<p class="statistics">32</p>
								</div>

							</div>

						</div>
					</div>
				</div>
				</Col>
				
				
				<!--<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center border">
							<h3 class="head"><div class="left_icon"><img src="../../assets/lwxflogo.png"/></div>新增订单数<span class="right_icon">订单统计<Icon type="ios-arrow-forward" /></span></h3>
							<div class="panel_con">

								<div class="order_head_statistics"></div>

							</div>

						</div>
					</div>
				</div>
				</Col>-->

				

				
				<Col span="8">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head">订单变更记录</h3>
							<div class="panel_con">
								<div class="head-statement-4">
									<ul>
										<li>
											<span class="radius"></span>
											<p>河南永城夏飞  橱柜订单货款审核完成。</p>
											<small class="Time">13：30</small>
										</li>
										<li>
											<span class="radius"></span>
											<p>河南郑州o2o店,程女士全屋订单安排生产完成，需要协调发货部门提供发货.</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>山东聊城红田旗舰店提交设计需求已审核，请相关部门注意跟进。</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>山东菏泽李春霞和苑小区,订单产品方案已确认，可以开始设计跟进，安排生产。</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>山东菏泽李春霞和苑小区,订单产品方案已确认，可以开始设计跟进，安排生产。</p>
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
								<div class="lable">日期范围</div>
								<div class="form_nav">
									<DatePicker :value="serchTime" @on-change="getTime" type="daterange" placeholder="选择日期范围" style="width: 200px"></DatePicker>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">订单编号</div>
								<div class="form_nav">
									<Input v-model="ordernum" placeholder="请输入订单编号..." style="width: 150px;margin:0 5px;"></Input>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">经销商电话</div>
								<div class="form_nav">
									<Input v-model="dealerTel" placeholder="请输入经销商电话..." style="width: 130px;margin:0 5px;"></Input>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">请输入客户电话</div>
								<div class="form_nav">
									<Input v-model="customtel" placeholder="请输入客户电话..." style="width: 120px;margin:0 5px;"></Input>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">订单状态</div>
								<div class="form_nav">
									<Select v-model="orderstatus" style="width:120px;margin:0 5px;">
										<Option v-for="item in orderstatusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
									</Select>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button icon="ios-search" type="primary" @click="serchorder">搜索</Button>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button icon="ios-refresh" @click="newData" type="primary">重置</Button>
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
									
									<Button type="primary">导入</Button>
									<Button type="primary" >导出</Button>
									<Button type="primary" @click="openmodel">新建订单</Button>
								</div>
							</li>

						</ul>

					</div>
				</div>

			</div>

			<div>
				<Table :columns="columns1" :data="data1" ></Table>
				<div class="ui_tableBottom">

					<div class="ui_operate">

					</div>

					<div class="ui_page">
						<Page :total="totalpage" :page-size="pageSize" show-total @on-change="changepage" :current="currents" />
					</div>

				</div>
				
			</div>

		</div>

		<!-- 新建订单 -->
		<!-- 修改订单基本信息 -->

		<Modal v-model="putorderModel" title="修改订单信息" width="800px">
			<Form :label-width="100">

				<FormItem label="经销商">
					<Input style="width: 300px;" v-model="setorderdata.dealerName" disabled="disabled"></Input>
				</FormItem>

				<FormItem label="客户">
					<Input style="width: 300px;" v-model="setorderdata.customerName" disabled="disabled"></Input>
				</FormItem>

				<FormItem label="客户电话">
					<Input style="width: 300px;" disabled="disabled" v-model="setorderdata.customerTel" placeholder="请输入客户电话..."></Input>
				</FormItem>

				<FormItem label="业务经理">
					<Input style="width: 300px;" disabled="disabled" v-model="setorderdata.businessManagerName"></Input>
				</FormItem>

				<FormItem label="收货人姓名">
					<Input style="width: 300px;" v-model="setorderdata.consigneeName"></Input>
				</FormItem>

				<FormItem label="收货人电话">
					<Input style="width: 300px;" v-model="setorderdata.consigneeTel"></Input>
				</FormItem>

				<FormItem label="收货地址">

					<Select style="width:120px;" v-model="provinceMsg" @on-change="pickprovince(provinceMsg)">
						<Option v-for="item in provinceData" :value="item.id" :key="item.name">{{ item.name }}</Option>
					</Select>

					<Select style="width:120px;" v-model="cityMsg" @on-change="pickdistrict(cityMsg)">
						<Option v-for="item in cityData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

					<Select style="width:120px;" v-model="districMsg" @on-change="changedistric(districMsg)">
						<Option v-for="(item,index) in districData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

				</FormItem>

				<FormItem label="详细收货地址">
					<Input style="width: 300px;" v-model="setorderdata.address" placeholder="请输入订单地址..."></Input>
				</FormItem>

				<FormItem label="订单类型">
					<Select style="width: 300px;" v-model="setorderdata.type">
						<Option v-for="item in ordertypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</FormItem>

				<!--<FormItem label="房屋面积">
							<Input style="width: 300px;" v-model="setorderdata.acreage" placeholder="请输入房屋面积..."></Input>
						</FormItem>-->

				<FormItem label="备注">
					<Input style="width: 300px;" type="textarea" v-model="setorderdata.notes" placeholder="请输入描述..."></Input>
				</FormItem>

				<!--<FormItem label="实际交货日期">
					<p>{{setorderdata.deliveryDate}}</p>
					<DatePicker type="date" v-model="" @on-change="getdeliveryDate" style="width: 300px;"></DatePicker>
				</FormItem>-->
				<FormItem label="预计交货日期">
					<DatePicker type="date" v-model="setorderdata.estimatedDeliveryDate" @on-change="getestimatedDeliveryDate" style="width: 300px;"></DatePicker>
				</FormItem>

			</Form>

			<div slot="footer">
				<Button type="primary" @click="resok">确认</Button>
			</div>
		</Modal>

		<Modal v-model="reorderinformation" title="订单产品" @on-cancel="reorderinformation==false" width="800px">

			<div class="operation_box">
				<div class="active">
					<div class="ui_operateRight">
						<Button type="primary" @click="neworderProduct" v-show="operation.edit==true" :disabled="!operation.edit">添加订单产品</Button>
					</div>
				</div>
			</div>
			<div>
				<Table border :columns="orderProductHead" :data="orderProductData" height="457"></Table>
			</div>
			<div slot="footer">

			</div>

		</Modal>

		<!-- 修改订单基本信息 -end-->
		<Modal v-model="orderadd" title="新建订单" @on-ok="orderaddok" @on-cancel="orderaddcancel" width=50%>

			<div style="display: block;  overflow: auto;">

				<!--<Row style="padding:10px;">
					<Col span="24">
					<Form>
						<FormItem>
							<div style="text-align: right;">
								<Input v-model="condition" placeholder="请输入客户名称..." style="width: 30%;" />
								<Button icon="ios-search" @click="serchdatas">搜索</Button>
							</div>

							<div style="margin-top: 20px;">
								<Table :columns="customes" :data="customesdata" height="180" border></Table>
							</div>
						</FormItem>
					</Form>
					</Col>
				</Row>-->
				<Form :label-width="100" style="padding:10px;">

					<FormItem label="经销商">
						<!--<Select style="width: 300px;" filterable v-model="orderdealer" @on-change="getClient(orderdealer)" placeholder="请选择经销商...">
							<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }}-{{ item.founderName }}</Option>
						</Select>-->

						<Input disabled="disabled" style="width: 400px;" v-model="companyName" placeholder="请选择经销商..."></Input>
						<Button size="small" style="margin-left: 3px;" @click="getcompanyModel">选择经销商</Button>
						<div v-show="companyName!=''">
							{{companyFince}}
						</div>
					</FormItem>

					<FormItem label="客户">
						<Select style="width: 300px;" filterable v-model="orderclient" @on-change="getdocumentary(orderclient)" placeholder="请选择客户...">
							<Option v-for="item in clientdata" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>

						<span style="display: inline-block; cursor: pointer;">没找到想要的客户，点击<b style="color: cornflowerblue;" @click="newClient">这里</b></span>

					</FormItem>

					<FormItem label="客户手机号">
						<Input disabled="disabled" v-model="ordertel" placeholder="请输入客户电话..."></Input>
					</FormItem>

					<FormItem label="业务经理">
						<Input disabled="disabled" v-model="orderdocumentary" placeholder="请输入业务经理..."></Input>
					</FormItem>

					<FormItem label="收货人姓名">
						<Input v-model="consigneeName" placeholder="请输入收货人姓名..."></Input>
					</FormItem>

					<FormItem label="收货人电话">
						<Input v-model="consigneeTel" placeholder="请输入收货人电话..."></Input>
					</FormItem>

					<FormItem label="收货地址">

						<Select style="width:120px;" v-model="provinceMsg" @on-change="pickprovince(provinceMsg)">
							<Option v-for="item in provinceData" :value="item.id" :key="item.name">{{ item.name }}</Option>
						</Select>

						<Select style="width:120px;" v-model="cityMsg" @on-change="pickdistrict(cityMsg)">
							<Option v-for="item in cityData" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>

						<Select style="width:120px;" v-model="districMsg" @on-change="changedistric(districMsg)">
							<Option v-for="(item,index) in districData" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>

					</FormItem>

					<FormItem label="详细收货地址">
						<Input v-model="orderlocationAddress" placeholder="请输入收货地址..."></Input>
					</FormItem>
					<!--<FormItem label="房屋面积">
						<Input v-model="orderarea" placeholder="请输入房屋面积..."></Input>
					</FormItem>-->
					<FormItem label="备注">
						<Input v-model="orderNotes" placeholder="请输入备注信息..."></Input>
					</FormItem>

					<FormItem label="订单类型">
						<Select v-model="ordertype">
							<Option v-for="item in ordertypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
						</Select>
					</FormItem>
					<FormItem label="下单时间">
						<DatePicker type="date" placeholder="请选择下单时间" style="width: 100%" :value="orderTime" @on-change="handleChange"></DatePicker>
					</FormItem>
					<FormItem label="是否设计">
						<RadioGroup true-value v-model="orderisDesign">
							<Radio label="0">不需要</Radio>
							<Radio label="1">需要</Radio>
						</RadioGroup>
					</FormItem>
					<!--<FormItem label="订单设计费" v-show="orderisDesign==0">
						<Input v-model="orderdesignFee" placeholder="请输入订单设计费..."></Input>
					</FormItem>
					<FormItem label="订单货款">
						<Input v-model="orderfactoryPrice" placeholder="请输入订单货款..."></Input>
					</FormItem>
-->
					<!--<FormItem label="订单产品">
						<div class="order_product">

							<div class="p_itemAdd">
								<Button @click="addProduct">新增</Button>
							</div>

							<ul>
								<li class="p_item" v-for="(item,index) in orderProducts">

									<div class="op">
										<Button shape="circle" icon="ios-trash-outline" @click="delProduct(index)"></Button>
									</div>

									<FormItem label="产品类型">
										<Select style="width: 300px;" v-model="item.type" placeholder="请选择产品类型...">
											<Option value="0">橱柜(J)</Option>
											<Option value="1">衣柜(B)</Option>
											<Option value="2">成品家具(J)</Option>
											<Option value="3">电器(J)</Option>
											<Option value="4">五金(J)</Option>
											<Option value="5">样块(Y)</Option>
										</Select>
									</FormItem>

									<FormItem label="产品系列">
										<Select style="width: 300px;" v-model="item.series" placeholder="请选择产品系列...">
											<Option value="0">定制实木 </Option>
											<Option value="1">特供实木</Option>
											<Option value="2">美克</Option>
											<Option value="3">康奈</Option>
											<Option value="4">慧娜</Option>
											<Option value="5">模压</Option>
										</Select>
									</FormItem>

									<FormItem label="产品颜色">
										<Input style="width: 300px;" v-model="item.color" placeholder="请输入产品颜色..."></Input>
									</FormItem>

									<FormItem label="门型">
										<Input style="width: 300px;" v-model="item.door" placeholder="请输入门型..."></Input>
									</FormItem>

									<FormItem label="备注">
										<Input style="width: 300px;" type="textarea" v-model="item.notes" placeholder="请输入备注..."></Input>
									</FormItem>

								</li>
							</ul>
						</div>
					</FormItem>-->

					<!--<FormItem label="生产拆单">
						<div class="order_product">

							<div class="p_itemAdd">
								<Button @click="addOrderDtos">新增</Button>
							</div>

							<ul>
								<li class="p_item" v-for="(item,index) in produceOrderDtos">

									<div class="op">
										<Button shape="circle" icon="ios-trash-outline" @click="delOrderDtos(index)"></Button>
									</div>

									<FormItem label="拆单类型">
										<Select style="width: 300px;" v-model="item.type " placeholder="请选择产品系列...">
											<Option value="0">柜体 </Option>
											<Option value="1">门板 </Option>
											<Option value="2">五金 </Option>

										</Select>
									</FormItem>

									<FormItem label="生产方式" v-show="item.type!=1">
										<RadioGroup true-value v-model="item.way">
											<Radio label="0">自产</Radio>
											<Radio label="2">特供实木</Radio>
										</RadioGroup>
									</FormItem>

									<FormItem label="生产方式" v-show="item.type==1">
										<RadioGroup true-value v-model="item.way">
											<Radio label="0">自产</Radio>
											<Radio label="1">外协</Radio>
											<Radio label="2">特供实木</Radio>
										</RadioGroup>
									</FormItem>

									<FormItem label="拆单编号">
										<Input style="width: 300px;" v-model="item.no" placeholder="请输入拆单编号..."></Input>
									</FormItem>

									<div v-show="item.way==1&&item.type==1">

										<FormItem label="外协金额">
											<Input style="width: 300px;" v-model="item.amount" placeholder="请输入外协金额..."></Input>
										</FormItem>

										<FormItem label="外协厂家">
											<Input style="width: 300px;" v-model="item.coordinationName" placeholder="请输入外协厂家..."></Input>
										</FormItem>

										<FormItem label="银行账户">
											<Input style="width: 300px;" v-model="item.coordinationAccount" placeholder="请输入银行账户..."></Input>
										</FormItem>

										<FormItem label="开户行">
											<Input style="width: 300px;" v-model="item.coordinationBank" placeholder="请输入开户行..."></Input>
										</FormItem>
									</div>

									<FormItem label="数量">
										<Input style="width: 300px;" v-model="item.count" placeholder="请输入数量..."></Input>
									</FormItem>


									<FormItem label="说明">
										<Input type="textarea" style="width: 300px;" v-model="item.notes" placeholder="请输入说明..."></Input>
									</FormItem>

								</li>
							</ul>
						</div>
					</FormItem>-->
				</Form>

			</div>

			<div class="demo-drawer-footer border_none">
				<Button type="primary" @click="orderaddok">确认</Button>
			</div>
		</Modal>
		<!-- 新建订单 -->

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

		<!--经销商选择-->

		<!--新增客户-s-->
		<Drawer v-model="newClientModel" title="添加客户" width="500" @on-close="newClientModel=false,orderadd=true">

			<Form :model="objmsg" :label-width="120">

				<FormItem label="用户名">
					<Input v-model="objmsg.name" placeholder="请输入客户用户名..."></Input>
				</FormItem>

				<FormItem label="联系方式">
					<Input v-model="objmsg.mobile" placeholder="请输入客户联系方式..."></Input>
				</FormItem>

				<FormItem label="客户地址">
					<Select style="width:120px;" v-model="provinceMsg" @on-change="pickprovince(provinceMsg)">
						<Option v-for="item in provinceData" :value="item.id" :key="item.name">{{ item.name }}</Option>
					</Select>

					<Select style="width:120px;" v-model="cityMsg" @on-change="pickdistrict(cityMsg)">
						<Option v-for="item in cityData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

					<Select style="width:120px;" v-model="districMsg" @on-change="changedistric(districMsg)">
						<Option v-for="(item,index) in districData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

				</FormItem>

				<FormItem label="详细地址">
					<Input v-model="objmsg.address" placeholder="请输入详细地址..."></Input>
				</FormItem>

				<FormItem label="小区名称">
					<Input v-model="objmsg.community" placeholder="请输入小区名称..."></Input>
				</FormItem>

				<!--<FormItem label="公司名称">
					<Select id="p_lea" v-model="objmsg.companyId">
						<Option v-for="item in companyData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>
				</FormItem>-->

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="pushclient">确认添加</Button>
			</div>

		</Drawer>

		<!--新增客户-e-->

		<!-- 修改状态 -->
		<Modal v-model="changestatus" title="修改订单的状态" @on-ok="ok" @on-cancel="cancel">
			<Select v-model="changeorderstatus" style="width:200px">
				<Option v-for="item in orderstatusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
		</Modal>
		<!-- 修改状态 -->
		<!-- 需求详情 -->
		<Modal v-model="demandstatus" title="需求详情" @on-ok="desginok" @on-cancel="desgincancel" width="1000">
			<Row span="24">
				<Col span="8">
				<span>订单编号: {{ customOrderDemands.no}}</span>
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
			<div class="upload-list" v-for="(item,index) in demandfilearr">
				<img :src="item.path" alt="">
				<div class="upload-list-cover">
					<Icon type="ios-eye-outline" @click.native="bigphotos(index)"></Icon>
				</div>

			</div>
			<div slot="footer">
				<Button type="error" size="large" @click="demandstatus=false">关闭</Button>
			</div>
		</Modal>
		<!-- 需求详情 -->
		<!-- 设计详情 -->
		<Modal v-model="designstatus" title="设计详情" width="1000">
			<Row span="24">
				<Col span="8">
				<span>订单编号: {{ orderDesignDtos.no}}</span>
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
			<div class="upload-list" v-for="(item,index) in designFilearr">
				<img :src="item.path" alt="">
				<div class="upload-list-cover">
					<Icon type="ios-eye-outline" @click.native="bigphotoss(index)"></Icon>
				</div>
			</div>
			<div slot="footer">
				<Button type="error" size="large" @click="designstatus=false">关闭</Button>
			</div>
		</Modal>
		<!-- 设计详情 -->
		<!-- 订单详情 -->
		<Modal v-model="orderdetail" title="订单详情" @on-ok="orderdetailok" @on-cancel="orderdetailcancel" width=80%;>

			<div class="order_center">

				<div class="item" style="border-right:solid 1px #EEEEEE;">
					<ul class="ordermsg">
						<li>
							订单编号 : {{ orderdata.no }}
						</li>

						<li>
							创建时间 : {{ orderdata.created }}
						</li>

						<li>
							订单创建人 : {{ orderdata.creatorName}}
						</li>

						<li>
							客户名称: {{ orderdata.customerName}}
						</li>

						<li>
							客户电话: {{ orderdata.customerTel}}
						</li>
						<li>
							业务经理 : {{ orderdata.businessManagerName}}
						</li>

						<li>
							业务经理电话 : {{ orderdata.businessManagerTel}}
						</li>

						<li>
							收货人姓名 : {{ orderdata.consigneeName}}
						</li>

						<li>
							收货人电话 : {{ orderdata.consigneeTel}}
						</li>

						<li>
							收货地址 : {{orderdata.cityName}}{{orderdata.address}}
						</li>

						<li>
							<p v-show="orderdata.status==0">订单状态: 待处理</p>
							<p v-show="orderdata.status==1">订单状态: 设计费待评估</p>
							<p v-show="orderdata.status==2">订单状态: 设计费待确认</p>
							<p v-show="orderdata.status==3">订单状态: 设计费待审核 </p>
							<p v-show="orderdata.status==4">订单状态: 待设计</p>
							<p v-show="orderdata.status==5">订单状态: 设计中</p>
							<p v-show="orderdata.status==6">订单状态: 设计待确认</p>
							<p v-show="orderdata.status==7">订单状态: 出厂价待确认</p>
							<p v-show="orderdata.status==8">订单状态: 经销商待确认出厂价</p>
							<p v-show="orderdata.status==9">订单状态: 货款支付审核</p>
							<p v-show="orderdata.status==10">订单状态: 待生产 </p>
							<p v-show="orderdata.status==11">订单状态: 生产中</p>
							<p v-show="orderdata.status==12">订单状态: 待入库</p>
							<p v-show="orderdata.status==13">订单状态: 待出库</p>
							<p v-show="orderdata.status==14">订单状态: 待配送</p>
							<p v-show="orderdata.status==15">订单状态: 配送中</p>
							<p v-show="orderdata.status==16">订单状态: 已完成</p>
						</li>
						<li>
							<p v-show="orderdata.type==0">订单类型: 正常订单</p>
							<p v-show="orderdata.type==1">订单类型: 补产订单</p>
							<p v-show="orderdata.type==2">订单类型: 返货单</p>
							<p v-show="orderdata.type==3">订单类型: 打样订单 </p>
							<p v-show="orderdata.type==4">订单类型: 样板订单</p>
							<p v-show="orderdata.type==5">订单类型: 展示厅订单</p>
							<p v-show="orderdata.type==6">订单类型: 补发订单</p>

						</li>

						<li>
							设计师: {{ orderdata.designerName }}
						</li>

						<li>
							备注: {{ orderdata.notes}}
						</li>

						<!--	<li>
							订单城市 : {{ orderdata.cityName }}
						</li>

						<li>
							合同资源
							<div class="upload-list" v-for="(item,index) in orderdatas">
								<img :src="item.path" alt="">
								<div class="upload-list-cover">
									<Icon type="ios-eye-outline" @click.native="bigphoto(index)"></Icon>
								</div>
							</div>-->
						</li>

						<!--<li>
							<div>
								<Button size="small">折扣 : {{ orderdata.discounts}}</Button>
								<Button size="small">设计费 : {{ orderdata.designFee}}</Button>
								<Button size="small">保证金 : {{ orderdata.earnest }}</Button>
								<Button size="small">预付款 : {{ orderdata.imprest }}</Button>
								<Button size="small">市场价: {{ orderdata.marketPrice }}</Button>
								<Button size="small">定金: {{ orderdata.retainage }}</Button>
								<Button size="small">工厂折扣: {{ orderdata.factoryDiscounts}}</Button>
								<Button size="small">出厂价: {{ orderdata.factoryPrice }}</Button>
								<Button size="small">工厂最终价: {{ orderdata.factoryFinalPrice }}</Button>
							</div>
						</li>-->

					</ul>
				</div>

				<div class="item">

					<h6 class="item_head">
						<span :class="{active:itemIndex==0}" @click="itemIndex=0">订单产品</span>
						<span :class="{active:itemIndex==1}"  @click="itemIndex=1">订单修改记录</span>					
					</h6>

					<div class="item_center" :class="{active:itemIndex==0}">
						<Table border :columns="orderProductHeadView" :data="orderProductData" height="457"></Table>
					</div>

					<div class="item_center" :class="{active:itemIndex==1}">

						<Table border :columns="AccountLogListHead" :data="AccountLogList" height="400"></Table>
					</div>

				</div>

			</div>

			<div slot="footer"></div>
		</Modal>
		<!-- 订单详情 -->

		<!--新增订单产品-s-->

		<Drawer v-model="neworderProductModel" title="新增订单产品" width="500" @on-close="neworderProductModel = false,reorderinformation=true">

			<div style="position: relative; height: 100%; overflow: auto; padding-bottom:50px">

				<Form :label-width="100">

					<FormItem label="产品类型">
						<Select style="width: 300px;" v-model="orderProductObj.type" @on-change="orderProductObj.series='',orderProductObj.color='',orderProductObj.door=''" placeholder="请选择产品类型...">
							<Option v-for="(item, index) in orderType" :value="item.code" :key="item.id">{{item.value}}</Option>

						</Select>
					</FormItem>

					<FormItem label="产品系列" v-show="orderProductObj.type==0||orderProductObj.type==1">
						<Select style="width: 300px;" v-model="orderProductObj.series" placeholder="请选择产品系列...">
							<Option v-for="(item, index) in orderSeries" :value="item.code" :key="item.id">{{item.value}}</Option>
						</Select>
					</FormItem>

					<FormItem label="产品颜色" v-show="orderProductObj.type==0||orderProductObj.type==1">
						<Input style="width: 300px;" v-model="orderProductObj.color" placeholder="请输入产品颜色..."></Input>
					</FormItem>

					<FormItem label="门型" v-show="orderProductObj.type==0||orderProductObj.type==1">
						<Input style="width: 300px;" v-model="orderProductObj.door" placeholder="请输入门型..."></Input>
					</FormItem>

					<FormItem label="产品价格">
						<Input style="width: 300px;" v-model="orderProductObj.price" placeholder="请输入产品价格..."></Input>
					</FormItem>

					<FormItem label="备注">
						<Input style="width: 300px;" type="textarea" v-model="orderProductObj.notes" placeholder="请输入备注..."></Input>
					</FormItem>

				</Form>
			</div>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureAddorderProduct">确认添加</Button>
			</div>
		</Drawer>

		<!--新增订单产品-e-->

		<!--修改订单产品-s-->

		<Drawer v-model="putorderProductModel" title="编辑订单产品" width="500" @on-close="putorderProductModel = false,reorderinformation=true">
			<div style="position: relative; height: 100%; overflow: auto; padding-bottom:50px">
				<Form :label-width="100">

					<FormItem label="产品类型">
						<Select style="width: 300px;" v-model="orderProductObj.type" @on-change="orderProductObj.series='',orderProductObj.color='',orderProductObj.door=''" placeholder="请选择产品类型...">
							<Option v-for="(item, index) in orderType" :value="item.code" :key="item.id">{{item.value}}</Option>
						</Select>
					</FormItem>

					<FormItem label="产品系列" v-show="orderProductObj.type==0||orderProductObj.type==1">
						<Select style="width: 300px;" v-model="orderProductObj.series" placeholder="请选择产品系列...">
							<Option v-for="(item, index) in orderSeries" :value="item.code" :key="item.id">{{item.value}}</Option>
						</Select>
					</FormItem>

					<FormItem label="产品颜色" v-show="orderProductObj.type==0||orderProductObj.type==1">
						<Input style="width: 300px;" v-model="orderProductObj.color" placeholder="请输入产品颜色..."></Input>
					</FormItem>

					<FormItem label="产品价格">
						<Input style="width: 300px;" v-model="orderProductObj.price" placeholder="请输入产品价格..."></Input>
					</FormItem>

					<FormItem label="门型" v-show="orderProductObj.type==0||orderProductObj.type==1">
						<Input style="width: 300px;" v-model="orderProductObj.door" placeholder="请输入门型..."></Input>
					</FormItem>

					<FormItem label="备注">
						<Input style="width: 300px;" type="textarea" v-model="orderProductObj.notes" placeholder="请输入备注..."></Input>
					</FormItem>

					<FormItem label="附件">
						<div class="pl">
							<div class="demo-upload-list" v-for="(item,index) in orderProductObj.files">

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
				<Button type="primary" @click="sureputorderProduct">确认修改</Button>
			</div>
		</Drawer>

		<!--修改订单产品-e-->

		<!--删除订单产品-->

		<Modal v-model="pdel" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除订单产品操作</p>
				<p>是否继续执行？</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="suredelorderProduct">删除</Button>
			</div>
		</Modal>

		<!--删除订单产品-->

		<!--新增生产拆单-s-->

		<Drawer v-model="newproduceOrderDtosModel" title="新增生产拆单" width="500" @on-close="newproduceOrderDtosModel = false,orderdetail=true">

			<Form :label-width="100">

				<FormItem label="拆单类型">
					<Select style="width: 300px;" v-model="produceOrderDtosObj.type " placeholder="请选择产品系列...">
						<Option value="0">柜体 </Option>
						<Option value="1">门板 </Option>
						<Option value="2">五金 </Option>

					</Select>
				</FormItem>

				<FormItem label="生产方式" v-show="produceOrderDtosObj.type!=1">
					<RadioGroup true-value v-model="produceOrderDtosObj.way">
						<Radio label="0">自产</Radio>
						<Radio label="2">特供实木</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="生产方式" v-show="produceOrderDtosObj.type==1">
					<RadioGroup true-value v-model="produceOrderDtosObj.way">
						<Radio label="0">自产</Radio>
						<Radio label="1">外协</Radio>
						<Radio label="2">特供实木</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="拆单编号">
					<Input style="width: 300px;" v-model="produceOrderDtosObj.no" placeholder="请输入拆单编号..."></Input>
				</FormItem>

				<div v-show="produceOrderDtosObj.way==1&&produceOrderDtosObj.type==1">

					<FormItem label="外协金额">
						<Input style="width: 300px;" v-model="produceOrderDtosObj.amount" placeholder="请输入外协金额..."></Input>
					</FormItem>

					<FormItem label="外协厂家">
						<Input style="width: 300px;" v-model="produceOrderDtosObj.coordinationName" placeholder="请输入外协厂家..."></Input>
					</FormItem>

					<FormItem label="银行账户">
						<Input style="width: 300px;" v-model="produceOrderDtosObj.coordinationAccount" placeholder="请输入银行账户..."></Input>
					</FormItem>

					<FormItem label="开户行">
						<Input style="width: 300px;" v-model="produceOrderDtosObj.coordinationBank" placeholder="请输入开户行..."></Input>
					</FormItem>
				</div>

				<FormItem label="数量">
					<Input style="width: 300px;" v-model="produceOrderDtosObj.count" placeholder="请输入数量..."></Input>
				</FormItem>

				<!--<FormItem label="完成时间">
									
										<DatePicker style="width: 300px;" type="date" placeholder="请选择完成时间" @on-change="getcompletionTime" :value="produceOrderDtosObj.completionTime"></DatePicker>
									</FormItem>-->

				<FormItem label="说明">
					<Input type="textarea" style="width: 300px;" v-model="produceOrderDtosObj.notes" placeholder="请输入说明..."></Input>
				</FormItem>

			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="sureAddproduceOrderDtos">确认添加</Button>
			</div>
		</Drawer>

		<!--修改生产拆单-e-->

		<Drawer v-model="putproduceOrderDtosModel" title="修改生产拆单" width="500" @on-close="putproduceOrderDtosModel = false,orderdetail=true">

			<Form :label-width="100">

				<FormItem label="拆单类型">
					<Select style="width: 300px;" v-model="produceOrderDtosObj.type " placeholder="请选择产品系列...">
						<Option value="0">柜体 </Option>
						<Option value="1">门板 </Option>
						<Option value="2">五金 </Option>

					</Select>
				</FormItem>

				<FormItem label="生产方式" v-show="produceOrderDtosObj.type!=1">
					<RadioGroup true-value v-model="produceOrderDtosObj.way">
						<Radio label="0">自产</Radio>
						<Radio label="2">特供实木</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="生产方式" v-show="produceOrderDtosObj.type==1">
					<RadioGroup true-value v-model="produceOrderDtosObj.way">
						<Radio label="0">自产</Radio>
						<Radio label="1">外协</Radio>
						<Radio label="2">特供实木</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="拆单编号">
					<Input style="width: 300px;" v-model="produceOrderDtosObj.no" placeholder="请输入拆单编号..."></Input>
				</FormItem>

				<div v-show="produceOrderDtosObj.way==1&&produceOrderDtosObj.type==1">

					<FormItem label="外协金额">
						<Input style="width: 300px;" v-model="produceOrderDtosObj.amount" placeholder="请输入外协金额..."></Input>
					</FormItem>

					<FormItem label="外协厂家">
						<Input style="width: 300px;" v-model="produceOrderDtosObj.coordinationName" placeholder="请输入外协厂家..."></Input>
					</FormItem>

					<FormItem label="银行账户">
						<Input style="width: 300px;" v-model="produceOrderDtosObj.coordinationAccount" placeholder="请输入银行账户..."></Input>
					</FormItem>

					<FormItem label="开户行">
						<Input style="width: 300px;" v-model="produceOrderDtosObj.coordinationBank" placeholder="请输入开户行..."></Input>
					</FormItem>
				</div>

				<FormItem label="数量">
					<Input style="width: 300px;" v-model="produceOrderDtosObj.count" placeholder="请输入数量..."></Input>
				</FormItem>

				<!--<FormItem label="完成时间">
									
										<DatePicker style="width: 300px;" type="date" placeholder="请选择完成时间" @on-change="getcompletionTime" :value="produceOrderDtosObj.completionTime"></DatePicker>
									</FormItem>-->

				<FormItem label="说明">
					<Input type="textarea" style="width: 300px;" v-model="produceOrderDtosObj.notes" placeholder="请输入说明..."></Input>
				</FormItem>

			</Form>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="surePutproduceOrderDtos">确认添加</Button>
			</div>
		</Drawer>

		<!--修改生产拆单-e-->

		<!--删除生产拆单-->

		<Modal v-model="pdels" width="360">
			<p slot="header" style="color:#f60;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>删除提示</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除生产拆单操作</p>
				<p>是否继续执行？</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="suredelproduceOrderDtos">删除</Button>
			</div>
		</Modal>

		<!--删除生产拆单-->

		<!-- 放大图片 -->
		<Modal title="图片详情" v-model="visible" style="text-align: center;">
			<img :src="bigimg" style="width: 80%;">
			<div slot="footer">
				<Button type="error" size="large" @click="guanbi_buts">关闭</Button>
			</div>
		</Modal>
		<!--tab项中的图片放大-->
		<Modal title="图片详情" v-model="visibles" style="text-align: center;">
			<img :src="bigimgs" style="width: 80%;">
			<div slot="footer">
				<Button type="error" size="large" @click="visibles=false">关闭</Button>
			</div>
		</Modal>
		<Modal title="图片详情" v-model="visibless" style="text-align: center;">
			<img :src="bigimgss" style="width: 80%;">
			<div slot="footer">
				<Button type="error" size="large" @click="visibless=false">关闭</Button>
			</div>
		</Modal>
		<!-- 放大图片 -->
	</div>
</template>

<script>
	var interceptor;
	import returndata from '@/assets/js/returndata.js';
	export default {
		data() {
			return {
				orderType: [],
				orderSeries: [],
				bigimg: '',
				bigimgs: '',
				bigimgss: '',
				visible: false,
				visibles: false,
				visibless: false,
				formPropertyMapping: {
					'customerId': '用户',
					'companyId': '经销商',
					'salesman': '业务员',
					'type': '订单类型',
					'customerTel': '客户电话'
				},
				regoman: '',
				estimatedDeliveryDate: '',
				deliveryDate: '',
				estimatedDeliveryDates: '',
				deliveryDates: '',
				redesignfee: '',
				refactorydiscount: '',
				refactorydiscountend: "",
				rediscount: '',
				remarketprice: '',
				reoutprice: '',
				restyles: '',
				renote: '',
				restyler: '',
				ordertype: '',
				orderisDesign: "0",
				orderdesignFee: "",
				orderfactoryPrice: "",
				reorderinformation: false,
				putorderModel: false,
				ordertypeList: [{
						value: 0,
						label: '正常订单'
					},
					{
						value: 1,
						label: '补产订单'
					},
					{
						value: 2,
						label: '返货单'
					},
					{
						value: 3,
						label: '打样订单'
					},
					{
						value: 4,
						label: '样板订单'
					},
					{
						value: 5,
						label: '展厅订单'
					},
					{
						value: 6,
						label: '补发订单'
					}
				],
				ifsearch: false,
				orderdealer: "",
				companyName: "",
				companyFince: "",

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
											this.companyName = data.name + '-' + data.leaderName
											this.companyFince = '自由金:' + data.balance + ' 保证金:' + data.depositBalance + ' 设计金:' + data.designBalance;
											this.consigneeName = data.leaderName;
											this.consigneeTel = data.leaderTel;
											this.orderlocation = data.address
											this.orderlocationAddress = "[" + data.name + "]" + data.address
											this.orderdealer = data.id
											this.getClient(data.id)

											this.provinceMsg = data.cityId
											this.cityMsg = data.provinceId
											this.districMsg = data.cityAreaId

											this.getpickprovince(this.provinceMsg)

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

				clientdata: [],
				orderclient: "",
				orderdocumentary: "",
				reordertel: '',
				orderdatas: '',
				reorderarea: '',
				reorderlocation: '',
				reordertype: '',
				ordertel: '',
				consigneeName: "",
				consigneeTel: "",
				orderarea: '',
				orderNotes: '',
				orderlocation: '',
				orderlocationAddress: "",
				changekehu: "",
				changedatas: "",
				condition: '',
				customes: [{
						title: '选中',

						key: 'checkBox',
						width: 80,
						render: (h, params) => {
							return h('div', [
								h('Checkbox', {
									props: {
										value: params.row.checkBox
									},
									on: {
										'on-change': (e) => {
											this.customesdata.forEach((items) => { //先取消所有对象的勾选，checkBox设置为false
												this.$set(items, 'checkBox', false)
											});
											this.customesdata[params.index].checkBox = e; //再将勾选的对象的checkBox设置为true
											if(e) {
												//选中的
												this.getaddvalues(params.index, e)
											}
										}
									}
								})
							])
						}
					},
					{
						title: '用户名',

						key: 'name'
					},
					{
						title: '手机号',

						key: 'mobile'
					}
				],
				customesdata: [],
				searchstockdata1: [],
				searchstockdata: [{
						title: '选中',

						key: 'checkBox',
						width: 60,
						render: (h, params) => {
							return h('div', [
								h('Checkbox', {
									props: {
										value: params.row.checkBox
									},
									on: {
										'on-change': (e) => {
											this.searchstockdata1.forEach((items) => { //先取消所有对象的勾选，checkBox设置为false
												this.$set(items, 'checkBox', false)
											});
											this.searchstockdata1[params.index].checkBox = e; //再将勾选的对象的checkBox设置为true
											if(e) {
												//选中的
												this.getaddvalue(params.index, e)
											}
										}
									}
								})
							])
						}
					},
					{
						title: '经销商公司名',

						key: 'name'
					},
					{
						title: '店主名',

						key: 'leaderName'
					}
				],

				//设计详情的数据
				designstatus: false,
				demandstatus: false,
				//订单详情数据
				orderdata: {},
				setorderdata: {}, //修改订单数据
				orderdetail: false,
				itemIndex: 0,
				data3: [],
				data4: [],
				AccountLogList: [],

				AccountLogListHead: [{
						title: '创建时间',
						key: 'created',

					}, {
						title: '原价',
						key: 'originalPrice',

					},

					{
						title: '现价',
						key: 'presentPrice',

					},
					{
						title: '款项',
						key: 'type',

						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '设计费'
							} else if(row.type == 1) {
								text = '货款'
							} else if(row.type == 2) {
								text = '其他'
							}
							return h('Tag', {
								props: {
									type: 'border',
								}
							}, text);
						}
					},
				],

				columns3: [{
						title: '编号',
						key: 'no',

					},
					{
						title: '创建时间',
						key: 'created',

					},
					{
						title: '内容',
						key: 'content',

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
										size: 'small'
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

					},
					{
						title: '设计名称',
						key: 'designName',

					},
					{
						title: '设计电话',
						key: 'designMobile',

					},
					{
						title: '创建时间',
						key: 'created',

					},
					{
						title: '结束时间',
						key: 'endTime',

					},
					{
						title: '设计单状态',
						key: 'status',

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

						fixed: 'right',
						render: (h, params) => {
							return h('div', [

								h('Button', {
									props: {
										type: 'info',
										size: 'small'
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

				//生产拆单
				produceOrderDtosHead: [{
						title: '编号',
						key: 'no',
						width: 200,
						fixed: 'left',
					},
					{
						title: '订单编号',
						key: 'customOrderNo',
						width: 200,
					},

					{
						title: '拆单类型',
						key: 'type',
						width: 200,

						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '柜体'
							} else if(row.type == 1) {
								text = '门板 '
							} else if(row.type == 2) {
								text = '五金'
							}
							return h('div', text);
						}
					},
					{
						title: '拆单状态',
						key: 'series ',
						width: 200,
						render: (h, params) => {

							var state = params.row.state
							var text
							if(state == 0) {
								text = '未开始 '
							} else if(state == 1) {
								text = '生产中'
							} else if(state == 2) {
								text = '已完成 '
							}
							return h('div', text);
						}
					},

					{
						title: '是否付款',
						key: 'type',
						width: 200,

						render: (h, params) => {
							const row = params.row;
							var text
							if(row.pay == 0) {
								text = '未付款'
							} else if(row.pay == 1) {
								text = '已付款 '
							}
							return h('div', text);
						}
					},

					{
						title: '数量',
						key: 'count',
						width: 150,
					},

					{
						title: '描述',
						key: 'notes',
						width: 150,
					},

					{
						title: '创建人',
						key: 'creatorName',
						width: 150,
					},

					{
						title: '创建时间',
						key: 'created',
						width: 200,
					},

					{
						title: '修改人',
						key: 'updateUserName',
						width: 150,
					},

					{
						title: '修改时间',
						key: 'updateTime',
						width: 200,
					},

					/*{
						title: '设计单状态',
						key: 'type',
						width: 200,
						
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
							return h('div', text);
							}
					},*/

					{
						title: '操作',
						key: 'action',
						align: 'center',
						width: 160,
						fixed: 'right',
						render: (h, params) => {
							return h('div', [

								h('Button', {
									props: {
										type: 'info',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {

											this.setIndexs = params.index;
											var data = this.produceOrderDtosData[params.index];
											this.putproduceOrderDtosModel = true;
											this.orderdetail = false,
												this.produceOrderDtosObj = {
													type: data.type.toString(),
													way: data.way.toString(),
													no: data.no,
													amount: data.amount,
													coordinationName: data.coordinationName,
													coordinationBank: data.coordinationBank,
													coordinationAccount: data.coordinationAccount,
													count: data.count,
													notes: data.notes
												}
										}
									}
								}, '编辑'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {

											this.pdels = true;
											this.setIndexs = params.index

										}
									}
								}, '删除')
							]);
						}
					}
				],
				produceOrderDtosData: [],

				//订单产品
				orderProductHead: [{
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
						title: '产品价格',
						key: 'price',
						width: 200,
						render: (h, params) => {
							var price = params.row.price + '';

							if(price == "undefined") {
								price = "0.00"

							} else if(price == 0) {
								price = "0.00"
							} else {
								price = (price.indexOf('.') == -1) ? price + ".00" : price
							}

							this.orderProductData[params.index].price = price

							return h('div', {
								style: {
									textAlign: 'rihght',
									width: '100%'
								},

							}, price)
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
					{
						title: '备注',
						key: 'notes',
						width: 200,
					},

					/*{
						title: '修改人',
						key: 'updateUserName',
						width: 150,
					},

					{
						title: '修改时间',
						key: 'updateTime',
						width: 200,
					},*/

					{
						title: '创建人',
						key: 'creatorName',
						width: 150,
					},

					{
						title: '创建时间',
						key: 'created',
						width: 200,
					},

					{
						title: '操作',
						key: 'action',
						align: 'center',
						width: 160,
						fixed: 'right',
						render: (h, params) => {
							return h('div', [

								h('Button', {
									props: {
										type: 'info',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {

											var id = this.data1[this.setIndex].id

											this.setIndexs = params.index;
											var data = this.orderProductData[params.index];

											var resId = data.id

											this.putorderProductModel = true;
											this.reorderinformation = false,
												this.orderProductObj = {
													"type": (data.type == undefined) ? "" : data.type + "",
													"series": (data.series == undefined) ? "" : data.series + "",
													"color": data.color,
													"door": data.door,
													"notes": data.notes,
													"files": [],
													"price": data.price
												}

											this.orderProductObj.files = data.uploadFiles

											this.uploadpathdata = '/api/f/customorders/' + id + '/3/' + resId + '/files'

										}
									}
								}, '编辑'),

								h('Button', {
									props: {
										type: 'error',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {

											this.pdel = true;
											this.setIndexs = params.index

										}
									}
								}, '删除')
							]);
						}
					}
				],
				orderProductData: [],

				orderProductHeadView: [{
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
					{
						title: '备注',
						key: 'notes',
						width: 200,
					},

					{
						title: '创建人',
						key: 'creatorName',
						width: 150,
					},

					{
						title: '创建时间',
						key: 'created',
						width: 200,
					},

					{
						title: '修改人',
						key: 'updateUserName',
						width: 150,
					},

					{
						title: '修改时间',
						key: 'updateTime',
						width: 200,
					},

				],

				//新增订单产品
				neworderProductModel: false,
				putorderProductModel: false,
				orderProductObj: {},

				//新增生产拆单
				newproduceOrderDtosModel: false,
				putproduceOrderDtosModel: false,
				produceOrderDtosObj: {},

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
				pageSize: 10,
				orderstatus: '',
				customtel: '',
				dealerTel: '',
				ordernum: '',
				serchTime: "",
				searchbeginTime: "",
				searchendTime: "",
				columns1: [{
						title: '订单编号',
						key: 'no',
						
						
					},
					{
						title: '类型',
						key: 'type',					
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '正常订单'
							} else if(row.type == 1) {
								text = '补产订单'
							} else if(row.type == 2) {
								text = '返货单'
							} else if(row.type == 3) {
								text = '打样订单'
							} else if(row.type == 4) {
								text = '样板订单'
							} else if(row.type == 5) {
								text = '展厅订单'
							} else if(row.type == 6) {
								text = '补发订单'
							}
							return h('Tag', {
								props: {
									type: 'border',
								}
							}, text)
						}
					},

					{
						title: '订单状态',
						key: 'status',

						
						ellipsis: true,
						render: (h, params) => {
							const status = params.row.status;
							var texts
							if(status == 0) {

								var texts = '待处理'
							} else if(status == 1) {

								var texts = '设计费待评估'
							} else if(status == 2) {

								var texts = '设计费待确认'
							} else if(status == 3) {

								var texts = '设计费待审核'
							} else if(status == 4) {

								var texts = '待设计'
							} else if(status == 5) {

								var texts = '设计中'
							} else if(status == 6) {

								var texts = '设计待确认'
							} else if(status == 7) {

								var texts = '出厂价待确认'
							} else if(status == 8) {

								var texts = '经销商待确认出厂价'
							} else if(status == 9) {

								var texts = '货款支付审核'
							} else if(status == 10) {

								var texts = '待生产'
							} else if(status == 11) {

								var texts = '生产中'
							} else if(status == 12) {

								var texts = '待入库'
							} else if(status == 13) {

								var texts = '待出库'
							} else if(status == 14) {

								var texts = '待配送'
							} else if(status == 15) {

								var texts = '配送中'
							} else if(status == 16) {

								var texts = '已完成'
							}

							return h('Tag', {
								props: {
									type: 'border',
								}
							}, texts);
						}
					},

					{
						title: '下单经销商',
						key: 'dealerName',
						align: 'left',
						
						ellipsis: true,
					},
					{
						title: '经销商电话',
						key: 'dealerTel',

						
						ellipsis: true,
					},
					{
						title: '客户姓名',
						key: 'customerName',

						
						ellipsis: true,
						render: (h, params) => {

							var customerName = params.row.customerName
							var texts = customerName == "" ? '-' : customerName
							return h('div', texts)
						}
					},
					{
						title: '客户电话',
						key: 'customerTel',

						
						ellipsis: true,
						render: (h, params) => {

							var customerTel = params.row.customerTel
							var texts = customerTel == "" ? '-' : customerTel
							return h('div', texts)
						}
					},
					{
						title: '收货地址',
						key: 'address',

						
						ellipsis: true,

						render: (h, params) => {

							const row = params.row;
							var text

							text = params.row.cityName + params.row.address

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

//					{
//						title: '总金额',
//						key: 'factoryFinalPrice',
//						align: 'center',
//						width: 150,
//						ellipsis: true,
//						render: (h, params) => {
//							var factoryFinalPrice = params.row.factoryFinalPrice;
//
//							if(factoryFinalPrice == 0) {
//								factoryFinalPrice = "-"
//							} else {
//								factoryFinalPrice = (factoryFinalPrice.toString().indexOf('.') == -1) ? factoryFinalPrice + ".00" : factoryFinalPrice
//							}
//
//							return h('div', {
//								style: {
//									width: '100%',
//									textAlign: 'right'
//								},
//
//							}, factoryFinalPrice)
//						}
//					},
//					{
//						title: '订单备注',
//						key: 'notes',
//
//						width: 150,
//						ellipsis: true,
//					},
//
//					{
//						title: '是否设计',
//						key: 'isDesign',
//
//						width: 150,
//						render: (h, params) => {
//							const row = params.row;
//							var text
//							if(row.isDesign == 0) {
//								text = '否'
//							} else if(row.isDesign == 1) {
//								text = '是'
//							}
//							return h('div', text);
//						}
//
//					},
//
//					{
//						title: '设计风格',
//						key: 'designStyle',
//
//						width: 150,
//						ellipsis: true,
//						render: (h, params) => {
//
//							var designStyle = params.row.designStyle
//							var texts = designStyle == "" ? '-' : designStyle
//							return h('div', texts)
//						}
//					}, {
//						title: '面积',
//						key: 'acreage',
//
//						width: 150,
//						ellipsis: true,
//					},
//					/*{
//						title: '经销商地址',
//						key: 'dealerAddress',
//						 
//						width: 150,
//						ellipsis: true,
//					},*/
//
//					{
//						title: '创建时间',
//						key: 'created',
//
//						width: 200,
//						ellipsis: true,
//					},
//					{
//						title: '创建人',
//						key: 'creatorName',
//
//						width: 150,
//						ellipsis: true,
//					},

					{
						title: '操作',
						width: 120,
						align: 'center',
						
						render: (h, params) => {

							const status = params.row.status;

							if(status < 10) {
								return h('div', [
									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											//											disabled: !this.operation.view
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												var id = this.data1[params.index].id
												
												this.$emit('openWindow', ('orderDetails'), ('订单详情页面'), ('6-3'), ('orderDetails'), ('orderDetails'),(id))

												//												this.orderdetails(params.index)
												//												this.itemIndex = 0
											}
										}
									}, '详情'),

//									h('Button', {
//										props: {
//											type: 'info',
//											size: 'small',
//											disabled: !this.operation.edit
//										},
//										style: {
//											marginRight: '5px'
//										},
//										on: {
//											click: () => {
//
//												this.putorderMsg(params.index)
//											}
//										}
//									}, '编辑'),
//
//									h('Button', {
//										props: {
//											type: 'primary',
//											size: 'small',
//											disabled: !this.operation.edit
//										},
//										style: {
//											marginRight: '5px'
//										},
//										on: {
//											click: () => {
//												this.repairinformation(params.index)
//
//											}
//										}
//									}, '产品')
							]);
							} else {
								return h('div', [
									h('Button', {
										props: {
											type: 'info',
											size: 'small',
											//											disabled: !this.operation.view
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												
												this.$emit('openWindow', ('orderDetails'), ('订单详情页面'), ('6-3'), ('orderDetails'), ('orderDetails'),(this.data1[params.index].id))
												//

//												var id =
//
//												this.$router.push({
//													name: '',
//													query: {
//														id: id,
//
//													}
//												})
												//												this.orderdetails(params.index)
												//												this.itemIndex = 0
											}
										}
									}, '详情'),

								]);
							}

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
				orderadd: false,
				searchdealername: '',
				salemans: '',
				phones: '',
				resid: '',
				reindex: '',
				operation: {},
				newClientModel: false,
				objmsg: {
					name: "",
					mobile: "",
					address: "",
					community: "",
					companyId: "",
				},

				provinceData: [], //省份数据
				cityData: [], //城市数据
				cityCache: {},
				districData: [], //省/县数据
				districtCache: {},
				provinceMsg: "", //省份选中数据
				cityMsg: "", //城市选中数据
				districMsg: "", //省/县选中数据

				uploadpathdata: '',
				defaultList: [],
				imgName: '',
				visible: false,
				uparry: {
					multipartFileList: []
				},

				provinceData: [], //省份数据
				cityData: [], //城市数据
				cityCache: {},
				districData: [], //省/县数据
				districtCache: {},
				provinceMsg: "", //省份选中数据
				cityMsg: "", //城市选中数据
				districMsg: "", //省/县选中数据
				districMsgcache: "",
				sitelatlng: {
					lng: "",
					lat: "",
				},

				setIndex: "",
				setIndexs: "",
				orderProducts: [],
				produceOrderDtos: [],
				pdel: false,
				pdels: false,
				tabname: "name1",
				orderTime: '',
			};
		},
		methods: {
			handleChange(data) {
				this.orderTime = data;
			},

			handleView(path) {
				this.bigimg = path;
				this.visible = true;
			},

			handleRemove: function(index) {
				var fileId = this.orderProductObj.files[index].id
				var id = this.data1[this.setIndex].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + id + '/files/' + fileId,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.orderProductObj.files.splice(index, 1)

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			handleSuccess(res, file) {

				var data = res.data

				for(var i = 0; i < data.length; i++) {
					this.orderProductObj.files.unshift(data[i])
					//					/this.orderProductData[this.setIndexs].uploadFiles.push(data[i])

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

			// 查看大图
			bigphoto(index) {
				this.visible = true;
				this.bigimg = this.orderdatas[index].path;
			},
			guanbi_buts() {
				this.visible = false;

			},
			bigphotos(index) {
				this.visibles = true;
				this.bigimgs = this.demandfilearr[index].path;
			},
			bigphotoss(index) {
				this.visibless = true;
				this.bigimgss = this.designFilearr[index].path;
			},
			resok() {
				this.resorders();
			},
			rescancel() {

			},

			//获取订单详情
			putorderMsg: function(index) {
				this.setIndex = index
				this.resid = this.data1[index].id
				this.reindex = index

				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/' + that.data1[index].id + '/info'
				}).then(res => {
					if(res != false) {
						that.putorderModel = true
						that.setorderdata = res.data.data.customOrder
						var data = res.data.data

						that.provinceMsg = data.customOrder.cityId
						that.cityMsg = data.customOrder.provinceId
						that.districMsg = data.customOrder.cityAreaId

						that.getpickprovince(that.provinceMsg)

					}
				})

			},

			repairinformation(index) {
				this.setIndex = index
				this.resid = this.data1[index].id
				this.reindex = index

				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/' + that.data1[index].id + '/info'
				}).then(res => {
					if(res != false) {
						that.data3 = res.data.data.orderDemand
						that.setorderdata = res.data.data.customOrder

						/*that.orderdatas = res.data.data.orderContractFiles
						that.data4 = res.data.data.orderDesign
						that.AccountLogList = res.data.data.orderAccountLogList*/
						that.orderProductData = res.data.data.orderProducts
						that.reorderinformation = true;
						/*that.produceOrderDtosData = res.data.data.produceOrderDtos*/

					}
				})
				/*this.restyles = this.data1[index].designStyle
				this.restyler = this.data1[index].designer
				this.regoman = this.data1[index].merchandiser
				this.reorderlocation = this.data1[index].address;
				this.reorderarea = this.data1[index].acreage
				this.reordertel = this.data1[index].customerTel
				this.reordertype = this.data1[index].type
				this.renote = this.data1[index].notes
				this.estimatedDeliveryDate = this.data1[index].estimatedDeliveryDate
				this.deliveryDate = this.data1[index].deliveryDate
				this.redesignfee = this.data1[index].designFee
				this.remarketprice = this.data1[index].marketPrice
				this.rediscount = this.data1[index].discounts
				this.refactorydiscount = this.data1[index].factoryDiscounts
				this.refactorydiscountend = this.data1[index].factoryFinalPrice
				this.reoutprice = this.data1[index].factoryPrice*/
			},

			//修改订单时间

			getdeliveryDate: function(val) {
				this.setorderdata.deliveryDate = val
			},

			getestimatedDeliveryDate: function(val) {
				this.setorderdata.estimatedDeliveryDate = val
			},

			//修改订单信息
			resorders() {

				var setorderdata = this.setorderdata
				var address = setorderdata.address
				var type = setorderdata.type
				var acreage = setorderdata.acreage
				var customerTel = setorderdata.customerTel
				var notes = setorderdata.notes
				var deliveryDate = setorderdata.deliveryDate
				var estimatedDeliveryDate = setorderdata.estimatedDeliveryDate

				var consigneeName = setorderdata.consigneeName == undefined ? "" : setorderdata.consigneeName
				var consigneeTel = setorderdata.consigneeTel == undefined ? "" : setorderdata.consigneeTel

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				if(consigneeName == "" || consigneeName == null || consigneeName.trim().length == 0) {
					this.$Message.error('收货人姓名不能为空！');
					return false;
				} else if(consigneeTel.trim().length > 0 && tel.test(consigneeTel) == false && telephone.test(consigneeTel) == false && phone.test(consigneeTel) == false) {
					this.$Message.error('收货人电话格式不正确或为空！');
					return false;
				} else if(this.districMsg == "" || this.districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');
					return false;
				} else if(estimatedDeliveryDate == "" || estimatedDeliveryDate == null) {
					this.$Message.error('预计交货日期不能为空！');
					return false;
				}

				let that = this;

				/*if(!this.estimatedDeliveryDate == "") {
					var y = this.estimatedDeliveryDate.getFullYear();
					var m = this.estimatedDeliveryDate.getMonth() + 1;
					var d = this.estimatedDeliveryDate.getDate();
					this.estimatedDeliveryDates = y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d)
				}
				if(!this.deliveryDate == "") {
					var sy = this.deliveryDate.getFullYear()
					var sm = this.deliveryDate.getMonth() + 1
					var sd = this.deliveryDate.getDate();
					this.deliveryDates = sy + "-" + (sm < 10 ? "0" + sm : sm) + "-" + (sd < 10 ? "0" + sd : sd)
				}
*/

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/' + that.resid,
					data: {
						address: address,
						acreage: acreage,
						consigneeName: consigneeName,
						consigneeTel: consigneeTel,
						type: type,
						notes: notes,
						/*	deliveryDate: (deliveryDate == "") ? undefined : deliveryDate + ' 00:00:00',*/
						estimatedDeliveryDate: (estimatedDeliveryDate == "") ? undefined : estimatedDeliveryDate,
						"cityAreaId": this.districMsg
					}
				}).then(res => {

					setTimeout(msg, 100);

					if(res != false) {

						/*	that.data1[that.reindex].address = address
							that.data1[that.reindex].acreage = acreage
							that.data1[that.reindex].customerTel = customerTel
							that.data1[that.reindex].type = type
							that.data1[that.reindex].notes = notes
							that.data1[that.reindex].deliveryDate = deliveryDate
							that.data1[that.reindex].estimatedDeliveryDate = estimatedDeliveryDate
							*/

						that.$Message.success('修改完成');
						that.getorderdatas()
						that.putorderModel = false
					}
				})
			},
			//添加模态框
			openmodel() {
				this.$router.push({
					name: '',
					
				})
				
				this.$emit('openWindow', ('newlyOrder'), ('订单详情页面'), ('6-1'), ('newlyOrder'), ('newlyOrder'))
				return false;
				this.orderadd = true;
				this.orderisDesign = "0";
				this.changekehu = "";
				this.changedatas = [];
				this.orderdealer = "",
					this.clientdata = [],
					this.orderclient = ""
				this.orderlocation = "";
				this.orderarea = "";
				this.orderNotes = "";
				this.salemans = "";
				this.ordertype = "";
				this.phones = ""
				this.orderdesignFee = ""
				this.orderfactoryPri = ""
				this.orderProducts = []
				this.produceOrderDtos = []
				this.orderdealer = ""
				this.orderclient = ""
				this.orderdocumentary = ""
				this.ordertel = ""
				this.consigneeTel = ""
				this.consigneeName = ""
				this.companyName = ""
				this.companyFince = ""
				this.orderTime = ""
				this.orderlocationAddress = ""

				this.provinceMsg = "";
				this.cityMsg = "";
				this.districMsg = "";
				this.cityData = [];
				this.districData = []

			},
			orderaddcancel() {

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

						//that.pickdistrict(that.cityData[0].id, 0)

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.cityData = cityshow
					//this.pickdistrict(this.cityData[0].id, 0)

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

			//选择经销商时查询市级数据

			getpickprovince: function(id) {

				this.cityData = []
				this.districData = []
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

						that.getpickdistrict(that.cityMsg)

					}).catch(function(err) {
						console.log(err)

					})

				} else {

					this.cityData = cityshow
					this.getpickdistrict(that.cityMsg)

				}
			},

			//选择经销商时查询县级数据

			getpickdistrict: function(id) {
				/*	this.districMsg = ""
					this.districMsgcache = ""*/
				this.districData = []

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

			//根据经销商查询客户
			getClient: function(cid) {
				var that = this
				that.orderclient = ""
				that.orderdocumentary = ""
				that.ordertel = ""

				for(var i = 0; i < this.companyData.length; i++) {
					if(cid == this.companyData[i].id) {
						this.consigneeName = this.companyData[i].leaderName;
						this.consigneeTel = this.companyData[i].leaderTel;
						this.orderlocation = this.companyData[i].address
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
					that.companyModel = false

				}).catch(function(err) {
					setTimeout(msg, 100);

					that.$Message.error('出错了，请稍后重试！');

				})
			},

			getdocumentary: function(cid) {

				for(var i = 0; i < this.clientdata.length; i++) {
					if(cid == this.clientdata[i].id) {

						this.ordertel = this.clientdata[i].mobile
						this.orderdocumentary = this.clientdata[i].customerManagerName
					}
				}

			},

			newClient: function() {

				if(this.orderdealer == "" || this.orderdealer == null) {
					this.$Message.error('请选择经销商');
					return false;
				}

				this.newClientModel = true;
				this.orderadd = false,
					this.objmsg = {
						name: "",
						mobile: "",
						address: "",
						community: "",
						companyId: "",
					}

				this.provinceMsg = "";
				this.cityMsg = "";
				this.districMsg = "";
				this.cityData = [];
				this.districData = []
			},

			pushclient: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var objmsg = this.objmsg

				var name = objmsg.name
				var mobile = objmsg.mobile
				var address = objmsg.address
				var community = objmsg.community

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('客户姓名不能为空！');
					return false;
				} else if(name.trim().length > 10) {

					this.$Message.error('客户姓名长度不能超过10个！');
					return false;
				} else if(mobile == "" || mobile == null || mobile.trim().length == 0) {

					this.$Message.error('客户电话不能为空！');
					return false;
				} else if(tel.test(mobile) == false || telephone.test(mobile) || phone.test(mobile)) {

					this.$Message.error('客户电话格式不正确！');
					return false;

				} else if(this.districMsg == "" || this.districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');
					return false;
				} else if(address == "" || address == null || address.trim().length == 0) {

					this.$Message.error('客户详细地址不能为空！');
					return false;
				}
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'post',
					url: '/api/f/customers',

					data: {
						"companyId": this.orderdealer,
						"mobile": mobile,
						"name": name,
						"address": address,
						"community": community,
						"cityAreaId": this.districMsg,

					}

				}).then(function(res) {
					setTimeout(msg, 100);

					var verify = [{
							"name": "companyId",
							"note": "物流公司"
						},
						{
							"name": "mobile",
							"note": "客户手机号 "
						},
						{
							"name": "name",
							"note": "客户姓名 "
						},
						{
							"name": "address",
							"note": "客户详细地址"
						},
						{
							"name": "community",
							"note": "小区名称 "
						}, {
							"name": "cityAreaId",
							"note": "客户地址"
						},
					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					var data = res.data.data

					that.clientdata.push(data)
					that.ordertel = data.mobile
					that.orderclient = data.id

					that.newClientModel = false;
					that.orderadd = true,

						that.$Message.success("添加成功")
					that.objmsg = {
						name: "",
						mobile: "",
						address: "",
						community: "",
						companyId: "",
					}

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			orderaddok() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/
				// this.orderclient == "" || this.orderclient == null ||
				if(this.orderdealer == "" || this.orderdealer == null || this.orderlocation ==
					"" || this.orderlocation == null || this.ordertype === "" || this.ordertype == null) {
					this.$Message.info('请完善订单信息');
					return false;
				} else if(this.consigneeName == "" || this.consigneeName == null || this.consigneeName.trim().length == 0) {
					this.$Message.info('请输入收货人姓名');
					return false;
				} else if(this.consigneeTel == "" || this.consigneeTel == null || this.consigneeTel.trim().length == 0) {
					this.$Message.info('请输入收货人电话');
					return false;
				} else if(tel.test(this.consigneeTel) == false && telephone.test(this.consigneeTel) == false && phone.test(this.consigneeTel) == false) {
					this.$Message.info('收货人联系方式格式不正确');
					return false;
				} else if(this.orderTime == "" || this.orderTime == null || this.orderTime.trim().length == 0) {
					this.$Message.info('请输入下单时间');
					return false;
				} else if(this.districMsg == "" || this.districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');

					return false;
				} else if(this.orderlocationAddress == "" || this.orderlocationAddress == null || this.orderlocationAddress.trim().length == 0) {

					this.$Message.error('请输入详细收货地址！');
					return false;
				} else {

					/*for(var i = 0; i < this.orderProducts.length; i++) {
						var data = this.orderProducts[i];
						var type = data.type
						var series = data.series
						var color = data.color
						var door = data.door

						if(type == "" || type == null) {
							this.$Message.error('第' + (i + 1) + '个订单产品类型不能为空');
							return false;
						} else if(series == "" || series == null) {
							this.$Message.error('第' + (i + 1) + '个订单产品系列不能为空');
							return false;
						} else if(color == "" || color == null) {
							this.$Message.error('第' + (i + 1) + '个订单产品颜色不能为空');
							return false;
						} else if(door == "" || door == null) {
							this.$Message.error('第' + (i + 1) + '个订单产品门型不能为空');
							return false;
						}

					}

					for(var i = 0; i < this.produceOrderDtos.length; i++) {
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

					}*/

					/*console.log(this.orderProducts,this.produceOrderDtos)*/
					this.addorder()

				}
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
				this.tabname = "name1"
				this.setIndex = index
				this.useid = this.data1[index].id

				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/' + that.data1[index].id + '/info'
				}).then(res => {
					if(res != false) {
						that.orderdetail = true
						that.data3 = res.data.data.orderDemand
						that.orderdata = res.data.data.customOrder
						that.orderdatas = res.data.data.orderContractFiles
						that.data4 = res.data.data.orderDesign
						that.AccountLogList = res.data.data.orderAccountLogList
						that.orderProductData = res.data.data.orderProducts
						that.produceOrderDtosData = res.data.data.produceOrderDtos

						/*if(res.data.data.customOrder.type == 0) {
							res.data.data.orderDto.typename = "正常订单"
						} else if(res.data.data.orderDto.type == 1) {
							res.data.data.orderDto.type = "补产订单"
						} else if(res.data.data.orderDto.type == 2) {
							res.data.data.orderDto.type = "返货单"
						} else if(res.data.data.orderDto.type == 3) {
							res.data.data.orderDto.type = "打样订单"
						} else if(res.data.data.orderDto.type == 4) {
							res.data.data.orderDto.type = "样板订单"
						} else if(res.data.data.orderDto.type == 5) {
							res.data.data.orderDto.type = "展示厅订单"
						} else if(res.data.data.orderDto.type == 6) {
							res.data.data.orderDto.type = "补发订单"
						}
					}*/
						/*if(res.data.data.orderDto.status == 0) {
							res.data.data.orderDto.status = "待处理"
						} else if(res.data.data.orderDto.status == 1) {
							res.data.data.orderDto.status = "设计费待评估"
						} else if(res.data.data.orderDto.status == 2) {
							res.data.data.orderDto.status = "设计费待确认"
						} else if(res.data.data.orderDto.status == 3) {
							res.data.data.orderDto.status = "设计费待审核"
						} else if(res.data.data.orderDto.status == 4) {
							res.data.data.orderDto.status = "待设计"
						} else if(res.data.data.orderDto.status == 5) {
							res.data.data.orderDto.status = "设计中"
						} else if(res.data.data.orderDto.status == 6) {
							res.data.data.orderDto.status = "设计待确认"
						} else if(res.data.data.orderDto.status == 7) {
							res.data.data.orderDto.status = "出厂价待确认"
						} else if(res.data.data.orderDto.status == 8) {
							res.data.data.orderDto.status = "经销商待确认出厂价"
						} else if(res.data.data.orderDto.status == 9) {
							res.data.data.orderDto.status = "货款支付审核"
						} else if(res.data.data.orderDto.status == 10) {
							res.data.data.orderDto.status = "待生产"
						} else if(res.data.data.orderDto.status == 11) {
							res.data.data.orderDto.status = "生产中"
						} else if(res.data.data.orderDto.status == 12) {
							res.data.data.orderDto.status = "待入库"
						} else if(res.data.data.orderDto.status == 13) {
							res.data.data.orderDto.status = "待出库"
						} else if(res.data.data.orderDto.status == 14) {
							res.data.data.orderDto.status = "待配送"
						} else if(res.data.data.orderDto.status == 15) {
							res.data.data.orderDto.status = "配送中'"
						} else if(res.data.data.orderDto.status == 16) {
							res.data.data.orderDto.status = "已完成"
						}*/
					}
				})

			},
			//获取订单详情数据
			changestatu(index) {
				this.changestatus = true;
				this.changestatusindex = index;
				this.changeorderstatus = this.data1[index].status
			},
			ok() {
				this.repairorderstatus();
			},
			cancel() {
				this.$Message.info('Clicked cancel');
			},
			changepage(index) {
				if(this.ifsearch == true) {
					let that = this;
					this.currents = index;
					this.getorderdatas();
				} else {
					this.ordernum = ""
					this.customtel = ""
					this.dealerTel = ""
					this.orderstatus = ""
					this.currents = index;
					this.getorderdatas();
				}
			},

			//获取检索时间

			getTime: function(val) {

				this.serchTime = val

				this.searchbeginTime = val[0]

				var setendtime = val[1]
				var day = setendtime.substr(setendtime.length - 2, 2)
				var ym = setendtime.substr(0, 8)
				this.searchendTime = ym + (parseInt(day) + 1)
			},

			//搜索订单
			serchorder() {
				this.ifsearch = true;
				this.currents = 1;
				this.getorderdatas();
			},

			newData: function() {
				this.ordernum = "";
				this.customtel = "";
				this.dealerTel = '';
				this.orderstatus = "";
				this.currents = 1;
				this.serchTime = "",
					this.searchbeginTime = "",
					this.searchendTime = "",
					this.getorderdatas();
			},
			//加载数据
			getorderdatas() {

				/*	var beginTime = (this.searchbeginTime == "" ? undefined : this.searchbeginTime)
					var endTime = (this.searchendTime == "" ? undefined : this.searchendTime)
					
					var orderNo = (this.ordernum.trim().length==0 ? undefined : this.ordernum)				
					var dealerTel = (this.dealerTel.trim().length==0 ? undefined : this.dealerTel)
					var customtel = (this.customtel.trim().length==0 ? undefined : this.customtel)*/

				var orderstatus = (this.orderstatus == undefined ? "" : this.orderstatus);
				orderstatus = orderstatus + ''

				var orderNo = this.ordernum;
				var dealerTel = this.dealerTel;
				var customtel = this.customtel;
				var beginTime = this.searchbeginTime;
				var endTime = this.searchendTime;

				var path = ""

				if(orderNo != "" && orderNo != null && orderNo.trim().length != 0) {
					path += "no=" + orderNo + "&"
				}

				if(dealerTel != "" && dealerTel != null && dealerTel.trim().length != 0) {
					path += "dealerTel=" + dealerTel + "&"
				}

				if(customtel != "" && customtel != null && customtel.trim().length != 0) {
					path += "customerTel=" + customtel + "&"
				}

				if(orderstatus != "" && orderstatus != null && orderstatus.trim().length != 0) {
					path += "status=" + orderstatus + "&"
				}

				if(beginTime != "" && beginTime != null) {
					path += "startTime=" + beginTime + "&"
				}

				if(endTime != "" && endTime != null) {
					path += "endTime=" + endTime + "&"
				}

				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders?' + path + 'pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {
					if(res != false) {
						that.data1 = res.data.data;
						that.pageSize = res.data.pagination.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total;
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
					url: '/api/f/customorders/' + that.data1[that.changestatusindex].id + '/' + that.changeorderstatus
				}).then(res => {
					if(res != false) {

					}
				})
			},

			//查询可用经销商
			getdealerdata: function() {

				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies?status=1&pageNum=' + this.companypageIndex + '&pageSize=' + this.companypageSize,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.companypageTotal = res.data.pagination.total
					var data = res.data.data
					that.companyData = data.companyList

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//
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
				this.getdealerdata()
			},

			//检索经销商数据
			companysearch: function() {
				var searchobj = this.companysearchObj
				var name = searchobj.name
				var mobile = searchobj.mobile
				var no = searchobj.no
				var type = searchobj.type

				if(name.trim().length == 0 && mobile.trim().length == 0 && no.length == 0 && !type == true) {
					this.getdealerdata();
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
					this.getdealerdata()

				}
			},

			/* 查询经销商信息 */
			/* 	getdealerdata() {
					let that = this;
					this.axios({
						method: 'get',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/dealers?name='+this.searchdealername
					}).then(res => {
						if (res != false) {
							this.searchstockdata1=res.data.data.companyList
						}
					})
				}, */
			//查询客户信息
			getcustomersdata() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customers?condition=' + this.condition
				}).then(res => {
					if(res != false) {
						that.customesdata = res.data.data
					}
				})
			},
			//搜索经销商信息
			serchdatas() {
				this.getcustomersdata()
			},
			getaddvalue(index, e) {
				this.changedatas = this.searchstockdata1[index].id;
				this.getcustomersdata();
			},
			getaddvalues(index, e) {
				this.changekehu = this.customesdata[index].id
				this.changedatas = this.customesdata[index].companyId
				this.salemans = this.customesdata[index].customerManager
				this.phones = this.customesdata[index].mobile
			},
			//新建订单
			addorder() {

				/*var produceOrderDtos = []

				for(var i = 0; i < this.produceOrderDtos.length; i++) {

					var data = this.produceOrderDtos[i]

					var obj = {
						type: (data.type == "") ? undefined : data.type,
						way: (data.way == "") ? undefined : data.way,
						no: (data.no == "") ? undefined : data.no,
						amount: (data.amount == "") ? undefined : data.amount,
						coordinationName: (data.coordinationName == "") ? undefined : data.coordinationName,
						coordinationBank: (data.coordinationBank == "") ? undefined : data.coordinationBank,
						coordinationAccount: (data.coordinationAccount == "") ? undefined : data.coordinationAccount,
						count: (data.count == "") ? undefined : data.count,
						notes: (data.notes == "") ? undefined : data.notes
					}
					produceOrderDtos.push(obj)
				}*/

				var newDate = new Date()

				var year = newDate.getFullYear();
				var month = newDate.getMonth() < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
				var day = newDate.getDate() < 10 ? +(newDate.getDate() + 15) : (newDate.getDate() + 15);

				var time = year + '-' + month + '-' + day + ' 00:00:00'

				let that = this;

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.axios({
					method: 'post',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders',
					data: {
						customOrder: {
							customerId: (that.orderclient == "") ? undefined : that.orderclient,
							companyId: that.orderdealer,
							address: that.orderlocationAddress,
							acreage: that.orderarea,
							notes: that.orderNotes,
							consigneeTel: this.consigneeTel,
							consigneeName: this.consigneeName,
							/*salesman: this.salemans,*/
							type: that.ordertype,
							customerTel: that.ordertel,
							isDesign: that.orderisDesign,
							orderTime: that.orderTime,
							estimatedDeliveryDate: time,
							"cityAreaId": this.districMsg
							/*designFee: that.orderdesignFee,
							factoryPrice: that.orderfactoryPrice*/
						},

					}
				}).then(res => {

					setTimeout(msg, 100);

					if(res != false) {
						that.data1.unshift(res.data.data);
						that.$Message.info('订单添加成功');
						that.orderadd = false;
					}
				})
			},

			//追加订单产品输入条目
			addProduct: function() {
				var obj = {
					type: "",
					series: "",
					color: "",
					door: "",
					notes: ""
				}

				this.orderProducts.unshift(obj)
			},

			delProduct: function(index) {
				this.orderProducts.splice(index, 1)
			},

			//追加生产订单输入条目

			addOrderDtos: function() {
				var obj = {
					type: "",
					way: "",
					no: "",
					coordinationName: "",
					coordinationBank: "",
					amount: "",
					count: "",
					completionTime: "",
					notes: ""
				}

				this.produceOrderDtos.unshift(obj)
			},

			getcompletionTime: function(val) {

				this.produceOrderDtos[this.setIndex].completionTime = val
			},

			delOrderDtos: function(index) {
				this.produceOrderDtos.splice(index, 1)
			},

			neworderProduct: function() {

				this.reorderinformation = false
				this.neworderProductModel = true
				this.orderProductObj = {
					"type": "",
					"series": "",
					"color": "",
					"door": "",
					"price": "",
					"notes": "",

				}
			},

			sureAddorderProduct: function() {

				var id = this.data1[this.setIndex].id

				var orderProductObj = this.orderProductObj

				var type = orderProductObj.type
				var series = orderProductObj.series
				var color = orderProductObj.color
				var door = orderProductObj.door
				var notes = orderProductObj.notes
				var price = orderProductObj.price

				var num = /^([0-9])+(.[0-9]{2})?$/

				if(type == "" || type == null) {
					this.$Message.error('产品类型不能为空！');
					return false;
				} else if(series == "" && type == 0) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(series == "" && type == 1) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(color == "" && type == 0) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(color == "" && type == 1) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(door == "" && type == 0) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(door == "" && type == 1) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(price == "" || price == null || price.trim().length == 0) {
					this.$Message.error('订单产品价格不能为空！');
					return false
				} else if(num.test(price) == false) {
					this.$Message.error('订单产品价格只能是数字,且只能是小数点后两位！');
					return false
				} else if(parseInt(price) >= 100000000) {
					this.$Message.error('订单产品价格数量过长！');
					return false
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this

					this.axios({
						method: 'post',
						url: '/api/f/customorders/' + id + '/products',

						data: {
							"type": type,
							"series": (series == "") ? undefined : series,
							"color": (color == "") ? undefined : color,
							"door": (door == "") ? undefined : door,
							"notes": notes,
							"price": price
						}

					}).then(function(res) {

						var verify = [{
								"name": "type",
								"note": "产品类型"
							},
							{
								"name": "series",
								"note": "产品系列 "
							},
							{
								"name": "color",
								"note": "产品颜色"
							},
							{
								"name": "door",
								"note": "门型 "
							},
							{
								"name": "notes",
								"note": "描述"
							},

							{
								"name": "price",
								"note": "产品价格"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data
						data.uploadFiles = []
						that.orderProductData.push(data)
						that.$Message.success("添加成功")

						that.neworderProductModel = false
						that.reorderinformation = true

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.neworderProductModel = false
						that.reorderinformation = true
					})

				}
			},

			sureputorderProduct: function() {
				var id = this.data1[this.setIndex].id
				var pid = this.orderProductData[this.setIndexs].id
				var orderProductObj = this.orderProductObj

				var type = orderProductObj.type
				var series = orderProductObj.series
				var color = orderProductObj.color
				var door = orderProductObj.door
				var notes = orderProductObj.notes
				var price = orderProductObj.price

				var num = /^([0-9])+(.[0-9]{2})?$/

				if(type == "" || type == null) {
					this.$Message.error('产品类型不能为空！');
					return false;
				} else if(series == "" && type == 0) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(series == "" && type == 1) {
					this.$Message.error('产品系列不能为空！');
					return false;
				} else if(color == "" && type == 0) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(color == "" && type == 1) {
					this.$Message.error('产品颜色不能为空！');
					return false;
				} else if(door == "" && type == 0) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(door == "" && type == 1) {
					this.$Message.error('产品门型不能为空！');
					return false;
				} else if(price == "" || price == null || price.trim().length == 0) {
					this.$Message.error('订单产品价格不能为空！');
					return false
				} else if(num.test(price) == false) {
					this.$Message.error('订单产品价格只能是数字,且只能是小数点后两位！');
					return false
				} else if(parseInt(price) >= 100000000) {
					this.$Message.error('订单产品价格数量过长！');
					return false
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this

					this.axios({
						method: 'put',
						url: '/api/f/customorders/' + id + '/products/' + pid,

						data: {
							"type": type,
							"series": (series == "") ? undefined : series,
							"color": (color == "") ? undefined : color,
							"door": (door == "") ? undefined : door,
							"notes": notes,
							"price": price
						}

					}).then(function(res) {

						var verify = [{
								"name": "type",
								"note": "产品类型"
							},
							{
								"name": "series",
								"note": "产品系列 "
							},
							{
								"name": "color",
								"note": "产品颜色"
							},
							{
								"name": "door",
								"note": "门型 "
							},
							{
								"name": "notes",
								"note": "描述"
							},

							{
								"name": "price",
								"note": "产品价格"
							},

						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}
						var data = res.data.data

						that.orderProductData[that.setIndexs].type = data.type
						that.orderProductData[that.setIndexs].series = data.series
						that.orderProductData[that.setIndexs].color = data.color
						that.orderProductData[that.setIndexs].door = data.door
						that.orderProductData[that.setIndexs].notes = data.notes
						that.orderProductData[that.setIndexs].price = data.price

						that.$Message.success("修改成功");
						that.serchorder();
						that.putorderProductModel = false
						that.reorderinformation = true

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.putorderProductModel = false
						that.reorderinformation = true
					})

				}
			},

			//删除订单产品

			suredelorderProduct: function() {
				var id = this.data1[this.setIndex].id
				var pid = this.orderProductData[this.setIndexs].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + id + '/products/' + pid,

				}).then(function(res) {

					var verify = [{
							"name": "type",
							"note": "产品类型"
						},
						{
							"name": "series",
							"note": "产品系列 "
						},
						{
							"name": "color",
							"note": "产品颜色"
						},
						{
							"name": "door",
							"note": "门型 "
						},
						{
							"name": "notes",
							"note": "描述"
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						that.pdel = false
						return false
					}
					var data = res.data.data
					that.orderProductData.splice(that.setIndexs, 1)
					that.$Message.success("删除成功")
					that.pdel = false

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.pdel = false
				})

			},

			produceOrderDtosModel: function() {
				this.orderdetail = false;
				this.newproduceOrderDtosModel = true
				this.produceOrderDtosObj = {}
			},

			//新增拆单信息

			sureAddproduceOrderDtos: function() {
				var id = this.data1[this.setIndex].id

				var produceOrderDtosObj = this.produceOrderDtosObj;
				var way = produceOrderDtosObj.way;
				var no = produceOrderDtosObj.no;
				var coordinationName = produceOrderDtosObj.coordinationName;
				var coordinationBank = produceOrderDtosObj.coordinationBank;
				var coordinationAccount = produceOrderDtosObj.coordinationAccount
				var amount = produceOrderDtosObj.amount;
				var count = produceOrderDtosObj.count;
				var completionTime = produceOrderDtosObj.completionTime;
				var notes = produceOrderDtosObj.notes;
				var type = produceOrderDtosObj.type;

				if(way == "1") {

					if(type == "" || type == null) {
						this.$Message.error('拆单类型不能为空');
						return false;
					} else if(no == "" || no == null) {
						this.$Message.error('拆单编号不能为空');
						return false;
					} else if(amount == "" || amount == null) {
						this.$Message.error('外协金额不能为空');
						return false;
					} else if(coordinationName == "" || coordinationName == null) {
						this.$Message.error('外协厂家名称不能为空');
						return false;
					} else if(coordinationAccount == "" || coordinationAccount == null) {
						this.$Message.error('外协厂家开账户不能为空');
						return false;
					} else if(coordinationBank == "" || coordinationBank == null) {
						this.$Message.error('外协厂家开户行不能为空');
						return false;
					} else if(count == "" || count == null) {
						this.$Message.error('数量不能为空');
						return false;
					}

				} else {
					if(type == "" || type == null) {
						this.$Message.error('拆单类型不能为空');
						return false;
					} else if(way == "" || way == null) {
						this.$Message.error('生产方式不能为空');
						return false;
					} else if(no == "" || no == null) {
						this.$Message.error('拆单编号不能为空');
						return false;
					} else if(count == "" || count == null) {
						this.$Message.error('个数量不能为空');
						return false;
					}

				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'post',
					url: '/api/f/customorders/' + id + '/produces',

					data: {
						type: (type == "") ? undefined : type,
						way: (way == "") ? undefined : way,
						no: (no == "") ? undefined : no,
						amount: (amount == "") ? undefined : amount,
						coordinationName: (coordinationName == "") ? undefined : coordinationName,
						coordinationBank: (coordinationBank == "") ? undefined : coordinationBank,
						coordinationAccount: (coordinationAccount == "") ? undefined : coordinationAccount,
						count: (count == "") ? undefined : count,
						notes: (notes == "") ? undefined : notes
					}

				}).then(function(res) {

					var verify = [

						{
							"name": "way",
							"note": "拆单类型"
						}, {
							"name": "type",
							"note": "生产方式"
						},
						{
							"name": "no",
							"note": "拆单编号 "
						},
						{
							"name": "coordinationName",
							"note": "外协厂家"
						},
						{
							"name": "coordinationBank",
							"note": "银行账户"
						},

						{
							"name": "coordinationAccount",
							"note": "开户行"
						},
						{
							"name": "count",
							"note": "数量"
						},
						{
							"name": "notes",
							"note": "描述"
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}
					var data = res.data.data

					that.produceOrderDtosData.push(data)
					that.$Message.success("添加成功")

					that.newproduceOrderDtosModel = false
					that.orderdetail = true

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.newproduceOrderDtosModel = false
					that.orderdetail = true
				})

			},

			surePutproduceOrderDtos: function() {
				var id = this.data1[this.setIndex].id
				var pid = this.produceOrderDtosData[this.setIndexs].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + id + '/produces/' + pid,

					data: {
						type: (type == "") ? undefined : type,
						way: (way == "") ? undefined : way,
						no: (no == "") ? undefined : no,
						amount: (amount == "") ? undefined : amount,
						coordinationName: (coordinationName == "") ? undefined : coordinationName,
						coordinationBank: (coordinationBank == "") ? undefined : coordinationBank,
						coordinationAccount: (coordinationAccount == "") ? undefined : coordinationAccount,
						count: (count == "") ? undefined : count,
						notes: (notes == "") ? undefined : notes
					}

				}).then(function(res) {

					var verify = [

						{
							"name": "way",
							"note": "拆单类型"
						}, {
							"name": "type",
							"note": "生产方式"
						},
						{
							"name": "no",
							"note": "拆单编号 "
						},
						{
							"name": "coordinationName",
							"note": "外协厂家"
						},
						{
							"name": "coordinationBank",
							"note": "银行账户"
						},

						{
							"name": "coordinationAccount",
							"note": "开户行"
						},
						{
							"name": "count",
							"note": "数量"
						},
						{
							"name": "notes",
							"note": "描述"
						},

					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}
					var data = res.data.data

					that.produceOrderDtosData.splice(that.setIndexs, 1)

					that.$Message.success("删除成功")

					that.pdels = false
					that.orderdetail = true

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.pdels = false
					that.orderdetail = true
				})

			},

			suredelproduceOrderDtos: function() {

			},

			getOrderType: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/basecodes?type=orderProductType',

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.orderType = data
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			getOrderSeries: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/basecodes?type=orderProductSeries',

				}).then(function(res) {
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data
					that.orderSeries = data

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

		},
		mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);

			this.getorderdatas();
			//this.getcustomersdata();
			this.getdealerdata()
			this.getOrderType()
			this.getOrderSeries()

			var that = this

			that.axios({
				method: 'get',

				url: '/api/f/cities?levelType=1'

			}).then(function(res) {

				that.provinceData = res.data.data

			}).catch(function(err) {
				console.log(err)

			})

		}
	}
</script>

<style scoped="scoped">
	
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
	
	.upload-list-cover {
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);
	}
	
	.upload-list:hover .upload-list-cover {
		display: block;
	}
	
	.upload-list-cover i {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
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
	
	.border_none {
		border: 0px;
	}
	
	.item_head {
		display: inline-block;
		padding-left: 18px;
	}
	
	.item_head span {
		display: ;
		float: left;
		line-height: 30px;
		margin-bottom: 6px;
		margin-right: 20px;
		font-size: 14px;
		cursor: pointer;
	}
	
	.item_head span.active {
		color: #0B61A4;
		border-bottom: solid 2px #0B61A4;
	}
	
	.item_center {
		display: none;
	}
	
	.item_center.active {
		display: block;
		padding-left: 18px;
	}
	
	
	
</style>