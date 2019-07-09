<template>

	<!--		<header class="mui-bar mui-bar-nav mui-bar-transparent" data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
	<h1 class="mui-title">标题</h1>
</header>-->

	<div class="finance_listdetails">

		<div class="finance_list">

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/expemdType.png"/>类型:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">收入</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/sum.png"/>金额:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">22666.00</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/subject.png"/>科目:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">科目一</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/expemdTime.png"/>支付时间:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">2019-12-2</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/expemdType.png"/>支付方式:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">现金</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/matter.png"/>事项:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">展示经销商尽量考虑进来考虑考虑考虑凉快凉快凉快看</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/flies.png"/>附件:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">

							<div class="demo-upload-list">
								<img src="">
							</div>

						</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/handle.png"/>经手人:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">财务1</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/creatored.png"/>创建时间:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">2019-12-2</div>
						<!---->
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