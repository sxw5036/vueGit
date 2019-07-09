<template>

	<div id="bodynav">
		<div class="index_banner"  style="height: ;">
			<div class="nav" style="height: 7rem;">
                  <img src="../assets/img/index/banner.png"/>
			</div>

			<div class="shortcut">
				<div class="shortcut_nav" style="padding: 0;" >
					<ul>
						<li @click="intention">
                            <router-link
							<img src="../assets/img/index/intentionClient.png" />
							<p>意向客户</p>
						</li>

						<li @click="signdealer">
							<img src="../assets/img/index/signingClient.png" />
							<p>签约客户</p>
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

			<div class="searching" style="padding: 0 0.5rem;">
			<div class="nav">
				<!-- <div class="title">
					<img class="icon" src="../assets/img/index/inOrderSearch.png" />
					<p>订单检索</p>
				</div> -->

					<div class="form_nav" style="padding-bottom: 0;">
					<ul>
						<li class="orderNo">
							<input  style="margin: 0;" type="search" name="" id="" value="" placeholder="手机号/客户姓姓名/订单号" />
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
								<p  @click="addsiteshow=!addsiteshow" v-show="searchObj.cityIdName==''">地区</p>
								<p  @click="addsiteshow=!addsiteshow" v-show="searchObj.cityIdName!=''">{{searchObj.cityIdName}}</p>
								

								<span class="select_icon"><img src="../assets/img/calendar.png"/></span>
							</div>
							<div class="linkBlock_item select">
								<p @click="dealersearchshow=!dealersearchshow" v-show="searchObj.dealerName==''">经销商</p>
								<p @click="dealersearchshow=!dealersearchshow" v-show="searchObj.dealerName!=''">{{searchObj.dealerName}}</p>
								
								<span class="select_icon"><img src="../assets/img/calendar.png"/></span>
							</div>
						</li>

						<!--<li class="addressAnddealer">
							<div class="but" id="showCityPicker3"> <span id="cityResult3"></span>地区</div>
							<div class="but"> 经销商</div>
						</li>-->

					</ul>

				</div>

				<button class="search_but" @click="clicksearch">查询</button>
			</div>
		</div>

		<!---->

		<div class="index_operation">
			<ul>
				<li @click="supplierList">
					<div class="nav_content">
						<a>
							<div class="icon">
								<img src="../assets/img/index/supplierIcon.png" />
							</div>
							<div class="text">
								<p>供应商</p>
								

							</div>
						</a>
					</div>
				</li>

				<li @click="bProductList">
					<div class="nav_content">
						<a>
							<div class="icon">
								<img src="../assets/img/index/productIcon.png" />
							</div>
							<div class="text">
								<p>产品</p>
								

							</div>
						</a>
					</div>
				</li>

				<li @click="finance_list">
					<div class="nav_content">
						<a>
							<div class="icon">
								<img src="../assets/img/index/financeIcon.png" />
							</div>
							<div class="text">
								<p>财务</p>
								

							</div>
						</a>
					</div>
				</li>

				<li @click="aftersale">
					<div class="nav_content">
						<a>
							<div class="icon">
								<img src="../assets/img/index/aftersale.png" />
							</div>
							<div class="text">
								<p>售后</p>
								

							</div>
						</a>
					</div>
				</li>
			</ul>
		</div>

		<!--地址组件-->

		<Address :show="addsiteshow" @sure='surreAddress' @cancel="addsiteshow=!addsiteshow"></Address>
      <!--选择经销商组件-->
      
        <Dealersearch :show="dealersearchshow" @sure="surreDealer" ></Dealersearch>
      
		<!-- <support></support> -->
		<floors :btmuacindex="0"></floors>

	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '../assets/js/mui.js'
	/*	import  '../assets/js/mui.js'
		import  '../assets/js/mui.picker.js'
		import  '../assets/js/mui.poppicker.js'*/
	import support from './../components/support.vue'
	import floor from './../components/bottom.vue'
	import address from '@/components/address'
	import Dealersearch from '@/components/Dealersearch'
	/*require('../assets/js/mui.picker.js'); */
	export default {

		name: 'index',

		data() {
			return {
				addsiteshow: false,
				dealersearchshow:false,
				addsiteObj: {},
				searchObj: {
					startTime: "",
					endTime: "",
					cityId:"",
					cityIdName:"",
					condation:"",
					dealerId:"",
					dealerName:""

				}
			}
		},

		methods: {
			aftersale(){
				this.$router.push({ name: 'aftersale'})
			},
			finance_list(){
				this.$router.push({ name: 'financelist'})
			},
			bProductList(){
				this.$router.push({ name: 'bProductList'})
			},
			supplierList(){
				this.$router.push({ name: 'supplierList'})
			},
			customers_list(){
				this.$router.push({ name: 'customList'})
			},
			signdealer(){
				this.$router.push({ name: 'intentionDealers', query: { status0:1}})
			},
			intention(){
				this.$router.push({ name: 'signedDealers', query: { status0:0}})
			},
			surreAddress: function(obj) {
				this.addsiteObj = obj;
				this.searchObj.cityId=obj.id;
				this.searchObj.cityIdName=obj.name
				this.addsiteshow = !this.addsiteshow
			},
			
			surreDealer:function  (obj) {
				this.searchObj.dealerId=obj.id;
				this.searchObj.dealerName=obj.companyName
				this.dealersearchshow=!this.dealersearchshow
			},
			
			//订单查询
			
			clicksearch:function  () {
				var searchobj=this.searchObj
				
				/*searchObj: {
					startTime: "",
					endTime: "",
					cityId:"",
					cityIdName:"",
					condation:"",
					dealerId:"",
					dealerName:""

				}*/
				
				var startTime=searchobj.startTime;
				var endTime=searchobj.endTime;
				var cityId=searchobj.cityId;
				var dealerId=searchobj.dealerId
				
				var pathurl = ""

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

				console.log(pathurl)
				
			}
		},

		components: {

			support: support,
			floors: floor,
			Address: address,
			Dealersearch:Dealersearch

		},

		mounted: function() {

		}
	}
</script>

<style src='./../assets/css/index.css'></style>

<style>

</style>