<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>内容管理</BreadcrumbItem>
			</Breadcrumb>
		</div>
	
		
		<!---->
		
		<div class="table_nav_iv">
			<div class="operation_box">
				<div class="active">
					<!---->
					<div class="ui_operateLeft" style="line-height: 32px;">

						<ul class="tab">
							<li class="tab_item">
								<div class="lable">标题内容</div>
								<div class="form_nav">
									<Input v-model="articlesname" placeholder="请输入标题内容..." style="width: 200px;"></Input>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">发布人</div>
								<div class="form_nav">
									<Input v-model="articlesperson" placeholder="请输入发布人..." style="width: 200px"></Input>
								</div>
							</li>
							
							
							<li class="tab_item">
								<div class="lable">状态</div>
								<div class="form_nav">
									<Select v-model="articlesstatus" style="width:200px;" placeholder="请选择状态...">
					<Option v-for="item in articlesStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
								</div>
							</li>

							<li class="tab_item">
								<div class="lable">内容分类</div>
								<div class="form_nav">
									<span id="congtentstype" style="width: 200px;" @click="modaltreeOpen"> {{changeText}} </span>
								</div>
							</li>
							

							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button icon="ios-search" @click="search()" type="primary">搜索</Button>
									<Button icon="ios-refresh" @click="" type="primary">重置</Button>
								</div>
							</li>

							

						</ul>

					</div>

					<div class="ui_operateRight">

						<!---->

						<ul class="tab">
							<li class="tab_item">
								<div class="lable"></div>
								<div class="form_nav">
									<Button type="primary">导入</Button>
									<Button type="primary">导出</Button>
									<Button type="primary" @click="addarticles()">新建内容</Button>
								</div>
							</li>

						</ul>

					</div>
				</div>

			</div>

			<div>

				<Table :columns="columns1" :data="data1" border></Table>
				
				<div class="ui_tableBottom">

					<div class="ui_operate">

					</div>

					<div class="ui_page">
						<Page :total="totalpage" :page-size="pageSize" show-total :current="currents" @on-change="pageChange" />
					</div>

				</div>

			</div>
		</div>
		
		<!---->
		
		
		<Modal v-model="remodaladd" title="编辑内容详情" width="60%">
			<Form :label-width="80">
				<FormItem label="标题名称" id="float_left" style="width:80%">
					<Input v-model="readdarticlesname" placeholder="请输入活动名称..."></Input>
				</FormItem>
				<FormItem label="内容类型" id="float_left" style="width:80%">
				 <div id="congtentstypes"  @click="modaltreeOpen">
					 {{changeText}}
				 </div>
				</FormItem>
                <FormItem label="是否置顶" id="float_left" style="width:80%">	
                 	<Select v-model="readdarticlestop"  >
                 		<Option v-for="item in articlestop" :value="item.value" :key="item.value">{{ item.label }}</Option>
                 	</Select>
                 </FormItem>
			</Form>
			<div style=" padding: 0 32px;">
				摘要:<Input v-model="readdarticlessummary" type="textarea" :rows="4" placeholder="请输入活动摘要" style="width: 77%; margin:0 20px;  "></Input><br>
			</div>

			<p style="font-size: 14px; margin: 5px 0;"><strong>修改封面</strong></p>
			<div style="margin-top:20px; margin-left: 20px; padding:10px 20px; ">

				<div class="pl">
					<div class="demo-upload-list" v-for="(item,index) in reuploadList">
						<template>
							<img :src="item">
							<div class="demo-upload-list-cover">
								<Icon type="ios-eye-outline" @click.native="rehandleView(item)"></Icon>
							</div>
						</template>

					</div>
					<Upload ref="upload" :show-upload-list="false" :data="uparry" :default-file-list="redefaultList" :on-success="rehandleSuccess"
					 :format="['jpg','jpeg','png']" :max-size="5120" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize"
					 :before-upload="handleBeforeUpload" type="drag" :action="reuploadpathdata" name="multipartFile" style="display: inline-block;width:58px;">
						<div style="width: 58px;height:58px;line-height: 58px;">
							<Icon type="ios-camera" size="20"></Icon>
						</div>
					</Upload>
				</div>
				<Modal title="图片详情" v-model="revisible" style="text-align: center;">
					<img :src="reimgName" style="width: 80%;">
					<div slot="footer">
						<Button type="error" size="large" @click="revisible=false">关闭</Button>
					</div>
				</Modal>
			</div>
			<div style="margin-top:20px;  padding:10px 20px; ">
                <editor class="editor" :value="recontent"  :setmsg="editorsetmsg"  @change="changecenters"></editor>
			</div>
			<div class="demo-drawer-footer">
				<Button type="primary" @click="repairarticles()">确认</Button>
				<Button type="error" @click="remodaladd = false">关闭</Button>
			</div>
		</Modal>

		<Modal v-model="modaladd" title="新增内容" width="60%">
			<Form :label-width="80">
				<FormItem label="标题名称" id="float_left" style="width:80%">
					<Input v-model="addarticlesname" placeholder="请输入活动名称..."></Input>
				</FormItem>
				<FormItem label="内容类型" id="float_left" style="width:80%">
				 <div id="congtentstypes"  @click="modaltreeOpen">
					 {{changeText}}
				 </div>
				</FormItem>
				
				<FormItem label="是否置顶" id="float_left" style="width:80%">
					<Select v-model="addarticlestop">
						<Option v-for="item in articlestop" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</FormItem>
			</Form>
			<div style=" padding: 0 32px;">
				摘要:<Input v-model="addarticlessummary" type="textarea" :rows="4" placeholder="请输入活动摘要" style="width: 77%; margin:0 20px;  "></Input><br>
			</div>
			<p style="font-size: 14px; margin: 5px 0;"><strong>上传封面</strong></p>

			<div style="margin-top:20px; margin-left: 20px; padding:10px 20px; ">
				<div class="pl">

					<div class="demo-upload-list" v-for="(item,index) in uploadList">

						<template>
							<img :src="item.relPath">
							<div class="demo-upload-list-cover">
								<Icon type="ios-eye-outline" @click.native="handleView(item.relPath)"></Icon>

							</div>
						</template>

					</div>
					<Upload ref="upload" 
					:show-upload-list="false" 
					:data="uparry" 
					:default-file-list="defaultList" 
					:on-success="handleSuccess"
					 :format="['jpg','jpeg','png']" 
					 :max-size="5120" 
					 :on-format-error="handleFormatError" 
					 :on-exceeded-size="handleMaxSize"
					 :before-upload="handleBeforeUpload" type="drag" :action="uploadpathdata" name="multipartFile" style="display: inline-block;width:58px;">
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
			<!-- <div style="margin-top:20px;  padding:10px 20px;">
			      <editor class="editor" :value="content"  :setmsg="editorsetmsg"  @change="changecenter"></editor>
			</div> -->

			<div class="demo-drawer-footer">
				<Button type="primary" @click="articlesaddok()">确认</Button>
				<Button type="error" @click="modaladd = false">关闭</Button>
			</div>
		</Modal>

		<div style="padding-bottom: 30px; margin-bottom: 30px;">
			
		</div>
		<div class="fenye">
			
		</div>
       <!-- tree -->
		 <Modal v-model="modaltree" title="请选择您新建的内容的类型" width="40%" >
		      <zTree @my-event="getMyevent"></zTree>
			  
		      <div slot="footer">
		      	<Button type="primary" size="small"  @click="MyeventOk">确定</Button>
				<Button type="error" size="small"  @click="modaltree = false">取消</Button>
		      </div>
		</Modal>
		
		<!--启动窗口-->
		<Modal v-model="peledels" width="360">
			<p slot="header" style="color:#57a3f3;text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>发布内容信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行发布操作</p>
				<p>确定要发布吗?</p>
			</div>
			<div slot="footer">
				<Button type="primary" size="large" long @click="drivearticles">确定</Button>
			</div>
		</Modal>
		<!--禁用窗口-->
		<Modal v-model="peledelss" width="360">
			<p slot="header" style="color:red; text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>撤销发布信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行撤销发布操作</p>
				<p>确定要撤销吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="forbidenarticles">确定</Button>
			</div>
		</Modal>

		<Modal v-model="peledelssover" width="360">
			<p slot="header" style="color:red; text-align:center;">
				<Icon type="md-alert"></Icon>
				<span>删除内容信息</span>
			</p>
			<div style="text-align:center">
				<p>您正在执行删除内容操作</p>
				<p>确定要删除吗吗?</p>
			</div>
			<div slot="footer">
				<Button type="error" size="large" long @click="articlesdelete">确定</Button>
			</div>
		</Modal>
	</div>
