<template>
	<div id="new_supplier_signing">
		<!-- <header class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">

			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">新建供应商</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">

		</div> -->
		<div class="signing_div1">
			<p>
				<span class="ns1">状态：</span><span class="ns2"><input type="radio" checked="checked" @click=" yixiang()" id="yixiang1"
					 name="newsupplier1" /> <label for="yixiang1">意向</label> </span><span class="ns3"><input type="radio" @click=" qianyue()"
					 id="qianyue1" name="newsupplier1" /> <label for="qianyue1">签约</label> </span>
			</p>
			<ul>
				<li style="margin-left: 0.8rem;">
					<span>负责人:</span><input style="margin-left: 0.85rem;"  type="text" v-model="contacts" />
				</li>
				<li>
					<span>电话:</span><input type="tel" id="teldianhua" v-model="supplierPhone" @blur.prevent="yanzhengTel()" />
				</li>
				<li @click="addsiteshow=!addsiteshow" class="dwbb">
					<span>地区:</span><input  readonly="readonly" type="tel" style="z-index: 1;  " v-model="searchObj.mergerShortName" placeholder="请选择" /><span
					 class="dw"><img src="../../assets/img/supplier/xjt.png" /> </span>
				</li>
				<!-- <li>
					<span>地址:</span><input type="text" v-model="address" />
				</li> -->
				<li style="position: relative;">
					<span  >类型:</span><input type="text" style="z-index:; background: none; position: absolute; top: 0; left: 1.5rem;  "  /> <span class="spanselect1" style=" position: relative; z-index: ;">
						
						<select  class="select1" name="leixing1" id="leixing1" v-model="ways" style="border:none; z-index: 111;">

							<option style="border: none;" :value="item.id" v-for="(item,index) in dataZD" :key="index">{{item.value}}</option>
						</select>

					</span>
				</li>
				<li style="position: relative;">
					<span class="spantextarea">备注:</span><textarea v-model="remark"></textarea>
				</li>
			</ul>
		</div>
		<!-- 	<div class="signing_div2"> -->
		<div class="signing_div2" v-show="typenum">
			<ul>
				<li>
					<span>企业名称:</span><input type="text" v-model="supplierName" />
				</li>
				<li>
					<span>企业地址:</span><input type="text" v-model="supplieraddress" />
				</li>
				<li>
					<span>地图位置:</span>
				</li>
			</ul>
			<div class="signing_div2_div1" id="allmap1">

			</div>
		</div>
		<div class="divBtnNew">
			<button class="btnNew" type="button" @click="sumbit()">确认</button>
		</div>
		<Address :show="addsiteshow" @sure='surreAddress' @cancel="addsiteshow=!addsiteshow"></Address>
	</div>
</template>

