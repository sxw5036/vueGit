import Vue from 'vue'
import Router from 'vue-router'

import login from '@/page/login'

import lay from '@/page/lay'
import sharelay from '@/page/sharelay'

import home from '@/page/home'
import setting from '@/page/setting/index' //设置


import user from '@/page/user'
import changepassword from '@/page/changepassword'

import departmentlist from '@/page/department/departmentList'

import dealer from '@/page/dealer/dealer'
import dealercompanydetails from '@/page/dealer/dealercompanydetails'
import dealercompanynewly from '@/page/dealer/dealercompanynewly'
import dealercompanyredact from '@/page/dealer/dealercompanyredact'

import dealercompany from '@/page/dealer/dealercompany'

//产品管理
import productclass from '@/page/product/productclass'
import productNewly from '@/page/product/newly'
import productRedact from '@/page/product/redact'

import product from '@/page/product/product'
import productDetails from '@/page/product/productDetails'


//import productcolor from '@/page/product/productcolor'
//import productmaterial from '@/page/product/productmaterial'
//import productspec from '@/page/product/productspec'
//import productAbut from '@/page/product/productAbut'

//仓库管理
import warehouse from '@/page/warehouse/warehouse'
import warehouselist from '@/page/warehouse/warehouselist'
import warehouseoutin from '@/page/warehouse/warehouseoutin'
import finishedstock from '@/page/warehouse/finishedstock'
import finishedstockNewly from '@/page/warehouse/newly'


import finishedDetails from '@/page/warehouse/finishedDetails'


//配送管理
import distribution from '@/page/distribution/distribution'
import distributionplan from '@/page/distribution/distributionplan'
//供应商管理
import supplier from '@/page/supplier/supplier'
import supplierdetails from '@/page/supplier/details'
import supplierNew from '@/page/supplier/newly'
//供应商产品管理

import supplierprod from '@/page/supplier/supplierprod'

//员工管理
import employee from '@/page/employee/employee'

//财务管理

import financeorder from '@/page/finance/order'
import financeorderDetails from '@/page/finance/orderDetails'
import financeorderNewly from '@/page/finance/newly'
import financeorderRedact from '@/page/finance/redact'






//
//import financepurchase from '@/page/finance/purchase'
//import supplieraudit from '@/page/finance/supplieraudit'
//import dealerpayaudit from '@/page/finance/dealerpay'
//import aftersaleaudit from '@/page/finance/aftersale'
//import financedealer from '@/page/finance/dealeraudit'
//import financeoutsource from '@/page/finance/outsource'
//import financeDailyAccount from '@/page/finance/DailyAccount'
//import DailyAccountdetails from '@/page/finance/DailyAccountdetails'
//
//import newlydayaccout from '@/page/finance/newlydayaccout'
//import dealerfinance from '@/page/finance/dealerfinance'
//import dealerfinancerecord from '@/page/finance/dealerfinancerecord'
//设计管理

import designorder from '@/page/design/design'
import designorderNewly from '@/page/design/newly'
import designorderRedact from '@/page/design/redact'
import designDetails from '@/page/design/designDetails'


//import designorderEle from '@/page/design/designorderEle'
//import designordermanger from '@/page/design/designordermanger'
//客户管理

import client from '@/page/client/client'
import clientdetails from '@/page/client/details'
import clientnewly from '@/page/client/newly'
import clientRedact from '@/page/client/redact'

//采购
//import purchaselist from '@/page/purchase/purchaselist'
//import applypurchast from '@/page/purchase/applypurchast'

//生产
import production from '@/page/production/production'
import productionNewly from '@/page/production/newly'
import productionDetails from '@/page/production/productionDetails'
//
//
//import productionplan from '@/page/production/productionplan'
//import productionprogress from '@/page/production/productionprogress'

//售后

import aftersale from '@/page/aftersale/aftersale'
import aftersalemanage from '@/page/aftersale/aftersalemanage'
import aftersalemanageNewly from '@/page/aftersale/newly'
import aftersaleDetails from '@/page/aftersale/aftersaleDetails'


//订单

