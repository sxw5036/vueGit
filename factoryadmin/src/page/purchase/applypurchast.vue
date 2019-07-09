<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>采购申请单</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<div class="operation_box">
			<Row>
				<Col span="0">
				<div style="visibility: hidden;">
			<!-- 		<Input v-model="seavalue" placeholder="请输入商品名称..." style="width: 300px"></Input>
					<Button>商品搜索</Button> -->
					sds
				</div>
				</Col>
				<Col span="24" style="text-align: right;">
					<Button type="primary" @click="addrequestall" style="margin-right: 12px;" v-if="operation.edit">创建采购单</Button>
				    <Button type="primary" @click="addrequests" v-if="operation.edit">创建申请单</Button>
				</Col>
			</Row>

		</div>
		<!-- 请求采购单信息列表 -->
		<div>
			<Col style=" margin-bottom: 30px;" width=80%>
			  <Table border :loading="loading" :columns="data7" :data="data1" ref="table"></Table>
			</Col>
			<div class="fenye" style="margin-top: -20px;">
				<Page :total="totalpage" :page-size="pageSize" show-total @on-change="changepage" />
			</div>
		</div>
	    <!-- 修改列表状态 -->
		<Modal
        v-model="repairourstatu"
        title="修改申请单状态"
        @on-ok="reok"
        @on-cancel="recancel">
		 <Form>
        <FormItem label="状态">
			<RadioGroup v-model="applystatus">
                <Radio label="0">待采购</Radio>
                <Radio label="1">已采购</Radio>
				<Radio label="2">已拒绝</Radio>
				<Radio label="3">已取消</Radio>
            </RadioGroup>
        </FormItem>
		</Form>
    </Modal>
		<!-- 修改列表状态 -->
		<!-- 添加请求采购单信息start -->
		<Drawer title="添加申请采购单" :closable="false" v-model="addrequest" width="500" :mask-closable="false">
			<Alert show-icon>需选择仓库后，可进行搜索</Alert>
			<Form :label-width="80">
				<FormItem label="申请单名称"  >
					<Input v-model="addpurchastname" placeholder="请输入商品名称..." />
				</FormItem>
				<FormItem label="数量" >
					<Input v-model="addpurchastnum" placeholder="请输入商品名称..." />
				</FormItem>
				<FormItem label="备注">
					<Input v-model="addnote" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入备注..." ></Input>
				</FormItem>
				<FormItem label="仓库">
					<Select v-model="addstockvalue" >
						<Option v-for="item in allstorages" :value="item.productCategoryId" :key="item.name">{{ item.name }}</Option>
					</Select>
				</FormItem>
				<FormItem label="产品名称">
					<Input v-model="searchproductname" placeholder="请输入产品名称..."  style="width: 200px;"/>
					<Button type="primary" @click="searchproducts()">搜索</Button>					
				</FormItem>
				<div style="margin-top: 20px;">
					<Table :columns="searchstockdata" :data="searchstockdata1" height="300"></Table>
				</div>
			</Form>
			<div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="addrequest = false">取消</Button>
                <Button type="primary" @click="postpurapply">确认</Button>
            </div>
		</Drawer>
		<!-- 添加请求采购单信息end -->
		<!-- 生成信息单start -->
		<Modal  :mask-closable="false" v-model="addpurdetails" title="创建采购单" @on-ok="ok" @on-cancel="cancel" width=60%;>
			<Row>
				<Col span="24">
					<div style="padding-top: 20px;padding-left: 20px;padding-right: 40px;">
				<Card >
			       <Form :label-width="80" >
			       	
			        
			        <FormItem label="采购人" id="forms_float">
			       				 <Select v-model="addpurchasebuyer" >
			       				 <Option v-for="(item,index) in buyerList" :value="item.userId" :key="index" >{{ item.userName }}</Option>
			       				 </Select>
			        </FormItem>
			         <FormItem label="申请单号" id="forms_float">
			            <Input v-model="purchaseRequestNo" placeholder="请输入采购单描述..." ></Input>
			        </FormItem>
