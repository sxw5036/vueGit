<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem><a  @click="goback">发货管理</a>
				</BreadcrumbItem>
				<BreadcrumbItem>新建发货</BreadcrumbItem>

			</Breadcrumb>
		</div>

		<div class="newlyOrder">

			<div class="iv_formbox" style='position: relative;'>
				<div  v-show="threeShow" style="position: absolute; top: 30px; left:630px; " class="threeSelect">
					<div style="margin-bottom: 5px;">
						<Select style="width:144px;" placeholder='请选择省' v-model="provinceMsg" @on-change="pickprovince(provinceMsg)">
							<Option v-for="item in provinceData" :value="item.id" :key="item.name">{{ item.name }}</Option>
						</Select>
						
						<Select style="width:144px;" placeholder='请选择市' v-model="cityMsg" @on-change="pickdistrict(cityMsg)">
							<Option v-for="item in cityData" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>
						
						<Select style="width:144px;" placeholder='请选择区/县' v-model="districMsg" @on-change="changedistric(districMsg)">
							<Option v-for="(item,index) in districData" :value="item.id" :key="item.id">{{ item.name }}</Option>
						</Select>
					</div>
					 <Col style="float: left; margin-right: 10px;">
						 <DatePicker style='width: 120px;' v-model="sendTime" type="date"  placeholder="计划发货时间" ></DatePicker>
						<!-- @on-change="getoperated" -->
					</Col>
					</Select><Select v-model="jxShang" clearable style="width:100px; margin-right: 10px;"  placeholder='经销商'>
						<Option v-for="(item,index) in jxsdata" :value="item.id" :key='index'>{{item.name}}</Option>
						
					</Select><Button style=" margin-right: 70px;"  >收货人</Button><Button type="primary" size="small" style=" width: 60px;" @click="searchBGid()" >检索</Button>
					
					<div>
						 <Scroll  style='height: auto;'>
							<Card style='height: auto;'>
								
										<!-- @click="xuanzhong(item.barcode)" -->  
								<CheckboxGroup v-model="social"  @on-change="checkAllGroupChange()" >
									<Checkbox :label="item.id"  v-for="(item,index) in baoguoData" :key='index' style='display: block;' >
										<span style="  border: 1px solid gray; border-radius:5px; cursor: pointer; display: inline-block; width: 300px; height: 30px; margin: 5px 0; line-height: 30px; padding-left: 10px;" >{{item.barcode}}</span>
									</Checkbox>
       
								</CheckboxGroup>
								
									
							</Card>
						</Scroll>
						
					</div>
					<Button type="primary" size="small" style="margin-left: 390px; width: 60px;" @click="qrxz()" >确定</Button>
				</div>
				<div class="iv_form">
			    <Form  :label-width="120">

						
				<FormItem label="包裹编号" >
					<Input v-model="deliver.no" placeholder="请输入发货包裹编号" style="width:80%; "></Input>
					<Button type="primary" size="small" style="margin-left: 3px; width: 60px;" @click="threeSs()" >选择</Button>
					
					
				</FormItem>
				
				<FormItem label="收货人">
					<Input v-model="deliver.name" placeholder="请输入客户姓名..." style="width:80%;"></Input>
				</FormItem>
				<FormItem label="收货人电话">
					<Input v-model="deliver.tel" placeholder="请输入客户电话..." style="width:80%;"></Input>
				</FormItem>
				<FormItem label="收货地址">
					<Input v-model="deliver.address" placeholder="请输入发货地址..." style="width:80%; "></Input>
				</FormItem>

				<FormItem label="物流公司">
					<Select v-model="deliver.com" style="width:80%;" placeholder="请选择物流公司...">
						<Option v-for="(item,index) in wuliudata" :value="item.id" :key="index">{{ item.name }}</Option>
					</Select>
				</FormItem>
				<FormItem label="物流单号">
					<Input v-model="deliver.num" placeholder="请输入物流单编号..." style="width: 80%;"></Input>
				</FormItem>
				<FormItem label="备注">
					<Input type="textarea" :rows="2" v-model="deliver.notes" placeholder="请输入相关备注..." style="width: 80%; "></Input>
				</FormItem>
				<FormItem label="上传附件">

					<div style="margin-top:10px; padding:2% 0; ">
						<div class="pl">
							<div :key='index' class="demo-upload-list" v-for="(item,index) in uploadList">
								<template>
									<img :src="item.path">
									<div class="demo-upload-list-cover">
										<Icon type="ios-eye-outline" @click.native="handleView(item.path)"></Icon>
										<Icon type="ios-trash-outline" @click.native="handleRemove(item.id,index)"></Icon>
									</div>
								</template>

							</div>
							<Upload multiple ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" :action="uploadpathdata" name="multipartFileList" style="display: inline-block;width:58px;">
								<div style="width: 58px;height:58px;line-height: 58px;">
									<Icon type="ios-camera" size="20"></Icon>
								</div>
							</Upload>
						</div>
						<Modal title="图片详情" v-model="visible" style="text-align: center;">
							<img :src="imgName" style="width: 80%;">
							<div slot="footer">
								<Button type="error" size="large" @click="visible=false">关闭</Button>
							</div>
						</Modal>
					</div>

				</FormItem>

					</Form>

					<div class="iv_form_but center">
						<button type="reset" class="details_opBut auto linkBlock smallsize" @click="formeReset">重置</button>
						<button class="details_opBut linkBlock smallsize" @click="submitdata()">确认</button>
						<!--<Button type="primary">确认</Button>-->

					</div>

				</div>

			</div>

			<div>

			</div>
		</div>



	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				provinceData: [], //省份数据
				cityData: [], //城市数据
				cityCache: {},
				districData: [], //省/县数据
				districtCache: {},
				provinceMsg: "", //省份选中数据
				cityMsg: "", //城市选中数据
				districMsg: "", //省/县选中数据
				jxsdata:'',
				wuliudata:'',
				social:[],
				sendTime:'',
				jxShang:'',
				baoguoData:'',
				baoguoDataCache:{},
				baoguoID:'',
				threeShow:false,
				  // cityList: [
      //               {
      //                   value: 'New York',
      //                   label: 'New York'
      //               },
      //               {
      //                   value: 'London',
      //                   label: 'London'
      //               },
      //               {
      //                   value: 'Sydney',
      //                   label: 'Sydney'
      //               },
      //               {
      //                   value: 'Ottawa',
      //                   label: 'Ottawa'
      //               },
      //               {
      //                   value: 'Paris',
      //                   label: 'Paris'
      //               },
      //               {
      //                   value: 'Canberra',
      //                   label: 'Canberra'
      //               }
      //           ],
                model8: '',
				  visible1: false,
				deliver: {
					
				},
				delivercompany:[],
				uploadList:[],
				barcodeCache:[],
				
				uploadList: [],
				uploadpathdata: '/api/f/dispatchs/dispatchId/files',
				visible: false,
				defaultList: [],
				imgName: '',
				uparry: {
					multipartFileList: [],
					fileIds: [],

				},

				

			};
		},

		methods: {
			/*选择市*/
			
			pickprovince: function(id) {
				/*_this.city=res.data.data*/
				this.cityMsg = ""
				this.districMsgcache = ""
			
				this.cityData = []
				this.districData = []
				/*this.cityid = 0
				this.districtid = 0*/
			
				var that = this
				var citycache = this.cityCache
				var cityshow;
				cityshow = citycache[id]
			
				if(!cityshow) {
					that.axios({
						method: 'get',
						url: '/api/f/cities?parentId=' + id + ''
			
					}).then(function(res) {
			
						cityshow = res.data.data
			
						that.cityCache[id] = cityshow
						that.cityData = that.cityCache[id]
			
						//that.pickdistrict(that.cityData[0].id, 0)
			
					}).catch(function(err) {
						console.log(err)
			
					})
			
				} else {
			
					this.cityData = cityshow
					//this.pickdistrict(this.cityData[0].id, 0)
			
				}
			
			},
			
			/*选择区*/
			
			pickdistrict: function(id, index) {
				this.districMsg = ""
				this.districMsgcache = ""
				this.districData = []
			
				/*	this.districtid = 0
					this.cityid = index*/
				var that = this
			
				var districtcache = this.districtCache
				var districtshow;
			
				districtshow = districtcache[id]
			
				if(!districtshow) {
					that.axios({
						method: 'get',
			
						//url: '//api/addresses/1234567890000'
						url: '/api/f/cities?parentId=' + id + ''
			
					}).then(function(res) {
			
						districtshow = res.data.data
						districtcache[id] = districtshow
						that.districData = districtshow
			
					}).catch(function(err) {
						console.log(err)
			
					})
			
				} else {
			
					this.districData = districtshow
			
				}
			
			},
			checkAllGroupChange(){
				var baoguoDataCache=this.baoguoDataCache
				var social=this.social;
				var str='';
				
				for (var i=0; i<social.length;i++) {
					if(baoguoDataCache[social[i]]){
						var data=baoguoDataCache[social[i]]
						
						str+=data.barcode+','
					}
				}
				
				this.deliver.no=str
				console.log(str)
				console.log(this.social)
				
			},
			submitdata(){
					var that=this
				if(that.deliver.name == "" || that.deliver.name == null) {
					this.$Message.error('请输入收货人姓名！');
					return false;
				} else if(that.deliver.tel == "" || that.deliver.tel == null || that.deliver.tel.trim().length == 0) {
					this.$Message.error('请输入收货人电话号码！');
					return false;
				} else if(that.deliver.address == "" || that.deliver.address == null || that.deliver.address.trim().length == 0) {
					this.$Message.error('请输入收货人地址！');
					return false;
				} else if(that.deliver.com == "" || that.deliver.com == null || that.deliver.com.trim().length == 0) {
					this.$Message.error('请输入选择物流公司！');
					return false;
				} else if(that.deliver.num == "" || that.deliver.num == null) {
					this.$Message.error('请输入物流单号！');
					return false;
				} else {
			
				var datasub=[
					
				]
				for(var i=0;i<that.social.length;i++){
					var dataSubSon={	
							finishedStockItemId:that.social[i],
						}
					datasub.push(dataSubSon)
				}
				this.axios({
					
					method:'post',			
					data:{
						consignee:that.deliver.name,
						consigneeTel:that.deliver.tel,
						address:that.deliver.address,
						logisticsCompanyId:that.deliver.com,
						logisticsNo:that.deliver.num,
						notes:that.deliver.notes, 
						dispatchBillItemDtoList:datasub,
						fileIds:[]
						
					},
					url:'/api/f/dispatchs',
					
				}).then(function(res){
					that.$Message.success("发货单生成成功");
					setTimeout(function() {
						 that.$router.push({
								name: 'delivers'				
						})
					}, 1000);
					
				
				}).catch(function(err){
					console.log(err)
				})
				}
			},
				searchBGid(){
				var cityId=''
				var that=this
		
				if(that.provinceMsg =='' || that.provinceMsg==null ||that.provinceMsg == undefined){
					cityId=''
				}else if( that.cityMsg =='' || that.cityMsg==null ||that.cityMsg == undefined){
					cityId=that.provinceMsg
				}else if( that.districMsg =='' || that.districMsg==null ||that.districMsg == undefined){
					cityId=that.cityMsg
				}else {
					cityId=that.districMsg
				}
				this.axios({
					method:'get',
					url:'/api/f/storages/finisheds/finishedStockNos?'+(that.sendTime == '' ? '' : '&plannTime=' + that.sendTime)+(that.jxShang == '' ? '' : '&dealerId=' + that.jxShang)+(cityId == '' ? '' : '&cityId=' + cityId)
				}).then(function(res){
					console.log("1111")
					console.log(res)
					var data=res.data.data
					var baoguoDataCache=that.baoguoDataCache
					
					for (var i=0;i<data.length;i++) {
						baoguoDataCache[data[i].id]=data[i]
					}
					
				
					
					that.baoguoData=data
				})
			},
			qrxz(){
				this.threeShow = !this.threeShow
			},
			xuanzhong(){
		
				this.baoguoID=this.social
				
			},
			threeSs(){
				this.threeShow = !this.threeShow
				this.searchBGid()
			
				
			},
			 handleOpen () {
                this.visible1 = true;
            },
            handleClose () {
                this.visible1 = false;
            },
			
			goback:function  () {
				this.$emit('openWindow', ('delivers'), ('发货管理'), ('08'), ('delivers'), ('delivers'))
             this.$router.push({
					name: 'delivers',

				})
			},
			
			
			handleSuccess(res, file) {
				var Res = res.data
				for(var i = 0; i < Res.length; i++) {
					this.uploadList.push(Res[i])

				}

			},
			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			handleRemove(fileid, index) {

				this.delfile(fileid, index)

			},
			handleFormatError(file) {
				this.$Notice.warning({
					title: '文件格式不正确',
					desc: '' + file.name + '文件格式不正确，请选择jpg,jpeg或png'
				});
			},
			handleMaxSize(file) {
				this.$Notice.warning({
					title: '超过文件大小限制',
					desc: '' + file.name + '文件太大，不超过5M'
				});
			},
			handleBeforeUpload(file) {
				this.file = file
				this.uparry.multipartFileList.push(this.file)

			},


			

		

			formeReset() {
				this.deliver = {}
				
			},

			

		},

		mounted: function() {

			var that = this;
			that.axios({
				method: 'get',
			
				url: '/api/f/cities?levelType=1'
			
			}).then(function(res) {
			
				that.provinceData = res.data.data
			
			}).catch(function(err) {
				console.log(err)
			
			})
			
			
			this.axios({
				method:'get',
				url:'/api/f/dealers/companies?status=1'
			}).then(function(res){
				console.log("SSSSS")
				console.log(res)
				that.jxsdata=res.data.data.companyList
				console.log("SSSSS")
			}).catch(function(err){
				console.log(err)
			})
			
			
			
			
			this.axios({
				method: 'get',
				url: '/api/f/company/logistics'
			}).then(function(res){
				console.log("AAAAAAAAAAAA")
				console.log(res)
				that.wuliudata=res.data.data
			}).catch(function(err){
				
				})
			
			this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},

					url: '/app/f/logistics'
				}).then(res => {

					if(res != false) {
						that.delivercompany = res.data.data;
					
					}
				})
}
			

	}
</script>

<style scoped="scoped">
	.Quick_navigation {
		width: 300px;
		position: fixed;
		z-index: 9;
		bottom: 70px;
		right: 20px;
	}
	
	.navigation {
		display: block;
		width: 100%;
		font-size: 0px;
	}
	
	.navigation ul {
		display: inline-block;
		width: 100%;
	}
	
	.navigation ul li {
		width: 33%;
		text-align: center;
		float: left;
		font-size: 14px;
		margin-bottom: 10px;
		color: #1890FF;
	}
	
	.navigation ul li a {
		color: #1890FF;
		text-decoration: underline;
	}
	
	.iv_form {
		display: block;
		width: 600px;
		padding: 30px 20px;
		background: #FFFFFF;
		border-radius: 6px;
	}
	.threeSelect select{
		float: left;
		display: inline-block;
	}
</style>