<template>

	<div id="bodynav">
		<div class="index_banner">
			<div class="nav">
				<img src="../assets/img/index/banner.png" />
			</div>

			<div class="shortcut">
				<div class="shortcut_nav">
					<ul>
						<li @click="intention">
							<router-link <img src="../assets/img/index/intentionClient.png" />
							<p>意向经销商</p>
						</li>

						<li @click="signdealer">
							<img src="../assets/img/index/signingClient.png" />
							<p>签约经销商</p>
						</li>

						<li @click="customers_list">
							<img src="../assets/img/index/indexClient.png" />
							<p>客户</p>
						</li>
					</ul>
				</div>
			</div>

		</div>

		<!--订单检索-->

		<div class="searching" style=" margin-top: -1.0rem;">
			<div class="nav">
				<!-- 	<div class="title">
					<img class="icon" src="../assets/img/index/inOrderSearch.png" />
					<p>订单检索</p>
				</div> -->

				<div class="form_nav">
					<ul>
						<li class="orderNo">
							<input type="search" style="border-radius: 0.2rem;" name="" id="" value="" v-model="searchObj.condation" placeholder="手机号/客户姓名/订单号" />
						</li>

						<li class="linkBlock">
							<div class="linkBlock_item select">
								<p>开始时间 {{searchObj.startTime}}</p>
								<input class="hide" v-model="searchObj.startTime" type="date" name="" id="" />
								<span class="select_icon"><img src="../assets/img/calendar.png"/></span>
							</div>
							<div class="linkBlock_item select">
								<p>结束时间 {{searchObj.endTime}}</p>
								<input class="hide" v-model="searchObj.endTime" type="date" name="" id="" />
								<span class="select_icon"><img src="../assets/img/calendar.png"/></span>
							</div>
						</li>

						<li class="linkBlock">
							<div class="linkBlock_item select">
								<p @click="addsiteshow=!addsiteshow" v-show="searchObj.cityIdName==''">地区</p>
								<p @click="addsiteshow=!addsiteshow" v-show="searchObj.cityIdName!=''">{{searchObj.cityIdName}}</p>

								<span class="select_icon"><img src="../assets/img/finance/xljt.png"/></span>
							</div>
							<div class="linkBlock_item select">
								<p @click="dealersearchshow=!dealersearchshow" v-show="searchObj.dealerName==''">经销商</p>
								<p @click="dealersearchshow=!dealersearchshow" v-show="searchObj.dealerName!=''">{{searchObj.dealerName}}</p>

								<span class="select_icon"><img src="../assets/img/finance/xljt.png"/></span>
							</div>
						</li>

						<!--<li class="addressAnddealer">
							<div class="but" id="showCityPicker3"> <span id="cityResult3"></span>地区</div>
							<div class="but"> 经销商</div>
						</li>-->

					</ul>

				</div>

				<button class="search_but" @click="clicksearch">订单查询</button>
			</div>
		</div>

		<!---->

		<div class="index_operation" style="margin-top: -0.5rem; position: relative;">
			<img style="width: 100%;" src="../assets/img/index/bgs.png">
			<ul style="  border-radius: 10px;margin: auto; position: absolute;top:0;left: 0;">
				<li @click="supplierList" style="margin-top: 0.3rem; ">
					<div class="nav_content">
						<a>
							<div class="icon">
								<img src="../assets/img/index/supplierIcon.png" />
							</div>
							<div class="text">
								<p>供应商</p>
								<!-- <span>客户你最美</span> -->

							</div>
						</a>
					</div>
				</li>

				<li @click="bProductList" style="margin-top: 0.3rem;">
					<div class="nav_content">
						<a>
							<div class="icon">
								<img src="../assets/img/index/productIcon.png" />
							</div>
							<div class="text">
								<p>产品</p>
								<!-- <span>客户你最美</span> -->

							</div>
						</a>
					</div>
				</li>

				<li @click="finance_list" style="margin-top: -1.5rem; ">
					<div class="nav_content">
						<a>
							<div class="icon">
								<img src="../assets/img/index/financeIcon.png" />
							</div>
							<div class="text">
								<p>财务</p>
								<!-- <span>客户你最美</span> -->
							</div>
						</a>
					</div>
				</li>

				<li @click="aftersale" style="margin-top: -1.5rem; ">
					<div class="nav_content">
						<a>
							<div class="icon">
								<img src="../assets/img/index/aftersale.png" />
							</div>
							<div class="text">
								<p>售后</p>
								<!-- <span>客户你最美</span> -->

							</div>
						</a>
					</div>
				</li>
			</ul>
		</div>

		<!--地址组件-->

		<Address :show="addsiteshow" @sure='surreAddress' @cancel="addsiteshow=!addsiteshow"></Address>
		<!--选择经销商组件-->

		<Dealersearch :show="dealersearchshow" @sure="surreDealer" @cancel="dealersearchshow=!dealersearchshow"></Dealersearch>

		<!-- <support></support> -->
		<floors :btmuacindex="0"></floors>

	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'
	/*	import  '../assets/js/mui.js'
		import  '../assets/js/mui.picker.js'
		import  '../assets/js/mui.poppicker.js'*/
	import support from '@/components/support.vue'
	import floor from '@/components/F_bottom.vue'
	import address from '@/components/address'
	import Dealersearch from '@/components/Dealersearch'
	/*require('../assets/js/mui.picker.js'); */
	export default {

		name: 'index',

		data() {
			return {
				addsiteshow: false,
				dealersearchshow: false,
				addsiteObj: {},
				searchObj: {
					startTime: "",
					endTime: "",
					cityId: "",
					cityIdName: "",
					condation: "",
					dealerId: "",
					dealerName: ""

				}
			}
		},

		methods: {
			aftersale() {
				this.$router.push({
					name: 'Faftersale'
				})
			},
			finance_list() {
				this.$router.push({
					name: 'Ffinancelist'
				})
			},
			bProductList() {
				this.$router.push({
					name: 'FbProductList'
				})
			},
			supplierList() {
				this.$router.push({
					name: 'FsupplierList'
				})
			},
			customers_list() {
				this.$router.push({
					name: 'FcustomList'
				})
			},
			signdealer() {
				this.$router.push({
					name: 'FsignedDealers',
					query: {
						status0: 1
					}
				})
			},
			intention() {
				this.$router.push({
					name: 'FintentionDealers',
					query: {
						status0: 0
					}
				})
			},
			surreAddress: function(obj) {
				this.addsiteObj = obj;
				this.searchObj.cityId = obj.id;
				this.searchObj.cityIdName = obj.name
				this.addsiteshow = !this.addsiteshow
			},

			surreDealer: function(obj) {
				this.searchObj.dealerId = obj.id;
				this.searchObj.dealerName = obj.companyName
				this.dealersearchshow = !this.dealersearchshow
			},

			//订单查询

			clicksearch: function() {
				var searchobj = this.searchObj

				/*searchObj: {
					startTime: "",
					endTime: "",
					cityId:"",
					cityIdName:"",
					condation:"",
					dealerId:"",
					dealerName:""

				}*/

				var condation = searchobj.condation;

				var startTime = searchobj.startTime;
				var endTime = searchobj.endTime;
				var cityId = searchobj.cityId;
				var dealerId = searchobj.dealerId

				var pathurl = ""

				if(condation != "" && condation != null && condation.length != 0) {
					pathurl += 'condation=' + condation + "&"
				}

				if(startTime != "" && startTime != null && startTime.length != 0) {
					pathurl += 'startTime=' + startTime + "&"
				}

				if(endTime != "" && endTime != null && endTime.length != 0) {
					pathurl += 'endTime=' + endTime + "&"
				}

				if(cityId != "" && cityId != null && cityId.length != 0) {
					pathurl += 'cityId=' + cityId + "&"
				}

				if(dealerId != "" && dealerId != null && dealerId.length != 0) {
					pathurl += 'dealerId=' + dealerId + "&"
				}

				if(pathurl !== '') {
					this.$router.push({
						name: 'Forderlist',
						query: {
							'url': pathurl
						}

					})
				} else {
					this.$router.push({
						name: 'Forderlist',
					})
				}
			}

		},
		components: {
			support: support,
			floors: floor,
			Address: address,
			Dealersearch: Dealersearch

		},
		mounted: function() {}
	}
</script>

<style scoped="scoped" src='../assets/css/index2.css'></style>

<style>

</style>