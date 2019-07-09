<template>
	<div>
		<div style="width: 100%; height: 500px; position: relative; padding: 20px 0px; position: relative;">
			<div id="main" style=" width: 500px; height: 500px; position: absolute; top: 0px; left: 50%; margin-left: -150px; padding: 20px 0px; "></div>
		</div>

		<div style="width: 100%;  height: 600px; position: relative; padding: 20px 0px; position: relative;">
			<div class="ischartT">
				<h3>休闲赛战况</h3>
				<p>数据中心</p>
			</div>
			<div id="mainTwo" style=" width: 860px; height: 500px; position: absolute; top: 50px; left: 50%; margin-left: -430px; padding: 20px 0px; "></div>
		</div>

		<div style="width: 100%;  height:600px; position: relative; padding: 20px 0px; position: relative;">
			<div class="ischartT">
				<h3>进攻方数据</h3>
				<p>数据中心</p>
			</div>
			<div id="myChartDb" style=" width: 860px; height: 500px; position: absolute; top: 50px; left: 50%; margin-left: -430px; padding: 20px 0px; "></div>
		</div>

		<div style="width: 100%;  height: 300px; position: relative; padding: 20px 0px; position: relative;">
			<div id="mainTre" style=" width: 800px; height: 600px; position: absolute; top: 0px; left: 50%; margin-left: -400px; padding: 20px 0px; "></div>
		</div>

	</div>
</template>