<script>
	import address from '@/components/address'

	import mui from '@/assets/js/mui.js'

	export default {
		name: 'newSupplierSigning',
		data() {


			return {
				zhuangtai: '0',
				ways: '',
				addsiteObj: {},
				searchObj: {
					startTime: "",
					endTime: "",
					cityId: "",
					cityIdName: "",
					condation: "",
					dealerId: "",
					mergerShortName: ''

				},
				addsiteshow: false,
				typenum: false,
				contacts: '',
				supplierPhone: '',
				area: '',
				supplieraddress: '',
				remark: '',
				categoryName: '0',
				supplierName: '',
				lat: '',
				lng: '',
				dataZD: []
			
			}

		},
		
		components: {
			Address: address

		},
		methods: {
			
			surreAddress: function(obj) {
				this.addsiteObj = obj;
				this.searchObj.cityId = obj.id;
				this.searchObj.cityIdName = obj.name
				this.searchObj.mergerShortName = obj.mergerShortName
				this.addsiteshow = !this.addsiteshow
			},

			qianyue() {
				this.typenum = true
				this.zhuangtai = "1"
			},
			yixiang() {
				this.typenum = false
				this.zhuangtai = "0"
			},
			sumbit() {
				var that = this
				if (that.contacts == "" || that.contacts == null) {
						that.mui.toast("请完善负责人名称", {
						duration: 'long',
						type: 'div'
					})
					return false;
				} else if (that.supplierPhone == "" || that.supplierPhone == null) {
						that.mui.toast("请完善电话号码", {
						duration: 'long',
						type: 'div'
					})
					return false;
				} else if (that.searchObj.cityId == "" || that.searchObj.cityId == null) {
					that.mui.toast("请选择地区", {
						duration: 'long',
						type: 'div'
					})
					return false;
				} else if (that.ways == "" || that.ways == null) {
						that.mui.toast("请选择类型", {
						duration: 'long',
						type: 'div'
					})
					return false;
				} else if (that.zhuangtai==1) {
					if (that.supplierName == "" || that.supplierName == null){
						that.mui.toast("请完善企业名称", {
							duration: 'long',
							type: 'div'
						})
						return false;
					}else if (that.supplieraddress == "" || that.supplieraddress == null) {
					that.mui.toast("请完善企业地址", {
						duration: 'long',
						type: 'div'
					})
					return false;
				}else{
					
						var that = this
					that.axios({
						method: 'post',
						data: {
							contacts: that.contacts,
							supplierPhone: that.supplierPhone,
							area: that.searchObj.cityId,
							address: that.supplieraddress,
							categoryId: that.ways,
							remark: that.remark,
							supplierName: that.supplierName,
							supplierStage: that.zhuangtai,
							lng: that.lng,
							lat: that.lat
						},
						url: '/wxapi/f/suppliers'
					}).then(function(res) {
						console.log(res)
						that.mui.toast("新建供应商成功", {
							duration: 'long',
							type: 'div'
						}),
						setTimeout(function() {
						
							that.$router.push({ name: 'FsupplierList'})
						
						}, 2000);
						
					}).catch(function(err) {
						
						
					})
					return false
				}
					
				
				} else{
					var that = this
					that.axios({
						method: 'post',
						data: {
							contacts: that.contacts,
							supplierPhone: that.supplierPhone,
							area: that.searchObj.cityId,
							address: that.supplieraddress,
							categoryId: that.ways,
							remark: that.remark,
							supplierName: that.supplierName,
							supplierStage: that.zhuangtai,
							lng: that.lng,
							lat: that.lat
						},
						url: '/wxapi/f/suppliers'
					}).then(function(res) {
						console.log(res)
						that.mui.toast("新建供应商成功", {
							duration: 'long',
							type: 'div'
						}),
						setTimeout(function() {
						
							that.$router.push({ name: 'FsupplierList'})
						
						}, 2000);
						
					}).catch(function(err) {
						
						
					})
					
					
				}

			},
			baiduMap() {
				var that = this
				var map = new window.BMap.Map('allmap1') //创建地图
				map.enableScrollWheelZoom(true); ////启用滚轮放大缩小
				var point = new window.BMap.Point(116.404, 39.915) //设置地图位置
				map.centerAndZoom(point, 12)
				var marker = new window.BMap.Marker(point) // 创建标注
				map.addOverlay(marker)
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画         // 将标注添加到地图中
				map.addEventListener("click", function(e) {
					alert(e.point.lng + "," + e.point.lat);
					that.lng = e.point.lng
					that.lat = e.point.lat

				})


			},
			yanzhengTel() {
				var that=this
				var myreg = /^1[3458]\d{9}$/;
				if (!myreg.exec(this.supplierPhone)) {
					that.supplierPhone=''
					that.supplierPhone=null
					mui.toast('请输入正确的手机号格式', {
						duration: 'long',
						type: 'div'
					})
					
					
				}
			}
		},
		mounted: function() {

			this.baiduMap()
			mui.init()
			var that = this
			that.axios({

				method: 'get',

				url: '/api/f/basecodes?type=supplyType'

			}).then(function(res) {
				// that.$refs.tipshow.alertshow(5)
				console.log(res.data.data)
				that.dataZD = res.data.data;
				that.dataZD.unshift({
					id: "",
					value: "选择类型"
				})

			}).catch(function(err) {
				console.log(err)

			})




		}
		/**/

	}
</script>

