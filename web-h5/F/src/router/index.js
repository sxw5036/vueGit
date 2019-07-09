import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//import menu from '@/components/menu'
//
//import editor from '@/components/Editor' //富文本
//
import echarts from '@/components/ECharts' //百度ECharts
//
//import iview from '@/components/iview'
//
//import tinymce from '@/components/tinymce'
//
//
//
//import dm from '@/components/3dm'

//经销商查询
import Dealersearch from '@/components/Dealersearch'


//首页
import index from '@/page/index'

//财务
import financelist from '@/page/finance/list'
import financelistdetails from '@/page/finance/listdetails'
import newfinance from '@/page/finance/newfinance'


//报表
import statementlist from '@/page/statement/index'
import shengchan from '@/page/statement/shengchan'
import shouhou from '@/page/statement/shouhou'
import dealer_report from '@/page/statement/dealer_report'
import design_report from '@/page/statement/design_report'
import finance from '@/page/statement/finance'
import orderreport from '@/page/statement/orderreport'
import Warehousing_report from '@/page/statement/Warehousing_report'
import send from '@/page/statement/send'

//消息
import message from '@/page/message/index'
import linkman from '@/page/message/linkman'
import chat from '@/page/message/chat'

//登录
import login from '@/page/login/login'
import weixinauthorize from '@/page/login/weixinauthorize'
import securitycode from '@/page/login/securitycode'
import forget from '@/page/login/forget'
import forgetcode from '@/page/login/forgetcode'
import changepassword from '@/page/login/changepassword'
//用户
import user from '@/page/user'



Vue.use(Router)

Vue.use(Router)


//帅

//客户
import customDep from '@/page/customer/customDep'
import customList from '@/page/customer/customList'

//售后
import aftersale from '@/page/aftersales/aftersale'
import afterdepmore from '@/page/aftersales/afterdepmore'

//经销商
import signedDealers from '@/page/dealers/signedDealers'
import intentionDealers from '@/page/dealers/intentionDealers'
import newDealers from '@/page/dealers/newDealers'
import dealerdep from '@/page/dealers/dealerdep'
//我的
import myplace from '@/page/myplace/myplace'
import mycenter from '@/page/myplace/mycenter'
import myabout from '@/page/myplace/myabout'
import recount from '@/page/myplace/recount'
import myhelp from '@/page/myplace/myhelp'
import repassword from '@/page/myplace/repassword'
import security from '@/page/myplace/security'
import helpDetails from '@/page/myplace/helpDetails'

//订单

import orderlist from '@/page/orders/orderlist'
import orderdep from '@/page/orders/orderdep'
//产品
import bProductList from '@/page/bproduct/bProductList'
import bProductDetails from '@/page/bproduct/bProductDetails'

import supplierList from '@/page/supplier/supplierList'
import supplierDetails from '@/page/supplier/supplierDetails'
import newSupplierSigning from  '@/page/supplier/newSupplierSigning'

