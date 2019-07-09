<template>

	<div id="newDealers">
		<ul class="tab-tilte">
			<li @click="cur=0"><span :class="{active:cur==0}">意向</span></li>
			<li @click="cur=1"><span :class="{active:cur==1}">签约</span></li>
			<div class="clearfix"></div>

		</ul>
		<keep-alive>
			<div class="tab-content">
				<div class="content_show" v-show="cur==0">
					<div style="margin: 0.5rem; border-radius: 0.25rem;  background-color: white;">
						<ul style="padding: 0.5rem; font-size: 0.8rem;">
							<li style="margin: 0.25rem 0 0.5rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">名称：</div>
								<div style="float: left; width: 70%"><input v-model="dealname_itn" type="text" name="name" placeholder="请输入经销商名称"
									 style="width: 100%;color:#a4a4a4; height: 2rem; border-radius: 0.25rem; border:1px #d5d5d5 solid ;"></div>
								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 0.5rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">负责人：</div>
								<div style="float: left; width: 70%"><input v-model="fuzeren_itn" type="text" name="name" placeholder="请输入负责人姓名"
									 style="width: 100%;color:#a4a4a4; height: 2rem; border-radius: 0.25rem; border:1px #d5d5d5 solid ;"></div>
								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 0.5rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">电话：</div>
								<div style="float: left; width: 70%"><input v-model="telphone_itn" type="text" name="tel" placeholder="请输入电话"
									 style="width: 100%;color:#a4a4a4; height: 2rem; border-radius: 0.25rem; border:1px #d5d5d5 solid ;"></div>
								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 1rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">类型：</div>

								<div style="float: left;width: 70% ; color:#a4a4a4;  height: 2rem; border-radius: 0.25rem; border:1px #d5d5d5 solid ;box-sizing: border-box; position: relative;">
									<select style="width:80%; font-size: 0.9rem;color:#757575; padding: 0; margin-left: 0.8rem; margin-top: 0.4rem;"
									 v-model="type_itn">
										<option disabled value="">请选择类型</option>
										<option v-for="item in typesObj" :value="item.value" :key="item.value" style="font-size: 0.8rem;">{{ item.label }}</option>
									</select>
									<span style="position:absolute ;top:0.4rem;left:80%;"><img src="../../assets/img/dealer/left_ar.png" /></span>
								</div>


								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 1rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">地区：</div>
								<div style="float: left; width: 70% ;color:#a4a4a4;  height: 2rem; ">
									<div class="intent_select">
										<input :readonly="readonly" class="intent_p" v-model="searchObj.cityIdName" @click="addsiteshow=!addsiteshow"
										 placeholder="选择地区">
										<!-- <img class="intent_icon" src="../../assets/img/dealer/left_ar.png"/> -->
										</input>

									</div>
								</div>
								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 0.5rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">地址：</div>
								<div style="float: left; width: 70%"><input <input v-model="address_itn" type="text" name="address" placeholder="请输入地址"
									 style="width: 100%; color:#a4a4a4; height: 2rem; border-radius: 0.25rem; border:1px #d5d5d5 solid ;"></div>
								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 0.5rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">备注：</div>
								<div style="float: left; width: 70%">
									<textarea v-model="notes_itn" class="text_area" placeholder="请输入您的留言内容" cols="40" rows="4"></textarea>
								</div>

								<div class="clearfix"></div>
							</li>
						</ul>
						<div class="creat_dealers" @click="suretoaddintentDdaler()">确认</div>

					</div>
				</div>
				<div class="content_show" v-show="cur==1">
					<div style="margin: 0.5rem; border-radius: 0.25rem;  background-color: white;">
						<ul style="padding: 0.5rem;  font-size: 0.8rem;">
							<li style="margin: 0.25rem 0 0.5rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">名称：</div>
								<div style="float: left; width: 70%;color:#a4a4a4;"><input v-model="name_sign" type="text" name="names"
									 placeholder="请输入经销商名称" style="width: 100%;color:#a4a4a4; height: 2rem; border-radius: 0.25rem; border:1px #d5d5d5 solid ;"></div>
								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 0.5rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">负责人：</div>
								<div style="float: left; width: 70%;color:#a4a4a4;"><input v-model="fuzeren_sign" type="text" name="name"
									 placeholder="请输入负责人姓名" style="width: 100%;color:#a4a4a4; height: 2rem; border-radius: 0.25rem; border:1px #d5d5d5 solid ;"></div>
								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 0.5rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">电话：</div>
								<div style="float: left; width: 70%;color:#a4a4a4;"><input v-model="telphone_sign" type="text" name="tel"
									 placeholder="请输入电话" style="width: 100%;color:#a4a4a4; height: 2rem; border-radius: 0.25rem; border:1px #d5d5d5 solid ;"></div>
								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 1rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">类型：</div>
								<div style="float: left;width: 70% ; color:#a4a4a4;  height: 2rem; border-radius: 0.25rem; border:1px #d5d5d5 solid ;box-sizing: border-box; position: relative;">
									<select style="width:80%; font-size: 0.9rem;color:#757575; padding: 0; margin-left: 0.8rem; margin-top: 0.4rem;"
									 v-model="type_sign">
										<option disabled value="">请选择类型</option>
										<option v-for="item in typesObj" :value="item.value" :key="item.value" style="font-size: 0.8rem;">{{ item.label }}</option>
									</select>
									<span style="position:absolute ;top:0.4rem;left:80%;"><img src="../../assets/img/dealer/left_ar.png" /></span>
								</div>




								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 1rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">地区：</div>
								<div style="float: left; width: 70% ;color:#a4a4a4;  height: 2rem; ">
									<div class="intent_select">
										<input class="intent_p" :readonly="readonly" v-model="searchObj.cityIdName" @click="addsiteshow=!addsiteshow"
										 placeholder="选择地区">
										<!-- <img class="intent_icon" src="../../assets/img/dealer/left_ar.png"/> -->
										</input>

									</div>
								</div>
								<div class="clearfix"></div>
							</li>
							<li style="margin: 0.25rem 0 0.5rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">地址：</div>
								<div style="float: left; width: 70%;color:#a4a4a4;"><input v-model="address_sign" type="text" name="address"
									 placeholder="请输入地址" style="width: 100%; color:#a4a4a4; height: 2rem; border-radius: 0.25rem; border:1px #d5d5d5 solid ;"></div>
								<div class="clearfix"></div>
							</li>


							<li style="margin: 0.25rem 0 0.5rem 0;">
								<div style="float: left; width: 25%; margin-right: 2%; text-align: right; height: 2rem; line-height: 2rem; ">备注：</div>
								<div style="float: left; width: 70%;color:#a4a4a4;"><textarea v-model="notes_sign" class="text_area"
									 placeholder="请输入您的留言内容" cols="40" rows="4"></textarea></div>

								<div class="clearfix"></div>
							</li>
						</ul>
						<div>
							<div style="padding: 0.5rem; ">
								<div>地图位置</div>
								<div id="map_03" style="width: 100%; height: 8rem; margin: 0.5rem 0;">

								</div>
							</div>
						</div>
						<div>
							<ul style="padding:0 0.5rem; margin-top: 0.5rem;">

								<li>
									<!-- <div class="center">
									<div class="demo-upload-list" v-for="(item,index) in accounts.files">
										<img :src="item.imgFullPath">
										<span @click="cancelUp(index)" class="mui-icon mui-icon-closeempty cancel"></span>
									</div>
								
									<div class="demo-upload-list flie_bg">
										<input @change="upimg" multiple="multiple" class="file_but" type="file" name="" id="" value="" />
								
									</div>
								</div> -->
									<div class="form_item" style="margin-bottom: 0.5rem;">
										<div class="lable">店铺封面:</div>
										<div class="center" style="margin: 0.5rem 0; ">
											<div class="demo-upload-list" v-for="item in dataimg">
												<img :src="item">
												<span @click="cancelUp()" class="mui-icon mui-icon-closeempty cancel"></span>
											</div>

											<div class="demo-upload-list flie_bg">
												<input @change="upimg" class="file_but" type="file" name="" id="" value="" />

											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>


					</div>
					<div class="creat_dealers" @click="suretoaddsignedDealers">确认</div>
				</div>
			</div>
		</keep-alive>
		<Address :show="addsiteshow" @sure='surreAddress' @cancel="addsiteshow=!addsiteshow"></Address>
	</div>