<style scoped="scoped">
	#new_supplier_signing {
		position: relative;
		width: 100%;
		height: auto;
		font-family: PingFang-SC-Medium;
	}
	input::-webkit-input-placeholder {
	     /* placeholder颜色  */
	     color: black;
	    
	 }
	input,
	textarea {
		font-size: 0.75rem;
	}

	/* 头部开始 */
	.signing_div1 {
		width: 17.75rem;
		height: 22.8rem;
		border-radius: 0.25rem;
		background-color: white;
		margin: 0.5rem 0.5rem 0rem 0.5rem;
	}

	.signing_div1>p {
		padding-top: 1.2rem;
		padding-bottom: 0.8rem;
	}

	.signing_div1>p>.ns1 {
		font-size: 0.65rem;
		color: #000000;
		margin-left: 1.475rem;
	}

	.signing_div1>p>.ns2 {
		font-size: 0.825rem;
		margin-left: 2.5rem;
		color: rgb(99, 99, 99);
	}

	.signing_div1>p>.ns3 {
		font-size: 0.825rem;
		margin-left: 3rem;
		color: rgb(99, 99, 99);
	}

	.signing_div1>p>span>input {
		vertical-align: -5%;
	}

	.signing_div1>ul>li {
		margin-left: 1.5rem;
	}

	.signing_div1>ul>li>span {
		font-size: 0.65rem;
	}

	.signing_div1>ul>li input {
		width: 12.875rem;
		height: 2.2rem;
		/* box-shadow: 0rem 0.15rem 0.225rem 0rem rgba(214, 214, 214, 0.31); */
		border-radius: 0.25rem;
		margin-left: 0.8rem;
		/* border: 0.025rem solid rgba(99,99,99,1); */
	}

	.signing_div1>ul>li>textarea {
		display: inline-block;
		width: 12.875rem;
		height: 6rem;
		margin-left: 2.3rem;
		margin-top: 0.8rem;
	}

	.spantextarea {
		position: absolute;
		top: 1rem;
		
	}
	 textarea{
		/* border: 0.025rem solid rgba(99,99,99,1); */
	}
	.select1 option:first-child{
		color: rgb(99,99,99);
	}
	.spanselect1> .select1 {
		display: inline-block;
		margin-top: 0.2rem;
		padding: 0;
		margin: 0 0.35rem;
		width: 11.5rem;
		height: 1.8rem;
		background: url(../../assets/img/supplier/xjt.png) 10.2rem center no-repeat;
	}

	.spanselect1 {
		padding-left: 0.5rem;
		padding-top: 0.2rem;
		
		margin-left: 0.5rem;
		display: inline-block;
		width: 12.8rem;
		height: 2.2rem;
		
		box-shadow: 0rem 0.15rem 0.1rem 0rem rgba(214, 214, 214, 0.31);
		border-radius: 0.25rem;
	}

	/* 头部结束 */
	/* 中部开始 */
	.signing_div2 {
		/* display: none; */
		padding-top: 0.5rem;
		width: 17.75rem;
		height: 19.05rem;
		border-radius: 0.25rem;
		background-color: white;
		margin: 0.5rem 0.5rem 0 0.5rem;
	}

	.signing_div2>ul>li {
		margin-left: 0.4rem;
	}

	.signing_div2>ul>li>span {
		font-size: 0.65rem;
	}

	.signing_div2>ul>li>input {
		width: 12.875rem;
		height: 2.2rem;
		box-shadow: 0rem 0.15rem 0.225rem 0rem rgba(214, 214, 214, 0.31);
		border-radius: 0.25rem;
		margin-left: 0.7rem;
	}

	.signing_div2_div1 {
		width: 15.625rem;
		height: 9.475rem;
		margin: 1.05rem;

	}

	.dwbb {
		position: relative;
		color: #000000;
	}

	.dw {
		position: absolute;
		top: 0.3rem;
		right: 1.3rem;
	}

	/* 中部结束 */

	/* 按钮开始 */
	.divBtnNew {
		height: 2rem;

		margin: 0 auto;
		margin-top: 2rem;
		margin-bottom: 1rem;
		width: 17.75rem;
	}

	.divBtnNew .btnNew {
		width: 17.75rem;
		height: 2rem;
		background: rgba(255, 255, 255, 1);
		color: white;
		font-size: 0.75rem;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		background: linear-gradient(90deg, rgba(187, 175, 137, 1) 0%, rgba(127, 116, 91, 1) 100%);
		box-shadow: 0rem 0.175rem 0.35rem 0.05rem rgba(128, 117, 92, 0.41);
		border-radius: 0.25rem;
	}
</style>
