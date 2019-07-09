<template>
    <div id="areaTree">
        <div class="box-title">
            <a href="#">列表<i class="fa  fa-refresh" @click="freshArea"></i></a>
        </div>
        <div class="tree-box">
            <div class="zTreeDemoBackground left">
                <ul id="treeDemo" class="ztree"></ul>
            </div>
        </div>
    </div>
</template>

<script>
	import "../../plugins/zTree/js/jquery-3.3.1.min.js"
	import "../../plugins/zTree/js/jquery.ztree.core.min.js"
	import "../../plugins/zTree/js/jquery.ztree.excheck.min.js"
    export default {
        name: "zTree",
        data:function(){
            return{
                setting:{
                    data:{
                        simpleData:{
                            enable: true,
                            idKey: "id",
                            pIdKey: "parentId",
                            rootPId: 0,
							
							
                        },
						key:{
							name:"name",
							
						}
                    },
  					callback: {	
  						  onClick: this.zTreeOnClick,								
                               }


                },
				
                zNodes:[]
            }
        },
        methods:{
				//获取数据并且处理
// 				getcontenttypedata() {
// 					let that = this
// 					that.axios({
// 						method: 'get',
// 						url: '/api/f/contentTypes'
// 					}).then(function(res) {
//                      console.log(11111111111111111111111111111111111111111111111111)
// 						var data= res.data.data;
// 						that.zNodes=data;
// 						console.log(11111111111111111111111111111111111111111111111111+that.zNodes)
// 					})
// 				},
            freshArea:function(){
				
// 				that.axios({
// 					method: 'get',
// 					url: '/api/f/contentTypes'
// 				}).then(function(res) {
// 				 console.log(11111111111111111111111111111111111111111111111111)
// 					var data= res.data.data;
// 					this.zNodes=data;
// 					console.log(11111111111111111111111111111111111111111111111111+that.zNodes)
// 				})
				
                $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
            },
			
 			 zTreeOnClick: function(event, treeId, treeNode) {
 				  if (treeNode.id == "1") {
                               return;
                     }
					 var id=treeNode.id;
					 var name=treeNode.name;
					 var code=treeNode.code;
					 this.$emit('my-event',id,name,code)
                  // console.log(treeNode.id + ", " + treeNode.name);
             },
			 initTree:function (zNodes){
				 
				 
				 $.fn.zTree.init($("#treeDemo"), this.setting, zNodes);
			 }
        },
        mounted(){
			let that = this;
			that.axios({
				method: 'get',
				url: '/api/f/contentTypes'
			}).then(function(res) {
				var data= res.data.data;
				that.zNodes=data
				console.log(data)
				that.initTree(that.zNodes);
			})
			
        }
    }
</script>

<style>
    @import '../../plugins/zTree/css/zTreeStyle/zTreeStyle.css';
    #areaTree{
        border:1px solid #e5e5e5;    margin-bottom: 2px;border-radius: 4px;overflow: hidden;
    }
    .box-title{
        border-radius: 3px 3px 0 0;background-color: #f5f5f5;
    }
    .box-title a{
        color: #2fa4e7;
        text-decoration: none;font-size:14px;    display: block;
        padding: 8px 15px;cursor: pointer;
    }
    .box-title .fa{
        float:right;line-height: 20px;
    }
</style>