export default new Router({
  routes: [
  
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
						title: "掌上管家"
					}
    },
    {
		  path: '/supplier/supplierList',
		  name: 'supplierList',
		  component: supplierList,
		    meta: {
		  						title: "供应商列表"
		  					}
		},
		
		{
		  path: '/supplier/supplierDetails',
		  name: 'supplierDetails',
		  component: supplierDetails,
		    meta: {
		  						title: "供应商详情"
		  					}
		},
		
		{
		  path: '/supplier/newSupperlierSigning',
		  name: 'newSupplierSigning',
		  component: newSupplierSigning,
		  meta: {
			  		title: "新建供应商签约"
			  	}
		  
		},
		{
     		  path: '/bproduct/bProductList',
     		  name: 'bProductList',
     		  component: bProductList,
     		   meta: {
     		  						title: "产品列表"
     		  					}
     		},
     		{
     		  path: '/bprodct/bProductDetails',
     		  name: 'bProductDetails',
     		  component: bProductDetails,
     		   meta: {
     		  						title: "产品详情"
     		  					}
     		},
     {
      path: '/finance/list',
      name: 'financelist',
      component: financelist,
      meta: {
						title: "财务管理"
					}
    },
     
     {
      path: '/finance/newfinance',
      name: 'newfinance',
      component: newfinance,
      meta: {
						title: "新建收支详情"
					}
    },
    
    
    {
      path: '/finance/listdetails',
      name: 'financelistdetails',
      component: financelistdetails,
      meta: {
						title: "收支详情"
					}
    },
     
 
  {
      path: '/statement/list',
      name: 'statementlist',
      component: statementlist,
      meta: {
      title: "报表"
     }
    },
	 {
	  path: '/orderreport',
	  name: 'orderreport',
	  component: orderreport,
	  meta: {
						title: "订单报表"
					}
	},
	 {
	  path: '/finance',
	  name: 'finance',
	  component: finance,
	  meta: {
						title: "财务报表"
					}
	},
	 {
	  path: '/dealer_report',
	  name: 'dealer_report',
	  component: dealer_report,
	  meta: {
						title: "经销商报表"
					}
	},
	{
	  path: '/Warehousing_report',
	  name: 'Warehousing_report',
	  component: Warehousing_report,
	  meta: {
						title: "入库报表"
					}
	},
		{
	  path: '/design_report',
	  name: 'design_report',
	  component: design_report,
	  meta: {
						title: "入库报表"
					}
	},
	
	{
	  path: '/statement/send',
	  name: 'send',
	  component: send,
	  meta: {
						title: "发货"
					}
	},
     {
	  path: '/statement/shouhou',
	  name: 'shouhou',
	  component: shouhou,
	  meta: {
						title: "售后"
					}
	},{
	  path: '/statement/shengchan',
	  name: 'shengchan',
	  component: shengchan,
	  meta: {
						title: "发货"
					}
	},

     
     {
      path: '/message/index',
      name: 'message',
      component: message,
      meta: {
						title: "消息列表"
					}
    },
    
    
     {
      path: '/message/linkman',
      name: 'linkman',
      component: linkman,
      meta: {
						title: "联系人"
					}
    },
    
    
    {
      path: '/message/chat',
      name: 'chat',
      component: chat,
      meta: {
						title: "聊天窗口"
					}
    },
     
     
     
     
     
     {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
						title: "登录"
					}
    },
    
    {
      path: '/weixinauthorize',
      name: 'weixinauthorize',
      component: weixinauthorize,
      meta: {
						title: "微信授权登录"
					}
    },
    
    
    {
      path: '/securitycode',
      name: 'securitycode',
      component: securitycode,
      meta: {
						title: "验证码登录"
					}
    },
     {
      path: '/forget',
      name: 'forget',
      component: forget,
      meta: {
						title: "忘记密码"
					}
    },
    
    
    {
      path: '/forgetcode',
      name: 'forgetcode',
      component: forgetcode,
      meta: {
						title: "获取验证码"
					}
    },
    
    
     {
      path: '/changepassword',
      name: 'changepassword',
      component: changepassword,
      meta: {
						title: "获取验证码"
					}
    },
     
	 {
	   path: '/customDep',
	   name: 'customDep',
	   component: customDep,
	  meta: {
	 			title: "客户详情"
	 		}
	 },
	 {
	   path: '/customList',
	   name: 'customList',
	   component: customList,
		  meta: {
		 			title: "客户"
		 		}
	 },
	  {
	   path: '/aftersale',
	   name: 'aftersale',
	   component: aftersale,
		  meta: {
		 			title: "售后"
		 		}
	 },
	
	 	{
	   path: '/afterdepmore',
	   name: 'afterdepmore',
	   component: afterdepmore,
		  meta: {
		 			title: "售后详情"
		 		}
	 },
	 	{
	   path: '/signedDealers',
	   name: 'signedDealers',
	   component: signedDealers,
		 meta: {
		 			title: "签约经销商"
		 		}
	 },
	 {
	   path: '/intentionDealers',
	   name: 'intentionDealers',
	   component: intentionDealers,
		 meta: {
		 			title: "意向经销商"
		 		}
	 },
	 {
	   path: '/newDealers',
	   name: 'newDealers',
	   component: newDealers,
		 meta: {
		 			title: "新建经销商"
		 		}
	 },
	 	{
	   path: '/dealerdep',
	   name: 'dealerdep',
	   component: dealerdep,
		 meta: {
		 			title: "经销商详情"
		 		}
	 },
	 	
	 {
	   path: '/myplace',
	   name: 'myplace',
	   component: myplace,
		 meta: {
		 			title: "我的"
		 		}
	 },
	 {
	   path: '/mycenter',
	   name: 'mycenter',
	   component: mycenter,
		 meta: {
		 			title: "我的中心"
		 		}
	 },
	 	{
	   path: '/myabout',
	   name: 'myabout',
	   component: myabout,
		 meta: {
		 			title: "关于"
		 		}
	 },
	 	{
	   path: '/recount',
	   name: 'recount',
	   component: recount,
		 meta: {
		 			title: "绑定手机号"
		 		}
	 },
	 	{
	   path: '/myhelp',
	   name: 'myhelp',
	   component: myhelp,
		 meta: {
		 			title: "帮助中心"
		 		}
	 },
	 {
	   path: '/repassword',
	   name: 'repassword',
	   component: repassword
	 },
	 	{
	   path: '/security',
	   name: 'security',
	   component: security,
		 meta: {
		 			title: "安全"
		 		}
	 },
	 {
	   path: '/helpDetails',
	   name: 'helpDetails',
	   component: helpDetails,
		 meta: {
		 			title: "帮助"
		 		}
	 },
	 
	 	{
	   path: '/orderlist',
	   name: 'orderlist',
	   component: orderlist,
		 meta: {
		 			title: "订单列表"
		 		}
	 },
	 {
	   path: '/orderdep',
	   name: 'orderdep',
	   component: orderdep,
		 meta: {
		 			title: "订单详情"
		 		}
	 },
	
     
     //帅
     
     {
    path: '/customDep',
    name: 'customDep',
    component: customDep,
   meta: {
     title: "客户详情"
    }
},
{
    path: '/customList',
    name: 'customList',
    component: customList,
    meta: {
      title: "客户"
     }
},
   {
    path: '/aftersale',
    name: 'aftersale',
    component: aftersale,
    meta: {
      title: "售后"
     }
},
   
   {
    path: '/afterdepmore',
    name: 'afterdepmore',
    component: afterdepmore,
    meta: {
      title: "售后详情"
     }
},
   {
    path: '/signedDealers',
    name: 'signedDealers',
    component: signedDealers,
   meta: {
      title: "签约经销商"
     }
},
{
    path: '/intentionDealers',
    name: 'intentionDealers',
    component: intentionDealers,
   meta: {
      title: "意向经销商"
     }
},
{
    path: '/newDealers',
    name: 'newDealers',
    component: newDealers,
   meta: {
      title: "新建经销商"
     }
},
   {
    path: '/dealerdep',
    name: 'dealerdep',
    component: dealerdep,
   meta: {
      title: "经销商详情"
     }
},
   
