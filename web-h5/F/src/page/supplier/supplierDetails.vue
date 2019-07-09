<template>
	<div id="supplier_details">
		<header class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">

			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">供应商详情</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">

		</div>
		<div class="supplier_details_top">
			<div class="top_div1">
				<img style="width: 1rem; height: 1rem; margin-left: 0.4rem;" src="../../assets/img/supplier/gysxx.png" />
				<span>供应商信息</span>
				<img v-if="this.readOnlyTrueOrFalse==true" style="width: 0.75rem; height:0.75rem; margin-top: 0.825rem; margin-left: 10.25rem;" src="../../assets/img/supplier/xiugai.png"
				 @click="read1()" />
				<img v-else style="width: 0.75rem; height:0.75rem; margin-top: 0.825rem; margin-left: 10.25rem;" src="../../assets/img/supplier/duihao.png"
				 @click="read()" />
			</div>
			<div class="top_div2">
				<ul>
					<li>
						<span class="top_div2_s1"><img style="width: 0.55rem ; height: 0.7rem;" src="../../assets/img/supplier/mingcheng.png" /></span><span
						 class="top_div2_s2">名称:</span><span class="top_div2_s3">
							<input :value="data.supplierName" :readOnly="readOnlyTrueOrFalse" id="supplierName" />
						</span>
					</li>
					<li v-show="this.readOnlyTrueOrFalse==true" >
						<span class="top_div2_s1"><img style="width: 0.625rem ; height: 0.625rem;" src="../../assets/img/supplier/leixing.png" /></span><span
						 class="top_div2_s2">类型:</span><span class="top_div2_s3"><span><input :value="data.categoryName" :readOnly="readOnlyTrueOrFalse"
								 id="categoryName" /></span></span>
					</li>
					<li v-show="this.readOnlyTrueOrFalse== false">
						<span class="top_div2_s1"><img style="width: 0.625rem ; height: 0.625rem;" src="../../assets/img/supplier/leixing.png" /><span  style="font-size: 0.65rem; margin-left: 0.5rem;">类型:</span> <span class="spanselect1">
						
						<span style=" position: relative; font-size: 0.7rem; border-bottom: 1px solid rgba(99, 99, 99, 0.2);margin-left: 1.45rem; padding-bottom: 0.5rem;">
							
							<select    v-model="ways" style="border:none; width: 12.6rem;  margin-bottom: 0 ; padding: 0 0 0 0.1rem;">
								
							<option style="border: none ; text-align:center;text-align-last:center;" :value="item.id" v-for="(item,index) in dataZD" :key="index"><span >{{item.value}}</span></option>
						</select></span> 
						</span>
					</span>
					</li>
					<!-- <li>
						<span class="top_div2_s1"><img style="width: 0.65rem ; height: 0.6rem;" src="../../assets/img/supplier/zhuangtai.png" /></span><span
						 class="top_div2_s2">状态:</span><span class="top_div2_s3"><input :value="data.supplierStage" :readOnly="readOnlyTrueOrFalse"
							 id="supplierStage" /></span>
					</li> -->
					<li>
						<span class="top_div2_s1"><img style="width: 0.65rem ; height: 0.6rem;" src="../../assets/img/supplier/zhuangtai.png" /></span><span
						 class="top_div2_s2">状态:</span><span class="top_div2_s3" id="xuanze"><span @click="yixiang()"  ><input v-model="state1" value="0" style="opacity: 0.8;" :disabled="disabledTrueOrFalse"   type="radio"   id="yixiang"
					 name="newsupplier" /><label for="yixiang">意向</label></span><span @click="qianyue()"><input v-model="state1"   :disabled="disabledTrueOrFalse" value="1" type="radio" 
					 id="qianyue" name="newsupplier" style="margin-left: 2rem; opacity: 0.8;" /><label for="qianyue">签约</label></span>    </span>
					</li>
					<li>
						<span class="top_div2_s1"><img style="width: 0.7rem ; height: 0.7rem;" src="../../assets/img/supplier/fuzeren.png" /></span><span
						 class="top_div2_s2">负责人:</span><span class="top_div2_s3" style="margin-left: 1.075rem;"><input :value="data.contacts"
							 :readOnly="readOnlyTrueOrFalse" id="cpntacts" /></span>
					</li>
					<li>
						<span class="top_div2_s1"><img style="width: 0.475rem ; height: 0.775rem;margin-right: 0.1rem; margin-left: 0.1rem;" src="../../assets/img/supplier/dianhua.png" /></span><span
						 class="top_div2_s2">电话:</span><span class="top_div2_s3" style="color:rgba(187,174,137,1);"><input :value="data.supplierPhone"
							 :readOnly="readOnlyTrueOrFalse" id="supplierPhone" /> &nbsp;<a :href="'tel:' + data.supplierPhone"v-show="suppliertelImg"><span><img  style="width:0.6rem ;height: 0.9rem; margin-left: 0.2rem;" src="../../assets/img/aftersale/as_y_tels.png"></span></a></span>
					</li>
					<li v-show="this.readOnlyTrueOrFalse==true"  >
						<span class="top_div2_s1"><img style="width: 0.675rem ; height: 0.675rem;" src="../../assets/img/supplier/diqu.png" /></span><span
						 class="top_div2_s2">地区:</span><span class="top_div2_s3" ><input style="width: 12rem; word-wrap:break-word;" :value="data.areaName" :readOnly="readOnlyTrueOrFalse"
							 id="areaName" /><!-- <input id="areaName"   v-model="searchObj.mergerShortName" :readOnly="readOnlyTrueOrFalse" /> --></span>
					</li>
					<li v-show="this.readOnlyTrueOrFalse== false" @click="addsiteshow =! addsiteshow"  >
						<span class="top_div2_s1"><img style="width: 0.675rem ; height: 0.675rem;" src="../../assets/img/supplier/diqu.png" /></span><span
						 class="top_div2_s2">地区:</span><span class="top_div2_s3" ><input style="width: 12rem;" readonly="readonly" :value="data.areaName"
							 id="areaName" /><!-- <input id="areaName"   v-model="searchObj.mergerShortName" :readOnly="readOnlyTrueOrFalse" /> --></span>
					</li>
					
					<li>
						<span class="top_div2_s1"><img style="width: 0.625rem ; height: 0.775rem;" src="../../assets/img/supplier/dizhi.png" /></span><span
						 class="top_div2_s2">地址:</span><span class="top_div2_s3"><input :value="data.address" :readOnly="readOnlyTrueOrFalse"
							 id="address" /></span>
					</li>
				 	<!-- <li>
						<span class="top_div2_s1"><img style="width: 0.625rem ; height: 0.6rem;" src="../../assets/img/supplier/mingpian.png" /></span><span
						 class="top_div2_s2">名片:</span><span class="top_div2_s3"><img :src="datafiles.fullPath" style="width: 4.3rem ; height: 4.3rem; border: none;" />
						 <div class="demo-upload-list" v-for="(item,index) in accounts.files" :key="index">
						 	<img :src="item.imgRelPath">
						 	<span @click="cancelUp(index)" class="mui-icon mui-icon-closeempty cancel"></span>
						 </div>
						 
						 <div class="demo-upload-list flie_bg">
						 	<input @change="upimg" multiple="multiple" class="file_but" type="file" name="" id="" value="" />
						 
						 </div>
						 </span>
					</li> -->
				</ul>
			</div>
			<div class="top_div3">
			</div>
			<div class="top_div4">
				<p><span class="s1"> <img src="../../assets/img/supplier/dtwz.png" style="width: 0.775rem; height: 0.675rem;" /></span>
					<span class="s2">地图位置:</span> </p>
				<div class="div4_div1 " id="allmap">

				</div>
			</div>
		</div>
		<div class="supplier_details_center" v-for="(list,index) in  listProduct" :key="index">
			<p class="ppp"><img style="width: 1.15rem; height: 1rem; margin-left: 0.4rem;margin-right: 0.5rem;" src="../../assets/img/supplier/ghxx.png" /><span
				 class="s1">供货信息</span><span class="s2">#{{index+1}}</span></p>


			<div class="center_div2">
				<ul>
					<li>
						<span class="center_div2_s1"><img style="width: 0.625rem ; height: 0.625rem;" src="../../assets/img/supplier/chanpin.png" /></span><span
						 class="center_div2_s2">产品:</span><span class="center_div2_s3">{{list.name}}</span>
					</li>
					<li>
						<span class="center_div2_s1"><img style="width: 0.625rem ; height: 0.625rem;" src="../../assets/img/supplier/yanse.png" /></span><span
						 class="center_div2_s2">颜色:</span><span class="center_div2_s3 fenleiyoukong"><span>{{list.color}}</span></span>
					</li>
					<li>
						<span class="center_div2_s1"><img style="width: 0.625rem ; height: 0.625rem;" src="../../assets/img/supplier/baojia.png" /></span><span
						 class="center_div2_s2">报价:</span><span class="center_div2_s3">{{list.price}}</span>
					</li>
					<li>
						<span class="center_div2_s1"><img style="width: 0.625rem ; height: 0.625rem;" src="../../assets/img/supplier/jhzq.png" /></span><span
						 class="center_div2_s2">交货周期:</span><span class="center_div2_s3" style="margin-left: 0.4rem;">{{list.supplyTime}}1</span>
					</li>
					<li>
						<span class="top_div2_s1"><img style="width: 0.625rem ; height: 0.625rem;" src="../../assets/img/supplier/mingpian.png" /></span><span
						 class="top_div2_s2">产品样图:</span><span class="top_div2_s3" style="margin-left: 0.5rem;"><img :src="list.files.fullPath"
							 style="width: 4.25rem ; height: 4.25rem;" /></span>
					</li>
				</ul>
			</div>
		</div>
		<div class="supplier_details_bottom">
			<div class="bottom_div1">
				<img style="width: 0.925rem; height: 0.925rem; margin-left: 0.4rem;" src="../../assets/img/supplier/bzxx.png" />
				<span style="font-size: 0.8rem; height: 0.8rem;">备注信息</span>
				<img v-if="this.readonlytext==true" style="width: 0.75rem; height:0.75rem; margin-top: 0.2rem; margin-left: 11.15rem;" src="../../assets/img/supplier/xiugai.png"
				 @click="beizhu1()" />
				 <img v-else style="width: 0.75rem; height:0.75rem; margin-top: 0.2rem; margin-left: 11.15rem;" src="../../assets/img/supplier/duihao.png"
				  @click="beizhu()" />
			</div>
			<div class="bottom_div2">
				<textarea :readonly="readonlytext" :value="data.remark" id="remark"></textarea>
			</div>
		</div>
			<Address   :show="addsiteshow" @sure='surreAddress' @cancel="addsiteshow=!addsiteshow"></Address>
	</div>
