<template>

	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem>首页</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<div class="homeNav">
			<div class="home_tab">
				<ul>
					<li>
						<a @click="newDealer">
							<img src="../assets/img/home/index_icon1.png" />
							<p>新建经销商</p>
						</a>
					</li>

					<li>
						<a @click="newSupplier">
							<img src="../assets/img/home/index_icon2.png" />
							<p>新建供应商</p>
						</a>
					</li>
					<li>
						<a @click="newClient">
							<img src="../assets/img/home/index_icon3.png" />
							<p>新建客户</p>
						</a>
					</li>
					<li>
						<a @click="newOrder">
							<img src="../assets/img/home/index_icon4.png" />
							<p>新建订单</p>
						</a>
					</li>
					<li>
						<a @click="newDesign">
							<img src="../assets/img/home/index_icon5.png" />
							<p>新建设计单</p>
						</a>
					</li>
					<li>
						<a @click="newOutsource">
							<img src="../assets/img/home/index_icon6.png" />
							<p>新建外协单</p>
						</a>
					</li>
					<li>
						<a @click=" newProduction">
							<img src="../assets/img/home/index_icon7.png" />
							<p>新建生产单</p>
						</a>
					</li>
					<li>
						<a @click="newFinanceorder">
							<img src="../assets/img/home/index_icon8.png" />
							<p>新建收支</p>
						</a>
					</li>
					<li>
						<a @click="newProduct">
							<img src="../assets/img/home/index_icon9.png" />
							<p>新建产品</p>
						</a>
					</li>
					<li>
						<a @click="newFinishedstock">
							<img src="../assets/img/home/index_icon10.png" />
							<p>新建包裹</p>
						</a>
					</li>
					<li>
						<a @click="newDelivers">
							<img src="../assets/img/home/index_icon11.png" />
							<p>新建发货</p>
						</a>
					</li>
					<li>

						<img src="../assets/img/home/index_icon12.png" />
						<p>新建员工</p>

					</li>
					<li>
						<a @click="newArticles">
							<img src="../assets/img/home/index_icon13.png" />
							<p>新建资讯</p>
						</a>
					</li>
					<li>
						<a @click="newBanner">
							<img src="../assets/img/home/index_icon14.png" />
							<p>新建公告</p>
						</a>
					</li>
				</ul>
			</div>

			<div class="panel">
				<Row>
					<Col span="8">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head head_home">系统通知</h3>
							<div class="panel_con">
								<div class="xt_inform">
									<ul>
										<li>
											<span>6月20号 12:00</span><b class="icon"><div class="radius"></div><div class="boeder"></div></b>
											<div class="center"><small class="site">【生产】</small> JB201902003已到生产车间！</div>
										</li>

										<li class="ac">
											<span>6月20号 12:00</span><b class="icon"><div class="radius"></div><div class="boeder"></div></b>
											<div class="center"><small class="site">【生产】</small> JB201902003已到生产车间！</div>
										</li>

										<li>
											<span>6月20号 12:00</span><b class="icon"><div class="radius"></div><div class="boeder"></div></b>
											<div class="center"><small class="site">【生产】</small> JB201902003已到生产车间！</div>
										</li>

										<li>
											<span>6月20号 12:00</span><b class="icon"><div class="radius"></div><div class="boeder"></div></b>
											<div class="center"><small class="site">【生产】</small> JB201902003已到生产车间！</div>
										</li>

										<li>
											<span>6月20号 12:00</span><b class="icon"><div class="radius"></div><div class="boeder"></div></b>
											<div class="center"><small class="site">【生产】</small> JB201902003已到生产车间！</div>
										</li>
									</ul>
								</div>
							</div>

						</div>
					</div>
					</Col>
					<Col span="8">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head head_home">即时消息</h3>
							<div class="panel_con">
								<div class="home_message">
									<ul>
										<li>
											<span class="profile"><img src="../assets/img/home/man.png"/></span>
											<div class="user_notes">
												<h5 class="name">郑州李红梅</h5>
												<p class="message">我的订单现在开始生产了没，客户催的比较急，帮我查一下呗。</p>
											</div>
											<small class="messageTime">6-20 12:00</small>
										</li>

										<li>
											<span class="profile"><img src="../assets/img/home/girl.png"/></span>
											<div class="user_notes">
												<h5 class="name">郑州李红梅</h5>
												<p class="message">我的订单现在开始生产了没，客户催的比较急，帮我查一下呗。</p>
											</div>
											<small class="messageTime">6-20 12:00</small>
										</li>

										<li>
											<span class="profile"><img src="../assets/img/home/man.png"/></span>
											<div class="user_notes">
												<h5 class="name">郑州李红梅</h5>
												<p class="message">我的订单现在开始生产了没，客户催的比较急，帮我查一下呗。</p>
											</div>
											<small class="messageTime">6-20 12:00</small>
										</li>

										<li>
											<span class="profile"><img src="../assets/img/home/girl.png"/></span>
											<div class="user_notes">
												<h5 class="name">郑州李红梅</h5>
												<p class="message">我的订单现在开始生产了没，客户催的比较急，帮我查一下呗。</p>
											</div>
											<small class="messageTime">6-20 12:00</small>
										</li>

										<li>
											<span class="profile"><img src="../assets/img/home/man.png"/></span>
											<div class="user_notes">
												<h5 class="name">郑州李红梅</h5>
												<p class="message">我的订单现在开始生产了没，客户催的比较急，帮我查一下呗。</p>
											</div>
											<small class="messageTime">6-20 12:00</small>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					</Col>
					<Col span="8">
					<div class="panel_nav">
						<div class="panel_center">
							<h3 class="head head_home">便利贴<span class="right_icon" @click="openPostNote"><Icon size="20" type="md-add" /></span></h3>
							<div class="panel_con">
								<div class="Post-tNote">
									<ul>

										<li v-for="(item,index) in PostTNotedata">
											<p><small></small>{{item.val}}</p><span>{{item.created}}<b class="close" @click="delPostNote(index)"><Icon type="md-close" /></b></span></li>

									</ul>

									<div class="import" v-show="PostNote==true">
										<div class="import_nav">
											<Form :label-width="0">
												<FormItem label="">
													<Input type="textarea" v-model="PostTNoteVal" placeholder="请输入便利贴内容..."></Input>
												</FormItem>

												<FormItem label="">
													<Button @click="surePostNote" type="primary">确认</Button>
													<Button @click="closePostNote">取消</Button>
												</FormItem>
											</Form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					</Col>

				</Row>
			</div>

			<div class="panel">
				<Row>
					<Col span="16">
					<div class="panel_nav">
						<div class="panel_center">

							<div class="bulletin_nav" style="padding-bottom: 6px;">

								<div class="ivu-tabs">
									<div class="ivu-tabs-bar">
										<!---->
										<div tabindex="0" class="ivu-tabs-nav-container">
											<div class="ivu-tabs-nav-wrap" style="position: relative;"><span class="ivu-tabs-nav-prev ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-back"></i></span> <span class="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled"><i class="ivu-icon ivu-icon-ios-arrow-forward"></i></span>
												<div class="ivu-tabs-nav-scroll border">
													<div class="ivu-tabs-nav">
														<!--<div class="ivu-tabs-ink-bar ivu-tabs-

