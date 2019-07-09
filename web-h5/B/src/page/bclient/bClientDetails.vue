<template>
	<div id="bClientDetails">
			<div class="Details_top">
				<p class="p1"><span class="s1"><img src="../../assets/img/bclient/dingdan.png" style=" margin-top: 0.rem; width: 0.8rem; height: 0.875rem;" /> </span><span class="s2">最近订单</span>  <span class="s3">更多订单</span><span class="s4">></span> </p>
				<p class="p2">订单<span class="s1">{{data.orderId}}</span><span class="s2">{{data.orderProductType}}</span>,贷款<span class="s3">¥<span>{{data.orderAmount}}</span></span>元</p>
			</div>
			<div class="Details_center">
				<ul>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/xingming.png" style="width:0.85rem  ; height: 0.9rem;" /> </span><span class="xiahuaxian"> <span>姓名</span> <span class="content">{{data.customerName}}</span> </span>
					</li>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/zjdh.png" style ="width:0.85rem  ; height: 0.7rem;" /> </span><span class="xiahuaxian"> <span>电话</span> <span class="content">{{data.customerMobile}}</span></span>
					</li>
					<li>
						<span class="simg"><img src="../../assets/img/bclient/xingbie.png" style ="width:0.75rem  ; height: 0.9rem;" /> </span><span class="xiahuaxian" style="width: 15rem;"> <span>性别</span> <span class="content"> {{data.sex}} </span>  </span>
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
						<span class="beizhuzong"  ><img src="../../assets/img/bclient/xiugai.png" style ="width:0.75rem  ; height: 0.7rem;" /> <span class="beizhu">备注</span> </span ><textarea :src="data.remarks"></textarea> 
					</li>
				</ul>
			</div>
			<div class="Details_bottom">
				<ul>
					<li>
						<span><img src="../../assets/img/bclient/dianpu.png" style="width: 0.85rem; height: 0.75rem;" /> </span><span class="bottom_xiahuaxian"><span>店铺名称</span> <span class="shopname">{{data.companyName}}</span> </span>
					</li>
					<li>
						<span><img src="../../assets/img/bclient/xingming.png" style="width: 0.85rem; height: 0.75rem;" /> </span><span class="bottom_xiahuaxian"><span>业务经理</span> <span class="contentyewujingli">{{data.saleMan}}</span></span>
					</li>
					<li>
						<span><img src="../../assets/img/bclient/zjdh.png" style="width: 0.85rem; height: 0.7rem;" /> </span><span class="bottom_xiahuaxian"><span>电话</span> <span class="shoptel">{{data.saleManMobile}}</span> </span>
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
		
		.Details_top .p1{
			position: relative;
			
		}
		.Details_top .p1 .s1{
			display: inline-block;
			position: absolute;
			top: 0.05rem;
			left: 0.6rem;
		}
		.Details_top .p1 .s2{
			margin-left: 1.6rem;
			font-size: 0.675rem;
			color: #000000;
		}
		.Details_top .p1 .s3{
			margin-left: 9.3rem;
			color: rgba(99,99,99,1);
			font-size: 0.575rem;
		}
		.Details_top .p1 .s4{
			margin-left: 0.4rem;
			font-size: 0.575rem;
		}
		.Details_top .p2 {
			width: 12.5rem;
			margin: 0 auto;
			font-size:0.675rem ;
			color: rgba(99,99,99,1);
		}
		.Details_top .p2 .s1{
			margin: 0 0.2rem;
			font-size: 0.7rem;
			font-weight:500;
			text-decoration:underline;
			color:rgba(51,168,255,1);
		}
		.Details_top .p2 .s3{
		
			color: #FF0000;
			margin: 0rem 0.2rem;
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
	