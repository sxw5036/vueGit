<template>
	
	<div id="messages">
	     <ul class="tab-tilte">
            <li @click="cur=0" ><span :class="{active:cur==0}">公告</span></li>
            <li @click="cur=1" ><span :class="{active:cur==1}">订单</span></li>
            <li @click="cur=2" ><span :class="{active:cur==2}">聊天</span></li>
			<div class="clearfix"></div>
            
        </ul>
		<keep-alive>
        <div class="tab-content">
            <div class="content_show" v-show="cur==0">
				<ul>
					<li style="padding: 0 0.5rem;margin-bottom: 0.5rem;" @click="gotoxq()" >
						<div style="border-radius: 0.25rem; width: 100%; background-color: white; padding: 0.5rem;">
							<div style="width: 20%; float: left;">
								<img style="width: 90%; margin-left: 5%;margin-top: 5%;" src="../../assets/img/statement/finance.png" />
							</div>
							<div style="width: 80%; float: left;">
								<div style="margin-top: 0.7rem;">
									<div style="width: 44%; float: left; text-align: left; margin-left: 6%;">活动</div>
									<div style="width: 48%; float: right; text-align: right; font-size: 0.6rem; color: #636363; margin-right:2% ;">05-28 17:57</div>
									<div class="clearfix" ></div>
								</div>
								<p style="width: 94%; text-align: left; margin-left: 6%; margin-top: 0.2rem;color: #636363; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> 2018年众筹会于6月31号召开</p>
							</div>
							<div class="clearfix"></div>
						</div>
					</li>
					
				</ul>
			</div>
            <div class="content_show" v-show="cur==1">
				<ul>
					<li style="padding: 0 0.5rem;margin-bottom: 0.5rem;" v-for="item in orderList">
						<div style="border-radius: 0.25rem; width: 100%; background-color: white; ">
							<div style="padding: 0.5rem; border-bottom: 0.05rem solid #f2f2f2;">
								<div style="width: 8%;float: left; margin-top: 0.1rem; "><img  src="../../assets/img/statement/finance.png" /></div>
								<div style="width: 62%; float: left; line-height: 1.2rem; font-size: 0.7rem;">{{item.name}}<span>【{{item.community}}】</span></div>
								<div style="width: 27%; float: right; text-align: right; font-size: 0.6rem; color: #636363;margin-right:3%;">{{item.orderCreated}}</div>
								<div class="clearfix"></div>
							</div>
							<div style="padding: 0.5rem;">
								<div style="color: #636363; font-size: 0.7rem;">订单编号<span style="color: blue; text-decoration:underline">{{item.orderNo}}</span>{{item.content}}</div>
								<div style="margin-top: 0.5rem; ">
									<div style="width: 50%; float: left;  font-size: 0.6rem; color: #636363;">操作人：<span>{{item.operateName}}</span></div>
									<div style="width: 47%; float: right; text-align: right; font-size: 0.6rem; color: #636363;;margin-right:3%;">操作时间：<span>{{item.operateTime}}</span></div>
									<div class="clearfix"></div>
								</div>
							</div>
						</div>
					</li>
					
				
				</ul>
			</div>
            <div class="content_show" v-show="cur==2">
				<div style="padding: 0.5rem 0.5rem;">
					<!-- <div style="text-align: center; padding-top: 10rem;">
						<img src="../../assets/img/message/jingqingqd.png" />
					</div> -->
					<div class="bodyC">
						<div id="box">
							<ul id="ulcontent" style="margin-bottom: 6rem;">
								<li v-for="(item,index) in datamsg "  :key='index'  >
									  
									<div v-show="item.direct==2"  >
										<p style="padding-bottom: 0; margin-bottom: 0.3rem; text-align: left;  margin-right: 3rem;">{{item.created.substring(5,16)}}</p>
										<div style="width:auto; height: 2rem; text-align: left; margin-right: 0.5rem;">
											<img src="../../assets/music.png" style=" vertical-align: top; width: 2rem; height: 2rem; border-radius: 50%;" /><span style=" margin-right: 0.5rem; padding: 0.5rem; display: inline-block; background-color: white; border-radius: 0.5rem;  height:auto;">{{item.message}}</span>
										</div>
									</div>
									<div v-show="item.direct==1"  >
										<p style="padding-bottom: 0; margin-bottom: 0.3rem; text-align: right;  margin-left: 3rem;">{{item.created.substring(5,16)}}</p>
										<div style="width:auto; height: 2rem; text-align: right; margin-left: 0.5rem;">
											<span style=" margin-left: 0.5rem; padding: 0.5rem; display: inline-block; background-color: white; border-radius: 0.5rem;  height:auto;">{{item.message}}</span><img src="../../assets/music.png" style=" vertical-align: top; width: 2rem; height: 2rem; border-radius: 50%;" />
											
										</div>
									</div>
								</li>
								
								<li ></li>
							</ul>
						</div>
						<div style="width: 100%; height: auto; padding-bottom: 0.3rem; padding-top: 0.5rem; position: fixed; left: 0; bottom: 3rem; background-color: white;">
						<span style="margin:0  2%; width: 8.4%;"><img  style=" width: 8.4%; vertical-align: top;" src="../../assets/xiangji.png" /> </span><span style="margin-right: 0.2rem;"><textarea id="content" v-model="chatmsg" style=" font-size: 0.75rem; height: 1.5rem;  margin-bottom: 0; padding: 0.2rem 2%; width: 68%; border-radius: 1rem;"></textarea></span><span><button style= " display: inline-block; border: none;background:#BFE6FF; border-radius: 1rem; width: 16%; color: white; font-size: 0.7rem;  " id="release" @click="sendBtn()" >发送</button> </span>
						</div>
					</div>
				</div>
			</div>
           
        </div>
		</keep-alive>
	
			<floors :btmuacindex="1"></floors>
	</div>
	
