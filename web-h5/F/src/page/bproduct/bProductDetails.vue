<template>
	<div id="bProductDetails">
		<!-- 	<header  class="mui-bar mui-bar-nav " data-top='0' data-offset='150' data-duration='16' data-scrollby=".mui-scroll-wrapper">
					
					<a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a>
			<h1 class="mui-title">产品列表</h1>
		</header>
		<div style="width: 100%; height: 2.1rem;">
			
		</div> -->
		<div class="nav">
			<span @click="goto(1)" id="spjs"  ref='singleDom'>商品简述</span><span>|</span>
			<span @click="goto(2)"  id="spjs"  ref='singleDom1'>报价信息</span><span>|</span>
			<span @click="goto(3)"  id="spjs" ref='singleDom2' >产品详情</span>
		</div>
		<div class="content">
			<div class="contentsp listshow1" style="padding-top: 2rem;">
				<div class="sptop">

					<span class="zhongxian">—————————————————————</span><span style="margin: 0rem 0.45rem 0rem 0.55rem;">商品介绍</span><span
					 class="zhongxian">—————————————————————</span>
				</div>
				<div class="spbottom">
					<img :src="productDetails.wxCover" style="width: 100%; height: 14rem;" />
					<p class="p1">{{productDetails.name}}</p>
					<p><span class="s1">材质：<span>{{productDetails.productMaterial}}</span></span><span>颜色：<span>{{productDetails.productColor}}</span></span>
					</p>
					<p><span class="s1">类别：<span>{{productDetails.categoryName}}</span></span><span>风格：<span>{{productDetails.series}}</span></span>
					</p>
				</div>

			</div>
			<div class="contentbj listshow2">
				<div class="sptop" style="padding: 2rem 0;">
					<span class="zhongxian">—————————————————————</span><span style="margin: 0rem 0.45rem 0rem 0.55rem;">报价信息</span><span
					 class="zhongxian">—————————————————————</span>
				</div>
				<img :src="productDetails.wxOfferFiles.path" style="width: 100%; height: 21.5rem;" />
			</div>
			<div class="listshow3"></div>
			<div class="contentxq " style="margin: 1.8rem 0; ">
				<div class="sptop " style="margin: 0 auto; ">


					<span class="zhongxian">—————————————————————</span><span style="margin: 0rem 0.45rem 0rem 0.55rem;">产品详情</span><span
					 class="zhongxian">—————————————————————</span>
				</div>
				<div style="height: auto; width: 100%; margin-top: 1rem;">
					<img v-for="(chanpin,index ) in chanpinimg" :key='index' :src="chanpin.path" style="width: 100%; " />
				</div>
				

			</div>
		</div>
		<div class="btn">
			<button style="box-shadow:0px 0px 8px 1px rgba(218,218,218,1);
			height: 2.5rem;" @click="submit0()">取消</button><button
			 style="background:rgba(187,174,135,1); color: white;" @click="submit1()">推荐</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bProductDetails',

		data() {

			return {
				productDetails: [],
				chanpinimg: [],
				searchBarFixed:''

			}

		},


		methods: {
			goto(num) {
				var el = document.getElementsByClassName(`listshow${num}`)[0];

				if (this.showIndex == num) {
					this.showIndex = null;
				} else {
					this.showIndex = num;
				}
				this.$nextTick(function() {
					window.scrollTo({
						"behavior": "smooth",
						"top": el.offsetTop
					});
				})


			},
			submit0() {
				var productId = this.$route.query.id
				var that = this

				this.axios({
					method: 'put',

					url: '/wxapi/f/products/' + productId + '/0'


				}).then(function(res) {
					that.mui.toast("取消成功", {
						duration: 'long',
						type: 'div'
					})
					console.log(res)


				}).catch(function(err) {
					console.log(err)

				})
			},
			submit1() {
				var productId = this.$route.query.id
				var that = this

				this.axios({
					method: 'put',

					url: '/wxapi/f/products/' + productId + '/1'


				}).then(function(res) {
					that.mui.toast("推荐成功", {
						duration: 'long',
						type: 'div'
					})
					console.log(res)


				}).catch(function(err) {
					console.log(err)

				})
			},
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				var offsetTop = document.querySelector('#spjs').offsetTop
				console.log(scrollTop)
			
				if (scrollTop == 0 || scrollTop <450) {
					this.$refs.singleDom.style.color = 'rgba(187, 174, 135, 1)'
				} else {
					this.$refs.singleDom.style.color = 'black'
				}
				if (scrollTop >= 450  && scrollTop <970) {
					this.$refs.singleDom1.style.color = 'rgba(187, 174, 135, 1)'
				} else {
					this.$refs.singleDom1.style.color = 'black'
				}
				if (scrollTop >= 970  ) {
					this.$refs.singleDom2.style.color = 'rgba(187, 174, 135, 1)'
				} else {
					this.$refs.singleDom2.style.color = 'black'
				}
				
			}
		},
		destroyed () {
			window.removeEventListener('scroll', this.handleScroll,true)
		},
		mounted: function() {
			window.addEventListener('scroll', this.handleScroll,true)
			var productId = this.$route.query.id

			var that = this

			this.axios({
				method: 'get',

				url: '/wxapi/f/products/' + productId

			}).then(function(res) {

				console.log(res.data.data)
				that.productDetails = res.data.data;
				that.chanpinimg = res.data.data.productFiles;
				console.log(that.productDetails)
			}).catch(function(err) {
				console.log(err)

			})

		}
		/**/

	}
</script>

<style scoped="scoped">
	#bProductDetails {
		width: 100%;
		height: auto;
		position: absolute;
		background-color: white;
	}

	.nav {
		position: fixed;
		top: 0rem;
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		font-size: 0.625rem;
		color: rgba(51, 51, 51, 1);
		margin: 0 auto;
		width: 100%;
		padding: 0 1.825rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		background-color: white;
	}

	.nav span:hover {
		color: rgba(187, 174, 135, 1);
	}
	.current{
		color: rgba(187, 174, 135, 1);
	}

	/* nav结束
	*  */
	/* 内容开始 */


	.sptop {
		padding: 0.5rem 0rem 1rem 0rem;
		width: 17.3rem;
		margin: 0 auto;
		height: 0.575rem;
		line-height: 0.575rem;
		font-size: 0.575rem;
		color: rgba(99, 99, 99, 1);
	}

	.sptop>.zhongxian {
		display: inline-block;
		overflow: hidden;
		width: 6.9rem;
		color: rgba(99, 99, 99, 0.2);
	}

	.spbottom {
		margin-bottom: 0rem;
	}

	.spbottom>p {
		padding-left: 0.85rem;
		height: 0.875rem;
	}

	.spbottom .p1 {
		margin: 0.8rem 0rem;
		height: 0.75rem;
		font-size: 0.75rem;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 0.75rem;
	}

	.spbottom>p>.s1 {
		display: inline-block;
		width: 9rem;
	}

	.spbottom>p>span {
		font-size: 0.625rem;
		color: rgba(99, 99, 99, 1);
	}

	.spbottom>p>span>span {
		color: rgba(91, 146, 185, 1);
	}

	.contentxq img {
		vertical-align: top;
	}

	/* 内容结束 */
	.btn {

		width: 100%;
	}

	.btn button {
		padding: 0;
		line-height: 2.5rem;
		width: 9.375rem;
		height: 2.5rem;
		border: none;
		font-size: 0.8rem;
	}
</style>