ink-bar-animated" style="width: 88px;"  :style="[Tabstransform()]"></div>-->
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==0}" @click="TabsChange(0)">工作简报</div>
														<div class="ivu-tabs-tab" :class="{'ivu-tabs-tab-active ivu-tabs-tab-focused':tabIndexs==1}" @click="TabsChange(1)">待办事项</div>

													</div><object tabindex="-1" type="text/html" data="about:blank" style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object></div>
											</div>
										</div>

									</div>

									<div class="ivu-tabs-content ivu-tabs-content-animated" :style="[minusTabstransform()]">
										<div class="ivu-tabs-tabpane">
											<div class="bulletin_item">
												<ul>
													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small> 河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small> 河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small> 河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small> 河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

												</ul>
											</div>
										</div>
										<div class="ivu-tabs-tabpane">
											<div class="bulletin_item">
												<ul>
													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small> 河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small> 河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small> 河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small> 河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

													<li>
														<div class="center">
															<p><small class="set">【财务】 </small>河南永城夏飞 橱柜订单货款审核完成。</p>
														</div>
														<span class="Time">06-22 12:22</span>
													</li>

												</ul>
											</div>
										</div>

									</div>

								</div>

							</div>
						</div>

					</div>
					</Col>
					<Col span="8">

					<div class="calendar">

						<Calendar type="date" @on-change="calendarChange" style="width: 200px"></Calendar>

						<div class="schedule">
							<div class="nav">
								<div class="box">
									<div class="head">今日计划<span class="right_icon" @click="openSchedule"><Icon size="20" type="md-add" /></span></div>

									<div class="schedule_center">
										<ul>

											<li v-for="(item,index) in scheduleData">
												<p><small></small>{{item.val}}</p><span>{{item.created}}<b class="close" @click="delSchedule(index)"><Icon type="md-close" /></b></span></li>

										</ul>

										<div class="import" v-show="Schedule==true">
											<div class="import_nav">
												<Form :label-width="0">
													<FormItem label="">
														<Input type="textarea" v-model="ScheduleVal" placeholder="请输入便利贴内容..."></Input>
													</FormItem>

													<FormItem label="">
														<Button @click="sureSchedule" type="primary">确认</Button>
														<Button @click="closeSchedule">取消</Button>
													</FormItem>
												</Form>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>

					</Col>
				</Row>

			</div>

		</div>

		<!--swipei-->
		<!--<div>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">

						<div class="panel" style="padding: 0px 40px; width: auto;">
							<Row>
								<Col span="8">
								<div class="panel_nav">
									<div class="panel_center">
										<h3 class="head head_home">系统通知</h3>
										<div class="panel_con">

										</div>

									</div>
								</div>
								</Col>
								<Col span="8">
								<div class="panel_nav">
									<div class="panel_center">
										<h3 class="head head_home">即时消息</h3>
										<div class="panel_con">

										</div>
									</div>
								</div>
								</Col>
								<Col span="8">
								<div class="panel_nav">
									<div class="panel_center">
										<h3 class="head head_home">便利贴</h3>
										<div class="panel_con">

										</div>
									</div>
								</div>
								</Col>

							</Row>
						</div>

					</div>
				
				</div>

			
				<div class="swiper-button-prev" style="width: 30px; height: 30px; border: solid 1px #1890FF; border-radius: 50%; padding: 10px; background-size: 80% 80%; left: 0px;"></div>
				<div class="swiper-button-next" style="width: 30px; height: 30px; border: solid 1px #1890FF; border-radius: 50%; padding: 10px; background-size: 80% 80%; "></div>

			</div>
		</div>-->

	</div>
