<style scoped="scoped">
	
	body{
		background: red;
	}
	
	.pay{
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 99;
	    background: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
	}
	
	.pay_box{
		position: absolute;
		top: 0px;
		left: 0px;
		bottom: 0px;
		right: 0px;
		width: 60%;
		background: white;
		padding: 10px;
		margin:0px auto;
		height: 100px;
		margin-top: 100px;
		border-radius: 5px;
	}
	.pay_box p{
		text-align: center;
		font-size: 14px;
        padding-bottom: 10px;
	}
	
	.pay_box ul{
		display: block;
		width: 100%;
	}
	
	.pay_box ul li{
		position: relative;
		display: block;
		
		line-height: 30px;
		color: #515151;
		font-size: 16px;
		padding-left: 10px;
	}
	
	.pay_box ul li span{
		position: absolute;
		top: 50%;
		left: 0px;
		display: block;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-left: 6px solid #f5f5f5;
		margin-top: -6px;
		
	}
	
	.pay_box ul li.active{
		color: orangered;
	}
	
	.pay_box ul li.active span{
		
		border-left: 6px solid orangered;
	}
</style>

<template>
	
   <div id="pay">
	   <div class="pay">
		   <div class="pay_box">
			   <p>选择支付方式</p>
			   
			   <ul>
				   <li v-for="(item,index) in paydata" :class="{active:payindex==index}" @click="paypick(index)"> <!-- 展示数据并添加点击事件-->
					   <span></span>
					   {{item.name}}
				   </li>
				  
			   </ul>
			   
		   </div>
	   </div>
   </div>
	
</template>

<script>
		export default {
			name: 'pay',
	        props: ['text'], //接受从其他页面传过来的值

			data() {
	
				return {
	                payindex:"-1",
					paydata:[
						
					]
	
			}
			},
		
	
			components: {
				
			},
	
			methods: {
				paypick:function  (index) {
					this.payindex=index
					this.$emit('ifpayshow',this.payindex) //点击选项后操作父页面方法
				}
	
			},
			mounted: function() {
			 this.paydata=this.text //在这里接收父页面传过来的值
			 
			 console.log(this.paydata)
	
			}
			/**/
	
		}
</script>

<style>
</style>
