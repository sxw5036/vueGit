<template>
	<div id="bottom">
		<div class="bottom_mu">
			<ul>
				<li :class="{btmuac:btmuacindex==0}">
					<router-link to="/F">
						<span>
						<img src="../assets/img/floor_index.png"/>
					</span>
						<small>
					<img src="../assets/img/floor_indexAc.png"/>
					</small>
						<p>主页</p>
					</router-link>
				</li>
				<li :class="{btmuac:btmuacindex==1}">
					<router-link to="/F/message/index">
						<span>
						<img src="../assets/img/floor_msg.png"/>
					</span>
						<small>
						<img src="../assets/img/floor_msgAc.png"/>
					</small>
						<p>消息</p>
					</router-link>

				</li>

				<li :class="{btmuac:btmuacindex==2}">
					<router-link to="/F/statement/list">
						<span>
							<img src="../assets/img/floor_statement.png"/>
						</span>
						<small>
						<img src="../assets/img/floor_statementAc.png"/>
							
						</small>
						<p>报表</p>
					</router-link>
				</li>
				<li :class="{btmuac:btmuacindex==3}">
					<router-link to="/F/myplace">
						<span>
						<img src="../assets/img/floor_me.png"/>
						</span>
						<small>
							<img src="../assets/img/floor_meAc.png"/>
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