<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>发货记录</BreadcrumbItem>
			</Breadcrumb>
			<Row>
				<Col span="20" style="margin-bottom: 20px;margin-top: 20px;">
				<div>
					<!-- 订单编号：<Input v-model="ordersNo" placeholder="请输入相关订单编号..." style="width: 16%;margin:0 5px;"></Input> -->
					物流编号：<Input v-model="ordersdeliveNo" placeholder="请输入物流编号..." style="width: 16%;margin:0 5px;"></Input>
				
								
					<Button icon="ios-search"  @click="serchorder">搜索</Button>
				</div>
				</Col>
				<Col span="4" style="margin-bottom: 20px;margin-top: 20px;text-align: right;">
					<!-- <Button type="primary"  @click="exportData">导出数据</Button> -->
				</Col>
			</Row>
			<div  style="padding-bottom: 30px; margin-bottom: 30px;">
			  <Table :columns="columns1" :data="data1" border ref="table"></Table>
			  </div>
			<div class="fenye">
				<Page :total="totalpage" :page-size="pageSize" show-total @on-change="changepage" :current="currents" show-elevator/>
			</div>
		</div>
		
		
		<Modal v-model="modelde" title="发货单详情"  width=50%; >
			<div style="padding: 20px;">
			   <Row>
			   	<Col span="10" style="margin-bottom: 10px;margin-top: 10px;">
			   	    <div style="margin-left: 10px;"><b>订单物流信息</b></div>
			   		<ul style="margin: 10px 0;">
					<!-- 	<li style="margin: 3px 0 3px 10px; display:inline-block; width: 50%;">订单编号：<span>{{this.orderno}}</span></li> -->
						<li style="margin: 3px 0 3px 10px; display:inline-block; width: 50%;">物流编号：<span>{{this.orderdeliveno}}</span></li>
						<li style="margin: 3px 0 3px 10px; display:inline-block; width: 50%;">物流名称：<span>{{this.orderdelivename}}</span></li>
						
					</ul>
					</Col>
					<Col span="14" style="margin-bottom: 10px;margin-top: 10px; ">
					<div style="padding-left: 40px; border-left: #dcdee2 1px solid; height: 160px;">
				        <div><b>订单包裹信息</b></div>
						<div style="margin: 10px 0;">
							<div v-for="item in packagedep" > <span style="width: 30%;">包裹编号：</span><span style="margin-right: 15%;">{{item.barcode}}</span> 
							<span style="width: 30%;">包裹类型：</span ><span v-show="item.type==0"> 柜体</span>
									 <span v-show="item.type==1">门板-自产</span>
									  <span v-show="item.type==2">门板-外协</span>
									   <span v-show="item.type==3">特供实木</span>
										<span v-show="item.type==4">五金</span>
							</div>
						</div>
			   	    </div>
			   	</Col>
			   	
			   </Row>
			</div>
			<div slot="footer">
		      <Button type="error" size="large" @click="modelde = false">关闭</Button>
			  
		    </div>
		</Modal>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
	          return {
				  
				  //搜索
				  ordersNo:'',
				  ordersdeliveNo:'',
				
				  ifsearch:false,
				  //包裹信息
				  packagedep:[],
				  setindex:'',
				  packagetype:'',
				  packageno:'',
				  orderno:'',
				  orderdeliveno:'',
				  orderdelivename:'',
				  //分页
				  currents: 1,
				  pageNum: '',
				  totalpage: 10,
				  pageSize: 20,
				  
				//弹窗
				  model:false,
				  modelde:false,
				//权限
				operation:{},
				//数据 

				data1:[],
				columns1:  [
					{
						title: '发货单编号',
						key: 'no',
						align: 'center',
						width: 220,
					},
					{
						title: '物流公司',
						key: 'logisticsName',
						align: 'center',
						width: 180,
						ellipsis: true,
					},
					{
						title: '物流单编号',
						key: 'logisticsNo',
						align: 'center',
						width: 220,
					},
// 					 {
// 					 	title: '相关订单编号',
// 					 	key: 'orderNo',
// 					 	align: 'center',
// 					 	width: 220,
// 					 },				 
					 {
					 	title: '收货人',
					 	key: 'consignee',
					 	align: 'center',
					 	width: 180,
					 	ellipsis: true,
					 },
					{
						title: '收货人电话',
						key: 'consigneeTel',
						align: 'center',
						width: 180,
						ellipsis: true,
					},
					{
						title: '收货地址',
						key: 'address',
						align: 'center',
						width: 200,
						ellipsis: true,
							render: (h, params) => {
							const row = params.row;
							var text
							text = (params.row.cityName + params.row.address).substr(3,1000)
						
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
							return('div', [
							h('span', {
									attrs: {
										title: this.address
									},
									on: {
										mouseenter: () => {
											//实现点击用户姓名然后显示其电话号码等功能，原来是通过动态路由，现在直接写在model里面
											let currenIndex = params.index;
											var obj = this.data1[currenIndex];
											let mouseId = obj.address;
											this.address = mouseId;
										}
									}
								}, params.row.address)
													
							])
						
						}
					},
					
					{
						title: '运输状态',
						key: 'status',
						align: 'center',
						width: 180,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.status == 0) {
								text = '代取件'
							} else if (row.status == 1) {
								text = '运输中'
							} else if (row.status == 2) {
								text = '待取货'
							} else if (row.status == 2) {
								text = '已收货'
							} 
							return h('div', text);
						}
					},
					{
						title: '发货人',
						key: 'consignorName',
						align: 'center',
						width: 200,
						ellipsis: true,
					},
					{
						title: '发货时间',
						key: 'actualDate',
						align: 'center',
						width: 200,
						ellipsis: true,
					},
					{
						title: '发货备注',
						key: 'notes',
						align: 'center',
						width: 200,
						
					},
					{
						title: '操作',
						width: 120,
						align: 'center',
						fixed: 'right',
						render: (h, params) => {
						return h('div', [
								h('Button', {
									props: {
										type: 'info',
										size: 'small',
										
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.orderdetail(params.index)
											 
										}
									}
								}, '详情'),

							]);
						}
					}
				],
			  }
			
			},
			methods:{
				exportData: function() {
				this.$refs.table.exportCsv({
					filename: '发货单',
					columns: this.columns1.filter((col, index) => index < 11),
					data: this.data1
				});
			    },
				setdeliver(){
					 this.model=true;
				},
				orderdetail(index){

					this.modelde=true;
					this.setindex =index;
					this.orderno=this.data1[this.setindex].orderNo;
					this.orderdeliveno=this.data1[this.setindex].logisticsNo;
					this.orderdelivename=this.data1[this.setindex].logisticsName;
				    this.packagedep=this.data1[this.setindex].dispatchBillItemDtoList;

				},
				changepage(index) {
					if (this.ifsearch == true) {
						let that = this;
						this.currents = index;
						this.getsearchdatas();
					} else {
						
						this.ordersNo = ""
						this.ordersdeliveNo = ""
						this.currents = index;
						this.getordersdatas();
					}
				},
				serchorder() {
					this.ifsearch = true;
					this.currents = 1;
					this.getsearchdatas();
				},
				getsearchdatas(){
				
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					
					url:'/api/f/dispatchs?' + (that.ordersNo == '' ? '' : '&orderNo=' + that.ordersNo) + (that.ordersdeliveNo == '' ? '' : '&logisticsNo=' + that.ordersdeliveNo) + 
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
				getordersdatas(){
				
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					
					url:'/api/f/dispatchs?'+ 'pageNum=' + that.currents + '&pageSize=' + that.pageSize
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
			},
			mounted() {
				this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
				const keydata = this.$route.query.key;
				let operation = this.operation;
				Isjurisdiction.user_jurisdiction(keydata, operation);
				this.getordersdatas();
			}
		}
	
	
</script>

<style scoped="scoped">
	.fenye {
		margin-top: -30px;
		float: right;
		margin-right: 20px;
	}
</style>