import orderlist from '@/page/order/orderlist'
import newlyOrder from '@/page/order/newlyOrder'
import redactOrder from '@/page/order/redactOrder'
import orderDetails from '@/page/order/orderDetails'
//import orderpayment from '@/page/order/orderpayment'
//import orderpaymentdetails from '@/page/order/orderpaymentdetails'
//import traceorder from '@/page/order/traceorder'
//import traceorderdetails from '@/page/order/traceorderdetails'


//外协

import outsource from '@/page/outsource/outsource'
import outsourcedetails from '@/page/outsource/outsourcedetails'
import outsourceNewly from '@/page/outsource/newly'

//菜单



//import menulist from '@/page/menu/menulist'

//角色

//import role from '@/page/role/rolelist'
//按钮
//import buttonmag from '@/page/role/buttonmag'

//权限

//import authorityrole from '@/page/role/authorityrole'

//案例列表
//import schememngcase from '@/page/schememng/case'
//import designstyle from '@/page/schememng/designstyle'
////
//import caseaudit from '@/page/schememng/caseaudit'
//import doors from '@/page/schememng/doors'

//内容模块

import contentClass from '@/page/content/contentClass'
import contentTrim from '@/page/content/contentTrim'
//

//活动管理
import activity from '@/page/activities/activity'
import participants from '@/page/activities/participants'

//内容管理

import articles from '@/page/study/articles'
import articlesNewly from '@/page/study/newly'
import articlesRedact from '@/page/study/redact'


import articlesDetails from '@/page/study/articlesDetails'



import articlesmanger from '@/page/study/articlesmanger'

//包装管理
import pack from '@/page/packaging/pack'
import packages from '@/page/packaging/package'

//发货管理
import delivers from '@/page/deliver/delivers'
import deliversNewly from '@/page/deliver/newly'

import deliversDetails from '@/page/deliver/deliversDetails'
import delivered from '@/page/deliver/delivered'

//字典管理

//import basecode from '@/page/basecode/basecode'

//升级管理
//import upgrade from '@/page/updatemanger/upgrade'

//企业管理
//import enterpriseList from '@/page/enterprise/enterpriseList'
//import newlyenterprise from '@/page/enterprise/newlyenterprise'

//组织管理
import organizationList from '@/page/organization/list'
import organizationDetails from '@/page/organization/details'
import organizationNewly from '@/page/organization/newlyEmployee'
import NewlyDepartment from '@/page/organization/newlyDepartment'



//app

import htmlcase from '@/page/app/case'
import contention from '@/page/app/contention'
import activition from '@/page/app/activition'
Vue.use(Router)

