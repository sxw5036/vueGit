<template>
	<div>
	   <div class="Breadcrumb">
	       	<Breadcrumb>
	       		<BreadcrumbItem to="/admin">首页</BreadcrumbItem>
	       		<BreadcrumbItem>内容类型管理</BreadcrumbItem>
	       	</Breadcrumb>
       </div>
       
		<div id="goodstypes">
			<div style="margin-bottom: 10px;text-align: right;">
				<div style="display: inline-block;">
					<Button type="primary" @click="addone" v-if="operation.edit">添加一级类型</Button>
				</div>
			</div>
			<div class="goodstypes">
				<ul>
					<li style="width: 5%;"></li>
					<li style="width: 5%;">序号</li>
					<li style="width: 20%;">名称</li>
					<li style="width: 30%;">描述</li>	
					<li style="width: 20%;">编码</li>	
					<li style="width: 20%;">操作</li>
				</ul>
			</div>
			<div class="table_tab" style="height: 600px;overflow: scroll;">
				<table border="1px" cellspacing="" cellpadding="" style="width: 100%;">
					<tbody class="table_n" v-for="(item,index) in menuarrs">
						<tr>
							<th class="th_f" style="width: 5%;word-break: break-all;word-wrap: break-word;"><small v-show="item.twomenu.length>0" @click="tabshow">[+]</small><span
								 @click="tabhide">[-]</span></th>
							<th style="width: 5%;word-break: break-all;word-wrap: break-word;">{{index+1}}</th>
							<th style="width: 20.3%;word-break: break-all;word-wrap: break-word;">{{item.name}}</th>
							<th style="width: 30.2%;word-break: break-all;word-wrap: break-word;">{{item.notes}}</th>
							<th style="width: 20.2%;word-break: break-all;word-wrap: break-word;">{{item.code}}</th>
							<th class="item_operation" style="width: 20%;word-break: break-all;word-wrap: break-word;">
								<Button @click="editor(index)" type="primary" size="small" v-if="operation.edit">编辑</Button>
								<Button type="primary" @click="addtwo(index)" size="small" v-if="operation.edit">添加二级类型</Button>
								<Button @click="setIndex=index,peledel=true" type="error" size="small" v-if="operation.delete">删除</Button>
							</th>
						</tr>
						<tr class="table_child" v-for="(itemdb,indexdb) in menuarrs[index].twomenu">
							<th style="width: 5%;word-break: break-all;word-wrap: break-word;"></th>
							<th style="padding-right: 0px;color: red;width: 5%;word-break: break-all;word-wrap: break-word;">{{indexdb+1}}</th>
							<th style="width: 20.2%;word-break: break-all;word-wrap: break-word;">{{itemdb.name}}</th>
							<th style="width: 30.2%;word-break: break-all;word-wrap: break-word;">{{itemdb.notes}}</th>
							<th style="width: 20.2%;word-break: break-all;word-wrap: break-word;">{{itemdb.code}}</th>							
							<th class="item_operation" style="width: 20%;">
							<Button @click="editortwo(indexdb,index)" type="primary" size="small" v-if="operation.edit">编辑</Button>
							<Button type="error" size="small" @click="setIndex=index ,setIndexs=indexdb,peledelss=true" v-if="operation.delete">删除</Button></th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<!--修改分类  开始 -->
		<Drawer v-model="modaladd" title="修改一级菜单" @on-ok="addok" @on-cancel="addcancel"  width="500">
			<Form :label-width="80">
				<FormItem label="名称">
					<Input v-model="readdernames" placeholder="请输入名称..."  style="width: 90%;"></Input>
				</FormItem>				
				<FormItem label="描述">
					<Input v-model="readdernotes" placeholder="请输入描述..."  style="width: 90%;"></Input>
				</FormItem>
				<FormItem label="编码">
					<Input v-model="readdertype" placeholder="请输入唯一的编码..."  style="width: 90%;"></Input>
				</FormItem>
					
				</FormItem>
			</Form>
			<div class="demo-drawer-footer">
			    <Button style="margin-right: 8px" @click="addcancel">取消</Button>
			    <Button type="primary" @click="addok">确认</Button>
			</div>
		</Drawer>
		<!--修改分类  jiesu -->
		<!--添加分类  jiesu -->
		<Drawer v-model="modaladds" title="添加一级类型" @on-ok="newok" @on-cancel="cancel" width="500">
			<Form :label-width="80">
				<FormItem label="名称">
					<Input v-model="addnames" placeholder="请输入名称..." style="width: 90%;"></Input>
				</FormItem>				
				<FormItem label="描述">
					<Input v-model="addnotes" :rows="4" placeholder="请输入描述..."  style="width: 90%;"></Input>
				</FormItem>
				<FormItem label="编码"> 
                     <Input v-model="addtype"  placeholder="请输入唯一的编码..."  style="width: 90%;"></Input>                   
				</FormItem>
				
			</Form>
			<div class="demo-drawer-footer">
			    <Button style="margin-right: 8px" @click="cancel">取消</Button>
			    <Button type="primary" @click="newok">确认</Button>
			</div>
		</Drawer>
		<!--添加分类  jiesu -->
		<!--添加 二级分类  jiesu -->
		<Drawer v-model="modaladdx" title="添加二级类型" @on-ok="renewok" @on-cancel="cancels" width="500">
			<Form :label-width="80">
				<FormItem label="名称">
					<Input v-model="addernames" placeholder="请输入名称..."  style="width: 90%;"></Input>
				</FormItem>				
				<FormItem label="描述">
					<Input v-model="addernotes" placeholder="请输入描述..."  style="width: 90%;"></Input>
				</FormItem>
				<FormItem label="编码">
					<Input v-model="addertype"  placeholder="请输入唯一的编码..."  style="width: 90%;"></Input>
					 
				</FormItem>
				
				<div class="demo-drawer-footer">
				    <Button style="margin-right: 8px" @click="cancels">取消</Button>
				    <Button type="primary" @click="renewok">确认</Button>
				</div>			
			</Form>
		</Drawer>
		<!--添加二级分类  jiesu -->
		<!--修改 二级分类  jiesu -->
		<Drawer v-model="modals" title="修改二级类型" @on-ok="oksx" @on-cancel="cancelsx"  width="400">
			<Form :label-width="80">
				<FormItem label="名称">
					<Input v-model="readdernames" placeholder="请输入名称..."  style="width: 90%;"></Input>
				</FormItem>				
				<FormItem label="描述">
					<Input v-model="readdernotes" placeholder="请输入描述..."  style="width: 90%;"></Input>
				</FormItem>
				<FormItem label="编码">
					<Input v-model="readdertype"  placeholder="请输入唯一的编码..."  style="width: 90%;"></Input>					 
				</FormItem>
			</Form>
			<div class="demo-drawer-footer">
			    <Button style="margin-right: 8px" @click="cancelsx">取消</Button>
			    <Button type="primary" @click="oksx">确认</Button>
			</div>	
		</Drawer>
		<!--修改二级分类  jiesu -->
		<Modal v-model="peledel" width="360" >
	        <p slot="header" style="color:red;text-align:center;">
	            <Icon type="md-alert"></Icon>
	            <span>删除分类信息</span>
	        </p>
	        <div style="text-align:center">
	            <p>您正在执行删除一级分类操作</p>
	            <p>确定要删除吗?</p>
	        </div>
	        <div slot="footer">
	            <Button type="error" size="large" long  @click="deletesort()">删除</Button>
	        </div>
        </Modal>
        <Modal v-model="peledelss" width="360" >
	        <p slot="header" style="color:red;text-align:center;">
	            <Icon type="md-alert"></Icon>
	            <span>删除分类信息</span>
	        </p>
	        <div style="text-align:center">
	            <p>您正在执行删除二级分类操作</p>
	            <p>确定要删除吗?</p>
	        </div>
	        <div slot="footer">
	            <Button type="error" size="large" long  @click="deleteersort()">删除</Button>
	        </div>
        </Modal>
	</div>
