<template>
	
	<div id="sexchanges">
	   	    <div style="width:100%; position: relative; ">
	   	       <select class="mui-btn mui-btn-block" style="color: #7c7c7c;font-size: 0.8rem; padding-left: 1rem; margin-top: 0.4rem;" v-model="sex"  @change="getvalue($event)">
	   	   						        <option disabled value="">请选择性别</option>
	   	   						   	    <option :value="coupon.value" v-for="coupon in sexs" >{{coupon.label}}</option>
	   	   						   </select>
	   	        <span style="position:absolute;top:0.7rem; left:90%; width: 0.5rem; height: 0.5rem;"><img style="width: 100%;" src="../../../F/assets/img/custom/jiantou.png"/></span>       
	   	   
	   	   </div>
			<div style="width:96%;margin: auto">
	            <div  @click="keep_sure"  class="keep_sure">保存</div>
	        </div>			
	</div>
	
</template>

<script>
	import mui from '@/assets/js/mui.js'
	export default {
		name: 'sexchanges',

		data() {

			return {
                
				sex:'',
				sexs: [{
						value: "0",
						label: '男'
					},
					{
						value: "1",
						label: '女'
					},
					
				
				],
				
			}

		},

	
		methods: {
			getvalue(event){
				this.sex = event.target.value;
				
			},
			router_to(){
				this.$router.push({ name: 'Bmycenter'})
			},
				
			keep_sure:function  () {
			var that = this
						
			that.axios({
				method: 'put',
						
				url: '/wxapi/f/branchs/users',
				   data:{
					  
					  sex:that.sex,
				   }
				
						
			}).then(function(res) {
				that.mui.toast("修改成功" , {
					duration: 'long',
					type: 'div'
				})
				that.router_to();
						
			}).catch(function(err) {
				console.log(err)
						
				that.mui.toast("修改失败请稍后重试" , {
					duration: 'long',
					type: 'div'
				})
						
			})
				
				
				
			},
			 
			 
		},
		 computed : {
                        

				    },

		mounted: function() {
		         this.sex = this.$route.query.sex  　
                 console.log( this.identityNumber)
		}
		

	}
	
</script>

<style scoped="scoped">
	 html{
		 padding: 0;
		 margin: 0;
	 }
		.keep_sure{
			width: 100%;
			margin-top: 4rem;
			text-align: center;
			line-height: 2rem;
			height: 2rem;
			color: white;
			font-size: 0.7rem;
			background-image:url(../../../F/assets/img/dealer/dearer_but_bgs.png);
			background-size: 100% 100%;
			background-repeat:no-repeat;
			
			
			
		}
		
		
</style>