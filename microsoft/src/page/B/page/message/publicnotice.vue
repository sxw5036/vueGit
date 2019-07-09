<template>
	
	<div id="publicnotice">
		<header class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
		
			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">公告详情</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">
		
		</div>
	   <div style="background-color: white; padding:0.5rem">
		   <div>
			   <p style="font-size: 1rem; color:black; line-height: 1.5rem;">红田橱柜：L型布局，让操作更便捷</p>
			   <p style="font-size: 0.6rem; color: #566a94; margin-top: 0.5rem;">红田定制家 <span style="color: #ababab;">5月11日</span></p>
			   <div class="content">
				     <p>圣诞快乐发哈圣诞快乐解放路都是福利卡上的发生考虑房价开始打飞机发圣诞节发链接看收代理费</p>
					 <img  src="../../assets/img/statement/finance.png" alt="">
					 
			   </div>
	       </div>  	
	   </div>
	
		
	</div>
	
</template>

<script>
	import axios from 'axios'
	import mui from '@/assets/js/mui.js'
	export default {
		name: 'publicnotice',

		data() {

			return {
                   cur:0 //默认选中第一个tab
				
			}

		},

	
		methods: {
			
			 
		},
		mounted: function() {
		

		}
		

	}
	
</script>

<style scoped="scoped">
	 ul li {

            margin: 0;
            padding: 0;
            list-style: none;
        }
     
		.clearfix{
			clear: both;
		}
		.content{
			margin-top: 1rem;
		}
		.content p{ 
			color: black;
			font-size: 0.7rem;
			    
			}
			.content img{ 
				width: 100%;
				display: block;
                margin: 0.5rem 0;
				}
</style>