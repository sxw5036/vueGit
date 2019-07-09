<template>
	<div id="alertopen">
		<div class="alertnav" v-bind:style="{'opacity':tip.alertopacity}" @click="alertnone">
			<div class="alert" v-show="tip.Alert==true">
				<div class="tip  hint" v-show="tip.alertshow==3">
					<i class="layui-icon ">&#xe698;</i>
					<p>已加入购物车</p>
				</div>
				<!--1正确-->
				<div class="tip  true" v-show="tip.alertshow==1">
					<i class="layui-icon ">&#xe605;</i>
					<p>{{tip.alwarning}}</p>
				</div>
				<!--2警告-->
				<div class="tip  warning" v-show="tip.alertshow==2">
					<i class="layui-icon ">&#xe608;</i>
					<p>{{tip.alwarning}}</p>
				</div>
				<!--提示-->
				<div class="tip  wtip" v-show="tip.alertshow==4">

					<span>{{tip.alwarning}}</span>
				</div>
				<!--5加载-->
				<div class="tip  xhuan" style="background: rgba(00, 00, 00, 0.5);" v-show="tip.alertshow==5">
					<i><span class="mui-icon mui-icon-spinner icon"></span></i>
					<p style=" color: white;">{{tip.alwarning}}</p>
				</div>

				<div class="tip  inquiry" v-show="tip.alertshow==6">
					<p class="conter">{{tip.alwarning}}</p>
					<div class="end">
						<div class="item">
							<span @click="mynone"> 取消</span>
						</div>
						<div class="item">
							<span @click="mysure">确认</span>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

</template>

<script>
	export default {

		name: 'alertopen',

		data() {
			return {
				somedata: "66666666",
				tip: {
					"alertopacity": "0",
					"Alert": false,
					"alertshow": 2,
					"alwarning": "",
				}
			}
		},

		methods: {

			alerthide: function() {

				this.tip.alertopacity = 0
				this.tip.alwarning = ""
				this.tip.alertshow = 0
				this.tip.Alert = false

			},

			alertshow: function(index, tex, type, ind, word) {

				this.tip.alertopacity = 3
				this.tip.alertshow = index
				this.tip.Alert = true
				this.tip.alwarning = tex

				if(index !== 5) {
					setTimeout(() => {
						this.tip.alertopacity = 0
						this.tip.alwarning = ""
						this.tip.alertshow = 0
						this.tip.Alert = false

					}, 2000)
				}

			},

			alertnone: function() {

//				this.tip.alertopacity = 0
//				this.tip.alwarning = ""
//				this.tip.alertshow = 0
//				this.tip.Alert = false

			},

			mysure: function() {
				this.$emit('child-say', this.somedata);

			},

			mynone: function() {
				this.$emit('child-none', this.somedata);
			},

		},

		mounted: function() {

		}
	}
</script>

<style>
	.wtip {
		display: block;
		background: #000000;
		color: white;
		font-size: 0.6rem;
		height: 1rem;
		line-height: 1rem;
	}
	
	.alert .tip.wtip {
		padding: 0rem;
		background: none;
	}
	
	.alert .tip.wtip span {
		border-radius: 0.2rem;
		display: block;
		padding: 0.2rem 0.3rem;
		background: rgba(00, 00, 00, 0.5);
		margin: 0px auto;
		width: 6rem;
	}
</style>