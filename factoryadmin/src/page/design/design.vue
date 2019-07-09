<template>
	<div>
		<div class="Breadcrumb">


			<Breadcrumb >
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem>设计管理</BreadcrumbItem>
			</Breadcrumb>
		</div>
		
		<div >
			<Row>
				<Col span="5">
				<div class="panel">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head"><div class="left_icon first-child"><img src="../../assets/img/order/list-01.png"/></div>今日新增设计任务数</h3>
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
							<h3 class="head"><div class="left_icon t-child"><img src="../../assets/img/order/list-03.png"/></div>今日延期设计任务数</h3>
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
							<h3 class="head"><div class="left_icon f-child"><img src="../../assets/img/order/list-04.png"/></div>今日完成设计任务数</h3>
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
											<p>韩火火于09-3-14添加设计</p>
											<small class="Time">13：30</small>
										</li>
										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加设计</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加设计</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加设计</p>
											<small class="Time">13：30</small>
										</li>

										<li>
											<span class="radius"></span>
											<p>韩火火于09-3-14添加设计</p>
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
							<div class="lable">订单编号:</div>
							<div class="form_nav">
								<input style="width: 200px;" class="iv_input"  id="p_lea" v-model="searchObj.no" placeholder="请输入订单编号..." />
							</div>
						</li>
						<li class="tab_item">
							<div class="lable">客户手机号:</div>
							<div class="form_nav">
								<input style="width: 200px;" class="iv_input"  id="p_lea" v-model="searchObj.customerTel" placeholder="请输入客户手机号..." />
							</div>
						</li>
						
						<li class="tab_item">
							<div class="lable"></div>
							<div class="form_nav">
								<Button  type="primary" icon="ios-search" @click="serchorder">搜索</Button>
								<Button @click="newData" class="p_lea" type="primary" icon="ios-refresh">重置</Button>
							</div>
						</li>
						
					</ul>

				
					
				</div>

				<div class="ui_operateRight">
					
					<ul class="tab">
						
						<li class="tab_item">
							<div class="lable"></div>
							<div class="form_nav">
								<Button  type="primary">导入</Button>
								<Button  type="primary">导出</Button>
								<Button  type="primary" @click="newOpen">新建设计</Button>
								
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
					<Page :current="pageIndex" :total="pageIndextotal" :page-size="pageSize" @on-change="changepage" show-elevator></Page>
				</div>

			</div>

		</div>
		</div>

		<!--订单需求and需求-->

		<Modal v-model="openOrdetails" title="订单详情及需求" width="1000">

			<div class="openOrdetails">

				<div class="openOrdetails_lf">

					<ul class="orserBCmsg">
						<li>
							<span>订单编号:</span>
							<p>{{orserBCmsg.no}}</p>
						</li>
						<li>
							<span>客户姓名:</span>
							<p>{{orserBCmsg.customerName}}</p>
						</li>
						<li>
							<span>客户电话:</span>
							<p>{{orserBCmsg.customerTel}}</p>
						</li>
						<li>
							<span>客户地址:</span>
							<p>{{orserBCmsg.address}}</p>
						</li>
						<li>
							<span>经销商姓名:</span>
							<p>{{orserBCmsg.dealerName}}</p>
						</li>
						<li>
							<span>经销商地址:</span>
							<p>{{orserBCmsg.dealerAddress}}</p>
						</li>
						<li>
							<span>订单状态:</span>

							
							<p v-show="orserBCmsg.status==0">待处理</p>
								<p v-show="orserBCmsg.status==1">设计费待评估</p>
								<p v-show="orserBCmsg.status==2">设计费待确认</p>
								<p v-show="orserBCmsg.status==3">设计费待审核</p>
								<p v-show="orserBCmsg.status==4">待设计</p>
								<p v-show="orserBCmsg.status==5">设计中</p>
								<p v-show="orserBCmsg.status==6">设计待确认</p>
								<p v-show="orserBCmsg.status==7">出厂价待确认</p>
								<p v-show="orserBCmsg.status==8">经销商待确认出厂价</p>
								<p v-show="orserBCmsg.status==9">货款支付审核</p>
								<p v-show="orserBCmsg.status==10">待生产</p>
								<p v-show="orserBCmsg.status==11">生产中</p>
								<p v-show="orserBCmsg.status==12">待入库</p>
								<p v-show="orserBCmsg.status==13">待出库</p>
								<p v-show="orserBCmsg.status==14">待配送</p>
								<p v-show="orserBCmsg.status==15">配送中</p>
								<p v-show="orserBCmsg.status==16">已完成</p>

						</li>
					</ul>
				</div>
				<div class="openOrdetails_rt">
					<Table border :loading="loading" height="440" :columns="orderDemandHead" :data="orderDemand" ref="selection" ></Table>
					<div style="text-align: right; margin-right: 2%; margin-top: 20px;">
						
                        <Button  v-show="this.designerId==null"  type="primary"  @click="setsdesigner">分配设计师</Button>
					</div>
				</div>

			</div>

			<div slot="footer">
				
			</div>

		</Modal>

		<!--设计费核算-->

		<Drawer v-model="openhs" title="设计费" width="500">

			<Form :label-width="80">
				<FormItem label="设计费">
					<Input v-model="designfee" placeholder="请输入设计费..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="isdesignfeeok">提交审核</Button>
			</div>

		</Drawer>

		<!---->

		<!-- this.
                               产品详情             this.-->

		<Modal v-model="DemandOpen" title="需求详情" width=36%  @on-cancel="openOrdetails=true,DemandOpen=false">

			<div class="DemandOpen">

				<Row>
					<Col span="12" >
						<p style="margin-bottom: 5px;"><span>产品颜色:</span><span>{{this.color}}</span></p>
						<p style="margin-bottom: 5px;"><span>门型:</span> <span >{{this.door}}</span></p>
						<p style="margin-bottom: 5px;">
							<span>产品系列:</span>
						<span v-show="this.series==0">定制实木</span>
						 <span v-show="this.series==1">特供实木</span> 
						  <span v-show="this.series==2">美克</span>
						   <span v-show="this.series==3">康奈</span>
						   <span v-show="this.series==4">慧娜</span>
						    <span v-show="this.series==5">模压</span>
							</p>
					</Col>
					<Col span="12" >
						<p style="margin-bottom: 5px;"><span>产品类型:</span>
							<span v-show="this.type==0">橱柜</span>
							 <span v-show="this.type==1">衣柜</span> 
							  <span v-show="this.type==2">成品家具</span>
							   <span v-show="this.type==3">电器</span>
							   <span v-show="this.type==4">五金</span></p>
						<p style="margin-bottom: 5px;"><span>修改人:</span><span>{{this.updateUser}}</span></p>
						<p style="margin-bottom: 5px;"><span>修改时间:</span><span>{{this.updateTime}}</span></p>
					</Col>
				</Row>
					<p style="margin-bottom: 5px;"><span>备注:</span> <span>{{this.notes}}</span></p>	
					<div>
						<div style="margin-bottom: 5px;">附件:</div>
						 <ul >
							<li v-for="(item , index) in uploadFiles">
								<img :src="item.path" />
							</li>
						</ul>
					 </div>
				

				

			</div>

			<div slot="footer"></div>
		</Modal>

		<!--订单需求and需求-end-->

		<Modal v-model="opendesigner" title="为该订单分配设计师" width="800">

			<!--<Select v-model="designerobj" style="width:200px">
				<Option v-for="item in " :value="item.id" :key="item.name">{{ item.name }}</Option>
			</Select>-->

			<div class="operation_box">
				<div class="active">
					<!---->
					<div class="ui_operateLeft" style="line-height: 32px;">
						<span class="operation_span">员工姓名：</span>
						<input style="width: 200px;" class="iv_input" onkeyup="this.value=this.value.replace(/[^\u4e00-\u9fa5\w]/g,'')" id="p_lea" v-model="designerObj.name" placeholder="请输入员工姓名..." />

						<Button icon="ios-search" @click="designersearch">搜索</Button>
					</div>

					<div class="ui_operateRight">
						<Button @click="newdesignerData" class="p_lea" shape="circle" icon="ios-refresh"></Button>

					</div>
				</div>

			</div>

			<div>

				<Table border :loading="loading" :columns="designerhead" :data="designerData" ref="table"></Table>
				<Switch v-model="loading"></Switch>
				<div class="ui_tableBottom">

					<div class="ui_operate">

					</div>

					<div class="ui_page">
						<!--@on-change="pageChange"-->
						<Page :current="memberIndex" :total="memberpageIndextotal" :page-size="memberpageSize" show-elevator></Page>
					</div>

				</div>

			</div>

			<div slot="footer"></div>

		</Modal>

		<Modal v-model="opendesignerscheme" title="订单设计方案" width="1020">

			<div class="designer_order">
				
				<div class="designer_lay">
					<ul>
						<li :class="{ac:dlay==0}" @click="dlay=0">
							<a href="#order_msg">基本信息</a>
						</li>
						
						<!-- <li :class="{ac:dlay==1}" @click="dlay=1">
							<a href="#order_demand">订单需求</a>
						</li> -->
						
						<li :class="{ac:dlay==2}" @click="dlay=2">
							<a href="#order_project">设计方案</a>
						</li>
					</ul>
				</div>
				
				
				
				<div class="designer_center">
					
					<!--订单基本信息 -s -->
					
					<div id="order_msg" class="order_msg">
						<h5 class="lay_Anchor">基本信息</h5>

						<ul class="orserBCmsg">
							<li>
								<span>订单编号:</span>{{orserBCmsg.no}}
							</li>
							<li>
								<span>客户姓名:</span>{{orserBCmsg.customerName}}
							</li>
							<li>
								<span>客户电话:</span>{{orserBCmsg.customerTel}}
							</li>
							<li>
								<span>客户地址:</span>{{orserBCmsg.address}}
							</li>
							<li>
								<span>经销商姓名:</span>{{orserBCmsg.dealerName}}
							</li>
							<li>
								<span>经销商地址:</span>{{orserBCmsg.dealerAddress}}
							</li>
							<li>

								<span>订单状态:</span>
								<p v-show="orserBCmsg.status==0">待处理</p>
								<p v-show="orserBCmsg.status==1">设计费待评估</p>
								<p v-show="orserBCmsg.status==2">设计费待确认</p>
								<p v-show="orserBCmsg.status==3">设计费待审核</p>
								<p v-show="orserBCmsg.status==4">待设计</p>
								<p v-show="orserBCmsg.status==5">设计中</p>
								<p v-show="orserBCmsg.status==6">设计待确认</p>
								<p v-show="orserBCmsg.status==7">出厂价待确认</p>
								<p v-show="orserBCmsg.status==8">经销商待确认出厂价</p>
								<p v-show="orserBCmsg.status==9">货款支付审核</p>
								<p v-show="orserBCmsg.status==10">待生产</p>
								<p v-show="orserBCmsg.status==11">生产中</p>
								<p v-show="orserBCmsg.status==12">待入库</p>
								<p v-show="orserBCmsg.status==13">待出库</p>
								<p v-show="orserBCmsg.status==14">待配送</p>
								<p v-show="orserBCmsg.status==15">配送中</p>
								<p v-show="orserBCmsg.status==16">已完成</p>
							</li>
						</ul>
					</div>
				
				
					
					<!--订单基本信息 -end -->
					
					<!--需求详情-->
					
					<!-- <div id="order_demand" class="order_demand">
					
						<h5 class="lay_Anchor">订单需求</h5>
						  <ul>
						  	<li v-for="(item,index) in orderDemand" :key="index">
						  		<div class="order_demandMsg">
						  			<p>需求编号：{{item.no}}</p>
						  			<p>需求名称：{{item.name}}</p>
						  			<p>需求描述：{{item.content}}</p>
						  		</div>
						  		
						  		
						  		<div class="order_demandCenter">
									<div v-for="(items,indexs) in item.customOrderFiles" class="designer_img" @click="banner_Img(index,indexs)">
										<h5 :style="{backgroundImage: 'url(' + items.path + ')' }"></h5>
									</div>

								</div>
						  	</li>
						  </ul>
					</div> -->

					<!--需求详情-end-->
					
					<!--订单设计-s-->
					
					<div id="order_project" class="order_project">
						<h5 class="lay_Anchor">设计方案</h5>
						<div class="operation_box">
						<div class="active">

							<div class="ui_operateRight">
								<Button type="primary" @click="designerOpen" v-show="isSub==false&&orserBCmsg.status==5">创建设计方案</Button>
							</div>
						</div>
					</div>

					<div>
						<Table height="200" border :loading="loading" :columns="dsHead" :data="dsData" ref="table"></Table>
					</div>
					</div>
					
					
				</div>
