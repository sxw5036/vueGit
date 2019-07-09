<template>

	<div class="addsite" v-show="show==true">
		<div class="addsiteNav">
			<div class="addsiteNav-title">
				选择地址
				<div class="but">
					<span @click="sureAddress">确认</span><small @click="cancel">取消</small>
				</div>
			</div>

			<div class="city-pick">
				<div class="item">
					<ul>
						<li v-for="(item , index) in province" :class="{active:provinceIndex==index}" @click="pickprovince(item.id,index)">{{item.name}}</li>

					</ul>
				</div>

				<div class="item ">
					<ul>
						<li v-for="(item , index) in city" :class="{active:cityIndex==index}" @click="pickdistrict(item.id,index)">{{item.name}}</li>

					</ul>
				</div>

				<div class="item districtst">
					<ul>
						<li v-for="(item , index) in district" :class="{active:districtIndex==index}" @click="districtpick(index)">{{item.name}}</li>

					</ul>
				</div>

			</div>

		</div>
	</div>

</template>

<script>
	export default {

		name: 'backtop',
		props: ['show'], //接受从其他页面传过来的值
		data() {
			return {

				province: [],
				city: [],
				district: [],
				cityCache: {}, //市缓存
				districtCache: {}, //县缓存
				cityIndex: '',
				provinceIndex: '',
				districtIndex: ''

			}
		},

		methods: {

			/*选择市*/

			pickprovince: function(id, index) {
				/*_this.city=res.data.data*/

				this.provinceIndex = index
				this.city = []
				this.district = []
				this.cityIndex = 0
				this.districtIndex = 0

				var _this = this
				var citycache = this.cityCache
				var cityshow;
				cityshow = citycache[id]

				if(!cityshow) {
					_this.axios({
						method: 'get',
						url: '/api/f/cities?parentId=' + id + ''

					}).then(function(res) {

						cityshow = res.data.data
						_this.cityCache[id] = cityshow
						_this.city = _this.cityCache[id]
						_this.pickdistrict(_this.city[0].id, 0)

					}).catch(function(err) {
//						console.log(err)

					})

				} else {
					this.city = cityshow
					this.pickdistrict(this.city[0].id, 0)
				}

				/*	_this.city = _this.cityCache[id]*/

				/*_this.pickdistrict(_this.city[0].id, 0)*/

				//this.pickdistrict(this.city[0].id,0)

			},

			/*选择区*/

			pickdistrict: function(id, index) {

				this.district = []
				this.districtIndex = 0
				this.cityIndex = index
				var _this = this

				var districtcache = this.districtCache
				var districtshow;

				districtshow = districtcache[id]

				if(!districtshow) {
					_this.axios({
						method: 'get',

						url: '/api/f/cities?parentId=' + id + ''

					}).then(function(res) {

						districtshow = res.data.data
						districtcache[id] = districtshow
						_this.district = districtshow

					}).catch(function(err) {
//						console.log(err)

					})

				} else {
					this.district = districtshow
				}

			},

			districtpick: function(index) {
				this.districtIndex = index

			},

			sureAddress: function() {

				var addressObj = this.district[this.districtIndex]
				this.$emit('sure', addressObj)

			},

			cancel: function() {

				this.$emit('cancel')
			}

		},

		mounted: function() {

			var _this = this

			_this.axios({
				method: 'get',

				//url: '//api/addresses/1234567890000'
				url: '/api/f/cities?levelType=1'

			}).then(function(res) {

				_this.province = res.data.data

			}).catch(function(err) {
//				console.log(err)

			})

			this.pickdistrict(110100, 0)
			this.pickprovince(110000, 0)

		}
	}
</script>

<style>

</style>