<template>

	<div id="bodynav">
      
      <div class="message_list">
      	
      	<ul>
      		
      		<li>
      			<div class="portrait">
      				<img src="../../assets/music.png"/>
      			</div>
      			
      			<div class="user_msg">
      				<h3>杜占强<span>5-28 20:51</span></h3>
      				<div class="notes">请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</div>
      			</div>
      			
      		</li>
      		
      		
      		<li>
      			<div class="portrait">
      				<img src="../../assets/music.png"/>
      			</div>
      			
      			<div class="user_msg">
      				<h3>杜占强<span>5-28 20:51</span></h3>
      				<div class="notes"><span>[系统]</span>请给奇瑞小区做的衣柜请把握下尺寸,4m改成3.8m</div>
      			</div>
      			
      		</li>
      		
      	</ul>
      	
      	<div class="linkman_but">
      		<router-link to="/message/linkman">
      		<img src="../../assets/music.png"/>
      		</router-link>
      	</div>
      	     	
      </div>


	</div>

</template>

<script>
	import axios from 'axios'
	import mui from '../../assets/js/mui.js'

	export default {

		name: 'message',

		data() {
			return {

			}
		},

		methods: {

		},

		mounted: function() {
			mui.init()
		}
	}
</script>

<style src='./../../assets/css/message.css'></style>

<style>

</style>