<!--订单设计-end-->
				
				<div>


					


				</div>

			</div>
         	
			<div slot="footer"></div>

		</Modal>
		
		<Modal v-model="des_img" title="创建设计方案" width="500">

			<div class="des_img">
				
				<img :src="des_imgpath"/>

			</div>

			<div slot="footer"></div>

		</Modal>

		<Modal v-model="pushscheme" title="创建设计方案" width="800" @on-cancel="outpushscheme" :mask-closable="false">

			<div class="pushscheme">
				<Form :model="pushschemeObj" :label-width="80">
					<FormItem label="设计名称">
						<Input v-model="pushschemeObj.name" placeholder="请输入设计名称..."></Input>
					</FormItem>

					<FormItem label="设计估价">
						<Input v-model="pushschemeObj.valuation" placeholder="请输入设计估价..."></Input>
					</FormItem>

					<FormItem label="设计描述">
						<textarea name="" v-model="pushschemeObj.notes" rows="" cols="" placeholder="请输入设计描述..."></textarea>
					</FormItem>

				</Form>

				<Button style="margin-left: 80px;" type="primary" @click="pushdesigner">创建设计方案</Button>

			</div>

			<div slot="footer"></div>

		</Modal>

		<!--查看设计方案-->
		<Modal title="设计方案详情" v-model="designersImg" @on-cancel="opendesignerscheme=true,designersImg=false">

			<div class="designers">

				<div class="designers_head">
					<p>设计名称：{{designersObj.orderDesignDto.name}}</p>

					<p>设计描述：{{designersObj.orderDesignDto.notes}}</p>

					<p>设计估价：{{designersObj.orderDesignDto.valuation}}</p>

				</div>

				<ul class="designers_designFile">
					<p>设计图</p>
					<li v-for="(item , index) in designersObj.designFile">
						<img :src="item.path" />
					</li>

				</ul>

				<div style="margin-top: 16px;">

					<Form :label-width="60">
						<FormItem label="出厂价">
							{{factoryPrice}}
						</FormItem>

						<!--<FormItem label="市场价">
							{{marketPrice}}
						</FormItem>-->

					</Form>

				</div>

			</div>

			<div slot="footer"></div>

		</Modal>

		<!--完善设计方案-->

		<Modal title="完善设计方案" v-model="perfectdesigners" @on-cancel="opendesignerscheme=true,designersImg=false">

			<div class="designers pushscheme">

				<Form :model="designersObj" :label-width="80">
					<FormItem label="设计名称">
						<Input v-model="designersObj.orderDesignDto.name" placeholder="请输入设计名称..." style="width:80%; margin-top:10px;"></Input>
					</FormItem>

					<FormItem label="设计估价">
						<Input v-model="designersObj.orderDesignDto.valuation" placeholder="请输入设计估价..." style="width:80%;"></Input>
					</FormItem>

					<FormItem label="设计描述">
						<textarea name="" v-model="designersObj.orderDesignDto.notes" rows="" cols="" placeholder="请输入设计描述..."></textarea>
					</FormItem>

					<FormItem label="设计图类型">
						<RadioGroup v-model="category">
							<Radio label="0">平面图</Radio>

						</RadioGroup>
					</FormItem>

				</Form>

				<div class="pl">
					<div class="demo-upload-list" v-for="(item,index) in uploadList">
						<template v-if="item.status === 'finished'">
							<img :src="item.path">
							<div class="demo-upload-list-cover">
								<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
								<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,index)"></Icon>
							</div>
						</template>
						<template v-else>
							<Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
						</template>
					</div>
					<Upload multiple ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFileList" style="display: inline-block;width:58px;">
						<div style="width: 58px;height:58px;line-height: 58px;">
							<Icon type="ios-camera" size="20"></Icon>
						</div>
					</Upload>
				</div>

			</div>

			

			<div slot="footer">
				<Button type="primary" @click="putdesigners">保存</Button>
			</div>

		</Modal>

		<Modal title="图片详情" v-model="visible">
			<img :src="imgName" v-if="visible" style="width: 100%">
			<div slot="footer"></div>
		</Modal>

		<!--检查确认设计方案-->
		<Modal title="检查确认设计方案" v-model="opendesigners" @on-cancel="opendesignerscheme=true,designersImg=false">

			<div class="designers">

				<div class="designers_head">
					<p>设计名称：{{opendesignersObj.orderDesignDto.name}}</p>

					<p>设计描述：{{opendesignersObj.orderDesignDto.notes}}</p>

					<p>设计估价：{{opendesignersObj.orderDesignDto.valuation}}</p>

				</div>

				<ul class="designers_designFile">
					<p>设计图</p>
					<li v-for="(item , index) in opendesignersObj.designFile">
						<img :src="item.path" />
					</li>

				</ul>

				<div style="margin-top: 16px;">

					<Form :label-width="60">
						<FormItem label="出厂价">
							<Input v-model="factoryPrice" placeholder="请输入出厂价..."></Input>
						</FormItem>

						<!--<FormItem label="市场价">
							<Input v-model="marketPrice" placeholder="请输入市场价..."></Input>
						</FormItem>-->

					</Form>

				</div>

			</div>

			<div slot="footer">
				<Button type="primary" @click="putdnstatus">确认提交</Button>
			</div>

		</Modal>
		
		<Modal v-model="adddmodels" title="提交设计费" width="40%">
			      <Form :label-width="80">
			      	<FormItem label="订单编号:"  style="width:45%; display: inline-block;">
			      		<div >{{ordernumber}}</div>
			      	</FormItem>
			      	<FormItem label="产品类型:" style="width:45%; display: inline-block;">
			      		<div>{{ordertypes}}</div>
			      	</FormItem>
					<FormItem label="设计费 (元):"  style="width:90%; ">
						 <Input placeholder="请输入内容..."></Input>
					</FormItem>
			      	<FormItem label="备注:"  style="width:90.5%; ">
			      		<Input type="textarea" :rows="3" placeholder="请输入内容..."></Input>
			      	</FormItem>
					
			      </Form>  
			
			
			<div slot="footer">
				<Button type="error" size="large" @click="adddmodels = false"  >取消</Button>
				<Button type="primary" size="large" @click="adddmodels = false" >确定</Button>
			</div>
		</Modal>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				//
				designerId:'',
				color:'',
				door: '',
				series: '',
				type: '',
				updateUser: '',
				updateTime: '',
				notes: '',
				designername:'',
				ifsearch: false,
               //修改数据
			   adddmodels:false,
			   ordernumber:'',
			   ordertypes:'',
				dlay:0,

				tableHeader: [{
						title: '订单编号',
						key: 'no',
						align:'center',
						width: 200,
						fixed: 'left',
					},
                    {
                    	title: '订单类型',
                    	key: 'type',
                    	width: 160,
                    	align:'center',
                    	render: (h, params) => {
                    
                    		var type = params.row.type
                    
                    		if(type == 0) {
                    
                    			var texts = '正常订单'
                    		} else if(type == 1) {
                    
                    			var texts = '增补订单'
                    		} else if(type == 2) {
                    
                    			var texts = '返货单'
                    		} else if(type == 3) {
                    
                    			var texts = '打样订单'
                    		} else if(type == 4) {
                    
                    			var texts = '样板订单'
                    		} else if(type == 5) {
                    
                    			var texts = '展厅订单'
                    		}
                    
                    		return h('div', texts)
                    	}
                    
                    },
                    
                    {
                    	title: '订单状态',
                    	width: 160,
                    	align:'center',
                    
                    	render: (h, params) => {
                    
                    		var status = params.row.status
                    
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
                    
                    		return h('div', texts)
                    	}
                    
                    },
					{
						title: '房屋面积',
						key: 'acreage',
						align:'center',
						width: 100,
					},
					
					
					
					{
						title: '设计师',
						key: 'designerName',
						width: 160,
						align:'center',
						render: (h, params) => {
					
							var designerName = params.row.designerName
					
							if(!designerName) {
					
								var texts = '未分配'
							} else {
					
								var texts = designerName
							}
					
							return h('div', texts)
						}
					},
					{
						title: '经销商名称',
						key: 'dealerName',
						align:'center',
						width: 160,
					},
					{
						title: '客户姓名',
						key: 'customerName',
						align:'center',
						width: 160,
					},

					{
						title: '客户电话',
						key: 'customerTel',
						align:'center',
						width: 160,
					},

					{
						title: '创建人',
						key: 'creatorName',
						width: 200,
						align:'center',
					},

					{
						title: '创建日期',
						key: 'created',
						width: 200,
						align:'center',
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
											type: 'info',
											size: 'small'
										},
										style: {
											marginRight: '5px'
										},
										on: {
											click: () => {
												
												this.$emit('openWindow', ('designDetails'), ('设计详情'), ('5-3'), ('designDetails'), ('designDetails'),(this.tableData[params.index].id))
												
//												this.$router.push({
//												name: 'designDetails',
//												query: {
//													id: 
//												}
//											})

											}
										}
									}, '详情'),
							
							])
						}
						
						}

