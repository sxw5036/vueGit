<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>产品颜色列表</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<div class="employee_operation">
			<Row>
				<Col span="11">
				<Select v-model="searchsortname" style="width:200px" @on-change="requiresortcolor">
					<Option v-for="item in sortList" :value="item.id" :key="item.name">{{ item.name }}</Option>
				</Select>
				</Col>
				<Col span="12" style="text-align: right;"><Button type="primary" @click="addproductcolor" v-if="operation.edit">新建</Button></Col>
			</Row>
		</div>
		<div class="employee_contain">
			<Table :columns="columns1" :data="data1" border></Table>
		</div>
		<!-- 修改产品材质开始-->
		<Modal v-model="repairmodal" title="修改颜色信息" @on-ok="modelok" @on-cancel="modelcancel">
			<Form :label-width="100">
				<FormItem label="产品颜色">
					<Input v-model="repairproductname" placeholder="请输入颜色..."></Input>
				</FormItem>
			</Form>
			<div slot="footer">
				<Button type="text" size="large" @click="modelcancel">取消</Button>
				<Button type="primary" size="large" @click="modelok">确定</Button>
			</div>
		</Modal>
		<!--产品颜色信息-->
		<Modal v-model="modaladd" title="新增颜色信息" @on-ok="addok" @on-cancel="addcancel">
			<Form :label-width="100">
				<FormItem label="分类名称">
					<Select v-model="addsortname" style="width:200px">
						<Option v-for="item in sortList" :value="item.id" :key="item.name">{{ item.name }}</Option>
					</Select>
				</FormItem>
				<FormItem label="产品颜色">
					<Input v-model="addproductname" placeholder="请输入产品的颜色..."></Input>
				</FormItem>
			</Form>
			<div slot="footer">
				<Button type="text" size="large" @click="addcancel">取消</Button>
				<Button type="primary" size="large" @click="addok">确定</Button>
			</div>
		</Modal>
		<!--新增产品材质信息结束-->
		<Modal v-model="peledel" width="360" >
	        <p slot="header" style="color:red;text-align:center;">
	            <Icon type="md-alert"></Icon>
	            <span>删除产品颜色信息</span>
	        </p>
	        <div style="text-align:center">
	            <p>您正在执行删除产品颜色操作</p>
	            <p>确定要删除吗?</p>
	        </div>
	        <div slot="footer">
	            <Button type="error" size="large" long  @click="deletesortcolor">删除</Button>
	        </div>
        </Modal>
	</div>
</template>

