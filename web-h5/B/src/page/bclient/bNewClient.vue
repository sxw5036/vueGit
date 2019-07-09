<template>
	<div class="bNewClient">
		<div class="clienttop">
			<ul>
				<li>
					<span class="wenzi">姓名:</span><span class="ipt1"><input type="text" placeholder="请输入姓名" v-model="name" /> </span>
				</li>
				<li>
					<span class="wenzi">电话:</span><span class="ipt1"><input type="tel" placeholder="请输入电话号码" v-model="tel" /> </span>
				</li>
				<li>
					<span class="wenzi" style="margin-right: 0.6rem;">性别:</span><span class="spselect">
						

							<select class="select" v-model="ways" >
							
								<option :value="item.value" v-for="(item,index) in payways" :key="index">{{item.name}}</option>
							</select>
						
					</span>
				</li>
				<li @click="addsiteshow=!addsiteshow">
					<span class="wenzi">地区:</span><span class="ipt1"><input type="text" placeholder="请选择您的地区" v-model="searchObj.mergerShortName" />
					</span>
				</li>
				<li>
					<span class="wenzi">地址:</span><span class="ipt1"><input type="text" placeholder="请输入您的地址" v-model="address" />
					</span>
				</li>
				<li>
					<span class="wenzi">小区:</span><span class="ipt1"><input type="text" placeholder="请输入您的小区" v-model="xiaoqu" />
					</span>
				</li>
				<li style="position: relative;">
					<span class="wenzi beizhukuang">备注:</span><span><textarea placeholder="请输入您的备注信息" class="sptextarea" v-model="remarks"></textarea></span>
				</li>
			</ul>
		</div>
		<div class="clientcenter">
			<ul>
				<li>
					<span class="centers1">店铺名称:</span><input type="text" readonly="readonly" :value="data1.companyName" />
				</li>
				<li>
					<span class="centers1">业务经理:</span><input type="text" readonly="readonly" :value="data1.userName" />


				</li>
				<li>
					<span class="centers2">电话:</span><input type="tel" readonly="readonly"  :value="data1.mobile" />
				</li>
			</ul>
		</div>
		<div class="divbtn">
			<button @click="submitCustomer()">保存</button>
		</div>
		<Address :show="addsiteshow" @sure='surreAddress' @cancel="addsiteshow=!addsiteshow"></Address>
	</div>
</template>

<script>
	import address from '@/components/address'
	import mui from '../../assets/js/mui.js'
	export default {
		name: 'bNewClient',

		data() {

			return {
				data1:[],
				ways:'',
				payways:[
					{
						name:'男',
						value:'0'
					},
					{
						name:'女',
						value:'1'
					}
				],
				name: '',
				address: '',
				tel: '',
				shopName: '',
				shopTel: '',
				xiaoqu: '',
				remarks: '',
				addsiteshow: false,
				addsiteObj: {},
				searchObj: {
					startTime: "",
					endTime: "",
					cityId: "",
					cityIdName: "",
					condation: "",
					dealerId: "",
					mergerShortName: ''

				}


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
			submitCustomer() {
				if(this.name!= '' && this.tel !='' && this.ways != '' && this.searchObj.cityId !='' && this.address != '' && this.xiaqou!= '' ){
				this.axios({
					method: 'post',
					data: {
						name: this.name,
						mobile: this.tel,
						sex: this.ways,
						cityAreald: this.searchObj.cityId,
						address: this.address,
						community: this.xiaoqu,
						remarks: this.remarks

					},
					url: '/wxapi/b/companyCustomers'

				}).then(function(res) {
					console.log(res)
				}).catch(function(err) {
					console.log(err)
				})
				}else{
					console.log("1111")
				}
			}
		},
		mounted: function() {

			var that = this
			that.axios({
				method: 'get',

				url: '/wxapi/b/dealers/loginUserInfo'
			}).then(function(res) {
				that.data1=res.data.data
				console.log(res.data)
			}).catch(function(err) {
				console.log(err)
			})

		}
		/**/

	}
</script>

<style scoped="scoped">
	.bNewClient {
		width: 100%;
		height: auto;
		position: absolute;
	}

	/* 上部开始 */
	.clienttop {
		width: 17.75rem;
		height: 25.15rem;
		background-color: white;
		border-radius: 0.25rem;
		margin: 0.75rem 0.5rem 0 0.5rem;
	}

	.clienttop ul {
		padding-top: 0.75rem;
	}

	.clienttop ul li {
		height: 2.95rem;
	}

	.ipt1>input {
		font-size: 0.8rem;
		color: black;
		padding: 0;
		padding-left: 0.8rem;
		margin: 0;
		display: inline-block;
		width: 12.9rem;
		height: 2.2rem;
		border: 0.025rem solid rgba(99, 99, 99, 0.5);
		border-radius: 0.25rem;
	}

	.wenzi {
		margin-left: 1rem;
		margin-right: 1.2rem;
		height: 0.65rem;
		font-size: 0.7rem;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(0, 0, 0, 1);
	}

	.sptextarea {
		font-size: 0.8rem;
		width: 12.9rem;
		height: 6rem;
		display: inline-block;
		border: 0.025rem solid rgba(99, 99, 99, 0.5);
		border-radius: 0.25rem;
		margin-left: 3.75rem;
	}

	.beizhukuang {
		position: absolute;
		top: 0.75rem;

	}

	.spselect {

		margin-left: 0.6rem;
		display: inline-block;
		width: 12.875rem;
		height: 2.2rem;
		border: 0.025rem solid rgba(99, 99, 99, 0.5);
		/* 	box-shadow:0rem 0.15rem 0.225rem  0rem rgba(214,214,214,0.31); */
		border-radius: 0.25rem;
	}

	.spselect>select {
		display: inline-block;
		background: url(../../assets/img/bclient/xjt.png) 11rem center no-repeat;
		width: 12.875rem;
	}

	.spselect>select>option {
		width: 12.875rem;
		display: inline-block;
	}

	/* 上部结束 */
	/* 中部开始 */
	.clientcenter {
		height: 10.5rem;
		width: 17.75rem;
		border-radius: 0.25rem;
		background-color: white;
		margin: 0.75rem 0.5rem 0 0.5rem;
	}

	.clientcenter ul {
		padding-top: 0.75rem;
	}

	.clientcenter ul li {
		height: 2.95rem;
	}

	.clientcenter ul li input {
		font-size: 0.8rem;
		color: black;
		padding: 0;
		padding-left: 0.8rem;
		margin: 0;
		display: inline-block;
		width: 12.9rem;
		height: 2.2rem;
		border: 0.025rem solid rgba(99, 99, 99, 0.5);
		border-radius: 0.25rem;
	}

	.centers1 {
		width: 3rem;
		height: 0.65rem;
		font-size: 0.7rem;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(0, 0, 0, 1);
		margin-left: 0.325rem;
		margin-right: 0.675rem;
	}

	.centers2 {
		height: 0.65rem;
		font-size: 0.7rem;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(0, 0, 0, 1);
		margin-left: 1.7rem;
		margin-right: 0.675rem;
	}

	/* 中部结束 */
	/* 按钮开始 */
	.divbtn {
		margin: 2rem auto;
		width: 17.75rem;
		height: 2rem;

	}

	.divbtn button {
		width: 17.75rem;
		height: 2rem;
		background: linear-gradient(90deg, rgba(129, 118, 91, 1) 0%, rgba(183, 171, 133, 1) 100%);
		border-radius: 0.25rem;
		color: white
	}
</style>
