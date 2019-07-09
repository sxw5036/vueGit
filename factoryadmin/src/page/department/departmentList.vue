<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>部门列表</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="operation_box">

			
			<div class="active">
            	<div class="ui_operateRight">
            		<Button type="primary" @click="departmentModelOpen" v-show="operation.edit==true">添加部门</Button>
            	</div>
            </div>
		</div>

		<!-- 部门信息列表 -->
		<div class="department_center">

			<div class="Collapse_box" v-for="(item,index) in departmentData">
				<Collapse @on-change="collapseChange(index)" accordion>
					<Panel>
						{{item.name}}

						<div slot="content">
							<div class="Collapse_ac">
								<ul>
									<li>{{item.name}}</li>
									<li>部门描述： {{item.notes}}</li>
									<li>部门标识： {{item.key}}</li>
									<li class="item_r">
										<!--<Poptip confirm title="你确认要删除当前一级部门？" @on-ok="(item.id,index)">-->

											<Button type="error" size='small' v-show="operation.delete==true" @click="setIndex=index,pdel=true">删除</Button>
										<!--</Poptip>-->
									</li>
									
									<li class="item_r" >
									<Button  @click="SetdepartmentOpen(index)" type="info" size='small'  v-show="operation.edit==true">编辑</Button>
									</li>
									
									<li class="item_r">
									<Button  @click="appendTwodept(index)" type="primary" size='small'  v-show="operation.edit==true">添加</Button>
									</li>

								</ul>
							</div>

							<!--	<Table border :columns="departmentHeader" :data="item.deptlist" ref="table"></Table>-->

							<!--{{item.deptList}}-->

							<div class="hi_table border">

								<div class="hi_table_body">
									<table border="0" cellpadding="0" cellspacing="0">
										<colgroup>
											<col width="400">
											<col width="400">
											<col width="400">
											<col width="150">
										</colgroup>

										<thead>

											<tr>
												<th>
													<div class="hi_table_text">部门名称</div>
												</th>

												<th>
													<div class="hi_table_text">部门描述</div>
												</th>

												<th>
													<div class="hi_table_text">部门标识</div>
												</th>

												<th>
													<div class="hi_table_text">操作</div>
												</th>
											</tr>

										</thead>
										<div>

										</div>
										<tbody>

											<tr v-for="(items , indexs) in item.deptlist">
												<td>
													<div class="hi_table_text">{{items.name}}</div>
												</td>
												<td>
													<div class="hi_table_text">{{items.notes}}</div>
												</td>

												<td>
													<div class="hi_table_text">{{items.key}}</div>
												</td>

												<td>
													<div class="hi_table_text" style="text-align: center;">
														<Button @click="setdepts(index,indexs)" type="info" size='small'>编辑</Button>
														<Button @click="deptsTwoopen(index,indexs)" type="error" size='small'>删除</Button>
													</div>
												</td>
											</tr>
											
											
										</tbody>
										
										
										
									</table>
									
									
									<div class="tab_tip" v-show="item.deptlist.length==0">
											暂无数据
										</div>
								</div>

							</div>
						</div>
					</Panel>

				</Collapse>

			</div>

			<div class="ui_tableBottom">

				<!--	<div class="ui_operate">
					<Button type="primary" @click="exportData">下载表格数据</Button>
				</div>