</template>

<script>
	import Vue from 'vue'
	import editor from '@/components/tinymce'
	import zTree from '@/components/zTree'
	
	export default {
		data() {

			return {
			      
				//tree
				nodesid:"",
				
				changeText:"",
				nodesname:"",
				nodescode:"",
				
				modaltree:false,
				codelist:[],
				codelistson:[],
				shows:false,
				
				//switch
				switch1: false,
				content: '',
				recontent: '',
				editorsetmsg: {
					height: 200,
					images_upload_url: '/api/f/contents/uploadContentImages',
					status: "change"
				},
                
				activityId_save: '',
				cover_save: '',		
				Paramsid: '',
				content_save: '',
				cover_id:'',

				//添加项目
				msg: "项目",
				itemname: '',
				itemdes: '',
				infoArr: [],
				reinfoArr: [],
                articlestop:[{
						value: 0,
						label: '不置顶'
					},
					{
						value: 1,
						label: '置顶'
					}],
					
					
				articlesObj: [{
						value: "0",
						label: '学习'
					},
					{
						value: "1",
						label: '帮助'
					},
					{
						value: "2",
						label: '新闻'
					}
				],

				articlesStatus: [{
						value: "0",
						label: '草稿'
					},
					{
						value: "1",
						label: '发布'
					},
					{
						value: "2",
						label: '取消发布'
					}
				],
             
				file: "",
				category: '0',
				uploadpathdata: '',
				
				uploadpathdata : '/api/f/contents/uploadCover',
				reuploadpathdata: '',
				defaultList: [],
				filecover: [],
				imgName: '',
				reimgName: '',
				visible: false,
				uploadList: [],
				uparry: {
					multipartFileList: []
				},
				reuploadList: [],
				redefaultList: [],
				revisible: false,

                fileuploadList:[],
            
				data1: [],
				additems: true,

				pageSize: 20,
				pageNum: 0,
				totalpage: 0,
				currents: 1,
				modaladd: false,
				
				peledels: false,
				peledelss: false,
				remodaladd: false,
				peledelssover: false,
				SetIndexssover: '',
				operation: {},
				SetIndex: "",
				SetIndexs: "",
				SetIndexss: "",
				reSetIndex: "",
				ifsearch: false,
				articlesname: '',
				articlescode: '',
				articlesstatus: '',
				articlesperson: '',
				addarticlesname: '',
				addarticlesperson: '',
				addarticlessummary: '',
				addarticlestop:'',
			
				readdarticlestop:'',
				readdarticlesname: '',
				
				readdarticlessummary: '',
				columns1: [{
						title: '标题',
						key: 'name',
						align: 'center',
						width: 150,
						fixed: 'left',
					},

					{
						title: '创建时间',
						key: 'created',
						align: 'center',

					},
					{
						title: '发布人',
						key: 'publisherName',
						align: 'center',

					},
					{
						title: '发布时间',
						key: 'publishTime',
						align: 'center',
					},
					{
						title: '内容分类',
						key: 'typeName',
						align: 'center',
					},
					{
						title: '内容状态',
						key: 'status',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.status == 0) {
								text = '草稿'
							} else if (row.status == 1) {
								text = '发布'
							} else if (row.status == 2) {
								text = '取消发布'
							}
							return h('div', text);
						}

					},
					{
						title: '是否置顶',
						key: 'top',
						align: 'center',
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.top == 0) {
								text = '否'
							} else if (row.top == 1) {
								text = '是'
							}
							return h('div', text);
						}
					},
					
					
					{
						title: '操作',
						key: 'action',
						width: 120,
						fixed: 'right',
						align: 'center',
						render: (h, params) => {

							return h('div', [

								h('Button', {
									props: {
										type: 'primary',
										size: 'small',
//										disabled: !this.operation.edit
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {

											this.$router.push({
												name: 'articlesDetails',
												query: {
													id: this.data1[params.index].id
												}
											})
										}
									}
								}, '详情'),
							])

						}
					}
					

