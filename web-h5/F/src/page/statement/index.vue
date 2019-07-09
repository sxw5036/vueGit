<template>

	<div id="bodynav">

		<div class="statement_nav">
			<div class="board_nav">
				<div class="header">
					<img class="left_icon" src="../../assets/img/statement/today.png" />今日简报
				</div>

				<div class="board_content">
					<div class="statement_list">
						<div class="nav_list">
							<div class="item" style="padding-top: 0rem;">
								<div class="left">
									<p>{{data.jiedan}}</p>
								<span>接单</span>
								</div>
								
							</div>

							<div class="item" style="border-left: solid 1px rgb(227, 227, 227);padding-top: 0rem; ">
								<div class="right">
								<p>{{data.fukuan}}</p>
								<span>付款</span>
								</div>
							</div>

							<div class="item">
								<div class="left">
								<p>{{data.shengchan}}</p>
								<span>生产</span>
								</div>
							</div>

							<div class="item" style="border-left: solid 1px rgb(227, 227, 227);">
								<div class="right">
								<p>{{data.yanqi}}</p>
								<span>延期</span>
								</div>
							</div>

							<div class="item income" style="border: none; padding-bottom: 0rem;">
								<div class="left">
								<p><span><img src="../../assets/img/statement/red$.png"/></span>{{data.shouru}}</p>
								<span>收入</span>
								</div>
							</div>

							<div class="item expend" style="border-bottom: 0px; border-left: solid 1px rgb(227, 227, 227); padding-bottom: 0rem;">
								<div class="right">
								<p><span><img src="../../assets/img/statement/blue$.png"/></span>{{data.zhichu}}</p>
								<span>支出</span>
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>
		</div>

		<div class="more_statement">

			<div class="board_nav">
				<div class="header">
					<img class="left_icon" src="../../assets/img/statement/detail.png" />详细报表
				</div>

				<div class="board_content">
					<div class="statement_list">
						<div class="nav_list">
							<div class="item" @click="dealer_report">
								<img class="icon" src="../../assets/img/statement/business.png" />
								<span>业务</span>
							</div>

							<div class="item" @click="orderreport">
								<img class="icon" src="../../assets/img/statement/order.png" />
								<span>订单</span>
							</div>

							<div class="item" @click="finance">
								<img class="icon" src="../../assets/img/statement/finance.png" />
								<span>财务</span>
							</div>

							<div class="item" @click="shouhou">
								<img class="icon" src="../../assets/img/statement/aftersale.png" />
								<span>售后</span>
							</div>

							<div class="item" @click="design_report">
								<img class="icon" src="../../assets/img/statement/design.png" />
								<span>设计</span>
							</div>

							<div class="item" @click="shengchan">
								<img class="icon" src="../../assets/img/statement/production.png" />
								<span>生产</span>
							</div>

							<div class="item" @click="Warehousing_report">
								<img class="icon" src="../../assets/img/statement/in.png" />
								<span>入库</span>
							</div>
							<div class="item" @click="send">
								<img class="icon" src="../../assets/img/statement/aftersale.png" />
								<span>发货</span>
							</div>

						</div>
					</div>

				</div>

			</div>

		</div>
  <floors :btmuacindex="2"></floors>
	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '../../assets/js/mui.js'
	import floor from '../../components/bottom.vue'

	export default {

		name: 'statement',

		data() {
			return {
				data:[]
			}
		},
		
		components: {

			floors: floor,
		

		},

		methods: {
			send:function  () {
				
				this.$router.push({ name: 'send'})
				
			},
			shengchan:function  () {
				
				this.$router.push({ name: 'shengchan'})
				
			},
			shouhou:function  () {
				
				this.$router.push({ name: 'shouhou'})
				
			},
			
			design_report:function  () {
				
				this.$router.push({ name: 'design_report'})
				
			},
			dealer_report:function  () {
				
				this.$router.push({ name: 'dealer_report'})
				
			},
			orderreport:function  () {
				
				this.$router.push({ name: 'orderreport'})
				
			},
			finance:function  () {
				
				this.$router.push({ name: 'finance'})
				
			},
			Warehousing_report:function  () {
				
				this.$router.push({ name: 'Warehousing_report'})
				
			},
			

		},

		mounted: function() {
			mui.init()
			var that=this
			that.axios({
				
				method: 'get',
				
				url: '/wxapi/f/statements'
			
			}).then(function(res) {
				 // that.$refs.tipshow.alertshow(5)
				console.log(res.data.data)
				that.data=res.data.data;
				
			
			}).catch(function(err) {
				console.log(err)
			
			})
		}
	}
</script>

<style scoped="scoped" src='./../../assets/css/statement.css'></style>

<style>

</style>