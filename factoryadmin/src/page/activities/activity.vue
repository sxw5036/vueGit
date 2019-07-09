<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/admin">首页</BreadcrumbItem>
				<BreadcrumbItem>活动列表管理</BreadcrumbItem>
			</Breadcrumb>
		</div>

		<!-- 搜索和新建活动-->
		<Row>
			<Col span="20" style="margin: 20px 0;">
				
					活动名称：
					<Input v-model="activityname" placeholder="请输入活动名称..." style="width: 16%;margin:0 5px;"></Input>
					面向对象：
					<Select v-model="activitytype" style="width:16%;margin:0 5px;" placeholder="请选择对象...">
						<Option v-for="item in activitiesObj" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>

					活动状态：
					<Select v-model="activitystatus" style="width:16%;margin:0 5px;" placeholder="请选择状态...">
						<Option v-for="item in activitiesStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
					活动分类：
					<Select v-model="activityclassify" style="width:16%;margin:0 5px;" placeholder="请选择分类...">
						<Option v-for="item in activitiesClassification" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>

					<Button icon="ios-search" @click="search()">搜索</Button>
					
			</Col>
			 <Col span="4" style="text-align: right;">
			   <Button style="margin: 20px 0; margin-left: 2%;" type="primary" @click="addactivity()">新建活动</Button>
             </Col>
			 </Row>
		
		<Modal v-model="remodaladd" title="编辑活动" width="50%">
			<Form :label-width="80">
				<FormItem label="活动名称" id="float_left" style="width:80%">
					<Input v-model="readdactivityname" placeholder="请输入活动名称..."></Input>
				</FormItem><br>
				<FormItem label="面向对象" id="float_left">
					<Select v-model="readdactivitytype">
						<Option v-for="item in activitiesObj" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</FormItem>
				
				<FormItem label="活动分类" id="float_left" >
					<Select v-model="readdactivityclassify" @on-change="classificationchanges(readdactivityclassify)">
						<Option v-for="item in activitiesClassification" :value="item.value"  :key="item.value">{{ item.label }}</Option>
					</Select>
				</FormItem>
				<FormItem label="开始时间" id="float_left">
					<!--<Input v-model="addactivitystarttime" placeholder="请输入活动名称..."></Input>-->
					 <!--<DatePicker v-model="addactivitystarttime" placeholder="请输入活动名称..." type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>-->
					 <DatePicker type="date" placeholder="请选择开始时间" style="width: 100%" :value="readdactivitystarttime" @on-change="handleChange"></DatePicker>
				</FormItem>
				<FormItem label="结束时间" id="float_left">
					<!--<Input v-model="addactivityendtime" placeholder="请输入活动名称..."></Input>-->
					<DatePicker type="date" placeholder="请选择结束时间" style="width: 100%" :value="readdactivityendtime" @on-change="handleChanges"></DatePicker>
					<!--<DatePicker v-model="addactivityendtime" placeholder="请输入活动名称..." type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>-->
				</FormItem>
			</Form>
		
			<div  v-show="readditems==true" style="width: 100%;">
				<p  style="font-size: 14px; margin: 5px 0;"><strong>添加项目</strong></p>
				<!--<Input v-model="newAddText" style="width: 48%;" placeholder="请输入要添加的内容" />
				<Button type="primary" @click='addNewList()'>添加</Button>
				<ul style="width: 100%; padding: 10px 10px; border: 1px solid #DCDEE2; margin:10px 0;">
					<li style="width: 48%; margin: 5px 1%; display: inline-block;" is='list-item' v-for='(list,index) in lists' v-bind:key='list.id' v-bind:title='list.title'  v-on:remove='lists.splice(index,1)'>
					</li>
				</ul>-->
				<div style="margin: 20px 0 40px 0; ">
					
 				<table class="tab" style=" width: 98%; padding: 0 1%; text-align: left;">
					  <tr>
					   <th class="tableth">项目名称</th>
					   <th class="tableth">项目描述</th>					   
					   <th class="tableth">操作</th>
					  </tr>
					  
					  <tr v-for="(person,index) in reinfoArr" style="margin-top: 20px;" >
					  	
					   <td style="width: 20%;   ">{{person.name}}</td>
					   <td style="width: 40%;  ">{{person.notes}}</td>					   
					   <td style="width: 10%;  "><Button type="error" size="small" @click="redeleteInfo(index)">删除</Button></td>
					  </tr>
					 </table>
 				</div>
				<div class="createForm" style="padding: 10px;">
				  项目名称:<Input  name="name" v-model="reitemname" placeholder="请输入项目的名称"  style="width: 48%; margin:10px 1%;  "></Input><br>
				  项目描述:<Input name="notes" v-model="reitemdes" type="textarea" placeholder="请输入项目的描述" :rows="4"  id="uage"  style="width: 48%;  margin:10px 1%;"></Input><br>
				 
				  
				  <Button type="primary" v-on:click="reinsertInfo">新建项目</Button>
				 
 				</div> 
 			
 				
			</div>
			<p  style="font-size: 14px; margin: 5px 0;"><strong>上传封面</strong></p>
			<div style="margin-top:20px; padding:2% 7%;">
				 <div class="pl">
				 	
					<div class="demo-upload-list" v-for="(item,index) in reuploadList">
						
						<template>
							<img :src="item">
							<div class="demo-upload-list-cover">
								<Icon type="ios-eye-outline" @click.native="rehandleView(item)"></Icon>
								
							</div>
						</template>
					
					</div>
					<Upload  ref="upload" 
						:show-upload-list="false" 
						:data="uparry" 
						:default-file-list="redefaultList" 
						:on-success="rehandleSuccess" 
						:format="['jpg','jpeg','png']" 
						:max-size="5120" 
						:on-format-error="handleFormatError" 
						:on-exceeded-size="handleMaxSize" 
						:before-upload="handleBeforeUpload" 
						 type="drag" 
						:action="reuploadpathdata" 
						name="multipartFile" style="display: inline-block;width:58px;">
						<div style="width: 58px;height:58px;line-height: 58px;">
							<Icon type="ios-camera" size="20"></Icon>
						</div>
					</Upload>
				</div>
				<Modal title="图片详情" v-model="revisible" style="text-align: center;">
					<img :src="imgName"  style="width: 80%;">
						  <div slot="footer">
							<Button type="error" size="large"  @click="revisible=false">关闭</Button>
							</div>
				</Modal>
			</div>
			<div style="margin-left: 5%;">
				摘要:<Input v-model="reactivitysummary" type="textarea" :rows="4"  placeholder="请输入活动摘要"  style="width: 76%; margin:10px 1%;  "></Input><br>
			</div>
			<div style="margin-left: 5%;">
				规则:<Input v-model="reactivityregulation" type="textarea" :rows="4"  placeholder="请输入活动规则"  style="width: 76%; margin:10px 1%;  "></Input><br>
			</div>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="repairactivity()">确认</Button>
				<Button type="error" @click="remodaladd = false">关闭</Button>
			</div>
		</Modal>
		
		<Modal v-model="modaladd" title="新增活动" width="50%">
			<Form :label-width="80">
				<FormItem label="活动名称" id="float_left" style="width:80%">
					<Input v-model="addactivityname" placeholder="请输入活动名称..."></Input>
				</FormItem><br>
				<FormItem label="面向对象" id="float_left">
					<Select v-model="addactivitytype">
						<Option v-for="item in activitiesObj" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</FormItem>
				
				<FormItem label="活动分类" id="float_left" >
					<Select v-model="addactivityclassify" @on-change="classificationchange">
						<Option v-for="item in activitiesClassification" :value="item.value"  :key="item.value">{{ item.label }}</Option>
					</Select>
				</FormItem>
				<FormItem label="开始时间" id="float_left">
					<!--<Input v-model="addactivitystarttime" placeholder="请输入活动名称..."></Input>-->
					 <!--<DatePicker v-model="addactivitystarttime" placeholder="请输入活动名称..." type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>-->
					 <DatePicker type="date" :options="options" placeholder="请选择开始时间" style="width: 100%" :value="addactivitystarttime" @on-change="handleChange"></DatePicker>
					 
				</FormItem>
				<FormItem label="结束时间" id="float_left">
					<!--<Input v-model="addactivityendtime" placeholder="请输入活动名称..."></Input>-->
					<DatePicker type="date" :options="options" placeholder="请选择结束时间" style="width: 100%" :value="addactivityendtime" @on-change="handleChanges"></DatePicker>
					<!--<DatePicker v-model="addactivityendtime" placeholder="请输入活动名称..." type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>-->
				</FormItem>
			</Form>
		
			<div  v-show="additems==true" style="width: 100%;">
				<p  style="font-size: 14px; margin: 5px 0;"><strong>添加项目</strong></p>
				<div style="margin: 20px 0 40px 0; ">
 				<table class="tab" style="width: 98%; padding: 0 1%; text-align: left;">
					  <tr>
					   <th class="tableth">项目名称</th>
					   <th class="tableth">项目描述</th>					   
					   <th class="tableth">操作</th>
					  </tr>
					  <tr v-for="(person,index) in infoArr" style="margin-top: 20px;" >
					   <td style="width: 20%;   ">{{person.name}}</td>
					   <td style="width: 40%;  ">{{person.notes}}</td>					   
					   <td style="width: 10%;  "><Button type="error" size="small" v-on:click="deleteInfo(index)">删除</Button></td>
					  </tr>
					 </table>
 				</div>
				<div class="createForm" style="padding: 10px;">
				  项目名称:<Input  name="uname" placeholder="请输入项目的名称" v-model="itemname" style="width: 76%; margin:10px 1%;  "></Input><br>
				  项目描述:<Input name="uage" type="textarea" placeholder="请输入项目的描述" v-model="itemdes" :rows="4"  id="uage"  style="width: 76%;  margin:10px 1%;"></Input><br>
				 
				  
				  <Button type="primary" v-on:click="insertInfo">新建项目</Button>
 				</div> 
 			
 				
			</div>
			<p  style="font-size: 14px; margin: 5px 0;"><strong>上传封面</strong></p>
			
			<div style="margin-top:20px; padding:2% 9%; ">
				 <div class="pl">
				 	
					<div class="demo-upload-list" v-for="(item,index) in uploadList">
						
						<template>
							<img   :src="item.relPath">
							<div class="demo-upload-list-cover">
								<Icon type="ios-eye-outline" @click.native="handleView(item.relPath)"></Icon>
								
							</div>
						</template>
					
					</div>
					<Upload  
					     ref="upload" 
						:show-upload-list="false" 
						:data="uparry" 
						:default-file-list="defaultList" 
						:on-success="handleSuccess" 
						:format="['jpg','jpeg','png']" 
						:max-size="5120" 
						:on-format-error="handleFormatError" 
						:on-exceeded-size="handleMaxSize" 
						:before-upload="handleBeforeUpload" 
						 type="drag" 
						:action="uploadpathdata" 
						name="multipartFile" style="display: inline-block; width:58px;">
						<div style="width: 58px;height:58px;line-height: 58px;">
							<Icon type="ios-camera" size="20"></Icon>
						</div>
					</Upload>
				</div>
				<Modal title="图片详情" v-model="visible" style="text-align: center;">
					<img :src="imgName"  style="width: 80%;">
						  <div slot="footer">
							<Button type="error" size="large"  @click="visible=false">关闭</Button>
							</div>
				</Modal>
			</div>
			
			<div style="margin-left: 5%;">
				摘要:<Input v-model="activitysummary" type="textarea" :rows="4"  placeholder="请输入活动摘要"  style="width: 76%; margin:10px 1%;  "></Input><br>
			</div>
			<div style="margin-left: 5%;">
				规则:<Input v-model="activityregulation" type="textarea" :rows="4"  placeholder="请输入活动规则"  style="width: 76%; margin:10px 1%;  "></Input><br>
			</div>
			 <!-- <editor class="editor" :value="content"  :setmsg="editorsetmsg" @change="changecenter" @Imgpath="getImgpath"></editor>-->
			<div class="demo-drawer-footer">
				<Button type="primary" @click="activityaddok()">确认</Button>
				<Button type="error" @click="modaladd = false">关闭</Button>
			</div>
		</Modal>
        
		<div style="padding-bottom: 30px; margin-bottom: 30px;">
			<Table :columns="columns1" :data="data1" border></Table>
		</div>
		<div class="fenye">
			<Page :total="totalpage" :page-size="pageSize" show-total :current="currents" @on-change="pageChange" />
		</div>

		<!--删除弹框-->
		<Modal v-model="peledel" width="360">
			<p slot="header" style="color:red;text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>删除活动信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除操作</p>
				<p>确定要删除吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="deletectivity">确定</Button>
			</div>
		</Modal>
		<!--启动窗口-->
		<Modal v-model="peledels" width="360">
			<p slot="header" style="color:red;text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>启动活动信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行启动活动操作</p>
				<p>确定要启动吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="drivetectivity">确定</Button>
			</div>
		</Modal>
		<!--禁用窗口-->
		<Modal v-model="peledelss" width="360">
			<p slot="header" style="color:red; text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>撤销活动信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行撤销活动操作</p>
				<p>确定要撤销吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="forbidenactivity">确定</Button>
			</div>
		</Modal>
		
		<Modal v-model="peledelssover" width="360">
			<p slot="header" style="color:red; text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>结束活动信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行手动结束活动操作</p>
				<p>确定要结束吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="forbidenactivityover">确定</Button>
			</div>
		</Modal>
	</div>
