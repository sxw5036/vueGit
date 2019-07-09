<template>

	<div id="bodynav">

		<div class="message_list">

			<ul>

				<li>
					<div class="portrait">
						<img src="../../assets/music.png" />
					</div>

					<div class="user_msg">
						<h3>杜占强<span>5-28 20:51</span></h3>
						<div class="notes">请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</div>
					</div>

				</li>

				<li>
					<div class="portrait">
						<img src="../../assets/music.png" />
					</div>

					<div class="user_msg">
						<h3>杜占强<span>5-28 20:51</span></h3>
						<div class="notes"><span>[系统]</span>请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</div>
					</div>

				</li>

			</ul>
		<!-- 	<ul>
				
				<li v-for=" (item,index) in dataArry" :key="index" @click="changePath">
					<div class="portrait">
						<img src="../../../F/assets/img/custom/custom_kh.png"/>
					</div>
					
					<div class="user_msg">
						<h3>{{item.fromUserName}}<span v-if="item.cityName!=''&item.cityName!=null">【{{item.cityName}}】</span><span class="createtime">{{item.created}}</span></h3>
						<div class="notes">{{item.message}}</div>
					</div>
					
				</li>
				
			</ul> -->
		<div class="linkman_but">
      		<router-link to="/B/message/linkman">
      		<img src="../../../F/assets/img/linkman.png"/>
      		</router-link>
      	</div>

		</div>
		<floors :btmuacindex="1"></floors>

	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'
	import floor from '@/components/B_bottom.vue'

	export default {

		name: 'message',

		data() {
			return {
				apiCount:0,
				dataArry: [],
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0,
				
			}
		},

		components: {

			floors: floor,

		},

		methods: {

		},

		mounted: function() {
			mui.init()
			this.axios({
				method: 'get',
				url: '/wxapi/b/companyMessages/messageList'
			}).then(function(res) {
				 // that.$refs.tipshow.alertshow(5)
				console.log(res)
				
				
			}).catch(function(err) {
				//console.log(err)
			
			})
		}
	}
</script>

<style src='./../../assets/css/message.css'></style>

<style>

</style>