<template>
	
	
	<div id="bodynav" class="finance_nav">
		
<!--		<header class="mui-bar mui-bar-nav mui-bar-transparent" data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
	<h1 class="mui-title">标题</h1>
</header>-->
      
      
      <div class="finance_statistics">
      	
      	<div class="finance_list">
      		<div class="item_list">
      			<div class="iconAndtxet">
      				<img class="icon" style="padding: 0.5rem;" src="../../assets/img/finance/todayIncome.png"/>
      			</div>
      			<div class="c">
      				<div class="cn">
      					<!---->
      					<div class="statistics_nav">
      						<p class="statistics_title">今日收入<span><small>￥</small>2622222</span></p>
      						<div class="progressbar">
      							<span class="progressbar_nav" style="width: 50%; background: #d01818;"></span>
      						</div>
      					</div>
      					<!---->
      				</div>
      			</div>
      		</div>
      		
      		
      		<div class="item_list">
      			<div class="iconAndtxet">
      				<img class="icon"  style="padding: 0.5rem;" src="../../assets/img/finance/todayExpend.png"/>
      			</div>
      			<div class="c">
      				<div class="cn">
      					<!---->
      					<div class="statistics_nav expend">
      						<p class="statistics_title">今日支出<span><small>￥</small>2622222</span></p>
      						<div class="progressbar">
      							<span class="progressbar_nav" style="width: 50%; background: #63678D;"></span>
      						</div>
      					</div>
      					<!---->
      				</div>
      			</div>
      		</div>
      		
      		
      		<div class="item_list">
      			<div class="iconAndtxet"><img  style="padding: 0.5rem;" class="icon" src="../../assets/img/finance/todyprofit.png"/></div>
      			<div class="c">
      				<div class="cn">
      					<!---->
      					<div class="statistics_nav profit">
      						<p class="statistics_title">今日盈余<span><small>￥</small>2622222</span></p>
      						<div class="progressbar">
      							<span class="progressbar_nav" style="width: 50%; background: #bbaf8d;"></span>
      						</div>
      					</div>
      					<!---->
      				</div>
      			</div>
      		</div>
      		
      		
      		
      	</div>
      	
      </div>
      
      <!--检索-->
      
      <div class="finance_search">
      	<div class="searching" style="padding: 0rem;">
			<div class="nav">
				<div class="title">
					<img class="icon" src="../../assets/img/search.png"/>
					<p>检索</p>
				</div>

				<div class="form_nav">
					<ul>
                       <li class="input">
                       	<input type="search" name="" id="" value="" placeholder="选择时间段" />
                       </li>
                       
                     
                       
                        <li class="input_s">
                       	<div class="but"> 收入</div>
                       	<div class="but"> 货款收入</div>
                       </li>
                       
					</ul>
					
					
					
				</div>
				
				<button class="search_but">查询</button>
			</div>
		</div>
      </div>
      
      
      <div class="finance_listNav">
      
      <div class="finance_list">
      		<router-link :to="{name:'financelistdetails',query:{type:'1'}}">
      	    <div class="list_H">
      	    	支出 <span>2019-12-2</span>
      	    </div>
      	
      	
      		<div class="item_list">
      			<div class="iconAndtxet">
      				科目
      			</div>
      			<div class="c">
      				<div class="cn">
      					<!---->
      					<div class="list_msg">科目一</div>
      					<!---->
      				</div>
      			</div>
      		</div>
      		
      		
      		<div class="item_list">
      			<div class="iconAndtxet">金额</div>
      			<div class="c">
      				<div class="cn">
      					<!---->
      					<div class="list_msg">22666.00</div>
      					<!---->
      				</div>
      			</div>
      		</div>
      		
      		
      		<div class="item_list">
      			<div class="iconAndtxet">经手人</div>
      			<div class="c">
      				<div class="cn">
      					<!---->
      					<div class="list_msg">财务1</div>
      					<!---->
      				</div>
      			</div>
      		</div>
      		
      		<div class="item_list">
      			<div class="iconAndtxet">支付时间</div>
      			<div class="c">
      				<div class="cn">
      					<!---->
      					<div class="list_msg">2019-12-2</div>
      					<!---->
      				</div>
      			</div>
      		</div>
      		
      		
      			</router-link>
      	</div>
      
      </div>
      
      
      <div class="finance_but">
      	<ul>
      		<li><router-link :to="{name:'newfinance',query:{type:'0'}}"><img src="../../assets/img/finance/newExpend.png"/>新建支出</router-link></li>
      		<li><router-link :to="{name:'newfinance',query:{type:'1'}}"><img src="../../assets/img/finance/newIncome.png"/>新建收入</router-link></li>
      	</ul>
      </div>
      
      
	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'

export default {

		name: 'financelist',

		data() {
			return {

			}
		},

		methods: {

		},
		
	
		mounted: function() {
			mui.init()
		}
	}
</script>

<style src='./../../assets/css/financelist.css'></style>

<style>

</style>