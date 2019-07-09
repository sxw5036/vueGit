<template>

	<div id="bodynav">
		<div class="index_banner">
			<div class="nav">
                 <img src="../assets/img/index/banner.png" />
				 <!-- <img :src="data.wxCover" /> -->
			</div>

			<div class="shortcut">
				<div class="shortcut_nav">
					<ul>
						<li>
							<router-link :to="{name:'BbClientList',query:{status:'1'}}">
								<img src="../assets/img/index/intentionClient.png" />
								<p>意向客户</p>
							</router-link>
						</li>

						<li>
							<router-link :to="{name:'BbClientList',query:{status:'2'}}">
								<img src="../assets/img/index/accomplishClient.png" />
								<p>成交客户</p>
							</router-link>
						</li>

						<li>
							<router-link :to="{name:'BbClientList',query:{status:'3'}}">
							<img src="../assets/img/index/executeClient.png" />
							<p>执行客户</p>
							</router-link>
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
							<input type="search" v-model="searchObj.orderNo" name="" id="" value="" placeholder="手机号/客户姓名/订单号" />
						</li>

						<li class="linkBlock">
							<div class="linkBlock_item select">
								<p>开始时间{{startTime}}</p>
								<input class="hide" v-model="startTime" type="date" name="" id="" />
								<span class="select_icon"><img src="../assets/img/calendar.png"/></span>
							</div>
							<div class="linkBlock_item select">
								<p>结束时间{{endTime}}</p>
								<input class="hide"  v-model="endTime" type="date" name="" id="" />
								<span class="select_icon"><img src="../assets/img/calendar.png"/></span>
							</div>
						</li>

					</ul>

				</div>

				<button class="search_but" @click="clickSearch">查询</button>
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
									<p>{{data.dingdanxinzeng}}</p>
									<span>今日新增</span>
									<small class="border"></small>
								</li>
								<li>
									<p>{{data.dingdanyouxiao}}</p>
									<span>今日有效</span>
									<small class="border"></small>
								</li>
								<li>
									<p>{{data.dingdanwancheng}}</p>
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
									<p>{{data.fankuixinzeng}}</p>
									<span>今日反馈</span>
									<small class="border"></small>
								</li>
								<li>
									<p>{{data.buliaoxinzeng}}</p>
									<span>今日补料</span>
									<small class="border"></small>
								</li>
								<li>
									<p>{{data.wancheng}}</p>
									<span>今日完成</span>
								</li>
							</ul>
						</div>

					</div>

				</div>
			</div>

			<!--财务简报-->
			<!-- <div class="report_nav">
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
			</div> -->

			<!--产品简报-->
			<div class="report_nav product">
				<div class="board_nav">
					<div class="header index">
						<img class="left_icon" src="../assets/img/index/productReport.png" />产品推荐<span class="right_icon">
							<router-link :to="{name:'BbProductList'}">查看更多》</router-link>
						</span>
					</div>

					<div class="board_content">

						<div class="product_report">
							<img src="../assets/img/ban.jpg" />
							<!-- <img :src="listproduct.fullPath" /> -->
							<p class="notes">{{data.notes}}</p>
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
	import mui from '@/assets/js/mui.js'
	import support from '@/components/support.vue'
	import floor from '@/components/B_bottom.vue'
	/*require('../assets/js/mui.picker.js'); */
	export default {

		name: 'index',

		data() {
			return {
				startTime:'',
				endTime:"",
				listproduct:'',
				data:'',
				searchObj: {
					orderNo: "",
					begin: "",
					end: ""

				}
			}
		},

		methods: {
			
			clickSearch:function  () {
				 	this.$router.push({ name: 'Borderlist', query: { orderNo:this.searchObj.orderNo,startTime:this.startTime,endTime:this.endTime }})
			
			}

		},

		components: {

			support: support,
			floors: floor,

		},

		mounted: function() {
			mui.init()
			var that=this
			that.axios({
				method: 'get',		
				url: '/wxapi/b/dealer/index'		
			}).then(function(res) {
				console.log(res)
				that.data = res.data.data;
				that.listproduct=res.data.data.productFiles
				
			
			}).catch(function(err) {
				console.log(err)
			
			})

		}
	}
</script>

<style scoped="scoped" src='./../assets/css/index.css'></style>

<style>

</style>