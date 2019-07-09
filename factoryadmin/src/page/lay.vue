<style scoped>
	.layout {
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}
	
	.layout-logo {
		
		
		border-radius: 3px;
		float: left;
	
		position: relative;
		top: 0px;
		left: 220px;
		font-size: 14px;
		color: #000000;
		line-height: 60px;
	}
	
	
	.login_nav{
		display: block;
		width: 200px;
		background: #002140;
	}
	.login_nav img{
		display: block;
		margin: 0px auto;
		height: 60px;
		width: auto;
		padding: 10px;
		
	}
	
	
	
	.layout-nav {
		width: 420px;
		margin: 0 auto;
		margin-right: 20px;
	}
	
	.layout-footer-center {
		text-align: center;
	}
	
	.ivu-layout-header {
		z-index: 99 !important;
	}
	
	.ivu-layout-sider-children .ivu-menu a {
		color: #495060;
	}
	
	.ivu-menu {
		color: white;
	}
	
	.ivu-menu-light {
		background: #001529;
	}
	
	.ivu-layout-sider-children .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected a {
		color: #fff;
	}
	
	.ivu-layout-sider-children .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected {
		background: #2d8cf0;
	}
	
	.ivu-layout-header .ivu-menu a {
		color: #000000;
	}
	
	
	
	.lay_mIcon {
		margin-right: 40px;
	}
	
	.layout-nav {
		margin-right: 0px !important;
	}
	
	.layMu_sider {
		margin-left: 200px;
	}
	
	.layMu_siderMu {
		left: 0px
	}
	
	.back_lay {
		float: left;
		cursor: pointer;
		display: none;
	}
	
	.back_layMenu {
		position: fixed;
		bottom: 46px;
		left: 0px;
		z-index: 3;
		width: 180px;
		opacity: 0.8;
		max-height: 400px;
		overflow: auto;
	}
	
	.back_layMenu:hover {
		opacity: 1;
	}
	
	.back_layMenu .ivu-menu-item a {
		color: #495060;
	}
	
	.back_layMenu .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected a {
		color: #2d8cf;
	}
	
	.Tab_class {
		padding-bottom: 16px;
		position: fixed;
		z-index: 9;
		width: 100%;
		height: 50px;
		background: white;
	
	}
	
	.Tab_class_dot {
		padding: 5px 0px 5px 16px;
		font-size: 0px;
	}
	
	.Tab_class .Tab_class_dot ul {
		display: inline-block;
	}
	
	.Tab_class .Tab_class_dot ul li {}
	
	.Tab_classNav {
		
		padding-right: 200px;
		box-sizing: initial;
		border-bottom: solid 1px #E9E9E9;
	}
	
	.Tab_class ul {
		background: white;
		font-size: 14px;
		animation: myfirst 5s;
		-webkit-animation: myfirst 5s;
		white-space: nowrap;
		margin-left: 50px;
	
	}
	
	.Tab_class ul li {
		white-space: nowrap;
		display: inline-block;
		height: 50px;
		padding: 0px 15px;
		border-top: solid 2px white;
		cursor: pointer;
		line-height: 50px;
		
	}
	
	.Tab_class ul li a {
		color: #000;
		line-height: 50px;
		display: block;
		font-weight: 200;
	}
	
	.Tab_class ul li.home {
		font-size: 20px;
		cursor: pointer;
		margin-left: 16px;
	}
	
	.Tab_class ul li:hover {
		border-top: solid 2px #1890FF;
		background: #f0faff;
		box-sizing: border-box;
	}
	
	.Tab_class ul li.active {
		border-top: solid 2px #1890FF;
		background: #f0faff;
		box-sizing: border-box;
	}
	
	.Tab_class ul li.item {
		position: relative;
	}
	
	.Tab_class ul li.item i.ivu-icon.ivu-icon-ios-close {
		position: absolute;
		top: 10px;
		right: 0px;
		color: #666;
	}
	
	.Tab_class ul li.item i.ivu-icon.ivu-icon-ios-close:hover {
		color: #000000;
	}
	
	.iconback {
		position: absolute;
		top: 0px;
		height: 50px;
		width: 50px;
		padding: 0px 10px;
		background: white;
		line-height: 50px;
		font-size: 20px;
		float: left;
	}
	
	#tab_sc {
		-webkit-transition: all 0.6s;
		-moz-transition: all 0.6s;
		-ms-transition: all 0.6s;
		-o-transition: all 0.6s;
		transition: all 0.6s;
		z-index: 0;
	}
	
	@media only screen and (max-width: 999px) {
		.layMu_sider {
			margin-left: 0px;
		}
		.layMu_siderMu {
			left: -200px
		}
		.back_lay {
			display: block;
		}
		.Tab_classNav {
			padding-right: 0px;
		}
	}
	
	
	.ivu-menu-vertical .ivu-menu-item,
	.ivu-menu-vertical .ivu-menu-submenu-title {
		padding: 0px !important;
	}
	
	.ivu-layout-sider-children .ivu-menu a {
		display: block;
		padding: 14px 24px;
		padding-left:30px;
		color: white;
		font-size: 15px;
	}
	
	.layout-logoImg img {
		display: block;
		width: 100%;
		margin: 0px auto;
	}
	
	.lay_right {
		margin-right: 15px;
		color: white;
	}
	
	.footer_logo {
		width: 20px;
		display: inline-block;
	}
	
	.menuitemClasses{
		background:white;
		color:#000000;
		
	}
	
	.router_center{
		padding: 0px 4px 24px 24px; margin: 124px 0px 0px 0px;
	}
