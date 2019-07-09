import Vue from 'vue'
import Router from 'vue-router'

import menu from '@/components/menu'

import editor from '@/components/Editor' //富文本

import echarts from '@/components/ECharts' //百度ECharts

import iview from '@/components/iview'

import tinymce from '@/components/tinymce'



import dm from '@/components/3dm'


//首页
import index from '@/page/index'

//财务
import financelist from '@/page/finance/list'
import financelistdetails from '@/page/finance/listdetails'
import newfinance from '@/page/finance/newfinance'

//报表
import statementlist from '@/page/statement/index'

//消息
import message from '@/page/message/index'
import linkman from '@/page/message/linkman'
import chat from '@/page/message/chat'

//订单

import orderlist from '@/page/order/list'
import orderdetails from '@/page/order/details'


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

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
						title: "掌上管家工厂端"
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
      path: '/order/list',
      name: 'orderlist',
      component: orderlist,
      meta: {
						title: "订单管理"
					}
    },
    
     {
      path: '/order/details',
      name: 'orderdetails',
      component: orderdetails,
      meta: {
						title: "订单详情"
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
      path: '/user',
      name: 'user',
      component: user,
      meta: {
						title: "我的"
					}
    },
  ]
})
