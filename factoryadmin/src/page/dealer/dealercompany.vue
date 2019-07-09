<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>经销商管理</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div>
			<Row>
				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>今日意向经销商数量</h3>
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
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>今日签约经销商数量</h3>
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
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>今日下单经销商数量</h3>
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
											<p>韩火火于09-3-14添加经销商马小跳</p>
											<small class="Time">13：30</small>
										</li>
										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加经销商马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加经销商马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加经销商马小跳</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加经销商马小跳</p>
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

					<div class="ui_operateLeft">

						<ul class="tab">
							<li class="tab_item">
								<div class="lable">名称：</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.name" placeholder="请输入店铺名称或创始人姓名..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">手机号：</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.mobile" placeholder="请输入经销商手机号..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">编号：</div>
								<div class="form_nav">
									<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.no" placeholder="请输入经销商店铺编号..." />
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">类型：</div>
								<div class="form_nav">
									<Select style="width: 200px;" id="p_lea" v-model="searchObj.type">

										<Option value="1" key="1">直营店</Option>
										<Option value="2" key="2">店中店</Option>
										<Option value="3" key="3">专卖店</Option>
										<Option value="4" key="4">加盟店</Option>
										<Option value="5" key="5">散单</Option>

									</Select>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button icon="ios-search"  type="primary" @click="clicksearch">搜索</Button>
									<Button icon="ios-refresh" type="primary" @click="newData">重置</Button>
								</div>
							</li>
						</ul>

						<!--<span class="operation_span"></span>
					
					<span class="operation_span">手机号：</span>
					<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.mobile" placeholder="请输入经销商手机号..." />
					<span class="operation_span">编号：</span>
					<input style="width: 200px;" class="iv_input" id="p_lea" v-model="searchObj.no" placeholder="请输入经销商店铺编号..." />
					<span class="operation_span">类型：</span>
					<Select style="width: 200px;" id="p_lea" v-model="searchObj.type">
						
						<Option value="1" key="1">直营店</Option>
						<Option value="2" key="2">店中店</Option>
						<Option value="3" key="3">专卖店</Option>
						<Option value="4" key="4">加盟店</Option>
						<Option value="5" key="5">散单</Option>

					</Select>-->

					</div>

					<div class="ui_operateRight">
						<ul class="tab">
						<li class="tab_item">
							<div class="lable"></div>
							<div class="form_nav">
                         
								<Button type="primary" @click="dealerModelOpen">新增经销商</Button>
							</div>
						</li>
						</ul>

						<!--<Button class="item_PL" type="primary" @click="exportData">生成表格数据</Button>-->
					</div>
				</div>

			</div>

			<!-- 经销商列表 -->
			<div class="department_center">

				<Table :loading="loading" :columns="dealerHeader" border :data="dealerData"></Table>
				<Switch v-model="loading"></Switch>
				<div class="ui_tableBottom">

					<div class="ui_page">
						<Page :current="pageIndex" :total="pageTotal" :page-size="pageSize" @on-change="pageChange" show-elevator></Page>
					</div>

				</div>

			</div>
		</div>
		<!--添加经销商模态框 -s -->

		<Drawer v-model="dealerModel" title="新增经销商" width="500">

			<Form :model="objdealer" :label-width="100">

				<FormItem label="经销商名称">
					<Input v-model="objdealer.companyName" placeholder="请输入经销商店铺名称..."></Input>
				</FormItem>

				<FormItem label="经销商类型">
					<RadioGroup v-model="objdealer.companyType">
						<!--<Radio label="0">生产商/制造商/总店</Radio>-->
						<Radio label="1">直营店</Radio>
						<Radio label="2">店中店</Radio>
						<Radio label="3">专卖店</Radio>
						<Radio label="4">加盟店</Radio>
						<Radio label="5">散单</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="经销商状态">
					<RadioGroup v-model="objdealer.companyStatus">
						<Radio label="0">意向</Radio>
						<!--<Radio label="1">已签约（正常）</Radio>
						<Radio label="2">已退网</Radio>
						<Radio label="3">已倒闭</Radio>
						<Radio label="4">已禁用</Radio>-->
						<Radio label="5">无价值</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="经销商级别">
					<RadioGroup v-model="objdealer.companyGrade">
						<Radio label="0">初级</Radio>
						<Radio label="1">一级</Radio>

					</RadioGroup>
				</FormItem>

				<FormItem label="经销商编号">
					<Input v-model="objdealer.companyNo" placeholder="请输入经销商店铺编号..."></Input>
				</FormItem>

				<FormItem label="经销商创始人">
					<Input v-model="objdealer.founderName" placeholder="请输入店铺创始人姓名..."></Input>
				</FormItem>

				<FormItem label="经销商联系电话">
					<Input v-model="objdealer.leaderTel" placeholder="请输入店铺联系人电话..."></Input>
				</FormItem>

				<FormItem label="经销商大区经理">
					<!--<Input v-model="objdealer.businessManager" ></Input>-->

					<Select filterable v-model="objdealer.businessManager" placeholder="请选择经销商大区经理...">
						<Option v-for="(item,index) in employeedata" :value="item.userId" :key="item.userId">{{item.userName}}</Option>
					</Select>
				</FormItem>

				<FormItem label="经销商地址">

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
					<Input v-model="objdealer.address" placeholder="请输入店铺地址..."></Input>
				</FormItem>

				<FormItem label="签约时间">
					<DatePicker type="date" @on-change="getcontractTime" placeholder="请选择签约时间" :value="objdealer.contract_time"></DatePicker>
				</FormItem>

				<FormItem label="到期时间">
					<DatePicker type="date" @on-change="getcontractExpiredDate" placeholder="请选择到期时间" :value="objdealer.contract_expired_date"></DatePicker>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="dealerModelOk">确认添加</Button>
			</div>

		</Drawer>

		<!--添加经销商模态框-end-->

		<!--地图弹框-->

		<Drawer title="选择详细地址经纬度" width="600px" v-model="mapDrawer" on-close="mapIshow=false">
			<div id="DrawerMap" style="width: 100%; height: 600px; "></div>
			<p class="DrawerMap_tip"> {{sitelatlng.lng}}{{sitelatlng.lat}}</p>
			<div class="demo-drawer-footer">
				<Button type="primary">确认</Button>
			</div>
		</Drawer>

		<!--地图弹框-->
		<!--经销商详情-->
		<Drawer v-model="companyDetailOpen" title="经销商信息" width="500">
			<div class="companyDetail">
				<Form :model="companyDetail" :label-width="100">

					<FormItem label="经销商编号">
						<p>{{companyDetail.no}}</p>
					</FormItem>

					<FormItem label="经销商类型">
						<p v-show="companyDetail.type==0">生产商/制造商/总店</p>
						<p v-show="companyDetail.type==1">直营店</p>
						<p v-show="companyDetail.type==2">店中店</p>
						<p v-show="companyDetail.type==3">专卖店</p>
						<p v-show="companyDetail.type==4">加盟店</p>
						<p v-show="companyDetail.type==5">散单</p>
					</FormItem>

					<FormItem label="经销商状态">
						<p v-show="companyDetail.status==0">意向</p>
						<p v-show="companyDetail.status==1">已签约（正常）</p>
						<p v-show="companyDetail.status==2">已退网</p>
						<p v-show="companyDetail.status==3">已倒闭</p>
						<p v-show="companyDetail.status==4">已禁用</p>
						<p v-show="companyDetail.status==5">无价值</p>
						<p v-show="companyDetail.status==6">待财务审核</p>
						<p v-show="companyDetail.status==7">待启用</p>
					</FormItem>

					<FormItem label="经销商级别">
						<p v-show="companyDetail.grade==0">初级</p>
						<p v-show="companyDetail.grade==1">一级</p>
					</FormItem>

					<FormItem label="创始人姓名">
						<p>{{companyDetail.founderName}}</p>
					</FormItem>

					<FormItem label="经销商联系人">
						<p>{{companyDetail.leaderName}}</p>
					</FormItem>

					<FormItem label="经销商联系电话">
						<p>{{companyDetail.leaderTel}}</p>
					</FormItem>

					<FormItem label="公司附件">
						<!--	<div class="companyfiles">
							<div class="companyfiles_file" >
								<h5 :style="{backgroundImage: 'url(' + item.path + ')' }"></h5>
							</div>
						</div>
						-->

						<div class="pl">
							<div class="demo-upload-list" v-for="(item , index) in companyDetailfileList" @click="handleView(item.path)">
								<template>
									<img :src="item.path">
									<div class="demo-upload-list-cover">
										<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
										<!--<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,index)"></Icon>-->
									</div>
								</template>

							</div>

						</div>
					</FormItem>

				</Form>
			</div>
		</Drawer>

		<!--启用经销商弹框-end-->

		<Modal title="图片详情" v-model="visible">
			<img :src="imgName" style="width: 100%">
			<div slot="footer"></div>
		</Modal>

		<!--修改经销商信息-s-->

		<Drawer v-model="SetdealerModel" title="修改经销商信息" width="500">

			<Form :model="Setdealer" :label-width="100">

				<FormItem label="经销商名称">
					<Input v-model="Setdealer.SetcompanyName" placeholder="请输入经销商店铺名称..."></Input>
				</FormItem>

				<FormItem label="经销商类型">
					<RadioGroup v-model="Setdealer.SetcompanyType">
						<!--<Radio label="0">生产商/制造商/总店</Radio>-->
						<Radio label="1">直营店</Radio>
						<Radio label="2">店中店</Radio>
						<Radio label="3">专卖店</Radio>
						<Radio label="4">加盟店</Radio>
						<Radio label="5">散单</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="经销商状态" v-show="setcompanyStatus==false">
					<RadioGroup v-model="Setdealer.SetcompanyStatus">
						<!--<Radio label="0">意向</Radio>-->
						<Radio label="1">已签约（正常）</Radio>
						<Radio label="2">已退网</Radio>
						<Radio label="3">已倒闭</Radio>
						<Radio label="4">已禁用</Radio>
						<Radio label="5">无价值</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="经销商状态" v-show="setcompanyStatus==true">
					<RadioGroup v-model="Setdealer.SetcompanyStatus">
						<Radio label="0">意向</Radio>
						<Radio label="5">无价值</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="经销商级别">
					<RadioGroup v-model="Setdealer.SetcompanyGrade">
						<Radio label="0">初级</Radio>
						<Radio label="1">一级</Radio>

					</RadioGroup>
				</FormItem>

				<FormItem label="经销商编号">
					<Input v-model="Setdealer.SetcompanyNo" placeholder="请输入经销商店铺编号..."></Input>
				</FormItem>

				<FormItem label="经销商联系人">
					<Input v-model="Setdealer.founderName" placeholder="请输入店铺联系人姓名..."></Input>
				</FormItem>

				<FormItem label="经销商联系电话">
					<Input v-model="Setdealer.leaderTel" placeholder="请输入店铺联系人电话..."></Input>
				</FormItem>

				<FormItem label="经销商大区经理">
					<!--<Input v-model="objdealer.businessManager" ></Input>-->

					<Select filterable v-model="Setdealer.businessManager" placeholder="请选择经销商大区经理...">
						<Option v-for="(item,index) in employeedata" :value="item.userId" :key="item.userId">{{item.userName}}</Option>
					</Select>
				</FormItem>

				<FormItem label="经销商地址">
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
					<Input v-model="Setdealer.address" placeholder="请输入店铺地址..."></Input>
				</FormItem>

				<FormItem label="签约时间">
					<DatePicker type="date" @on-change="getcontractTime" placeholder="请选择签约时间" :value="Setdealer.contract_time"></DatePicker>
				</FormItem>

				<FormItem label="到期时间">
					<DatePicker type="date" @on-change="getcontractExpiredDate" placeholder="请选择到期时间" :value="Setdealer.contract_expired_date"></DatePicker>
				</FormItem>

				<FormItem label="附件">
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
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetdealerIsOk">确认修改</Button>
			</div>

		</Drawer>

		<!--加盟费-->

		<Drawer v-model="joinOpen" title="提交加盟费" width="500">

			<div style="position: relative; height: 100%; overflow: auto; padding-bottom: 50px;">

				<Form :model="join" :label-width="100">

					<FormItem label="店铺加盟金额">
						<Input v-model="join.amount" placeholder="请输入加盟金额..."></Input>
					</FormItem>

					<FormItem label="店铺加盟描述">
						<Input type="textarea" v-model="join.notes" placeholder="请输入加盟描述..."></Input>
					</FormItem>

				</Form>
			</div>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="joinIn">提交</Button>
			</div>

		</Drawer>

		<Modal v-model="isbegin" width="360">
			<p slot="header" style="color:cornflowerblue;text-align:center">
				<Icon type="ios-information-circle"></Icon>
				<span>操作提示</span>
			</p>
			<div style="text-align:center">
				<p>当前正在执行启用经销商操作</p>
				<p>是否继续执行？</p>

			</div>
			<div slot="footer">
				<Button type="primary" size="large" long @click="begin">确认</Button>
			</div>
		</Modal>

	</div>
