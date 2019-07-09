<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>按钮管理</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<div class="employee_operation">
			<Row>
				<Col span="24" style="text-align: right;">
				<Button type="primary" @click="addbutton()">新增</Button>
				</Col>
			</Row>
		</div>
		<div class="employee_contain">
			<Table :columns="columns1" :data="data1" border></Table>
		</div>
		<!-- 添加按钮 -->
		<Drawer v-model="buttonmodal" title="新建按钮信息" width="500" @on-ok="ok_addbutton" @on-cancel="cancel_addbutton">
			<Form :label-width="100">
				<FormItem label="名称">
					<Input v-model="addbuttondata.name" placeholder="请输入按钮名称..."></Input>
				</FormItem> 
				<FormItem label="唯一标识">
					<Input v-model="addbuttondata.key" placeholder="请输入唯一标识..."></Input>
				</FormItem>
				<FormItem label="类型">
					<Select v-model="addbuttondata.type">
						<Option v-for="item in buttontype" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</FormItem>
				<FormItem label="相关资源类型">
					<RadioGroup v-model="addbuttondata.relevantResource">
						<Radio label="0">通用</Radio>
						<Radio label="1">订单</Radio>
					</RadioGroup>
				</FormItem>
			</Form>
			<div class="demo-drawer-footer">
			    <Button style="margin-right: 8px" @click="cancel_addbutton">取消</Button>
			    <Button type="primary" @click="ok_addbutton">确认</Button>
			</div>
		</Drawer>
		<!-- 添加按钮 -->
		<!-- 修改按钮 -->
		<Drawer v-model="re_buttonmodal" title="修改按钮信息"  width="500">
		<!--<Modal v-model="re_buttonmodal" title="修改按钮信息" @on-ok="ok_rebutton" @on-cancel="cancel_rebutton">-->
			<Form :label-width="100">
				<FormItem label="类型">
					<Select v-model="rebuttondata.type">
						<Option v-for="item in buttontype" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</FormItem>
				<FormItem label="相关资源类型">
					<RadioGroup v-model="rebuttondata.relevantResource">
						<Radio label="0">通用</Radio>
						<Radio label="1">订单</Radio>
					</RadioGroup>
				</FormItem>
			</Form>	
			<div class="demo-drawer-footer">
			    <Button style="margin-right: 8px" @click="cancel_rebutton">取消</Button>
			    <Button type="primary" @click="ok_rebutton">确认</Button>
			</div>
		</Drawer>
		<!-- 修改按钮 -->
		<Modal v-model="peledel" width="360" >
	        <p slot="header" style="color:red;text-align:center;">
	            <Icon type="md-alert"></Icon>
	            <span>删除按钮信息</span>
	        </p>
	        <div style="text-align:center">
	            <p>您正在执行删除按钮的操作</p>
	            <p>确定要删除吗?</p>
	        </div>
	        <div slot="footer">
	            <Button type="error" size="large" long  @click="deletebutton">删除</Button>
	        </div>
        </Modal>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				formPropertyMapping:{
					'name':'按钮名称',
					'key':'唯一标识',
					'type':'类型',
					'relevantResource':'相关资源'
				},
				addbuttondata: {
					name: "",
					key: "",
					type: "",
					relevantResource: ""
				},
				rebuttondata: {
					name: "",
					key: "",
					type: "",
					relevantResource: "",
					repairid:""
				},
				
				buttontype: [{
						value: 0,
						label: '公共操作'
					},
					{
						value: 1,
						label: '厂家操作'
					},
					{
						value: 2,
						label: '经销商操作'
					},
					{
						value: 3,
						label: '供应商操作'
					}
				],
				buttonmodal: false,
				re_buttonmodal: false,
				peledel:false,
				setIndex:"",
				columns1: [{
						title: '名称',
						key: 'name',
						align: 'center',

					},
					{
						title: '唯一标识',
						key: 'key',
						align: 'center',

					},
					{
						title: '相关资源',
						key: 'relevantResource',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.relevantResource == 0) {
								text = '通用'
							} else if (row.relevantResource == 1) {
								text = '订单'
							} 
							return h('Tag', {
								props: {
									type: 'border',
								}
							}, text)
						}

					},
					{
						title: '类型',
						key: 'type',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.type == 0) {
								text = '公共操作'
							} else if (row.type == 1) {
								text = '厂家操作'
							} else if (row.type == 2) {
								text = '经销商操作'
							} else if (row.type == 3) {
								text = '供应商操作'
							}
							return h('Tag', {
								props: {
									type: 'border',
								}
							}, text)
						}
					},
					{
						title: '操作',
						width: 200,
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small',
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.rebuttons(params.index);
											this.rebuttondata.repairid=params.row.id
										}
									}
								}, '修改'),
								h('Button', {
									props: {
										type: 'error',
												size: 'small',
									},
									style: {
										marginRight: '5px'
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
//											this.deletebutton(params.index);
//										}
//									}
//								}, [
//									h('div', [
//										h('Button', {
//											props: {
//												type: 'error',
//												size: 'small'
//											},
//
//										}, '删除')
//									])
//								])
							]);
						}
					}
				],
				data1: [],
				indexs:''
			}
		},
		methods: {
			//获取所有按钮
			getallbutton() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/operations'
				}).then(res => {
					if (res != false) {
						let datas = res.data.data
						that.data1 = datas;
					}
				})
			},
			//删除按钮
			deletebutton() {
				var index =this.setIndex
				let that = this;
				let deleteid = this.data1[index].id
				this.axios({
					method: 'delete',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/operations/' + deleteid
				}).then(res => {
					if (res != false) {
						that.$Message.success("删除成功");
						that.data1.splice(index, 1);
						that.peledel =false
					}
				})
			},
			//打开新增按钮页面
			addbutton() {
				this.buttonmodal = true;
			},
			//打开修改页面
			rebuttons(index) {
				console.log(this.data1[index].relevantResource)
				this.indexs=index;
				this.re_buttonmodal = true;
				this.rebuttondata.type = this.data1[index].type
				this.rebuttondata.relevantResource = this.data1[index].relevantResource + ""
			},
			//新增按钮
			ok_addbutton() {
				if(this.addbuttondata.name.trim()==""||this.addbuttondata.name.trim()==null||this.addbuttondata.key.trim()==null||this.addbuttondata.key.trim()==""||this.addbuttondata.type==null||this.addbuttondata.type===""||this.addbuttondata.relevantResource.trim()==""||this.addbuttondata.relevantResource.trim()==null){
					this.$Message.error("请补全表单信息")
				}else{
					let that = this;
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/operations',
						data: {
							name: that.addbuttondata.name,
							key: that.addbuttondata.key,
							type: that.addbuttondata.type,
							relevantResource: that.addbuttondata.relevantResource,
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
							that.$Message.success("新增成功");
							that.buttonmodal = false;
							that.data1.unshift(res.data.data)
							for (let i in that.addbuttondata) {
								that.addbuttondata[i] = ""
							}
						
					})
				}			
			},
			//修改按钮
			ok_rebutton() {
				let that = this;
				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/operations/'+that.rebuttondata.repairid,
					data: {
						type: that.rebuttondata.type,
						relevantResource: that.rebuttondata.relevantResource
					}
				}).then(res => {
					that.re_buttonmodal = false;
					if (res != false) {
						that.$Message.success("修改成功");
						that.re_buttonmodal = false;
						that.data1[that.indexs].type=res.data.data.type;
						that.data1[that.indexs].relevantResource=res.data.data.relevantResource;
						for (let i in that.rebuttondata) {
							that.rebuttondata[i] = ""
						}
					}
				})
			},
			cancel_rebutton() {
				for (let i in this.rebuttondata) {
					this.rebuttondata[i] = "";
					this.re_buttonmodal = false
				}
			},
			//取消添加
			cancel_addbutton() {
				for (let i in this.addbuttondata) {
					this.addbuttondata[i] = ""
				}
			}
		},
		mounted() {
			this.getallbutton();
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
