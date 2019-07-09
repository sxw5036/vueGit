<template>

	<div v-show="show==true">
		
		<header  class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
				<span @click="cancel" class=" mui-icon mui-icon-back "></span>
				<h1 class="mui-title">选择经销商</h1>
			</header>

		<div id="pullrefresh" class="mui-content mui-scroll-wrapper" >
			

			<div class="mui-scroll">
				
				

				<div class="linkman_head" >
					<div class="head_nav" id="head_nav">
						<input @focus="inputFocus" style="text-align: left;" type="search" @keydown="inSearch" name="" id="" v-model="searchObj.name" />
						<span><img src="../assets/music.png"/>请输入经销商姓名</span>
						<small><img src="../assets/music.png"/></small>
					</div>
				</div>

				<div class="linkman_nav">

					<ul class="linkman_lsit">
						<li class="linkman_item mui-table-view-cell" :key='index'  style="border: none;" v-for="(item,index) in dataArry"  >
                          <!--   <div class="mui-slider-right mui-disabled">
						<a class="mui-btn mui-btn-red" style="font-size: 0.7rem;" @click="sure(item)">选择</a>
					</div> -->
							<div class="user_msg mui-slider-handle" @click="sure(item)" >
								<h3>{{item.companyName}}<span>{{item.dealerMobile}}</span></h3>
								<div class="notes">
									<p>{{item.mergerName}}</p>
								</div>
							</div>
						</li>

					</ul>
				</div>

			</div>
		</div>

	</div>

</template>

