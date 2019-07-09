<template>
	<div class="helpDetails">
		<p class="p1">{{helpName}}</p>
		<p class="p3">{{data.content}}</p>
		<div class="divbtn">
			<button>已解决</button><span>&nbsp;&nbsp;&nbsp;</span><button>未解决</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'helpDetails',

		data() {

			return {
				data: [],
				helpName:''
				


			}

		},


		methods: {
			

		},
		computed: {


		},

		mounted: function() {
			var helpId=this.$route.query.id
			var helpname=this.$route.query.name
			this.helpName=helpname
			var that = this
			this.axios({
				method: 'get',

				url: '/wxapi/b/dealers/helps/'+helpId

			}).then(function(res) {
				that.data = res.data.data;

			
// 
// 				for (var i = 0; i < 2; i++) {
// 					that.dept.push(that.depts[i])
// 				}

				console.log(res.data)
				
			}).catch(function(err) {
				console.log(err)

			})
			


		}


	}
</script>

<style>
	.helpDetails {
		border-radius: 0.25rem;
		margin: 0.5rem;
		width: 17.75rem;
		min-height: 29.05rem;
		height: auto;
		background-color: white;
	}
	.divbtn{
		width: 8rem;
		margin: 0 auto;
	}
	.divbtn button{

		border-radius:0.3rem ;
	}
	.divbtn button:hover {
		background-color: pink;
	}

	.p1 {
		padding-top: 0.5rem;
		width: 100%;
		border-bottom: 0.025rem solid rgba(99, 99, 99, 0.3);
		padding-left: 0.65rem;
		padding-bottom: 0.3rem;
		height: 2rem;
		font-size: 0.75rem;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(0, 0, 0, 1);
	}
	
	.p3{
		font-size:0.65rem ;
		color:rgba(99,99,99,1);
		padding-left: 0.65rem;
	}
</style>
