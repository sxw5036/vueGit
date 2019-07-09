<template>

	<div>
		<!--  -->
		<!-- 	<div   :style="{background:'url('+Carouseldata[CarouselValue].path+')'}" class="banner_carouselBox">

			<div class="banner_carousel" @mouseover="CarouselIsautoplay(false)"  @mouseout="CarouselIsautoplay(true)" >

				<Carousel				
				:autoplay="Isautoplay"
				@on-change="CarouselIndex" v-model="CarouselValue">
					<CarouselItem v-for="(item, key, index) in Carouseldata" :key="index">
						<div class="demo-carousel" :style="{backgroundImage: 'url('+item.path+')'}" @click="Imgsrc" ></div>
					</CarouselItem>
					
				</Carousel>

			</div>

		</div> -->
		<!-- -->

	<!--	<div>

			<Table :columns="tableHeader" :data="tabledata" size="small" ref="table"></Table>
			<br>
			<Button type="primary" size="large" @click="exportData(1)">
				<Icon type="ios-download-outline"></Icon> Export source data
			</Button>
			<Button type="primary" size="large" @click="exportData(2)">
				<Icon type="ios-download-outline"></Icon> Export sorting and filtered data
			</Button>
			<Button type="primary" size="large" @click="exportData(3)">
				<Icon type="ios-download-outline"></Icon> Export custom data
			</Button>

		</div>

   

		<Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
			<div style="padding: 20px 0">
				<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
				<p>Click or drag files here to upload</p>
			</div>
		</Upload>
		
		

-->
<!--<div v-for="(item, index) in Collapsedata">
	
	<Collapse>
				<Panel  >
					{{item.name}}
					<div  slot="content">
						<Table border height="200" :columns="tableHeader" :data="item.datas"></Table>
					</div>
					
				</Panel>
		</Collapse> 
	
</div>-->