<script>
	import axios from 'axios'
	import mui from './../assets/js/mui.js'

	export default {

		name: 'Dealersearch',
props: ['show'], //接受从其他页面传过来的值
		data() {
			return {
				searchObj: {
					name: ""
				},
				isSearch: false,
				dataArry: [],
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
			}
		},

		methods: {
			
			//选中经销商
			
			sure:function  (obj) {
				this.$emit('sure', obj)
			},
			
			cancel: function() {

				this.$emit('cancel')
			},
			
			inputFocus: function() {
				document.getElementById("head_nav").setAttribute("class", "ac head_nav");
			},

			inputBlur: function() {
				document.getElementById("head_nav").setAttribute("class", "head_nav");
			},
			//搜索
			inSearch: function() {

				if(event.keyCode == 13 && this.searchObj.name.trim().length == 0) {
					mui.toast("搜索内容不能为空", {
						duration: 'long',
						type: 'div'
					})
					return false

				} else if(event.keyCode == 13) {
					this.isSearch = false;
					this.pageIndex = 1;
					this.searchData()
				}

			},

			//调用检索api接口
			searchData: function() {

				var searchobj = this.searchObj

				var name = searchobj.name

				var pathurl = ""

				if(name != "" && name != null && name.length != 0) {
					pathurl += 'condation=' + name + "&"
				}

				var that = this

				this.axios({
					method: 'get',
					url: '/wxapi/f/branchs/dealers?status0=1&' + pathurl + 'pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize,

				}).then(function(res) {

					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}

					if(that.isSearch == false) {
						that.dataArry = [];
						var data = res.data
						that.dataArry = data.data.companyDto

					} else if(that.isSearch == true) {
						var data = res.data.data.companyDto

						for(var i = 0; i < data.length; i++) {
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

					if(this.pageIndex > this.pageIndextotal) {
						this.mui('#pullrefresh').pullRefresh().endPullupToRefresh();
						this.mui.toast("没有更多数据了", {
							duration: 'long',
							type: 'div'
						})

						return false;
					}

				if(this.isSearch == true) {
					this.searchData()

				} else {

					this.axios({
						method: 'get',

						url: '/wxapi/f/branchs/dealers?status0=1&pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize

					}).then(function(res) {

						that.mui('#pullrefresh').pullRefresh().endPullupToRefresh();

						if(Isjurisdiction.isright(res, that) == false) {
							return false
						}

						var data = res.data.data.companyDto

						for(var i = 0; i < data.length; i++) {
							that.dataArry.push(data[i])
						}

					}).catch(function(err) {
						console.log(err)
						that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //取消上拉加载*/
//						that.mui.toast("请求失败请稍后重试" + err, {
//							duration: 'long',
//							type: 'div'
//						})

					})

				}

			},

			getData: function() {
				let that = this

				this.axios({
					method: 'get',

					url: '/wxapi/f/branchs/dealers?status0=1&pageNum=' + this.pageIndex + '&pageSize=' + this.pageSize

				}).then(function(res) {
					that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //取消下拉刷新
					that.mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
					if(Isjurisdiction.isright(res, that) == false) {
						return false
					}
					that.dataArry = [];
					var data = res.data
					that.dataArry = data.data.companyDto
					that.pageIndextotal = data.pagination.pages

				}).catch(function(err) {
//					console.log(err)
					that.mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //取消下拉刷新
//					that.mui.toast("请求失败请稍后重试" + err, {
//						duration: 'long',
//						type: 'div'
//					})

				})
			}

		},

		mounted: function() {

			var that = this

			mui.init({
				pullRefresh: {
					container: '#pullrefresh',
					down: {
						style: 'circle',
						callback: that.pulldownRefresh,
						auto: true
					},
					up: {
						contentrefresh: '正在加载...',
						callback: that.pullupRefresh
					}
				}
			});

			mui("#pullrefresh").on('tap', 'a', function(event) {
				this.click();
			});

		},

		created: function() {
			for(var i = mui.hooks.inits.length - 1, item; i >= 0; i--) {

				item = mui.hooks.inits[i];
				if(item.name == "pullrefresh") {
					item.repeat = true;
				}
			}

		}

	}
</script>

<style>
	.message_list {
		padding: 0.5rem;
	}
	
	.message_list ul {
		display: block;
	}
	
	.message_list ul li {
		display: block;
		border-radius: 0.4rem;
		padding: 0.5rem;
		margin-bottom: 0.5rem;
		background: white;
		position: relative;
	}
	
	.message_list ul li:last-child {
		margin-bottom: 0px;
	}
	
	.message_list ul li .portrait {
		position: absolute;
		top: 1.4rem;
		left: 0.45rem;
		width: 2.4rem;
		height: 2.4rem;
		display: table-cell;
		vertical-align: middle;
		border-radius: 50%;
		overflow: hidden;
	}
	
	.message_list ul li .portrait img {
		display: table-cell;
		vertical-align: middle;
		display: block;
		width: 100%;
	}
	
	.message_list ul li .user_msg {
		padding-left: 4.5rem;
	}
	
	.message_list ul li .user_msg h3 {
		font-size: 0.8rem;
		color: #000000;
		margin: 0px;
		line-height: 0.8rem;
		padding-bottom: 0.5rem;
		border-bottom: solid 1px rgb(237, 237, 237);
		margin-bottom: 0.5rem;
		box-sizing: border-box;
	}
	
	.message_list ul li .user_msg h3 span {
		float: right;
		font-size: 0.6rem;
		color: #BBBBBB;
		font-weight: 100;
	}
	
	.message_list ul li .user_msg .notes {
		min-height: 1.7rem;
		font-size: 0.7rem;
		color: #636363;
		line-height: 1.5em;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		display: -webkit-box;
	}
	
	.message_list ul li .user_msg .notes span {
		color: #D01818;
		margin: 0rem 0.5rem;
	}
	
	.message_list .linkman_but {
		position: fixed;
		bottom: 0.5rem;
		right: 0.5rem;
		width: 50px;
		height: 50px;
		background: white;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	
	.message_list .linkman_but img {
		display: block;
		width: 100%;
		padding: 10px;
	}
	
	.linkman_head {
		display: block;
		width: 100%;
		padding: 0.75rem 1rem;
		background: white;
		z-index: 9;
	}
	
	.linkman_head .head_nav {
		position: relative;
		display: block;
		width: 100%;
		height: 1.4rem;
		background: #EFEFEF;
		text-align: center;
		border-radius: 1.4rem;
		margin: 0px;
		overflow: hidden;
		font-size: 0px;
	}
	
	.linkman_head .head_nav input {
		margin: 0px;
		display: block;
		width: 100%;
		height: 1.4rem;
		position: absolute;
		top: 0px;
		left: 0px;
		padding-left: 1.5rem;
		line-height: 1.4rem;
	}
	
	.linkman_head .head_nav span {
		display: inline-block;
		font-size: 0.6rem;
		line-height: 0.6rem;
		padding: 0.4rem 0rem;
	}
	
	.linkman_head .head_nav span img {
		display: block;
		width: 0.6rem;
		float: left;
	}
	
	.linkman_head .head_nav small {
		display: none;
		font-size: 0.6rem;
		line-height: 0.6rem;
		padding: 0.4rem 0rem;
		margin-left: 0.5rem;
	}
	
	.linkman_head .head_nav small img {
		display: block;
		width: 0.6rem;
		float: left;
	}
	
	.linkman_head #head_nav.ac span {
		display: none;
	}
	
	.linkman_head #head_nav.ac small {
		display: block;
	}
	
	.linkman_nav {
		padding: 0.5rem;
	}
	
	.linkman_nav ul {
		display: block;
		width: 100%;
	}
	
	.linkman_nav ul li {
		position: relative;
		padding: 1rem 0.5rem;
		border-radius: 0.4rem;
		margin-bottom: 0.5rem;
		background: white;
	}
	
	
	.linkman_nav ul li.mui-table-view-cell:after{
		background: none !important;
	}
	
	.linkman_nav ul li .portrait {
		position: absolute;
		left: 0.5rem;
		top: 1rem;
		width: 2.4rem;
		height: 2.4rem;
	}
	
	.linkman_nav ul li .portrait img {
		display: block;
		width: 100%;
	}
	
	.linkman_nav ul li .user_msg {
		position: relative;
		height: 2.4rem;
	}
	
	.linkman_nav ul li .user_msg h3 {
		font-size: 0.8rem;
		font-weight: 500;
		margin: 0px;
	}
	
	.linkman_nav ul li .user_msg h3 span {
		float: right;
	}
	
	.linkman_nav ul li .user_msg .notes {
		position: absolute;
		left: 0rem;
		bottom: 0px;
		font-size: 0.6rem;
		color: #636363;
	}
	
	.linkman_nav ul li .user_msg .notes p {
		margin: 0px;
		width: 13rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>