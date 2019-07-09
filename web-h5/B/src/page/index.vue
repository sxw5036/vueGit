<template>

	<div id="bodynav">
		<div class="index_banner">
			<div class="nav">

			</div>

			<div class="shortcut">
				<div class="shortcut_nav">
					<ul>
						<li>

							<img src="../assets/img/index/intentionClient.png" />
							<p>意向客户</p>
						</li>

						<li>
							<img src="../assets/img/index/accomplishClient.png" />
							<p>成交客户</p>
						</li>

						<li>
							<img src="../assets/img/index/executeClient.png" />
							<p>执行客户</p>
						</li>
					</ul>
				</div>
			</div>

		</div>

		<!--订单检索-->

		<div class="order_searching">
			<div class="nav">
				<div class="title">
					<img class="icon" src="../assets/img/index/inOrderSearch.png" />
					<p>订单检索</p>
				</div>

				<div class="form_nav">
					<ul>
						<li class="orderNo">
							<input type="search" v-model="searchObj.orderNo" name="" id="" value="" placeholder="手机号/客户姓姓名/订单号" />
						</li>

						<li class="linkBlock">
							<div class="linkBlock_item select">
								<p>开始时间 {{searchObj.begin}}</p>
								<input class="hide"  v-model="searchObj.begin" type="date" name="" id=""  />
								<span class="select_icon"><img src="../assets/img/calendar.png"/></span>
							</div>
							<div class="linkBlock_item select">
								<p>结束时间 {{searchObj.end}}</p>
								<input class="hide"  v-model="searchObj.end" type="date" name="" id="" />
								<span class="select_icon"><img src="../assets/img/calendar.png"/></span>
							</div>
						</li>

					</ul>

				</div>

				<button class="search_but">查询</button>
			</div>
		</div>
			<!--财务简报-->
			<div class="report_nav">
				<div class="board_nav">
					<div class="header index">
						<img class="left_icon" src="../assets/img/index/orderReport.png" />订单简报
					</div>

					<div class="board_content">

						<div class="report">
							<ul>
								<li>
									<p>354</p>
									<span>今日新增</span>
									<small class="border"></small>
								</li>
								<li>
									<p>354</p>
									<span>今日有效</span>
									<small class="border"></small>
								</li>
								<li>
									<p>354</p>
									<span>今日完成</span>
								</li>
							</ul>
						</div>

					</div>

				</div>
			</div>

			<!---->

			<div class="report_nav">
				<div class="board_nav">
					<div class="header index">
						<img class="left_icon" src="../assets/img/index/aftersaleReport.png" />售后简报
					</div>

					<div class="board_content">

						<div class="report">
							<ul>
								<li>
									<p>32</p>
									<span>今日新增</span>
									<small class="border"></small>
								</li>
								<li>
									<p>50</p>
									<span>今日有效</span>
									<small class="border"></small>
								</li>
								<li>
									<p>12</p>
									<span>今日完成</span>
								</li>
							</ul>
						</div>

					</div>

				</div>
			</div>

			<!--财务简报-->
			<div class="report_nav">
				<div class="board_nav">
					<div class="header index">
						<img class="left_icon" src="../assets/img/index/fianceReport.png" />财务简报
					</div>

					<div class="board_content">

						<div class="report">
							<ul>
								<li>
									<p><b class="currency">￥</b>12<small class="unit">W</small></p>
									<span>今日收入</span>
									<small class="border"></small>
								</li>
								<li>
									<p><b class="currency">￥</b>6<small class="unit">W</small></p>
									<span>今日支出</span>
									<small class="border"></small>
								</li>
								<li>
									<p><b class="currency">￥</b>6<small class="unit">W</small></p>
									<span>今日盈余</span>
								</li>
							</ul>
						</div>

					</div>

				</div>
			</div>

			<!--产品简报-->
			<div class="report_nav product">
				<div class="board_nav">
					<div class="header index">
						<img class="left_icon" src="../assets/img/index/productReport.png" />产品推荐<span class="right_icon"><a>查看更多</a>》</span>
					</div>

					<div class="board_content">

						<div class="product_report">
							<img src="../assets/img/ban.jpg" />
							<p class="notes">红田家居，中国橱柜十大知名品牌。出口美国实木橱柜，销海外，18年来致力于让特供产品进入中国普通家庭，不做 一线价格，只做一线品质。 </p>
						</div>

					</div>

				</div>
			</div>

	

		<!---->

		<!--<support></support>-->
		<floors :btmuacindex="0"></floors>

	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '../assets/js/mui.js'
	import support from './../components/support.vue'
	import floor from './../components/bottom.vue'
	/*require('../assets/js/mui.picker.js'); */
	export default {

		name: 'index',

		data() {
			return {
				searchObj: {
					orderNo: "",
					begin: "",
					end: ""

				}
			}
		},

		methods: {

		},

		components: {

			support: support,
			floors: floor,

		},

		mounted: function() {
			mui.init()

		}
	}
</script>

<style src='./../assets/css/index.css'></style>

<style>

</style>