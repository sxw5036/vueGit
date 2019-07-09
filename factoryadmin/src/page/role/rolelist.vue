<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem >角色列表</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<div class="employee_operation">
			<Row>
				<Col span="12">				
			         <div style="visibility: hidden;">s</div>
				</Col>
				<Col span="12" style="text-align: right">
					<Button type="primary" @click="addrole" v-show="operation.edit==true" :disabled="!operation.edit"
>新建角色信息</Button>
					</Col>
			</Row>
		</div>
		<div class="employee_contain">		 
			<Table :columns="columns1" :data="data1" border  height="500"></Table>
		</div>
		<!-- 添加角色 -->
    <Drawer title="添加角色" :closable="false" v-model="addroles" width="500">
        <Form>
        <FormItem label="角色名称">
            <Input v-model="rolename" placeholder="请输入角色名称..."></Input>
        </FormItem>
        <FormItem label="角色类型">
			 <Select v-model="roletype">
			<Option v-for="item in roleList" :value="item.value" :key="item.value">{{ item.name }}</Option>
			</Select>
        </FormItem>
		 <FormItem label="角色标识">
		    <Input v-model="rolekey" placeholder="请输入角色类型..."></Input>			
		</FormItem>
		 <FormItem label="管理权限">
			   <RadioGroup v-model="managestatus">
               <Radio label="false">否</Radio>
               <Radio label="true">是</Radio>
               </RadioGroup>			
		</FormItem>
				<div class="demo-drawer-footer">
					<Button type="default" @click="addroles=false">取消</Button>
					<Button type="primary" @click="SetdealerIsOks()">确认</Button>
					
				</div>
    </Form>
    </Drawer>
		<!-- 添加角色-->
		<!-- 修改角色 -->
		<Drawer title="修改角色" :closable="false" v-model="reroles" width="500">
				<Form>
				<FormItem label="角色名称">
						<Input v-model="rerolename" placeholder="请输入角色名称..."></Input>
				</FormItem>
				 <FormItem label="管理权限">
					   <RadioGroup v-model="remanagestatus">
				       <Radio label="false">否</Radio>
				       <Radio label="true">是</Radio>
				       </RadioGroup>			
				</FormItem>
				<div class="demo-drawer-footer">
					<Button type="primary" @click="reSetdealerIsOks">确认修改</Button>
					<Button  @click="cencelOks">取消</Button>
				</div>
		</Form>
		</Drawer>
		<!-- 修改角色-->
		<Modal v-model="peledel" width="360" >
	        <p slot="header" style="color:red; text-align:center;">
	            <Icon type="md-alert"></Icon>
	            <span>删除角色信息</span>
	        </p>
	        <div style="text-align:center">
	            <p>您正在执行删除角色信息操作</p>
	            <p>确定要删除吗?</p>
	        </div>
	        <div slot="footer">
	            <Button type="error" size="large" long  @click="deleterole">删除</Button>
	        </div>
        </Modal>
	</div>
