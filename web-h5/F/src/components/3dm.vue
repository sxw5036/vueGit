
<template>
	<div id="model">
	<div >
	
	 <model-three @on-load="spinShow=false" src="https://hujiulong.github.io/vue-3d-model/static/models/json/scene.json"></model-three>
	    <Spin size="large" fix v-if="spinShow"></Spin>
     </div>
	</div>
</template>

<script>
	//document.getElementById("vjs_video_420").className="video-js vjs-fluid vjs_video_420-dimensions vjs-controls-enabled vjs-workinghover vjs-v6 vjs-has-started vjs-paused  vjs-user-inactive"
    //static/models/ply/slotted_disk.ply
		
import { ModelThree } from 'vue-3d-model'

	export default {
		name: 'model',


		data() {

			return {
           
           spinShow:true,

			}
		},


		components: {
                ModelThree
		},

		methods: {


		

		},
		mounted: function() {

		}
		

	}
</script>

	
<style>
	
</style>