<script>
	import resdata from '@/assets/js/jurisdiction'
	import returndata from '@/assets/js/returndata.js'
	let arr = [];
	export default {
		data() {
			return {
				operation:{},
				formPropertyMapping: {
					'name': '颜色名称'
				},
				serchvalue: '',
				value2: '',
				data2: [],
				searchsortname: '',
				repairindedx: '',
				sortList: [],
				searchvalue: '',
				load: true,
				addsortname: '',
				addproductname: '',
				repairsortname: '',
				repairproductname: '',
				modaladd: false,
				repairmodal: false,
				recolorid: "",
				reid: '',
				successtip: '',
				failtip: '',
				setIndex:'',
				peledel:false,
				columns1: [{
						title: '颜色',
						key: 'name',
						align: 'center'
					},
					{
						title: '所属分类',
						key: 'productCategoryName',
						align: 'center'
					},
					{
						title: '操作',
						align: 'center',
						width: 200,
						fixed: 'right',
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
											this.getcolorid(params.index)
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
//											this.deletesortcolor(params.index);
//										}
//									}
//								}, [
//									h('div', [
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
				material: []
			};
		},
		methods: {
			//请求全部分类的数据
			requireallsort() {
				let that = this;
				that.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/product/categorys'
				}).then(function(res) {
					if (!res == false) {
						that.sortList = res.data.data;
						that.searchsortname = res.data.data[0].id
						that.requiresortcolor();
					}
				})
			},
			//添加该分类下的颜色
			addsortcolor() {
				var that = this;
				if (this.addsortname == "" || this.addsortname == null || this.addproductname == "" || this.addproductname == null) {
					this.sfailcolor();
				} else {
					that.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/product/category/' + this.addsortname + '/colors',
						data: {
							name: that.addproductname
						}
					}).then(res => {
						if (res === false) {
							return;
						}
						let resData = res.data;
						let resCode = resData.code;
						if (resCode === '20000') {
							that.$Message.error(returndata(that.formPropertyMapping, resData))
							return;
						}
						that.data1.unshift(res.data.data);
						that.addsuccesscolor();
						that.modaladd = false;

					})
				}

			},
			//查询该分类下的颜色
			requiresortcolor() {
				let that = this;
				that.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/product/category/' + this.searchsortname + '/colors',
				}).then(res => {
					if (!res == false) {
						that.data1 = res.data.data;
					}

				})
			},
			//删除分类下的颜色
			deletesortcolor() {
				var index =this.setIndex;
				let [that, deletecid, deleteid] = [this, this.data1[index].productCategoryId, this.data1[index].id]
				that.axios({
					method: 'delete',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/product/category/' + deletecid + '/colors/' + deleteid,
				}).then(res => {
					that.peledel = false;
					
					if (!res == false) {
						
						that.data1.splice(index, 1);
						that.$Message.success("删除成功");
						peledel:false;
						
						
					}
				})
			},
			//获取修改颜色下的信息
			getcolorid(index) {
				this.repairmodal = true;
				this.repairindedx = index;
				this.repairproductname = this.data1[index].name;
				this.recolorid = this.data1[index].id;
				this.reid = this.data1[index].productCategoryId
			},
			//修改分类下的颜色
			repairproductcolor(index) {
				let that = this;
				if (this.repairproductname == "" || this.repairproductname == null) {
					this.sfailcolor();
				} else {
					that.axios({
						method: 'put',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/product/category/' + this.reid + '/colors/' + this.recolorid,
						data: {
							name: this.repairproductname
						}
					}).then(res => {
						if (res === false) {
							return;
						}
						let resData = res.data;
						let resCode = resData.code;
						if (resCode === '20000') {
							that.$Message.error(returndata(that.formPropertyMapping, resData))
							return;
						}
						const colordata = res.data.data
						that.data1[that.repairindedx].id = colordata.id
						that.data1[that.repairindedx].name = colordata.name
						that.data1[that.repairindedx].resultCode = colordata.resultCode;
						that.repairsuccesscolor();
						that.repairmodal = false;

					})
				}
			},
			addproductcolor() {
				this.modaladd = true;
			},
			addok() {
				this.addsortcolor();
			},
			addcancel() {
				this.modaladd = false;
			},
			modelok() {
				this.repairproductcolor();
			},
			modelcancel() {
				this.repairmodal = false;
				this.addsortname = ""
				this.addproductname = ""
			},
			//增删改差的提醒start
			addsuccesscolor(nodesc) {
				this.$Notice.open({
					title: '添加成功',
					desc: nodesc ? '' : '增加颜色成功'
				});
			},
			deletesuccesscolor(nodesc) {
				this.$Notice.open({
					title: '删除成功',
					desc: nodesc ? '' : '删除颜色成功'
				});
			},
			repairsuccesscolor(nodesc) {
				this.$Notice.open({
					title: '修改成功',
					desc: nodesc ? '' : '修改颜色成功'
				});
			},
			failcolor(nodesc) {
				this.$Notice.open({
					title: '操作失败',
					desc: nodesc ? '' : '操作失败,请检查操作'
				});
			},
			sfailcolor(nodesc) {
				this.$Notice.open({
					title: '操作失败',
					desc: nodesc ? '' : '操作失败，请查看操作信息是否完善'
				});
			}
			//增删改差的提醒end
		},
		mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
			console.log(this.operation);
			this.$Notice.config({
				top: 50,
				duration: 3
			});
			this.requireallsort();

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