<Table :columns="tableHeader" :data="Collapsedata[0].tabledata" size="small" ref="table"></Table>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				CarouselValue: 0,
				Isautoplay: true,
				Carouseldata: [
				],

				tableHeader: [{
						title: 'Name',
						key: 'name',
					/*	render: (h, params) => {
							return h('div', [
								h('Icon', {
									props: {
										type: 'person'
									}
								}),
								h('strong', params.row.name)
							]);
						}*/
					},
					{
						title: 'Age',
						key: 'age'
					},
					{
						title: 'Address',
						key: 'address'
					},
					{
						title: 'Action',
						key: 'action',
						width: 150,
						align: 'center',
						render: (h, params,item) => {
							
							
							const row = params.row;
							
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											/* this.show(params.index) */

                                   console.log(row)


										}
									}
								}, '编辑'),
								h('Poptip', {
									props: {
										"confirm": true,
										"placement": "left",
										title: '你确定要删除这个内容吗2456?',


									},
									on: {
										'on-ok': () => {
											
											this.Collapsedata[0].tabledata.splice(0,1)
										}
									}
								}, 'Delete')
							]);
						}
					}
				],

				
				
				Collapsedata:[
					{
						tabledata: [{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park',
						date: '2016-10-03'
					},
					{
						name: 'Jim Green',
						age: 24,
						address: 'London No. 1 Lake Park',
						date: '2016-10-01'
					},
					{
						name: 'Joe Black',
						age: 30,
						address: 'Sydney No. 1 Lake Park',
						date: '2016-10-02'
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park',
						date: '2016-10-04'
					}
				],
					}
				],

               departmentlist:[
              {
              	id:"a366",
              	name:"技术部",
              	
              },
              
              {
              	id:"a266",
              	name:"设计部",
              	
              }
               
               ],
               
               departmentlistuser:[
               {
				 			name: 'Jim Green',
				 			age: 24,
				 			address: 'London No. A1 Lake Park',
				 			date: '2016-10-01',
				 			id:"a266",
				 		},
				 		{
				 			name: 'Joe Black',
				 			age: 30,
				 			address: 'Sydney No. A2 Lake Park',
				 			date: '2016-10-02',
				 			id:"a266",
				 		},
				 		{
				 			name: 'Jon Snow',
				 			age: 26,
				 			address: 'Ottawa No. A3 Lake Park',
				 			date: '2016-10-04',
				 			id:"a366",
				 		},
				 		
				 		{
				 			name: 'Jon Snow',
				 			age: 26,
				 			address: 'Ottawa No. A3 Lake Park',
				 			date: '2016-10-04',
				 			id:"a266",
				 		},
				 		{
				 			name: 'Jon Snow',
				 			age: 28,
				 			address: 'Ottawa No. A3 Lake Park',
				 			date: '2016-10-04',
				 			id:"a366",
				 		}
				 		
               ],
               
              departmentlistCa:[],


			};
		},

		methods: {
			CarouselIndex: function(oldValue, value) {
				//console.log(oldValue, value)
			},

			Imgsrc: function(e) {
				console.log(e.target.style.color)

			},

			CarouselIsautoplay: function(type) {

				if (type) {
					this.Isautoplay = true

				} else {
					this.Isautoplay = false

				}

			},

			//表格导出数据

			exportData: function(type) {

				if (type === 1) {
					this.$refs.table.exportCsv({
						filename: 'The original data'
					});
				} else if (type === 2) {
					this.$refs.table.exportCsv({
						filename: 'Sorting and filtering data',
						original: false
					});
				} else if (type === 3) {
					this.$refs.table.exportCsv({
						filename: 'Custom data',
						columns: this.columns8.filter((col, index) => index < 4),
						data: this.data7.filter((data, index) => index < 4)
					});
				}
			},
			
			
			
			/*getdepartmentlist: function() {
				
				var departmentlistc=this.departmentlistCa
				
				for(var i=0; i<this.departmentlist.length; i++){
	  		
	  		        var obj=this.departmentlist[i]
	  		           obj.datas=[]
	  		         departmentlistc[obj.id]=obj
	  		
	  	          }
				
				
				this.departmentlistCa=departmentlistc
				
			    this.getdepartmentuser()
				
			
			},*/
			
			
			getdepartmentuser:function  () {
				
				var userData=this.departmentlistuser
				var departmentlist=this.departmentlist
				
				for(var i=0; i<userData.length; i++){
				   var id=userData[i].id
				  
				   for (var u=0; u<departmentlist.length;u++) {
				   	
				      departmentlist[u].index=u
				   	
				   	if (id==this.departmentlist[u].id&&departmentlist[u].datas) {
				   		var obj=userData[i]
				   		    obj.departmentIndex=u
				   		departmentlist[u].datas.push(obj)
				   	}else if(id==this.departmentlist[u].id&&!departmentlist[u].datas){
				   		departmentlist[u].datas=[]
				   		var obj=userData[i]
				   		    obj.departmentIndex=u
				   		    departmentlist[u].datas.push(obj)
				   	}
				   		/*departmentlist[u].datas.push(userData[i])
				   	}else{
				   		
				   		
				   	}*/
				   	
				   }
				   
				
				}
				this.Collapsedata=departmentlist
				console.log(departmentlist)
				
			}
		},
		
		
		
		
	  mounted(){
	  	
	  	
	  	//this.getdepartmentuser()
	  	
	  	console.log(this.Collapsedata.tabledata)
	  	
	  }
	}
</script>

<style>
	.banner_carouselBox {
		padding: 60px 20px 60px 20px;
		cursor: pointer;
		background-position: center !important;
		background-repeat: no-repeat !important;
		background-attachment: fixed !important;
		background-position: 50% 50% !important;
		background-size: cover !important;


	}

	.banner_carousel {
		width: 100%;
		max-width: 1200px;
		margin: 0px auto;
		border-radius: 6px;
		overflow: hidden;


	}

	.demo-carousel {
		width: 100%;
		height: 400px;
		line-height: 250px;
		color: white;
		background: #506b9e;
		text-align: center;
		border-radius: 6px;
		overflow: hidden;
		background-position: center;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: cover;


	}

	.ivu-poptip-confirm .ivu-poptip-body .ivu-icon {
		left: 20px;
	}
</style>
