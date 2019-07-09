<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>字典管理</BreadcrumbItem>
			</Breadcrumb>
			<Row>
				<Col span="20" style="margin-bottom: 20px;margin-top: 20px;">
				<div>
					 字典名称：<Input  v-model="basecodenameserch" placeholder="请输入字典名称..." style="width: 16%;margin:0 5px;"></Input> 
					 字典类型：<Input v-model="basecodetypeserch" placeholder="请输入字典类型..." style="width: 16%;margin:0 5px;"></Input> 				
					<Button icon="ios-search"  @click="serchorder">搜索</Button>
				</div>
				</Col>
				<Col span="4" style="margin-bottom: 20px;margin-top: 20px;text-align: right;">
					 <Button type="primary"  @click="setupdate">新建字典</Button>
				</Col>
			</Row>
			<div  style="padding-bottom: 30px; margin-bottom: 30px;">
			  <Table :columns="columns1" :data="data1" border></Table>
			  </div>
			<div class="fenye">
				<Page :total="totalpage" :page-size="pageSize" show-total @on-change="pageChange" :current="currents" show-elevator/>
			</div>
		</div>
		<Drawer v-model="model" title="新建字典"  width=500px; >
			<div >
				
				<Form :label-width="100">
					<FormItem label="字典名称">
						<Input v-model="basecodename" style="width: 90%;" placeholder="请输入字典名称..."></Input>
					</FormItem>
					<FormItem label="字典类型">
						<Input v-model="basecodetype" style="width: 90%;"  placeholder="请输入字典类型..."></Input>
					</FormItem>
					<FormItem label="字典码">
						<Input v-model="basecodecode" style="width: 90%;"  placeholder="请输入字典码..."></Input>
					</FormItem>
					<FormItem label="字典值">
						<Input v-model="basecodevalue" style="width: 90%;"  placeholder="请输入字典值..."></Input>
					</FormItem>
					<FormItem label="排序">
						<Input v-model="basecodenum" style="width: 90%;"  placeholder="请输入排序的数值..."></Input>
					</FormItem>
					<FormItem label="备注">
						<Input v-model="basecoderemark" style="width: 90%;" type="textarea" :rows="3" placeholder="请输入备注..."></Input>
					</FormItem>
			
			
			    </Form>
		    </div>
			<div class="demo-drawer-footer">
		      <Button type="error" size="large" @click="model = false">关闭</Button>
			  <Button type="primary" size="large" @click="basecodeaddok">确认</Button>
			  
		    </div>
		</Drawer>
	
		<Drawer v-model="modelde" title="编辑字典" width=500px; >
			<div >
			 <Form :label-width="100">
			 	<FormItem label="字典名称">
			 		<Input v-model="rebasecodename" style="width: 90%;" placeholder="请输入字典名称..."></Input>
			 	</FormItem>
			 	<FormItem label="字典类型">
			 		<Input v-model="rebasecodetype" style="width: 90%;"  placeholder="请输入字典类型..."></Input>
			 	</FormItem>
			 	<FormItem label="字典码">
			 		<Input  v-model="rebasecodecode" style="width: 90%;"  placeholder="请输入字典码..."></Input>
			 	</FormItem>
			 	<FormItem  label="字典值">
			 		<Input v-model="rebasecodevalue" style="width: 90%;"  placeholder="请输入字典值..."></Input>
			 	</FormItem>
			 	<FormItem label="排序">
			 		<Input v-model="rebasecodenum" style="width: 90%;"  placeholder="请输入排序的值..."></Input>
			 	</FormItem>
			 	<FormItem label="备注">
			 		<Input v-model="rebasecoderemark" style="width: 90%;" type="textarea" :rows="3" placeholder="请输入备注..."></Input>
			 	</FormItem>
			 			
			 			
			 </Form>
			</div>
			<div class="demo-drawer-footer">
		      <Button type="error" size="large" @click="modelde = false">关闭</Button>
			   <Button type="primary" size="large" @click="repairbasecode">确认</Button>
		    </div>
		</Drawer>
		<Modal v-model="peledelssover" width="360">
			<p slot="header" style="color:red; text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>删除字典信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除字典操作</p>
				<p>确定要删除吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="basecodedelete">确定</Button>
			</div>
		</Modal>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
	          return {
				  //新增字典
				  basecodenameserch:'',
				  basecodetypeserch:'',
									
				  basecodename:'',
				  basecodetype:'',
				  basecodecode:'',
				  basecodevalue:'',
				  basecodenum:'',
				  basecoderemark:'',
				  
				  rebasecodename:'',
				  rebasecodetype:'',
				  rebasecodecode:'',
				  rebasecodevalue:'',
				  rebasecodenum:'',
				  rebasecoderemark:'',
				//搜索
				  ordersNo:'',
				  ordersdeliveNo:'',
				  ifsearch:false,
				 
			     //分页
				 pageSize: 20,
				 pageNum: 0,
				 totalpage: 0,
				 currents: 1,
				//弹窗
				SetIndexssover: '',
				peledelssover:false,
				  model:false,
				  modelde:false,
				  reSetIndex:'',
				//权限
				operation:{},
				//数据 

				data1:[],
				columns1:  [
					 {
					 	title: '字典名称',
					 	key: 'name',
					 	align: 'center',
					 	
					 },
					 
					{
						title: '字典类型',
						key: 'type',
						align: 'center',
						
					},
					{
						title: '字典码',
						key: 'code',
						align: 'center',
						
					},
					{
						title: '字典值',
						key: 'value',
						align: 'center',
						
					},
					
					 {
					 	title: '排序',
					 	key: 'orderNum',
					 	align: 'center',
					 	
					 	ellipsis: true,
						
					 },
					 {
					 	title: '备注',
					 	key: 'remark',
					 	align: 'center',
					 	
					 },
					
					{
						title: '操作',
						width: 200,
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
											this.orderdetail(params.index)
											 this.reSetIndex=params.index;
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
											
											 this.SetIndexssover = params.index
											 this.peledelssover = true;
										}
									}
								}, '删除'),

							]);
						}
					}
				],
			  }
			
			},
			methods:{
				repairbasecode() {
					     var reg=/^[0-9]*$/;
						if (this.rebasecodename == "" || this.rebasecodename == null) {
							this.$Message.info('请完善字典名称信息');
							return false;
						}  else if (this.rebasecodetype == "" || this.rebasecodetype == null) {
							this.$Message.info('请完善字典类型信息');
							return false;
						}
						else if (this.rebasecodecode == "" || this.rebasecodecode == null) {
							this.$Message.info('请完善字典码信息');
							return false;
						}else if (this.rebasecodevalue == "" || this.rebasecodevalue == null) {
							this.$Message.info('请完善字典值信息');
							return false;
						}else if (!(reg.test(this.rebasecodenum))) {
							this.$Message.info('请确保排序值是数字');
							return false;
						}
						
						var reSetIndex=this.reSetIndex
						
								 let that = this;
									this.axios({
										method: 'put',
										headers: {
											'X-Requested-With': 'XMLHttpRequest',
											'ContentType': 'application/json;charset=UTF-8'
										},
										url: '/api/f/basecodes/'+that.data1[reSetIndex].id,
										        
										        data:{
													   name: that.rebasecodename,
													   type: that.rebasecodetype,
													   code: that.rebasecodecode, 
													   value: that.rebasecodevalue,
													   orderNum:that.rebasecodenum,
													   remark:that.rebasecoderemark      
										              }
									}).then(res => {
										console.log(res);
										if(res != false) {
									    that.data1[reSetIndex].name=res.data.data.name,
 										that.data1[reSetIndex].type=res.data.data.type,
  									    that.data1[reSetIndex].code=res.data.data.code,
										that.data1[reSetIndex].value=res.data.data.value,
									    that.data1[reSetIndex].orderNum=res.data.data.orderNum,
										that.data1[reSetIndex].remark=res.data.data.remark,
										that.modelde = false;
										that.$Message.info('修改成功');
				
									}
											
										
								})
				
							},
				
				basecodeaddok() {
					var reg=/^[0-9]*$/;
					if (this.basecodename == "" || this.basecodename == null) {
						this.$Message.info('请完善字典名称信息');
						return false;
					}  else if (this.basecodetype == "" || this.basecodetype == null) {
						this.$Message.info('请完善字典类型信息');
						return false;
					}
					else if (this.basecodecode == "" || this.basecodecode == null) {
						this.$Message.info('请完善字典码信息');
						return false;
					}else if (this.basecodevalue == "" || this.basecodevalue == null) {
						this.$Message.info('请完善字典值信息');
						return false;
					}else if (!(reg.test(this.basecodenum))) {
							this.$Message.info('请确保排序值是数字');
							return false;
						}
					let that = this;
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/basecodes',
						data: {
							name: that.basecodename,
							type: that.basecodetype,
							code: that.basecodecode, 
							value:that.basecodevalue,
							orderNum:that.basecodenum,
							remark:that.basecoderemark
						}
					}).then(res => {     
							
								if(res != false) {
								this.getbasecodedatas();
								that.$Message.info('添加内容成功');
								that.model = false;
							}
							
					})
				},
				
				
				setupdate(){
					
					 this.basecodename = '';
					 this.basecodetype = '';
					 this.basecodecode = '';
					 this.basecodevalue = '';
					 this.basecodenum = '';
					 this.basecoderemark = '';
					 this.model=true;
				},
				orderdetail(index){
                  
					this.modelde=true;
					var index =index;
					this.rebasecodename=this.data1[index].name;
					this.rebasecodetype=this.data1[index].type;
					this.rebasecodecode=this.data1[index].code;
					this.rebasecodevalue=this.data1[index].value;
					this.rebasecodenum=this.data1[index].orderNum;
					this.rebasecoderemark=this.data1[index].remark;
				    

				},
				basecodedelete(SetIndexssover) {
					var index = this.SetIndexssover;
					let that = this;
					this.axios({
						method: 'delete',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/basecodes/' + that.data1[index].id
					}).then(res => {
						that.data1.splice(index, 1);
						that.$Message.success("字典删除成功");
						that.peledelssover = false;
				
					})
				},
					//分页
				pageChange: function(index) {
					this.currents = index			
					if(this.isSearch == true) {
						this.getsearchdatas()
					} else {
						this.getbasecodedatas()
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
					
					url:'/api/f/basecodes?' + (that.basecodenameserch == '' ? '' : '&name=' + that.basecodenameserch) + (that.basecodetypeserch == '' ? '' : '&type=' + that.basecodetypeserch) + 
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
				
				getbasecodedatas(){
				
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					
					url:'/api/f/basecodes?'+ 'pageNum=' + that.currents + '&pageSize=' + that.pageSize
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
				this.getbasecodedatas();
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