{
    path: '/myplace',
    name: 'myplace',
    component: myplace,
   meta: {
      title: "我的"
     }
},
{
    path: '/mycenter',
    name: 'mycenter',
    component: mycenter,
   meta: {
      title: "我的中心"
     }
},
   {
    path: '/myabout',
    name: 'myabout',
    component: myabout,
   meta: {
      title: "关于"
     }
},
   {
    path: '/recount',
    name: 'recount',
    component: recount,
   meta: {
      title: "绑定手机号"
     }
},
   {
    path: '/myhelp',
    name: 'myhelp',
    component: myhelp,
   meta: {
      title: "帮助中心"
     }
},
{
    path: '/repassword',
    name: 'repassword',
    component: repassword
},
   {
    path: '/security',
    name: 'security',
    component: security,
   meta: {
      title: "安全"
     }
},
{
    path: '/helpDetails',
    name: 'helpDetails',
    component: helpDetails,
   meta: {
      title: "帮助"
     }
},

   {
    path: '/orderlist',
    name: 'orderlist',
    component: orderlist,
   meta: {
      title: "订单列表"
     }
},
     
   
   
{
    path: '/orderdep',
    name: 'orderdep',
    component: orderdep,
   meta: {
      title: "订单详情"
     }
},
     
     
     
     

      {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
						title: "我的"
					}
    },
  ]
})