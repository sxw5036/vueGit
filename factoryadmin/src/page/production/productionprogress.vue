<template>
	<div class="contain">
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>生产执行管理</BreadcrumbItem>
			</Breadcrumb>
			<Row>
				<Col span="20" style="margin-bottom: 20px;margin-top: 20px;">
				<div>
					生产单编号：<Input v-model="ordernumber" placeholder="请输入生产单编号..." style="width: 16%;margin:0 5px;"></Input>
					<!-- 生产状态：<Select v-model="orderstatus" style="width:12%;margin:0 5px;">
						 <Option v-for="item in orderstatusList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select> -->
					<Button @click="serchorder" icon="ios-search" >搜索</Button>
				</div>
				</Col>
				<Col span="4" style="margin-bottom: 20px;margin-top: 20px;text-align: right;">
					<Button type="primary" @click="beginproduce">开始生产</Button>
				</Col>
			</Row>
			<div span="20" style="padding-bottom: 30px; margin-bottom: 30px;">
			  <Table :columns="columns1" :data="data1" border></Table>
			  </div>
			<div class="fenye_produce">
				<Page :total="totalpage" :page-size="pageSize" show-total @on-change="changepage" :current="currents" show-elevator />
			</div>
		</div>
	
		<!-- 需求详情 -->
		<Modal v-model="demandstatus" title="需求详情" @on-ok="desginok" @on-cancel="desgincancel" width=60%>
			<Row span="24">			
				<Col span="8">
				<span>需求单编号: {{ customOrderDemands.no}}</span>
				</Col>
				<Col span="8">
				<span>需求内容: {{ customOrderDemands.content }}</span>
				</Col>	
				<Col span="8">
				<span>需求名:   {{ customOrderDemands.name }}</span>
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
			<div class="upload-list"  v-for="item in demandfilearr">
				<img :src="item.path" alt="" >
			</div>
			<div slot="footer">
              <Button type="error" size="large" @click="demandstatus = false">关闭</Button>
            </div>
		</Modal>
		<!-- 需求详情 -->
		<!-- 设计详情 -->
		<Modal v-model="designstatus" title="设计详情"  width="60%">
			 <Row span="24">			
				<Col span="8">
				<span>设计单编号: {{ orderDesignDtos.no}}</span>
				</Col>
				<Col span="8">
				<span>设计备注: {{ orderDesignDtos.notes }}</span>
				</Col>	
				<Col span="8">
				<span>设计名称:   {{ orderDesignDtos.name }}</span>
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
				<span  style="visibility: hidden;">1</span>
				</Col>																											
			</Row>
			<br>
			<div class="upload-list"   v-for="item in designFilearr">
				<img :src="item.path" alt="" >
			</div> 
			<div slot="footer">
              <Button type="error" size="large" @click="designstatus = false">关闭</Button>
            </div>
			
		</Modal>
		<!-- 设计详情 -->
		<!-- 生产单详情 -->
		<Modal v-model="orderdetail" title="生产单详情"  width=50%; >
			
			<div >
				<Row span="24" style="padding:10px;">
					<Col span="9" >
						<ul class="orderBase">
							   
					           <li >
					    		<span>生产单编号：{{this.no}}</span>    
					    	   </li>
							   <li >
							   	<span v-show="this.state==0">生产单状态：未开始</span>
							   	<span v-show="this.state==1">生产单状态：进行中</span>
							   	<span v-show="this.state==2">生产单状态：已完成</span>   
							   </li>
							   <li >
							   <span> 跟单员：{{this.merchandiserName}}</span>    
							   </li>
							   <li >
							   <span>	经销商：{{this.dealerName }}</span>    
							   </li>
							   <li >
							   <span>	客户信息：{{this.customerName}}</span>    
							   </li>
							   <li >
							   <span>	计划生产时间：{{this.plannedTime}}</span>    
							   </li>
							   
							   <li >
							   	<span>    生效时间：{{this.payTime}}</span>    
							   </li>
							   <li >
							   	<span>计划交付时间：{{this.estimatedDeliveryDate}}</span>    
							   </li>
							  
						</ul>	   
					</Col>
					<Col span="15">
					 <div style=" margin-left: 20px; margin-top: 10px; font-size:16px;font-weight: 500;">
						 生产单状态
					 </div>
					 <div style="margin-left: 20px; margin-top: 10px;">
						 <div class="showcircle">
							 <p  style="margin-top: 10px;" v-for="(item,index) in production"> <span id="preparation" style="margin-right: 10%; padding-left:10px ; font-size: 14px;" >{{item.name}}</span><Button id="buttonsone"   :disabled="(item.operationTime=='')?false:true" class="buttonsones" type="primary" size="small" @click="producting(index)">完成{{item.name}}</Button>  <span style="margin-left: 6%;">操作时间 : </span>{{item.operationTime}} <span style="margin-left: 2%;;">操作人 : </span>{{item.operatorName}}</p>
						 </div>																	 
					</div>
				    </Col>																								
				</Row>
				
			</div>
			<div slot="footer">
                     <Button type="error" size="large" @click="orderdetail = false">关闭</Button>
            </div>
		</Modal>
		<!-- 订单详情 -->
		<!-- 开始生产 -->
		<Modal v-model="orderstart" title="开始生产列表"  width=60%; >
			<div >
			    <Table border ref="selection" @on-selection-change="datastart" :columns="columns5" :data="data5"></Table>
			</div>
			<div slot="footer">
		      <Button type="error" size="large" @click="orderstart = false">关闭</Button>
			  <Button type="primary" size="large" @click="startproduce">确定</Button>
		    </div>
		</Modal>
		<!-- 放大图片 -->
		<Modal title="图片详情" v-model="visible" style="text-align: center;">
		    <img :src="bigimg" v-if="visible" style="width: 80%;">
		</Modal>
		<!-- 放大图片 -->
		<Modal v-model="ordertype" title="生产单状态改变"  width=30%; >
			<div >
			   <p>生产单的状态： 
			      <span v-show="this.setType==0">完成备料</span>
				  <span v-show="this.setType==1">完成开料</span>
				  <span v-show="this.setType==2">完成封边</span>
				  <span v-show="this.setType==3">完成排钻</span>
				  <span v-show="this.setType==4">完成修色</span>
				  <span v-show="this.setType==5">完成试组</span>
				  <span v-show="this.setType==6">完成包装</span>
			   </p>
			   备注：<Input v-model="notestextarea" type="textarea" :rows="2" placeholder="请输入备注..." style="width: 60%;margin:20px 5px 5px 10px;"></Input>
			   
				
			</div>
			<div slot="footer">
		      <Button type="error" size="large" @click="ordertype = false">关闭</Button>
			  <Button type="primary" size="large" @click="statuesure">确定</Button>
		    </div>
		</Modal>
	</div>
