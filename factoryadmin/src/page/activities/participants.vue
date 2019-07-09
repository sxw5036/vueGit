<template>
	<div>
	   <div class="Breadcrumb">
	       	<Breadcrumb>
	       		<BreadcrumbItem to="/admin">首页</BreadcrumbItem>
	       		<BreadcrumbItem>参与者管理</BreadcrumbItem>
	       	</Breadcrumb>
       </div>
       

       		<div style="margin: 20px 0;">
					参与者名称：<Input v-model="participantsname"  placeholder="请输入参与者名称..." style="width: 12%;margin:0 5px;"></Input>
					参与者电话：<Input v-model="participanttel" placeholder="请输入参与者电话..." style="width: 12%;margin:0 5px;"></Input>
   		            公司名称：<Input v-model="participantcompany"  placeholder="请输入公司名称..." style="width: 12%;margin:0 5px;"></Input>					         
					
					活动对象：<Select v-model="participantobjs" style="width:12%;margin:0 5px;" placeholder="请选择对象...">
						         <Option v-for="item in activitiesObj" :value="item.value" :key="item.value">{{ item.label }}</Option>
					         </Select>
				    付款状态：<Select v-model="participantpay" style="width:12%;margin:0 5px;" placeholder="请选择付款状态...">
						         <Option v-for="item in activitiesType" :value="item.value" :key="item.value">{{ item.label }}</Option>
					         </Select>

				<Button icon="ios-search" @click="search">搜索</Button>	
			</div>

            <div  style="padding-bottom: 30px; margin-bottom: 30px;">
			     <Table :columns="columns1" :data="data1" border></Table>
		    </div>
		    <div class="fenye" >
				<Page :total="totalpage" :page-size="pageSize" show-total  :current="currents" />
			</div>
			
			<Modal v-model="peledel" width="360" >
	        <p slot="header" style="color:red; text-align:center;">
	            <Icon type="md-alert"></Icon>
	            <span>撤销参与者人信息</span>
	        </p>
	        <div style="text-align:center">
	            <p>您正在执行撤销参与者人操作，撤销将无法参与活动</p>
	            <p>确定要撤销吗?</p>
	        </div>
	        <div slot="footer">
	            <Button type="error" size="large" long  @click="postparticipantsno()">确定</Button>
	        </div>
        </Modal>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				activityId:"",
				participantsid:'',
				participantsname:'',
				participanttel:'',
				participantcompany:'',
				participantobjs:'',
				participantpay:'',
				activitiesObj: [{
						value: 0,
						label: '厂家'
					},
					{
						value: 1,
						label: '经销商'
					}	
				],
					activitiesType: [{
						value: 0,
						label: '未付款'
					},
					{
						value: 1,
						label: '已付款'
					}	
				],
				activitiesStatus: [{
						value: 0,
						label: '已下线'
					},
					{
						value: 1,
						label: '上线'
					}	
				],
				activitiesClassification: [{
						value: 0,
						label: '海报'
					},
					{
						value: 1,
						label: '活动'
					}	
				],
				data1:[],
				pageSize: 10,
				totalpage: 1,
				currents: 1,
				operation:{},
				setIndex:'',
				peledel:false,
				columns1:[
					{
                        title: '姓名',
                        key: 'name',
						align: 'center',			
						width:150,
						fixed: 'left',
                    },
                    {
                        title: '电话',
                        key: 'mobile',
						align: 'center',
						width:200,
						ellipsis: true,
                    },
                    {
                        title: '公司名称',
                        key: 'companyName',
						align: 'center',
						width:200,
						ellipsis: true,
                    },
                   
                    {
                        title: '活动对象',
                        key: 'type',
						align: 'center',
						width:150,
						ellipsis: true,
							render: (h, params) => {
							const row = params.row;
							var text
							if (row.type == 0) {
								text = '厂家'
							} else if (row.type == 1) {
								text = '经销商'
							} 
							return h('div', text);
						}
                    },
                    {
                        title: '负责人名称',
                        key: 'companyLeader',
						align: 'center',
						width:150,
						ellipsis: true,
                    },
                    {
                        title: '负责人电话',
                        key: 'companyLeaderTel',
						align: 'center',
						width:200,
						ellipsis: true,
                    },
                    
                     {
                        title: '付款状态',
                        key: 'paid',
						align: 'center',
						width:150,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.paid == 0) {
								text = '未付款'
							} else if (row.paid == 1) {
								text = '已付款'
							} 
							return h('div', text);
						}
						
					},
                    {
                        title: '免费状态',
                        key: 'free',
						align: 'center',
						width:150,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.free == 0) {
								text = '不免费'
							} else if (row.free == 1) {
								text = '免费'
							} 
							return h('div', text);
						}
						
					},
                     {
                        title: '参与状态',
                        key: 'status',
						align: 'center',
						width:150,
						ellipsis: true,
						render: (h, params) => {
							const row = params.row;
							var text
							if (row.status == 0) {
								text = '已撤销'
							} else if (row.status == 1) {
								text = '已参与'
							} 
							return h('div', text);
						}
						
//						render: (h, params) => {
//							const row = params.row;
//							var text
//							if (row.status == 0) {
//								text = '已撤销'
//							} else if (row.status == 1) {
//								text = '已参与'
//							} 
//							return h('div', [
//                          h('span', {
//                                  style: {
//                                        color: '#f00'
//                                          }
//                                       }, params.name),
//                                 ]);
//						        }
                      },
                    
                     {
                        title: '参与时间',
                        key: 'created',
						align: 'center',
						width:200,
						ellipsis: true,
						render: (h, params) => {
						
							const row = params.row;
							var text;
						
							text = row.created.substr(0,10)
						
							return h('div', [
								h('span', {
									style: {
										display: 'inline-block',
										width: '100%',
										overflow: 'hidden',
										textOverflow: 'ellipsis',
										whiteSpace: 'nowrap'
									},
									domProps: {
										title: text
									}
								}, text)
							]);
						
						}
                    },
					{
						title: '操作',
						key: '',
						align: 'center',
						width:120,
						ellipsis: true,
						
						fixed: 'right',
						render: (h, params) => {
							return h('div', [
								
								
							    h('Button', {
										props: {
											type: 'info',
											size: 'small'
										},
										style: {
											marginRight: '5px',
											marginTop: '5px' ,
											marginBottom: '5px',											
											
										display:(function(){
											if(params.row.status==0){
												return "none"
											}
										})()
										},
										on: {
											click: () => {
											    this.peledel = true;
												this.setIndex = params.index
											   
											}
										}
									}, '撤销'),
							   
							]);
						}
					}
				],
			}
			
	       },
	    methods:{
			//分页
			pageChange: function(index) {
				this.currents = index			
				if(this.isSearch == true) {
					this.getsearchdatas()
				} else {
					this.getparticipantsdatas()
				}
			
			},
	    //加载参与者数据
	    postparticipantsno(index) {
	    let that = this;
		 var index = this.setIndex;
         if(this.data1[index].paid == 1){
      	this.$Message.success("您已付款，不能撤销");
      	that.peledel = false;
      	return false;
      		
	    }
	    	
		   
		    
		    that.participantsid = this.data1[index].id
		   	this.axios({
		   		method: 'put',
		   		headers: {
		   			'X-Requested-With': 'XMLHttpRequest',
		   			'ContentType': 'application/json;charset=UTF-8'
		   		},
		   		url: '/api/f/activity/activityJoins/'+that.participantsid+'/status/0',
		   				
		   	}).then(res => {
		   		
		   		console.log(res)		
       		    that.data1[index].status=0;      	  	 
        	   	that.$Message.success("撤销成功");
			    that.peledel = false;	
		   		}
		   	)
		   },
	    	//搜索参与人
	    	search() {
				this.ifsearch = true;
				this.currents = 1;
			    this.getsearchdatas();
			},
			getsearchdatas() {
			
		   	let that = this;
		   	this.axios({
		   		method: 'get',
		   		headers: {
		   			'X-Requested-With': 'XMLHttpRequest',
		   			'ContentType': 'application/json;charset=UTF-8'
		   		},
		   		url: '/api/f/activity/'+ this.activityId +'/activityJoins?name=' + that.participantsname + '&paid=' + that.participantpay + '&mobile=' + that.participanttel + '&companyName=' +
		   		that.participantcompany + '&type=' + that.participantobjs +
						'&pageNum=' + that.currents + '&pageSize=' + that.pageSize
		   	}).then(res => {
		   		console.log(res)
        	   		if (res != false) {
  	   			    that.data1 = res.data.data; 	   			    
        			that.pageSize = res.data.pagination.pageSize;
					that.pageNum = res.data.pagination.pageNum;
					that.totalpage = res.data.pagination.total;
		   		}
		   	})
		   },
	    	//加载参与者数据
	    getparticipantsdatas() {
		   	let that = this;
		   	this.axios({
		   		method: 'get',
		   		headers: {
		   			'X-Requested-With': 'XMLHttpRequest',
		   			'ContentType': 'application/json;charset=UTF-8'
		   		},
		   		url: '/api/f/activity/'+this.activityId+'/activityJoins?'+ '&pageNum=' + that.currents + '&pageSize=' + that.pageSize
		   	}).then(res => {
        	   		if (res != false) {
        	   		
  	   			    that.data1 = res.data.data; 	   			    
        			that.pageSize = res.data.pagination.pageSize;
					that.pageNum = res.data.pagination.pageNum;
					that.totalpage = res.data.pagination.total;
					that.participantsid = res.data.data.id;
		   		}
		   	})
		   },
	       },
	       mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			this.activityId = this.$route.query.activityId
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
			
			this.getparticipantsdatas();
		}
		}
</script>

<style>
	.fenye {
		margin-top: -30px;
		float: right;
		margin-right: 20px;
	}
	
</style>