</style>
<template>

	<div>
		<!-- 后台_one-s -->
		<div v-if="isLayshow==0">

			<div class="layout" style="min-width: 500px; overflow: auto;">
				<Layout>
					
					<Layout>
						<Breadcrumb>
							<!-- <BreadcrumbItem>Home</BreadcrumbItem>
			                    <BreadcrumbItem>Components</BreadcrumbItem>
			                    <BreadcrumbItem>Layout</BreadcrumbItem> -->
						</Breadcrumb>
						<Content :style="{padding: '0px  ',  background: '#fff' ,border:'0px' }">
							
							<Header class="layout-header-bar" :style="{position: 'fixed', width: '100%' ,padding:'0px', height:'50px' , background:'#002140'}">
							<Menu mode="horizontal" theme="dark" active-name="" style="height: 60px; box-shadow:0 0 4px rgba(0,0,0,.2)" class="menuitemClasses">
								<div class="layout-logo">欢迎进入红田家居智慧版管理平台
								</div>
								<div class="layout-nav">

									<!-- 	<MenuItem name="4">
										<Icon type="ios-paper"></Icon>
										Item 4
										</MenuItem> -->

									<MenuItem name="1" style="margin-right: 0px; padding-right: 20px; float: right; height: 60px; line-height: 60px; color: #000000; "class="menuitemClasses">

									<!--<Icon class="lay_mIcon" type="ios-qr-scanner" size="16" v-show="iswindowBig==false" @click="windowBig"></Icon>

									<Icon class="lay_mIcon" type="ios-contract" size="16" v-show="iswindowBig==true" @click="windowSmall">></Icon>-->

									<Dropdown trigger="click">
										<a href="javascript:void(0)">
											{{userObj.name}}
											<Icon type="ios-arrow-down"></Icon>
										</a>
										<!-- <a href="javascript:void(0)">
												<Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
			
											</a> -->
										<DropdownMenu slot="list" v-show='userObj.type!=4'>
											<DropdownItem>
												<a style="color: #000000;" @click="tabs('user','个人信息','0-0-0')">个人信息</a>
											</DropdownItem>

											<DropdownItem>
												<a @click="tabs('changepassword','修改密码','0-0-0')">修改密码</a>
											</DropdownItem>
											<DropdownItem>
												<a @click="loginOut">退出登录</a>
											</DropdownItem>

										</DropdownMenu>

										<DropdownMenu slot="list" v-show='userObj.type==4'>

											<DropdownItem>
												<a @click="loginOut">退出登录</a>
											</DropdownItem>

										</DropdownMenu>
									</Dropdown>

									</MenuItem>
								</div>

							</Menu>
						</Header>
							
							<Layout>
								<div class="layMu_sider">
									<!-- borderRight:'2px solid  rgb(221, 222, 225)', -->
									<Sider class="layMu_siderMu" hide-trigger :style="{position: 'fixed', zIndex:'100', height: '100vh',  overflow: 'auto',background: '#fff',boxSizing: 'border-box'} ">
										
										  
										
										<Menu :active-name="laymuIndex" theme="light" width="200px" :open-names="laymuIndexBox" :style="{paddingBottom:'100px', }">

                                        <div class="login_nav">
											<img src="../assets/logo.png" />
										  </div>

											<!--<MenuItem v-for="(item,index) in layData" :key="index" :name="item.index">
												<a @click="tabs(item.path,item.name,item.index,item.key,item.key)">
													<Icon class="lay_right" type="ios-disc-outline"></Icon>{{item.name}}</a>
												</MenuItem>-->

											<!--<Submenu v-for="(item,index) in layData" :key="index" :name="item.index">
												<template slot="title">
													<Icon :type="item.icon"></Icon>
													{{item.name}}
												</template>

												<MenuItem v-for="(items,indexs) in item.child" :key="indexs" :name="items.index">
												<a @click="tabs(items.path,items.name,items.index,item.key,items.key)">
													<Icon class="lay_right" :type="items.icon"></Icon>{{items.name}}</a>
												</MenuItem>

											</Submenu>-->

											<MenuItem name="1">
											<a @click="tabs('supplier','供应商管理',1,'supplier','supplier')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>供应商管理</a>
											</MenuItem>

											<MenuItem name="2">
											<a @click="tabs('dealercompany','经销商管理',2,'dealercompany','dealercompany')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>经销商管理</a>
											</MenuItem>

											<MenuItem name="3">
											<a @click="tabs('client','客户管理',3,'client','client')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>客户管理</a>
											</MenuItem>

											<MenuItem name="4">
											<a @click="tabs('outsource','外协管理',4,'outsource','outsource')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>外协管理</a>
											</MenuItem>

											<MenuItem name="5">
											<a @click="tabs('designorder','设计管理',5,'designorder','designorder')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>设计管理</a>
											</MenuItem>

											<MenuItem name="6">
											<a @click="tabs('orderlist','订单管理',6,'orderlist','orderlist')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>订单管理</a>
											</MenuItem>

											<MenuItem name="7">
											<a @click="tabs('financeorder','财务管理',7,'financeorder','financeorder')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>财务管理</a>
											</MenuItem>

											<MenuItem name="8">
											<a @click="tabs('productionplan','生产管理',8,'productionplan','productionplan')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>生产管理</a>
											</MenuItem>

											<MenuItem name="9">
											<a @click="tabs('finishedstock','成品管理',9,'finishedstock','finishedstock')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>成品管理</a>
											</MenuItem>

											<MenuItem name="10">
											<a @click="tabs('delivers','发货管理',10,'delivers','delivers')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>发货管理</a>
											</MenuItem>

											<MenuItem name="11">
											<a @click="tabs('aftersalemanage','售后管理',11,'aftersalemanage','aftersalemanage')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>售后管理</a>
											</MenuItem>

											<MenuItem name="12">
											<a @click="tabs('product','产品管理',12,'product','product')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>产品管理</a>
											</MenuItem>

											<MenuItem name="13">
											<a @click="tabs('articles','内容管理',13,'articles','articles')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>内容管理</a>
											</MenuItem>

											<MenuItem name="14">
											<a @click="tabs('organizationList','组织管理',14,'organizationList','organizationList')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>组织管理</a>
											</MenuItem>

											<MenuItem name="16">
											<a @click="tabs('setting','系统设置',16,'setting','setting')">
												<Icon class="lay_right" type="ios-disc-outline"></Icon>系统设置</a>
											</MenuItem>

										</Menu>
									</Sider>
								</div>
								<Content :style="{padding: '0px 0px 24px 0px',  background: '#f0f2f5'}">
									<div class="Tab_class">

										<div id="Tab_classNav" class="Tab_classNav" style="position: relative; background: white; height: 50px; top: 60px;">

											<!--	
										<div class="Tab_class_dot">
											<ul>
												<li  v-for="(item,index) in tab"  @click="tabMu(index)">
													6
													<Tag   @on-close="delTab(index)" type="dot" closable>{{item.name}}</Tag>
												</li>
											</ul>
											
										</div>
										-->

											<div id="Tab_center"></div>

											<ul id="tab_sc" style="position: absolute; top: 0px; left: 0px; ">

												<li v-for="(item,index) in tab" :key="item.name" :class="{active:tabIndex==index}" class="item tabMu_item">

													<div v-show="index==0">
														<a @click="tabMu(index)">
															<Icon size="20" type="ios-home-outline"></Icon>
														</a>

													</div>

													<div v-show="index!=0" style="padding-right: 15px;">
														<a @click="tabMu(index)">
															{{item.name}}
														</a>
														<Icon type="ios-close" size="30" @click="delTab(index)"></Icon>
													</div>

												</li>
											</ul>

											<div class="iconback" @click="tabClickpush" style="right: 200px;">
												<Icon type="ios-arrow-forward"></Icon>
											</div>

											<div class="iconback" @click="tabClickclear" style="left:0px;">
												<Icon type="ios-arrow-back"></Icon>
											</div>
										</div>
									</div>
									<div class="router_center">
										<router-view :text="tabIndex" @openWindow='clicktabs' @close="delTab"></router-view>
									</div>

								</Content>
							</Layout>
						</Content>
					</Layout>
					<Footer class="layout-footer-center" style="position: fixed; width: 100%; z-index: 10; bottom: 0px; left: 0px; padding: 10px; background:#EEEEEE;">
						<div class="back_lay">

							<Icon type="ios-settings" size="20" @click="blakcLay"></Icon>
							<div class="back_layMenu" v-show="isbacklayMenu==true">

								<Menu :active-name="laymuIndex" theme="light" width="180px" :open-names="laymuIndexBox">

									<!--<Submenu v-for="(item,index) in layData" :key="item.index" :name="item.index">
												<template slot="title">
													<Icon type="ios-contacts"></Icon>
													{{item.name}}
												</template>

												<MenuItem v-for="(items,indexs) in item.child" :key="items.index" :name="items.index">
												<a @click="tabs(items.path,items.name,items.index,items.key)">
													<Icon class="lay_right" type="ios-keypad"></Icon>{{items.name}}</a>
												</MenuItem>

											</Submenu>-->

									<!--<Submenu name="1">
												<template slot="title">
													<Icon type="ios-build" ></Icon>
													系统管理
												</template>
												<MenuItem name="1-1">
												<a @click="tabs('departmentlist','系统设置','1-1')">
													<Icon class="lay_right" type="ios-cog" ></Icon>系统设置</a>
												</MenuItem>

												<MenuItem name="1-2">
												<a @click="tabs('menulist','菜单设置','1-2')">
													<Icon class="lay_right" type="ios-keypad" ></Icon>菜单设置</a>
												</MenuItem>

												<MenuItem name="1-3">
												<a @click="tabs('rolelist','角色管理','1-3')">
													<Icon class="lay_right" type="md-contacts"></Icon>角色管理</a>
												</MenuItem>

											</Submenu>-->
									<!--
											<Submenu name="2">
												<template slot="title">
													<Icon type="ios-contacts"></Icon>
													组织机构管理
												</template>

												<MenuItem name="2-1">
												<a @click="tabs('departmentlist','部门管理','2-1')">
													<Icon class="lay_right" type="md-funnel"></Icon>部门管理</a>
												</MenuItem>

												<MenuItem name="2-2">
												<a @click="tabs('employee','员工管理','2-2')">
													<Icon class="lay_right" type="ios-people"></Icon>员工管理</a>
												</MenuItem>
											</Submenu>

											<Submenu name="3">
												<template slot="title">
													<Icon type="ios-analytics"></Icon>
													产品管理
												</template>
												<MenuItem name="3-1">
												<a @click="tabs('productclass','产品分类','3-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>产品分类
												</a>
												</MenuItem>

												<MenuItem name="3-2">
												<a @click="tabs('productmaterial','产品材质','3-2')">
													<Icon class="lay_right" type="md-barcode"></Icon>产品材质
												</a>
												</MenuItem>

												<MenuItem name="3-3">
												<a @click="tabs('productspec','产品规格','3-3')">
													<Icon class="lay_right" type="ios-grid"></Icon>产品规格
												</a>
												</MenuItem>

												<MenuItem name="3-4">
												<a @click="tabs('productcolor','产品颜色','3-4')">
													<Icon class="lay_right" type="ios-color-palette"></Icon>产品颜色
												</a>
												</MenuItem>

												<MenuItem name="3-5">
												<a @click="tabs('product','产品信息','3-5')">
													<Icon class="lay_right" type="ios-cube"></Icon>产品信息
												</a>
												</MenuItem>
											</Submenu>

											<Submenu name="4">
												<template slot="title">
													<Icon type="ios-home-outline"></Icon>
													仓库管理
												</template>
												<MenuItem name="4-1">
												<a @click="tabs('warehouse','仓库管理','4-1')">
													<Icon class="lay_right" type="ios-home-outline"></Icon>仓库管理
												</a>

												</MenuItem>

											</Submenu>

											<Submenu name="5">
												<template slot="title">
													<Icon type="ios-umbrella"></Icon>
													库存管理
												</template>

												<!--<MenuItem name="5-0">
												<a @click="tabs('finishedstock','成品仓库管理','5-0')">
													<Icon class="lay_right" type="ios-keypad"></Icon>成品仓库管理</a>
												</MenuItem>

												<MenuItem v-for="(item,index) in warehouseData" :key="item.NumName" :name="item.NumName">
												<a @click="tabs(item.path,item.name+'仓库列表',item.NumName,item.key)">
													<Icon class="lay_right" type="ios-keypad"></Icon>{{item.name}}
												</a>
												</MenuItem>

											</Submenu>

											<Submenu name="6">
												<template slot="title">
													<Icon type="md-swap"></Icon>
													出入库管理
												</template>
												<MenuItem name="6-1">
												<a @click="tabs('warehouseoutin','出入库管理','6-1')">
													<Icon class="lay_right" type="md-return-right"></Icon>出入库列表
												</a>
												</MenuItem>

											</Submenu>

											<Submenu name="7">
												<template slot="title">
													<Icon type="ios-keypad"></Icon>
													供应商管理
												</template>
												<MenuItem name="7-1">
												<a @click="tabs('supplier','供应商管理','7-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>供应商管理
												</a>
												</MenuItem>-->

									<!--<MenuItem name="7-2">
												<a @click="tabs('purchaselist','采购单查询','17-2')">
													<Icon class="lay_right" type="ios-keypad"></Icon>采购单查询
												</a>
												</MenuItem>-->
									<!--			</Submenu>

											<Submenu name="8">
												<template slot="title">
													<Icon type="ios-cart"></Icon>
													采购管理
												</template>
												<MenuItem name="8-1">
												<a @click="tabs('applypurchast','采购申请管理','8-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>采购申请管理
												</a>
												</MenuItem>

												<MenuItem name="8-2">
												<a @click="tabs('purchaselist','采购管理','8-2')">
													<Icon class="lay_right" type="ios-keypad"></Icon>采购管理
												</a>
												</MenuItem>
											</Submenu>

											<Submenu name="9">
												<template slot="title">
													<Icon type="ios-contacts"></Icon>
													经销商管理
												</template>
												<MenuItem name="9-1">
												<a @click="tabs('dealer','经销商列表','9-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>经销商信息管理
												</a>
												</MenuItem>-->

									<!--<MenuItem name="9-2">
												<a @click="tabs('home','经销商财务账号','9-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>经销商财务账号
												</a>
												</MenuItem>
												
												<MenuItem name="9-3">
												<a @click="tabs('home','经销商订单查询','9-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>经销商订单查询
												</a>
												</MenuItem>-->

									<!--	</Submenu>

											<Submenu name="10">
												<template slot="title">
													<Icon type="md-clipboard"></Icon>
													订单管理
												</template>
												<MenuItem name="10-1">
												<a @click="tabs('orderlist','订单管理','10-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>订单管理
												</a>
												</MenuItem>

											</Submenu>
											<Submenu name="11">
												<template slot="title">
													<Icon type="ios-filing"></Icon>
													设计管理
												</template>
												<MenuItem name="11-2">
												<a @click="tabs('designorder?allocated=false','未分配订单','11-2')">
													<Icon class="lay_right" type="ios-keypad"></Icon>未分配订单
												</a>
												</MenuItem>

												<MenuItem name="11-3">
												<a @click="tabs('designorder?allocated=true','已分配订单','11-3')">
													<Icon class="lay_right" type="ios-keypad"></Icon>已分配订单
												</a>
												</MenuItem>

											</Submenu>

											<Submenu name="12">
												<template slot="title">
													<Icon type="ios-filing"></Icon>
													生产管理
												</template>
												<MenuItem name="12-1">
												<a @click="tabs('productionplan','生产计划','12-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>生产计划
												</a>
												</MenuItem>

												<MenuItem name="12-2">
												<a @click="tabs('productionprogress','生产过程','12-2')">
													<Icon class="lay_right" type="ios-keypad"></Icon>生产过程
												</a>
												</MenuItem>

											</Submenu>

											<Submenu name="13">
												<template slot="title">
													<Icon type="md-bicycle"></Icon>
													配送管理
												</template>
												<MenuItem name="13-1">
												<a @click="tabs('distributionplan','配送计划管理','13-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>配送计划管理
												</a>
												</MenuItem>

												<MenuItem name="13-2">
												<a @click="tabs('distribution','配送单管理','13-2')">
													<Icon class="lay_right" type="ios-keypad"></Icon>配送单管理
												</a>
												</MenuItem>

											</Submenu>

											<Submenu name="14">
												<template slot="title">
													<Icon type="logo-usd"></Icon>
													财务管理
												</template>
												<MenuItem name="14-1">
												<a @click="tabs('financeorder','订单审批','14-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>订单审批
												</a>
												</MenuItem>

												<MenuItem name="14-2">
												<a @click="tabs('financepurchase','采购单审批','14-2')">
													<Icon class="lay_right" type="ios-keypad"></Icon>采购单审批
												</a>
												</MenuItem>

												<MenuItem name="14-3">
												<a @click="tabs('financedealer','经销商开户审批','14-3')">
													<Icon class="lay_right" type="ios-keypad"></Icon>经销商开户审批
												</a>
												</MenuItem>

												<MenuItem name="14-4">
												<a @click="tabs('supplieraudit','供应商审批','14-4')">
													<Icon class="lay_right" type="ios-keypad"></Icon>供应商审批
												</a>
												</MenuItem>

												<MenuItem name="14-5">
												<a @click="tabs('dealerpayaudit','经销商支付审批','14-5')">
													<Icon class="lay_right" type="ios-keypad"></Icon>经销商支付审批
												</a>
												</MenuItem>-->

									<!--<MenuItem name="14-6">
												<a @click="tabs('aftersaleaudit','售后申请审批','14-6')">
													<Icon class="lay_right" type="ios-keypad"></Icon>售后申请审批
												</a>
												</MenuItem>-->

									<!--</Submenu>-->

									<!--	<Submenu name="15">
												<template slot="title">
													<Icon type="ios-man"></Icon>
													客户管理
												</template>
												<MenuItem name="15-1">
												<a @click="tabs('client','客户管理','15-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>客户查询
												</a>
												</MenuItem>

											</Submenu>

											<Submenu name="16">
												<template slot="title">
													<Icon type="md-ionitron"></Icon>
													售后管理
												</template>
												<MenuItem name="16-1">
												<a @click="tabs('aftersale','售后管理','16-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>售后申请管理
												</a>
												</MenuItem>

											</Submenu>
