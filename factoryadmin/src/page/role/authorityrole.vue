<template>
	<div>
		<div class="Breadcrumb">
			<Breadcrumb>
				<BreadcrumbItem to="/home">首页</BreadcrumbItem>
				<BreadcrumbItem>角色权限设置</BreadcrumbItem>
			</Breadcrumb>
		</div>
		<Row >
			<!-- 	折叠菜单 -->
			<Col span="4">										
			 <Menu :theme="theme2" :open-names="['1']"  style="z-index: 0; width: 98%;">
				<Submenu name="1">
					<template slot="title">
						角色列表
					</template>
					<MenuItem :name="index" v-for="(item,index) in roledata" :key="item.id" @click.native="getroleauthorityrole(item.id)">{{item.name}}</MenuItem>
				</Submenu>
			</Menu> 
			</Col>
			<Col span="20">
			<Row >
				<Card dis-hover style="width: 100%;  ">
					<div class="operations">						
						<Button type="primary" @click="editors" v-if="ifeditors">编辑</Button>
						<Button type="error" @click="editoroff" v-if="ifeditor">取消</Button>
						<!--<Button  type="info" @click="editorall" v-if="ifeditor">全选</Button>-->
						<Button type="primary" @click="editor" v-if="ifeditor">完成编辑</Button>
					</div>	
					<!-- 修改页面 -->
					<div v-if="ifeditor" >										
					<ul class="headers">
						<li style="width: 15%;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">功能模块</li>
						<li style="width: 15%;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">功能菜单</li>
						<li style="width: 70%;text-align: center;border-right: 1px solid #DCDEE2;">操作权限</li></ul>
					<div style="display: table;position: relative;width: 100%" v-for="(item,index) in dataone" class="xunhuan">   
						<div class="partones ">{{item.name}}</div>
						<div class="parttwos" >						
							 <ul style="width: 17.7%;">
								<li v-if="item.childs.length==0">{{item.name}}</li>
								<li v-for="items in item.childs">{{items.name}}</li>
							 </ul>			
						<ul style="width: 82.3%;">
						   <li v-if="item.childs.length==0">暂无二级菜单</li>
						   <li v-for="itemx in item.childs" >
							  <CheckboxGroup v-model="itemx.ccc" @on-change="alert(itemx.ccc)">
						    <Checkbox v-for="itemd in itemx.operations" :key="itemd.name" :label="itemd.key">{{itemd.name}}</Checkbox>
						    </CheckboxGroup>
						    
						    <div>
						    	{{item.show}}
						    	<i-switch  @on-change="isShow(index)" v-model="item.show" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
						    </div>
						    
							</li>
						</ul>
						</div>						
					</div>	
					</div>
					<!-- 修改页面 -->
					<!-- 渲染页面 -->
					
					<div v-if="ifeditors" >										
					<ul class="headers">
						<li style="width: 15%;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">功能模块</li>
						<li style="width: 15%;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">功能菜单</li>
						<li style="width: 70%;text-align: center;border-right: 1px solid #DCDEE2;">操作权限</li></ul>
					 <div style="display: table;position: relative;width: 100%" v-for="item in datatwo" class="xunhuan">   
						<div class="partones" v-if="item.ifopeation">{{item.name}}</div>
						<div class="parttwos" v-if="item.childs.length!=0">						
							 <ul style="width: 17.7%;">
								<li v-if="item.childs.length==0"></li>
								<li v-for="items in item.childs" v-if="items.operations.length!=0">{{items.name}}</li>
							 </ul>			
						<ul style="width: 82.3%;">
						   <li v-if="item.childs.length==0"></li>
						   <li v-for="itemd in item.childs" v-if="itemd.operations.length!=0" >
							   <Tag  v-for="itemc in itemd.operations"  :key="itemc.key">{{itemc.name}}</Tag>
							   
							    <div>
<!--{{item.show}}
						    	<i-switch v-model="item.show" size="large">
                <span slot="open" >On</span>
                <span slot="close">Off</span>
            </i-switch>-->
						    </div>
							   
							</li>
						</ul>
						</div>						
					</div>	
					</div>
					
				</Card>
			</Row>
			</Col>
		</Row>
	</div>
</template>
<style>
table {
    border-collapse: collapse;
    text-align: center;
}

  table, td, th {
    border: 1px solid #dcdee2;
}
	.operations{
		text-align: right;
		margin-bottom: 10px;
	}
	.headers li{
		float: left;
		border: 1px solid #dcdee2;
		/* height: 40px;
		line-height: 40px; */
		padding:10px  20px 10px ;
		color: #515a6e;
		font-weight: 700;
		background-color: #f8f8f9;
	}
	.header{
		width: 100%;
		height: 40px;
		
	}
   .partones{
	   display: table-cell;
       vertical-align: middle;
	   border: 1px solid #dcdee2; 
	   padding: 0 20px;
	   width: 15%;
	   color: #515a6e;
   }
   .partones:hover{
	   background-color: #EBF7FF;
   }
   .partones:last-child{
	    border: 1px solid #dcdee2; 
   }
   .parttwos{
	
   }