</template>

<script>
	import Swiper from 'swiper';

	import Calendar from 'iview/src/components/calendar'

	export default {
		data() {
			return {
				tabIndexs: 0,
				PostNote: false,

				dateData: "",
				value8: 0,
				StepData: 0,
				data1: [],
				linkdata: "",
				PostTNoteVal: '',
				PostTNotedata: [],
				Schedule: false,
				ScheduleVal: "",
				scheduleData: []

			};
		},

		components: {
			Calendar: Calendar
		},

		methods: {

			TabsChange: function(index) {
				this.tabIndexs = index
			},

			Tabstransform: function() {
				var index = this.tabIndexs
				let style = {}
				style['transform'] = 'translate3D(' + index * 100 + '%' + ', 0px,0px)'

				return style

			},

			minusTabstransform: function() {
				var index = this.tabIndexs
				let style = {}
				style['transform'] = 'translate3D(' + -index * 100 + '%' + ', 0px,0px)'

				return style

			},

			newDealer: function() {
				this.$emit('openWindow', ('dealercompanynewly'), ('新建经销商'), ('2-1'), ('dealercompanynewly'), ('dealercompanynewly'))
			},

			newSupplier: function() {
				this.$emit('openWindow', ('supplierNew'), ('新建供应商'), ('1-1'), ('supplierNew'), ('supplierNew'))
			},

			newClient: function() {
				this.$emit('openWindow', ('clientnewly'), ('新建客户'), ('3-1'), ('clientnewly'), ('clientnewly'))
			},

			newOrder: function() {
				this.$emit('openWindow', ('newlyOrder'), ('新建订单'), ('6-1'), ('newlyOrder'), ('newlyOrder'))
			},

			newDesign: function() {
				this.$emit('openWindow', ('designorderNewly'), ('新建设计'), ('5-1'), ('designorderNewly'), ('designorderNewly'))
			},

			newOutsource: function() {
				this.$emit('openWindow', ('outsourceNewly'), ('新建外协'), ('4-1'), ('outsourceNewly'), ('outsourceNewly'))
			},

			newProduction: function() {
				this.$emit('openWindow', ('productionNewly'), ('新建上传'), ('8-1'), ('productionNewly'), ('productionNewly'))
			},

			newFinanceorder: function() {
				this.$emit('openWindow', ('financeorderNewly'), ('新建收支'), ('7-1'), ('financeorderNewly'), ('financeorderNewly'))
			},

			newProduct: function() {
				this.$emit('openWindow', ('productNewly'), ('新建产品'), ('12-1'), ('productNewly'), ('productNewly'))
			},

			newFinishedstock: function() {
				this.$emit('openWindow', ('finishedstockNewly'), ('新建包裹'), ('9-1'), ('finishedstockNewly'), ('finishedstockNewly'))
			},

			newDelivers: function() {
				this.$emit('openWindow', ('deliversNewly'), ('新建发货'), ('10-1'), ('deliversNewly'), ('deliversNewly'))
			},

			newArticles: function() {
				this.$emit('openWindow', ('articlesNewly'), ('新建资讯'), ('13-1'), ('articlesNewly'), ('articlesNewly'))
			},

			newBanner: function() {
				this.$emit('openWindow', ('articlesNewly'), ('新建公告'), ('13-1'), ('articlesNewly'), ('articlesNewly'))
			},

			calendarChange: function(date) {
				console.log(date)
			},

			getNoteVal: function(index) {
				this.PostTNoteVal = this.PostTNotedata[index].center
			},

			/*便利帖操作*/
			openPostNote: function() {
				this.PostNote = !this.PostNote
				this.PostTNoteVal = ""
			},

			surePostNote: function() {
				var newDate = new Date()

				var year = newDate.getFullYear();
				var month = newDate.getMonth() < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
				var day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
				var hour = newDate.getHours()
				var minute = newDate.getMinutes()
				var second = newDate.getSeconds() < 10 ? "0" + newDate.getSeconds() : newDate.getSeconds();
				var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ":" + second

				var obj = {
					val: this.PostTNoteVal,
					created: time

				}

				this.PostTNotedata.push(obj)

				this.PostNote = !this.PostNote

			},

			closePostNote: function() {
				this.PostNote = !this.PostNote
				this.PostNote = ""
			},

			delPostNote: function(index) {
				this.PostTNotedata.splice(index, 1)
			},

			/*日程*/
			openSchedule: function() {
				this.Schedule = !this.Schedule
				this.ScheduleVal = ""
			},

			sureSchedule: function() {
				var newDate = new Date()

				var year = newDate.getFullYear();
				var month = newDate.getMonth() < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
				var day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
				var hour = newDate.getHours()
				var minute = newDate.getMinutes()
				var second = newDate.getSeconds() < 10 ? "0" + newDate.getSeconds() : newDate.getSeconds();
				var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ":" + second

				var obj = {
					val: this.ScheduleVal,
					created: time

				}

				this.scheduleData.push(obj)

				this.Schedule = !this.Schedule

			},

			closeSchedule: function() {
				this.Schedule = !this.Schedule
				this.ScheduleVal = ""
			},

			delSchedule: function(index) {
				this.scheduleData.splice(index, 1)
			},

			/**/

			DatePickerClick: function() {

				console.log(this.dateData)

			},

			copyHome: function(e) {

				var copyinput = document.getElementById("copyInput")
				copyinput.value = e.target.innerText
				copyinput.select()
				document.execCommand("copy")

			},

			traee: function(data) {

				var node = data[data.length - 1]

				if(!node) {
					console.log(this.linkdata)
					return false
				}

				var Islink = node.link

				if(Islink) {

					this.linkdata = Islink
					console.log(this.linkdata)
				}

			}

		},
		mounted: function() {

			new Swiper('.swiper-container ', {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				observer: true,
				loop: true,

			})

			this.data1 = [{
				title: 'parent 1',
				expand: false,
				children: [{
						title: 'parent 1-1',
						expand: false,
						children: [{
								title: 'leaf 1-1-1'
							},
							{
								title: 'leaf 1-1-2'
							}
						]
					},
					{
						title: 'parent 1-2',
						expand: false,
						children: [{
								title: 'leaf 1-2-1',
								link: "123"

							},
							{
								title: 'leaf 1-2-1',
								link: "xxxxxxxx"
							}
						]
					}
				]
			}];

			/*document.body.oncopy=function  () {
				var oncopyobj
				var copyCenter;
				var str;
				var textBox=document.getElementById("text_box") //利用输入框的可全选
				var appendText="这是加的字符串"
				if (window.getSelection) {
					
					oncopyobj=window.getSelection()
				    copyCenter= oncopyobj.toString()
					str=copyCenter+appendText
					textBox.value=str
					textBox.select()					
					document.execCommand("copy")
					
				} else if (document.getSelection) {
					
					oncopyobj= document.getSelection()
					str=oncopyobj+appendText
					textBox.value=str
					textBox.select()					
					document.execCommand("copy")
					
					alert(oncopyobj)
					
				}  else if (document.selection) {
					
					oncopyobj= document.selection.createRange()
					copyCenter=oncopyobj.text
					
					alert(copyCenter)
					
					str=copyCenter+appendText
					textBox.value=str
					textBox.select()					
					document.execCommand("copy")
					
				} 
				
				
				
				
			}*/

		}
	}