</template>
<script>
	import address from '@/components/address'
	export default {
		name: 'supplierDetails',

		data() {
			return {
				suppliertelImg:'',
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
				disabledTrueOrFalse:'disabled',
				fundsdata: [],
				secondfundsdata: [],
				thirdlyfundsdata: [],
				fundsdataAll: [],
				state1:"",
				readonlytext: true,
				data: {areaName:'',
					categoryName:'',
					zdId:''
				},
				leixingId:''
				,
				ways:'',
				listProduct: [],
				readOnlyTrueOrFalse: true,
				datafiles: [],
				files: [],
				lng1: '',
				lat1: '',
				supplierStage1:'0',
				dataZD:[],
				hanzi:'请选择',
				areaIds:''
				// imgData: {
				// 	accept: 'image/gif, image/jpeg, image/png, image/jpg',
				// },
				// accounts: {
				// 	type: "",
				// 	fund: "",
				// 	funds: "",
				// 	ways: "",
				// 	secondfunds: "",
				// 	thirdlyfunds: "",
				// 	amount: "",
				// 	operator: "",
				// 	paymentDate: "",
				// 	notes: "",
				// 	files: [],
				// 
				// },
				// datafileId1:[],
				// datafileId2:''
			}
		},
		components:{
			Address:address
		},

		created: {

		},
		methods: {
			
				surreAddress: function(obj) {
				this.addsiteObj = obj;
				this.searchObj.cityId = obj.id;
				this.searchObj.cityIdName = obj.name
				this.searchObj.mergerShortName = obj.mergerShortName
				 this.data.areaName= obj.mergerShortName
				this.addsiteshow = !this.addsiteshow
			},
			// getfunds: function(type) {
			// 
			// 	this.accounts.fund = "";
			// 	this.accounts.funds = "";
			// 	this.accounts.secondfunds = "";
			// 	this.accounts.thirdlyfunds = ""
			// 	this.secondfundsdata = [];
			// 	this.thirdlyfundsdata = [];
			// 	this.accounts.amount = "";
			// 	this.accounts.operator = "";
			// 	this.accounts.paymentDate = "";
			// 	this.accounts.notes = "";
			// 	this.accounts.files = []
			// 
			// 	for(var i = 0; i < this.fundsdataAll.length; i++) {
			// 		if(type == this.fundsdataAll[i].id) {
			// 			this.fundsdata = this.fundsdataAll[i].items
			// 		}
			// 	}
			// 
			// },
			// 
			// getsecondfunds: function(id) {
			// 
			// 	this.accounts.fund = "";
			// 	this.accounts.secondfunds = ""
			// 	this.accounts.thirdlyfunds = ""
			// 	this.secondfundsdata = [];
			// 	this.thirdlyfundsdata = [];
			// 
			// 	for(var i = 0; i < this.fundsdata.length; i++) {
			// 
			// 		if(id == this.fundsdata[i].id) {
			// 
			// 			if(!this.fundsdata[i].items) {
			// 				this.accounts.fund = id
			// 				this.secondfundsdata = []
			// 			} else {
			// 				this.secondfundsdata = this.fundsdata[i].items
			// 
			// 			}
			// 		}
			// 
			// 	}
			// 
			// },
			// 
			// getthirdlyfunds: function(id) {
			// 
			// 	this.accounts.fund = "";
			// 	this.accounts.thirdlyfunds = ""
			// 	this.thirdlyfundsdata = [];
			// 	for(var i = 0; i < this.secondfundsdata.length; i++) {
			// 
			// 		if(id == this.secondfundsdata[i].id) {
			// 
			// 			if(!this.secondfundsdata[i].items) {
			// 				this.accounts.fund = id
			// 				this.thirdlyfundsdata = []
			// 			} else {
			// 				this.thirdlyfundsdata = this.secondfundsdata[i].items
			// 
			// 			}
			// 		}
			// 
			// 	}
			// },
			// 
			// getfourthlyfunds: function(id) {
			// 	this.accounts.fund = "";
			// 	for(var i = 0; i < this.thirdlyfundsdata.length; i++) {
			// 
			// 		if(id == this.thirdlyfundsdata[i].id) {
			// 
			// 			if(!this.thirdlyfundsdata[i].items) {
			// 				this.accounts.fund = id
			// 
			// 			}
			// 		}
			// 
			// 	}
			// 
			// },
			// 
			// upimg: function(e) {
			// 
			// 	var that = this
			// 
			// 	if(e.target.files.length == 0) {
			// 
			// 		return false
			// 	}
			// 	console.log("这里么")
			// 	var imgfiles = e.target.files
			// 	var imgdata = e.target.files
			// 	console.log(e)
			// 	console.log("11111111111111111")
			// 	var formData = new FormData();
			// 	for(var i = 0; i < imgdata.length; i++) {
			// 
			// 		var imgsize = imgdata[i].size
			// 		var imgstyle = imgdata[i].type
			// 		if(this.imgData.accept.indexOf(imgstyle) == -1) {
			// 
			// 			that.mui.toast("请选择正确的图片格式", {
			// 				duration: 'long',
			// 				type: 'div'
			// 			})
			// 
			// 			return false;
			// 		} else if(imgsize > 5242880) {
			// 
			// 			that.mui.toast("图片大小不能超过5M", {
			// 				duration: 'long',
			// 				type: 'div'
			// 			})
			// 
			// 			return false;
			// 		} else {
			// 
			// 			var datimg = imgdata[i]
			// 			formData.append('multipartFileList', datimg); // 多选文件数据
			// 
			// 		}
			// 
			// 	}
			// console.log("222222")
			// 	var that = this
			// var supplierId = this.$route.query.id
			// 	that.axios({
			// 		method: 'post',
			// 
			// 		url: '/wxapi/f/suppliers/uploadImages',
			// 
			// 		data: formData
			// 
			// 	}).then(function(res) {
			// 		console.log(res)
			// 		var dataFileId=res.data.data
			// 		for(var i = 0; i < dataFileId.length; i++) {
			// 			
			// 			
			// 			that.datafileId1.push(dataFileId[i].fileId)
			// 		}
			// 		that.datafileId2=that.datafileId1.join(',')
			// 		console.log(that.datafileId2)
			// 		var igdatas = res.data.data
			// 
			// 		for(var i = 0; i < igdatas.length; i++) {
			// 			that.accounts.files.push(igdatas[i])
			// 		}
			// 
			// 	}).catch(function(err) {
			// 		console.log(err)
			// 
			// 		that.mui.toast("图片上传失败请稍后重试" + err, {
			// 			duration: 'long',
			// 			type: 'div'
			// 		})
			// 
			// 	})
			// 
			// },
			// 
			// /*清除图片*/
			// 
			// cancelUp: function(index) {
			// 
			// 	this.accounts.files.splice(index, 1)
			// },
			read1(){
				this.readOnlyTrueOrFalse = !this.readOnlyTrueOrFalse
				if (this.readOnlyTrueOrFalse == true) {
					this.mui.toast("您现在可以修改供应商信息", {
						duration: 'long',
						type: 'div'
					})
					
				}
				if( this.disabledTrueOrFalse == "disabled"){
					this.disabledTrueOrFalse = null
				}
			},
			read() {
				var that=this
				var pdleixingID=this.ways
				if( pdleixingID== ''){
					pdleixingID=this.leixingId
				}
				if (that.searchObj.cityId =='' ||that.searchObj.cityId ==null) {
					that.searchObj.cityId=that.areaIds
				}
				if( this.disabledTrueOrFalse ==null ||this.disabledTrueOrFalse==''){
					 this.disabledTrueOrFalse = "disabled"
				}
			
				this.readOnlyTrueOrFalse = !this.readOnlyTrueOrFalse
				
				if (this.readOnlyTrueOrFalse == true) {
					
					var that=this
					var supplierName1 = document.getElementById("supplierName").value
					var categoryName1 = document.getElementById("categoryName").value
					
					var cpntacts1 = document.getElementById("cpntacts").value
					var supplierPhone1 = document.getElementById("supplierPhone").value
					var area1 = document.getElementById("areaName").value
					var address1 = document.getElementById("address").value

					var supplierId = this.$route.query.id
					console.log(that.datafileId2)
					this.axios({
						method: 'put',
						data: {
							supplierName: supplierName1,
							categoryName: categoryName1,
							supplierStage: this.supplierStage1,
							categoryId: pdleixingID,
							contacts: cpntacts1,
							supplierPhone: supplierPhone1,
							area:that.searchObj.cityId ,
							address: address1,
							lng:that.lng1,
							lat:that.lat1,
							// fileIds:that.datafileId2

						},
						url: '/wxapi/f/suppliers/' + supplierId,


					}).then(function(res) {
						console.log(res)
						that.mui.toast("修改供应商信息成功", {
							duration: 'long',
							type: 'div'
						})

					}).catch(function(err) {
						console.log(err)
					})

					var supplierId = this.$route.query.id
					this.axios({
						method: 'get',

						url: '/wxapi/f/suppliers/' + supplierId

					}).then(function(res) {

						console.log(res)
						that.data = res.data.data;
						that.listProduct = res.data.data.listProduct;
						that.datafiles = res.data.data.files;
						
						var map = new window.BMap.Map('allmap') //创建地图
						// map.enableScrollWheelZoom(true);////启用滚轮放大缩
						var point = new window.BMap.Point(that.lng1, that.lat1) //设置地图位置
						map.centerAndZoom(point, 12)
						var marker = new window.BMap.Marker(point) // 创建标注
						map.addOverlay(marker)
						marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画        

					}).catch(function(err) {
						console.log(err)

					})
					
					
					

				
				}
			},
			beizhu1(){
				this.readonlytext = !this.readonlytext
				this.$nextTick(() =>{
					this.$refs.textarea.focus()
				})
				this.mui.toast("您可以修改备注", {
					duration: 'short',
					type: 'div'
				})
			},
			beizhu() {
				this.readonlytext = !this.readonlytext
				
				if (this.readonlytext == true) {
				
					var that=this
					var remark1 = document.getElementById("remark").value
					console.log(remark1)

					var supplierId = this.$route.query.id
					this.axios({
						method: 'put',
						data: {
							remark: remark1


						},
						url: '/wxapi/f/suppliers/' + supplierId,


					}).then(function(res) {
						console.log(res)
						that.mui.toast("修改备注成功", {
							duration: 'short',
							type: 'div'
						})
					}).catch(function(err) {
						console.log(err)
					})
					
					this.axios({
						method: 'get',
					
						url: '/wxapi/f/suppliers/' + supplierId
					
					}).then(function(res) {
					
						console.log(res.data.data)
						that.data = res.data.data;
						that.listProduct = res.data.data.listProduct;
						that.datafiles = res.data.data.files;
						that.lng1 = res.data.data.lng;
						that.lat1 = res.data.data.lat;
						
					
					
					
						var map = new window.BMap.Map('allmap') //创建地图
						// map.enableScrollWheelZoom(true);////启用滚轮放大缩
						var point = new window.BMap.Point(that.lng1, that.lat1) //设置地图位置
						map.centerAndZoom(point, 12)
						var marker = new window.BMap.Marker(point) // 创建标注
						map.addOverlay(marker)
						marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画        
					}).catch(function(err) {
						console.log(err)
					
					})
					

				}
				
			}, 
			baiduMap() {
				var that = this
				var map = new window.BMap.Map('allmap') //创建地图
				// map.enableScrollWheelZoom(true);////启用滚轮放大缩
				var point = new window.BMap.Point(that.data.lng, that.data.lat) //设置地图位置
				map.centerAndZoom(point, 12)
				var marker = new window.BMap.Marker(point) // 创建标注
				map.addOverlay(marker)
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画         // 将标注添加到地图中
				// map.addEventListener("click",function(e){
				// 	alert(e.point.lng + "," + e.point.lat);
				// 	that.lng=e.point.lng
				// 	that.lat = e.point.lat
				// 	
				// })


			},
			yixiang(){
					
						this.supplierStage1='0'
				
				
			},
			qianyue(){
			
					this.supplierStage1='1'
				
			
			}
			

		},

		mounted: function() {
			var that = this
			that.axios({
			
				method: 'get',
			
				url: '/api/f/basecodes?type=supplyType'
			
			}).then(function(res) {
				// that.$refs.tipshow.alertshow(5)
				console.log(res.data.data)
				that.dataZD = res.data.data;
				
				
			
			}).catch(function(err) {
				console.log(err)
			
			})


			//获取数据
			var that = this
			// 	this.axios({
			// 	method: 'put',
			// 	data:{
			// 		
			// 	},
			// 	url: '/wxapi/f/suppliers/'+supplierId,
			// 	
			// 	
			// }).then(function(res) {
			// 	console.log(res.data.data)
			// 	
			// }).catch(function(err) {
			// 	console.log(err)
			// })
			// 
			// 


			var supplierId = this.$route.query.id

			this.axios({
				method: 'get',

				url: '/wxapi/f/suppliers/' + supplierId

			}).then(function(res) {

				console.log(res.data.data)
				that.data = res.data.data;
				that.listProduct = res.data.data.listProduct;
				that.datafiles = res.data.data.files;
				that.lng1 = res.data.data.lng;
				that.lat1 = res.data.data.lat;
				that.state1=res.data.data.supplierStage;
				that.areaIds=res.data.data.area;
				that.data.categoryName=res.data.data.categoryName;
				that.leixingId=res.data.data.categoryId
				console.log(that.data.categoryName )
				
				if (that.data.categoryName !=undefined) {
					that.dataZD.unshift({
						id: '',
						value:that.data.categoryName
					})
				}
				if(that.data.categoryName ==undefined ){
					that.dataZD.unshift({
						id: "",
						value:that.hanzi
					})
				}
				if (that.data.supplierPhone.length!=0) {
					that.suppliertelImg=true
				}
				
			
				var map = new window.BMap.Map('allmap') //创建地图
				// map.enableScrollWheelZoom(true);////启用滚轮放大缩
				var point = new window.BMap.Point(that.lng1, that.lat1) //设置地图位置
				map.centerAndZoom(point, 12)
				var marker = new window.BMap.Marker(point) // 创建标注
				map.addOverlay(marker)
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画        
			}).catch(function(err) {
				console.log(err)

			})
			
			//this.baiduMap()
			// 百度地图API功能
			// var that=this
			// var map = new BMap.Map("allmap");
			// var point = new BMap.Point(that.data.lng, that.data.lat);
			// 
			// console.log(that.data.lng)
			// map.centerAndZoom(point, 15);
			// var marker = new BMap.Marker(point); // 创建标注
			// map.addOverlay(marker); // 将标注添加到地图中
			// marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

		}

	}