.ulhead ul li{
	float: left;
	width: 50%;
	text-align: center;
}

.ulhead{
	height: 30px
}

   .parttwos{
	   width: 100%;
   }
   .partsans{

   }

   .parttwos ul{
	   float: left;
   }
   .parttwos ul li{
	   height: 55px;
	   line-height: 25px;
	   border: 1px solid #dcdee2;
       text-align: left;
	   padding-left: 20px;
	   color: #515a6e;
   }
    .parttwos ul li:hover{
   	   background-color: #EBF7FF;
   }
   .tableheadl li {
	   
	   line-height: 50px;
	   float: left;
	   border: 1px solid #dcdee2;
	   font-weight: 700;
	   padding: 0 20px;
	   background-color: #f8f8f9;
   }
   .tableheadl li :first-child{
	     padding: 0 20px;
   }
   .tableheadl li :last-child{
	   border-bottom: 1px solid #dcdee2;
   }
</style>
<script>
	
	export default {
		data() {
			return {
				formPropertyMapping:{
				   'name':'按钮名称',
					'key':'唯一标识',
					'type':'按钮类型',
					'rolePermissions':'角色权限',
					
				},
				social:[],
				ifeditors:true,
				ifeditor:false,
				roledata:[],
				shix:[],
				xianx:[],
				orderstatus:"",
				orderstatus1:"",
				orderstatus2:"",
				dataone:[],
				datatwo:[],
				datasan:[],
				columns1: [],
				data2: [],
				theme2: 'light',
				openarr: [],
				rolelist: [],
				menulist: [],
				sheng:[],
				shi:[],
				xian:[],
				roleid:'',
				buttondata:[],
				haveall:[],
				roleid:'',
			};
		},
		methods: {
			
			
			isShow:function  (index) {
				this.dataone[index].show=!this.dataone[index].show
				
				console.log(this.dataone)
			},
			
			editorall(){
				
			},
			alert(a){
				this.dataone.splice(1,0)
			},
			//打开编辑
			editors(){
				this.ifeditor=true;
				this.ifeditors=false;
				this.getdata3(this.haveall);
			},
			//完成编辑
			editor(){
				this.ifeditor=false;
				this.ifeditors=true;
				let endarr=[];
				for(let d=0;d<this.dataone.length;d++){
					for(let a=0;a<this.dataone[d].childs.length;a++){
						if(this.dataone[d].childs[a].ccc){
							if(this.dataone[d].childs[a].ccc.length!=0){
								let obj={};
								obj.moduleKey=this.dataone[d].key
								obj.menuKey=this.dataone[d].childs[a].key
								obj.show=this.dataone[d].show=="false"?0:1
								obj.operations=this.dataone[d].childs[a].ccc.join(",")
								endarr.push(obj)
								
								console.log(obj.show)
							}
						}
					}
				}
				
				console.log(endarr)
				let that = this
				that.axios({
					method: 'put',
					url: 'api/f/roles/'+that.roleid+'/permissions',
					data:endarr
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
						that.getroleauthorityrole(that.roleid);
						that.$Message.success("编辑成功");
					
				})
			},
			editoroff(){
				this.ifeditor=false;
				this.ifeditors=true;
			},
			//获取角色菜单数据
			getdata1(){
				let that = this
				that.axios({
					method: 'get',
					url: '/api/f/roles/all?type='+0
				}).then(function(res) {
					that.dataone=res.data.data.menus
					let a={}
					let dataobjone;
					let d1
					a.arr=[]
					for(let i=0;i<that.dataone.length;i++){
						d1=that.dataone[i] 
						d1.operations=res.data.data.operations
						dataobjone=a[d1.parentId]
						if(that.dataone[i].folder==false){
							if(a[d1.parentId]){					  
							   a[d1.parentId].push(d1)
							}else{							
							   a[d1.parentId]=[]
							   a[d1.parentId].push(d1)
							}
						}else{
							 a.arr.push(that.dataone[i])
						}											 
					}
					for(let c=0;c<a.arr.length;c++){
						   a.arr[c].childs=[]
					}
					for(let d=0;d<a.arr.length;d++){
						if(a[a.arr[d].id]){
						     a.arr[d].childs=a[a.arr[d].id]
						 }
					}
					that.dataone=a.arr
				})
			},
			//渲染编辑部分
			getdata2(arrs){
				let that = this
				that.axios({
					method: 'get',
					url: '/api/f/roles/all?type='+0
				}).then(function(res) {
					that.datatwo=res.data.data.menus
					let a={}
					let dataobjone;
					let d1
					a.arr=[]
					for(let i=0;i<that.datatwo.length;i++){
						d1=that.datatwo[i]
					    d1.operations=[]
						for(let c=0;c<arrs.length;c++){
							if(arrs[c].menuKey==d1.key){
								d1.operations=arrs[c].oper
							}
							
							d1.show=arrs[c].show==0?"false":true
						}
						dataobjone=a[d1.parentId]
						if(that.datatwo[i].folder==false){
							if(a[d1.parentId]){					  
							   a[d1.parentId].push(d1)
							}else{							
							   a[d1.parentId]=[]
							   a[d1.parentId].push(d1)
							}
						}else{
							 a.arr.push(that.datatwo[i])
						}
											 
					}
					for(let c=0;c<a.arr.length;c++){
						   a.arr[c].childs=[]
					}
					for(let d=0;d<a.arr.length;d++){
						if(a[a.arr[d].id]){
						     a.arr[d].childs=a[a.arr[d].id]
						 }
					}					
					that.datatwo=a.arr
					for(let c=0;c<that.datatwo.length;c++){
						for(let d=0;d<that.datatwo[c].childs.length;d++){
							if(that.datatwo[c].childs[d].operations){
								if(that.datatwo[c].childs[d].operations.length!=0){
									that.datatwo[c].ifopeation=true;
									 break;
								}
							}
						}
					}
				})
			},
			//渲染展示页面
			getdata3(arr){
				
					console.log(arr)
				let that = this
				that.axios({
					method: 'get',
					url: '/api/f/roles/all?type='+0
				}).then(function(res) {
					that.datasan=res.data.data.menus
					let a={}
					let dataobjone;
					let d1
					a.arr=[]
					let xians=[]
					for(let i=0;i<arr.length;i++){
						arr[i].cc=[]
						for(let c=0;c<arr[i].oper.length;c++){
							arr[i].cc.push(arr[i].oper[c].key)
						}
					}
					for(let i=0;i<that.datasan.length;i++){
						d1=that.datasan[i] 
						d1.operations=res.data.data.operations
						d1.operation=[]
						for(let c=0;c<arr.length;c++){
							if(arr[c].menuKey==d1.key){
								d1.operation=arr[c].oper
								d1.ccc=arr[c].cc
								
							}
							
							d1.show=arr[c].show==0?"false":true
						}
						dataobjone=a[d1.parentId]
						if(that.datasan[i].folder==false){
							if(a[d1.parentId]){					  
							   a[d1.parentId].push(d1)
							}else{							
							   a[d1.parentId]=[]
							   a[d1.parentId].push(d1)
							}
						}else{
							 a.arr.push(d1)
						}											 
					}
					for(let c=0;c<a.arr.length;c++){
						   a.arr[c].childs=[]						  
					}
					for(let d=0;d<a.arr.length;d++){
						
						
						
						if(a[a.arr[d].id]){
						     a.arr[d].childs=a[a.arr[d].id]
						 }
					}
					
					that.datasan=a.arr
					that.dataone=that.datasan			
					

					
				})
			},	
			//获取角色菜单数据
			getdata(){
				let that = this
				that.axios({
					method: 'get',
					url: '/api/f/roles?type='+0
				}).then(function(res) {
				that.roledata=res.data.data
				that.getroleauthorityrole(res.data.data[0].id)
				})
			},		
			//获取当前角色下的权限
			getroleauthorityrole(id){			    
					let that = this
					that.roleid=id
					this.ifeditor=false;
					this.ifeditors=true;
					that.axios({
						method: 'get',
						url: '/api/f/roles/'+id+'/permissions'
					}).then(function(res) {
					for(let i=0;i<res.data.data.length;i++){
					 res.data.data[i].operations=res.data.data[i].operations.split(",")
					 res.data.data[i].oper=[]
					}
					for(let i=0;i<res.data.data.length;i++){
						for(let c=0;c<res.data.data[i].operations.length;c++){
						    for(let d=0;d<that.buttondata.length;d++){
								if(res.data.data[i].operations[c]==that.buttondata[d].key){
									res.data.data[i].oper.push(that.buttondata[d])
								}
							}
						}
					 }
					 that.haveall=res.data.data
					 that.getdata2(res.data.data);
					 that.getdata3(res.data.data)
					})
				
			},
			//查询按钮列表
			getbuttondata(id){
				let that = this
				that.axios({
					method: 'get',
					url: '/api/f/operations'
				}).then(function(res) {
				that.buttondata=res.data.data
				})
			},
			},
		mounted() {	
			//获取菜单列表并且处理
			this.getdata1();
			//获取角色菜单数据
			this.getdata();	
			//获取按钮数据
			this.getbuttondata();
		}
	}
</script>