</template>

<script>
	import address from '@/components/address'
	import mui from '../../assets/js/mui.js'
	export default {
		name: 'newDealers',

		data() {

			return {
				cur: 0, //默认选中第一个tab
				//新建意向经销商
				dealname_itn: '',
				fuzeren_itn: '',
				telphone_itn: '',
				address_itn: '',
				notes_itn: '',
				position_itn: '',
				type_itn: '',
				//
				fuzeren_sign: '',
				telphone_sign: '',
				address_sign: '',
				notes_sign: '',
				position_sign: '',
				name_sign: '',
				type_sign: '',
				readonly: true,

				addsiteshow: false,
				searchObj: {
					startTime: "",
					endTime: "",
					cityId: "",
					cityIdName: "",
					condation: "",
					dealerId: ""

				},

				typesObj: [{
						value: "1",
						label: '直营店'
					},
					{
						value: "2",
						label: '店中店'
					},
					{
						value: "3",
						label: '专卖店'
					},
					{
						value: "4",
						label: '加盟店'
					},

				],

				//上传图片
				accounts: {
					type: "",
					fund: "",
					funds: "",
					ways: "",
					secondfunds: "",
					thirdlyfunds: "",
					amount: "",
					operator: "",
					paymentDate: "",
					notes: "",
					files: [],

				},
				imgData: {
					accept: 'image/gif, image/jpeg, image/png, image/jpg',
				},
				dataimg: [],
				imgsId: '',
				lng: '',
				lat: '',
			}

		},
		components: {

			Address: address

		},

		methods: {
			baiduMap() {
				var that = this
				var map = new window.BMap.Map('map_03') //创建地图
				// map.enableScrollWheelZoom(true); ////启用滚轮放大缩小
				var point = new window.BMap.Point(116.404, 39.915) //设置地图位置
				map.centerAndZoom(point, 12)
				var marker = new window.BMap.Marker(point) // 创建标注
				map.addOverlay(marker)
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画         // 将标注添加到地图中
				map.addEventListener("click", function(e) {
					// alert(e.point.lng + "," + e.point.lat);
					that.lng = e.point.lng
					that.lat = e.point.lat
					alert(that.lng + "," + that.lat);

				})
			},
			//三级联动
			surreAddress: function(obj) {
				console.log(obj)
				this.addsiteObj = obj;
				this.searchObj.cityId = obj.id;
				this.searchObj.cityIdName = obj.mergerName;
				this.addsiteshow = !this.addsiteshow
			},
			/*清除图片*/

			cancelUp: function() {

				this.dataimg = [];
			},

			upimg: function(e) {

				var that = this

				if (e.target.files.length == 0) {

					return false
				}

				var imgfiles = e.target.files
				var imgdata = e.target.files
				var formData = new FormData();
				for (var i = 0; i < imgdata.length; i++) {

					var imgsize = imgdata[i].size
					var imgstyle = imgdata[i].type
					if (this.imgData.accept.indexOf(imgstyle) == -1) {

						that.mui.toast("请选择正确的图片格式", {
							duration: 'long',
							type: 'div'
						})

						return false;
					} else if (imgsize > 5242880) {

						that.mui.toast("图片大小不能超过5M", {
							duration: 'long',
							type: 'div'
						})

						return false;
					} else {

						var datimg = imgdata[i]
						formData.append('multipartFile', datimg); // 多选文件数据

					}

				}

				var that = this

				that.axios({
					method: 'post',

					url: '/wxapi/f/branchs/dealers/coverImage',

					data: formData

				}).then(function(res) {
					console.log(res)
					var data = res.data.data.imagePath
					that.dataimg.push(data)
					that.imgsId = res.data.data.fileId

					console.log(that.imgsId)

				}).catch(function(err) {
					console.log(err)

					that.mui.toast("图片上传失败请稍后重试" + err, {
						duration: 'long',
						type: 'div'
					})

				})

			},


			gotoitn: function() {
				this.$router.push({
					name: 'intentionDealers'
				})
			},
			gotosign: function() {
				this.$router.push({
					name: 'signedDealers'
				})
			},
			suretoaddintentDdaler() {
				let that = this;
				this.axios({
					method: 'post',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/wxapi/f/branchs/dealers/0',
					data: {
						founderName: that.fuzeren_itn,
						leaderTel: that.telphone_itn,
						address: that.address_itn,
						note: that.notes_itn,
						cityAreaId: that.searchObj.cityId,
						name: that.dealname_itn,
						type: that.type_itn,


					}
				}).then(res => {
					that.mui.toast("添加经销商成功", {
						duration: 'long',
						type: 'div'
					})

					setTimeout(function() {

						that.gotoitn();

					}, 2000);

				}).catch(function(err) {

					that.mui.toast("添加经销商失败请稍后重试" + err, {
						duration: 'long',
						type: 'div'
					})

				})
			},
			suretoaddsignedDealers() {



				let that = this;
				this.axios({
					method: 'post',
					// headers: {
					// 	'X-Requested-With': 'XMLHttpRequest',
					// 	'ContentType': 'application/json;charset=UTF-8'
					// },
					url: '/wxapi/f/branchs/dealers/1?fileId=' + that.imgsId,
					data: {
						founderName: that.fuzeren_sign,
						leaderTel: that.telphone_sign,
						address: that.address_sign,
						note: that.notes_sign,
						cityAreaId: that.searchObj.cityId,
						name: that.name_sign,
						type: that.type_sign,
						// fileId:that.imgsId,
						lng: that.lng,
						lat: that.lat,

					}
				}).then(res => {
					that.mui.toast("添加经销商成功", {
						duration: 'long',
						type: 'div'
					})

					setTimeout(function() {

						that.gotosign();

					}, 2000);

				}).catch(function(err) {

					that.mui.toast("添加经销商失败请稍后重试" + err, {
						duration: 'long',
						type: 'div'
					})

				})
			},


		},
		mounted: function() {
			this.baiduMap();
		}


	}