</template>

<script>
    import returndata from '@/assets/js/returndata.js' 
	export default {
		data() {
			return {
				
				production:[
					{
						name:"备料",						
						operationTime:"",
						operatorName:"",						
					},
					{
						name:"开料",						
						operationTime:"",
						operatorName:"",						
					},
					{
						name:"封边",					
						operationTime:"",
						operatorName:"",						
					},
					{
						name:"排钻",					
						operationTime:"",
						operatorName:"",						
					},
					{
						name:"修色",						
						operationTime:"",
						operatorName:"",						
					},
					{
						name:"试组",						
						operationTime:"",
						operatorName:"",						
					},
					{
						name:"包装",						
						operationTime:"",
						operatorName:"",						
					}
				],
				
				//生产单过程数据
				Dredgingperson:'',
				Dredgingtime:'',
				Dredgingnote:'',
				Bendingtime:'',
				Bendingperson:'',
				Bendingnote:'',
				preparationtime:'',
				preparationperson:'',
				preparationnote:'',
				punchingtime:'',
				punchingnote:'',
				punchingperson:'',
				washingperson:'',
				washingnote:'',
				washingtime:'',
				Testingperson:'',
				Testingnote:'',
				Testingtime:'',
				packingsperson:'',
				packingstime:'',
				packingsnote:'',
				
				
				notestextarea:'',
				ordernumber:'',
				ordertype:false,
				setType:'',
				orderId:'',
				chosedId:'',
				//拿到生产单数据
				no: '',
				type: '',
				plannedTime:'',
				dealerName: '',
				customerName: '',
				state: '',
				merchandiserName: '',
				payTime: '',
				estimatedDeliveryDate: '',
				orderproducedetails:[],
				
				
				orderstart:false,
				orderlis_start:[],
				//设计详情的数据
				bigimg:'',
				visible:false,
				operation:{},
			    ifsearch:false,
				demandstatus:false,
				designstatus:false,
				//订单详情数据
				orderdata:"",
				orderdetail: false,
				data3:[],
				data4:[],
				columns3:[
					{
                        title: '需求单编号',
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
						width:120,
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
				columns4:[
					  {
					    title: '设计单号',
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
							if (row.status == 0) {
								text = '设计中'
							}else if(row.status == 1){
								text = '待审核'
							}else if(row.status == 2){
								text = '待发布'
							}else if(row.status == 3){
								text = '待确认'
							}else if(row.status == 4){
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
						width:120,
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
				//订单详情数据
				changeorderstatus: '',
				changestatus: false,
				orderstatusList: [ {
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
				A:'',
				totalpage: 10,
				pageSize: 20,
				orderstatus: '',
				orderstatuss: '',
				customtel: '',
				ordernum: '',
				columns1:  [{
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
							if (row.type == 0) {
								text = '柜体'
							} else if (row.type == 1) {
								text = '门板'
							} else if (row.type == 2) {
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
							if (row.state == 0) {
								text = '未开始'
							} else if (row.state == 1) {
								text = '生产中'
							} else if (row.state == 2) {
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
						
							text = row.estimatedDeliveryDate.substr(0,10)
						
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
						
							text = row.plannedTime.substr(0,10)
						
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
										disabled: !this.operation.view
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.orderdetails(params.index);
											this.setstate = this.data1[params.index].state;
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
				currents: 1,
				pageNum: '',
				changestatusindex: '',
				useid:'',
				customOrderDemands:'',
				demandfilearr:[],
				orderDesignDtos:'',
				designFilearr:[],
				statusindex:"",
				none:'',
				orderdatas:'',
				setstate:'',
				data5:[],
				columns5:[
					 {
						title: '选择',
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
					{
							title: '生产单编号',
							key: 'no',
							align: 'center',
							width: 150,
							ellipsis: true,
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
							width: 120,
							ellipsis: true,
							render: (h, params) => {
								const row = params.row;
								var text
								if (row.type == 0) {
									text = '柜体'
								} else if (row.type == 1) {
									text = '门板'
								} else if (row.type == 2) {
									text = '五金'
								}
								return h('div', text);
							}
						},
						{
							title: '经销商',
							key: 'dealerName',
							align: 'center',
							width: 120,
							ellipsis: true,
						},
						{
							title: '客户',
							key: 'customerName',
							align: 'center',
							width: 120,
							ellipsis: true,
					
					
						},
					
						{
							title: '状态',
							key: 'state',
							align: 'center',
							width: 120,
							render: (h, params) => {
								const row = params.row;
								var text
								if (row.state == 0) {
									text = '未开始'
								} else if (row.state == 1) {
									text = '生产中'
								} else if (row.state == 2) {
									text = '已完成'
								}
								return h('div', text);
							}
						},
						{
							title: '跟单员',
							key: 'merchandiserName',
							align: 'center',
							width: 120,
							ellipsis: true,
						},
						{
							title: '计划交付时间',
							key: 'estimatedDeliveryDate',
							align: 'center',
							width: 120,
							ellipsis: true,
							render: (h, params) => {
							
								const row = params.row;
								var text;
							
								text = row.estimatedDeliveryDate.substr(0,10)
							
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
							width: 120,
							ellipsis: true,
							render: (h, params) => {
							
								const row = params.row;
								var text;
							
								text = row.plannedTime.substr(0,10)
							
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
							width: 120,
							ellipsis: true,
						},
				],
			};
		},
		methods: {
			
			datastart(selection){
				this.chosedId=[];
				if(selection.length>0){
					for (var i=0;i<selection.length;i++){
				         this.chosedId.push(selection[i].id)
				       } 
				}
				},
			startproduce(){
					if(this.chosedId.length<1){
						this.$Message.success("请选择开始生产的订单");
							return false;
					}
					let that = this;
					this.axios({
						method: 'put',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/customorders/produces/starts',
						data:that.chosedId
					}).then(res => {
						if (res != false) {
							this.$Message.success("开始生产成功");
							that.orderstart = false;
							that.getorderdatas();
						}
						
					})
				},
				//加载要生产的数据
			getorderstartdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/produces/processes?way=0&type=0&type=1&state=0&plannedTime=1'
			
				}).then(res => {
			
					if (res != false) {
						that.data5 = res.data.data;
						
					}
				})
			},
		
			producting(type){
		       if(this.setstate==0){
				 this.$Message.success("生产单还未开始生产");
				 
				}else if(this.setstate==1){
					this.A=type;
					this.notestextarea="";
					this.ordertype=true;
					this.setType = type;
				 }
				
			},
			
			//sure
			
			statuesure:function(){
				var type=this.A
				
				if(type==0){
					let that = this;
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/customorders/produces/processes/'+that.orderId,
						data:{
							 node: that.setType,
							 notes: that.notestextarea
							
						}
					}).then(res => {
						if (res != false) {
							that.production[type].operationTime=res.data.data.operationTime;
							that.production[type].operatorName=res.data.data.operatorName;
							// that.preparationnote=res.data.data.note;
							this.$Message.success("状态变更成功");
							this.ordertype=false;
						}
						})
					
					
				}else if(type==1){
					let that = this;
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/customorders/produces/processes/'+that.orderId,
						data:{
							 node: that.setType,
							 notes: that.notestextarea
						}
					}).then(res => {
						if (res != false) {
							that.production[type].operationTime=res.data.data.operationTime;
							that.production[type].operatorName=res.data.data.operatorName;
							// that.Dredgingnote=res.data.data.note;
							this.$Message.success("状态变更成功");
							that.ordertype=false;
						}
						})
					
					
				
				}else if(type==2){
					let that = this;
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/customorders/produces/processes/'+that.orderId,
						data:{
							 node: that.setType,
							 notes: that.notestextarea
						}
					}).then(res => {
						if (res != false) {
                            that.production[type].operationTime=res.data.data.operationTime;
							that.production[type].operatorName=res.data.data.operatorName;
							that.Bendingnote=res.data.data.note;
							this.$Message.success("状态变更成功");
							that.ordertype=false;
						}
						})

					 
				}else if(type==3){
					let that = this;
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/customorders/produces/processes/'+that.orderId,
						data:{
							 node: that.setType,
							 notes: that.notestextarea
						}
					}).then(res => {
						if (res != false) {
							that.production[type].operationTime=res.data.data.operationTime;
							that.production[type].operatorName=res.data.data.operatorName;
						    // that.punchingnote=res.data.data.note;
							this.$Message.success("状态变更成功");
							that.ordertype=false;
						}
						})

				}else if(type==4){
					let that = this;
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/customorders/produces/processes/'+that.orderId,
						data:{
							 node: that.setType,
							 notes: that.notestextarea
						}
					}).then(res => {
						if (res != false) {
							that.production[type].operationTime=res.data.data.operationTime;
							that.production[type].operatorName=res.data.data.operatorName;
							 // that.washingnote=res.data.data.note;
							this.$Message.success("状态变更成功");
							that.ordertype=false;
						}
						})

				}else if(type==5){
					let that = this;
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/customorders/produces/processes/'+that.orderId,
						data:{
							 node: that.setType,
							 notes: that.notestextarea
						}
					}).then(res => {
						if (res != false) {
							that.production[type].operationTime=res.data.data.operationTime;
							that.production[type].operatorName=res.data.data.operatorName;
							// that.Testingnote=res.data.data.note;
							this.$Message.success("状态变更成功");
							that.ordertype=false;
						}
						})
				}
				else if(type==6){
					let that = this;
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/customorders/produces/processes/'+that.orderId+ '/packing',
						data:{
							 node: that.setType,
							 notes: that.notestextarea
						}
					}).then(res => {
						if (res != false) {
							that.production[type].operationTime=res.data.data.operationTime;
							that.production[type].operatorName=res.data.data.operatorName;
							// that.packingsnote=res.data.data.note;
							that.ordertype=false;
							that.orderdetail=false;
							that.getorderdatas();
							this.$Message.success("状态变更成功");
						}
						})
					
					  
				}
			},
			
			beginproduce(){
				this.orderstart=true;
				this.getorderstartdatas();
				
			},
			// 查看大图
			bigphoto(index){
				this.visible=true;
				this.bigimg=this.orderdatas[index].path;
			},
			//设计详情
			designdetails(index){
			this.designstatus=true;
			let that = this;
			this.axios({
				method: 'get',
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
					'ContentType': 'application/json;charset=UTF-8'
				},
				url: '/api/f/customorders/'+that.useid+'/designs/'+that.data4[index].id
			}).then(res => {
				if (res != false) {
					if(res.data.data.orderDesignDto.status==0){
					   res.data.data.orderDesignDto.status="设计中"
					}else if(res.data.data.orderDesignDto.status==1){
						 res.data.data.orderDesignDto.status="待审核"
					}else if(res.data.data.orderDesignDto.status==2){
						 res.data.data.status="待发布"
					}else if(res.data.data.orderDesignDto.status==3){
						 res.data.data.orderDesignDto.status="待确认"
					}else if(res.data.data.orderDesignDto.status==4){
						 res.data.data.orderDesignDto.status="已确认"
					}
					that.orderDesignDtos=res.data.data.orderDesignDto
					that.designFilearr=res.data.data.designFile
				}
				})	
			},	
			demanddetaill(index){
				this.demandstatus=true;
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/customorders/'+that.useid+'/demands/'+that.data3[index].id
				}).then(res => {
					if (res != false) {
						that.customOrderDemands=res.data.data.customOrderDemand
						that.demandfilearr=res.data.data.demandFile
					}
					})
			},
			//设计详情
			desgincancel(){
				
			},
			desginok(){
				
			},	
			orderdetailcancel() {

			},
			orderdetailok() {

			},
			//获取订单详情数据
			orderdetails(index) {
				this.orderId=this.data1[index].id
				this.no = this.data1[index].no;
				this.type = this.data1[index].type;
				this.plannedTime = this.data1[index].plannedTime.substr(0,10);
				this.dealerName = this.data1[index].dealerName;
				this.customerName = this.data1[index].customerName;
				this.state = this.data1[index].state;
				this.merchandiserName = this.data1[index].merchandiserName;
				this.payTime = this.data1[index].payTime;
				this.estimatedDeliveryDate = this.data1[index].estimatedDeliveryDate.substr(0,10);
				this.orderdetail = true;
				var produceFlowDtos=this.data1[index].produceFlowDtos
				
			 	for(var i=0;i<produceFlowDtos.length;i++){	
					this.production[i].operationTime=produceFlowDtos[i].operationTime
					this.production[i].operatorName=produceFlowDtos[i].operatorName 
				}
			

			},
			//获取订单详情数据
			changestatu(index) {
				this.changestatus = true;
				this.changestatusindex = index;
				this.changeorderstatus = this.data1[index].status+1
				this.statusindex=index
			},
			ok() {
				this.repairorderstatus();
			},
			cancel() {
				
			},
			
			changepage(index) {
				if(this.ifsearch==true){
					 let that=this;
					 this.currents = index;
					 this.getsearchorderdatas();
				}else{
				  this.ordernumber=""
				  this.orderstatus=""			
				  this.currents = index;
				  this.getorderdatas();
				}	
			},
			//搜索订单
			serchorder() {
				this.ifsearch=true;
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
					url: '/api/f/customorders/produces/processes?way=0&type=0&type=1'  + (that.ordernumber == '' ? '' : '&no=' + that.ordernumber)+(that.orderstatus == '' ? '' : '&state=' + that.orderstatus)+'&pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {
					console.log(res)
					if (res != false) {
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
					url: '/api/f/customorders/produces/processes?way=0&type=0&type=1&state=0&state=1' +'&pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {
					console.log(res)
					if (res != false) {
						that.data1 = res.data.data;
						that.pageSize = res.data.pagination.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total;
						that.orderstatus=[]
					}
				})
			},
		
		},
		mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
			
			this.getorderdatas();
			
		}
	}
</script>

<style scoped="scoped">
     
	.orderBase{
		border: #dcdee2 1px solid; 
		border-radius:5px; 
		padding:10px 10px 40px 10px; 
	
	}
	
	.orderBase li span{
		margin-right: 60px; 
		line-height: 30px; 
	}
	.fenye_produce {
		margin-top: -30px;
		float: right;
		margin-right: 20px;
	}
	.upload-list{
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
	       box-shadow: 0 1px 1px rgba(0,0,0,.2);
	       margin-right: 4px;
	   }
	   .upload-list img{
	       width: 100%;
	       height: 100%;
		    
	   }
	   .upload-list-cover{
	       display: none;
	       position: absolute;
	       top: 0;
	       bottom: 0;
	       left: 0;
	       right: 0;
	       background: rgba(0,0,0,.6);
	   }
	   .upload-list:hover .upload-list-cover{
	       display: block;
	   }
	   .upload-list-cover i{
	       color: #fff;
	       font-size: 20px;
	       cursor: pointer;
	       margin: 0 2px;
	   }
	   .disable{
		    color:"#2d8cf0"
		    border-left="4px solid #2d8cf0"
	   }
</style>