</template>

<script>
	import returndata from '@/assets/js/returndata.js' 
	let editorid = "";
	let repairid;
	let addoneid;
	let indextwo;
	let repairids;
	let editoridsx;
	let editortwoone;
	let editortwotwo;
	import axios from 'axios'
	export default {

		name: 'goodstypes',

		data() {
			return {
				pairid:'',
				addernames:'',
				addernotes:'',
				addertype:'',
				readdernames:'',
				readdernotes:'',
				readdertype:'',
				operation:{},
				rerelresource:'0',
				rerelresources:'0',
				adderrelresource:'',
				addrelresource:'',
				parentids:'',
				meunList:[
					{
						value:0,
						label:'厂家菜单'
					},
					{
						value:1,
						label:'经销商菜单'
					}
				],
				formPropertyMapping:{
			        'name':'菜单名称',
					'path':'菜单路径',
					'type':'菜单类型',
					'folder':'是否是文件类菜单',
					'outLink':'是否是外部链接'				
				},
				typeCache: {},
				typeData: [],
				addnamexs: '',
				addnamexsx: '',
				value: '',
				modals: false,
				addnames: '',
				addnotes:'',
				addpath:'',
				addtype:'',
				addicon:'',
				addfolder:'',
				addkey:'',
				addoutLink:'',
				addernames: '',
				adderpath:'',
				
				addericon:'',
				adderfolder:'',
				adderkey:'',
				adderoutLink:'',
				renames: '',
				repath:'',
				retype:'',
				reicon:'',
				refolder:'',
				rekey:'',
				reoutLink:'',
				modaladd: false,
				modaladds: false,
				modaladdx: false,
				formItem: [],
				repairname: '',
				addname: '',
				addtwoid: '',
				addnamex: '',
				repairidsx: '',
				editoridsx: '',
				search: '',
				menuarrs: [],
				peledel:false,
				peledelss:false,
				setIndex: "",
				editorindex:'',
				setIndexs: "",
				redisabled:''
			}
		},
		computed: {
			searchData: function() {
				let search = this.search;
				if (search) {
					return this.menuarrs.filter(function(product) {
						return Object.keys(product).some(function(key) {
							return String(product[key]).toLowerCase().indexOf(search) > -1
						})
					})
				}
				return this.menuarrs;
			}
		},
		methods: {
			//去掉chass 展开页面            
			tabshow(e) {

				e.target.parentNode.parentNode.parentNode.classList.remove("table_n")

			},

			tabhide(e) {
				e.target.parentNode.parentNode.parentNode.classList.add("table_n")
			},

			editor(index) {
				var indexs = index;
				this.editorindex = index;
				this.modaladd = true;
				let that = this;
				var data=this.menuarrs[indexs];
				 that.readdernames=data.name
				 that.readdernotes= data.notes;
				 that.readdertype= data.code;
				 editorid = data.id;
				/*this.axios({
					method: 'get',
					url: '/api/f/contentTypes',
				}).then(function(res) {
					console.log(res)
					var data=res.data.data[index]
					if (res != false) {
						that.pairid = data.id;
						that.readdernames = data.name;
				        that.readdernotes= data.notes;
				        that.readdertype= data.code;
				        editorid = data.id;
					}
					
				})*/
				
				
				
			},
			editortwo(indexdb, index) {
				this.modals = true;
				let that = this;
			    editortwoone = index;
				editortwotwo = indexdb;
				
				var data=this.menuarrs[index].twomenu[indexdb];
				that.readdernames=data.name
				that.readdernotes= data.notes;
				that.readdertype= data.code;
			    that.parentids=this.menuarrs[index].id;
			    editoridsx = this.menuarrs[index].twomenu[indexdb].id
//				this.redisabled=this.menuarrs[index].twomenu[indexdb].disabled+"";
//				this.renames = this.menuarrs[index].twomenu[indexdb].name
//				this.refolder= this.menuarrs[index].twomenu[indexdb].folder+"";
//				this.reicon= this.menuarrs[index].twomenu[indexdb].icon;
//				this.reoutLink= this.menuarrs[index].twomenu[indexdb].outLink+"";
//				this.repath= this.menuarrs[index].twomenu[indexdb].path;
//				this.retype= this.menuarrs[index].twomenu[indexdb].type;
//				this.rekey= this.menuarrs[index].twomenu[indexdb].key;
				
//				this.rerelresources=this.menuarrs[index].twomenu[indexdb].relevantResource+"";
			},
			addone() {
				this.modaladds = true;
				let that = this;
			},
			addtwo(index) {
				this.modaladdx = true;
				let that = this;
				this.addtwoid = this.menuarrs[index].id;
				indextwo = index
			},
			//删除一级菜单
			deletesort() {
				var index=this.setIndex	
				let that = this;
				if(this.menuarrs[index].twomenu.length>0){
					that.peledel = false
					that.$Message.success('已有子节点，不能删除');
					return false;
					
				}
				let deleteid = this.menuarrs[index].id
				this.axios({
					method: 'delete',
					url: '/api/f/contentTypes/' + deleteid,
				}).then(function(res) {
                      
                       
					if (res != false) {
						that.menuarrs.splice(index, 1);
						that.peledel = false
					}
					
				})
			},
			//删除二级菜单
			deleteersort() {
				var index =this.setIndex
                var indexs=this.setIndexs
				let that = this;
				let secdeleteid = this.menuarrs[index].twomenu[indexs].id
				this.axios({
					method: 'delete',
					url: '/api/f/contentTypes/' + secdeleteid,
				}).then(function(res) {
					
					var data = res.data.code;
					if(data===200){
						that.menuarrs[index].twomenu.splice(indexs, 1)
						that.peledelss = false
						
					}else{
						return;
					}
					
				})
			},
			//修改分类开始
			addok() {
				let that = this;
				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/contentTypes/' + editorid,
					data: {
						name:that.readdernames,
						notes:that.readdernotes,
						code:that.readdertype,
					}
				}).then(function(res) {	
					console.log(res)
					
                       that.menuarrs[that.editorindex].name=  that.readdernames;
					   that.menuarrs[that.editorindex].notes = that.readdernotes;
					   that.menuarrs[that.editorindex].code = that.readdertype;

						that.modaladd=false;
						that.$Message.success('菜单修改完成');
				})
			},
			//修改分类结束  
			//添加一级分类开始
			newok() {
				if(this.addnames == "" || this.addnames == null) {
					this.$Message.info('请完善名称信息');
					return false;
				} else if(this.addnotes == "" || this.addnotes == null) {
					this.$Message.info('请完善描述信息');
					return false;
				}else if(this.addtype == "" || this.addtype == null) {
					this.$Message.info('请完善分类信息');
					return false;
				}else {
					let that = this;
					this.axios({
						method: 'post',
						headers: {
							'X-Requested-With': 'XMLHttpRequest',
							'ContentType': 'application/json;charset=UTF-8'
						},
						url: '/api/f/contentTypes/contentTypes ',
						data: {
							name:that.addnames,
							notes:that.addnotes,
							code:that.addtype,
							
						}
					}).then(function(res) {
						
						    if(res ===false){
						    	return;
						    }						
						    let resData = res.data;
						    let resCode = resData.code;
						    if(resCode === '20000'){						   
						       that.$Message.error(returndata(that.formPropertyMapping,resData))
						       return;
						    }
							that.getcontenttypedata();
							that.modaladds=false;
							that.addnames=""
							that.addnotes=""
							that.addtype=""
							that.$Message.success('分类添加完成');
						
					})
				}

			},
			cancel() {
				let that=this;
				this.modaladds=false;
				that.addnames=""
				that.addnotes=""
				that.addtype=""
			},
			//添加一级分类结束

			//添加二级分类开始
			renewok() {
				let that = this;
				this.axios({
					method: 'post',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/contentTypes/contentTypes',
					data: {
						name:that.addernames,
						notes:that.addernotes ,
						code:that.addertype,
						parentId: that.addtwoid,
						
					}
				}).then(function(res) {
			        if(res ===false){
			        	return;
			        }						  
					  that.menuarrs[indextwo].twomenu.name= that.addernames;
					  that.menuarrs[indextwo].twomenu.notes= that.addernotes;
					  that.menuarrs[indextwo].twomenu.code= that.addertype;
					  that.$Message.info('二级分类添加完成');
					  that.modaladdx=false;
					  that.addernames="";
					  that.addernotes="";
					  that.addertype="";
					  
					 		   
				})
			},
			oksx() {
				let oneo = editortwoone;
				let onet = editortwotwo				
				let that = this;

				this.axios({
					method: 'put',
					headers: {
						'X-Requested-With': 'XMLHttpRequest',
						'ContentType': 'application/json;charset=UTF-8'
					},
					url: '/api/f/contentTypes/'+editoridsx,
					data: {
						name:that.readdernames,
						path:that.that.readdernotes,
						code:that.readdertype,
						parentId: that.parentids,
					}
				}).then(function(res) {
					if(res ===false){
						return;
					}						
					that.menuarrs[index].twomenu[indexdb].name = that.readdernames;
					that.menuarrs[index].twomenu[indexdb].notes = that.readdernotes;
					that.menuarrs[index].twomenu[indexdb].code = that.readdertype;
					that.modals=false;
					that.$Message.info('修改二级分类完成');
					that.addernames="";
					 that.addernotes="";
					 that.addertype="";
				})
			},
			cancels() {
				let that=this;
				that.modaladdx=false;
				that.addernames=""
				that.adderpath=""
				that.addertype=""
				that.addericon=""
				that.adderoutLink=""
			    that.adderkey=""
				that.addtwoid=""
				that.adderrelresource=""
			},
			//添加二级分类结束
			addcancel() {
				this.modaladd=false;
			},
			cancelsx() {
				this.modals=false;
			},
			sortopen(nodesc) {
				this.$Notice.open({
					title: '添加菜单错误',
					desc: nodesc ? '' : '信息不能为空 '
				});
			},
			//获取数据并且处理
			getcontenttypedata() {
				let that = this
				that.axios({
					method: 'get',
					url: '/api/f/contentTypes'
				}).then(function(res) {
					let menuarr = res.data.data;
					let ai;
					let yimenutmp;
					let onemenutmp = {};
					for (let i = 0; i < menuarr.length; i++) {
						ai = menuarr[i];
						yimenutmp = onemenutmp[ai.parentId]
						if (!yimenutmp) {
							yimenutmp = [];
							onemenutmp[ai.parentId] = yimenutmp
						}
						yimenutmp.push(ai)
					}
					let yijimenu;
					if(onemenutmp[undefined]){
						for (let i = 0; i < onemenutmp[undefined].length; i++) {
							yijimenu = onemenutmp[undefined][i];
							if (!!onemenutmp[yijimenu.id]) {
								
								yijimenu.twomenu = onemenutmp[yijimenu.id]
							}else{
								yijimenu.twomenu=[];
							}
						}
					}
					
					that.menuarrs = onemenutmp[undefined];
					console.log(that.menuarrs)
				})
			}
		},
		mounted() {
			this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
			const keydata = this.$route.query.key;
			let operation = this.operation;
			Isjurisdiction.user_jurisdiction(keydata, operation);
			console.log(this.operation)
			this.getcontenttypedata();
		
		},
	}