</script>

<style scoped="scoped">
	.demo-Circle-customh1 {
		color: #3f414d;
		font-size: 28px;
		font-weight: normal;
	}
	
	.demo-Circle-custom p {
		color: #657180;
		font-size: 14px;
		margin: 10px 0 15px;
	}
	
	.demo-Circle-custom span {
		display: block;
		padding-top: 15px;
		color: #657180;
		font-size: 14px;
	}
	
	.demo-Circle-custom span:before {
		content: '';
		display: block;
		width: 50px;
		height: 1px;
		margin: 0 auto;
		background: #e0e3e6;
		position: relative;
		top: -15px;
	}
	
	.demo-Circle-custom span i {
		font-style: normal;
		color: #3f414d;
	}
	
	.index_banner {
		display: block;
		width: 100%;
	}
	
	.index_banner img {
		display: block;
		width: 100%;
	}
	
	.home_tab {
		display: block;
		padding-right: 20px;
		white-space: normal;
	}
	
	.home_tab ul {
		font-size: 0px;
		white-space: nowrap;
		width: 100%;
		background: white;
		overflow-x: auto;
		margin-bottom: 20px;
		border-radius: 2px;
	}
	
	.home_tab ul li {
		display: inline-block;
		width: 7.14%;
		text-align: center;
		font-size: 14px;
		margin: 10px 0px;
	}
	
	.home_tab ul li a {
		color: #636363;
	}
	
	.home_tab ul li img {
		display: block;
		width: 35%;
		margin: 0px auto;
		margin-bottom: 5px;
	}
	
	.xt_inform {
		display: block;
		width: 100%;
		height: 200px;
		overflow: auto;
	}
	
	.xt_inform ul {
		display: block;
		padding: 14px 5px;
		padding-left: 18px;
		font-size: 0px;
	}
	
	.xt_inform ul li {
		display: block;
		font-size: 12px;
		height: 20px;
		line-height: 20px;
		margin-bottom: 16px;
	}
	
	.xt_inform ul li span {
		float: left;
	}
	
	.xt_inform ul li .icon {
		float: left;
		margin: 2.5px 14px;
		width: 15px;
		height: 15px;
		border: solid 1px white;
		box-sizing: border-box;
		border-radius: 50%;
		position: relative;
		background: white;
	}
	
	.xt_inform ul li .icon .radius {
		position: absolute;
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: #cbd0db;
		box-sizing: border-box;
		margin: 2px;
		z-index: 2;
	}
	
	.xt_inform ul li .icon .boeder {
		position: absolute;
		top: 9px;
		height: 28px;
		left: 6px;
		border-left: solid 1px #cbd0db;
		box-sizing: border-box;
		z-index: 0;
	}
	
	.xt_inform ul li:last-child .icon .boeder {
		display: none;
	}
	
	.xt_inform ul li.ac .icon {
		border: solid 1px #1890FF;
	}
	
	
	
	.xt_inform ul li.ac .icon .radius {
		background: #1890FF;
	}
	
	.xt_inform ul li .site {
		color: #1890FF;
		font-size: 12px;
	}
	
	.xt_inform ul li .center {
		display: inline-block;
	}
	
	.xt_inform ul li .icon .center p {
		display: inline-block;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.home_message {
		display: block;
		
		width: 100%;
		height: 200px;
		overflow-y: auto;
	}
	
	.home_message ul {
		display: block;
		
		font-size: 0px;
		margin-left: 18px;
	}
	
	.home_message ul li {
		position: relative;
		display: inline-block;
		width: 100%;
		margin-bottom: 30px;
	}
	
	.home_message ul li .profile {
		display: block;
		float: left;
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 50%;
		background: whitesmoke;
	}
	
	.home_message ul li .profile img{
		display: block;
		width: 100%;
	}
	
	.home_message ul li .user_notes {
		float: left;
		padding-left: 10px;
	}
	
	.home_message ul li .user_notes .name {
		font-size: 14px;
		color: #000000;
		font-weight: 100;
	}
	
	.home_message ul li .user_notes .message {
		color: #636363;
		opacity: 0.7;
		font-size: 12px;
	}
	
	.home_message ul li .messageTime {
		position: absolute;
		top: 0px;
		right: 0px;
		font-size: 12px;
	}
	
	.Post-tNote {
		display: block;
		width: 100%;
		position: relative;
	}
	
	.Post-tNote ul {
		height: 180px;
		overflow-y: auto;
		margin: 10px 0px;
		
	}
	
	.Post-tNote ul li {
		position: relative;
		display: block;
		font-size: 12px;
		line-height: 1.5em;
		box-sizing: border-box;
		padding-right: 150px;
		padding-left: 40px;
		color:#636363;
		margin-bottom: 16px;
	}
	
	.Post-tNote ul li:last-child {
		margin-bottom: 0px;
	}
	
	.Post-tNote ul li p {
		display: block;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
	}
	
	.Post-tNote ul li span {
		position: absolute;
		top: 0px;
		right: 0px;
		display: block;
		font-size: 10px;
	}
	
	.Post-tNote ul li small {
		position: absolute;
		top: 0px;
		left: 17px;
		display: block;
		float: left;
		width: 6px;
		height: 6px;
		background: #FF4D4F;
		border-radius: 50%;
		margin-top: 7px;
	}
	
	.Post-tNote ul li:nth-child(2n+2) small {
		background: #389EFD;
	}
	
	.Post-tNote ul li:nth-child(3n+3) small {
		background: #36CFC9;
	}
	
	.Post-tNote ul li:nth-child(4n+4) small {
		background: #FFC53D;
	}
	
	.Post-tNote ul li .close {
		font-size: 14px;
		margin-left: 10px;
	}
	
	.Post-tNote ul li .close:hover {
		cursor: pointer;
		color: cornflowerblue;
	}
	
	.Post-tNote .import {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		border: solid 1px #636363;
		background: white;
		box-sizing: border-box;
	}
	
	.Post-tNote .import .import_nav {
		padding: 16px;
	}
	
	.bulletin_nav .bulletin_item {
		padding-left: 28px;
		padding-right: 10px;
	
		height: 200px;
		overflow-y: auto;
	}
	
	.bulletin_nav .bulletin_item ul {
		display: block;
		width: 100%;
	}
	
	.bulletin_nav .bulletin_item ul li {
		position: relative;
		display: block;
		width: 100%;
		line-height: 30px;
		margin-bottom: 10px;
	}
	
	.bulletin_nav .bulletin_item ul li .center {
		padding-right: 100px;
	}
	
	.bulletin_nav .bulletin_item ul li .center p {
		display: block;
		width: 100%;
		white-space: normal;
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.bulletin_nav .bulletin_item ul li .center p small.set {
		color: #1890FF;
		font-size: 14px;
	}
	
	.bulletin_nav .bulletin_item ul li .Time {
		position: absolute;
		top: 0px;
		right: 0px;
		display: block;
		color: #000000;
		font-size: 12px;
	}
	
	.panel {
		margin-bottom: 20px;
	}
	
	.ivu-picker-panel-body {
		clear: both !important;
	}
	
	.calendar {
		position: relative;
		height: 272px;
		background: white;
		margin-right: 20px;
	}
	
	.calendar .schedule {
		position: absolute;
		display: inline-block;
		top: 0px;
		right: 0px;
		width: 100%;
		top: 5px;
	}
	
	.calendar .schedule .nav {
		padding-left: 200px;
	}
	
	.calendar .schedule .nav .box {
		display: block;
	}
	
	.calendar .schedule .nav .box .head {
		height: 32px;
		line-height: 32px;
		border-bottom: 1px solid #e8eaec;
		text-align: center;
	}
	
	.panel .panel_nav .panel_center .head.head_home {
	
		font-size: 14px;
	}
	
	.schedule .nav .box .head .right_icon {
		float: right;
		font-size: 12px;
		color: cornflowerblue;
		margin-right: 15px;
	}
	
	.schedule_center {
		display: block;
		padding: 10px 20px;
		padding-right: 15px;
		position: relative;
	}
	
	.schedule_center ul {
		height:180px;
		margin: 10px 0px;
		overflow-y: auto;
		width: 100%;
	}
	
	.schedule_center ul li {
		position: relative;
		display: block;
		font-size: 12px;
		line-height: 1.5em;
		box-sizing: border-box;
		padding-right: 150px;
		padding-left: 40px;
		margin-bottom: 16px;
	}
	
	.schedule_center ul li:last-child {
		margin-bottom: 0px;
	}
	
	.schedule_center ul li p {
		display: block;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
	}
	
	.schedule_center ul li span {
		position: absolute;
		top: 0px;
		right: 0px;
		display: block;
		font-size: 10px;
	}
	
	.schedule_center ul li small {
		position: absolute;
		top: 0px;
		left: 17px;
		display: block;
		float: left;
		width: 6px;
		height: 6px;
		background: #FF4D4F;
		border-radius: 50%;
		margin-top: 7px;
	}
	
	.schedule_center ul li:nth-child(2n+2) small {
		background: #389EFD;
	}
	
	.schedule_center ul li:nth-child(3n+3) small {
		background: #36CFC9;
	}
	
	.schedule_center ul li:nth-child(4n+4) small {
		background: #FFC53D;
	}
	
	.schedule_center ul li .close {
		font-size: 14px;
		margin-left: 10px;
	}
	
	.schedule_center ul li .close:hover {
		cursor: pointer;
		color: cornflowerblue;
	}
	
	.schedule_center .import {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		border: solid 1px #636363;
		background: white;
		box-sizing: border-box;
	}
	
	.schedule_center .import .import_nav {
		padding: 16px;
	}
	

</style>