//					{
//						title: '操作',
//						key: 'action',
//						width: 200,
//						fixed: 'right',
//						align: 'center',
//						render: (h, params) => {
//						
//							var designer = params.row.designer
//						    this.designername = params.row.designer
//							if(!designer) {
//						
//								return h('div', [
//						
//									h('Button', {
//										props: {
//											type: 'info',
//											size: 'small'
//										},
//										style: {
//											marginRight: '5px'
//										},
//										on: {
//											click: () => {
////												this.orderDemand = []
////												this.openOrdetails = true
////												this.getOrdetails(params.index)
////												this.orserBCmsg = this.tableData[params.index]
////												this.SetIndex = params.index
//											}
//										}
//									}, '详情'),
//
//										h('Button', {
//											props: {
//												type: 'primary',
//												size: 'small'
//											},
//											style: {
//												marginRight: '5px',
//												display:(function(){
//													if(params.row.status==3||params.row.status==4){
//														return "none"
//													}
//												})()
//											},
//											on: {
//												click: () => {				
//													 this.openhs = true;
//													 this.SetIndex = params.index;
//												}
//											}
//										}, '提交设计费'),
//						
//								]);
//						
//							} else {
//						
//								var status = params.row.status
//						
//								if(status == 4) {
//						
//									return h('div', [
//						
//										h('Button', {
//											props: {
//												
//												size: 'small'
//											},
//											style: {
//												marginRight: '5px'
//											},
//											on: {
//												click: () => {
//													this.orderDemand = []
//													this.SetIndex = params.index
//													this.getOrdetails(params.index)
//													this.openOrdetails = true
//													this.orserBCmsg = this.tableData[params.index]
//												}
//											}
//										}, '详情'),
//						
//										h('Button', {
//											props: {
//												type: 'info',
//												size: 'small'
//											},
//											style: {
//												marginRight: '5px'
//											},
//											on: {
//												click: () => {
//						
//													this.storstatus(params.index)
//						
//												}
//											}
//										}, '开始设计'),
//						
//									]);
//						
//								} else {
//						
//									return h('div', [
//						
//										/*h('Button', {
//											props: {
//												type: 'primary',
//												size: 'small'
//											},
//											style: {
//												marginRight: '5px'
//											},
//											on: {
//												click: () => {
//													this.orderDemand = []
//													this.SetIndex = params.index
//													this.getOrdetails(params.index)
//													this.openOrdetails = true
//													this.orserBCmsg = this.tableData[params.index]
//												}
//											}
//										}, '查看详情'),*/
//						
//										h('Button', {
//											props: {
//												type: 'info',
//												size: 'small'
//											},
//											style: {
//												marginRight: '5px'
//											},
//											on: {
//												click: () => {
//													
//													this.$router.push({
//												name: 'designDetails',
//												query: {
//													id: this.tableData[params.index].id
//												}
//											})
//						
////													/*this.SetModel = true*/
////													this.opendesignerscheme = true
////													this.SetIndex = params.index
////													this.orserBCmsg = this.tableData[params.index]
////						
////													var status = this.orserBCmsg.status
////						
////													this.dsData = []
////													this.getOrdetails(params.index)
////						
////													this.orderDemand = []
//						
//													/*this.purchaseData = this.tableData[params.index].purchaseProductDtoList*/
//						
//												}
//											}
//										}, '详情'),
//						
//									]);
//						
//								}
//						
//							}
//						
//						}
//
//					}
				],

				tableData: [], //表格数据
				SetModel: false,

				purchaseHeader: [],
				purchaseData: [],

				supplierData: [],
				warehouse: [],

				SetIndex: "", //点击编辑按钮时选中的位置
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
			
				
				loading: true,

				
				searchObj: {
					"no": "",
					"customerTel": "",

				},

				
				pathstatus: "",
				opendesigner: false,
				designerData: [],
				designerhead: [{
						title: '员工编号',
						key: 'no',

					},

					{
						title: '设计师姓名',
						key: 'userName',

					},

					{
						title: '设计师联系方式',
						key: 'mobile',

					},
					{
						title: '操作',
						key: 'action',

						align: 'center',
						render: (h, params) => {

							var designer = params.row.designer

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

											this.pickdesigner(params.index)

										}
									}
								}, '选择'),

							]);

						}

					}

				],
				designerobj: "",
				memberIndex: 1,
				memberpageSize: 20,
				memberpageIndextotal: 0,
				designerisSearch: false,
				designerObj: {
					name: "",
				},
                
				opendesignerscheme: false,
				dsHead: [{
						title: '设计编号',
						key: 'no',
						width: 200,

					},

					{
						title: '设计名称',
						key: 'name',
						width: 200,

					},

					{
						title: '设计说明',
						key: 'notes',
						width: 200,

					},

					{
						title: '设计状态',
						key: 'status',
						width: 200,
						render: (h, params) => {

							var status = params.row.status

							if(status == 0) {

								var texts = '设计中'
							} else if(status == 1) {

								var texts = '待审核'
							} else if(status == 2) {

								var texts = '设计发布'
							} else if(status == 3) {

								var texts = '待确认'
							} else if(status == 4) {

								var texts = '已完成'
							}

							return h('div', texts)
						}

					},

					{
						title: '修改意见',
						key: 'amendments',
						width: 200,

					},

					{
						title: '估价',
						key: 'valuation',
						width: 200,

					},

					{
						title: '设计师姓名',
						key: 'designName',
						width: 200,

					},

					{
						title: '设计师电话',
						key: 'designMobile',
						width: 200,

					},

					{
						title: '操作',
						align: 'center',
						fixed: 'right',
						width: 220,
						render: (h, params) => {

							var status = params.row.status

							if(status == 0 && this.isSub == false) {
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

												this.getdesignersObj(params.index, 0)

											}
										}
									}, '查看'),

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
												this.opendesignerscheme = false;
												this.designersIndex = params.index
												this.getdesignersObj(params.index, 1)
											}
										}
									}, '编辑'),

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
												this.designersIndex = params.index
												/*this.putdnstatus(params.index)*/
												this.opendesigners = true
												this.opendesignerscheme = false
												this.opendnstatus(params.index)
											}
										}
									}, '提交'),
									h('Poptip', {
										props: {
											confirm: true,
											title: '您确定要删除这条数据吗?',
											transfer: true
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
								]);
							} else if(status == 0 && this.isSub == true) {
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

												this.getdesignersObj(params.index, 0)

											}
										}
									}, '查看'),

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
												this.opendesignerscheme = false;
												this.designersIndex = params.index
												this.getdesignersObj(params.index, 1)
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
								]);
							} else if(status == 1 || status == 2 || status == 3) {
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

												this.getdesignersObj(params.index, 0)

											}
										}
									}, '查看'),
								
										h('Button', {
											props: {
												type: 'primary',
												size: 'small'
											},
											style: {
												marginRight: '5px',
											},
											on: {
												click: () => {
									
													this.getdesignersOk(params.index)
									
												}
											}
										}, '确认方案'),

									/*h('Poptip', {
										props: {
											confirm: true,
											title: '您确定要删除这条数据吗?',
											transfer: true
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
									])*/
								]);
							} else if(status == 4) {
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

												this.getdesignersObj(params.index,0)

											}
										}
									}, '查看'),

								]);
							}

						}

					}
				],
				dsData: [],
				dsDataCache: [],
				orserBCmsg: {
					no: "",
					customerName: "",
					customerTel: "",
					address: "",
					dealerName: '',
					dealerAddress: '',

				},

				pushscheme: false,
				pushschemeObj: {
					name: "",
					notes: "",
					valuation: "0",
				},

				designersImg: false,
				designersObj: {
					"orderDesignDto": {
						"created": "",
						"customOrderId": "",
						"designMobile": "",
						"designName": "",
						"designer": "",
						"id": "",
						"name": "",
						"no": "",
						"notes": "",
						"status": "",
						"valuation": "",
					},
					designFile: []
				},

				//订单详情：openOrdetails
				openOrdetails: false,
				DemandOpen: false,
				orderDemandHead: [
					{
						title: '类型',
						key: 'type',
						width: 200,
						align: 'center',
					    	render: (h, params) => {
					    	const row = params.row;
					    	var text
					    	if (row.type == 0) {
					    		text = '橱柜'
					    	} else if (row.type == 1) {
					    		text = '衣柜'
					    	} else if (row.type == 2) {
					    		text = '成品家具'
					    	}else if (row.type == 3) {
					    		text = '电器'
					    	}else if (row.type == 4) {
					    		text = '五金'
					    	}
					    	return h('div', text);
					    }
					},
					{
						title: '产品颜色',
						key: 'color',
						align: 'center',
						width: 200,

					},
					
					
					{
						title: '门型',
						key: 'door',
						width: 200,
						align: 'center',
					
					},
					{
						title: '系列',
						key: 'series',
						width: 200,
						align: 'center',
					    	render: (h, params) => {
					    	const row = params.row;
					    	var text
					    	if (row.series == 0) {
					    		text = '定制实木'
					    	} else if (row.series == 1) {
					    		text = '特供实木'
					    	} else if (row.series == 2) {
					    		text = '美克'
					    	}else if (row.series == 3) {
					    		text = '康奈'
					    	}else if (row.series == 4) {
					    		text = '慧娜'
					    	}else if (row.series == 5) {
					    		text = '模压'
					    	}
					    	return h('div', text);
					    }
					},

					
					{
						title: '修改人',
						key: 'updateUserName',
						width: 200,
						align: 'center',

					},
					
					{
						title: '修改时间',
						key: 'updateTime',
						width: 200,
						align: 'center',

					},

					{
						title: '备注',
						key: 'notes',
						width: 200,
						align: 'center',

					},
					

					

					{
						title: '操作',
						align: 'center',
						fixed: 'right',
						width: 120,
						align: 'center',
						render: (h, params) => {

							var designer = params.row.designer

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
 														this.color= '';
 														this.door= '';
 														this.series= '';
 														this.type= '';
 														this.updateUser= '';
 														this.updateTime= '';
 														this.notes= '';
														this.openOrdetails = false;
														this.DemandOpen = true;
														this.getOrdemand(params.index);
												        this.setindexdep=params.index;
											}
										}
									},
									'需求详情'),