<!-- 			        <FormItem label="采购总钱数">
			            <Input v-model="addpurchasetotalMoney" placeholder="请输入采购单描述..." ></Input>
			        </FormItem> -->
			       			<FormItem label="供应商" id="forms_float">
			       			   <Select v-model="modelsupplier" >
			       			   <Option v-for="item in supplierList" :value="item.id" :key="item.id">{{ item.name }}</Option>
			       			   </Select>
			       			</FormItem>
			       			<FormItem label="仓库" id="forms_float">
			       			    <Select v-model="modelstorage"   @on-change="Transformid" >
			       			   <Option v-for="(item,index) in storageList" :value="item.id" :key="index">{{ item.name }}</Option>
			       			   </Select>
			       			</FormItem>
			         <FormItem label="描述" id="forms_float">
			            <Input v-model="addpurchasenote" placeholder="请输入采购单描述..." ></Input>
			        </FormItem>
			         <FormItem label="备注" id="forms_float">
			            <Input v-model="addpurchaseremake" placeholder="请输入采购单备注..." type="textarea"  :autosize="{minRows: 2,maxRows: 5}"></Input>
			        </FormItem>
			        </Form>
					<Button type="primary" @click="searchpurinformation" class="but_css">添加产品</Button>
			    </Card>						 
					</div>			    
				</Col>
				<Col span="24">	   			  	
				 <div style="margin-top: 20px;">
				 <div style="display: none;">
					<can-edit-table  v-model="data4" :editIncell="true" :columns-list="columns4" ref="selection"></can-edit-table> 
				 </div>
				<div>		  
					<Row>
						<Col span="12">
							<h3 style="margin-bottom: 20px;">产品列表</h3>
						</Col>
						<Col span="12" style="text-align: right;">
							<!-- <Button type="primary" @click="byelections">补选商品</Button> -->
						</Col>
					</Row>	  			 			  
					  <Table border ref="selection" :columns="columns4" :data="data4"  @on-selection-change="datacollectionx" :editIncell="true"></Table> 
				</div>			 
				 </div>
				</Col>
			</Row>
			<div slot="footer">
			     <Button type="text" size="large" @click="addpurdetailscancel">取消</Button>
			     <Button type="primary" size="large" @click="addpurdetailsok">提交采购信息</Button>
			</div>
		</Modal>
		<!-- 生成信息单end -->
		 <!-- 二级模态框选择商品 -->
				<Modal
		 v-model="secondarymodel"
		 title="选择需要采购的商品"
		 @on-ok="passok"
		 @on-cancel="passcancel"
				width="1000"
				>
		<div style="display: none;">
			<can-edit-table  v-model="data3" :editIncell="true" :columns-list="columns3" ref="selection"></can-edit-table> 
		</div>
		<div>
			<h3 style="margin-bottom: 20px;">商品列表</h3>
			  <Table border ref="selection" :columns="columns3" :data="data3"  @on-selection-change="datacollections" :editIncell="true"></Table> 
		</div>
		<div slot="footer">
		     <Button type="text" size="large" @click="passcancel">取消</Button>
		     <Button type="primary" size="large" @click="passok">确定</Button>
		</div>
		</Modal>
		<!-- 二级模态框选择商品 -->
	</div>
</template>