//					{
//						title: '操作',
//						key: '',
//						align: 'center',
//						width: 220,
//						fixed: 'right',
//						render: (h, params) => {
//							return h('div', [
//								h('i-switch', { //数据库1是已处理，0是未处理
//									props: {
//										type: 'primary',
//										value: params.row.top==1, //控制开关的打开或关闭状态，官网文档属性是value
//									},
//									scopedSlots: {
//										open: () => h('span', '是'),
//										close: () => h('span', '否')
//									},
//									style: {
//										marginRight: '5px',
//										marginTop: '5px',
//										marginBottom: '5px',
//									    display:(function(){
//											if(params.row.status==1){
//												return "none"
//											}
//										})()
//									},
//									on: {
//										'on-change': (value) => { //触发事件是on-change,用双引号括起来，
//											//参数value是回调值，并没有使用到
//											//											 this.switch(params.index) //params.index是拿到table的行序列，可以取到对应的表格值
//
//											this.changedswitch(params.index)
//
//										}
//									}
//								}, ),
//
//								h('Button', {
//									props: {
//										type: 'primary',
//										size: 'small',
//
//									},
//									style: {
//										marginRight: '5px',
//										marginTop: '5px',
//										marginBottom: '5px',
//										display: (function() {
//											if (params.row.status == 1) {
//												return "none"
//											}
//										})()
//									},
//									on: {
//										click: () => {
//											this.reSetIndex = params.index;
//											this.reuploadList = [];
//											this.pairarticles(params.index);
//											this.reuploadpathdata = '/api/f/contents/' + this.data1[params.index].id + '/updateCover';
//											this.remodaladd = true;
//											
//
//										}
//									}
//								}, '编辑详情'),
//
//								h('Button', {
//									props: {
//										type: 'primary',
//										size: 'small',
//
//									},
//									style: {
//										marginRight: '5px',
//										marginTop: '5px',
//										marginBottom: '5px',
//										display: (function() {
//											if (params.row.status == 1) {
//												return "none"
//											}
//										})()
//									},
//									on: {
//										click: () => {
//
//											this.SetIndexs = params.index
//											this.peledels = true;
//										}
//									}
//								}, '发布'),
//								h('Button', {
//									props: {
//										type: 'error',
//										size: 'small',
//										disabled: !this.operation.edit
//									},
//									style: {
//										marginRight: '5px',
//										marginTop: '5px',
//										marginBottom: '5px',
//										display: (function() {
//											if (params.row.status == 0) {
//												return "none"
//											}else if(params.row.status == 2){
//												return "none"
//											}
//										})()
//									},
//									on: {
//										click: () => {
//											this.SetIndexss = params.index
//											this.peledelss = true;
//
//										}
//									}
//								}, '撤销'),
//								h('Button', {
//									props: {
//										type: 'error',
//										size: 'small',
//										disabled: !this.operation.edit
//									},
//									style: {
//										marginRight: '5px',
//										marginTop: '5px',
//										marginBottom: '5px',
//										display: (function() {
//											if (params.row.status == 1) {
//												return "none"
//											}
//										})()
//									},
//									on: {
//										click: () => {
//											this.SetIndexssover = params.index
//											this.peledelssover = true;
//
//										}
//									}
//								}, '删除'),
//							]);
//						}
//					}
				],
			}
		},


		methods: {
			//分页
			pageChange: function(index) {
				this.currents = index			
				if(this.isSearch == true) {
					this.getsearchdatas()
				} else {
					this.getarticlesdatas()
				}
			
			},
			//tree
			modaltreeOpen() {	
				this.modaltree = true;
			},
			getMyevent(id,name,code){
				this.nodesname = name;
				this.nodesid=id;
				this.nodescode=code;
				
			},
			MyeventOk(){
				this.changeText = this.nodesname;
				this.modaltree = false;
			},
		//新建是否置顶
           change (status) {
                this.$Message.info('开关状态：' + status);
            },
		    	//是否置顶切换状态
			changedswitch(index) {

				let that = this;
				//打开是true,已经处理1
				if (this.data1[index].top == 1) {
					this.axios({
						method: 'put',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/contents/' + this.data1[index].id,
						data: {
							top: 0,

						}
					}).then(res => {
						console.log(res)
						this.data1[index].top = 0
						that.$Message.success("您设置状态为不置顶");
					})
				} else if (this.data1[index].top == 0) {
					this.axios({
						method: 'put',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/contents/' + this.data1[index].id,
						data: {
							top: 1,
						}
					}).then(res => {
						this.data1[index].top = 1
						that.$Message.success("您设置状态为置顶");
					})
				}
			},
		
			// shangchuan tupian
			handleView(path) {
				this.imgName = path;
				this.visible = true;
			},
			rehandleView(item) {
				this.reimgName = item;
				this.revisible = true;
			},
            handleSuccessfile(res, file) {
            	this.cover_save = res.data.relPath;
            	if (this.activityId_save == "") {
            		this.activityId_save = res.data.activityId;
            	}   
		       
            	this.fileuploadList = []
            	this.fileuploadList.push(res.data)
            
            },
			handleSuccess(res, file) {
				console.log(res)
				this.cover_save = res.data.relPath;
                this.cover_id = res.data.fileId;

				if (this.activityId_save == "") {
					this.activityId_save = res.data.activityId;
				}
				console.log(res)
				this.uploadList = []
				this.uploadList.push(res.data)

			},
			rehandleSuccess(res, file) {
				console.log(res)
                    this.cover_save = res.data.relPath;
				    this.reuploadList=[];
				    this.reuploadList.push(res.data.relPath)
				  
		
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


			articlesdelete(SetIndexssover) {
				var index = this.SetIndexssover;
				let that = this;
				this.axios({
					method: 'delete',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/contents/' + that.data1[index].id
				}).then(res => {
					that.data1.splice(index, 1);
					that.$Message.success("内容删除成功");
					that.peledelssover = false;

				})
			},
			forbidenarticles(index) {
				var index = this.SetIndexss;
				let that = this;
				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/contents/' + that.data1[index].id + '/status/2'
				}).then(res => {
					that.data1[index].status = 2
					that.$Message.success("撤销发布成功");
					that.peledelss = false;
				})
			},

			drivearticles() {
				var index = this.SetIndexs;
				let that = this;
				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/contents/' + that.data1[index].id + '/publish'
				}).then(res => {
					console.log(res)
					if (res != false) {
						that.data1[index].status = 1
						that.$Message.success("发布成功");
                         that.getarticlesdatas();
						that.peledels = false;
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
					url: '/api/f/contents?' + (that.articlesname == '' ? '' : 'name=' + that.articlesname)  + (that.articlesperson == '' ? '' : '&publisher=' + that.articlesperson) +
						(that.articlesstatus == '' ? '' : '&status=' + that.articlesstatus) + (this.nodesid == '' ? '' : '&contentTypeId=' + this.nodesid) +
						'&pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {	
					if (res != false) {
						that.data1 = res.data.data;
						that.pageSize = res.data.pagination.pageSize;
						that.pageNum = res.data.pagination.pageNum;
						that.totalpage = res.data.pagination.total;
					}
				})
			},
			//加载活动数据
			getarticlesdatas() {
				let that = this;
				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/contents?' + '&pageNum=' + that.currents + '&pageSize=' + that.pageSize
				}).then(res => {   
					if (res != false) {
						console.log(res)
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
			changecenters: function(center) {
				this.recontent = center
			},
			
			addarticles() {
				
				
				this.$emit('openWindow', ('articlesNewly'), ('新建内容'), ('13-1'), ('articlesNewly'), ('articlesNewly'))
				
				
				
				
			
				
				
				this.activityId_save = '';
				this.cover_save = '';
				this.addarticlesname = '';
				this.addarticlesperson = '';	
				this.addarticlessummary = '';
				this.addarticlescode = '';
				this.changeText = '';
				this.modaladd = true;
				this.uploadList='';
				this.addarticlestop='';
			},
			articlesaddok() {
				if (this.addarticlesname == "" || this.addarticlesname == null) {
					this.$Message.info('请完善标题名称信息');
					return false;
				}  else if (this.addarticlessummary.toString() == "" || this.addarticlessummary.toString() == null) {
					this.$Message.info('请完善摘要信息');
					return false;
				}
				let that = this;
				this.axios({
					method: 'post',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/contents/contents',
					data: {
						name: that.addarticlesname,
						summary: that.addarticlessummary,
						content: that.content, 
						contentsTypeId:that.nodesid,
						code:that.nodescode,
						top:that.addarticlestop,
						cover: this.cover_save, 
						coverId: this.cover_id ,
						
					}
				}).then(res => {     
						this.getarticlesdatas();
						that.$Message.info('添加内容成功');
						that.modaladd = false;
						that.changeText = "";
				})
			},


			pairarticles(reSetIndex) {
				this.changeText = '';
				this.readdarticlesname ='';
				this.readdarticlessummary = '';
				this.readdarticlestop ='';
				this.recontent = '';
				this.reSetIndex = reSetIndex;
				let that = this;

				this.axios({
					method: 'get',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/contents/' + that.data1[reSetIndex].id,

				}).then(res => {

					
					var data = res.data.data;
				    that.changeText = data.typeName;
					that.readdarticlesname = data.name;
					that.readdarticlessummary = data.summary;
					that.readdarticlestop = data.top;
					that.recontent = data.content;
			
					that.editorsetmsg.status="change"
					that.changecenters(data.content);
			        that.nodesid = data.contentsTypeId;
					that.nodescode = data.code;
					if (data.cover == "") {
						return;
					} else {
						that.reuploadList.push(data.cover)
					}
					
					// 


				})

			},
			repairarticles() {

				var reSetIndex = this.reSetIndex
				let that = this;	
				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/contents/' + that.data1[reSetIndex].id,

					data: {
                        typeName:that.changeText,
						name: that.readdarticlesname,
						top: that.readdarticlestop,
						content: that.recontent,
						summary: that.readdarticlessummary,
						contentsTypeId:this.nodesid,
						code:this.nodescode,
						
					}
				}).then(res => {
					console.log(res);
					if (res != false) {
						   this.getarticlesdatas();
							that.remodaladd = false;
						    that.$Message.info('修改成功');
							that.changeText = "";
							
					}


				})

			},
		

		},
		components: {
			'editor': editor,
			'zTree': zTree
		},
		

		mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
		
			this.getarticlesdatas();
		
		}
	}
</script>

<style>
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
	#congtentstypes{
		width: 100%; 
		border: 1px solid #dcdee2;
		color:#515a6e ;
		border-radius:5px;
		height: 32px;
	    padding-left:8px;
	    line-height: 28px;
	}
	#congtentstypes:hover{
		border: 1px solid #5cadff;
	}
	#congtentstype{
		width: 12%;
		display: inline-block;
        margin-bottom: -13px;
		margin-right: 5px;
		border: 1px solid #dcdee2;
		color:#515a6e ;
		border-radius:5px;
		height: 32px;
		font-size: 12px;
		padding-left:8px;
		line-height: 32px;
	}
	#congtentstype:hover{
		border: 1px solid #5cadff;
	}
</style>

<style src="../../../static/tinymce/skins/lightgray/skin.min.css">

</style>