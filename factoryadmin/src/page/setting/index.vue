<template>

	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>系统设置</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="table_nav_iv">

			<div class="ivu-tabs">
				<div class="ivu-tabs-bar">
					<!---->
					<div tabindex="0" class="ivu-tabs-nav-container">
						<div class="ivu-tabs-nav-wrap" style="position: relative;"><span class="ivu-tabsnav-prev ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span> <span class="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
							<div class="ivu-tabs-nav-scroll border">
								<div class="ivu-tabs-nav">
									<!--<div class="ivu-tabs-ink-bar ivu-tabs-

ink-bar-animated" style="width: 88px;"  :style="[Tabstransform()]"></div>-->
									<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">信息设置</div>
									<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}" @click="TabsChange(1)">功能设置</div>
									<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==2}" @click="TabsChange(2)">账户设置</div>
									<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==3}" @click="TabsChange(3)">样式设置</div>
									<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==4}" @click="TabsChange(4)">产品分类设置</div>

								</div><object tabindex="-1" type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object></div>
						</div>
					</div>

				</div>

				<div class="ivu-tabs-content ivu-tabs-content-animated" :style="[minusTabstransform()]">
					<div class="ivu-tabs-tabpane padding">

					</div>
					<div class="ivu-tabs-tabpane padding">

					</div>
					<div class="ivu-tabs-tabpane padding">

					</div>
					<div class="ivu-tabs-tabpane padding">

					</div>

					<div class="ivu-tabs-tabpane padding">
						<div class="operation_box">
							<div class="active">
								<div class="ui_operateRight">
									<Button type="primary" @click="">添加产品分类</Button>

									<!--<Button class="item_PL" type="primary" @click="exportData">生成表格数据</Button>-->
								</div>
							</div>

						</div>

						<!-- 产品分类信息列表 -->
						<div>

							<Table border :loading="loading" :columns="productCategoryHeader" :data="productCategory" ref="table"></Table>
							<Switch v-model="loading"></Switch>
							<div class="ui_tableBottom">

								<div class="ui_operate">

								</div>

								

							</div>

						</div>
					</div>

				</div>

			</div>

			<!--<Tabs>
									<TabPane label="信息设置" name="1">
										
									</TabPane>
									
									<TabPane label="功能设置" name="2">									
										
									</TabPane>

									<TabPane label="账户设置" name="3">

									</TabPane>

									<TabPane label="样式设置" name="4">
										
									</TabPane>

								</Tabs>-->
		</div>

	</div>

</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				tabIndexs: 0,
				
				productCategoryHeader: [

					{
						title: '分类名称',
						key: 'name'
					},

					{
						title: '分类描述',
						key: 'notes'
					},

					{
						title: '产品类型',
						key: 'typeName'
					},

					{
						title: '唯一标识',
						key: 'key'
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
										size: 'small',
										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.SetproductModel = true
											this.SetproductOpen(params.index)

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
											this.pdel=true
											this.SetIndex=params.index

										}
									}
								}, '删除'),
								

							

							]);
						}
					}
				],

				productCategory: [], //产品分类数据
			};
		},

		methods: {

			TabsChange: function(index) {
				this.tabIndexs = index
			},

			Tabstransform: function() {
				var index = this.tabIndexs
				let style = {}
				style['transform'] = 'translate3D(' + index * 100 + '%' + ', 0px,0px)'

				return style

			},

			minusTabstransform: function() {
				var index = this.tabIndexs
				let style = {}
				style['transform'] = 'translate3D(' + -index * 100 + '%' + ', 0px,0px)'

				return style

			},
			
			//获取产品分类
			
			getProduct:function  () {
					var that = this
			//产品分类数据
			this.axios({
				method: 'get',
				url: '/api/f/productcategories',

			}).then(function(res) {
				that.loading = false
				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data

				for(var i = 0; i < data.length; i++) {

					var type = data[i].type

					if(type == 0) {
						data[i].typeName = "原材料"
					} else if(type == 1) {
						data[i].typeName = "尾料"
					} else if(type == 2) {
						data[i].typeName = "废料"
					} else if(type == 3) {
						data[i].typeName = "退料"
					} else if(type == 4) {
						data[i].typeName = "退货"
					} else if(type == 5) {
						data[i].typeName = "成品"
					}

				}

				that.productCategory = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');
				that.loading = false

			})

			}

		},

		mounted: function() {
			
			this.getProduct()

		}

	}
</script>

<style>

</style>