</template>

<script>
	import Vue from 'vue'
	import editor from '@/components/tinymce'

	export default {
		data() {
			return {
				 options: {
						disabledDate(date) {
						  // console.log(date);
						 return date < new Date() - 24 * 60 * 60 * 1000;
						  //禁用某一时间段
						  //return date < new Date(2019,4,14) && date> new Date(2019,4,10)
						}
					  },
				activityId_save:'',
				cover_save:'',
				Paramsid:'',
				
				//添加项目
				msg:"项目",
                itemname:'',
                itemdes:'',
                 infoArr:[],
                 reinfoArr:[],

				activitiesObj: [{
						value: "0",
						label: '经销商'
					},
					{
						value: "1",
						label: '终端'
					}
				],

				activitiesStatus: [{
						value: 0,
						label: '未发布'
					},
					{
						value: 1,
						label: '已发布'
					},
					{
						value: 2,
						label: '已结束'
					}
				],
				activitiesClassification: [{
						value: "0",
						label: '海报'
					},
					{
						value: "1",
						label: '活动'
					}
				],
				file: "",
				category: '0',
				uploadpathdata: '/api/f/activity/activityFiles/cover',
				reuploadpathdata:'',
				defaultList: [],
				imgName: '',
				visible: false,
				uploadList: [],
				uparry: {
					multipartFileList: []
				},
				reuploadList:[],
			    redefaultList:[],
			    revisible:false,
			    
				data1: [],
				additems:false,
				readditems:false,

				pageSize: 20,
				pageNum: 0,
				totalpage: 0,
				currents: 1,
				modaladd: false,
				peledel: false,
				peledels:false,
				peledelss:false,
				remodaladd:false,
				peledelssover:false,
				SetIndexssover:false,
				operation: {},
				SetIndex: "",
				SetIndexs: "",
				SetIndexss: "",
				reSetIndex: "",
				ifsearch: false,
				activityname: '',
				activitytype: '',
				activitystatus: '',
				activityclassify: '',
				addactivityname: '',
				addactivitytype: '',
				addactivityclassify: '',
				addactivitystarttime: '',
				addactivityendtime: '',
				activitysummary:'',
				activityregulation:'',
				
				reactivitysummary:'',
				reactivityregulation:'',
				readdactivityname: '',
				readdactivitytype: '',
				readdactivityclassify: '',
				readdactivitystarttime: '',
				readdactivityendtime: '',
				reitemname: '',
			    reitemdes: '',
			    
				columns1: [

					{
						title: '活动名称',
						key: 'name',
						align: 'center',
						width:250,
						ellipsis: true,
						fixed: 'left',

					},
					{
						title: '面向对象',
						key: 'target',
						align: 'center',
						width:160,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.target == 0) {
								text = '经销商'
							} else if(row.target == 1) {
								text = '终端'
							}
							return h('div', text);
						}
					},
					{
						title: '发起人',
						key: 'type',
						align: 'center',
						width:160,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.type == 0) {
								text = '厂家'
							} else if(row.type == 1) {
								text = '经销商'
							}
							return h('div', text);
						}
					},

					{
						title: '状态',
						key: 'status',
						align: 'center',
						width:160,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.status == 0) {
								text = '未发布'
							} else if(row.status == 1) {
								text = '已发布'
							} else if(row.status == 2) {
								text = '已结束'
							}
							return h('div', text);
						}

					},

					{
						title: '分类',
						key: 'classify',
						align: 'center',
						width:160,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if(row.classify == 0) {
								text = '海报'
							} else if(row.classify == 1) {
								text = '活动'
							}
							return h('div', text);
						}
					},
					{
						title: '开始时间',
						key: 'beginTime',
						align: 'center',
						width:200,
						ellipsis: true,
					},

					{
						title: '结束时间',
						key: 'endTime',
						align: 'center',
						width:200,
						ellipsis: true,
					},
					{
						title: '浏览量',
						key: 'views',
						align: 'center',
						width:160,
						ellipsis: true,
					},
					{
						title: '操作',
						key: '',
						align: 'center',
						width: 220,
                        ellipsis: true,
						fixed: 'right',
						render: (h, params) => {
							return h('div', [
                                
							
								h('Button', {
									props: {
										type: 'primary',
										size: 'small',

									},
									style: {
										marginRight: '5px',
										marginTop: '5px',
										marginBottom: '5px',
                                        display:(function(){
											if(params.row.status!==0){
												return "none"
											}
										})()
									},
									on: {
										click: () => {
											 this.reSetIndex = params.index;
											  
											 this.pairactivity(params.index);
											 this.activityId_save =this.data1[params.index].id;										
											 this.reuploadpathdata='/api/f/activity/'+this.activityId_save+'/cover' 
											 this.reuploadList=[];
                                             this.remodaladd = true;
											
											
                                              
                                             
										}	   
									}
								}, '编辑'),

								h('Button', {
									props: {
										type: 'primary',
										size: 'small',

									},
									style: {
										marginRight: '5px',
										marginTop: '5px',
										marginBottom: '5px',
                                        	display:(function(){
											if(params.row.status==2){
												return "none"
											}else if(params.row.status==1){
												return "none"
											}
										})()
									},
									on: {
										click: () => {
                                                 
                                                 this.SetIndexs = params.index
											   this.peledels = true;
										}
									}
								}, '启用'),
								h('Button', {
									props: {
										type: 'info',
										size: 'small'

									},
									style: {
										marginRight: '5px',
										marginTop: '5px',
										marginBottom: '5px',
										display:(function(){
											if(params.row.status==0){
												return "none"
											}
										})()
									},
									on: {
										click: () => {
											this.setIndex = params.index
											var activityId = this.data1[params.index].id

											var obj = {
												"activityId": activityId,
											}

											this.$router.push({
												name: "participants",
												query: obj
											})

										}
									}
								}, '查看参与人'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small',
										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px',
										marginTop: '5px',
										marginBottom: '5px',
										display:(function(){
											if(params.row.status==0||params.row.status==2){
												return "none"
											}
										})()
									},
									on: {
										click: () => {
											this.SetIndexss = params.index
											this.peledelss = true;

										}
									}
								}, '撤销'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small',
										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px',
										marginTop: '5px',
										marginBottom: '5px',
										display:(function(){
											if(params.row.status==0||params.row.status==2){
												return "none"
											}
										})()
									},
									on: {
										click: () => {
											this.SetIndexssover = params.index
											this.peledelssover = true;

										}
									}
								}, '结束'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small',
										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px',
										marginTop: '5px',
										marginBottom: '5px',
										display:(function(){
											if(params.row.status==1||params.row.status==2){
												return "none"
											}
										})()
										
									},
									on: {
										click: () => {
											this.SetIndex = params.index
											this.peledel = true;
                                            
										}
									}
								}, '删除'),
								
								
						

							]);
						}
					}
				],
			}
		},

		components: {
			'editor': editor
		},

		methods: {
			//分页
			pageChange: function(index) {
				this.currents = index			
				if(this.isSearch == true) {
					this.getsearchdatas()
				} else {
					this.getactivitiesdatas()
				}
			
			},
			//选择日期handleChanges
			handleChange(data) {
				this.addactivitystarttime = data;
			},
			handleChanges(data) {
				this.addactivityendtime = data;
			},
			// shangchuan tupian
			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			rehandleView(cover) {
				this.imgName = cover;
				this.revisible = true;
			},
			
			handleSuccess(res, file) {
				console.log(res)
				this.cover_save = res.data.relPath;
			    this.activityId_save=res.data.fileId;	
				this.uploadList=[]
				this.uploadList.push(res.data)
				
				/*for(var i=0; i<Res.length;i++){
					file.path = Res[i].path
				    file.id = Res[i].id
				}*/

				/*	dsDataCache[this.dsData[this.designersIndex].id].designFile.push(obj)
					this.dsDataCache = dsDataCache*/
			},
			rehandleSuccess(res, file) {
		        
				this.cover_save = res.data.relPath;			
				this.reuploadList=[];
				this.reuploadList.push(res.data.relPath);	
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


			 
			//切换项目的显隐
			classificationchange(value){			
				if(value==0){
					this.additems=false;
				}else{
					this.additems=true;
				}
				
			},
			classificationchanges(value){			
				if(value==0){
					this.readditems=false;
				}else{
					this.readditems=true;
				}
				
			},
			 //添加数据的方法
			   insertInfo(){
			    var obj={};
			    obj.name=this.itemname;
			    obj.notes=this.itemdes;
			   
			    this.infoArr.push(obj);
			    this.itemname="";
			    this.itemdes="";
			   },
			   reinsertInfo(){
			   	     var obj={};
			          obj.name=this.reitemname;
			          obj.notes=this.reitemdes;   
			          this.reinfoArr.push(obj);
			   	   let that = this;
			       this.axios({
					method: 'post',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					data: {
						  name: that.reitemname,
                          notes: that.reitemdes,
						
					},		
					
					url: '/api/f/activity/' + that.data1[that.reSetIndex].id +'/activityParams/'
				}).then(res => {
                      this.reitemname="";
					  this.reitemdes="";
			     })
			    
			   },
			   //删除的方法
			   deleteInfo(index){
			   
			    this.infoArr.splice(index,1);
			   },
			    
			  redeleteInfo(index){
			    	let that = this;
			        this.axios({
					method: 'delete',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					
					url: '/api/f/activity/activityParams/'+ that.reinfoArr[index].id
				}).then(res => {
					console.log(res)
					var data = res.data;
					that.reinfoArr.splice(index,1);
					
                  	
					
			     })
			    
			   },
			//添加项目
			 addNewList(){
		          this.lists.push({
			      id:this.nextTodoId++,
			      title:this.newAddText
		       })
		     this.newAddText=''
	        },
	        forbidenactivityover(SetIndexssover){
	        	var index = this.SetIndexssover;
	           let that = this;
	        	    this.axios({
					method: 'put',
					headers: {
		   			'X-Requested-With': 'XMLHttpRequest',
		   			'ContentType': 'application/json;charset=UTF-8'
		   		},
					url: '/api/f/activity/' + that.data1[index].id+'/status/2'
				}).then(res => {
                         that.data1[index].status=2 
						 that.$Message.success("结束活动成功");
						 that.peledelssover = false;
				})
	        },
	       forbidenactivity(index){
	       	var index = this.SetIndexss;
	         let that = this;
		   	  this.axios({
		   		method: 'get',
		   		headers: {
		   			'X-Requested-With': 'XMLHttpRequest',
		   			'ContentType': 'application/json;charset=UTF-8'
		   		},
		   		url: '/api/f/activity/'+that.data1[index].id+'/activityJoins'
		   	}).then(res => {
		   		     var data = res.data.data;
		   		  console.log(res)
		   		     
        	   		if (data.length !== 0) {
        	   			this.$Message.success("活动已有参与人，不能撤销");
			      	    this.peledelss = false;
				      	return false;}
				     
				    this.axios({
					method: 'put',					
					url: '/api/f/activity/' + that.data1[index].id+'/status/0'
				}).then(res => {
                         that.data1[index].status=0 
						 that.$Message.success("撤销活动成功");
						 that.peledelss = false;
					
				})

		   	})
	         	
	       },
	         
	        
//	        forbidenactivityone(index){             	
//				
//				this.axios({
//					method: 'put',
//					headers: {
//						'X-Requested-With': 'XMLHttpRequest',
//						'ContentType': 'application/json;charset=UTF-8'
//					},
//					url: '/api/f/activity/' + that.data1[index].id+'/status/2'
//				}).then(res => {
//					
//					
//                       that.data1[index].status=0 
//						 that.$Message.success("结束活动成功");
//						 that.peledelss = false;
//					
//				})
//          },
	        
             drivetectivity(){
             	var index = this.SetIndexs;
				let that = this;
				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/activity/' + that.data1[index].id+'/status/1'
				}).then(res => {
					console.log(res)
					if(res != false) {
                         that.data1[index].status=1 
						 that.$Message.success("启用成功");
						
						that.peledels = false;
					}
				})
            },
			//删除活动
			deletectivity(index) {
				var index = this.SetIndex;
				let that = this;
			    if(that.data1[index].status == 1 || that.data1[index].status==2){
		      	this.$Message.success("活动已发布，不能删除");
	      	    that.peledel = false;
		      	return false;
		      		
			    }
				this.axios({
					method: 'delete',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					
					url: '/api/f/activity/' + that.data1[index].id
				}).then(res => {
					console.log(res)
					if(res != false) {
						that.data1.splice(index, 1)
						that.$Message.success("删除成功");
						
						that.peledel = false;
					}
				})
			},
			search() {
				
				this.ifsearch = true;
				this.currents = 1;
				this.getsearchdatas();
			},
			//搜索活动数据
			getsearchdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/activity?name=' + that.activityname + '&type=' + that.activitytype + '&status=' + that.activitystatus + '&classify=' + that.activityclassify +
						'&pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {
					if(res != false) {
						that.data1 = res.data.data;
						that.pageSize = res.data.pagination.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total;
					}
				})
			},
			//加载活动数据
			getactivitiesdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/activity?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {

					if(res != false) {
						that.data1 = res.data.data;
						that.pageSize = res.data.pagination.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total;
					}
				})
			},

			changecenter: function(center) {
				this.content = center
			},
			addactivity() {
				this.activityId_save = '';
				this.cover_save='';
				this.addactivityname = '';
				this.addactivitytype = '';
				this.addactivitystatus = '';
				this.addactivityclassify = '';
				this.addactivitystarttime =  '';
				this.addactivityendtime = '';
				this.activitysummary='';
				this.activityregulation='',
				this.uploadList=[];
				this.reinfoArr=[];
				this.modaladd = true;
				
			},
			activityaddok() {
				console.log(this.addactivitytype)
				if(this.addactivityname == "" || this.addactivityname == null) {
					this.$Message.info('请完善活动名称信息');
					return false;
				} else if(this.addactivitytype.toString() == "" || this.addactivitytype.toString() == null) {
					this.$Message.info('请完善面向对象信息');
					return false;
				}else if(this.addactivityclassify.toString() == "" || this.addactivityclassify.toString() == null) {
					this.$Message.info('请完善活动分类信息');
					return false;
				} else if(this.addactivitystarttime == "" || this.addactivitystarttime == null) {
					this.$Message.info('请完善活动开始时间信息');
					return false;
				} else if(this.addactivityendtime == "" || this.addactivityendtime == null) {
					this.$Message.info('请完善活动结束时间信息');
					return false;
				}else if(this.cover_save == "" || this.cover_save == null) {
					this.$Message.info('请完善活动封面信息');
					return false;
				}

				//				if (this.addactivityname == "" || this.addactivityname == null || this.addaactivitytype == "" || this.addaactivitytype == null || this.addactivitystatus ==
				//				"" || this.addactivitystatus == null || this.addactivityclassify == "" || this.addactivityclassify == null || this.addactivitystarttime == 
				//				"" || this.addactivitystarttime == null || this.addactivityendtime == "" || this.addactivityendtime == null) {
				//					this.$Message.info('请完善活动信息');
				else {
					this.suretoaddactivity();
//				    this.uploadimg()
				}
			},
			suretoaddactivity() {
				let that = this;
				this.axios({
					method: 'post',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/activity/activities',
					data: {
						name: that.addactivityname,
						target: that.addactivitytype,
						status: that.addactivitystatus,
						classify: that.addactivityclassify,
						beginTime: that.addactivitystarttime,
						endTime: that.addactivityendtime,
						summary:that.activitysummary,
						regulation:that.activityregulation,
						id:this.activityId_save,
						coverId:that.activityId_save,
						cover:this.cover_save,
						paramlist: that.infoArr,
					}					
				}).then(res => {
					console.log(res)
					if(res != false) {
						that.data1.push(res.data);
						that.$Message.info('添加活动成功');
						that.modaladd = false;
						this.getactivitiesdatas();
					}
				})
			},
			
		pairactivity(reSetIndex) {
			     
			     this.reSetIndex=reSetIndex

				 let that = this;
				 
					this.axios({
						method: 'get',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/activity/'+that.data1[reSetIndex].id,
						
					}).then(res => {
						                     console.log(res);
						                     var data=res.data.data;
						                     this.Paramsid= data.activityParamsList.id;
                                             that.readdactivityname = data.activityInfo.name;
											 that.readdactivitytype = data.activityInfo.type.toString();
											 that.readdactivityclassify = data.activityInfo.classify.toString();
											 that.readdactivitystarttime = data.activityInfo.beginTime;
											 that.readdactivityendtime = data.activityInfo.endTime;
											 that.reactivitysummary = data.activityInfo.summary;
				                             that.reactivityregulation = data.activityInfo.regulation;
				                             that.reinfoArr = data.activityParamsList;
											 that.reuploadList = [],
                                             that.reuploadList.push(data.activityInfo.cover)
				                            
				                            
				                            
//						that.$Message.info('修改成功');						
							
							
						
				})

			},
	repairactivity() {
		
		var reSetIndex=this.reSetIndex
		
				 let that = this;
					this.axios({
						method: 'put',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/activity/'+that.data1[reSetIndex].id,
						        
						        data:{
							                 name: that.readdactivityname,
											 type: that.readdactivitytype,
											 classify:that.readdactivityclassify,
											 beginTime:that.readdactivitystarttime,
											 endTime:that.readdactivityendtime,
											 summary:that.reactivitysummary,
				                             regulation:that.reactivityregulation,
		                                     activityParamsList:that.reinfoArr,
				                            
						              }
					}).then(res => {
						console.log();
						if(res != false) {
						that.data1[reSetIndex].name=res.data.data.name,
						that.data1[reSetIndex].type=res.data.data.type,
						that.data1[reSetIndex].classify=res.data.data.classify,
						that.data1[reSetIndex].beginTime=res.data.data.beginTime,
						that.data1[reSetIndex].endTime=res.data.data.endTime,
						that.data1[reSetIndex].summary=res.data.data.summary,
						that.data1[reSetIndex].regulation=res.data.data.regulation,
						that.data1[reSetIndex].activityParamsList=res.data.data.activityParamsList,
						that.remodaladd = false;
						that.$Message.info('修改成功');
						
//						
					}
							
						
				})

			},

		},
		mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
			console.log(this.operation)
			this.getactivitiesdatas();
		}
	}
</script>

<style scoped="scoped">
	.fenye {
		margin-top: -30px;
		float: right;
		margin-right: 20px;
	}
	
	#float_left {
		display: inline-block;
		width: 40%;
		margin: 0 %;
	}
	.demo-upload-list {
		display: inline-block;
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
		margin-right: 4px;
		margin-left: 2.5%;
	}
	
	.demo-upload-list img {
		width: 100%;
		height: 100%;
	}
	
	.demo-upload-list-cover {
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);
	}
	
	.demo-upload-list:hover .demo-upload-list-cover {
		display: block;
	}
	
	.demo-upload-list-cover i {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}
	.tableth{
		
		margin:20px 0;
		border: none;
		line-height: 40px;
	}
</style>