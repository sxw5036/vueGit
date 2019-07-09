<template>

	<div id="bodynav">
      
      <div class="message_list">
      	
      	<ul>
      		
      		<li v-for=" (item,index) in dataArry" :key="index" @click="changePath">
      			<div class="portrait">
      				<img src="../../assets/img/custom/custom_kh.png"/>
      			</div>
      			
      			<div class="user_msg">
      				<h3>{{item.fromUserName}}<span v-if="item.cityName!=''&item.cityName!=null">【{{item.cityName}}】</span><span class="createtime">{{item.created}}</span></h3>
      				<div class="notes">{{item.message}}</div>
      			</div>
      			
      		</li>
      		
      	</ul>
      	
      	<div class="linkman_but">
      		<router-link to="/F/message/linkman">
      		<img src="../../assets/img/linkman.png"/>
      		</router-link>
      	</div>
      	     	
      </div>

     <floors :btmuacindex="1"></floors>
	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'
	import floor from '@/components/F_bottom.vue'

	export default {

		name: 'message',

		data() {
			return {
				apiCount:0,
				dataArry: [],
				pageIndex: 1, //分页页数
				pageSize: 10,
				pageIndextotal: 0
			}
		},
		
		components: {

			floors: floor,
		

		},

		methods: {
			
			
			changePath:function  () {
			 	
			 	this.$router.push({ name: 'Fchat'})
			 	
			 }

		},

		mounted: function() {
			let that = this;
			mui.init()
			this.axios({
				method: 'get',
				url: '/wxapi/f/companyMessages/messageList'
			}).then(function(res) {
				 // that.$refs.tipshow.alertshow(5)
				console.log(res.data)
				var data = res.data.data.data;
				 for (var i=0;i<data.length;i++){
				   that.dataArry.push(data[i]);
				} 
			}).catch(function(err) {
				//console.log(err)
			
			})
		}
	}
</script>

<style scoped="scoped" src='./../../assets/css/message.css'></style>

<style>

</style>