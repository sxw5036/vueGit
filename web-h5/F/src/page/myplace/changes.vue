<template>
	
	<div id="changes">
	   	    <div style="background-color: white; padding: 0.3rem 0; ">
                 <input v-model="identityNumber" type="text" style="border: 0; outline: none; margin-bottom: 0;"  class="mui-input-clear" >
	   		</div>  
			<div style="width:96%;margin: auto">
	        <div  @click="keep_sure"  class="keep_sure">保存</div>
	        </div>			
	</div>
	
</template>

<script>
	import mui from '../../assets/js/mui.js'
	export default {
		name: 'changes',

		data() {

			return {
                
				identityNumber:'',
				
			}

		},

	
		methods: {
			router_to(){
				this.$router.push({ name: 'mycenter'})
			},
				
			keep_sure:function  () {
			var that = this
						
			that.axios({
				method: 'put',
						
				url: '/wxapi/f/branchs/users',
				   data:{
					  
					  identityNumber:that.identityNumber,
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
		         this.identityNumber = this.$route.query.identityNumber  　
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
			background-image:url(../../assets/img/dealer/dearer_but_bgs.png);
			background-size: 100% 100%;
			background-repeat:no-repeat;
			
			
			
		}
		
		
</style>