</template>

<script>
	var echarts = require('echarts')

	import axios from 'axios'

	export default {
		data() {
			return {

				dealerHeader: [

					{
						title: '经销商名称',
						key: "name",

					},

					{
						title: '负责人',
						key: 'leaderName',

					},

					{
						title: '负责人电话',
						key: 'leaderTel',

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
						title: '地区',
						key: 'address',

					},
					//
					//					
					//					
					//					{
					//						title: '编号',
					//						key: "no",
					//						
					//						fixed: "left",
					//
					//					},
					//					
					//
					//					{
					//						title: '级别',
					//						key: 'grade',
					//						
					//
					//						render: (h, params) => {
					//
					//							var status = params.row.status
					//
					//							if(status == 0) {
					//								var text = "初级"
					//							} else if(status == 1) {
					//								var text = "一级"
					//							}
					//							return h('div', text)
					//						}
					//
					//					},
					//
					//					{
					//						title: '创始人姓名',
					//						key: 'founderName',
					//						
					//					},
					//
					//					
					//
					//					{
					//						title: '位置',
					//						key: 'address',
					//						
					//					},

					//					
					//						{title: '店铺面积',
					//						key: 'shopArea',
					//						width: 150,
					//					},
					//					
					//
					//					{
					//						title: '大区经理',
					//						key: 'businessManagerName',
					//						width: 150,
					//					},
					//
					//					{
					//						title: '银行开户行',
					//						key: 'depositBank',
					//						width: 150,
					//					},
					//					{
					//						title: '银行开户账号',
					//						key: 'bankAccount',
					//						width: 150,
					//					},
					//
					//					{
					//						title: '银行开户人',
					//						key: 'bankAccountHolder',
					//						width: 150,
					//					},
					//
					//					{
					//						title: '粉丝',
					//						key: 'followers',
					//						width: 100,
					//					},
					//
					//					{
					//						title: '服务电话',
					//						key: 'serviceTel',
					//						width: 150,
					//					},
					//
					//					{
					//						title: '创建人',
					//						key: 'creatorName',
					//						width: 200,
					//					},
					//
					//					{
					//						title: '创建日期',
					//						key: 'created',
					//						width: 200,
					//					},

					{
						title: '操作',
						key: 'action',
						width: 100,

						align: 'center',
						render: (h, params) => {

							var status = params.row.status

							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small',
//										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											
											
											this.$emit('openWindow', ('dealercompanydetails'), ('经销商详情页面'), ('2-3'), ('dealercompanydetails'), ('dealercompanydetails'),(this.dealerData[params.index].id))
											
//											this.$router.push({
//												name: 'dealercompanydetails',
//												query: {
//													id: this.dealerData[params.index].id,
//													key:this.$route.query.key
//												}
//											})

											//this.getCompanyDetail(params.index)

										}
									}
								}, '详情'),

							]);

							//							if(status == 0) {
							//								return h('div', [
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
							//												this.getCompanyDetail(params.index)
							//
							//											}
							//										}
							//									}, '详情'),
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
							//
							//												this.SetdepartmentOpen(params.index)
							//
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
							//
							//												this.join = {
							//													notes: "",
							//													amount: ""
							//												}
							//												this.SetIndex = params.index
							//												this.joinOpen = true
							//												/*this.SetdealerModel = true
							//												this.SetdepartmentOpen(params.index)*/
							//
							//											}
							//										}
							//									}, '提交'),
							//
							//								]);
							//							} else if(status == 1) {
							//								return h('div', [
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
							//												this.getCompanyDetail(params.index)
							//
							//											}
							//										}
							//									}, '详情'),
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
							//
							//												this.SetdepartmentOpen(params.index)
							//
							//											}
							//										}
							//									}, '编辑'),
							//
							//								]);
							//							} else if(status == 6) {
							//								return h('div', [
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
							//												this.getCompanyDetail(params.index)
							//
							//											}
							//										}
							//									}, '详情'),
							//
							//								]);
							//							} else if(status == 7) {
							//								return h('div', [
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
							//												this.getCompanyDetail(params.index)
							//
							//											}
							//										}
							//									}, '详情'),
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
							//
							//												this.SetdepartmentOpen(params.index)
							//
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
							//												this.SetIndex = params.index
							//												this.isbegin = true
							//
							//											}
							//										}
							//									}, '启用'),
							//
							//								]);
							//							}
							//
						}
					}
				],

				dealerData: [], //经销商数据
				dealerModel: false, //添加经销商模态框
				startdealerModel: false, //打开启用经销商列表
				SetdealerModel: false, //修改经销商信息模态框
				mapDrawer: false, //地图模态框
				objdealer: { //添加经销商信息

					"companyName": "",
					"companyType": "",
					"companyStatus": "0",
					"companyGrade": "0",
					"companyNo": "",
					"founderName": "",
					"leaderTel": ""

				},

				employeedata: [], //公司所有员工

				companyDetailOpen: false,
				companyDetail: {},
				companyDetailfileList: [],
				Setdealer: { //修改经销商信息
					"SetcompanyName": "",
					"SetcompanyNo": "",
					"SetcompanyType": "",
					"SetcompanyStatus": "",
					"SetcompanyGrade": "",
					"SetuserName": "",

				},

				setcompanyStatus: false,

				uploadList: [],
				defaultList: [],
				uploadpathdata: '',
				uparry: {
					multipartFileList: []
				},
				imgName: "",
				visible: false,
				SetIndex: '', //选择数据的位置
				pageIndex: 1, //分页页数
				pageTotal: 0, //数据总数
				pageSize: 10, //单页数据量
				loading: true,
				tableHeight: 500,
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
				mapIshow: false, //是否第一次展开地图

				searchObj: { //检索对象
					"name": "",
					"mobile": "",
					"no": "",
					"type": "",

				},

				isSearch: false,

				joinOpen: false,
				join: {},
				isbegin: false,
				operation: {
					add: false,
					info: false,
					delete: false,
					update: false,
					view: false
				}

			};
		},

		methods: {

			//up

			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(fileid, index) {

				this.delfile(fileid, index)

			},
			handleSuccess(res, file) {

				var Res = res.data
				/*	this.uploadList = this.$refs.upload.fileList*/
				for(var i = 0; i < Res.length; i++) {

					this.uploadList.push(Res[i])
					/*file.path = Res[i].path
					file.id = Res[i].id*/
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

			delfile: function(fileid, index) {

				var id = this.dealerData[this.SetIndex].id;

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var dsDataCache = this.dsDataCache

				var that = this
				//                    /
				this.axios({
					method: 'delete',
					url: '/api/f/dealers/companies/' + id + '/files/' + fileid,

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

			//提交加盟费

			joinIn: function() {

				var index = this.SetIndex
				var id = this.dealerData[index].id

				var Num = /^([0-9])+(.[0-9]{2})?$/
				var join = this.join
				var notes = join.notes
				var amount = join.amount
				var amount = (amount.indexOf('.') == -1) ? amount + '.00' : amount

				if(amount == "" || amount == null || amount.trim().length == 0) {
					this.$Message.error('加盟费不能为空！');
					return false;
				} else if(Num.test(amount) == false) {
					this.$Message.error('加盟费只能輸入数字,且只能是小数点后两位！！');
					return false;
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

				//                    /
				this.axios({
					method: 'put',
					url: '/api/f/dealers/companies/' + id + '/submit',

					data: {

						"amount": amount,
						"notes": notes,

					}

				}).then(function(res) {

					that.joinOpen = false

					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.dealerData[index].status = 6

					that.$Message.success("提交成功")

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.joinOpen = false
				})

			},

			//启用经销商

			begin: function() {

				var index = this.SetIndex

				var id = this.dealerData[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-edit"

				//                    /
				this.axios({
					method: 'post',
					url: '/api/f/dealers/companies/' + id + '/opendealer',

				}).then(function(res) {

					var verify = [{
							"name": "name",
							"note": "经销商店铺名称"
						},
						{
							"name": "type",
							"note": "经销商店铺类型 "
						},
						{
							"name": "status",
							"note": "经销商店铺状态 "
						},
						{
							"name": "grade",
							"note": "经销商店铺级别 "
						},
						{
							"name": "no",
							"note": "经销商店铺编号"
						},

						{
							"name": "founderName",
							"note": "经销商店铺创始人"
						},

						{
							"name": "leaderTel",
							"note": "经销商店铺联系人联系方式"
						},

						{
							"name": "mobile",
							"note": "手机号"
						},

						{
							"name": "businessManager",
							"note": "大区经理"
						},

					]

					that.isbegin = false

					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					that.dealerData[index].status = 1

					that.$Message.success("提交成功")

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);
					that.isbegin = false
				})

			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '经销商列表'
				});
			},

			//刷新数据
			newData: function() {
				this.isSearch = false
				this.searchObj = {

						name: "",
						mobile: "",
						no: "",
						type: "",

					},

					this.pageIndex = 1
				this.Getdata()

			},

			//检索信息
			clicksearch: function() {
				var searchobj = this.searchObj

				var name = searchobj.name
				var mobile = searchobj.mobile
				var no = searchobj.no
				var type = searchobj.type

				if(name.trim().length == 0 && mobile.trim().length == 0 && no.length == 0 && !type == true) {
					this.newData();

					return false;
				} else {
					this.pageIndex = 1
					this.searchData()
				}

			},

			//检索接口
			searchData: function() {

				var searchobj = this.searchObj

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

				if(type != "" || type != null) {
					pathurl += 'type=' + type + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
				//请求经销商列表
				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.pageTotal = res.data.pagination.total
					var data = res.data.data.companyList

					that.dealerData = data
					that.isSearch = true
					that.loading = false

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			pageChange: function(index) {
				this.pageIndex = index

				if(this.isSearch == true) {
					this.searchData()
				} else {
					this.Getdata()
				}

			},

			dealerModelOpen: function() {

				
				
				this.$emit('openWindow', ('dealercompanynewly'), ('新建经销商'), ('2-1'), ('dealercompanynewly'), ('dealercompanynewly'))
                this.$router.push({
					name: 'dealercompanynewly',
					//					query: {
					//						id: obj.id
					//					}
				})
				return false;
				this.dealerModel = true
				this.objdealer = {

					"companyName": "",
					"companyType": "",
					"companyStatus": "0",
					"companyGrade": "0",
					"companyNo": "",
					"founderName": "",

				};

				this.provinceMsg = "";
				this.cityMsg = "";
				this.districMsg = "";
				this.cityData = [];
				this.districData = []
			},

			//打开地图模态框并且获取新的地址信息
			mapDrawerOpen: function() {

				var that = this

				this.mapDrawer = true

				if(this.mapIshow == false) {

					var map = new BMap.Map("DrawerMap");
					var point = new BMap.Point(116.404, 39.915);
					map.centerAndZoom(point, 16);
					map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
					map.enableContinuousZoom();

					map.addEventListener("click", function(e) {
						map.clearOverlays(); //清空覆盖物

						that.sitelatlng.lng = e.point.lng
						that.sitelatlng.lat = e.point.lat

						var point = new BMap.Point(e.point.lng, e.point.lat);

						var marker = new BMap.Marker(point); // 创建标注
						map.addOverlay(marker); // 将标注添加到地图中
						marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

					});

				}

				this.mapIshow = true

			},

			getcontractTime: function(val) {
				this.objdealer.contract_time = val
				this.Setdealer.contract_time = val
			},

			getcontractExpiredDate: function(val) {
				this.objdealer.contract_expired_date = val
				this.Setdealer.contract_expired_date = val

			},

			//添加经销商api			
			dealerModelOk: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var objdealer = this.objdealer

				var companyname = objdealer.companyName
				var companytype = objdealer.companyType
				var companystatus = objdealer.companyStatus
				var companygrade = objdealer.companyGrade
				var companyno = objdealer.companyNo
				var founderName = objdealer.founderName
				var leaderTel = objdealer.leaderTel
				var address = objdealer.address
				var contractTime = objdealer.contract_time
				var contractExpiredDate = objdealer.contract_expired_date
				var businessManager = objdealer.businessManager

				if(companyname == "" || companyname == null || companyname.trim().length == 0) {
					this.$Message.error('经销商店铺名称不能为空！');
					return false;
				} else if(companyname.trim().length > 50) {
					this.$Message.error('经销商店铺名称长度不能超过50个字！');
					return false;
				} else if(companyno.trim().length == 0) {
					this.$Message.error('经销商店铺编号不能为空！');
					return false;
				} else if(companyno.trim().length > 30) {
					this.$Message.error('经销商店铺标识长度不能超过30个字！');
					return false;
				} else if(companytype == "" || companytype == null || companytype.trim().length == 0) {

					this.$Message.error('经销商店铺类型不能为空！');
					return false;
				} else if(founderName == "" || founderName == null || founderName.trim().length == 0) {

					this.$Message.error('经销商联系人不能为空！');
					return false;
				} else if(leaderTel == "" || leaderTel == null || leaderTel.trim().length == 0) {

					this.$Message.error('经销商联系人电话不能为空！');
					return false;
				} else if(tel.test(leaderTel) == false && telephone.test(leaderTel) == false && phone.test(leaderTel) == false) {

					this.$Message.error('经销商联系人电话格式不正确！');
					return false;
				} else if(this.districMsg == "" || this.districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');
					return false;
				} else if(address == "" || address == null || address.trim().length == 0) {

					this.$Message.error('经销商地址不能为空！');
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
						url: '/api/f/dealers/companies',

						data: {

							"name": companyname,
							"type": companytype,
							"status": companystatus,
							"grade": companygrade,
							"no": companyno,
							"founderName": founderName,
							"leaderTel": leaderTel,
							"address": address,
							"businessManager": (businessManager == "") ? undefined : businessManager,
							"contractTime": (contractTime == "") ? undefined : contractTime,
							"contractExpiredDate": (contractExpiredDate == "") ? undefined : contractExpiredDate,
							"cityAreaId": this.districMsg

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "经销商店铺名称"
							},
							{
								"name": "type",
								"note": "经销商店铺类型 "
							},
							{
								"name": "status",
								"note": "经销商店铺状态 "
							},
							{
								"name": "grade",
								"note": "经销商店铺级别 "
							},
							{
								"name": "no",
								"note": "经销商店铺编号"
							},
							{
								"name": "address",
								"note": "详细地址"
							},
							{
								"name": "cityAreaId",
								"note": "省市区地址"
							}

						]

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						that.dealerData.unshift(data)
						that.$Message.success("添加成功")
						that.dealerModel = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

				}

			},

			//打开经销商详情

			getCompanyDetail: function(index) {
				
				
				
				

				var id = this.dealerData[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

				//请求经销商详情
				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					that.companyDetail = data.company
					that.companyDetailfileList = data.fileList

					that.companyDetailOpen = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//打开修改经销商信息模态框

			SetdepartmentOpen: function(index) {

				this.SetIndex = index

				var id = this.dealerData[index].id
				this.uploadpathdata = '/api/f/dealers/companies/' + id + '/files'
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

				//请求经销商详情
				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies/' + id,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var data = res.data.data

					/*.companyDetail = data.company
					that.companyDetailfileList = */

					that.Setdealer.SetcompanyNo = data.company.no
					that.Setdealer.SetcompanyName = data.company.name
					that.Setdealer.SetcompanyType = data.company.type.toString()
					that.Setdealer.SetcompanyStatus = data.company.status.toString()
					that.Setdealer.SetcompanyGrade = data.company.grade.toString()
					that.Setdealer.founderName = data.company.founderName
					that.Setdealer.leaderTel = data.company.leaderTel
					that.Setdealer.address = data.company.address
					that.Setdealer.contract_time = data.company.contractExpiredDate
					that.Setdealer.contract_expired_date = data.company.contractExpiredDate
					that.Setdealer.businessManager = data.company.businessManager

					that.provinceMsg = data.company.cityId
					that.cityMsg = data.company.provinceId
					that.districMsg = data.company.cityAreaId

					that.getpickprovince(that.provinceMsg)
					that.uploadList = data.fileList

					if(data.company.status == 0) {
						that.setcompanyStatus = true
					} else {
						that.setcompanyStatus = false
					}

					that.SetdealerModel = true

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//修改经销商信息

			SetdealerIsOk: function() {

				var cid = this.dealerData[this.SetIndex].id
				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var Setdealer = this.Setdealer
				var No = Setdealer.SetcompanyNo
				var companyname = Setdealer.SetcompanyName
				var companytype = Setdealer.SetcompanyType
				var companystatus = Setdealer.SetcompanyStatus
				var companygrade = Setdealer.SetcompanyGrade
				var founderName = Setdealer.founderName
				var leaderTel = Setdealer.leaderTel

				var address = Setdealer.address
				var contractTime = Setdealer.contract_time
				var contractExpiredDate = Setdealer.contract_expired_date
				var businessManager = Setdealer.businessManager

				if(companyname == "" || companyname == null || companyname.trim().length == 0) {
					this.$Message.error('经销商店铺名称不能为空！');
					return false;
				} else if(companyname.trim().length > 50) {
					this.$Message.error('经销商店铺名称长度不能超过50个字！');
					return false;
				} else if(No.trim().length > 30) {
					this.$Message.error('经销商店铺标识长度不能超过30个字！');
					return false;
				} else if(founderName == "" || founderName == null || founderName.trim().length == 0) {

					this.$Message.error('经销商联系人不能为空！');
					return false;
				} else if(leaderTel == "" || leaderTel == null || leaderTel.trim().length == 0) {

					this.$Message.error('经销商联系人电话不能为空！');
					return false;
				} else if(tel.test(leaderTel) == false) {

					this.$Message.error('经销商联系人电话格式不正确！');
					return false;
				} else if(this.districMsg == "" || this.districMsg == null) {

					this.$Message.error('请选择正确的省市区/县！');
					return false;
				} else if(address == "" || address == null || address.trim().length == 0) {

					this.$Message.error('经销商地址不能为空！');
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

							"name": companyname,
							"status": companystatus,
							"grade": companygrade,
							"no": No,
							"type": companytype,
							"founderName": founderName,
							"leaderTel": leaderTel,
							"address": address,
							"businessManager": (businessManager == "") ? undefined : businessManager,
							"contractTime": (contractTime == "") ? undefined : contractTime,
							"contractExpiredDate": (contractExpiredDate == "") ? undefined : contractExpiredDate,
							"cityAreaId": this.districMsg

						}

					}).then(function(res) {

						var verify = [{
								"name": "name",
								"note": "经销商店铺名称"
							},
							{
								"name": "type",
								"note": "经销商店铺类型 "
							},
							{
								"name": "status",
								"note": "经销商店铺状态 "
							},
							{
								"name": "grade",
								"note": "经销商店铺级别 "
							},
							{
								"name": "no",
								"note": "经销商店铺编号"
							},

							{
								"name": "founderName",
								"note": "经销商店铺创始人"
							},

							{
								"name": "leaderTel",
								"note": "经销商店铺联系人联系方式"
							},

							{
								"name": "mobile",
								"note": "手机号"
							},
							{
								"name": "address",
								"note": "地址"
							},

							{
								"name": "businessManager",
								"note": "大区经理"
							},

						]

						setTimeout(msg, 100);

						if(Isjurisdiction.isright(res, that, verify) == false) {
							return false
						}

						var data = res.data.data

						that.dealerData[that.SetIndex].status = data.company.status
						that.dealerData[that.SetIndex].type = data.company.type
						that.dealerData[that.SetIndex].grade = data.company.grade
						that.dealerData[that.SetIndex].name = data.company.name
						that.dealerData[that.SetIndex].no = data.company.no
						that.dealerData[that.SetIndex].founderName = data.company.founderName
						that.dealerData[that.SetIndex].leaderTel = data.company.leaderTel
						that.dealerData[that.SetIndex].address = data.company.address
						that.dealerData[that.SetIndex].contractTime = data.company.contractTime
						that.dealerData[that.SetIndex].contractExpiredDate = data.company.contractExpiredDate
						that.dealerData[that.SetIndex].businessManagerName = data.company.businessManagerName

						that.$Message.success("修改成功")

						that.SetdealerModel = false

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);
						that.SetdealerModel = false
					})

				}

			},

			Getdata: function() {

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"

				//请求经销商列表
				this.axios({
					method: 'get',
					url: '/api/f/dealers/companies?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.pageTotal = res.data.pagination.total
					var data = res.data.data.companyList

					that.dealerData = data
					that.loading = false

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

			//打开编辑详情时查询市级数据

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

			//打开编辑详情时查询县级数据

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

			}

		},

		mounted: function() {

//			var keydata = this.$route.query.key
//			var operation = this.operation
//			Isjurisdiction.user_jurisdiction(keydata, operation)

			this.tableHeight = (document.body.clientHeight - 350)

			this.Getdata()
			//employeedata

			var that = this

			//请求工厂所有员工
			this.axios({
				method: 'get',
				url: '/api/f/depts/members',

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data

				that.employeedata = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');
				that.loading = false

			})

			that.axios({
				method: 'get',

				url: '/api/f/cities?levelType=1'

			}).then(function(res) {

				that.provinceData = res.data.data

			}).catch(function(err) {
				console.log(err)

			})

			window.onload = function() {
				var timeData = [
					'2009/6/01', '2009/6/02', '2009/6/03', '2009/6/04', '2009/6/05', '2009/6/06', '2009/6/07', '2009/6/08',
					'2009/6/09', '2009/6/10',
					'2009/6/11', '2009/6/12', '2009/6/13', '2009/6/14', '2009/6/15', '2009/6/16', '2009/6/17', '2009/6/18',
					'2009/6/19', '2009/6/20',
					'2009/6/21', '2009/6/22', '2009/6/23', '2009/6/24', '2009/6/25', '2009/6/26', '2009/6/27', '2009/6/28',
					'2009/6/29', '2009/6/30',

				];

				timeData = timeData.map(function(str) {
					return str.replace('2009/', '');
				});
				var myChartTwo = echarts.init(document.getElementById('mainTwo'));

				myChartTwo.setOption({
					title: {
						text: '6',
						subtext: '',
						x: 'center',
						textStyle: {
							fontSize: 0,
							fontWeight: 'normal',
						},
					},

					legend: {
						data: ['休闲赛-win', '休闲赛-lose', '休闲赛-K', '休闲赛-D', ],
						x: 'left'
					},

					toolbox: { //数据工具
						feature: {
							/*  dataView: {readOnly: true}, */
							restore: {},
							saveAsImage: {}
						}
					},

					xAxis: { //x轴配置
						show: false,
						name: '日期',
						type: 'category',
						data: timeData
					},
					yAxis: { //y轴配置
						show: false,
						name: '休闲赛 局/天',
						type: 'value',

					},

					grid: {
						left: 50,
						right: 50,
						top: 80

					},

					dataZoom: {

						type: 'inside',
						realtime: true,
						start: 0,
						end: 100,

					},

					series: [{
							name: '休闲赛-win',
							type: 'line',
							symbolSize: 8,
							hoverAnimation: false,
							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},
							data: [
								6, 10, 6, 10, 11, 9, 15, 14, 6, 7, 8, 5, 6, 9, 9, 20, 16, 19, 18, 6, 9, 7, 2, 5, 8, 5, 6, 8, 15, 6

							],
							type: 'line',
							smooth: true
						},
						{
							name: '休闲赛-lose',
							type: 'line',
							symbolSize: 8,
							hoverAnimation: false,
							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},
							data: [
								15, 14, 9, 20, 16, 19, 6, 7, 8, 5, 6, 9, 5, 6, 8, 15, 6, 6, 10, 6, 10, 11, 9, 18, 6, 9, 7, 2, 5, 8

							],
							type: 'line',
							smooth: true
						},

						{
							name: '休闲赛-K',
							type: 'line',
							symbolSize: 8,
							hoverAnimation: false,
							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},
							data: [
								6, 2, 2, 10, 4, 9, 7, 2, 3, 7, 8, 5, 6, 3, 9, 2, 1, 2, 3, 6, 9, 7, 2, 5, 6, 5, 6, 8, 1, 6

							],
							type: 'line',
							smooth: true
						},
						{
							name: '休闲赛-D',
							type: 'line',
							symbolSize: 8,
							hoverAnimation: false,
							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},
							data: [
								4, 3, 4, 2, 2, 2, 3, 1, 3, 2, 1, 0, 3, 5, 3, 2, 1, 1, 3, 2, 1, 3, 2, 2, 4, 5, 3, 4, 2, 3

							],
							type: 'line',
							smooth: true
						},
					]

				})
			}

		}

	}
</script>

<style>
	.Drawer_op {
		margin-left: 80px;
	}
	
	.latlng span:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	
	.DrawerMap_tip {
		line-height: 36px;
	}
	
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
	
	.companyDetail p {
		display: block;
		line-height: 32px;
		height: 32px;
		padding: 0px 5px;
		border-radius: 6px;
		border: solid 1px #dcdee2;
		box-sizing: border-box;
	}
	
	.companyfiles {
		display: inline-block;
		padding-top: 5px;
		width: 100%;
	}
	
	.companyfiles .companyfiles_file {
		width: 120px;
		height: 120px;
		float: left;
		display: block;
		margin-right: 15px;
	}
	
	.companyfiles .companyfiles_file h5 {
		display: block;
		width: 120px;
		height: 120px;
		background-position: 50% 50%;
		background-size: cover;
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
	
</style>

<style src='./../../assets/css/department.css'></style>