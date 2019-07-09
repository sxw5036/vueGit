<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/admin">Home</BreadcrumbItem>
				<BreadcrumbItem>待审核经销商列表</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<!--<div class="operation_box">

			<Button type="primary" @click="GetModelOpen">添加规格</Button>
		</div>-->

		<!-- 部门信息列表 -->
		<div>

			<Table border :loading="loading" :columns="tableHeader" :data="tableData" ref="table"></Table>
			<Switch v-model="loading"></Switch>
			<div class="ui_tableBottom">

				<div class="ui_operate">
					<Button type="primary" @click="exportData">下载表格数据</Button>
				</div>

			</div>

		</div>

		<!--添加部门模态框 -s -->

		<Drawer title="添加部门" v-model="GetModel" width="500">

			<Form :model="objGetData" :label-width="80">
				<FormItem label="部门名称">
					<Input v-model="objGetData.name" placeholder="请输入部门名称..."></Input>
				</FormItem>

				<FormItem label="部门描述">
					<Input v-model="objGetData.describe" placeholder="请输入部门名描述..."></Input>
				</FormItem>

				<FormItem label="负责人姓名">
					<Input v-model="objGetData.ministerName" placeholder="请输入部门负责人姓名..."></Input>
				</FormItem>

				<FormItem label="负责人电话">
					<Input v-model="objGetData.ministerTelephone" placeholder="请输入负责人电话..."></Input>
				</FormItem>

				<FormItem label="部门人数">
					<Input v-model="objGetData.numberPeople" placeholder="请输入部门人数..."></Input>
				</FormItem>

			</Form>

			<div class="Drawer_op">
				<Button type="primary" @click="GetModelIsok">确认添加</Button>
			</div>

		</Drawer>

		<!--修改部门信息-s-->

		<Drawer v-model="SetModel" title="修改规格信息" width="500">

			<Form :model="SetGetData" :label-width="80">
				<FormItem label="部门名称">
					<Input v-model="SetGetData.SetGetDataName" placeholder="请输入部门名称..."></Input>
				</FormItem>

				<FormItem label="部门描述">
					<Input v-model="SetGetData.SetGetDataDescribe" placeholder="请输入部门名描述..."></Input>
				</FormItem>

				<FormItem label="负责人姓名">
					<Input v-model="SetGetData.SetGetDataMinisterName" placeholder="请输入部门负责人姓名..."></Input>
				</FormItem>

				<FormItem label="负责人电话">
					<Input v-model="SetGetData.SetGetDataMinisterTelephone" placeholder="请输入负责人电话..."></Input>
				</FormItem>

				<FormItem label="部门人数">
					<Input v-model="SetGetData.SetGetDataNumberPeople" placeholder="请输入部门人数..."></Input>
				</FormItem>

			</Form>

			<div class="Drawer_op">
				<Button type="primary" @click="SetModelIsok">确认修改</Button>
			</div>

		</Drawer>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tableHeader: [{
						title: '规格名称',
						key: 'name',

					},

					{
						title: '规格描述',
						key: 'describe'
					},

					{
						title: '负责人姓名',
						key: 'ministerName'
					},

					{
						title: '负责人电话',
						key: 'ministerTelephone'
					},

					{
						title: '部门人数',
						key: 'numberPeople'
					},

					{
						title: '操作',
						key: 'action',
						width: 150,
						align: 'center',
						render: (h, params) => {
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
											this.SetModel = true
											this.SetModelOpen(params.index)

										}
									}
								}, '编辑'),
								h('Poptip', {
									props: {
										"confirm": true,
										"placement": "left",
										title: '你确定要删除这个内容吗?',

									},

									on: {
										'on-ok': () => {
											/* this.remove() */
											this.tableData.splice(params.index, 1)

										}
									}
								}, [
									h('div',[
										h('Button', {
											props: {
												type: 'error',
												size: 'small'
											}
										}, '删除')
									])
								])
							]);
						}
					}
				],

				tableData: [], //表格数据
				GetModel: false, //添加模态框属性
				SetModel: false, //修改模态框属性
				objGetData: { //添加信息
					"name": "",
					"describe": "",
					"ministerName": "",
					"ministerTelephone": "",
					"numberPeople": "",

				},

				SetGetData: { //修改信息
					"SetGetDataName": "",
					"SetGetDataDescribe": "",
					"SetGetDataMinisterName": "",
					"SetGetDataMinisterTelephone": "",
					"SetGetDataNumberPeople": "",

				},

				pageIndex: 1, //分页页数
				loading: true,

			};
		},

		methods: {

			GetModelOpen: function() {
				this.GetModel = true
				this.objGetData = {
					"name": "",
					"describe": "",
					"ministerName": "",
					"ministerTelephone": "",
					"numberPeople": "",

				}
			},

			//添加信息api	
			GetModelIsok: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var objGetData = this.objGetData
				var name = objGetData.name
				var describe = objGetData.describe
				var ministerName = objGetData.ministerName
				var ministerTelephone = objGetData.ministerTelephone
				var numberPeople = objGetData.numberPeople

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('部门名称不能为空！');
					return false;
				} else if(describe == "" || describe == null || describe.trim().length == 0) {
					this.$Message.error('部门描述不能为空！');
					return false;
				} else if(ministerName == "" || ministerName == null || ministerName.trim().length == 0) {

					this.$Message.error('部门负责人不能为空！');
					return false;
				} else if(ministerTelephone == "" || ministerTelephone == null || ministerTelephone.trim().length == 0) {

					this.$Message.error('部门负责人电话不能为空！');
					return false;
				} else if(tel.test(ministerTelephone) == false && telephone.test(ministerTelephone) == false && phone.test(ministerTelephone) == false) {

					this.$Message.error('部门负责人联系方式格式不正确！');
					return false;
				} else if(numberPeople == "" || numberPeople == null || numberPeople.trim().length == 0) {

					this.$Message.error('部门人数不能为空！');
					return false;
				} else {

					this.$Message.loading('正在操作，请稍后等...', 0)

					var that = this
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/department',

						data: {
							"name": name,
							"describe": describe
						}

					}).then(function(res) {
						var data = res.data.data

						if(res.data.error) {
							that.$Message.error(res.data.error.message);
							return false
						}

						that.tableData.push(data)
						that.$Message.success("添加成功")
						that.objGetData = {
							"name": "",
							"describe": "",
							"ministerName": "",
							"ministerTelephone": "",
							"numberPeople": "",

						}

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');

					})

					this.GetModel = false

				}

			},

			//打开修改部门信息模态框

			SetModelOpen: function(index) {

				this.SetGetData.SetGetDataName = this.tableData[index].name
				this.SetGetData.SetGetDataDescribe = this.tableData[index].describe
				this.SetGetData.SetGetDataMinisterName = this.tableData[index].ministerName
				this.SetGetData.SetGetDataMinisterTelephone = this.tableData[index].ministerTelephone
				this.SetGetData.SetGetDataNumberPeople = this.tableData[index].numberPeople

			},

			//修改信息api

			SetModelIsok: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var setGetData = this.SetGetData

				var name = setGetData.SetGetDataName
				var describe = setGetData.SetGetDataDescribe
				var ministerName = setGetData.SetGetDataMinisterName
				var ministerTelephone = setGetData.SetGetDataMinisterTelephone
				var numberPeople = setGetData.SetGetDataNumberPeople

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('部门名称不能为空！');
					return false;
				} else if(describe == "" || describe == null || describe.trim().length == 0) {
					this.$Message.error('部门描述不能为空！');
					return false;
				} else if(ministerName == "" || ministerName == null || ministerName.trim().length == 0) {

					this.$Message.error('部门负责人不能为空！');
					return false;
				} else if(ministerTelephone == "" || ministerTelephone == null || ministerTelephone.trim().length == 0) {

					this.$Message.error('部门负责人电话不能为空！');
					return false;
				} else if(tel.test(ministerTelephone) == false && telephone.test(ministerTelephone) == false && phone.test(ministerTelephone) == false) {

					this.$Message.error('部门负责人联系方式格式不正确！');
					return false;
				} else if(numberPeople.toString() == "" || numberPeople.toString() == null || numberPeople.toString().trim().length == 0) {

					this.$Message.error('部门人数不能为空！');
					return false;
				} else {

					this.SetModel = false

				}

			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '待审核经销商'
				});
			},

		},

		mounted: function() {

			var that = this
			//请求部门列表
			this.axios({
				method: 'get',
				url: '/api/f/department',

			}).then(function(res) {
				var data = res.data.data

				if(res.data.error) {
					that.$Message.error(res.data.error.message);
					return false
				}

				that.tableData = data
				that.loading = false

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');
				that.loading = false

			})

		}

	}
</script>

<style>
	
	
	.Drawer_op {
		margin-left: 80px;
	}
</style>

<style src='./../../assets/css/department.css'></style>