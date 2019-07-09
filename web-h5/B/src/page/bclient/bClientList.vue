<template>
	<div id="bClientList">
		<div class="bClientList_top">
			<div class="bClientList_top_div1">
				<div class="mui-input-row mui-search" style="height: 2rem;">
					<input v-model="telName" type="search" class="mui-input-clear" placeholder="手机号/姓名" @change="seachData()" >
				</div>
			</div>
			<p><span style="position: relative; width: 5rem; display: inline-block;">{{startTime}}<input @change="startTime1()" type="date" v-model="startTime"    style=" z-index: 111; border: none;  position: absolute; top: 0; left: 0;  margin: 0; padding: 0; font-size: 0.625rem; height: 0.925rem; width: 4rem; background-color: rgba(255,255,255,0); " />
				</span><span style="position: relative; width: 5rem; display: inline-block; margin-left: 0.5rem;">{{endTime}}<input type="date" v-model="endTime" @change="endTime1()"    style=" z-index: 111; border: none;  position: absolute; top: 0; left: 0;  margin: 0; padding: 0; font-size: 0.625rem; height: 0.925rem; width: 4rem; background-color: rgba(255,255,255,0); " />
				</span><span style="position: relative; display: inline-block; margin-left: 0.5rem;"><select class="select"  @change="changeProduct($event)" v-model="ways" style="width: 2.6rem; display: inline-block; margin: 0; padding: 0; margin-left:0rem; color: #000000; font-size: 0.625rem;">
					
					<option :value="item.value" v-for="(item,index) in payways" :key="index">{{item.name}}</option>
				</select></span>
			</p>
		</div>
		<div class="bClientList_center">
			<ul>
				<li v-for="(item,index) in data" :key='index'>
					<router-link :to="{name:'bClientDetails',query:{id:item.customerId}}">
						<span>
							<span>

								<img src="../../assets/img/bclient/khlb.png" style="width: 1.8rem; height: 1.125rem; padding-right: 0.8rem;" />
							</span>

						</span>
						<div class="center_div1">
							<p style="margin-top: 0.875rem;"><span class="s1">{{item.customerName}}【{{item.community}}】</span><span class="s2">{{item.customerMobile}}</span>
							</p>
							<p class="p1">{{item.customerMergerName}}</p>
						</div>
					</router-link>
				</li>

			</ul>
		</div>
		<div class="divBtn">
			<router-link :to="{name:'bNewClient'}">
				<button class="btn" type="button">新建供应商</button>
			</router-link>
		</div>
	</div>
</template>

<script>
	
		
	export default {
		name: 'bClientList',

		data() {

			return {
				endTime:'结束时间',
				startTime:'开始时间',
				data: [],
				ways: "",
				telName:'',
				payways: [
					{
						name:"选择客户",
						value:''
					},
					{
						name: '意向客户',
						value: '1'
					},
					{
						name: '成交客户',
						value: '2'
					},
					{
						name: '执行客户',
						value: '3'
					}
				]

			}

		},


		methods: {
			changeProduct(event) {
                    this.ways = event.target.value; //获取商品ID，即option对应的ID值
					console.log(this.ways)
					this.seachData()
                },
			seachData(){
				var that = this
				this.axios({
					method: 'get',
				
					// url: '/wxapi/b/companyCustomers?type0=1'
					url: '/wxapi/b/companyCustomers?type0=1'+ (that.ways == '' ? '' : '&type1=' + that.ways)+(that.telName == '' ? '' : '&condation=' + that.telName)+(that.startTime == '' ? '' : '&startTime=' + that.startTime)+(that.endTime == '' ? '' : '&endTime=' + that.endTime)
				
				}).then(function(res) {
					that.data = res.data.data.result;
					console.log(that.data)
				
				}).catch(function(err) {
					console.log(err)
				
				})
				// console.log("1")
			},
			startTime1(){
				if(this.endTime != "结束时间"){
					this.seachData()
				}else{
					return false
				}
			},
			endTime1(){
				if(this.startTime != "开始时间"){
					this.seachData()
				}else{
					return false
				}
			}
			
		},
		mounted: function() {
			var that = this
			this.axios({
				method: 'get',

				url: '/wxapi/b/companyCustomers?type0=1'


			}).then(function(res) {
				that.data = res.data.data.result;
				console.log(that.data)

			}).catch(function(err) {
				console.log(err)

			})

		}
		/**/

	}
