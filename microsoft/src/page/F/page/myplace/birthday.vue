<template>
	
	<div id="birthday">
	   	    <div style="background-color: white; padding: 0.3rem 0; ">
                 <input v-model="birthday" type="date"  style="border: 0; outline: none; margin-bottom: 0;"  class="mui-input-clear" >
	   		</div>  
			<div style="width:96%;margin: auto">
	        <div  @click="keep_sure"  class="keep_sure">保存</div>
	        </div>			
	</div>
	
</template>

<script>
	import mui from '@/assets/js/mui.js'
	export default {
		name: 'birthday',

		data() {

			return {
                
				birthday:'',
				
			}

		},

	
		methods: {
			router_to(){
				this.$router.push({ name: 'Fmycenter'})
			},
				
			keep_sure:function  () {
			var that = this
						
			that.axios({
				method: 'put',
						
				url: '/wxapi/f/branchs/users',
				   data:{
					  
					  birthday:that.birthday,
				   }
				
						
			}).then(function(res) {
				
					that.mui.toast("修改成功" , {
						duration: 'long',
						type: 'div'
					})
					that.router_to();
				
				
				
						
			}).catch(function(err) {	
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
		         this.birthday = this.$route.query.birthday  　
                 console.log( this.birthday)
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