</script>

<style scoped="scoped">
	ul li {

		margin: 0;
		padding: 0;
		list-style: none;
	}

	.tab-tilte {
		width: 100%;
		background-color: white;
		margin-top: 0.05rem;
	}

	.tab-tilte li {
		float: left;
		width: 50%;
		padding: 0.8rem 0;
		text-align: center;
		cursor: pointer;
		color: #636363;
		color: rgba(99, 99, 99, 0.5);


	}

	.select {
		font-size: 14px;
		height: auto;
		margin-top: 1px;
		background-color: #fff;
	}

	.tab-tilte li span {
		padding-bottom: 0.65rem;
	}

	/* 点击对应的标题添加对应的背景颜色 */
	.tab-tilte .active {
		/* background-color: #09f;
            color: #fff; */
		border-bottom: 0.1rem solid #bcaf88;
		box-sizing: border-box;
		color: #3f3f3f;

	}

	.tab-content {
		margin-top: 0.5rem;
	}

	.tab-content .content_show {
		width: 100%;
	}

	.clearfix {
		clear: both;
	}

	.text_area {
		width: 100%;
		border-radius: 0.25rem;
		border: 1px #d5d5d5 solid;
		color: #a4a4a4;
	}

	.creat_dealers {
		width: 100%;
		margin-top: 2rem;
		text-align: center;
		line-height: 2rem;
		height: 2rem;
		color: white;
		font-size: 0.7rem;
		background-image: url(../../assets/img/dealer/dearer_but_bgs.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.form_item .lable {
		font-size: 0.7rem;
		color: #000000;
	}

	.intent_select {
		height: 2rem;
		width: 100%;
		border-radius: 10px;
		margin-bottom: 0.5rem;
	}

	.intent_p {
		width: 100%;
		height: 2.1rem;
		font-size: 0.9rem;
		border-radius: 0.25rem;
		border: none;
		padding-left: 0.8rem;
		text-align: left;
		border: 1px #d5d5d5 solid;
		color: #757575;

	}

	inputplaceholder::-webkit-input-placeholder {
		/* placeholder颜色  */
		color: #636363;
		/* placeholder字体大小  */
		font-size: 0.7rem;
		/* placeholder位置  */
		text-align: left;
	}
</style>
