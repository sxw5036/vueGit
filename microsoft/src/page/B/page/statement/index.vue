<template>

	<div id="bodynav">

		<div class="statement_nav">
			<div class="board_nav">
				<div class="header">
					<img class="left_icon" src="../../assets/img/statement/today.png" />今日简报<span class="right_icon mui-icon mui-icon-arrowright"></span>
				</div>

				<div class="board_content">
					<div class="statement_list">
						<div class="nav_list">
							<div class="item" style="padding-top: 0rem;">
								<div class="left">
									<p>26</p>
								<span>接单</span>
								</div>
								
							</div>

							<div class="item" style="border-left: solid 1px rgb(227, 227, 227);padding-top: 0rem; ">
								<div class="right">
								<p>26</p>
								<span>付款</span>
								</div>
							</div>

							<div class="item">
								<div class="left">
								<p>26</p>
								<span>生产</span>
								</div>
							</div>

							<div class="item" style="border-left: solid 1px rgb(227, 227, 227);">
								<div class="right">
								<p>26</p>
								<span>延期</span>
								</div>
							</div>

							<div class="item income" style="border: none; padding-bottom: 0rem;">
								<div class="left">
								<p><span><img src="../../assets/img/statement/red$.png"/></span>226000</p>
								<span>收入</span>
								</div>
							</div>

							<div class="item expend" style="border-bottom: 0px; border-left: solid 1px rgb(227, 227, 227); padding-bottom: 0rem;">
								<div class="right">
								<p><span><img src="../../assets/img/statement/blue$.png"/></span>226000</p>
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
							<div class="item">
								<img class="icon" src="../../assets/img/statement/business.png" />
								<span>业务</span>
							</div>

							<div class="item">
								<img class="icon" src="../../assets/img/statement/order.png" />
								<span>订单</span>
							</div>

							<div class="item">
								<img class="icon" src="../../assets/img/statement/finance.png" />
								<span>财务</span>
							</div>

							<div class="item">
								<img class="icon" src="../../assets/img/statement/aftersale.png" />
								<span>售后</span>
							</div>

							<div class="item">
								<img class="icon" src="../../assets/img/statement/design.png" />
								<span>设计</span>
							</div>

							<div class="item">
								<img class="icon" src="../../assets/img/statement/production.png" />
								<span>生产</span>
							</div>

							<div class="item">
								<img class="icon" src="../../assets/img/statement/in.png" />
								<span>入库</span>
							</div>
							<div class="item">
								<img class="icon" src="../../assets/img/statement/aftersale.png" />
								<span>发货</span>
							</div>

						</div>
					</div>

				</div>

			</div>

		</div>

	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'

	export default {

		name: 'statement',

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

<style src='./../../assets/css/statement.css'></style>

<style>

</style>