export default new Router({
	routes: [
		//总后台
		{
			path: '/',
			name: '/',
			component: lay,
			/* 	meta:{keepAlive:true}, */
			redirect: "home",
			children: [{
					path: '/home',
					name: 'home',
					component: home,
					meta: {
						title: "首页"
					}
				},
				{
					path: '/setting',
					name: 'setting',
					component: setting,
					meta: {
						title: "设置"
					}
				},
				

				{
					path: '/user',
					name: 'user',
					component: user,
					meta: {
						title: "用户信息"
					}
				},
				
				/*智慧版路由*/

				
				//1.供应商
				
				{
					path: '/supplier',
					name: 'supplier',
					component: supplier,
					meta: {
						title: "供应商管理"
					}
				},
				
				{
					path: '/supplier/details',
					name: 'supplierdetails',
					component: supplierdetails,
					meta: {
						title: "供应商详情"
					}
				},
				
				
				{
					path: '/supplier/new',
					name: 'supplierNew',
					component: supplierNew,
					meta: {
						title: "新建供应商"
					}
				},
				
			    //2.经销商	
			
				{
					path: '/dealercompany',
					name: 'dealercompany',
					component: dealercompany,
					meta: {
						title: "经销商公司管理"
					}
				},
				
				{
					path: '/dealer/dealercompanydetails',
					name: 'dealercompanydetails',
					component: dealercompanydetails,
					meta: {
						title: "经销商详情"
					}
				},
				
				{
					path: '/dealer/dealercompanynewly',
					name: 'dealercompanynewly',
					component: dealercompanynewly,
					meta: {
						title: "新建经销商"
					}
				},
				
				
				{
					path: '/dealer/dealercompanyredact',
					name: 'dealercompanyredact',
					component: dealercompanyredact,
					meta: {
						title: "编辑经销商"
					}
				},
				
				//3.客户管理
				{
					path: '/client',
					name: 'client',
					component: client,
					meta: {
						title: "客户管理"
					}
				},
				
				{
					path: '/client/details',
					name: 'clientdetails',
					component: clientdetails,
					meta: {
						title: "客户详情"
					}
				},
				
				{
					path: '/client/newly',
					name: 'clientnewly',
					component: clientnewly,
					meta: {
						title: "新建客户"
					}
				},
				
				{
					path: '/client/redact',
					name: 'clientRedact',
					component: clientRedact,
					meta: {
						title: "编辑客户"
					}
				},
				
				//4外协管理
				
				{
					path: '/outsource',
					name: 'outsource',
					component: outsource,
					meta: {
						title: "外协订单"
					}
				},
				
				{
					path: '/outsourcedetails',
					name: 'outsourcedetails',
					component: outsourcedetails,
					meta: {
						title: "外协详情"
					}
				},
				
				
				{
					path: '/outsource/newly',
					name: 'outsourceNewly',
					component: outsourceNewly,
					meta: {
						title: "新建外协"
					}
				},
				
				
				//5.设计管理
				{
					path: '/designorder',
					name: 'designorder',
					component: designorder,
					meta: {
						title: "设计任务管理"
					}
				},
				
				
				{
					path: '/designorder/newly',
					name: 'designorderNewly',
					component: designorderNewly,
					meta: {
						title: "新增设计任务"
					}
				},
				
				{
					path: '/designorder/redact',
					name: 'designorderRedact',
					component: designorderRedact,
					meta: {
						title: "编辑设计任务"
					}
				},
				
				//设计详情
				{
					path: '/design/details',
					name: 'designDetails',
					component: designDetails,
					meta: {
						title: "设计详情"
					}
				},

				
				
				
				//6.订单
				
				{
					path: '/orderlist',
					name: 'orderlist',
					component: orderlist,
					meta: {
						title: "订单管理"
					}
				},
				
				{
					path: '/order/new',
					name: 'newlyOrder',
					component: newlyOrder,
					meta: {
						title: "订单管理"
					}
				},
				
				
				{
					path: '/order/redact',
					name: 'redactOrder',
					component: redactOrder,
					meta: {
						title: "编辑订单"
					}
				},
				
				
				
				
				{
					path: '/order/details',
					name: 'orderDetails',
					component: orderDetails,
					meta: {
						title: "订单详情"
					}
				},
					
				
			//7.财务管理
			   {
					path: '/financeorder',
					name: 'financeorder',
					component: financeorder,
					meta: {
						title: "财务管理"  //财务管理一级菜单
					}
				},
				
				{
					path: '/financeorder/details',
					name: 'financeorderDetails',
					component: financeorderDetails,
					meta: {
						title: "财务详情" 
					}
				},
				
				{
					path: '/financeorder/newly',
					name: 'financeorderNewly',
					component: financeorderNewly,
					meta: {
						title: "新建收支" 
					}
				},
				
				{
					path: '/financeorder/redact',
					name: 'financeorderRedact',
					component: financeorderRedact,
					meta: {
						title: "财务编辑" 
					}
				},
				
				//8.生产管理
				
				{
					path: '/productionplan',
					name: 'productionplan',
					component: production,
					meta: {
						title: "生产管理"
					}
				},
				
				{
					path: '/productionNewly',
					name: 'productionNewly',
					component: productionNewly,
					meta: {
						title: "生产新建"
					}
				},
				
				
				
				{
					path: '/production/details',
					name: 'productionDetails',
					component: productionDetails,
					meta: {
						title: "生产详情"
					}
				},
				
				
				//9. 成品管理
				
				{
					path: '/finishedstock',
					name: 'finishedstock',
					component: finishedstock,
					meta: {
						title: "成品仓库管理"
					}
				},
				
				
				{
					path: '/finishedstock/newly',
					name: 'finishedstockNewly',
					component: finishedstockNewly,
					meta: {
						title: "新建包装"
					}
				},
				
				{
					path: '/finished/details',
					name: 'finishedDetails',
					component: finishedDetails,
					meta: {
						title: "成品详情"
					}
				},
				
				//10 发货管理
				
				{
					path: '/delivers',
					name: 'delivers',
					component: delivers,
					meta: {
						title: "发货管理"
					}
				},
				
				{
					path: '/delivers/newly',
					name: 'deliversNewly',
					component: deliversNewly,
					meta: {
						title: "新建发货"
					}
				},
				
				{
					path: '/delivers/details',
					name: 'deliversDetails',
					component: deliversDetails,
					meta: {
						title: "发货详情"
					}
				},
				
				
				//11. 售后管理
				
				{
					path: '/aftersalemanage',
					name: 'aftersalemanage',
					component: aftersalemanage,  
					meta: {
						title: "售后单管理"  //售后一级菜单
					}
				},
				
				{
					path: '/aftersalemanage/newly',
					name: 'aftersalemanageNewly',
					component: aftersalemanageNewly,  
					meta: {
						title: "售后单管理"  //售后一级菜单
					}
				},
				
				
				{
					path: '/aftersale/details',
					name: 'aftersaleDetails',
					component: aftersaleDetails,  
					meta: {
						title: "售后单详情"  //
					}
				},
				
				//12.产品管理
				
				{
					path: '/product',
					name: 'product',
					component: product,
					meta: {
						title: "产品信息"  //产品一级菜单
					}
				},
				
				
				{
					path: '/productNewly',
					name: 'productNewly',
					component: productNewly,
					meta: {
						title: "新建产品"  //产品一级菜单
					}
				},
				
				
				{
					path: '/product/redact',
					name: 'productRedact',
					component: productRedact,
					meta: {
						title: "编辑产品"  //产品一级菜单
					}
				},
				
				
				
				
				{
					path: '/product/details',
					name: 'productDetails',
					component: productDetails,
					meta: {
						title: "产品详情"  //产品一级菜单
					}
				},
				
				
				//13。 内容管理
				
				{
					path: '/study/articles',
					name: 'articles',
					component: articles,
					meta: {
						title: "内容管理"   //内容管理一级菜单
					}
				},
				
				{
					path: '/study/newly',
					name: 'articlesNewly',
					component: articlesNewly,
					meta: {
						title: "新建内容"   
					}
				},
				
				
				{
					path: '/study/redact',
					name: 'articlesRedact',
					component: articlesRedact,
					meta: {
						title: "编辑内容"   
					}
				},
				
				
				{
					path: '/study/articlesDetails',
					name: 'articlesDetails',
					component: articlesDetails,
					meta: {
						title: "内容详情"   
					}
				},
				
				
				//14组织管理
				
				
				{
					path: '/organization/list',  //组织管理一级
					name: 'organizationList',
					component: organizationList,
					meta: {
						title: "组织管理"
					},
				},
				
				{
					path: '/organization/newly',  //组织管理一级
					name: 'organizationNewly',
					component: organizationNewly,
					meta: {
						title: "新建员工"
					},
				},
				
				{
					path: '/organization/newlyDepartment',  //组织管理一级
					name: 'NewlyDepartment',
					component: NewlyDepartment,
					meta: {
						title: "新建部门"
					},
				},
				
				{
					path: '/organization/details',
					name: 'organizationDetails',
					component: organizationDetails,
					meta: {
						title: "组织详情"
					},
				},
				
				
				
				
				
					/*智慧版路由-end*/
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
//				//部门管理
//
//				{
//					path: '/departmentlist',
//					name: 'departmentlist',
//					component: departmentlist,
//					meta: {
//						title: "部门列表"
//					}
//				},
//
//				//经销商管理
//				{
//					path: '/dealer',
//					name: 'dealer',
//					component: dealer,
//					meta: {
//						title: "经销商管理列表"
//					}
//				},
//
//				{
//					path: '/dealercompany',
//					name: 'dealercompany',
//					component: dealercompany,
//					meta: {
//						title: "经销商公司管理"
//					}
//				},
//				
//				{
//					path: '/dealer/dealercompanydetails',
//					name: 'dealercompanydetails',
//					component: dealercompanydetails,
//					meta: {
//						title: "经销商详情"
//					}
//				},
//				
//				{
//					path: '/dealer/dealercompanynewly',
//					name: 'dealercompanynewly',
//					component: dealercompanynewly,
//					meta: {
//						title: "新建经销商"
//					}
//				},
//				
//				
//				{
//					path: '/dealer/dealercompanyredact',
//					name: 'dealercompanyredact',
//					component: dealercompanyredact,
//					meta: {
//						title: "编辑经销商"
//					}
//				},
//				
//				
//		
//				
//
///**/
//
//				{
//					path: '/changepassword',
//					name: 'changepassword',
//					component: changepassword,
//					meta: {
//						title: "修改密码"
//					}
//				},
//				//产品分类管理
//				{
//					path: '/productclass',
//					name: 'productclass',
//					component: productclass,
//					meta: {
//						title: "产品分类"
//					}
//				},
//				//产品规格管理
//
//				{
//					path: '/productspec',
//					name: 'productspec',
//					component: productspec,
//					meta: {
//						title: "产品规格"
//					}
//				},
//
//				
//				
//				
//
//
//				{
//					path: '/productAbut',
//					name: 'productAbut',
//					component: productAbut,
//					meta: {
//						title: "产品属性"
//					}
//				},
//
//				//产品颜色
//				{
//					path: '/productcolor',
//					name: 'productcolor',
//					component: productcolor,
//					meta: {
//						title: "产品颜色"
//					}
//				},
//				//产品材质
//				{
//					path: '/productmaterial',
//					name: 'productmaterial',
//					component: productmaterial,
//					meta: {
//						title: "产品材质"
//					}
//				},
//				//员工管理
//				{
//					path: '/employee',
//					name: 'employee',
//					component: employee,
//					meta: {
//						title: "员工管理"
//					}
//				},
//
//				{
//					path: '/warehouse',
//					name: 'warehouse',
//					component: warehouse,
//					meta: {
//						title: "仓库管理"
//					}
//				},
//
//				{
//					path: '/warehouselist',
//					name: 'warehouselist',
//					component: warehouselist,
//					meta: {
//						title: "仓库库存管理列表"
//					}
//				},
//
//				{
//					path: '/warehouseoutin',
//					name: 'warehouseoutin',
//					component: warehouseoutin,
//					meta: {
//						title: "出入库存管理列表"
//					}
//				},
//
//				
//				
//				
//
//				{
//					path: '/distribution',
//					name: 'distribution',
//					component: distribution,
//					meta: {
//						title: "配送管理"
//					}
//				},
//
//				{
//					path: '/distributionplan',
//					name: 'distributionplan',
//					component: distributionplan,
//					meta: {
//						title: "配送计划管理"
//					}
//				},
//
//				//supplier
//
//				
//							
//
//				{
//					path: '/supplierprod',
//					name: 'supplierprod',
//					component: supplierprod,
//					meta: {
//						title: "供应商管理"
//					}
//				},
//
//				//
//
//				// 财务管理
//				
//				
//
//				{
//					path: '/financepurchase',
//					name: 'financepurchase',
//					component: financepurchase,
//					meta: {
//						title: "采购审批"
//					}
//				},
//
//				{
//					path: '/supplieraudit',
//					name: 'supplieraudit',
//					component: supplieraudit,
//					meta: {
//						title: "供应商审批"
//					}
//				},
//
//				{
//					path: '/dealerpayaudit',
//					name: 'dealerpayaudit',
//					component: dealerpayaudit,
//					meta: {
//						title: "经销商支付审批"
//					}
//				},
//
//				{
//					path: '/aftersaleaudit',
//					name: 'aftersaleaudit',
//					component: aftersaleaudit,
//					meta: {
//						title: "售后审批"
//					}
//				},
//
//				{
//					path: '/financedealer',
//					name: 'financedealer',
//					component: financedealer,
//					meta: {
//						title: "经销商开户审批"
//					}
//				},
//				{
//					path: '/financeoutsource',
//					name: 'financeoutsource',
//					component: financeoutsource,
//					meta: {
//						title: "外协审核"
//					}
//				},
//
//				{
//					path: '/financeDailyAccount',
//					name: 'financeDailyAccount',
//					component: financeDailyAccount,
//					meta: {
//						title: "日常账管理"
//					}
//				},
//				
//				{
//					path: '/newlydayaccout',
//					name: 'newlydayaccout',
//					component: newlydayaccout,
//					meta: {
//						title: "新建日常账"
//					}
//				},
//				
//				{
//					path: '/DailyAccountdetails',
//					name: 'DailyAccountdetails',
//					component: DailyAccountdetails,
//					meta: {
//						title: "日常账详情"
//					}
//				},
//				
//				
//				
//
//				{
//					path: '/dealerfinance',
//					name: 'dealerfinance',
//					component: dealerfinance,
//					meta: {
//						title: "经销商财务管理"
//					}
//				},
//
//				{
//					path: '/dealerfinancerecord',
//					name: 'dealerfinancerecord',
//					component: dealerfinancerecord,
//					meta: {
//						title: "经销商财务记录"
//					}
//				},
//
//				//
//
//				{
//					path: '/applypurchast',
//					name: 'applypurchast',
//					component: applypurchast,
//					meta: {
//						title: "请购列表"
//					}
//				},
//				{
//					path: '/purchaselist',
//					name: 'purchaselist',
//					component: purchaselist,
//					meta: {
//						title: "采购列表"
//					}
//				},
//
//				//
//
//				
//
//
//				//
//
//				{
//					path: '/designorderEle',
//					name: 'designorderEle',
//					component: designorderEle,
//					meta: {
//						title: "订单设计费估价"
//					}
//				},
//
//				{
//					path: '/designordermanger',
//					name: 'designordermanger',
//					component: designordermanger,
//					meta: {
//						title: "设计方案管理"
//					}
//				},
//
//				//客户管理
//				{
//					path: '/client',
//					name: 'client',
//					component: client,
//					meta: {
//						title: "客户管理"
//					}
//				},
//				
//				{
//					path: '/client/details',
//					name: 'clientdetails',
//					component: clientdetails,
//					meta: {
//						title: "客户详情"
//					}
//				},
//				
//				{
//					path: '/client/newly',
//					name: 'clientnewly',
//					component: clientnewly,
//					meta: {
//						title: "新建客户"
//					}
//				},
//				
//							
//
//				//生产管理
//
//				
//				
//
//				{
//					path: '/productionprogress',
//					name: 'productionprogress',
//					component: productionprogress,
//					meta: {
//						title: "生产过程"
//					}
//				},
//				//售后
//
//				
//				
//				
//
//				{
//					path: '/aftersale',
//					name: 'aftersale',
//					component: aftersale,
//					meta: {
//						title: "售后申请管理"
//					}
//				},
//
//				//订单
//						
//
//				{
//					path: '/orderpayment',
//					name: 'orderpayment',
//					component: orderpayment,
//					meta: {
//						title: "订单货款审价"
//					}
//				},
//				
//				{
//					path: '/orderpaymentdetails',
//					name: 'orderpaymentdetails',
//					component: orderpaymentdetails,
//					meta: {
//						title: "订单货款审价详情"
//					}
//				},
//				
//				
//
//				{
//					path: '/traceorder',
//					name: 'traceorder',
//					component: traceorder,
//					meta: {
//						title: "跟单管理"
//					}
//				},
//
//				
//				
//				
//				
//				
//				
//				
//				{
//					path: '/traceorderdetails',
//					name: 'traceorderdetails',
//					component: traceorderdetails,
//					meta: {
//						title: "跟单详情"
//					}
//				},
//
//
//
//				//菜单
//
//				{
//					path: '/menulist',
//					name: 'menulist',
//					component: menulist,
//					meta: {
//						title: "菜单管理"
//					}
//				},
//
//				//角色
//
//				{
//					path: '/role',
//					name: 'role',
//					component: role,
//					meta: {
//						title: "角色管理"
//					}
//				},
//
//				//权限
//
//				{
//					path: '/buttonmag',
//					name: 'buttonmag',
//					component: buttonmag,
//					meta: {
//						title: "权限管理"
//					}
//				},
//
//				{
//					path: '/authorityrole',
//					name: 'authorityrole',
//					component: authorityrole,
//					meta: {
//						title: "权限管理"
//					}
//				},
//
//				//案例列表
//				{
//					path: '/schememng/case',
//					name: 'schememng/case',
//					component: schememngcase,
//					meta: {
//						title: "案例列表"
//					}
//				},
//
//				//案例风格
//
//				{
//					path: '/schememng/designstyle',
//					name: 'schememng/designstyle',
//					component: designstyle,
//					meta: {
//						title: "案例风格"
//					}
//				},
//
//				{
//					path: '/schememng/caseaudit',
//					name: 'schememng/caseaudit',
//					component: caseaudit,
//					meta: {
//						title: "案例审核"
//					}
//				},
//
//				{
//					path: '/schememng/caseaudit',
//					name: 'schememng/caseaudit',
//					component: caseaudit,
//					meta: {
//						title: "案例审核"
//					}
//				},
//
//				{
//					path: '/schememng/doors',
//					name: 'schememng/doors',
//					component: doors,
//					meta: {
//						title: "案例户型"
//					}
//				},
//
//				{
//					path: '/content/contentClass',
//					name: 'content/contentClass',
//					component: contentClass,
//					meta: {
//						title: "内容分类"
//					}
//				},
//
//				{
//					path: '/content',
//					name: 'content',
//					component: contentTrim,
//					meta: {
//						title: "内容管理"
//					}
//				},
//
//				//  活动管理
//
//				{
//					path: '/activity',
//					name: 'activity',
//					component: activity,
//					meta: {
//						title: "活动列表"
//					}
//				},
//
//				{
//					path: '/participants',
//					name: 'participants',
//					component: participants,
//					meta: {
//						title: "活动参与人详情页"
//					}
//				},
//
//				//内容
//
//				
//
//				{
//					path: '/study/articlesmanger',
//					name: 'articlesmanger',
//					component: articlesmanger,
//					meta: {
//						title: "内容类型管理"
//					}
//				},
//
//				//包装
//				{
//					path: '/packaging/pack',
//					name: 'packaging/pack',
//					component: pack,
//					meta: {
//						title: "打包管理"
//					}
//				},
//
//				{
//					path: '/packaging/package',
//					name: 'packaging/package',
//					component: packages,
//					meta: {
//						title: "包裹管理"
//					}
//				},
//
//				//发货
//
//				
//				{
//					path: '/delivered',
//					name: 'delivered',
//					component: delivered,
//					meta: {
//						title: "发货单管理"
//					}
//				},
//
//				//字典管理
//
//				{
//					path: '/basecode',
//					name: 'basecode',
//					component: basecode,
//					meta: {
//						title: "字典管理"
//					}
//				},
//
//				//升级管理
//
//				{
//					path: '/upgrade',
//					name: 'upgrade',
//					component: upgrade,
//					meta: {
//						title: "升级管理"
//					}
//				},
//
//				//企业管理
//
//				{
//					path: '/enterprise/list',
//					name: 'enterpriseList',
//					component: enterpriseList,
//					meta: {
//						title: "企业管理"
//					},
//				},
//
//				{
//					path: '/enterprise/append',
//					name: 'newlyenterprise',
//					component: newlyenterprise,
//					meta: {
//						title: "新建企业"
//					},
//				},
//				
//				
				

			],

			//

	},

		{
			path: '/login',
			name: 'login',
			component: login,
			meta: {
				title: "登录"
			}
		},

		//app
		{
			path: '/htmlcase',
			name: 'htmlcase',
			component: htmlcase,
			meta: {
				title: "案例详情"
			}
		},

		{
			path: '/contention',
			name: 'contention',
			component: contention,
			meta: {
				title: "内容详情"
			}
		},

		{
			path: '/activition',
			name: 'activition',
			component: activition,
			meta: {
				title: "活动详情"
			}
		},

	]
})