</script>

<style scoped="scoped">
	#bClientList {
		width: 100%;
		height: auto;
		position: absolute;
	}
	input[type="date"]::-webkit-datetime-edit-fields-wrapper { 
            background-color: rgba(250,250,250,0); 
          } 
          /* 这是控制年月日之间的斜线或短横线的 */
          input[type="date"]::-webkit-datetime-edit-text {
            color: rgba(250,250,250,0); 
				background-color:  rgba(255,255,255,0);
            
          }
		/* 控制年字 */
          input[type="date"]::-webkit-datetime-edit-year-field { 
            color: rgba(250,250,250,0); 
				background-color:  rgba(255,255,255,0);
          } 
          /* 控制月字 */
          input[type="date"]::-webkit-datetime-edit-month-field { 
            color: rgba(250,250,250,0); 
				background-color:  rgba(255,255,255,0);
          } 
          /* 控制日字 */
          input[type="date"]::-webkit-datetime-edit-day-field  { 
            color: rgba(250,250,250,0); 
				background-color:  rgba(255,255,255,0);
          } 

	 input[type="date"]::-webkit-datetime-edit{
            /* content: '起始时间'; */
            color: rgba(250,250,250,0); 
				background-color:  rgba(255,255,255,0);
            
          }


	input[type=date]::-webkit-inner-spin-button { visibility: hidden; }
	input[type=date]::-webkit-clear-button {visibility: hidden;}
	input[type=date]::-webkit-calendar-picker-indicator  {
		color: rgba(255,255,255,0);
		background-color:  rgba(255,255,255,0);
		
	} 
	

	p {
		margin-bottom: 0rem;
	}

	.bClientList_top {
		height: 3.74rem;
		background-color: white;
	}

	.bClientList_top_div1 {
		padding-top: 0.5rem;
		width: 16.7rem;

		margin: 0 auto;

	}

	.bClientList_top_div1>div>input {
		border-radius: 0.75rem;
		width: 16.7rem;
	}

	.bClientList_top_div1>div span {
		/* placeholder颜色  */

		/* placeholder字体大小  */
		font-size: 0.55rem;
		/* placeholder位置  */
		text-align: center;
	}

	.bClientList_top>p {
		margin:  0 auto ;
		 width: 14.5rem; 
	}

	.bClientList_top>p>span {

		color: black;
		font-size: 0.625rem;
	}

	.bClientList_center>ul>li {
		border-radius: 0.2rem;
		margin: 0.75rem 0.5rem 0rem 0.5rem;
		width: 17.75rem;
		height: 3.75rem;
		background-color: white;
	}

	.bClientList_center>ul>li>a>span {
		display: inline-block;
		margin-top: 1.25rem;
		float: left;
	}

	.bClientList_center>ul>li>a>span>span {
		height: 3.75rem;
		margin-left: 0.95rem;
		width: 1.8rem;
		display: inline-block;
		height: 1.5rem;
		border-right: 0.05rem solid rgba(242, 242, 242, 1);

	}

	.center_div1 {
		float: left;
		margin-left: 0.5rem;
	}

	.center_div1>p {
		width: 14.5rem;
		position: relative;
	}

	.center_div1>p>.s1 {

		font-size: 0.675rem;
		color: #000000;
		font-weight: 500;
	}

	.center_div1>p>.s2 {
		display: inline-block;
		font-size: 0.5rem;
		color: rgba(99, 99, 99, 1);
		position: absolute;
		top: 0.1rem;
		right: 0.75rem;
	}

	.center_div1>.p1 {
		margin-top: 0.4rem;
		font-size: 0.6rem;
		color: rgba(99, 99, 99, 1);
	}

	.divBtn {
		position: fixed;
		bottom: 1.9rem;
		left: 50%;
		margin-left: -8.875rem;

	}

	.divBtn .btn {

		background: linear-gradient(90deg, rgba(129, 118, 91, 1) 0%, rgba(183, 171, 133, 1) 100%);
		border-radius: 0.25rem;


		width: 17.75rem;
		height: 2rem;
		box-shadow: 0rem 0rem 1.075rem 0rem rgba(210, 210, 210, 0.68);
		color: white;
		font-size: 0.575rem;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		line-height: 0.75rem;
	}
</style>