</script>

<style>
	.table_tab table {
		border-collapse: collapse;
		border-spacing: 0;
		background: #ffffff;
		border: 1px solid #E9E9E9;
		width: 100%;
		color: #515a6e;
		font-family: "微软雅黑";
		font-size: 12px;
	}

	.table_tab thead {
		display: table-header-group;
		vertical-align: middle;
		border-color: inherit;
	}

	.table_tab thead th {
		background: whitesmoke;
	}


	.table_tab th {
		padding: 10px 0px;
		padding-right: 0px;
		font-size: 14px;
		text-align: center;
		font-weight: 100;
		border: 1px solid #E3e3e3;
		color: #515a6e;
		font-family: "微软雅黑";
		font-size: 12px;
	}

	.table_tab tbody {
		background: #EEEEEE;
		color: #515a6e;
		font-family: "微软雅黑";
		font-size: 12px;
	}

	.table_tab tbody.table_n .table_child {
		display: none
	}

	.table_tab tbody.table_n {
		background: none;
	}

	.th_f {
		width: 30px;
	}

	.th_f small {
		font-size: 14px;
		display: none;
	}

	.th_f span {
		display: block;
	}

	.table_n .th_f small {
		display: block;
	}

	.table_n .th_f span {
		display: none;
	}

	.table_tab th.item_disabled {
		text-align: center;
		padding-left: 0px;
	}

	.table_tab th.item_disabled span {
		color: green;
	}

	.table_tab th.item_disabled small {
		color: red;
	}

	.table_tab th.item_show {
		text-align: center;
		padding-left: 0px;
	}

	.table_tab th.item_show span {
		display: inline-block;
		color: white;
		background: cadetblue;
		padding: 0px 10px;
		border-radius: 3px;
		text-align: center;
		line-height: 1.5em;
		margin: 0px auto;

	}

	.table_tab th.item_show small {

		color: #333333;
		border: solid 1px #E2E2E2;
		padding: 0px 10px;
		border-radius: 3px;
		text-align: center;
		line-height: 1.5em;
		margin: 0px auto;

	}

	.table_tab th.item_show span,
	small:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	.table_tab th small {
		font-size: 14px;
	}

	/* .table_tab th.item_operation button{
     		display: inline-block;
     		background: #009699;
     		border: none;
     		color: white;
     		border-radius: 3px;
     		color: #333333;
     		margin-right: 5px;
     		font-size: 12px;
     		color:white;
     		padding:3px 5px ;
     		cursor: pointer;
     } */

	.table_tab th.item_operation button:hover {
		opacity: 0.9;
	}

	.table_tab th.item_operation button.del {
		background: #FF5733;
	}

	.goodstypes {
		overflow: auto;
	}

	.goodstypes ul li {
		float: left;
		list-style: none;
	}

	.goodstypes ul li {
		padding: 4px;
		border: 1px solid #e5e5e5;
		line-height: 40px;
		text-align: center;
		background-color: #f8f8f9;
		color: #515a6e;
		font-family: "微软雅黑";
		font-size: 12px;
		height: 40px;
		font-weight: 600;
		padding-top: 0;
		border-left: none;
	}

	.goodstypes ul li:first-child {
		border-left: 1px solid #e5e5e5;
	}

	.tabs {
		cursor: pointer;
	}
</style>
