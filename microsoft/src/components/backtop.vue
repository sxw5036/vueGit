<template>
	
	<div id="backtop">
		<span class="backtop" @click="backtopM" >
			<img src="../assets/img/back-top.png"/>
		</span>
	</div>
	
	
</template>

<script>
	export default {
		
		name: 'backtop',
      
		data() {
			return {
				backtopNav:false,
			}
		},

		methods: {
			
			backtopM:function  () {
				
				
				
				var nu=null;
			nu=setInterval(function  () {
				 var get=document.documentElement.scrollTop||document.body.scrollTop;
				 var n=Math.floor(-get/2);
				 document.documentElement.scrollTop=document.body.scrollTop=get+n;
				 
				
				 if(5>=get){
		        clearInterval(nu);
		       }			
		
	       },20)
				
			},
         
		},

		mounted: function() {
			   
  
	}
	} 
</script>

<style>

.backtop{
	position: fixed;
	z-index: 99;
	right: 0.5rem;
	bottom: 3rem;
	height: 2rem;
	width: 2rem;
	
	
	border-radius: 50%;
}

.backtop img{
	display: block;
	width: 100%;
	height: 100%;
}
</style>