-->
			</div>

		</div>

		<!--添加部门模态框 -s -->

		<Drawer title="添加部门" v-model="departmentModel" width="500">

			<Form :model="objdepartment" :label-width="80">
				<FormItem label="部门名称">
					<Input v-model="objdepartment.name" placeholder="请输入部门名称..."></Input>
				</FormItem>

				<FormItem label="部门描述">
					<Input v-model="objdepartment.describe" placeholder="请输入部门名描述..."></Input>
				</FormItem>

				<FormItem label="部门标识">
					<Input v-model="objdepartment.key" placeholder="请输入部门标识..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="departmentModelOk">确认添加</Button>
			</div>

		</Drawer>

		<Drawer title="添加二级部门" v-model="departmentModels" width="500">

			<Form :model="objdepartments" :label-width="80">
				<FormItem label="部门名称">
					<Input v-model="objdepartments.name" placeholder="请输入部门名称..."></Input>
				</FormItem>

				<FormItem label="部门描述">
					<Input v-model="objdepartments.describe" placeholder="请输入部门名描述..."></Input>
				</FormItem>

				<FormItem label="部门标识">
					<Input v-model="objdepartments.key" placeholder="请输入部门标识..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="pushDepts">确认添加</Button>
			</div>

		</Drawer>

		<!--修改部门信息-s-->

		<Drawer v-model="SetdepartmentModel" title="修改一级部门信息" width="500">

			<Form :model="Setdepartment" :label-width="80">
				<FormItem label="部门名称">
					<Input v-model="Setdepartment.SetdepartmentName" placeholder="请输入部门名称..."></Input>
				</FormItem>

				<FormItem label="部门描述">
					<Input v-model="Setdepartment.SetdepartmentDescribe" placeholder="请输入部门名描述..."></Input>
				</FormItem>

				<FormItem label="部门标识">
					<Input v-model="Setdepartment.SetdepartmentKey" placeholder="请输入部门标识..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="SetdepartmentIsOk">确认修改</Button>
			</div>

		</Drawer>

		<!--修改部门信息-->

		<!--修改二级部门信息-->
		<Drawer v-model="SetdepartmentModels" title="修改二级部门信息" width="500">

			<Form :model="Setdepartments" :label-width="80">
				<FormItem label="部门名称">
					<Input v-model="Setdepartments.SetdepartmentName" placeholder="请输入部门名称..."></Input>
				</FormItem>

				<FormItem label="部门描述">
					<Input v-model="Setdepartments.SetdepartmentDescribe" placeholder="请输入部门名描述..."></Input>
				</FormItem>

				<FormItem label="部门标识">
					<Input v-model="Setdepartments.SetdepartmentKey" placeholder="请输入部门标识..."></Input>
				</FormItem>

			</Form>

			<div class="demo-drawer-footer">
				<Button type="primary" @click="setdeptsPush">确认修改</Button>
			</div>

		</Drawer>
		<!--修改二级部门信息-->
		
		<!--删除一级部门-->
		
		<Modal v-model="pdel" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>删除提示</span>
        </p>
        <div style="text-align:center">
            <p>您正在执行删除一级部门操作</p>
            <p>是否继续执行？</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long  @click="deldeptsOne">删除</Button>
        </div>
    </Modal>
    
    <Modal v-model="pdels" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="ios-information-circle"></Icon>
            <span>删除提示</span>
        </p>
        <div style="text-align:center">
            <p>您正在执行删除二级部门操作</p>
            <p>是否继续执行？</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long  @click="delDeptsTwo">删除</Button>
        </div>
    </Modal>

	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {            
				departmentHeader: [{
						title: '部门名称',
						key: 'name',

					},

					{
						title: '部门描述',
						key: 'notes'
					},

					{
						title: '部门标识',
						key: 'key'
					},             
					{
						title: 'Action',
						key: 'action',
						width: 150,
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small',
										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											/*this.SetdepartmentModel = true
											this.(params.index)*/

										}
									}
								}, '编辑'),
								
								h('Button', {
									props: {
										type: 'error',
												size: 'small',
												disabled: !this.operation.delete
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.deptsTwo(params.index)

										}
									}
								}, '删除'),
								
							
							]);
						}
					}
				],

				departmentData: [], //部门数据
				departmentDataCache: [], //部门数据缓存
				departmentModel: false, //添加部门模态框
				departmentModels: false, //添加二级部门模态框
				SetdepartmentModel: false, //修改部门信息模态框
				SetdepartmentModels: false, //修改二级部门信息模态框
				objdepartment: { //添加部门信息
					"name": "",
					"describe": "",
					"key": ""

				},

				objdepartments: { //添加二级部门信息
					"name": "",
					"describe": "",
					"key": ""

				},

				Setdepartment: { //修改部门信息
					"SetdepartmentName": "",
					"SetdepartmentDescribe": "",
					"SetdepartmentKey": "",

				},

				Setdepartments: { //修改二级部门信息
					"SetdepartmentName": "",
					"SetdepartmentDescribe": "",
					"SetdepartmentKey": "",

				},
				SetdepartmentName: "",
				setIndex: "",
				setIndexs: "",
				pageIndex: 1, //分页页数
				loading: true,
				operation:{},
				pdel:false,
				pdels:false,

			};
		},

		methods: {

			departmentModelOpen: function() {
				this.departmentModel = true
				this.objdepartment = {
					"name": "",
					"describe": "",
					"key": "",

				}
			},

			//添加部门模态框			
			departmentModelOk: function() {

				var tel = /^1[3|4|5|7|8|9][0-9]{9}$/
				var telephone = /^0\d{2,3}-?\d{7,8}$/
				var phone = /^400([0-9]){1}([0-9]{5})([0-9]){1}$/

				var objdepartment = this.objdepartment
				var name = objdepartment.name
				var describe = objdepartment.describe
				var keyNo = objdepartment.key

			

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('部门名称不能为空！');
					return false;
				} else if(name.trim().length > 20) {

					this.$Message.error('部门名称字符长度不能超过20个字符！');
					return false;
				} else if(describe == "" || describe == null || describe.trim().length == 0) {
					this.$Message.error('部门描述不能为空！');
					return false;
				} else if(describe.trim().length > 50) {
					this.$Message.error('部门描述字符长度不能超过50个字符！');
					return false;
				} else if(keyNo == "" || keyNo == null || keyNo.trim().length == 0) {
					this.$Message.error('部门标识不能为空！');
					return false;
				} else if(keyNo.length > 20) {

					this.$Message.error('部门标识字符长度不能超过20个字符！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					
					axios.defaults.headers['X-P']=this.$route.query.pkey+"-"+this.$route.query.key+"-edit"
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/depts',

						data: {
							"name": name,
							"notes": describe,
							"key": keyNo
						}

					}).then(function(res) {
						
						
						var verify = [{
								"name": "name",
								"note": "部门名称"
							},
							{
								"name": "notes",
								"note": "部门描述 "
							},
							{
								"name": "key",
								"note": "部门标识 "
							}
						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that,verify) == false) {
							return false
						}

						

						var data = res.data.data
						data.deptlist = []

						that.departmentData.push(data)
						that.$Message.success("添加成功")

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

					this.departmentModel = false

				}

			},

			//打开修改部门信息模态框

			SetdepartmentOpen: function(index) {

				this.setIndex = index
				this.SetdepartmentModel = true
				this.Setdepartment.SetdepartmentName = this.departmentData[index].name
				this.Setdepartment.SetdepartmentDescribe = this.departmentData[index].notes
				this.Setdepartment.SetdepartmentKey = this.departmentData[index].key

			},

			//修改一级部门信息

			SetdepartmentIsOk: function() {
				var id = this.departmentData[this.setIndex].id
				var setdepartment = this.Setdepartment

				var name = setdepartment.SetdepartmentName
				var describe = setdepartment.SetdepartmentDescribe
				var Key = setdepartment.SetdepartmentKey

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('部门名称不能为空！');
					return false;
				} else if(name.trim().length > 20) {

					this.$Message.error('部门名称字符长度不能超过20个字符！');
					return false;
				} else if(describe == "" || describe == null || describe.trim().length == 0) {
					this.$Message.error('部门描述不能为空！');
					return false;
				} else if(describe.trim().length > 50) {
					this.$Message.error('部门描述字符长度不能超过50个字符！');
					return false;
				}
				if(Key == "" || Key == null || Key.length == 0) {

					this.$Message.error('部门标识不能为空！');
					return false;
				} else if(Key.length > 20) {

					this.$Message.error('部门标识字符长度不能超过20个字符！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					
					axios.defaults.headers['X-P']=this.$route.query.pkey+"-"+this.$route.query.key+"-edit"
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/depts/' + id,

						data: {
							"name": name,
							"notes": describe,
							"key": Key
						}

					}).then(function(res) {

var verify = [{
								"name": "name",
								"note": "部门名称"
							},
							{
								"name": "notes",
								"note": "部门描述 "
							},
							{
								"name": "key",
								"note": "部门标识 "
							}
						]

						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that,verify) == false) {
							return false
						}

					

						var data = res.data.data

						that.departmentData[that.setIndex].name = data.name
						that.departmentData[that.setIndex].notes = data.notes
						that.departmentData[that.setIndex].key = data.key
						/*	data.deptlist = []

							that.departmentData.push(data)*/
						that.$Message.success("修改成功")

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

					this.SetdepartmentModel = false

				}

			},

			//	deldeptsOne 删除一级部门

			deldeptsOne: function() {

				
				var index=this.setIndex			
				
				console.log(index)
				
                var id = this.departmentData[index].id
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				axios.defaults.headers['X-P']=this.$route.query.pkey+"-"+this.$route.query.key+"-delete"
				//                    /
				this.axios({
					method: 'delete',
					url: 'api/f/depts/' + id,

				}).then(function(res) {
                   
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						 that.pdel=false;
						return false
					}

					that.departmentData.splice(index, 1)
					that.$Message.success("删除成功")
					that.pdel=false

				}).catch(function(err) {

					
				})

			},

			//开启二级部门添加框

			appendTwodept: function(index) {
				this.SetIndex = index
				this.departmentModels = true

				this.objdepartments = { //添加二级部门信息
					"name": "",
					"describe": "",
					"key": ""

				}
			},

			//提交二级部门的添加

			pushDepts: function() {

				var parentId = this.departmentData[this.SetIndex].id

				var objdepartments = this.objdepartments
				var name = objdepartments.name
				var describe = objdepartments.describe
				var keyNo = objdepartments.key

			

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('部门名称不能为空！');
					return false;
				} else if(name.trim().length > 20) {

					this.$Message.error('部门名称字符长度不能超过20个字符！');
					return false;
				} else if(describe == "" || describe == null || describe.trim().length == 0) {
					this.$Message.error('部门描述不能为空！');
					return false;
				} else if(describe.trim().length > 50) {
					this.$Message.error('部门描述字符长度不能超过50个字符！！');
					return false;
				} else if(keyNo == "" || keyNo == null || keyNo.trim().length == 0) {
					this.$Message.error('部门标识不能为空！');
					return false;
				} else if(keyNo.trim().length > 20) {
					this.$Message.error('部门标识字符长度不能超过20个字符！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					
					axios.defaults.headers['X-P']=this.$route.query.pkey+"-"+this.$route.query.key+"-edit"
					//                    /
					this.axios({
						method: 'post',
						url: '/api/f/depts',

						data: {
							"name": name,
							"notes": describe,
							"key": keyNo,
							"parentId": parentId
						}

					}).then(function(res) {
						that.departmentModels = false
						
						
						var verify = [{
								"name": "name",
								"note": "部门名称"
							},
							{
								"name": "notes",
								"note": "部门描述 "
							},
							{
								"name": "key",
								"note": "部门标识 "
							},
							{
								"name": "parentId",
								"note": "部门父级id "
							}
						]
						
						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that,verify) == false) {
							return false
						}

				

						var data = res.data.data

						that.departmentData[that.SetIndex].deptlist.push(data)
						that.$Message.success("添加成功")

					}).catch(function(err) {

						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

					this.departmentModels = false
				}
			},

			//开启二级部门的修改

			setdepts: function(index, indexs) {
				
				this.setIndex = index
				this.setIndexs = indexs
				this.SetdepartmentModels = true
				this.Setdepartments.SetdepartmentName = this.departmentData[index].deptlist[indexs].name
				this.Setdepartments.SetdepartmentDescribe = this.departmentData[index].deptlist[indexs].notes
				this.Setdepartments.SetdepartmentKey = this.departmentData[index].deptlist[indexs].key

			},

			//提交二级部门的修改
			setdeptsPush: function() {

				var id = this.departmentData[this.setIndex].deptlist[this.setIndexs].id

				var setdepartments = this.Setdepartments

				var name = setdepartments.SetdepartmentName
				var describe = setdepartments.SetdepartmentDescribe
				var Key = setdepartments.SetdepartmentKey

				if(name == "" || name == null || name.trim().length == 0) {

					this.$Message.error('部门名称不能为空！');
					return false;
				} else if(name.trim().length > 20) {

					this.$Message.error('部门名称字符长度不能超过20个字符！');
					return false;
				} else if(describe == "" || describe == null || describe.trim().length == 0) {
					this.$Message.error('部门描述不能为空！');
					return false;
				} else if(describe.trim().length > 50) {
					this.$Message.error('部门描述字符长度不能超过50个字符！');
					return false;
				} else if(Key == "" || Key == null || Key.length == 0) {

					this.$Message.error('部门标识不能为空！');
					return false;
				} else if(Key.length > 20) {

					this.$Message.error('部门标识字符长度不能超过20个字符！');
					return false;
				} else {

					const msg = this.$Message.loading({
						content: 'Loading...',
						duration: 0
					});

					var that = this
					
					axios.defaults.headers['X-P']=this.$route.query.pkey+"-"+this.$route.query.key+"-edit"
					
					//                    /
					this.axios({
						method: 'put',
						url: '/api/f/depts/' + id,

						data: {
							"name": name,
							"notes": describe,
							"key": Key
						}

					}).then(function(res) {
						that.SetdepartmentModels = false
						
						var verify = [{
								"name": "name",
								"note": "部门名称"
							},
							{
								"name": "notes",
								"note": "部门描述 "
							},
							{
								"name": "key",
								"note": "部门标识 "
							},
							
						]
						
						setTimeout(msg, 100);
						if(Isjurisdiction.isright(res, that,verify) == false) {
							return false
						}

						

						var data = res.data.data

						that.departmentData[that.setIndex].deptlist[that.setIndexs].name = data.name
						that.departmentData[that.setIndex].deptlist[that.setIndexs].notes = data.notes
						that.departmentData[that.setIndex].deptlist[that.setIndexs].key = data.key

						that.$Message.success("修改成功")

					}).catch(function(err) {
						that.SetdepartmentModels = false
						that.$Message.error('出错了，请稍后重试！');
						setTimeout(msg, 100);

					})

					this.SetdepartmentModels = false

				}

			},

			//开启测试二级部门提示框

			deptsTwoopen: function(index, indexs) {

				this.setIndex = index
				this.setIndexs = indexs
				this.pdels=true
                		
			},

			//删除二级部门

			delDeptsTwo: function(index, indexs) {

               var index =this.setIndex
               var indexs=this.setIndexs

				var id = this.departmentData[index].deptlist[indexs].id

				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this
				
				axios.defaults.headers['X-P']=this.$route.query.pkey+"-"+this.$route.query.key+"-delete"
				//                    /
				this.axios({
					method: 'delete',
					url: 'api/f/depts/' + id,

				}).then(function(res) {
                    
					setTimeout(msg, 100);
					if(Isjurisdiction.isright(res, that) == false) {
						that.pdels=false
						return false
					}

					that.departmentData[index].deptlist.splice(indexs, 1)
					that.$Message.success("删除成功")
					 that.pdels=false

				}).catch(function(err) {
                 

				})
			},

			collapseChange: function(index) {
				this.setIndex = index

				
			},

			// 导出表格
			exportData: function(type) {

				this.$refs.table.exportCsv({
					filename: '部门列表'
				});
			},

		},

		mounted: function() {
			
			axios.defaults.headers['X-P']=this.$route.query.pkey+"-"+this.$route.query.key+"-view"
			 var keydata = this.$route.query.key
            var operation=this.operation
			Isjurisdiction.user_jurisdiction(keydata,operation)

			var that = this
			var datacache = this.departmentDataCache;
			//请求部门列表
			this.axios({
				method: 'get',
				url: '/api/f/depts',

			}).then(function(res) {
				
				if(Isjurisdiction.isright(res, that) == false) {
					that.loading = false
					return false
				}

				var data = res.data.data
				var dataArry = []
				var deptArry = []
				var deptlist = []
				for(var i = 0; i < data.length; i++) {
					var id = data[i].id
					if(!data[i].parentId) {
						deptArry[id] = data[i]

						/*dataArry.push(data[i])*/
					}else{
						if(data[i].parentId) {
						var id = data[i].parentId

						if(!deptlist[id]) {
							var obj = []
							obj.push(data[i])
							deptlist[id] = obj
						} else {
							deptlist[id].push(data[i])
						}

						/*deptlist[id].deptList = []*/
						/*	deptlist[id].deptList.push(data[i])*/

					}
					}

				}

			

				for(var i = 0; i < data.length; i++) {
					var id = data[i].id
					if(!data[i].parentId) {

						if(!deptlist[id]) {
							var obj = deptArry[id]
							obj.deptlist = []
							dataArry.push(obj)
						} else {
							var obj = deptArry[id]
							obj.deptlist = deptlist[id]
							dataArry.push(obj)
						}

					}
				}

				
				that.departmentData = dataArry
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
	
	.Collapse_box {
		margin-bottom: 20px;
	}
	
	.Collapse_ac {
		font-size: 0px;
		width: 100%;
	}
	
	.Collapse_ac ul {
		font-size: 16px;
		display: inline-block;
		width: 100%;
		font-size: 0px;
		padding-right: 30px;
		padding-bottom: 16px;
	}
	
	.Collapse_ac ul li {
		float: left;
		font-size: 14px;
		display: block;
		line-height: 24px;
		padding: 0px 6px;
		cursor: pointer;
	}
	
	.Collapse_ac ul li.item_r:hover {
		text-decoration: underline;
	}
	
	.Collapse_ac ul li.item_r {
		float: right;
	}
	
	.tab_tip{
		display: block;
		width: 100%;
		line-height: 38px;
		text-align: center;
		border-bottom: solid 1px #dddee1;
		border-right: solid 1px #dddee1;
	}
</style>

<style src='./../../assets/css/department.css'></style>