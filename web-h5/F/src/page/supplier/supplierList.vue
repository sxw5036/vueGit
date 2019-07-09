<template>
	<div id="client_list">
		<div class="client_top">
			<div class="client_top_div1">
				<div class="mui-input-row mui-search" style="height: 2rem;">
					<input type="search" @change="seachData()" class="mui-input-clear" placeholder="姓名/电话号" v-model="telName" >
				</div>
			</div>
			<p><span style=" margin-left: 0.5rem; width: 5rem; display: inline-block; " @click="addsiteshow=!addsiteshow"><input  placeholder="选择地区" @change="changeProduct2($event)"  style="width: 2.675rem; font-size: 0.65rem; margin: 0; padding: 0; border: none; color: black;" readonly="readonly" v-model="searchObj.cityIdName" /> <img src="../../assets/img/supplier/xiasanjiao.png" style=" width: 0.5rem; height: 0.5rem; margin-left: 0.4rem;" />
				</span><span style=" margin-left: 0.3rem; width: 5rem; display: inline-block;"><select class="select"  @change="changeProduct1($event)" v-model="ways1" style="width: auto; display: inline-block; margin: 0; padding: 0; margin-left:0rem; color: #000000; font-size: 0.625rem;">
					
					<option :value="item.id" v-for="(item,index) in dataZD" :key="index">{{item.value}}</option>
				</select><img src="../../assets/img/supplier/xiasanjiao.png" style=" width: 0.5rem; height: 0.5rem; margin-left: 0.8rem;" /></span>
				<span style=" width: 5rem; display: inline-block;"><select class="select"  @change="changeProduct($event)" v-model="ways" style="width: auto; display: inline-block; margin: 0; padding: 0; margin-left:0rem; color: #000000; font-size: 0.625rem;">
					
					<option :value="item.value" v-for="(item,index) in payways" :key="index">{{item.name}}</option>
				</select><img src="../../assets/img/supplier/xiasanjiao.png" style=" width: 0.5rem; height: 0.5rem; margin-left: 0.2rem; " /></span>
			</p>
		</div>
		<div class="client_list_bottom">
			<ul>
				<li v-for=" (item,index) in data" :key="index" >
					<router-link :to="{name:'supplierDetails',query:{id:item.id}}">
					<span class=".ss1">
						<span class=".ss">

							<img src="../../assets/img/supplier/gongyingshang1.png" style="width: 1.8rem; height: 1rem; padding-right: 0.8rem;" />
						</span>

					</span>
					<div class="center_div1">
						<span>【{{item.categoryName}}】{{item.supplierName}}</span>
						<p><span class="s1">{{item.contacts}}</span><span class="s2">{{item.supplierPhone}}<span class="s3" style="display: inline-block;margin-left: 0.9rem; "><img src="../../assets/img/supplier/yjt.png" style="width: 0.5rem; height: 0.6rem;" /></span></span> </p>
						<p class="p1">{{item.areaName}}</p>
					</div>
					</router-link>
				</li>
				
			</ul>

		</div>
		<div class="divbtn">
			<router-link :to="{name:'newSupplierSigning'}">
			<button >新建供应商</button>
			</router-link>
		</div>
		<Address :show="addsiteshow" @sure='surreAddress' @cancel="addsiteshow=!addsiteshow"></Address>
	</div>
</template>

<script>
	import address from '@/components/address'
	import alert from '@/components/alert'
	export default {

		name: 'supplierList',

		data() {

			return {
				telName:'',
				addsiteObj: {},
				searchObj: {
					startTime: "",
					endTime: "",
					cityId:"",
					cityIdName:"",
					condation:"",
					dealerId:""
				},
				addsiteshow: false,
				data:[],
				ways2:'',
				ways:'',
					payways: [
					{
						name:"选择状态",
						value:''
					},
					{
						name: '意向供应商',
						value: '0'
					},
					{
						name: '签约供应商',
						value: '1'
					}
				],
				ways1:'',
				
				dataZD:[
					
				]

			}

		},
		components: {
			Address: address,
			alert:alert
		
		},


		methods: {
			
				changeProduct(event) {
			        this.ways = event.target.value; //获取商品ID，即option对应的ID值
					console.log(this.ways)
					this.seachData()
			    },
				changeProduct1(event) {
				    this.ways1 = event.target.value; //获取商品ID，即option对应的ID值
					
					this.seachData()
				},
			
			surreAddress: function(obj) {
				this.addsiteObj = obj;	
				this.searchObj.cityId=obj.id;
				this.searchObj.cityIdName=obj.name
				this.searchObj.mergerShortName=obj.mergerShortName
				this.addsiteshow = !this.addsiteshow
				if( this.searchObj.cityId != ''){
					console.log(this.searchObj.cityId )
					this.seachData()
					
				}
			},
			
				seachData(){
				var that = this
				console.log(that.searchObj.cityId)
				console.log(that.ways1)
				console.log(that.ways)
				this.axios({
					method: 'get',
				
				
					url: '/wxapi/f/suppliers?'+ (that.ways1 == '' ? '' : '&type=' + that.ways1)+(that.ways == '' ? '' : '&status=' + that.ways)+(that.searchObj.cityId == '' ? '' : '&area=' + that.searchObj.cityId)+(that.telName == '' ? '' : '&keywords=' + that.telName)
				
				}).then(function(res) {
					that.data = res.data.data;
					console.log(res)
				
				}).catch(function(err) {
					console.log(err)
				
				})
				// console.log("1")
			}

		},
		mounted: function() {
			
			var that=this
				
					this.axios({
					
					method: 'get',
					
					url: '/wxapi/f/suppliers'
				
				}).then(function(res) {
					 // that.$refs.tipshow.alertshow(5)
					console.log(res.data.data)
					that.data=res.data.data;
					
				
				}).catch(function(err) {
					console.log(err)
				
				})
					this.axios({
					
					method: 'get',
					
					url: '/api/f/basecodes?type=supplyType'
				
				}).then(function(res) {
					 // that.$refs.tipshow.alertshow(5)
					console.log(res.data.data)
					that.dataZD=res.data.data;
					that.dataZD.unshift({
						id:"",
						value:"选择类型"
					})
				
				}).catch(function(err) {
					console.log(err)
				
				})
				

		}
		/**/

	}