// 									h('Button', {
// 											props: {
// 												type: 'error',
// 												size: 'small'
// 											},
// 											style: {
// 												marginRight: '5px'
// 											},
// 											on: {
// 												click: () => {
// 									
// // 													this.Demandobj = {
// // 														"customOrderDemand": {
// // 															"content": "",
// // 															"created": "",
// // 															"creator": "",
// // 															"customOrderId": "",
// // 															"id": "",
// // 															"name": "",
// // 															"no": "",
// // 														}
// // 													}
// 													// this.openOrdetails = false
// 													this.DemandOpen = true
// 													this.getOrdemand(params.index)
// 									
// 												}
// 											}
// 										},
// 										'取消分配设计师'),

							]);

						}

					}

				],

				orderDemand: [],

				Demandobj: {
					"customOrderDemand": {
						"color": "",
						"door": "",
						"series": "",
						"type": "",
						"updateUser": "",
						"updateTime": "",
						"notes": "",
					},
					demandFile: []
				},
				//up
				designersIndex: "",
				opneUpimg: false,
				perfectdesigners: false,
				stpushschemeObj: {
					name: "",
					notes: "",
					valuation: "0",
				},
				file: "",
				category: '0',
				uploadpathdata: '',
				defaultList: [],
				imgName: '',
				visible: false,
				uploadList: [],
				uparry: {
					multipartFileList: []
				},

				//检查确认设计图
				opendesigners: false,

				opendesignersObj: {
					"orderDesignDto": {
						"created": "",
						"customOrderId": "",
						"designMobile": "",
						"designName": "",
						"designer": "",
						"id": "",
						"name": "",
						"no": "",
						"notes": "",
						"status": "",
						"valuation": "",
					},
					designFile: []
				},

				factoryPrice: "", //出厂价
				marketPrice: "", //市场价
				isSub: false,
				openhs: false,
				designfee: "",
				operation: {},
				des_img:false,
				des_imgpath:"",
			
                uploadFiles:[],
			};
		},

		methods: {
			
			newOpen:function  () {
				this.$emit('openWindow', ('designorderNewly'), ('新建设计'), ('5-1'), ('designorderNewly'), ('designorderNewly'))
			},
			
			//设计的确认
			getdesignersOk(index){
				var orid = this.tableData[this.SetIndex].id;
				var did = this.dsData[index].id;
				var that = this
				
				this.axios({
					method: 'put',
					url: '/api/f/customorders/'+orid+'/designerssubmit/',
					data:{
						    designId:did,
							status:7,
					     }
				
				}).then(function(res) {	
				  
				   that.$Message.success("操作成功")
				   that.opendesignerscheme=false;
				   that.getDatas();
				  	
				})
				
				
			},
			//提交扣取设计费
			isdesignfeeok(){
				var that = this
				
				 if(!/^\d{1,8}(\.\d{1,2})?$/.test(that.designfee)) {
					this.$Message.error('设计费位数过长或小数点后超两位且不能为负');
					return false;
				}
				this.axios({
					method: 'put',
					url: '/api/f/accounts/designfee/' + that.tableData[this.SetIndex].id,
					data:{
						    presentPrice: that.designfee,
					     }
				
				}).then(function(res) {					
				   that.$Message.success("操作成功")
				   that.openhs = false;
				   that.changestatus();	
				})
		
				
			
			
			},
			
			changestatus(){
			var that = this
			this.axios({
					method: 'put',
					url: '/api/f/customorders/'+ that.tableData[this.SetIndex].id+'/designevaluation' ,
					data:{
						   "status":"3"
					     }
				
				}).then(function(res) {
								
					that.$Message.success("操作成功")
				    that.getDatas();
				
				})				
			},
			
			
			designerpay(index){
				var index = this.SetIndex;
				this.adddmodels=true;
				this.ordernumber=this.tableData[index].no;
				var orid = this.tableData[index].id;
				
				var that = this
				this.axios({
					method: 'get',
					url: '/api/f/customorders/' + orid + '/info'
				
				}).then(function(res) {

					var data = res.data.data.orderDemand
					 var leng =data.length
					  console.log(leng)
					 if(leng==1){  					
					 	that.ordertypes="产品的产品类型";
						  console.log(that.ordertypes)
					 }else if(leng>1){
					 	that.ordertypes="多品";
					 }
				
				
				})
				
 				
 				
			},
			//设计费核算
			isdesignfee: function() {

			},

			storstatus: function(index) {

				var id = this.tableData[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'put',
					url: '/api/f/customorders/'+id+'/designerssubmit',
					
					data:{
						status:'5'
					}

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.tableData[index].status = 5;

					that.SetModel = false;
					that.$Message.success("操作成功")
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

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
				this.uploadList = this.$refs.upload.fileList
				for(var i=0; i<Res.length;i++){
					file.path = Res[i].path
				    file.id = Res[i].id
				}

				var dsDataCache = this.dsDataCache
				var obj = {
					path: Res[0].path

				}

				/*	dsDataCache[this.dsData[this.designersIndex].id].designFile.push(obj)
					this.dsDataCache = dsDataCache*/

				
				

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

			//up-end

			

			//

			setIsok: function() {

				var id = this.tableData[this.SetIndex].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'put',
					url: '/api/f/purchases/' + id + '/1',

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.tableData[that.SetIndex].status = 1;
					that.tableData.splice(that.SetIndex, 1);
					that.SetModel = false;
					that.$Message.success("审核成功")
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//检索信息
			serchorder() {
				this.ifsearch = true;
				this.pageIndex = 1;
				this.searchData();
			},
			changepage(index) {
				if (this.ifsearch == true) {
					let that = this;
					this.pageIndex = index;
					this.searchData();
				} else {
					searchObj.customerTel='';
					searchObj.no='';
					this.pageIndex = index;
					this.getDatas();
				}
			},


			//调用检索api接口
			searchData: function() {

			var searchobj = this.searchObj

				var no = searchobj.no
				var customerTel = searchobj.customerTel

				var pathurl = ""

				if(no != "" && no != null && no.trim().length != 0) {
					pathurl += 'no=' + no + "&"
				}

				if(customerTel != "" && customerTel != null && customerTel.trim().length != 0) {
					pathurl += 'customerTel=' + customerTel + "&"
				}


				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				this.loading = true

				var that = this

				this.axios({
					method: 'get',
					url: '/api/f/customorders?status=1&status=3&status=4&status=5&status=6&' + pathurl + '&pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

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

			//设计师检索

			designersearch: function() {

				var designerobj = this.designerObj
				var name = designerobj.name

				if(name.trim().length == 0) {
					this.$Message.error('检索条件不能为空');

					return false;
				} else {
					this.memberIndex = 1
					this.designersearchData()
				}

			},

			designersearchData: function() {

				var that = this

				var designerobj = this.designerObj
				var name = designerobj.name
				var pathurl = ""
				if(name != "" && name != null && name.trim().length != 0) {
					pathurl += 'name=' + name + "&"
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				//请求设计师信息
				this.axios({
					method: 'get',
					url: '/api/f/depts/members?roleId=4k8dgjvu8mwz&status=0&' + pathurl + '&pageNum=' + this.memberIndex + '&pageSize=' + this.memberpageSize,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data
					//that.$Message.success("请求成功")
					that.designerData = data
					that.memberpageIndextotal = dataAll.pagination.total

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},
            
			//分配设计师
            setsdesigner:function(selection){
				if(this.$refs.selection.status==true){
					this.$refs.selection=false;
				}
				this.opendesigner = true;
			},
			pickdesigner: function(index) {
				var orid = this.tableData[this.SetIndex].id
				var did = this.designerData[index].userId

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

				this.axios({
					method: 'put',
					url: '/api/f/customorders/' + orid + '/designers/' + did,

				}).then(function(res) {
					setTimeout(msg, 100);

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
                    
					// that.tableData.splice(that.SetIndex, 1);

					that.opendesigner = false;
					that.openOrdetails = false;
					that.$Message.success("操作成功")
					that.getDatas();
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

			},

			//产品需求 
			getOrdemand: function(index) {
	           var index = index;
			   console.log(this.orderDemand[index])
			   this.color = this.orderDemand[index].color;
			   this.door =this.orderDemand[index].door;
			   this.series = this.orderDemand[index].series;
			   this.type = this.orderDemand[index].type;
			   this.updateUser = this.orderDemand[index].updateUserName;
			   this.updateTime =this.orderDemand[index].updateTime;
			   this.notes = this.orderDemand[index].notes;
			   this.uploadFiles = this.orderDemand[index].uploadFiles
	
			},

			//订单详情
			getOrdetails: function(index) {

				this.isSub = false

				var orid = this.tableData[index].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this
                
				this.axios({
					method: 'get',
					url: '/api/f/customorders/' + orid + '/info'

				}).then(function(res) {
					
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					
					var data = res.data.data;
					that.designerId=data.customOrder.designer;
                    console.log(data)
					that.orderDemand = data.orderProducts
					
					that.dsData = data.orderDesign

					for(var i = 0; i < that.dsData.length; i++) {

						var status = that.dsData[i].status

						if(status == 3) {
							that.isSub = true
						}

					}

					//that.$Message.success("请求成功")

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
			},

			designerOpen: function() {
				this.opendesignerscheme = false,
					this.pushscheme = true

			},

			//创建设计方案

			pushdesigner: function() {
				var orid = this.tableData[this.SetIndex].id
				var pushschemeobj = this.pushschemeObj

				var name = pushschemeobj.name
				var notes = pushschemeobj.notes
				var valuation = pushschemeobj.valuation			
                var reg=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
               	
				if(name == "" || name == null || name.trim().length == 0) {
					this.$Message.error('设计名称不能为空！');
					return false;
				} else if(valuation == "" || valuation == null || valuation.trim().length == 0) {
					this.$Message.error('设计估价不能为空！');
					return false;
				}else if(!/^\d{1,8}(\.\d{1,2})?$/.test(valuation)) {
					this.$Message.error('设计估价位数过长或小数点后超两位且不能为负');
					return false;
				}
				/*
					pushschemeObj:{
									name:"",
									notes:"",
									:"",
								},*/

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
					method: 'post',
					url: '/api/f/customorders/' + orid + '/designs',

					data: {
						name: name,
						notes: notes,
						valuation: valuation
					}

				}).then(function(res) {

					var verify = [{
							"name": "name",
							"note": "设计名称"
						},
						{
							"name": "notes",
							"note": "设计描述 "
						},
						{
							"name": "valuation",
							"note": "设计估价 "
						},
					]

					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}
					var data = res.data.data
					that.dsData.push(data)

					for(var i = 0; i < that.dsData.length; i++) {

						var status = that.dsData[i].status

						if(status == 3) {
							that.isSub = true
						}
					}

					that.pushscheme = false
					that.opendesignerscheme = true

					that.$Message.success("创建成功")

					that.pushschemeObj = {
							name: "",
							notes: "",
							valuation: "0",
						},

						console.log(data)

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
				
			},

			//离开创建设计记录

			outpushscheme: function() {
				this.opendesignerscheme = true,
					this.pushscheme = false
				this.pushschemeObj = {
					name: "",
					notes: "",
					valuation: "0",
				}
			},

			//检查确认设计方案

			opendnstatus: function(index) {

				var orid = this.tableData[this.SetIndex].id;
				var did = this.dsData[index].id;

				this.factoryPrice = this.tableData[this.SetIndex].factoryFinalPrice
				this.marketPrice = this.tableData[this.SetIndex].marketPrice

				var dsDataCache = this.dsDataCache

				var that = this
				if(!dsDataCache[did]) {
					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					this.axios({
						method: 'get',
						url: '/api/f/customorders/' + orid + '/designs/' + did,

					}).then(function(res) {
						setTimeout(msg, 100);
						that.loading = false
						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						//that.$Message.success("请求成功")
						var data = res.data.data

						dsDataCache[did] = data
						that.opendesignersObj = data
						that.opendesigners = true

					}).catch(function(err) {
						setTimeout(msg, 100);
						that.$Message.error('出错了，请稍后重试！');
						that.loading = false

					})
				} else {

					this.opendesignersObj = dsDataCache[did]
					this.opendesigners = true

				}

				this.dsDataCache = dsDataCache
			},



			//查询设计记录详情
			getdesignersObj: function(index, type) {

				this.uploadpathdata = "";
				var orid = this.tableData[this.SetIndex].id;
				var did = this.dsData[index].id;
				this.uploadpathdata = '/api/f/customorders/' + orid + '/designs/' + did + '/files?category=' + this.category

				this.factoryPrice = this.tableData[this.SetIndex].factoryPrice
				this.marketPrice = this.tableData[this.SetIndex].marketPrice

				/*var dsDataCache = this.dsDataCache*/

				var dsDataCache = {}

				var that = this
				if(!dsDataCache[did]) {
					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					this.axios({
						method: 'get',
						url: '/api/f/customorders/' + orid + '/designs/' + did,

					}).then(function(res) {
						setTimeout(msg, 100);
						that.loading = false
						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						//that.$Message.success("请求成功")
						var data = res.data.data

						dsDataCache[did] = data
						that.designersObj = data

						that.uploadList = that.$refs.upload.fileList
						that.uploadList = that.defaultList = that.designersObj.designFile;

						that.opendesignerscheme = false

						if(type == 0) {
							that.designersImg = true
						} else {
							that.perfectdesigners = true;
						}

					}).catch(function(err) {
						setTimeout(msg, 100);
						that.$Message.error('出错了，请稍后重试！');
						that.loading = false

					})
				} else {

					this.designersObj = dsDataCache[did]

					this.uploadList = that.$refs.upload.fileList
					this.uploadList = that.defaultList = that.designersObj.designFile;

					this.opendesignerscheme = false

					if(type == 0) {
						this.designersImg = true
					} else {
						this.perfectdesigners = true;
					}

				}

				/*this.dsDataCache = dsDataCache*/

			},

			//提交设计记录

			putdnstatus: function() {

				var index = this.designersIndex
				var orid = this.tableData[this.SetIndex].id;
				var did = this.dsData[index].id;

				var num = /^[0-9]*$ /
				var factoryPrice = this.factoryPrice.toString()
				var marketPrice = this.marketPrice
				
				if(factoryPrice == "" || factoryPrice == null || factoryPrice.trim().length == 0) {
					this.$Message.error('出厂价不能为空！');
					return false;
				} 
// 				else if(marketPrice == "" || marketPrice == null || marketPrice.trim().length == 0) {
// 					this.$Message.error('市场价不能为空！');
// 					return false;
				else if(!/^\d{1,8}(\.\d{1,2})?$/.test(factoryPrice)) {
					this.$Message.error('设计估价位数过长或小数点后超两位且不能为负');
					return false;
				}

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				//                    /
				this.axios({
					method: 'put',
					url: '/api/f/customorders/' + orid + '/designs/' + did,

					data: {
						status: 3
					}

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.dsData[index].status = 3

					that.orserBCmsg.status = 5

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

				this.axios({
					method: 'put',
					url: '/api/f/customorders/' + orid + '/designerssubmit',
					

					data: {
						factoryPrice: factoryPrice,
						marketPrice: marketPrice,
						status:'6',
					}

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					that.tableData[that.SetIndex].factoryPrice = factoryPrice
					that.tableData[that.SetIndex].marketPrice = marketPrice
					that.tableData[that.SetIndex].status = 6
					that.opendesigners = false
					that.opendesignerscheme = true
					that.$Message.success("提交成功")
					that.isSub = true

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})
			},

			//删除设计记录

			delTabData: function(index) {
				var orid = this.tableData[this.SetIndex].id;
				var did = this.dsData[index].id;

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				//                    /
				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + orid + '/designs/' + did,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.dsData.splice(index, 1)
					that.isSub = false
					for(var i = 0; i < that.dsData.length; i++) {

						var status = that.dsData[i].status

						if(status == 3) {
							that.isSub = true
						}

					}

					that.$Message.success("删除成功")

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

			},

			//保存设计单信息

			putdesigners: function() {

				var orderDesigndto = this.designersObj.orderDesignDto

				var name = orderDesigndto.name
				var notes = orderDesigndto.notes

				var valuation = orderDesigndto.valuation.toString()

				if(name == "" || name == null || name.trim().length == 0) {
					this.$Message.error('设计名称不能为空');
					return false;
				} else if(valuation.trim().length == 0) {
					this.$Message.error('估价不能为空');
					return false;
				}else if(!/^\d{1,8}(\.\d{1,2})?$/.test(valuation)) {
					this.$Message.error('设计估价位数过长或小数点后超两位且不能为负');
					return false;
				}

				var orid = this.tableData[this.SetIndex].id;
				var did = this.dsData[this.designersIndex].id;

				var dsDataCache = this.dsDataCache

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				//                    /
				this.axios({
					method: 'put',
					url: '/api/f/customorders/' + orid + '/designs/' + did,

					data: {
						name: name,
						notes: notes,
						valuation: valuation

					}

				}).then(function(res) {

					

					var verify = [{
							"name": "name",
							"note": "设计名称"
						},
						{
							"name": "notes",
							"note": "设计描述 "
						},
						{
							"name": "valuation",
							"note": "设计估价 "
						},
					]

					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

					var data = res.data.data;

					/*	dsDataCache[did].orderDesignDto = data
					 */
					that.dsData[that.designersIndex].name = data.name
					that.dsData[that.designersIndex].notes = data.notes
					that.dsData[that.designersIndex].valuation = data.valuation
					that.dsData[that.designersIndex].status = data.status

					that.$Message.success("保存成功");

					that.opendesignerscheme = true;
					that.perfectdesigners = false;

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

				this.dsDataCache = dsDataCache

			},

			//删除资源

			delfile: function(fileid, index) {
				
				

				var orid = this.tableData[this.SetIndex].id;
				var did = this.dsData[this.designersIndex].id;

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var dsDataCache = this.dsDataCache

				var that = this
				//                    /
				this.axios({
					method: 'delete',
					url: '/api/f/customorders/' + orid + '/designs/' + did + '/files/' + fileid,

				}).then(function(res) {
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					/*const fileList = that.$refs.upload.fileList;
				    that.$refs.upload.fileList.splice(index, 1);*/
					that.uploadList.splice(index, 1)
					//that.$refs.upload.fileList=that.uploadList
					/*dsDataCache[did].designFile = that.uploadList*/
					that.$Message.success("删除成功")

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');
					setTimeout(msg, 100);

				})

				this.dsDataCache = dsDataCache

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

			newdesignerData: function() {
				this.designerisSearch = false
				this.designerObj = {
						"name": "",

					},
					this.memberIndex = 1
				this.designersearchData()

			},

			getDatas: function() {
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});
				var that = this

				this.axios({
			    method: 'get',
				url: '/api/f/customorders?status=1&status=3&status=4&status=5&status=6' +  '&pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,
				


				}).then(function(res) {
					console.log(res)
					setTimeout(msg, 100);
					that.loading = false
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					var dataAll = res.data
					var data = res.data.data
					that.tableData = data
					
					that.pageSize=dataAll.pagination.pageSize;
					that.pageIndex=dataAll.pagination.pageNum;
					that.pageIndextotal = dataAll.pagination.total
					

				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');
					that.loading = false

				})
			},

			getdesignerData: function() {

				var that = this

				//请求设计师信息
				this.axios({
					method: 'get',
					url: '/api/f/depts/members?roleId=4k8dgjvu8mwz&status=0&pageNum=' + this.memberIndex + '&pageSize=' + this.memberpageSize,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}  

					var dataAll = res.data
					var data = res.data.data

					that.designerData = data

					

					that.memberpageIndextotal = dataAll.pagination.total

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})
			},
			
			banner_Img:function  (index,indexs) {
				this.des_img=true
				
				this.des_imgpath=this.orderDemand[index].customOrderFiles[indexs].path
			},


		},

		mounted: function() {

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)


			this.getDatas()
			this.getdesignerData()

			//up

			this.uploadList = this.$refs.upload.fileList;

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
		width: 80%;
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
	
	.designer_order .designer_lay{
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	
	.designer_order .designer_lay ul{
		display: block;
		width: 100px;
	}
	.designer_order .designer_lay ul li{
		width: 100px;
		line-height: 30px;
	}
	
	
	
	.designer_order .designer_lay ul li a{
	  color: #000000;
	}
	
	.designer_order .designer_lay ul li.ac a{
		color: cornflowerblue;
	}
	
	
	.designer_center{
		padding-left: 100px;
		padding-right: 20px;
		max-height: 600px;
		overflow: auto;
	}
	
	.designer_order h5.lay_Anchor{
		padding-bottom: 10px;
	}


  .designer_order .order_msg{
  	padding: 10px;
   	border: solid 1px whitesmoke;
   }
   
   .designer_order .order_demand{
   border: solid 1px whitesmoke;
   	padding: 10px;
   }


   .designer_order .order_demand ul{
   	display: block;
   	width: 100%;
   }
   
   .designer_order .order_demand ul li{
   	padding: 10px;
   	background: #EEEEEE;
   	position: relative;
   	margin-bottom: 10px;
   }
   
   .designer_order .order_demand ul li .order_demandMsg{
   	position: absolute;
   	top: 10px;
   	left: 10px;
   	width: 200px;
   	height: 200px;
   	box-sizing: border-box;
   	border-right: solid 1px #E8E8E8;
   	overflow: hidden;
   }
   
   .designer_order .order_demand ul li .order_demandMsg p{
   	line-height: 2em;
   }
   
   .designer_order .order_demand ul li .order_demandCenter{
   
   padding-right: 10px;
   	padding-left: 220px;
   
   	height: 200px;
   	overflow: auto;
   	
   }
   
   
   .designer_order .order_demand ul li .order_demandCenter .designer_img{
   	display: block;
   	padding: 10px;
   	background: white;
   	margin-bottom: 10px;
   }
   
   .designer_order .order_demand ul li .order_demandCenter .designer_img img{
   	display: block;
   	width: 100%;
   	
   }
   
   .designer_order .order_project{
   	margin-top: 20px;
   }

.des_img img{
	display: block;
	width: 100%;
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
</style>

<style src='./../../assets/css/department.css'></style>