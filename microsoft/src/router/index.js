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

/*------------------------------------------------------------F端开始*/
//经销商查询
import FDealersearch from '@/components/Dealersearch'

//首页
import Findex from '@/page/F/page/index'
//财务
import Ffinancelist from '@/page/F/page/finance/list'
import Ffinancelistdetails from '@/page/F/page/finance/listdetails'
import Fnewfinance from '@/page/F/page/finance/newfinance'

//报表
import Fstatementlist from '@/page/F/page/statement/index'
import Fshengchan from '@/page/F/page/statement/shengchan'
import Fshouhou from '@/page/F/page/statement/shouhou'
import Fdealer_report from '@/page/F/page/statement/dealer_report'
import Fdesign_report from '@/page/F/page/statement/design_report'
import Ffinance from '@/page/F/page/statement/finance'
import Forderreport from '@/page/F/page/statement/orderreport'
import FWarehousing_report from '@/page/F/page/statement/Warehousing_report'
import Fsend from '@/page/F/page/statement/send'

//消息
import Fmessage from '@/page/F/page/message/index'
import Flinkman from '@/page/F/page/message/linkman'
import Fchat from '@/page/F/page/message/chat'
import FchatBoard from '@/page/F/page/message/chatBoard'


//登录
import login from '@/page/login/login'
import weixinauthorize from '@/page/login/weixinauthorize'
import securitycode from '@/page/login/securitycode'
import forget from '@/page/login/forget'
import forgetcode from '@/page/login/forgetcode'
import changepassword from '@/page/login/changepassword'
//用户
import user from '@/page/F/page/user'

Vue.use(Router)

Vue.use(Router)

//帅

//客户
import FcustomDep from '@/page/F/page/customer/customDep'
import FcustomList from '@/page/F/page/customer/customList'

//售后
import Faftersale from '@/page/F/page/aftersales/aftersale'
import Fafterdepmore from '@/page/F/page/aftersales/afterdepmore'

//经销商
import FsignedDealers from '@/page/F/page/dealers/signedDealers'
import FintentionDealers from '@/page/F/page/dealers/intentionDealers'
import FnewDealers from '@/page/F/page/dealers/newDealers'
import Fdealerdep from '@/page/F/page/dealers/dealerdep'
//我的
import Fmyplace from '@/page/F/page/myplace/myplace'
import Fmycenter from '@/page/F/page/myplace/mycenter'
import Fmyabout from '@/page/F/page/myplace/myabout'
import Frecount from '@/page/F/page/myplace/recount'
import Fmyhelp from '@/page/F/page/myplace/myhelp'
import Frepassword from '@/page/F/page/myplace/repassword'
import Fsecurity from '@/page/F/page/myplace/security'
import FhelpDetails from '@/page/F/page/myplace/helpDetails'
import Fchanges from '@/page/F/page/myplace/changes'
import Fsexchanges from '@/page/F/page/myplace/sexchanges'
import Feducation from '@/page/F/page/myplace/education'
import Fbirthday from '@/page/F/page/myplace/birthday'

//订单

import Forderlist from '@/page/F/page/orders/orderlist'
import Forderdep from '@/page/F/page/orders/orderdep'
//产品
import FbProductList from '@/page/F/page/bproduct/bProductList'
import FbProductDetails from '@/page/F/page/bproduct/bProductDetails'

import FsupplierList from '@/page/F/page/supplier/supplierList'
import FsupplierDetails from '@/page/F/page/supplier/supplierDetails'
import FnewSupplierSigning from '@/page/F/page/supplier/newSupplierSigning'
/*------------------------------------------------------------F端end*/

/*------------------------------------------------------------B端开始*/

import Bindex from '@/page/B/page/index'

//财务
import Bfinancelist from '@/page/B/page/finance/list'
import Bfinancelistdetails from '@/page/B/page/finance/listdetails'
import Bnewfinance from '@/page/B/page/finance/newfinance'

//报表
import Bstatementlist from '@/page/B/page/statement/index'
import Bshouhou from '@/page/B/page/statement/Bshouhou'
import Bdingdan from '@/page/B/page/statement/Bdingdan'

//消息
import Bmessage from '@/page/B/page/message/index' 	
import Blinkman from '@/page/B/page/message/linkman'
import Bmessages1 from '@/page/B/page/message/messages'
import Bpublicnotice from '@/page/B/page/message/publicnotice'

//订单

import Borderlist from '@/page/B/page/order/list'
import Borderdetails from '@/page/B/page/order/details'

//产品
import BbProductList from '@/page/B/page/bproduct/bProductList'
import BbProductDetails from '@/page/B/page/bproduct/bProductDetails'

