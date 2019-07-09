<template>

	<div id="bodynav_bar" class="newfinance">
		
		<header  v-show="financeType==0" class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
			
			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
	<h1 class="mui-title">新建支出</h1>
</header>

<header  v-show="financeType==1" class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
	<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
	<h1 class="mui-title">新建收入</h1>
</header>

      <!--支出-->

		<div class="ik_form_nav" v-show="financeType==0">

			<div class="form_item">
				<div class="lable">金额:</div>
				<div class="center">
					<input class="input" type="text" name="" id="" value="" />
				</div>
			</div>

			<div class="form_item">
				<div class="lable">科目:</div>
				<div class="center">
					<input class="input" type="text" name="" id="" value="" />
				</div>
			</div>

			<div class="form_item">
				<div class="lable">支付时间:</div>
				<div class="center">
					<input class="input" type="text" name="" id="" value="" />
				</div>
			</div>

			<div class="form_item">
				<div class="lable">支付方式:</div>
				<div class="center">
					<input class="input" type="text" name="" id="" value="" />
				</div>
			</div>

			<div class="form_item">
				<div class="lable">备注:</div>
				<div class="center">
					<textarea name="" rows="" cols=""></textarea>
				</div>
			</div>

			<div class="form_item">
				<div class="lable">附件:</div>
				<div class="center">
					<div class="demo-upload-list">
						<img src="">
					</div>

					<div class="demo-upload-list flie_bg">
						<input class="file_but" type="file" name="" id="" value="" />
					</div>
				</div>
			</div>

			<div class="form_item">
				<div class="operation">
					<span>经手人：<small>财务1</small></span>
					<span>创建时间：<small>19-6-10 12:00:00</small></span>
				</div>
			</div>

			

		</div>
		
		<button v-show="financeType==0"  style="margin-top: 0.5rem;" class="form_submit">确认</button>
		
		
		<!--收入-->
		
		<div class="ik_form_nav" v-show="financeType==1">

			<div class="form_item">
				<div class="lable">金额:</div>
				<div class="center">
					<input class="input" type="text" name="" id="" value="" />
				</div>
			</div>

			<div class="form_item">
				<div class="lable">科目:</div>
				<div class="center">
					<input class="input" type="text" name="" id="" value="" />
				</div>
			</div>

			<div class="form_item">
				<div class="lable">支付时间:</div>
				<div class="center">
					<input class="input" type="text" name="" id="" value="" />
				</div>
			</div>

			<div class="form_item">
				<div class="lable">支付方式:</div>
				<div class="center">
					<input class="input" type="text" name="" id="" value="" />
				</div>
			</div>

			<div class="form_item">
				<div class="lable">备注:</div>
				<div class="center">
					<textarea name="" rows="" cols=""></textarea>
				</div>
			</div>

			<div class="form_item">
				<div class="lable">附件:</div>
				<div class="center">
					<div class="demo-upload-list">
						<img src="">
					</div>

					<div class="demo-upload-list flie_bg">
						<input class="file_but" type="file" name="" id="" value="" />
					</div>
				</div>
			</div>

			<div class="form_item">
				<div class="operation">
					<span>经手人：<small>财务1</small></span>
					<span>创建时间：<small>19-6-10 12:00:00</small></span>
				</div>
			</div>

			

		</div>
		
		<button v-show="financeType==1"  style="margin-top: 0.5rem;" class="form_submit">确认</button>

	</div>
	
	
	

	<!--		<header class="mui-bar mui-bar-nav mui-bar-transparent" data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
	<h1 class="mui-title">标题</h1>
</header>-->

</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'

	export default {

		name: 'newfinance',

		data() {
			return {
				financeType: 0,
			}
		},

		methods: {

		},

		mounted: function() {
			mui.init()

			this.financeType = this.$route.query.type
		}
	}
</script>

<style src='./../../assets/css/financelist.css'></style>

<style>

</style>