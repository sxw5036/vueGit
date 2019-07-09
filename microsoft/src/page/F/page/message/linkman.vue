<template>

	<div>
		<header class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">联系人</h1>
		</header>

		<div id="pullrefresh" class="mui-content mui-scroll-wrapper">

			<div class="mui-scroll">

				<div class="linkman_head" style="position: relative;">
					<div class="head_nav" id="head_nav">
						<input @focus="inputFocus" @blur="inputBlur" type="search" name="" id="" value="" />
						<span><img src="../../assets/music.png"/>搜索</span>
						<small><img src="../../assets/music.png"/></small>
					</div>
				</div>

				<div class="linkman_nav">

					<ul class="linkman_lsit">
						<li class="linkman_item">
							<div class="portrait">
								<img src="../../assets/music.png" />
							</div>

							<div class="user_msg">
								<h3>杜占强<span>15838627111</span></h3>
								<div class="notes">
									<p>请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</p>
								</div>
							</div>
						</li>

						<li class="linkman_item">
							<div class="portrait">
								<img src="../../assets/music.png" />
							</div>

							<div class="user_msg">
								<h3>杜占强<span>15838627111</span></h3>
								<div class="notes">
									<p>请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</p>
								</div>
							</div>
						</li>

						<li class="linkman_item">
							<div class="portrait">
								<img src="../../assets/music.png" />
							</div>

							<div class="user_msg">
								<h3>杜占强<span>15838627111</span></h3>
								<div class="notes">
									<p>请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</p>
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
	import mui from '@/assets/js/mui.js'

	/**
	 * 下拉刷新具体业务实现
	 */
	function pulldownRefresh() {
		setTimeout(function() {
			var table = document.body.querySelector('.linkman_lsit');
			var cells = document.body.querySelectorAll('.linkman_item');
			for(var i = cells.length, len = i + 3; i < len; i++) {
				var li = document.createElement('li');
				li.className = 'linkman_item';
				li.innerHTML = '<div class="portrait"><img src="../../assets/music.png"/></div><div class="user_msg"><h3>杜占强' + (i + 1) + '<span>15838627111</span></h3><div class="notes"><p>请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</p></div></div>';
				//下拉刷新，新纪录插到最前面；
				table.appendChild(li, table.firstChild);
			}
			mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
		}, 1500);
	}
	var count = 0;
	/**
	 * 上拉加载具体业务实现
	 */

	function pullupRefresh() {

		axios({
			method: 'get',

			url: '/api/f/cities?levelType=1'

		}).then(function(res) {
			mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2));
			console.log(res.data.data)

		}).catch(function(err) {
			console.log(err)

		})

		/*setTimeout(function() {
			mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
			var table = document.body.querySelector('.linkman_lsit');
			var cells = document.body.querySelectorAll('.linkman_item');
			for (var i = cells.length, len = i + 5; i < len; i++) {
				var li = document.createElement('li');
				li.className = 'linkman_item';
				li.innerHTML = '<div class="portrait"><img src="../../assets/music.png"/></div><div class="user_msg"><h3>杜占强'+(i+1)+'<span>15838627111</span></h3><div class="notes"><p>请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</p></div></div>';
				table.appendChild(li);
			}
		}, 1500);*/
	}

	export default {

		name: 'message',

		data() {
			return {
				count: 0
			}
		},

		methods: {
			inputFocus: function() {
				document.getElementById("head_nav").setAttribute("class", "ac head_nav");
			},

			inputBlur: function() {
				document.getElementById("head_nav").setAttribute("class", "head_nav");
			},

			/**
			 * 下拉刷新具体业务实现
			 */
			pulldownRefresh: function() {
				setTimeout(function() {
					var table = document.body.querySelector('.linkman_lsit');
					var cells = document.body.querySelectorAll('.linkman_item');
					for(var i = cells.length, len = i + 3; i < len; i++) {
						var li = document.createElement('li');
						li.className = 'linkman_item';
						li.innerHTML = '<div class="portrait"><img src="../../assets/music.png"/></div><div class="user_msg"><h3>杜占强' + (i + 1) + '<span>15838627111</span></h3><div class="notes"><p>请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</p></div></div>';
						//下拉刷新，新纪录插到最前面；
						table.appendChild(li, table.firstChild);
					}
					mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
				}, 1500);
			},

			/**
			 * 上拉加载具体业务实现
			 */

			pullupRefresh: function() {

				var that = this

				this.axios({
					method: 'get',

					url: '/api/f/cities?levelType=1'

				}).then(function(res) {
					that.mui('#pullrefresh').pullRefresh().endPullupToRefresh((++that.count > 2));
					console.log(res.data.data)

				}).catch(function(err) {
					console.log(err)

				})

				/*setTimeout(function() {
					mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
					var table = document.body.querySelector('.linkman_lsit');
					var cells = document.body.querySelectorAll('.linkman_item');
					for (var i = cells.length, len = i + 5; i < len; i++) {
						var li = document.createElement('li');
						li.className = 'linkman_item';
						li.innerHTML = '<div class="portrait"><img src="../../assets/music.png"/></div><div class="user_msg"><h3>杜占强'+(i+1)+'<span>15838627111</span></h3><div class="notes"><p>请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</p></div></div>';
						table.appendChild(li);
					}
				}, 1500);*/
			}

		},

		mounted: function() {

			var that = this

			mui.init({
				pullRefresh: {
					container: '#pullrefresh',
					down: {
						style: 'circle',
						callback: that.pulldownRefresh
					},
					up: {
						contentrefresh: '正在加载...',
						callback: that.pullupRefresh
					}
				}
			})

			this.axios({
				method: 'get',

				url: '/api/f/customers'

			}).then(function(res) {

				console.log(res.data.data)

			}).catch(function(err) {
				console.log(err)

			})
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

<style src='./../../assets/css/message.css'></style>

<style>

</style>