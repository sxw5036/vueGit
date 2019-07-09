<template>
	<div id="bmy">
		<div class="bmytop">
			<div class="dizhi">{{data.cityName}}</div>
			<div class="xinxi">
				<img  :src="data.avatar" style="width: 3rem; height: 3rem; border-radius: 50%;"/>
				<div>
					<p class="p1">{{data.dealerName}}</p>
					<p class="p2">{{data.name}}</p>
				</div>
			</div>
		</div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<router-link :to="{name:'mycenter'}">
				<a class="mui-navigate-right"><span class="spimg"><img src="../../assets/img/bClient/shenfen.png" style="width: 0.775rem; height: 0.75rem;" /></span><span class="grxx">个人信息</span></a>
				</router-link>
			</li>
			<li class="mui-table-view-cell">
					<router-link :to="{name:'security'}">
				<a class="mui-navigate-right"><span class="spimg"><img src="../../assets/img/bClient/anquan.png" style="width: 0.775rem; height: 0.75rem;" /></span><span class="grxx">账号安全</span></a>
					</router-link>
			</li>
			<li class="mui-table-view-cell">
					<router-link :to="{name:'myhelp'}">
				<a class="mui-navigate-right"><span class="spimg"><img src="../../assets/img/bClient/bangzhu.png" style="width: 0.775rem; height: 0.75rem;" /></span><span class="grxx">使用帮助</span></a>
			</router-link>
				</li>
			<li class="mui-table-view-cell">
					<router-link :to="{name:'myabout'}">
				<a class="mui-navigate-right"><span class="spimg"><img src="../../assets/img/bClient/banquan.png" style="width: 0.75rem; height: 0.75rem;" /></span><span class="grxx">版权信息</span></a>
				</router-link>
			</li>
		</ul>
		<div class="btn"  >
			<button>退出登录</button>
		</div>
	</div>
</template>

<script >
	import axios from 'axios';
	
	
	export default {
		name: 'bmy',

		data() {

			return {
				data:[]

			}

		},
		methods: {
			
			
		},
		mounted: function() {
				var that=this
				this.axios({
					method: 'get',
					
					url: '/wxapi/b/dealers'
				
				}).then(function(res) {
					that.data=res.data.data;
					console.log(res.data.data)
				
				}).catch(function(err) {
					console.log(err)
				
				})

		}
		/**/

	}
</script>

<style scoped="scoped">
	.mui-table-view:after{ height:0}
	.mui-table-view:before{ height:0}
	.bmytop{
		position: relative;
		margin: 0.5rem;
		width: 17.75rem;
		height: 9.025rem;
		background:linear-gradient(0deg,rgba(46,46,46,1) 0%,rgba(54,54,54,1) 100%);
		border-radius:0.25rem;
	}
	.dizhi{
		position: absolute;
		top: 0.675rem;
		right: 0.425rem;
		background:rgba(159,142,92,1);
		border-radius: 0.625rem;
		text-align: center;
		width: 3.825rem;
		height: 1.25rem;
		color:rgba(255,255,255,0.5);
		line-height: 1.25rem;
		font-size: 0.625rem;
	}
	.xinxi{
		margin-left: 1.15rem;
		padding-top: 3.225rem;
	}
	.xinxi>img{
		float: left;
		
	}
	.xinxi>div{
		margin-left: 1.45rem;
		float: left;
	}
	.xinxi .p1{
		font-family:PingFang-SC-Bold;
		font-size: 0.85rem;
		color: rgba(184, 172, 133, 1);
		font-weight:bold;
	}
	.xinxi .p2{
		font-size: 0.725rem;
		color: rgba(255, 255, 255, 0.5);
	}
	#bmy>ul{
		margin: 0.5rem;
		border: none;
		border-radius: 0.25rem;
		width: 17.75rem;
		height: 12.5rem;
	}
	.spimg{
		display: inline-block;
		margin-right: 0.6rem;
		padding-top:0.1rem ;
		
	}
	.grxx{
		vertical-align: top;
		color: black;
	}
	#bmy>ul>li{
		color: black;
		padding-top: 0.75rem;
		padding-left: 1rem;
		height: 3.125rem;
		font-size:0.8rem ;
		
	}
	.btn{
		padding-top: 1.3rem;
		width:17.75rem;
		height:3.3rem;
		margin: 0 auto;
	}
	.btn button{
		
		width:17.75rem;
		height:2rem;
		background:linear-gradient(90deg,rgba(188,175,136,1) 0%,rgba(126,116,90,1) 100%);
		box-shadow:0rem 0.175rem 0.35rem 0.05rem  rgba(159,125,79,0.22);
		border-radius:0.25rem;
		color: white;
		font-size: 0.775rem;
	}
</style>
