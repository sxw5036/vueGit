<template>
	<div id="Bdingdan">
		<header class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
		
			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">订单报表</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">
		
		</div>
		<div class="shouhouTop" style="text-align: center; margin:0.75rem 0;">
		    <span style="display: inline-block; margin-right: 0.975rem;">
				<img src="../../assets/img/statement/BBweek.png" style="width: 3.75rem; height: 1.5rem;" /></span><span style="display: inline-block; margin-right: 0.975rem;">
				<img src="../../assets/img/statement/BBmonth.png"  style="width: 3.75rem; height: 1.5rem;" /></span><span style="display: inline-block; margin-right: 0.975rem;">
				<img src="../../assets/img/statement/BBseason.png"  style="width: 3.75rem; height: 1.5rem;" /></span><span>
				<img src="../../assets/img/statement/BByear.png"  style="width: 3.75rem; height: 1.5rem;" /></span>
		</div>
		<div class="shouhouCenter" style="padding-top: 1.025rem;">
			
			<div class="shouhoudateleft" style="position: relative; width:7.325rem;float: left; margin-left: 0.65rem;margin-bottom: 0.68rem; ">
				<p style="padding-top: 0.4rem; padding-left: 0.1rem; text-align: center;width:7.325rem;"><span v-show="searchObj.startTime =='' || searchObj.startTime==null">开始时间</span>   {{searchObj.startTime}}</p>
				<input  style=" margin: 0; background: none; color: rgba(255,255,255,0); position: absolute; top: 0;  width:7.325rem; height: 1.85rem;"  v-model="searchObj.startTime" type="date" name="" id="" />
				<span style="position: absolute;  top: 0.35rem;  right: 0.5rem; " ><img style="width: 0.575rem; height: 0.575rem;" src="../../assets/img/calendar.png"/></span>
			</div>
			<div class="shouhoudateright" style="position: relative; width:7.325rem; float: left; margin-left: 1.8rem;margin-bottom: 0.68rem; ">
				<p style="padding-top: 0.4rem; padding-left: 0.1rem; text-align: center;width:7.325rem;"><span v-show="searchObj.endTime =='' || searchObj.endTime==null">结束时间</span>   {{searchObj.endTime}}</p>
				<input  style="  margin: 0; background: none; color: rgba(255,255,255,0); position: absolute; top: 0;  width:7.325rem; height: 1.85rem;"  v-model="searchObj.endTime" type="date" name="" id="" />
				<span style="position: absolute;  top: 0.35rem;  right: 0.5rem; " ><img style="width: 0.575rem; height: 0.575rem;" src="../../assets/img/calendar.png"/></span>
			</div>
			<button style="width: 100%; color: white; height: 2rem;background:linear-gradient(90deg,rgba(128,118,91,1) 0%,rgba(185,172,134,1) 100%);border-radius:0 0 0.25rem 0.25rem;">立即检索</button>
		</div>
		<div class="shouhouBottom">
			<div class="shouhouBottomTabBar">
				<ul class="shouhoutabBar-tilte">
				    <li @click="Bdingdanchoose=0"  style="margin-left: 1.5rem;" ><span :class="{active:Bdingdanchoose==0}">新增</span></li>
				    <li @click="Bdingdanchoose=1" ><span :class="{active:Bdingdanchoose==1}">处理</span></li>
					<li @click="Bdingdanchoose=2" ><span :class="{active:Bdingdanchoose==2}">交付</span></li>
					
				</ul>
				
				<div class="keepContent">
					<div class="keepContentShow" id="financeSS" style="  position:relative  ; width: 95%; margin: 0 auto; height: auto; background-color: white; border-radius: 0.25rem;">
						<div class="SStop" id="DDSStop1" style="  background-color: white; height:11.925rem; width: 95%; margin: 0.1rem auto; ">
				
				
						</div>
					<!-- 	<div v-show="Bdingdanchoose==0 || shouhouchoose==1" class="SStopText" style="position: absolute; left: 1.5rem; bottom: 0.7rem;">
							<p><span style="display: inline-block; width: 8.6rem; color: #000000;">1.全国新增售后单共计：<span>29</span>&nbsp;件</span><span style="color: #000000;">环比减少：<span>2</span>&nbsp;件</span></p>
							
						</div>
						<div v-show="shouhouchoose==2 " class="SStopText" style=" padding-bottom: 0.5rem; padding-left: 1.5rem; border-radius: 0.25rem; position: absolute; left: 0rem; bottom: 0.2rem;background-color: white; width: 100%;">
							<p><span style="display: inline-block; width: 8.6rem; color: #000000;">1.全国交付共计：<span>29</span>&nbsp;件</span><span style="color: #000000;">环比减少：<span>2</span>&nbsp;件</span></p>
						</div> -->
				
					</div>
					<!-- <div v-show="shouhouchoose==2" style="height: 2rem; width: 100%;">
				
					</div>
					<div v-show="shouhouchoose==3" style="height: 1rem; width: 100%;">
				
					</div> -->
					<div class="keepContentShow1" style=" position: relative; height: 15.5rem; width: 95%; margin: 1rem auto; padding-top: 1rem;  background: white; border-radius: 0.25rem;">
						<div class="show1YB" id="DDshow1SH" style="height: 15.5rem; width: 95%; margin: 0 auto;">
				
						</div>
					<!-- 	<div  v-show="shouhouchoose==0" class="show1YBtext" style=" position: absolute; left: 20%; bottom: 10%; font-size: 0.6rem; ">
							<p style="margin-bottom: 0rem;font-size: 0.6rem;"><span style="color: #000000; width: 7rem ; display: inline-block; ">补料：共&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span><span style="color: #000000;">反馈：共&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span></p>
							
						</div> 
						<div  v-show="shouhouchoose==1"  class="show1YBtext" style=" position: absolute; left: 20%; bottom: 5%; font-size: 0.6rem; ">
							<p style="margin-bottom: 0rem;font-size: 0.6rem;"><span style="color: #000000; width: 7rem ; display: inline-block; ">收费：共&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span><span style="color: #000000;">免单：共&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span></p>
							<p style="margin-bottom: 0rem;font-size: 0.6rem;"><span style="color: #000000; width: 7rem ; display: inline-block; ">拒绝：共&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span></p>
						</div> 
						<div  v-show="shouhouchoose==2" class="show1YBtext" style=" position: absolute; left: 20%; bottom: 5%; font-size: 0.6rem; ">
							<p style="margin-bottom: 0rem;font-size: 0.6rem;"><span style="color: #000000; width: 7rem ; display: inline-block; ">生产中：共&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span><span style="color: #000000;">待发货：共&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span></p>
							<p style="margin-bottom: 0rem;font-size: 0.6rem;"><span style="color: #000000; width: 7rem ; display: inline-block; ">已发货：共&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span><span style="color: #000000;">待支付：共&nbsp;<span style="color: rgba(129, 119, 91, 1);">7</span>&nbsp;单</span></p>
						</div> -->
						<div style="position: absolute; top: 5.5%; left: 50%; margin-left: -1.875rem;">
							<span v-show="Bdingdanchoose==0" style="font-weight: 500; color: #000000; font-size: 0.75rem;">实收款分布</span>
							<span v-show="Bdingdanchoose==1" style="font-weight: 500; color: #000000; font-size: 0.75rem;">支出款分布</span>
							<span v-show="Bdingdanchoose==2" style="font-weight: 500; color: #000000; font-size: 0.75rem;">预收款分布</span>
							
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'
	// 售后
	var echarts = require('echarts');
	require('echarts/lib/chart/bar')
	require('echarts/lib/chart/pie')
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
	export default {

		name: 'Bdingdan',

		data() {
			return {
				Bdingdanchoose:0,
				searchObj:{
					startTime :'',
					endTime :""
				}
			}
		},

		methods: {

		},

		mounted: function() {
			mui.init()
		
			
			// 柱状统计图开始
			var dataAxis = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
			var data = [220, 182, 191, 234, 290, 330, 310];
			// var yMax = 500;
			var dataShadow = [];
			// for (var i = 0; i < data.length; i++) {
			// 	dataShadow.push(yMax);
			// }
			var myChart = echarts.init(document.getElementById('DDSStop1'));
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
			var myChart1 = echarts.init(document.getElementById('DDshow1SH'));
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
						name: '详细信息',
						type: 'pie',
						radius: [40, 65],
						 center: ['50%', '40%'], 
						// for funnel
						x: '60%',
						width: '35%',
						funnelAlign: 'left',
						// max: 1048,
			
						data: [{
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
			
						],
						itemStyle: {
							normal: {
								borderColor: "#FFFFFF",
								borderWidth: 5,
							}
						},
			
			
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
	}
</script>

<style scoped="scoped">
	#Bshouhou{
		position: absolute;
		width: 100%;
		height: auto;
		
	}
	.shouhouCenter{
		margin: 0 auto;
		width: 95%; 
		height: 5.625rem; 
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
	   .shouhoutabBar-tilte .active{
	       /* background-color: #09f;
	       color: #fff; */
				padding-bottom: 0.5rem;
				border-bottom: 0.1rem solid rgba(184,171,133,1);
				/* box-sizing: border-box; */
				 font-size: 0.75rem; 
				color:rgba(51,51,51,1);
				
	   }
	   .shouhoutabBar-tilte{
		   height: 2rem;
		   line-height: 2rem;
	   }
		.shouhoutabBar-tilte li{
			
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
