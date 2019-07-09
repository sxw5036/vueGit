<template>

	<div class="order_listNav">
		<div class="order_statement">

			<div class="board_nav" style="background: #333333;">
				<div class="header">
					<img class="left_icon" src="../../assets/img/order/tongji_tu.png" />订单统计<span class="right_icon">更多统计<span class=" mui-icon mui-icon-arrowright"></span></span>
				</div>

				<div class="board_content">

					<div class="order_statement_list">
						<ul>
							<li v-for="item in counts">
								<p>{{item.value}}</p>
								<span>{{item.name}}</span>
								<small class="border"></small>
							</li>
						</ul>
					</div>

				</div>
			</div>

		</div>

		<div class="order_search">

			<div class="searching">
				<div class="nav">
					<div class="title">
						<img class="icon" src="../../assets/img/search.png" />
						<p>订单检索</p>
					</div>

					<div class="form_nav">
						<ul>
							<li class="orderNo">
								<input type="search" name="" id="" value="" placeholder="手机号/客户姓姓名/订单号" />
							</li>

							<li class="linkBlock">
								<div class="linkBlock_item select">
									<p>开始时间</p>
									<input class="hide" type="date" name="" id="" />
									<span class="select_icon"><img src="../../assets/img/calendar.png"/></span>
								</div>
								<div class="linkBlock_item select">
									<p>结束时间 </p>
									<input class="hide" type="date" name="" id="" />
									<span class="select_icon"><img src="../../assets/img/calendar.png"/></span>
								</div>
							</li>

							<li class="linkBlock">
								<div class="linkBlock_item select">
									<p>选择地区</p>

								</div>
								<div class="linkBlock_item select">
									<p>选择经销商 </p>

								</div>
							</li>

						</ul>

					</div>

					<button class="search_but">查询</button>
				</div>
			</div>

		</div>

		<!--订单列表-->

		<div class="list_data">
			<ul>
				<li v-for="item in customLists" @click="changePath(item.orderId)">
					<div class="icon"><img src="../../assets/music.png" />
						<p>{{item.statusName}}</p>
						<small class="border"></small></div>
					<div class="cen">
						<h3>{{item.salesmanName}}</h3>
						<p>终端客户：{{item.customerName}}</p>
						<span>订单编号：<a>{{item.orderNo}}</a><small>创建时间：{{item.orderCreated}}</small></span>
					</div>
				</li>
			</ul>
		</div>

		<!---->

		<div v-show="backtopNav==true">
			<Backtop></Backtop>
		</div>

	</div>

</template>

<script>
	import backtop from './../../components/backtop.vue'

	export default {
		name: 'ordertypes',

		data() {

			return {
				backtopNav: false,
				 pageSize: 10,
				pageNum: 0,
				totalpage: 0,
				currents: 1,
				customLists:[],
				counts:[],
			}

		},

		components: {

			Backtop: backtop,

		},

		methods: {
             changePath:function  (orderId) {
             	
             	this.$router.push({ name: 'orderdetails', query: { orderId:orderId }})
             	
             },
			
			 	getordersdatas(){			
			 	   let that = this;
			 	   this.axios({
			 		method: 'get',
			 		headers: {
			 			'X-Requested-With': 'XMLHttpRequest',
			 			'ContentType': 'application/json;charset=UTF-8'
			 		},
			 		url: '/wxapi/b/orders?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize,
			 	}).then(res => {
					     console.log(res)
			 		   // that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
			 	       var data=res.data.data.CustomOrderlist;
			 		   that.customLists=[];
			 	       for (var i=0;i<data.length;i++){
			 			  
			 	         that.customLists.push(data[i]);
			 	      } 
					  that.counts=res.data.data.count;
			 		  that.pageSize = res.data.pagination.pageSize;
			 		  that.pageNum = res.data.pagination.pageNum;
			 		  that.totalpage = res.data.pagination.pages;
			   
			 	 })
			 },
		},
		mounted: function() {
			this.getordersdatas();
			var that = this

			window.onscroll = function() {

				var scrtop = document.documentElement.scrollTop || document.body.scrollTop;
				var wheight = window.innerHeight

				if(scrtop > wheight) {

					that.backtopNav = true
				} else {
					that.backtopNav = false
				}

			}
		}

	}
</script>

<style src='../../assets/css/order.css'></style>