</template>

<script>
		function $(id){
			return document.getElementById(id);
		}
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'
	import floor from '@/components/B_bottom.vue'
	export default {
		name: 'messages',

		data() {

			return {
					direct:1,
					type:1,
                   cur:0 ,//默认选中第一个tab
				   orderList:[],
				   datamsg:'',
				   infoCompanyId:"",
				   chatmsg:'',
				   infotoUser:'',
				   infoBranchID:""
				   
				
			}

		},
		components: {

			floors: floor,

		},

	
		methods: {
			getmsgdata(){
				var that=this
					that.axios({
					method: 'get',
					url: '/wxapi/f/companyMessages/messageList?companyId='+that.infoCompanyId
			
				}).then(function(res) {
					console.log(res)
					that.datamsg=res.data.data.data
					// that.datamsg1=res.data.data.data.csreated
				
				
				}).catch(function(err) {
					
					console.log(err)
				
				})
			},
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
				console.log(that.infoBranchID)
				console.log(that.infoCompanyId)
				console.log(that.direct)
				console.log(that.infotoUser)
				console.log(that.chatmsg)
				console.log(that.type)
				that.axios({
					method: 'post',
					data:{
						branchId:that.infoBranchID,
						companyId:that.infoCompanyId,
						direct:1,
						fromUser:that.infofromUser,
						toUser:that.infotoUser,
						message:that.chatmsg,
						type:1
					},
					url: '/wxapi/b/companyMessages/sendMessage'
				}).then(function(res) {
					
					console.log(res)
					
				}).catch(function(err) {
					
					console.log(err)
				
				})
				
				
			},
				gotoxq(){
					 	this.$router.push({ name: 'Bpublicnotice'})
				},
				getnoticedatas(){			
				   let that = this;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/dealers/addCustomer'
				}).then(res => {
					   console.log(res)
					   that.dealerList=res.data.data
					   
				      
			  
				 })
			},
			getorderdatas(){			
				   let that = this;
				   that.axios({
					method: 'get',
					url: '/wxapi/b/orders/messageOrders'
				}).then(res => {
					   console.log(res)
					   that.orderList=res.data.data.map;

				 })
			},
			
			 
		},
		mounted: function() {
				// this.getnoticedatas()
		        this.getorderdatas();
				var that =this
			
				that.axios({
					method: 'get',
					url: '/wxapi/b/dealers/loginUserInfo'
				}).then(function(res) {
					console.log("AAA")
					console.log(res)
					console.log("AAA")
					
					that.infoCompanyId=res.data.data.companyId
					console.log(that.infoCompanyId)
					that.infoBranchID=res.data.data.branchId
					that.infotoUser=res.data.data.userId
					that.infofromUser=res.data.data.fromUser
					
					that.getmsgdata()
				
				
				}).catch(function(err) {
					
					console.log(err)
				
				})
				
			

		}
		

	}
	
</script>

<style scoped="scoped">
	 ul li {

            margin: 0;
            padding: 0;
            list-style: none;
        }
        #messages {
            width: 100%;
            height: auto;
            margin: 0 auto;
            
        }
        .tab-tilte{
             width: 100%;
			 background-color:white;
			 margin-top:0.05rem;
        }
        .tab-tilte li{
            float: left;
            width: 33.33%;
            padding: 0.8rem 0;
            text-align: center;
            cursor: pointer;
			color: #333333;
			
			
        }
		.tab-tilte li span{
			padding-bottom: 0.65rem;
		}
     /* 点击对应的标题添加对应的背景颜色 */
        .tab-tilte .active{
            /* background-color: #09f;
            color: #fff; */
			border-bottom: 0.1rem solid #FF8F3A;
			box-sizing: border-box;
			
        }
		 .tab-content{
			 margin-top: 0.5rem;
		 }
        .tab-content .content_show{
            width: 100%;
        }
		.clearfix{
			clear: both;
		}
		
		.bodyC{
			position: relative;
			width: 100%;
			height: auto;
		}
		
		
</style>