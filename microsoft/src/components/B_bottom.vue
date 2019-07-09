<template>
	<div id="bottom">
		<div class="bottom_mu">
			<ul>
				<li style="width: 33.33%;" :class="{btmuac:btmuacindex==0}">
					<router-link to="/B">
						<span >
						<img style="width: 80%;margin: 0px auto;" src="../assets/img/floor_index.png"/>
					</span>
						<small>
					<img style="width: 80%; margin: 0px auto;" src="../assets/img/floor_indexAc.png"/>
					</small>
						<p>主页</p>
					</router-link>
				</li>
				<li style="width: 33.33%;" :class="{btmuac:btmuacindex==1}">
					<router-link to="/B/message/messages">
						<span>
						<img style="padding: 4px 7px;" src="../assets/img/floor_msg.png"/>
					</span>
						<small>
						<img style="padding: 4px 7px;"  src="../assets/img/floor_msgAc.png"/>
					</small>
						<p>消息</p>
					</router-link>

				</li>

				
				<li style="width: 33.33%;" :class="{btmuac:btmuacindex==2}">
					<router-link to="/B/bmy/bmy">
						<span>
						<img style="padding: 4px 7px;" src="../assets/img/floor_me.png"/>
						</span>
						<small>
							<img style="padding: 4px 7px;" src="../assets/img/floor_meAc.png"/>
						</small>
						<p>我的</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {

		name: 'bottom',
		props: ['btmuacindex'],
		data() {
			return {
				flooBox: [{
					"title": "商品类别",
					"herf": "/trolley",
					"type": false,
					"fMulist": [{
							"fMulistname": "全部商品",
							"iconName": "所有",
							"href": "all",

						},

					]
				}, {
					"title": "购物车",
					"herf": "/trolley",
					"type": false,
					"fMulist": []
				}, {
					"title": "个人中心",
					"type": false,
					"herf": "/user",
					"fMulist": [

					]
				}, ]
			}
		},

		methods: {
			Bomoresh: function(index) {

				if(this.flooBox[index].type == false) {
					for(var i = 0; i < this.flooBox.length; i++) {
						this.flooBox[i].type = false
					}

					this.flooBox[index].type = true
				} else {
					for(var i = 0; i < this.flooBox.length; i++) {
						this.flooBox[i].type = false
					}
					this.flooBox[index].type = false
				}
			},

			shopclass: function() {
				this.$router.push({
					name: 'all',
					query: {
						name: " "
					}
				})
			}
		},

		mounted: function() {

		}
	}
</script>

<style>

</style>