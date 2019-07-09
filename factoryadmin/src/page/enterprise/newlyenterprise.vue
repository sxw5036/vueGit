<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/">首页</BreadcrumbItem>
				<BreadcrumbItem  to="/enterprise/list">企业管理</BreadcrumbItem>
				<BreadcrumbItem>新建企业</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="form_nav">

			<Form :model="Newobj" :label-width="100">

				<FormItem label="企业名称">
					<Input style="width: 370px;" v-model="Newobj.name" placeholder="请输入企业名称..."></Input>
				</FormItem>

				<FormItem label="负责人姓名">
					<Input style="width: 370px;" v-model="Newobj.leaderName" placeholder="请输入负责人姓名..."></Input>
				</FormItem>

				<FormItem label="负责人电话">
					<Input style="width: 370px;" v-model="Newobj.tel" placeholder="请输入负责人电话..."></Input>
				</FormItem>

				<FormItem label="企业地区">
					<Select style="width:120px;" v-model="provinceMsg" @on-change="pickprovince(provinceMsg)">
						<Option v-for="item in provinceData" :value="item.id" :key="item.name">{{ item.name }}</Option>
					</Select>

					<Select style="width:120px;" v-model="cityMsg" @on-change="pickdistrict(cityMsg)">
						<Option v-for="item in cityData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

					<Select style="width:120px;" v-model="districMsg" @on-change="changedistric(districMsg)">
						<Option v-for="(item,index) in districData" :value="item.id" :key="item.id">{{ item.name }}</Option>
					</Select>

				</FormItem>

				<FormItem label="企业地址">
					<Input style="width: 370px;" v-model="Newobj.address" placeholder="请输入企业地址.."></Input>
				</FormItem>

				<FormItem label="企业状态">
					<RadioGroup v-model="Newobj.status">
						<Radio label="1">试用</Radio>
						<Radio label="2">正常</Radio>
						<Radio label="3">停用</Radio>
					</RadioGroup>
				</FormItem>

				<FormItem label="企业类型">
					<RadioGroup v-model="Newobj.type" @on-change="Newobj.payDate=''">
						<Radio label="1">免费用户</Radio>
						<Radio label="2">付费用户</Radio>

					</RadioGroup>
				</FormItem>

				<FormItem label="付款时间" v-show="Newobj.type==2">
					<DatePicker  style="width: 370px;" type="date" @on-change="enterprisepayDate" placeholder="请选择付款时间" :value="Newobj.payDate"></DatePicker>
				</FormItem>

				<FormItem label="有效期至">
					<DatePicker  style="width: 370px;" type="date" @on-change="enterpriseexpireDate" placeholder="请选择有效期到期时间" :value="Newobj.expireDate"></DatePicker>
				</FormItem>

				<FormItem label="">
					<Button type="primary" @click="sureAppend">确认添加</Button>
				</FormItem>

			</Form>

		</div>

	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {

				Newobj: {
					"name": "",
					"address": "",
					"created": "",
					"area": "",
					"expireDate": "",
					"leaderName": "",
					"payDate": "",
					"status": "",
					"statusName": "",
					"tel": "",
					"type": "",

				},

				provinceData: [], //省份数据
				cityData: [], //城市数据
				cityCache: {},
				districData: [], //省/县数据
				districtCache: {},
				provinceMsg: "", //省份选中数据
				cityMsg: "", //城市选中数据
				districMsg: "", //省/县选中数据

				operation: {}

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

			changedistric: function(id) {

				if(!id == true) {
					this.districMsgcache = ""

					return false;
				}
				this.districMsgcache = id

			},

			//付费用户付费时间

			enterprisepayDate: function(val) {
				this.Newobj.payDate =  val+" 00:00:00"
			},

			//企业有效期到期时间

			enterpriseexpireDate: function(val) {
				this.Newobj.expireDate = val+" 00:00:00"
			},

			//确认新增企业

			sureAppend: function() {

				var obj = this.Newobj;
				
				var name = obj.name;
				var leaderName = obj.leaderName;
				var tel = obj.tel;
				var area = this.districMsg;
				var address = obj.address;
				var status = obj.status;
				var type = obj.type;
				var payDate = obj.payDate;
				var expireDate = obj.expireDate;
				
				name=name.trim();
				leaderName=leaderName.trim();
				tel=tel.trim();
				address=address.trim();
				
				var mobile=/^0\d{2,3}-?\d{7,8}$/;
				var phone=/^1[3|4|5|7|8][0-9]{9}$/
				
				
				if(name.length<1){
					this.$Message.error('企业名称不能为空！');
					return false;
				}else if(leaderName.length<1){
					this.$Message.error('负责人不能为空！');
					return false;
				}else if(tel.length<1){
					this.$Message.error('负责人联系方式不能为空！');
					return false;
				}else if(phone.test(tel)==false&&mobile.test(tel)==false){
					this.$Message.error('负责人联系方式格式不正确！');
					return false;
				}else if(area==""||area==null){
					this.$Message.error('企业地区不能为空！');
					return false;
				}else if(address.length<1){
					this.$Message.error('企业详细地址不能为空！');
					return false;
				}else if(status==""||status==null){
					this.$Message.error('企业状态不能为空！');
					return false;
				}else if(type==""||type==null){
					this.$Message.error('企业类型不能为空！');
					return false;
				}else if(type==2&&payDate==""){
					this.$Message.error('付费用户付费时间不能为空！');
					return false;
				}else if(expireDate==""||expireDate==null){
					this.$Message.error('有效期到期时间不能为空！');
					return false;
				}
				
				
				const msg = this.$Message.loading({
					content: 'Loading...',
					duration: 0
				});

				var that = this

			

				this.axios({
					method: 'post',
					url: '/api/f/branch',

					data: {
						
						"name": name,
						"leaderName":leaderName,
						"tel":tel,
						"area":area,
						"address":address,
						"status":status,
						"type":type,
						"payDate":payDate==""?undefined:payDate,
						"expireDate":expireDate
						
					}

				}).then(function(res) {
					setTimeout(msg, 100);

					var verify = [{
							"name": "name",
							"note": "企业名称"
						},
						{
							"name": "leaderName",
							"note": "负责人姓名 "
						},
						{
							"name": "mobile",
							"note": "负责人联系方式 "
						},
						{
							"name": "area",
							"note": "企业地区"
						},
						{
							"name": "address",
							"note": "企业详细地址 "
						}, {
							"name": "status",
							"note": "企业状态"
						}, {
							"name": "type",
							"note": "企业类型"
						}, {
							"name": "payDate",
							"note": "支付时间"
						}, {
							"name": "expireDate",
							"note": "有效期到期时间"
						},

					]

					if(Isjurisdiction.isright(res, that, verify) == false) {
						return false
					}

				

					that.$Message.success("添加成功")
					
					that.$router.push({
						name: "enterpriseList",
						
					})

					
                         					
				}).catch(function(err) {
					setTimeout(msg, 100);
					that.$Message.error('出错了，请稍后重试！');

				})

				
				

			}

		},

		mounted: function() {

			var keydata = this.$route.query.key
			var operation = this.operation
			Isjurisdiction.user_jurisdiction(keydata, operation)

			var that = this

			//选择所有省份
			that.axios({
				method: 'get',

				url: '/api/f/cities?levelType=1'

			}).then(function(res) {

				that.provinceData = res.data.data

			}).catch(function(err) {
				console.log(err)

			})

		},

	}
</script>

<style scoped="scoped">
	#p_lea {
		width: 200px;
		margin-right: 10px;
	}
</style>

<style src='./../../assets/css/department.css'></style>