-->
									<!--<Submenu name="17">
												<template slot="title">
													<Icon type="ios-cube" ></Icon>
													商品管理
												</template>
												<MenuItem name="17-1">
												<a @click="tabs('home','板材管理','17-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>板材管理
												</a>
												</MenuItem>
												
												<MenuItem name="17-2">
												<a @click="tabs('home','色卡管理','17-2')">
													<Icon class="lay_right" type="ios-keypad"></Icon>色卡管理
												</a>
												</MenuItem>
												
												<MenuItem name="17-3">
												<a @click="tabs('home','商品系列管理','17-3')">
													<Icon class="lay_right" type="ios-keypad"></Icon>商品系列管理
												</a>
												</MenuItem>
												
											<MenuItem name="17-4">
												<a @click="tabs('home','单品管理','17-4')">
													<Icon class="lay_right" type="ios-keypad"></Icon>单品管理
												</a>
												</MenuItem>
												

											</Submenu>
											
											<Submenu name="18">
												<template slot="title">
													<Icon type="ios-paper"></Icon>
													案例管理
												</template>
												<MenuItem name="18-1">
												<a @click="tabs('home','全屋设计案例管理','18-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>全屋设计案例管理
												</a>
												</MenuItem>
												
												<MenuItem name="18-2">
												<a @click="tabs('home','店铺设计案例管理','18-2')">
													<Icon class="lay_right" type="ios-keypad"></Icon>店铺设计案例管理
												</a>
												</MenuItem>
											</Submenu>
											
											<Submenu name="19">
												<template slot="title">
													<Icon type="ios-thermometer-outline"></Icon>
													活动管理
												</template>
												<MenuItem name="19-1">
												<a @click="tabs('home','厂家活动管理','19-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>厂家活动管理
												</a>
												</MenuItem>
												
												<MenuItem name="19-2">
												<a @click="tabs('home','经销商活动查询','19-2')">
													<Icon class="lay_right" type="ios-keypad"></Icon>经销商活动查询
												</a>
												</MenuItem>
											</Submenu>
											
											
											<Submenu name="20">
												<template slot="title">
													<Icon type="md-share-alt"></Icon>
													快享管理
												</template>
												<MenuItem name="20-1">
												<a @click="tabs('home','快享管理','20-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>快享管理
												</a>
												</MenuItem>												
												
											</Submenu>
											
											<Submenu name="21">
												<template slot="title">
													<Icon type="ios-speedometer"></Icon>
													物流公司管理
												</template>
												<MenuItem name="21-1">
												<a @click="tabs('home','物流公司管理','21-1')">
													<Icon class="lay_right" type="ios-keypad"></Icon>物流公司管理
												</a>
												</MenuItem>												
												
											</Submenu>-->

								</Menu>

							</div>

						</div>技术支持：老屋新房 丨 <img class="footer_logo" src="../assets/lwxflogo.png" />
					</Footer>
				</Layout>
			</div>

		</div>

	</div>

