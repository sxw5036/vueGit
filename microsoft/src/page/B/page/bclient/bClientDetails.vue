<template>
	<div id="bClientDetails">
			<div class="Details_top">
				<p style="padding-left: 0.6rem;"  ><img style="vertical-align: top; width: 0.9rem; height:1 rem; " src="../../assets/img/bclient/dingdan.png" /><span style="display: inline-block; margin-left: 0.3rem; color: #000000; font-size: 0.7rem; font-weight: 500; ">最近订单</span><span @click="getOrders" style="display: inline-block; color: rgba(99,99,99,0.8); font-size: 0.6rem; margin-left: 9rem; margin-right: 0.5rem;">更多订单</span><span>></span>  </p>
				<p style="color: #000000; padding-left: 2.5rem;">订单<span style="color: #33A8FF; text-decoration：underline;	">{{data.orderId}}</span>{{data.orderProductType}},贷款<span style="color: red;">¥</span>{{data.orderAmount}}&nbsp;元</p>
				<!-- <p class="p1"><span class="s1"><img src="../../assets/img/bclient/dingdan.png" style=" margin-top: 0.rem; width: 0.8rem; height: 0.875rem;" /> </span><span class="s2">最近订单</span>  <span class="s3" @click="getOrders">更多订单</span><span class="s4">></span> </p>
				<p class="p2">订单<span class="s1">{{data.orderId}}</span><span class="s2">{{data.orderProductType}}</span>,贷款<span class="s3">¥<span></span></span>元</p> -->
			</div>
			<div class="Details_center">
				<ul>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/xingming.png" style="width:0.85rem  ; height: 0.9rem;" /> </span><span class="xiahuaxian"> <span>姓名</span> <span class="content">{{data.customerName}}</span> </span>
					</li>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/zjdh.png" style ="width:0.85rem  ; height: 0.8rem;" /> </span><span class="xiahuaxian"> <span>电话</span> <span class="content">{{data.customerMobile}}</span></span>
					</li>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/xingbie.png" style ="width:0.85rem  ; height: 1rem; padding-left: 0.1rem;" /> </span><span class="xiahuaxian" style="width: 15rem;"> <span>性别</span> <span class="content"> {{data.sex}} </span>  </span>
					</li>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/diqu.png" style ="width:0.85rem  ; height: 0.85rem;" /> </span><span class="xiahuaxian"> <span>地区</span> <span class="content">{{data.customerMergerName}}</span> </span>
					</li>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/dizhi.png" style ="width:0.8rem  ; height: 0.9rem;" /> </span><span class="xiahuaxian"> <span>地址</span> <span class="content">{{data.customerAddress}}</span> </span>
					</li>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/fangzi.png" style ="width:0.8rem  ; height: 0.9rem;" /> </span><span class="xiahuaxian"> <span>小区</span> <span class="content">{{data.community}}</span> </span>
					</li>
					<li>
						<span class="beizhuzong"  ><img src="../../assets/img/bclient/xiugai.png" style ="width:0.75rem  ; height: 0.7rem;" /> <span class="beizhu">备注</span> </span ><textarea style="color: #636363;" :value="data.remarks"></textarea> 
					</li>
				</ul>
			</div>
			<div class="Details_bottom">
				<ul>
					<li>
						<span><img src="../../assets/img/bclient/dianpu.png" style="width: 0.85rem; height: 0.9rem;" /> </span><span class="bottom_xiahuaxian"><span>店铺名称</span> <span class="shopname">{{data.companyName}}</span> </span>
					</li>
					<li>
						<span><img src="../../assets/img/bclient/xingming.png" style="width: 0.85rem; height: 0.9rem;" /> </span><span class="bottom_xiahuaxian"><span>业务经理</span> <span class="contentyewujingli">{{data.saleMan}}</span></span>
					</li>
					<li>
						<span><img src="../../assets/img/bclient/zjdh.png" style="width: 0.85rem; height: 0.8rem;" /> </span><span class="bottom_xiahuaxian"><span>电话</span> <span class="shoptel">{{data.saleManMobile}}</span> </span>
					</li>
				</ul>
			</div>
		</div>
	</template>
	
	<script >
		export default {
			name: 'bClientDetails',
		
			data() {
		
				return {
					data:[]
		
				}
		
			},
		
		
			methods: {
				
				getOrders:function  () {
					
					this.$router.push({
					name: 'Borderlist',
					query: {
						delearId: 0
					}
				})
					
				}
		
			},
			mounted: function() {
				var customerId=this.$route.query.id
							
							var that = this
							this.axios({
								method: 'get',
				
								url: '/wxapi/b/companyCustomers/'+ customerId
				
							}).then(function(res) {
								that.data = res.data.data;
				
							
				// 
				// 				for (var i = 0; i < 2; i++) {
				// 					that.dept.push(that.depts[i])
				// 				}
				
								console.log(res.data)
								
							}).catch(function(err) {
								console.log(err)
				
							})
		
			}
			/**/
		
		}
	</script>
	
	<style scoped="scoped">
		#bClientDetails{
			position: absolute;
			width: 100%;
			height: 100%;
		}
		
		/* 上部开始 */
		.Details_top{
			padding-top: 0.8rem;
			width: 17.75rem;
			height: 4rem;
			border-radius: 0.25rem;
			background: white;
			margin: 0.5rem 0.5rem 0rem 0.5rem;
		}
		
		/* 上部结束 */
		/* 中部开始 */
		
		.Details_center{
			padding-top: 0.5rem;
			width: 17.75rem;
			height: auto;
			background-color: white;
			border-radius: 0.25rem;
			margin: 0.75rem 0.5rem 0  0.5rem;
		}
		.Details_center>ul>li{
			padding-top: 0.2rem;
			height: 2.2rem;
			
		}
		
		
		.Details_center>ul>li:last-child{
			position: relative;
			height: auto;
		}
		.Details_center>ul>li textarea{
			color: rgba(99,99,99,0.5);
			margin:0rem 0rem 0.5rem 6.9rem ;
			padding: 0rem 0.5rem 0rem 0rem;
			width: 10.5rem;
			height: 3rem;
			border: none;
			font-size: 0.65rem;
		}
		.Details_center>ul>li>.beizhuzong{
			position: absolute;
			top:0.5rem ;
			display: inline-block;
			margin-left: 0.8rem;
		}
		.Details_center>ul>li .beizhu{
			font-size: 0.65rem;
			margin-left: 0.7rem;
		}
		.Details_center>ul>li .simg{
			margin-left: 0.75rem;
		}
		.Details_center>ul>li .xiahuaxian{
			width: 15rem;
			display: inline-block;
			margin-left: 0.925rem;
			padding-bottom: 0.5rem;
			border-bottom: 1px solid rgba(99,99,99,0.2);
		}
		.Details_center>ul>li .xiahuaxian>span{
			height: 0.65rem;
			font-size: 0.65rem;
			padding-bottom: 0.8rem;
		}
		.content{
			display: inline-block;
			margin-left: 2.825rem;
			color: rgba(99,99,99,1);
		}/* 中部结束 */
		/* 下部开始 */
		.Details_bottom{
			padding-top:0.5rem ;
			height: 6.65rem;
			width: 17.75rem;
			border-radius: 0.25rem;
			background-color: white;
			margin: 0.75rem 0.5rem 0 0.5rem;
		}
		.Details_bottom>ul>li{
			
			padding-top: 0.2rem;
			height: 2rem;
		}
		.contentyewujingli{
			display: inline-block;
			margin-left: 1.7rem ;
		}
		.Details_bottom>ul>li>span{
			margin-left: 0.825rem;
		}
		.Details_bottom>ul>li>span>span{
			font-size:0.65rem ;
		}
		.bottom_xiahuaxian{
			width:15rem ;
			display: inline-block;
			padding-bottom: 0.5rem;
			border-bottom: 1px solid rgba(99,99,99,0.2);
		}
		.shopname{
			margin-left: 1.7rem;
			font-size: 0.625rem;
		}
		.shoptel{
			margin-left: 2.95rem;
			color: rgba(99,99,99,1);
		}
		.Details_bottom>ul>li:last-child .bottom_xiahuaxian{
			border: none;
		}
		/* 下部结束 */
		
	</style>
	