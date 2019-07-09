<template>
	<div id="orderreport">
		<header class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
		
			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">订单报表</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">
		
		</div>
		<div class="orderTop" style="text-align: center; margin:0.75rem 0;">
		    <span style="display: inline-block; margin-right: 0.975rem;">
				<img @click="thisweek()" src="../../assets/img/statement/BBweek.png" style="width: 3.75rem; height: 1.5rem;" /></span><span style="display: inline-block; margin-right: 0.975rem;">
				<img @click="thismonth()" src="../../assets/img/statement/BBmonth.png"  style="width: 3.75rem; height: 1.5rem;" /></span><span style="display: inline-block; margin-right: 0.975rem;">
				<img @click="thisseason()" src="../../assets/img/statement/BBseason.png"  style="width: 3.75rem; height: 1.5rem;" /></span><span>
				<img @click="thisyear()" src="../../assets/img/statement/BByear.png"  style="width: 3.75rem; height: 1.5rem;" /></span>
		</div>
		<div class="orderCenter" style="padding-top: 1.025rem;">
			
			<div class="orderdateleft" style="position: relative; width:7.325rem;float: left; margin-left: 0.65rem;margin-bottom: 0.68rem; ">
				<p style="padding-top: 0.4rem; padding-left: 0.1rem; text-align: center;width:7.325rem;"><span v-show="searchObj.startTime =='' || searchObj.startTime==null">开始时间</span>   {{searchObj.startTime}}</p>
				<input  style=" margin: 0; background: none; color: rgba(255,255,255,0); position: absolute; top: 0;  width:7.325rem; height: 1.85rem;"  v-model="searchObj.startTime" type="date" name="" id="" />
				<span style="position: absolute;  top: 0.35rem;  right: 0.5rem; " ><img style="width: 0.575rem; height: 0.575rem;" src="../../assets/img/calendar.png"/></span>
			</div>
			<div class="orderdateright" style="position: relative; width:7.325rem; float: left; margin-left: 1.8rem;margin-bottom: 0.68rem; ">
				<p style="padding-top: 0.4rem; padding-left: 0.1rem; text-align: center;width:7.325rem;"><span v-show="searchObj.endTime =='' || searchObj.endTime==null">结束时间</span>   {{searchObj.endTime}}</p>
				<input  style="  margin: 0; background: none; color: rgba(255,255,255,0); position: absolute; top: 0;  width:7.325rem; height: 1.85rem;"  v-model="searchObj.endTime" type="date" name="" id="" />
				<span style="position: absolute;  top: 0.35rem;  right: 0.5rem; " ><img style="width: 0.575rem; height: 0.575rem;" src="../../assets/img/calendar.png"/></span>
			</div>
				<div class="dealerCenterAddress" style=" width:100%; position: relative; padding-left: 0.65rem; ">
				<input readonly="readonly" type="text" style="width: 16.42rem;height: 1.85rem;  background: none; border-radius: 0.25rem;" />
				<div class="dwssq" style="position: absolute; bottom: 22%;">
					<span @click="getprovince()">
						<select v-model="provinceId" class="provinceselect" style=" color: rgba(99, 99, 99, 0.8); background: none; margin-bottom: 0; padding-bottom: 0;  display: inline-block; width: 5.4rem; text-align: center;text-align-last: center; ">
							<option :value="item.id"  v-for="(item,index) in this.provincedata" :key='index'>{{item.name}}</option>
						</select>
					</span><span style="width: 0.025rem; display: inline-block; color: rgba(99,99,99,0.3);">|</span><span  @click="getcity()">
						<select v-model="cityId" class="provinceselect" style=" color: rgba(99, 99, 99, 0.8);  background: none; margin-bottom: 0; padding-bottom: 0;  display: inline-block; width: 5.4rem; text-align: center;text-align-last: center; ">
							<option :value="item.id" v-for="(item,index) in this.citydata" :key='index'>{{item.name}}</option>
						</select>
					</span><span style="width: 0.025rem; display: inline-block; color: rgba(99,99,99,0.3);">|</span><span @click="getqu()">
						<select v-model="quId" class="provinceselect" style=" color: rgba(99, 99, 99, 0.8); background:  none; margin-bottom: 0; padding-bottom: 0;  display: inline-block; width: 5.4rem; text-align: center;text-align-last: center; ">
							<option :value="item.id" v-for="(item,index) in this.qudata" :key='index'>{{item.name}}</option>
						</select>
					</span>
				</div>
				
			</div>
			<div  class="orderCenterManager" style=" width:100%;  padding-left: 0.65rem; position: relative; ">
				<input type="text" readonly="readonly" style="z-index:1; background: none; width: 16.42rem; height: 1.85rem;  " /><span style="; width: 16rem; height: 1.65rem; padding-left: 0.5rem;  text-align: center;line-height: 1.65rem; border: none;  z-index: 111; position: absolute; top: 0; left: 0.5rem;" >
				<select v-model="jingliId" style=" text-align: center;text-align-last: center; color: rgba(99,99,99,0.8);   padding: 0; border:none; text-align: center; z-index: 111; margin: 0 auto; ">
					<option style=" text-align: center; border:none;" value="">请选择市场经理</option>
					<option :value="item.salesmanId" :key='index'  v-for="(item,index)  in saledata " >{{item.salemanName}}</option>
										
				</select>
				</span>
				<span style="position: absolute; top: 0.4rem;right: 1.5rem; z-index: 1111111; "><img  style="width: 0.5rem; height: 0.4rem;" src="../../assets/img/finance/xljt.png"/> </span>
			</div>
			<button style=" margin-top: 0.2rem; width: 100%; color: white; height: 2rem;background:linear-gradient(90deg,rgba(128,118,91,1) 0%,rgba(185,172,134,1) 100%);border-radius:0 0 0.25rem 0.25rem;">立即检索</button>
		</div>
		<div class="orderBottom">
			<div class="orderBottomTabBar">
				<ul class="ordertabBar-tilte">
				    <li @click="orderchoose1()"  style="margin-left: 1.5rem;" ><span :class="{active:orderchoose==1}">下单</span></li>
					<li @click="orderchoose2()" ><span :class="{active:orderchoose==2}">有效</span></li>
					<li @click="orderchoose3()" ><span :class="{active:orderchoose==3}">延期</span></li>
					
				</ul>
					<div class="keepContent">
					<div class="keepContentShow" id="financeSS" style="  position:relative  ; width: 95%; margin: 0 auto; height: auto; background-color: white; border-radius: 0.25rem;">
						<div class="SStop" id="SStopDD" style="  background-color: white; height:11.925rem; width: 95%; margin: 0.1rem auto; ">
				
				
						</div>
					<!-- 	<div class="SStopText" style="position: absolute; left: 1.5rem; bottom: 0.7rem;">
							<p><span style="display: inline-block; width: 8.6rem; color: #000000;">1.全国待支付订单：<span>29</span>&nbsp;件</span></p>
							<p><span style="display: inline-block; width: 8.6rem; color: #000000;">2.环比减少：<span>2</span>&nbsp;件</span></p>
							
						</div> -->
					
				
					</div>
					<!-- <div v-show="orderchoose==2" style="height: 2rem; width: 100%;">
				
					</div>
					<div v-show="orderchoose==3" style="height: 1rem; width: 100%;">
				
					</div> -->
				<!-- 	<div class="keepContentShow1" style=" position: relative; height: 15.5rem; width: 95%; margin: 1rem auto; padding-top: 1rem;  background: white; border-radius: 0.25rem;">
						<div class="show1YB" id="show1DD" style="height: 15.5rem; width: 95%; margin: 0 auto;">
				
						</div> -->
