<template>

	<div id="repassword">
		<header class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">

			<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">修改密码</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">

		</div>
		<div style="padding:0.5rem 0.5rem">
			<div style="background-color: white; border-radius:0.25rem; padding:0.5rem 0;">
				<ul class="after_sale_title">
					<li style="width: 1.1rem; height: 1.1rem;"><img style="width: 100%;" src="../../assets/img/myplace/myplace_settings.png"></li>
					<li style="line-height: 1rem; text-align: center; font-size: 1rem;  font-weight: 600;">修改密码</li>
					<div class="clearfix"></div>
				</ul>
				<div style="padding: 0.5rem;">
					<p style="width: 25%; margin-right: 4%; float: left; line-height: 2.2rem;text-align: right;font-size:0.7rem;">旧密码：</p>
					<input type="password" v-model="oldPassword" style="border: 1px solid #b1b1b1; height: 2.2rem; box-sizing: border-box; width: 70%; float: left; ">
					<div class="clearfix"></div>
				</div>

				<div style="padding: 0.5rem; margin-top: -0.5rem;">
					<p style="width: 25%; margin-right: 4%; float: left; line-height: 2.2rem;text-align: right;font-size:0.7rem;">新密码：</p>
					<input type="password" v-model="newPassword" style="border: 1px solid #b1b1b1; height: 2.2rem; box-sizing: border-box; width: 70%; float: left; ">
					<div class="clearfix"></div>
				</div>
				<div style="padding: 0.5rem; margin-top: -0.5rem;">
					<p style="width: 25%; margin-right: 4%; float: left; line-height: 2.2rem;text-align: right;font-size:0.7rem;">确认密码：</p>
					<input type="password" v-model="confirmPassword" style="border: 1px solid #b1b1b1; height: 2.2rem; box-sizing: border-box; width: 70%; float: left; ">
					<div class="clearfix"></div>
				</div>

			</div>
		</div>

		<div class="sure_to" @click="submitPassword()">确认</div>


	</div>

</template>

<script>
	export default {
		name: 'repassword',

		data() {

			return {
				oldPassword:'',
				newPassword:'',
				confirmPassword:''


			}

		},


		methods: {
			submitPassword(){
				var that = this
				this.axios({
					method: 'put',
					data: {
						oldPassword: this.oldPassword,
						newPassword: this.newPassword,
						confirmPassword: this.confirmPassword
			
					},
					url: '/wxapi/b/dealers/password'
				}).then(function(res) {
					console.log(res)
			
				}).catch(function(err) {
					console.log(err)
				})
			
			}

		},
		computed: {
			

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

	.clearfix {
		clear: both;
	}

	.mui-table-view-cell.mui-active {
		background-color: #0062CC;
	}

	.mui-table-view-cell {
		padding: 0.5rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		border-bottom: 1px solid #e0e0e0;

	}

	.mui-table-view-cell:after {
		height: 0px;
	}

	.mui_ul_li li {
		width: 48%;
		margin-top: 0.3rem;
		color: #a4a4a4;
	}

	.mui-table-view:before {
		height: 0px;
	}

	.mui-table-view:after {
		height: 0px;
	}


	.after_sale_title li {
		float: left;
		margin-left: 0.5rem;
		margin-bottom: 0.5rem;

	}

	.repassword {
		position: relative;
	}

	.sure_to {
		position: fixed;
		bottom: 1rem;
		width: 17.75rem;
		margin-left: 0.5rem;
		text-align: center;
		line-height: 2rem;
		height: 2rem;
		color: white;
		font-size: 0.7rem;
		background: linear-gradient(90deg, rgba(187, 175, 137, 1) 0%, rgba(127, 116, 91, 1) 100%);
		box-shadow: 0 0.175rem 0.5rem 0.05rem rgba(128, 117, 92, 0.41);
		border-radius: 0.25rem;
	}
</style>
