<template>
	<div>
		 <div style="padding: 0.8rem 0.6rem;">
				   <p class="case_title">{{designSheme.name}}</p>
				   <p style="margin-top: 0.6rem;"><span style="color: #70759d; font-size: 0.5rem;">{{designSheme.creatorName}}</span>
				   <span style="font-size: 0.5rem;margin-left: 0.5rem; color: #c7c7c7;"> {{designSheme.created}}</span></p>
				   <div v-for="item in designContentList">
					   <div class="case_content">{{item.contentNotes}} </div>
					   <div class="case_imgs"> <img v-bind:src="item.contentImage" alt=""/></div>
				   </div>
		</div>
		
	</div>
</template>

<script>
	    import Vue from 'vue'
	  	export default {
	  		data() {
	  	          return {
	  				 
	  				
					  designSheme:[],
					  designContentList:[],

	  			  }
	  			
	  			},
	  			methods:{
	  				getdatas(){			
	  					 let that = this;
	  					   this.axios({
	  						method: 'get',
	  						headers: {
	  							'X-Requested-With': 'XMLHttpRequest',
	  							'ContentType': 'application/json;charset=UTF-8'
	  						},
	  						url: '/api/f/contents/0/4hujihklj2fa'
	  					}).then(res => {
	  					   console.log(res)
						   var data=res.data.data;
						   this.designSheme=data.designSheme;
						   // 
						  this.designContentList=data.designContentList;
						    console.log(this.designContentList)
						   
						   
						  
						   
	  					 })
	  				}
	  			},
	  			mounted() {
	  				this.axios.defaults.headers['X-P'] = this.$route.query.pkey + "-" + this.$route.query.key + "-view"
	  				const keydata = this.$route.query.key;
	  				
	  				this.getdatas();
	  			}
	  		}
			var size = (document.documentElement.clientWidth / 360) * 20 + 'px';
				document.documentElement.style.fontSize = size
</script>

<style scoped="scoped">
	*{margin: 0px;
	 padding: 0px;
	  border: 0px; 
	  list-style: none;}
	body{
	padding: 0px; 
	background-color: white;
	}
	
	.case_imgs img{
		width: 100%;
		display: block;
		margin: 0.8rem 0;
	}
	.case_title{
		font-size: 1.2rem;  
		line-height: 1.8rem;
	}
	.case_content{
		font-size: 0.6rem; 
		color: black;
		margin-top: 2rem; 
		text-indent: 1.4rem;
		line-height: 1.2rem;
	}
</style>
