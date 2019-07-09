<template>
	
	<div id="customDep">
	   <div style="padding:0.5rem 0.5rem 0 0.5rem">
	   	<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
	   		<ul class="after_sale_title">
	   			<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/dealer/dealer_dep_zj.png"></li>
	   			<li style="line-height: 1rem; text-align: center; font-size: 0.8rem;  ">最近订单</li>
	   			<li style="line-height: 1rem; text-align: center; font-size: 0.6rem;  color: #baaf89; float: right; margin-right: 0.5rem; margin-top: 0.1rem;" @click="more_order">更多订单></li>
	   			<div class="clearfix"></div>
	   		</ul>
	   		<ul class="closer_order">
	   			<li style="margin-right: 4%; text-align: center; color: #636363; ">类型:<span style="color: black;margin-left: 0.2rem; ">
				  {{customdes.orderProductType}}</span>
				</li  >
	   			<li style="text-align: left; color: #636363; ">货款:<span style="color: black;margin-left: 0.2rem; ">{{customdes.orderAmount}}</span></li>
	   			<div class="clearfix"></div>
	   		</ul>
	   	</div>
	   </div>
			<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1.5rem; height: 1rem;"><img style="width: 90%;" src="../../assets/img/custom/custom_tt.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem; ">客户信息</li>
					<!-- <li style="width:0.9rem; height:0.9rem;line-height: 1rem; text-align: center; font-size: 0.6rem;  color: #baaf89; float: right; margin-right: 0.5rem;"><img style="width: 100%;" src="../../assets/img/dealer/dealer_dep_xg.png"></li> -->
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/custom/custom_xm.png">
							<span >姓名：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #727272;">&nbsp{{customdes.customerName}}</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.5rem;height: 0.8rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_tel.png">
							<span >电话：</span>
						</div>
						<a :href="'tel:' + customdes.saleManMobile"><div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #bdaf89;">{{customdes.customerMobile}}&nbsp;<span v-show="suppliertelImg"><img style="width:0.6rem ;height: 0.9rem; margin-left: 0.2rem;" src="../../assets/img/aftersale/as_y_tels.png"></span></div></a>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/custom/custom_xb.png">
							<span >性别：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #727272;">&nbsp{{customdes.sex}}</div>
						<div class="clearfix"></div>
					</li>
					
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_dq.png">
							<span >地区：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #727272;">&nbsp{{customdes.customerMergerName}}</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_dz.png">
							<span >地址：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #727272;">&nbsp{{customdes.customerAddress}}</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/custom/custom_xq.png">
							<span >小区：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #727272;">&nbsp{{customdes.community}}</div>
						<div class="clearfix"></div>
					</li>
					
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/custom/custom_bz.png">
							<span >备注：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 1px solid #dcdee2; word-break: break-all;color: #727272; ">
							&nbsp{{customdes.remarks}}
						</div>
						<div class="clearfix"></div>
					</li>
				</ul>
				
				
			</div>
		</div>
		
			<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 90%;" src="../../assets/img/custom/custom_yw.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem; ">业务信息</li>
					<!-- <li style="width:0.9rem; height:0.9rem;line-height: 1rem; text-align: center; font-size: 0.6rem;  color: #baaf89; float: right; margin-right: 0.5rem;"><img style="width: 100%;" src="../../assets/img/dealer/dealer_dep_xg.png"></li> -->
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/custom/custom_jxs.png">
							<span >经销商：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #727272;">&nbsp{{customdes.companyName}}</div>
						<div class="clearfix"></div>
					</li>
					
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/custom/custom_jl.png">
							<span >业务经理：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;color: #727272;">&nbsp{{customdes.saleMan}}</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.5rem;height: 0.7rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_tel.png">
							<span >电话：</span>
						</div>
					 	<a :href="'tel:' + customdes.saleManMobile"><div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #bdaf89;">&nbsp{{customdes.saleManMobile}} <span><img style="width:0.6rem ;height: 0.9rem; margin-left: 0.2rem;" src="../../assets/img/aftersale/as_y_tels.png"></span></div></a>
						<div class="clearfix"></div>
					</li>
					
				</ul>
				
				
			</div>
		</div>
		
		
	</div>
	
</template>

<script>
	
	export default {
		name: 'customDep',

		data() {

			return {
					suppliertelImg:'',
		
                   customerId:'',
				   customdes:{},
				  
			}

		},

	
		methods: {
			     more_order:function  () {
			     	
			     	this.$router.push({ name: 'Forderlist', query: { customerId:this.customerId }})
			     
			     },
				//加载得到客户信息
				getcustomdep(){			
				   let that = this;
				   this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/customers/' + that.customerId,
				}).then(res => {
				       console.log(res)
				       that.customdes=res.data.data;
					   console.log(that.customdes)
					   		if (that.customdes.customerMobile.length!=0) {
					   	that.suppliertelImg=true
					   }
					  //  that.customLists=[];
				   //     for (var i=0;i<data.length;i++){
						 //  
				   //       that.customLists.push(data[i]);
				   //    } 
					  // console.log(that.customLists)
				   
				   
				   
				  
				   
				 })
			},
			 
		},
		mounted: function() {
		         this.customerId = this.$route.query.customerId
				 this.getcustomdep();
				 

		}
		

	}
	
</script>

<style scoped="scoped">
	 ul li {

            margin: 0;
            padding: 0;
            list-style: none;
        }
     
		.clearfix{
			clear: both;
		}
		.after_sale_title li {
			float: left;
			margin-left: 0.5rem;
			margin-bottom: 0.5rem;
			
		}
		.closer_order{
			margin: 0.5rem 0;
		}
		.closer_order li{
			float: left;
			width: 48%;
		}
</style>