<script>
	import canEditTable from './canEditTable.vue';
	import tableData from './table_data.js';
	import returndata from '@/assets/js/returndata.js' 
	export default {
		data() {
			return {
				operation:{},
				formPropertyMapping:{
					'name':'名称',
					'storageId':'仓库',
					'productId':'产品',
					'quantity':'数量',
					'notes':'描述',
					'supplierId':'供应商',
					'buyer':'采购人',
					'totalMoney':'总钱数',
					'remarks':'备注',
					'supplierProductId':'仓库商品',
					'price':'价格',
					'purchaseProductDtoList':'采购单商品'
													
				},
				secondarymodel:false,
				storageList:[],
				buyerList:[],
				addpurdetails:false,
				addpurchasename:"",
				addpurchasebuyer:"",
				addpurchasenote:"",
				purchaseRequestNo:"",
				addpurchasetotalMoney:0,
				addpurchaseremake:"",
				truemodelsupplier:"",
				data4:[],
				truemodelstorage:"",
				modelsupplier:"",
				modelstorage:"",
				applystatus:"0",
				repairourstatu:false,
				searchproductname: '',
				searchproductno: '',
				supplier: [],
				addnote: '',
				addpurchastnum: '',
				addpurchastname: '',
				selectsupplier: '',
				seavalue: '',
				totalpage: 10,
				pageSize: 10,
				data2: [],
				data3:[],
				createdan: false,
				columns3:[
					 {
				        type: 'selection',
				        width: 60,
				        align: 'center'
				    },
					{
					title: '产品名称',
					key: 'productName',
					align: 'center'
				    },
					{
					title: '公司名称',
					key: 'companyName',
					align: 'center'
					},
					{
					title: '价格',
					key: 'price',
					align: 'center'
					},
				/* 	{
					title: '数量',
					key: 'num',
					align: 'center',
					width:250,
					editable: true
					}, */
						/* {
						title: '金额',
						key:   'money',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text;
							var color;
							text=params.row.price*params.row.num
							return h('Tag', {
								props: {
									type: 'border',
									color: color
								}
							}, text);
						}
					}, */
					
				],
				searchstockdata: [{
						align: 'center',
						key: 'checkBox',
						width:100,
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
											if(e){
												//选中的
												this.getaddvalue(params.index,e)											
											}
										}
									}
								})
							])
						}
					},
					{
						title: '产品名称',
						align: 'center',
						key: 'name'
					}											
				],
				supplierList:[],
				searchstockdata1: [],
				addstockvalue: '',
				allstorages: [],
				addrequestx: false,
				Drawer: '',
				tableData: [],
				searchvalue: '',
				addrequest: false,
				loading: false,
				data1: [],
				
				columns4:[
					{
					title: '产品名称',
					key: 'productName',
					align: 'center'
				    },
					{
					title: '公司名称',
					key: 'companyName',
					align: 'center'
					},
					{
					title: '价格',
					key: 'price',
					align: 'center',
					editable: true
					},
					{
					title: '数量',
					key: 'quantity',
					align: 'center',
					width:150,
					editable: true
					}, 
						 {
						title: '金额',
						key:   'money',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text;
							var color;
							text=((params.row.price*100)*(params.row.quantity*100)/10000).toFixed(3)
							return h('Tag', {
								props: {
									type: 'border',
									color: color
								}
							}, text);
						}
					}, 					
					{
						title: '操作',
						align: 'center',
						width:200,
						render: (h, params) => {
							return h('div', [													
								h('Poptip', {
									props: {
										confirm: true,
										title: '您确定要删除这条数据吗?',
										transfer: true
									},
									on: {
										'on-ok': () => {
											this.deletedata4(params.index);
										}
									}
								}, [
									h('div',[
										h('Button', {
											props: {
												type: 'error',
												size: 'small',
												disabled:!this.operation.delete
											}
										}, '删除')
									])
								])
							]);
						}
					}
				],
				data8: [
					{
						type: 'selection',
						width: 60,
						align: 'center'
					},
					{
						title: '申请单号',
						key: 'no',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '采购名称',
						key: 'name',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '采购类型',
						key: 'type',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '产品名称',
						key: 'productName',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '仓库',
						key: 'storageName',
						align: 'center',
						ellipsis: true,
					},
					
					{
						title: '数量',
						key: 'quantity',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '备注',
						key: 'notes',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '状态',
						key: 'status',
						align: 'center',
						ellipsis: true,
					},

					{
						title: '创建时间',
						key: 'created',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '创建人昵称',
						key: 'creatorName',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '操作',
						key: 'action',
						width: 100,
						align: 'center',
						ellipsis: true,
						render: (h, params) => {
							return h('div', [
								h('Poptip', {
									props: {
										confirm: true,
										title: '您确定要删除这条数据吗?',
										transfer: true
									},
									style: {
										display: this.btnifshow
									},
									on: {
										'on-ok': () => {
											this.deleteaply(params.index)
										}
									}
								}, [
									h('Button', {
										props: {
											type: 'error',
											size: 'small',
											disabled:!this.operation.delete
										}
									}, '删除')
								])
							]);
						}
					}
				],
				data7: [
						{
						title: '申请单号',
						key: 'no',
						align: 'center',
						ellipsis: true,
					},{
						title: '采购名称',
						key: 'name',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '采购类型',
						key: 'type',
						align: 'center',
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var color
							var text
							if (row.type == 0) {
								color = 'green';
								text = '人为采购'
							} else if (row.type == 1) {
								color = 'blue';
								text = '系统采购'
						
							} else if (row.type == 2) {
								color = 'red';
								text = '样品设计采购'
							} else if (row.type == 3) {
								color = 'yellow';
								text = '活动采购'
							}
							return h('Tag', {
								props: {
									type: 'border',
									color: color
								}
							}, text);
						}
					},
					{
						title: '产品名称',
						key: 'productName',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '仓库',
						key: 'storageName',
						align: 'center',
						ellipsis: true,
					},
				
					{
						title: '数量',
						key: 'quantity',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '备注',
						key: 'notes',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '状态',
						key: 'status',
						align: 'center',
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var color
							var text
							if (row.status == 0) {
								color = 'green';
								text = '待采购'
							} else if (row.status == 1) {
								color = 'blue';
								text = '已采购'
						
							} else if (row.status == 2) {
								color = 'red';
								text = '已拒绝'
							} else if (row.status == 3) {
								color = 'yellow';
								text = '已取消'
							}
							return h('Tag', {
								props: {
									type: 'border',
									color: color
								}
							}, text);
						}
					},

					{
						title: '创建时间',
						key: 'created',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '创建人昵称',
						key: 'creatorName',
						align: 'center',
						ellipsis: true,
					},
					{
						title: '操作',
						key: 'action',
						align: 'center',
						ellipsis: true,
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small',
										disabled:!this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
										    this.repairstatus(params.index)
										}
									}
								}, '修改')
							]);
						}
					}
				],
				currents: "",
				getaddvalues:'',
				getstoragevalue:''
			};
		},

		methods: {
			//分页
			changepage(index){
			   let that=this;
			   this.currents = index;
			   that.getpurapply();
			},
			//修改状态
			repairstatus(index){
				if(this.data1[index].status==0){
					this.applystatus="";
					this.applyids="";
					this.repairourstatu=true;
					this.applystatus=this.data1[index].status+"";
					this.applyids=this.data1[index].id;
				}else if(this.data1[index].status!=0){
					this.repairourstatu=false;
					this.$Message.info('只有待采购可以修改状态');
				}
				
			},
			//获取添加商品的值
			getaddvalue(a){
			this.getaddvalues=this.searchstockdata1[a].id
			},
			//新增申请采购单
			postpurapply() {
				let that = this; 
				for (let i=0;i<that.allstorages.length;i++) {
					if (that.allstorages[i].productCategoryId==that.addstockvalue) {
						that.getstoragevalue=that.allstorages[i].id;
					}
				}
				this.axios({
					method: 'post',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/purchases/requests',
					data: {
						name: that.addpurchastname,
						quantity: that.addpurchastnum,
						notes: that.addnote,
						productId:that.getaddvalues,
						storageId:that.getstoragevalue
					}
				}).then(res => {
						if(res ===false){
							return;
						}						
						let resData = res.data;
						let resCode = resData.code;
						if(resCode === '20000'){						   
						   that.$Message.error(returndata(that.formPropertyMapping,resData))
						   return;
						}			
						that.data1.unshift(res.data.data);
						that.addrequest=false;
						this.$Message.info('申请添加成功');
					
				})
			},
			//获取全部的员工
			getallemployee(){
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/depts/members'
				}).then(res => {
					if(res!=false){
						that.buyerList=res.data.data;				
					}
				})
			},
			//获取申请采购管理
			getpurapply() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/purchases/requests?pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {
					if (res != false) {
						that.data1 = res.data.data;
						that.pageSize = res.data.pagination.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total
					}
				})
			},
			addrequests() {
				this.addrequest = true;
			},
				//查询供应商列表
			getsupplier(){		
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/suppliers?status='+1+'&pageSize='+1000
				}).then(res => {
					that.supplierList=res.data.data
				})
			},
			//获取所有仓库列表
			getallstorages() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/storages?purchase='+true
				}).then(res => {
					that.allstorages = res.data.data
				})
			},
			//搜索采购单信息
			searchpurinformation(){
				if(this.modelsupplier==""||this.modelsupplier==null||this.modelstoragesortid==""||this.modelstoragesortid==null){
				   alert('请补全采购信息')
				}else{
					this.getsupplierproduct();
					this.truemodelsupplier=this.modelsupplier
					this.truemodelstorage=this.modelstorage
				}				
			},
			datacollections(selection){
				this.addpurchaseProductDtoList=selection;
			},
			//根据供应商请求商品列表
			getsupplierproduct(){
				this.secondarymodel=true;
				this.addpurchaseProductDtoList=[];
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},				
					url: '/api/f/suppliers/'+that.modelsupplier+'/products?categoryId='+that.modelstoragesortid
				}).then(res => {
					that.data3=res.data.data
				})
			},
			//补选商品
			byelections(){
				this.secondarymodel=true;
			},
			//删除预采购信息
			deletedata4(index){
				this.data4.splice(index,1);
				},
			repurdetailsok() {
				this.postpurinformation();
			},
			//创建采购单信息
			postpurinformation(){
				let that = this;
				that.ifzero=false;	
				if(this.data4.length==0){
				   this.$Message.info('商品数量不能为零');
				} else{
					for (let i = 0; i < this.data4.length; i++) {
						if (that.data4[i].quantity == 0) {
							that.ifzero = true;
						}
					}
					if (that.ifzero == true) {
						this.$Message.info('商品数量不能为零');
					} else {
						let ac = that.data4;
						for (let i = 0; i < ac.length; i++) {
							that.addpurchasetotalMoney = parseFloat((that.data4[i].price * that.data4[i].quantity).toFixed(3)) + that.addpurchasetotalMoney;
						}
						this.axios({
							method: 'post',
							headers: {
								'X-Requested-With': 'XMLHttpRequest',
								'ContentType': 'application/json;charset=UTF-8'
							},
							url: '/api/f/purchases',
							data: {
								name: that.addpurchasename,
								buyer: that.addpurchasebuyer,
								notes: that.addpurchasenote,
								purchaseRequestNo: that.purchaseRequestNo,
								totalMoney: that.addpurchasetotalMoney,
								remarks: that.addpurchaseremake,
								supplierId: that.truemodelsupplier,
								purchaseProductDtoList: that.data4,
								storageId: that.truemodelstorage
							}
						}).then(res => {
							    if(res ===false){
							    	return;
							    }						
							    let resData = res.data;
							    let resCode = resData.code;
							    if(resCode === '20000'){						   
							       that.$Message.error(returndata(that.formPropertyMapping,resData))
							       return;
							    }
								that.data1.push(res.data.data)
									that.addpurdetails = false;
									that.$Message.info('采购单添加成功');
							
							that.addpurchasetotalMoney = 0;
						})
					}
				}
				
			},
			datacollectionx(selection){
				this.addpurchaseProductDtoListx=selection;
			},	
			//根据仓库id获取商品信息
			searchproducts() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/products?categoryId='+that.addstockvalue+'&name='+that.searchproductname+'&no='+that.searchproductno+'&status='+0
				}).then(res => {
					that.searchstockdata1 = res.data.data
				})
			},
			//删除申请单信息
			deleteaply(index) {
				this.data1.splice(index, 1)
			},
			//生成采购单信息
			addrequestall() {
				this.addpurdetails = true;
			},
			ok() {
				
			},
			cancel() {
				
			},
			//生成仓库分类
			Transformid(value){
				var that=this
			    this.modelstorage=value;
				for(let i=0;i<that.storageList.length;i++){
					if (that.storageList[i].id==this.modelstorage) {
						that.modelstoragesortid=that.storageList[i].productCategoryId
					}
				}
			},
			//获取全部仓库
			getallstorage(){
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/storages'
				}).then(res => {
					if(res!=false){
						that.storageList=res.data.data
					}
				})
			},
			//修改采购状态
			repairapplypur(){
			let that = this;
				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/purchases/requests/'+that.applyids+'/'+that.applystatus
				}).then(res => {
					if (res!=false) {
						let result = _.find(that.data1, function(o) {
							return o.id == res.data.data.id;
						});
						result.status = res.data.data.status;
						that.data1.splice(1, 0);
					}
				})
			},
			//新增采购单
			newpurchast(){
				
			},
			addpurdetailsok() {
				this.postpurinformation();
			},
			  addpurdetailscancel() {
				this.addpurdetails=false;
				this.addpurchasename="";
				this.addpurchasebuyer="";
				this.addpurchasenote="";
			    this.purchaseRequestNo="";
				this.addpurchasetotalMoney=0;
				this.addpurchaseremake="";
				this.truemodelsupplier="";
				this.data4=[];
				this.truemodelstorage="";
				this.modelsupplier="";
				this.modelstorage="";
			},
			reok() {
				this.repairapplypur();
				
			},
			recancel() {
				
			},
			passok () {
				this.secondarymodel=false;
				for (let i=0;i<this.addpurchaseProductDtoList.length;i++) {
					this.addpurchaseProductDtoList[i].quantity=0;
					this.addpurchaseProductDtoList[i].supplierProductId=this.addpurchaseProductDtoList[i].id
				}
				this.data4=this.addpurchaseProductDtoList;
			  
			},
			passcancel () {
			   
			}
		},
		mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
			console.log(this.operation)
			this.getsupplier();
			this.getallstorages();
			this.getpurapply();
			this.getallstorage();
			this.getallemployee();
			 
		},
		components: {
			canEditTable
		}
	}
</script>

<style>
	.fenye {
		margin-top: 50px;
		float: right;
		margin-right: 20px;
	}
	.demo-drawer-footer{
		width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
	}
	.search{
		visibility: hidden;
	}
	
	#forms_float{
		width: 50%;
		float: left;
		}
	.but_css{margin-left: 90%;}
</style>