<!-- 						<div    class="show1YBtext" style=" position: absolute; left: 18%; bottom: 5%; font-size: 0.6rem; ">
							<p style="margin-bottom: 0rem;font-size: 0.6rem;"><span style="color: #000000; width: 7rem ; display: inline-block; ">实木特供：&nbsp;<span style="color: rgba(129, 119, 91, 1);font-size: 0.75rem;">7</span>&nbsp;单</span><span style="color: #000000;">美克：&nbsp;<span style="color: rgba(129, 119, 91, 1);font-size: 0.75rem;">7</span>&nbsp;单</span></p>
							<p style="margin-bottom: 0rem;font-size: 0.6rem;"><span style="color: #000000; width: 7rem ; display: inline-block; ">实木定制：&nbsp;<span style="color: rgba(129, 119, 91, 1);font-size: 0.75rem;">7</span>&nbsp;单</span><span style="color: #000000;">康奈：&nbsp;<span style="color: rgba(129, 119, 91, 1);font-size: 0.75rem;">7</span>&nbsp;单</span></p>
							<p style="margin-bottom: 0rem;font-size: 0.6rem;"><span style="color: #000000; width: 7rem ; display: inline-block; ">模压：&nbsp;<span style="color: rgba(129, 119, 91, 1); font-size: 0.75rem;">7</span>&nbsp;单</span></p>
						</div> 
						<div  v-show="orderchoose==1"  class="show1YBtext" style=" position: absolute; left: 18%; bottom: 5%; font-size: 0.6rem; ">
							<p style="margin-bottom: 0rem;font-size: 0.6rem;"><span style="color: #000000; width: 7rem ; display: inline-block; ">腾达物流：&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span><span style="color: #000000;">联程物流：&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span></p>
							<p style="margin-bottom: 0rem;font-size: 0.6rem;"><span style="color: #000000; width: 7rem ; display: inline-block; ">利友物流：&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span></p>
						</div> -->
						
					<!-- 	<div style="position: absolute; top: 5.5%; left: 50%; margin-left: -2.8rem;">
							<span  style="font-weight: 500; color: #000000; font-size: 0.75rem;">今日订单执行分布</span>
						</div>
					</div> -->
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'
	// 订单
	var echarts = require('echarts');
	require('echarts/lib/chart/bar')
	require('echarts/lib/chart/pie')
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
	export default {

		name: 'orderreport',

		data() {
			return {
				
				saledata:'',
				sdata1:'',
				sdata2:'',
				sousuo:0,
				jingliId:'',
				provinceId:'',
				cityId:'',
				quId:'',
				allId:'',
				provincedata: '',
				citydata:
					{
						id:'',
						name:'-市-'
					
				},
				qudata:'',
				week: 0,
				month: 0,
				season: 0,
				year: 0,
				weekdata1: ['01', '01', '20', '11', '2', '8', '15'],
				weekdata: "",
				monthdata: "",
				seasondata: "",
				seasondata1: '',
				seasondataA:'',
				yeardata: '',
				orderchoose:1,
				searchObj:{
					startTime :'',
					endTime :""
				}
			}
		},

		methods: {
			yewujl(){
				var that=this
			
				that.axios({
					method: 'get',
				
					//url: '//api/addresses/1234567890000'
					url: '/wxapi/f/dealerStatements/salemans'
				
				}).then(function(res) {
				
					console.log(res)
				that.saledata=res.data.data

				}).catch(function(err) {
					//				console.log(err)
				
				})
			},
			searchdata(){
				var that=this
				that.sousuo=1
				that.week=0
				that.month=0
				that.season=0
				that.year=0
				if (that.provinceId.length>0 && that.cityId.length>0 && that.quId.length>0) {
					that.allId=that.quId
				} else  if(that.provinceId.length>0 &&  that.cityId.length>0 ) {
					that.allId=that.cityId
				} else{
					that.allId=that.provinceId
				}
				
				that.axios({
					method:'get',
					url:'/wxapi/f/customOrderStatements?countType='+that.orderchoose+(that.allId == '' ? '' : '&cityId=' + that.allId)+(that.jingliId == '' ? '' : '&salesmanId=' + that.jingliId)+(that.searchObj.startTime == '' ? '' : '&startTime=' + that.searchObj.startTime)+(that.searchObj.endTime == '' ? '' : '&endTime=' + that.searchObj.endTime)+(that.orderchoose == '' ? '' : '&countType=' + that.orderchoose)
				}).then(function(res) {
					console.log(res.data.data.result)
					var data1=res.data.data.result
					var s1=[]
					var s2=[]
					for (var i=0;i<data1.length;i++) {
						s1.push(data1[i].creatTime)
			
					}
					for (var i=0;i<data1.length;i++) {
						s2.push(data1[i].count)
					
					}
					that.sdata1=s1
					that.sdata2=s2
					console.log(that.sdata1)
					console.log(that.sdata2)
					that.zhuzhuangtu()
				}).catch(function(err) {
					//				console.log(err)
				
				})
				},
			
			getprovince(){
				var that=this
				that.citydata=''
				
				that.axios({
					method: 'get',
				
					
					url: '/api/f/cities?levelType=1'
				
				}).then(function(res) {
					console.log(res)
					that.provincedata = res.data.data
					that.provincedata.unshift({
						id: "",
						name: "-省-"
					})
					
					that.getcity()
					
				}).catch(function(err) {
					//				console.log(err)
				
				})
			},
			getcity(){
				var that=this
				
				
				that.axios({
					method: 'get',
					url: '/api/f/cities?parentId=' + that.provinceId + ''
				
				}).then(function(res) {
					console.log("哈哈哈哈")
					console.log(res)
					that.citydata=res.data.data
					that.citydata.unshift({
						id: "",
						name: "-市-"
					})
					that.qudata=''
					that.getqu()
				}).catch(function(err) {
				//						console.log(err)
				
									})
			},
			getqu(){
				var that=this
				
				that.axios({
					method: 'get',
					url: '/api/f/cities?parentId=' + that.cityId + ''
				}).then(function(res) {
					that.qudata=res.data.data
					that.qudata.unshift({
						id: "",
						name: "-区-"
					})
				}).catch(function(err) {
				
				})
			},
			orderchoose1() {
				this.orderchoose = 1
				if (this.week == 1) {
					this.thisweek()
				} else if (this.month == 1) {
					this.thismonth()
				} else if (this.season == 1) {
					this.thisseason()
				} else if(this.year==1){
					this.thisyear()
				} else if( this.sousuo==1){
					this.searchdata()
				}
				
				
			},
			orderchoose2() {
				this.orderchoose = 2
				if (this.week == 1) {
					this.thisweek()
				} else if (this.month == 1) {
					this.thismonth()
				} else if (this.season == 1) {
					this.thisseason()
				} else if(this.year==1){
					this.thisyear()
				} else if( this.sousuo==1){
					this.searchdata()
				}
			},
			orderchoose3() {
				this.orderchoose = 3
				if (this.week == 1) {
					this.thisweek()
				} else if (this.month == 1) {
					this.thismonth()
				} else if (this.season == 1) {
					this.thisseason()
				} else if(this.year==1){
					this.thisyear()
				} else if( this.sousuo==1){
					this.searchdata()
				}
			},
			thisweek() {
			
				this.week = 1
				this.month = 0
				this.season = 0
				this.year = 0
				this.sousuo=0
				var that = this
				// that.weekdata=[]
			
				that.axios({
			
					method: 'get',
					header: {
						'Content-Type': 'application/json'
					},
					url: '/wxapi/f/customOrderStatements/week/' + that.orderchoose
			
				}).then(function(res) {
					console.log(res)
				   
					var s1=[]
					
					s1.push(res.data.data.chart1.mon.toString())
					s1.push(res.data.data.chart1.tues.toString())
					s1.push(res.data.data.chart1.wed.toString())
					s1.push(res.data.data.chart1.thur.toString())
					s1.push(res.data.data.chart1.fri.toString())
					s1.push(res.data.data.chart1.sat.toString())
					s1.push(res.data.data.chart1.sun.toString())
								
					
					that.weekdata=s1
					console.log("本周")
					console.log(that.weekdata)
				
			
			
					that.zhuzhuangtu()
				}).catch(function(err) {
					console.log(err)
			
				})
			},
			thismonth() {
			
				this.week = 0
				this.month = 1
				this.season = 0
				this.year = 0
				this.sousuo=0
				var that = this
				// that.weekdata=[]
			
				that.axios({
			
					method: 'get',
					
					url: '/wxapi/f/customOrderStatements/month/' + that.orderchoose
			
				}).then(function(res) {
					// console.log(res.data.data)
					var s1=[]
					
					s1.push(res.data.data.chart1.point1.toString())
					s1.push(res.data.data.chart1.point2.toString())
					s1.push(res.data.data.chart1.point3.toString())
					s1.push(res.data.data.chart1.point4.toString())
					
					that.monthdata = s1
					// console.log(that.monthdata)
					console.log("本月")
					console.log(that.monthdata)
					that.zhuzhuangtu()
				}).catch(function(err) {
					console.log(err)
			
				})
			},
			thisseason() {
			
				this.week = 0
				this.month = 0
				this.season = 1
				this.year = 0
				this.sousuo=0
				var that = this
				// that.weekdata=[]
			
				that.axios({
			
					method: 'get',
					header: {
						'Content-Type': 'application/json'
					},
					url: '/wxapi/f/customOrderStatements/quarter/' + that.orderchoose
			
				}).then(function(res) {
					console.log("本季")
					console.log(res)
					var s1=[]
					
					s1.push(res.data.data.chart1.month1.toString())
					s1.push(res.data.data.chart1.month2.toString())
					s1.push(res.data.data.chart1.month3.toString())
					that.seasondataA=res.data.data
					that.seasondata = s1
					that.seasondata1 = res.data.data[1]
					// console.log(that.seasondata)
			
			
			
					that.zhuzhuangtu()
					
				}).catch(function(err) {
					console.log(err)
			
				})
			},
			thisyear() {
			
				this.week = 0
				this.month = 0
				this.season = 0
				this.year = 1
				this.sousuo=0
				var that = this
				// that.weekdata=[]
			
				that.axios({
			
					method: 'get',
					header: {
						'Content-Type': 'application/json'
					},
					url: '/wxapi/f/dealerStatements/year/' + that.orderchoose
			
				}).then(function(res) {
					// console.log(res.data.data)
					that.yeardata = res.data.data
					// console.log(that.yeardata)
					console.log("本年")
					console.log(that.yeardata)
					that.zhuzhuangtu()
				}).catch(function(err) {
					console.log(err)
			
				})
			},
			zhuzhuangtu(){
			var dataAxis = []
			var data = []
			if (this.week == 1) {
				dataAxis = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
				data = this.weekdata
			} else if (this.month == 1) {
				dataAxis = ['第一周', '第二周', '第三周', '第四周'];
				data = this.monthdata
			} else if (this.season == 1) {
				dataAxis = this.seasondata1
				data = this.seasondata
			} else if(this.year==1) {
				// dataAxis = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
				dataAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
				data = this.yeardata
			}else if(this.sousuo==1){
				dataAxis=this.sdata1
				data=this.sdata2
			}
				// var yMax = 500;
				var dataShadow = [];
				// for (var i = 0; i < data.length; i++) {
				// 	dataShadow.push(yMax);
				// }
				var myChart = echarts.init(document.getElementById('SStopDD'));
				myChart.setOption({
					title: {
				
					},
					grid: {
					x: 30,
					y:50,
					x2: 5,
					y2: 65
				
					},
					xAxis: {
				
						data: dataAxis,
				
						axisTick: {
							show: false
						},
						axisLine: {
							show: false
						},
						z: 1
					},
					yAxis: {
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							textStyle: {
								color: '#999'
							}
						}
					},
					dataZoom: [{
						type: 'inside'
					}],
					series: [{ // For shadow
							type: 'bar',
							itemStyle: {
								normal: {
									color: 'rgba(0,0,0,0.05)'
								}
							},
							barGap: '-100%',
							barCategoryGap: '40%',
							data: dataShadow,
							animation: false
						},
						{
							type: 'bar',
							itemStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1,
										[{
												offset: 0,
												color: 'rgba(84, 128, 120, 1)'
											},
											{
												offset: 0.5,
												color: 'rgba(84, 128, 120, 1)'
											},
											{
												offset: 1,
												color: 'rgba(84, 128, 120, 1)'
											}
										]
									)
								},
								emphasis: {
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1,
										[{
												offset: 0,
												color: 'rgba(84, 128, 120, 1)'
											},
											{
												offset: 0.7,
												color: 'rgba(84, 128, 120, 1)'
											},
											{
												offset: 1,
												color: 'rgba(84, 128, 120, 1)'
											}
										]
									)
								}
							},
							data: data
						}
					]
				})
				var zoomSize = 6;
				myChart.on('click', function(params) {
					console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
					myChart.dispatchAction({
						type: 'dataZoom',
						startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
						endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
					});
				});
				
				// 柱状结束
				
				// 圆饼开始
				
				var data11= [{
									value: 200,
									name: '设计费'
								},
								{
									value: 180,
									name: '贷款'
								},
								{
									value: 100,
									name: '借款'
								},
								{
									value: 80,
									name: '其他'
								}
				
							]
				
				
				var myChart1 = echarts.init(document.getElementById('show1DD'));
				myChart1.setOption({
				
						
					
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					// legend: {
					// 	margin:'0rem 0rem 0rem 100rem',
					// 	icon: "pin", 
					// 	orient: 'vertical',
					// 	x: 'center',
					// 	y: 'bottom',
					// 	data: ['直达', '邮件营销', '联盟广告', '视频广告']
					// },
					toolbox: {
						show: true,
						feature: {
							mark: {
								show: true
							},
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ['pie', 'funnel']
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					
					calculable: false,
					series: [
				
				
				
					{
						// 		name: '详细信息',
						// 		type: 'pie',
						// 		radius: [40, 65],
						// 		 center: ['50%', '50%'], 
						// 		// for funnel
						// 		x: '60%',
						// 		width: '35%',
						// 		funnelAlign: 'left',
						// 		// max: 1048,
						// 
						// 		data: listdata,
						// 		itemStyle: {
						// 			normal: {
						// 				borderColor: "#FFFFFF",
						// 				borderWidth: 5,
						// 			}
						// 		},
				
						funnelAlign: 'left',
						type: 'pie',
						radius: ['40%', '55%'],
						label: {
							normal: {
								formatter: '{b}\n{c} {per|{d}%}  ',
								backgroundColor: '#eee',
								borderColor: '#aaa',
								
								borderRadius: 4,
								rich: {
									a: {
										color: '#999',
										lineHeight: 22,
										align: 'center',
										
									},
									// abg: {
									//     backgroundColor: '#333',
									//     width: '100%',
									//     align: 'right',
									//     height: 22,
									//     borderRadius: [4, 4, 0, 0]
									// },
									hr: {
										borderColor: '#aaa',
										width: '100%',
										borderWidth: 0.5,
										height: 0
									},
									b: {
										fontSize: 12,
										lineHeight: 20
									},
									per: {
										color: '#eee',
										backgroundColor: 'rgba(84, 128, 120, 1)',
										padding: [2, 4],
										borderRadius: 2
									}
								}
							}
						},
						data: listdata
				
					}
				]
				});
				var ecConfig = require('echarts/lib/config');
				// myChart1.on(ecConfig.EVENT.PIE_SELECTED, function(param) {
				// 	var selected = param.selected;
				// 
				// 	var serie;
				// 	var str = '当前选择： ';
				// 	for (var idx in selected) {
				// 		serie = option.series[idx];
				// 		for (var i = 0, l = serie.data.length; i < l; i++) {
				// 			if (selected[idx][i]) {
				// 				str += '【系列' + idx + '】' + serie.name + ' : ' +
				// 					'【数据' + i + '】' + serie.data[i].name + ' ';
				// 			}
				// 		}
				// 	}
				// 	document.getElementById('show1YB').innerHTML = str;
				// })
				
				
				
				
				
				
				
				
				// 圆饼结束
			}

		},

		mounted: function() {
			mui.init()
				this.getprovince();
			this.yewujl();
			this.thisweek();
			
			// 柱状统计图开始
			this.zhuzhuangtu();
			
		
			this.getcity();
			this.getqu();

			
			// 柱状统计图开始
			
		}
	}