<script>
	var echarts = require('echarts');

	// 基于准备好的dom，初始化echarts实例

	// 绘制图表



	export default {
		data() {
			return {
				userdata: [85, 90, 90, 95, 95],
			};
		},


		mounted: function() {
			var _this = this
			window.onload = function() {
				var timeData = [
					'2009/6/01', '2009/6/02', '2009/6/03', '2009/6/04', '2009/6/05', '2009/6/06', '2009/6/07', '2009/6/08',
					'2009/6/09', '2009/6/10',
					'2009/6/11', '2009/6/12', '2009/6/13', '2009/6/14', '2009/6/15', '2009/6/16', '2009/6/17', '2009/6/18',
					'2009/6/19', '2009/6/20',
					'2009/6/21', '2009/6/22', '2009/6/23', '2009/6/24', '2009/6/25', '2009/6/26', '2009/6/27', '2009/6/28',
					'2009/6/29', '2009/6/30',

				];

				timeData = timeData.map(function(str) {
					return str.replace('2009/', '');
				});


				var myChart = echarts.init(document.getElementById('main'));
				var myChartTwo = echarts.init(document.getElementById('mainTwo'));
				var myChartDb = echarts.init(document.getElementById('myChartDb'));
				var myChartTre = echarts.init(document.getElementById('mainTre'));

				myChart.setOption({
					title: {
						text: '个人战绩',
						textStyle: {
							fontSize: 12,
							fontWeight: 'normal',
						},


					},


					tooltip: {
						trigger: 'axis'
					},

					radar: [

						{
							indicator: [{
									text: '外观',
									max: 100
								},
								{
									text: '拍照',
									max: 100
								},
								{
									text: '系统',
									max: 100
								},
								{
									text: '性能',
									max: 100
								},
								{
									text: '屏幕',
									max: 100
								}
							],
							radius: 80,

						},

					],
					series: [{
							type: 'radar',

							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},

							data: [

								{

									value: _this.userdata,

								},

							]
						},

					]
				});

				myChartTwo.setOption({
					title: {
					 text: '6',
						subtext: '',
						x: 'center' ,
						textStyle: {
							fontSize: 0,
							fontWeight: 'normal',
						},
					},

					legend: {
						data: ['休闲赛-win', '休闲赛-lose', '休闲赛-K', '休闲赛-D', ],
						x: 'left'
					},

					toolbox: { //数据工具
						feature: {
                          /*  dataView: {readOnly: true}, */
							restore: {},
							saveAsImage: {}
						}
					},

					xAxis: { //x轴配置
					    name: '日期',
						type: 'category',
						data: timeData
					},
					yAxis: { //y轴配置
						name: '休闲赛 局/天',
						type: 'value',

					},
					
					grid: {
						left: 50,
						right: 50,
						top:80
						
						
					},

					dataZoom:{
						   
							type: 'inside',
							realtime: true,
							start: 0,
							end: 100,
							
						},
						

					series: [{
							name: '休闲赛-win',
							type: 'line',
							symbolSize: 8,
							hoverAnimation: false,
							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},
							data: [
								6, 10, 6, 10, 11, 9, 15, 14, 6, 7, 8, 5, 6, 9, 9, 20, 16, 19, 18, 6, 9, 7, 2, 5, 8, 5, 6, 8, 15, 6

							],
							type: 'line',
							smooth: true
						},
						{
							name: '休闲赛-lose',
							type: 'line',
							symbolSize: 8,
							hoverAnimation: false,
							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},
							data: [
								 15, 14,9, 20, 16, 19, 6, 7, 8, 5, 6, 9, 5, 6, 8, 15, 6, 6, 10, 6, 10, 11, 9,18, 6, 9, 7, 2, 5, 8

							],
							type: 'line',
							smooth: true
						},

						{
							name: '休闲赛-K',
							type: 'line',
							symbolSize: 8,
							hoverAnimation: false,
							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},
							data: [
								6, 2, 2, 10, 4, 9, 7, 2, 3, 7, 8, 5, 6, 3, 9, 2, 1, 2, 3, 6, 9, 7, 2, 5, 6, 5, 6, 8, 1, 6

							],
							type: 'line',
							smooth: true
						},
						{
							name: '休闲赛-D',
							type: 'line',
							symbolSize: 8,
							hoverAnimation: false,
							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},
							data: [
								4, 3, 4, 2, 2, 2, 3, 1, 3, 2, 1, 0, 3, 5, 3, 2, 1, 1, 3, 2,1, 3, 2, 2, 4, 5, 3, 4, 2, 3

							],
							type: 'line',
							smooth: true
						},
					]



				});


               myChartDb.setOption({
               					title: {
               					 text: '6',
               						subtext: '',
               						x: 'center' ,
               						textStyle: {
               							fontSize: 0,
               							fontWeight: 'normal',
               						},
               					},
               
               					legend: {
               						data: ['win', 'lose', 'K', 'D', ],
               						x: 'left'
               					},
               
               					toolbox: { //数据工具
               						feature: {
                                         /*  dataView: {readOnly: true}, */
               							restore: {},
               							saveAsImage: {}
               						}
               					},
               
               					xAxis: { //x轴配置
               					    name: '干员',
               						type: 'category',
               						data: timeData
               					},
               					yAxis: { //y轴配置
               						name: '数据',
               						type: 'value',
               
               					},
               					
               					grid: {
               						left: 50,
               						right: 50,
               						top:80
               						
               						
               					},
               
               					dataZoom:{
               						   
               							type: 'inside',
               							realtime: true,
               							start: 0,
               							end: 100,
               							
               						},
               						
               
               					series: [{
               							name: 'win',
               							type: 'line',
               							symbolSize: 8,
               							hoverAnimation: false,
               							label: {
               								normal: {
               									show: true,
               									position: 'top' //显示数据
               								}
               							},
               							data: [
               								6, 10, 6, 10, 11, 9, 15, 14, 6, 7, 8, 5, 6, 9, 9, 20, 16, 19, 18, 6, 9, 7, 2, 5, 8, 5, 6, 8, 15, 6
               
               							],
               							type: 'line',
               							smooth: true
               						},
               						{
               							name: 'lose',
               							type: 'line',
               							symbolSize: 8,
               							hoverAnimation: false,
               							label: {
               								normal: {
               									show: true,
               									position: 'top' //显示数据
               								}
               							},
               							data: [
               								 15, 14,9, 20, 16, 19, 6, 7, 8, 5, 6, 9, 5, 6, 8, 15, 6, 6, 10, 6, 10, 11, 9,18, 6, 9, 7, 2, 5, 8
               
               							],
               							type: 'line',
               							smooth: true
               						},
               
               						{
               							name: 'K',
               							type: 'line',
               							symbolSize: 8,
               							hoverAnimation: false,
               							label: {
               								normal: {
               									show: true,
               									position: 'top' //显示数据
               								}
               							},
               							data: [
               								6, 2, 2, 10, 4, 9, 7, 2, 3, 7, 8, 5, 6, 3, 9, 2, 1, 2, 3, 6, 9, 7, 2, 5, 6, 5, 6, 8, 1, 6
               
               							],
               							type: 'line',
               							smooth: true
               						},
               						{
               							name: 'D',
               							type: 'line',
               							symbolSize: 8,
               							hoverAnimation: false,
               							label: {
               								normal: {
               									show: true,
               									position: 'top' //显示数据
               								}
               							},
               							data: [
               								4, 3, 4, 2, 2, 2, 3, 1, 3, 2, 1, 0, 3, 5, 3, 2, 1, 1, 3, 2,1, 3, 2, 2, 4, 5, 3, 4, 2, 3
               
               							],
               							type: 'line',
               							smooth: true
               						},
               					]
               
               
               
               				});





				/* myChartTre.setOption({


					title: {
						text: '雨量流量关系图',
						subtext: '数据来自西安兰特水电测控技术有限公司',
						x: 'center'
					},
					tooltip: { //提示
						trigger: 'axis',
						axisPointer: {
							animation: false
						}

					},
					
					
					legend: {
						data: ['休闲赛', '排位赛'],
						x: 'left'
					},
					toolbox: {
						feature: {

							restore: {},
							saveAsImage: {}
						}
					},
					axisPointer: {
						link: {
							xAxisIndex: 'all'
						}
					},
					dataZoom: [{
							show: true,
							realtime: true,
							start: 30,
							end: 70,
							xAxisIndex: [0, 1]
						},
						{
							type: 'inside',
							realtime: true,
							start: 30,
							end: 70,
							xAxisIndex: [0, 1]
						}
					],
					grid: [{
						left: 50,
						right: 50,
						height: '35%'
					}, {
						left: 50,
						right: 50,
						top: '55%',
						height: '35%'
					}],
					xAxis: [{
							type: 'category',
							boundaryGap: false,
							axisLine: {
								onZero: true
							},
							data: timeData
						},
						{
							gridIndex: 1,
							type: 'category',
							boundaryGap: false,
							axisLine: {
								onZero: true
							},
							data: timeData,

						}
					],
					yAxis: [{
							name: '休闲赛 局/天',
							type: 'value',

						},
						{
							gridIndex: 1,
							name: '排位赛 局/天',
							type: 'value',
							//  inverse: true  //正反
						}
					],
					series: [{
							name: '休闲赛',
							type: 'line',
							symbolSize: 8,
							hoverAnimation: false,
							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},
							data: [
								6, 10, 6, 10, 11, 9, 15, 14, 6, 7, 8, 5, 6, 9, 9, 20, 16, 19, 18, 6, 9, 7, 2, 5, 8, 5, 6, 8, 15, 6

							],
							type: 'line',
							smooth: true
						},
						{
							name: '排位赛',
							type: 'line',
							xAxisIndex: 1,
							yAxisIndex: 1,
							symbolSize: 8,
							hoverAnimation: false,
							label: {
								normal: {
									show: true,
									position: 'top' //显示数据
								}
							},
							data: [
								6, 10, 6, 10, 11, 9, 15, 14, 6, 7, 8, 5, 6, 9, 9, 20, 16, 19, 18, 6, 9, 7, 2, 5, 8, 5, 6, 8, 15, 6


							],
							type: 'line',
							smooth: true
						},


					],


				}); */


			}

		}


	}
</script>

<style>
.ischartT{
	width:100%;
	
	text-align:center;
	
	}
	

</style>