</template>
<script>
	
	import returndata from '@/assets/js/returndata.js' 
	let arr=[];
	export default {
		data() {
			return {
				operation:{},
				managestatus:"false",
				remanagestatus:"false",
				formPropertyMapping:{
                'name':'角色名称', 
				'type':'角色类型',
				'key':'角色唯一标识',
				'admin':'是否管理权限'
				},
				roleList:[
					{
						value:0,
						name:'厂家角色'
					},
					{
						value:1,
						name:'经销商角色'
					},
					{
						value:2,
						name:'供应商角色'
					},
					{
						value:3,
						name:'系统角色'
					},
				],
				peledel:false,
				setIndex:'',
				uploadicons:false,
				rolename:"",
				roletype:"",
				addroles:false,
				rerolename:"",
				reroletype:"",
				reroles:false,
				columns1: [
			
					{
						title: '名称',
						key: 'name',
						align: 'center'
					},
					{
						title: '所属角色',
						key: 'type',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text;
							var color;
							if (row.type == 0) {
								text = "厂家"
							} else if (row.type == 1) {
								text = "经销商"
							} else if (row.type == 2) {
								text = "供应商"
							} else if (row.type == 3) {
								text = "系统"
							} 
							return h('span', text);
						}
					},
					{
						title: '是否有管理权限',
						key: 'admin',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.admin==true){
							   text="是"
							}else if(row.admin==false){
							   text="否"
							}
							
							return h('span'
							, text);
							}
					},
					{
						title: '操作',
						align: 'center',
						render: (h, params) => {
							return h('div', [								
								h('Button', {
									props: {
										type: 'primary',
										size: 'small',
										disabled:!this.operation.edit
									},
									style: {
										marginRight: '5px',
										display:(this.operation.edit==true)?"link-block":"none"

									},
									on: {
										click: () => {
											this.repairrole(params.index)
										}
									}
								}, '修改'),
									
									h('Button', {
									props: {
										type: 'error',
										size: 'small',
										disabled:!this.operation.edit
									},
									style: {
										marginRight: '5px',
											display:(this.operation.edit==true)?"link-block":"none"
									},
									on: {
										click: () => {
											this.peledel = true;
											this.setIndex = params.index
										}
									}
								}, '删除'),
//								h('Poptip', {
//									props: {
//										confirm: true,
//										title: '您确定要删除这条数据吗?',
//										transfer: true
//									},
//									on: {
//										'on-ok': () => {
//											this.deleterole(params.index);
//										}
//									}
//								}, [
//									h('div',[
//										h('Button', {
//											props: {
//												type: 'error',
//												size: 'small',
//												disabled:!this.operation.delete
//											}
//										}, '删除')
//									])
//								])
							]);
						}
					}
				],
				data1: [],
				rolekey:'',
				repairid:''
			};
		},
		methods: {
			//新建角色
			addrole(){
				this.addroles=true;
				this.rolename="",
				this.roletype="",
				this.rolekey="",
				this.managestatus=""
				
			},
			
			//删除角色
			deleterole(index){
				var index =this.setIndex;
				let that = this;
				let secdeleteid = this.data1[index].id
				this.axios({
					method: 'delete',
					url: '/api/f/roles/' + secdeleteid,
				}).then(function(res) {
					if (res != false) {
						that.data1.splice(index,1);
						that.$Message.success("删除成功")
					    that.peledel = false;
					}else{
						that.peledel = false;
					}
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})
				
			},
			repairrole(index){
				this.reroles=true;
				this.repairid=this.data1[index].id
				this.rerolename=this.data1[index].name;
				this.reroletype=this.data1[index].type;
				
			},
			SetdealerIsOks(){
				let that = this;
				that.rolekey=that.rolekey+""
				if(that.rolename==""||that.rolename==null||that.roletype===""||that.roletype==null){
					that.$Message.info('表单数据不能为空');
				}else{
					this.axios({
						method: 'post',
						url: '/api/f/roles/',
						data:{
							 name:that.rolename,
							 type:that.roletype,
							 key:that.rolekey,
							 admin:that.managestatus
						}
					}).then(function(res) {
						if(res ===false){
							return;
						}						
						let resData = res.data;
						let resCode = resData.code;
						if(resCode === '20000'){						   
						   that.$Message.error(returndata(that.formPropertyMapping,resData))
						   return;
						}
							that.data1.unshift(res.data.data)
							that.addroles=false;
							that.$Message.success('角色数据添加成功');
						
					})
				}
			
				
			},
			//修改角色
			reSetdealerIsOks(){
				let that = this;
				this.axios({
					method: 'put',
					url: '/api/f/roles/'+that.repairid,
					data:{
						 name:that.rerolename,					
						 admin:that.remanagestatus
					}
				}).then(function(res) {
					
					     if(res ===false){
					     	return;
					     }						
					     let resData = res.data;
					     let resCode = resData.code;
					     if(resCode === '20000'){						   
					        that.$Message.error(returndata(that.formPropertyMapping,resData))
					        return;
					     }
						let goodsType = _.find(that.data1, function(o) {
							return o.id == res.data.data.id;
						});
						if (goodsType) {
							goodsType.name = res.data.data.name
						}
						that.getroledatas();
						that.reroles=false;
					
				})
			},
			cencelOks(){
			this.reroles=false;
			this.rerolename=""
			},
				
			//上传图标		
			//上传处理
			ok () {
             
            },
            cancel () {
               
            },
			// 获取角色列表
			getroledatas() {
				let that = this
				that.axios({
					method: 'get',
					url: '/api/f/roles'
				}).then(function(res) {
					var data=res.data.data
					that.data1=res.data.data
				})
		},
		
		//获取角色菜单数据
		getdata(){
			let that = this
			that.axios({
				method: 'get',
				url: '/api/f/roles/all?type='+0
			}).then(function(res) {
				console.log(res)
			})
		}
		},
		mounted() {	
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
			console.log(this.operation)
         	this.getroledatas();
			this.getdata();	
		}
	}
</script>

<style>
	.fenye {
		margin-top: 50px;
		float: right;
		margin-right: 20px;
	}

	.employee_operation {
		width: 100%;
		height: 50px;

	}
</style>