</script>

<style scoped="scoped">
	#orderreport{
		position: absolute;
		width: 100%;
		height: auto;
		
	}
	.orderCenter{
		margin: 0 auto;
		width: 95%; 
		height: 11.1rem; 
		background-color: white;
		border-radius: 0.25rem;
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
	
	
	 /* 点击对应的标题添加对应的背景颜色 */
	   .ordertabBar-tilte .active{
	       /* background-color: #09f;
	       color: #fff; */
				padding-bottom: 0.5rem;
				border-bottom: 0.1rem solid rgba(184,171,133,1);
				/* box-sizing: border-box; */
				 font-size: 0.75rem; 
				color:rgba(51,51,51,1);
				
	   }
	   .ordertabBar-tilte{
		   height: 2rem;
		   line-height: 2rem;
	   }
		.ordertabBar-tilte li{
			
			margin-right: 1.6rem;
			width:1.5rem ;
			float: left;
			font-size: 0.65rem;
			color:rgba(99,99,99,1);
		}
			.SStopText p {
			height: 0.9rem;
			line-height: 0.9rem;
			margin-bottom: 0;
			font-size: 0.6rem;
			color: rgba(0, 0, 0, 1);
		}
		
		.SStopText p span {
			color: rgba(129, 119, 91, 1);
		}
</style>
