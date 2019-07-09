<template>
	<div id="chatBoard">
		<header class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
			<a style="color: #000000;" class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">{{fromUserName}}</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">
		
		</div>
		<div class="bodyC">
			<div id="box">
				<ul id="ulcontent" style="margin-bottom: 3rem;">
					<li v-for="(item,index) in datamsg "  :key='index'  >
						  
						<div v-show="item.direct==2" style="margin-top: 0.5rem;"  >
							<p style="padding-bottom: 0; margin-bottom: 0; text-align: right;  margin-right: 3rem;">{{item.created.substring(5,16)}}</p>
							<div style="width:auto; height: 2rem; text-align: right; margin-right: 0.5rem;">
								<span style=" margin-right: 0.5rem; padding: 0.5rem; display: inline-block; background-color: white; border-radius: 0.5rem;  height:auto;">{{item.message}}</span><img src="../../assets/music.png" style=" vertical-align: top; width: 2rem; height: 2rem; border-radius: 50%;" />
							</div>
						</div>
						<div v-show="item.direct==1" style="margin-top: 0.5rem;"  >
							<p style="padding-bottom: 0; margin-bottom: 0; text-align: left;  margin-left: 3rem;">{{item.created.substring(5,16)}}</p>
							<div style="width:auto; height: 2rem; text-align: left; margin-left: 0.5rem;">
								<img src="../../assets/music.png" style=" vertical-align: top; width: 2rem; height: 2rem; border-radius: 50%;" />
								<span style=" margin-left: 0.5rem; padding: 0.5rem; display: inline-block; background-color: white; border-radius: 0.5rem;  height:auto;">{{item.message}}</span>
							</div>
						</div>
					</li>
					
					<li ></li>
				</ul>
			</div>
			<div style="width: 100%; height: auto; padding-bottom: 0.3rem; padding-top: 0.5rem; position: fixed; left: 0; bottom: 0; background-color: white;">
			<span style="margin:0  2%; width: 8.4%;"><img  style=" width: 8.4%; vertical-align: top;" src="../../assets/xiangji.png" /> </span><span style="margin-right: 0.2rem;"><textarea id="content" v-model="chatmsg" style=" font-size: 0.75rem; height: 1.5rem;  margin-bottom: 0; padding: 0.2rem 2%; width: 68%; border-radius: 1rem;"></textarea></span><span><button style= " display: inline-block; border: none;background:#BFE6FF; border-radius: 1rem; width: 16%; color: white; font-size: 0.7rem;  " id="release" @click="sendBtn()" >发送</button> </span>
			</div>
		</div>
	</div>
</template>

<script>
		function $(id){
				return document.getElementById(id);
			}
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'
	export default {
		name: 'chatBoard',
	
		data() {
	
			return {
				datamsg:"",
				chatmsg:"",
				direct:2,
				type:1,
				branchId:'',
				companyId:'',
				fromUser:'',
				toUser:'',
				toUserName:'',
				fromUserName:''
			}
	
		},
	
	
		methods: {
			sendBtn(){
				var that=this
				var btn=$("release");
				var textArea=$("content");
				var box=$("box");
				var ul=$("ulcontent");
				
				
					//1获取输入的值
				var content=textArea.value;
				//获取之后要及时清除原值
				textArea.value="";
				if(content==""){
					that.mui.toast("请输入信息", {
						duration: 'long',
						type: 'div'
					})
					return false
				}
				var li=document.createElement("li");
				li.innerHTML='<div style="margin-top: 0.5rem;" >'+
						'<p style="padding-bottom: 0; margin-bottom: 0; text-align: right;  margin-right: 3rem;">'+'16:30'+'</p>'+
						'<div style="width:auto; height: 2rem; text-align: right; margin-right: 0.5rem;">'+
							'<span style=" margin-right: 0.5rem; padding: 0.5rem; display: inline-block; background-color: white; border-radius: 0.5rem;  height:auto;">'+content+'</span>'+'<img src="../../assets/music.png" style=" vertical-align: top; width: 2rem; height: 2rem; border-radius: 50%;" />'
						+'</div>'+'</div>';
				var childerenLi=ul.children;
				if (childerenLi.length<0) {
					ul.appendChild(li,ul);
				}else{
					ul.insertBefore(li,ul.lastChild);
				}
				//3.获取所有的a标签
				// var as=document.getElementsByTagName("a");
				// for (var i=0;i<as.length;i++) {
				// 	as[i].onclick=function(){
				// 		ul.removeChild(this.parentNode);
				// 	}
				// }
				console.log(that.fromUser)
				that.axios({
					
					method: 'post',
					data:{
						branchId:that.branchId,
						companyId:that.companyId,
						direct:that.direct,
						fromUser:that.fromUser,
						toUser:that.toUser,
						message:that.chatmsg,
						type:that.type
					},
					url: '/wxapi/f/companyMessages/sendMessage'
				}).then(function(res) {
					
					console.log(res)
					
				}).catch(function(err) {
					
					console.log(err)
				
				})
				
				
			}
		},
		mounted: function() {
			this.branchId = this.$route.query.branchId
			this.companyId = this.$route.query.companyId
			this.fromUser = this.$route.query.fromUser
			this.toUser = this.$route.query.toUser
			this.toUserName = this.$route.query.toUserName
			this.fromUserName = this.$route.query.fromUserName
			var that =this
			that.axios({
				method: 'get',
				url: '/wxapi/f/companyMessages/messageList?companyId='+that.companyId
			}).then(function(res) {
				console.log("111111")
				console.log(res)
				that.datamsg=res.data.data.data

			}).catch(function(err) {
				
				console.log(err)
			
			})
		}
		/**/
	
	}
</script>

<style  scoped="scoped">
	#chatBoard{
		position: absolute;
		height: auto;
		width: 100%;
	}
	.bodyC{
		position: relative;
		width: 100%;
		height: auto;
	}
	a{
		color: red;
	}
</style>
