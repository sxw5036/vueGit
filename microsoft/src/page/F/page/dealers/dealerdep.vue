<template>
	<div id="dealerdep">
		<div style="padding:0.5rem 0.5rem 0 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;"  v-show="dealerstatus==1">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/dealer/dealer_dep_zj.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem;  font-weight: 600;">最近订单</li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.6rem;  color: #baaf89; float: right; margin-right: 0.5rem; margin-top: 0.1rem;" @click="more_order">更多订单></li>
					<div class="clearfix"></div>
				</ul>
				<ul class="closer_order">
					<li style="margin-right: 4%; text-align: center; color: #636363; font-size: 0.7rem;">类型:<span style="color: black;margin-left: 0.2rem; font-weight:600 ;">{{dealerdata.orderProdyctType}}</span></li>
					<li style=" text-align: left; color: #636363; font-size: 0.7rem;">货款:<span style="color: black;margin-left: 0.2rem; font-weight:600 ;">{{dealerdata.orderAmount}}</span></li>
					<div class="clearfix"></div>
				</ul>
			</div>
		</div>

		<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 90%;" src="../../assets/img/dealer/dealer_dep_jxs.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem;  font-weight: 600;">经销商信息</li>
					<!-- <li style="line-height: 1rem; text-align: center; font-size: 0.6rem;  color: #baaf89; float: right; margin-right: 0.5rem;">
						 <img @click="dealer_basechange" v-if="onlyread==true" style="width:0.9rem; height:0.9rem;" src="../../assets/img/dealer/dealer_dep_xg.png">
						 <span v-if="onlyread==false" @click="keep_changes" style="color: black; font-size: 0.8rem; ">保存</span>
					</li> -->
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0; margin-top: 0.3rem;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_no.png">
							<span >名称：</span>
						</div>
						<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #727272;">
							<input style="margin-bottom: -0.5rem; border: none; outline: none; padding-left:0 ;" v-model="dealerdata.name" type="text"
							 :readonly="onlyread">
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;margin-top: 0.3rem;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_type.png">
							<span>类型：</span>
						</div>
						<div style="width: 11rem; margin-right: 0; border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #727272;">

							<input style="margin-bottom: -0.5rem; border: none; outline: none; padding-left:0" v-model="dealerdata.typeName" type="text"
							 :readonly="onlyread">
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;margin-top: 0.3rem;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_zt.png">
							<span >状态：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;  color: #727272;">

							<input style="margin-bottom: -0.5rem; border: none; outline: none;padding-left:0" v-model="dealerdata.statusName" type="text"
							 :readonly="onlyread">
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;margin-top: 0.3rem;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_fzr.png">
							<span >负责人：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #727272;">

							<input style="margin-bottom: -0.5rem; border: none; outline: none;padding-left:0" v-model="dealerdata.leaderName" type="text"
							 :readonly="onlyread">
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;margin-top: 0.3rem;">
							<img style="width: 0.5rem;height: 0.7rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_y_tel.png">
							<span >电话：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #bdaf89; color: #727272;">

							<a :href="'tel:' + dealerdata.leaderTel"><input style="padding-left:0;margin-bottom: -0.5rem; border: none; outline: none; display: inline-block; width: 8rem;  color: #bdaf89;" v-model="dealerdata.leaderTel"
							 type="text" :readonly="onlyread">
							<img style="width:0.5rem ;height: 0.7rem;display: inline-block; margin-left: 0.2rem;" src="../../assets/img/aftersale/as_y_tels.png"></a>

						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;margin-top: 0.3rem;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_dq.png">
							<span >地区：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;  color: #727272;padding-left:0">

							<input style="margin-bottom: -0.5rem; border: none; outline: none;padding-left:0 " v-model="dealerdata.mergerName" type="text"
							 :readonly="onlyread">
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;margin-top: 0.3rem;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_dz.png">
							<span >地址：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;  border-bottom: 1px solid #dcdee2; word-break: break-all;">

							<input style="margin-bottom: -0.5rem; border: none; outline: none; color: #727272; padding-left:0" v-model="dealerdata.address" type="text"
							 :readonly="onlyread">
						</div>
						<div class="clearfix"></div>
					</li>

					<!-- <li v-show="dealerstatus==1">
						<div style="float: left; padding: 0.8rem 0;margin-top: 0.3rem;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_mp.png">
							<span >名片：</span>
						</div>
						<div style="float: right; border-bottom: 1px solid #dcdee2; padding: 0.8rem 0.5rem; width:11rem; height:auto;  word-break: break-all; ">
							<ul class="as_fj_tu">
								<li v-for="item in dealercards"><img style="width: 100%;" :src="item"></li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</li> -->
					<li v-show="dealerstatus==1">
						<div>
							<ul style="padding:0 0.5rem; margin-top: 0.5rem;">
								<li>地图位置</li>
								<li>
									<div id="map_05" style="width: 100%; height: 8rem; margin-top: 0.5rem;">

									</div>
								</li>
							</ul>
						</div>
					</li>
					<li v-show="dealerstatus==1">
						<div>
							<ul style="padding:0 0.5rem; margin-top: 0.5rem;">
								<li>店铺封面</li>
								<li><img style="width: 100%; margin-top: 0.5rem; margin-bottom: 1rem;" :src="dealerdata.coverUrl"></li>
							</ul>
						</div>
					</li>
				</ul>


			</div>
		</div>
		<!-- 	源订单信息 -->
		<div style="padding:0.5rem 0.5rem" v-show="dealerstatus==1">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/dealer/qianyue_img.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem;  font-weight: 600;">签约信息</li>
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_fzr.png">
							<span >大区经理：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #727272;">&nbsp{{dealerdata.businessManagerName}}</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_as_time.png">
							<span >签约时间：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0; color: #727272;">&nbsp{{dealerdata.contractTime}}</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left;padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/aftersale/as_sj_time.png">
							<span >合同到期：</span>
						</div>
						<div style="width: 11rem;  border-bottom: 1px solid #dcdee2; float: right;padding: 0.8rem 0;  color: #727272;">&nbsp{{dealerdata.contractExpiredDate}}</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_mp.png">
							<span >合同附件：</span>
						</div>
						<div style="float: right; border-bottom: 1px solid #dcdee2; padding: 0.8rem 0.5rem; width:11rem; height:auto;  word-break: break-all; ">
							<ul class="as_fj_tu_d">
								<li :key='index' v-for="(item,index) in dealerfujians"><img style="width: 100%;" :src="item"></li>

							</ul>
						</div>
						<div class="clearfix"></div>
					</li>

				</ul>
			</div>
		</div>

		<div style="padding:0.5rem 0.5rem" v-show="dealerstatus==1">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 100%;" src="../../assets/img/aftersale/as_cw_tt.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem;  font-weight: 600;">财务信息</li>
					<div class="clearfix"></div>
				</ul>
				<ul class="after_sale_content">
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_ye.png">
							<span >账户余额：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;   word-break: break-all;color: #8d8d8d; ">
							&nbsp;{{dealerdata.accountBalances}}
							<!-- 预付货款余额<span style="color: red;">2900.00</span>元；另有订单<span style="color: red;">228369</span>元，总金额<span style="color: red;">12000.00</span>元，挂账。 -->
						</div>
						<div class="clearfix"></div>
					</li>
					<li>
						<div style="float: left; padding: 0.8rem 0;">
							<img style="width: 0.65rem;height: 0.65rem; margin-left: 0.5rem;margin-right: 0.1rem; margin-top: 0.2rem;" src="../../assets/img/dealer/dealer_dep_qt.png">
							<span >其他资金：</span>
						</div>
						<div style="float: right; padding: 0.8rem 0.5rem; width:11rem; height:auto;   word-break: break-all;color: #8d8d8d; ">
							&nbsp;{{dealerdata.otherFundRemarks}}
							<!-- 活动保证金<span style="color: red;">10000.00</span>元；软件使用费<span style="color: red;">5000.00</span>元；退网后退会；品牌保证金<span style="color: red;">5000.00</span>元。 -->
						</div>
						<div class="clearfix"></div>
					</li>

				</ul>
			</div>
		</div>
		<div style="padding:0.5rem 0.5rem 0 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1rem; height: 1rem;"><img style="width: 90%;" src="../../assets/img/dealer/dealer_dep_bz.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.8rem;  font-weight: 600;">备注信息</li>
					<li style="line-height: 1rem; text-align: center; font-size: 0.6rem;  color: #baaf89; float: right; margin-right: 0.5rem;"><img
						 @click="dealer_change" v-if="readonly==true" style="width:0.9rem; height:0.9rem;" src="../../assets/img/dealer/dealer_dep_xg.png"><span
						 v-if="readonly==false" @click="keep_change" style="color: black; font-size: 0.7rem;">保存</span></li>
					<div class="clearfix"></div>
				</ul>
				<div style="padding: 0.5rem 1rem;">

					<textarea class="text_area" name="beizhu" placeholder="无" cols="40" rows="4" :readonly="readonly">&nbsp{{dealerdata.note}}</textarea>

				</div>
			</div>
		</div>



	</div>