//我的
import Bbmy from '@/page/B/page/bmy/bmy'
import Bmyabout from '@/page/B/page/bmy/myabout'
import Bmycenter from '@/page/B/page/bmy/mycenter'
import Bmyhelp from '@/page/B/page/bmy/myhelp'
import Brecount from '@/page/B/page/bmy/recount'
import Brepassword from '@/page/B/page/bmy/repassword'
import Bsecurity from '@/page/B/page/bmy/security'
import BhelpDetails from '@/page/B/page/bmy/helpDetails'
import Bchanges from '@/page/B/page/bmy/Bchanges'
import Bsexchanges from '@/page/B/page/bmy/Bsexchanges'
import Beducation from '@/page/B/page/bmy/Beducation'
import Bbirthday from '@/page/B/page/bmy/Bbirthday'

//客户列表 
import BbClientList from '@/page/B/page/bclient/bClientList'
import BbNewClient from '@/page/B/page/bclient/bNewClient'
import BbClientDetails from '@/page/B/page/bclient/bClientDetails'

/*------------------------------------------------------------B端end*/

export default new Router({
	routes: [

		//登录模块
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
			path: 'securitycode',
			name: 'securitycode',
			component: securitycode,
			meta: {
				title: "验证码登录"
			}
		},
		{
			path: 'forget',
			name: 'forget',
			component: forget,
			meta: {
				title: "忘记密码"
			}
		},

		{
			path: 'forgetcode',
			name: 'forgetcode',
			component: forgetcode,
			meta: {
				title: "获取验证码"
			}
		},

		{
			path: 'changepassword',
			name: 'changepassword',
			component: changepassword,
			meta: {
				title: "获取验证码"
			}
		},

		/*------------------------------------------------------------F端开始*/

		{
			path: '/F',
			name: 'Findex',
			component: Findex,
			meta: {
				title: "掌上管家"
			}
		},
		{
			path: '/F/supplier/supplierList',
			name: 'FsupplierList',
			component: FsupplierList,
			meta: {
				title: "供应商列表"
			}
		},

		{
			path: '/F/supplier/supplierDetails',
			name: 'FsupplierDetails',
			component: FsupplierDetails,
			meta: {
				title: "供应商详情"
			}
		},

		{
			path: '/F/supplier/newSupperlierSigning',
			name: 'FnewSupplierSigning',
			component: FnewSupplierSigning,
			meta: {
				title: "新建供应商签约"
			}

		},
		{
			path: '/F/bproduct/bProductList',
			name: 'FbProductList',
			component: FbProductList,
			meta: {
				title: "产品列表"
			}
		},
		{
			path: '/F/bprodct/bProductDetails',
			name: 'FbProductDetails',
			component: FbProductDetails,
			meta: {
				title: "产品详情"
			}
		},
		{
			path: '/F/finance/list',
			name: 'Ffinancelist',
			component: Ffinancelist,
			meta: {
				title: "财务管理"
			}
		},

		{
			path: '/F/finance/newfinance',
			name: 'Fnewfinance',
			component: Fnewfinance,
			meta: {
				title: "新建收支详情"
			}
		},

		{
			path: '/F/finance/listdetails',
			name: 'Ffinancelistdetails',
			component: Ffinancelistdetails,
			meta: {
				title: "收支详情"
			}
		},

		{
			path: '/F/statement/list',
			name: 'Fstatementlist',
			component: Fstatementlist,
			meta: {
				title: "报表"
			}
		},
		{
			path: '/F/orderreport',
			name: 'Forderreport',
			component: Forderreport,
			meta: {
				title: "订单报表"
			}
		},
		{
			path: '/F/finance',
			name: 'Ffinance',
			component: Ffinance,
			meta: {
				title: "财务报表"
			}
		},
		{
			path: '/F/dealer_report',
			name: 'Fdealer_report',
			component: Fdealer_report,
			meta: {
				title: "经销商报表"
			}
		},
		{
			path: '/F/Warehousing_report',
			name: 'FWarehousing_report',
			component: FWarehousing_report,
			meta: {
				title: "入库报表"
			}
		},
		{
			path: '/F/design_report',
			name: 'Fdesign_report',
			component: Fdesign_report,
			meta: {
				title: "入库报表"
			}
		},

		{
			path: '/F/statement/send',
			name: 'Fsend',
			component: Fsend,
			meta: {
				title: "发货"
			}
		},
		{
			path: '/F/statement/shouhou',
			name: 'Fshouhou',
			component: Fshouhou,
			meta: {
				title: "售后"
			}
		}, {
			path: '/F/statement/shengchan',
			name: 'Fshengchan',
			component: Fshengchan,
			meta: {
				title: "发货"
			}
		},

		{
			path: '/F/message/index',
			name: 'Fmessage',
			component: Fmessage,
			meta: {
				title: "消息列表"
			}
		},

		{
			path: '/F/message/linkman',
			name: 'Flinkman',
			component: Flinkman,
			meta: {
				title: "联系人"
			}
		},

		{
			path: '/F/message/chat',
			name: 'Fchat',
			component: Fchat,
			meta: {
				title: "聊天窗口"
			}
		},
		{
			path: '/F/message/chatBoard',
			name: 'FchatBoard',
			component: FchatBoard,
			meta: {
				title: "聊天窗口"
			}
		},

		{
			path: '/F/customDep',
			name: 'FcustomDep',
			component: FcustomDep,
			meta: {
				title: "客户详情"
			}
		},
		{
			path: '/F/customList',
			name: 'FcustomList',
			component: FcustomList,
			meta: {
				title: "客户"
			}
		},
		{
			path: '/F/aftersale',
			name: 'Faftersale',
			component: Faftersale,
			meta: {
				title: "售后"
			}
		},

		{
			path: '/F/afterdepmore',
			name: 'Fafterdepmore',
			component: Fafterdepmore,
			meta: {
				title: "售后详情"
			}
		},
		{
			path: '/F/signedDealers',
			name: 'FsignedDealers',
			component: FsignedDealers,
			meta: {
				title: "签约经销商"
			}
		},
		{
			path: '/F/intentionDealers',
			name: 'FintentionDealers',
			component: FintentionDealers,
			meta: {
				title: "意向经销商"
			}
		},
		{
			path: '/F/newDealers',
			name: 'FnewDealers',
			component: FnewDealers,
			meta: {
				title: "新建经销商"
			}
		},
		{
			path: '/F/dealerdep',
			name: 'Fdealerdep',
			component: Fdealerdep,
			meta: {
				title: "经销商详情"
			}
		},

		{
			path: '/F/myplace',
			name: 'Fmyplace',
			component: Fmyplace,
			meta: {
				title: "我的"
			}
		},
		{
			path: '/F/mycenter',
			name: 'Fmycenter',
			component: Fmycenter,
			meta: {
				title: "我的中心"
			}
		},
		{
			path: '/F/myabout',
			name: 'Fmyabout',
			component: Fmyabout,
			meta: {
				title: "关于"
			}
		},
		{
			path: '/F/recount',
			name: 'Frecount',
			component: Frecount,
			meta: {
				title: "绑定手机号"
			}
		},
		{
			path: '/F/myhelp',
			name: 'Fmyhelp',
			component: Fmyhelp,
			meta: {
				title: "帮助中心"
			}
		},
		{
			path: '/F/repassword',
			name: 'Frepassword',
			component: Frepassword
		},
		{
			path: '/F/security',
			name: 'Fsecurity',
			component: Fsecurity,
			meta: {
				title: "安全"
			}
		},
		{
			path: '/F/helpDetails',
			name: 'FhelpDetails',
			component: FhelpDetails,
			meta: {
				title: "帮助"
			}
		},

		{
			path: '/F/changes',
			name: 'Fchanges',
			component: Fchanges,
			meta: {
				title: "修改信息"
			}
		},
		{
			path: '/F/sexchanges',
			name: 'Fsexchanges',
			component: Fsexchanges,
			meta: {
				title: "修改性别"
			}
		},
		{
			path: '/F/education',
			name: 'Feducation',
			component: Feducation,
			meta: {
				title: "修改学历"
			}
		},
		{
			path: '/F/birthday',
			name: 'Fbirthday',
			component: Fbirthday,
			meta: {
				title: "修改生日"
			}
		},

		{
			path: '/F/orderlist',
			name: 'Forderlist',
			component: Forderlist,
			meta: {
				title: "订单列表"
			}
		},
		{
			path: '/F/orderdep',
			name: 'Forderdep',
			component: Forderdep,
			meta: {
				title: "订单详情"
			}
		},

		/*------------------------------------------------------------F端end*/

		/*------------------------------------------------------------B端开始*/

		{
			path: '/B',
			name: 'Bindex',
			component: Bindex,
			meta: {
				title: "掌上管家"
			}
		},

		{
			path: '/B/finance/list',
			name: 'Bfinancelist',
			component: Bfinancelist,
			meta: {
				title: "财务管理"
			}
		},

		{
			path: '/B/finance/newfinance',
			name: 'Bnewfinance',
			component: Bnewfinance,
			meta: {
				title: "新建收支详情"
			}
		},

		{
			path: '/B/finance/listdetails',
			name: 'Bfinancelistdetails',
			component: Bfinancelistdetails,
			meta: {
				title: "收支详情"
			}
		},

		{
			path: '/B/statement/list',
			name: 'Bstatementlist',
			component: Bstatementlist,
			meta: {
				title: "报表"
			}
		},
		{
			path: '/B/statement/Bshouhou',
			name: 'Bshouhou',
			component: Bshouhou,
			meta: {
				title: "售后报表"
			}
		},
		{
			path: '/B/statement/Bdingdan',
			name: 'Bdingdan',
			component: Bdingdan,
			meta: {
				title: "售后报表"
			}
		},

		{
			path: '/B/message/index',
			name: 'Bmessage',
			component: Bmessage,
			meta: {
				title: "消息列表"
			}
		},

		{
			path: '/B/message/linkman',
			name: 'Blinkman',
			component: Blinkman,
			meta: {
				title: "联系人"
			}
		},

		{
			path: '/B/message/messages',
			name: 'Bmessages1',
			component: Bmessages1,
			meta: {
				title: "聊天窗口"
			}
		},
			{
			path: '/B/message/publicnotice',
			name: 'Bpublicnotice',
			component: Bpublicnotice,
			meta: {
				title: "公告"
			}
		},

		{
			path: '/B/order/list',
			name: 'Borderlist',
			component: Borderlist,
			meta: {
				title: "订单管理"
			}
		},

		{
			path: '/B/order/details',
			name: 'Borderdetails',
			component: Borderdetails,
			meta: {
				title: "订单详情"
			}
		},
		
		
		{
    path: '/B/bproduct/bProductList',
    name: 'BbProductList',
    component: BbProductList,
     meta: {
          title: "产品列表"
         }
  },
  {
    path: '/B/bproduct/bProductDetails',
    name: 'BbProductDetails',
    component: BbProductDetails,
     meta: {
          title: "产品详情"
         }
  },
  {
    path: '/B/bmy/bmy',
    name: 'Bbmy',
    component: Bbmy,
    meta:{
     title:"我的主页"
    }
  },
  {
    path: '/B/bmy/myabout',
    name: 'Bmyabout',
    component: Bmyabout,
    meta:{
     title:"我的主页1"
    }
  },
  {
    path: '/B/bmy/mycenter',
    name: 'Bmycenter',
    component: Bmycenter,
    meta:{
     title:"我的主页2"
    }
  },
  {
    path: '/B/bmy/myhelp',
    name: 'Bmyhelp',
    component: Bmyhelp,
    meta:{
     title:"我的主页3"
    }
  },
  {
    path: '/B/bmy/recount',
    name: 'Brecount',
    component: Brecount,
    meta:{
     title:"我的主页4"
    }
  },
  {
    path: '/B/bmy/repassword',
    name: 'Brepassword',
    component: Brepassword,
    meta:{
     title:"我的主页5"
    }
  },
  {
    path: '/B/bmy/security',
    name: 'Bsecurity',
    component: Bsecurity,
    meta:{
     title:"我的主页6"
    }
  },
  {
    path: '/B/bmy/helpDetails',
    name: 'BhelpDetails',
    component: BhelpDetails,
    meta:{
     title:"我的主页7"
    }
  }
  ,{
			path: '/B/bmy/changes',
			name: 'Bchanges',
			component: Bchanges,
			meta: {
				title: "修改信息"
			}
		},
		{
			path: '/B/bmy/sexchanges',
			name: 'Bsexchanges',
			component:Bsexchanges,
			meta: {
				title: "修改性别"
			}
		},
		{
			path: '/B/bmy/education',
			name: 'Beducation',
			component: Beducation,
			meta: {
				title: "修改学历"
			}
		},
		{
			path: '/B/bmy/birthday',
			name: 'Bbirthday',
			component: Bbirthday,
			meta: {
				title: "修改生日"
			}
		},
  
     
 {
    path: '/B/bClientList',
    name: 'BbClientList',
    component: BbClientList,
     meta:{
         title:"客户列表"
    }
  },
  {
    path: '/B/bclient/bNewClient',
    name: 'BbNewClient',
    component: BbNewClient,
     meta:{
         title:"新建客户"
    }
  },
  {
    path: '/B/bclient/bClientDetails',
    name: 'BbClientDetails',
    component: BbClientDetails,
     meta:{
         title:"客户详情"
    }
  },

		/*------------------------------------------------------------F端end*/

		/**/
	]
})