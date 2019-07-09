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
						<div class="list_msg">{{dataMsg.typeName}}&nbsp;</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/sum.png"/>金额:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">{{dataMsg.amount}}&nbsp;</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/subject.png"/>科目:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">{{dataMsg.fundsName}}&nbsp;</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/expemdTime.png"/>支付时间:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">{{dataMsg.paymentDate}}&nbsp;</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/expemdType.png"/>支付方式:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">{{dataMsg.waysName}}&nbsp;</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/matter.png"/>事项:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">{{dataMsg.note}}&nbsp;</div>
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
							
							<div class="demo-upload-list" v-for="(item,index) in dataMsg.imgPathList"  :key='index'>
								<img :src="item">
							</div>
							&nbsp;
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
						<div class="list_msg">{{dataMsg.operatorName}}&nbsp;</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="item_list">
				<div class="iconAndtxet"><img class="icon" src="../../assets/img/finance/creatored.png"/>创建时间:</div>
				<div class="c">
					<div class="cn">
						<!---->
						<div class="list_msg">{{dataMsg.created}}&nbsp;</div>
						<!---->
					</div>
				</div>
			</div>

		</div>

	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '../../assets/js/mui.js'

	export default {

		name: 'financelist',

		data() {
			return {
                 dataMsg:{},
			}
		},

		methods: {
            getData: function(id) {
				let that = this

				this.axios({
					method: 'get',

					url: '/api/f/payment_simples/'+id,

				}).then(function(res) {
					console.log(res)
				var data=res.data
				
				that.dataMsg=data.data
				
				}).catch(function(err) {
					console.log(err)
					
					that.mui.toast("请求失败请稍后重试" + err, {
						duration: 'long',
						type: 'div'
					})

				})
			}
		}, 

		mounted: function() {
			mui.init()
			
			if(this.$route.query.id){
				this.getData(this.$route.query.id)
			}
			
		}
	}
</script>

<style scoped="scoped" src='./../../assets/css/financelist.css'></style>

<style>

</style>