</script>

<style scoped="scoped">
	#supplier_details {
		position: absolute;
		width: 100%;
		height: auto;
	}
	
	input {
		border: none;
		font-size: 0.7rem;
		color: rgba(99, 99, 99, 1);
	}

	img {
		vertical-align: top;
	}

	/* 头部开始 */
	.supplier_details_top {
		width: 17.75rem;
		height: 31rem;
		border-radius: 0.25rem;
		background-color: white;
		margin: 0.5rem;
	}

	.top_div1>img {
		margin-top: 0.75rem;
		margin-bottom: 0.3rem;
	}

	.top_div1>span {
		display: inline-block;
		margin-top: 0.75rem;
		width: 4.2rem;
		height: 0.8rem;
		font-size: 0.8rem;
		font-family: PingFang-SC-Medium;
		
	}

	.top_div2 {
		
	}

	.top_div2>ul>li {
		margin-top: 0.275rem;
		height: 2rem;

	}

	.top_div2>ul>li:last-child {
		/* height: 5rem; */
	}

	.top_div2>ul>li:last-child>span:last-child {
		/* border-bottom: none; */

	}

	.top_div2_s1 {

		margin-left: 0.625rem;

	}

	.top_div2_s1>img {
		margin-top: 0.25rem;
	}

	.top_div2_s2 {

		width: 1.6rem;
		height: 0.65rem;
		font-size: 0.65rem;
		margin-left: 0.55rem;
		
	}

	.top_div2_s3 {
		color: rgba(99, 99, 99, 1);
		display: inline-block;
		margin-left: 1.775rem;
		font-size: 0.675rem;
		border-bottom: 1px solid rgba(99, 99, 99, 0.2);
		padding-left: 0.1rem;
		padding-bottom: 0.475rem;
		width: 12.6rem;
	}
	#xuanze input{
	vertical-align: -15%;
	}
	.top_div3 {
		height: 0.025rem;
		width: 16rem;
		background-color: rgba(99, 99, 99, 0.2);
		margin-left: 1.75rem;
		margin-bottom: 0.5rem;
	}

	.top_div4 {}

	.top_div4>p>.s1 {
		margin-left: 0.675rem;
	}

	.top_div4>p>.s1>img {
		margin-top: 0.13rem;
	}

	.top_div4>p>.s2 {
		width: 3rem;
		height: 0.65rem;
		font-size: 0.65rem;
		color: #000000;
	}

	.div4_div1 {
		width: 15.625rem;
		height: 9.475rem;

		margin: 0.65rem 1.075rem 0rem 1.05rem;
	}

	/* 头部结束 */
	/* 中部开始 */
	.supplier_details_center {
		width: 17.75rem;
		height: 16.775rem;
		background-color: white;
		border-radius: 0.25rem;
		margin: 0.5rem;
	}

	.ppp {
		color: black;
		padding: 0.5rem 0;
	}

	.ppp .s1 {
		font-size: 0.8rem;
	}

	.ppp .s2 {
		display: inline-block;
		margin-left: 11rem;
	}

	.center_div2 {
		width: 17.75rem;
		height: auto;
	}

	.center_div2>ul {}

	.center_div2>ul>li {
		margin-top: 0.275rem;
		height: 2rem;

	}

	.center_div2>ul>li:last-child {
		height: 5rem;
	}

	.center_div2>ul>li:last-child>span:last-child {
		border-bottom: none;

	}

	.center_div2_s1 {

		margin-left: 0.625rem;

	}

	.center_div2_s1>img {
		margin-top: 0.25rem;
	}

	.center_div2_s2 {

		width: 1.6rem;
		height: 0.65rem;
		font-size: 0.65rem;
		margin-left: 0.55rem;
	}

	.center_div2_s3 {
		color: rgba(99, 99, 99, 1);
		display: inline-block;
		margin-left: 1.775rem;
		font-size: 0.675rem;
		border-bottom: 1px solid rgba(99, 99, 99, 0.2);
		padding-left: 0.1rem;
		padding-bottom: 0.475rem;
		width: 12.6rem;
	}

	.fenleiyoukong>span {
		display: inline-block;
		margin-right: 0.5rem;
	}

	/* 中部结束 */
	/* 下部开始 */
	.supplier_details_bottom {
		width: 17.75rem;
		height: 7.975rem;
		border-radius: 0.25rem;
		background-color: white;
		margin: 0rem 0.5rem 0.825rem 0.5rem;
	}

	.bottom_div1 {
		padding-top: 0.675rem;
	}

	.bottom_div2 {
		/* margin: 0.5rem 0.85rem; */
	}

	.bottom_div2>textarea {
		display: inline-block;
		border: none;
		overflow: hidden;
		resize: none;
		width: 17.75rem;
		height: 7rem;
		font-size: 0.75rem;
		color: rgba(99, 99, 99, 1);
		font-weight: 500;
		margin-top: 0.5rem;
	}

	/* 下部结束 */
</style>