</template>

<script>
	export default {
		name: 'dealerdep',

		data() {

			return {
				dealerId: '',
				dealerdata: {},
				dealercards: [],
				dealerfujians: [],
				readonly: true,
				onlyread: true,
				lng:'',
				lat:'',
				dealerstatus:'',
				
			}

		},


		methods: {
		
			more_order:function  () {
				
				this.$router.push({ name: 'Forderlist', query: { dealerId:this.dealerId }})
				console.log(this.dealerId)

			},
			baiduMap() {
				var that = this
				var map = new window.BMap.Map('map_05') //创建地图
				map.enableScrollWheelZoom(true); ////启用滚轮放大缩小
				var point = new window.BMap.Point(that.lng, that.lat) //设置地图位置
				map.centerAndZoom(point, 12)
				var marker = new window.BMap.Marker(point) // 创建标注
				map.addOverlay(marker)
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画         // 将标注添加到地图中
// 				map.addEventListener("click", function(e) {
// 						alert(e.point.lng + "," + e.point.lat);
// 						that.lng = e.point.lng
// 						that.lat = e.point.lat
// 
// 					})
					},


					dealer_basechange: function() {

						this.onlyread = false;

					},
					keep_changes: function() {

						//掉接口


						this.onlyread = true;

					},
					dealer_change: function() {

						this.readonly = false;

					},

					keep_change: function() {

						//掉接口


						this.readonly = true;

					},

				
					getdealerdep() {
						let that = this;
						this.axios({
							method: 'get',
							headers: {
								'X-Requested-With': 'XMLHttpRequest',
								'ContentType': 'application/json;charset=UTF-8'
							},

							url: '/wxapi/f/branchs/dealers/' + that.dealerId,
						}).then(res => {
							console.log(res)

							that.dealerdata = {};
							that.dealerdata = res.data.data;
							that.lng = res.data.data.lng;
							that.lat = res.data.data.lat;
							that.dealercards = res.data.data.cardUrl;
							that.dealerfujians = res.data.data.companyUrl;
							that.dealerstatus = res.data.data.status;
							
                            this.baiduMap();

							// for (var i=0;i<data.length;i++){
							//  
							//       that.customLists.push(data[i]);
							//    } 
							// console.log(that.customLists)





						})
					},

			},
			mounted: function() {
				this.dealerId = this.$route.query.id
				this.getdealerdep();
				

			}


		}
</script>


<style>
	ul li {

		margin: 0;
		padding: 0;
		list-style: none;
	}

	.clearfix {
		clear: both;
	}

	.after_sale_title li {
		float: left;
		margin-left: 0.5rem;
		margin-bottom: 0.5rem;

	}

	.after_sale_content li {
		width: 100%;

	}

	.as_fj_tu li {
		width: 4.5rem;
		min-height: 4.5rem;
		padding: 0.2rem;
		float: left;
	}

	.as_fj_tu li img {
		width: 100%;
	}

	.as_fj_tu_d li {
		width: 3rem;
		min-height: 3rem;
		padding: 0.2rem;
		float: left;
	}

	.as_fj_tu_d li img {
		width: 100%;
	}

	.closer_order {
		margin: 0.5rem 0;
	}

	.closer_order li {
		float: left;
		width: 48%;
	}

	.text_area {
		outline: none;
		resize: none;
		border: none;
	}
	
</style>