</script>

<style scoped="scoped">
	#client_list {
		position: absolute;
		width: 100%;
		height: auto;
	}
	.client_top_div1 input::-webkit-input-placeholder {
         /* placeholder颜色  */
         color: rgba(99,99,99,0.6);
		 font-size: 0.7rem;
        
     }
	  input::-webkit-input-placeholder {
	      /* placeholder颜色  */
	      color: black;
	     
	  }
	p {
		margin: 0;
	}

	.client_top {
		height: 3.74rem;
		background-color: white;
	}

	.client_top_div1 {
		padding-top: 0.5rem;
		width: 90%;

		margin: 0 auto;

	}

	.client_top_div1>div>input {
		border-radius: 0.75rem;
		width:100%;
		background:rgba(239,239,239,1);
	}

	.client_top_div1>div span {
		/* placeholder颜色  */

		/* placeholder字体大小  */
		font-size: 0.55rem;
		/* placeholder位置  */
		text-align: center;
	}

	.client_top>p {
	/* 	margin: 0 auto;
		width: 16rem; */
		text-align: center;
	}

	.client_top>p>span {

		color: black;
		font-size: 0.625rem;
	}

	.client_list_bottom {
		
		width: 95%;
		height: auto;
		margin: 0.5rem 0.5rem 1rem 0.5rem;
	}

	.client_list_bottom>ul {
		width: 100%;
		border-radius: 0.25rem;
		background-color: white;
		margin-bottom: 5rem;
	}

	.client_list_bottom>ul>li {
		height: 4.2rem;
		border-bottom: 1px solid rgba(99, 99, 99, 0.2) ;
		margin-left:0.62rem ;
		width: 95%;
		
	}
	
	.client_list_bottom>ul>li>a>span {
		margin-top: 1rem;
		margin-left: 0.15rem;
		display: inline-block;
		float: left;
		height: 2.175rem;
		border-right: 0.025rem solid rgba(99, 99, 99, 0.2);
		line-height: 2.175rem;
	}

	.client_list_bottom>ul>li>a>span>span {
		display: inline-block;
		margin-top: 0.3rem;
		height: 1rem;
	}

	.center_div1 {
		float: left;
		margin-left: 0.5rem;
		width: 80%;
	}

	.center_div1>span {
		display: inline-block;
		margin-top: 0.3rem;
		font-size: 0.575rem;
		font-weight: 500;
		color: rgba(99, 99, 99, 1);
	}
	.center_div1>p{
		position: relative;
	}
	.center_div1>p>.s1 {
		padding-left: 0.3rem;
		display: inline-block;
		margin: 0.3rem 0rem ;
		font-size: 0.75rem;
		color: rgba(187, 174, 135, 1);
	}

	.center_div1>p>.s2 {

		position: absolute;
		top: 0.3rem;
		right: 0rem;
		font-size: 0.625rem;

		color: rgba(0, 0, 0, 1);
	}

	.center_div1>.p1 {
		font-size: 0.575rem;
		font-weight: 500;
		color: rgba(99, 99, 99, 0.5);
		padding-left: 0.3rem;
	}

	.client_list_bottom>ul>li:last-child{
		border: none;
		
	}
	/* 按钮开始 */
	.divbtn {
		transform: translateZ(0);
		-webkit-transform: translateZ(0);
		-webkit-overflow-scroll:touch;
		position: fixed;
		bottom: 0rem;
		left: 0rem;
		background: rgba(255, 255, 255, 1);
		width: 100%;
	
	}
	
	.divbtn button {
		width: 18.75rem;
		border: none;
		height: 2.45rem;
		
		box-shadow: 0rem 0rem 1.075rem 0rem rgba(210, 210, 210, 0.68);
		color: rgba(99, 99, 99, 1);
		font-size: 0.575rem;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		line-height: 0.75rem;
		background: url(../../assets/img/supplier/btnimg.png) no-repeat  ;
		background-position: 6.5rem;
		background-size: 1rem 1.1rem;
	}
</style>
