<template>

	<div>
		<div id="pullrefresh" class="mui-content mui-scroll-wrapper">

			<div class="mui-scroll">

				<div class="finance_nav  listshow1">

					<!--		<header class="mui-bar mui-bar-nav mui-bar-transparent" data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
	<h1 class="mui-title">标题</h1>
</header>-->

					<div class="finance_statistics listshow2">

						<div class="finance_list  ">
							<ul>
								<li class="left" style="padding-top: 0.65rem;">
									<p><span><img src="../../assets/img/finance/todayIncome.png" /></span>今日收入</p>
								</li>
								<li class="right" style="padding-top: 0.65rem;">
									<p><span>￥</span>{{report.income}}</p>
								</li>

								<li class="left">
									<p><span><img src="../../assets/img/finance/todayExpend.png" /></span>今日支出</p>
								</li>
								<li class="right">
									<p style="color: #63678D;"><span>￥</span>{{report.outlay}}</p>
								</li>

								<li class="left" style="border-bottom: none; 	padding-bottom: 0.6rem;">
									<p><span><img src="../../assets/img/finance/todyprofit.png" /></span>今日盈余</p>
								</li>
								<li class="right">
									<p style="color: #000000;"><span>￥</span>{{(report.income)-(report.outlay)}}</p>
								</li>

							</ul>
						</div>

					</div>

					<!--检索-->

					<div class="finance_search">
						<div class="searching" style="padding: 0rem;">
							<div class="nav">
								<div class="title">
									<img class="icon" src="../../assets/img/search.png" />
									<p>检索</p>
								</div>

								<div class="form_nav">

									<ul>
										<li class="linkBlock">
											<div class="linkBlock_item select">
												<p>开始时间 {{searchObj.beginTime}}</p>
												<input class="hide" v-model="searchObj.beginTime" type="date" name="" id="" />
												<span class="select_icon"><img src="../../assets/img/calendar.png" /></span>
											</div>
											<div class="linkBlock_item select">
												<p>结束时间 {{searchObj.endTime}}</p>
												<input class="hide" v-model="searchObj.endTime" type="date" name="" id="" />
												<span class="select_icon"><img src="../../assets/img/calendar.png" /></span>
											</div>
										</li>

										<li class="linkBlock" style="height: 2rem;">
											<div class="linkBlock_item select" style="height: 1rem;">
												<p v-show="searchObj.type == ''">请选择收支</p>
												<!--<input class="hide" v-model="searchObj.begin" type="date" name="" id="" />-->
												<select style="background: none; " class="hide" v-model="searchObj.type" @change="getfunds(searchObj.type)">
													<option :key="index" :value="item.id" v-for="(item,index) in fundsdataAll">{{item.name}}</option>
												</select>

												<span class="select_icon"><img src="../../assets/img/finance/xljt.png" /></span>
											</div>
											<div class="linkBlock_item select">
												<p v-show="searchObj.funds == '' || searchObj.funds == null">请选择一级科目 </p>
												<select style="background: none;" class="hide" v-model="searchObj.funds" @change="getsecondfunds(searchObj.funds)">
													<option :key="index" :value="item.id" v-for="(item,index) in fundsdata">{{item.name}}</option>
												</select>
												<span class="select_icon"><img src="../../assets/img/finance/xljt.png" /></span>
											</div>
										</li>

										<li class="linkBlock" v-show="secondfundsdata.length!=0||thirdlyfundsdata.length!=0">
											<div class="linkBlock_item select" v-show="secondfundsdata.length!=0">
												<p>请选择二级科目</p>
												<!--<input class="hide" v-model="searchObj.begin" type="date" name="" id="" />-->

												<select class="hide" v-model="searchObj.secondfunds" @change="getthirdlyfunds(searchObj.secondfunds)">
													<option  :key="index" :value="item.id" v-for="(item,index) in secondfundsdata">{{item.name}}</option>
												</select>

												<span class="select_icon"><img src="../../assets/img/finance/xljt.png" /></span>
											</div>
											<div class="linkBlock_item select" v-show="thirdlyfundsdata.length!=0">
												<p>请选择三级科目 </p>
												<select class="hide" v-model="searchObj.thirdlyfunds" @change="getfourthlyfunds(searchObj.thirdlyfunds)">
													<option :key="index" :value="item.id" v-for="(item,index) in thirdlyfundsdata">{{item.name}}</option>
												</select>
												<span class="select_icon"><img src="../../assets/img/finance/xljt.png" /></span>
											</div>
										</li>

										<!--<li class="input_s">
											<div class="but">
												<select name="">
													<option value=""></option>
												</select>
											</div>
											<div class="but"> 货款收入</div>
										</li>-->

									</ul>

								</div>

								<button class="search_but" @click="clicksearch">查询</button>
							</div>
						</div>
					</div>

					<div class="finance_listNav">

						<div class="finance_list" v-for="(item,index) in dataArry" :key='index' @click="changePath(item)">
							<!--<router-link :to="{name:'financelistdetails',query:{type:'1'}}">-->
							<div class="list_H">
								{{item.typeName}} <span>{{item.created}}</span>
							</div>

							<div class="item_list" style="margin-top: 0.5rem;">
								<div class="iconAndtxet">
									科目
								</div>
								<div class="c">
									<div class="cn">
										<!---->
										<div class="list_msg">{{item.fundsName}}</div>
										<!---->
									</div>
								</div>
							</div>

							<div class="item_list">
								<div class="iconAndtxet">金额</div>
								<div class="c">
									<div class="cn">
										<!---->
										<div class="list_msg">{{item.amount}}</div>
										<!---->
									</div>
								</div>
							</div>

							<div class="item_list">
								<div class="iconAndtxet">经手人</div>
								<div class="c">
									<div class="cn">
										<!---->
										<div class="list_msg">{{item.operatorName}}&nbsp;</div>
										<!---->
									</div>
								</div>
							</div>

							<div class="item_list" style="padding-top: 0.2rem;">
								<div class="iconAndtxet" style="padding-top: 0.2rem;">支付时间</div>
								<div class="c">
									<div class="cn">
										<!---->
										<div class="list_msg">{{item.paymentDate}}</div>
										<!---->
									</div>
								</div>
							</div>

							<!--</router-link>-->
						</div>

					</div>

				</div>
			</div>

		</div>

		<div class="finance_but" style="z-index: 9;">
			<ul>
				<li>
					<router-link :to="{name:'newfinance',query:{type:'2'}}"><img src="../../assets/img/finance/newExpend.png" />新建支出</router-link>
				</li>
				<li>
					<router-link :to="{name:'newfinance',query:{type:'1'}}"><img src="../../assets/img/finance/newIncome.png" />新建收入</router-link>
				</li>
			</ul>
		</div>
		<div id="backtop ">
			<span class="backtop">
				<img :class='isOk?classA:classB'  @click="scrollTop()" src="../../assets/img/back-top.png" />
			</span>
		</div>
		<!-- <Backtop></Backtop> -->

	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '../../assets/js/mui.js'
	// import backtop from '../../components/backtop.vue'
	export default {

		name: 'financelist',

		data() {
			return {
				isOk:false,
				classA:'currentBackTop',
				classB:"currentBack",
				report: {
					income: "",
					outlay: "",
				},
				apiCount: 0,
				fundsdata: [],
				secondfundsdata: [],
				thirdlyfundsdata: [],
				fundsdataAll: [],

				searchObj: {
					beginTime: "",
					endTime: "",
					fund: "",
					type: "",
					funds: "",
					secondfunds: "",
					typethirdlyfunds: ""
				},
				isSearch: false,

				dataArry: [],
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
			}
		},
		// 
		// 		components: {
		// 
		// 			Backtop: backtop,
		// 
		// 		},

		methods: {
			scrollTop(){
				   this.isOk = !this.isOk
			},
			
			getfunds: function(type) {
				this.searchObj.fund = "";
				this.searchObj.funds = "";
				this.searchObj.secondfunds = "";
				this.searchObj.thirdlyfunds = ""
				this.secondfundsdata = [];
				this.thirdlyfundsdata = [];
				this.searchObj.amount = "";
				this.searchObj.operator = "";
				this.searchObj.paymentDate = "";
				this.searchObj.notes = "";
				this.searchObj.files = []

				for (var i = 0; i < this.fundsdataAll.length; i++) {
					if (type == this.fundsdataAll[i].id) {
						this.fundsdata = this.fundsdataAll[i].items
						console.log(this.fundsdata + "111")
					}


				}

			},

			getsecondfunds: function(id) {

				this.searchObj.fund = "";
				this.searchObj.secondfunds = ""
				this.searchObj.thirdlyfunds = ""
				this.secondfundsdata = [];
				this.thirdlyfundsdata = [];

				for (var i = 0; i < this.fundsdata.length; i++) {

					if (id == this.fundsdata[i].id) {

						if (!this.fundsdata[i].items) {
							this.searchObj.fund = id
							this.secondfundsdata = []
						} else {
							this.secondfundsdata = this.fundsdata[i].items

						}
					}

				}

			},

			getthirdlyfunds: function(id) {

				this.searchObj.fund = "";
				this.searchObj.thirdlyfunds = ""
				this.thirdlyfundsdata = [];
				for (var i = 0; i < this.secondfundsdata.length; i++) {

					if (id == this.secondfundsdata[i].id) {

						if (!this.secondfundsdata[i].items) {
							this.searchObj.fund = id
							this.thirdlyfundsdata = []
						} else {
							this.thirdlyfundsdata = this.secondfundsdata[i].items

						}
					}

				}
			},

			getfourthlyfunds: function(id) {
				this.searchObj.fund = "";
				for (var i = 0; i < this.thirdlyfundsdata.length; i++) {

					if (id == this.thirdlyfundsdata[i].id) {

						if (!this.thirdlyfundsdata[i].items) {
							this.searchObj.fund = id

						}
					}

				}

			},

			//检索

			clicksearch: function() {
				this.isSearch = false
				var searchobj = this.searchObj

				var type = searchobj.type
				var funds = searchobj.fund
				var beginTime = searchobj.beginTime
				var endTime = searchobj.endTime

				if (type == "" && funds == "" && endTime == "" && beginTime == "") {
					this.newData();

					return false;
				} else {
					this.pageIndex = 1
					this.searchData()
				}

			},

			//调用检索api接口
			searchData: function() {

				var searchobj = this.searchObj

				var type = searchobj.type
				var funds = searchobj.fund
				var beginTime = searchobj.beginTime
				var endTime = searchobj.endTime

				var pathurl = ""

				if (type != "" && type != null && type.length != 0) {
					pathurl += 'type=' + type + "&"
				}

				if (funds != "" && funds != null && funds.length != 0) {
					pathurl += 'funds=' + funds + "&"
				}

				if (beginTime != "" && beginTime != null) {
					pathurl += 'beginTime=' + beginTime + "&"
				}

				if (endTime != "" && endTime != null) {
					pathurl += 'endTime=' + endTime + "&"
				}

				var that = this

				this.axios({
					method: 'get',
					url: '/wxapi/f/paymentSimples?' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {

					if (Isjurisdiction.isright(res, that) == false) {
						return false
					}

					if (that.isSearch == false) {
						that.dataArry = [];
						var data = res.data
						that.dataArry = data.data

					} else if (that.isSearch == true) {
						var data = res.data.data

						for (var i = 0; i < data.length; i++) {
							that.dataArry.push(data[i])
						}

					}
					that.mui('#pullrefresh').pullRefresh().endPullupToRefresh();
					that.pageIndextotal = data.pagination.pages
					that.isSearch = true

				}).catch(function(err) {

					console.log(err)

				})
			},

			//刷新数据

			newData: function() {
				this.isSearch = false
				this.searchObj = {

						"type": "",
						"fund": "",
						"funds": "",
						"secondfunds": "",
						"thirdlyfunds": "",
						"Time": "",
						"beginTime": "",
						"endTime": "",
					},
					this.pageIndex = 1
				this.getData()

			},

			changePath: function(obj) {

				this.$router.push({
					name: 'financelistdetails',
					query: {
						id: obj.id
					}
				})

			},

			/**
			 * 下拉刷新具体业务实现
			 */
			pulldownRefresh: function() {
				this.pageIndex = 1
				this.getData()
			},

			/**
			 * 上拉加载具体业务实现
			 */

			pullupRefresh: function() {

				let that = this

				this.pageIndex++

				if (this.pageIndex > this.pageIndextotal) {
					this.mui('#pullrefresh').pullRefresh().endPullupToRefresh();
					this.mui.toast("没有更多数据了", {
						duration: 'long',
						type: 'div'
					})

					return false;
				}

				if (this.isSearch == true) {
					this.searchData()

				} else {

					this.axios({
						method: 'get',

						url: '/wxapi/f/paymentSimples?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize

					}).then(function(res) {

						that.mui('#pullrefresh').pullRefresh().endPullupToRefresh();

						if (Isjurisdiction.isright(res, that) == false) {
							return false
						}

						var data = res.data.data

						for (var i = 0; i < data.length; i++) {
							that.dataArry.push(data[i])
						}

					}).catch(function(err) {
						console.log(err)
						that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //取消上拉加载*/
						that.mui.toast("请求失败请稍后重试" + err, {
							duration: 'long',
							type: 'div'
						})

					})

				}

			},

			getData: function() {
				let that = this
				this.axios({
					method: 'get',
					url: '/wxapi/f/paymentSimples?pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize

				}).then(function(res) {
					that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //取消下拉刷新
					that.mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
					if (Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.dataArry = [];
					var data = res.data
					that.dataArry = data.data
					console.log(that.dataArry)
					that.pageIndextotal = data.pagination.pages
					that.loadingfinish();
				}).catch(function(err) {
					console.log(err)
					that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //取消下拉刷新
					that.mui.toast("请求失败请稍后重试" + err, {
						duration: 'long',
						type: 'div'
					})
				})
			},

			loadingfinish: function() {
				let that = this
				that.apiCount++;
				if (that.apiCount == 3) {
					mui.hideLoading();
				}
			}
		},

		mounted: function() {
			mui.showLoading("正在加载..", "div");
			var that = this
			mui.init({
				pullRefresh: {
					container: '#pullrefresh',
					down: {
						style: 'circle',
						callback: that.pulldownRefresh,
						auto: true,
					},
					up: {
						contentrefresh: '正在加载...',
						callback: that.pullupRefresh
					}
				}
			})
			mui("#pullrefresh").on('tap', '.finance_list', function(event) {
				this.click();
			});
			this.axios({
				method: 'get',
				url: '/wxapi/f/paymentSimples/viewIndex',

			}).then(function(res) {
				console.log(res)
				if (Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data.data
				that.report = data.report
				that.loadingfinish();
			}).catch(function(err) {
				mui.hideLoading();
				that.mui.toast("请求失败请稍后重试" + err, {
					duration: 'long',
					type: 'div'
				})

			})
			this.axios({
				method: 'get',
				url: '/api/f/payment_simples/funds',
			}).then(function(res) {
				if (Isjurisdiction.isright(res, that) == false) {
					return false
				}
				var data = res.data
				that.fundsdataAll = data.data
				that.loadingfinish();
			}).catch(function(err) {
				mui.hideLoading();
				console.log(err)
				that.mui.toast("请求失败请稍后重试" + err, {
					duration: 'long',
					type: 'div'
				})

			})


		},

		created: function() {
			for (var i = mui.hooks.inits.length - 1, item; i >= 0; i--) {

				item = mui.hooks.inits[i];
				if (item.name == "pullrefresh") {
					item.repeat = true;
				}
			}

		},
		// 
		//          window.onscroll=function () {
		//              //鼠标滚轮滚动距离超过10像素时，回到顶部按钮才显示
		//              if(document.documentElement.scrollTop>10){
		//                  this.toTopIsShow=true;
		//              }else{
		//                  this.toTopIsShow=false;
		//              }
		//          }

	}
</script>

<style scoped="scoped" src='./../../assets/css/financelist.css'></style>

<style scoped="scoped">
	.backtop {
		position: fixed;
		z-index: 99;
		right: 0.5rem;
		bottom: 3rem;
		height: 2rem;
		width: 2rem;
		
	}

	.backtop img {
		display: block;
		width: 100%;
		height: 100%;
		
	}
	.currentBackTop{
		transform: translate(0rem,0rem);
		-ms-transform: translate(0rem,0rem); /* IE 9 */
		-webkit-transform: translate(0rem,0rem); /* Safari and Chrome */
	}
	.currentBack{
		
	}
	
	
	
	
	.finance_list {
		display: block;
		width: 100%;
	}

	.finance_list ul {
		display: inline-block;
		width: 100%;
	}

	.finance_list ul li {
		width: 50%;
		float: left;
		display: block;
		padding: 1.15rem 0rem;
		box-sizing: border-box;
	}

	.finance_list ul li p {
		height: 1rem;
		line-height: 1rem;
	}

	.finance_list ul li.left {
		font-size: 0.7rem;
		text-align: center;
		border-right: 0.025rem solid rgba(0,0,0,.2);
		border-bottom: 0.025rem solid rgba(0,0,0,.2);
	}

	.finance_list ul li.left:last-child {
		border: none;
		padding-bottom: 0.8rem;
	}

	.finance_list ul li.left p {
		display: inline-block;
		margin: 0px auto;
		color: #000000;
	}

	.finance_list ul li.left span {
		float: left;
		width: 0.95rem;
		float: left;
		margin-right: 0.6rem;
	}

	.finance_list ul li.left span img {
		display: block;
		width: 100%;
	}

	.finance_list ul li.right {
		font-size: 0.9rem;
		text-align: center;
		border-bottom:0.025rem solid rgba(0,0,0,.2);
	}

	.finance_list ul li.right:last-child {
		border: none;
		padding-bottom: 0.6rem;
	}

	.finance_list ul li.right p {
		display: inline-block;
		margin: 0px auto;
		color: #CC0202;
		font-size: 0.9rem;
	}

	.finance_list ul li.right span {
		font-size: 0.6rem;
		font-weight: bold;
	}

	.finance_nav {
		padding: 0.5rem;
	}



	.finance_list {
		display: block;
		width: 100%;
		background: white;
		padding: 0.5rem 0.5rem;

		border-radius: 0.4rem;

		overflow: hidden;
		margin-bottom: 0.5rem;


	}

	.finance_list a {
		color: #000000;
	}



	.finance_list .list_H {
		padding-bottom: 0.5rem;
	}


	.finance_list .list_H span {
		float: right;
		color: #bbbbbb;
	}

	.finance_list .item_list {
		position: relative;
		display: block;
		width: 100%;
		margin-bottom: 1.02rem;
	}


	.finance_list .item_list:last-child {
		margin-bottom: 0rem;
	}



	.finance_list .item_list .iconAndtxet {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 2.04rem;
		height: 2.04rem;



	}


	.finance_list .item_list .iconAndtxet img.icon {

		width: 100%;
		margin-right: 0.5rem;
		float: left;

	}



	.finance_list .item_list .c {
		padding-left: 2.04rem;

	}

	.finance_list .item_list .c .cn {
		margin-left: 0.5rem;
		border-bottom:0.025rem solid rgba(0,0,0,.2);
		min-height: 1.04rem;
	}


	.finance_list .item_list:last-child .c .cn {
		border: none;

	}










	/**/

	.finance_statistics {

		border-radius: 0.2rem;
	}

	.finance_statistics .finance_list {
		padding: 0.7rem 0.5rem;
		background: white;
	}


	.finance_statistics .statistics_nav p.statistics_title {
		font-size: 0.7rem;
		color: #000000;
		margin: 0px;
	}


	.finance_statistics .statistics_nav .statistics_title span {
		float: right;
		font-size: 0.9rem;
		color: #CC0202;
		font-weight: 500;
	}


	.finance_statistics .statistics_nav .statistics_title span small {
		font-size: 0.7rem;
	}




	.finance_statistics .progressbar {
		margin: 0.5rem 0rem;
	}


	.finance_statistics .statistics_nav.expend .statistics_title span {
		color: #63678D;
	}

	.finance_statistics .statistics_nav.profit .statistics_title span {
		color: #bbaf8d;
	}




	.finance_search {
		margin: 0.5rem 0rem
	}


	.finance_listNav .finance_list .list_H {
		color: #9f7d4f;
		font-size: 0.9rem;
		line-height: 1rem;
	}

	.finance_listNav .finance_list .list_H span {
		font-size: 0.6rem;
	}

	.finance_listNav .finance_list .item_list .iconAndtxet {
		font-size: 0.7rem;
		width: 5rem;
	}


	.finance_listNav .list_msg {
		font-size: 0.7rem;
		color: #636363;
		padding-left: 0.9rem;
		padding-bottom: 0.8rem;
	}



	.finance_but {
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 50px;
		background: white;
	}


	.finance_but ul {
		font-size: 0px;
		width: 100%;
	}


	.finance_but ul li {
		float: left;
		width: 50%;

		text-align: center;
		line-height: 50px;
		font-size: 0.6rem;
		color: #636363;
	}

	.finance_but ul li img {
		float: left;
		width: 18px;
		margin-right: 8px;
		margin-top: 14px;



	}


	.finance_but ul li a {
		color: #636363;
		display: inline-block;
		margin: 0px auto;

	}

	/**/


	.finance_listdetails {
		padding: 0.5rem;
	}


	.finance_listdetails .finance_list .item_list .iconAndtxet {
		width: 6.15rem;
		font-size: 0.7rem;
		line-height: 0.7rem;
	}


	.finance_listdetails .finance_list .item_list .iconAndtxet .icon {
		width: 0.7rem;

	}

	.finance_listdetails .finance_list .item_list .c {
		padding-left: 6.15rem;
	}


	.finance_listdetails .list_msg {
		padding-bottom: 0.8rem;
		font-size: 0.7rem;
		color: #636363;
	}

	.finance_listdetails .item_list:last-child .list_msg {
		padding: 0px;
	}


	.finance_listdetails .finance_list .item_list {
		margin-bottom: 0.8rem;
	}


	.newfinance {
		padding: 0.5rem;
	}

	.newfinance .ik_form_nav {
		padding-right: 1rem;
	}

	.newfinance .ik_form_nav .form_item .lable {
		font-size: 0.7rem;
		color: #000000;
	}




	.newfinance .operation {
		display: block;
		width: 100%;

		font-size: 0.6rem;
		line-height: 0.6rem;
		color: #000000;
		padding-top: 1rem;
		border-top: dashed 1px #b1b1b1;
	}



	.newfinance .operation span small {
		color: #636363;
	}

	.mui-content {
		padding: 0;
	}

	.search_but {
		background: linear-gradient(90deg, rgba(185, 172, 133, 1) 0%, rgba(126, 116, 91, 1) 100%);
		box-shadow: 0 0.35rem 0.9rem 0 rgba(245, 192, 152, 0.3);
		border-radius: 0 0 0.25rem 0.25rem;
	}
</style>