</template>
<script>
	export default {

		data() {

			return {
				iswindowBig: false,
				isLayshow: 0,
				isbacklayMenu: false,
				tab: [{ //顶部tab菜单数据
						"name": '首页',
						"path": 'home',
						"type": "0-0",
						"pathtype": false,
						/*"pathdata": ""*/

					}

				],

				tabIndex: 0, //tab位置
				laymuIndex: "",
				laymuIndexBox: [],
				warehouseData: [],
				layData: [],

				userObj: {
					name: "",
					type: "",
				}, //登录人信息

			}

		},

		components: {

		},

		methods: {
			tabs: function(path, name, index, key, keys, pathUrl) {

				var tabsc = document.getElementById("tab_sc")
				var tabArry = document.querySelectorAll('.tabMu_item')
				var scrollW = document.getElementById("Tab_center").scrollWidth
				/*console.log(path, name, index, pathtype, pathdata)*/

				this.laymuIndex = index //清除是一个已展开的菜单
				this.laymuIndexBox = []
				this.laymuIndexBox.push(index)
				//this.laymuIndexBox.push(index.split("-")[0])
				var tabData = this.tab

				for(var i = 0; i < tabData.length; i++) {
					//判断tab菜单数据中是否存在当前菜单数据
					if(keys == tabData[i].key) {
						this.tabIndex = i
						if(path.indexOf("?") == -1) {
							if(!keys) {
								this.$router.push({
									name: path
								})
							} else {

								var pathobj = {
									"pkey": key,
									"key": keys,
									"pathUrl": pathUrl == undefined ? undefined : pathUrl
								}

								this.$router.push({
									name: path,
									query: pathobj
								})
							}
						} else {

							var urldata = path.split("?")[0]
							var valArry = path.split("?")[1].split("&")
							var pathobj = {}
							for(var i = 0; i < valArry.length; i++) {

								var pathval = valArry[i]
								pathobj[pathval.split("=")[0]] = pathval.split("=")[1]
							}

							var pathobj = {
								"pkey": key,
								"key": keys,
								"pathUrl": pathUrl == undefined ? undefined : pathUrl
							}

							this.$router.push({
								name: urldata,
								query: pathobj
							})

						}

						var leaveL = tabArry[i].offsetLeft
						if(tabsc.scrollWidth > scrollW) {
							tabsc.style.left = -leaveL + 'px'
						}

						return false;
					}
				}

				var obj = {
					"name": name,
					"path": path,
					"type": index,
					"pkey": key,
					"key": keys,
					"pathUrl": pathUrl == undefined ? undefined : pathUrl
					/*"pathtype": pathtype,*/
					/*"pathdata": pathdata*/

				}

				this.tab.push(obj)
				this.tabIndex = this.tab.length - 1;
				if(tabsc.scrollWidth > scrollW) {
					tabsc.style.left = -tabsc.scrollWidth + 'px'
				}

				//跳转

				if(path.indexOf("?") == -1) {

					if(!keys) {
						this.$router.push({
							name: path
						})
					} else {
						var pathobj = {
							"pkey": key,
							"key": keys,
							"pathUrl": pathUrl == undefined ? undefined : pathUrl
						}

						this.$router.push({
							name: path,
							query: pathobj
						})
					}

				} else {

					var urldata = path.split("?")[0]
					var valArry = path.split("?")[1].split("&")
					var pathobj = {}
					for(var i = 0; i < valArry.length; i++) {

						var pathval = valArry[i]
						pathobj[pathval.split("=")[0]] = pathval.split("=")[1]
					}
					var pathobj = {
						"pkey": key,
						"key": keys,
						"pathUrl": pathUrl == undefined ? undefined : pathUrl
					}

					this.$router.push({
						name: urldata,
						query: pathobj
					})

				}

				this.setCookie("tabMu", this.tab)

			},

			clicktabs: function(path, name, index, key, keys, pathUrl) {

				var tabsc = document.getElementById("tab_sc")
				var tabArry = document.querySelectorAll('.tabMu_item')
				var scrollW = document.getElementById("Tab_center").scrollWidth
				/*console.log(path, name, index, pathtype, pathdata)*/

				this.laymuIndex = index //清除是一个已展开的菜单
				this.laymuIndexBox = []
				this.laymuIndexBox.push(index)
				//this.laymuIndexBox.push(index.split("-")[0])
				var tabData = this.tab

				for(var i = 0; i < tabData.length; i++) {
					//判断tab菜单数据中是否存在当前菜单数据
					if(keys == tabData[i].key) {
						this.tabIndex = i
						
						if(path.indexOf("?") == -1) {
							if(!keys) {
								this.$router.push({
									name: path
								})
							} else {

								var pathobj = {
									"pkey": key,
									"key": keys,
									"pathUrl": pathUrl == undefined ? undefined : pathUrl
								}

								this.$router.push({
									name: path,
									query: pathobj
								})
							}
						} else {

							var urldata = path.split("?")[0]
							var valArry = path.split("?")[1].split("&")
							var pathobj = {}
							for(var i = 0; i < valArry.length; i++) {

								var pathval = valArry[i]
								pathobj[pathval.split("=")[0]] = pathval.split("=")[1]
							}

							var pathobj = {
									"pkey": key,
									"key": keys,
									"pathUrl": pathUrl == undefined ? undefined : pathUrl
								}

							this.$router.push({
								name: urldata,
								query: pathobj
							})

						}

						var leaveL = tabArry[i].offsetLeft
						if(tabsc.scrollWidth > scrollW) {
							tabsc.style.left = -leaveL + 'px'
						}

						return false;
					}
				}

				var obj = {
					"name": name,
					"path": path,
					"type": index,
					"pkey": key,
					"key": keys,
					"pathUrl": pathUrl == undefined ? undefined : pathUrl

					/*"pathtype": pathtype,*/
					/*"pathdata": pathdata*/

				}

				this.tab.push(obj)
				this.tabIndex = this.tab.length - 1;
				if(tabsc.scrollWidth > scrollW) {
					tabsc.style.left = -tabsc.scrollWidth + 'px'
				}

				//跳转

				if(path.indexOf("?") == -1) {

					if(!keys) {
						this.$router.push({
							name: path
						})
					} else {
						var pathobj = {
							"pkey": key,
							"key": keys,
							"pathUrl": pathUrl == undefined ? undefined : pathUrl
						}

						this.$router.push({
							name: path,
							query: pathobj
						})
					}

				} else {

					var urldata = path.split("?")[0]
					var valArry = path.split("?")[1].split("&")
					var pathobj = {}
					for(var i = 0; i < valArry.length; i++) {

						var pathval = valArry[i]
						pathobj[pathval.split("=")[0]] = pathval.split("=")[1]
					}
					var pathobj = {
						"pkey": key,
						"key": keys,
						"pathUrl": pathUrl == undefined ? undefined : pathUrl
					}
					this.$router.push({
						name: urldata,
						query: pathobj
					})

				}

				this.setCookie("tabMu", this.tab)

			},

			//点击顶部菜单栏
			tabMu: function(index) {

				this.tabIndex = index

				var path = this.tab[index].path
				var keys = this.tab[index].key
				var key = this.tab[index].pkey
				var pathUrl = this.tab[index].pathUrl
				
				
				console.log(pathUrl)
				
				/*var pathtype = this.tab[index].pathtype*/
				this.laymuIndex = this.tab[index].type
				this.laymuIndexBox = []
				this.laymuIndexBox.push(this.tab[index].type)
				//this.laymuIndexBox.push(this.tab[index].type.split("-")[0])

				if(path.indexOf("?") == -1) {
					if(!keys) {
						this.$router.push({
							name: path
						})
					} else {
						var pathobj = {
							"pkey": key,
							"key": keys,
							"pathUrl": pathUrl == undefined ? undefined : pathUrl
						}

						this.$router.push({
							name: path,
							query: pathobj
						})
					}
				} else {

					var urldata = path.split("?")[0]
					var valArry = path.split("?")[1].split("&")
					var pathobj = {}
					for(var i = 0; i < valArry.length; i++) {
						var pathval = valArry[i]
						pathobj[pathval.split("=")[0]] = pathval.split("=")[1]
					}
					var pathobj = {
							"pkey": key,
							"key": keys,
							"pathUrl": pathUrl == undefined ? undefined : pathUrl
						}

					this.$router.push({
						name: urldata,
						query: pathobj
					})

				}

			},

			//点击顶部菜单栏关闭按钮
			delTab: function(index) {
				
				
			
				

				var tabsc = document.getElementById("tab_sc")
				var tabArry = document.querySelectorAll('.tabMu_item')
				var scrollW = document.getElementById("Tab_center").scrollWidth

				this.tab.splice(index, 1)
				var tabData = this.tab

				//判断当前选中的菜单按钮是否是最后一个
				if(!tabData[index + 1]) {

					var path = tabData[tabData.length - 1].path
					var type = tabData[tabData.length - 1].type
					var keys = tabData[tabData.length - 1].key
					var key = tabData[tabData.length - 1].pkey
					var pathUrl=tabData[tabData.length - 1].pathUrl == undefined ? undefined : tabData[tabData.length - 1].pathUrl
					this.tabIndex = this.tab.length - 1

				} else {

					var path = tabData[index].path
					var type = tabData[index].type
					var keys = tabData[index].key
					var key = tabData[index].pkey
					var pathUrl=tabData[tabData.length - 1].pathUrl == undefined ? undefined : tabData[tabData.length - 1].pathUrl
					this.tabIndex = index

				}

				if(tabsc.scrollWidth > scrollW) {

					var leaveL = tabArry[this.tabIndex].offsetLeft
					tabsc.style.left = -leaveL + 'px'
				} else {
					tabsc.style.left = '0px'
				}

				this.laymuIndex = type //清除已展开的菜单
				this.laymuIndexBox = []
				this.laymuIndexBox.push(type)
				//this.laymuIndexBox.push(type.split("-")[0])

				if(path.indexOf("?") == -1) {
					if(!keys) {
						this.$router.push({
							name: path
						})
					} else {
						var pathobj = {
							"pkey": key,
							"key": keys
						}

						this.$router.push({
							name: path,
							query: pathobj
						})
					}
				} else {

					var urldata = path.split("?")[0]
					var valArry = path.split("?")[1].split("&")
					var pathobj = {}
					for(var i = 0; i < valArry.length; i++) {

						var pathval = valArry[i]
						pathobj[pathval.split("=")[0]] = pathval.split("=")[1]
					}
					pathobj['pkey'] = key
					pathobj['key'] = keys
					this.$router.push({
						name: urldata,
						query: pathobj
					})

				}

				this.setCookie("tabMu", this.tab)

			},

			tabClickpush: function() {
				var tabsc = document.getElementById("tab_sc")
				var scrollW = document.getElementById("Tab_center").scrollWidth

				var leaveL = parseInt(tabsc.style.left.split("px")[0])

				leaveL -= scrollW

				if(tabsc.scrollWidth > scrollW && -leaveL < tabsc.scrollWidth) {

					tabsc.style.left = leaveL + 'px'

					if(leaveL > scrollW) {
						tabsc.style.left = -scrollW + 'px'
					}

				}

				/*	var ndleft=+=scrollW
					
					console.log(tabsc.style.left,ndleft)*/

				/*tabsc.style.left=nedd*/
				/*	
			 * 
			 *
			 * 

                var allW= tabsc.scrollLeft+=scrollW
                

                 if(allW<=tabsc.scrollWidth){
                 	tabsc.scrollLeft=allW
                 }*/

				/*)
					
					var goleft=(tabsc.scrollLeft)-200
					
				console.log(tabsc.scrollWidth)
					
					tabsc.scrollWidth-goleft*/

				/*var needLfet = tabArry[i].offsetLeft
				tabsc.scrollLeft = needLfet;*/

			},

			tabClickclear: function() {

				var tabsc = document.getElementById("tab_sc")
				var scrollW = document.getElementById("Tab_center").scrollWidth

				var leaveL = parseInt(tabsc.style.left.split("px")[0])

				leaveL = (leaveL + scrollW)

				if(leaveL < 0) {

					tabsc.style.left = leaveL + 'px'

				} else {
					tabsc.style.left = '0px'
				}

				/*var tabsc = document.getElementById("tab_sc")
				var scrollW = document.getElementById("Tab_center").scrollWidth

                var allW= tabsc.scrollLeft-=scrollW
                

                 if(tabsc.scrollWidth - scrollW ==0){
                 	tabsc.scrollLeft=0
                 }else{
                 	tabsc.scrollLeft=allW
                 }*/

				/*)
					
					var goleft=(tabsc.scrollLeft)-200
					
				console.log(tabsc.scrollWidth)
					
					tabsc.scrollWidth-goleft*/

				/*var needLfet = tabArry[i].offsetLeft
				tabsc.scrollLeft = needLfet;*/

			},

			//退出登录

			loginOut: function() {
				/*var that = this
				//请求部门列表
				this.axios({
					method: 'get',
					url: '/logout',

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						that.loading = false
						return false
					}

				}).catch(function(err) {

					that.$Message.error('出错了，请稍后重试！');

				})*/

				window.location.href = "/logout"

			},

			/*       delTab:funcion(index){
			        	
			        	 
			        	 
			        	   
			        	 
			        	
			        	},*/

			windowBig: function() {
				this.iswindowBig = true

				var e = document.documentElement

				if(e.requestFullScreen) {
					e.requestFullScreen()
				} else if(e.webkitRequestFullScreen) {
					e.webkitRequestFullScreen()
				} else if(e.mozRequestFullScreen) {
					e.mozRequestFullScreen()
				} else if(e.msRequestFullscreen) {
					e.msRequestFullscreen()
				}
			},

			windowSmall: function() {
				this.iswindowBig = false
				var e = document

				if(e.exitFullscreen) {
					e.exitFullscreen()
				} else if(e.webkitCancelFullScreen) {
					e.webkitCancelFullScreen()
				} else if(e.mozCancelFullScreen) {
					e.mozCancelFullScreen()
				} else if(e.msExitFullscreen) {
					e.msExitFullscreen()
				}

			},

			blakcLay: function() {
				this.isbacklayMenu = !this.isbacklayMenu

			},

			setCookie: function(cname, cvalue) {

				document.cookie = cname + "=" + JSON.stringify(cvalue)
			},

			//读取顶部tab菜单cookie
			checkCookie: function() {
				var tabmu = this.getCookie("tabMu");

				if(tabmu != "") {
					this.tab = JSON.parse(tabmu)
				}

				var tabdata = this.tab
				var href = window.location.href

				var hrefUrl = href.split("&pkey")[0].split("/#/")[1]

				for(var i = 0; i < tabdata.length; i++) {
					if(tabdata[i].path == hrefUrl) {
						this.tabIndex = i

					}
				}

			},

			getCookie: function(cname) {

				var arr = document.cookie.match(new RegExp("(^| )" + cname + "=([^;]*)(;|$)"));
				if(arr != null) return unescape(arr[2]);
				return '';

				/*var name = cname + "=";
			    var ca = document.cookie.split(';');
			    for(var i=0; i<ca.length; i++) {
			        var c = ca[i].trim();
			        if (c.indexOf(name)==0) { return c }
			    }
			    return "";*/
			},

			usermenu: function() {
				var cfg = window.lwxfPreload

				if(cfg == "" || cfg == null) {
					return false;
				}

				var menusdata = cfg.preload.dictionaries.menus
				var usermenukeys = cfg.preload.userMenu.userMenuKeys
				var useroperations = cfg.preload.userMenu.userOperations
				var menus = []
				var menusKeys = []
				var menusArry = []

				for(var q = 0; q < menusdata.length; q++) {

					if(!useroperations[menusdata[q].key]) {
						menusKeys[menusdata[q].key] = menusdata[q]

					} else {

						var obj = menusdata[q]
						obj.op = useroperations[menusdata[q].key]
						menusKeys[menusdata[q].key] = obj
					}
				}

				for(var n = 0; n < usermenukeys.length; n++) {

					menus.push(menusKeys[usermenukeys[n]])

				}

				for(var i = 0; i < menus.length; i++) {
					var menudata = menus[i]
					var pid = menudata.parentId

					if(pid == "" || pid == null || pid.trim().length == 0) {

						if(!menusArry[menudata.id]) {
							menudata.child = []
							menusArry[menudata.id] = menus[i]
						} else {
							var childArry = menusArry[menudata.id].child
							var obsA = menus[i]
							obsA.child = childArry
							menusArry[menudata.id] = obsA
						}

						this.layData.push(menusArry[menudata.id])
					} else {

						if(!menusArry[pid]) {

							var obj = {}
							obj.child = []
							obj.child.push(menudata)
							menusArry[pid] = obj
						} else {
							menusArry[pid].child.push(menudata)
						}

					}

				}

				var laydata = this.layData
				for(var m = 0; m < laydata.length; m++) {

					var layitem = laydata[m]
					layitem.index = m + 1

					if(layitem.child) {
						for(var r = 0; r < layitem.child.length; r++) {
							layitem.child[r].index = (m + 1) + "-" + r
						}
					}

				}

				this.layData = laydata

				/*
				 * 
								var userMenuArry = []
								for(var n = 0; n < userMenu.length; n++) {

				                    if(useroperations[userMenu[n]]){
				                    	var obj=menusArry[userMenu[n]]
				                    	    obj.op=""
				                    	    obj.op=useroperations[userMenu[n]]
				                            userMenuArry[userMenu[n]]=obj
				                    
				                    }else{
				                    	userMenuArry[userMenu[n]]=menusArry[userMenu[n]]
				                    }

									
								}

								console.log(userMenuArry)*/
			},
			//判断用户是否登录
			isLogin: function() {

				/*var cacse = document.getElementById("lwxf_preload")

				if(!cacse) {

					window.location.href = "http://industry4.htjjsc.com/flogin#/"

				} else {

				}*/
			}

		},
		mounted: function() {

			this.usermenu()

			var _this = this

			var that = this

			//请求当前登录的用户消息

			var cfg = window.lwxfPreload;

			that.userObj = cfg.preload.user

			/*this.axios({
				method: 'get',
				url: '/api/f/users/info'

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data

				that.userObj.name = data.userName

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})*/

			//请求仓库
			/*this.axios({
				method: 'get',
				url: '/api/f/storages?pageSize=10000'

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data

				for(var i = 0; i < data.length; i++) {
					
					if(data[i].categoryType==5){
						data[i].NumName = '5-' + (i + 1)
					data[i].path = "finishedstock?pathdata=" + data[i].id
					}else{
						data[i].NumName = '5-' + (i + 1)
					data[i].path = "warehouselist?pathdata=" + data[i].id
					}
					
					
				}

				that.warehouseData = data

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})*/

			//请求菜单
			/*this.axios({
				method: 'get',
				url: '/api/f/menus'

			}).then(function(res) {

				if(Isjurisdiction.isright(res, that) == false) {
					return false
				}

				var data = res.data.data
				var dataArry = [];

				var childCache = {};

				for(var i = 0; i < data.length; i++) {

					if(data[i].parentId) {
						var pid = data[i].parentId
						if(!childCache[pid]) {
							var obj = []
							obj.push(data[i])
							childCache[pid] = obj
						} else {
							childCache[pid].push(data[i])
						}

					}
				}

				for(let n = 0; n < data.length; n++) {

					if(!data[n].parentId) {
						var id = data[n].id
						if(childCache[id]) {

							var obj = data[n]
							obj.childArry = childCache[id]
							dataArry.push(obj)
						} else {
							var obj = data[n]
							obj.childArry = []
							dataArry.push(obj)
						}

					}

				}

				for(let f = 0; f < dataArry.length; f++) {

					let item = dataArry[f]
					item.index = f + 1

					for(let q = 0; q < item.childArry.length; q++) {
						item.childArry[q].index = (f + 1) + "-" + q
					}

				}

			}).catch(function(err) {

				that.$Message.error('出错了，请稍后重试！');

			})*/

			var cfg = window.lwxfPreload;

			/*if(!cfg) {

				this.$Spin.show({
					render: (h) => {
						return h('div', '抱歉，你当前未登录')
					}
				});

				return false

			}
*/
			//读取顶部tab菜单cookie

			this.checkCookie()
			//判断是否登录
			this.isLogin()

		},

		created: function() {

		},

		watch: {
			'$route': function(to, from) {
				this.isLogin()
			}
		},

		beforeRouteEnter(to, from, next) {

			/*	console.log(to, from, next)*/
			next();

		}

		/*       /* console.log(to, from, next)*/

		/*if(from.name == null) {

				next(vm => {
					//延迟去掉缓冲页面
					vm.toptimeout()
				})
				

			} else {
				next(vm => {
					vm.tipshowclass = false
				})

			}
*/

	}
</script>